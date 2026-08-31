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

const CANONICAL = "https://myfence.com/service-areas/kirkland/finn-hill";
const META_TITLE =
  "Finn Hill Kirkland Fence Installation | Hillside Lots & Forest Edges | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Finn Hill, Kirkland, WA. Cedar, hogwire & hybrid fencing for hillside lots near Big Finn Hill Park, Holmes Point, and Juanita Drive. Free quotes. (253) 455-1885.";

const FINN_HILL_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Finn Hill, Kirkland?",
    answer:
      "The City of Kirkland generally does not require a building permit for residential fences six feet or shorter, but the fence still has to meet zoning height and setback rules. Front-yard fencing on neighborhood-access and collector streets is typically limited to 3.5 feet. Side and rear yards are usually allowed up to six feet. Juanita Drive NE is treated as an arterial, so the first few feet off that property line often have to stay lower unless there is a planted landscape strip. Holmes Point lots that sit inside Kirkland's shoreline overlay cannot place a fence waterward of the shoreline setback. A few plats still want a drawing even when the city does not. MyFence.com checks the parcel, any CC&Rs, and current Development Services rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Finn Hill's hillside lots and forest edges?",
    answer:
      "Six-foot cedar privacy is the usual choice on interior Finn Hill lots that sit close to a neighbor or take evening noise from Juanita Drive NE or I-405. On lots that open toward Big Finn Hill Park, O.O. Denny Park, or a wooded ravine, hogwire in a cedar frame screens pets without boxing in the canopy. Hybrid aluminum-and-cedar systems suit households that would rather skip staining on a weekday commute calendar. Fence Genius maps the drop toward Holmes Point and the root zones along 84th and 138th so panels follow the grade instead of leaving a triangular gap a dog can use.",
  },
  {
    question: "How much does fence installation cost in Finn Hill, Kirkland?",
    answer:
      "Finn Hill fence installation typically runs $42–$65 per linear foot for six-foot cedar privacy, $36–$54 for hogwire with a cedar frame, and $52–$72 for hybrid aluminum/cedar. Hand-digging around mature firs, stepped posts on downhill runs toward Holmes Point Drive, extra gates for trail or side-yard access, and plat drawing packages can move a quote. Holmes Point waterfront lots may also need hardware chosen for lake moisture. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Finn Hill?",
    answer:
      "Most Finn Hill residential projects finish in one to three working days after any city or plat paperwork is complete. Pre-fabricated panels cut on-site time. Hand-digging near older firs and cedars, stepped posts on the downhill side of a lot, tight side yards between 1960s–1990s homes, and carry-in access off Holmes Point Drive are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Finn Hill?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Kirkland does not require their signature. If your street has a small plat association, the architectural contact may want both owners listed on the application. Property lines on Finn Hill often run through trees and down a slope, so pins matter. MyFence.com can help you confirm corners, share a simple site plan, and keep the conversation focused on height, style, and who pays for which stretch.",
  },
];

const FINN_HILL_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Big Finn Hill Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/big-finn-hill",
    description:
      "King County's 220-acre wooded park at 8106 NE 138th Street, split by Juanita Drive NE. Ballfields and a play area sit east of the road; looping forest trails run west and connect toward Saint Edward. Weeknight practices and weekend trail traffic set the rhythm on 138th and 84th.",
  },
  {
    name: "O.O. Denny Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/O.O.-Denny-Park",
    description:
      "Lake Washington shoreline park at 12032 Holmes Point Drive NE — picnic shelters, a playground, Denny Creek, and some of the oldest trees on the hill. Holmes Point households use it as the neighborhood beach and the trail link up into Big Finn Hill.",
  },
  {
    name: "Saint Edward State Park",
    url: "https://parks.wa.gov/find-parks/state-parks/saint-edward-state-park",
    description:
      "The 326-acre state park just north of the neighborhood on Juanita Drive NE. Forested trails drop to the lake, and the former seminary lawns are a regular weekend outing when Big Finn Hill's parking lots fill up after a Saturday game.",
  },
  {
    name: "Juanita Beach Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Juanita-Beach-Park",
    description:
      "Kirkland's busiest swimming beach a short drive south on Juanita Drive. Lifeguarded water in season, picnic shelters, and ballfields give Finn Hill families a second shoreline option when Holmes Point is packed.",
  },
  {
    name: "Finn Hill Middle School",
    url: "https://fhms.lwsd.org/",
    description:
      "The Lake Washington School District campus at 8040 NE 132nd Street. Drop-off hours and evening events shape traffic on 132nd and 84th, and many of the yards we fence sit within a few blocks of campus.",
  },
];

const FinnHillPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Finn Hill, Kirkland",
    pageTitle: "Finn Hill Kirkland Fence Installation",
    description: META_DESCRIPTION,
    faqItems: FINN_HILL_FAQS,
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
              href="/service-areas/kirkland"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Kirkland
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Finn Hill, Kirkland WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Finn Hill Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence work for Finn Hill&apos;s hillside yards — cedar,
                  hogwire, and hybrid lines that follow the drop toward Holmes
                  Point, respect fifty-year-old firs, and fit the forest-edge
                  streets between Juanita and Big Finn Hill Park.
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
                  city="Kirkland"
                  state="WA"
                  radiusMiles={5}
                  zoom={12}
                  showBusinessInfo={false}
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
                Fencing a Hill That Drops Toward the Lake
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Finn Hill occupies northwest Kirkland between Juanita to the
                south, Kenmore to the north, and the Holmes Point shoreline of
                Lake Washington. The neighborhood is a mix of 1960s–1990s
                family homes wrapped around Big Finn Hill Park, with steeper
                lots along Holmes Point Drive NE and more regular plats inland
                on 84th Avenue NE, NE 132nd Street, and NE 138th Street.
                Juanita Drive NE cuts the hill in half and carries park, school,
                and commute traffic. The work here is less about a flat backyard
                grid and more about following a slope, threading posts past
                second-growth firs, and keeping a dog inside a yard that already
                has a trail at the back line.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout Finn Hill, including
                privacy runs that take the edge off Juanita Drive, hogwire
                lines that leave the canopy open toward the park, and stepped
                sections on downhill lots that face Holmes Point. There is no
                single neighborhood-wide HOA, but some plats still want a
                drawing and a stain note before a crew shows up. Our Fence
                Genius measurements capture the drop of each lot and the root
                zones we need to hand-dig, and we handle Kirkland Development
                Services checks so height, arterial setbacks on Juanita Drive,
                and shoreline rules on Holmes Point are settled before
                installation day.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Finn Hill Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Panels That Follow the Hill, Not a Flat-Lot Sketch
                      </h3>
                      <p className="text-muted-foreground">
                        Finn Hill lots drop toward Holmes Point and the ravines
                        off 84th. Fence Genius maps the grade so posts step
                        with the land instead of leaving a gap at the downhill
                        end a pet will find on day one.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Installs That Keep the Existing Trees
                      </h3>
                      <p className="text-muted-foreground">
                        Yards here already have the canopy — firs, cedars, and
                        maples that have been in the ground since the original
                        plats. We hand-dig near root flares and skip a trench
                        across a tree the lot was built around.
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
                        stepped posts on hillside soil and the Eastside
                        wet-season cycle that stresses fasteners. Finn Hill
                        installs are backed for the long haul.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        City Height Rules and Plat Drawings
                      </h3>
                      <p className="text-muted-foreground">
                        Juanita Drive arterial setbacks, 3.5-foot front-yard
                        limits, and Holmes Point shoreline rules are easy to
                        miss. We sort city zoning from any plat contact before
                        lumber is on the truck.
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
                What Finn Hill Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our back line drops toward Holmes Point and the old
                    fence left a gap you could walk a dog through. They stepped
                    the posts with the hill and hand-dug around the firs. The
                    yard is actually usable now.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Finn Hill</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit a couple of blocks off Juanita Drive and
                    wanted privacy without losing the trees along 84th. The
                    crew carried panels in by hand and left the neighbor&apos;s
                    hedge alone. Street noise dropped enough that we eat
                    outside again.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Finn Hill</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot backs to the park trail. Hogwire in a cedar
                    frame keeps the kids and the dog in without turning the
                    woods into a wall. They flagged the roots first and the
                    bottom of the mesh sits tight to grade.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Lauren in Finn Hill</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Finn Hill Kirkland fence" />

        {/* 6. Photo Gallery — closest Kirkland project photos */}
        <ServiceAreaPhotoGallery
          city="Kirkland"
          title="Our Work in Finn Hill & Kirkland"
          description="Closest available Kirkland project photos. Finn Hill installs use the same cedar privacy, hogwire, and hybrid systems, stepped for hillside lots and forest-edge yards."
        />

        {/* 7. Case Study Spotlight — closest Kirkland featured project */}
        <FeaturedProject city="Kirkland" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Finn Hill-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Finn Hill Terrain and Stepped Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The neighborhood lives up to the name. Lots along Holmes
                    Point Drive NE and the ravines off 84th Avenue NE can drop
                    several feet across a typical backyard. A fence drawn as if
                    the lot were flat leaves a triangle at the downhill end.
                    We walk the line first, let Fence Genius map the grade, and
                    step posts so each panel follows the ground. Compact
                    equipment and hand-carry are common on the narrower
                    waterfront streets where a truck cannot sit on the
                    property.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Finn Hill Tree Roots and Forest-Edge Lots
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most Finn Hill lots were planted — or left wooded — decades
                    ago. Firs, cedars, and maples sit on or near the property
                    line, especially on streets that back to Big Finn Hill Park
                    or O.O. Denny. A mechanical trench will tear a root flare
                    the tree cannot replace. We mark roots we will not cut,
                    hand-dig post holes where the canopy is oldest, and choose
                    hogwire in a cedar frame when a solid privacy wall would
                    fight the trees the homeowner wants to keep.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Juanita Drive Setbacks and Kirkland Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kirkland typically allows six feet on side and rear yards
                    and limits front-yard fencing on neighborhood-access and
                    collector streets to 3.5 feet. Juanita Drive NE is an
                    arterial, so the stretch nearest that curb often has to
                    stay lower unless there is a planted landscape strip
                    between the sidewalk and the street. Corner lots at 132nd,
                    138th, and 84th still have sight-distance rules. We confirm
                    which bucket your parcel is in — city-only, small plat, or
                    Holmes Point shoreline — before we order materials.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Pets, Park Edges, and Holmes Point Moisture
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that back toward Big Finn Hill Park or a wooded ravine
                    still see deer, and almost every household has a dog that
                    will test the bottom of a panel. We keep the skirt tight to
                    grade and spec latches that kids can use after a game but a
                    dog cannot walk open. On Holmes Point, lake humidity is
                    part of the weather; pre-stained Western Red Cedar and
                    stainless or hot-dipped fasteners handle the wet-season
                    cycle without rust streaks down the boards.
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
                Fence Installation Cost in Finn Hill
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A new fence is a real investment on Finn Hill lots. These
                ranges cover typical residential runs; hillside stepping,
                root-zone hand-digging, extra gates, and plat drawing packages
                can change the final number.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $42–$65 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $36–$54 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $52–$72 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Stepped hillside runs and hand-digging near mature trees are
                  itemized separately. Holmes Point moisture-ready hardware can
                  also move a quote. Get an exact number for your Finn Hill
                  property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Finn Hill property
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
                Popular Fence Styles in Finn Hill
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on lots that face Juanita Drive or sit close
                    to a neighbor. Full screening for evening noise,
                    pre-stained cedar that holds up to Eastside winters, and a
                    look that fits 1960s–1990s homes around the park.
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
                    Cedar frame with black mesh for park-edge lots and yards
                    that want the canopy left open. Dogs stay in, more of the
                    trees stay in view, and the lighter footprint is easier
                    around roots than a solid privacy wall.
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
                    low-maintenance option when a commute down Juanita Drive
                    leaves little time for staining. Strong enough for busy
                    family yards without looking commercial.
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
                Our Finn Hill Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Finn Hill Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, mark mature roots, note
                    the drop toward Holmes Point or the park, and check whether
                    a plat association, Juanita Drive arterial setback, or
                    shoreline rule applies. Fence Genius captures grade so
                    panels are built to the actual line, not a flat-lot
                    assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Finn Hill Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your street has a small plat
                    contact, we prepare a drawing and material list. If it
                    does not, we still document Kirkland height and setback
                    rules — including front-yard limits and Juanita Drive
                    arterial rules — so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements —
                    pre-stained cedar, hogwire frames, or hybrid modules — so
                    Finn Hill install days are mostly setting posts and hanging
                    finished sections on the hill.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Finn Hill Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets
                    off 84th Avenue NE, NE 132nd Street, and Holmes Point Drive
                    NE. Hand-digging near mature roots, careful carry-in on
                    tight side yards, and full cleanup at the end of each day.
                    Most jobs wrap in one to three days.
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
          title="Finn Hill Fence Installation FAQs"
          items={FINN_HILL_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Kirkland"
        neighborhoodName="Finn Hill"
        attractions={FINN_HILL_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Finn Hill households sit in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              . Many elementary students walk or ride to{" "}
              <a
                href="https://sandburg.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Carl Sandburg Elementary
              </a>{" "}
              on 84th Avenue NE or{" "}
              <a
                href="https://thoreau.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Henry David Thoreau Elementary
              </a>{" "}
              on NE 138th Street, then later to{" "}
              <a
                href="https://fhms.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Finn Hill Middle School
              </a>{" "}
              and{" "}
              <a
                href="https://jhs.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Juanita High School
              </a>
              . After a Saturday at the park, families often continue south
              along Juanita Drive rather than driving across the Eastside.
            </p>
            <p>
              A special-occasion dinner is a short hop to{" "}
              <a
                href="https://www.cafejuanita.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cafe Juanita
              </a>{" "}
              on NE 120th Place. Commuters heading toward Bellevue or Seattle
              typically drop onto{" "}
              <a
                href="https://wsdot.wa.gov/construction-planning/major-projects/i-405sr-167-corridor-program"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                I-405
              </a>{" "}
              from NE 132nd or NE 160th rather than fighting Juanita Drive at
              rush hour. Height and setback questions are covered in{" "}
              <a
                href="https://www.kirklandwa.gov/Government/Departments/Development-Services-Center/Do-you-need-a-permit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kirkland&apos;s permit guidance
              </a>
              ; weekend reading and holds live at the{" "}
              <a
                href="https://kcls.org/locations/kirkland/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kirkland Library
              </a>{" "}
              downtown.
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
                Also Serving Nearby Kirkland Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Kirkland. From Finn Hill we also
                work in Juanita just to the south, Kingsgate across I-405, and
                downtown Kirkland toward the waterfront. Redmond&apos;s Grass
                Lawn sits a short drive east.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/juanita">Juanita</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/grass-lawn">Grass Lawn</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond">Redmond</Link>
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
                Ready to Enhance Your Finn Hill Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Finn Hill. We&apos;ll walk the
                slope, talk through privacy versus open hogwire around the
                trees, and quote a fence that fits your Kirkland yard.
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

export default FinnHillPage;
