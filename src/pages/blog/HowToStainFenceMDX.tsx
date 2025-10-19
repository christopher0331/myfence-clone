import React from 'react';
import Seo from "@/components/Seo";
import HowToStainFenceMDXContent from './HowToStainFence.mdx';

const HowToStainFenceMDX = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Do I Stain My Fence?",
    "description": "Complete guide to fence staining in Seattle - brushing vs spraying techniques, best practices, and step-by-step instructions for lasting results.",
    "author": {
      "@type": "Organization",
      "name": "Seattle Fence Company"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Seattle Fence Company"
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://seattlefence.com/blog/how-to-stain-fence"
    }
  };

  return (
    <>
      <Seo
        title="How to Stain a Cedar Fence: Professional Seattle Guide & Techniques"
        description="Professional cedar fence staining guide for Seattle's climate. Brushing vs spraying, best products, step-by-step process. 30+ years experience. Call (253) 455-1885."
        canonical="https://seattlefence.com/blog/how-to-stain-fence"
        structuredData={structuredData}
      />
      <HowToStainFenceMDXContent />
    </>
  );
};

export default HowToStainFenceMDX;
