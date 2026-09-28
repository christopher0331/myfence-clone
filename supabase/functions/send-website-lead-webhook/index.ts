// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

/**
 * Legacy lead entry point still called by seattlefence.com.
 *
 * Forwards to myfence.com's /api/website-lead route so both company sites deliver
 * to the CRM with the same server-side credential. This function no longer holds a
 * CRM key of its own (its LEAD_WEBHOOK_API_KEY went stale and the CRM answered 401).
 */

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const DEFAULT_LEAD_ROUTE_URL = "https://myfence.com/api/website-lead";

// Must stay above MIN_SUBMIT_MS in src/lib/formBotGate.ts.
const ASSUMED_FILL_MS = 10_000;

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let lead: Record<string, unknown>;
  try {
    lead = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  // The route's bot gate drops submissions without a load timestamp. Older callers
  // never sent one, so stand one in; the honeypot and name checks still apply.
  if (lead.form_loaded_at == null) {
    lead = { ...lead, form_loaded_at: Date.now() - ASSUMED_FILL_MS };
  }

  const routeUrl = Deno.env.get("LEAD_ROUTE_URL") || DEFAULT_LEAD_ROUTE_URL;
  const clientIp = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim();

  try {
    const response = await fetch(routeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(clientIp ? { "x-forwarded-for": clientIp } : {}),
      },
      body: JSON.stringify(lead),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.ok) {
      return json(
        {
          error: "Failed to send lead to webhook",
          status: response.status,
          details: result?.details ?? result?.error ?? null,
        },
        500,
      );
    }

    return json({ success: true, message: "Lead sent successfully" }, 200);
  } catch (error) {
    return json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      },
      500,
    );
  }
});
