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
  Home,
  Lock,
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/university-place/devonshire-townhomes";
const META_TITLE = "Devonshire Townhomes Fence Installation | University Place | MyFence.com";
const META_DESCRIPTION =
  "Fence installation for Devonshire Townhomes, University Place. Compact-lot cedar, hogwire & hybrid fencing. HOA-compliant. Free quotes. (253) 455-1885.";

const DevonshireTownhomesPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Devonshire Townhomes, University Place",
    pageTitle: "Devonshire Townhomes University Place Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "What are the HOA or community requirements for fencing at Devonshire Townhomes?",
        answer:
          "Devonshire Townhomes operates under community standards that govern exterior modifications including fences. Submissions typically require design drawings, material specifications, and height/color details. MyFence.com prepares complete documentation packages for HOA review and has experience meeting townhome community guidelines throughout University Place.",
      },
      {
        question: "Can you install a fence on a compact townhome lot at Devonshire?",
        answer:
          "Absolutely. Townhome lots at Devonshire have smaller yards and tight property lines with shared walls on one or both sides. We specialize in maximizing usable outdoor space on compact lots — precise measurements with Fence Genius ensure every inch counts. Our panels are custom-built to fit odd angles, short runs, and zero-lot-line situations common in townhome communities.",
      },
      {
        question: "How much does fence installation cost at Devonshire Townhomes, University Place?",
        answer:
          "Devonshire Townhomes fence costs typically range from $40–$58 per linear foot for cedar privacy, $35–$50 for hogwire, and $50–$68 for hybrid aluminum/cedar. Compact lots often require less total linear footage, which can offset the per-foot cost. Contact us for a free on-site estimate tailored to your specific townhome lot.",
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
              href="/service-areas/university-place"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to University Place
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Devonshire Townhomes, University Place WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Devonshire Townhomes Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Compact-lot fence specialists for Devonshire Townhomes. HOA-compliant cedar, hogwire, and hybrid fencing designed to maximize privacy and outdoor living space in University Place's townhome community.
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
                  city="Devonshire Townhomes, University Place"
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
                Fencing for Devonshire Townhomes' Compact Community
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Devonshire Townhomes is a townhome community in University Place, a suburban city in Pierce County nestled between Tacoma and the Puget Sound. Properties here feature shared walls, compact yards, and close neighbor proximity — creating fencing challenges that standard residential contractors rarely encounter. Every linear foot matters when your outdoor space is limited, and the margin for error on property lines is measured in inches, not feet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com understands townhome fencing. We've installed fences in tight-lot communities throughout the Puget Sound region, where precision measurement isn't a luxury — it's a requirement. Our Fence Genius technology maps exact property boundaries and lot dimensions so panels fit perfectly the first time. We also handle HOA and community association documentation, ensuring your fence meets Devonshire's standards for materials, height, and placement before installation day.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Devonshire Townhome Owners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Compact-Lot Specialists</h3>
                      <p className="text-muted-foreground">
                        Townhome yards demand precision. Fence Genius measures every angle and boundary so your fence maximizes usable space without encroaching on shared areas or neighbor lots.
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
                        Full craftsmanship warranty on materials and labor. Every fence we build at Devonshire is backed by our comprehensive guarantee — from cedar privacy to hybrid systems.
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
                        We prepare complete community association documentation — design drawings, material specs, and color samples — to meet Devonshire's standards. First-time approval on every project.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Lock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Privacy-Maximizing Designs</h3>
                      <p className="text-muted-foreground">
                        Dense townhome living means neighbors are close. Our board-on-board cedar and strategic fence placement create private outdoor retreats even on the smallest lots.
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
                What University Place Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our townhome yard is tiny and we thought fencing wouldn't be worth it. They measured everything precisely, fit panels into a tricky L-shaped space, and now we have a private patio area that feels twice the size. The HOA approved the design with no issues."
                  </p>
                  <p className="text-sm font-medium">— Sarah in University Place</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Living in a townhome, we needed a fence that would give us privacy from our neighbors without feeling like a fortress. MyFence installed a cedar board-on-board fence that looks great on both sides and fits perfectly in our compact backyard. Very professional crew."
                  </p>
                  <p className="text-sm font-medium">— David in University Place</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Project Gallery */}
        <ServiceAreaPhotoGallery city="University Place" neighborhood="Devonshire Townhomes" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="University Place" neighborhood="Devonshire Townhomes" />

        {/* 8. Devonshire-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Devonshire Townhomes Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Compact Lot Dimensions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Townhome lots at Devonshire are significantly smaller than typical single-family properties. Backyards may be as narrow as 15–20 feet deep with side yards measured in single digits. Every panel must be precisely sized — there's no room for the 6-inch fudge factor that works on half-acre lots. Our Fence Genius system maps the exact lot footprint so panels are manufactured to fit, not forced to fit. This precision also means fewer wasted materials and a cleaner finished look in tight spaces.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Shared Fence Lines & Neighbor Coordination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In townhome communities, fence lines are often shared between adjacent units. One neighbor may already have a fence installed; the other side may be open. Under Washington State law, boundary fence costs can be shared between neighbors. We help facilitate these conversations and can coordinate installations that work for both parties. When an existing neighbor fence is already in place, we verify its exact position relative to the property line before planning your installation to avoid encroachment or unsightly double-fence situations.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">HOA & Community Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Devonshire Townhomes, like most townhome communities in University Place, maintains community standards governing exterior modifications. Fence height, style, material, and color are typically regulated to maintain a uniform neighborhood appearance. We prepare complete submission packages — design drawings, material specs, stain samples, and site plans — that align with townhome community expectations. Our experience with similar communities means we know what gets approved and what gets sent back.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Maximizing Privacy in Dense Housing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When neighbors are 10–15 feet away with direct sightlines into your yard, privacy is the primary reason people fence. Board-on-board cedar construction eliminates gaps between boards and looks finished on both sides — critical when your fence is as visible to your neighbor as it is to you. Strategic fence height and placement can create a secluded patio feel even in the smallest townhome yard. We also consider window sightlines and deck elevations of adjacent units when designing your layout for maximum screening effectiveness.
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
                Fence Installation Cost at Devonshire Townhomes
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Townhome fencing projects are often more affordable than you expect — compact lots mean less total linear footage. Below are typical per-foot ranges; exact pricing depends on style, lot layout, and any site-specific challenges.
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
                  Community association documentation is included at no extra cost. Get an exact quote for your Devonshire Townhomes property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your townhome property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles at Devonshire Townhomes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The top choice for Devonshire townhome owners. Board-on-board construction provides full privacy from adjacent units and looks finished on both sides — important when your fence is your neighbor's view too.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A great option for townhome owners who want property definition without a closed-in feel. Cedar frame with wire mesh keeps pets contained and defines your space while maintaining an open, airy yard.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Zero-maintenance fencing for busy townhome owners. Aluminum panels in a cedar frame on steel posts deliver maximum durability and a modern aesthetic — no staining required, ever.
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
        <VirtualQuoteTool fenceStyleName="Devonshire Townhomes University Place fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Devonshire Townhomes Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Townhome Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your Devonshire property to measure exact lot dimensions, check existing fences on shared lines, note utility boxes and obstacles, and assess neighbor proximity. Fence Genius captures precise boundary data for custom panel manufacturing.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Community Approval</h3>
                  <p className="text-muted-foreground">
                    Choose your style and materials. We prepare the community association submission — design drawings, material specs, color samples, and a site plan showing placement relative to property lines, shared walls, and setbacks.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Once approved, panels are precision-built at our facility from Fence Genius measurements. Compact-lot panels are often non-standard sizes — custom manufacturing ensures a perfect fit with no on-site improvisation.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Efficient Townhome Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew works efficiently in tight spaces with minimal disruption to your neighbors. Pre-fabricated panels mean less noise, less debris, and faster completion. Most Devonshire projects finish in a single day.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Detailed final inspection with you. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated on completion. We clean up completely — critical in townhome communities where your work area is your neighbor's doorstep.
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
                Also Serving Nearby University Place Communities
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout University Place and Pierce County. If you're near Devonshire Townhomes, we also serve Chambers Bay, Sunset Terrace, Fircrest, and surrounding neighborhoods.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/university-place">University Place overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/university-place/chambers-bay">Chambers Bay</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/university-place/sunset-terrace">Sunset Terrace</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/fircrest">Fircrest</Link>
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
                Ready to Enhance Your Devonshire Townhome?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from University Place's compact-lot fence specialists. We'll measure your property, discuss community requirements, and recommend the best solution for your townhome.
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

export default DevonshireTownhomesPage;
