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
  TreePine,
  Mountain,
  Ruler,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";

const CANONICAL = "https://myfence.com/service-areas/maple-valley/ravensdale";
const META_TITLE = "Ravensdale Fence Installation | Maple Valley | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Ravensdale near Maple Valley. Cedar picture frame, privacy & hogwire fencing for wooded rural lots. Free quotes. (253) 455-1885.";

const RavensdalePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Ravensdale, Maple Valley",
    pageTitle: "Ravensdale Maple Valley Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Ravensdale?",
        answer:
          "Ravensdale is unincorporated King County. Residential fences up to 6 feet tall generally do not require a building permit, but setbacks from property lines, driveways, and critical areas still apply. Lots near streams or steep slopes may have additional review requirements. MyFence.com checks your parcel conditions before installation and helps you plan a compliant layout.",
      },
      {
        question: "What fence styles work best on Ravensdale's wooded lots?",
        answer:
          "Cedar picture frame and standard privacy fences are popular on Ravensdale's larger wooded lots because they provide solid screening and a finished look on both sides. Hogwire with a cedar frame works well along wooded boundaries where homeowners want pet containment without blocking light. Hybrid aluminum/cedar systems are a strong option on damp fence lines that stay shaded most of the year.",
      },
      {
        question: "How much does fence installation cost in Ravensdale?",
        answer:
          "Ravensdale fence installation commonly ranges from $38–$68 per linear foot depending on style, access, and terrain. Cedar privacy fencing typically runs $40–$58 per foot, hogwire $35–$50 per foot, and hybrid aluminum/cedar $50–$68 per foot. Longer rural runs and slope work can affect the final quote.",
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
                    Serving Ravensdale, Maple Valley WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Ravensdale Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fencing for Ravensdale&apos;s wooded rural lots east of Maple Valley — cedar picture frame, privacy, and hogwire systems built for damp soil, tree lines, and the quiet foothills character of the area.
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
                  city="Maple Valley"
                  state="WA"
                  radiusMiles={6}
                  zoom={11}
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
                Fencing for Ravensdale&apos;s Wooded Foothills Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ravensdale sits in the Maple Valley foothills with a mix of established homes, larger wooded lots, and a rural pace that feels a step removed from suburban Maple Valley. Many properties back up to trees, seasonal wetlands, or open green space, which makes fence planning more than a straight line on a flat yard.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com designs Ravensdale fences around real site conditions — grade changes, tree roots, damp soil, and the privacy goals that matter on semi-rural lots. Our Fence Genius measurement process captures the fence line before panels are built so installation day stays efficient and the finished fence follows the property naturally.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Ravensdale Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Wooded-Lot Planning</h3>
                      <p className="text-muted-foreground">
                        We map tree lines, root zones, and access routes before setting posts so your fence fits the lot without unnecessary tree damage.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Slope-Aware Layouts</h3>
                      <p className="text-muted-foreground">
                        Ravensdale lots often include gentle grade changes. Fence Genius helps us plan stepped or racked panels that stay tight to the ground.
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
                        Every Ravensdale installation is backed by our craftsmanship warranty on materials and labor.
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
                        Off-site panel planning reduces guesswork on longer rural fence runs and keeps transitions cleaner at gates and corners.
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
                What Ravensdale Homeowners Can Expect
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot backs up to trees and the old fence line was a mess on the slope. They measured everything first and the new picture frame fence follows the grade cleanly. Looks great from the house and the driveway.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Mark in Ravensdale</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We needed privacy without making the yard feel boxed in. The crew recommended cedar picture frame along the house side and explained drainage near a low spot. Solid communication and a clean install.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Elena in Ravensdale</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Ravensdale Maple Valley fence" />

        <ServiceAreaPhotoGallery city="Maple Valley" neighborhood="Ravensdale" />

        <FeaturedProject city="Maple Valley" neighborhood="Ravensdale" />

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ravensdale-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Damp Soil & Tree Shade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ravensdale fence lines often stay wet longer under tree canopy and after heavy rain. We recommend materials and post details that handle moisture — including Post-on-Pipe where ground-contact rot is a concern.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Larger Rural Fence Runs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Ravensdale properties need longer perimeter fencing than typical suburban Maple Valley lots. Fence Genius helps us plan panel lengths and gate placement before build day so the crew stays efficient on bigger jobs.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Privacy Near Wooded Boundaries</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cedar picture frame and privacy fences are common where homeowners want screening near driveways, patios, or neighboring tree lines while keeping a natural look that fits the foothills setting.
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
                Fence Installation Cost in Ravensdale
              </h2>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Cedar privacy / picture frame:</strong> $40–$58 per linear foot
                  </li>
                  <li>
                    <strong className="text-foreground">Hogwire fence:</strong> $35–$50 per linear foot
                  </li>
                  <li>
                    <strong className="text-foreground">Hybrid aluminum/cedar:</strong> $50–$68 per linear foot
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Slope, access, and longer rural runs can affect pricing. Get an exact quote with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Ravensdale property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Ravensdale</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Picture Frame Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A finished cedar look with trim-cap detail — one of the most requested styles on Ravensdale&apos;s wooded residential lots.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View picture frame styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Useful along wooded edges where homeowners want a boundary and pet control without a fully closed-in feel.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Lower-maintenance option for damp, shaded fence lines that see less direct sun through the tree canopy.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Ravensdale Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Ravensdale Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We review slope, access, tree lines, gates, and drainage before recommending a layout for your Ravensdale property.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Material Selection</h3>
                  <p className="text-muted-foreground">
                    You choose the fence style and privacy level. We plan post placement around roots, low spots, and property-line goals.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Fence Genius Measurements</h3>
                  <p className="text-muted-foreground">
                    Digital measurements help us build panels to fit grade changes and longer rural runs before installation begins.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Ravensdale Installation</h3>
                  <p className="text-muted-foreground">
                    Most residential Ravensdale projects complete in 1–3 days depending on length, slope, and access.
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
                Also Serving Nearby Maple Valley Areas
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley">Maple Valley overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/barklay-woods">Barklay Woods</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/maple-woods">Maple Woods</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/black-diamond">Black Diamond</Link>
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
                Ready to Fence Your Ravensdale Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Free on-site estimates available in Ravensdale. Tell us about your slope, trees, and privacy goals and we&apos;ll recommend the right fence design.
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

export default RavensdalePage;
