// @ts-nocheck
// Public analytics ingestion endpoint. Receives page_view / cta_click / form_submit
// events from any company site (myfence.com, seattlefence.com, ...) and writes them to
// the locked-down public.page_events table using the service role.
//
// Deployed with verify_jwt = false (see supabase/config.toml) so it can accept
// navigator.sendBeacon() calls, which cannot attach Authorization headers.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.55.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ALLOWED_EVENT_TYPES = new Set(["page_view", "cta_click", "form_submit"]);
const ALLOWED_SITES = new Set(["myfence", "seattlefence"]);
const BOT_UA = /(bot|crawl|spider|slurp|bingpreview|headless|lighthouse|pingdom|gtmetrix|ahrefs|semrush|facebookexternalhit|preview)/i;

function toStr(v: unknown, max = 2048): string | null {
  if (typeof v !== "string") return null;
  const trimmed = v.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

serve(async (req) => {
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
    // Body arrives as text/plain (beacon-safe, avoids CORS preflight) but contains JSON.
    const rawBody = await req.text();
    let body: Record<string, unknown> = {};
    try {
      body = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const eventType = toStr(body.event_type, 32);
    if (!eventType || !ALLOWED_EVENT_TYPES.has(eventType)) {
      return new Response(JSON.stringify({ error: "Invalid event_type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userAgent = req.headers.get("user-agent") || toStr(body.user_agent, 512) || "";
    // Silently accept (204) but skip storage for obvious bots, so client retries don't spin.
    if (BOT_UA.test(userAgent)) {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    let site = toStr(body.site, 32) || "myfence";
    if (!ALLOWED_SITES.has(site)) site = "myfence";

    const row = {
      site,
      event_type: eventType,
      page_path: toStr(body.page_path, 1024) ?? "",
      page_url: toStr(body.page_url, 2048),
      page_category: toStr(body.page_category, 64),
      cta_type: toStr(body.cta_type, 32),
      cta_destination: toStr(body.cta_destination, 1024),
      form_type: toStr(body.form_type, 64),
      form_id: toStr(body.form_id, 128),
      origin_path: toStr(body.origin_path, 1024),
      session_id: toStr(body.session_id, 128),
      referrer: toStr(body.referrer, 2048),
      utm_source: toStr(body.utm_source, 256),
      utm_medium: toStr(body.utm_medium, 256),
      utm_campaign: toStr(body.utm_campaign, 256),
      user_agent: userAgent ? userAgent.slice(0, 512) : null,
    };

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      return new Response(JSON.stringify({ error: "Analytics not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const { error } = await supabase.from("page_events").insert(row);
    if (error) {
      console.error("page_events insert error:", error.message);
      return new Response(JSON.stringify({ error: "Failed to record event" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(null, { status: 204, headers: corsHeaders });
  } catch (error) {
    console.error("track-event error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
