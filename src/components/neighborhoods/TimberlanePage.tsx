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
  Fence,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/covington/timberlane";
const META_TITLE = "Timberlane Fence Installation | Covington | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Timberlane, Covington. Family-friendly cedar, hogwire & hybrid fencing. Clay soil specialists. Free quotes. (253) 455-1885.";

const TimberlanePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Timberlane, Covington",
    pageTitle: "Timberlane Covington Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Timberlane, Covington?",
        answer:
          "Timberlane falls under King County jurisdiction. Fences under 6 feet typically don't require a building permit, but setback rules and height restrictions near roads still apply. MyFence.com checks the specific requirements for your Timberlane parcel and handles any necessary permitting.",
      },
      {
        question: "What fence styles are best for families in Timberlane?",
        answer:
          "Cedar privacy fences with board-on-board construction are the top choice for families needing a safe yard for kids and pets. The 6-foot height keeps dogs contained and provides a private play area. Hogwire fences work well for side yards where you want visibility, and our hybrid aluminum/cedar system is virtually maintenance-free for busy households.",
      },
      {
        question: "How much does fence installation cost in Timberlane?",
        answer:
          "Timberlane fence installation typically ranges from $35–$68 per linear foot. Cedar privacy runs $40–$58/ft, hogwire $35–$50/ft, and hybrid aluminum/cedar $50–$68/ft. Gentle slopes and clay soil conditions can affect final pricing. Contact us for a free on-site estimate for your Timberlane property.",
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
                    Serving Timberlane, Covington WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Timberlane Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Family-focused fencing for Timberlane's active households. Cedar, hogwire, and hybrid systems engineered for clay soil, gentle slopes, and the demands of kids, pets, and busy backyards.
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
                Fencing for Timberlane's Family-Friendly Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Timberlane is southeast Covington's go-to neighborhood for families — a mix of 1990s-era established homes and newer construction, connected by sidewalk-lined streets and cul-de-sacs where kids ride bikes and dogs wait at front doors. The lots are moderate-sized with manageable yards, some with gentle back-to-front slopes that create mild grading challenges. The primary fencing need here isn't terrain engineering — it's building safe, durable enclosures for active family life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout Timberlane for families needing secure backyards for toddlers, reliable containment for dogs, and privacy from adjacent neighbors on closer-set lots. Covington's clay soil and seasonal drainage patterns affect every installation here, and we build our footings and post systems to handle the ground conditions that cause lesser fences to lean and shift within a few years.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Timberlane Families Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Family-First Design</h3>
                      <p className="text-muted-foreground">
                        We design fences that keep kids and pets safely contained. No gaps at ground level, no climbable cross-rails on the outside, and gate latches positioned out of reach of small hands.
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
                        Full craftsmanship warranty on materials and labor. Built to handle years of soccer balls, dog paws, and Pacific Northwest weather without needing repairs.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Clay Soil Engineering</h3>
                      <p className="text-muted-foreground">
                        Timberlane's clay-heavy soil shifts with the seasons. We use deeper footings with gravel drainage jackets that prevent the heaving and leaning that plagues standard installations in this soil.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Fence className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Low-Maintenance Options</h3>
                      <p className="text-muted-foreground">
                        Busy families don't have time for annual staining. Our hybrid aluminum/cedar system and pre-stained cedar options give Timberlane homeowners beautiful fences without the upkeep burden.
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
                What Timberlane Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We have two labs and a toddler, so the fence had to be bombproof. MyFence.com built a 6-foot cedar fence with no gaps at the bottom and a self-closing gate. The dogs haven't found a way out yet, and it looks great from the street."
                  </p>
                  <p className="text-sm font-medium">— Sarah & Jason in Timberlane</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our old fence was leaning after just three years because of the clay soil. MyFence.com replaced it with deeper posts and drainage gravel around each one. Two winters later and everything is still perfectly straight."
                  </p>
                  <p className="text-sm font-medium">— Tom in Timberlane</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Timberlane Covington fence" />

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery city="Covington" neighborhood="Timberlane" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Covington" neighborhood="Timberlane" />

        {/* 8. Timberlane–Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Timberlane–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Clay Soil & Post Stability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Like much of Covington, Timberlane sits on heavy clay that absorbs water in the wet season and contracts during dry summers. This seasonal expansion and contraction is the number-one reason fences lean and shift in this neighborhood. We address it at the footing level: each post gets a 12-inch minimum concrete collar surrounded by 4 inches of compacted drainage gravel. The gravel creates a buffer zone that lets water pass through instead of pressing against the concrete. For properties with especially soft soil, we offer our steel post-on-pipe upgrade that anchors through the clay into more stable subsoil.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Seasonal Drainage & Yard Water</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Timberlane's gentle slopes move water toward lower corners of yards, and many properties have seasonal wet spots along back fence lines. A fence that sits in standing water degrades faster — posts rot, concrete cracks, and kickboards swell. We evaluate drainage patterns during site assessment and position the fence line to avoid chronic wet spots where possible. When the fence must cross a drainage path, we use pressure-treated posts, steel post-on-pipe, and elevated kickboards that allow water to pass underneath.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Kid & Pet Containment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Timberlane is full of families, and the most common request we hear is "keep the kids and dogs in." This means no gaps at the bottom (kickboards are standard), no climbable horizontal rails on the exterior face, and gates with self-closing hinges and latches that small children can't reach. For dog owners, we recommend 6-foot height minimum — even for breeds that "never jump" — and check every ground-level transition for escape routes. Board-on-board construction eliminates sight lines that trigger barking at neighbors.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Neighbor-to-Neighbor Coordination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Timberlane's moderate lot sizes mean fences are shared boundary lines more often than not. Washington state law (RCW 16.60.020) addresses shared fence responsibility, and we help navigate these conversations. We build "good neighbor" fences with the same finished appearance on both sides, confirm property lines before installation, and communicate with adjacent homeowners when access to their side is needed during construction.
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
                Fence Installation Cost in Timberlane
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Timberlane lots are generally manageable in size and slope, making fence projects here straightforward compared to hillside neighborhoods. Below are typical ranges; your exact price depends on linear footage, style, and soil conditions.
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
                  Gate additions, kickboards, and clay-soil post upgrades may affect final pricing. Get an exact quote for your Timberlane property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Timberlane property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Timberlane</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The most requested style in Timberlane. Board-on-board construction gives full privacy between neighboring yards and eliminates sight lines that cause dog barking. Kickboard standard for ground-level containment.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Great for side yards and property sections where you want light and visibility. Cedar frame with black mesh provides clean boundaries without the closed-in feel. Popular along shared driveways.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The zero-maintenance option for busy Timberlane families. Aluminum panels in a cedar frame on steel posts — no staining, no rotting, and strong enough for years of backyard use.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Timberlane Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Property & Soil Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your Timberlane home to measure the fence line, check soil conditions, evaluate slope, and note drainage patterns. Fence Genius captures precise measurements. We also confirm property lines and discuss neighbor coordination.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Family-Focused Design</h3>
                  <p className="text-muted-foreground">
                    You choose your style and we design around your family's needs — gate placement for yard access, containment features for pets, privacy levels, and any slope accommodation. We finalize the plan and check King County requirements.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels and gates are precision-built off-site from your Fence Genius measurements. Pre-fabrication means less on-site noise and mess — important in Timberlane's close-set neighborhood.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Efficient Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew installs pre-built panels with clay-soil post protocol — deeper footings, gravel drainage jackets, and oversized concrete collars. Kickboards and self-closing gates go in same day. Most Timberlane projects complete in 1–2 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    We walk every foot of fence with you, test all gates, and verify ground-level containment. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty starts at completion.
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
                We install fences throughout Covington. If you're near Timberlane, we also serve Covington Woods, Jenkins Creek, Maple Hills, and Shadow Lake.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington">Covington overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington/covington-woods">Covington Woods</Link>
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
                Ready to Fence Your Timberlane Yard?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Covington's family-friendly fence specialists. We'll measure your yard, discuss containment needs, and recommend the best materials for your family and your soil.
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

export default TimberlanePage;
