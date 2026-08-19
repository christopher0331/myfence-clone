/**
 * Lead delivery to the CRM.
 *
 * Goes through the `/api/website-lead` server route rather than a Supabase edge
 * function: the route holds the CRM credential itself, so delivery does not depend
 * on the browser presenting a valid Supabase JWT.
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
  sourcePage?: string;
  site?: string;
  formId?: string;
  formSku?: string;
  originPage?: string;
}

export interface LeadDeliveryResult {
  ok: boolean;
  error: string | null;
}

export async function submitLeadToCrm(payload: LeadPayload): Promise<LeadDeliveryResult> {
  try {
    const res = await fetch("/api/website-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await res.json().catch(() => null)) as
      | { ok?: boolean; error?: string; details?: string }
      | null;

    if (!res.ok) {
      return { ok: false, error: data?.error || `Request failed (${res.status})` };
    }
    if (!data?.ok) {
      return { ok: false, error: data?.error || "CRM delivery failed" };
    }
    return { ok: true, error: null };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
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
