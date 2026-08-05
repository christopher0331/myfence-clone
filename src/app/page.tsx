import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SITE_CONFIG, SCHEMA_ADDRESS } from "@/constants/siteConfig";
import { generateFaqSchema } from "@/data/faqData";
import { HeroVideoSection } from "@/components/home/HeroVideoSection";
import { AboutUsSection } from "@/components/home/AboutUsSection";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";
import { Card, CardContent } from "@/components/ui/card";
import HomeDeferredSections from "@/components/home/HomeDeferredSections";
import ServiceAreaMapSection from "@/components/home/ServiceAreaMapSection";

// Keep the homepage statically generated so HTML is cacheable (bfcache-friendly).
// Do NOT read headers()/cookies() here — that forces cache-control: no-store.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Seattle Fence Builder | Cedar, Hogwire & Hybrid | MyFence.com",
  description: "Father & son Seattle fence builder using Fence Genius. Custom cedar, hogwire & hybrid fences. Free quotes. Call (253) 455-1885.",
  alternates: {
    canonical: SITE_CONFIG.url + "/",
  },
};

const ContactForm = dynamic(
  () => import("@/components/forms/ContactForm").then((m) => m.ContactForm),
  {
    loading: () => (
      <div className="min-h-[28rem] rounded-md bg-muted/20 animate-pulse" aria-hidden="true" />
    ),
  }
);

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
    address: SCHEMA_ADDRESS,
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgLd, faqSchema]) }}
      />

      <HeroVideoSection />
      <AboutUsSection />
      <ValuePropsSection />

      <section id="contact-form" className="py-16 bg-muted/30">
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

      {/* Intersection-loaded below-the-fold sections keep Lighthouse main-thread work down */}
      <HomeDeferredSections />
      <ServiceAreaMapSection />
    </>
  );
}
