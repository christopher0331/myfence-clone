#!/usr/bin/env node

/**
 * One-time script: Sends one photo per service-area location to Gemini
 * vision API, gets fence-style analysis + SEO writeup, and saves results to
 * src/data/featuredProjects.json.
 *
 * Usage:
 *   GEMINI_API_KEY=<key> node scripts/generate-featured-projects.mjs
 *   — or source .env first —
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("ERROR: Set GEMINI_API_KEY environment variable.");
  process.exit(1);
}

const MODEL = "gemini-2.0-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;
const IMAGEKIT_BASE = "https://ik.imagekit.io/xft9mcl5v/service-area-photos";

const FENCE_STYLES = [
  { name: "Picture Frame Fence", slug: "picture-frame-fence" },
  { name: "3-Rail Picture Frame Fence", slug: "3-rail-picture-frame-fence" },
  { name: "Solid Board Fence", slug: "solid-board-fence" },
  { name: "Craftsman Style Fence", slug: "craftsman-style-fence" },
  { name: "Horizontal Fence", slug: "horizontal-fence" },
  { name: "Horizontal Lattice Fence", slug: "horizontal-lattice-fence" },
  { name: "Black Hogwire Fence", slug: "black-hogwire-fence" },
  { name: "Galvanized Hogwire Fence", slug: "galvanized-hogwire-fence" },
  { name: "3ft Black Hogwire Fence", slug: "three-ft-black-hogwire-fence" },
  { name: "Cedar & Steel Hybrid Fence", slug: "cedar-steel-hybrid-fence" },
  { name: "Picket Fence", slug: "picket-fence" },
];

// ---------------------------------------------------------------------------

const rawPhotos = JSON.parse(
  readFileSync(resolve(ROOT, "src/data/serviceAreaPhotos.json"), "utf-8")
);
const photos = rawPhotos.filter(
  (p) =>
    p &&
    typeof p.file === "string" &&
    p.file.trim() &&
    typeof p.city === "string" &&
    p.city.trim() &&
    !("__manifestSection" in p)
);

function groupByLocation(photos) {
  const map = new Map();
  for (const p of photos) {
    const key = `${p.city}|||${p.neighborhood || ""}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(p);
  }
  return map;
}

function buildPrompt(photo, city, neighborhood) {
  const location = neighborhood ? `${neighborhood}, ${city}, WA` : `${city}, WA`;
  const fenceList = FENCE_STYLES.map((s) => s.name).join(", ");

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

async function fetchImageAsBase64(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Image fetch failed: ${res.status} ${url}`);
  const buf = await res.arrayBuffer();
  return Buffer.from(buf).toString("base64");
}

async function callGemini(photo, city, neighborhood) {
  const imageUrl = `${IMAGEKIT_BASE}/${photo.file}?tr=w-800`;

  const base64 = await fetchImageAsBase64(imageUrl);

  const body = {
    contents: [
      {
        parts: [
          {
            inlineData: {
              mimeType: "image/webp",
              data: base64,
            },
          },
          { text: buildPrompt(photo, city, neighborhood) },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
    },
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gemini API ${res.status}: ${text.slice(0, 300)}`);
  }

  const data = await res.json();
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

  const cleaned = raw
    .replace(/```json\s*/gi, "")
    .replace(/```\s*/g, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    console.error("  Failed to parse JSON. Raw:", raw.slice(0, 300));
    return null;
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function callWithRetry(fn, maxRetries = 5) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const is429 = err.message?.includes("429");
      if (is429 && attempt < maxRetries) {
        const wait = Math.pow(2, attempt + 1) * 2000 + Math.random() * 1000;
        console.log(
          `  ⏳ Rate limited, retrying in ${(wait / 1000).toFixed(1)}s (attempt ${attempt + 1}/${maxRetries})...`
        );
        await sleep(wait);
      } else {
        throw err;
      }
    }
  }
}

// ---------------------------------------------------------------------------

async function main() {
  const outPath = resolve(ROOT, "src/data/featuredProjects.json");

  // Resume support: load existing results so we don't redo completed ones
  let results = [];
  if (existsSync(outPath)) {
    try {
      results = JSON.parse(readFileSync(outPath, "utf-8"));
      if (!Array.isArray(results)) results = [];
    } catch {
      results = [];
    }
  }
  const doneKeys = new Set(
    results.map((r) => `${r.city}|||${r.neighborhood || ""}`)
  );

  const grouped = groupByLocation(photos);
  const remaining = Array.from(grouped.entries()).filter(
    ([key]) => !doneKeys.has(key)
  );

  console.log(
    `${grouped.size} total locations, ${results.length} already done, ${remaining.length} remaining.\n`
  );

  if (remaining.length === 0) {
    console.log("All locations already processed!");
    return;
  }

  let i = 0;
  for (const [key, locationPhotos] of remaining) {
    const [city, neighborhood] = key.split("|||");
    const photo = locationPhotos[0];
    const label = neighborhood || city;
    i++;

    console.log(`[${i}/${remaining.length}] Analyzing: ${label}, ${city}...`);

    try {
      const analysis = await callWithRetry(() =>
        callGemini(photo, city, neighborhood || null)
      );

      if (analysis) {
        results.push({
          city,
          neighborhood: neighborhood || null,
          photoFile: photo.file,
          fenceStyle: analysis.fenceStyle || "Cedar Privacy Fence",
          fenceStyleSlug: analysis.fenceStyleSlug || null,
          features: analysis.features || [],
          estimatedFootage: analysis.estimatedFootage || null,
          seoTitle: analysis.seoTitle || `Fence Installation in ${label}`,
          description:
            analysis.description ||
            `Professional fence installation completed in ${label}, ${city}.`,
          altText:
            analysis.altText || photo.neighborhoodAlt || photo.cityAlt,
          lat: photo.lat,
          lng: photo.lng,
        });
        console.log(`  ✓ ${analysis.fenceStyle}`);

        // Save after each success so progress isn't lost
        writeFileSync(outPath, JSON.stringify(results, null, 2) + "\n");
      } else {
        console.log("  ✗ Skipped (parse failure)");
      }
    } catch (err) {
      console.error(`  ✗ Error: ${err.message}`);
    }

    // 5s between calls to stay under rate limits
    if (i < remaining.length) {
      await sleep(5000);
    }
  }

  writeFileSync(outPath, JSON.stringify(results, null, 2) + "\n");
  console.log(`\nDone! ${results.length} featured projects saved to ${outPath}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
