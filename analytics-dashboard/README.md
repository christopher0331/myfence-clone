# MyFence Analytics Dashboard

Standalone viewer for the `page_events` analytics table. Deploy this as its **own** project
(separate from the main website) on a subdomain such as `analytics.myfence.com`.

It is read-only: it never writes data and is completely independent of the lead/CRM pipeline.
Form IDs continue to reach the CRM via the main site's `send-website-lead-webhook` function
regardless of this dashboard.

## Local development

```bash
cd analytics-dashboard
npm install
cp .env.example .env.local   # fill in the values
npm run dev                  # http://localhost:3030/?key=YOUR_SECRET
```

## Environment variables

| Variable | Description |
| --- | --- |
| `SUPABASE_URL` | Supabase project URL (same project as myfence.com). |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key, server-only. Reads aggregated analytics. |
| `ANALYTICS_DASHBOARD_SECRET` | Access secret; view at `/?key=THIS_VALUE`. |

## Deploy (Vercel)

1. Create a **new** Vercel project pointing at this repo.
2. Set the project's **Root Directory** to `analytics-dashboard`.
3. Add the three env vars above.
4. Add the domain `analytics.myfence.com`.

The main website is unaffected: its `/admin/analytics` route has been removed, and this folder is
excluded from the main app's TypeScript build.
