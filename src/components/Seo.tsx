/**
 * JSON-LD structured data renderer.
 *
 * Title, description, canonical, and OG tags are now handled exclusively by
 * Next.js Metadata API (`export const metadata` / `generateMetadata`) in each
 * route's page.tsx. Those props are accepted but ignored so existing call-sites
 * compile without changes during the migration.
 */

import type { StaticImageData } from "next/image";

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string | StaticImageData;
  structuredData?: Record<string, any> | Record<string, any>[];
  ogTitle?: string;
}

const Seo = ({ structuredData }: SeoProps) => {
  const structuredDataArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  if (structuredDataArray.length === 0) return null;

  return (
    <>
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
