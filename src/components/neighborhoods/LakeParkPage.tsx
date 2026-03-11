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
  Waves,
  TreePine,
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/maple-valley/lake-park";
const META_TITLE = "Lake Park Fence Installation | Maple Valley | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Lake Park, Maple Valley. Lake-adjacent cedar, hogwire & hybrid fencing. Moisture-resistant materials. Free quotes. (253) 455-1885.";

const LakeParkPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Lake Park, Maple Valley",
    pageTitle: "Lake Park Maple Valley Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a special permit to build a fence near Lake Wilderness in Lake Park?",
        answer:
          "Properties near Lake Wilderness may fall within shoreline management zones that have additional setback and height restrictions beyond standard King County fence permits. MyFence.com researches your specific parcel's shoreline designation, handles the King County permit application, and ensures your fence meets all required setbacks and environmental buffers.",
      },
      {
        question: "What fence materials hold up best in Lake Park's lake-adjacent environment?",
        answer:
          "Lake-adjacent properties deal with higher moisture, occasional standing water, and accelerated material wear. We recommend Western red cedar for its natural rot resistance, stainless steel or hot-dipped galvanized fasteners to prevent rust, and our hybrid aluminum/cedar system for zero-maintenance durability. All posts are set in concrete with gravel drainage beds to handle wet soil conditions.",
      },
      {
        question: "How much does fence installation cost in Lake Park, Maple Valley?",
        answer:
          "Lake Park fence costs typically range from $42–$62 per linear foot for cedar privacy, $36–$54 for hogwire, and $52–$72 for hybrid aluminum/cedar. Lake-adjacent installations may require additional drainage prep or deeper post footings. Contact us for a free on-site estimate tailored to your Lake Park property.",
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
        {/* 1. Hero */}
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/maple-valley"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Maple Valley
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Lake Park, Maple Valley WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Lake Park Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Lake-adjacent fence specialists for Lake Park, Maple Valley. Moisture-resistant cedar, hogwire, and hybrid fencing built to handle wet conditions near Lake Wilderness.
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
                  city="Lake Park, Maple Valley"
                  state="Washington"
                  radiusMiles={5}
                  zoom={11}
                  showBusinessInfo={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trust Badges Bar */}
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

        {/* 3. Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing for Lake Park's Waterside Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Lake Park is a small residential area in Maple Valley situated near Lake Wilderness and the surrounding park amenities. Properties here enjoy close proximity to the lake, trails, and recreational access — but that proximity also creates unique fencing challenges. Higher moisture levels, lake-adjacent drainage patterns, seasonal wildlife, and the need to preserve outdoor recreation access all factor into fence design and material selection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built fences for lake-adjacent properties throughout the Maple Valley area. We understand the soil conditions near standing water, the permitting implications of shoreline zones, and the material choices that resist moisture damage year after year. From Western red cedar's natural rot resistance to our hybrid aluminum/cedar system's zero-maintenance durability, we match the right fence to Lake Park's specific environment.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Lake Park Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lake-Adjacent Expertise</h3>
                      <p className="text-muted-foreground">
                        We build fences that handle Lake Park's high-moisture environment — proper drainage at post bases, rot-resistant materials, and designs that account for seasonal water table changes.
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
                        Full craftsmanship warranty on materials and labor. We stand behind every Lake Park fence we build — even in the demanding conditions near the lake.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Permit & Shoreline Navigation</h3>
                      <p className="text-muted-foreground">
                        We research your parcel's specific shoreline designation, handle King County permits, and ensure your fence meets all required setbacks and environmental buffers.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Nature-Integrated Designs</h3>
                      <p className="text-muted-foreground">
                        Fences that complement Lake Park's natural setting. Hogwire preserves lake views, cedar blends with the wooded surroundings, and wildlife-conscious designs keep critters out without harming them.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Local Reviews */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What Lake Park Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Living near the lake, we were worried about moisture damage to a wood fence. They used heavy-duty cedar with special drainage at every post and galvanized hardware throughout. Two years in and it still looks brand new. Really know what they're doing."
                  </p>
                  <p className="text-sm font-medium">— Dan in Lake Park</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We needed a fence that would keep the dog in without blocking our view toward the lake. They did a hogwire with cedar frame that's exactly what we wanted — open sightlines but secure. They also handled the county permit. Easy process."
                  </p>
                  <p className="text-sm font-medium">— Rachel in Lake Park</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Project Gallery */}
        <ServiceAreaPhotoGallery city="Maple Valley" neighborhood="Lake Park" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Maple Valley" neighborhood="Lake Park" />

        {/* 8. Lake Park-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Lake Park-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Shoreline Permits & Setbacks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Properties near Lake Wilderness may fall within King County's shoreline management zones, which impose additional fence height restrictions, setback requirements, and sometimes environmental review. The specific rules depend on your parcel's distance from the ordinary high water mark. We research your lot's designation before any design work begins, ensuring your fence is positioned correctly and permitted properly. No surprises, no delays, no code violations after the fact.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Moisture & Drainage Challenges</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lake Park's proximity to Lake Wilderness means higher soil moisture levels, a shallow water table in some areas, and clay-heavy ground that retains water around post bases. Standard post installation in these conditions leads to premature rot and structural failure within a few years. We address this with gravel drainage beds beneath every post, elevated post bases where ground saturation is an issue, and Western red cedar's natural resistance to moisture. For the most demanding spots, our hybrid aluminum/cedar system eliminates wood-to-ground contact entirely.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wildlife Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lake Park's position near the lake and surrounding parkland attracts deer, raccoons, and other wildlife into residential yards. Gardens and landscaping are frequent targets. Our fences use tight bottom-rail spacing to prevent small animals from pushing through, and taller privacy options help deter deer. For properties with persistent wildlife pressure, we can add no-dig barriers at the fence base and reinforce gate hardware to keep determined critters out.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Preserving Lake Views & Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Lake Park homeowners chose the neighborhood specifically for its proximity to water and trails. A fence should provide security and privacy without walling off the natural surroundings. We use hogwire panels with cedar frames to maintain open sightlines toward the lake, combine solid privacy sections where you need neighbor screening with transparent sections where you want views, and position gates for easy access to nearby trails and park amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Pricing Transparency */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in Lake Park
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Quality fencing is an investment in your Lake Park property's safety and value. Below are typical ranges; exact pricing depends on linear footage, style, soil conditions, and any drainage or shoreline prep required.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $42–$62 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $36–$54 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$72 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Shoreline permit research and drainage prep are included as needed. Get an exact quote for your Lake Park property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Lake Park property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Lake Park</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Western red cedar's natural rot resistance makes it ideal for Lake Park's moisture-heavy environment. Board-on-board construction provides full privacy along side yards and neighbor boundaries. Pre-stained for lasting protection.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The go-to for Lake Park backyards facing the lake or park. Cedar frame with black mesh provides pet containment and wildlife deterrence without blocking the water views that make the neighborhood special.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Zero maintenance and maximum moisture resistance. Aluminum panels in a cedar frame on steel posts — no wood contacts the ground, no staining required. Built for wet Pacific Northwest conditions.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Lake Park Maple Valley fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Lake Park Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Lake-Adjacent Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your Lake Park property to measure the fence line, test soil moisture levels, check for drainage issues, and verify shoreline setback requirements. Fence Genius captures precise terrain data for custom panels.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Permitting</h3>
                  <p className="text-muted-foreground">
                    Choose your style and materials. We handle the King County permit application and any shoreline management documentation required for your parcel. You'll receive a complete design plan before work begins.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are precision-built at our facility from Fence Genius measurements. Materials are selected for Lake Park's moisture conditions — rot-resistant cedar, galvanized or stainless hardware, and proper drainage components.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Lake Park Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew installs with drainage beds at every post, moisture barriers where needed, and careful protection of your landscaping. Pre-fabricated panels mean minimal disruption. Most Lake Park projects complete in 1–3 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Detailed final inspection with you. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated on completion. We clean up completely — your yard looks better than when we arrived.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Maple Valley Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Maple Valley. If you're near Lake Park, we also serve Cherokee Bay Park, Highlands at Cedar Downs, Tahoma, and the Cedar River corridor.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley">Maple Valley overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/highlands-at-cedar-downs">Highlands at Cedar Downs</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/patricks-faire">Patrick&apos;s Faire</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 14. CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Lake Park Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Maple Valley's lake-adjacent fence specialists. We'll assess your property's moisture conditions, check shoreline requirements, and recommend the best solution.
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

export default LakeParkPage;
