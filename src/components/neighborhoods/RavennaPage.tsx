"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Shield,
  Star,
  Award,
  ArrowLeft,
  MapPin,
  Phone,
  TreePine,
  Building2,
  Ruler,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";

const CANONICAL = "https://myfence.com/service-areas/seattle/ravenna";
const META_TITLE = "Ravenna Fence Installation | Seattle | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Ravenna, Seattle. Horizontal slat cedar, craftsman & privacy fencing for tree-lined lots near the U District. Free quotes. (253) 455-1885.";

const RavennaPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Ravenna, Seattle",
    pageTitle: "Ravenna Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Ravenna, Seattle?",
        answer:
          "Seattle residential fences over 6 feet typically require a permit. Corner lots and properties near alleys may have additional visibility rules. Ravenna lots with mature street trees sometimes need careful placement to avoid root zones. MyFence.com helps you plan a compliant layout before installation.",
      },
      {
        question: "What fence styles work best in Ravenna's tree-lined blocks?",
        answer:
          "Horizontal slat cedar fences are popular on updated Ravenna homes where homeowners want a contemporary look that still fits craftsman bungalows nearby. Cedar picture frame and craftsman privacy fences also work well where full screening is the priority along side yards shaded by canopy cover.",
      },
      {
        question: "How much does fence installation cost in Ravenna, Seattle?",
        answer:
          "Ravenna fence installation commonly ranges from $48–$72 per linear foot depending on style, access, and tree or root work. Horizontal slat cedar typically runs $52–$68 per foot, cedar privacy $48–$62 per foot, and hybrid aluminum/cedar $58–$72 per foot. Tight side yards and gate work can affect the final quote.",
      },
    ],
  });

  return (
    <>
      <Seo
        title={META_TITLE}
        description={META_DESCRIPTION}
        canonical={CANONICAL}
        structuredData={structuredData}
      />

      <main className="min-h-screen">
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/seattle"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Seattle
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Ravenna, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Ravenna Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fencing for Ravenna&apos;s tree-lined residential blocks near the University District — horizontal slat cedar, craftsman privacy, and hybrid systems built for tight lots, mature canopy, and Seattle&apos;s year-round moisture.
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
              <div className="w-full rounded-lg overflow-hidden shadow-lg min-h-[280px]">
                <GoogleBusinessMap
                  city="Ravenna, Seattle"
                  state="WA"
                  radiusMiles={4}
                  zoom={13}
                  showBusinessInfo={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 border-y bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Star className="h-5 w-5 text-primary fill-primary" />
                5.0 ★ Google Rating
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-5 w-5 text-primary" />
                {WARRANTY_CONSTANTS.YEARS}-Year Warranty
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                150+ Five-Star Reviews
              </span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing for Ravenna&apos;s Residential Blocks
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ravenna is a walkable Seattle neighborhood of craftsman bungalows, duplex conversions, and updated single-family homes tucked between the University District and Green Lake. Mature street trees, narrow side yards, and alley access are common — which makes thoughtful fence planning as important as the style you choose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com serves Ravenna from our Seattle-area coverage. We plan post placement around roots, measure tight side-yard runs with Fence Genius, and recommend materials that handle the constant moisture Ravenna fence lines see under tree canopy and Seattle drizzle.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Ravenna Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tree-Aware Installation</h3>
                      <p className="text-muted-foreground">
                        We plan post placement around mature roots and canopy on Ravenna&apos;s tree-lined blocks instead of forcing a straight line through sensitive areas.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Urban Lot Expertise</h3>
                      <p className="text-muted-foreground">
                        Tight side yards, alley gates, and shared driveways are routine in Ravenna — we design layouts that work for daily access without sacrificing privacy.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Precision Measurement</h3>
                      <p className="text-muted-foreground">
                        Fence Genius captures exact runs between house, garage, and alley lines so panels fit cleanly on Ravenna&apos;s irregular city lots.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                      <p className="text-muted-foreground">
                        Every Ravenna installation is backed by our craftsmanship warranty on materials and labor.
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What Ravenna Homeowners Can Expect
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We wanted a modern horizontal slat fence that still felt at home next to older craftsman houses on the block. The crew worked around a large maple root and the gate between the house and garage fits perfectly.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Ravenna</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our side yard is narrow and stays shaded most of the year. They recommended pre-stained cedar and explained how they keep posts out of the wettest soil. Finished in two days with zero mess left in the alley.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Tom in Ravenna</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Ravenna Seattle fence" />

        <ServiceAreaPhotoGallery city="Seattle" neighborhood="Ravenna" />

        <FeaturedProject city="Seattle" neighborhood="Ravenna" />

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ravenna-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Mature Trees & Root Zones</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ravenna&apos;s street trees and backyard canopy are part of the neighborhood&apos;s character. We adjust post spacing and use hand-digging near major roots where possible so the fence line and the trees can coexist.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Seattle Moisture Under Canopy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Shaded fence lines in Ravenna stay damp much of the year. Pre-stained cedar, quality fasteners, and Post-on-Pipe footings help fences last longer in those conditions than standard ground-set posts alone.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Alley Gates & Tight Side Yards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Ravenna homes rely on side-yard or alley access for garbage, bikes, and garage entry. We size gates and reinforce posts early so daily traffic does not loosen the fence over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in Ravenna
              </h2>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Horizontal slat cedar:</strong> $52–$68 per linear foot
                  </li>
                  <li>
                    <strong className="text-foreground">Cedar privacy / picture frame:</strong> $48–$62 per linear foot
                  </li>
                  <li>
                    <strong className="text-foreground">Hybrid aluminum/cedar:</strong> $58–$72 per linear foot
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Tree work, tight access, and gate details can affect pricing. Get an exact quote with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Ravenna property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Ravenna</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Horizontal Slat Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Contemporary slat layouts that complement Ravenna&apos;s mix of craftsman bungalows and updated remodels.
                  </p>
                  <Link href="/fence-styles/horizontal-fence" className="text-primary text-sm font-medium hover:underline">
                    View horizontal styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Craftsman Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Spindle top and solid board options for homeowners who want period-appropriate detail with full backyard screening.
                  </p>
                  <Link href="/fence-styles/craftsman-style-fence" className="text-primary text-sm font-medium hover:underline">
                    View craftsman styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Lower-maintenance panels for damp, shaded side yards that see less direct sun through Ravenna&apos;s tree canopy.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system &rarr;
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Ravenna Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Ravenna Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We review side-yard access, trees, gates, and alley lines before recommending a layout for your Ravenna property.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Material Selection</h3>
                  <p className="text-muted-foreground">
                    You choose the fence style and privacy level. We plan post placement around roots and Seattle permit considerations where needed.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Fence Genius Measurements</h3>
                  <p className="text-muted-foreground">
                    Digital measurements help us build panels to fit tight city lot dimensions before installation begins.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Ravenna Installation</h3>
                  <p className="text-muted-foreground">
                    Most residential Ravenna projects complete in 1–3 days depending on length, tree work, and gate details.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    We walk the finished fence with you and activate your MyFence.com warranty coverage.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Seattle Neighborhoods
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Seattle overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">University District area</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Fence Your Ravenna Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Free on-site estimates available in Ravenna. Tell us about your side-yard access, trees, and privacy goals and we&apos;ll recommend the right fence design.
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

export default RavennaPage;
