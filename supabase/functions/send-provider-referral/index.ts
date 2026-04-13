import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface Provider {
  name: string
  website: string
  email: string
  phone: string
}

interface ServiceSelection {
  id: string
  category: string
  providers: Provider[]
}

interface ReferralRequest {
  customerName: string
  customerEmail: string
  customerPhone: string
  customerAddress: string
  contactPreference: "self" | "provider"
  services: ServiceSelection[]
}

/* ------------------------------------------------------------------ */
/*  Twilio SMS helper                                                  */
/* ------------------------------------------------------------------ */
async function sendSms(to: string, body: string) {
  const accountSid = Deno.env.get("TWILIO_ACCOUNT_SID")
  const authToken = Deno.env.get("TWILIO_AUTH_TOKEN")
  const fromNumber = Deno.env.get("TWILIO_PHONE_NUMBER")

  if (!accountSid || !authToken || !fromNumber) {
    console.warn("Twilio credentials not configured — skipping SMS")
    return null
  }

  // Normalize phone: strip everything except digits, prepend +1 if needed
  const digits = to.replace(/\D/g, "")
  const e164 = digits.length === 10 ? `+1${digits}` : digits.length === 11 ? `+${digits}` : `+${digits}`

  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`
  const encoded = btoa(`${accountSid}:${authToken}`)

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${encoded}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      To: e164,
      From: fromNumber,
      Body: body,
    }),
  })

  const data = await res.json()
  if (!res.ok) {
    console.error("Twilio SMS error:", data)
    return null
  }
  console.log("SMS sent:", data.sid)
  return data.sid
}

/* ------------------------------------------------------------------ */
/*  Email HTML builders                                                */
/* ------------------------------------------------------------------ */

function buildCustomerEmail(services: ServiceSelection[]): string {
  const providerRows = services.flatMap((s) =>
    s.providers.map(
      (p) => `
        <tr>
          <td style="padding:12px 16px; border-bottom:1px solid #e5e7eb;">
            <strong style="color:#1a1a1a;">${s.category}</strong><br>
            <span style="color:#4b5563;">${p.name}</span>
          </td>
          <td style="padding:12px 16px; border-bottom:1px solid #e5e7eb; text-align:right;">
            ${p.phone ? `<a href="tel:${p.phone.replace(/\D/g, '')}" style="color:#2563eb; text-decoration:none;">${p.phone}</a><br>` : ""}
            ${p.email ? `<a href="mailto:${p.email}" style="color:#2563eb; text-decoration:none; font-size:13px;">${p.email}</a><br>` : ""}
            ${p.website ? `<a href="${p.website}" target="_blank" style="color:#2563eb; text-decoration:none; font-size:13px;">Website →</a>` : ""}
          </td>
        </tr>`
    )
  ).join("")

  return `
    <div style="font-family:Arial,sans-serif; max-width:600px; margin:0 auto;">
      <div style="background:linear-gradient(135deg,#16a34a 0%,#15803d 100%); color:white; padding:24px; text-align:center; border-radius:8px 8px 0 0;">
        <h1 style="margin:0; font-size:22px;">Your Requested Provider Info</h1>
        <p style="margin:8px 0 0; opacity:0.9; font-size:14px;">from MyFence.com's Trusted Partners</p>
      </div>
      <div style="padding:24px; background:#f9fafb; border:1px solid #e5e7eb;">
        <p style="color:#374151; margin-top:0;">Here are the contact details for the services you selected. Feel free to reach out at your convenience!</p>
        <table style="width:100%; border-collapse:collapse; background:white; border-radius:6px; overflow:hidden; border:1px solid #e5e7eb;">
          ${providerRows}
        </table>
        <p style="color:#6b7280; font-size:13px; margin-top:20px;">These are local professionals we've worked alongside and trust. Mention <strong>MyFence.com</strong> when you contact them!</p>
      </div>
      <div style="background:#374151; color:#9ca3af; padding:14px; text-align:center; font-size:12px; border-radius:0 0 8px 8px;">
        MyFence.com — Father &amp; Son Fence Pros &bull; (253) 455-1885
      </div>
    </div>`
}

function buildProviderEmail(
  provider: Provider,
  category: string,
  customerName: string,
  customerEmail: string,
  customerPhone: string,
  customerAddress: string
): string {
  return `
    <div style="font-family:Arial,sans-serif; max-width:600px; margin:0 auto;">
      <div style="background:linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%); color:white; padding:24px; text-align:center; border-radius:8px 8px 0 0;">
        <h1 style="margin:0; font-size:22px;">New Customer Lead from MyFence.com</h1>
        <p style="margin:8px 0 0; opacity:0.9; font-size:14px;">A customer has requested your ${category} services</p>
      </div>
      <div style="padding:24px; background:#f9fafb; border:1px solid #e5e7eb;">
        <p style="color:#374151; margin-top:0;">Hi <strong>${provider.name}</strong>,</p>
        <p style="color:#374151;">A MyFence.com customer has expressed interest in your services and would like you to reach out to them.</p>
        
        <div style="background:white; border:1px solid #e5e7eb; border-radius:8px; padding:20px; margin:20px 0;">
          <h3 style="color:#1a1a1a; margin-top:0; border-bottom:2px solid #2563eb; padding-bottom:8px;">Customer Details</h3>
          <table style="width:100%;">
            <tr><td style="padding:6px 0; color:#6b7280; width:100px;"><strong>Name:</strong></td><td style="padding:6px 0; color:#1a1a1a;">${customerName}</td></tr>
            <tr><td style="padding:6px 0; color:#6b7280;"><strong>Phone:</strong></td><td style="padding:6px 0;"><a href="tel:${customerPhone.replace(/\D/g, '')}" style="color:#2563eb; font-weight:bold;">${customerPhone}</a></td></tr>
            <tr><td style="padding:6px 0; color:#6b7280;"><strong>Email:</strong></td><td style="padding:6px 0;"><a href="mailto:${customerEmail}" style="color:#2563eb;">${customerEmail}</a></td></tr>
            ${customerAddress ? `<tr><td style="padding:6px 0; color:#6b7280;"><strong>Address:</strong></td><td style="padding:6px 0; color:#1a1a1a;">${customerAddress}</td></tr>` : ""}
          </table>
        </div>
        
        <div style="background:#fef3c7; border:1px solid #f59e0b; border-radius:8px; padding:16px;">
          <p style="color:#92400e; margin:0; font-weight:bold;">⚡ Please reach out to this customer promptly.</p>
          <p style="color:#78350f; margin:8px 0 0; font-size:13px;">They selected your service through our trusted partner network on MyFence.com.</p>
        </div>
      </div>
      <div style="background:#374151; color:#9ca3af; padding:14px; text-align:center; font-size:12px; border-radius:0 0 8px 8px;">
        Lead sent by MyFence.com — (253) 455-1885 &bull; myfence.com
      </div>
    </div>`
}

/* ------------------------------------------------------------------ */
/*  Main handler                                                       */
/* ------------------------------------------------------------------ */

serve(async (req) => {
  console.log("send-provider-referral called:", req.method)

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const body: ReferralRequest = await req.json()
    console.log("Referral request:", JSON.stringify(body))

    const { customerName, customerEmail, customerPhone, customerAddress, contactPreference, services } = body

    if (!customerName || !customerEmail || !services?.length) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    const apiKey = Deno.env.get("RESEND_API_KEY")
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    const resend = new Resend(apiKey)
    const results: string[] = []

    if (contactPreference === "self") {
      /* ---- "I'll Reach Out To Them" ---- */
      // Send one email to the customer with all selected provider info
      const { data, error } = await resend.emails.send({
        from: "MyFence.com <onboarding@resend.dev>",
        to: [customerEmail],
        subject: "Your Requested Service Provider Info — MyFence.com",
        html: buildCustomerEmail(services),
      })

      if (error) {
        console.error("Customer email error:", error)
        throw new Error("Failed to send customer email")
      }
      results.push(`customer-email:${data?.id}`)
      console.log("Customer email sent:", data?.id)

      // SMS confirmation to customer
      if (customerPhone) {
        const categories = services.map((s) => s.category).join(", ")
        await sendSms(
          customerPhone,
          `Hi ${customerName.split(" ")[0]}! MyFence.com here — we just sent the contact info for ${categories} to your email (${customerEmail}). Mention MyFence when you reach out!`
        )
      }
    } else {
      /* ---- "Please Contact Me" ---- */
      // Send individual emails to each provider
      for (const service of services) {
        for (const provider of service.providers) {
          if (!provider.email) {
            console.warn(`No email for provider ${provider.name} — skipping`)
            continue
          }

          const { data, error } = await resend.emails.send({
            from: "MyFence.com <onboarding@resend.dev>",
            to: [provider.email],
            reply_to: customerEmail,
            subject: `New ${service.category} Lead from MyFence.com — ${customerName}`,
            html: buildProviderEmail(provider, service.category, customerName, customerEmail, customerPhone, customerAddress),
          })

          if (error) {
            console.error(`Provider email error (${provider.name}):`, error)
          } else {
            results.push(`provider-email-${provider.name}:${data?.id}`)
            console.log(`Provider email sent to ${provider.name}:`, data?.id)
          }
        }
      }

      // SMS confirmation to customer
      if (customerPhone) {
        const categories = services.map((s) => s.category).join(", ")
        await sendSms(
          customerPhone,
          `Hi ${customerName.split(" ")[0]}! MyFence.com here — our partners for ${categories} will be reaching out to you shortly. Questions? Call us at (253) 455-1885.`
        )
      }

      // Also notify MyFence admin
      const serviceList = services.map((s) => `• ${s.category}: ${s.providers.map((p) => p.name).join(", ")}`).join("\n")
      await resend.emails.send({
        from: "MyFence.com <onboarding@resend.dev>",
        to: ["info@myfence.com"],
        subject: `Partner Referral: ${customerName} requested ${services.length} service(s)`,
        text: `Customer ${customerName} (${customerEmail}, ${customerPhone}) requested "Please Contact Me" for:\n\n${serviceList}\n\nAddress: ${customerAddress || "Not provided"}\n\nProvider emails have been sent automatically.`,
      })
    }

    return new Response(
      JSON.stringify({ success: true, results }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error("send-provider-referral error:", error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
})
