"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Shield,
  Clock,
  Award,
  ArrowLeft,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import OptimizedImage from "@/components/OptimizedImage";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

interface DowntownBonneyLakePageProps {
  canonical?: string;
}

const DowntownBonneyLakePage = ({
  canonical = "https://myfence.com/service-areas/bonney-lake/downtown-bonney-lake",
}: DowntownBonneyLakePageProps) => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical,
    neighborhoodName: "Downtown Bonney Lake, Bonney Lake",
    pageTitle: "Downtown Bonney Lake Fence Installation",
    description:
      "Professional fence installation in Downtown Bonney Lake. Cedar, hogwire, and hybrid fence systems designed for compact lots, mixed-use surroundings, and long-term durability.",
    faqItems: [
      {
        question: "How long does a typical downtown Bonney Lake fence project take?",
        answer:
          "Most residential projects are completed quickly once installation begins—often 1–2 days on-site. Exact timeline depends on linear footage, gate count, and site complexity.",
      },
      {
        question: "Can you help with replacement on older lots in Downtown Bonney Lake?",
        answer:
          "Yes. We routinely replace aging fence lines in established downtown neighborhoods and can recommend modern materials that improve durability and curb appeal.",
      },
      {
        question: "What fence style is best for privacy near busy streets?",
        answer:
          "Full-privacy cedar and select hybrid designs are usually the best fit. We review your specific visibility and access needs before finalizing recommendations.",
      },
      {
        question: "How much does fence installation cost in Downtown Bonney Lake?",
        answer:
          "Downtown Bonney Lake fence installation typically runs $44–$68 per linear foot depending on style, gate count, and site access. We provide exact pricing after a free on-site measurement.",
      },
    ],
  });

  return (
    <>
      <Seo
        title="Downtown Bonney Lake Fence Installation | Bonney Lake Neighborhood Experts"
        description="Professional fence installation in Downtown Bonney Lake. Cedar, hogwire, and hybrid fence systems designed for compact lots, mixed-use surroundings, and long-term durability."
        canonical={canonical}
        structuredData={structuredData}
      />

      <main className="min-h-screen">
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/bonney-lake"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bonney Lake
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving Downtown Bonney Lake, Bonney Lake WA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Downtown Bonney Lake Fence Installation</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Premium fence systems for central Bonney Lake properties with tighter lot lines,
                  higher traffic flow, and a mix of residential and business-adjacent surroundings.
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
                <GoogleBusinessMap city="Downtown Bonney Lake" state="Washington" radiusMiles={5} zoom={11} showBusinessInfo={true} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Built for Downtown Bonney Lake Lots, Lifestyles, and Long-Term Value</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Downtown Bonney Lake includes long-established homes, updated infill lots, and
                properties close to more active commercial streets. Fence design in this area has
                to do more than mark a boundary. It needs to improve privacy, control visibility,
                support safer access points, and hold up to constant daily use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We install cedar privacy fences, decorative picture-frame systems, modern horizontal
                layouts, and cedar/aluminum hybrids that are engineered for Pacific Northwest
                weather and built to match how your property functions. Our approach is detailed and
                practical: clear layout planning, durable post systems, and clean finish work that
                helps your fence look intentional from every angle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re improving a backyard retreat, upgrading a side-yard corridor, or
                replacing an aging perimeter, our team builds with the same goals in mind:
                precision, longevity, and curb appeal that supports property value.
              </p>
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

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Downtown Homeowners Choose MyFence.com</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lot-Specific Layout Planning</h3>
                      <p className="text-muted-foreground">
                        We map each run to lot lines, easements, access points, grade changes, and
                        driveway transitions so the installation fits your property cleanly.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Efficient, Predictable Scheduling</h3>
                      <p className="text-muted-foreground">
                        Our pre-build process reduces jobsite surprises and helps keep timelines
                        reliable in busier neighborhood settings.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Durable Materials for Daily Use</h3>
                      <p className="text-muted-foreground">
                        We recommend fence systems and hardware that handle frequent gate cycles,
                        wet weather, and high-visibility frontage without constant upkeep.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Clean Finish Quality</h3>
                      <p className="text-muted-foreground">
                        Straight lines, balanced reveals, and consistent detailing give your fence a
                        polished appearance that supports home value.
                      </p>
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
                What Downtown Bonney Lake Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We're on a busy street and needed privacy without feeling boxed in. They did a cedar fence with a clean top line and a solid gate. The crew was in and out in two days and the yard looks great."
                  </p>
                  <p className="text-sm font-medium">— Mike in Downtown Bonney Lake</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Replaced an old failing fence on a tight lot. They confirmed the property line with us and the neighbor, and the new fence looks intentional from both sides. Very professional and the warranty gives us peace of mind."
                  </p>
                  <p className="text-sm font-medium">— Lisa in Downtown Bonney Lake</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Downtown Bonney Lake Bonney Lake fence" />

        {/* Project Gallery */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Work in Downtown Bonney Lake & Bonney Lake
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We've completed fence projects throughout Downtown Bonney Lake and the greater Bonney Lake area—cedar privacy, picture-frame, hogwire, and hybrid installations for compact lots and busy street frontage.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                      alt="6' cedar privacy fence installation in Downtown Bonney Lake"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">6' Cedar Privacy</h3>
                    <p className="text-sm text-muted-foreground">Downtown Bonney Lake lot</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/6_%20Black%20Hogwire/IMG_7356.webp?updatedAt=1762037826604"
                      alt="Hogwire with cedar frame fence in Downtown Bonney Lake"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hogwire with Cedar Frame</h3>
                    <p className="text-sm text-muted-foreground">Street-side perimeter</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png"
                      alt="Cedar aluminum hybrid fence in Downtown Bonney Lake"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hybrid Aluminum/Cedar</h3>
                    <p className="text-sm text-muted-foreground">Low-maintenance curb appeal</p>
                  </div>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                <Link href="/gallery" className="text-primary hover:underline">View full gallery</Link> for more Bonney Lake–area projects.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Featured Downtown Bonney Lake Installation
              </h2>
              <Card className="p-6 md:p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <OptimizedImage
                    src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                    alt="Featured Downtown Bonney Lake installation: cedar fence"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Downtown Bonney Lake homeowner on a compact lot near a busier corridor needed to replace a failing fence and improve privacy from the street. We installed a 6' cedar privacy fence with picture-frame styling, marine-grade stainless fasteners, and a reinforced driveway gate built for daily use. Layout was coordinated with the neighbor on the shared boundary. Total linear footage was 165 feet; installation was completed in two days. The fence is under our {WARRANTY_CONSTANTS.YEARS}-year warranty and built for Bonney Lake's wet winters and high-visibility frontage.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Style:</strong> Cedar privacy, picture-frame · <strong>Location:</strong> Downtown Bonney Lake, Bonney Lake
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Downtown Bonney Lake–Specific Fencing Considerations</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Downtown Bonney Lake Compact Lots and Shared Boundaries</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With tighter spacing between structures, layout precision is critical. We confirm
                    fence runs and transitions before installation so the final build is clean,
                    compliant, and coordinated with neighboring lines.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Downtown Bonney Lake Street Exposure and Security Balance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Downtown frontage often calls for a blend of privacy and design. We help select
                    heights, top profiles, and gate locations that improve security while keeping
                    curb appeal strong.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Downtown Bonney Lake Gate Traffic and Hardware Performance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Side-yard and driveway gates see repeated daily use. We specify hinges, latches,
                    and framing approaches built for long-term reliability and smoother operation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Downtown Bonney Lake Mixed Residential-Commercial Edges</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Where homes border higher-activity corridors, fence style and material choices
                    have to balance appearance, durability, and maintenance. We prioritize systems
                    that stay attractive with less upkeep.
                  </p>
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
                Fence Installation Cost in Downtown Bonney Lake
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fencing is an investment in your Downtown Bonney Lake property. Below are typical ranges; your exact price depends on linear footage, style, and gate count.
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
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$68 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Gate packages and site access may affect cost. Get an exact quote for your Downtown Bonney Lake property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Downtown Bonney Lake property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Fence Styles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Downtown Bonney Lake</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The go-to for Downtown Bonney Lake backyards near busy streets. Full-privacy cedar with picture-frame or board-on-board creates a quieter, more enclosed yard with strong curb appeal.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Defines the boundary without blocking light or feeling heavy. Cedar frame with black or galvanized mesh; fits compact lots and street-side frontage where you want definition without full enclosure.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Pairs wood warmth with metal stability and lower maintenance. Ideal for updated Downtown Bonney Lake homes and remodels; holds up to daily gate use and Pacific Northwest weather.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Downtown Bonney Lake Fencing</h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    See how our crew installs clean, durable fences in Bonney Lake neighborhoods with
                    detailed layout prep, efficient execution, and consistent quality checks.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From privacy-focused backyards to low-maintenance perimeter designs, we tailor
                    each build to your lot conditions, goals, and long-term maintenance preferences.
                  </p>
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/gzAzQLdfqDA?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title="Downtown Bonney Lake Fencing"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Downtown Bonney Lake Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Downtown Bonney Lake Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We review boundaries, access, grade, street exposure, and privacy targets so every decision starts with real property constraints and daily use needs.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Downtown Bonney Lake Design & Material Selection</h3>
                  <p className="text-muted-foreground">
                    Choose cedar, hogwire, or hybrid systems with guidance based on aesthetics, neighborhood fit, budget, and maintenance expectations.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Precision Layout & Pre-Build Preparation</h3>
                  <p className="text-muted-foreground">
                    Detailed measurements and planning reduce on-site delays and make installation cleaner and more predictable for compact downtown lots.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Professional Downtown Bonney Lake Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew sets posts, installs framing, and aligns panels with careful attention to strength, line consistency, and finished appearance. Most downtown projects complete in 1–2 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    We review the finished project together, answer final questions, and activate your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions: Downtown Bonney Lake Fencing</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">How long does a typical downtown fence project take?</h3>
                  <p className="text-muted-foreground">
                    Most residential projects are completed quickly once installation begins, but the
                    exact timeline depends on linear footage, gate count, and site complexity.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Can you help with replacement on older lots?</h3>
                  <p className="text-muted-foreground">
                    Yes. We routinely replace aging fence lines in established neighborhoods and can
                    recommend modern materials that improve durability and curb appeal.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">What fence style is best for privacy near busy streets?</h3>
                  <p className="text-muted-foreground">
                    Full-privacy cedar and select hybrid designs are usually the best fit. We review
                    your specific visibility and access needs before finalizing recommendations.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">How much does fence installation cost in Downtown Bonney Lake?</h3>
                  <p className="text-muted-foreground">
                    Downtown Bonney Lake fence installation typically runs $44–$68 per linear foot depending on style, gate count, and site access. We provide exact pricing after a free on-site measurement.
                  </p>
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
                Also Serving Nearby Bonney Lake Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout the Bonney Lake area. If you're in Downtown Bonney Lake, we also serve Tehaleh, Falling Water, Mountain Creek, and Lake Tapps.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake">Bonney Lake overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/lower-tehaleh">Tehaleh</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/falling-water">Falling Water</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/mountain-creek">Mountain Creek</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/lake-tapps">Lake Tapps</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/upper-tehaleh">Upper Tehaleh</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Downtown Bonney Lake Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Downtown Bonney Lake. Book a free consultation with our Bonney Lake fencing team and get a clear, practical plan tailored to your lot and goals.
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

export default DowntownBonneyLakePage;
