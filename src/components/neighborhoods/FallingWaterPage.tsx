"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft, MapPin, Phone, Star, FileDown } from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import OptimizedImage from "@/components/OptimizedImage";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

interface FallingWaterPageProps {
  canonical?: string;
}

const FallingWaterPage = ({
  canonical = "https://myfence.com/service-areas/bonney-lake/falling-water",
}: FallingWaterPageProps) => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical,
    neighborhoodName: "Falling Water, Bonney Lake",
    pageTitle: "Falling Water Fence Installation",
    description:
      "Professional fence installation in Falling Water, Bonney Lake. HOA-aligned cedar, hogwire, and hybrid fencing built for hillside lots and family backyards.",
    faqItems: [
      {
        question: "Do I need HOA approval to build a fence in Falling Water?",
        answer: "If your Falling Water section has design rules, we help align fence height, style, and finish and can prepare any submission needed. That preparation reduces approval delays and keeps your project moving.",
      },
      {
        question: "What fence styles work best in Falling Water's mixed elevations?",
        answer: "Cedar privacy, hogwire, and hybrid aluminum/cedar all work well. We use Fence Genius to map grade changes and build panels that follow terrain. Stepped or racked panels handle slope; we recommend based on your lot and drainage.",
      },
      {
        question: "How much does fence installation cost in Falling Water, Bonney Lake?",
        answer: "Falling Water fence installation typically runs $44–$66 per linear foot depending on style and slope. Use our Virtual Quote Tool for an estimate, then we'll provide exact pricing after an on-site measurement.",
      },
      {
        question: "How long does fence installation take in Falling Water?",
        answer: "Most Falling Water projects complete in 1–2 days on-site. We fabricate panels in advance from Fence Genius measurements, so install day is efficient with minimal disruption.",
      },
    ],
  });

  return (
    <>
      <Seo
        title="Falling Water Fence Installation | Bonney Lake Neighborhood Experts"
        description="Professional fence installation in Falling Water, Bonney Lake. HOA-aligned cedar, hogwire, and hybrid fencing built for hillside lots and family backyards."
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
                  <span className="text-lg text-muted-foreground">Serving Falling Water, Bonney Lake WA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Falling Water Fence Installation</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence solutions designed for Falling Water's mixed elevations, HOA expectations, and active household needs.
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
                <GoogleBusinessMap city="Falling Water" state="Washington" radiusMiles={5} zoom={11} showBusinessInfo={true} />
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
              <h2 className="text-3xl md:text-4xl font-bold">Built for Falling Water Lots and Lifestyles</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Falling Water offers a blend of established homes, newer phases, and lots with subtle-to-steep grade shifts. That variety makes one-size-fits-all fence plans a poor fit. We take detailed measurements, map each transition point, and design panel layouts that look clean from the street and secure from the backyard.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Homeowners here usually want a fence that can handle rain-heavy winters, occasional wind exposure, and daily family use without high maintenance. Our cedar privacy, hogwire, and hybrid aluminum systems are selected specifically for those conditions, with finishes and details that align with neighborhood character.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Falling Water Homeowners Choose MyFence.com</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Neighborhood-Focused Planning</h3>
                      <p className="text-muted-foreground">We design every project around your exact lot layout, drainage flow, and sightline goals instead of forcing a standard template.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Efficient, Predictable Installations</h3>
                      <p className="text-muted-foreground">Our Fence Genius workflow allows custom panels to be prepared before install day, helping crews finish quickly with minimal disruption.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Long-Term Confidence</h3>
                      <p className="text-muted-foreground">Every installation is backed by a {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty for peace of mind after the project is complete.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Material Guidance That Makes Sense</h3>
                      <p className="text-muted-foreground">We help you choose a fence style that balances privacy, appearance, and upkeep based on how your yard is actually used.</p>
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
                What Falling Water Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our yard has a pretty good slope and we needed something that would follow it. MyFence.com measured everything and the panels fit perfectly. The crew was fast and left the place clean. Very happy."
                  </p>
                  <p className="text-sm font-medium">— Tom in Falling Water</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We wanted a fence for the kids and dog that would still look good from the street. They suggested cedar with a stain that matches the neighborhood. HOA had no issues and the warranty is a nice bonus."
                  </p>
                  <p className="text-sm font-medium">— Rachel in Falling Water</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Falling Water Bonney Lake fence" />

        {/* Project Gallery */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Work in Falling Water & Bonney Lake
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We've completed fence projects throughout Falling Water and the Bonney Lake area—cedar privacy, hogwire, and hybrid installations built for mixed elevations and family backyards.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                      alt="6' cedar privacy fence installation in Falling Water, Bonney Lake"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">6' Cedar Privacy</h3>
                    <p className="text-sm text-muted-foreground">Falling Water hillside lot</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/6_%20Black%20Hogwire/IMG_7356.webp?updatedAt=1762037826604"
                      alt="Hogwire with cedar frame fence in Falling Water"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hogwire with Cedar Frame</h3>
                    <p className="text-sm text-muted-foreground">View-friendly perimeter</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png"
                      alt="Cedar aluminum hybrid fence in Falling Water"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hybrid Aluminum/Cedar</h3>
                    <p className="text-sm text-muted-foreground">Low-maintenance family yard</p>
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
                Featured Falling Water Installation
              </h2>
              <Card className="p-6 md:p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <OptimizedImage
                    src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                    alt="Featured Falling Water installation: cedar fence, Bonney Lake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Falling Water family needed a backyard fence that followed a moderate slope and met neighborhood expectations. We installed a 6' cedar privacy fence with stepped panels, marine-grade stainless fasteners, and pressure-treated posts. The project included a gate for side-yard access and careful alignment to preserve drainage. Total linear footage was 175 feet; installation was completed in two days. The fence is under our {WARRANTY_CONSTANTS.YEARS}-year warranty and built for Bonney Lake's wet winters.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Style:</strong> Cedar privacy, stepped · <strong>Location:</strong> Falling Water, Bonney Lake
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Falling Water–Specific Fencing Considerations</h2>
              <Link
                href="/service-areas/bonney-lake/falling-water/hoa-approved-fencing"
                className="block h-full"
              >
                <Card className="p-5 hover:shadow-xl hover:border-primary hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full bg-gradient-to-br from-background to-primary/5 border-2">
                  <h3 className="font-semibold text-primary text-lg mb-2">
                    Falling Water HOA Approved Fencing
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Download our ACC submission checklist, learn the architectural review timeline,
                    and get hillside installs built for Falling Water lots.
                  </p>
                  <div className="mt-3 text-primary font-semibold text-sm flex items-center gap-1">
                    Learn More <span className="text-lg">→</span>
                  </div>
                </Card>
              </Link>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Falling Water Elevation Changes and Drainage Paths</h3>
                  <p className="text-muted-foreground leading-relaxed">Many Falling Water yards include transitions between flat usable space and sloped edges. We engineer post spacing and panel alignment to follow terrain cleanly while preserving drainage movement during wet months.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Falling Water HOA and Neighborhood Consistency</h3>
                  <p className="text-muted-foreground leading-relaxed">If your section has design rules, we help align fence height, style, and finish before work begins. That preparation reduces approval delays and keeps your project moving.</p>
                  <Card className="p-5 mt-5">
                    <h4 className="font-semibold mb-3">Download Falling Water HOA Fence Checklist</h4>
                    <a
                      href="/docs/hoa/falling-water-hoa-fence-submission-checklist.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary underline decoration-2 underline-offset-2"
                    >
                      <FileDown className="h-4 w-4 shrink-0" aria-hidden />
                      Falling Water HOA Fence Submission Checklist
                    </a>
                    <p className="text-sm text-muted-foreground mt-4">
                      Want the full ACC walkthrough? See our{" "}
                      <Link
                        href="/service-areas/bonney-lake/falling-water/hoa-approved-fencing"
                        className="text-primary underline decoration-2 underline-offset-2"
                      >
                        Falling Water HOA approved fencing guide
                      </Link>
                      .
                    </p>
                  </Card>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Falling Water Family and Pet-Friendly Layouts</h3>
                  <p className="text-muted-foreground leading-relaxed">Whether you need full privacy near patios or view-friendly fencing along open edges, we configure gates and panel heights to support everyday use by kids, pets, and guests.</p>
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
                Fence Installation Cost in Falling Water
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fencing is an investment in your Falling Water property. Below are typical ranges; your exact price depends on linear footage, style, and slope.
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
                  Slope and terrain may affect cost. Get an exact quote for your Falling Water property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Falling Water property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Fence Styles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Falling Water</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The go-to for Falling Water backyards. Stepped or racked panels follow your grade; board-on-board adds privacy. Stainless hardware for Bonney Lake's wet winters.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Defines the property without blocking views. Cedar frame with black or galvanized mesh. Fits mixed-elevation lots and family-friendly layouts.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Low-maintenance for busy Falling Water families. Black aluminum panels in a cedar frame; no staining. Holds up to rain and wind.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Falling Water Fencing</h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">See how our crew installs clean, durable fences in Bonney Lake neighborhoods like Falling Water with detailed layout prep and efficient on-site execution.</p>
                  <p className="text-muted-foreground leading-relaxed">From privacy-focused backyards to more open perimeter designs, we tailor each build to match the property and goals of the homeowner.</p>
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/gzAzQLdfqDA?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title="Falling Water Fencing"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Falling Water Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Falling Water Site Assessment</h3>
                  <p className="text-muted-foreground">We evaluate grade changes, access points, drainage, and your privacy priorities. Fence Genius captures precise measurements for custom panels.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Falling Water Design & HOA Submission</h3>
                  <p className="text-muted-foreground">Choose cedar, hogwire, or hybrid systems. We prepare any HOA or neighborhood documentation and get your approval before fabrication.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">Panels are built off-site from Fence Genius measurements so installation is faster and cleaner on your property.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Falling Water Installation</h3>
                  <p className="text-muted-foreground">Our crew completes the build with careful alignment, secure post setting, and attention to curb appeal. Most projects finish in 1–2 days.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">We review the finished fence together and activate your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty.</p>
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
                We install fences throughout the Bonney Lake area. If you're in Falling Water, we also serve Tehaleh, Mountain Creek, Downtown Bonney Lake, and Lake Tapps.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake">Bonney Lake overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/lower-tehaleh">Tehaleh</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/mountain-creek">Mountain Creek</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/downtown-bonney-lake">Downtown Bonney Lake</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Falling Water Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">Same-day estimates available in Falling Water. Book a free consultation with our Bonney Lake fencing team and get a clear plan for your project.</p>
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

export default FallingWaterPage;
