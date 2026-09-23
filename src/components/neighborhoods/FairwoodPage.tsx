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
  Trees,
  Volume2,
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

const CANONICAL = "https://myfence.com/service-areas/renton/fairwood";
const META_TITLE =
  "Fairwood Fence Installation | Long Runs & Family Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Fairwood, Renton, WA. Cedar, hogwire & hybrid fencing for Petrovitsky Road lots, Fairwood Greens, and Soos Creek yards. Free quotes. (253) 455-1885.";

const FAIRWOOD_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Fairwood?",
    answer:
      "Most Fairwood lots sit in unincorporated King County with a Renton 98058 mailing address, so county rules apply rather than City of Renton code. Fences six feet or under typically do not need a building permit. Front-yard fencing in the required setback is usually limited to four feet, and corner lots on Petrovitsky Road, 140th Avenue SE, and 148th Avenue SE must keep sight triangles clear. Fairwood Greens and a few other plats add an architectural review even when the county does not ask for a permit. MyFence.com checks your parcel against King County overlays and any association packet before we quote.",
  },
  {
    question:
      "What fence styles work best for Fairwood's long lots and creek-side yards?",
    answer:
      "Six-foot cedar privacy is the usual choice on family lots off SE 168th and SE 176th, where yards are deep and neighbors share long side lines. Along Petrovitsky Road, a solid cedar street face cuts traffic noise while hogwire or a lower rail on the back keeps the yard from feeling boxed in. Creek-adjacent parcels near Soos Creek stay wet; hybrid aluminum-and-cedar on steel posts holds up better than raw cedar sitting in winter puddles. Fence Genius maps the run so a 150-foot backyard does not wander off the pin line.",
  },
  {
    question: "How much does fence installation cost in Fairwood?",
    answer:
      "Fairwood fence installation typically runs $42–$64 per linear foot for six-foot cedar privacy, $38–$56 for hogwire with a cedar frame, and $52–$74 for hybrid aluminum/cedar. Long backyard runs, extra gates for RV pads, and hand-digging near older firs on Fairwood Greens streets can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Fairwood?",
    answer:
      "Most Fairwood residential projects finish in one to four working days after any county or HOA paperwork is complete. Prefabricated panels keep on-site time short. Extra days usually come from 200-plus-foot perimeters on plateau lots, compact access off 140th during school pickup at Fairwood Elementary, or working around the golf-course edge. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Fairwood?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when King County does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Fairwood plats mix 1960s–1980s pins with later infill, so confirming the line before digging saves a redo on a long side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const FAIRWOOD_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Petrovitsky Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks",
    description:
      "King County's large sports park at 16400 SE Petrovitsky Road — ballfields, turf soccer, and weekend tournament parking. Lots on Petrovitsky and 156th treat Saturday games as the weekly traffic pulse we plan around when staging a crew.",
  },
  {
    name: "Fairwood Library",
    url: "https://kcls.org/locations/fairwood/",
    description:
      "The King County Library System branch at 17009 140th Avenue SE, a short walk from the shopping strip. Homework nights and ballot-box trips make 140th the neighborhood's weekday spine; fence gates on that corridor get planned so cars can still pull clear of the sidewalk.",
  },
  {
    name: "Fairwood Golf & Country Club",
    url: "https://www.fairwood.org/",
    description:
      "The 18-hole course and clubhouse at 17070 140th Avenue SE sit at the center of Fairwood Greens. Homes that back to a fairway usually want a fence that holds dogs without walling off the green — hogwire or a mixed-height cedar run is the typical conversation.",
  },
  {
    name: "Fairwood Elementary",
    url: "https://www.kent.k12.wa.us/o/FES",
    description:
      "Kent School District campus at 16600 148th Avenue SE. Pickup stacks on 148th and the surrounding courts are how we time material drops so we are not blocking a school-day queue.",
  },
  {
    name: "Lindbergh High School",
    url: "https://lindbergh.rentonschools.us/",
    description:
      "The Renton School District high school that serves the north side of Fairwood. Friday traffic on the approach streets is part of how we stage equipment so a game-day stack does not sit behind a trailer.",
  },
];

const FairwoodPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Fairwood, Renton",
    pageTitle: "Fairwood Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: FAIRWOOD_FAQS,
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
                    Serving Fairwood, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Fairwood Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Long-run cedar for family lots, hogwire along the golf-course edge, and hybrid systems built for the wet soils off Soos Creek and the busy stretch of Petrovitsky Road.
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
                  city="Fairwood, Renton"
                  state="Washington"
                  radiusMiles={5}
                  zoom={12}
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
                Fencing the Plateau South of Maple Valley Highway
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Fairwood sits on the south Renton plateau, mostly in unincorporated King County, with Petrovitsky Road running east–west through the commercial core and 140th Avenue SE tying the library, the golf club, and the shopping strip together. SE 168th, SE 176th, and 148th Avenue SE thread through ramblers from the 1960s and 1970s, later two-story infill, and the Fairwood Greens streets that wrap the course. Lots here are deeper than a Kennydale side yard. The design conversation starts with linear footage, whether a street face needs to mute Petrovitsky traffic, and how wet the back corner stays after a December rain along the Soos Creek drainage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Renton, including long family-lot perimeters in Fairwood and neighboring Maple Ridge Estates. We use Fence Genius to capture grade, tree locations, and the true length of a backyard before a post goes in the ground, so a 180-foot run stays straight and the wet corner gets hardware that will still be tight after a few Fairwood winters. The goal is a fence that belongs on your street — not a short-lot panel stretched across a plateau yard.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Fairwood Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Long-Run Layouts
                      </h3>
                      <p className="text-muted-foreground">
                        Fairwood backyards often need 150–250 feet of fence, not a 40-foot side screen. Fence Genius keeps the line true across a deep lot so gates, corners, and the dog run all land where you planned them.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Petrovitsky Road Screening
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar on the street face takes the edge off arterial traffic; a more open back line keeps the yard usable. We mix styles on one property so you are not choosing between quiet and light.
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
                        Full coverage on materials and labor, including hardware chosen for the extra damp that sits on creek-side and north-facing Fairwood lots. We stand behind the install through south King County winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Trees className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Fairwood Greens Packet Help
                      </h3>
                      <p className="text-muted-foreground">
                        Golf-course streets and a few other plats ask for a simple drawing before you build. We prepare height, style, and material notes so the architectural review is not the reason the job sits.
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
                What Fairwood Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our backyard is long enough that the old fence wandered. They measured the whole run, stepped the low corner near the drainage, and the cedar actually looks like one fence from the deck.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Dana in Fairwood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We back to the course. They used hogwire on that face so we kept the green, then full cedar on the neighbor sides. The Fairwood Greens drawing came back approved on the first pass.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Fairwood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Petrovitsky is loud at rush hour. The street-side cedar made a real difference, and they finished before school pickup on 148th so we were not blocking the street for two days.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Elena in Fairwood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Fairwood Renton fence" />

        {/* 6. Photo Gallery — nearby Renton installs until Fairwood-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Renton"
          title="Recent Fence Work Near Fairwood"
          description="These photos are from nearby Renton jobs, including Maple Ridge Estates, Maple Valley Heights, and The Grove at Spring Lake. Same crew, same materials, and the same Fence Genius process we use on Fairwood lots along Petrovitsky Road, 140th Avenue SE, and SE 176th."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Renton" neighborhood="Fairwood" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Fairwood Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Fairwood cedar privacy run sits on a family lot south of Petrovitsky, close enough to 148th that weekday school traffic is part of the soundtrack. The job is usually one long backyard plus two side yards: a full-height cedar screen where the neighbors sit close, then hogwire or a mixed rail on the face that looks toward the course or an open drainage. Fence Genius maps the true length so panels do not creep off the pin, and we set footings so winter runoff from the Soos Creek side does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Fairwood yards run 140–240 linear feet and wrap in two to four working days after any county or Fairwood Greens paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the street-noise face and the wet corner are both accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fairwood-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Fairwood Lot Depth and Linear Footage
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Plateau lots on SE 168th, SE 176th, and the courts off 140th are deeper than most Renton in-city parcels. A backyard can eat 150 feet before you turn a corner. That is a manufacturing problem as much as a digging problem: panels have to stay consistent, gates have to land on the pad you already poured, and the last post has to meet the existing neighbor fence without a jog. We spec the run from a Fence Genius map, not a driveway guess.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Soos Creek Moisture and Low Corners
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Soos Creek drainage cuts through the west and south edges of Fairwood. Yards that sit toward that corridor hold water longer than a Highlands hill. Pre-stained Western Red Cedar, stainless or hot-dipped fasteners, and optional steel posts at the wettest corners last longer than raw cedar and light galvanized nails. We also keep dirt from piling against the bottom rail so the first board does not sit in a puddle all winter.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Fairwood Greens and Course-Edge Lots
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Streets that wrap the golf course often have an architectural packet: height caps, material notes, and a preference that the course face not look like a solid warehouse wall. We mix cedar privacy on the neighbor sides with hogwire or a lower rail toward the fairway so dogs stay in and the green stays in the living room. If your street has no association — which is common outside Greens — we still document King County height and setback rules so the install is clean with the county.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Arterial Noise and School-Street Staging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Petrovitsky Road and 140th Avenue SE carry the neighborhood&apos;s daily traffic. A six-foot cedar street face is the practical noise buffer; we do not claim it is a sound wall. Fairwood Elementary on 148th and Lindbergh to the north set the weekday pickup pattern. We stage compact equipment so we are not blocking a queue, and we plan material drops away from the library lot at 17009 140th when that block is already full.
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
                Fence Installation Cost in Fairwood
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Fairwood fence is an investment in a deep family lot and, on Petrovitsky, a quieter street face. Length, gates, and mixed-style runs move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $42–$64 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $38–$56 per linear foot
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
                  Extra-long perimeters, additional gates, and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Fairwood property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Fairwood property</Link>
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
                Popular Fence Styles in Fairwood
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides and Petrovitsky street faces. Full height, consistent panels across a long backyard, pre-stained cedar that holds up on a wet corner, and a look that fits both 1970s ramblers and later two-story builds.
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
                    Cedar frame with black mesh for course-edge lots that still want the fairway in the room. Dogs stay in, the lighter footprint is easier around fir roots than a solid wall, and the yard does not feel boxed after a 200-foot run.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a creek-side yard makes staining a chore. Strong enough for family lots without looking commercial on 140th or SE 176th.
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
                Our Fairwood Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Fairwood Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the full perimeter, note the wet corner, map trees, and check whether a Petrovitsky or course-facing stretch should stay more open. Fence Genius captures length and grade so panels are built to the actual yard, not a short-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Fairwood Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your street is in Fairwood Greens or another plat with a design packet, we prepare a simple drawing and material list. If your street has no association, we still document King County height and setback rules so the install is clean with the county.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Fairwood install days are mostly setting posts and hanging finished sections across those long back lines.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Fairwood Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 140th, 148th, SE 168th, and Petrovitsky. Drainage-aware footings on the wet corner, consistent posts on a 200-foot run, and full cleanup at the end of each day. Most jobs wrap in two to four days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty
                  </h3>
                  <p className="text-muted-foreground">
                    Final walkthrough covering every panel, post, and gate. Full {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty starts when the job is complete.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — visible content matches FAQPage JSON-LD */}
        <NeighborhoodFaqSection
          title="Fairwood Fence Installation FAQs"
          items={FAIRWOOD_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Renton"
        neighborhoodName="Fairwood"
        attractions={FAIRWOOD_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Fairwood families sit across two districts. Many streets south of Petrovitsky are served by the{" "}
              <a
                href="https://www.kent.k12.wa.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kent School District
              </a>
              , with{" "}
              <a
                href="https://www.kent.k12.wa.us/o/FES"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fairwood Elementary
              </a>{" "}
              on 148th Avenue SE as the neighborhood campus. North-side addresses more often feed the{" "}
              <a
                href="https://www.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton School District
              </a>
              {" "}
              and{" "}
              <a
                href="https://lindbergh.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lindbergh High School
              </a>
              . Weekday life is built around those campuses, the library lot on 140th, and the short hop to SR 169 for the rest of the Eastside.
            </p>
            <p>
              After-school hours split between Petrovitsky Park ballfields and the{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                King County Parks
              </a>{" "}
              system. Homework nights land at the{" "}
              <a
                href="https://kcls.org/locations/fairwood/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fairwood Library
              </a>
              . Weekend rounds and swim-team drop-offs happen at{" "}
              <a
                href="https://www.fairwood.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fairwood Golf &amp; Country Club
              </a>
              . For county fence questions on unincorporated parcels,{" "}
              <a
                href="https://kingcounty.gov/en/dept/local-services/certificates-permits-licenses/permits/permits-inspections-codes-buildings-land-use/do-you-need-a-permit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                King County permit guidance
              </a>{" "}
              is the first check before we draw a line. Petrovitsky Road and 140th Avenue SE put I-405 and Maple Valley Highway within a short drive — which is why so many Fairwood lots want a fence that works as hard as the commute.
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
                Also Serving Nearby Renton Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Renton. From Fairwood we also work in Maple Ridge Estates and Maple Valley Heights on the East Plateau, The Grove at Spring Lake, Renton Highlands to the north, and Cascade toward the valley.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-ridge-estates">Maple Ridge Estates</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-valley-heights">Maple Valley Heights</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/the-grove-at-spring-lake">The Grove at Spring Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/renton-highlands">Renton Highlands</Link>
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
                Ready to Enhance Your Fairwood Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Fairwood. We&apos;ll walk the lot, talk through a long backyard vs. a Petrovitsky street face, and quote a fence that fits your plateau property.
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

export default FairwoodPage;
