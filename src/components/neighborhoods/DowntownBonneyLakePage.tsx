"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Shield,
  Clock,
  Award,
  ArrowLeft,
  MapPin,
  Phone,
  Hammer,
  Trees,
  Home,
  Ruler,
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

interface DowntownBonneyLakePageProps {
  canonical?: string;
}

const DowntownBonneyLakePage = ({
  canonical = "https://myfence.com/service-areas/bonney-lake/downtown-bonney-lake",
}: DowntownBonneyLakePageProps) => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical,
    neighborhoodName: "Downtown Bonney Lake",
    pageTitle: "Downtown Bonney Lake Fence Installation",
    description:
      "Professional fence installation in Downtown Bonney Lake. Cedar, hogwire, and hybrid fence systems designed for compact lots, mixed-use surroundings, and long-term durability.",
    faqItems: [
      {
        question: "How long does a typical downtown fence project take?",
        answer:
          "Most residential projects are completed quickly once installation begins, but the exact timeline depends on linear footage, gate count, and site complexity.",
      },
      {
        question: "Can you help with replacement on older lots?",
        answer:
          "Yes. We routinely replace aging fence lines in established neighborhoods and can recommend modern materials that improve durability and curb appeal.",
      },
      {
        question: "What fence style is best for privacy near busy streets?",
        answer:
          "Full-privacy cedar and select hybrid designs are usually the best fit. We review your specific visibility and access needs before finalizing recommendations.",
      },
    ],
  });

  return (
    <>
      <Seo
        title="Downtown Bonney Lake Fence Installation | Bonney Lake Neighborhood Experts"
        description="Professional fence installation in Downtown Bonney Lake. Cedar, hogwire, and hybrid fence systems designed for compact lots, mixed-use surroundings, and long-term durability."
        canonical={canonical}
        structuredData={structuredData}
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
                  Premium fence systems for central Bonney Lake properties with tighter lot lines,
                  higher traffic flow, and a mix of residential and business-adjacent surroundings.
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
            <div className="max-w-5xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Built for Downtown Bonney Lake Lots, Lifestyles, and Long-Term Value</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Downtown Bonney Lake includes long-established homes, updated infill lots, and
                properties close to more active commercial streets. Fence design in this area has
                to do more than mark a boundary. It needs to improve privacy, control visibility,
                support safer access points, and hold up to constant daily use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We install cedar privacy fences, decorative picture-frame systems, modern horizontal
                layouts, and cedar/aluminum hybrids that are engineered for Pacific Northwest
                weather and built to match how your property functions. Our approach is detailed and
                practical: clear layout planning, durable post systems, and clean finish work that
                helps your fence look intentional from every angle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re improving a backyard retreat, upgrading a side-yard corridor, or
                replacing an aging perimeter, our team builds with the same goals in mind:
                precision, longevity, and curb appeal that supports property value.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/40">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Downtown Bonney Lake Fence Company | MyFence.com</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Years of Fence Building Experience</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%+</div>
                  <p className="text-sm text-muted-foreground">On-Time Installation Rate</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <p className="text-sm text-muted-foreground">Five-Star Customer Reviews</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{WARRANTY_CONSTANTS.YEARS}-Year</div>
                  <p className="text-sm text-muted-foreground">Craftsmanship Warranty Coverage</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Downtown Homeowners Choose MyFence.com</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lot-Specific Layout Planning</h3>
                      <p className="text-muted-foreground">
                        We map each run to lot lines, easements, access points, grade changes, and
                        driveway transitions so the installation fits your property cleanly.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Efficient, Predictable Scheduling</h3>
                      <p className="text-muted-foreground">
                        Our pre-build process reduces jobsite surprises and helps keep timelines
                        reliable in busier neighborhood settings.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Durable Materials for Daily Use</h3>
                      <p className="text-muted-foreground">
                        We recommend fence systems and hardware that handle frequent gate cycles,
                        wet weather, and high-visibility frontage without constant upkeep.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Clean Finish Quality</h3>
                      <p className="text-muted-foreground">
                        Straight lines, balanced reveals, and consistent detailing give your fence a
                        polished appearance that supports home value.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Downtown Bonney Lake Planning Considerations</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Compact Lots and Shared Boundaries</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With tighter spacing between structures, layout precision is critical. We confirm
                    fence runs and transitions before installation so the final build is clean,
                    compliant, and coordinated with neighboring lines.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Street Exposure and Security Balance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Downtown frontage often calls for a blend of privacy and design. We help select
                    heights, top profiles, and gate locations that improve security while keeping
                    curb appeal strong.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Gate Traffic and Hardware Performance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Side-yard and driveway gates see repeated daily use. We specify hinges, latches,
                    and framing approaches built for long-term reliability and smoother operation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Mixed Residential-Commercial Edges</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Where homes border higher-activity corridors, fence style and material choices
                    have to balance appearance, durability, and maintenance. We prioritize systems
                    that stay attractive with less upkeep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Fence Styles Popular in Downtown Bonney Lake</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Full-Privacy Cedar Fences</h3>
                      <p className="text-muted-foreground">
                        A go-to choice for homes near higher-traffic streets or close neighboring
                        lots. Full-privacy cedar helps create a quieter, more enclosed backyard.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Trees className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Picture Frame and Decorative Cedar</h3>
                      <p className="text-muted-foreground">
                        Decorative profiles and trim details keep fencing functional while elevating
                        street-facing appearance in established neighborhood blocks.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Cedar + Aluminum Hybrid Systems</h3>
                      <p className="text-muted-foreground">
                        Hybrid systems pair wood warmth with metal stability and lower maintenance,
                        offering a modern look for updated homes and remodels.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Hammer className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Custom Gate Packages</h3>
                      <p className="text-muted-foreground">
                        From pedestrian access to driveway entries, we build reinforced gates and
                        set hardware for smoother, longer-lasting operation.
                      </p>
                    </div>
                  </div>
                </Card>
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
                  <p className="text-muted-foreground leading-relaxed">
                    See how our crew installs clean, durable fences in Bonney Lake neighborhoods with
                    detailed layout prep, efficient execution, and consistent quality checks.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From privacy-focused backyards to low-maintenance perimeter designs, we tailor
                    each build to your lot conditions, goals, and long-term maintenance preferences.
                  </p>
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
                  <h3 className="text-xl font-semibold mb-3">1. Site Walk + Project Priorities</h3>
                  <p className="text-muted-foreground">
                    We review boundaries, access, grade, and privacy targets so every decision starts
                    with real property constraints and daily use needs.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design Direction + Material Recommendations</h3>
                  <p className="text-muted-foreground">
                    Choose cedar, hogwire, or hybrid systems with guidance based on aesthetics,
                    neighborhood fit, budget, and maintenance expectations.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Precision Layout + Pre-Build Preparation</h3>
                  <p className="text-muted-foreground">
                    Detailed measurements and planning reduce on-site delays and make installation
                    cleaner and more predictable.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Professional Installation + Daily Quality Control</h3>
                  <p className="text-muted-foreground">
                    Our crew sets posts, installs framing, and aligns panels with careful attention
                    to strength, line consistency, and finished appearance.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Final Walkthrough + Warranty Documentation</h3>
                  <p className="text-muted-foreground">
                    We review the finished project together, answer final questions, and finalize
                    your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions: Downtown Bonney Lake Fencing</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">How long does a typical downtown fence project take?</h3>
                  <p className="text-muted-foreground">
                    Most residential projects are completed quickly once installation begins, but the
                    exact timeline depends on linear footage, gate count, and site complexity.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Can you help with replacement on older lots?</h3>
                  <p className="text-muted-foreground">
                    Yes. We routinely replace aging fence lines in established neighborhoods and can
                    recommend modern materials that improve durability and curb appeal.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">What fence style is best for privacy near busy streets?</h3>
                  <p className="text-muted-foreground">
                    Full-privacy cedar and select hybrid designs are usually the best fit. We review
                    your specific visibility and access needs before finalizing recommendations.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Downtown Bonney Lake Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Book a free consultation with our Bonney Lake fencing team and get a clear, practical
                plan tailored to your lot and goals.
              </p>
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
