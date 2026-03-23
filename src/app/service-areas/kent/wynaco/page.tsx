import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Shield, Star, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

export const metadata: Metadata = {
  title: "Wynaco Kent Fence Installation | Steel Post Fencing | MyFence.com",
  description:
    "Fence installation in Wynaco, Kent WA. Steel post cedar fencing built for industrial-adjacent neighborhoods. View recent projects. Free quotes. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kent/wynaco",
  },
};

export default function WynacoKentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <Link
            href="/service-areas/kent"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Kent
          </Link>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-lg text-muted-foreground">Serving Wynaco, Kent WA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Wynaco Fence Installation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Steel post cedar fencing for Wynaco and the greater Kent area. Built to last in Kent's industrial-adjacent neighborhoods.
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
                city="Kent"
                state="WA"
                radiusMiles={5}
                zoom={12}
                showBusinessInfo={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
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

      {/* Introduction */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Steel Post Fencing in Wynaco, Kent
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Wynaco is an established Kent neighborhood where homeowners want fences that stand up to long-term wear without constant maintenance. Our steel post cedar fencing system is a popular choice here—combining the natural look of cedar with the structural durability of steel posts set in concrete, eliminating the ground-contact rot that takes out traditional wood post fences over time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              MyFence.com has completed multiple fence projects in Wynaco and surrounding Kent neighborhoods. We use Fence Genius technology to measure every lot precisely, so panels fit cleanly and posts are spaced consistently across your full fence line.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <ServiceAreaPhotoGallery
        city="Kent"
        neighborhood="Wynaco"
        forceGrid={true}
        title="Recent Steel Post Fence Installations in Wynaco"
        description="Photos from recent fence projects completed in the Wynaco neighborhood of Kent, WA."
      />

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Wynaco Homeowners Choose MyFence.com
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Steel Post Durability</h3>
                <p className="text-muted-foreground">
                  Steel posts set in concrete don't rot, warp, or shift over time. Combined with cedar panels, you get the best of both materials—natural wood look with structural longevity.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fence Genius Precision</h3>
                <p className="text-muted-foreground">
                  Our proprietary measurement technology maps your fence line exactly. Panels are manufactured off-site to spec, so installation day is clean and efficient—no gaps, no adjustments.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                <p className="text-muted-foreground">
                  Full craftsmanship warranty on all materials and labor. Every Kent fence we build is backed by our standard warranty from day one.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Local Kent Experience</h3>
                <p className="text-muted-foreground">
                  We know Kent's soil conditions, permit requirements, and neighborhood standards. Our crew works efficiently and cleans up completely after every install.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Tool */}
      <VirtualQuoteTool fenceStyleName="Wynaco Kent fence" />

      {/* Nearby Areas */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Also Serving Nearby Areas</h2>
            <p className="text-muted-foreground mb-8">
              We install fences throughout Kent and surrounding South King County communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/service-areas/kent">Kent overview</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/service-areas/renton">Renton</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/service-areas/covington">Covington</Link>
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

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get a Fence in Wynaco?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Same-day estimates available in Kent. Get a free on-site quote and we'll bring Fence Genius to measure your lot precisely.
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
  );
}
