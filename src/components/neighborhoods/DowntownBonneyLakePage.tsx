"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft, MapPin, Phone } from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface DowntownBonneyLakePageProps {
  canonical?: string;
}

const DowntownBonneyLakePage = ({
  canonical = "https://myfence.com/service-areas/downtown-bonney-lake",
}: DowntownBonneyLakePageProps) => {
  return (
    <>
      <Seo
        title="Downtown Bonney Lake Fence Installation | Bonney Lake Neighborhood Experts"
        description="Professional fence installation in Downtown Bonney Lake. Cedar, hogwire, and hybrid fence systems designed for compact lots, mixed-use surroundings, and long-term durability."
        canonical={canonical}
      />

      <main className="min-h-screen">
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/bonney-lake"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bonney Lake
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving Downtown Bonney Lake</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Downtown Bonney Lake Fence Installation</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence solutions designed for central Bonney Lake properties with tighter lot lines, higher traffic flow, and a mix of home and business-adjacent settings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <GoogleBusinessMap city="Downtown Bonney Lake" state="Washington" radiusMiles={2} zoom={14} showBusinessInfo={true} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Built for Downtown Bonney Lake Lots and Lifestyles</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Downtown Bonney Lake includes older homes, updated infill, and properties near busier corridors where privacy and access both matter. These projects usually demand tighter layout work, precise gate positioning, and cleaner offsets from driveways, sidewalks, and shared boundaries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We build cedar privacy, hogwire, and hybrid aluminum fences selected for long-term durability in Pacific Northwest weather and for curb appeal in mixed-use areas. Every plan is customized to your lot so your fence improves security and daily function without feeling overbuilt.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Downtown Homeowners Choose MyFence.com</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lot-Specific Layout Planning</h3>
                      <p className="text-muted-foreground">We map each fence run to your property lines, traffic flow, and access points for a clean fit that looks intentional from every angle.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Efficient, Predictable Installations</h3>
                      <p className="text-muted-foreground">Our pre-fabrication workflow helps reduce on-site disruption and keeps your project moving in active downtown neighborhoods.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Craftsmanship Warranty</h3>
                      <p className="text-muted-foreground">Every installation includes long-term workmanship coverage so you can invest with confidence.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Materials That Hold Up</h3>
                      <p className="text-muted-foreground">We focus on fence systems that perform through wet winters, seasonal temperature swings, and heavy day-to-day use.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Downtown Bonney Lake-Specific Considerations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Compact Lots and Shared Boundaries</h3>
                  <p className="text-muted-foreground leading-relaxed">Downtown properties often have tighter spacing and less room for installation error. We use precise measurements and clear boundary planning to avoid setbacks and create clean fence lines.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Street Exposure and Gate Use</h3>
                  <p className="text-muted-foreground leading-relaxed">Frequent entry points and visible frontage need durable gates, reliable hardware, and thoughtful placement. We design for daily convenience while maintaining security.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Mixed Residential-Commercial Edges</h3>
                  <p className="text-muted-foreground leading-relaxed">Where homes border busier areas, fence style and height choices have to balance privacy, appearance, and long-term maintenance. We help you choose materials that perform and still look polished.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <VirtualQuoteTool fenceStyleName="Downtown Bonney Lake fence" />

        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Downtown Bonney Lake Fencing</h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">See how our crew installs clean, durable fences in Bonney Lake neighborhoods with detailed layout prep and efficient on-site execution.</p>
                  <p className="text-muted-foreground leading-relaxed">From privacy-focused backyards to low-maintenance perimeter designs, we tailor each build to match your property and goals.</p>
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/gzAzQLdfqDA?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title="Downtown Bonney Lake Fencing"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Downtown Bonney Lake Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Site Walk and Project Goals</h3>
                  <p className="text-muted-foreground">We review layout constraints, access points, and privacy priorities to create a practical plan for your property.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design and Material Selection</h3>
                  <p className="text-muted-foreground">Choose cedar, hogwire, or hybrid systems with recommendations based on maintenance preference, visibility, and neighborhood fit.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Precision Layout and Fabrication</h3>
                  <p className="text-muted-foreground">Detailed measurements guide fabrication so installation is cleaner, faster, and more predictable on build day.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Professional Installation</h3>
                  <p className="text-muted-foreground">Our crew installs with careful alignment, strong post setting, and attention to finish details that elevate curb appeal.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Final Walkthrough and Warranty</h3>
                  <p className="text-muted-foreground">We review the completed project with you and finalize your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship coverage.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Downtown Bonney Lake Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">Book a free consultation with our Bonney Lake fencing team and get a clear plan for your project.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="px-8 py-4" variant="default">
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
                <Button asChild className="px-8 py-4" variant="secondary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DowntownBonneyLakePage;
