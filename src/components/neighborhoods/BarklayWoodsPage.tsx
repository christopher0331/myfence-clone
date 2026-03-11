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
  Droplets,
  Clock,
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";

const CANONICAL = "https://myfence.com/service-areas/maple-valley/barklay-woods";
const META_TITLE = "Barklay Woods Fence Installation | Maple Valley | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Barklay Woods, Maple Valley. Cedar, hogwire & hybrid fencing for wooded properties. Free quotes. (253) 455-1885.";

const BarklayWoodsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Barklay Woods, Maple Valley",
    pageTitle: "Barklay Woods Maple Valley Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Barklay Woods, Maple Valley?",
        answer:
          "Barklay Woods falls under King County permitting jurisdiction. Fences up to 6 feet generally don't require a building permit, but setbacks from property lines and easements still apply. If your lot borders a critical area like a stream buffer or wetland, additional review may be required. MyFence.com researches the specific requirements for your Barklay Woods address and handles all permitting paperwork.",
      },
      {
        question: "How do you install fences on Barklay Woods' wooded lots?",
        answer:
          "Barklay Woods properties feature established fir and cedar trees with extensive root systems. We use Fence Genius to map your fence line and plan post placement around major roots before we arrive. Hand-digging replaces augering near tree-sensitive areas. Adjusted post spacing and our steel Post-on-Pipe system let us maintain a straight, secure fence line without damaging your trees.",
      },
      {
        question: "How much does fence installation cost in Barklay Woods, Maple Valley?",
        answer:
          "Barklay Woods fence installation typically ranges from $35–$70 per linear foot depending on style and lot conditions. Cedar privacy runs $40–$60/ft, hogwire $35–$52/ft, and hybrid aluminum/cedar $50–$70/ft. Root navigation and slope work may add 10–15%. Contact us for a free on-site estimate for your specific property.",
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
                    Serving Barklay Woods, Maple Valley WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Barklay Woods Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence installation built for Barklay Woods&apos; wooded residential lots. Cedar, hogwire, and hybrid fencing designed around mature trees, gentle slopes, and Pacific Northwest weather.
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
                  city="Maple Valley"
                  state="WA"
                  radiusMiles={5}
                  zoom={11}
                  showBusinessInfo={false}
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
                Fencing for Barklay Woods&apos; Wooded Residential Lots
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Barklay Woods is a quiet residential neighborhood in southeast Maple Valley, where moderate-sized lots sit beneath established stands of Douglas fir and western red cedar. The area has a settled, suburban feel with gently rolling terrain near the Rock Creek corridor. Homeowners here value privacy, wildlife management, and fencing that fits naturally into the wooded landscape—but the combination of tree roots, seasonal rainfall, and soft forest soils makes fence installation more nuanced than it looks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences across Maple Valley&apos;s wooded neighborhoods, and Barklay Woods is an area we know well. We understand the root systems that redirect post placement, the persistent moisture that tests material durability, and the deer pressure that makes sturdy fencing a practical necessity for gardens and landscaping. Our Fence Genius system maps your property line precisely so panels are manufactured to fit before our crew arrives—minimizing disruption to your trees and yard.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Barklay Woods Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tree-Conscious Installation</h3>
                      <p className="text-muted-foreground">
                        Fence Genius pre-maps your fence line so we plan around fir and cedar root systems before digging. Hand-digging at critical posts protects your mature trees from root damage.
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
                        Full craftsmanship warranty covering materials, labor, and structural integrity—including installations in Barklay Woods&apos; damp, shaded conditions around tree canopy.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">PNW-Grade Materials</h3>
                      <p className="text-muted-foreground">
                        Premium Western Red Cedar with natural rot resistance, marine-grade stainless fasteners, and our Post-on-Pipe upgrade that eliminates ground-contact decay in Maple Valley&apos;s wet climate.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Built for Maple Valley Rain</h3>
                      <p className="text-muted-foreground">
                        Every detail accounts for the Southeast King County rainfall—from post depth and drainage to material selection that resists moss, mildew, and seasonal saturation.
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
                What Barklay Woods Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We have big cedar trees along our back fence line and were worried about root damage. MyFence.com planned every post around the roots and hand-dug where needed. The cedar fence looks like it belongs here—clean lines even weaving between the trees. Impressive work.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— David in Barklay Woods</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Deer were destroying our garden every spring. We went with a 6-foot cedar privacy fence and the crew had it up in two days. Haven&apos;t had a single deer visit since. The team was respectful of our yard and cleaned up completely. Highly recommend.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Sandra in Barklay Woods</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery city="Maple Valley" neighborhood="Barklay Woods" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Maple Valley" neighborhood="Barklay Woods" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Barklay Woods–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Established Tree Root Systems</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Barklay Woods lots feature mature Douglas fir and western red cedar with root networks that extend well beyond the canopy drip line. Standard post hole augering can sever roots and weaken trees that have stood for decades. We use Fence Genius to pre-plan post locations and identify conflict zones before our crew arrives. Where roots make standard placement impossible, we shift post spacing or deploy our steel Post-on-Pipe system, which requires a smaller-diameter hole and less concrete. Hand-digging replaces augering at tree-adjacent posts, and we never cut significant roots without your knowledge.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Rainfall, Moisture & Material Longevity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maple Valley averages over 50 inches of rain per year, and Barklay Woods&apos; tree canopy traps additional moisture at ground level. Fences in this environment face persistent dampness from October through May. We counter this with premium Western Red Cedar that contains natural rot-resistant oils, marine-grade stainless steel fasteners, and our Post-on-Pipe upgrade that eliminates ground-contact decay at the post base—the most common failure point in wet Pacific Northwest soils. Proper post depth (36 inches minimum) and gravel drainage beds beneath footings further extend fence life.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Deer & Wildlife Pressure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Barklay Woods sits at the edge of open space near Rock Creek, and deer regularly move through residential properties. A 6-foot cedar privacy fence is the most effective residential barrier—deer can clear shorter fences easily. For homeowners who want an open feel while still deterring wildlife, our hogwire system with a cedar frame provides a physical barrier without a closed-in look. We can also combine styles: solid cedar panels along garden areas with hogwire sections along wooded boundaries.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Gentle Slopes & Grade Changes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While Barklay Woods isn&apos;t as steep as some Maple Valley neighborhoods, many lots have gentle rolling terrain with grade transitions of 3–8 feet across a fence run. Fence Genius captures the precise elevation profile and manufactures panels that step or rack to follow the slope cleanly. This prevents the unsightly gaps at the base that plague off-the-shelf fence panels installed on uneven ground.
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
                Fence Installation Cost in Barklay Woods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Wooded lots and root navigation can affect pricing. Below are typical ranges for Barklay Woods properties; your exact cost depends on linear footage, style, and site conditions.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6&apos;):</strong> $40–$60 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $35–$52 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $50–$70 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Root navigation and hand-digging near trees may add 10–15%. Get an exact quote for your Barklay Woods property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Barklay Woods property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Barklay Woods</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The top pick in Barklay Woods for privacy and deer deterrence. Board-on-board Western Red Cedar blends naturally with the surrounding fir and cedar trees while providing solid year-round screening. Pre-stained options resist moisture in Maple Valley&apos;s wet climate.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A cedar-framed hogwire fence keeps the open woodland feel while defining property lines and containing pets. Lighter post requirements make it easier to install around dense root zones. Popular along side yards and wooded boundaries.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Aluminum panels in a cedar frame on steel posts—zero staining or sealing under the tree canopy. The strongest option for Barklay Woods, with superior resistance to moisture, warping, and the long-term effects of shade and dampness.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system &rarr;
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Barklay Woods Maple Valley fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Barklay Woods Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Barklay Woods Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk your property to measure the fence line, map tree locations and major root zones, note soil conditions and slope changes, and identify any King County setback or critical-area requirements. Fence Genius captures precise terrain data for panel manufacturing.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Post Placement Planning</h3>
                  <p className="text-muted-foreground">
                    You select your style and materials. We design the fence layout with post positions that work around root systems and follow your lot&apos;s grade. Any needed King County permits are handled by us.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are precision-built off-site from Fence Genius measurements. Material selection accounts for Barklay Woods&apos; moisture conditions—marine-grade fasteners, premium cedar, and pressure-treated or steel posts where needed.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Barklay Woods Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew arrives with pre-fabricated panels and uses compact equipment appropriate for wooded residential lots. Hand-digging at tree-adjacent posts protects roots. Most Barklay Woods projects complete in 1–3 days with full site cleanup.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Final inspection with you, reviewing every panel and post. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated on completion.
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
                We install fences throughout Maple Valley. If you&apos;re near Barklay Woods, we also serve Cherokee Bay Park, Lake Park, Patrick&apos;s Faire, Highlands at Cedar Downs, and Rock Creek.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley">Maple Valley overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/cherokee-bay-park">Cherokee Bay Park</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/lake-park">Lake Park</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/patricks-faire">Patrick&apos;s Faire</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/highlands-at-cedar-downs">Highlands at Cedar Downs</Link>
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
                Ready to Fence Your Barklay Woods Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Free on-site estimates available in Barklay Woods. We&apos;ll assess your trees, roots, slope, and recommend the right materials for your wooded Maple Valley lot.
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

export default BarklayWoodsPage;
