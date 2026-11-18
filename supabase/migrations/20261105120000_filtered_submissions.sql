-- Shared log of bot-gate-suppressed lead submissions (MyFence + Seattle Fence).
-- APPLY MANUALLY in the Supabase SQL editor; not auto-applied by deploys.
create extension if not exists pgcrypto;

create table if not exists public.filtered_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  reason text,
  site text,
  page_url text,
  user_agent text,
  ip_hash text,
  payload jsonb
);

create index if not exists filtered_submissions_site_created_at_idx
  on public.filtered_submissions (site, created_at desc);

-- RLS on, no policies: only the service role (bypasses RLS) can read/write.
alter table public.filtered_submissions enable row level security;
revoke all on public.filtered_submissions from anon, authenticated;
