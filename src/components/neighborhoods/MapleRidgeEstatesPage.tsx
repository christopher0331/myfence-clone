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
  Mountain,
  TreePine,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/renton/maple-ridge-estates";
const META_TITLE = "Maple Ridge Estates Fence Installation | Renton | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Maple Ridge Estates, Renton. Cedar, hogwire & hybrid fencing for East Plateau properties. Free quotes. (253) 455-1885.";

const MapleRidgeEstatesPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Maple Ridge Estates, Renton",
    pageTitle: "Maple Ridge Estates Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a King County permit for a fence in Maple Ridge Estates?",
        answer:
          "Maple Ridge Estates falls within unincorporated King County, so fence permits are handled through King County Department of Local Services rather than the City of Renton. Fences under 6 feet on flat ground generally don't require a permit, but setback rules and height restrictions still apply — especially on corner lots and near roads. MyFence.com researches the requirements for your specific parcel and handles any necessary permits through King County.",
      },
      {
        question: "How do you install fences on Maple Ridge Estates' hillside grades?",
        answer:
          "Many Maple Ridge Estates properties have moderate to significant slope changes along property lines. Our Fence Genius system maps the exact grade profile and manufactures panels that rack smoothly with the terrain — no triangular gaps at the bottom or awkward stepping. We use deeper post holes (36–48 inches) with reinforced concrete footings on sloped sections, and our steel post-on-pipe upgrade provides extra lateral stability on hillside runs.",
      },
      {
        question: "How much does fence installation cost in Maple Ridge Estates, Renton?",
        answer:
          "Maple Ridge Estates fence installation typically ranges from $42–$62 per linear foot for cedar privacy, $36–$54 for hogwire, and $52–$72 for hybrid aluminum/cedar. Slope work and terrain complexity can influence the final price. Contact us for a free on-site estimate tailored to your Maple Ridge Estates property.",
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
              href="/service-areas/renton"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Renton
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Maple Ridge Estates, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Maple Ridge Estates Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Terrain-adapted fencing for Maple Ridge Estates' East Plateau properties. Cedar, hogwire, and hybrid systems engineered for hillside grades and forested lot boundaries.
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
                  city="Maple Ridge Estates, Renton"
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
                Fencing for Maple Ridge Estates' East Plateau Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Maple Ridge Estates is a residential community situated on the East Renton Plateau, where newer construction homes sit on moderate to larger lots with well-maintained landscapes. The neighborhood's rolling terrain includes hillside grades that vary from gentle slopes to more significant elevation changes along rear property lines. Proximity to forested areas and regional trails gives properties a semi-rural feel while remaining minutes from Renton's commercial core.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Because Maple Ridge Estates falls within unincorporated King County, the permitting process runs through the county rather than the City of Renton — a distinction that catches many homeowners off guard. MyFence.com has installed fences throughout the East Plateau area and handles King County permit research as part of every project. Our Fence Genius measurement technology is especially valuable here, where grade changes along property lines demand precision panel manufacturing to avoid gaps and maintain a clean, finished look across sloped terrain.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Maple Ridge Estates Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Hillside Grade Specialists</h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps grade changes across your lot and produces panels that follow the terrain precisely — no unsightly gaps at the bottom or awkward stepping on sloped runs.
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
                        Comprehensive craftsmanship warranty covering materials, labor, and structural integrity — including reinforced footings on hillside installations throughout Maple Ridge Estates.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">King County Permit Experts</h3>
                      <p className="text-muted-foreground">
                        Maple Ridge Estates is unincorporated King County — different rules than Renton proper. We research your parcel's specific requirements and handle the county permit process for you.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Forest-Edge Integration</h3>
                      <p className="text-muted-foreground">
                        Many lots border wooded areas and trails. We build fences that define your boundary, deter wildlife, and blend naturally with the forested surroundings Maple Ridge Estates is known for.
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
                What Maple Ridge Estates Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our backyard has a pretty steep drop along the back property line. They mapped the whole slope and built panels that follow the grade perfectly — no gaps anywhere. The King County permit was handled before we even had to think about it."
                  </p>
                  <p className="text-sm font-medium">— Jason in Maple Ridge Estates</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We border the trail system and deer were getting into the garden every night. MyFence installed a cedar privacy fence with reinforced bottom rails — looks beautiful and the deer haven't gotten through since. Professional from start to finish."
                  </p>
                  <p className="text-sm font-medium">— Laura in Maple Ridge Estates</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Maple Ridge Estates Renton fence" />

        {/* 6. Project Gallery */}
        <ServiceAreaPhotoGallery city="Renton" neighborhood="Maple Ridge Estates" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Renton" neighborhood="Maple Ridge Estates" />

        {/* 8. Maple Ridge Estates–Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Maple Ridge Estates–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">King County Jurisdiction & Permits</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike neighborhoods inside Renton city limits, Maple Ridge Estates is in unincorporated King County. This means fence permits, setback requirements, and height restrictions follow King County code — not the City of Renton's. The distinction matters: setback rules for corner lots differ, and some King County parcels have easements or critical area buffers that affect fence placement. We research your specific parcel through King County's online records before designing your fence line, ensuring the installation meets all county requirements without surprises.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Slope Installation & Reinforced Footings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The East Plateau terrain creates grade changes that range from gradual inclines to steeper drops along rear and side property lines. Standard fence panels installed on slopes leave triangular gaps at the bottom — a security problem and an eyesore. Our Fence Genius system captures the exact slope profile and produces racked panels that follow the grade continuously. On steeper sections, we set posts 36–48 inches deep with oversized concrete footings and offer our steel post-on-pipe upgrade for maximum lateral stability against the downhill gravitational pull on panels.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Forest Proximity & Wildlife Pressure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Maple Ridge Estates properties border forest corridors and trail systems that connect to larger regional greenbelts. Deer, coyotes, and raccoons use these corridors regularly and enter unfenced yards for gardens, pet food, and shelter. A 6-foot fence with reinforced bottom rails and no ground gaps is the minimum effective barrier. For properties with persistent deer pressure, we recommend adding a kickboard at the base and ensuring the fence extends to full height even where the grade drops — deer will find and exploit any low point.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Newer Construction Lot Conditions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maple Ridge Estates features relatively newer construction, which often means lots were graded and compacted during the building process. Compacted fill soil behaves differently than native ground — it can be harder to dig through but also prone to settling unevenly over time. We adjust our post footing approach based on the soil conditions we encounter during the site assessment, using gravel drainage beds around footings in areas where water tends to pool on compacted fill.
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
                Fence Installation Cost in Maple Ridge Estates
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                East Plateau properties with hillside grades require precision measurement and reinforced installation. Below are typical ranges; your exact price depends on linear footage, style, slope complexity, and soil conditions.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6&apos;):</strong> $42–$62 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $36–$54 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$72 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Slope-following installations and reinforced footings are included in pricing. Get an exact quote for your Maple Ridge Estates property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Maple Ridge Estates property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Maple Ridge Estates</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The most popular choice in Maple Ridge Estates. Board-on-board construction delivers full privacy and complements the neighborhood's newer homes. Racked panels follow hillside grades without gaps.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A natural fit for lots bordering forested areas and trails. Cedar-framed hogwire defines boundaries and contains pets while preserving the open, wooded feel that draws families to the East Plateau.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Maximum durability for exposed hillside runs. Aluminum panels in a cedar frame on steel posts resist wind and gravity loads on slopes with zero staining or maintenance required.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Maple Ridge Estates Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Plateau Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk your property to measure the fence line, map grade changes, identify forest boundaries, and check soil conditions. Fence Genius captures precise terrain data for slope-following panel design.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & King County Permits</h3>
                  <p className="text-muted-foreground">
                    Choose your style and materials. We research your parcel's King County requirements, verify setbacks and easements, and handle any necessary permit applications before work begins.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are precision-built at our facility from Fence Genius measurements. Racked panels for sloped sections are manufactured to exact grade specifications — no on-site cutting or guesswork.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Hillside Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew arrives with pre-fabricated panels and hillside equipment. Deep post foundations on slopes, reinforced bracing where needed, and precision panel fitting. Most Maple Ridge Estates projects complete in 1–3 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Detailed final inspection with you — every panel, post, and kickboard checked. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated on completion.
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
                Also Serving Nearby Renton Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Renton and the East Plateau. If you're near Maple Ridge Estates, we also serve Maple Valley Heights, East Renton Plateau, Fairwood, Cascade, and The Grove at Spring Lake.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-valley-heights">Maple Valley Heights</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/the-grove-at-spring-lake">The Grove at Spring Lake</Link>
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
                Ready to Fence Your Maple Ridge Estates Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Renton's East Plateau fence specialists. We'll assess your slope, check King County requirements, and recommend the best solution for your property.
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

export default MapleRidgeEstatesPage;
