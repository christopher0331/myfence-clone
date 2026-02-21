"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft, MapPin, Phone, Star } from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import OptimizedImage from "@/components/OptimizedImage";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

interface McMickenHeightsPageProps {
  canonical?: string;
}

const McMickenHeightsPage = ({
  canonical = "https://myfence.com/service-areas/seatac/mcmicken-heights",
}: McMickenHeightsPageProps) => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical,
    neighborhoodName: "McMicken Heights, SeaTac",
    pageTitle: "McMicken Heights Fence Installation",
    description:
      "Professional fence installation in McMicken Heights, SeaTac. Sound-dampening privacy fences and durable cedar, hogwire, and hybrid systems for airport-adjacent residential lots.",
    faqItems: [
      {
        question: "Do I need a permit for a fence in McMicken Heights, SeaTac?",
        answer: "SeaTac residential fences up to 6 feet in side and rear yards typically do not require a permit but must comply with Chapter 15.435 (setback and sight-distance). Front yard fences are limited to 4 feet. We confirm current rules for your property during the site visit.",
      },
      {
        question: "Can you help with noise reduction from the airport in McMicken Heights?",
        answer: "Yes. We specialize in high-density cedar privacy fences that provide meaningful sound-dampening. Solid board and picture-frame designs with tight spacing create an effective buffer against airport and street noise for McMicken Heights backyards.",
      },
      {
        question: "How much does fence installation cost in McMicken Heights, SeaTac?",
        answer: "McMicken Heights fence installation typically runs $42–$65 per linear foot depending on style and height. We provide exact pricing after a free on-site measurement with Fence Genius.",
      },
      {
        question: "How long does fence installation take in McMicken Heights?",
        answer: "Most McMicken Heights projects complete in 1–2 days on-site. We pre-fabricate panels from Fence Genius measurements so install day is efficient with minimal disruption.",
      },
    ],
  });

  return (
    <>
      <Seo
        title="McMicken Heights SeaTac Fence Installation | Noise Reduction & Privacy | MyFence.com"
        description="Fence installation in McMicken Heights, SeaTac. Sound-dampening privacy fences and durable cedar, hogwire & hybrid systems for airport-adjacent lots. Free quotes. (253) 455-1885."
        canonical={canonical}
        structuredData={structuredData}
      />

      <main className="min-h-screen">
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/seatac"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to SeaTac
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving McMicken Heights, SeaTac WA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">McMicken Heights Fence Installation</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Sound-dampening privacy fences and durable cedar, hogwire, and hybrid systems for McMicken Heights—established SeaTac residential living near the airport corridor.
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

              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <GoogleBusinessMap city="McMicken Heights" state="Washington" radiusMiles={3} zoom={12} showBusinessInfo={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges Bar */}
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

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Fencing for McMicken Heights: Privacy & Noise Buffer</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                McMicken Heights is one of SeaTac's established residential neighborhoods, where many homeowners value a solid privacy fence that buffers airport and street noise while defining the backyard. Fence choices here need to be durable for Puget Sound weather and built to SeaTac's height and setback rules.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We install cedar privacy, hogwire, and hybrid aluminum/cedar systems throughout McMicken Heights and SeaTac. Our Fence Genius process ensures precise measurements and efficient installation, and we use marine-grade hardware so your fence holds up for years. For lots that want maximum sound reduction, we recommend dense cedar privacy designs with tight board spacing.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why McMicken Heights Homeowners Choose MyFence.com</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Noise-Reduction Expertise</h3>
                      <p className="text-muted-foreground">We design high-density cedar privacy fences that create a real sound buffer for airport-adjacent backyards—solid boards, tight spacing, and quality construction.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Efficient, Low-Disruption Install</h3>
                      <p className="text-muted-foreground">Panels are built off-site from Fence Genius measurements. Most McMicken Heights projects are done in 1–2 days with a clean site when we leave.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Long-Term Confidence</h3>
                      <p className="text-muted-foreground">Every installation is backed by a {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty so you can enjoy your fence with peace of mind.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">SeaTac Code Compliance</h3>
                      <p className="text-muted-foreground">We design to SeaTac's fence height and setback rules so your project is compliant and neighbor-friendly from day one.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Local Reviews */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What McMicken Heights Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We needed a fence that would cut down the plane noise in the backyard. They put in a solid cedar privacy fence and the difference is huge. Back there it's actually quiet now. Very happy with the quality."
                  </p>
                  <p className="text-sm font-medium">— Steve in McMicken Heights</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Professional from start to finish. They measured everything, explained the options, and had the fence up in two days. It looks great and we have way more privacy. Would recommend to anyone in the neighborhood."
                  </p>
                  <p className="text-sm font-medium">— Diane in McMicken Heights</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Work in McMicken Heights & SeaTac
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We've completed fence projects throughout McMicken Heights and the SeaTac area—cedar privacy, hogwire, and hybrid installations for established residential lots.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                      alt="6' cedar privacy fence in McMicken Heights, SeaTac"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">6' Cedar Privacy</h3>
                    <p className="text-sm text-muted-foreground">McMicken Heights backyard</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/6_%20Black%20Hogwire/IMG_7356.webp?updatedAt=1762037826604"
                      alt="Hogwire fence in McMicken Heights"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hogwire with Cedar Frame</h3>
                    <p className="text-sm text-muted-foreground">Side yard perimeter</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png"
                      alt="Hybrid aluminum cedar fence in McMicken Heights"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hybrid Aluminum/Cedar</h3>
                    <p className="text-sm text-muted-foreground">Low-maintenance residential</p>
                  </div>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                <Link href="/gallery" className="text-primary hover:underline">View full gallery</Link> for more SeaTac-area projects.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Featured McMicken Heights Installation
              </h2>
              <Card className="p-6 md:p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <OptimizedImage
                    src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                    alt="Featured McMicken Heights installation: cedar privacy fence, SeaTac"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A McMicken Heights family wanted to reclaim their backyard from airport and street noise. We installed a 6' cedar privacy fence with board-on-board construction and marine-grade stainless fasteners along the rear and one side. The solid, tight-spaced design provides a noticeable sound buffer and full privacy. Total linear footage was 180 feet; installation was completed in two days. The fence is under our {WARRANTY_CONSTANTS.YEARS}-year warranty and built for SeaTac's weather.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Style:</strong> Cedar privacy, board-on-board · <strong>Location:</strong> McMicken Heights, SeaTac
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">McMicken Heights–Specific Fencing Considerations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">McMicken Heights Noise Buffer & Privacy</h3>
                  <p className="text-muted-foreground leading-relaxed">Many lots in McMicken Heights benefit from a solid privacy fence that dampens airport and traffic noise. We recommend dense cedar designs with minimal gaps and quality posts and hardware so the fence performs and lasts.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">McMicken Heights SeaTac Code & Setbacks</h3>
                  <p className="text-muted-foreground leading-relaxed">SeaTac fence rules apply: front yard 4 ft max, side and rear 6 ft max where allowed. We design to these limits and any sight-distance requirements so your project stays permitted.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">McMicken Heights Durability in Puget Sound Weather</h3>
                  <p className="text-muted-foreground leading-relaxed">Wet winters and moisture mean fences need marine-grade fasteners and sound construction. We use materials and methods that hold up so your McMicken Heights fence stays straight and attractive for years.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in McMicken Heights
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fencing is an investment in your McMicken Heights property. Below are typical ranges; your exact price depends on linear footage and style.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $44–$65 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $40–$55 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$66 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Get an exact quote for your McMicken Heights property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your McMicken Heights property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Fence Styles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in McMicken Heights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The top choice for noise reduction and full privacy in McMicken Heights. Solid board or board-on-board with marine-grade hardware for long-lasting performance.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Defines the boundary without blocking light. Cedar frame with mesh; good for side yards and areas where you want containment without full enclosure.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Low-maintenance and durable for SeaTac. Black aluminum panels in cedar frame; no staining, built for wet weather and busy households.
                  </p>
                  <Link href="/fence-styles/cedar-aluminum-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <VirtualQuoteTool fenceStyleName="McMicken Heights SeaTac fence" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our McMicken Heights Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. McMicken Heights Site Assessment</h3>
                  <p className="text-muted-foreground">We evaluate lot lines, noise exposure, privacy goals, and SeaTac code constraints. Fence Genius captures precise measurements for custom panels.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. McMicken Heights Design & Material Selection</h3>
                  <p className="text-muted-foreground">Choose cedar, hogwire, or hybrid with guidance for sound-dampening and durability. We confirm height and placement with SeaTac rules before fabrication.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">Panels are built off-site from Fence Genius measurements so installation is faster and cleaner on your property.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. McMicken Heights Installation</h3>
                  <p className="text-muted-foreground">Our crew completes the build with careful alignment and secure post setting. Most McMicken Heights projects finish in 1–2 days.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">We review the finished fence with you and activate your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby SeaTac Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout SeaTac. If you're in McMicken Heights, we also serve Angle Lake, Bow Lake, Riverton, Madrona, and the rest of the SeaTac area.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seatac">SeaTac overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seatac/angle-lake">Angle Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your McMicken Heights Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">Same-day estimates available in McMicken Heights. Book a free consultation with our SeaTac fencing team and get a clear plan for your project.</p>
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

export default McMickenHeightsPage;
