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
  TreePine,
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/renton/the-grove-at-spring-lake";
const META_TITLE = "The Grove at Spring Lake Fence Installation | Renton | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in The Grove at Spring Lake, Renton. HOA-compliant cedar, hogwire & hybrid fencing. Free quotes. (253) 455-1885.";

const TheGroveAtSpringLakePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "The Grove at Spring Lake, Renton",
    pageTitle: "The Grove at Spring Lake Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "What are The Grove at Spring Lake HOA fence requirements?",
        answer:
          "The Grove at Spring Lake is a planned community with homeowner association design guidelines that govern exterior modifications including fences. Approved styles, heights, materials, and colors must be submitted for review before installation. MyFence.com prepares complete HOA submission packages — design drawings, material specifications, and color/stain samples — and has experience working within planned-community architectural standards to secure first-time approval.",
      },
      {
        question: "What fence styles are best for families in The Grove at Spring Lake?",
        answer:
          "Cedar privacy fences are the most popular choice for families at The Grove — they create secure, enclosed backyards for children and pets. For properties along greenbelt or trail boundaries, hogwire with a cedar frame provides containment while maintaining an open, neighborhood-appropriate look. Our hybrid aluminum/cedar system is the strongest, lowest-maintenance option for busy families who want durability without the upkeep of regular staining.",
      },
      {
        question: "How much does fence installation cost in The Grove at Spring Lake?",
        answer:
          "The Grove at Spring Lake fence installation typically ranges from $42–$60 per linear foot for cedar privacy, $36–$52 for hogwire, and $52–$70 for hybrid aluminum/cedar. Exact pricing depends on linear footage, style, lot grading, and any landscaping work required. HOA submission preparation is included at no extra cost. Contact us for a free on-site estimate.",
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
                    Serving The Grove at Spring Lake, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  The Grove at Spring Lake Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  HOA-compliant fencing for The Grove at Spring Lake's family-focused community. Cedar, hogwire, and hybrid systems designed to meet architectural guidelines and keep families safe.
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
                  city="The Grove at Spring Lake, Renton"
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
                Fencing for The Grove at Spring Lake's Planned Community
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The Grove at Spring Lake is a newer planned residential community in south Renton, situated near Spring Lake with access to greenbelts and walking trails. The neighborhood has a polished, family-oriented suburban feel with well-maintained moderate-sized lots, consistent architectural standards, and a homeowner association that governs exterior modifications. Fencing decisions here aren't just about what you want — they need to align with what the HOA allows.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com works regularly in HOA-governed communities across the Puget Sound region and understands that the approval process is the first hurdle, not an afterthought. We prepare complete architectural submission packages before any materials are ordered or work begins. Beyond HOA compliance, The Grove's family-centric character drives most fencing needs: safe backyards for children, pet containment, privacy from neighbors, and designs that complement the community's cohesive aesthetic without standing out for the wrong reasons.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why The Grove at Spring Lake Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">HOA Submission Specialists</h3>
                      <p className="text-muted-foreground">
                        We prepare complete architectural review packages — design drawings, material specs, color samples, and site plans — for The Grove's HOA. First-time approval is our standard.
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
                        Full craftsmanship warranty covering materials and labor. Every fence we build in The Grove is backed by our comprehensive {WARRANTY_CONSTANTS.YEARS}-year guarantee.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Family-Safe Construction</h3>
                      <p className="text-muted-foreground">
                        Secure fencing with no ground gaps, self-closing gate hardware, and height options that keep children and pets safely contained in the backyard.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Greenbelt-Sensitive Design</h3>
                      <p className="text-muted-foreground">
                        Properties near The Grove's greenbelts and trails need fences that respect setbacks, integrate with natural boundaries, and look appropriate from both sides of the fence line.
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
                What The Grove at Spring Lake Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "The HOA approval process was the part I was dreading, but MyFence handled the entire submission. They knew exactly what our community requires and the approval came back in under two weeks. The cedar fence matches the neighborhood perfectly."
                  </p>
                  <p className="text-sm font-medium">— Sarah in The Grove at Spring Lake</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We needed a safe backyard for our two toddlers and a golden retriever. They built a beautiful cedar fence with no gaps at the bottom and a self-closing gate that even the dog can't open. Our neighbors have already asked for their contact info."
                  </p>
                  <p className="text-sm font-medium">— Ryan in The Grove at Spring Lake</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Project Gallery */}
        <ServiceAreaPhotoGallery city="Renton" neighborhood="The Grove at Spring Lake" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Renton" neighborhood="The Grove at Spring Lake" />

        {/* 8. The Grove at Spring Lake–Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                The Grove at Spring Lake–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">HOA Architectural Guidelines</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As a planned community, The Grove at Spring Lake maintains architectural design standards that apply to all exterior modifications — fences included. The HOA typically specifies approved materials (natural cedar is standard), allowable heights, acceptable colors and stains, and restrictions on fencing along certain boundaries like greenbelts and community spaces. Submitting an incomplete or non-conforming application delays your project by weeks. We build the complete submission package upfront with design elevations, material specs, stain samples, and a site plan showing fence placement relative to property lines and community boundaries.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Family Safety & Child-Proofing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Grove at Spring Lake is a family neighborhood, and most fence requests here start with the same need: a safe, enclosed backyard. For families with young children, this means fences with no climbable footholds, gates that latch securely at adult height, and construction that eliminates any gap a toddler could squeeze through. We install self-closing gate hardware with gravity hinges and keyed or combination latches positioned out of children's reach. For families with both kids and pets, we add reinforced bottom rails that sit flush to grade — closing the gap that small dogs will find within minutes.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Greenbelt & Trail Boundaries</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Several lots in The Grove back onto greenbelt corridors and walking trails that are part of the community's planned open space. Fencing along these boundaries often comes with HOA-specific restrictions — lower height limits, open-style designs like hogwire rather than solid privacy, and setback requirements from the property line. We review your lot's specific HOA rules for greenbelt-facing fencing and design a solution that meets the requirements while still providing the containment and boundary definition you need. Hogwire with a cedar frame is the most common solution: open enough to satisfy guidelines, solid enough to keep pets and children inside.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Newer Construction Soil Conditions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Grove at Spring Lake is a relatively newer development, which means lots were excavated, graded, and backfilled during the construction process. This fill soil can be inconsistent — compacted in some areas, loose in others — and it settles over time. Standard post holes in fill soil can shift as the ground continues to stabilize. We assess your lot's soil conditions during the site visit and adjust footing depth and concrete volume accordingly. For areas with loose or recently settled fill, we use deeper post settings and gravel drainage beds to ensure long-term stability.
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
                Fence Installation Cost in The Grove at Spring Lake
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Quality fencing is an investment in your family's safety and your property's value. Below are typical ranges for The Grove at Spring Lake; exact pricing depends on linear footage, style, lot conditions, and any greenbelt-boundary requirements.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6&apos;):</strong> $42–$60 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $36–$52 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$70 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  HOA submission preparation is included at no extra cost. Get an exact quote for your Grove at Spring Lake property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Grove at Spring Lake property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in The Grove at Spring Lake</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The most requested style in The Grove. Board-on-board construction provides full backyard privacy and meets HOA natural-material requirements. Pre-stained in earth tones for a cohesive community appearance.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The go-to for greenbelt-facing boundaries where HOA guidelines require open-style fencing. Cedar frame with black mesh contains pets and kids while maintaining the natural community aesthetic.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Maximum durability with minimum maintenance — perfect for busy Grove families. Aluminum panels in a cedar frame require zero staining and hold up in all weather conditions while meeting community standards.
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
        <VirtualQuoteTool fenceStyleName="The Grove at Spring Lake Renton fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Grove at Spring Lake Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Property Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your property to measure the fence line, check grade, note landscaping, and identify greenbelt or trail boundaries. Fence Genius captures precise measurements for custom panel manufacturing.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. HOA Submission & Design</h3>
                  <p className="text-muted-foreground">
                    Choose your style and materials from HOA-approved options. We prepare the complete architectural review submission — elevation drawings, material specs, stain samples, and site plan — and handle the approval process.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Once HOA approval is received, panels are precision-built at our facility from Fence Genius measurements. Materials match your approved design specifications exactly.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Community-Conscious Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew installs with care for your landscaping and neighboring properties. Pre-fabricated panels minimize noise and disruption in the community. Most Grove at Spring Lake projects complete in 1–2 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Detailed final inspection with you — every panel, post, gate, and latch checked. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated on completion. Your yard is left cleaner than we found it.
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
                We install fences throughout Renton. If you're near The Grove at Spring Lake, we also serve Maple Ridge Estates, Maple Valley Heights, Fairwood, and East Renton Plateau.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-ridge-estates">Maple Ridge Estates</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-valley-heights">Maple Valley Heights</Link>
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
                Ready to Fence Your Grove at Spring Lake Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Renton's HOA-experienced fence specialists. We'll assess your property, review community guidelines, and recommend the best solution for your family.
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

export default TheGroveAtSpringLakePage;
