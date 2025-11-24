import React from 'react';
import Seo from "@/components/Seo";
import ErrorBoundary from "@/components/ErrorBoundary";
import FenceCleaningStainingContent from './FenceCleaningStaining.mdx';
import { SITE_CONFIG } from "@/constants/siteConfig";

const FenceCleaningStainingMDX = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Should I Clean My Fence for Staining?",
    "description": "Learn proper fence cleaning techniques before staining.",
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
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  return (
    <>
      <Seo
        title="Fence Cleaning Before Staining: Seattle Professional Cleaning Guide"
        description="Expert fence cleaning techniques for Seattle properties. Softwashing vs pressure washing."
        canonical={`${SITE_CONFIG.url}/blog/fence-cleaning-staining`}
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <FenceCleaningStainingContent />
      </ErrorBoundary>
    </>
  );
};

export default FenceCleaningStainingMDX;
