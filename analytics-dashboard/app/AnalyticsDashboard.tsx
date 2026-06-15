"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface PagePerformanceRow {
  site: string;
  page_path: string;
  page_category: string | null;
  views: number;
  cta_clicks: number;
  cta_contact: number;
  cta_quote: number;
  cta_phone: number;
  on_page_submits: number;
  attributed_leads: number;
}

interface Props {
  rows: PagePerformanceRow[];
  from: string;
  to: string;
  site: string;
  secretKey: string;
}

type SortKey =
  | keyof Pick<PagePerformanceRow, "views" | "cta_clicks" | "on_page_submits" | "attributed_leads">
  | "conversion";

const CATEGORY_OPTIONS = [
  { value: "lead_pages", label: "Neighborhood + Service areas" },
  { value: "neighborhood", label: "Neighborhood only" },
  { value: "service_area_city", label: "Service-area cities only" },
  { value: "fence_style", label: "Fence-style pages" },
  { value: "all", label: "All pages" },
];

function pct(numerator: number, denominator: number): string {
  if (!denominator) return "—";
  return `${((numerator / denominator) * 100).toFixed(1)}%`;
}

export default function AnalyticsDashboard({ rows, from, to, site, secretKey }: Props) {
  const [category, setCategory] = useState("lead_pages");
  const [sortKey, setSortKey] = useState<SortKey>("attributed_leads");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const filtered = useMemo(() => {
    let result = rows;
    if (category === "lead_pages") {
      result = rows.filter(
        (r) => r.page_category === "neighborhood" || r.page_category === "service_area_city",
      );
    } else if (category !== "all") {
      result = rows.filter((r) => r.page_category === category);
    }
    const withRate = result.map((r) => ({
      ...r,
      conversion: r.views ? r.attributed_leads / r.views : 0,
    }));
    withRate.sort((a, b) => {
      const av = a[sortKey] as number;
      const bv = b[sortKey] as number;
      return sortDir === "desc" ? bv - av : av - bv;
    });
    return withRate;
  }, [rows, category, sortKey, sortDir]);

  const totals = useMemo(() => {
    return filtered.reduce(
      (acc, r) => {
        acc.views += r.views;
        acc.cta += r.cta_clicks;
        acc.onPage += r.on_page_submits;
        acc.leads += r.attributed_leads;
        return acc;
      },
      { views: 0, cta: 0, onPage: 0, leads: 0 },
    );
  }, [filtered]);

  const chartData = useMemo(
    () =>
      filtered.slice(0, 12).map((r) => ({
        name: r.page_path.replace("/service-areas/", ""),
        Views: r.views,
        "CTA clicks": r.cta_clicks,
        Leads: r.attributed_leads,
      })),
    [filtered],
  );

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const sortArrow = (key: SortKey) => (sortKey === key ? (sortDir === "desc" ? " ▼" : " ▲") : "");

  return (
    <div className="space-y-6">
      <form
        method="GET"
        className="flex flex-wrap items-end gap-3 rounded-lg border border-gray-200 bg-white p-4"
      >
        <input type="hidden" name="key" value={secretKey} />
        <label className="flex flex-col text-sm">
          <span className="mb-1 text-gray-500">From</span>
          <input type="date" name="from" defaultValue={from} className="rounded border border-gray-300 px-2 py-1" />
        </label>
        <label className="flex flex-col text-sm">
          <span className="mb-1 text-gray-500">To</span>
          <input type="date" name="to" defaultValue={to} className="rounded border border-gray-300 px-2 py-1" />
        </label>
        <label className="flex flex-col text-sm">
          <span className="mb-1 text-gray-500">Site</span>
          <select name="site" defaultValue={site} className="rounded border border-gray-300 px-2 py-1">
            <option value="">All sites</option>
            <option value="myfence">myfence</option>
            <option value="seattlefence">seattlefence</option>
          </select>
        </label>
        <button type="submit" className="rounded bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
          Apply
        </button>
      </form>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <SummaryCard label="Page views" value={totals.views} />
        <SummaryCard label="CTA clicks" value={totals.cta} sub={`${pct(totals.cta, totals.views)} of views`} />
        <SummaryCard label="Attributed leads" value={totals.leads} sub={`${pct(totals.leads, totals.views)} conversion`} />
        <SummaryCard label="On-page submits" value={totals.onPage} />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm text-gray-500">Show:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded border border-gray-300 px-2 py-1 text-sm"
        >
          {CATEGORY_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="text-sm text-gray-500">{filtered.length} pages</span>
      </div>

      {chartData.length > 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h2 className="mb-4 text-sm font-semibold">Top pages by views</h2>
          <ResponsiveContainer width="100%" height={Math.max(240, chartData.length * 28)}>
            <BarChart data={chartData} layout="vertical" margin={{ left: 24, right: 16 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" allowDecimals={false} />
              <YAxis type="category" dataKey="name" width={180} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Views" fill="#94a3b8" />
              <Bar dataKey="CTA clicks" fill="#60a5fa" />
              <Bar dataKey="Leads" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : null}

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-3 py-2">Page</th>
              <th className="px-3 py-2">Site</th>
              <th className="px-3 py-2">Category</th>
              <th className="cursor-pointer px-3 py-2 text-right" onClick={() => toggleSort("views")}>
                Views{sortArrow("views")}
              </th>
              <th className="cursor-pointer px-3 py-2 text-right" onClick={() => toggleSort("cta_clicks")}>
                CTA clicks{sortArrow("cta_clicks")}
              </th>
              <th className="px-3 py-2 text-right">CTR</th>
              <th className="cursor-pointer px-3 py-2 text-right" onClick={() => toggleSort("on_page_submits")}>
                On-page{sortArrow("on_page_submits")}
              </th>
              <th className="cursor-pointer px-3 py-2 text-right" onClick={() => toggleSort("attributed_leads")}>
                Leads{sortArrow("attributed_leads")}
              </th>
              <th className="cursor-pointer px-3 py-2 text-right" onClick={() => toggleSort("conversion")}>
                Conv.{sortArrow("conversion")}
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={`${r.site}:${r.page_path}`} className="border-t border-gray-100">
                <td className="px-3 py-2 font-mono text-xs">{r.page_path}</td>
                <td className="px-3 py-2">{r.site}</td>
                <td className="px-3 py-2 text-gray-500">{r.page_category ?? "—"}</td>
                <td className="px-3 py-2 text-right">{r.views}</td>
                <td className="px-3 py-2 text-right">{r.cta_clicks}</td>
                <td className="px-3 py-2 text-right">{pct(r.cta_clicks, r.views)}</td>
                <td className="px-3 py-2 text-right">{r.on_page_submits}</td>
                <td className="px-3 py-2 text-right font-semibold">{r.attributed_leads}</td>
                <td className="px-3 py-2 text-right">{pct(r.attributed_leads, r.views)}</td>
              </tr>
            ))}
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-3 py-8 text-center text-gray-500">
                  No events recorded for this range yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SummaryCard({ label, value, sub }: { label: string; value: number; sub?: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-bold">{value.toLocaleString()}</div>
      {sub ? <div className="mt-0.5 text-xs text-gray-500">{sub}</div> : null}
    </div>
  );
}
