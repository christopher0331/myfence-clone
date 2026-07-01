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
  Droplets,
  Waves,
  Ruler,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";

const CANONICAL = "https://myfence.com/service-areas/renton/kennydale";
const META_TITLE = "Kennydale Fence Installation | Renton Lakefront | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Kennydale, Renton. Lake Washington lakefront fencing — craftsman spindle top privacy, cedar & hybrid systems built for moisture and wind. Free quotes. (253) 455-1885.";

const KennydalePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Kennydale, Renton",
    pageTitle: "Kennydale Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Kennydale, Renton?",
        answer:
          "Most residential fences in Kennydale follow City of Renton requirements for height, setbacks, and corner-lot visibility. Lakefront parcels may also have easements or shoreline-related setbacks to consider. MyFence.com reviews your lot before installation and helps you plan a compliant layout.",
      },
      {
        question: "What fence styles work best on Kennydale lakefront lots?",
        answer:
          "Craftsman spindle top privacy fences are popular on Kennydale streets where homeowners want curb appeal and solid backyard screening. Cedar picture frame and hybrid aluminum/cedar systems also perform well where Lake Washington moisture and wind exposure are a concern.",
      },
      {
        question: "How much does fence installation cost in Kennydale, Renton?",
        answer:
          "Kennydale fence installation commonly ranges from $44–$68 per linear foot depending on style, access, and lakefront exposure. Craftsman spindle top privacy typically runs $48–$62 per foot, cedar privacy $42–$58 per foot, and hybrid aluminum/cedar $54–$68 per foot. Side-yard slopes toward the lake can affect the final quote.",
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
                    Serving Kennydale, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Kennydale Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Lake Washington lakefront fencing for Kennydale — craftsman spindle top privacy, cedar, and hybrid systems built for waterfront moisture, wind, and the established character of this Renton neighborhood.
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
                  city="Kennydale, Renton"
                  state="WA"
                  radiusMiles={4}
                  zoom={13}
                  showBusinessInfo={false}
                />
              </div>
            </div>
          </div>
        </section>

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
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing for Kennydale&apos;s Lake Washington Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Kennydale sits on the western shore of Lake Washington between Renton and Bellevue, with mid-century homes, updated remodels, and lake-access lots that mix street-facing charm with backyard privacy goals. Many properties slope gently toward the water, and fence lines near the lake see more moisture, wind, and seasonal weather than inland Renton neighborhoods.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com serves Kennydale from our Renton-area coverage. We plan layouts around lakefront exposure, side-yard grade changes, and driveway or gate access using Fence Genius measurements so panels and posts are built for your actual lot — not a generic flat-yard template.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Kennydale Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lakefront-Aware Materials</h3>
                      <p className="text-muted-foreground">
                        We specify hardware and post details suited to Kennydale&apos;s Lake Washington exposure — where standard fasteners and untreated posts fail faster than inland installs.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Slope-Following Layouts</h3>
                      <p className="text-muted-foreground">
                        Stepped and racked panels keep fence lines tight to grade on Kennydale side yards that drop toward the lake without awkward gaps at the bottom rail.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Moisture-Conscious Footings</h3>
                      <p className="text-muted-foreground">
                        Shaded soil and lake-adjacent fence lines stay wet longer — we account for that in post depth, drainage, and Post-on-Pipe options where ground-contact rot is a concern.
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
                        Every Kennydale installation is backed by our craftsmanship warranty on materials and labor.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What Kennydale Homeowners Can Expect
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We wanted privacy without a plain solid wall facing the street. The spindle top craftsman fence looks great from the front and the backyard feels completely enclosed. They handled the slope toward the lake cleanly.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Diane in Kennydale</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Lake-side moisture had rotted our old posts in less than ten years. MyFence explained Post-on-Pipe and used hardware rated for the exposure. Communication was clear and the crew finished in two days.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Kennydale</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Craftsman Spindle Top Walkthrough
              </h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    See a finished craftsman spindle-top privacy fence on a Kennydale lakefront lot — street-facing spindle detail, solid cedar screening in the backyard, and hardware built for daily gate use near Lake Washington.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Craftsman spindle top designs are a strong fit in Kennydale where homeowners want architectural curb appeal without giving up privacy below the top rail.
                  </p>
                  <Link
                    href="/fence-styles/craftsman-style-fence"
                    className="inline-flex px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 rounded-full text-sm font-medium transition-colors"
                  >
                    View craftsman style fence &rarr;
                  </Link>
                </div>
                <div className="w-full max-w-[340px] mx-auto md:mx-0 md:ml-auto">
                  <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/1oVcsgarR6o?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                      title="Craftsman style cedar fence walkthrough on a Kennydale installation by MyFence.com"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Kennydale Renton fence" />

        <ServiceAreaPhotoGallery city="Renton" neighborhood="Kennydale" />

        <FeaturedProject city="Renton" neighborhood="Kennydale" />

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Kennydale-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Lake Washington Exposure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kennydale fence lines near the lake see more wind, spray, and humidity than properties farther inland. We recommend corrosion-resistant fasteners, quality cedar or hybrid panel systems, and post details that limit ground-contact rot on damp fence lines.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Street Appeal & Backyard Privacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Craftsman spindle top privacy fences are a strong fit on Kennydale lots where the front fence is visible from the street but homeowners still need solid screening in the backyard. The open spindle detail adds architectural interest without sacrificing privacy below the top rail.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Access, Gates & Lake Paths</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Kennydale properties need side-yard gates for garbage access, driveway entry, or paths toward the water. We plan gate widths and post reinforcement early so daily use does not stress the fence line over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in Kennydale
              </h2>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Craftsman spindle top privacy:</strong> $48–$62 per linear foot
                  </li>
                  <li>
                    <strong className="text-foreground">Cedar privacy / picture frame:</strong> $42–$58 per linear foot
                  </li>
                  <li>
                    <strong className="text-foreground">Hybrid aluminum/cedar:</strong> $54–$68 per linear foot
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Lakefront exposure and slope work can affect pricing. Get an exact quote with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Kennydale property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Kennydale</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Craftsman Spindle Top Privacy</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Decorative spindle detailing with solid privacy panels below — one of the most requested styles on Kennydale&apos;s lakefront streets.
                  </p>
                  <Link href="/fence-styles/craftsman-style-fence" className="text-primary text-sm font-medium hover:underline">
                    View craftsman styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Picture Frame Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Trim-cap cedar panels with a finished look on both sides — a durable choice for side yards that slope toward Lake Washington.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View picture frame styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Lower-maintenance option for damp lake-adjacent fence lines that see less direct sun and more weather exposure.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system &rarr;
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Kennydale Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Kennydale Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We review slope, lake exposure, gates, and property-line goals before recommending a layout for your Kennydale lot.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Material Selection</h3>
                  <p className="text-muted-foreground">
                    You choose the fence style and privacy level. We plan post placement and hardware for lakefront moisture and wind conditions.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Fence Genius Measurements</h3>
                  <p className="text-muted-foreground">
                    Digital measurements help us build panels to fit grade changes before installation begins.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Kennydale Installation</h3>
                  <p className="text-muted-foreground">
                    Most residential Kennydale projects complete in 1–3 days depending on length, slope, and gate work.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    We walk the finished fence with you and activate your MyFence.com warranty coverage.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Renton Areas
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-ridge-estates">Maple Ridge Estates</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/the-grove-at-spring-lake">The Grove at Spring Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newcastle">Newcastle</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Fence Your Kennydale Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Free on-site estimates available in Kennydale. Tell us about your lakefront exposure, slope, and privacy goals and we&apos;ll recommend the right fence design.
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

export default KennydalePage;
