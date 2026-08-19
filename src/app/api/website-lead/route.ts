import { NextResponse } from "next/server";

/**
 * Server-side lead delivery to the MyFence CRM.
 *
 * Runs on the server so it authenticates to the CRM with WEBSITE_LEADS_API directly,
 * rather than going through a Supabase edge function that requires a browser JWT.
 */

const DEFAULT_WEBHOOK_URL =
  "https://mdcbcpowsrrebtustwwp.supabase.co/functions/v1/receive-website-lead-webhook";

// The CRM rejects a lead outright when last_name is empty. Forms with a single
// "Full Name" field legitimately produce one-word names, so stand in a marker
// rather than dropping the lead.
const MISSING_LAST_NAME = "—";

function toStringOrEmpty(v: unknown): string {
  if (typeof v === "string") return v;
  if (v == null) return "";
  return String(v);
}

function parseAddressParts(input: string): {
  address: string;
  city: string;
  state: string;
  zip: string;
} {
  const raw = (input || "").trim();
  if (!raw) return { address: "", city: "", state: "", zip: "" };

  // Heuristic parse:
  // "123 Main St, Seattle, WA 98101"
  const parts = raw.split(",").map((p) => p.trim()).filter(Boolean);

  const address = parts[0] ?? raw;
  const city = parts[1] ?? "";

  let state = "";
  let zip = "";
  const stateZip = parts[2] ?? "";
  if (stateZip) {
    const tokens = stateZip.split(/\s+/).filter(Boolean);
    state = tokens[0] ?? "";
    zip = tokens[1] ?? "";
  }

  return { address, city, state, zip };
}

export async function POST(req: Request) {
  const apiKey = process.env.WEBSITE_LEADS_API;
  if (!apiKey) {
    console.error("[website-lead] Missing server env var WEBSITE_LEADS_API — lead not delivered");
    return NextResponse.json(
      // Return 200 so clients can gracefully fall back to the legacy email flow without noisy 500s in dev.
      { ok: false, error: "Missing server env var WEBSITE_LEADS_API" },
      { status: 200 },
    );
  }

  const webhookUrl = process.env.WEBSITE_LEADS_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Accept either snake_case or camelCase from the client
  const rawFirstName = toStringOrEmpty(body.first_name ?? body.firstName).trim();
  const rawLastName = toStringOrEmpty(body.last_name ?? body.lastName).trim();
  const email = toStringOrEmpty(body.email).trim();
  const phone = toStringOrEmpty(body.phone).trim();

  // Split a combined name when the form only collected one field.
  let firstName = rawFirstName;
  let lastName = rawLastName;
  if (!firstName && !lastName) {
    const [first, ...rest] = toStringOrEmpty(body.fullName ?? body.name)
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    firstName = first ?? "";
    lastName = rest.join(" ");
  }

  if (!firstName || (!email && !phone)) {
    console.error("[website-lead] Rejected lead: missing name and/or contact method");
    return NextResponse.json(
      { ok: false, error: "first name and either email or phone are required" },
      { status: 200 },
    );
  }

  const addressInput = toStringOrEmpty(body.address ?? body.propertyAddress);
  const parsed = parseAddressParts(addressInput);

  const city = toStringOrEmpty(body.city).trim() || parsed.city;
  const state = toStringOrEmpty(body.state).trim() || parsed.state;
  const zip = toStringOrEmpty(body.zip).trim() || parsed.zip;

  const fenceType = toStringOrEmpty(body.fence_type ?? body.fenceType).trim();

  // Build the CRM note: customer message first, then project details, then attribution.
  const noteParts: string[] = [];
  const pushNote = (label: string, value: unknown) => {
    const text = toStringOrEmpty(value).trim();
    if (text) noteParts.push(`${label}: ${text}`);
  };

  const customerMessage = toStringOrEmpty(
    body.message ?? body.description ?? body.projectDescription ?? body.notes,
  ).trim();
  if (customerMessage) noteParts.push(customerMessage);

  pushNote("Additional Notes", body.additionalNotes);
  pushNote("Fence Style", body.fenceStyle);
  pushNote("Fence Post", body.fencePost);
  if (typeof body.totalLinearFeet === "number") {
    noteParts.push(`Total Linear Feet: ${body.totalLinearFeet}`);
  }
  if (typeof body.totalCost === "number") {
    noteParts.push(`Estimated Cost: $${body.totalCost.toLocaleString()}`);
  }
  pushNote("Timeline", body.projectTimeline);
  pushNote("Text consent", body.textConsent === true ? "Yes" : "");
  pushNote("Submitted from page", body.sourcePage);
  pushNote("Site", body.site);
  pushNote("Form SKU", body.formSku ?? body.form_sku);
  pushNote("Form ID", body.formId ?? body.form_id);
  pushNote("Origin page", body.originPage ?? body.origin_page);

  const payload = {
    first_name: firstName,
    last_name: lastName || MISSING_LAST_NAME,
    email,
    phone,
    address: parsed.address || addressInput,
    city,
    state,
    zip,
    fence_type: fenceType,
    message: noteParts.length > 0 ? noteParts.join("\n") : "",
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(
        `[website-lead] CRM webhook rejected lead (${res.status}) for ${firstName} ${lastName}: ${text.slice(0, 300)}`,
      );
      return NextResponse.json(
        // Return 200 so clients can gracefully fall back to the legacy email flow.
        { ok: false, error: `CRM webhook failed (${res.status})`, details: text.slice(0, 500) },
        { status: 200 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    const detail = e instanceof Error ? e.message : String(e);
    console.error(`[website-lead] Could not reach CRM webhook: ${detail}`);
    return NextResponse.json(
      // Return 200 so clients can gracefully fall back to the legacy email flow.
      { ok: false, error: "Failed to reach CRM webhook", details: detail },
      { status: 200 },
    );
  }
}
