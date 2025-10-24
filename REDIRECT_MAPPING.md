# MyFence.com Redirect Mapping Strategy

## ⚠️ CRITICAL: React Router Redirect Pattern to AVOID

**DO NOT use trailing slash redirects within React Router routes.** These cause component rendering failures:

```tsx
// ❌ WRONG - Causes components to not render
<Route path="/contact/" element={<Navigate to="/contact" replace />} />
<Route path="/financing/" element={<Navigate to="/financing" replace />} />
```

**Why this fails:**
- React Router already handles trailing slashes
- Adding explicit redirects creates routing conflicts
- Components fail to mount, showing only header/footer

**Correct approach:**
- Let React Router handle trailing slashes naturally
- Use server-level redirects (Nginx, Apache, Netlify) for trailing slash normalization
- Only use `<Navigate>` for legitimate URL changes (e.g., `/old-page` → `/new-page`)

## Analysis Summary
- **Total old URLs analyzed**: 43
- **New site pages available**: 17 main pages + blog posts + fence styles + fence upgrades
- **Strategy**: Map high-value pages to new equivalents, consolidate related content

## Priority Redirects (High Value - Recent Crawls)

### 1. Core Business Pages
| Old URL | New URL | Reason |
|---------|---------|---------|
| `/` | `/` | Homepage - exact match |
| `/about-us/` | `/contact` | About info moved to contact page |
| `/contact/` | `/contact` | Direct match |
| `/financing/` | `/financing` | Direct match |
| `/blog/` | `/blog` | Direct match |
| `/privacy-policy/` | `/privacy-policy` | Direct match |
| `/terms-and-conditions/` | `/terms-conditions` | Direct match |

### 2. Service Pages
| Old URL | New URL | Reason |
|---------|---------|---------|
| `/wood-fence-installation/` | `/fence-styles` | Wood fence info consolidated |
| `/wood-fence-wa/` | `/fence-styles` | Wood fence info consolidated |
| `/fence-gates-seattle-wa/` | `/fence-styles` | Gates info consolidated |
| `/gates-faq/` | `/fence-styles` | Gates FAQ consolidated |
| `/horiztonal-fences-myfence/` | `/fence-styles/horizontal-fence` | Direct match to new page |
| `/fencebuildprocess/` | `/contact` | Process info moved to contact |

### 3. Quote/Tools Pages
| Old URL | New URL | Reason |
|---------|---------|---------|
| `/myfence-com-diy-estimate-tool/` | `/quote` | Quote tool consolidated |
| `/book-online-fence-seattle/` | `/quote` | Booking consolidated into quote tool |

### 4. Local SEO Pages (Consolidate Strategy)
All location-specific pages redirect to main service pages to avoid duplicate content:

| Old URL Pattern | New URL | Strategy |
|----------------|---------|----------|
| `/*-fence-contractor-*/` | `/fence-styles` | Consolidate all contractor pages |
| `/*-fence-company-near-me/` | `/fence-styles` | Consolidate all company pages |
| `/*-fence-installation/` | `/fence-styles` | Consolidate all installation pages |
| `/*-wood-fence-*/` | `/fence-styles` | Consolidate all wood fence pages |
| `/*-local-fence-companies/` | `/fence-styles` | Consolidate all local pages |

### 5. Specific Location Redirects
| Old URL | New URL | Reason |
|---------|---------|---------|
| `/seattle-local-fence-companies/` | `/fence-styles` | Local SEO consolidation |
| `/seattle-fence-contractor-98115/` | `/fence-styles` | Local SEO consolidation |
| `/maple-valley-fence-contractor-98038/` | `/fence-styles` | Local SEO consolidation |
| `/federal-way-fence-contractor-98023/` | `/fence-styles` | Local SEO consolidation |
| `/auburn-wood-fence-contractors/` | `/fence-styles` | Local SEO consolidation |
| `/maple-valley-fence-installation/` | `/fence-styles` | Local SEO consolidation |
| `/university-place-fence-company-near-me/` | `/fence-styles` | Local SEO consolidation |
| `/issaquah-local-fence-companies/` | `/fence-styles` | Local SEO consolidation |
| `/issaquah-wood-fence-contractors/` | `/fence-styles` | Local SEO consolidation |
| `/kirkland-wood-fence-company-near-me/` | `/fence-styles` | Local SEO consolidation |
| `/ravensdale-fence-contractors/` | `/fence-styles` | Local SEO consolidation |
| `/bellevue-fence-company-near-me/` | `/fence-styles` | Local SEO consolidation |
| `/fence-contractor-issaquah-wa-98027/` | `/fence-styles` | Local SEO consolidation |
| `/lake-tapps-fence-contractor-98391/` | `/fence-styles` | Local SEO consolidation |
| `/maple-valley-best-fence-company/` | `/fence-styles` | Local SEO consolidation |
| `/maple-valley-home-fencing/` | `/fence-styles` | Local SEO consolidation |
| `/covington-fence-contractor-98042/` | `/fence-styles` | Local SEO consolidation |
| `/seattle-wood-fence-installation/` | `/fence-styles` | Local SEO consolidation |

### 6. Content/Utility Pages
| Old URL | New URL | Reason |
|---------|---------|---------|
| `/fence-projects-seattle-wa/` | `/gallery` | Projects moved to gallery |
| `/past-projects/` | `/gallery` | Past projects moved to gallery |
| `/permitting-hoa-submittal/` | `/contact` | Permitting info moved to contact |
| `/custom-software/` | `/contact` | Software info moved to contact |
| `/myfence-review/` | `/contact` | Reviews moved to contact |
| `/sitemap/` | `/sitemap.xml` | XML sitemap redirect |
| `/map/` | `/contact` | Map moved to contact |

### 7. PDF Downloads (Handle Carefully)
| Old URL | New URL | Strategy |
|---------|---------|----------|
| `/wp-content/uploads/2024/02/Fence-Genius.pdf` | `/fence-genius` | PDF content moved to page |
| `/wp-content/uploads/2024/02/Download-Convex-Sheet.pdf` | `/fence-styles` | Sheet info consolidated |
| `/wp-content/uploads/2024/02/Download-Convave-Sheet.pdf` | `/fence-styles` | Sheet info consolidated |
| `/wp-content/uploads/2024/02/Download-Flat-Gate-Sheet.pdf` | `/fence-styles` | Gate sheet info consolidated |

## Redirect Implementation Notes

### 1. High Priority Redirects (Implement First)
- Homepage redirects
- Core business pages (contact, financing, blog)
- Legal pages (privacy, terms)

### 2. Medium Priority Redirects
- Service pages
- Quote tool pages
- Gallery/projects pages

### 3. Low Priority Redirects (Can Batch)
- All location-specific pages (can use wildcard redirects)
- PDF downloads
- Utility pages

### 4. Content Migration Strategy
- **Location pages**: Create a "Service Areas" section on main fence-styles page
- **PDF content**: Integrate into relevant pages or create downloadable content
- **Reviews**: Add testimonials section to contact page
- **Process info**: Add to contact or create dedicated process section

## Technical Implementation

### Nginx Redirects (Example)
```nginx
# Core pages
location = /about-us/ { return 301 /contact; }
location = /contact/ { return 301 /contact; }
location = /financing/ { return 301 /financing; }

# Wildcard for location pages
location ~* /.*-fence-(contractor|company|installation).*/ { return 301 /fence-styles; }
location ~* /.*-wood-fence-.*/ { return 301 /fence-styles; }

# PDF redirects
location = /wp-content/uploads/2024/02/Fence-Genius.pdf { return 301 /fence-genius; }
```

### .htaccess Redirects (Apache)
```apache
# Core pages
Redirect 301 /about-us/ /contact
Redirect 301 /contact/ /contact
Redirect 301 /financing/ /financing

# Location pages (use regex if supported)
RedirectMatch 301 /.*-fence-(contractor|company|installation).*/ /fence-styles
RedirectMatch 301 /.*-wood-fence-.*/ /fence-styles
```

## SEO Considerations

### 1. Link Equity Preservation
- All redirects use 301 status
- Maintain keyword relevance where possible
- Preserve local SEO value through content consolidation

### 2. Content Strategy
- Add "Service Areas" section to fence-styles page listing all covered locations
- Include location-specific keywords naturally in content
- Maintain local business schema markup

### 3. Monitoring
- Track redirect performance in GSC
- Monitor for 404 errors
- Check ranking changes for consolidated pages

## Risk Mitigation

### 1. Potential Issues
- Loss of local SEO rankings for specific locations
- Reduced long-tail keyword visibility
- Potential traffic drop during transition

### 2. Mitigation Strategies
- Implement redirects gradually
- Monitor rankings closely for first 30 days
- Be prepared to create location-specific landing pages if needed
- Maintain local business citations and schema markup

## Next Steps

1. **Implement core redirects first** (homepage, contact, financing)
2. **Test redirects** in staging environment
3. **Monitor performance** closely after launch
4. **Create content consolidation plan** for location-specific SEO
5. **Set up monitoring alerts** for 404 errors and ranking drops

