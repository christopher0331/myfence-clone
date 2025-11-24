import React from 'react';
import Seo from "@/components/Seo";
import HowToStainFenceMDXContent from './HowToStainFence.mdx';
import { SITE_CONFIG } from "@/constants/siteConfig";

const HowToStainFenceMDX = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Do I Stain My Fence?",
    "description": "Complete guide to fence staining in Seattle - brushing vs spraying techniques, best practices, and step-by-step instructions for lasting results.",
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
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/how-to-stain-fence`
    }
  };

  return (
    <>
      <Seo
        title="How to Stain a Cedar Fence: Professional Seattle Guide & Techniques"
        description="Professional cedar fence staining guide for Seattle's climate. Brushing vs spraying, best products, step-by-step process. 30+ years experience. Call (253) 478-8589."
        canonical={`${SITE_CONFIG.url}/blog/how-to-stain-fence`}
        structuredData={structuredData}
      />
      <HowToStainFenceMDXContent />
    </>
  );
};

export default HowToStainFenceMDX;
