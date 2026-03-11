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

const CANONICAL = "https://myfence.com/service-areas/maple-valley/patricks-faire";
const META_TITLE = "Patrick's Faire Fence Installation | Maple Valley | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Patrick's Faire, Maple Valley. Family-friendly cedar, hogwire & hybrid fencing. Free quotes. (253) 455-1885.";

const PatricksFairePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Patrick's Faire, Maple Valley",
    pageTitle: "Patrick's Faire Maple Valley Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a King County permit to build a fence in Patrick's Faire?",
        answer:
          "Most fences in unincorporated King County over 6 feet require a building permit. Even fences under 6 feet must meet setback requirements and property line regulations. MyFence.com handles the full King County permit application process for Patrick's Faire homeowners, ensuring your fence is compliant before installation begins.",
      },
      {
        question: "What fence styles are best for families in Patrick's Faire?",
        answer:
          "Cedar privacy fences are the most popular choice for Patrick's Faire families — board-on-board construction keeps kids and pets safe while providing backyard privacy. Hogwire with a cedar frame works well for properties bordering wooded sections, offering containment with an open feel. Our hybrid aluminum/cedar system provides the strongest, lowest-maintenance option for families who want durability without upkeep.",
      },
      {
        question: "How much does fence installation cost in Patrick's Faire, Maple Valley?",
        answer:
          "Patrick's Faire fence costs typically range from $40–$58 per linear foot for cedar privacy, $35–$50 for hogwire, and $50–$68 for hybrid aluminum/cedar. Exact pricing depends on linear footage, style, lot grading, and any tree or landscaping work required. Contact us for a free on-site estimate tailored to your property.",
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
                    Serving Patrick&apos;s Faire, Maple Valley WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Patrick&apos;s Faire Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Family-friendly fence installation for Patrick&apos;s Faire, Maple Valley. Cedar, hogwire, and hybrid fencing designed for suburban yards, gentle terrain, and Pacific Northwest weather.
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
                  city="Patrick's Faire, Maple Valley"
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
                Fencing for Patrick&apos;s Faire&apos;s Family Neighborhood
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Patrick&apos;s Faire is a residential neighborhood in north Maple Valley with a welcoming suburban character. Properties are moderately sized with well-kept yards, and the area features gentle terrain with some wooded sections that give the neighborhood a natural, established feel. Located near the SE 231st St area, Patrick&apos;s Faire is family-friendly and well-connected to Maple Valley's schools, parks, and shopping.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout Maple Valley's established neighborhoods and understands what homeowners here need — secure backyards for kids and pets, privacy from neighboring properties, and durable construction that holds up to the Pacific Northwest's wet winters and dry summers. Our Fence Genius technology ensures precision panel fitting on every lot, even where subtle grade changes and tree roots make standard installations tricky.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Patrick&apos;s Faire Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Family-Focused Fencing</h3>
                      <p className="text-muted-foreground">
                        We design fences for how families actually use their yards — secure containment for kids and pets, self-closing gates, no ground gaps, and durable construction that handles daily backyard life.
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
                        Full craftsmanship warranty on materials and labor. We stand behind every Patrick&apos;s Faire fence we build — from cedar privacy to hybrid systems.
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
                        We handle the full King County permit process for Patrick&apos;s Faire properties — applications, setback verification, and compliance documentation. No paperwork headaches for you.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Wooded Lot Experience</h3>
                      <p className="text-muted-foreground">
                        Patrick&apos;s Faire has wooded sections with mature trees. We navigate root systems, work around established landscaping, and use installation methods that protect both your trees and your new fence.
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
                What Patrick&apos;s Faire Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &quot;We had three big trees along our property line that other fence companies said were a problem. MyFence worked right around them — the fence follows the tree line perfectly and they didn't damage a single root. Our kids finally have a fenced yard.&quot;
                  </p>
                  <p className="text-sm font-medium">— Amy in Patrick&apos;s Faire</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &quot;Fast, professional, and the cedar fence looks amazing. They handled the county permit, showed up when they said they would, and finished in a day and a half. Our dog hasn't escaped since. Exactly what we needed.&quot;
                  </p>
                  <p className="text-sm font-medium">— Mike in Patrick&apos;s Faire</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Project Gallery */}
        <ServiceAreaPhotoGallery city="Maple Valley" neighborhood="Patrick's Faire" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Maple Valley" neighborhood="Patrick's Faire" />

        {/* 8. Patrick's Faire-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Patrick&apos;s Faire Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">King County Permits & Setbacks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Patrick&apos;s Faire falls within unincorporated King County, which regulates fence height, setbacks, and placement. Fences over 6 feet typically require a building permit, and even shorter fences must observe setback distances from property lines and right-of-ways. We handle the entire King County permit process — verifying your parcel's specific setback requirements, preparing the application, and ensuring your fence is compliant before the first post goes in the ground.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wooded Lots & Tree Root Navigation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Patrick&apos;s Faire has established wooded sections with mature conifers and deciduous trees along many property lines. Tree roots present a real challenge for post installation — dig in the wrong spot and you damage the tree or end up with a post that won't hold. We survey root zones before design, use offset post placement and alternative anchoring where roots prevent standard digging, and route the fence line to protect both trees and structural integrity. The result is a fence that coexists with your trees instead of competing with them.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Family Safety & Pet Containment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most fencing projects in Patrick&apos;s Faire are driven by families who need a safe, enclosed backyard. We build with no ground-level gaps (critical for small dogs and toddlers), self-closing gate hardware with latches at both child and adult heights, and panel construction without footholds. For families wanting partial privacy, we combine solid cedar sections along neighbor boundaries with hogwire panels in areas where kids need visibility — like near the front yard or driveway approach.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Pacific Northwest Weather Durability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maple Valley receives significant rainfall from October through May, and Patrick&apos;s Faire's wooded sections retain moisture longer than open lots. We use Western red cedar for its natural rot and insect resistance, stainless steel or hot-dipped galvanized fasteners to prevent rust, and pre-staining to protect wood from day one. Post bases get gravel drainage beds to prevent water pooling. For maximum weather resistance, our hybrid aluminum/cedar system eliminates wood-to-ground contact entirely and requires zero ongoing maintenance.
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
                Fence Installation Cost in Patrick&apos;s Faire
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Quality fencing is an investment in your property's safety and value. Below are typical ranges; exact pricing depends on linear footage, style, lot grading, and any tree or landscaping work required.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6&apos;):</strong> $40–$58 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $35–$50 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $50–$68 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  King County permit handling is included at no extra cost. Get an exact quote for your Patrick&apos;s Faire property with our free on-site measurement.
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
                Popular Fence Styles in Patrick&apos;s Faire
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The neighborhood favorite. Board-on-board cedar provides full backyard privacy and a warm, natural aesthetic that blends with Patrick&apos;s Faire&apos;s wooded character. Pre-stained for lasting weather protection.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Great for Patrick&apos;s Faire homes that want containment without a solid wall. Cedar frame with black mesh keeps pets in the yard while maintaining an open, approachable feel that suits the neighborhood&apos;s suburban character.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The low-maintenance powerhouse. Aluminum panels in a cedar frame on steel posts — zero staining, maximum durability, and a modern look that complements both newer and established Maple Valley homes.
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
        <VirtualQuoteTool fenceStyleName="Patrick's Faire Maple Valley fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Patrick&apos;s Faire Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Property & Tree Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your Patrick&apos;s Faire property to measure the fence line, map tree root zones, check grade changes, and locate underground utilities. Fence Genius captures precise terrain data for custom panels.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & County Permitting</h3>
                  <p className="text-muted-foreground">
                    Choose your style and materials. We handle the King County permit application, verify setback requirements for your parcel, and provide a complete design plan before work begins.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are precision-built at our facility from Fence Genius measurements. Any tree-routing offsets or grade-following racking are built into the panels — no on-site cutting or guesswork.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Patrick&apos;s Faire Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew installs with care for your trees, landscaping, and neighboring properties. Pre-fabricated panels mean minimal noise and disruption. Most Patrick&apos;s Faire projects complete in 1–3 days.
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
                We install fences throughout Maple Valley. If you&apos;re near Patrick&apos;s Faire, we also serve Lake Park, Barklay Woods, Highlands at Cedar Downs, and Summit at Maple Valley.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley">Maple Valley overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/lake-park">Lake Park</Link>
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
                Ready to Enhance Your Patrick&apos;s Faire Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Maple Valley's trusted fence specialists. We'll assess your property, check for tree root challenges, and recommend the best solution for your family.
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

export default PatricksFairePage;
