"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import Seo from "@/components/Seo";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/constants/siteConfig";
import dynamicImport from "next/dynamic";
import { ContactForm } from "@/components/forms/ContactForm";
import { generateFaqSchema } from "@/data/faqData";
import { HeroVideoSection } from "@/components/home/HeroVideoSection";
import { AboutUsSection } from "@/components/home/AboutUsSection";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";

// Lazy-load Google Maps to keep it off the initial critical path
const GoogleBusinessMap = dynamic(() => import("@/components/GoogleBusinessMap"), {
  ssr: false,
  loading: () => null,
});

const LazyScrollingCarousel = dynamic(
  () => import("@/components/home/ScrollingCarousel").then((m) => m.ScrollingCarousel),
  { ssr: false, loading: () => null },
);

const LazyPopularStylesSection = dynamic(
  () => import("@/components/home/PopularStylesSection").then((m) => m.PopularStylesSection),
  { ssr: false, loading: () => null },
);

const LazyReviewsSection = dynamic(
  () => import("@/components/home/ReviewsSectionWithData"),
  { ssr: false, loading: () => null },
);

const LazyQuoteToolSection = dynamic(
  () => import("@/components/home/QuoteToolSection").then((m) => m.QuoteToolSection),
  { ssr: false, loading: () => null },
);

const LazyTrellisSection = dynamic(
  () => import("@/components/home/TrellisSection").then((m) => m.TrellisSection),
  { ssr: false, loading: () => null },
);

const LazyInlineContactSection = dynamic(
  () => import("@/components/home/InlineContactSection").then((m) => m.InlineContactSection),
  { ssr: false, loading: () => null },
);

const LazyCTASection = dynamic(
  () => import("@/components/home/CTASection").then((m) => m.CTASection),
  { ssr: false, loading: () => null },
);

const LazyFaqSection = dynamic(
  () => import("@/components/FaqSection").then((m) => m.FaqSection),
  { ssr: false, loading: () => null },
);

const LazyBlogSection = dynamic(
  () => import("@/components/BlogSection"),
  { ssr: false, loading: () => null },
);

const LazyServiceAreasSection = dynamic(
  () => import("@/components/ServiceAreasSection"),
  { ssr: false, loading: () => null },
);

const LazyArticleSummary = dynamicImport(
  () => import("@/components/ArticleSummary").then((m) => m.ArticleSummary),
  { ssr: true, loading: () => null },
);

type DeferredSectionProps = {
  children: ReactNode;
  placeholder?: React.ReactNode;
  rootMargin?: string;
};

const DeferredSection = ({ children, placeholder, rootMargin = "200px" }: DeferredSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return <div ref={ref}>{isVisible ? children : placeholder}</div>;
};

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const summaryRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

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
    [],
  );

  const faqSchema = useMemo(() => generateFaqSchema(), []);

  // Intersection gating for ArticleSummary
  useEffect(() => {
    const el = summaryRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSummary(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Intersection gating for GoogleBusinessMap
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
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
      <section className="container py-12 md:py-16" ref={summaryRef}>
        {showSummary ? (
          <LazyArticleSummary
            pageTitle="MyFence.com Company Overview"
            pageContent="Write a professional company summary for MyFence.com, a Seattle-area wood fence contractor that is family-owned and operated by a father-and-son team of engineers. Highlight how MyFence.com leverages exclusive technology developed by its sister company, Fence Genius, to revolutionize the outdated fence construction industry. The Fence Genius system includes software and manufacturing technology that enables off-site prefabrication of custom, slope-following fence panels and gates, ensuring unmatched precision, quality, and efficiency. Emphasize that MyFence.com is the only contractor in the market using this patented system. Despite using advanced technology and delivering higher-quality results, their pricing remains competitive with traditional installers. The company is committed to raising standards in fence building and is rapidly growing in Seattle, WA and the surrounding region."
            summaryTitle="About MyFence.com & Fence Genius"
            summaryDescription="Get an AI-powered overview of our company, technology, and what sets us apart in the Seattle fencing industry."
          />
        ) : (
          <div className="h-48 w-full animate-pulse rounded-lg bg-muted/40" />
        )}
      </section>

      <DeferredSection
        placeholder={<div className="container py-12 md:py-16 h-32 bg-muted/20 rounded-lg" />}
      >
        <LazyScrollingCarousel />
      </DeferredSection>

      <DeferredSection
        placeholder={<div className="container py-12 md:py-16 h-64 bg-muted/20 rounded-lg" />}
      >
        <LazyPopularStylesSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      </DeferredSection>

      <DeferredSection
        placeholder={<div className="container py-12 md:py-16 h-32 bg-muted/20 rounded-lg" />}
      >
        <LazyReviewsSection />
      </DeferredSection>

      <DeferredSection
        placeholder={<div className="container py-12 md:py-16 h-48 bg-muted/20 rounded-lg" />}
      >
        <LazyQuoteToolSection />
      </DeferredSection>

      <DeferredSection
        placeholder={<div className="container py-12 md:py-16 h-32 bg-muted/20 rounded-lg" />}
      >
        <LazyTrellisSection />
      </DeferredSection>

      <DeferredSection
        placeholder={<div className="container py-12 md:py-16 h-32 bg-muted/20 rounded-lg" />}
      >
        <LazyInlineContactSection />
      </DeferredSection>

      <DeferredSection
        placeholder={<div className="container py-12 md:py-16 h-24 bg-muted/20 rounded-lg" />}
      >
        <LazyCTASection />
      </DeferredSection>

      <DeferredSection
        placeholder={<div className="container py-12 md:py-16 h-48 bg-muted/20 rounded-lg" />}
      >
        <LazyFaqSection />
      </DeferredSection>

      <DeferredSection
        placeholder={<div className="container py-12 md:py-16 h-64 bg-muted/20 rounded-lg" />}
      >
        <LazyBlogSection limit={4} />
      </DeferredSection>

      <DeferredSection
        placeholder={<div className="container py-12 md:py-16 h-48 bg-muted/20 rounded-lg" />}
      >
        <LazyServiceAreasSection />
      </DeferredSection>

      <section className="container py-12 md:py-16" ref={mapRef}>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Service Area</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Proudly serving the greater Seattle area within a 28-mile radius
        </p>
        {showMap ? (
          <GoogleBusinessMap city="Maple Valley" state="WA" radiusMiles={28} showBusinessInfo={false} />
        ) : (
          <div className="h-[360px] w-full rounded-lg bg-muted/40 animate-pulse" />
        )}
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default Index;
