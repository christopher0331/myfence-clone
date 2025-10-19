# MyFence.com Content Consolidation Plan

## Overview
This plan addresses how to consolidate content from 43 old pages into your new streamlined site structure while preserving SEO value and user experience.

## Content Gaps Identified

### 1. Location-Specific SEO Content
**Problem**: 20+ location-specific pages being consolidated to `/fence-styles`
**Solution**: Create comprehensive "Service Areas" section

#### Recommended Content Additions to `/fence-styles`:
```html
<section class="service-areas">
  <h2>We Serve All of Greater Seattle</h2>
  <div class="location-grid">
    <div class="location-column">
      <h3>Seattle Metro</h3>
      <ul>
        <li>Seattle (98115, 98112, 98103, etc.)</li>
        <li>Bellevue</li>
        <li>Kirkland</li>
        <li>Issaquah (98027)</li>
      </ul>
    </div>
    <div class="location-column">
      <h3>South King County</h3>
      <ul>
        <li>Federal Way (98023)</li>
        <li>Auburn</li>
        <li>Maple Valley (98038)</li>
        <li>Ravensdale</li>
        <li>Covington (98042)</li>
      </ul>
    </div>
    <div class="location-column">
      <h3>Pierce County</h3>
      <ul>
        <li>University Place</li>
        <li>Lake Tapps (98391)</li>
      </ul>
    </div>
  </div>
</section>
```

### 2. Process Information
**Problem**: `/fencebuildprocess/` content lost
**Solution**: Add process section to contact page or create dedicated process page

#### Recommended Process Content:
- Initial consultation
- Design and planning
- Permitting and HOA approval
- Installation timeline
- Quality inspection
- Final walkthrough

### 3. PDF Downloads Content
**Problem**: 4 PDF downloads being redirected
**Solution**: Integrate content into relevant pages

#### PDF Content to Integrate:
1. **Fence Genius PDF** → Already have `/fence-genius` page
2. **Convex Sheet PDF** → Add to fence styles with convex options
3. **Concave Sheet PDF** → Add to fence styles with concave options  
4. **Flat Gate Sheet PDF** → Add gate options to fence styles

### 4. Reviews and Testimonials
**Problem**: `/myfence-review/` content lost
**Solution**: Add testimonials section to contact page

### 5. Custom Software Information
**Problem**: `/custom-software/` content lost
**Solution**: Add software/technology section to contact page

## Content Strategy by Page

### `/fence-styles` Page Enhancements
```markdown
## Add These Sections:

1. **Service Areas** (as shown above)
2. **Gate Options**
   - Flat gates
   - Arched gates
   - Custom designs
3. **Sheet Options**
   - Convex sheets
   - Concave sheets
   - Standard sheets
4. **Local Expertise**
   - "We understand local building codes in Seattle, Bellevue, Maple Valley, and surrounding areas"
   - HOA approval assistance
   - Permit handling
```

### `/contact` Page Enhancements
```markdown
## Add These Sections:

1. **Our Process**
   - Step-by-step installation process
   - Timeline expectations
   - What to expect

2. **Technology & Software**
   - 3D visualization tools
   - Custom design software
   - Virtual quote system

3. **Reviews & Testimonials**
   - Customer reviews
   - Before/after photos
   - Rating summary

4. **Service Areas Map**
   - Interactive map showing coverage
   - List of zip codes served
```

### `/gallery` Page Enhancements
```markdown
## Add These Sections:

1. **Project Categories**
   - Residential projects
   - Commercial projects
   - Before/after transformations

2. **Location Tags**
   - Filter by city/area
   - Showcase local projects

3. **Project Details**
   - Fence type used
   - Location
   - Customer testimonial
```

## SEO Keyword Strategy

### Primary Keywords to Target:
- "fence contractor [city name]"
- "fence installation [city name]"
- "wood fence [city name]"
- "fence company near me"

### Content Optimization:
1. **Include location keywords naturally** in service areas section
2. **Add local business schema** markup
3. **Create location-specific landing pages** if needed later
4. **Maintain local citations** in directories

## Implementation Priority

### Phase 1 (Critical - Do Before Launch):
- [ ] Add service areas section to `/fence-styles`
- [ ] Add process information to `/contact`
- [ ] Integrate PDF content into relevant pages
- [ ] Add testimonials to `/contact`

### Phase 2 (Important - Within 1 Week of Launch):
- [ ] Add gate and sheet options to `/fence-styles`
- [ ] Enhance gallery with location tags
- [ ] Add technology section to `/contact`
- [ ] Implement local business schema

### Phase 3 (Enhancement - Within 1 Month):
- [ ] Create interactive service areas map
- [ ] Add project filtering by location
- [ ] Create location-specific landing pages if needed
- [ ] Add customer review integration

## Content Migration Checklist

### Before Launch:
- [ ] Audit all old page content
- [ ] Identify unique value propositions from each location page
- [ ] Extract customer testimonials and reviews
- [ ] Document process information
- [ ] Save PDF content for integration

### After Launch:
- [ ] Monitor search console for lost rankings
- [ ] Track traffic to consolidated pages
- [ ] Monitor user engagement metrics
- [ ] Be prepared to create location-specific pages if needed

## Risk Mitigation

### Potential Issues:
1. **Lost local SEO rankings** for specific cities
2. **Reduced long-tail keyword visibility**
3. **User confusion** about service areas

### Mitigation Strategies:
1. **Comprehensive service areas section** with all locations listed
2. **Local business schema** markup for all served areas
3. **Clear messaging** about service coverage
4. **Monitor rankings** and be ready to create location pages if needed

## Success Metrics

### Track These KPIs:
- Organic traffic to `/fence-styles` page
- Rankings for "[city] fence contractor" keywords
- User engagement on service areas section
- Contact form submissions from service areas
- Bounce rate on consolidated pages

### Warning Signs:
- Significant traffic drop (>20%) in first 30 days
- Lost rankings for important location keywords
- Increased bounce rate on fence-styles page
- Decreased contact form submissions

## Next Steps

1. **Review this plan** and prioritize content additions
2. **Start with Phase 1** critical content before launch
3. **Test content** with target audience if possible
4. **Monitor closely** after launch and adjust as needed
5. **Be prepared to pivot** if location-specific pages are needed

