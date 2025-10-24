import React from 'react';
import Seo from "@/components/Seo";
import ErrorBoundary from "@/components/ErrorBoundary";
import WoodenFenceCost2025Content from './WoodenFenceCost2025.mdx';

const WoodenFenceCost2025MDX = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://myfence.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://myfence.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Wooden Fence Cost 2025", "item": "https://myfence.com/blog/seattle-fence-cost-2025" }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does a Wooden Fence Cost in Seattle in 2025?",
    "description": "Updated pricing guide for wooden fence installation in Seattle for 2025.",
    "author": { 
      "@type": "Organization", 
      "name": "MyFence.com",
      "url": "https://myfence.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myfence.com/myfence-logo.png"
      }
    },
    "publisher": { 
      "@type": "Organization", 
      "name": "MyFence.com",
      "url": "https://myfence.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myfence.com/myfence-logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  return (
    <>
      <Seo
        title="Wooden Fence Cost Seattle 2025: Complete Pricing Guide & Estimates"
        description="Updated 2025 wooden fence costs in Seattle, WA. Cedar prices $35-60/LF. Market trends, labor costs, permits. Free estimates. Call (253) 478-8589."
        structuredData={[breadcrumbData, structuredData]}
      />
      <ErrorBoundary>
        <WoodenFenceCost2025Content />
      </ErrorBoundary>
    </>
  );
};

export default WoodenFenceCost2025MDX;
