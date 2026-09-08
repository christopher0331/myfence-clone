import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const geminiApiKey = Deno.env.get("GOOGLE_GEMINI_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const FENCE_STYLES = [
  "Picture Frame Fence",
  "3-Rail Picture Frame Fence",
  "Solid Board Fence",
  "Craftsman Style Fence",
  "Horizontal Fence",
  "Horizontal Lattice Fence",
  "Black Hogwire Fence",
  "Galvanized Hogwire Fence",
  "3ft Black Hogwire Fence",
  "Cedar & Steel Hybrid Fence",
  "Picket Fence",
];

const FENCE_SLUGS: Record<string, string> = {
  "Picture Frame Fence": "picture-frame-fence",
  "3-Rail Picture Frame Fence": "3-rail-picture-frame-fence",
  "Solid Board Fence": "solid-board-fence",
  "Craftsman Style Fence": "craftsman-style-fence",
  "Horizontal Fence": "horizontal-fence",
  "Horizontal Lattice Fence": "horizontal-lattice-fence",
  "Black Hogwire Fence": "black-hogwire-fence",
  "Galvanized Hogwire Fence": "galvanized-hogwire-fence",
  "3ft Black Hogwire Fence": "three-ft-black-hogwire-fence",
  "Cedar & Steel Hybrid Fence": "cedar-steel-hybrid-fence",
  "Picket Fence": "picket-fence",
};

function buildPrompt(city: string, neighborhood: string | null) {
  const location = neighborhood ? `${neighborhood}, ${city}, WA` : `${city}, WA`;
  const fenceList = FENCE_STYLES.join(", ");

  return `You are an SEO copywriter for MyFence.com, a premium fence installation company in the Pacific Northwest.

Analyze this fence installation photo taken in ${location}.

Our fence styles: ${fenceList}.

Return a JSON object (no markdown fences, just raw JSON) with these exact keys:

{
  "fenceStyle": "The specific fence style name from our list above that best matches, or a descriptive name if none match exactly",
  "fenceStyleSlug": "The URL slug from our list that best matches (e.g. picture-frame-fence), or null if no close match",
  "features": ["Array of 2-5 visible features like Post-on-Pipe, Board-on-Board, Pre-Stained Cedar, Lattice Topper, Custom Gate, Stepped for Slope, etc."],
  "estimatedFootage": "Rough estimate like ~120 linear feet, or null if impossible to tell",
  "seoTitle": "An SEO-optimized title like: Cedar Privacy Fence Installation in ${location}",
  "description": "Write 3-4 sentences for a Featured Project section. Mention ${location} by name. Describe what you see: the fence style, the terrain/setting, the quality of work. Reference specific challenges if visible (slope, trees, tight lot, etc.). Write in third person about MyFence.com. Make it read like a real project case study, not generic marketing. Include one mention of a relevant keyword like 'fence installation in ${neighborhood || city}' naturally.",
  "altText": "A detailed, SEO-friendly alt text for this image, 15-25 words, mentioning the fence style and ${location}"
}`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!geminiApiKey) {
      return new Response(
        JSON.stringify({ error: "Missing GOOGLE_GEMINI_API_KEY" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { imageUrl, city, neighborhood } = await req.json();

    if (!imageUrl || !city) {
      return new Response(
        JSON.stringify({ error: "imageUrl and city are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Analyzing: ${neighborhood || city}, ${city} — ${imageUrl}`);

    const imageRes = await fetch(imageUrl);
    if (!imageRes.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch image: ${imageRes.status}` }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const imageBuffer = await imageRes.arrayBuffer();
    const base64 = btoa(
      new Uint8Array(imageBuffer).reduce((data, byte) => data + String.fromCharCode(byte), "")
    );

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  inlineData: {
                    mimeType: "image/webp",
                    data: base64,
                  },
                },
                { text: buildPrompt(city, neighborhood) },
              ],
            },
          ],
          generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
        }),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error(`Gemini API error: ${geminiRes.status}`, errText.slice(0, 300));
      return new Response(
        JSON.stringify({ error: `Gemini API ${geminiRes.status}`, detail: errText.slice(0, 300) }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await geminiRes.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    const cleaned = raw
      .replace(/```json\s*/gi, "")
      .replace(/```\s*/g, "")
      .trim();

    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse Gemini JSON:", raw.slice(0, 300));
      return new Response(
        JSON.stringify({ error: "Failed to parse Gemini response", raw: raw.slice(0, 500) }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (parsed.fenceStyle && !parsed.fenceStyleSlug) {
      parsed.fenceStyleSlug = FENCE_SLUGS[parsed.fenceStyle] || null;
    }

    return new Response(JSON.stringify({ ok: true, analysis: parsed }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in analyze-fence-photo:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
