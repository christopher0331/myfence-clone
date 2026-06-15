-- Per-page lead analytics: raw event log for page views, CTA clicks, and form submissions.
-- Multi-site aware: the same neighborhood / service-area slugs can exist on more than one
-- company website (e.g. myfence.com and seattlefence.com), so every row is scoped by `site`
-- and each form carries a globally unique `form_id` (e.g. "myfence:home-contact").

CREATE TABLE IF NOT EXISTS public.page_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  site text NOT NULL DEFAULT 'myfence',
  event_type text NOT NULL CHECK (event_type IN ('page_view', 'cta_click', 'form_submit')),
  page_path text NOT NULL DEFAULT '',
  page_url text,
  page_category text,
  cta_type text,
  cta_destination text,
  form_type text,
  form_id text,
  origin_path text,
  session_id text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  user_agent text
);

CREATE INDEX IF NOT EXISTS page_events_created_at_idx ON public.page_events (created_at);
CREATE INDEX IF NOT EXISTS page_events_page_path_idx ON public.page_events (page_path);
CREATE INDEX IF NOT EXISTS page_events_event_type_idx ON public.page_events (event_type);
CREATE INDEX IF NOT EXISTS page_events_origin_path_idx ON public.page_events (origin_path);
CREATE INDEX IF NOT EXISTS page_events_site_idx ON public.page_events (site);

-- Lock the table down: RLS is enabled with NO policies, so the anon/auth roles cannot
-- read or write. Only the service role (used by the track-event edge function for inserts
-- and by the dashboard server route for reads) bypasses RLS.
ALTER TABLE public.page_events ENABLE ROW LEVEL SECURITY;

-- Per-page performance aggregates over a time window, optionally filtered by site.
-- `attributed_leads` credits a page when a lead later submits a form elsewhere
-- (e.g. on /contact) but carried this page as its origin_path.
CREATE OR REPLACE FUNCTION public.get_page_performance(
  start_ts timestamptz,
  end_ts timestamptz,
  p_site text DEFAULT NULL
)
RETURNS TABLE (
  site text,
  page_path text,
  page_category text,
  views bigint,
  cta_clicks bigint,
  cta_contact bigint,
  cta_quote bigint,
  cta_phone bigint,
  on_page_submits bigint,
  attributed_leads bigint
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  WITH ev AS (
    SELECT *
    FROM public.page_events
    WHERE created_at >= start_ts
      AND created_at < end_ts
      AND (p_site IS NULL OR site = p_site)
  ),
  by_page AS (
    SELECT
      site,
      page_path,
      max(page_category) AS page_category,
      count(*) FILTER (WHERE event_type = 'page_view') AS views,
      count(*) FILTER (WHERE event_type = 'cta_click') AS cta_clicks,
      count(*) FILTER (WHERE event_type = 'cta_click' AND cta_type = 'contact') AS cta_contact,
      count(*) FILTER (WHERE event_type = 'cta_click' AND cta_type = 'quote') AS cta_quote,
      count(*) FILTER (WHERE event_type = 'cta_click' AND cta_type = 'phone') AS cta_phone,
      count(*) FILTER (WHERE event_type = 'form_submit') AS on_page_submits
    FROM ev
    GROUP BY site, page_path
  ),
  attributed AS (
    SELECT site, origin_path AS page_path, count(*) AS attributed_leads
    FROM ev
    WHERE event_type = 'form_submit'
      AND origin_path IS NOT NULL
      AND origin_path <> ''
    GROUP BY site, origin_path
  )
  SELECT
    p.site,
    p.page_path,
    p.page_category,
    p.views,
    p.cta_clicks,
    p.cta_contact,
    p.cta_quote,
    p.cta_phone,
    p.on_page_submits,
    coalesce(a.attributed_leads, 0) AS attributed_leads
  FROM by_page p
  LEFT JOIN attributed a ON a.site = p.site AND a.page_path = p.page_path
  ORDER BY p.views DESC;
$$;
