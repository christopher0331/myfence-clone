import { SITE_CONFIG, SCHEMA_ADDRESS } from "@/constants/siteConfig";

export interface NeighborhoodFaqItem {
  question: string;
  answer: string;
}

export interface NeighborhoodBreadcrumbCrumb {
  name: string;
  url: string;
}

function cityFromCanonical(canonical: string): { slug: string; name: string } {
  const parts = canonical.replace("https://myfence.com/", "").split("/");
  const citySlug = parts[1] || "bonney-lake";
  const cityName = citySlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return { slug: citySlug, name: cityName };
}

/** Shared trail for the visible breadcrumb and BreadcrumbList JSON-LD. */
export function buildNeighborhoodBreadcrumbTrail({
  canonical,
  neighborhoodName,
  parent,
}: {
  canonical: string;
  neighborhoodName: string;
  parent?: { name: string; url: string };
}): NeighborhoodBreadcrumbCrumb[] {
  const city = cityFromCanonical(canonical);
  const items: NeighborhoodBreadcrumbCrumb[] = [
    { name: "Home", url: "https://myfence.com" },
    { name: "Service Areas", url: "https://myfence.com/service-areas" },
    { name: city.name, url: `https://myfence.com/service-areas/${city.slug}` },
  ];

  if (parent) {
    items.push({ name: parent.name, url: parent.url });
  }

  items.push({ name: neighborhoodName, url: canonical });
  return items;
}

function buildBreadcrumbItems(
  canonical: string,
  neighborhoodName: string,
  parent?: { name: string; url: string },
) {
  return buildNeighborhoodBreadcrumbTrail({
    canonical,
    neighborhoodName,
    parent,
  }).map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  }));
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
