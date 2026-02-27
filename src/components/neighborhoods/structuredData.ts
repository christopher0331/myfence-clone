function buildBreadcrumbItems(canonical: string, neighborhoodName: string) {
  // Derive parent city from canonical URL: /service-areas/{city}/{neighborhood}
  const parts = canonical.replace("https://myfence.com/", "").split("/");
  const citySlug = parts[1] || "bonney-lake";
  const cityName = citySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://myfence.com/service-areas" },
    { "@type": "ListItem", position: 3, name: cityName, item: `https://myfence.com/service-areas/${citySlug}` },
    { "@type": "ListItem", position: 4, name: neighborhoodName, item: canonical },
  ];
}

interface NeighborhoodSchemaConfig {
  canonical: string;
  neighborhoodName: string;
  pageTitle: string;
  description: string;
  faqItems?: Array<{ question: string; answer: string }>;
}

export function buildNeighborhoodStructuredData({
  canonical,
  neighborhoodName,
  pageTitle,
  description,
  faqItems = [],
}: NeighborhoodSchemaConfig): Record<string, unknown>[] {
  const localBusinessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": canonical,
    name: `MyFence.com - ${neighborhoodName} Fence Installation`,
    description,
    url: "https://myfence.com",
    telephone: "+12534551885",
    address: {
      "@type": "PostalAddress",
      streetAddress: "22927 257th Ave SE",
      addressLocality: "Maple Valley",
      addressRegion: "WA",
      postalCode: "98038",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: neighborhoodName,
      containedInPlace: {
        "@type": "State",
        name: "Washington",
      },
    },
  };

  const serviceSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
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
    provider: {
      "@type": "Organization",
      name: "MyFence.com",
      url: "https://myfence.com",
      telephone: "+12534551885",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: canonical,
    },
  };

  const breadcrumbSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: buildBreadcrumbItems(canonical, neighborhoodName),
  };

  const schemas: Record<string, unknown>[] = [localBusinessSchema, serviceSchema, breadcrumbSchema];

  if (faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
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

  return schemas;
}
