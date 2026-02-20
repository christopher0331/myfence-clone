# Service Area (City-Level) Page Template

Reference for creating new city-level service area pages (e.g., `/service-areas/bellevue`).

---

## File Structure

Each city needs **2 files**:

1. **Component**: `src/components/service-areas/{cityname}.tsx` (lowercase, no hyphens — e.g., `bellevue.tsx`, `bonneylake.tsx`)
2. **Route**: `src/app/service-areas/{city-slug}/page.tsx` (kebab-case — e.g., `bonney-lake/page.tsx`)

Existing cities: bellevue, bonneylake, issaquah, tukwila, renton, seatac, blackdiamond, redmond, kirkland, mountlaketerrace, northbend, sumner, sammamish, seattle, maplevalley, laketapps, gigharbor, enumclaw, federalway, covington

---

## Architecture Overview

City pages use the **shared `ServiceAreaTemplate`** component (`src/components/templates/ServiceAreaTemplate.tsx`) which handles the layout. Each city component provides:
- City-specific props (hero, meta, neighborhoods, climate, etc.)
- A custom `{City}Article` component with deep content
- Optional: enhanced structured data, FAQ schema

```tsx
const Bellevue = () => {
  const faqStructuredData = { /* ... */ };
  const enhancedBusinessData = { /* ... */ };

  return (
    <ServiceAreaTemplate
      city="Bellevue"
      state="WA"
      heroTitle="..."
      heroDescription="..."
      metaTitle="..."
      metaDescription="..."
      zipCodes={["98004", "98005"]}
      neighborhoods={[...]}
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

## Template-Level Sections (provided by ServiceAreaTemplate)

The template renders **10 sections** automatically. You configure them via props:

### 1. Hero Section
- Props: `heroTitle`, `heroDescription`
- Auto-includes: MapPin + "Serving {City}, {State}", phone CTA, quote button, GoogleBusinessMap
- Default title: "Professional Fence Services in {City}"

### 2. Services Grid
- Auto-generated 6-card grid: Installation, Repair, Staining, Replacement, Custom Designs, Commercial
- Each card includes city name automatically

### 3. Why Choose Us
- Auto-generated 2x2 grid: Fast & Reliable, Licensed & Insured, Quality Materials, Local Experts
- Local Experts card mentions city regulations and permits

### 4. Trustindex Reviews
- Auto-loads the Trustindex review widget via `useTrustindexReviews` hook
- Reviews are also injected into structured data dynamically
- H2: "What Our {City} Customers Say"

### 5. AI Summary
- `ArticleSummary` component generates a dynamic summary
- Pass: city name, state, Fence Genius details

### 6. City Fencing Video (conditional)
- Only renders for cities that have a video block (North Bend, Bonney Lake, Renton, Issaquah, Maple Valley, Covington, SeaTac, Tukwila, Black Diamond)
- To add a video for a new city: add a conditional block in `ServiceAreaTemplate.tsx`
- Format: 2-column with description + 9:16 YouTube embed
- Optional: `videoTags` prop for related tag links

### 7. Local Climate Expertise
- Prop: `climateDescription`
- Renders as a Card with Sun icon
- Truncates long descriptions with "Read more" toggle

### 8. Neighborhoods & Areas We Serve
- Props: `neighborhoods`, `landmarks`, `zipCodes`
- Neighborhoods render as cards in a 3-column grid
- Neighborhoods with `link` property get a highlighted "Learn More →" card
- Landmarks render as pill badges
- Zip codes render as pill badges

### 9. Fence Styles Preview
- Auto-rendered `FenceStylesPreview` component
- Shows available fence styles with links

### 10. Quote Form
- `InlineQuoteForm` with context set to the city
- H2: "Get Your Free Quote Today"

### 11. Article Content (the custom part)
- Prop: `articleContent`
- This is where **all the unique city-specific content goes**
- Rendered in a prose container with Tailwind Typography

---

## Article Content Sections (custom per city)

The `{City}Article` component is where the real SEO value lives. Based on best-performing city pages (Bellevue), include:

### A1. Company Introduction
- H2: "{City} Fence Company - MyFence.com"
- 4-column stat cards: Years Experience | On-Time Rate | Star Rating | Review Count
- Intro paragraph about MyFence.com serving this city

### A2. Fence Installation Details
- H2: "{City} Fence Installation"
- 2 paragraphs about the installation process specific to this city
- Mention Fence Genius technology, on-time rate, terrain handling

### A3. Why Choose MyFence.com (Detailed)
- H2: "Why Choose MyFence.com for Your {City} Fence?"
- 2x2 Card grid with icons:
  - Father-Son Excellence
  - Fence Genius Technology
  - Industry-Best Warranty
  - HOA & Permit Expertise

### A4. Fence Types & Materials
- H2: "{City} Fence Types & Materials"
- Sub-sections with H3s:
  - **{City} Cedar Fence Installation** — detailed paragraph about Western Red Cedar, marine-grade fasteners, Post-on-Pipe upgrade link
  - **What We Install in {City}** — our 3 fence systems (cedar, hogwire, hybrid)
  - **Understanding Other Fence Materials** — info-only section (vinyl, composite, aluminum) with disclaimer we don't install these
  - **{City} Hybrid Aluminum Fence System** — detailed paragraph about the hybrid system

### A5. Financing Options
- H2: "{City} Fence Financing Options"
- 2-column layout: bullet list of Wisetack features + "Get Pre-Approved" CTA card
- Link to `/financing`

### A6. Warranty Coverage
- H2: "Industry-Leading Warranty Coverage"
- Warranty card with Shield icon + 4 coverage bullet points
- Note about transferability on sale

### A7. Local Challenges & Solutions
- H2: "{City}-Specific Installation Expertise"
- 2-column layout:
  - Left: "⚠ Local Challenges" — 5-6 city-specific bullet points
  - Right: "✓ Our Solutions" — 5-6 matching solutions with CheckCircle icons

### A8. Permits & Local Tips
- H2: "What to Know Before Building a Fence in {City}: Permits, Materials, and Local Tips"
- Sub-sections:
  - **Why Fence Planning Differs by City** — unique city context
  - **Permits and Property Line Requirements** — cite actual municipal codes with links
  - **Frequently Asked Questions** — 4-5 Q&As in a Card, covering timeline, cost, neighbors, best time, materials

### A9. Building Codes Disclaimer
- Muted background note with link to city development services
- "Building codes and HOA regulations are subject to change..."

### A10. About City Modal
- `<AboutCityModal cityName="{City}" content={ABOUT_CITY_CONTENT} />`
- Long-form city history/description stored as a const string
- Displayed in a modal popup

---

## Props Reference

```ts
interface ServiceAreaTemplateProps {
  city: string;                          // Display name: "Bellevue"
  state: string;                         // State abbreviation: "WA"
  heroTitle?: string;                    // Custom hero H1
  heroDescription?: string;              // Custom hero description
  metaTitle?: string;                    // Page title for SEO
  metaDescription?: string;              // Meta description for SEO
  zipCodes?: string[];                   // ["98004", "98005", "98006"]
  neighborhoods?: (string | Neighborhood)[];  // See Neighborhood type below
  landmarks?: string[];                  // ["Bellevue Square", "Downtown Park"]
  localChallenges?: string[];            // Bullet point strings
  localSolutions?: string[];             // Bullet point strings
  climateDescription?: string;           // Long-form climate paragraph
  articleContent?: React.ReactNode;      // The <{City}Article /> component
  faqStructuredData?: any;               // FAQPage JSON-LD
  enhancedBusinessData?: any;            // Enhanced LocalBusiness JSON-LD
  videoTags?: VideoTag[];                // [{label, link}] for video section
}

interface Neighborhood {
  name: string;
  description: string;
  link?: string;  // If present, creates a clickable card linking to neighborhood page
}
```

---

## Structured Data (auto + custom)

### Auto-generated by ServiceAreaTemplate:
- **BreadcrumbList**: Home → Service Areas → {City}
- **LocalBusiness**: basic business info, address, geo, opening hours, aggregate rating, offer catalog, social links, reviews from Trustindex

### Custom per city (pass as props):

#### `faqStructuredData` — FAQPage schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does fence installation take in {City}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

#### `enhancedBusinessData` — Enhanced LocalBusiness schema
Override the default with richer data. Recommended fields:
- `@type`: `["LocalBusiness", "HomeAndConstructionBusiness"]`
- `alternateName`: variations of business name for this city
- `hasOfferCatalog`: detailed service offerings (Cedar, Hybrid, Repair, Staining)
- `knowsAbout`: expertise keywords
- `founder`: `{ "@type": "Person", "name": "Andrew Knudsen" }`
- `paymentAccepted`: `["Cash", "Check", "Credit Card", "Financing"]`
- `sameAs`: social media links
- `areaServed`: with `GeoCircle` for radius + `City` entity

---

## Route Page Pattern

```tsx
import type { Metadata } from "next";
import CityName from "@/components/service-areas/{cityname}";

export const metadata: Metadata = {
  title: "{City} Fence Installation | Premium Cedar & Hybrid Fencing | MyFence.com",
  description: "Professional fence installation in {City}, WA. Cedar, hogwire & hybrid aluminum fencing. 30+ years experience. Free quotes. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/{city-slug}",
  },
};

export default function CityNamePage() {
  return <CityName />;
}
```

---

## Components Used

| Component | Import | Purpose |
|-----------|--------|---------|
| `ServiceAreaTemplate` | `@/components/templates/ServiceAreaTemplate` | Main page layout |
| `Card` | `@/components/ui/card` | Content cards |
| `Button` | `@/components/ui/button` | CTA buttons |
| `Link` | `next/link` | Internal navigation |
| `AboutCityModal` | `@/components/AboutCityModal` | City info modal |
| `WARRANTY_CONSTANTS` | `@/constants/warranty` | Warranty years |
| Lucide icons | `lucide-react` | Shield, Clock, Award, CheckCircle2, etc. |
| `AspectRatio` | `@/components/ui/aspect-ratio` | Video embed ratio |

Template also uses internally:
- `GoogleBusinessMap` — hero map
- `InlineQuoteForm` — quote form section
- `ArticleSummary` — AI summary section
- `FenceStylesPreview` — fence styles section
- `useTrustindexReviews` — review widget

---

## Content Guidelines for Article Section

### Word Count
- Minimum **2,000 words** of unique article content per city
- Top-performing pages (Bellevue) have 3,000+ words

### Research Required Before Writing
1. **Municipal fence codes** — find the city's actual fence height limits, setback rules, permit requirements. Link to official city code pages.
2. **HOA landscape** — identify major HOAs/neighborhoods with architectural review
3. **Climate/terrain** — what's unique about this city's geography, weather, soil
4. **Local landmarks** — 5-7 landmarks residents would recognize
5. **Neighborhoods** — 6-12 neighborhoods with 1-sentence descriptions
6. **Zip codes** — all zip codes the city covers

### SEO Title Format
```
{City} Fence Installation | {Key Differentiator} | MyFence.com
```
Examples:
- "Bellevue Fence Installation | Luxury & HOA-Compliant"
- "Bonney Lake Fence Installation | Tehaleh & HOA Experts"
- "North Bend Fence Installation | Mountain Terrain Specialists"

### Meta Description Format
```
Professional {City} fence installation. Cedar, hogwire & hybrid aluminum fencing. {Differentiator}. {Social proof}. Call (253) 455-1885 for free quote.
```
Max 160 characters.

---

## SEO Rules for City Pages

### DO:
- Write **100% unique article content** — no copy-paste between cities
- Cite **actual municipal codes** with links to official city websites
- Include **real local details**: neighborhood names, landmarks, home styles, climate factors
- Add **enhanced structured data** with OfferCatalog, AggregateRating, social links
- Create **5+ visible FAQs** covering timeline, cost, permits, neighbors, materials
- Mention **Fence Genius technology** and **father-son team** in every city article
- Link to fence style pages (`/fence-styles/*`), upgrade pages (`/fence-upgrades/*`), and financing (`/financing`)
- Include a **climateDescription** for every city — this is a unique content section
- Link neighborhoods with dedicated pages using the `link` prop

### DON'T:
- Don't reuse the same article content between cities with name swaps
- Don't create pages for cities where MyFence has no real service presence
- Don't list neighborhoods without descriptions (use at least 1 sentence each)
- Don't skip the FAQ structured data — it's essential for rich snippets
- Don't forget to update `scripts/update-sitemap-dates.js` with new routes
- Don't omit municipal code links — authoritative external links boost trust
- Don't create a city page without at least 6 neighborhoods and 5 landmarks

---

## Checklist for New City Page

- [ ] Component created at `src/components/service-areas/{cityname}.tsx`
- [ ] Route created at `src/app/service-areas/{city-slug}/page.tsx`
- [ ] `ABOUT_CITY_CONTENT` written (city history, 300+ words)
- [ ] `heroTitle` and `heroDescription` customized
- [ ] `metaTitle` and `metaDescription` optimized
- [ ] `zipCodes` array populated
- [ ] `neighborhoods` array with 6+ entries, each with name + description
- [ ] `landmarks` array with 5+ local landmarks
- [ ] `climateDescription` written
- [ ] `localChallenges` array with 5+ city-specific items
- [ ] `localSolutions` array with matching solutions
- [ ] `{City}Article` component with 2,000+ words of unique content
- [ ] Municipal code links researched and included
- [ ] `faqStructuredData` with 4-5 questions
- [ ] `enhancedBusinessData` with full LocalBusiness schema
- [ ] Sitemap entry added or auto-detected
- [ ] Internal links to fence styles, upgrades, and financing
- [ ] Video section added (if footage exists for this city)
- [ ] Page tested on mobile
