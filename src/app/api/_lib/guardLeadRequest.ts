import { NextResponse } from "next/server";
import {
  clientIpFromHeaders,
  consumeRateLimit,
  evaluateFormBotGate,
  type BotGateReason,
} from "@/lib/formBotGate";

export type GuardResult =
  | { blocked: false }
  | { blocked: true; reason: BotGateReason };

/**
 * Shared server gate for contact / referral / CRM lead routes.
 * Blocked requests should return a fake 200 success so bots do not learn.
 */
export function guardLeadRequest(req: Request, body: Record<string, unknown>): GuardResult {
  const verdict = evaluateFormBotGate(body);
  if (!verdict.allow) {
    console.warn(`[bot-gate] suppressed submission (${verdict.reason})`);
    return { blocked: true, reason: verdict.reason };
  }

  const ip = clientIpFromHeaders(req.headers);
  if (!consumeRateLimit(`lead:${ip}`)) {
    console.warn(`[bot-gate] rate-limited ${ip}`);
    return { blocked: true, reason: "rate_limit" };
  }

  return { blocked: false };
}

export function fakeLeadSuccess() {
  return NextResponse.json({ ok: true });
}
