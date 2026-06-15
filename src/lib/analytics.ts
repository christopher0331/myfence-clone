/**
 * Client-side analytics for per-page lead measurement.
 *
 * Records three event types to the `track-event` Supabase edge function:
 *  - page_view   (fired on every route change)
 *  - cta_click   (Contact / Quote / Call CTAs)
 *  - form_submit (successful lead form submissions)
 *
 * Multi-site aware: every event carries a `site` id and each form a globally unique
 * `form_id` (e.g. "myfence:home-contact"), so overlapping neighborhood / service-area
 * slugs across company sites (myfence.com, seattlefence.com) stay correctly separated.
 *
 * Attribution: when a visitor lands on a neighborhood / service-area / fence-style page,
 * that path is remembered as the session "origin". It is then attached to later CTA clicks
 * and to the final form submission (even when the form lives on /contact or /quote), so a
 * lead can be credited back to the page that actually drove it.
 */

const SUPABASE_URL = "https://tlsayvwmcqnmdoairbeb.supabase.co";
const TRACK_ENDPOINT = `${SUPABASE_URL}/functions/v1/track-event`;

/** Logical site identifier. Override per-deployment via NEXT_PUBLIC_SITE_ID. */
export const SITE_ID = String(process.env.NEXT_PUBLIC_SITE_ID ?? "myfence").trim() || "myfence";

const SESSION_KEY = "mf_session_id";
const ORIGIN_KEY = "mf_origin";
// Origin attribution only survives for a single visit window.
const ORIGIN_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours

export type CtaType = "contact" | "quote" | "phone";
export type FormType = "contact" | "quote" | "referral" | "discount";

export type PageCategory =
  | "home"
  | "contact"
  | "quote"
  | "fence_style"
  | "neighborhood"
  | "service_area_city"
  | "service_area_index"
  | "other";

// Page categories that represent a "lead source" worth attributing a downstream lead to.
const SOURCE_CATEGORIES: ReadonlySet<PageCategory> = new Set<PageCategory>([
  "neighborhood",
  "service_area_city",
  "fence_style",
]);

interface TrackPayload {
  event_type: "page_view" | "cta_click" | "form_submit";
  page_path: string;
  page_url?: string;
  page_category?: string;
  cta_type?: string;
  cta_destination?: string;
  form_type?: string;
  form_id?: string;
  origin_path?: string;
  session_id?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  site: string;
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function uuid(): string {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
  } catch {
    // fall through
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/** Stable anonymous session id, persisted for the browser session. */
export function getSessionId(): string {
  if (!isBrowser()) return "";
  try {
    let id = window.sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = uuid();
      window.sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
}

/** Classify a pathname into a coarse page category used for reporting. */
export function classifyPath(pathname: string): PageCategory {
  if (!pathname || pathname === "/") return "home";
  const path = pathname.split("?")[0].split("#")[0];
  if (path === "/contact") return "contact";
  if (path === "/quote") return "quote";
  if (path.startsWith("/fence-styles")) return "fence_style";
  if (path.startsWith("/service-areas")) {
    const segments = path.split("/").filter(Boolean); // ["service-areas", city?, neighborhood?]
    if (segments.length >= 3) return "neighborhood";
    if (segments.length === 2) return "service_area_city";
    return "service_area_index";
  }
  return "other";
}

function normalizePath(pathname: string): string {
  if (!pathname) return "/";
  return pathname.split("?")[0].split("#")[0] || "/";
}

/** Remember a page as the session attribution origin. */
export function setOriginPath(path: string): void {
  if (!isBrowser() || !path) return;
  try {
    window.sessionStorage.setItem(ORIGIN_KEY, JSON.stringify({ path, ts: Date.now() }));
  } catch {
    // ignore storage failures
  }
}

/** Read the current attribution origin, if one was set recently. */
export function getOriginPath(): string {
  if (!isBrowser()) return "";
  try {
    const raw = window.sessionStorage.getItem(ORIGIN_KEY);
    if (!raw) return "";
    const parsed = JSON.parse(raw) as { path?: string; ts?: number };
    if (!parsed?.path || !parsed?.ts) return "";
    if (Date.now() - parsed.ts > ORIGIN_TTL_MS) return "";
    return parsed.path;
  } catch {
    return "";
  }
}

function getUtmParams(): Pick<TrackPayload, "utm_source" | "utm_medium" | "utm_campaign"> {
  if (!isBrowser()) return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const out: Record<string, string> = {};
    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const campaign = params.get("utm_campaign");
    if (source) out.utm_source = source;
    if (medium) out.utm_medium = medium;
    if (campaign) out.utm_campaign = campaign;
    return out;
  } catch {
    return {};
  }
}

function send(payload: TrackPayload): void {
  if (!isBrowser()) return;
  try {
    const body = JSON.stringify(payload);
    // text/plain keeps sendBeacon CORS-preflight-free.
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([body], { type: "text/plain" });
      if (navigator.sendBeacon(TRACK_ENDPOINT, blob)) return;
    }
    void fetch(TRACK_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // analytics must never break the page
  }
}

/** Fire a page_view and, for lead-source pages, set the attribution origin. */
export function trackPageView(pathname: string): void {
  if (!isBrowser()) return;
  const path = normalizePath(pathname);
  const category = classifyPath(path);
  if (SOURCE_CATEGORIES.has(category)) {
    setOriginPath(path);
  }
  send({
    event_type: "page_view",
    site: SITE_ID,
    page_path: path,
    page_url: window.location.href,
    page_category: category,
    origin_path: getOriginPath() || undefined,
    session_id: getSessionId(),
    referrer: document.referrer || undefined,
    ...getUtmParams(),
  });
}

/** Fire a cta_click (Contact / Quote / Call). */
export function trackCtaClick(args: { ctaType: CtaType; ctaDestination?: string }): void {
  if (!isBrowser()) return;
  const path = normalizePath(window.location.pathname);
  send({
    event_type: "cta_click",
    site: SITE_ID,
    page_path: path,
    page_url: window.location.href,
    page_category: classifyPath(path),
    cta_type: args.ctaType,
    cta_destination: args.ctaDestination,
    origin_path: getOriginPath() || undefined,
    session_id: getSessionId(),
  });
}

/** Globally unique form identifier, namespaced by site (e.g. "myfence:home-contact"). */
export function formId(formKey: string): string {
  return `${SITE_ID}:${formKey}`;
}

// Short per-site code used as the SKU prefix (myfence -> MF, seattlefence -> SF).
const SITE_PREFIXES: Record<string, string> = {
  myfence: "MF",
  seattlefence: "SF",
};

function sitePrefix(): string {
  return SITE_PREFIXES[SITE_ID] ?? SITE_ID.slice(0, 2).toUpperCase();
}

/**
 * Derive a stable, human-readable SKU for a page's contact form from its URL, e.g.
 *   /service-areas/bellevue                       -> MF-SA-BELLEVUE
 *   /service-areas/bonney-lake/upper-tehaleh      -> MF-NB-BONNEY-LAKE-UPPER-TEHALEH
 * Deterministic, so new pages get a SKU automatically with no registry to maintain.
 */
export function deriveFormSku(pathname?: string): string {
  const path = normalizePath(pathname ?? (isBrowser() ? window.location.pathname : "/"));
  const segments = path.split("/").filter(Boolean);
  const prefix = sitePrefix();
  if (segments[0] === "service-areas") {
    const rest = segments.slice(1).map((s) => s.toUpperCase());
    if (rest.length >= 2) return `${prefix}-NB-${rest.join("-")}`;
    if (rest.length === 1) return `${prefix}-SA-${rest[0]}`;
    return `${prefix}-SA-INDEX`;
  }
  const slug = segments.join("-").toUpperCase() || "HOME";
  return `${prefix}-PG-${slug}`;
}

function attributionFor(idValue: string): { site: string; formId: string; originPage: string } {
  return { site: SITE_ID, formId: idValue, originPage: getOriginPath() };
}

function sourcePageFor(idValue: string): string {
  if (!isBrowser()) return "";
  const parts = [window.location.href, `site=${SITE_ID}`, `form=${idValue}`];
  const origin = getOriginPath();
  if (origin && origin !== normalizePath(window.location.pathname)) {
    parts.push(`origin=${origin}`);
  }
  return parts.join(" | ");
}

/** Fire a form_submit on successful lead submission. Pass `formId` to override the default. */
export function trackFormSubmit(
  formKey: string,
  args?: { formType?: FormType; formId?: string },
): void {
  if (!isBrowser()) return;
  const path = normalizePath(window.location.pathname);
  send({
    event_type: "form_submit",
    site: SITE_ID,
    page_path: path,
    page_url: window.location.href,
    page_category: classifyPath(path),
    form_type: args?.formType,
    form_id: args?.formId ?? formId(formKey),
    origin_path: getOriginPath() || undefined,
    session_id: getSessionId(),
  });
}

/** Structured lead attribution to forward to the CRM/webhook payload. */
export function getLeadAttribution(formKey: string): {
  site: string;
  formId: string;
  originPage: string;
} {
  return attributionFor(formId(formKey));
}

/** Same as getLeadAttribution but for an explicit id/SKU (e.g. a derived page SKU). */
export function getLeadAttributionById(idValue: string): {
  site: string;
  formId: string;
  originPage: string;
} {
  return attributionFor(idValue);
}

/**
 * Build the `sourcePage` string sent to the legacy email/webhook functions, annotated
 * with site, form id, and (when available) the attributed origin page. Falls back to the
 * current URL on the server.
 */
export function buildSourcePage(formKey: string): string {
  return sourcePageFor(formId(formKey));
}

/** Same as buildSourcePage but for an explicit id/SKU. */
export function buildSourcePageById(idValue: string): string {
  return sourcePageFor(idValue);
}
