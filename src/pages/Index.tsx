import { useState, useMemo } from "react";
import Seo from "@/components/Seo";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { ArticleSummary } from "@/components/ArticleSummary";
import { FaqSection } from "@/components/FaqSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { useTrustindexReviews } from "@/hooks/useTrustindexReviews";
import { generateFaqSchema } from "@/data/faqData";

import {
  HeroVideoSection,
  AboutUsSection,
  ValuePropsSection,
  PopularStylesSection,
  ReviewsSection,
  QuoteToolSection,
  TrellisSection,
  CTASection,
  InlineContactSection,
  ScrollingCarousel,
} from "@/components/home";

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { reviews, reviewsRef } = useTrustindexReviews();

  const breadcrumbLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_CONFIG.url,
        },
      ],
    }),
    [],
  );

  const orgLd = useMemo(
    () => ({
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
      review: reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author_name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating.toString(),
          bestRating: "5",
        },
        datePublished: review.review_date,
        reviewBody: review.review_text,
      })),
      areaServed: [
        { "@type": "City", name: "Seattle, WA" },
        { "@type": "City", name: "Bellevue, WA" },
        { "@type": "City", name: "Bonney Lake, WA" },
        { "@type": "City", name: "Covington, WA" },
        { "@type": "City", name: "Enumclaw, WA" },
        { "@type": "City", name: "Federal Way, WA" },
        { "@type": "City", name: "Gig Harbor, WA" },
        { "@type": "City", name: "Issaquah, WA" },
        { "@type": "City", name: "Kirkland, WA" },
        { "@type": "City", name: "Lake Tapps, WA" },
        { "@type": "City", name: "Maple Valley, WA" },
        { "@type": "City", name: "Mountlake Terrace, WA" },
        { "@type": "City", name: "Redmond, WA" },
        { "@type": "City", name: "Renton, WA" },
        { "@type": "City", name: "Sammamish, WA" },
        { "@type": "City", name: "Sumner, WA" },
      ],
      sameAs: [
        "https://www.facebook.com/myfence.com.official",
        "https://www.instagram.com/myfence.com.official/",
        "https://twitter.com/MyFenceDotCom",
        "https://www.youtube.com/@fencegenius",
        "https://www.linkedin.com/company/myfence-com/",
        "https://www.pinterest.com/MyFenceDotCom/",
        "https://www.tiktok.com/@myfence.com",
      ],
    }),
    [reviews],
  );

  const faqSchema = useMemo(() => generateFaqSchema(), []);

  return (
    <main>
      <Seo
        title="Cedar Fence Installation Seattle | MyFence.com"
        description="Father & son fence company in Seattle using Fence Genius technology. Wood styles: picture frame, 3-rail, horizontal lattice. Call (253) 455-1885."
        canonical={SITE_CONFIG.url + "/"}
        structuredData={[breadcrumbLd, orgLd, faqSchema]}
      />

      <HeroVideoSection />

      <AboutUsSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      <ValuePropsSection />

      {/* Contact Form */}
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

      {/* AI Company Summary */}
      <section className="container py-12 md:py-16">
        <ArticleSummary
          pageTitle="MyFence.com Company Overview"
          pageContent="Write a professional company summary for MyFence.com, a Seattle-area wood fence contractor that is family-owned and operated by a father-and-son team of engineers. Highlight how MyFence.com leverages exclusive technology developed by its sister company, Fence Genius, to revolutionize the outdated fence construction industry. The Fence Genius system includes software and manufacturing technology that enables off-site prefabrication of custom, slope-following fence panels and gates, ensuring unmatched precision, quality, and efficiency. Emphasize that MyFence.com is the only contractor in the market using this patented system. Despite using advanced technology and delivering higher-quality results, their pricing remains competitive with traditional installers. The company is committed to raising standards in fence building and is rapidly growing in Seattle, WA and the surrounding region."
          summaryTitle="About MyFence.com & Fence Genius"
          summaryDescription="Get an AI-powered overview of our company, technology, and what sets us apart in the Seattle fencing industry."
        />
      </section>

      <ScrollingCarousel />

      <PopularStylesSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      <ReviewsSection reviewsRef={reviewsRef} />

      <QuoteToolSection />

      <TrellisSection />

      <InlineContactSection />

      <CTASection />

      <FaqSection />

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
};

export default Index;
