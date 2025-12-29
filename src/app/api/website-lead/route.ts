import { NextResponse } from "next/server";

const DEFAULT_WEBHOOK_URL =
  "https://mdcbcpowsrrebtustwwp.supabase.co/functions/v1/receive-website-lead-webhook";

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
    return NextResponse.json(
      // Return 200 so clients can gracefully fall back to the legacy email flow without noisy 500s in dev.
      { ok: false, error: "Missing server env var WEBSITE_LEADS_API" },
      { status: 200 },
    );
  }

  const webhookUrl = process.env.WEBSITE_LEADS_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Accept either snake_case or camelCase from the client
  const firstName = toStringOrEmpty(body.first_name ?? body.firstName);
  const lastName = toStringOrEmpty(body.last_name ?? body.lastName);
  const email = toStringOrEmpty(body.email);
  const phone = toStringOrEmpty(body.phone);

  const addressInput = toStringOrEmpty(body.address);
  const parsed = parseAddressParts(addressInput);

  const city = toStringOrEmpty(body.city) || parsed.city;
  const state = toStringOrEmpty(body.state) || parsed.state;
  const zip = toStringOrEmpty(body.zip) || parsed.zip;

  const fenceType = toStringOrEmpty(body.fence_type ?? body.fenceType);
  const message = toStringOrEmpty(body.message ?? body.description ?? body.projectDescription ?? body.notes);

  const payload = {
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    address: parsed.address || addressInput,
    city,
    state,
    zip,
    fence_type: fenceType,
    message,
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
      return NextResponse.json(
        // Return 200 so clients can gracefully fall back to the legacy email flow.
        { ok: false, error: `Webhook failed (${res.status})`, details: text.slice(0, 500) },
        { status: 200 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      // Return 200 so clients can gracefully fall back to the legacy email flow.
      { ok: false, error: "Failed to reach webhook", details: e instanceof Error ? e.message : String(e) },
      { status: 200 },
    );
  }
}


