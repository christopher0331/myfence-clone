import { NextResponse } from "next/server";
import {
  botGateBlockReason,
  clientIpFromHeaders,
  consumeRateLimit,
  evaluateFormBotGate,
  type BotGateReason,
} from "@/lib/formBotGate";
import { logFilteredSubmission } from "./logFilteredSubmission";

export type GuardResult =
  | { blocked: false }
  | { blocked: true; reason: BotGateReason };

/**
 * Shared server gate for contact / referral / CRM lead routes.
 * Blocked requests should return a fake 200 success so bots do not learn.
 * Every suppressed submission is logged (fail-soft) to `filtered_submissions`.
 */
export async function guardLeadRequest(
  req: Request,
  body: Record<string, unknown>,
): Promise<GuardResult> {
  const ip = clientIpFromHeaders(req.headers);
  const verdict = evaluateFormBotGate(body);
  if (!verdict.allow) {
    const reason = botGateBlockReason(verdict) ?? "honeypot";
    console.warn(`[bot-gate] suppressed submission (${reason})`);
    await logFilteredSubmission(req, body, reason, ip);
    return { blocked: true, reason };
  }

  if (!consumeRateLimit(`lead:${ip}`)) {
    console.warn(`[bot-gate] rate-limited ${ip}`);
    await logFilteredSubmission(req, body, "rate_limit", ip);
    return { blocked: true, reason: "rate_limit" };
  }

  return { blocked: false };
}

export function fakeLeadSuccess() {
  return NextResponse.json({ ok: true });
}
