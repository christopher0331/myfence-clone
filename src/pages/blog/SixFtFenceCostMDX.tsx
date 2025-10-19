import React from 'react';
import Seo from "@/components/Seo";
import ErrorBoundary from "@/components/ErrorBoundary";
import SixFtFenceCostContent from './SixFtFenceCost.mdx';

const SixFtFenceCostMDX = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does a 6-Foot Privacy Fence Cost in Seattle?",
    "description": "Get a comprehensive breakdown of 6-foot privacy fence costs in Seattle, including materials, labor, and factors that affect your total investment.",
    "image": "/lovable-uploads/840c5f7f-0578-45fa-9b5c-195760503695.png",
    "author": {
      "@type": "Organization",
      "name": "MyFence.com",
      "url": "https://myfence.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MyFence.com",
      "url": "https://myfence.com"
    },
    "datePublished": "2024-12-01",
    "dateModified": "2024-12-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://myfence.com/blog/fence-cost-seattle"
    }
  };

  return (
    <>
      <Seo
        title="6ft Fence Cost Seattle 2025: Complete Installation Pricing Guide"
        description="Complete Seattle 6-foot fence cost breakdown for 2025. Cedar privacy fencing $42-60/LF. Materials, labor, permits included. Call (253) 478-8589 for quotes."
        canonical="https://myfence.com/blog/fence-cost-seattle"
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <SixFtFenceCostContent />
      </ErrorBoundary>
    </>
  );
};

export default SixFtFenceCostMDX;
