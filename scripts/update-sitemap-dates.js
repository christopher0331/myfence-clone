#!/usr/bin/env node

/**
 * Update sitemap.xml lastmod dates for modified pages only
 * This script detects which files changed and updates only their corresponding sitemap URLs
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Map source files to sitemap URLs
const fileToUrlMap = {
  // Main pages
  'src/pages/Index.tsx': 'https://myfence.com/',
  'src/pages/Contact.tsx': 'https://myfence.com/contact',
  'src/pages/QuoteTool.tsx': 'https://myfence.com/quote',
  'src/pages/FenceStyles.tsx': 'https://myfence.com/fence-styles',
  'src/pages/Gallery.tsx': 'https://myfence.com/gallery',
  'src/pages/Financing.tsx': 'https://myfence.com/financing',
  'src/pages/Discounts.tsx': 'https://myfence.com/discounts',
  'src/pages/FenceGenius.tsx': 'https://myfence.com/fence-genius',
  'src/pages/FenceStaining.tsx': 'https://myfence.com/should-i-stain-my-fence',
  'src/pages/PreStaining.tsx': 'https://myfence.com/pre-staining-cedar-fence',
  'src/pages/PrivacyPolicy.tsx': 'https://myfence.com/privacy-policy',
  'src/pages/TermsConditions.tsx': 'https://myfence.com/terms-conditions',
  'src/pages/Blog.tsx': 'https://myfence.com/blog',
  
  // Fence styles
  'src/pages/fence-styles/PictureFrameFence.tsx': 'https://myfence.com/fence-styles/picture-frame-fence',
  'src/pages/fence-styles/ThreeRailPictureFrameFence.tsx': 'https://myfence.com/fence-styles/3-rail-picture-frame-fence',
  'src/pages/fence-styles/CraftsmanStyleFence.tsx': 'https://myfence.com/fence-styles/craftsman-style-fence',
  'src/pages/fence-styles/HorizontalLatticeFence.tsx': 'https://myfence.com/fence-styles/horizontal-lattice-fence',
  'src/pages/fence-styles/SolidBoardFence.tsx': 'https://myfence.com/fence-styles/solid-board-fence',
  'src/pages/fence-styles/HorizontalFence.tsx': 'https://myfence.com/fence-styles/horizontal-fence',
  'src/pages/fence-styles/BlackHogwireFence.tsx': 'https://myfence.com/fence-styles/black-hogwire-fence',
  'src/pages/fence-styles/GalvanizedHogwireFence.tsx': 'https://myfence.com/fence-styles/galvanized-hogwire-fence',
  'src/pages/fence-styles/ThreeFtBlackHogwireFence.tsx': 'https://myfence.com/fence-styles/three-ft-black-hogwire-fence',
  'src/pages/fence-styles/PicketFence.tsx': 'https://myfence.com/fence-styles/picket-fence',
  
  // Fence upgrades
  'src/pages/fence-upgrades/ExteriorScrews.tsx': 'https://myfence.com/fence-upgrades/exterior-screws',
  'src/pages/fence-upgrades/ClearCedar.tsx': 'https://myfence.com/fence-upgrades/clear-cedar',
  'src/pages/fence-upgrades/BoardOnBoard.tsx': 'https://myfence.com/fence-upgrades/board-on-board',
  
  // Service areas
  'src/pages/service-areas/FederalWay.tsx': 'https://myfence.com/service-areas/federal-way',
  'src/pages/service-areas/Redmond.tsx': 'https://myfence.com/service-areas/redmond',
  'src/pages/service-areas/Sammamish.tsx': 'https://myfence.com/service-areas/sammamish',
  'src/pages/service-areas/Seattle.tsx': 'https://myfence.com/service-areas/seattle',
  'src/pages/service-areas/Kirkland.tsx': 'https://myfence.com/service-areas/kirkland',
  'src/pages/service-areas/Renton.tsx': 'https://myfence.com/service-areas/renton',
  'src/pages/service-areas/MountlakeTerrace.tsx': 'https://myfence.com/service-areas/mountlake-terrace',
  'src/pages/service-areas/MapleValley.tsx': 'https://myfence.com/service-areas/maple-valley',
  'src/pages/service-areas/Bellevue.tsx': 'https://myfence.com/service-areas/bellevue',
  'src/pages/service-areas/Covington.tsx': 'https://myfence.com/service-areas/covington',
  'src/pages/service-areas/Issaquah.tsx': 'https://myfence.com/service-areas/issaquah',
  'src/pages/service-areas/LakeTapps.tsx': 'https://myfence.com/service-areas/lake-tapps',
  'src/pages/service-areas/GigHarbor.tsx': 'https://myfence.com/service-areas/gig-harbor',
  'src/pages/service-areas/Enumclaw.tsx': 'https://myfence.com/service-areas/enumclaw',
  
  // Blog posts
  'src/pages/blog/FenceCleaningStaining.mdx': 'https://myfence.com/blog/fence-cleaning-staining',
  'src/pages/blog/FenceCleaningStaining.tsx': 'https://myfence.com/blog/fence-cleaning-staining',
  'src/pages/blog/FenceCleaningStainingMDX.tsx': 'https://myfence.com/blog/fence-cleaning-staining',
  'src/pages/blog/HowToStainFence.mdx': 'https://myfence.com/blog/how-to-stain-fence',
  'src/pages/blog/HowToStainFence.tsx': 'https://myfence.com/blog/how-to-stain-fence',
  'src/pages/blog/HowToStainFenceMDX.tsx': 'https://myfence.com/blog/how-to-stain-fence',
  'src/pages/blog/NeighborFenceCostSplit.mdx': 'https://myfence.com/blog/fence-cost-shared-with-neighbor',
  'src/pages/blog/NeighborFenceCostSplitMDX.tsx': 'https://myfence.com/blog/fence-cost-shared-with-neighbor',
  'src/pages/blog/VirtualQuoteTool.mdx': 'https://myfence.com/blog/virtual-quote-tool',
  'src/pages/blog/VirtualQuoteTool.tsx': 'https://myfence.com/blog/virtual-quote-tool',
  'src/pages/blog/VirtualQuoteToolMDX.tsx': 'https://myfence.com/blog/virtual-quote-tool',
  'src/pages/blog/SixFtFenceCost.mdx': 'https://myfence.com/blog/fence-cost-seattle',
  'src/pages/blog/SixFtFenceCost.tsx': 'https://myfence.com/blog/fence-cost-seattle',
  'src/pages/blog/SixFtFenceCostMDX.tsx': 'https://myfence.com/blog/fence-cost-seattle',
  'src/pages/blog/WoodenFenceCost2025.mdx': 'https://myfence.com/blog/seattle-fence-cost-2025',
  'src/pages/blog/WoodenFenceCost2025.tsx': 'https://myfence.com/blog/seattle-fence-cost-2025',
  'src/pages/blog/WoodenFenceCost2025MDX.tsx': 'https://myfence.com/blog/seattle-fence-cost-2025',
};

// Get current date in ISO format (YYYY-MM-DD)
const currentDate = new Date().toISOString().split('T')[0];

/**
 * Get list of changed files in the last commit
 */
function getChangedFiles() {
  try {
    const output = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8' });
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.warn('⚠️  Could not get git diff, running in manual mode');
    // In manual mode, update all pages
    return Object.keys(fileToUrlMap);
  }
}

/**
 * Update lastmod for specific URL in sitemap
 */
function updateLastmodForUrl(sitemap, url, date) {
  // Escape special characters in URL for regex
  const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Match the entire <url> block containing this URL
  const urlBlockRegex = new RegExp(
    `(<url>\\s*<loc>${escapedUrl}</loc>\\s*)<lastmod>\\d{4}-\\d{2}-\\d{2}</lastmod>`,
    'g'
  );
  
  return sitemap.replace(urlBlockRegex, `$1<lastmod>${date}</lastmod>`);
}

try {
  // Get changed files
  const changedFiles = getChangedFiles();
  console.log(`📝 Found ${changedFiles.length} changed files`);
  
  // Map changed files to URLs
  const urlsToUpdate = new Set();
  changedFiles.forEach(file => {
    if (fileToUrlMap[file]) {
      urlsToUpdate.add(fileToUrlMap[file]);
    }
  });
  
  if (urlsToUpdate.size === 0) {
    console.log('✅ No sitemap URLs need updating');
    process.exit(0);
  }
  
  console.log(`🔄 Updating lastmod for ${urlsToUpdate.size} URLs:`);
  urlsToUpdate.forEach(url => console.log(`   - ${url}`));
  
  // Read sitemap
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  // Update lastmod for each URL
  let updateCount = 0;
  urlsToUpdate.forEach(url => {
    const before = sitemap;
    sitemap = updateLastmodForUrl(sitemap, url, currentDate);
    if (before !== sitemap) {
      updateCount++;
    }
  });
  
  // Write back to file
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  
  console.log(`✅ Successfully updated ${updateCount} lastmod dates to ${currentDate}`);
  
} catch (error) {
  console.error('❌ Error updating sitemap:', error.message);
  process.exit(1);
}
