import { createClient } from "@supabase/supabase-js";
import AnalyticsDashboard, { type PagePerformanceRow } from "./AnalyticsDashboard";

// Always render fresh: reads live data and is gated by a secret.
export const dynamic = "force-dynamic";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://tlsayvwmcqnmdoairbeb.supabase.co";

function toDateString(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function firstParam(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const secret = process.env.ANALYTICS_DASHBOARD_SECRET;
  const providedKey = firstParam(params.key);

  if (!secret) {
    return (
      <Shell>
        <p className="text-gray-500">
          Set <code>ANALYTICS_DASHBOARD_SECRET</code> in the environment to enable this dashboard.
        </p>
      </Shell>
    );
  }

  if (providedKey !== secret) {
    return (
      <Shell>
        <p className="text-gray-500">
          Unauthorized. Append <code>?key=YOUR_SECRET</code> to the URL.
        </p>
      </Shell>
    );
  }

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    return (
      <Shell>
        <p className="text-gray-500">
          Set <code>SUPABASE_SERVICE_ROLE_KEY</code> in the environment to load analytics data.
        </p>
      </Shell>
    );
  }

  const now = new Date();
  const defaultFrom = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const from = firstParam(params.from) || toDateString(defaultFrom);
  const to = firstParam(params.to) || toDateString(now);
  const site = firstParam(params.site);

  const startTs = new Date(`${from}T00:00:00.000Z`).toISOString();
  const endTs = new Date(`${to}T23:59:59.999Z`).toISOString();

  const supabase = createClient(SUPABASE_URL, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase.rpc("get_page_performance", {
    start_ts: startTs,
    end_ts: endTs,
    p_site: site || null,
  });

  if (error) {
    return (
      <Shell>
        <p className="text-red-600">Failed to load analytics: {error.message}</p>
      </Shell>
    );
  }

  const rows: PagePerformanceRow[] = (data ?? []).map((r: Record<string, unknown>) => ({
    site: String(r.site ?? ""),
    page_path: String(r.page_path ?? ""),
    page_category: r.page_category != null ? String(r.page_category) : null,
    views: Number(r.views ?? 0),
    cta_clicks: Number(r.cta_clicks ?? 0),
    cta_contact: Number(r.cta_contact ?? 0),
    cta_quote: Number(r.cta_quote ?? 0),
    cta_phone: Number(r.cta_phone ?? 0),
    on_page_submits: Number(r.on_page_submits ?? 0),
    attributed_leads: Number(r.attributed_leads ?? 0),
  }));

  return (
    <Shell>
      <AnalyticsDashboard rows={rows} from={from} to={to} site={site} secretKey={providedKey} />
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-1 text-3xl font-bold">Page Performance</h1>
      <p className="mb-6 text-sm text-gray-500">
        Views, CTA clicks, and lead attribution per page across MyFence.com and SeattleFence.com.
        Leads are credited to the page a visitor started on (their origin), even when the form is
        submitted on /contact or /quote.
      </p>
      {children}
    </div>
  );
}
