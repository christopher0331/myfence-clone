import React from 'react';
import Seo from "@/components/Seo";
import ErrorBoundary from "@/components/ErrorBoundary";
import SixFtFenceCostContent from './SixFtFenceCost.mdx';
import { SITE_CONFIG } from "@/constants/siteConfig";

const SixFtFenceCostMDX = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does a 6-Foot Privacy Fence Cost in Seattle?",
    "description": "Get a comprehensive breakdown of 6-foot privacy fence costs in Seattle, including materials, labor, and factors that affect your total investment.",
    "image": "https://myfence.com/lovable-uploads/840c5f7f-0578-45fa-9b5c-195760503695.png",
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
    "datePublished": "2024-12-01",
    "dateModified": "2024-12-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/fence-cost-seattle`
    }
  };

  return (
    <>
      <Seo
        title="6ft Fence Cost Seattle 2025: Complete Installation Pricing Guide"
        description="Complete Seattle 6-foot fence cost breakdown for 2025. Cedar privacy fencing $42-60/LF. Materials, labor, permits included. Call (253) 478-8589 for quotes."
        canonical={`${SITE_CONFIG.url}/blog/fence-cost-seattle`}
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <SixFtFenceCostContent />
      </ErrorBoundary>
    </>
  );
};

export default SixFtFenceCostMDX;
