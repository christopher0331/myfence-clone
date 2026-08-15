# HOA approved fencing pages

Use this folder for every new HOA / ARC fencing support page.

## Layout

| Path | Purpose |
|------|---------|
| `HoaApprovedFencingPage.tsx` | Shared page UI (hero, downloads, ARC steps, FAQs, CTAs) |
| `types.ts` | `HoaApprovedFencingConfig` shape |
| `configs/*.ts` | One config per community |
| `README.md` | This guide |

PDFs live in `/public/docs/hoa/` and are linked as `/docs/hoa/<file>.pdf`.

## Add a new HOA page

1. **Downloadables** — Put official (or MyFence checklist) PDFs in `public/docs/hoa/`. Prefer association-sourced forms; if none are public, ship a clear “prep checklist” PDF and say so in copy.
2. **Config** — Copy an existing file in `configs/` (e.g. `sahalee.ts`). Fill every field; keep FAQs aligned with `schemaFaqs`.
3. **Thin page component** (optional) — Re-export the template with your config from `src/components/neighborhoods/<Name>HoaPage.tsx`, or import the config directly in the App Router page.
4. **Route** — Add `src/app/service-areas/<…>/hoa-approved-fencing/page.tsx` with `metadata` + the page component.
5. **Parent link** — On the neighborhood (or city) page, add a “Learn More →” card pointing at the new HOA URL (same pattern as Klahanie / Cherokee Bay).

## URL pattern

```
/service-areas/<city-or-community>/<neighborhood>/hoa-approved-fencing
```

Exceptions already in use:

- Issaquah Highlands: `/service-areas/issaquah-highlands/hoa-approved-fencing`
- Tehaleh (shared Upper/Lower): `/service-areas/bonney-lake/tehaleh/hoa-approved-fencing`

## Do not

- Duplicate the full JSX layout for each community — extend the config + template instead.
- Host unverified association forms without checking the source URL and date.
- Start install copy that implies ARC approval is optional when the community requires it.
