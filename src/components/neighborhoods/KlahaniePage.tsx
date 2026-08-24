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
  FileDown,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/sammamish/klahanie";
const META_TITLE = "Klahanie Fence Installation | Sammamish | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Klahanie, Sammamish. Download HOA fence forms, ARC-ready cedar & hogwire fencing. Free quotes. (253) 455-1885.";

const KlahaniePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Klahanie, Sammamish",
    pageTitle: "Klahanie Sammamish Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "What are the Klahanie HOA fence requirements in Sammamish?",
        answer:
          "The Klahanie Association requires architectural review committee (ARC) approval for all fence installations. Submissions must include design drawings, material specifications, and color samples. Download the official Klahanie HOA fence application, completion form, and design specifications on this page, then submit completed documents to architecturalcontrols@klahanie.com. Approved styles typically include cedar privacy, hogwire with cedar frame, and hybrid aluminum/cedar in natural tones. MyFence.com prepares complete ARC submission packages and has a track record of first-time approval in Klahanie.",
      },
      {
        question: "What fence styles work best for families in Klahanie?",
        answer:
          "Cedar privacy fences are the most popular choice for Klahanie families — they keep kids and pets secure while providing backyard privacy. Hogwire with a cedar frame is a great option for homes bordering trails or parks, offering containment without blocking views. Our hybrid aluminum/cedar system provides the strongest barrier with zero maintenance, ideal for busy families who want durability without upkeep.",
      },
      {
        question: "How much does fence installation cost in Klahanie, Sammamish?",
        answer:
          "Klahanie fence costs typically range from $42–$62 per linear foot for cedar privacy, $36–$52 for hogwire, and $52–$72 for hybrid aluminum/cedar. Exact pricing depends on linear footage, style, lot grading, and any tree or landscaping work. Contact us for a free on-site estimate tailored to your Klahanie property.",
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
              href="/service-areas/sammamish"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sammamish
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Klahanie, Sammamish WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Klahanie Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  HOA-compliant fence specialists for Klahanie's master-planned community. Cedar, hogwire, and hybrid fencing designed for families, approved by the Klahanie Association, and built to last.
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
                  city="Klahanie, Sammamish"
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
                Fencing for Klahanie's Family-Focused Community
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Klahanie is one of Sammamish's largest and most established master-planned communities. With parks, trails, sports courts, a community center, and a strong neighborhood association, Klahanie is built around families. Properties feature moderate lot sizes with well-maintained yards, many backing onto greenbelt corridors or community open spaces. The Klahanie Association maintains architectural review standards for all exterior modifications — including fences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout Klahanie and knows the ARC process inside and out. We prepare complete submission packages with design drawings, material specs, and color samples that align with approved styles. Beyond HOA compliance, we build fences that serve Klahanie families: secure boundaries for kids and pets, privacy from neighboring properties, and durable construction that holds up to Sammamish's wet climate and the wildlife that wanders in from adjacent forest areas.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Klahanie Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">HOA Compliance Experts</h3>
                      <p className="text-muted-foreground">
                        We know the Klahanie Association's ARC requirements. Complete submission packages with drawings and material specs — first-time approval on every project.
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
                        Full craftsmanship warranty on materials and labor. We stand behind every Klahanie fence we build — from cedar privacy to hybrid systems.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Family-Safe Designs</h3>
                      <p className="text-muted-foreground">
                        Secure fencing for kids and pets with no gaps at the bottom, self-closing gate hardware, and height options that keep your family safe in the backyard.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Greenbelt-Adjacent Experience</h3>
                      <p className="text-muted-foreground">
                        Many Klahanie lots border forest and trails. We build fences that integrate with natural boundaries, deter wildlife, and respect community greenbelts.
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
                What Klahanie Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "They handled the entire HOA process for us — submitted the drawings, material list, everything. The ARC approved it the first time. The cedar fence looks beautiful and our kids finally have a safe backyard. Highly recommend for Klahanie."
                  </p>
                  <p className="text-sm font-medium">— Michelle in Klahanie</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our backyard backs up to the Klahanie trail and we were getting deer in the garden constantly. They installed a hogwire fence with a cedar frame that keeps the wildlife out but still lets us enjoy the view. Great work and very professional."
                  </p>
                  <p className="text-sm font-medium">— Kevin in Klahanie</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Klahanie Sammamish fence" />

        {/* 6. Project Gallery */}
        <ServiceAreaPhotoGallery city="Sammamish" neighborhood="Klahanie" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Sammamish" neighborhood="Klahanie" />

        {/* 8. Klahanie-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Klahanie-Specific Fencing Considerations
              </h2>
              <div className="grid md:grid-cols-1 gap-4">
                <Link
                  href="/service-areas/sammamish/klahanie/hoa-approved-fencing"
                  className="block h-full"
                >
                  <Card className="p-5 hover:shadow-xl hover:border-primary hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full bg-gradient-to-br from-background to-primary/5 border-2">
                    <h3 className="font-semibold text-primary text-lg mb-2">
                      Klahanie HOA Approved Fencing
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Download HOA fence application, completion form, and design specs. Full ARC
                      process, submit instructions, and packages built to pass Klahanie Association
                      review.
                    </p>
                    <div className="mt-3 text-primary font-semibold text-sm flex items-center gap-1">
                      Learn More <span className="text-lg">→</span>
                    </div>
                  </Card>
                </Link>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Klahanie Association ARC Process</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every fence in Klahanie requires approval from the Architectural Review Committee before installation can begin. The ARC reviews design, materials, height, color, and placement. Incomplete or non-conforming submissions get rejected and add weeks to your timeline. We've navigated this process many times — our submission packages include elevation drawings, material specifications, stain/color samples, and a site plan showing fence placement relative to property lines and setbacks. First-time approval is the standard on every Klahanie project we handle.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Residents typically need to fill out an HOA fence application before work starts and a completion form after the project is finished. Download the official Klahanie forms below, then submit completed documents to{" "}
                    <a
                      href="mailto:architecturalcontrols@klahanie.com"
                      className="text-primary underline decoration-2 underline-offset-2"
                    >
                      architecturalcontrols@klahanie.com
                    </a>
                    . MyFence.com can prepare your ARC package and walk you through both steps.
                  </p>
                  <Card className="p-5 mt-5">
                    <h4 className="font-semibold mb-3">Download Klahanie HOA Fence Forms</h4>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/docs/hoa/klahanie-hoa-fence-application.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary underline decoration-2 underline-offset-2"
                        >
                          <FileDown className="h-4 w-4 shrink-0" aria-hidden />
                          Klahanie HOA Fence Application (before install)
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/hoa/klahanie-hoa-fence-completion-form.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary underline decoration-2 underline-offset-2"
                        >
                          <FileDown className="h-4 w-4 shrink-0" aria-hidden />
                          Klahanie HOA Fence Completion Form (after install)
                        </a>
                      </li>
                      <li>
                        <a
                          href="/docs/hoa/klahanie-fence-design-specifications.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary underline decoration-2 underline-offset-2"
                        >
                          <FileDown className="h-4 w-4 shrink-0" aria-hidden />
                          Klahanie Fence Design &amp; Specifications
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      Want the full ARC walkthrough? See our{" "}
                      <Link
                        href="/service-areas/sammamish/klahanie/hoa-approved-fencing"
                        className="text-primary underline decoration-2 underline-offset-2"
                      >
                        Klahanie HOA approved fencing guide
                      </Link>
                      .
                    </p>
                  </Card>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Family Safety & Pet Containment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Klahanie is a family neighborhood, and most fencing here is driven by the need to keep kids and pets safe in the backyard. We build fences with no ground gaps (critical for small dogs), self-closing gates with secure latching at both child and adult heights, and panel construction that eliminates toeholds for climbers. For families with both privacy and visibility needs, we can combine solid cedar sections with hogwire segments — full privacy where you need it, open sightlines where you don't.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Greenbelt & Trail Boundaries</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Klahanie properties back onto community trails, parks, or forested greenbelt. Fencing along these boundaries requires careful placement to stay within your property line and comply with any community setback requirements. We survey the boundary, verify property pins, and ensure your fence is positioned correctly. For trail-adjacent lots, hogwire provides containment while keeping the open, natural feel that Klahanie's greenbelts are designed for.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wildlife from Adjacent Forest</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Klahanie borders forested areas that are home to deer, coyotes, and occasional larger wildlife. Gardens and landscaping are frequent targets. Our fences use reinforced bottom rails and tight panel spacing to deter deer from jumping in or pushing through. For properties with persistent wildlife pressure, taller fence options and no-dig barriers at the base provide an additional line of defense while remaining HOA-compliant.
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
                Fence Installation Cost in Klahanie
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Quality fencing is an investment in your Klahanie property's safety and value. Below are typical ranges; exact pricing depends on linear footage, style, lot grading, and any tree or landscaping work required.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $42–$62 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $36–$52 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$72 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  HOA submission preparation is included at no extra cost. Get an exact quote for your Klahanie property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Klahanie property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Klahanie</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The most requested style in Klahanie. Board-on-board construction provides full privacy and a clean, neighborhood-appropriate look. Pre-stained options in natural tones pass ARC review smoothly.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Popular for Klahanie homes bordering trails and greenbelts. Cedar frame with black or galvanized mesh keeps pets and kids contained while preserving the open community feel.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Strongest option for busy Klahanie families. Aluminum panels in a cedar frame on steel posts — zero staining, maximum durability, and a modern look that complements Sammamish homes.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Klahanie Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Klahanie Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your property to measure the fence line, check grade, note trees and landscaping, and review greenbelt or trail boundaries. Fence Genius captures precise terrain data for custom panels.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & ARC Submission</h3>
                  <p className="text-muted-foreground">
                    Choose your style and materials. We prepare the complete Klahanie Association ARC submission — elevation drawings, material specs, color samples, and site plan — and handle the review process.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Once ARC approval is received, panels are precision-built at our facility from Fence Genius measurements. Materials are matched to your approved design specifications.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Klahanie Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew installs with care for your landscaping and neighboring properties. Pre-fabricated panels mean minimal noise and disruption. Most Klahanie projects complete in 1–3 days.
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
                Also Serving Nearby Sammamish Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Sammamish. If you're near Klahanie, we also serve Pine Lake, Beaver Lake, Sahalee, Trossachs, and East Sammamish.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/pine-lake">Pine Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah">Issaquah</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah-highlands">Issaquah Highlands</Link>
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
                Ready to Enhance Your Klahanie Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Sammamish's trusted fence specialists. We'll assess your property, discuss HOA requirements, and recommend the best solution for your family.
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

export default KlahaniePage;
