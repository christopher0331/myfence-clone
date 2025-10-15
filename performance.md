# Performance Optimization To-Do List

## Critical Performance Issues

### Video & Media
- [ ] **Move hero video from YouTube iframe to Cloudflare hosting**
  - Current: YouTube iframe embed with overhead
  - Target: Native HTML5 `<video>` element served from Cloudflare R2/Stream
  - Benefits: Faster load times, better Core Web Vitals, reduced third-party requests
  - Files affected: `src/pages/Index.tsx` (line 138-147)

### Image Optimization
- [ ] **Audit and optimize all images in `/public/lovable-uploads/`**
  - Convert to modern formats (WebP, AVIF)
  - Implement responsive image sizing
  - Add proper width/height attributes to prevent layout shift
  
- [ ] **Implement proper lazy loading strategy**
  - Audit current `loading="lazy"` usage
  - Consider intersection observer for critical images
  - Add blur-up placeholders for hero images

### Code Splitting & Bundling
- [ ] **Analyze bundle size**
  - Run `npm run build` and check bundle analyzer
  - Identify large dependencies that can be code-split
  - Consider dynamic imports for heavy components

- [ ] **Route-based code splitting**
  - Ensure all route components use React.lazy()
  - Add proper loading states/suspense boundaries

### Third-Party Scripts
- [ ] **Optimize Trustindex reviews widget loading**
  - Currently loads on every page view
  - Consider loading only when section is in viewport
  - Files affected: `src/pages/Index.tsx` (line 34-45)

- [ ] **Audit all external script dependencies**
  - Check for blocking scripts
  - Defer or async load non-critical scripts

### Core Web Vitals
- [ ] **Measure and optimize LCP (Largest Contentful Paint)**
  - Target: < 2.5s
  - Focus: Hero section video/image

- [ ] **Measure and optimize CLS (Cumulative Layout Shift)**
  - Target: < 0.1
  - Add width/height to all images
  - Reserve space for dynamically loaded content

- [ ] **Measure and optimize FID/INP (First Input Delay / Interaction to Next Paint)**
  - Target: < 100ms / < 200ms
  - Optimize JavaScript execution
  - Reduce main thread blocking

### Fonts & CSS
- [ ] **Optimize web font loading**
  - Add font-display: swap or optional
  - Preload critical fonts
  - Consider font subsetting

- [ ] **Remove unused CSS**
  - Run PurgeCSS or similar tool
  - Check Tailwind configuration for unused utilities

### Caching Strategy
- [ ] **Implement proper caching headers**
  - Static assets: long-term caching
  - HTML: no-cache or short-term
  - Configure via `_headers` file for deployment

- [ ] **Add service worker for offline support** (optional)
  - Cache critical assets
  - Implement stale-while-revalidate strategy

### Database & API
- [ ] **Optimize Supabase queries**
  - Add proper indexes
  - Implement query result caching where appropriate
  - Use select() to limit returned fields

### Monitoring
- [ ] **Set up performance monitoring**
  - Google Lighthouse CI
  - Web Vitals monitoring
  - Consider RUM (Real User Monitoring) tools

## Quick Wins
- [ ] Add `rel="preconnect"` for external domains
- [ ] Minify and compress all assets
- [ ] Enable gzip/brotli compression
- [ ] Add resource hints (preload, prefetch) for critical assets

## Notes
- Vite doesn't have Next.js-style optimized components built-in
- Use standard HTML5 elements with proper attributes for best performance
- Vite's build process already handles minification and tree-shaking
