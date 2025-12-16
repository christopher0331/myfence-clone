# Next.js Migration Plan

This document tracks the migration of the existing Vite/React + `react-router-dom` app in `src/` to a Next.js App Router app in `src/app`.

---

## 1. Preparation & Configuration
- [x] **Dependencies**
  - Uninstall: `vite`, `@vitejs/plugin-react-swc`, `react-router-dom`, `react-helmet-async`
  - Install: `next@16`, `react-dom`, `eslint-config-next@16`, `@types/node`, `@types/react`, `@types/react-dom`
- [x] **Config Files**
  - Add `next.config.mjs`
  - Add/update `next-env.d.ts`
  - Update `tsconfig.json` / `tsconfig.app.json` for Next (include `app` dir, JSX runtime, paths, composite refs)
  - Update `tailwind.config` content paths to include `app` and `components`
  - Update `package.json` scripts: `dev`, `build`, `start`, `lint` to use Next
- [ ] **Environment Variables**
  - Map `VITE_*` to `NEXT_PUBLIC_*` where needed
  - Update Supabase client and any other env consumers to use `process.env.NEXT_PUBLIC_*`

---

## 2. Core Next.js App Router Setup
- [x] **App Directory Bootstrap**
  - `src/app/layout.tsx` with global shell and CSS
  - `src/app/page.tsx` wired to existing home page content
- [x] **Global Providers / Shell**
  - Header and Footer wired into `RootLayout`
- [ ] **Not Found / Error Boundaries**
  - Add `src/app/not-found.tsx`
  - Add `src/app/error.tsx` or route-level error boundaries as needed

---

## 3. Page Migration (Vite `src/pages` → Next `src/app`)

_Iteratively move pages from `src/pages` into `src/app`, preserving routes and SEO URLs._

### Main Pages
- [x] Home (`/`) -> `src/app/page.tsx`
- [x] Contact (`/contact`) -> `src/app/contact/page.tsx`
- [x] Gallery (`/gallery`) -> `src/app/gallery/page.tsx`
- [ ] Quote Tool (`/quote`) -> `src/app/quote/page.tsx`
- [ ] Financing (`/financing`) -> `src/app/financing/page.tsx`
- [ ] Discounts (`/discounts`) -> `src/app/discounts/page.tsx`
- [ ] Referrals (`/referrals`) -> `src/app/referrals/page.tsx`

### Feature / Marketing Pages
- [x] Fence Genius (`/fence-genius`) -> `src/app/fence-genius/page.tsx`
- [ ] Staining pages (`/fence-staining`, `/pre-staining-cedar-fence`) -> `src/app/fence-staining/page.tsx`, `src/app/pre-staining-cedar-fence/page.tsx`
- [x] Neighborhoods – Tehaleh (`/neighborhoods/lower-tehaleh`) -> `src/app/neighborhoods/lower-tehaleh/page.tsx`

### Fence Styles
- [x] Styles index (`/fence-styles`) -> `src/app/fence-styles/page.tsx`
- [ ] Individual styles -> `src/app/fence-styles/<slug>/page.tsx`
  - [x] Galvanized Hogwire Fence
  - [x] Horizontal Fence
  - [x] Horizontal Lattice Fence
  - [x] Picket Fence
  - [x] Picture Frame Fence
  - [x] Solid Board Fence
  - [x] Three Ft Black Hogwire Fence
  - [x] Three Rail Picture Frame Fence
  - [ ] Black Hogwire Fence (6')
  - [ ] Cedar Aluminum / Hybrid styles

### Fence Posts & Upgrades
- [ ] Fence posts (`/fence-posts/*`) -> `src/app/fence-posts/<slug>/page.tsx`
- [ ] Fence upgrades (`/fence-upgrades/*`) -> `src/app/fence-upgrades/<slug>/page.tsx`

### Service Areas
- [x] Service areas index (`/service-areas`) -> `src/app/service-areas/page.tsx`
- [x] Dynamic city pages -> `src/app/service-areas/[city]/page.tsx` backed by shared data
- [x] Neighborhood-specific Tehaleh page (`/neighborhoods/lower-tehaleh`)

### Blog & MDX
- [ ] Configure MDX for Next (`@next/mdx` or `next-mdx-remote`)
- [ ] Blog index (`/blog`) -> `src/app/blog/page.tsx`
- [ ] Blog posts -> `src/app/blog/[slug]/page.tsx` or direct MDX under `app/blog`
- [ ] Migrate existing MDX/TSX posts from `src/pages/blog/*`

---

## 4. Component Refactoring
- [x] **Routing API & Links (core pages already migrated)**
  - Replace `react-router-dom` `Link` with `next/link` in header, footer, home sections, and migrated pages
- [x] **SEO helper**
  - Replace `react-helmet-async` `Seo` with `next/head`-based Seo component
- [ ] **Images** (optional, but recommended)
  - Replace `<img>` in key pages with `next/image` where it matters for LCP/SEO

---

## 5. Data & Utilities
- [x] Supabase client compatible with SSR (no direct `localStorage` on server)
- [ ] Create shared data files for fence styles, etc. (e.g. `src/data/fenceStyles.ts`)

---

## 6. Cleanup (Once Next App is Stable)
- [ ] Remove `src/pages` and Vite-specific routing
- [ ] Remove `index.html` (root Vite HTML)
- [ ] Remove `vite.config.ts` and Vite plugins
- [ ] Remove `react-router-dom` and `react-helmet-async` from `package.json`
- [ ] Final ESLint/TypeScript pass under Next

