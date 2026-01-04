// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface LeadData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  propertyAddress?: string;
  address?: string; // allow alternate key
  city?: string;
  state?: string;
  zip?: string;
  fenceType?: string;
  fenceStyle?: string;
  fencePost?: string;
  totalLinearFeet?: number;
  totalCost?: number;
  additionalNotes?: string;
  projectTimeline?: string;
  message?: string;
  turnstileToken?: string;
}

function toStr(v: unknown): string {
  if (typeof v === "string") return v;
  if (v == null) return "";
  return String(v);
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    // Verify Turnstile token
    const secretKey = Deno.env.get("CLOUDFLARE_SECRET_KEY");
    if (!secretKey) {
      return new Response(JSON.stringify({ error: "Turnstile secret not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const webhookUrl = Deno.env.get("LEAD_WEBHOOK_URL");
    const apiKey = Deno.env.get("LEAD_WEBHOOK_API_KEY");

    if (!webhookUrl) {
      return new Response(JSON.stringify({ error: "Webhook URL not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Webhook API key not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const leadData: LeadData = await req.json();

    if (!leadData.turnstileToken) {
      return new Response(JSON.stringify({ error: "Missing Turnstile token" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const verifyResp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: leadData.turnstileToken,
      }),
    }).catch(() => null);

    const verifyJson = verifyResp ? await verifyResp.json().catch(() => null) : null;

    if (!verifyJson?.success) {
      return new Response(JSON.stringify({ error: "Turnstile verification failed" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const firstName = toStr(leadData.firstName);
    const lastName = toStr(leadData.lastName);
    const email = toStr(leadData.email) || null;
    const phone = toStr(leadData.phone) || null;

    const address =
      toStr(leadData.propertyAddress) ||
      toStr(leadData.address) ||
      "";

    const noteParts: string[] = [];
    if (leadData.message) noteParts.push(toStr(leadData.message));
    if (leadData.additionalNotes) noteParts.push(toStr(leadData.additionalNotes));
    if (leadData.fenceType) noteParts.push(`Fence Type: ${toStr(leadData.fenceType)}`);
    if (leadData.fenceStyle) noteParts.push(`Fence Style: ${toStr(leadData.fenceStyle)}`);
    if (leadData.fencePost) noteParts.push(`Fence Post: ${toStr(leadData.fencePost)}`);
    if (typeof leadData.totalLinearFeet === "number") noteParts.push(`Total Linear Feet: ${leadData.totalLinearFeet}`);
    if (typeof leadData.totalCost === "number") noteParts.push(`Estimated Cost: $${leadData.totalCost.toLocaleString()}`);
    if (leadData.projectTimeline) noteParts.push(`Timeline: ${toStr(leadData.projectTimeline)}`);

    // Send BOTH `message` and `notes` for compatibility with either receiver format.
    const webhookPayload: Record<string, unknown> = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      address: address || null,
      city: leadData.city || null,
      state: leadData.state || null,
      zip: leadData.zip || null,
      fence_type: leadData.fenceType || null,
      message: noteParts.length > 0 ? noteParts.join("\n") : null,
      notes: noteParts.length > 0 ? noteParts.join("\n") : null,
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(webhookPayload),
    });

    const responseText = await response.text().catch(() => "");

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: "Failed to send lead to webhook",
          status: response.status,
          details: responseText,
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    let responseData: any = null;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = null;
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead sent successfully",
        customer_id: responseData?.customer_id || null,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});


