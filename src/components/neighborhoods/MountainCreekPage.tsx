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

interface MountainCreekPageProps {
  canonical?: string;
}

const MountainCreekPage = ({
  canonical = "https://myfence.com/service-areas/mountain-creek",
}: MountainCreekPageProps) => {
  return (
    <>
      <Seo
        title="Mountain Creek Fence Installation | Bonney Lake Neighborhood Experts"
        description="Professional fence installation in Mountain Creek, Bonney Lake. HOA-aligned cedar, hogwire, and hybrid fencing built for hillside lots and family backyards."
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
                  <span className="text-lg text-muted-foreground">Serving Mountain Creek</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Mountain Creek Fence Installation</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence solutions designed for Mountain Creek's mixed elevations, HOA expectations, and active household needs.
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
                <GoogleBusinessMap city="Mountain Creek" state="Washington" radiusMiles={2} zoom={14} showBusinessInfo={true} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Built for Mountain Creek Lots and Lifestyles</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Mountain Creek offers a blend of established homes, newer phases, and lots with subtle-to-steep grade shifts. That variety makes one-size-fits-all fence plans a poor fit. We take detailed measurements, map each transition point, and design panel layouts that look clean from the street and secure from the backyard.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Homeowners here usually want a fence that can handle rain-heavy winters, occasional wind exposure, and daily family use without high maintenance. Our cedar privacy, hogwire, and hybrid aluminum systems are selected specifically for those conditions, with finishes and details that align with neighborhood character.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Mountain Creek Homeowners Choose MyFence.com</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Neighborhood-Focused Planning</h3>
                      <p className="text-muted-foreground">We design every project around your exact lot layout, drainage flow, and sightline goals instead of forcing a standard template.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Efficient, Predictable Installations</h3>
                      <p className="text-muted-foreground">Our Fence Genius workflow allows custom panels to be prepared before install day, helping crews finish quickly with minimal disruption.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Long-Term Confidence</h3>
                      <p className="text-muted-foreground">Every installation is backed by a {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty for peace of mind after the project is complete.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Material Guidance That Makes Sense</h3>
                      <p className="text-muted-foreground">We help you choose a fence style that balances privacy, appearance, and upkeep based on how your yard is actually used.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold">Mountain Creek-Specific Considerations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Elevation Changes and Drainage Paths</h3>
                  <p className="text-muted-foreground leading-relaxed">Many Mountain Creek yards include transitions between flat usable space and sloped edges. We engineer post spacing and panel alignment to follow terrain cleanly while preserving drainage movement during wet months.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">HOA and Neighborhood Consistency</h3>
                  <p className="text-muted-foreground leading-relaxed">If your section has design rules, we help align fence height, style, and finish before work begins. That preparation reduces approval delays and keeps your project moving.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Family and Pet-Friendly Layouts</h3>
                  <p className="text-muted-foreground leading-relaxed">Whether you need full privacy near patios or view-friendly fencing along open edges, we configure gates and panel heights to support everyday use by kids, pets, and guests.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <VirtualQuoteTool fenceStyleName="Mountain Creek fence" />

        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Mountain Creek Fencing</h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">See how our crew installs clean, durable fences in Bonney Lake neighborhoods like Mountain Creek with detailed layout prep and efficient on-site execution.</p>
                  <p className="text-muted-foreground leading-relaxed">From privacy-focused backyards to more open perimeter designs, we tailor each build to match the property and goals of the homeowner.</p>
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/gzAzQLdfqDA?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title="Mountain Creek Fencing"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mountain Creek Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Site Walk and Project Goals</h3>
                  <p className="text-muted-foreground">We evaluate grade changes, access points, and your privacy priorities to create a practical plan from day one.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design and Material Selection</h3>
                  <p className="text-muted-foreground">Choose cedar, hogwire, or hybrid systems with recommendations based on maintenance preference and neighborhood fit.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Precision Layout and Fabrication</h3>
                  <p className="text-muted-foreground">We use detailed measurements to fabricate panels in advance so installation is faster and cleaner on your property.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Professional Installation</h3>
                  <p className="text-muted-foreground">Our crew completes the build with careful alignment, secure post setting, and attention to curb appeal.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Final Walkthrough and Warranty</h3>
                  <p className="text-muted-foreground">We review the finished fence together and activate your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Mountain Creek Property?</h2>
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

export default MountainCreekPage;
