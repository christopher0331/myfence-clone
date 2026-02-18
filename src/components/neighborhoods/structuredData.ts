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
      "@type": "LocalBusiness",
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
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://myfence.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://myfence.com/service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bonney Lake",
        item: "https://myfence.com/service-areas/bonney-lake",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: neighborhoodName,
        item: canonical,
      },
    ],
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
