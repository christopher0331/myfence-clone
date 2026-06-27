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
  Droplets,
  Mountain,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/bellevue/newcastle";
const META_TITLE = "Newcastle Fence Installation | Bellevue Area | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Newcastle near Bellevue. Cedar, hogwire & hybrid fencing for wooded hillside lots, drainage, and privacy. Free quotes. (253) 455-1885.";

const NewcastlePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Newcastle, Bellevue area",
    pageTitle: "Newcastle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Newcastle?",
        answer:
          "Most residential fences in Newcastle follow King County and City of Newcastle requirements depending on your parcel. Height, corner visibility, and easements can affect what is allowed. MyFence.com reviews your site and helps you plan a compliant layout before installation begins.",
      },
      {
        question: "What fence styles work best in Newcastle's wooded lots?",
        answer:
          "Cedar privacy and picture frame fences are popular for backyard screening on Newcastle's tree-lined lots. Hogwire with a cedar frame works well along wooded side yards where you want a boundary without blocking light. Hybrid aluminum/cedar systems are a strong fit on damp fence lines that stay shaded under the tree canopy.",
      },
      {
        question: "How much does fence installation cost in Newcastle?",
        answer:
          "Newcastle fence installation commonly ranges from $40–$68 per linear foot depending on style, slope, and access. Cedar privacy fencing typically runs $42–$58 per foot, hogwire $35–$50 per foot, and hybrid aluminum/cedar $52–$68 per foot. Hillside or root-heavy layouts can affect the final quote.",
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
              href="/service-areas/bellevue"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bellevue
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Newcastle, Bellevue area WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Newcastle Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fencing for Newcastle&apos;s wooded hillsides and established neighborhoods — cedar privacy, hogwire, and hybrid systems built for slopes, drainage, and the quiet residential character between Cougar Mountain and Lake Boren.
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
                  city="Newcastle"
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
                Fencing for Newcastle&apos;s Hillside Neighborhoods
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Newcastle sits on the slope between Lake Washington and Cougar Mountain, with a mix of mid-century homes, newer infill, and wooded lots that follow the terrain rather than flatten it. Many backyards border greenbelts, trails, or mature trees — which makes fence planning as much about drainage and root zones as it is about privacy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com serves Newcastle from our Bellevue-area coverage. We plan fence lines around Newcastle&apos;s wet soil, side-yard slopes, and tree-lined property edges using Fence Genius measurements so panels and posts are built for your actual lot — not a generic flat-yard layout.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Newcastle Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tree-Aware Installation</h3>
                      <p className="text-muted-foreground">
                        We plan post placement around root zones and mature canopy on Newcastle&apos;s wooded lots instead of forcing a straight line through sensitive areas.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Slope-Following Layouts</h3>
                      <p className="text-muted-foreground">
                        Stepped and racked panels keep fence lines tight to grade on Newcastle hillsides without awkward gaps at the bottom rail.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Drainage-Conscious Footings</h3>
                      <p className="text-muted-foreground">
                        Runoff from Cougar Mountain slopes and shaded soil stays wet longer — we account for that in post depth, drainage, and material selection.
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
                        Every Newcastle installation is backed by our craftsmanship warranty on materials and labor.
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
                What Newcastle Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our backyard drops off toward the greenbelt and the old fence had gaps everywhere. They mapped the slope first and the new cedar fence follows the grade cleanly. No more mud washing under the bottom rail.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Rachel in Newcastle</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We needed privacy on the side yard but didn&apos;t want to lose all the light from the trees. They walked the lot, explained hogwire vs solid cedar, and the finished fence looks like it belongs on the property.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Kevin in Newcastle</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Newcastle Bellevue fence" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Newcastle-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wooded Lot Boundaries</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Newcastle properties back up to greenbelts, trail corridors, or dense tree lines. Fence layout has to respect roots, drip lines, and the access paths you still need for maintenance. We plan those conflicts before installation day.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Cougar Mountain Drainage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Slopes above Newcastle send runoff through side yards and low corners of lots. Posts and bottom rails need clearance and stable footings so seasonal water does not undermine the fence line after the first few wet winters.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Privacy Near Coal Creek Parkway</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Homes closer to the Coal Creek Parkway corridor often want backyard screening from traffic noise and sightlines without building a wall-like perimeter. Cedar privacy along the rear and side yards, with more open styles toward wooded edges, is a common approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Newcastle</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Solid screening for backyards and side yards on Newcastle&apos;s tree-lined lots. A natural fit for the neighborhood&apos;s wooded setting.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Defines property lines along greenbelts and side yards while keeping airflow and filtered light under the tree canopy.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Lower-maintenance option for damp, shaded fence lines that see less direct sun through Newcastle&apos;s tree cover.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in Newcastle
              </h2>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Cedar privacy fence:</strong> $42–$58 per linear foot
                  </li>
                  <li>
                    <strong className="text-foreground">Hogwire fence:</strong> $35–$50 per linear foot
                  </li>
                  <li>
                    <strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$68 per linear foot
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Slope, root navigation, and longer runs along wooded boundaries can affect pricing. Get an exact quote with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Newcastle property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Newcastle Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Newcastle Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the fence line, review slope, drainage, trees, and gate locations before recommending a layout for your Newcastle property.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Material Selection</h3>
                  <p className="text-muted-foreground">
                    Choose cedar, hogwire, or hybrid options based on privacy goals, wooded boundaries, and how much maintenance you want long term.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Fence Genius Measurements</h3>
                  <p className="text-muted-foreground">
                    Digital measurements capture grade changes so panels and posts are planned accurately before build day.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Newcastle Installation</h3>
                  <p className="text-muted-foreground">
                    Most residential Newcastle projects complete in 1–3 days depending on length, slope, and tree access.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    We review the finished fence with you and activate your MyFence.com warranty coverage.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Bellevue Area Neighborhoods
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newport-hills">Newport Hills</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/somerset">Somerset</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/sherwood-forest">Sherwood Forest</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Fence Your Newcastle Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Free on-site estimates available in Newcastle. Tell us about your slope, trees, and privacy goals and we&apos;ll recommend the right fence design.
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

export default NewcastlePage;
