# Neighborhood Page Template

Reference for creating new neighborhood pages under a parent city (e.g., `/service-areas/bellevue/somerset`).

---

## File Structure

Each neighborhood needs **2 files**:

1. **Component**: `src/components/neighborhoods/{Name}Page.tsx`
2. **Route**: `src/app/service-areas/{city}/{neighborhood}/page.tsx`

Plus update the **parent city** component to add a `link` to the neighborhood card.

---

## Page Sections (15 total)

### 1. Hero Section
- Back link to parent city (`← Back to {City}`)
- MapPin icon + "Serving {Neighborhood}, {City} WA"
- H1 title: `{Neighborhood} Fence Installation`
- Hero description paragraph (1-2 sentences, neighborhood-specific)
- Phone CTA button: `Call (253) 455-1885`
- "Get Free Quote" button linking to `/quote`
- `GoogleBusinessMap` embed (city, state, radiusMiles, zoom, showBusinessInfo)

### 2. Trust Badges Bar
- Horizontal strip below hero with quick-scan credentials
- Items: "Licensed & Insured" | "5.0 ★ Google Rating" | "{WARRANTY_YEARS}-Year Warranty" | "150+ Five-Star Reviews"
- Use small Lucide icons (Shield, Star, Award, CheckCircle2) + text
- Keeps trust signals visible before user scrolls

### 3. Introduction
- H2: neighborhood-specific heading (e.g., "Fencing for Somerset's Hillside Properties") — vary headings, don't always start with neighborhood name
- 2 paragraphs:
  - First (text-lg): What makes this neighborhood unique and why fencing is different here
  - Second: MyFence.com's specific experience in this neighborhood + Fence Genius mention
- **Mention specific streets, landmarks, or HOA names** to prove local knowledge

### 4. Why Choose Us (Trust Cards)
- H2: "Why {Neighborhood} Homeowners Trust MyFence.com"
- 2x2 grid of `Card` components, each with:
  - Lucide icon (pick 4 relevant ones)
  - H3 title
  - Description paragraph
- Common cards: HOA Compliance, Warranty, one neighborhood-specific challenge, one neighborhood-specific benefit
- **NOTE:** If the parent city template already renders a "Why Choose Us" section, do NOT duplicate it here with identical content. Neighborhood pages are standalone, so their own version is fine — but make the content unique to the neighborhood.

### 5. Local Reviews / Testimonials ⭐ HIGH PRIORITY
- H2: "What {Neighborhood} Homeowners Say"
- 2-3 testimonial cards with:
  - Customer first name + neighborhood (e.g., "Sarah in Somerset")
  - Star rating (5 stars)
  - 2-3 sentence quote mentioning the neighborhood or specific project
  - Date of review
- Pull from Trustindex reviews that mention the area, or use real customer feedback
- **This is the #1 trust signal for local pages — don't skip it**

### 6. Before/After Project Gallery ⭐ HIGH PRIORITY
- H2: "Recent {Neighborhood} Projects" or "Our Work in {Neighborhood}"
- 2-3 project cards in a grid, each with:
  - Before/after images (use real project photos, NOT stock)
  - Fence style (e.g., "6' Cedar Privacy Fence")
  - Brief description (1 sentence about the project)
- If no neighborhood-specific photos exist yet, use closest available projects and note the city
- **Geo-tag images when possible for SEO**

### 7. Project Case Study Spotlight ⭐ HIGH PRIORITY
- H2: "Featured {Neighborhood} Installation"
- Single highlighted project with:
  - Project photo(s)
  - 3-4 sentences: what was installed, specific challenges, how they were solved
  - Mention real street name or cross-street if possible
  - Fence style, linear footage, timeline
- Demonstrates real work in the actual neighborhood

### 8. Neighborhood-Specific Considerations
- H2: "{Neighborhood}-Specific Fencing Considerations"
- 3-4 sub-sections, each with:
  - H3 title (include neighborhood name: "{Neighborhood} Terrain Engineering" not just "Terrain Engineering")
  - Detailed paragraph about a specific challenge or factor
- Topics to cover (pick what's relevant):
  - Terrain / topography
  - Weather / wind / moisture
  - HOA / architectural standards
  - Noise buffering
  - View preservation
  - Soil conditions
  - Tree / landscaping preservation
  - Wildlife / pet considerations

### 9. Pricing Transparency Section
- H2: "Fence Installation Cost in {Neighborhood}"
- Brief intro paragraph acknowledging the investment
- Ballpark price range table or list:
  - Cedar Privacy: $XX–$XX per linear foot
  - Hogwire: $XX–$XX per linear foot
  - Hybrid Aluminum/Cedar: $XX–$XX per linear foot
- Note that slope/terrain complexity affects pricing
- CTA: "Get an exact quote for your {Neighborhood} property" → `/quote`
- **Pages with visible pricing convert 23% better than those without**

### 10. Popular Fence Styles
- H2: "Popular Fence Styles in {Neighborhood}"
- 3-column grid of `Card` components:
  - **Cedar Privacy Fence** → links to `/fence-styles/picture-frame-fence`
  - **Hogwire Fence** → links to `/fence-styles/black-hogwire-fence`
  - **Hybrid Aluminum/Cedar** → links to `/fence-styles/cedar-steel-hybrid-fence`
- Each card: H3 title, short description tailored to the neighborhood, "View styles →" link

### 11. Virtual Quote Tool
- `<VirtualQuoteTool fenceStyleName="{Neighborhood} {City} fence" />`

### 12. Installation Process
- H2: "Our {Neighborhood} Installation Process"
- 5 step cards (use {Neighborhood} name in step titles, not generic):
  1. {Neighborhood} Site Assessment (tailored to terrain)
  2. {Neighborhood} Design & HOA Submission (mention specific HOA name if known)
  3. Custom Panel Manufacturing (Fence Genius terrain mapping)
  4. {Neighborhood} Installation (mention neighborhood-specific equipment/techniques)
  5. Walkthrough & {WARRANTY_YEARS}-Year Warranty

### 13. About the Area (Discover {Neighborhood}) ⭐ REQUIRED
- Uses the `AboutTheArea` component (`@/components/AboutTheArea`)
- **Two-column layout** with content about the neighborhood and surrounding area
- **Render OUTSIDE the main article/page sections** so it gets full container width — not nested inside a `max-w-*` wrapper.
- **Column 1 — Attractions:** 3-5 local attractions near the neighborhood with real external links
  - Parks, trails, restaurants, schools, community centers, shopping within/near the neighborhood
  - Each attraction: `name` (linked), `url` (real working link), `description` (1-2 sentences, **100% original — NEVER copied from competitor sites**)
- **Column 2 — Local Living:** Paragraphs with inline external links about:
  - Schools serving the neighborhood, nearby amenities, community organizations, dining
  - Neighborhood character, walkability, proximity to highways/transit
  - **Every `<a>` tag MUST include** `className="font-semibold text-primary underline decoration-2 underline-offset-4"` — do NOT rely on Tailwind arbitrary child selectors like `[&_a]`, they don't work with JIT
  - Aim for 6-8 external links across 2 paragraphs — links to similar but not identical places as competitors (different restaurants, different trails, etc.)
- **Images:** Optional. Only use images you own (ImageKit). Do NOT hotlink from other websites or Wikimedia.

```tsx
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";

const NEIGHBORHOOD_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Phantom Lake Park",
    url: "https://parks.bellevuewa.gov/parks-open-spaces/parks/phantom-lake",
    description: "Original description with neighborhood-specific details.",
  },
  // ... 2-4 more
];

// Render at the page level, not nested inside a max-w container
<AboutTheArea
  cityName="Bellevue"
  neighborhoodName="Sherwood Forest"
  attractions={NEIGHBORHOOD_ATTRACTIONS}
  localLivingContent={
    <>
      <p>
        Sherwood Forest families are served by the{" "}
        <a href="https://bsd405.org/" target="_blank" rel="noopener noreferrer"
           className="font-semibold text-primary underline decoration-2 underline-offset-4">
          Bellevue School District
        </a>, with Phantom Lake Elementary just a short walk away...
      </p>
    </>
  }
/>
```

### 14. Adjacent Neighborhoods / Internal Links
- H2: "Also Serving Nearby {City} Neighborhoods"
- List 3-5 adjacent neighborhoods with brief descriptions
- Link to their pages if they exist, otherwise link to parent city page
- Creates hub-and-spoke internal linking structure for topical authority
- Example: "We also serve nearby Factoria, Newport Hills, and Eastgate"

### 15. CTA Section
- H2: "Ready to Enhance Your {Neighborhood} Property?"
- Description paragraph with response time: "Same-day estimates available in {Neighborhood}"
- "Get Free Quote" button → `/quote`
- "Contact Us" button → `/contact`

### Optional: Video Section
- If a YouTube video exists for this neighborhood or parent city area:
- H2: "{Neighborhood} Fencing"
- 2-column layout: description text + 9:16 YouTube embed
- Use `AspectRatio` component with `ratio={9/16}`
- URL format: `https://www.youtube-nocookie.com/embed/{videoId}?controls=0&playsinline=1&rel=0&modestbranding=1`

---

## Structured Data

Generated via `buildNeighborhoodStructuredData()` from `structuredData.ts`. Pass:

```ts
buildNeighborhoodStructuredData({
  canonical: "https://myfence.com/service-areas/{city}/{neighborhood}",
  neighborhoodName: "{Neighborhood}, {City}",
  pageTitle: "{Neighborhood} {City} Fence Installation",
  description: metaDescription,
  faqItems: [
    { question: "...", answer: "..." },
    // 3+ neighborhood-specific Q&As
  ],
})
```

This auto-generates:
- **LocalBusiness** schema (with `HomeAndConstructionBusiness` type)
- **Service** schema
- **BreadcrumbList** schema (auto-derives parent city from canonical URL)
- **FAQPage** schema (if faqItems provided)

### Recommended Structured Data Enhancements

Add these to `buildNeighborhoodStructuredData` or inline in the component:

| Schema | Purpose | Priority |
|--------|---------|----------|
| `GeoCoordinates` (lat/long for neighborhood center) | Helps Google Maps and AI understand exact service area | High |
| `GeoCircle` with `geoRadius` | Defines service boundary radius | Medium |
| `Review` schema (1-2 real reviews) | Triggers rich snippet star ratings in SERPs | High |
| `AggregateRating` | Shows star count in search results | High |
| Nested `areaServed` (neighborhood → city → state) | Shows geographic hierarchy | Medium |

---

## Route Page Pattern

```tsx
import type { Metadata } from "next";
import {Name}Page from "@/components/neighborhoods/{Name}Page";

export const metadata: Metadata = {
  title: "{Neighborhood} {City} Fence Installation | {Specialty} | MyFence.com",
  // ⚠ Capitalize city and neighborhood names! "Bellevue" not "bellevue"
  description: "Professional fence installation in {Neighborhood}, {City}, WA. ...",
  alternates: {
    canonical: "https://myfence.com/service-areas/{city}/{neighborhood}",
  },
};

export default function {Name}Page() {
  return <{Name}Page />;
}
```

---

## Parent City Update

In the parent city's component (e.g., `bellevue.tsx`), update the neighborhood entry:

```ts
{
  name: "{Neighborhood}",
  description: "... Click to learn more →",
  link: "/service-areas/{city}/{neighborhood}"
}
```

---

## Components Used

| Component | Import | Purpose |
|-----------|--------|---------|
| `Seo` | `@/components/Seo` | Meta tags + structured data |
| `Card` | `@/components/ui/card` | Content cards |
| `Button` | `@/components/ui/button` | CTA buttons |
| `VirtualQuoteTool` | `@/components/VirtualQuoteTool` | Quote tool embed |
| `GoogleBusinessMap` | `@/components/GoogleBusinessMap` | Map embed |
| `WARRANTY_CONSTANTS` | `@/constants/warranty` | Warranty years |
| `buildNeighborhoodStructuredData` | `@/components/neighborhoods/structuredData` | JSON-LD |
| `AboutTheArea` | `@/components/AboutTheArea` | Discover {Neighborhood} section with attractions + local living |
| `ServiceAreaPhotoGallery` | `@/components/service-areas/ServiceAreaPhotoGallery` | Geo-tagged project photo carousel (auto-filtered) |
| `FeaturedProject` | `@/components/service-areas/FeaturedProject` | Featured project spotlight with photo + description |
| `AspectRatio` | `@/components/ui/aspect-ratio` | Video embed ratio |
| Lucide icons | `lucide-react` | Section icons |
| `Link` | `next/link` | Internal navigation |

### ServiceAreaPhotoGallery Notes
- **3 or fewer photos**: centered grid, no carousel
- **4+ photos**: scrolling marquee carousel with speed controls
- Uses ImageKit CDN; photos auto-filtered by neighborhood

### FeaturedProject Notes
- Use **generic fence style language** ("Cedar Privacy Fence") — no unverified construction claims
- Each description MUST be unique per neighborhood (avoid doorway page penalties)
- Includes `ImageObject` structured data

---

## FAQ Guidelines

Include **3+ neighborhood-specific FAQs** covering:
1. **Permits/HOA** — Do I need a permit to build a fence in {Neighborhood}?
2. **Best styles** — What fence styles work best for {Neighborhood}'s {unique challenge}?
3. **Cost** — How much does fence installation cost in {Neighborhood}?
4. **Timeline** — How long does fence installation take in {Neighborhood}?
5. **Neighbors** — Do I need my neighbor's permission for a fence in {Neighborhood}?

---

## SEO Content Rules

These rules are based on 2025/2026 local SEO best practices for contractor neighborhood pages:

### DO:
- Write **100% unique content** per neighborhood — no copy-paste with name swaps
- Mention **specific streets, landmarks, HOA names, and local details** to prove local knowledge
- Include **real project photos** from the neighborhood (or nearest available)
- Use the **neighborhood name in H2/H3 subheadings** naturally (not keyword-stuffed)
- **Vary H2/H3 headings** — NOT every heading should start with the neighborhood name. Mix in variations. Over-optimized headings trigger Google penalties.
- Add **local testimonials** with customer first name + neighborhood
- Provide **visible pricing ranges** — converts 23% better
- Link to **adjacent neighborhood pages** for hub-and-spoke internal linking
- Include **3+ FAQs** in both visible content and structured data
- **Capitalize neighborhood and city names** properly in title and meta description
- Include **"| MyFence.com"** in the page title
- Use **generic fence style language** ("cedar privacy fence") unless you have verified project-specific construction details

### DON'T:
- Don't use stock photos — real local work photos only
- Don't create thin pages with < 800 words of unique content
- Don't stuff the city/neighborhood name unnaturally
- Don't duplicate the parent city page content
- Don't skip structured data — it's non-negotiable for local SEO
- Don't forget mobile optimization — 78% of local searches are mobile
- Don't launch more than 3-5 neighborhood pages at once without unique content for each
- **DO NOT** copy content from competitor websites — all descriptions must be 100% original (see `.cursor/rules/no-copied-content.mdc`)
- **DO NOT** hotlink images from external websites or Wikimedia — only use images hosted on ImageKit that you own
- **DO NOT** make unverified claims about fence construction methods (e.g., "board-on-board", "post-on-pipe") unless confirmed from actual project data
- **DO NOT** use Tailwind arbitrary child selectors like `[&_a]` for link styling — they don't work reliably with JIT. Instead, add explicit `className` to every `<a>` tag
