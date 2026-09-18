/**
 * Client-side submit gates for lead forms.
 *
 * PostHog autocapture labels a native form submit as "submitted form" as soon as
 * the browser fires the event. Our handlers `preventDefault()` and then used to
 * return early when:
 *   1. The address was typed instead of picked from Google Places
 *   2. The SMS consent checkbox was unchecked (phone is required, so this always fired)
 *
 * The visitor saw a corner toast; CRM and email never ran. That is how a session
 * can show "submitted form" with no lead in the inbox.
 *
 * SMS consent is still collected and forwarded. It must not block delivery.
 * Typed addresses are delivered as-is.
 */

export type LeadSubmitBlockReason = "missing_address";

export type LeadSubmitWarning = "typed_address" | "no_sms_consent";

export function shouldDeliverLead(args: {
  address?: string;
  requireAddress?: boolean;
}): { ok: true } | { ok: false; reason: LeadSubmitBlockReason } {
  const requireAddress = args.requireAddress !== false;
  if (requireAddress && !String(args.address ?? "").trim()) {
    return { ok: false, reason: "missing_address" };
  }
  return { ok: true };
}

export function leadSubmitWarnings(args: {
  address?: string;
  addressFromPlaces?: boolean;
  phone?: string;
  textConsent?: boolean;
}): LeadSubmitWarning[] {
  const warnings: LeadSubmitWarning[] = [];
  if (String(args.address ?? "").trim() && args.addressFromPlaces === false) {
    warnings.push("typed_address");
  }
  if (String(args.phone ?? "").trim() && !args.textConsent) {
    warnings.push("no_sms_consent");
  }
  return warnings;
}
