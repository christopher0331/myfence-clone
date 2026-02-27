# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16** (App Router) marketing website for MyFence.com, a Seattle-area fencing company.

### Running the app

- `npm run dev` starts the dev server on `http://localhost:3000` (uses Turbopack).
- `npm run build` produces a production build.
- No local database, Docker, or external services are required. All external dependencies (Supabase, ImageKit, Cloudflare Turnstile) are hosted remotely with hardcoded fallback values.

### Linting

- `next lint` was removed in Next.js 16. Run ESLint directly: `npx eslint . --ext .ts,.tsx`
- The codebase has pre-existing lint warnings/errors (mostly `no-explicit-any`, `no-empty-object-type`, and `react-refresh` warnings). These are not regressions.

### Key caveats

- The `package.json` `lint` script (`next lint`) will fail because Next.js 16 dropped the `lint` subcommand. Use `npx eslint .` instead.
- Both `package-lock.json` (npm) and `bun.lockb` (bun) exist; use **npm** as the primary package manager since `package-lock.json` is the canonical lockfile.
- No automated test suite exists in this repository (no test framework configured).
- The site uses MDX for blog content via `@next/mdx`. Blog articles are in `src/app/blog/`.
