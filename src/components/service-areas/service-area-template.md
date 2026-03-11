# Service Area (City-Level) Page Template

Reference for creating and maintaining city-level service area pages (e.g., `/service-areas/bellevue`). Use **Bellevue** as the most robust example.

---

## File Structure

Each city needs **2 files**:

1. **Component**: `src/components/service-areas/{cityname}.tsx` (lowercase, no hyphens — e.g., `bellevue.tsx`, `bonneylake.tsx`)
2. **Route**: `src/app/service-areas/{city-slug}/page.tsx` (kebab-case — e.g., `bellevue/page.tsx`, `bonney-lake/page.tsx`)

When you add **neighborhood pages** under a city, create:
- Neighborhood component: `src/components/neighborhoods/{Name}Page.tsx`
- Route: `src/app/service-areas/{city-slug}/{neighborhood-slug}/page.tsx`
- Add a `link` on the city's `neighborhoods` prop to that route (see **Neighborhoods** below).

Existing cities: bellevue, bonneylake, issaquah, tukwila, renton, seatac, blackdiamond, redmond, kirkland, mountlaketerrace, northbend, sumner, sammamish, seattle, maplevalley, laketapps, gigharbor, enumclaw, federalway, covington

---

## Architecture Overview

City pages use the **shared `ServiceAreaTemplate`** component (`src/components/templates/ServiceAreaTemplate.tsx`). Each city component provides:

- City-specific props (hero, meta, **neighborhoods**, landmarks, **climate**, etc.)
- A custom `{City}Article` component with deep content (including **local regulations / permits**)
- Optional: `faqStructuredData`, `enhancedBusinessData`
- `AboutTheArea` rendered **outside** the template in a fragment (see A8)

```tsx
const Bellevue = () => {
  const faqStructuredData = { /* FAQPage JSON-LD */ };
  const enhancedBusinessData = { /* LocalBusiness + offers */ };

  return (
    <>
      <ServiceAreaTemplate
        city="Bellevue"
        state="WA"
        heroTitle="..."
        heroDescription="..."
        metaTitle="..."
        metaDescription="..."
        zipCodes={["98004", "98005"]}
        neighborhoods={[...]}   // See Neighborhoods section below
        landmarks={[...]}
        climateDescription="..."
        articleContent={<BellevueArticle />}
        faqStructuredData={faqStructuredData}
        enhancedBusinessData={enhancedBusinessData}
      />
      <AboutTheArea cityName="Bellevue" attractions={...} localLivingContent={...} />
    </>
  );
};
```

---

## Template-Level Sections (ServiceAreaTemplate)

The template renders these sections automatically from props:

### 1. Hero Section
- Props: `heroTitle`, `heroDescription`
- Auto-includes: MapPin + "Serving {City}, {State}", phone CTA, "Get Free Quote" button, `GoogleBusinessMap` (city, state, radiusMiles, showBusinessInfo)

### 2. Services Grid
- Auto-generated 6-card grid: Installation, Repair, Staining, Replacement, Custom Designs, Commercial (each with city name)

### 3. Why Choose Us
- Auto-generated 2x2 grid: Fast & Reliable, Licensed & Insured, Quality Materials, Local Experts (Local Experts mentions city regulations/permits)

### 4. Trustindex Reviews
- "What Our {City} Customers Say" — Trustindex widget via `useTrustindexReviews`

### 5. AI Summary
- `ArticleSummary` with city and Fence Genius messaging

### 6. City Fencing Video (conditional)
- Rendered only for cities with a video block in `ServiceAreaTemplate.tsx` (North Bend, Bonney Lake, Renton, Issaquah, Maple Valley, Covington, SeaTac, Tukwila, Black Diamond). To add a new city video: add a conditional block in the template.

### 7. Local Climate Expertise
- Prop: `climateDescription`
- Card with Sun icon; "Read more" toggle if text is long

### 8. Neighborhoods & Areas We Serve ⭐
- **Props:** `neighborhoods`, `landmarks`, `zipCodes`
- **Neighborhoods:** Rendered as cards in a 2–3 column grid. Each item can be:
  - **Object** `{ name, description, link? }`: full card with title, description; if `link` is set, the card is clickable with "Learn More →" and links to the neighborhood page.
  - **String**: name only (pill-style).
- **Landmarks:** "Serving Properties Near" — pill badges.
- **Zip codes:** Pill badges.
- **Best practice:** Prefer objects with `name` + `description` for every neighborhood. Add `link: "/service-areas/{city}/{neighborhood}"` when a dedicated neighborhood page exists (see `neighborhood-template.md` for creating those pages).

**Neighborhood type:**

```ts
interface Neighborhood {
  name: string;
  description: string;
  link?: string;  // e.g. "/service-areas/bellevue/somerset" → card becomes "Learn More →" link
}
```

**Example (Bellevue):**

```ts
neighborhoods={[
  { name: "Somerset", description: "Hillside properties with panoramic views...", link: "/service-areas/bellevue/somerset" },
  { name: "Newport Hills", description: "Wooded hillside community...", link: "/service-areas/bellevue/newport-hills" },
  { name: "Crossroads", description: "Diverse residential area...", link: undefined },
  // ...
]}
```

### 9. Fence Styles Preview
- Auto-rendered `FenceStylesPreview` with city name

### 10. Quote Form
- `InlineQuoteForm` with context set to the city

### 11. Article Content (custom)
- Prop: `articleContent` — the **city-specific long-form content**, including **local regulations** (see below).

---

## Article Content Sections (custom per city)

The `{City}Article` component holds the main SEO and trust content. Structure it like Bellevue:

### A1. Company Introduction
- H2: "Your Local {City} Fence Company" (vary the heading — don't always start with city name)
- 4-column stat cards: Years Experience | On-Time Rate | Star Rating | Review Count
- Intro paragraph about MyFence.com serving this city

### A2. Fence Installation Details
- H2: vary heading (e.g., "How We Install Fences in {Area}" not "{City} Fence Installation")
- 2 paragraphs: process, Fence Genius, on-time rate, terrain handling

### ~~A3. Why Choose MyFence.com~~ — REMOVED
- **DO NOT** add a "Why Choose Us" section in the article. The template (section 3) auto-generates one. Adding another creates a duplicate that hurts readability and looks over-optimized.

### A3. Fence Types & Materials
- H2: "Fence Types & Materials We Install" (not "{City} Fence Types & Materials")
- H3s should vary — not all starting with city name. Examples: "Cedar Fencing for the Eastside", "What We Specialize In", "Hybrid Aluminum — Low Maintenance, Modern Look"
- H3: Cedar details — Western Red Cedar, marine-grade fasteners, Post-on-Pipe link
- H3: What we specialize in — cedar, hogwire, hybrid
- H3: "Understanding Other Fence Materials" — info-only (vinyl, composite, aluminum), disclaimer that we don't install these
- H3: Hybrid system details

### A4. Financing Options
- H2: "Financing Your New Fence" (not "{City} Fence Financing Options")
- Bullet list of Wisetack features + "Get Pre-Approved" CTA card; link to `/financing`

### A5. Warranty Coverage
- H2: "Industry-Leading Warranty Coverage"
- Warranty card (Shield icon) + coverage bullets; note on transferability

### A6. Local Challenges & Solutions
- H2: "Installation Expertise for Local Terrain" (not "{City}-Specific Installation Expertise")
- 2-column layout: "⚠ Local Challenges" (5–6 bullets) | "✓ Our Solutions" (5–6 matching solutions with CheckCircle icons)
- **DO NOT** also pass `localChallenges`/`localSolutions` as template props — this creates duplicate content on the page. Pick one location only (article is better since it's more detailed).

### A7. Local Regulations: Permits & Property Lines ⭐ REQUIRED
- **H2:** "Permits, Materials, and Local Tips" or "What to Know Before Building a Fence in {City}" — vary per city
- **H3: Why Fence Planning Differs by City**  
  One paragraph on why this city is unique (HOA landscape, climate, terrain, codes).
- **H3: Permits and Property Line Requirements**  
  - Cite **actual municipal codes** with links to the city’s official site (development services, zoning, fence height/setback).
  - Include: permit required or not, height limits, front/side setback rules, corner/sight-obstruction rules, critical areas/shoreline if applicable.
  - Recommend a professional survey for property lines; note building on your side of the line.
  - End with a line like: "For more detail, see [LUC 20.20.400] or contact {City} Development Services at [phone]."
- **H3: Frequently Asked Questions**  
  One Card containing 4–5 Q&As: timeline, cost, neighbors (RCW 16.60.020 link), best time to install, materials that work in this city.
- **Disclaimer block** (muted background):  
  "Building codes and HOA regulations are subject to change. Always verify current requirements with the [City of {City} Development Services] and your HOA before beginning any fence project."

**Example (Bellevue):**  
Permits section links to City of Bellevue Development Services (fences), Land Use Code 20.20.400, BCC 14.60.240/241, LUC 20.25E/20.25H for critical areas. Research your city’s equivalent pages and link to them.

### A8. About the Area (Discover {City}) ⭐ REQUIRED
- Uses the `AboutTheArea` component (`@/components/AboutTheArea`)
- **Two-column layout** with optional images and rich content
- **IMPORTANT: Render OUTSIDE the article**, not inside `articleContent`. The article is wrapped in `max-w-4xl` which crushes the two-column layout. Render `AboutTheArea` as a sibling after `ServiceAreaTemplate` inside a fragment (see example below).
- **Column 1 — Attractions:** Heading + bulleted list of local attractions, each with:
  - `name`: attraction name (rendered as external link with icon)
  - `url`: real URL to the attraction's website (MUST be a real, working link)
  - `description`: 1-2 sentences — **100% original writing, NEVER copied from other websites**
  - 5-6 attractions per city (parks, museums, shopping, restaurants, landmarks)
- **Column 2 — Local Living:** Heading + paragraphs with inline external links to:
  - School districts, colleges, libraries, parks departments, restaurants, trails, farmers markets
  - **Every `<a>` tag MUST include** `className="font-semibold text-primary underline decoration-2 underline-offset-4"` — Tailwind arbitrary child selectors do NOT work here
  - Aim for 6-8 external links across 2 paragraphs
- **Images:** Optional. Only use images you own (ImageKit). Do NOT hotlink from other websites or Wikimedia.

**Rendering pattern (OUTSIDE the article):**
```tsx
const City = () => {
  return (
    <>
      <ServiceAreaTemplate
        city="CityName"
        articleContent={<CityArticle />}
        // ... other props
      />
      <AboutTheArea
        cityName="CityName"
        attractions={CITY_ATTRACTIONS}
        localLivingContent={<>...</>}
      />
    </>
  );
};
```

**Attractions data:**
```tsx
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";

const CITY_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Local Park Name",
    url: "https://real-url-to-park.org/",
    description: "Original description with specific local details. Never copy from competitor sites.",
  },
  // ... 4-5 more
];
```

**Local Living links (inline className required):**
```tsx
<a href="https://example.org" target="_blank" rel="noopener noreferrer"
   className="font-semibold text-primary underline decoration-2 underline-offset-4">
  Link Text
</a>
```

**Research checklist for About the Area:**
- [ ] 5-6 real local attractions with working URLs — original descriptions only
- [ ] Optional: area images from ImageKit (do NOT hotlink external images)
- [ ] School district link
- [ ] City government or parks department link
- [ ] 2-3 restaurant/dining links (different from competitors)
- [ ] Parks/trails link
- [ ] Community events, library, or farmers market link
- [ ] All inline `<a>` tags have explicit link className
- [ ] Component rendered OUTSIDE `articleContent`, not inside it

---

## Props Reference

```ts
interface ServiceAreaTemplateProps {
  city: string;
  state: string;
  heroTitle?: string;
  heroDescription?: string;
  metaTitle?: string;
  metaDescription?: string;
  zipCodes?: string[];
  neighborhoods?: (string | Neighborhood)[];
  landmarks?: string[];
  localChallenges?: string[];    // ⚠ AVOID if article already covers challenges (creates duplicate content)
  localSolutions?: string[];     // ⚠ AVOID if article already covers solutions (creates duplicate content)
  climateDescription?: string;
  articleContent?: React.ReactNode;
  faqStructuredData?: any;       // FAQPage JSON-LD
  enhancedBusinessData?: any;    // Enhanced LocalBusiness JSON-LD
  videoTags?: VideoTag[];        // [{ label, link }] for video section
}

interface Neighborhood {
  name: string;
  description: string;
  link?: string;   // If set, card links to neighborhood page ("Learn More →")
}
```

---

## Structured Data

### Auto-generated by ServiceAreaTemplate
- **BreadcrumbList**: Home → Service Areas → {City}
- **LocalBusiness**: basic info, address, geo, opening hours, aggregate rating, offer catalog, reviews (Trustindex), social links
- **Normalization Standard (applied automatically):**
  - Canonical identity enforced: `@context`, `@id`, and `url` are pinned to `https://myfence.com/service-areas/{city-slug}`.
  - Type safety enforced: root `@type` always includes both `LocalBusiness` and `HomeAndConstructionBusiness`.
  - Review consistency enforced: `aggregateRating.reviewCount` is derived from live Trustindex reviews.
  - Offer consistency enforced: unsupported services (e.g. **vinyl**/**composite**) are removed from `hasOfferCatalog` to prevent content/schema mismatch.
  - Coverage consistency enforced: `areaServed` includes the city and a `GeoCircle` when coordinates are available.

### Custom (pass as props)

- **faqStructuredData** — FAQPage with 4–5 city-specific questions (timeline, cost, neighbors, best time, materials).
- **enhancedBusinessData** — Richer LocalBusiness: `@type: ["LocalBusiness", "HomeAndConstructionBusiness"]`, `alternateName`, `hasOfferCatalog` (**Cedar/Hogwire/Hybrid + real offered services only**), `knowsAbout`, `areaServed` (City + GeoCircle), `sameAs`, `paymentAccepted`, etc. See Bellevue for full shape.

---

## Route Page Pattern

```tsx
import type { Metadata } from "next";
import CityName from "@/components/service-areas/{cityname}";

export const metadata: Metadata = {
  title: "{City} Fence Installation | {Differentiator} | MyFence.com",
  description: "Professional fence installation in {City}, WA. ...",
  alternates: {
    canonical: "https://myfence.com/service-areas/{city-slug}",
  },
};

export default function CityPage() {
  return <CityName />;
}
```

---

## Components Used

| Component | Import | Purpose |
|-----------|--------|---------|
| `ServiceAreaTemplate` | `@/components/templates/ServiceAreaTemplate` | Main layout |
| `Card` | `@/components/ui/card` | Content cards |
| `Button` | `@/components/ui/button` | CTAs |
| `Link` | `next/link` | Internal links |
| `AboutTheArea` | `@/components/AboutTheArea` | Discover {City} section with attractions + local living |
| `ServiceAreaPhotoGallery` | `@/components/service-areas/ServiceAreaPhotoGallery` | Geo-tagged project photo carousel (auto-filtered by city) |
| `FeaturedProject` | `@/components/service-areas/FeaturedProject` | Featured project spotlight with photo + description |
| `WARRANTY_CONSTANTS` | `@/constants/warranty` | Warranty years |
| Lucide icons | `lucide-react` | Shield, Clock, Award, CheckCircle2, etc. |

Template also uses: `GoogleBusinessMap`, `InlineQuoteForm`, `ArticleSummary`, `FenceStylesPreview`, `useTrustindexReviews`.

### ServiceAreaPhotoGallery Notes
- Renders geotagged WebP project photos from `src/data/serviceAreaPhotos.json`
- **3 or fewer photos**: displays as a centered grid (no carousel animation)
- **4+ photos**: scrolling marquee carousel with speed controls
- Uses ImageKit CDN for responsive image transforms
- Photos are filtered by city/neighborhood automatically

### FeaturedProject Notes
- Displays a single highlighted project from `src/data/featuredProjects.json`
- Data fields: `city`, `neighborhood`, `photoFile`, `fenceStyle`, `seoTitle`, `description`, `altText`, `lat`, `lng`
- **Use generic fence style language** ("Cedar Privacy Fence") — do NOT specify construction methods (board-on-board, post-on-pipe) unless verified from actual project data
- Each city/neighborhood description MUST be unique to avoid doorway page penalties
- Includes `ImageObject` structured data for SEO

---

## Content Guidelines

### Word count
- Minimum **2,000 words** of unique article content per city; aim for 3,000+ for top-tier cities (like Bellevue).

### Research before writing
1. **Municipal fence codes** — Permit yes/no, height limits, setbacks, corner/sight rules. Link to official city code pages.
2. **HOA landscape** — Major HOAs or neighborhoods with design review.
3. **Climate/terrain** — What’s unique about this city (e.g. Bellevue dual-lake moisture, Somerset hills).
4. **Landmarks** — 5–7 recognizable landmarks.
5. **Neighborhoods** — 6–12 with 1-sentence descriptions; add `link` when a neighborhood page exists.
6. **Zip codes** — All zips the city covers.

### SEO title
`{City} Fence Installation | {Key Differentiator} | MyFence.com`

### Meta description
~160 chars: Professional {City} fence installation. Cedar, hogwire & hybrid. {Differentiator}. {Social proof}. Call (253) 455-1885 for free quote.

---

## SEO Rules

### DO
- Write **100% unique** article content per city.
- Cite **actual municipal codes** with links to official city sites.
- Include **local details**: neighborhood names, landmarks, climate, home styles.
- Use **neighborhoods** with `name` + `description`; set `link` when a neighborhood page exists (see `neighborhood-template.md`).
- Add **enhanced structured data** (FAQPage + enhanced LocalBusiness).
- Include **local regulations** (A7) with permit/height/setback info and disclaimer.
- Link to fence styles, upgrades, and `/financing`.
- **Vary H2/H3 headings** — NOT every heading should start with the city name. Mix in variations like "Cedar Fencing for the Eastside", "Financing Your New Fence", "Installation Expertise for Local Terrain". Keyword stuffing H2s with the city name triggers over-optimization penalties.
- **Capitalize city names** properly in title and meta description (e.g., "Bellevue" not "bellevue").
- Include **"| MyFence.com"** in the page title.

### DON'T
- Reuse article content between cities with name swaps.
- List neighborhoods without descriptions.
- Skip permit/code research or omit official links.
- Create city pages without at least 6 neighborhoods and 5 landmarks.
- Forget to add new routes to the sitemap if needed.
- **DO NOT** add a "Why Choose Us" section in the article — the template auto-generates one (section 3). Duplicating it looks spammy.
- **DO NOT** pass `localChallenges`/`localSolutions` as template props AND include them in the article — pick one location only. The article is preferred since it allows more detail.
- **DO NOT** copy content from competitor websites. All descriptions, attraction write-ups, and local living content must be 100% original. (See `.cursor/rules/no-copied-content.mdc`)
- **DO NOT** hotlink images from external websites or Wikimedia. Only use images hosted on ImageKit that you own.
- **DO NOT** make claims about fence construction details (board-on-board, post-on-pipe, etc.) unless verified from actual project data. Generic "cedar privacy fence" language is safe.

---

## Checklist for New or Updated City Page

- [ ] Component at `src/components/service-areas/{cityname}.tsx`
- [ ] Route at `src/app/service-areas/{city-slug}/page.tsx` — title capitalized, includes "| MyFence.com"
- [ ] `AboutTheArea` rendered OUTSIDE `ServiceAreaTemplate` in a fragment: 5-6 attractions with URLs, local living content with inline link classNames
- [ ] `heroTitle`, `heroDescription`, `metaTitle`, `metaDescription` — city name capitalized
- [ ] `zipCodes` (all zips for city)
- [ ] `neighborhoods` (6+ entries: `name`, `description`; `link` where neighborhood page exists)
- [ ] `landmarks` (5+)
- [ ] `climateDescription`
- [ ] Article: A1–A8 including **local regulations (A7)** with municipal code links
- [ ] **NO duplicate "Why Choose Us"** in article (template generates one)
- [ ] **NO `localChallenges`/`localSolutions` props** if article covers them (avoid duplicate content)
- [ ] **H2/H3 headings vary** — not all starting with city name
- [ ] FAQ in article + `faqStructuredData` (4–5 questions)
- [ ] `enhancedBusinessData` (optional but recommended)
- [ ] Internal links to fence styles, upgrades, financing
- [ ] Video section in `ServiceAreaTemplate.tsx` if city has footage
- [ ] Sitemap updated if required
- [ ] All content is 100% original — nothing copied from competitors
- [ ] No unverified construction claims (use "cedar privacy fence" generically)
- [ ] No hotlinked external images — ImageKit only

---

## Linking to Neighborhood Pages

When you add a new neighborhood page under a city:

1. Create the neighborhood component and route per **`neighborhood-template.md`**.
2. In the city component’s `neighborhoods` array, set **`link`** for that neighborhood to the new route, e.g. `link: "/service-areas/bellevue/newport-hills"`.
3. The ServiceAreaTemplate will render that neighborhood as a clickable card with "Learn More →".

This keeps the service area page as the hub and neighborhood pages as spokes for internal linking and local SEO.
