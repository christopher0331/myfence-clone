"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft, MapPin, Phone } from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";

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
                  Fence solutions for central Bonney Lake properties, including tighter lot lines, mixed residential-commercial edges, and high day-to-day use.
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
              <h2 className="text-3xl md:text-4xl font-bold">Built for Downtown Bonney Lake Properties</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Downtown Bonney Lake combines older homes, updated infill lots, and properties near busier streets. These layouts call for careful fence planning: accurate property-line offsets, clean gate placement for daily traffic, and materials that maintain curb appeal while handling weather year after year.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We install cedar privacy, hogwire, and hybrid aluminum fence systems designed for low maintenance and dependable performance. Whether you're enclosing a backyard for pets, buffering street visibility, or upgrading an aging fence, we tailor each project to your lot and neighborhood context.
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
                      <p className="text-muted-foreground">We map fence runs to your exact lot boundaries and access patterns so the final build looks intentional and functions smoothly.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Efficient Install Process</h3>
                      <p className="text-muted-foreground">Pre-fabricated panel workflows help us reduce on-site disruption and keep projects moving in active central neighborhoods.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Craftsmanship Warranty</h3>
                      <p className="text-muted-foreground">Every installation includes long-term workmanship coverage for confidence well beyond project completion.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Material Options That Last</h3>
                      <p className="text-muted-foreground">We focus on fence systems that hold up in Bonney Lake's wet winters and seasonal temperature shifts without frequent repairs.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <VirtualQuoteTool fenceStyleName="Downtown Bonney Lake fence" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Downtown Bonney Lake Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Site Assessment and Goals</h3>
                  <p className="text-muted-foreground">We review lot layout, privacy priorities, and traffic flow to define a clear project plan.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design and Material Selection</h3>
                  <p className="text-muted-foreground">Select cedar, hogwire, or hybrid systems with guidance for durability, maintenance, and neighborhood fit.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Precision Layout and Fabrication</h3>
                  <p className="text-muted-foreground">Detailed measurements inform fabrication so installation is cleaner and more predictable on build day.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Professional Installation</h3>
                  <p className="text-muted-foreground">Our crew installs with attention to alignment, structural integrity, and finished appearance.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Final Walkthrough and Warranty</h3>
                  <p className="text-muted-foreground">We verify project details with you and finalize your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship coverage.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Downtown Bonney Lake Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">Book a free consultation with our Bonney Lake fencing team and get a tailored plan for your lot.</p>
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
