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
  Eye,
  TreePine,
  Mountain,
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

const CANONICAL = "https://myfence.com/service-areas/redmond/idylwood";
const META_TITLE =
  "Idylwood Redmond Fence Installation | Lake Sammamish Hillsides | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Idylwood, Redmond, WA. Cedar, hogwire & hybrid fencing for hillside lots along West Lake Sammamish Parkway and Idylwood Beach Park. Free quotes. (253) 455-1885.";

const IDYLWOOD_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Idylwood, Redmond?",
    answer:
      "The City of Redmond generally does not require a building permit for residential fences under eight feet, but zoning still controls height and setbacks. Front-yard fencing is typically limited to four feet; side and rear yards are usually allowed up to six feet. Corner lots on West Lake Sammamish Parkway NE, NE 36th Street, and 180th Avenue NE have sight-distance triangle rules that can shorten a run near the sidewalk. Lots within 200 feet of Lake Sammamish's ordinary high water mark may also need shoreline review. A few hillside plats ask for drawings even when the city does not. MyFence.com checks the parcel, any CC&Rs, and Redmond Development Services rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Idylwood's hillside lots and lake views?",
    answer:
      "Six-foot cedar privacy is the usual choice on the parkway side of a lot or where a neighbor sits close on 176th or 180th. On lots that drop toward Lake Sammamish or open onto Idylwood Beach Park, hogwire in a cedar frame keeps dogs in without stacking a solid wall across the water. Hybrid aluminum-and-cedar systems suit households that would rather skip staining on a lakeside moisture cycle. Fence Genius maps the grade so panels step with the slope instead of leaving a gap a pet can use.",
  },
  {
    question: "How much does fence installation cost in Idylwood, Redmond?",
    answer:
      "Idylwood fence installation typically runs $45–$70 per linear foot for six-foot cedar privacy, $38–$58 for hogwire with a cedar frame, and $54–$76 for hybrid aluminum/cedar. Stepped posts on the downhill side toward the lake, hand-digging around mature firs, extra gates for side-yard access off 180th, and shoreline or plat drawing packages can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Idylwood?",
    answer:
      "Most Idylwood residential projects finish in one to three working days after any city, shoreline, or plat paperwork is complete. Pre-fabricated panels cut on-site time. Stepped posts on a drop toward West Lake Sammamish Parkway, hand-carrying materials down a hillside driveway, and tight side yards between 1960s–1980s homes are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Idylwood?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Redmond does not require their signature. On hillside lots the pin can sit on a slope, and a shared side yard off 176th or 180th may already have landscaping both owners care about. If your street has a small plat association, the architectural contact may want both owners listed on the application. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which stretch.",
  },
];

const IDYLWOOD_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Idylwood Beach Park",
    url: "https://www.redmond.gov/facilities/facility/details/Idylwood-Park-64",
    description:
      "Redmond's swimming beach on Lake Sammamish at 3650 West Lake Sammamish Parkway NE — bathhouse, playground, picnic shelter, and a small car-top boat launch. Summer weekends fill the parkway pull-offs; weekdays the lawn is the extra backyard for lots a few doors away.",
  },
  {
    name: "Marymoor Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/marymoor",
    description:
      "King County's river-valley park just north of the neighborhood. Off-leash fields, the velodrome, climbing walls, and the Sammamish shoreline give Idylwood households a bigger outing when the beach parking lot is already full.",
  },
  {
    name: "Lake Sammamish State Park",
    url: "https://www.parks.wa.gov/533/Lake-Sammamish",
    description:
      "The larger state park on the south end of the same lake, a short drive down West Lake Sammamish Parkway. Boat launch, swim beach, and trail miles when Idylwood's 18-acre park feels too small for a Saturday group.",
  },
  {
    name: "Sammamish River Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/sammamish-river-trail",
    description:
      "The paved King County trail along the river, reachable from Marymoor without getting on SR-520. Morning bike commutes toward downtown Redmond and evening walks share the same corridor Idylwood households use to skip parkway traffic.",
  },
  {
    name: "Overlake Village Station",
    url: "https://www.soundtransit.org/ride-with-us/stops-stations/overlake-village-station",
    description:
      "The 2 Line stop west of the neighborhood on 152nd Avenue NE. Idylwood commuters heading to Bellevue or Seattle often cut across NE 40th or 36th instead of fighting the parkway all the way to downtown Redmond.",
  },
];

const IdylwoodPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Idylwood, Redmond",
    pageTitle: "Idylwood Redmond Fence Installation",
    description: META_DESCRIPTION,
    faqItems: IDYLWOOD_FAQS,
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
                    Serving Idylwood, Redmond WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Idylwood Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Hillside and lakeside fence work for Idylwood — cedar privacy
                  that quiets West Lake Sammamish Parkway, hogwire that keeps
                  Lake Sammamish in view, and hybrid systems built for the
                  moisture that sits along Idylwood Beach Park.
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
                  city="Idylwood, Redmond"
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
                Hillside Lots That Drop Toward the Lake
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Idylwood is Redmond&apos;s west-shore pocket on Lake Sammamish —
                a band of 1960s–1980s homes and newer rebuilds stacked between
                West Lake Sammamish Parkway NE and the water. Idylwood Beach
                Park at 3650 West Lake Sammamish Parkway is the neighborhood
                lawn: swim beach, playground, picnic shelter, and the small
                launch that fills on warm Saturdays. Lots on 176th Avenue NE,
                180th Avenue NE, and NE 36th Street often step downhill toward
                the lake, so a fence here has to follow grade, leave a view
                corridor, and still keep a dog out of the parkway.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across
                Idylwood, including parkway-side privacy runs and open hogwire
                on the downhill edge toward the water. There is no single
                neighborhood-wide HOA, but some hillside plats still want a
                drawing and a stain note, and shoreline lots within 200 feet of
                the ordinary high water mark can trigger extra review. Fence
                Genius captures the actual drop so panels arrive stepped for
                the slope instead of getting ripped down on a driveway that
                already has little room to stage lumber.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Idylwood Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Slope-Mapped Panel Bays
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius records the drop from the parkway toward
                        the lake so each bay is built to the grade. Posts step
                        with the hillside instead of leaving a triangular gap
                        a raccoon — or a small dog — will find on night one.
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
                        Full coverage on materials and labor, including
                        hardware chosen for the extra damp that sits along
                        Lake Sammamish and Idylwood Beach Park. We stand
                        behind the install through Eastside winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Privacy Without Losing the Water
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar on the West Lake Sammamish Parkway side
                        takes the edge off traffic. Hogwire or a mixed-height
                        run on the downhill side keeps eyes on the lake and
                        the park lawn without boxing in a short hillside yard.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Forest-Edge and Root-Aware Digs
                      </h3>
                      <p className="text-muted-foreground">
                        Many Idylwood lots back onto a greenbelt or a stand of
                        firs. We hand-dig near root flares, skip a trench
                        across a tree that already defines the yard, and place
                        posts so the fence sits with the canopy instead of
                        cutting a new scar through it.
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
                What Idylwood Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot drops from the parkway toward the water. They
                    stepped the posts so the bottom rail follows the grade, and
                    we still see the lake past the hogwire. The crew staged off
                    180th and did not block the driveway for three days.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Idylwood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;West Lake Sammamish Parkway noise was the issue, not
                    a giant backyard. Solid cedar on the street, open run on
                    the park side. The dog cannot walk the latch, and the firs
                    along the rear line are still standing.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Idylwood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit a short walk from Idylwood Beach Park and
                    wanted screening from the weekend crowd without a solid
                    wall. They measured the slope, sent a simple drawing, and
                    wrapped before a Saturday swim day filled the parkway.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Helen in Idylwood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Idylwood Redmond fence" />

        {/* 6. Photo Gallery — Redmond-area installs until Idylwood-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Redmond"
          title="Recent Fence Work Near Idylwood"
          description="These photos are from Redmond jobs in and around the Lake Sammamish shoreline. Same crew, same materials, and the same Fence Genius process we use on Idylwood hillside and park-edge lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Redmond" neighborhood="Idylwood" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Idylwood-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Idylwood Terrain and Stepped Posts
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most Idylwood lots are not flat suburban rectangles. The
                    ground falls from West Lake Sammamish Parkway toward the
                    water, and a six-foot panel that works on Education Hill
                    will float over the downhill side here. We walk the line
                    first, mark where posts need to step, and let Fence Genius
                    set bay lengths so the skirt stays tight to grade. Tight
                    hillside driveways off 176th and 180th often mean
                    hand-carrying material instead of parking a full truck on
                    the parkway through a swim-day backup.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Lake Moisture and Shoreline Edges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that sit close to Lake Sammamish stay damp longer
                    than inland Grass Lawn or Downtown Redmond. Raw cedar
                    grays fast, and cheap fasteners streak. We spec
                    pre-stained Western Red Cedar and stainless or hot-dipped
                    hardware. Properties within 200 feet of the ordinary high
                    water mark may need shoreline review before a fence goes
                    in. Where a lot faces the park lawn or the water, hogwire
                    or a mixed-height run keeps eyes on the lake while still
                    containing pets.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Idylwood Parkway Noise and Sight Triangles
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    West Lake Sammamish Parkway NE is the neighborhood&apos;s
                    only through street — beach traffic, commute overflow
                    toward SR-520, and weekend boats on trailers. A solid
                    six-foot cedar privacy fence on the street side does more
                    for evening use of the yard than a decorative picket ever
                    will. Corner lots at NE 36th Street and 180th Avenue NE
                    still have to honor Redmond&apos;s sight-distance
                    triangles, so the front stretch may step down even when
                    the rear line stays at six feet.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Idylwood Wildlife, Trees, and Plat Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Greenbelt edges and the Marymoor corridor still send deer
                    and raccoons through side yards. We keep the skirt tight
                    to grade and spec latches that kids can use after a swim
                    but a dog cannot walk open. Idylwood does not sit under
                    one master association; some 1970s–1990s plats want
                    height, stain, and a simple site plan. Everyone else still
                    follows City of Redmond zoning. We sort which bucket your
                    parcel is in before we order materials.
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
                Fence Installation Cost in Idylwood
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A hillside fence on Lake Sammamish is a slope-aware install:
                stepped posts, lake-side moisture, and parkway access can move
                the number. These are typical ranges; your on-site
                measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $45–$70 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $38–$58 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $54–$76 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Stepped posts on a downhill run, hand-carry on a hillside
                  driveway, marine-grade hardware near the water, and plat or
                  shoreline drawing packages may add 10–15%. Get an exact
                  quote for your Idylwood property with a free on-site
                  measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Idylwood property
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
                Popular Fence Styles in Idylwood
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on the parkway side of a lot and on interior
                    side yards off 176th and 180th. Full screening from
                    traffic and neighbors, pre-stained cedar that holds up to
                    lake-corridor damp, and a look that fits 1960s–1980s
                    hillside homes.
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
                    Cedar frame with black mesh for lots that face the water
                    or Idylwood Beach Park. Dogs stay in, the lake stays in
                    view, and the lighter footprint is easier around roots
                    than a solid wall on a short downhill run.
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
                    low-maintenance option when a lakeside calendar has no
                    extra Saturday for staining. Clean enough for a plat
                    review without looking like a commercial lot.
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
                Our Idylwood Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Idylwood Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, mark the drop toward
                    Lake Sammamish, note driveway width off the parkway, and
                    check whether shoreline review or a plat association
                    applies. Fence Genius captures grade so panels are built
                    to the actual hillside, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Idylwood Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your hillside plat has an
                    architectural contact, we prepare a drawing, stain note,
                    and height callout. If it does not, we still document
                    Redmond height, setback, and shoreline rules — including
                    sight-distance on West Lake Sammamish Parkway, 36th, and
                    180th — so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements —
                    pre-stained cedar, hogwire frames, or hybrid modules — so
                    Idylwood install days are mostly setting stepped posts and
                    hanging finished sections instead of ripping lumber on a
                    narrow hillside driveway.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Idylwood Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment and hand-carry when a driveway
                    off 176th or 180th will not take a full truck. Stepped
                    posts, careful placement near mature firs, and full
                    cleanup at the end of each day. Most jobs wrap in one to
                    three days.
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
          title="Idylwood Fence Installation FAQs"
          items={IDYLWOOD_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Redmond"
        neighborhoodName="Idylwood"
        attractions={IDYLWOOD_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Idylwood households sit in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              . Many elementary students walk or ride a short hop to{" "}
              <a
                href="https://audubon.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                John James Audubon Elementary
              </a>{" "}
              on 180th Avenue NE, then later to{" "}
              <a
                href="https://rms.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Middle School
              </a>
              . After a swim day at the beach, families often continue north
              to{" "}
              <a
                href="https://www.redmond.gov/241/Redmond-Community-Center-at-Marymoor-Vil"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Community Center at Marymoor Village
              </a>{" "}
              for a class or a field-permit question.
            </p>
            <p>
              Dinner after a park afternoon is usually a short hop west toward
              Town Center rather than a drive across the Eastside —{" "}
              <a
                href="https://www.mattsrotisserie.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Matt&apos;s Rotisserie &amp; Oyster Lounge
              </a>{" "}
              is a regular stop. Commuters heading to Bellevue or Seattle
              catch the 2 Line at{" "}
              <a
                href="https://www.soundtransit.org/ride-with-us/stops-stations/overlake-village-station"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Overlake Village Station
              </a>
              , or take West Lake Sammamish Parkway toward SR-520. Height and
              setback questions are covered in{" "}
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
              . Event listings for the broader city sit on{" "}
              <a
                href="https://experienceredmond.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Experience Redmond
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
                We install fences throughout Redmond. From Idylwood we also
                work in Overlake to the west, Downtown Redmond toward Town
                Center, Grass Lawn farther north, and across the city line
                into Bellevue along the same lake shore.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond">Redmond overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/overlake">Overlake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/downtown-redmond">
                    Downtown Redmond
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/grass-lawn">Grass Lawn</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue</Link>
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
                Ready to Enhance Your Idylwood Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Idylwood. We&apos;ll walk the
                hillside, talk through privacy versus lake views, and quote a
                fence that fits your West Lake Sammamish lot.
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

export default IdylwoodPage;
