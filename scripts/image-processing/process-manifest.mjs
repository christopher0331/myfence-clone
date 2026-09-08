#!/usr/bin/env node

/**
 * Incremental manifest processor.
 *
 * - Reads a manifest JSON (from scripts/image-processing/manifests/<file>.json,
 *   or pass an explicit path).
 * - Appends any rows whose `file` is NOT already in src/data/serviceAreaPhotos.json.
 * - For every city/neighborhood in the manifest that is NOT already in
 *   src/data/featuredProjects.json, generates one featured-project entry via
 *   OpenAI vision and appends it.
 *
 * Never reprocesses or overwrites existing entries.
 *
 * Usage:
 *   set -a && . ./.env && set +a
 *   node scripts/image-processing/process-manifest.mjs                       # use newest manifest
 *   node scripts/image-processing/process-manifest.mjs 2026-05-16-foo.json   # by filename
 *   node scripts/image-processing/process-manifest.mjs path/to/manifest.json # by path
 *
 * Required env: OPENAI_API_KEY
 */

import {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
} from "node:fs";
import { resolve, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "../..");
const MANIFESTS_DIR = resolve(__dirname, "manifests");
const PHOTOS_PATH = resolve(REPO_ROOT, "src/data/serviceAreaPhotos.json");
const FEATURED_PATH = resolve(REPO_ROOT, "src/data/featuredProjects.json");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error(
    "ERROR: Set OPENAI_API_KEY env var (run `set -a && . ./.env && set +a` first)."
  );
  process.exit(1);
}

const MODEL = "gpt-4o";
const ENDPOINT = "https://api.openai.com/v1/chat/completions";
const IMAGEKIT_BASE = "https://ik.imagekit.io/xft9mcl5v/service-area-photos";

const FENCE_STYLES = [
  { name: "Picture Frame Fence", slug: "picture-frame-fence" },
  { name: "3-Rail Picture Frame Fence", slug: "3-rail-picture-frame-fence" },
  { name: "Solid Board Fence", slug: "solid-board-fence" },
  { name: "Shadow Box Fence", slug: "shadow-box-fence" },
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

function loadJSONArray(path) {
  if (!existsSync(path)) return [];
  try {
    const data = JSON.parse(readFileSync(path, "utf-8"));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function resolveManifestPath(arg) {
  if (arg) {
    const candidates = [
      resolve(process.cwd(), arg),
      resolve(MANIFESTS_DIR, arg),
      resolve(MANIFESTS_DIR, arg.endsWith(".json") ? arg : `${arg}.json`),
    ];
    const hit = candidates.find((p) => existsSync(p));
    if (hit) return hit;
    console.error(`Manifest not found. Tried:\n  ${candidates.join("\n  ")}`);
    process.exit(1);
  }
  if (!existsSync(MANIFESTS_DIR)) {
    console.error(`No manifests directory at ${MANIFESTS_DIR}`);
    process.exit(1);
  }
  const files = readdirSync(MANIFESTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();
  if (!files.length) {
    console.error(`No manifests in ${MANIFESTS_DIR}`);
    process.exit(1);
  }
  return resolve(MANIFESTS_DIR, files[files.length - 1]);
}

/** Derive a fence-style hint from the photo filename. The contractor names
 *  files like "Maple-Woods-Shadow-Box-Fence-1.webp" — the middle words are
 *  the most reliable signal for what was actually installed. */
function fenceStyleHintFromFile(file) {
  const name = basename(file).replace(/\.[^.]+$/, "");
  const stripped = name.replace(/-\d+$/, "");
  return stripped.split("-").filter(Boolean).join(" ");
}

function buildPrompt(city, neighborhood, hint) {
  const location = neighborhood
    ? `${neighborhood}, ${city}, WA`
    : `${city}, WA`;
  const fenceList = FENCE_STYLES.map((s) => `${s.name} → ${s.slug}`).join(
    ", "
  );

  return `You are an SEO copywriter for MyFence.com, a premium fence installation company in the Pacific Northwest.

Analyze this fence installation photo taken in ${location}.

Available fence styles (name → slug): ${fenceList}.

IMPORTANT: The contractor who built and labeled this project tagged it as: "${hint}". Treat this label as the most reliable signal for the fence style — match it to the closest entry from the available styles. Only override the contractor label if the photo unambiguously shows a different style.

Return a JSON object (no markdown fences, just raw JSON) with these exact keys:

{
  "fenceStyle": "Fence style name from the list (default to the contractor-label match)",
  "fenceStyleSlug": "Matching slug from the list",
  "features": ["2-5 visible features like Post-on-Pipe, Board-on-Board, Pre-Stained Cedar, Lattice Topper, Custom Gate, Stepped for Slope"],
  "estimatedFootage": "Rough estimate like ~120 linear feet, or null if impossible to tell",
  "seoTitle": "An SEO-optimized title like: Cedar Privacy Fence Installation in ${location}",
  "description": "Write 3-4 sentences for a Featured Project section. Mention ${location} by name. Describe what you see. Write in third person about MyFence.com. Read like a real project case study, not generic marketing. Include 'fence installation in ${neighborhood || city}' naturally.",
  "altText": "SEO-friendly alt text, 15-25 words, mentioning the fence style and ${location}"
}`;
}

async function callOpenAI(photo, city, neighborhood, hint) {
  const imageUrl = `${IMAGEKIT_BASE}/${photo.file}?tr=w-800`;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      temperature: 0.5,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: { url: imageUrl, detail: "low" },
            },
            { type: "text", text: buildPrompt(city, neighborhood, hint) },
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI API ${res.status}: ${text.slice(0, 300)}`);
  }

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content || "";
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
          `  ⏳ Rate limited, retrying in ${(wait / 1000).toFixed(
            1
          )}s (attempt ${attempt + 1}/${maxRetries})...`
        );
        await sleep(wait);
      } else {
        throw err;
      }
    }
  }
}

function groupByLocation(entries) {
  const map = new Map();
  for (const p of entries) {
    if (!p || !p.file || !p.city) continue;
    const key = `${p.city}|||${p.neighborhood || ""}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(p);
  }
  return map;
}

// ---------------------------------------------------------------------------

async function main() {
  const manifestPath = resolveManifestPath(process.argv[2]);
  console.log(`Manifest:        ${manifestPath}`);
  console.log(`Photos file:     ${PHOTOS_PATH}`);
  console.log(`Featured file:   ${FEATURED_PATH}\n`);

  const manifest = loadJSONArray(manifestPath);
  if (!manifest.length) {
    console.error("Manifest is empty or not a JSON array. Aborting.");
    process.exit(1);
  }

  // ---- Step 1: merge new photo rows into serviceAreaPhotos.json
  const photos = loadJSONArray(PHOTOS_PATH);
  const existingFiles = new Set(
    photos.filter((p) => p && typeof p.file === "string").map((p) => p.file)
  );
  const newPhotos = manifest.filter(
    (p) => p && typeof p.file === "string" && !existingFiles.has(p.file)
  );

  if (newPhotos.length === 0) {
    console.log("All manifest photos already exist in serviceAreaPhotos.json.");
  } else {
    photos.push(...newPhotos);
    writeFileSync(PHOTOS_PATH, JSON.stringify(photos, null, 2) + "\n");
    console.log(
      `Added ${newPhotos.length} new photo(s) to serviceAreaPhotos.json.`
    );
  }

  // ---- Step 2: process new city/neighborhood combos for featuredProjects.json
  const featured = loadJSONArray(FEATURED_PATH);
  const doneKeys = new Set(
    featured.map((r) => `${r.city}|||${r.neighborhood || ""}`)
  );
  const grouped = groupByLocation(manifest);
  const remaining = Array.from(grouped.entries()).filter(
    ([key]) => !doneKeys.has(key)
  );

  if (remaining.length === 0) {
    console.log("\nAll locations in this manifest already have featured projects. Nothing to do.");
    return;
  }

  console.log(
    `\n${remaining.length} new location(s) need a featured project.\n`
  );

  let i = 0;
  for (const [key, locationPhotos] of remaining) {
    const [city, neighborhood] = key.split("|||");
    const photo = locationPhotos[0];
    const label = neighborhood || city;
    const hint = fenceStyleHintFromFile(photo.file);
    i++;

    console.log(`[${i}/${remaining.length}] ${label}, ${city}  (hint: "${hint}")`);

    try {
      const analysis = await callWithRetry(() =>
        callOpenAI(photo, city, neighborhood || null, hint)
      );

      if (analysis) {
        featured.push({
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

        writeFileSync(
          FEATURED_PATH,
          JSON.stringify(featured, null, 2) + "\n"
        );
      } else {
        console.log("  ✗ Skipped (parse failure)");
      }
    } catch (err) {
      console.error(`  ✗ Error: ${err.message}`);
    }

    if (i < remaining.length) await sleep(2000);
  }

  console.log(
    `\nDone. ${featured.length} total featured projects in ${FEATURED_PATH}`
  );
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
