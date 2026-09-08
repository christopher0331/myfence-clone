# SEO Audit Remediation — March 2026

Source: `deep-research-report.md` (Semrush + GitHub repo audit)

## Issues Being Addressed

### 1. www vs non-www canonical split (audit1)
- **Problem:** Google indexes both `www.myfence.com` and `myfence.com`, splitting signals.
- **Fix:** Verify Netlify redirect (www→apex), canonical tags, and sitemap all resolve to `https://myfence.com`.
- **Status:** DONE

**TODO:**
- [x] Confirm `netlify.toml` has `www` → apex 301 redirect with `force = true`
- [x] Audit every `canonical` tag across the site — grep for hardcoded `www.myfence.com` references (found 1 in PrivacyPolicyPage body text — fixed)
- [x] Audit `Seo` component and `metadata` exports for canonical URL generation — all use `https://myfence.com`
- [x] Verify `robots.txt` sitemap directive points to `https://myfence.com/sitemap.xml` (no www)
- [x] Verify sitemap output contains zero `www.myfence.com` URLs (uses `SITE_CONFIG.url`)
- [x] Added `metadataBase: new URL(SITE_CONFIG.url)` to root layout `metadata` export — ensures all relative URLs resolve to apex domain
- [ ] After deploy: spot-check with `curl -I https://www.myfence.com/service-areas/bellevue` → expect 301 to apex

### 2. Sitemap missing dynamic service-area routes (audit2)
- **Problem:** `src/app/sitemap.ts` skips `[city]`/`[neighborhood]` dynamic segments — money pages invisible to sitemap.
- **Fix:** Add all city + neighborhood URLs to sitemap from a canonical registry.
- **Status:** DONE

**TODO:**
- [x] Inventory all static service-area city routes (26 static city dirs)
- [x] Inventory all static neighborhood routes (26 static neighborhood dirs)
- [x] Update `src/app/sitemap.ts` — added `collectDynamicServiceAreaRoutes()` that extracts all city/neighborhood slugs from `serviceAreaPhotos.json` and merges them with static routes via `Set` dedup
- [x] Net new routes added: `/service-areas/orting`, `/service-areas/riverpoint`, `/service-areas/snoqualmie` (all other photo-data routes already had static dirs)
- [ ] Verify built `/sitemap.xml` includes every city and neighborhood URL (post-deploy)
- [ ] After deploy: re-submit sitemap in Google Search Console

### 3. next/head Seo component in App Router (audit3)
- **Problem:** Custom `Seo` component uses `next/head`, which conflicts with App Router Metadata API. Some pages export `metadata` AND render `<Seo />`, risking duplicate tags.
- **Fix:** Migrate all pages to `export const metadata` / `generateMetadata`; remove `Seo` component usage.
- **Status:** DONE

**TODO:**
- [x] Audit: found 83 component files importing `Seo` from `@/components/Seo`
- [x] Audit: found ~93 `page.tsx` files already exporting `metadata` or `generateMetadata`
- [x] Identified overlap — virtually every page did BOTH; 5 pages without metadata are redirect stubs (no content)
- [x] Refactored `Seo` component: removed entire `<Head>` block and `next/head` import; now renders JSON-LD only. Title/description/canonical/OG props accepted but ignored (backward compat)
- [x] JSON-LD structured data continues rendering via the same `<script type="application/ld+json">` — no migration needed
- [x] Removed redundant `<Seo />` from `src/app/blog/page.tsx` (had no structuredData, metadata already exported)
- [x] Verified zero `next/head` imports remain in `src/`
- [ ] Follow-up: gradually rename `Seo` → `JsonLd` and remove unused props from call-sites
- [ ] Validate rendered HTML head tags on 3-5 representative pages post-deploy

### 4. NAP inconsistency in structured data (audit4)
- **Problem:** Quote page schema says Seattle/98101; other pages say Maple Valley/98038. Conflicting business identity hurts local trust + GBP alignment.
- **Fix:** Centralize NAP in `siteConfig.ts`, remove all hardcoded address variants.
- **Status:** DONE (except QuoteToolPage — deferred by owner)

**TODO:**
- [x] Grepped for `98101`, `PostalAddress`, `addressLocality: "Seattle"` — found conflicts in 15+ files
- [x] Added `street: "22927 257th Ave SE"` to `SITE_CONFIG.address` (was empty)
- [x] Created `SCHEMA_ADDRESS` constant in `siteConfig.ts` — canonical PostalAddress object built from SITE_CONFIG
- [x] Updated `ServiceAreaTemplate.tsx` `DEFAULT_BUSINESS_ADDRESS` to use SITE_CONFIG fields
- [x] Changed `normalizeEnhancedBusinessData` to ALWAYS override `data.address` (not just when missing) — fixes all service area pages
- [x] Updated `neighborhoods/structuredData.ts` to import `SCHEMA_ADDRESS`
- [x] Fixed homepage (`src/app/page.tsx`) to use `SCHEMA_ADDRESS`
- [x] Fixed 10 non-service-area pages (upgrades, gallery, contact, fence styles) to use `SCHEMA_ADDRESS`
- [ ] QuoteToolPage — still has Seattle/98101 conflict (deferred per owner)
- [ ] Validate with Google Rich Results Test on 3 representative pages post-deploy

### 5. Self-serving review markup (audit5)
- **Problem:** Google explicitly won't show review rich results for self-served `LocalBusiness` reviews. `aggregateRating` on service pages is a compliance risk.
- **Fix:** Remove `aggregateRating` from LocalBusiness schema; keep testimonials as visible UX trust proof only.
- **Status:** DONE (except QuoteToolPage — deferred by owner)

**TODO:**
- [x] Found `aggregateRating` in 27 locations across the codebase
- [x] `ServiceAreaTemplate.tsx`: removed from default schema fallback; normalization now does `delete data.aggregateRating` to strip any per-city values
- [x] Removed from homepage `LocalBusiness` schema
- [x] Removed from 11 per-city service area files (bellevue, bonneylake, issaquah, kirkland, mountlaketerrace, northbend, redmond, renton, sammamish, seatac, tukwila)
- [x] Removed from 8 fence style pages (HorizontalFence, PictureFrameFence, CraftsmanStyleFence, SolidBoardFence, HorizontalLatticeFence, PicketFence, ThreeRailPictureFrameFence, ThreeFtBlackHogwireFence)
- [x] Removed from 3 fence style pages with manufacturer schema (GalvanizedHogwireFence, BlackHogwireFence, CedarAluminumHybridFence)
- [x] Removed from 2 post pages (SteelPostsPage, CedarPostOnPipe) and 1 upgrade page (TrellisSystemsPage)
- [x] Trustindex widget rendering preserved (visible UX trust proof)
- [x] Individual `review` objects from Trustindex kept in service area schema
- [x] Updated `service-area-template.md` documentation
- [ ] QuoteToolPage — still has `aggregateRating` (deferred per owner)
- [ ] Validate with Google Rich Results Test post-deploy
