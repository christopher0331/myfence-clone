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
  Ruler,
  Fence,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";

const CANONICAL = "https://myfence.com/service-areas/auburn/christopher";
const META_TITLE = "Christopher Auburn Fence Installation | Craftsman Privacy | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Christopher, Auburn. Craftsman spindle-top privacy, cedar picture frame & hybrid fencing for suburban lots. Free quotes. (253) 455-1885.";

const ChristopherPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Christopher, Auburn",
    pageTitle: "Christopher Auburn Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Christopher, Auburn?",
        answer:
          "Most residential fences in Auburn follow City of Auburn height and setback rules. Corner lots and properties near easements may have additional visibility requirements. MyFence.com reviews your parcel and helps you plan a compliant layout before installation.",
      },
      {
        question: "What fence styles are popular in the Christopher area?",
        answer:
          "Craftsman spindle-top privacy fences are a strong fit where homeowners want street-facing detail with solid screening below the top rail. Cedar picture frame and board-on-board privacy fences are also common on Auburn suburban lots. Hybrid aluminum/cedar systems work well on fence lines that stay shaded and damp through the wet season.",
      },
      {
        question: "How much does fence installation cost in Christopher, Auburn?",
        answer:
          "Christopher-area fence installation commonly ranges from $42–$68 per linear foot depending on style and access. Craftsman spindle top privacy typically runs $48–$62 per foot, cedar privacy $42–$58 per foot, and hybrid aluminum/cedar $54–$68 per foot. Grade changes and gate work can affect the final quote.",
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
              href="/service-areas/auburn"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Auburn
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Christopher, Auburn WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Christopher Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Craftsman spindle-top privacy and cedar fencing for Christopher and south Auburn — built for suburban lots, driveway gates, and the street-facing curb appeal homeowners want on established neighborhoods.
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
                  city="Auburn, WA"
                  state="WA"
                  radiusMiles={5}
                  zoom={12}
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
                Fencing for Christopher&apos;s Auburn Suburban Lots
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The Christopher area sits in south Auburn with mature subdivisions, level front yards, and fence lines that are often visible from the street. Homeowners here typically want privacy in the backyard without installing a plain stockade wall along the front property line.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com serves Christopher from our Kent–Auburn coverage area. We use Fence Genius measurements to plan craftsman spindle-top runs, gate locations, and grade changes before panels are built — so installation day stays efficient on typical suburban lots.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Christopher Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Fence className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Craftsman Street Appeal</h3>
                      <p className="text-muted-foreground">
                        Spindle-top privacy fences add architectural detail on front and side fence lines while keeping solid screening below the top rail.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fence Genius Precision</h3>
                      <p className="text-muted-foreground">
                        Digital layout captures post spacing and panel lengths before build day so the crew installs a straight, consistent fence line.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Suburban Lot Experience</h3>
                      <p className="text-muted-foreground">
                        We plan for driveway gates, side-yard access, and neighbor sight lines common on Auburn residential streets.
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
                        Every Christopher installation is backed by our craftsmanship warranty on materials and labor.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Christopher Auburn fence" />

        <ServiceAreaPhotoGallery city="Auburn" neighborhood="Christopher" />

        <FeaturedProject city="Auburn" neighborhood="Christopher" />

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Christopher-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Front-Yard Visibility</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Christopher lots place the primary fence line along the street or driveway approach. Craftsman spindle-top designs balance curb appeal with the privacy homeowners need behind the house.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Driveway & Side-Yard Gates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Garbage access, RV parking, and side-yard entry are common gate locations on Auburn suburban properties. We size gates and reinforce posts early so daily use does not stress the fence over time.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">South Auburn Soil & Drainage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Winter rain and clay-heavy soil in parts of south Auburn can keep fence posts wet at grade. Pre-stained cedar, quality fasteners, and Post-on-Pipe footings help fences last longer in those conditions.
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
                Fence Installation Cost in Christopher
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
                  Gate work and grade changes can affect pricing. Get an exact quote with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Christopher property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Christopher</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Craftsman Spindle Top Privacy</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Decorative spindle detailing with solid cedar panels below — a top request on Auburn streets where the fence faces the road.
                  </p>
                  <Link href="/fence-styles/craftsman-style-fence" className="text-primary text-sm font-medium hover:underline">
                    View craftsman styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Picture Frame Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Trim-cap cedar panels with a finished look on both sides — durable for side yards and backyard perimeters.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View picture frame styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Lower-maintenance option for long fence lines that see less sun and more seasonal moisture.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system &rarr;
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby South King County
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/auburn">Auburn overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kent">Kent</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/federal-way">Federal Way</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton</Link>
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
                Ready to Fence Your Christopher Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Free on-site estimates available in Christopher and south Auburn. Tell us about your privacy goals, gate needs, and street-facing design preferences.
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

export default ChristopherPage;
