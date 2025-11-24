import React from 'react';
import Seo from "@/components/Seo";
import ErrorBoundary from "@/components/ErrorBoundary";
import NeighborFenceCostSplitContent from './NeighborFenceCostSplit.mdx';
import { SITE_CONFIG } from "@/constants/siteConfig";

const NeighborFenceCostSplitMDX = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Should My Neighbor Split Our Fence Cost With Me?",
    "description": "Navigate the complexities of shared fence costs with neighbors, including Washington State laws and best practices for property line fencing.",
    "author": {
      "@type": "Organization",
      "name": SITE_CONFIG.fullName,
      "url": SITE_CONFIG.url,
      "logo": {
        "@type": "ImageObject",
        "url": SITE_CONFIG.logoUrl
      }
    },
    "publisher": {
      "@type": "Organization", 
      "name": SITE_CONFIG.fullName,
      "url": SITE_CONFIG.url,
      "logo": {
        "@type": "ImageObject",
        "url": SITE_CONFIG.logoUrl
      }
    },
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/neighbor-split`
    }
  };

  return (
    <>
      <Seo 
        title="Should My Neighbor Split Our Fence Cost? Washington State RCW Law Guide 2024"
        description="Learn Washington State RCW 16.60.020 fence cost sharing laws. Get professional Fence Genius proposals to help neighbors split fence costs fairly and legally."
        canonical={`${SITE_CONFIG.url}/blog/neighbor-split`}
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <NeighborFenceCostSplitContent />
      </ErrorBoundary>
    </>
  );
};

export default NeighborFenceCostSplitMDX;
