import React from 'react';
import Seo from "@/components/Seo";
import VirtualQuoteToolContent from './VirtualQuoteTool.mdx';

const VirtualQuoteToolMDX = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Get Your Instant Fence Quote with Our Advanced Virtual Tool",
    "description": "Discover how our revolutionary virtual quote tool lets you choose fence styles, customize posts, add upgrades, and draw your property for accurate instant pricing.",
    "image": "/lovable-uploads/96fca880-7890-4f75-83cc-4a78693640a9.png",
    "author": {
      "@type": "Organization",
      "name": "Seattle Fence Pros"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Seattle Fence Pros"
    },
    "datePublished": "2025-01-06",
    "dateModified": "2025-01-06"
  };

  return (
    <>
      <Seo
        title="Get Your Instant Fence Quote with Our Advanced Virtual Tool | Seattle Fence Pros"
        description="Discover how our revolutionary virtual quote tool lets you choose fence styles, customize posts, add upgrades, and draw your property for accurate instant pricing."
        structuredData={structuredData}
      />
      <VirtualQuoteToolContent />
    </>
  );
};

export default VirtualQuoteToolMDX;
