import React from 'react';
import Seo from "@/components/Seo";
import FenceCleaningStainingContent from './FenceCleaningStaining.mdx';

const FenceCleaningStainingMDX = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Should I Clean My Fence for Staining?",
    "description": "Learn proper fence cleaning techniques before staining.",
    "author": { "@type": "Organization", "name": "Seattle Fence Company" },
    "publisher": { "@type": "Organization", "name": "Seattle Fence Company" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  return (
    <>
      <Seo
        title="Fence Cleaning Before Staining: Seattle Professional Cleaning Guide"
        description="Expert fence cleaning techniques for Seattle properties. Softwashing vs pressure washing."
        canonical="https://seattlefence.com/blog/fence-cleaning-staining"
        structuredData={structuredData}
      />
      <FenceCleaningStainingContent />
    </>
  );
};

export default FenceCleaningStainingMDX;
