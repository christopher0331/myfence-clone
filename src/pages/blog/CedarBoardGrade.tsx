import Seo from "@/components/Seo";
import { SITE_CONFIG } from "@/constants/siteConfig";
import CedarBoardGradeMDX from "./CedarBoardGradeMDX";
import img1x6x6Better from "@/assets/blog/1x6x6-1-better-cedar.jpg";

const CedarBoardGrade = () => {
  const title = "Choosing Cedar Fence Board Grade: A Complete Guide";
  const description = "Learn about the different cedar fence board grades MyFence.com offers, from #1-2 Face to Clear Cedar, and how to choose the right grade for your fence project in Seattle.";
  const canonical = `${SITE_CONFIG.url}/blog/cedar-board-grade`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": img1x6x6Better,
    "author": {
      "@type": "Organization",
      "name": SITE_CONFIG.fullName
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.fullName,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/myfence-logo.png`
      }
    },
    "datePublished": "2024-11-30",
    "dateModified": "2024-11-30"
  };

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        image={img1x6x6Better}
        structuredData={structuredData}
      />
      <CedarBoardGradeMDX />
    </>
  );
};

export default CedarBoardGrade;
