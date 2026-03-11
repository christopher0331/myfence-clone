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
  Mountain,
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/maple-valley/highlands-at-cedar-downs";
const META_TITLE = "Highlands at Cedar Downs Fence Installation | Maple Valley | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Highlands at Cedar Downs, Maple Valley. Cedar, hogwire & hybrid fencing. HOA-compliant designs. Free quotes. (253) 455-1885.";

const HighlandsAtCedarDownsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Highlands at Cedar Downs, Maple Valley",
    pageTitle: "Highlands at Cedar Downs Maple Valley Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need HOA approval or a permit to build a fence in Highlands at Cedar Downs?",
        answer:
          "Most fences in unincorporated King County (where Maple Valley sits) over 6 feet require a building permit. Highlands at Cedar Downs also has HOA architectural guidelines that govern fence style, height, and materials. MyFence.com handles King County permit applications and prepares your HOA submission package so both approvals move forward smoothly.",
      },
      {
        question: "What fence styles work best for newer homes in Highlands at Cedar Downs?",
        answer:
          "Cedar privacy fences with board-on-board or picture-frame construction are the most popular — they complement the neighborhood's modern home designs while meeting HOA standards. Hogwire with a cedar frame is a great option for backyards that want an open feel, and our hybrid aluminum/cedar system offers maximum durability with zero maintenance for busy families.",
      },
      {
        question: "How much does fence installation cost in Highlands at Cedar Downs?",
        answer:
          "Highlands at Cedar Downs fence costs typically range from $40–$60 per linear foot for cedar privacy, $35–$52 for hogwire, and $50–$70 for hybrid aluminum/cedar. Exact pricing depends on linear footage, style, lot grading, and any landscaping adjustments. Contact us for a free on-site estimate tailored to your property.",
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
                    Serving Highlands at Cedar Downs, Maple Valley WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Highlands at Cedar Downs Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  HOA-compliant fence installation for Highlands at Cedar Downs. Cedar, hogwire, and hybrid fencing engineered for newer homes, gentle hillside grades, and well-maintained family yards.
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
                  city="Highlands at Cedar Downs, Maple Valley"
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
                Fencing for Highlands at Cedar Downs
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Highlands at Cedar Downs is a planned residential community in Maple Valley featuring newer construction on moderately sized lots along the Cedar Downs Drive and SE 240th corridor. The neighborhood sits at a slight elevation with gentle hillside grades throughout, giving many properties a subtle slope that affects fence layout and post depth. HOA architectural guidelines govern exterior modifications, and the community's well-kept, family-oriented character calls for fencing that looks as good as it performs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built fences for newer developments across the Maple Valley area and understands the specific challenges — coordinating with HOA design standards, engineering posts for gentle slopes, and working around recently landscaped yards. Our Fence Genius technology captures precise terrain data so panels follow the grade without awkward gaps or steps, and we prepare complete HOA submission packages to keep your project on track from the start.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Highlands at Cedar Downs Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">New-Home Specialists</h3>
                      <p className="text-muted-foreground">
                        We work with newer construction regularly — navigating builder warranties, fresh landscaping, and underground utilities. Your fence integrates seamlessly with your home's design.
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
                        Full craftsmanship warranty on materials and labor. We stand behind every fence we build in Highlands at Cedar Downs — from cedar privacy to hybrid systems.
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
                        We prepare complete HOA submission packages — design drawings, material specs, and color samples — aligned with Highlands at Cedar Downs standards. First-time approval on every project.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Gentle-Slope Engineering</h3>
                      <p className="text-muted-foreground">
                        Fence Genius precision measurement handles the neighborhood's hillside grades. Custom panels follow your terrain exactly — clean lines with no gaps at the bottom.
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
                What Highlands at Cedar Downs Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We just moved in and needed a fence before our kids could play outside. They took care of the HOA paperwork, got approval fast, and had a beautiful cedar fence up in two days. It matches our new home perfectly."
                  </p>
                  <p className="text-sm font-medium">— Sarah in Highlands at Cedar Downs</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our yard has a slope that other companies said would be a problem. MyFence measured everything with their tech and the panels follow the grade perfectly. No weird gaps, no steps — just a clean fence all the way down."
                  </p>
                  <p className="text-sm font-medium">— James in Highlands at Cedar Downs</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Project Gallery */}
        <ServiceAreaPhotoGallery city="Maple Valley" neighborhood="Highlands at Cedar Downs" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Maple Valley" neighborhood="Highlands at Cedar Downs" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Highlands at Cedar Downs Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">HOA Architectural Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Highlands at Cedar Downs maintains community guidelines that cover fence style, height, materials, and color. All exterior modifications require approval before installation begins. We prepare comprehensive submission packages that include elevation drawings, material specifications, and stain or color samples aligned with the community's approved palette. Our familiarity with similar HOA processes in Maple Valley developments means your application moves through review efficiently and on the first try.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Gentle Hillside Grades</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many lots in Highlands at Cedar Downs sit on gentle slopes created by the community's elevated position along the SE 240th corridor. Even a modest grade of 5–10 degrees creates visible gaps under standard pre-cut panels. Our Fence Genius system maps the exact terrain profile and manufactures panels that rack smoothly with the slope. We use deeper post holes (30–36 inches) with additional concrete on graded sections, ensuring structural stability over time without the triangular gaps that plague cookie-cutter installations.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Newer Construction Coordination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Highlands at Cedar Downs homes are relatively recent builds. Fencing newer properties means working around fresh landscaping, irrigation lines, and sometimes active builder warranties on grading and drainage. We locate underground utilities before digging, coordinate with any active landscaping plans, and use installation methods that protect recently planted lawns and garden beds. If your home is still under builder warranty, we ensure our work doesn't conflict with covered systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Family Yard Containment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Highlands at Cedar Downs is a family-forward neighborhood, and most fence projects here are driven by the need to create a safe, enclosed backyard for kids and pets. We build with no ground-level gaps, self-closing gate hardware at both child and adult heights, and panel construction that eliminates toeholds. For properties that want privacy on the sides but an open feel toward common areas, we can combine solid cedar sections with hogwire panels for a versatile layout.
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
                Fence Installation Cost in Highlands at Cedar Downs
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Quality fencing is an investment in your property's safety and value. Below are typical ranges; exact pricing depends on linear footage, style, lot grading, and any landscaping adjustments required.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $40–$60 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $35–$52 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $50–$70 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  HOA submission preparation is included at no extra cost. Get an exact quote for your Highlands at Cedar Downs property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Popular Fence Styles in Highlands at Cedar Downs
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The top choice in Highlands at Cedar Downs. Board-on-board and picture-frame construction complement the neighborhood's newer homes while providing full backyard privacy. Pre-stained in natural tones to meet HOA guidelines.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A modern, open-feel option for yards bordering common areas or neighboring lots. Cedar frame with black or galvanized mesh keeps pets contained without blocking sightlines or making the yard feel closed in.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Maximum durability with zero staining or sealing. Aluminum panels in a cedar frame on steel posts — ideal for Maple Valley's wet climate and families who want a set-it-and-forget-it fence.
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
        <VirtualQuoteTool fenceStyleName="Highlands at Cedar Downs Maple Valley fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Highlands at Cedar Downs Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Property Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your Highlands at Cedar Downs home to measure the fence line, check grade changes, locate underground utilities, and note landscaping and irrigation. Fence Genius captures precise terrain data for custom panels.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & HOA Submission</h3>
                  <p className="text-muted-foreground">
                    Choose your style and materials. We prepare the full HOA submission — elevation drawings, material specs, stain samples, and a site plan — and handle the review process on your behalf.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Once HOA approval is received, panels are precision-built at our facility from Fence Genius measurements. Materials are matched to your approved design specifications exactly.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Professional Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew installs with care for your landscaping and neighboring properties. Pre-fabricated panels mean minimal noise and disruption. Most Highlands at Cedar Downs projects complete in 1–3 days.
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
                We install fences throughout Maple Valley. If you're near Highlands at Cedar Downs, we also serve Cherokee Bay Park, Lake Park, Barklay Woods, and Summit at Maple Valley.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley">Maple Valley overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/lake-park">Lake Park</Link>
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
                Ready to Enhance Your Highlands at Cedar Downs Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Maple Valley's trusted fence specialists. We'll assess your property, discuss HOA requirements, and recommend the best solution for your family.
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

export default HighlandsAtCedarDownsPage;
