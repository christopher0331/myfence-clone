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
  Volume2,
  Droplets,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
import {
  buildNeighborhoodStructuredData,
  type NeighborhoodFaqItem,
} from "@/components/neighborhoods/structuredData";
import NeighborhoodFaqSection from "@/components/neighborhoods/NeighborhoodFaqSection";

const CANONICAL = "https://myfence.com/service-areas/redmond/willows-rose-hill";
const META_TITLE =
  "Willows/Rose Hill Redmond Fence Installation | Mixed Lots & Willows Road | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Willows/Rose Hill, Redmond, WA. Cedar, hogwire & hybrid fencing for mixed lots between Willows Road NE and the Kirkland line. Free quotes. (253) 455-1885.";

const WILLOWS_ROSE_HILL_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Willows/Rose Hill, Redmond?",
    answer:
      "The City of Redmond generally does not require a building permit for residential fences under eight feet, but zoning still controls height and setbacks. Front-yard fencing is typically limited to four feet; side and rear yards are usually allowed up to six feet. Corner lots on Willows Road NE, 132nd Avenue NE, NE 90th Street, and NE 80th Street have sight-distance triangle rules that can shorten a run near the sidewalk. Parcels that sit in a Willows Creek or wetland overlay may need extra review even when height is ordinary. A few plats ask for drawings even when the city does not. MyFence.com checks the parcel, any CC&Rs, and Redmond Development Services rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Willows/Rose Hill's mix of housing and traffic corridors?",
    answer:
      "Six-foot cedar privacy is the usual choice on interior streets that sit close to a neighbor or take evening traffic from Willows Road NE or 132nd Avenue NE. On larger lots that open toward the Sammamish River valley or keep a stand of firs along a rear line, hogwire in a cedar frame screens pets without boxing in the canopy. Hybrid aluminum-and-cedar systems suit households that would rather skip staining on a weekday commute toward Microsoft or the 2 Line. Fence Genius maps grade, roots, and the occasional creek setback so panels follow the lot instead of leaving a gap a dog can use.",
  },
  {
    question: "How much does fence installation cost in Willows/Rose Hill, Redmond?",
    answer:
      "Willows/Rose Hill fence installation typically runs $42–$66 per linear foot for six-foot cedar privacy, $36–$55 for hogwire with a cedar frame, and $52–$74 for hybrid aluminum/cedar. Hand-digging around mature roots, extra gates for side-yard access off 132nd or NE 90th, creek-buffer setbacks, and plat drawing packages can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Willows/Rose Hill?",
    answer:
      "Most Willows/Rose Hill residential projects finish in one to three working days after any city or plat paperwork is complete. Pre-fabricated panels cut on-site time. Hand-digging near older firs, stepped posts on the downhill side toward the river valley, tight side yards between 1970s–1990s homes, and staging around Willows Road commute traffic are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Willows/Rose Hill?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Redmond does not require their signature. Lots along 132nd Avenue NE sit on the Kirkland city line, so the pin can fall between two cities and two sets of street trees. If your street has a small plat association, the architectural contact may want both owners listed on the application. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which stretch.",
  },
];

const WILLOWS_ROSE_HILL_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Willows Run Golf Complex",
    url: "https://www.willowsrun.com/",
    description:
      "The 45-hole public complex at 10402 Willows Road NE — two full courses, a short nine, and a family putting course. Saturday tee times fill the corridor parking; weekdays the fairways are the open backdrop for lots that sit just west of the road.",
  },
  {
    name: "Redmond Watershed Preserve",
    url: "https://www.redmond.gov/facilities/facility/details/Watershed-Preserve-56",
    description:
      "An 800-acre trail system off Novelty Hill Road, a short drive north of the neighborhood. Soft-surface loops for hiking and bikes give Willows/Rose Hill households a woods outing when the river-valley fields are booked for games.",
  },
  {
    name: "Sammamish River Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/sammamish-river-trail",
    description:
      "The paved King County path along the river, reachable from the east edge of the neighborhood without getting on Redmond Way. Morning bike commutes toward downtown and evening walks share the same corridor that skips Willows Road traffic.",
  },
  {
    name: "Downtown Redmond Station",
    url: "https://www.soundtransit.org/ride-with-us/stops-stations/downtown-redmond-station",
    description:
      "The 2 Line terminus at 16620 NE 76th Street. Willows/Rose Hill riders usually drop south on 132nd or cut across NE 80th or NE 90th instead of fighting the parkway all the way around Town Center.",
  },
  {
    name: "Farrel-McWhirter Park",
    url: "https://www.redmond.gov/288/Farrel-McWhirter-Park",
    description:
      "A working-farm park a few minutes east toward Avondale, with trails, farm animals, and seasonal youth programs. A quieter weekend stop when you want pasture and woods instead of golf-course parking or river-valley soccer lots.",
  },
];

const WillowsRoseHillPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Willows/Rose Hill, Redmond",
    pageTitle: "Willows/Rose Hill Redmond Fence Installation",
    description: META_DESCRIPTION,
    faqItems: WILLOWS_ROSE_HILL_FAQS,
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
              href="/service-areas/redmond"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Redmond
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Willows/Rose Hill, Redmond WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Willows/Rose Hill Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence work for Redmond&apos;s northwest corridor — cedar that
                  quiets Willows Road NE, hogwire on larger valley-edge lots, and
                  hybrid systems for mixed streets between 132nd Avenue NE and
                  downtown.
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
                  city="Willows/Rose Hill, Redmond"
                  state="Washington"
                  radiusMiles={4}
                  zoom={13}
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
                Mixed Streets Between the Kirkland Line and Willows Road
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Willows/Rose Hill is Redmond&apos;s northwest neighborhood — a
                band of 1970s–1990s homes, later infill, and a few larger lots
                stacked between 132nd Avenue NE on the Kirkland line and Willows
                Road NE on the east. NE 80th Street and NE 90th Street carry
                school and commute traffic across the grid; Rose Hill Middle
                School sits on the south edge at 13505 NE 75th Street. There is
                no single master association. Some cul-de-sacs have small plat
                committees, many interior streets do not, and a handful of
                parcels drain toward Willows Creek or the Sammamish River
                valley. The design conversation starts with the lot: starter
                ranch, two-story rebuild, or a wider yard that still wants the
                corridor quieted.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across
                Willows/Rose Hill, including privacy runs that face Willows Road
                and open hogwire on lots that step toward the river. Fence
                Genius captures grade, roots, and any creek or wetland overlay
                before a post goes in the ground, so panels arrive cut for the
                actual line instead of getting ripped down on a side yard that
                already has little room to stage lumber. The goal is a fence
                that belongs on your street — not a one-size panel dropped onto
                a corridor lot.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Willows/Rose Hill Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Flexible Designs for Mixed Housing
                      </h3>
                      <p className="text-muted-foreground">
                        Starter lots, 1990s two-stories, and wider valley-edge
                        parcels sit on the same street grid. We match height,
                        style, and gate layout to the house you have — not a
                        single HOA template copied from Education Hill.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {WARRANTY_CONSTANTS.YEARS}-Year Workmanship Warranty
                      </h3>
                      <p className="text-muted-foreground">
                        Full coverage on materials and labor, including hardware
                        chosen for the extra damp that sits in creek-side corners
                        and north-facing side yards. We stand behind the install
                        through Redmond winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Willows Road Noise Buffering
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar on the corridor side of a lot cuts evening
                        traffic from Willows Road NE and 132nd without turning
                        the backyard into a box. We mark where a full panel
                        helps and where an open run still makes sense.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Creek and Overlay Awareness
                      </h3>
                      <p className="text-muted-foreground">
                        Willows Creek and wetland buffers show up on more
                        parcels here than on a flat Grass Lawn interior lot. We
                        flag overlays before digging so a post hole does not
                        land in a setback the city will later ask you to move.
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
                What Willows/Rose Hill Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit one block off Willows Road and wanted real
                    privacy without looking like a commercial lot. The cedar
                    run faces the corridor, the side yards stay lower, and they
                    finished before the weekday commute stacked on 90th.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Willows/Rose Hill</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our pin is basically on 132nd at the Kirkland line.
                    They walked both sides, marked the line with us and the
                    neighbor, and hand-dug around the firs. Gates latch well
                    after school at Rose Hill Middle.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Evan in Willows/Rose Hill</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Small plat committee, not a big HOA packet. They
                    still sent a simple drawing and stain note that the board
                    signed off on the first pass. Appreciate not treating it
                    like downtown mixed-use.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Nora in Willows/Rose Hill</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Willows/Rose Hill Redmond fence" />

        {/* 6. Photo Gallery — nearby Redmond installs until neighborhood-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Redmond"
          title="Recent Fence Work Near Willows/Rose Hill"
          description="These photos are from nearby Redmond jobs, including Grass Lawn and Education Hill. Same crew, same materials, and the same Fence Genius process we use on Willows Road and 132nd Avenue lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Redmond" neighborhood="Willows/Rose Hill" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Willows/Rose Hill-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Willows/Rose Hill Lot Mix and Grade
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Interior streets west of Willows Road are mostly gentle, but
                    lots that drop toward the Sammamish River valley or sit
                    against a cut near NE 90th need stepped panels. A fence
                    built as one long level line either buries the bottom rail
                    or leaves a gap a small dog can use. We measure with Fence
                    Genius, then step or rack bays so the top stays even from
                    the street and the bottom tracks the lawn.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Willows/Rose Hill Traffic Noise and Privacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Willows Road NE carries office and golf traffic all day;
                    132nd Avenue NE is the Kirkland commute spine. Solid cedar
                    on those faces quiets the yard without requiring a wall
                    around the entire lot. Interior streets near Rose Hill
                    Middle usually want full-height privacy for after-school
                    play. We walk the lot and mark where a solid panel earns
                    its keep and where hogwire still belongs.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Willows Creek Moisture and Soil
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Creek-adjacent parcels and north-facing side yards hold
                    moisture longer than a dry Grass Lawn interior lot. Raw
                    cedar grays fast in those corners, and cheap fasteners start
                    showing rust streaks. We spec pre-stained Western Red Cedar
                    and stainless or hot-dipped hardware, and we talk through
                    steel posts where ground contact stays wet. If a wetland or
                    stream overlay sits on the survey, we flag it before the
                    first hole.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Willows/Rose Hill Plats, Trees, and City Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some cul-de-sacs have small architectural committees; many
                    older streets do not. We still follow Redmond height rules
                    — six feet in most side and rear yards, four feet in the
                    front setback — and we plan post holes around the firs and
                    cedars that line 132nd and the NE 80th corridor. Border lots
                    on the Kirkland line get an extra pin check so the fence
                    does not drift onto the wrong side of the city limit.
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
                Fence Installation Cost in Willows/Rose Hill
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Willows/Rose Hill fence is an investment in a mixed
                residential lot — sometimes a quiet interior street, sometimes a
                corridor that needs screening. Slope, gates, and moisture
                details move the number. These are typical ranges; your on-site
                measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $42–$66 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $36–$55 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $52–$74 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Stepped runs toward the river valley and hand-digging near
                  mature trees may add 10–15%. Custom gates are itemized
                  separately. Get an exact quote for your Willows/Rose Hill
                  property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Willows/Rose Hill property
                  </Link>
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
                Popular Fence Styles in Willows/Rose Hill
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior streets and corridor lots that
                    face Willows Road or 132nd. Full screening for after-school
                    play, pre-stained cedar that holds up to Redmond winters,
                    and a look that fits both 1970s ranches and newer two-story
                    rebuilds.
                  </p>
                  <Link
                    href="/fence-styles/picture-frame-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Cedar frame with black mesh for wider lots that still want
                    the valley or a tree line in view. Dogs stay in, the canopy
                    stays open, and the lighter footprint is easier around roots
                    than a solid privacy wall.
                  </p>
                  <Link
                    href="/fence-styles/black-hogwire-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Aluminum panels in a cedar frame on steel posts — the
                    low-maintenance option when weekday commutes leave no time
                    for stain. Strong enough for busy family yards without
                    looking like an office park on Willows Road.
                  </p>
                  <Link
                    href="/fence-styles/cedar-steel-hybrid-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View styles →
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Willows/Rose Hill Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Willows/Rose Hill Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note slope toward the
                    river valley, map trees, and check whether the parcel sits
                    in a Willows Creek or critical-area overlay. Fence Genius
                    captures grade so panels are built to the actual line, not a
                    flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Willows/Rose Hill Design & Plat Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your cul-de-sac has a small
                    architectural committee, we prepare a simple drawing and
                    material list. If it does not, we still document Redmond
                    height and setback rules so the install is clean with the
                    city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements —
                    pre-stained cedar, hogwire frames, or hybrid modules — so
                    Willows/Rose Hill install days are mostly setting posts and
                    hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Willows/Rose Hill Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets
                    off Willows Road NE, 132nd Avenue NE, NE 80th, and NE 90th.
                    Hand-digging near mature roots, stepped posts on downhill
                    faces, and full cleanup at the end of each day. Most jobs
                    wrap in one to three days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty
                  </h3>
                  <p className="text-muted-foreground">
                    Final walkthrough covering every panel, post, and gate. Full{" "}
                    {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty starts
                    when the job is complete.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — visible content matches FAQPage JSON-LD */}
        <NeighborhoodFaqSection
          title="Willows/Rose Hill Fence Installation FAQs"
          items={WILLOWS_ROSE_HILL_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Redmond"
        neighborhoodName="Willows/Rose Hill"
        attractions={WILLOWS_ROSE_HILL_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Willows/Rose Hill sits in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              . Many middle-schoolers walk or get dropped at{" "}
              <a
                href="https://rhms.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Rose Hill Middle School
              </a>{" "}
              on NE 75th Street, then later head east to{" "}
              <a
                href="https://rhs.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond High School
              </a>
              {" "}
              on NE 104th. Elementary assignments split across nearby campuses,
              including{" "}
              <a
                href="https://ein.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Albert Einstein Elementary
              </a>
              . Homework stops and weekend browsing often land at the{" "}
              <a
                href="https://kcls.org/locations/redmond/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Library
              </a>{" "}
              on NE 85th Street.
            </p>
            <p>
              After a tee time at{" "}
              <a
                href="https://www.willowsrun.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Willows Run Golf Complex
              </a>
              , households usually cut south toward{" "}
              <a
                href="https://www.redmondtowncenter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Town Center
              </a>{" "}
              rather than driving across the lake. Commuters catch the 2 Line at{" "}
              <a
                href="https://www.soundtransit.org/ride-with-us/stops-stations/downtown-redmond-station"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Downtown Redmond Station
              </a>
              {" "}
              via NE 80th or NE 90th. Height and setback questions are covered in{" "}
              <a
                href="https://www.redmond.gov/526/Fences-Decks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                the City of Redmond&apos;s fence guidelines
              </a>
              ; weekend trail miles live on the{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/sammamish-river-trail"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sammamish River Trail
              </a>
              .
            </p>
          </>
        }
      />

      <main>
        {/* 14. Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Redmond Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Redmond. From Willows/Rose Hill we
                also work in Grass Lawn to the south, Education Hill to the
                east, Downtown Redmond toward Town Center, and across 132nd into
                Juanita and the rest of Kirkland.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond">Redmond overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/grass-lawn">Grass Lawn</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/education-hill">
                    Education Hill
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/downtown-redmond">
                    Downtown Redmond
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/idylwood">Idylwood</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/juanita">Juanita</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 15. CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Willows/Rose Hill Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Willows/Rose Hill. We&apos;ll
                walk the lot, talk through corridor privacy versus an open
                valley edge, and quote a fence that fits your Redmond street.
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

export default WillowsRoseHillPage;
