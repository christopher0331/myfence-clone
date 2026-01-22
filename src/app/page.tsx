import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { generateFaqSchema } from "@/data/faqData";
import { HeroVideoSection } from "@/components/home/HeroVideoSection";
import { AboutUsSection } from "@/components/home/AboutUsSection";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/ContactForm";
import Script from "next/script";
import HomeDeferredSections from "@/components/home/HomeDeferredSections";
import ServiceAreaMapSection from "@/components/home/ServiceAreaMapSection";

export const metadata: Metadata = {
  title: "Seattle Fence Installation | Cedar, Hogwire & Hybrid Fences | MyFence.com",
  description: "Father & son fence company in Seattle using Fence Genius technology. Wood styles: picture frame, 3-rail, horizontal lattice. Call (253) 455-1885.",
  alternates: {
    canonical: SITE_CONFIG.url + "/",
  },
};

export default function HomePage() {
  const faqSchema = generateFaqSchema();
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_CONFIG.url,
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logoUrl,
    logo: {
      "@type": "ImageObject",
      url: SITE_CONFIG.logoUrl,
    },
    url: SITE_CONFIG.url,
    telephone: `+1-253-455-1885`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "22927 257th Ave SE",
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "150",
    },
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgLd, faqSchema]) }}
      />
      
      <HeroVideoSection />
      <AboutUsSection />
      <ValuePropsSection />

      {/* Contact Form Section - Stays near top so we hydrate it */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
              <p className="text-muted-foreground">Have questions? We're here to help with your fence project.</p>
            </div>
            <Card className="glass-card">
              <CardContent className="p-6 md:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Below the fold - Lazy Loaded Islands */}
      <HomeDeferredSections />
      <ServiceAreaMapSection />
    </>
  );
}
