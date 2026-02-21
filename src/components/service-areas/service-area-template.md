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

- City-specific props (hero, meta, **neighborhoods**, landmarks, **climate**, **localChallenges**, **localSolutions**, etc.)
- A custom `{City}Article` component with deep content (including **local regulations / permits**)
- Optional: `faqStructuredData`, `enhancedBusinessData`

```tsx
const Bellevue = () => {
  const faqStructuredData = { /* FAQPage JSON-LD */ };
  const enhancedBusinessData = { /* LocalBusiness + offers */ };

  return (
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
      localChallenges={[...]}
      localSolutions={[...]}
      articleContent={<BellevueArticle />}
      faqStructuredData={faqStructuredData}
      enhancedBusinessData={enhancedBusinessData}
    />
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
- H2: "{City} Fence Company - MyFence.com"
- 4-column stat cards: Years Experience | On-Time Rate | Star Rating | Review Count
- Intro paragraph about MyFence.com serving this city

### A2. Fence Installation Details
- H2: "{City} Fence Installation"
- 2 paragraphs: process, Fence Genius, on-time rate, terrain handling

### A3. Why Choose MyFence.com (Detailed)
- H2: "Why Choose MyFence.com for Your {City} Fence?"
- 2x2 Card grid with icons: Father-Son Excellence, Fence Genius Technology, Industry-Best Warranty, HOA & Permit Expertise

### A4. Fence Types & Materials
- H2: "{City} Fence Types & Materials"
- H3: "{City} Cedar Fence Installation" — Western Red Cedar, marine-grade fasteners, Post-on-Pipe link
- H3: "What We Install in {City}" — cedar, hogwire, hybrid
- H3: "Understanding Other Fence Materials" — info-only (vinyl, composite, aluminum), disclaimer that we don't install these
- H3: "{City} Hybrid Aluminum Fence System" — hybrid system details

### A5. Financing Options
- H2: "{City} Fence Financing Options"
- Bullet list of Wisetack features + "Get Pre-Approved" CTA card; link to `/financing`

### A6. Warranty Coverage
- H2: "Industry-Leading Warranty Coverage"
- Warranty card (Shield icon) + coverage bullets; note on transferability

### A7. Local Challenges & Solutions
- H2: "{City}-Specific Installation Expertise"
- 2-column layout: "⚠ Local Challenges" (5–6 bullets) | "✓ Our Solutions" (5–6 matching solutions with CheckCircle icons)
- Use `localChallenges` / `localSolutions` from props for the template; in the article you can repeat or expand with the same content.

### A8. Local Regulations: Permits & Property Lines ⭐ REQUIRED
- **H2:** "What to Know Before Building a Fence in {City}: Permits, Materials, and Local Tips"
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

### A9. About City Modal
- `<AboutCityModal cityName="{City}" content={ABOUT_CITY_CONTENT} />`
- `ABOUT_CITY_CONTENT`: long-form city history/description (300+ words), stored as a string constant.

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
  localChallenges?: string[];
  localSolutions?: string[];
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

### Custom (pass as props)

- **faqStructuredData** — FAQPage with 4–5 city-specific questions (timeline, cost, neighbors, best time, materials).
- **enhancedBusinessData** — Richer LocalBusiness: `@type: ["LocalBusiness", "HomeAndConstructionBusiness"]`, `alternateName`, `hasOfferCatalog` (Cedar, Hybrid, Repair, Staining), `knowsAbout`, `areaServed` (City + GeoCircle), `sameAs`, `paymentAccepted`, etc. See Bellevue for full shape.

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
| `AboutCityModal` | `@/components/AboutCityModal` | City history modal |
| `WARRANTY_CONSTANTS` | `@/constants/warranty` | Warranty years |
| Lucide icons | `lucide-react` | Shield, Clock, Award, CheckCircle2, etc. |

Template also uses: `GoogleBusinessMap`, `InlineQuoteForm`, `ArticleSummary`, `FenceStylesPreview`, `useTrustindexReviews`.

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
- Include **local regulations** (A8) with permit/height/setback info and disclaimer.
- Link to fence styles, upgrades, and `/financing`.

### DON'T
- Reuse article content between cities with name swaps.
- List neighborhoods without descriptions.
- Skip permit/code research or omit official links.
- Create city pages without at least 6 neighborhoods and 5 landmarks.
- Forget to add new routes to the sitemap if needed.

---

## Checklist for New or Updated City Page

- [ ] Component at `src/components/service-areas/{cityname}.tsx`
- [ ] Route at `src/app/service-areas/{city-slug}/page.tsx`
- [ ] `ABOUT_CITY_CONTENT` (300+ words)
- [ ] `heroTitle`, `heroDescription`, `metaTitle`, `metaDescription`
- [ ] `zipCodes` (all zips for city)
- [ ] `neighborhoods` (6+ entries: `name`, `description`; `link` where neighborhood page exists)
- [ ] `landmarks` (5+)
- [ ] `climateDescription`
- [ ] `localChallenges` and `localSolutions` (5+ each)
- [ ] Article: A1–A9 including **local regulations (A8)** with municipal code links
- [ ] FAQ in article + `faqStructuredData` (4–5 questions)
- [ ] `enhancedBusinessData` (optional but recommended)
- [ ] Internal links to fence styles, upgrades, financing
- [ ] Video section in `ServiceAreaTemplate.tsx` if city has footage
- [ ] Sitemap updated if required

---

## Linking to Neighborhood Pages

When you add a new neighborhood page under a city:

1. Create the neighborhood component and route per **`neighborhood-template.md`**.
2. In the city component’s `neighborhoods` array, set **`link`** for that neighborhood to the new route, e.g. `link: "/service-areas/bellevue/newport-hills"`.
3. The ServiceAreaTemplate will render that neighborhood as a clickable card with "Learn More →".

This keeps the service area page as the hub and neighborhood pages as spokes for internal linking and local SEO.
