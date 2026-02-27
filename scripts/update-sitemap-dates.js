#!/usr/bin/env node

/**
 * Update sitemap.xml lastmod dates for modified pages only.
 * Detects which files changed in the last commit and updates their corresponding sitemap URLs.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

const fileToUrlMap = {
  // Main pages (App Router)
  'src/app/page.tsx': 'https://myfence.com/',
  'src/app/contact/page.tsx': 'https://myfence.com/contact',
  'src/app/quote/page.tsx': 'https://myfence.com/quote',
  'src/app/fence-styles/page.tsx': 'https://myfence.com/fence-styles',
  'src/app/gallery/page.tsx': 'https://myfence.com/gallery',
  'src/app/financing/page.tsx': 'https://myfence.com/financing',
  'src/app/discounts/page.tsx': 'https://myfence.com/discounts',
  'src/app/fence-genius/page.tsx': 'https://myfence.com/fence-genius',
  'src/app/should-i-stain-my-fence/page.tsx': 'https://myfence.com/should-i-stain-my-fence',
  'src/app/pre-staining-cedar-fence/page.tsx': 'https://myfence.com/pre-staining-cedar-fence',
  'src/app/privacy-policy/page.tsx': 'https://myfence.com/privacy-policy',
  'src/app/terms-conditions/page.tsx': 'https://myfence.com/terms-conditions',
  'src/app/blog/page.tsx': 'https://myfence.com/blog',

  // Fence styles
  'src/components/pages/fence-styles/PictureFrameFence.tsx': 'https://myfence.com/fence-styles/picture-frame-fence',
  'src/components/pages/fence-styles/ThreeRailPictureFrameFence.tsx': 'https://myfence.com/fence-styles/3-rail-picture-frame-fence',
  'src/components/pages/fence-styles/CraftsmanStyleFence.tsx': 'https://myfence.com/fence-styles/craftsman-style-fence',
  'src/components/pages/fence-styles/HorizontalLatticeFence.tsx': 'https://myfence.com/fence-styles/horizontal-lattice-fence',
  'src/components/pages/fence-styles/SolidBoardFence.tsx': 'https://myfence.com/fence-styles/solid-board-fence',
  'src/components/pages/fence-styles/HorizontalFence.tsx': 'https://myfence.com/fence-styles/horizontal-fence',
  'src/components/pages/fence-styles/BlackHogwireFence.tsx': 'https://myfence.com/fence-styles/black-hogwire-fence',
  'src/components/pages/fence-styles/GalvanizedHogwireFence.tsx': 'https://myfence.com/fence-styles/galvanized-hogwire-fence',
  'src/components/pages/fence-styles/ThreeFtBlackHogwireFence.tsx': 'https://myfence.com/fence-styles/three-ft-black-hogwire-fence',
  'src/components/pages/fence-styles/PicketFence.tsx': 'https://myfence.com/fence-styles/picket-fence',
  'src/components/pages/fence-styles/CedarAluminumHybridFence.tsx': 'https://myfence.com/fence-styles/cedar-steel-hybrid-fence',

  // Fence upgrades
  'src/components/pages/upgrades/ExteriorScrewsPage.tsx': 'https://myfence.com/fence-upgrades/exterior-screws',
  'src/components/pages/upgrades/ClearCedarPage.tsx': 'https://myfence.com/fence-upgrades/clear-cedar',
  'src/components/pages/upgrades/BoardOnBoardPage.tsx': 'https://myfence.com/fence-upgrades/board-on-board',
  'src/components/pages/upgrades/LatticeToppersPage.tsx': 'https://myfence.com/fence-upgrades/lattice-toppers',
  'src/components/pages/upgrades/PostOnPipePage.tsx': 'https://myfence.com/fence-upgrades/post-on-pipe',
  'src/components/pages/upgrades/RotBoardPage.tsx': 'https://myfence.com/fence-upgrades/rot-board',
  'src/components/pages/upgrades/SoilHaulAwayPage.tsx': 'https://myfence.com/fence-upgrades/soil-haul-away',
  'src/components/pages/upgrades/TrellisSystemsPage.tsx': 'https://myfence.com/fence-upgrades/trellis-systems',

  // Service areas (template + individual components)
  'src/components/templates/ServiceAreaTemplate.tsx': null,
  'src/components/service-areas/bonneylake.tsx': 'https://myfence.com/service-areas/bonney-lake',
  'src/components/service-areas/federalway.tsx': 'https://myfence.com/service-areas/federal-way',
  'src/components/service-areas/sammamish.tsx': 'https://myfence.com/service-areas/sammamish',
  'src/components/service-areas/renton.tsx': 'https://myfence.com/service-areas/renton',
  'src/components/service-areas/gigharbor.tsx': 'https://myfence.com/service-areas/gig-harbor',

  // Blog components
  'src/components/pages/blog/WoodenFenceCost2025.tsx': 'https://myfence.com/blog/wooden-fence-cost2025',
  'src/components/pages/blog/SixFtFenceCost.tsx': 'https://myfence.com/blog/fence-cost-seattle',
  'src/components/pages/blog/NeighborFenceCostSplit.tsx': 'https://myfence.com/blog/neighbor-fence-cost-split',
  'src/components/pages/blog/HowToStainFence.tsx': 'https://myfence.com/blog/how-to-stain-fence',
  'src/components/pages/blog/FenceCleaningStaining.tsx': 'https://myfence.com/blog/fence-cleaning-staining',
  'src/components/pages/blog/VirtualQuoteTool.tsx': 'https://myfence.com/blog/virtual-quote-tool',
  'src/components/pages/blog/SteelVsWoodPosts.tsx': 'https://myfence.com/blog/steel-vs-wood-posts',
  'src/components/pages/blog/CedarBoardGrade.tsx': 'https://myfence.com/blog/cedar-board-grade',
  'src/components/pages/blog/CedarAluminumHybridFenceMDX.tsx': 'https://myfence.com/blog/cedar-steel-hybrid-fence',
};

const currentDate = new Date().toISOString().split('T')[0];

function getChangedFiles() {
  try {
    const output = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8' });
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.warn('Could not get git diff, running in manual mode');
    return Object.keys(fileToUrlMap);
  }
}

function updateLastmodForUrl(sitemap, url, date) {
  const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const urlBlockRegex = new RegExp(
    `(<url>\\s*<loc>${escapedUrl}</loc>\\s*)<lastmod>\\d{4}-\\d{2}-\\d{2}</lastmod>`,
    'g'
  );
  return sitemap.replace(urlBlockRegex, `$1<lastmod>${date}</lastmod>`);
}

try {
  const changedFiles = getChangedFiles();
  console.log(`Found ${changedFiles.length} changed files`);

  const urlsToUpdate = new Set();
  changedFiles.forEach(file => {
    const url = fileToUrlMap[file];
    if (url) {
      urlsToUpdate.add(url);
    }
    // Auto-detect new blog MDX files
    if (file.startsWith('src/content/blog/') && file.endsWith('.mdx')) {
      const slug = path.basename(file, '.mdx');
      urlsToUpdate.add(`https://myfence.com/blog/${slug}`);
    }
  });

  if (urlsToUpdate.size === 0) {
    console.log('No sitemap URLs need updating');
    process.exit(0);
  }

  console.log(`Updating lastmod for ${urlsToUpdate.size} URLs:`);
  urlsToUpdate.forEach(url => console.log(`   - ${url}`));

  let sitemap = fs.readFileSync(sitemapPath, 'utf8');

  let updateCount = 0;
  urlsToUpdate.forEach(url => {
    const before = sitemap;
    sitemap = updateLastmodForUrl(sitemap, url, currentDate);
    if (before !== sitemap) {
      updateCount++;
    }
  });

  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`Updated ${updateCount} lastmod dates to ${currentDate}`);

} catch (error) {
  console.error('Error updating sitemap:', error.message);
  process.exit(1);
}
