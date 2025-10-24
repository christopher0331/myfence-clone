import React from 'react';
import Seo from "@/components/Seo";
import ErrorBoundary from "@/components/ErrorBoundary";
import NeighborFenceCostSplitContent from './NeighborFenceCostSplit.mdx';

const NeighborFenceCostSplitMDX = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Should My Neighbor Split Our Fence Cost With Me?",
    "description": "Navigate the complexities of shared fence costs with neighbors, including Washington State laws and best practices for property line fencing.",
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
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://myfence.com/blog/neighbor-split"
    }
  };

  return (
    <>
      <Seo 
        title="Should My Neighbor Split Our Fence Cost? Washington State RCW Law Guide 2024"
        description="Learn Washington State RCW 16.60.020 fence cost sharing laws. Get professional Fence Genius proposals to help neighbors split fence costs fairly and legally."
        canonical="https://myfence.com/blog/neighbor-split"
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <NeighborFenceCostSplitContent />
      </ErrorBoundary>
    </>
  );
};

export default NeighborFenceCostSplitMDX;
