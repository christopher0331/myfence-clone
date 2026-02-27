"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft, MapPin, Phone, Mountain } from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

interface SomersetPageProps {
  canonical?: string;
  metaTitle?: string;
  metaDescription?: string;
}

const SomersetPage = ({
  canonical = "https://myfence.com/service-areas/bellevue/somerset",
  metaTitle = "Somerset Bellevue Fence Installation | Hillside Fencing Experts | MyFence.com",
  metaDescription = "Specialized fence installation for Somerset, Bellevue. Hillside slope experts with HOA-compliant cedar, hogwire & hybrid fencing. Panoramic view-friendly designs. Free quotes.",
}: SomersetPageProps) => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical,
    neighborhoodName: "Somerset, Bellevue",
    pageTitle: "Somerset Bellevue Fence Installation",
    description: metaDescription,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Somerset, Bellevue?",
        answer: "Most fences in Bellevue over 6 feet require a building permit. Somerset properties also fall under HOA architectural review. MyFence.com handles both the City of Bellevue permit process and HOA submission documentation for you.",
      },
      {
        question: "What fence styles work best on Somerset's steep hillside lots?",
        answer: "Our Fence Genius technology creates custom panels that follow Somerset's terrain precisely. Stepped and racked cedar privacy fences, hybrid aluminum/cedar systems, and hogwire fences all work well on slopes. We use reinforced post foundations with deeper footings on steep grades.",
      },
      {
        question: "How much does fence installation cost in Somerset, Bellevue?",
        answer: "Somerset fence costs typically range from $45-$85 per linear foot depending on style, materials, and slope complexity. Hillside installations require additional engineering. Contact us for a free on-site estimate tailored to your specific property.",
      },
    ],
  });

  return (
    <>
      <Seo
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        structuredData={structuredData}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/bellevue"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bellevue
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving Somerset, Bellevue WA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Somerset Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Hillside fence specialists for Somerset's panoramic properties. HOA-compliant cedar, hogwire, and hybrid fencing engineered for steep terrain and stunning Cascade views.
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
                <GoogleBusinessMap
                  city="Somerset, Bellevue"
                  state="Washington"
                  radiusMiles={5}
                  zoom={11}
                  showBusinessInfo={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing for Somerset's Hillside Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Somerset is one of Bellevue's most prestigious hillside communities, perched above I-90 with sweeping views of the Cascades, Lake Washington, and the Seattle skyline. The neighborhood's dramatic topography — with elevation changes of 200+ feet across many properties — creates unique fencing challenges that standard fence contractors aren't equipped to handle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed dozens of fences throughout Somerset's winding streets. We understand the specific engineering required for slope-following installations, the HOA design standards enforced by the Somerset Community Association, and the material choices that hold up to the neighborhood's wind exposure at elevation. Our Fence Genius technology is purpose-built for exactly this kind of precision terrain work.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Somerset Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Hillside Slope Specialists</h3>
                      <p className="text-muted-foreground">
                        Fence Genius precision measurement handles Somerset's steep grades. Custom panels follow your terrain exactly — no ugly gaps or awkward steps.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">HOA Compliance Experts</h3>
                      <p className="text-muted-foreground">
                        We prepare Somerset Community Association architectural submissions and handle all approval documentation. First-time approval on every project.
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
                        Comprehensive craftsmanship warranty covering materials, labor, and structural integrity — even on steep-slope installations.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">View-Preserving Designs</h3>
                      <p className="text-muted-foreground">
                        Smart fence designs that provide privacy where you need it while preserving Somerset's prized mountain and lake views.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Somerset-Specific Considerations */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Somerset-Specific Fencing Considerations</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Steep Terrain Engineering</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Somerset lots can have grade changes of 30-45 degrees on a single property line. Standard fence panels can't handle this — you end up with triangular gaps at the bottom or panels that don't follow the slope at all. Our Fence Genius system maps the exact terrain profile and manufactures panels that rack or step to match. We use deeper post holes (36-48 inches) with extra concrete on hillside installations, and our steel post-on-pipe upgrade is especially popular here for its ability to resist lateral pressure on slopes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wind Exposure at Elevation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Somerset's hilltop position means higher sustained wind speeds than lower Bellevue neighborhoods. Solid privacy fences act as wind sails if not properly engineered. We address this with reinforced post spacing (6-foot centers instead of standard 8-foot), our hybrid aluminum/cedar system for maximum strength-to-weight ratio, and strategic use of hogwire sections that allow airflow while maintaining property boundaries.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">I-90 Noise Buffering</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Properties along Somerset's southern edge face Interstate 90 traffic noise. While no residential fence eliminates highway sound, our solid cedar privacy fences with board-on-board construction provide measurable noise reduction. Combined with strategic placement and dense landscaping, we help Somerset homeowners reclaim the quiet enjoyment of their outdoor spaces.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">HOA Architectural Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Somerset Community Association maintains architectural review standards for all exterior modifications. We prepare comprehensive submission packages with elevation drawings, material specifications, and color samples. Our familiarity with Somerset's approved fence styles — including cedar privacy, hogwire, and the hybrid aluminum/cedar system — ensures your application moves through review efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Somerset</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The most popular choice for Somerset backyards. Board-on-board construction provides maximum privacy and noise reduction. Pre-stained options match the neighborhood's upscale aesthetic.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Ideal for Somerset properties wanting to preserve Cascade Mountain and lake views. The open wire design reduces wind load on hillside installations while defining property lines.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Our strongest system — aluminum panels in a cedar frame on steel posts. Perfect for Somerset's wind exposure and steep slopes. Zero staining or sealing required.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system &rarr;
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Quote */}
        <VirtualQuoteTool fenceStyleName="Somerset Bellevue fence" />

        {/* Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Somerset Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Hillside Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We survey your Somerset property's specific grade changes, soil conditions, wind exposure, and view corridors. Our Fence Genius system captures precise terrain data.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & HOA Submission</h3>
                  <p className="text-muted-foreground">
                    Select from cedar, hogwire, or hybrid options. We prepare the Somerset Community Association architectural review package including elevation drawings and material specs.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Slope-following panels are precision-built at our facility based on Fence Genius terrain mapping. No on-site cutting or waste.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Hillside Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew arrives with pre-fabricated panels and specialized hillside equipment. Deep post foundations, reinforced bracing, and precision panel fitting. Most Somerset projects complete in 1-3 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Detailed final inspection with you, covering every panel and post. Full {WARRANTY_CONSTANTS.YEARS}-year warranty activated on completion.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Somerset Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Bellevue's hillside fence specialists. We'll assess your slope, discuss HOA requirements, and recommend the best solution for your property.
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

export default SomersetPage;
