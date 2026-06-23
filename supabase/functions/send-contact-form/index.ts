import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name?: string;
  message?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  address?: string;
  description?: string;
  sendFinancing?: boolean;
  textConsent?: boolean | string;
  sourcePage?: string;
  site?: string;
  formId?: string;
  formSku?: string;
  originPage?: string;
}

type SiteId = "myfence" | "seattlefence";

const SITE_CONFIG: Record<SiteId, { displayName: string; from: string; to: string[] }> = {
  myfence: {
    displayName: "MyFence.com",
    from: "MyFence.com <noreply@myfence.com>",
    to: ["info@myfence.com"],
  },
  seattlefence: {
    displayName: "SeattleFence.com",
    from: "SeattleFence.com <noreply@myfence.com>",
    to: ["info@seattlefence.com"],
  },
};

function resolveSite(
  site?: string,
  formSku?: string,
  formId?: string,
  sourcePage?: string,
): SiteId {
  const normalized = (site ?? "").trim().toLowerCase();
  if (normalized === "myfence" || normalized === "seattlefence") {
    return normalized;
  }

  const sku = (formSku ?? "").trim().toUpperCase();
  if (sku.startsWith("MF-")) return "myfence";
  if (sku.startsWith("SF-")) return "seattlefence";

  const id = (formId ?? "").trim().toLowerCase();
  if (id.startsWith("myfence:") || id.startsWith("mf-")) return "myfence";
  if (id.startsWith("seattlefence:") || id.startsWith("sf-")) return "seattlefence";

  const page = (sourcePage ?? "").toLowerCase();
  if (page.includes("site=myfence")) return "myfence";
  if (page.includes("site=seattlefence")) return "seattlefence";
  if (page.includes("myfence.com")) return "myfence";
  if (page.includes("seattlefence.com")) return "seattlefence";

  return "seattlefence";
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ContactFormRequest = await req.json();

    const {
      name,
      message,
      firstName = "",
      lastName = "",
      email,
      phone = "",
      address,
      description,
      sendFinancing,
      textConsent,
      sourcePage,
      site,
      formId,
      formSku,
      originPage,
    } = body;

    const resolvedFirstName = firstName || (name ? name.trim().split(/\s+/)[0] : "");
    const resolvedLastName = lastName || (name ? name.trim().split(/\s+/).slice(1).join(" ") : "");
    const resolvedDescription = (description ?? message ?? "").trim();

    const consentValue = textConsent === true || textConsent === "true";
    const siteId = resolveSite(site, formSku, formId, sourcePage);
    const branding = SITE_CONFIG[siteId];

    const submissionPage = typeof sourcePage === "string" ? sourcePage.trim() : "";
    const submissionPageHtml = submissionPage
      ? `<br>Submitted from page: <a href="${submissionPage}">${submissionPage}</a>`
      : "";

    const attrRows = [
      siteId ? `<p><strong>Site:</strong> ${siteId}</p>` : "",
      formSku ? `<p><strong>Form SKU:</strong> ${formSku}</p>` : "",
      formId && formId !== formSku ? `<p><strong>Form ID:</strong> ${formId}</p>` : "",
      originPage ? `<p><strong>Origin Page:</strong> ${originPage}</p>` : "",
    ].filter(Boolean).join("\n        ");
    const attributionHtml = attrRows
      ? `<hr><h3 style="margin-bottom:4px;">Lead Attribution</h3>\n        ${attrRows}`
      : "";

    const emailResponse = await resend.emails.send({
      from: branding.from,
      to: branding.to,
      replyTo: email,
      subject: `New Contact Form Submission from ${resolvedFirstName} ${resolvedLastName}`.trim(),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${resolvedFirstName} ${resolvedLastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        ${address ? `<p><strong>Address:</strong> ${address}</p>` : ""}
        ${sendFinancing ? `<p><strong>Financing Information Requested:</strong> Yes</p>` : ""}
        <p><strong>Text message consent:</strong> ${consentValue ? "Yes" : "No"}</p>
        <p><strong>Message:</strong></p>
        <p>${resolvedDescription.replace(/\n/g, "<br>")}</p>
        ${attributionHtml}
        <hr>
        <p style="color: #666; font-size: 12px;">
          This email was sent from the ${branding.displayName} contact form.${submissionPageHtml}
        </p>
      `,
    });

    console.log("Email sent successfully:", { siteId, emailResponse });

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
};

serve(handler);
