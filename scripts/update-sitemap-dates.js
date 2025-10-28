#!/usr/bin/env node

/**
 * Update sitemap.xml lastmod dates
 * This script can be run manually or via CI/CD
 */

const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Get current date in ISO format (YYYY-MM-DD)
const currentDate = new Date().toISOString().split('T')[0];

try {
  // Read sitemap
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  // Count occurrences before update
  const beforeCount = (sitemap.match(/<lastmod>/g) || []).length;
  
  // Replace all lastmod dates
  sitemap = sitemap.replace(
    /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
    `<lastmod>${currentDate}</lastmod>`
  );
  
  // Count occurrences after update
  const afterCount = (sitemap.match(/<lastmod>/g) || []).length;
  
  // Write back to file
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  
  console.log(`✅ Updated ${afterCount} lastmod dates to ${currentDate}`);
  
  if (beforeCount === afterCount) {
    console.log(`✅ All lastmod tags successfully updated`);
  } else {
    console.warn(`⚠️  Warning: Expected ${beforeCount} updates but found ${afterCount}`);
  }
} catch (error) {
  console.error('❌ Error updating sitemap:', error.message);
  process.exit(1);
}
