// Generates a CSV of every unique form id / SKU across the site.
//
// Two kinds of ids:
//  1. Per-page SKUs (deriveFormSku) for the ServiceAreaContactForm rendered inside
//     LeadCaptureTabs on service-area city + neighborhood pages.
//  2. Named site-wide forms namespaced by site id (e.g. "myfence:home-contact").
//
// "has_form" is resolved by statically following each route's local component
// imports and checking whether LeadCaptureTabs ends up in the render tree, so
// neighborhood pages that were never migrated are correctly excluded.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SITE_PREFIX = "MF"; // myfence
const SITE_ID = "myfence";
const BASE_URL = "https://myfence.com";

function normalizePath(p) {
  return (p.split("?")[0].split("#")[0]) || "/";
}

// Mirror of src/lib/analytics.ts deriveFormSku().
function deriveFormSku(pathname) {
  const segments = normalizePath(pathname).split("/").filter(Boolean);
  if (segments[0] === "service-areas") {
    const rest = segments.slice(1).map((s) => s.toUpperCase());
    if (rest.length >= 2) return `${SITE_PREFIX}-NB-${rest.join("-")}`;
    if (rest.length === 1) return `${SITE_PREFIX}-SA-${rest[0]}`;
    return `${SITE_PREFIX}-SA-INDEX`;
  }
  const slug = segments.join("-").toUpperCase() || "HOME";
  return `${SITE_PREFIX}-PG-${slug}`;
}

function resolveImport(imp) {
  if (!imp.startsWith("@/")) return null;
  const base = path.join(ROOT, "src", imp.slice(2));
  const candidates = [
    `${base}.tsx`,
    `${base}.ts`,
    path.join(base, "index.tsx"),
    path.join(base, "index.ts"),
  ];
  return candidates.find((c) => fs.existsSync(c)) || null;
}

const formMemo = new Map();
function hasForm(file, depth = 0) {
  if (!file) return false;
  if (formMemo.has(file)) return formMemo.get(file);
  if (depth > 5) return false;
  formMemo.set(file, false); // guard against cycles
  let text;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch {
    return false;
  }
  if (text.includes("LeadCaptureTabs")) {
    formMemo.set(file, true);
    return true;
  }
  const importRe = /import\s+[^;]*?from\s+["'](@\/[^"']+)["']/g;
  let m;
  while ((m = importRe.exec(text))) {
    const resolved = resolveImport(m[1]);
    if (resolved && hasForm(resolved, depth + 1)) {
      formMemo.set(file, true);
      return true;
    }
  }
  return formMemo.get(file);
}

// Walk the service-areas app routes.
const SA_DIR = path.join(ROOT, "src", "app", "service-areas");
const routes = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name === "page.tsx") {
      const rel = path.relative(SA_DIR, dir);
      const segments = rel ? rel.split(path.sep) : [];
      // Skip dynamic param routes ([city], [neighborhood]) in the per-URL listing.
      if (segments.some((s) => s.startsWith("["))) continue;
      const urlPath = "/service-areas" + (rel ? "/" + segments.join("/") : "");
      routes.push({ urlPath, file: full, depth: segments.length });
    }
  }
}
walk(SA_DIR);
routes.sort((a, b) => a.urlPath.localeCompare(b.urlPath));

function titleize(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function describeRoute(urlPath, category) {
  const segments = urlPath.split("/").filter(Boolean).slice(1); // drop "service-areas"
  if (category === "service_area_city") return `${titleize(segments[0])} (service area) contact form`;
  if (category === "neighborhood") {
    return `${titleize(segments[1])}, ${titleize(segments[0])} (neighborhood) contact form`;
  }
  return "Service areas index";
}

const rows = [];
for (const r of routes) {
  const category =
    r.depth === 0 ? "service_area_index" : r.depth === 1 ? "service_area_city" : "neighborhood";
  const present = hasForm(r.file);
  rows.push({
    form_id: present ? deriveFormSku(r.urlPath) : "",
    site: SITE_ID,
    form_type: present ? "contact" : "",
    page_category: category,
    page_path: r.urlPath,
    page_url: BASE_URL + r.urlPath,
    has_form: present ? "yes" : "no",
    description: describeRoute(r.urlPath, category),
    component: "ServiceAreaContactForm (LeadCaptureTabs)",
  });
}

// Named site-wide forms (namespaced by site id).
const namedForms = [
  { key: "home-contact", type: "contact", where: "Home page contact form", path: "/" },
  { key: "inline-contact", type: "contact", where: "Home inline contact section", path: "/" },
  { key: "contact-page", type: "contact", where: "Contact page", path: "/contact" },
  { key: "inline-quote", type: "quote", where: "Inline quote form (city pages, etc.)", path: "(multiple)" },
  { key: "quote-modal", type: "quote", where: "Global quote modal", path: "(global)" },
  { key: "referral", type: "referral", where: "Referrals page", path: "/referrals" },
  { key: "discount-wheel", type: "discount", where: "Discounts spin-the-wheel", path: "/discounts" },
  { key: "discount-already-played", type: "quote", where: "Discounts (already played)", path: "/discounts" },
];
for (const f of namedForms) {
  rows.push({
    form_id: `${SITE_ID}:${f.key}`,
    site: SITE_ID,
    form_type: f.type,
    page_category: "named_form",
    page_path: f.path,
    page_url: f.path.startsWith("/") ? BASE_URL + f.path : f.path,
    has_form: "yes",
    description: f.where,
    component: f.where,
  });
}

const header = [
  "form_id",
  "site",
  "form_type",
  "page_category",
  "page_path",
  "page_url",
  "has_form",
  "description",
  "component",
];
function csvCell(v) {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
const csv = [header.join(",")]
  .concat(rows.map((row) => header.map((h) => csvCell(row[h])).join(",")))
  .join("\n");

const outPath = path.join(ROOT, "form-ids.csv");
fs.writeFileSync(outPath, csv + "\n", "utf8");

// ---------------------------------------------------------------------------
// Supabase migration: public.form_registry reference table, seeded with every
// id (rows that actually have a form_id). Idempotent upserts so re-running the
// generator after adding pages keeps a single authoritative migration.
// ---------------------------------------------------------------------------
const registryRows = rows.filter((r) => r.form_id);
function sqlStr(v) {
  if (v === null || v === undefined || v === "") return "null";
  return `'${String(v).replace(/'/g, "''")}'`;
}
const values = registryRows
  .map(
    (r) =>
      `  (${sqlStr(r.form_id)}, ${sqlStr(r.site)}, ${sqlStr(r.form_type)}, ${sqlStr(
        r.page_category,
      )}, ${sqlStr(r.page_path)}, ${sqlStr(r.page_url)}, ${sqlStr(r.description)})`,
  )
  .join(",\n");

const migration = `-- Form ID reference registry.
-- One row per unique lead-form id / SKU across the company sites, so the CRM
-- (and the client) can resolve an incoming form id to the page/form that
-- produced it. Non-sensitive reference data: readable with the anon key.
--
-- Generated by scripts/generate-form-ids.mjs. To refresh after adding pages,
-- re-run the generator and apply the updated migration (upserts are idempotent).

create table if not exists public.form_registry (
  form_id       text primary key,
  site          text not null default 'myfence',
  form_type     text not null,
  page_category text,
  page_path     text,
  page_url      text,
  description   text,
  is_active     boolean not null default true,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

comment on table public.form_registry is
  'Reference table mapping each unique lead-form id/SKU to the page/form it belongs to. Used by the CRM for lead attribution.';

alter table public.form_registry enable row level security;

-- Public read access (reference data only; no PII).
drop policy if exists "form_registry public read" on public.form_registry;
create policy "form_registry public read"
  on public.form_registry
  for select
  to anon, authenticated
  using (true);

insert into public.form_registry
  (form_id, site, form_type, page_category, page_path, page_url, description)
values
${values}
on conflict (form_id) do update set
  site          = excluded.site,
  form_type     = excluded.form_type,
  page_category = excluded.page_category,
  page_path     = excluded.page_path,
  page_url      = excluded.page_url,
  description   = excluded.description,
  is_active     = true,
  updated_at    = now();
`;

const migrationPath = path.join(
  ROOT,
  "supabase",
  "migrations",
  "20260615130000_form_registry.sql",
);
fs.writeFileSync(migrationPath, migration, "utf8");
console.log(`Wrote ${migrationPath} (${registryRows.length} seeded ids)`);

const withForm = rows.filter((r) => r.has_form === "yes" && r.page_category !== "named_form").length;
const without = rows.filter((r) => r.has_form === "no").length;
console.log(`Wrote ${outPath}`);
console.log(`Total rows: ${rows.length}`);
console.log(`Service-area/neighborhood pages WITH SKU form: ${withForm}`);
console.log(`Service-area pages WITHOUT form (not migrated): ${without}`);
console.log(`Named site-wide forms: ${namedForms.length}`);
if (without > 0) {
  console.log("\nPages still missing the SKU contact form:");
  for (const r of rows.filter((x) => x.has_form === "no")) console.log("  " + r.page_path);
}
