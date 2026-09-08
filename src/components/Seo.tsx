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
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  ogTitle?: string;
}

function toJsonLdDocument(
  structuredData: Record<string, unknown> | Record<string, unknown>[]
): Record<string, unknown> | null {
  if (Array.isArray(structuredData)) {
    if (structuredData.length === 0) return null;
    if (structuredData.length === 1 && structuredData[0]["@graph"]) {
      return structuredData[0];
    }
    const graph = structuredData.map((node) => {
      const { "@context": _context, ...rest } = node;
      return rest;
    });
    return { "@context": "https://schema.org", "@graph": graph };
  }

  if (structuredData["@graph"]) {
    return structuredData;
  }

  return {
    "@context": "https://schema.org",
    "@graph": [structuredData],
  };
}

const Seo = ({ structuredData }: SeoProps) => {
  if (!structuredData) return null;

  const document = toJsonLdDocument(structuredData);
  if (!document) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(document) }}
    />
  );
};

export default Seo;
