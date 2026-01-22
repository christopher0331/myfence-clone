"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect, ReactNode, useMemo } from "react";

// Intersection observer wrapper that ONLY loads the component when visible
const DeferredSection = ({ 
  importFn, 
  placeholder, 
  rootMargin = "200px" 
}: { 
  importFn: () => Promise<any>, 
  placeholder: ReactNode, 
  rootMargin?: string 
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad, rootMargin]);

  // Use useMemo to ensure we don't recreate the dynamic component on every render
  const LazyComponent = useMemo(() => {
    if (!shouldLoad) return null;
    return dynamic(importFn, { ssr: false });
  }, [shouldLoad, importFn]);

  return (
    <div ref={ref} className="min-h-[100px]">
      {shouldLoad && LazyComponent ? <LazyComponent /> : placeholder}
    </div>
  );
};

export default function HomeDeferredSections() {
  return (
    <>
      <section className="container py-12 md:py-16">
        <DeferredSection
          importFn={() => import("@/components/ArticleSummary").then((m) => m.ArticleSummary)}
          placeholder={<div className="h-48 w-full animate-pulse rounded-lg bg-muted/20" />}
        />
      </section>

      <DeferredSection
        importFn={() => import("@/components/home/ScrollingCarousel").then((m) => m.ScrollingCarousel)}
        placeholder={<div className="container py-12 md:py-16 h-32 bg-muted/10 animate-pulse rounded-lg" />}
      />

      <DeferredSection
        importFn={() => import("@/components/home/PopularStylesSection").then((m) => m.PopularStylesSection)}
        placeholder={<div className="container py-12 md:py-16 h-64 bg-muted/10 animate-pulse rounded-lg" />}
      />

      <DeferredSection
        importFn={() => import("@/components/home/ReviewsSectionWithData")}
        placeholder={<div className="container py-12 md:py-16 h-32 bg-muted/10 animate-pulse rounded-lg" />}
      />

      <DeferredSection
        importFn={() => import("@/components/home/QuoteToolSection").then((m) => m.QuoteToolSection)}
        placeholder={<div className="container py-12 md:py-16 h-48 bg-muted/10 animate-pulse rounded-lg" />}
      />

      <DeferredSection
        importFn={() => import("@/components/home/TrellisSection").then((m) => m.TrellisSection)}
        placeholder={<div className="container py-12 md:py-16 h-32 bg-muted/10 animate-pulse rounded-lg" />}
      />

      <DeferredSection
        importFn={() => import("@/components/home/InlineContactSection").then((m) => m.InlineContactSection)}
        placeholder={<div className="container py-12 md:py-16 h-32 bg-muted/10 animate-pulse rounded-lg" />}
      />

      <DeferredSection
        importFn={() => import("@/components/home/CTASection").then((m) => m.CTASection)}
        placeholder={<div className="container py-12 md:py-16 h-24 bg-muted/10 animate-pulse rounded-lg" />}
      />

      <DeferredSection
        importFn={() => import("@/components/FaqSection").then((m) => m.FaqSection)}
        placeholder={<div className="container py-12 md:py-16 h-48 bg-muted/10 animate-pulse rounded-lg" />}
      />

      <DeferredSection
        importFn={() => import("@/components/BlogSection")}
        placeholder={<div className="container py-12 md:py-16 h-64 bg-muted/10 animate-pulse rounded-lg" />}
      />

      <DeferredSection
        importFn={() => import("@/components/ServiceAreasSection")}
        placeholder={<div className="container py-12 md:py-16 h-48 bg-muted/10 animate-pulse rounded-lg" />}
      />
    </>
  );
}
