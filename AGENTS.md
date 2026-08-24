# Agent instructions

## Neighborhood pages — popular fence styles

Use `<FenceStylesPreview city="{Neighborhood}" />` (`@/components/FenceStylesPreview`) for the Popular Fence Styles section. That is the same photo-card grid city service-area pages use. Do not build a custom 3-column text-only card grid for this section.

## Testing neighborhood / service-area pages

Do **not** record screen videos, browser walkthrough recordings, or “demo” videos of the page.

Verify with HTTP checks against the local Next.js server (`curl` or equivalent):

- New neighborhood route returns 200 and includes the H1, canonical, and JSON-LD
- Parent city page includes a clickable `link` to the new neighborhood

Still screenshots are optional. Video walkthroughs are not wanted.
