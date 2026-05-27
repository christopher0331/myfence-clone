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
  Clock,
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import {
  buildNeighborhoodStructuredData,
  type NeighborhoodFaqItem,
} from "@/components/neighborhoods/structuredData";
import NeighborhoodFaqSection from "@/components/neighborhoods/NeighborhoodFaqSection";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";

const CANONICAL = "https://myfence.com/service-areas/bellevue/sherwood-forest";
const META_TITLE = "Sherwood Forest Fence Installation | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Sherwood Forest, Bellevue. Cedar, hogwire & hybrid fencing for wooded properties. Tree-friendly installation. Free quotes. (253) 455-1885.";

const SHERWOOD_FOREST_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Sherwood Forest, Bellevue?",
    answer:
      "Bellevue requires a building permit for fences over 6 feet in height or those located in critical areas. Sherwood Forest properties near Phantom Lake may fall under additional shoreline or wetland buffer regulations. MyFence.com researches the specific requirements for your Sherwood Forest address and handles all permitting paperwork.",
  },
  {
    question: "What fence styles work best on Sherwood Forest's wooded lots?",
    answer:
      "Cedar privacy fences are the most popular choice, as the natural wood complements the wooded setting. Hogwire with a cedar frame works well for homeowners who want to maintain an open, natural feel. Our hybrid aluminum/cedar system is ideal for low-maintenance fencing under tree canopy. We use Fence Genius to plan post placement around root systems and canopy drip lines.",
  },
  {
    question: "How much does fence installation cost in Sherwood Forest, Bellevue?",
    answer:
      "Sherwood Forest fence installation typically ranges from $38–$75 per linear foot depending on style and the extent of root work required. Cedar privacy runs $45–$65/ft, hogwire $38–$55/ft, and hybrid aluminum/cedar $55–$75/ft. Root navigation and hand-digging near trees may add 10–15%. Contact us for a free on-site estimate for your specific lot.",
  },
];

const SherwoodForestPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Sherwood Forest, Bellevue",
    pageTitle: "Sherwood Forest Bellevue Fence Installation",
    description: META_DESCRIPTION,
    faqItems: SHERWOOD_FOREST_FAQS,
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
                  <span className="text-lg text-muted-foreground">
                    Serving Sherwood Forest, Bellevue WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Sherwood Forest Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Tree-friendly fence installation for Sherwood Forest's wooded properties. Cedar, hogwire, and hybrid fencing built around mature evergreens and established landscaping.
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
                  city="Bellevue"
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
                Fencing for Sherwood Forest's Wooded Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Sherwood Forest is a quiet, tree-lined residential neighborhood in east Bellevue, tucked between Phantom Lake and the Spiritwood community. The area is defined by mature evergreen trees—Douglas firs, western red cedars, and hemlocks—that tower over single-family homes on generously sized lots. The dense canopy creates a secluded, forest-like atmosphere that residents prize, but it also means every fence project here involves navigating root systems, working under tree cover, and choosing materials that hold up in shaded, moisture-rich conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout Sherwood Forest and the surrounding east Bellevue area. We understand the specific challenges of building in a wooded neighborhood: root systems that change post placement plans, canopy drip that accelerates wood wear, and the desire to enhance privacy without sacrificing the natural character of the landscape. Our Fence Genius system maps your property precisely so we can plan post locations before we arrive, minimizing disruption to your trees and yard.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Sherwood Forest Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tree-Friendly Installation</h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps your fence line and identifies root zones before we dig. Hand-digging, adjusted post spacing, and root-conscious placement protect your mature evergreens.
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
                        Full craftsmanship warranty on materials and labor—including installations around trees and in shaded, high-moisture environments. Built for Sherwood Forest conditions.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Moisture-Resistant Materials</h3>
                      <p className="text-muted-foreground">
                        Marine-grade stainless fasteners, pressure-treated posts, and our optional Post-on-Pipe upgrade handle the persistent dampness under Sherwood Forest's dense canopy.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fast, Precise Installation</h3>
                      <p className="text-muted-foreground">
                        Pre-fabricated panels from Fence Genius measurements mean less time on your property. Most Sherwood Forest projects complete in 1–3 days with minimal yard disruption.
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
                What Sherwood Forest Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our lot has huge fir trees along the back property line. MyFence.com adjusted every post location to work around the roots and the fence looks great—straight lines even with the trees in the way. Really careful work."
                  </p>
                  <p className="text-sm font-medium">— Mark in Sherwood Forest</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We wanted more privacy but didn't want to lose the wooded feel of the neighborhood. They recommended hogwire with a cedar frame and it blends in perfectly. The crew was in and out in a day and a half. Very happy with the result."
                  </p>
                  <p className="text-sm font-medium">— Lisa in Sherwood Forest</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery city="Bellevue" neighborhood="Sherwood Forest" />

        {/* 7. Featured Installation Case Study */}
        <FeaturedProject city="Bellevue" neighborhood="Sherwood Forest" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Sherwood Forest–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Sherwood Forest Root Systems & Post Placement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The mature evergreens that give Sherwood Forest its character also send extensive root networks across property lines. Standard post hole augering can damage roots and compromise tree health. We use Fence Genius to plan post locations before arriving on site, then hand-dig at critical points to navigate around major roots. Where roots make a post location impossible, we adjust spacing slightly or use our steel Post-on-Pipe system, which requires a smaller footprint than traditional concrete footings. We never cut significant roots without your approval and consultation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Sherwood Forest Canopy Moisture & Material Choice</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dense tree canopy traps moisture and limits air circulation at ground level. Fences in shaded, wooded environments like Sherwood Forest are exposed to persistent dampness that accelerates wood decay and promotes moss and mildew growth. We address this with premium Western Red Cedar that has natural rot-resistant oils, marine-grade stainless steel fasteners that won't rust in humid conditions, and our optional Post-on-Pipe upgrade that eliminates ground-contact rot at the post base—the number one failure point for fences in wooded settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Privacy in a Wooded Setting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Sherwood Forest homeowners want enhanced privacy even though the area is already heavily treed. Deciduous undergrowth drops its leaves in winter, leaving sight lines open for months. A well-placed cedar privacy fence provides year-round screening that trees alone can't deliver. Board-on-board construction eliminates gaps between pickets, and our Fence Genius system ensures panels fit tightly even when the fence line weaves around tree trunks and uneven ground.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Phantom Lake Proximity & Environmental Buffers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sherwood Forest borders Phantom Lake, and some properties may fall within Bellevue's critical area buffers for wetlands or shoreline. These buffers can restrict fence placement, height, and materials. MyFence.com researches the environmental designations for your specific lot before quoting, and we design fence layouts that comply with Bellevue's Land Use Code while still giving you the privacy and property definition you need.
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
                Fence Installation Cost in Sherwood Forest
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Wooded-lot fencing requires care around trees and roots, which can affect pricing. Below are typical ranges for Sherwood Forest; your exact cost depends on linear footage, style, and the extent of root work.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6&apos;):</strong> $45–$65 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $38–$55 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $55–$75 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Root navigation and hand-digging near trees may add 10–15%. Get an exact quote for your Sherwood Forest property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Sherwood Forest property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Sherwood Forest</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The natural choice for Sherwood Forest. Board-on-board cedar blends with the wooded surroundings and provides year-round privacy even when deciduous undergrowth drops its leaves. Marine-grade hardware resists canopy moisture.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Cedar frame with black or galvanized mesh maintains the open, natural feel Sherwood Forest residents love. Defines your property without blocking the wooded views. Lighter footprint means fewer root conflicts during installation.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Zero staining or sealing under the canopy. Black aluminum panels in a cedar frame stand up to Sherwood Forest's persistent shade and moisture without the maintenance demands of all-wood construction.
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
        <VirtualQuoteTool fenceStyleName="Sherwood Forest Bellevue fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Sherwood Forest Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Sherwood Forest Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk your property to measure the fence line, map tree locations and major root zones, note soil conditions, and identify any permits or environmental buffer requirements near Phantom Lake. Fence Genius captures precise data for panel manufacturing.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Post Placement Planning</h3>
                  <p className="text-muted-foreground">
                    You select your style and materials. We design the fence layout with post positions that avoid major root systems and work with your existing landscaping. Any needed Bellevue permits are handled by us.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are precision-built off-site from Fence Genius measurements. Materials are selected for canopy-shade moisture conditions—marine-grade fasteners, premium cedar, and pressure-treated or steel posts where needed.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Sherwood Forest Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew arrives with pre-fabricated panels and uses compact equipment suited for wooded lots. Hand-digging at tree-adjacent posts protects roots. Most Sherwood Forest projects complete in 1–3 days with full cleanup.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Final inspection with you, covering every panel and post. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated on completion.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 13. FAQ — visible content must match FAQPage JSON-LD */}
        <NeighborhoodFaqSection
          title="Sherwood Forest Fence Installation FAQs"
          items={SHERWOOD_FOREST_FAQS}
        />

        {/* 14. Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Bellevue Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Bellevue. If you're near Sherwood Forest, we also serve Somerset, Newport Hills, Eastgate, and Crossroads.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/somerset">Somerset</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newport-hills">Newport Hills</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 15. CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Sherwood Forest Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Sherwood Forest. Get a free on-site quote from Bellevue's tree-friendly fence specialists—we'll assess your trees, roots, and recommend the right materials for your wooded lot.
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

export default SherwoodForestPage;
