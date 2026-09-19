import { NextResponse } from "next/server";
import { forwardSupabaseFunction } from "../_lib/forwardSupabaseFunction";
import { fakeLeadSuccess, guardLeadRequest } from "../_lib/guardLeadRequest";

/**
 * Server-side contact notification. The browser posts here so the bot gate
 * runs on Netlify before Resend is invoked via the Supabase function.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const gate = guardLeadRequest(req, body);
  if (gate.blocked) {
    return fakeLeadSuccess();
  }

  try {
    const forwarded = await forwardSupabaseFunction("send-contact-form", body);
    if (!forwarded.ok) {
      console.error(`[contact-email] send-contact-form failed (${forwarded.status}): ${forwarded.error}`);
      return NextResponse.json(
        { ok: false, error: forwarded.error || "Failed to send contact email" },
        { status: 200 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    const detail = e instanceof Error ? e.message : String(e);
    console.error(`[contact-email] Could not reach send-contact-form: ${detail}`);
    return NextResponse.json({ ok: false, error: "Failed to send contact email" }, { status: 200 });
  }
}
