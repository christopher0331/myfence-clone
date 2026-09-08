# GSC Legacy URL Redirect Review (2026-03-11)

This is the **pre-implementation review file** for redirects from legacy crawled URLs.

No redirects are applied yet.  
After your approval, these entries will be converted into actual Netlify redirects.

## Redirect Strategy

1. **Exact modern equivalent exists** -> redirect to that exact page.
2. **City has current service-area page** -> redirect to `/service-areas/{city-slug}`.
3. **City does not have a dedicated current page** -> redirect to nearest relevant service-area hub.
4. **Legacy blog slug drift** -> redirect to current canonical blog slug.
5. **Trailing slash variants** -> normalize to one canonical target.

## Proposed Redirect Map (for approval)

| Legacy path | Proposed target | Notes |
|---|---|---|
| `/gig-harbor-wood-fence-company-near-me/` | `/service-areas/gig-harbor` | City match |
| `/gig-harbor-home-fencing/` | `/service-areas/gig-harbor` | City match |
| `/gig-harbor-wood-fence-installation/` | `/service-areas/gig-harbor` | City match |
| `/mountlake-terrace-wood-fence-company-near-me/` | `/service-areas/mountlake-terrace` | City match |
| `/mountlake-terrace-local-fencing-contractors/` | `/service-areas/mountlake-terrace` | City match |
| `/tukwila-fence-installation/` | `/service-areas/tukwila` | City match |
| `/tukwila-wood-fence-installation/` | `/service-areas/tukwila` | City match |
| `/tukwila-home-fencing/` | `/service-areas/tukwila` | City match |
| `/tukwila-wood-fence-company-near-me/` | `/service-areas/tukwila` | City match |
| `/tukwila-best-fence-company/` | `/service-areas/tukwila` | City match |
| `/north-bend-fence-builders/` | `/service-areas/north-bend` | City match |
| `/north-bend-wood-fence-company-near-me/` | `/service-areas/north-bend` | City match |
| `/sumner-wood-fence-installation/` | `/service-areas/sumner` | City match |
| `/sumner-fence-contractors/` | `/service-areas/sumner` | City match |
| `/seatac-fence-company-near-me/` | `/service-areas/seatac` | City match |
| `/seatac-wood-fence-company-near-me/` | `/service-areas/seatac` | City match |
| `/bellevue-home-fencing/` | `/service-areas/bellevue` | City match |
| `/redmond-local-fencing-contractors/` | `/service-areas/redmond` | City match |
| `/renton-local-fencing-contractors/` | `/service-areas/renton` | City match |
| `/renton-local-fence-companies/` | `/service-areas/renton` | City match |
| `/renton-wood-fence-installation/` | `/service-areas/renton` | City match |
| `/kirkland-local-fence-companies/` | `/service-areas/kirkland` | City match |
| `/enumclaw-local-fencing-contractors/` | `/service-areas/enumclaw` | City match |
| `/bonney-lake-local-fence-companies/` | `/service-areas/bonney-lake` | City match |
| `/lake-tapps-best-fence-company/` | `/service-areas/lake-tapps` | City match |
| `/lake-tapps-wood-fence-company-near-me/` | `/service-areas/lake-tapps` | City match |
| `/black-diamond-home-fencing/` | `/service-areas/black-diamond` | City match |
| `/black-diamond-wood-fence-installation/` | `/service-areas/black-diamond` | City match |
| `/university-place-fence-company/` | `/service-areas/university-place/devonshire-townhomes` | Existing UP route |
| `/university-place-local-fencing-contractors/` | `/service-areas/university-place/devonshire-townhomes` | Existing UP route |
| `/fence-redmond-wa` | `/service-areas/redmond` | Legacy slug |
| `/pastprojects` | `/gallery` | Legacy project page |
| `/fence-gate-styles/` | `/fence-styles` | Legacy style page |
| `/gates-faq` | `/fence-styles` | Legacy FAQ |
| `/gates-faq/` | `/fence-styles` | Trailing-slash variant |
| `/blog/cedar-aluminum-hybrid-fence-mdx` | `/blog/cedar-steel-hybrid-fence` | Slug rename |
| `/blog/material-cost-2025` | `/blog/wooden-fence-cost2025` | Slug rename |
| `/should-i-stain-my-fence` | `/fence-staining` | Consolidated destination |
| `/medina-fence-contractors/` | `/service-areas/bellevue` | Eastside nearest |
| `/medina-fence-builders/` | `/service-areas/bellevue` | Eastside nearest |
| `/medina-local-fencing-contractors/` | `/service-areas/bellevue` | Eastside nearest |
| `/clyde-hill-wood-fence-company-near-me/` | `/service-areas/bellevue` | Eastside nearest |
| `/clyde-hill-home-fencing/` | `/service-areas/bellevue` | Eastside nearest |
| `/clyde-hill-wood-fence-contractors/` | `/service-areas/bellevue` | Eastside nearest |
| `/clyde-hill-best-fence-company/` | `/service-areas/bellevue` | Eastside nearest |
| `/mercer-island-local-fencing-contractors/` | `/service-areas/bellevue` | Eastside nearest |
| `/mercer-island-best-fence-company/` | `/service-areas/bellevue` | Eastside nearest |
| `/mercer-island-fence-builders/` | `/service-areas/bellevue` | Eastside nearest |
| `/newcastle-wood-fence-installation/` | `/service-areas/bellevue` | Eastside nearest |
| `/hobart-fence-contractors/` | `/service-areas/maple-valley` | Nearest served |
| `/hobart-best-fence-company/` | `/service-areas/maple-valley` | Nearest served |
| `/hobart-fence-company/` | `/service-areas/maple-valley` | Nearest served |
| `/ravensdale-fence-company-near-me/` | `/service-areas/maple-valley` | Nearest served |
| `/ravensdale-local-fencing-contractors/` | `/service-areas/maple-valley` | Nearest served |
| `/ravensdale-wood-fence-company-near-me/` | `/service-areas/maple-valley` | Nearest served |
| `/snoqualmie-fence-contractors/` | `/service-areas/north-bend` | Nearest served |
| `/snoqualmie-fence-installation/` | `/service-areas/north-bend` | Nearest served |
| `/snoqualmie-local-fencing-contractors/` | `/service-areas/north-bend` | Nearest served |
| `/des-moines-fence-installation/` | `/service-areas/seatac` | Nearest served |
| `/des-moines-home-fencing/` | `/service-areas/seatac` | Nearest served |
| `/des-moines-wood-fence-company-near-me/` | `/service-areas/seatac` | Nearest served |
| `/des-moines-fence-company/` | `/service-areas/seatac` | Nearest served |
| `/burien-fence-company/` | `/service-areas/seatac` | Nearest served |
| `/edgewood-best-fence-company/` | `/service-areas/sumner` | Nearest served |
| `/edgewood-fence-builders/` | `/service-areas/sumner` | Nearest served |
| `/edgewood-local-fence-companies/` | `/service-areas/sumner` | Nearest served |
| `/orting-wood-fence-contractors/` | `/service-areas/sumner` | Nearest served |
| `/parkland-fence-installation/` | `/service-areas/sumner` | Nearest served |
| `/parkland-wood-fence-installation/` | `/service-areas/sumner` | Nearest served |
| `/parkland-fence-company-near-me/` | `/service-areas/sumner` | Nearest served |
| `/lakewood-fence-installation/` | `/service-areas/sumner` | Nearest served |
| `/lakewood-local-fence-companies/` | `/service-areas/sumner` | Nearest served |
| `/puyallup-fence-company/` | `/service-areas/sumner` | Nearest served |
| `/puyallup-wood-fence-company-near-me/` | `/service-areas/sumner` | Nearest served |
| `/puyallup-fence-contractors/` | `/service-areas/sumner` | Nearest served |
| `/puyallup-fence-company-near-me/` | `/service-areas/sumner` | Nearest served |
| `/tacoma-fence-company-near-me/` | `/service-areas/sumner` | Nearest served |
| `/tacoma-fence-company/` | `/service-areas/sumner` | Nearest served |
| `/tacoma-local-fence-companies/` | `/service-areas/sumner` | Nearest served |
| `/tacoma-wood-fence-installation/` | `/service-areas/sumner` | Nearest served |
| `/south-hill-fence-company/` | `/service-areas/sumner` | Nearest served |
| `/auburn-fence-company-near-me/` | `/service-areas/renton` | Nearest served |
| `/auburn-fence-company/` | `/service-areas/renton` | Nearest served |
| `/auburn-wood-fence-installation/` | `/service-areas/renton` | Nearest served |
| `/kent-best-fence-company/` | `/service-areas/renton` | Nearest served |
| `/kent-fence-builders/` | `/service-areas/renton` | Nearest served |
| `/pacific-fence-company-near-me/` | `/service-areas/renton` | Nearest served |
| `/pacific-fence-company/` | `/service-areas/renton` | Nearest served |
| `/pacific-home-fencing/` | `/service-areas/renton` | Nearest served |
| `/pacific-wood-fence-contractors/` | `/service-areas/renton` | Nearest served |
| `/pacific-wood-fence-company-near-me/` | `/service-areas/renton` | Nearest served |
| `/shoreline-fence-company-near-me/` | `/service-areas/seattle` | Nearest served |
| `/shoreline-fence-builders/` | `/service-areas/seattle` | Nearest served |
| `/shoreline-fence-company/` | `/service-areas/seattle` | Nearest served |
| `/shoreline-wood-fence-contractors/` | `/service-areas/seattle` | Nearest served |
| `/shoreline-best-fence-company/` | `/service-areas/seattle` | Nearest served |
| `/buckley-wood-fence-company-near-me/` | `/service-areas/bonney-lake` | Nearest served |
| `/buckley-fence-installation/` | `/service-areas/bonney-lake` | Nearest served |
| `/buckley-fence-company-near-me/` | `/service-areas/bonney-lake` | Nearest served |
| `/buckley-fence-company/` | `/service-areas/bonney-lake` | Nearest served |

## Last Batch Additions (new entries from latest GSC export)

| Legacy path | Proposed target | Notes |
|---|---|---|
| `/lakewood-wood-fence-contractors/` | `/service-areas/sumner` | Nearest served |
| `/lakewood-fence-contractors/` | `/service-areas/sumner` | Nearest served |
| `/lakewood-local-fencing-contractors/` | `/service-areas/sumner` | Nearest served |
| `/puyallup-local-fence-companies/` | `/service-areas/sumner` | Nearest served |
| `/south-hill-fence-company-near-me/` | `/service-areas/sumner` | Nearest served |
| `/seatac-wood-fence-installation/` | `/service-areas/seatac` | City match |
| `/seatac-fence-contractors/` | `/service-areas/seatac` | City match |
| `/black-diamond-wood-fence-contractors/` | `/service-areas/black-diamond` | City match |
| `/black-diamond-best-fence-company/` | `/service-areas/black-diamond` | City match |
| `/black-diamond-local-fencing-contractors/` | `/service-areas/black-diamond` | City match |
| `/kirkland-best-fence-company/` | `/service-areas/kirkland` | City match |
| `/sammamish-local-fence-companies/` | `/service-areas/sammamish` | City match |
| `/sammamish-wood-fence-installation/` | `/service-areas/sammamish` | City match |
| `/enumclaw-home-fencing/` | `/service-areas/enumclaw` | City match |
| `/sumner-home-fencing/` | `/service-areas/sumner` | City match |
| `/seattle-home-fencing/` | `/service-areas/seattle` | City match |
| `/fence-renton-wa` | `/service-areas/renton` | Legacy slug |
| `/medina-local-fence-companies/` | `/service-areas/bellevue` | Eastside nearest |
| `/newcastle-fence-installation/` | `/service-areas/bellevue` | Eastside nearest |
| `/newcastle-local-fence-companies/` | `/service-areas/bellevue` | Eastside nearest |
| `/clyde-hill-fence-builders/` | `/service-areas/bellevue` | Eastside nearest |
| `/clyde-hill-fence-installation/` | `/service-areas/bellevue` | Eastside nearest |
| `/bellevue-local-fencing-contractors/` | `/service-areas/bellevue` | City match |
| `/snoqualmie-home-fencing/` | `/service-areas/north-bend` | Nearest served |
| `/snoqualmie-wood-fence-company-near-me/` | `/service-areas/north-bend` | Nearest served |
| `/snoqualmie-fence-builders/` | `/service-areas/north-bend` | Nearest served |
| `/snoqualmie-wood-fence-installation/` | `/service-areas/north-bend` | Nearest served |
| `/pacific-local-fence-companies/` | `/service-areas/renton` | Nearest served |
| `/pacific-local-fencing-contractors/` | `/service-areas/renton` | Nearest served |
| `/kent-fence-installation/` | `/service-areas/renton` | Nearest served |
| `/tukwila-wood-fence-contractors/` | `/service-areas/tukwila` | City match |
| `/burien-local-fence-companies/` | `/service-areas/seatac` | Nearest served |
| `/burien-wood-fence-contractors/` | `/service-areas/seatac` | Nearest served |
| `/buckley-wood-fence-contractors/` | `/service-areas/bonney-lake` | Nearest served |
| `/buckley-fence-builders/` | `/service-areas/bonney-lake` | Nearest served |
| `/tacoma-fence-builders/` | `/service-areas/sumner` | Nearest served |
| `/projects/` | `/gallery` | Legacy projects page |
| `/projects` | `/gallery` | Legacy projects page (no trailing slash) |
| `/past-projects/` | `/gallery` | Legacy projects page |
| `/schedule-now/` | `/quote` | Legacy conversion page |
| `/quote-tool` | `/quote` | Legacy conversion page |
| `/about` | `/contact` | Legacy company page |
| `/maple-valley` | `/service-areas/maple-valley` | Missing service-areas prefix |
| `/bellevue` | `/service-areas/bellevue` | Missing service-areas prefix |
| `/blog/fence-cost-shared-with-neighbor` | `/blog/neighbor-fence-cost-split` | Slug rename |
| `/blog/neighbor-split` | `/blog/neighbor-fence-cost-split` | Slug rename |

## Execution Plan (after your approval)

1. Convert approved rows into a machine-readable redirect source file.
2. Apply redirects in `netlify.toml` using `[[redirects]]` with status `301`.
3. Add host normalization if needed (`www` -> apex).
4. Run build and redirect lint/check.
5. Deploy and verify in GSC + sample curl checks.

## Open Questions For You

1. Keep `University Place` mapped to `/service-areas/university-place/devonshire-townhomes`, or route it to `/service-areas`?
2. Keep all non-served cities mapped to nearest served city (as above), or hard-route all non-served cities to `/service-areas`?
3. For `/should-i-stain-my-fence`, do you prefer `/fence-staining` (current choice) or `/pre-staining-cedar-fence`?

