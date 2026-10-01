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
  Landmark,
  Wind,
  Waves,
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

const CANONICAL = "https://myfence.com/service-areas/seattle/ballard";
const META_TITLE =
  "Ballard Fence Installation | Seattle | Salt-Air Craftsman Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Ballard, Seattle, WA. Cedar, hogwire & hybrid fencing for craftsman lots, Sunset Hill wind, and Ballard Avenue review. Free quotes. (253) 455-1885.";

const BALLARD_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Ballard, Seattle?",
    answer:
      "Most Ballard side- and rear-yard fences six feet or under do not need a Seattle Department of Construction and Inspections building permit. Front and street-side setbacks are usually capped at four feet. Corner lots on 15th Avenue NW, NW Market Street, 24th Avenue NW, and NW 65th Street must keep sight triangles clear. Work visible from the street inside the Ballard Avenue Landmark District can still need a Certificate of Approval from the Landmarks Preservation Board even when SDCI does not ask for a construction permit. MyFence.com checks the parcel zone and any landmark overlay before we quote.",
  },
  {
    question:
      "What fence styles work best for Ballard's salt air and craftsman lots?",
    answer:
      "Six-foot cedar privacy is the usual choice on alley lots and shared side yards off 24th, 28th, and 32nd Avenue NW, where craftsman bungalows sit close enough that a shorter screen still reads the neighbor's second floor. Sunset Hill and Shilshole-facing yards often want a solid neighbor face, then a lighter hogwire stretch toward the Sound so the Olympic view stays in the room and the fence takes less wind. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain after every wet, salty winter near Golden Gardens or Salmon Bay. On Ballard Avenue, we keep the street-facing run quieter in detail so it reads as a residential fence, not a commercial wall. Fence Genius maps short bays and alley gates so panels fit without blocking the only walk to the curb.",
  },
  {
    question: "How much does fence installation cost in Ballard, Seattle?",
    answer:
      "Ballard fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Tight alley access off Market, extra gates on townhome courts near 15th Avenue NW, and marine-grade hardware on Sunset Hill or Shilshole lots can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Ballard?",
    answer:
      "Most Ballard residential and townhome projects finish in one to three working days after any SDCI or Landmarks paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from hand-carrying materials down an alley off 24th or 28th, parking around Sunday market hours on Ballard Avenue, or matching an existing neighbor height on a six-foot side yard. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Ballard?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Ballard mixes century-old pins on the old street grid west of 24th with later townhome courts near 15th and Market, so confirming the line before digging saves a redo on a short side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const BALLARD_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Golden Gardens Park",
    url: "https://www.seattle.gov/parks/parks/golden-gardens-park",
    description:
      "The Sound-side beach and upland trails at 8498 Seaview Place NW. Lots that sit between here and Sunset Hill usually want a fence that holds dogs without turning the Olympic view into a solid wall.",
  },
  {
    name: "Hiram M. Chittenden Locks",
    url: "https://www.nws.usace.army.mil/Missions/Civil-Works/Locks-and-Dams/Chittenden-Locks/",
    description:
      "The Army Corps locks at 3015 NW 54th Street, where Salmon Bay meets Puget Sound. Weekend walk traffic on NW 54th and the canal path is part of how we time material drops on those blocks.",
  },
  {
    name: "National Nordic Museum",
    url: "https://nordicmuseum.org/",
    description:
      "The museum at 2655 NW Market Street, on the west end of Ballard's commercial spine. Nearby lots hear Market Street traffic; we stage so a trailer is not sitting in that curb lane on a weekend.",
  },
  {
    name: "Ballard Commons Park",
    url: "https://www.seattle.gov/parks/parks/ballard-commons-park",
    description:
      "The municipal-center lawn and skate bowl at 5701 22nd Avenue NW, next to the library. Townhome courts around 22nd use this park as the daily walk — we keep alley gates swinging toward the sidewalk, not into that path.",
  },
  {
    name: "Sunset Hill Park",
    url: "https://www.seattle.gov/parks/parks/sunset-hill-park",
    description:
      "The viewpoint at 7531 34th Avenue NW, looking west across Shilshole Bay. Yards on 34th and 36th often keep a hogwire stretch so the Sound stays in the living room after a replacement.",
  },
];

const BallardPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Ballard, Seattle",
    pageTitle: "Ballard Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: BALLARD_FAQS,
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
              href="/service-areas/seattle"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Seattle
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Ballard, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Ballard Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on craftsman alley lots, hogwire that keeps the Sound in view, and hybrid systems built for Shilshole salt air, Sunset Hill wind, and the compact yards around Market Street.
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
                  city="Ballard, Seattle"
                  state="Washington"
                  radiusMiles={3}
                  zoom={14}
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
                Fencing Craftsman Lots Between Market Street and Shilshole
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ballard is the northwest Seattle neighborhood north of the Ship Canal and west of Phinney Ridge, with Crown Hill climbing north and Magnolia sitting across Salmon Bay. NW Market Street and 15th Avenue NW carry the commercial spine; Ballard Avenue NW holds the landmark commercial blocks; 24th, 28th, and 32nd Avenue NW keep the quieter bungalow grid; NW 65th, 70th, and 75th climb into Loyal Heights. Older craftsman yards sit a few streets off Sunset Hill Park while newer townhome courts fill infill parcels toward 15th and the library. Yards here are shorter than an Eastside lot and saltier than a Ravenna side yard. The design conversation starts with how close the neighbor sits, whether the west face should stay open to the Sound, and whether a landmark packet is required before a post goes in.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Seattle, including compact-lot work in Ballard and neighboring Ravenna. We use Fence Genius to capture tight alley widths, grade changes toward Sunset Hill, and the true length of a 28th Avenue run before a crew arrives. The goal is a fence that belongs on a maritime city lot — not a long suburban kit squeezed onto a six-foot side yard that also happens to sit next to a bus stop on 15th.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Ballard Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Landmark className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Ballard Avenue Packet Ready
                      </h3>
                      <p className="text-muted-foreground">
                        Street-visible work inside the Ballard Avenue Landmark District needs a Certificate of Approval, not just an SDCI height check. We document style, height, and a simple site plan so the Landmarks conversation happens before installation, not after a stop-work notice.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Hardware for Salt and Canal Moisture
                      </h3>
                      <p className="text-muted-foreground">
                        Shilshole, Golden Gardens, and the locks keep salt and damp in the air year-round. We spec fasteners and posts that hold up on a west-facing lot instead of treating Ballard like an inland side yard.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Wind className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Sunset Hill Wind and Views
                      </h3>
                      <p className="text-muted-foreground">
                        West-facing yards on 32nd, 34th, and 36th take Sound wind that will rack a tall solid wall. We keep the neighbor sides private and the view stretch lighter so the fence stays up and the Olympics stay in the room.
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
                        Full coverage on materials and labor, including hardware chosen for damp maritime yards and boulevard wind. We stand behind the install through Seattle winters.
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
                What Ballard Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit west of 32nd and wanted privacy from the alley without losing the Sound. Full cedar on the neighbor sides, hogwire toward Sunset Hill. They staged around Market Street hours so 65th stayed open.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Mara in Ballard</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our 28th Avenue side yard is barely wide enough for a wheelbarrow. They measured twice, kept the gate off the only walkway, and used hardware that will not rust out after one winter near the canal.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Erik in Ballard</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;The last fence sat in a puddle all winter next to the alley drain. They lifted the bottom board and used hybrid on the wet corner. The walkthrough checked every latch before they left.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Ballard</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Ballard Seattle fence" />

        {/* 6. Photo Gallery — nearby Seattle installs until Ballard-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near Ballard"
          description="These photos are from nearby Seattle jobs, including Ravenna and other city lots. Same crew, same materials, and the same Fence Genius process we use on Ballard lots along 24th Avenue NW, 28th Avenue NW, and Sunset Hill."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Seattle" neighborhood="Ballard" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Ballard Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Ballard cedar-and-hogwire run sits on a small lot off 28th Avenue NW or NW 70th Street, close enough to Sunset Hill that a solid west wall would erase the reason the house faces the water. The job is usually two fences in one: full-height cedar on the alley and neighbor sides, then a lighter hogwire stretch toward Shilshole so the living room still reads the Sound. Fence Genius maps the tight alley so panels fit without blocking the walk to Market Street, and we set footings so winter runoff between two roofs does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Ballard yards run 60–140 linear feet and wrap in one to three working days after any city or landmark paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the salt-facing stretch, the wet corner, and the Sound side are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ballard-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Ballard Terrain Toward Sunset Hill
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The grid climbs west from 15th toward 36th and drops south toward the Ship Canal. A flat-lot crew will leave a stepped gap or bury the low rail. Fence Genius maps the grade so each bay follows the yard instead of fighting it. On a sloping site Seattle allows the high point to read taller as long as the average height between posts stays within the six-foot rule — we design to that average instead of guessing from the sidewalk on 32nd.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Salt Air, Canal Moisture, and Wind
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Shilshole Bay and Golden Gardens keep salt in the west wind; the locks and Salmon Bay keep the south edge damp. Hardware that lasts on a Ravenna side yard can pit here in a few seasons. We keep soil off the first board and talk through whether the wet corner should be hybrid instead of a second round of stain. Walling every side in the same height is the most common regret we hear when the Sound view was the reason someone bought the lot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Ballard Avenue Landmark Review
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Ballard Avenue Landmark District covers the historic commercial blocks of Ballard Avenue NW. Work visible from the public right-of-way can require a Certificate of Approval from the Landmarks Preservation Board even when SDCI does not ask for a construction permit. We treat that packet as part of the design — height, finish, and a simple site plan — so you are not surprised after a neighbor flags the street face. Lots outside the district still follow Seattle height rules: six feet in side and rear yards, four feet in most front and street-side setbacks.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Compact Lots and Alley Staging in Ballard
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Infill around 15th Avenue NW and Market Street produced townhome courts and leftover bungalow lots whose side yards are measured in feet, not tens of feet. A panel that works on an Eastside acre lot will not swing a gate here. We measure the alley, the utility meters, and the neighbor fence first, then build panels that leave a usable path to 24th, 28th, and NW 65th. Restricted parking and Sunday market hours also mean we plan material drops instead of leaving a trailer on Ballard Avenue all afternoon.
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
                Fence Installation Cost in Ballard
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Ballard fence is often a short, mixed-style run: a quieter neighbor face plus an open stretch toward the Sound. Access, gates, salt-air hardware, and landmark review move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $50–$74 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $45–$62 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $58–$80 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Tear-out of an existing fence, extra gates on a townhome court, and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Ballard property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Ballard property</Link>
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
                Popular Fence Styles in Ballard
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides and alley faces. Full height for two-story townhomes, pre-stained cedar that holds up in a wet side yard, and a look that fits both older craftsman houses and later courts off 15th.
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
                    Cedar frame with black mesh for lots that still want Shilshole or Sunset Hill in the room. Dogs stay in, the lighter footprint takes less Sound wind than a solid wall, and the water does not disappear after a replacement.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a wet alley corner or salt-facing stretch has already eaten one fence. Strong enough for family yards without looking commercial on Market.
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
                Our Ballard Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Ballard Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the tight side yards, note the Sound-facing stretch, map utilities, and check whether a west run should stay more open. Fence Genius captures length, grade, and the neighbor fence so panels are built to the actual yard, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Ballard Design & Landmark Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle height rules plus any Ballard Avenue Certificate of Approval packet. Corner-lot sight triangles on 15th Avenue NW, NW Market Street, 24th Avenue NW, and NW 65th Street get marked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Ballard install days are mostly setting posts and hanging finished sections that already match the tight side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Ballard Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 24th, 28th, 32nd, and NW 70th. Drainage-aware hardware on the wet corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Ballard Fence Installation FAQs"
          items={BALLARD_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Seattle"
        neighborhoodName="Ballard"
        attractions={BALLARD_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Ballard households sit in{" "}
              <a
                href="https://www.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle Public Schools
              </a>
              .{" "}
              <a
                href="https://adamses.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Adams Elementary
              </a>{" "}
              is at 6110 28th Avenue NW, in the bungalow grid west of 15th, and{" "}
              <a
                href="https://whittieres.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Whittier Elementary
              </a>{" "}
              sits on NW 75th Street in Loyal Heights. Many families later attend{" "}
              <a
                href="https://ballardhs.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Ballard High School
              </a>{" "}
              on NW 65th Street. After school, the{" "}
              <a
                href="https://www.spl.org/hours-and-locations/ballard-branch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Ballard Branch of the Seattle Public Library
              </a>{" "}
              on 22nd Avenue NW is a short walk from Ballard Commons.
            </p>
            <p>
              Weekday life also clusters around NW Market Street and the{" "}
              <a
                href="https://www.seattle.gov/neighborhoods/historic-preservation/historic-districts/ballard-avenue-landmark-district"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Ballard Avenue Landmark District
              </a>
              , which is why we schedule crews around weekend market hours on those blocks. For fence height and permit questions, start with{" "}
              <a
                href="https://www.seattle.gov/construction-and-inspections/permits/common-projects/fences"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle SDCI fence guidance
              </a>
              . The canal puts Fremont, Queen Anne, and Magnolia within a short ride — which is why so many Ballard lots want a fence that works as hard as the commute and still leaves a window to the water.
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
                Also Serving Nearby Seattle Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Seattle. From Ballard we also work in Ravenna and Capitol Hill, and we quote Fremont, Queen Anne, and Green Lake from the Seattle service-area page.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Seattle overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/capitol-hill">Capitol Hill</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/ravenna">Ravenna</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Fremont</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Queen Anne</Link>
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
                Ready to Enhance Your Ballard Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Ballard. We&apos;ll walk the lot, talk through a Sound-facing stretch vs. a private alley face, and quote a fence that fits your property.
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

export default BallardPage;
