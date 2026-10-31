import { attachBotGateFields } from "@/lib/formBotGate";

/**
 * Lead delivery to the CRM and notification emails.
 *
 * Goes through Next.js `/api/*` routes rather than a Supabase edge function from
 * the browser: the routes run the bot gate on the server, then the CRM route
 * holds WEBSITE_LEADS_API itself so delivery does not depend on a browser JWT.
 */

export interface LeadPayload {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  propertyAddress?: string;
  city?: string;
  state?: string;
  zip?: string;
  fenceType?: string;
  fenceStyle?: string;
  fencePost?: string;
  totalLinearFeet?: number;
  totalCost?: number;
  projectTimeline?: string;
  additionalNotes?: string;
  message?: string;
  textConsent?: boolean;
  /** How SMS consent was collected. Ignored by /api/website-lead if present. */
  consent_method?: string;
  sourcePage?: string;
  site?: string;
  formId?: string;
  formSku?: string;
  originPage?: string;
  website?: string;
  fax_number?: string;
  form_loaded_at?: number | string;
}

/**
 * Submitting a form is the consent action. The disclosure under the button
 * replaces the old checkbox, so every lead from these forms records consent.
 * /api/website-lead already ignores unknown JSON keys, so consent_method is safe.
 */
export const SUBMIT_DISCLOSURE_CONSENT = {
  textConsent: true,
  consent_method: "submit_disclosure",
} as const;

export interface LeadDeliveryResult {
  ok: boolean;
  error: string | null;
}

async function postLeadRoute(
  path: string,
  payload: Record<string, unknown>,
  fallbackError: string,
): Promise<LeadDeliveryResult> {
  try {
    const res = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attachBotGateFields(payload)),
    });

    const data = (await res.json().catch(() => null)) as
      | { ok?: boolean; error?: string; details?: string }
      | null;

    if (!res.ok) {
      return { ok: false, error: data?.error || `Request failed (${res.status})` };
    }
    if (!data?.ok) {
      return { ok: false, error: data?.error || fallbackError };
    }
    return { ok: true, error: null };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

export async function submitLeadToCrm(payload: LeadPayload): Promise<LeadDeliveryResult> {
  return postLeadRoute("/api/website-lead", payload as Record<string, unknown>, "CRM delivery failed");
}

export async function submitContactNotification(
  payload: Record<string, unknown>,
): Promise<LeadDeliveryResult> {
  return postLeadRoute("/api/contact-email", payload, "Contact email failed");
}

export async function submitReferralNotification(
  payload: Record<string, unknown>,
): Promise<LeadDeliveryResult> {
  return postLeadRoute("/api/referral", payload, "Referral email failed");
}

/**
 * Banner prepended to the notification email when the CRM never received the lead,
 * so a failed delivery is visible in the inbox instead of being swallowed silently.
 */
export function crmFailureNotice(result: LeadDeliveryResult): string {
  if (result.ok) return "";
  return [
    "!!! THIS LEAD WAS NOT SAVED TO THE CRM !!!",
    `Reason: ${result.error ?? "unknown error"}`,
    "Add this customer to the CRM by hand, and send this email to the site admin.",
    "",
    "",
  ].join("\n");
}
