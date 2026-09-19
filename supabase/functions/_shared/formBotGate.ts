/**
 * Copy of src/lib/formBotGate.ts evaluate/rate-limit helpers for Deno
 * edge functions. Keep the thresholds and honeypot field names in sync.
 */

export const BOT_GATE_HONEYPOT_FIELDS = ["website", "fax_number"] as const;
export const BOT_GATE_LOADED_AT_FIELD = "form_loaded_at";
export const MIN_SUBMIT_MS = 3000;
export const MAX_SUBMIT_MS = 48 * 60 * 60 * 1000;
export const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
export const RATE_LIMIT_MAX = 8;

export type BotGateReason =
  | "honeypot"
  | "too_fast"
  | "stale_or_tampered"
  | "missing_timestamp"
  | "gibberish_name"
  | "rate_limit";

export type BotGateVerdict =
  | { allow: true }
  | { allow: false; reason: BotGateReason };

function toTrimmedString(value: unknown): string {
  if (typeof value === "string") return value.trim();
  if (value == null) return "";
  return String(value).trim();
}

export function honeypotFilled(body: Record<string, unknown>): boolean {
  return BOT_GATE_HONEYPOT_FIELDS.some((field) => toTrimmedString(body[field]).length > 0);
}

function parseLoadedAt(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return null;
}

export function tokenLooksRandom(token: string): boolean {
  const s = token.toLowerCase().replace(/[^a-z]/g, "");
  if (s.length < 5) return false;

  if (/q(?!u)/.test(s)) return true;
  if (/[bcdfghjklmnpqrstvwxz]{5,}/.test(s)) return true;

  const vowelCount = (s.match(/[aeiouy]/g) || []).length;
  const vowelRatio = vowelCount / s.length;
  if (s.length >= 6 && vowelRatio < 0.22 && !/[aeio]/.test(s)) return true;

  return false;
}

export function looksLikeGibberishName(...parts: Array<string | undefined>): boolean {
  const tokens = parts
    .flatMap((part) => (part ?? "").trim().split(/\s+/))
    .map((t) => t.trim())
    .filter((t) => t.replace(/[^a-zA-Z]/g, "").length >= 5);

  if (tokens.length === 0) return false;

  const flagged = tokens.filter(tokenLooksRandom);
  if (tokens.length === 1) return flagged.length === 1;
  return flagged.length >= 1 && tokenLooksRandom(tokens[0]);
}

export function namesFromLeadBody(body: Record<string, unknown>): string[] {
  return [
    toTrimmedString(body.firstName ?? body.first_name),
    toTrimmedString(body.lastName ?? body.last_name),
    toTrimmedString(body.fullName ?? body.full_name ?? body.name),
    toTrimmedString(body.referrerFirstName),
    toTrimmedString(body.referrerLastName),
    toTrimmedString(body.referredName),
  ].filter(Boolean);
}

export function evaluateFormBotGate(
  body: Record<string, unknown>,
  now = Date.now(),
): BotGateVerdict {
  if (honeypotFilled(body)) {
    return { allow: false, reason: "honeypot" };
  }

  const loadedAt = parseLoadedAt(body[BOT_GATE_LOADED_AT_FIELD]);
  if (loadedAt == null) {
    return { allow: false, reason: "missing_timestamp" };
  }

  const elapsed = now - loadedAt;
  if (elapsed < 0 || elapsed > MAX_SUBMIT_MS) {
    return { allow: false, reason: "stale_or_tampered" };
  }
  if (elapsed < MIN_SUBMIT_MS) {
    return { allow: false, reason: "too_fast" };
  }

  if (looksLikeGibberishName(...namesFromLeadBody(body))) {
    return { allow: false, reason: "gibberish_name" };
  }

  return { allow: true };
}

type RateBucket = { count: number; resetAt: number };
const rateBuckets = new Map<string, RateBucket>();

export function consumeRateLimit(
  key: string,
  limit = RATE_LIMIT_MAX,
  windowMs = RATE_LIMIT_WINDOW_MS,
  now = Date.now(),
): boolean {
  if (rateBuckets.size > 2000) {
    for (const [k, bucket] of rateBuckets) {
      if (now >= bucket.resetAt) rateBuckets.delete(k);
    }
  }

  const existing = rateBuckets.get(key);
  if (!existing || now >= existing.resetAt) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (existing.count >= limit) return false;
  existing.count += 1;
  return true;
}

export function clientIpFromHeaders(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return headers.get("x-real-ip") || headers.get("cf-connecting-ip") || "unknown";
}

export function guardLeadBody(
  body: Record<string, unknown>,
  headers: Headers,
): BotGateVerdict {
  const verdict = evaluateFormBotGate(body);
  if (!verdict.allow) return verdict;
  const ip = clientIpFromHeaders(headers);
  if (!consumeRateLimit(`lead:${ip}`)) {
    return { allow: false, reason: "rate_limit" };
  }
  return { allow: true };
}
