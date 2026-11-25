// Fail-soft logger for bot-gate-suppressed submissions in edge functions.
// Uses SUPABASE_SERVICE_ROLE_KEY (auto-provided to edge functions). Never throws.
import { clientIpFromHeaders } from "./formBotGate.ts";

async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function logFilteredSubmission(
  req: Request,
  body: Record<string, unknown>,
  reason: string | undefined,
): Promise<void> {
  try {
    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) return;
    const salt = Deno.env.get("FILTERED_IP_SALT");
    const ip = clientIpFromHeaders(req.headers);
    const ip_hash = salt && ip && ip !== "unknown" ? await sha256Hex(`${salt}:${ip}`) : null;
    const pageUrl =
      (["page_url", "pageUrl", "source_url", "sourceUrl", "url"]
        .map((k) => body?.[k])
        .find((v) => typeof v === "string" && v) as string | undefined) ||
      req.headers.get("referer");
    let payload: unknown = body ?? {};
    const json = JSON.stringify(payload);
    if (json.length > 20000) payload = { _truncated: true, _preview: json.slice(0, 20000) };
    const res = await fetch(`${url}/rest/v1/filtered_submissions`, {
      method: "POST",
      headers: {
        apikey: key,
        authorization: `Bearer ${key}`,
        "content-type": "application/json",
        prefer: "return=minimal",
      },
      body: JSON.stringify({
        reason: reason ?? "unknown",
        site: "myfence",
        page_url: pageUrl?.slice(0, 2000) ?? null,
        user_agent: req.headers.get("user-agent")?.slice(0, 1000) ?? null,
        ip_hash,
        payload,
      }),
    });
    if (!res.ok) console.warn(`filtered_submissions insert failed: ${res.status}`);
  } catch (err) {
    console.warn("filtered_submissions insert threw", err);
  }
}
