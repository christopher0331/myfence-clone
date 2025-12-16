"use client";

import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SoilHaulAwayPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Soil Haul-Away Service for Fence Installation",
    description:
      "Professional soil and excavation debris removal service for Seattle fence installations. Keep your property clean during fence post excavation.",
    provider: {
      "@type": "LocalBusiness",
      name: "MyFence.com",
      address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
      telephone: "+1-253-455-1885",
    },
    areaServed: { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
  } as const;

  return (
    <main>
      <Seo
        title="Soil Haul-Away Service | Fence Installation Cleanup | Seattle"
        description="Professional soil removal service for Seattle fence installations. Keep your property clean with our excavation debris haul-away service. Learn about costs and benefits."
        canonical="https://myfence.com/fence-upgrades/soil-haul-away"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Soil Haul-Away Service</h1>
          <p className="text-xl text-muted-foreground">Keep your property clean during fence installation with professional excavation debris removal</p>
        </div>
      </section>

      {/* Real Project Examples */}
      <section className="container py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold mb-6">Real Project Examples</h2>

          {/* Example 1: Soil Hauled Away */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Soil Hauled Away - River Rock Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <img
                    src="/lovable-uploads/soil-haul-away-river-rock.png"
                    alt="Soil haul-away service protecting river rock landscaping during fence installation"
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    This customer had a fresh river rock bed installed along their fence line before we began the fence project. Obviously, they didn't want excavated soil covering their new decorative rock, so we bucketed out all the excavation debris and disposed of it at the dump.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The result: a beautiful craftsman-style fence with pristine river rock landscaping underneath—exactly as the homeowner envisioned.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Example 2: Soil Left */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Soil Left - Standard Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <img
                    src="/lovable-uploads/fence-soil-debris-cropped.png"
                    alt="Excavated soil roughly raked along fence line allowing grass regrowth"
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    This project shows our standard approach where excavated soil is roughly raked along the fence line. The soil you see along the base of the fence is from the post hole excavation, distributed evenly to allow grass to naturally grow back over time.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This method is included in the base installation cost and works perfectly for properties without existing landscaping along the fence line.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What is Soil Haul-Away */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What is Soil Haul-Away?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                During the excavation process of digging for each fence post, we are going at minimum 2 feet in the ground, and generally about 10 inches wide. All of that dirt and rock comes up and has to go somewhere.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Many homeowners choose to have us roughly rake the excavated soil along the fence run so grass can grow back on top of it. This is our standard approach and is included in the base installation cost, as it saves both time and expense.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                However, if you have landscaped areas, gardens, or simply prefer not to have the added debris along your fence line, you may want to consider our soil haul-away service.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Keep Your Yard Clean?</h2>
          <p className="text-muted-foreground mb-6">Add soil haul-away to your fence project and protect your landscaping investment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/quote">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/fence-styles">View All Fence Styles</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SoilHaulAwayPage;
