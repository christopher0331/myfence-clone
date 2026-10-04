"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import NeighborhoodBreadcrumb from "@/components/neighborhoods/NeighborhoodBreadcrumb";
import {
  buildNeighborhoodBreadcrumbTrail,
  buildNeighborhoodStructuredData,
} from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/bonney-lake/tehaleh";
const PAGE_TITLE = "Tehaleh Fence Installation";
const META_DESCRIPTION =
  "Fence installation in Tehaleh, a master-planned community in Bonney Lake, WA. Upper Tehaleh, Lower Tehaleh, and HOA-approved fencing guides. Free quotes.";

const CHILD_PAGES = [
  {
    name: "Upper Tehaleh",
    href: "/service-areas/bonney-lake/upper-tehaleh",
    description:
      "Plateau homesites in the upper part of Tehaleh. Fence planning for grade changes and wind, within the community design-review process.",
  },
  {
    name: "Lower Tehaleh",
    href: "/service-areas/bonney-lake/lower-tehaleh",
    description:
      "Family neighborhoods in the lower part of Tehaleh, including lots beside trails and open space. Phase guidelines still apply to style and placement.",
  },
  {
    name: "Tehaleh HOA-approved fencing",
    href: "/service-areas/bonney-lake/tehaleh/hoa-approved-fencing",
    description:
      "Design Review steps and a submission checklist for Tehaleh Owner's Association, including the Design Manual stain: Sherwin-Williams Cedar Bark (SW 3511) or clear.",
  },
] as const;

const TehalehCommunityPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Tehaleh",
    pageTitle: PAGE_TITLE,
    description: META_DESCRIPTION,
  });
  const breadcrumb = buildNeighborhoodBreadcrumbTrail({
    canonical: CANONICAL,
    neighborhoodName: "Tehaleh",
  });

  return (
    <>
      <Seo
        title="Tehaleh Fence Installation | Bonney Lake | MyFence.com"
        description={META_DESCRIPTION}
        canonical={CANONICAL}
        structuredData={structuredData}
      />

      <main className="min-h-screen overflow-x-clip">
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <NeighborhoodBreadcrumb items={breadcrumb} />
            <Link
              href="/service-areas/bonney-lake"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bonney Lake
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <span className="text-lg text-muted-foreground">
                  Serving Tehaleh, Bonney Lake WA
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{PAGE_TITLE}</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                Fencing for Tehaleh, the master-planned community in Bonney Lake, Pierce County.
                Upper and Lower neighborhoods share a design-review process, with details that can
                differ by phase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:12534551885">
                  <Button size="lg" variant="hero" className="w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (253) 455-1885
                  </Button>
                </a>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Fencing in Tehaleh</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Tehaleh is a master-planned community in Bonney Lake, Washington. The{" "}
                <a
                  href="https://tehaleh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  community site
                </a>{" "}
                describes neighborhoods, parks, and trails across the development. Fence projects
                here usually start with Tehaleh Owner&apos;s Association design review: style,
                height, color, and where the fence sits on the lot.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com builds cedar privacy, hogwire, and hybrid aluminum/cedar fences for
                Tehaleh lots and can prepare the drawing package before installation. The Tehaleh
                Design Manual lists Sherwin-Williams Cedar Bark (SW 3511) or clear for standard
                fences. Use the pages below for the upper plateau, the lower neighborhoods, or the
                HOA submission guide. Panels are planned with Fence Genius so the install matches
                the approved layout.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Tehaleh fencing pages</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {CHILD_PAGES.map((page) => (
                  <Link key={page.href} href={page.href} className="block h-full min-w-0">
                    <Card className="p-5 h-full bg-gradient-to-br from-background to-primary/5 border-2 hover:shadow-xl hover:border-primary transition-all duration-300">
                      <h3 className="font-semibold text-primary text-lg mb-2">{page.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{page.description}</p>
                      <div className="mt-3 text-primary font-semibold text-sm flex items-center gap-1">
                        Learn More <span className="text-lg">→</span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
};

export default TehalehCommunityPage;
