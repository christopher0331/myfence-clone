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
  Mountain,
  Eye,
  Waves,
  Home,
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

const CANONICAL = "https://myfence.com/service-areas/sammamish/inglewood";
const META_TITLE =
  "Inglewood Sammamish Fence Installation | Hillside & Lake-View Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Inglewood, Sammamish, WA. Cedar, hogwire & hybrid fencing for Inglewood Hill slopes, lake-view yards, and East Lake Sammamish Parkway lots. Free quotes. (253) 455-1885.";

const INGLEWOOD_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Inglewood, Sammamish?",
    answer:
      "Most Inglewood side and rear fences six feet or shorter do not need a City of Sammamish building permit. Front-yard height is usually capped at four feet, and corner lots must keep the sight-distance triangle clear — that comes up on Inglewood Hill Road, 212th Avenue NE, and NE 8th Street. Anything taller than six feet needs a Type I construction permit plus a recorded agreement with the adjoining owner. Lots that drop toward Lake Sammamish, sit in a mapped shoreline overlay along East Lake Sammamish Parkway NE, or cross a critical-area buffer can need extra review even at standard height. MyFence.com checks those overlays for your address before we quote.",
  },
  {
    question:
      "What fence styles work best for Inglewood's hillside lots and lake views?",
    answer:
      "Interior streets up the hill toward 228th Avenue NE usually choose six-foot cedar privacy so kids and dogs stay in after school. On west-facing runs that look toward Lake Sammamish, hogwire in a cedar frame keeps the water and the Olympics in the picture while still containing pets. Hybrid aluminum-and-cedar is the low-maintenance pick when lake-side damp and a steep walk from the driveway make staining a chore. Fence Genius maps the drop so panels step with Inglewood Hill instead of leaving a crawl gap on the downhill side.",
  },
  {
    question: "How much does fence installation cost in Inglewood, Sammamish?",
    answer:
      "Inglewood fence installation typically runs $46–$70 per linear foot for six-foot cedar privacy, $40–$60 for hogwire with a cedar frame, and $56–$78 for hybrid aluminum/cedar. Stepped panels on Inglewood Hill, hand-digging around firs on 212th and 216th, shoreline-adjacent hardware, and extra gates on split-level lots can move the number. Use the quote tool for a starting range, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Inglewood?",
    answer:
      "Most Inglewood residential jobs finish in one to three working days after any city or plat paperwork is done. Prefabricated panels keep on-site time short. Extra half-days usually come from stepped runs down Inglewood Hill, tight access from East Lake Sammamish Parkway NE, or mature roots along 205th Place NE and 212th Avenue NE. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Inglewood?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Sammamish does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. On the steeper Inglewood Hill lots, confirming pins before we step panels also keeps the run from drifting downhill onto the next parcel. MyFence.com can help confirm pins, share a simple site plan, and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const INGLEWOOD_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Sammamish Landing Park",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/sammamish-landing-park/",
    description:
      "The city's only public shoreline on Lake Sammamish, at 4607 East Lake Sammamish Parkway NE — docks, picnic lawns, and a beach that Inglewood households treat as the downhill backyard after a walk or ride down the hill.",
  },
  {
    name: "East Lake Sammamish Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/east-lake-sammamish",
    description:
      "King County's paved corridor along the old railroad grade, cutting through the bottom of the neighborhood. Morning bike commutes toward Redmond and evening dog walks share the same path that sits just below Inglewood Hill Road.",
  },
  {
    name: "Elizabeth Blackwell Elementary",
    url: "https://blackwell.lwsd.org/",
    description:
      "The Lake Washington School District K–5 campus at 3225 205th Place NE. Morning drop-off stacks along 205th and the short streets that feed it, and after-school play is why so many nearby yards want a tight, pet-safe bottom rail.",
  },
  {
    name: "Inglewood Middle School",
    url: "https://ims.lwsd.org/",
    description:
      "The namesake campus at 24120 NE 8th Street, where local sixth-through-eighth graders spend the week. Lighted community fields next to the school set the evening rhythm for households on the plateau side of the hill.",
  },
  {
    name: "Big Rock Park",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/big-rock-park/",
    description:
      "A wooded city park along the NE 8th Street corridor — boardwalks, a granite outcrop, and quiet loops that Inglewood families use when they want trees instead of the lake. Lots that sit toward this edge deal with deer more than parkway traffic.",
  },
];

const InglewoodPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Inglewood, Sammamish",
    pageTitle: "Inglewood Sammamish Fence Installation",
    description: META_DESCRIPTION,
    faqItems: INGLEWOOD_FAQS,
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
              href="/service-areas/sammamish"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sammamish
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Inglewood, Sammamish WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Inglewood Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence work for Inglewood Hill — cedar privacy on the plateau
                  streets, hogwire that keeps Lake Sammamish in view, and
                  stepped runs built for the drop down to East Lake Sammamish
                  Parkway NE.
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
                  city="Inglewood, Sammamish"
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
                Stepped Fencing on a Hill That Drops to the Lake
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Inglewood is the northwest shoulder of Sammamish, where
                Inglewood Hill Road falls from the plateau toward East Lake
                Sammamish Parkway NE and the water. Streets such as 205th Place
                NE, 212th Avenue NE, and 216th Avenue NE mix older lakefront
                lots with hillside homes that look west across the lake. The
                grade is the job: a fence built as one long level line either
                buries the downhill rail or leaves a gap a dog will find before
                the first weekend.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences
                across north Sammamish, including the Inglewood Hill corridor
                and the Sahalee edge to the east. We use Fence Genius to capture
                the drop before a post goes in the ground, so stepped runs stay
                even and shoreline-adjacent lots get hardware that can take lake
                moisture and the wind that funnels up from the parkway. There is
                no single neighborhood-wide HOA, but some plats still want a
                drawing, and lakefront parcels can sit in a Sammamish shoreline
                overlay we check before we quote.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Inglewood Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Inglewood Hill Grade Work
                      </h3>
                      <p className="text-muted-foreground">
                        We measure the fall from the plateau to the parkway,
                        then step or rack panels so the top stays even and the
                        bottom tracks the lawn. On the steepest cuts we shorten
                        bays rather than forcing a six-foot panel across a drop.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Lake-View Corridors That Still Hold Pets
                      </h3>
                      <p className="text-muted-foreground">
                        West-facing yards paid for that Lake Sammamish outlook.
                        Hogwire in a cedar frame keeps the water in the picture
                        and the dog in the yard, without a solid wall across the
                        downhill side.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Parkway Moisture and Wind Details
                      </h3>
                      <p className="text-muted-foreground">
                        Lots along East Lake Sammamish Parkway NE take more damp
                        and more wind off the water than plateau streets. We
                        spec fasteners and finishes for that exposure, not a
                        generic inland kit.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {WARRANTY_CONSTANTS.YEARS}-Year Workmanship Warranty
                      </h3>
                      <p className="text-muted-foreground">
                        Full coverage on materials and labor, including stepped
                        posts on Inglewood Hill and the wet-season cycle that
                        stresses shoreline-adjacent hardware. Inglewood
                        installs are backed for the long haul.
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
                What Inglewood Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our backyard falls hard toward the parkway. They
                    stepped every bay so the top looks level from the deck and
                    the dog cannot slide under the downhill end. Worth the extra
                    measuring day.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Inglewood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We wanted the lake, not a cedar box. Hogwire on the
                    west line and privacy on the sides was the right mix. They
                    left the firs on 212th alone and the gate still clears the
                    slope.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Inglewood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Parkway traffic at the bottom of the hill is louder
                    than we expected when we bought. The street-side cedar
                    line cut the evening noise enough that we use the patio
                    again.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Helen in Inglewood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Inglewood Sammamish fence" />

        {/* 6. Photo Gallery — nearby Sammamish installs until Inglewood-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Sammamish"
          title="Recent Fence Work Near Inglewood"
          description="These photos are from nearby Sammamish jobs, including Klahanie on the south side of the plateau. Same crew, same materials, and the same Fence Genius process we use on Inglewood Hill lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Sammamish" neighborhood="Inglewood" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Inglewood-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Inglewood Hill Terrain Engineering
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Inglewood Hill Road is one of the steeper climbs on the
                    plateau, and plenty of side yards fall with it. A fence
                    built as one long level line either buries the bottom rail
                    or leaves a gap a small dog can use. We measure grade with
                    Fence Genius, then step or rack panels so the top stays even
                    and the bottom tracks the lawn. On the sharpest cuts toward
                    East Lake Sammamish Parkway NE we shorten panel bays rather
                    than forcing a six-foot bay across a drop.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Lake Wind, Moisture, and Shoreline Overlays
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    West-facing lots take weather off Lake Sammamish that
                    plateau streets never see. Pre-stained Western Red Cedar and
                    stainless or hot-dipped fasteners handle the damp without
                    rust streaks down the boards. Parcels that sit in a mapped
                    shoreline or critical-area buffer along the parkway can
                    trigger extra city review even at six feet. We check that
                    overlay before we order materials so you are not rewriting a
                    design after the lumber is on the truck.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Inglewood View Preservation Versus Privacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many downhill yards were bought for the water and the
                    Olympics, not for a solid wall. Hogwire on the west line
                    keeps the outlook and still contains pets; six-foot cedar on
                    the side yards cuts the neighbor and the parkway noise.
                    Interior lots closer to 228th and NE 8th usually want full
                    privacy after school. We walk both options on site so the
                    mix matches how you actually use the deck.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Inglewood Trees, Plats, and City Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Firs and cedars on 205th Place NE and 212th Avenue NE often
                    sit on or near the property line. We hand-dig near those
                    root flares instead of trenching through them. Inglewood
                    does not sit under one master association — some 1980s–1990s
                    plats still want height, stain, and a simple site plan —
                    while everyone follows City of Sammamish zoning: typically
                    four feet in the front yard and six feet on the sides and
                    rear. Sight-distance triangles on Inglewood Hill Road and
                    NE 8th can shorten a front stretch even when the rear line
                    stays at six feet.
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
                Fence Installation Cost in Inglewood
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A new fence is a real investment on Inglewood Hill lots. These
                ranges cover typical residential runs; stepped panels, root-zone
                hand-digging, extra gates, and shoreline details can change the
                final number.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $46–$70 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $40–$60 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $56–$78 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Stepped hillside work and custom gates are itemized
                  separately. Get an exact quote for your Inglewood property
                  with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Inglewood property
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
                Popular Fence Styles in Inglewood
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on plateau streets near 228th and on lots that
                    take parkway noise. Full screening for evening use of the
                    yard, pre-stained cedar that holds up to lake-side winters,
                    and a look that fits hillside homes on Inglewood Hill Road.
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
                    Cedar frame with black mesh for west-facing yards that want
                    Lake Sammamish left open. Dogs stay in, more of the water
                    stays in view, and the lighter footprint is easier around
                    roots than a solid privacy wall.
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
                    low-maintenance option when a commute down Inglewood Hill
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
                Our Inglewood Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Inglewood Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, mark the fall toward the
                    parkway or the lake, map mature roots, and check whether a
                    plat or a Sammamish shoreline overlay applies. Fence Genius
                    captures grade so panels are built to the actual drop, not a
                    flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Inglewood Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your street has a small plat
                    contact, we prepare a drawing and material list. If it does
                    not, we still document Sammamish height and setback rules —
                    including sight-distance on Inglewood Hill Road and NE 8th
                    — so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements —
                    pre-stained cedar, hogwire frames, or hybrid modules — so
                    Inglewood install days are mostly setting posts and hanging
                    finished sections on the hill.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Inglewood Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets
                    off Inglewood Hill Road and 212th Avenue NE. Hand-digging
                    near mature roots, careful carry-in on tight downhill side
                    yards, and full cleanup at the end of each day. Most jobs
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
          title="Inglewood Fence Installation FAQs"
          items={INGLEWOOD_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Sammamish"
        neighborhoodName="Inglewood"
        attractions={INGLEWOOD_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Inglewood households sit in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              , not the Issaquah district that covers south Sammamish. Most
              elementary students walk or short-hop to{" "}
              <a
                href="https://blackwell.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Elizabeth Blackwell Elementary
              </a>{" "}
              on 205th Place NE, then later to{" "}
              <a
                href="https://ims.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Inglewood Middle School
              </a>{" "}
              on NE 8th Street and{" "}
              <a
                href="https://ehs.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Eastlake High School
              </a>{" "}
              on 228th Avenue NE. After a Saturday at the landing, families
              often continue to the{" "}
              <a
                href="https://kcls.org/locations/sammamish/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sammamish Library
              </a>{" "}
              at the Commons for a hold pickup.
            </p>
            <p>
              Dinner after a trail ride is usually a short hop west toward{" "}
              <a
                href="https://www.redmondtowncenter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Town Center
              </a>{" "}
              rather than a drive across the plateau. Commuters heading to
              Bellevue or Seattle drop Inglewood Hill to East Lake Sammamish
              Parkway NE, or take 228th toward SR-520. Height and setback
              questions are covered in the{" "}
              <a
                href="https://www.sammamish.us/media/jqrdsnjd/220-handout-fencing.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                City of Sammamish residential fence handout
              </a>
              ; weekend miles on the water live at{" "}
              <a
                href="https://www.sammamish.us/our-community/recreation/parks-trails/sammamish-landing-park/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sammamish Landing Park
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
                Also Serving Nearby Sammamish Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                From Inglewood we also install in Sahalee just to the east,
                Pine Lake to the south, and across the rest of the Sammamish
                plateau. Redmond&apos;s Idylwood shoreline sits across the lake
                from the bottom of the hill.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/sahalee/hoa-approved-fencing">
                    Sahalee
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/pine-lake">Pine Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/beaver-lake">
                    Beaver Lake
                  </Link>
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
                Ready to Enhance Your Inglewood Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Inglewood. We&apos;ll walk the
                lot, talk through privacy versus open hogwire on the lake side,
                and quote a fence that follows Inglewood Hill instead of
                fighting it.
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

export default InglewoodPage;
