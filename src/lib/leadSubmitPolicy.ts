/**
 * Client-side address gate for lead forms.
 *
 * PostHog autocapture labels a native form submit as "submitted form" as soon as
 * the browser fires the event. Our handlers `preventDefault()` and then used to
 * return early when the address was typed instead of picked from Google Places.
 * The visitor saw a corner toast; CRM and email never ran.
 *
 * Typed addresses are delivered as-is. SMS consent is optional (one-time
 * nudge on first submit, then the lead still delivers).
 */

export type LeadSubmitBlockReason = "missing_address";

export type LeadSubmitWarning = "typed_address";

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
}): LeadSubmitWarning[] {
  const warnings: LeadSubmitWarning[] = [];
  if (String(args.address ?? "").trim() && args.addressFromPlaces === false) {
    warnings.push("typed_address");
  }
  return warnings;
}
