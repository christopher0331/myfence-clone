# Service-Area Image Processing

This is the **agent instruction file** for processing geocoded image manifests
from the field crew. When Chris pastes a manifest in chat, the agent reading
this file is expected to follow the procedure below end-to-end.

```
scripts/image-processing/
├── README.md                ← you are here (agent instructions)
├── process-manifest.mjs     ← incremental processor (writes data files)
└── manifests/
    └── YYYY-MM-DD-<label>.json   ← one file per batch, never edited later
```

---

## Big picture

There are three layers that turn raw uploads into real customer-visible pages:

1. **Data** — `src/data/serviceAreaPhotos.json` (gallery source of truth) and
   `src/data/featuredProjects.json` (per-location project cards).
2. **City pages** — most live under `src/app/service-areas/<city>/page.tsx`
   and import a component from `src/components/service-areas/<city>.tsx`. Some
   are templated (use `ServiceAreaTemplate` directly, e.g. `kent`), others
   are full custom components with hardcoded neighborhood lists. **Both
   patterns are valid** — do not refactor custom city components to auto-pull
   neighborhoods.
3. **Neighborhood pages** — live at `src/app/service-areas/<city>/<neighborhood>/page.tsx`
   plus a component at `src/components/neighborhoods/<Name>Page.tsx`. Not
   every neighborhood listed on a city page has a dedicated subpage yet —
   the hardcoded list on the city page doubles as a **TODO checklist** of
   pages we still need to build.

Photos for a neighborhood always also surface in the parent city's gallery
(via `getCityPhotosBySlug` in `serviceAreaPhotoUtils.ts`), so no extra
plumbing is needed to "add neighborhood images to the parent service area
page" — that happens automatically once the row is in
`serviceAreaPhotos.json`.

---

## Workflow when a new manifest arrives

When Chris pastes a manifest in chat, do these steps in order. Treat this as
a strict procedure, not suggestions.

### Step 1 — Save the manifest

Save the pasted JSON to:

```
scripts/image-processing/manifests/YYYY-MM-DD-<label>.json
```

- `YYYY-MM-DD` = today's date.
- `<label>` = short lowercase-kebab summary of what's in it, e.g.
  `kent-maple-woods` or `renton-cleveland-place`.
- Never edit a previously saved manifest. Each batch is its own file.

### Step 2 — Process the manifest

From the repo root, with `.env` loaded:

```bash
set -a && . ./.env && set +a
node scripts/image-processing/process-manifest.mjs
```

(No argument = picks the newest manifest. Pass a filename to target a
specific one.)

The script will:

- Append any rows whose `file` is not already in `serviceAreaPhotos.json`.
- For every NEW `city + neighborhood` combo introduced by the manifest, call
  OpenAI vision to generate a featured-project entry and append it to
  `featuredProjects.json`.
- Skip anything already processed. Never reorders or overwrites existing
  rows.

### Step 3 — Detect new neighborhoods and missing pages

For every distinct `city + neighborhood` (non-null) row in the manifest:

1. Compute slugs: `slugifyLocation(city)` and `slugifyLocation(neighborhood)`
   from `src/lib/serviceAreaPhotoUtils.ts`.
2. Check whether a dedicated neighborhood page already exists at:

   ```
   src/app/service-areas/<city-slug>/<neighborhood-slug>/page.tsx
   ```

3. If it **does NOT exist**, create one. **Before writing the page**, read:

   ```
   @src/components/neighborhoods/neighborhood-template.md
   ```

   That file is the authoritative spec for what a neighborhood page must
   contain (15 sections, structured data, FAQ, AboutTheArea, etc.). Follow
   it strictly. Pull project descriptions from the new `featuredProjects.json`
   entry generated in Step 2.

   You'll create two files:

   - `src/components/neighborhoods/<Name>Page.tsx` — the component.
   - `src/app/service-areas/<city-slug>/<neighborhood-slug>/page.tsx` — the
     route that imports it and exports metadata.

4. If it **does exist**, nothing to create. The new photos and featured
   project will already surface through `ServiceAreaPhotoGallery` and
   `FeaturedProject`, which auto-filter by city + neighborhood.

### Step 4 — Wire the neighborhood into the parent city page

Open `src/components/service-areas/<city>.tsx` (note the squashed lowercase
filename, e.g. `maplevalley.tsx`, not `maple-valley.tsx`).

Find the hardcoded `neighborhoods={[...]}` array passed to
`ServiceAreaTemplate`.

- **If an entry for this neighborhood already exists without a `link`** (it
  was a TODO checklist entry), add the `link` field pointing to the new
  page, and update the trailing copy to end with `Click to learn more →`.
- **If no entry exists**, append a new one to the array following the
  existing pattern:

  ```ts
  {
    name: "<Neighborhood>",
    description: "<1–2 sentence description ending in> Click to learn more →",
    link: "/service-areas/<city-slug>/<neighborhood-slug>"
  }
  ```

Do **not** convert the hardcoded array into an auto-pulled list. Custom
city components stay custom. The hardcoded entries are an editorial
checklist Chris maintains.

### Step 5 — Handle city-level (neighborhood-less) photos

If a manifest row has `neighborhood: null`, no page work is needed. The
row goes into `serviceAreaPhotos.json` and automatically appears in that
city's gallery via `ServiceAreaPhotoGallery`. The corresponding
`featuredProjects.json` entry (city, neighborhood: null) populates the
city-level featured project card.

If a manifest row points to a **city we don't have a service-area page for
yet**, stop and ask Chris which existing service-area page is closest
(geographically) — those photos should be attached there. Do not silently
create a new city page; that's outside this workflow.

### Step 6 — Spot-check

Tell Chris what to look at:

- For each new neighborhood page created: the URL
  `/service-areas/<city-slug>/<neighborhood-slug>`.
- For each city that received new photos: `/service-areas/<city-slug>`
  (gallery + featured project card).
- For each existing neighborhood that received more photos:
  `/service-areas/<city-slug>/<neighborhood-slug>` (gallery should now
  include them).

---

## Manifest schema

Each manifest is a JSON array. Required fields per row:

```jsonc
{
  "file": "Kent/Kent-3-Rail-Fence-1.webp",   // dedup key, ImageKit path
  "city": "Kent",
  "neighborhood": null,                        // string or null
  "cityAlt": "Kent 3 Rail Fence 1",
  "neighborhoodAlt": null,                     // required if neighborhood is set
  "lat": 47.3433833333333,
  "lng": -122.0636,
  "width": 1920,
  "height": 2560
}
```

Optional but commonly present: `originalFile`, `sizeBytes`, `size`, `url`.

`src/lib/serviceAreaPhotoUtils.ts` enforces this shape at read time — rows
missing required fields are silently filtered out of the galleries. If a
manifest is missing fields, fix it at the source rather than papering over
the gap.

---

## Fence-style detection (filename hint)

The contractor names photo files like `Maple-Woods-Shadow-Box-Fence-1.webp`.
`process-manifest.mjs` extracts the middle portion ("Maple Woods Shadow Box
Fence") and passes it to OpenAI as the **contractor label** — the model is
instructed to trust this label over what it thinks it sees, because
look-alike styles (Shadow Box vs Solid Board, Picture Frame vs 3-Rail)
photograph similarly.

If a row comes back with an obviously wrong `fenceStyle`, hand-edit that
single entry in `featuredProjects.json`. Do not rerun the whole pipeline —
the script never re-processes existing rows, so a rerun won't fix it
anyway.

---

## Supported fence styles

Defined in `FENCE_STYLES` at the top of `process-manifest.mjs`. Add new
styles there (with their slug) **before** processing a manifest that
introduces them, otherwise OpenAI will snap to the closest existing one.

Current list:

- Picture Frame Fence → `picture-frame-fence`
- 3-Rail Picture Frame Fence → `3-rail-picture-frame-fence`
- Solid Board Fence → `solid-board-fence`
- Shadow Box Fence → `shadow-box-fence`
- Craftsman Style Fence → `craftsman-style-fence`
- Horizontal Fence → `horizontal-fence`
- Horizontal Lattice Fence → `horizontal-lattice-fence`
- Black Hogwire Fence → `black-hogwire-fence`
- Galvanized Hogwire Fence → `galvanized-hogwire-fence`
- 3ft Black Hogwire Fence → `three-ft-black-hogwire-fence`
- Cedar & Steel Hybrid Fence → `cedar-steel-hybrid-fence`
- Picket Fence → `picket-fence`

---

## Required environment

- **`OPENAI_API_KEY`** — must be in `.env` at repo root. The shell snippet
  above (`set -a && . ./.env && set +a`) sources it.

---

## Downstream consumers

- `src/data/serviceAreaPhotos.json` → consumed by
  `src/lib/serviceAreaPhotoUtils.ts`, which powers every gallery, dynamic
  service-area route, and the sitemap.
- `src/data/featuredProjects.json` → consumed by
  `src/components/service-areas/FeaturedProject.tsx` to render featured
  project cards and structured data.

---

## Hard rules for the agent

- **Never** delete or re-order existing rows in either data file.
- **Never** modify a previously saved manifest under `manifests/`.
- **Never** convert a custom city component's hardcoded neighborhood list
  into an auto-pulled list. Custom city components stay custom. Hardcoded
  entries are an editorial checklist.
- **Always** read `@src/components/neighborhoods/neighborhood-template.md`
  before creating a new neighborhood page.
- **Always** capitalize city and neighborhood names in titles, meta
  descriptions, and visible copy ("Maple Valley", "Maple Woods" — never
  lowercase).
- **Always** add `| MyFence.com` suffix to neighborhood page titles.
- **Never** copy descriptions from competitor sites (see
  `.cursor/rules/no-copied-content.mdc`).
- **Never** make unverified construction claims (e.g. "board-on-board",
  "post-on-pipe") in copy unless confirmed from project data.

---

## Quick reference for Chris

When you paste a new manifest in chat, just say "process the new manifest"
and point me at this file (`@scripts/image-processing/README.md`). I will:

1. Save it under `manifests/YYYY-MM-DD-<label>.json`.
2. Run the incremental processor.
3. Create dedicated pages for any new neighborhoods that don't have one
   yet (following the neighborhood template).
4. Wire new neighborhoods into the parent city's neighborhood list.
5. Tell you exactly which URLs to spot-check.
