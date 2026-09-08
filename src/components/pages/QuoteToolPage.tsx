"use client";

import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import SeattleFenceQuoteEmbed from "@/components/SeattleFenceQuoteEmbed";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const QuoteToolPage = () => {
  const isMobile = useIsMobile();

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://myfence.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Get a Quote",
        item: "https://myfence.com/quote",
      },
    ],
  };

  return (
    <main>
      <Seo
        title="Free Seattle Fence Installation Quote | Instant Estimate"
        description="Get an instant fence installation quote for Seattle properties. Real-time pricing for cedar, hogwire, and hybrid fences. Powered by Fence Genius. Call (253) 455-1885."
        canonical="https://myfence.com/quote"
        structuredData={[
          breadcrumbData,
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Seattle Fence Quote Tool",
            description: "Instant online fence quote calculator for Seattle properties",
            url: "https://myfence.com/quote",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://myfence.com/quote",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "150",
            },
            provider: {
              "@type": "LocalBusiness",
              name: "MyFence.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "22927 257th Ave SE",
                addressLocality: "Seattle",
                addressRegion: "WA",
                postalCode: "98101",
                addressCountry: "US",
              },
              telephone: "+1-253-455-1885",
            },
          },
        ]}
      />
      <section className="relative py-10 md:py-14">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed"
          style={{ backgroundImage: "url('/lovable-uploads/28e8e878-729d-417b-ad3f-53643cf19710.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/60" aria-hidden="true" />
        <div className="container relative z-10">
          <h1 className="text-4xl font-bold tracking-tight mb-3 text-background">Free Seattle Fence Installation Quote</h1>
          <p className="max-w-2xl text-background/90">
            Get real-time pricing for fence installation in minutes. After your quote, we&apos;ll use
            {" "}
            <Link href="/fence-genius" className="underline hover:no-underline text-background">
              Fence Genius technology
            </Link>
            {" "}
            to ensure perfect installation.
          </p>

          {isMobile && (
            <div className="mt-8 space-y-6">
              <Button size="lg" className="w-full" asChild>
                <a
                  href="https://seattlefencequote.com/?source=myfence&embed=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Click here to build your own estimate
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Or request a quote below</h2>
                  <InlineQuoteForm context="Quote Tool - Mobile" />
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {!isMobile && (
        <section className="bg-background w-full">
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <SeattleFenceQuoteEmbed />
          </div>
          <p className="text-xs text-muted-foreground pb-8 text-center px-4">
            If the tool doesn&apos;t load, open it in a new tab:{" "}
            <a
              href="https://seattlefencequote.com/?source=myfence"
              className="underline text-primary hover:text-primary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              seattlefencequote.com
            </a>
          </p>
        </section>
      )}
    </main>
  );
};

export default QuoteToolPage;
