import { SITE_CONFIG, SCHEMA_ADDRESS } from "@/constants/siteConfig";

export interface NeighborhoodFaqItem {
  question: string;
  answer: string;
}

function buildBreadcrumbItems(
  canonical: string,
  neighborhoodName: string,
  parent?: { name: string; url: string },
) {
  const parts = canonical.replace("https://myfence.com/", "").split("/");
  const citySlug = parts[1] || "bonney-lake";
  const cityName = citySlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const items: Array<Record<string, unknown>> = [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Service Areas",
      item: "https://myfence.com/service-areas",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: cityName,
      item: `https://myfence.com/service-areas/${citySlug}`,
    },
  ];

  if (parent) {
    items.push({
      "@type": "ListItem",
      position: 4,
      name: parent.name,
      item: parent.url,
    });
    items.push({
      "@type": "ListItem",
      position: 5,
      name: neighborhoodName,
      item: canonical,
    });
  } else {
    items.push({
      "@type": "ListItem",
      position: 4,
      name: neighborhoodName,
      item: canonical,
    });
  }

  return items;
}

interface NeighborhoodSchemaConfig {
  canonical: string;
  neighborhoodName: string;
  pageTitle: string;
  description: string;
  faqItems?: NeighborhoodFaqItem[];
  /** Optional parent crumb (e.g. neighborhood page above an HOA subpage). */
  parent?: { name: string; url: string };
}

/**
 * Returns one JSON-LD document with @graph so Google sees a single structured-data
 * block per page (avoids "Duplicate field FAQPage" from multiple script tags).
 */
export function buildNeighborhoodStructuredData({
  canonical,
  neighborhoodName,
  pageTitle,
  description,
  faqItems = [],
  parent,
}: NeighborhoodSchemaConfig): Record<string, unknown> {
  const businessId = `${canonical}#localbusiness`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": businessId,
      name: `MyFence.com - ${neighborhoodName} Fence Installation`,
      description,
      url: SITE_CONFIG.url,
      telephone: `+1${SITE_CONFIG.phoneLink}`,
      address: SCHEMA_ADDRESS,
      areaServed: {
        "@type": "City",
        name: neighborhoodName,
        containedInPlace: {
          "@type": "State",
          name: "Washington",
        },
      },
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: pageTitle,
      serviceType: "Fence installation and replacement",
      description,
      areaServed: {
        "@type": "City",
        name: neighborhoodName,
        containedInPlace: {
          "@type": "State",
          name: "Washington",
        },
      },
      provider: { "@id": businessId },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: canonical,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: buildBreadcrumbItems(canonical, neighborhoodName, parent),
    },
  ];

  if (faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
