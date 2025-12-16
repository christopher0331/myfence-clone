import Head from "next/head";
import type { StaticImageData } from "next/image";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string | StaticImageData;
  structuredData?: Record<string, any> | Record<string, any>[];
  ogTitle?: string; // Optional separate title for social sharing previews
}

const Seo = ({ title, description, canonical, image, structuredData, ogTitle }: SeoProps) => {
  // Handle both single structured data object and arrays
  const structuredDataArray = structuredData 
    ? Array.isArray(structuredData) 
      ? structuredData 
      : [structuredData]
    : [];

  // Convert relative image URLs to absolute URLs
  const rawImage = image
    ? typeof image === "string"
      ? image
      : image.src
    : undefined;

  const absoluteImage = rawImage
    ? rawImage.startsWith("http")
      ? rawImage
      : `${SITE_CONFIG.url}${rawImage}`
    : undefined;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph tags */}
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        {canonical && <meta property="og:url" content={canonical} />}
        {absoluteImage && <meta property="og:image" content={absoluteImage} />}
        {absoluteImage && <meta property="og:image:width" content="1200" />}
        {absoluteImage && <meta property="og:image:height" content="630" />}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta name="twitter:description" content={description} />
        {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}

        {canonical && <link rel="canonical" href={canonical} />}
      </Head>
      {/* Render JSON-LD in body for App Router compatibility */}
      {structuredDataArray.map((data, index) => (
        <script 
          key={`schema-${index}`} 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
};

export default Seo;
