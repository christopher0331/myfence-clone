import { createHash } from "crypto";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Fail-soft logger for bot-gate-suppressed lead submissions.
 * Writes to the shared `filtered_submissions` table (site = 'myfence') with the
 * SERVICE-ROLE key only (server-side). Never throws, never emails, never
 * changes the caller's response. Raw IPs are never stored — only a salted SHA-256.
 */
const SITE = "myfence";
const MAX_PAYLOAD_CHARS = 20_000;

let cached: SupabaseClient | null | undefined;

function serviceClient(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  cached =
    url && key
      ? createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
      : null;
  return cached;
}

export function hashIp(ip: string): string | null {
  const salt = process.env.FILTERED_IP_SALT;
  if (!ip || ip === "unknown" || !salt) return null;
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

function safePayload(body: Record<string, unknown>): Record<string, unknown> {
  try {
    const json = JSON.stringify(body ?? {});
    if (json.length <= MAX_PAYLOAD_CHARS) return JSON.parse(json);
    return { _truncated: true, _preview: json.slice(0, MAX_PAYLOAD_CHARS) };
  } catch {
    return { _unserializable: true };
  }
}

function pageUrlFrom(req: Request, body: Record<string, unknown>): string | null {
  const fromBody = ["page_url", "pageUrl", "source_url", "sourceUrl", "url"]
    .map((k) => body?.[k])
    .find((v) => typeof v === "string" && v.length > 0) as string | undefined;
  return (fromBody || req.headers.get("referer") || null)?.slice(0, 2000) ?? null;
}

export async function logFilteredSubmission(
  req: Request,
  body: Record<string, unknown>,
  reason: string,
  ip: string,
): Promise<void> {
  try {
    const client = serviceClient();
    if (!client) {
      console.warn("[bot-gate] filtered_submissions logging skipped (missing env)");
      return;
    }
    const { error } = await client.from("filtered_submissions").insert({
      reason,
      site: SITE,
      page_url: pageUrlFrom(req, body),
      user_agent: req.headers.get("user-agent")?.slice(0, 1000) ?? null,
      ip_hash: hashIp(ip),
      payload: safePayload(body),
    });
    if (error) console.warn(`[bot-gate] filtered_submissions insert failed: ${error.message}`);
  } catch (err) {
    console.warn("[bot-gate] filtered_submissions insert threw", err);
  }
}
