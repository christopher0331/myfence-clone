// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface LeadData {
  firstName?: string;
  first_name?: string;
  lastName?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  propertyAddress?: string;
  address?: string; // allow alternate key
  city?: string;
  state?: string;
  zip?: string;
  fenceType?: string;
  fence_type?: string;
  fenceStyle?: string;
  fencePost?: string;
  totalLinearFeet?: number;
  totalCost?: number;
  additionalNotes?: string;
  projectTimeline?: string;
  message?: string;
  sourcePage?: string;
  site?: string;
  formId?: string;
  form_id?: string;
  formSku?: string;
  form_sku?: string;
  originPage?: string;
  origin_page?: string;
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

    const firstName = toStr(leadData.firstName ?? leadData.first_name).trim();
    const lastName = toStr(leadData.lastName ?? leadData.last_name).trim();
    const email = toStr(leadData.email).trim() || null;
    const phone = toStr(leadData.phone).trim() || null;

    // CRM contract requires first + last name and at least one contact method.
    if (!firstName || !lastName || (!email && !phone)) {
      return new Response(
        JSON.stringify({
          error: "Invalid payload: first_name, last_name, and email or phone are required",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

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
    const sourcePage = toStr(leadData.sourcePage).trim();
    if (sourcePage) noteParts.push(`Submitted from page: ${sourcePage}`);

    // Multi-site attribution: which website + form produced this lead, and (when the lead
    // started on a different page, e.g. a neighborhood page) the originating page.
    const site = toStr(leadData.site).trim();
    const formId = toStr(leadData.formId ?? leadData.form_id).trim();
    const formSku = toStr(leadData.formSku ?? leadData.form_sku).trim();
    const originPage = toStr(leadData.originPage ?? leadData.origin_page).trim();
    if (site) noteParts.push(`Site: ${site}`);
    if (formSku) noteParts.push(`Form SKU: ${formSku}`);
    if (formId) noteParts.push(`Form ID: ${formId}`);
    if (originPage) noteParts.push(`Origin page: ${originPage}`);

    // Keep payload aligned with CRM webhook contract.
    const webhookPayload: Record<string, unknown> = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      address: address || null,
      city: toStr(leadData.city).trim() || null,
      state: toStr(leadData.state).trim() || null,
      zip: toStr(leadData.zip).trim() || null,
      fence_type: toStr(leadData.fenceType ?? leadData.fence_type).trim() || null,
      message: noteParts.length > 0 ? noteParts.join("\n") : null,
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


