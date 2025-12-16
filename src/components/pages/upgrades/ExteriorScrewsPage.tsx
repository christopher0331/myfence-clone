"use client";

import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const ExteriorScrewsPage = () => {
  return (
    <main>
      <Seo
        title="4 Inch Exterior Screws for Fence Installation | Seattle WA"
        description="Upgrade your Seattle fence with 4-inch exterior screws instead of nails. Superior hold, longer lasting performance, and no nail pop-out. Perfect for PNW weather."
        canonical="https://myfence.com/fence-upgrades/exterior-screws"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "4 Inch Exterior Screw Fence Installation",
          description:
            "Premium fence installation using 4-inch exterior screws with pre-drilling for maximum durability and longevity in Seattle's Pacific Northwest climate.",
          provider: {
            "@type": "LocalBusiness",
            name: "MyFence.com",
            address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
            telephone: "+1-253-455-1885",
          },
          areaServed: { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Upgrade to 4" Exterior Screws for Superior Fence Durability</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Experience the difference of professional-grade fastening that outlasts traditional nailing methods in Seattle's demanding Pacific Northwest climate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Why Choose Screws Over Nails?</h2>
            <p className="text-muted-foreground mb-6">
              Traditional nailing methods have been the standard for decades, but they come with significant drawbacks. Our 4-inch exterior screws provide a superior
              alternative that addresses the common failures we see in nail-fastened fences throughout the Seattle area.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Superior Holding Power</h3>
                  <p className="text-sm text-muted-foreground">Screws create a mechanical bond that resists pull-out forces far better than nails, keeping your fence panels securely attached for years.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">No Nail Pop-Out</h3>
                  <p className="text-sm text-muted-foreground">Unlike nails that work their way out over time, screws maintain their position and won't back out, eliminating the need for ongoing maintenance.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Prevents Rail Failure</h3>
                  <p className="text-sm text-muted-foreground">Nails tend to bend and loosen, causing fence panels to give and fail. Screws provide rigid, lasting connections that maintain fence integrity.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Perfect for PNW Climate</h3>
                  <p className="text-sm text-muted-foreground">Seattle's wet winters and dry summers cause wood movement. Screws accommodate this better than nails, reducing stress and failure points.</p>
                </div>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Our Professional Installation Process</h3>
                <p className="text-sm text-muted-foreground">
                  We don't just swap nails for screws—we take the time to do it right. Every 2x4 rail is carefully pre-drilled before installing 4-inch exterior-grade
                  screws, ensuring optimal performance and preventing wood splitting.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <img
              src="/lovable-uploads/81402d1b-e77f-4e51-88db-e0cd71e3a274.png"
              alt="4-inch exterior screws being installed in fence rails with pre-drilling"
              className="w-full rounded-lg shadow-lg mb-6"
              loading="lazy"
            />

            <h2 className="text-3xl font-semibold mb-4">The Problem with Traditional Nails</h2>
            <p className="text-muted-foreground mb-4">
              In our decades of experience working on fences throughout the Seattle area, we've seen the same problems repeatedly with nail-fastened fences:
            </p>

            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-2"><span className="text-destructive font-bold">•</span><span>Nails bend during installation or over time, reducing holding power</span></li>
              <li className="flex gap-2"><span className="text-destructive font-bold">•</span><span>Wood movement causes nails to work loose and back out</span></li>
              <li className="flex gap-2"><span className="text-destructive font-bold">•</span><span>Fence panels begin to sag and separate from posts</span></li>
              <li className="flex gap-2"><span className="text-destructive font-bold">•</span><span>Constant maintenance required to re-nail loose boards</span></li>
              <li className="flex gap-2"><span className="text-destructive font-bold">•</span><span>Eventual fence failure requiring costly repairs</span></li>
            </ul>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Investment in Quality</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  While screws represent a modest upgrade cost, the long-term value is substantial. You'll save on maintenance, avoid premature repairs, and enjoy a fence that
                  maintains its structural integrity and appearance for decades.
                </p>
                <Button asChild className="w-full">
                  <Link href="/quote">Get a Quote for Screw-Fastened Fence</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="bg-muted/50 py-12">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Installation Standards</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Pre-Drilling Every Hole</h3>
                <p className="text-sm text-muted-foreground">We pre-drill pilot holes in all 2x4 rails to prevent splitting and ensure screws drive straight and true. This extra step takes time but guarantees professional results.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">4-Inch Exterior Grade Screws</h3>
                <p className="text-sm text-muted-foreground">We use premium exterior-grade screws with corrosion-resistant coatings designed specifically for outdoor wood construction and Seattle's climate.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Quality Control</h3>
                <p className="text-sm text-muted-foreground">Every screw is driven to the proper depth—flush with the wood surface without over-driving. This ensures maximum holding power and a clean finish.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Build a Fence That Lasts?</h2>
          <p className="text-muted-foreground mb-6">Add the 4-inch exterior screw upgrade to your fence project and enjoy peace of mind knowing your fence is built to the highest standards. Perfect for Seattle homeowners who value quality and longevity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link href="/quote">Request a Quote</Link></Button>
            <Button asChild variant="outline" size="lg"><Link href="/fence-styles">View All Fence Styles</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExteriorScrewsPage;
