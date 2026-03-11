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
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/covington/covington-woods";
const META_TITLE = "Covington Woods Fence Installation | Covington | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Covington Woods, Covington. Tree-friendly cedar, hogwire & hybrid fencing. Root-conscious installation. Free quotes. (253) 455-1885.";

const CovingtonWoodsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Covington Woods, Covington",
    pageTitle: "Covington Woods Covington Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Covington Woods, Covington?",
        answer:
          "Covington is in unincorporated King County, so fence permits are handled through King County Department of Local Services. Fences under 6 feet generally don't require a permit, but setback and height rules still apply. MyFence.com researches the requirements for your specific Covington Woods parcel and handles any necessary permits.",
      },
      {
        question: "What fence styles work best on Covington Woods' wooded lots?",
        answer:
          "Cedar privacy fences with board-on-board construction are popular for their natural look among the trees. Hogwire fences blend well with the woodland setting and allow airflow. Our hybrid aluminum/cedar system is ideal for homeowners who want low maintenance in a high-moisture, canopy-shaded environment. We use Fence Genius to map root zones and plan post placement.",
      },
      {
        question: "How much does fence installation cost in Covington Woods?",
        answer:
          "Covington Woods fence installation typically ranges from $35–$68 per linear foot depending on style and complexity. Cedar privacy runs $40–$58/ft, hogwire $35–$50/ft, and hybrid aluminum/cedar $50–$68/ft. Root avoidance work and clay soil conditions can add to the cost. Contact us for a free on-site estimate.",
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
              href="/service-areas/covington"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Covington
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Covington Woods, Covington WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Covington Woods Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Root-conscious fencing built for Covington Woods' mature tree canopy. Cedar, hogwire, and hybrid systems designed to work with — not against — established root systems and clay soil.
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
                  city="Covington"
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
                Fencing Built Around Covington Woods' Mature Tree Canopy
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Covington Woods is one of Covington's most established residential neighborhoods — a quiet enclave defined by towering firs, cedars, and maples that have been growing for decades. The dense canopy and meandering root systems that give the neighborhood its character also make fence installation uniquely challenging. Post holes that hit a 12-inch root at 18 inches deep. Clay soil that holds water around footings for weeks. Shade that keeps fence panels damp well into summer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built fences throughout Covington Woods, and we understand that every lot here requires a plan that accounts for what's underground as much as what's above. Our Fence Genius measurement system maps your property's terrain and tree positions so we can place posts between root zones, use the right footing depth for your specific soil conditions, and select materials that perform in constant canopy shade and moisture.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Covington Woods Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Root-Conscious Installation</h3>
                      <p className="text-muted-foreground">
                        We map root zones before digging and adjust post placement to protect your mature trees. Hand-digging near root clusters and flexible post spacing keep your landscaping intact.
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
                        Full craftsmanship warranty on materials and labor — including installations in clay soil and shaded conditions. We stand behind every Covington Woods fence we build.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Clay Soil Specialists</h3>
                      <p className="text-muted-foreground">
                        Covington Woods' clay-rich soil shifts with moisture and holds water around post footings. We use oversized concrete collars and gravel drainage beds to keep posts plumb for decades.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Canopy Moisture Solutions</h3>
                      <p className="text-muted-foreground">
                        Dense tree cover traps humidity and slows drying. We select materials rated for sustained moisture exposure and use marine-grade fasteners that won't corrode under the canopy.
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
                What Covington Woods Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We had three other companies tell us they couldn't work around our trees. MyFence.com came out, mapped everything, and found a way to set posts without cutting any major roots. The cedar fence looks like it's always been part of the yard."
                  </p>
                  <p className="text-sm font-medium">— Karen in Covington Woods</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "The clay soil here has shifted other fences in the neighborhood, but ours hasn't moved an inch after two rainy seasons. They used deeper footings with drainage gravel — you can tell they know what Covington soil does."
                  </p>
                  <p className="text-sm font-medium">— Mike in Covington Woods</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery city="Covington" neighborhood="Covington Woods" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Covington" neighborhood="Covington Woods" />

        {/* 8. Covington Woods–Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Covington Woods–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Mature Root Systems</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The trees that define Covington Woods — Douglas fir, western red cedar, big-leaf maple — have root networks that can extend 20–30 feet from the trunk. Standard 8-foot post spacing often lands directly on a major root. We use Fence Genius to pre-map the fence line and identify where roots will conflict, then adjust post positions by 6–12 inches to thread between root clusters. Where avoidance isn't possible, we hand-dig to assess root size and redirect the fence line rather than cut through anything over 2 inches in diameter.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Clay Soil & Seasonal Movement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Covington's clay-heavy soil expands when wet and contracts when dry, creating seasonal pressure on fence posts. Standard post-hole concrete sitting in clay can crack and shift within a few years. We counter this with oversized concrete collars — 12-inch diameter minimum — surrounded by a gravel drainage jacket that allows water to move away from the footing instead of pressing against it. Our post-on-pipe steel upgrade is especially effective here because the galvanized steel inner pipe resists the lateral forces that clay exerts during freeze-thaw cycles.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Canopy Shade & Persistent Moisture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Covington Woods' dense tree cover means fences spend much of the year in shade, rarely drying out fully between rains. This accelerates mold growth, algae buildup, and wood decay if materials aren't selected properly. We use tight-knot Western Red Cedar with natural rot resistance, pair it with stainless steel fasteners rated for marine environments, and recommend our hybrid aluminum/cedar system for the shadiest sections where wood maintenance becomes impractical.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wildlife & Forest Edge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Properties along the eastern edge of Covington Woods back up to undeveloped forest areas, bringing deer, raccoons, and coyotes into yards. Fence height and ground-level gaps matter here — deer can clear a 4-foot fence easily, and coyotes will exploit any gap at the bottom. We build 6-foot minimum height and install kickboards or ground-hugging bottom rails to eliminate gaps, while maintaining the woodland aesthetic that drew you to the neighborhood.
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
                Fence Installation Cost in Covington Woods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Tree-lined lots with clay soil require more careful installation than open, flat yards. Below are typical ranges for Covington Woods properties; your exact price depends on linear footage, style, root work, and soil conditions.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $40–$58 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $35–$50 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $50–$68 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Root avoidance work and clay-soil upgrades may add 10–15%. Get an exact quote for your Covington Woods property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Covington Woods property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Covington Woods</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The natural choice for Covington Woods. Western Red Cedar complements the woodland setting and resists the persistent moisture under the tree canopy. Board-on-board construction provides full privacy between neighboring lots.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A lighter-footprint option that requires fewer deep post holes — helpful when root systems are extensive. The open mesh allows airflow that reduces moisture buildup on panels and blends with Covington Woods' natural landscape.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Our lowest-maintenance system — ideal for shaded Covington Woods lots where wood needs extra protection. Aluminum panels won't rot or mold regardless of canopy moisture. Zero staining required.
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
        <VirtualQuoteTool fenceStyleName="Covington Woods Covington fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Covington Woods Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Tree & Root Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk your Covington Woods property to identify tree positions, visible root systems, and soil conditions along the fence line. Fence Genius captures precise measurements while we note areas requiring root avoidance.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Custom Post Layout</h3>
                  <p className="text-muted-foreground">
                    Instead of standard spacing, we design a post layout that threads between root zones. You choose your fence style and materials, and we finalize the plan with adjusted post positions that protect your trees.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are precision-built off-site based on Fence Genius data. Variable spacing between posts means custom panel widths where needed — no on-site cutting or waste.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Root-Safe Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew hand-digs near root zones and uses compact equipment to minimize ground disturbance. Posts are set with oversized concrete collars and gravel drainage beds for clay-soil stability. Most Covington Woods projects complete in 1–3 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Final inspection with you — every panel, post, and kickboard checked. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated on completion.
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
                Also Serving Nearby Covington Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Covington. If you're near Covington Woods, we also serve Jenkins Creek, Maple Hills, Rock Creek, Shadow Lake, and Timberlane.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington">Covington overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington/timberlane">Timberlane</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley">Maple Valley</Link>
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
                Ready to Fence Your Covington Woods Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Covington's tree-friendly fence specialists. We'll assess your trees, roots, and soil — then recommend the best materials and post layout for your lot.
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

export default CovingtonWoodsPage;
