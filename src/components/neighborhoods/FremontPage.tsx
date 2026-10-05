"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Award,
  ArrowLeft,
  MapPin,
  Phone,
  Waves,
  Volume2,
  Bike,
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

const CANONICAL = "https://myfence.com/service-areas/seattle/fremont";
const META_TITLE =
  "Fremont Fence Installation | Seattle | Canal Lots & Trail Privacy | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Fremont, Seattle, WA. Cedar, hogwire & hybrid fencing for Ship Canal lots, Burke-Gilman trail yards, and Aurora-adjacent homes. Free quotes. (253) 455-1885.";

const FREMONT_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Fremont, Seattle?",
    answer:
      "Most Fremont side- and rear-yard fences six feet or under do not need a Seattle Department of Construction and Inspections building permit. Front and street-side setbacks are usually capped at four feet. Corner lots on Fremont Avenue N, N 34th Street, N 36th Street, and Stone Way N must keep sight triangles clear. Fremont is not a city landmark historic district, so a Certificate of Approval is not automatic the way it is on Ballard Avenue. A few parcels — including work that touches the Fremont Bridge setting or a designated building such as B.F. Day Elementary — can still need Landmarks Preservation Board review. MyFence.com checks the parcel, any landmark controls, and the slope average before we quote.",
  },
  {
    question:
      "What fence styles work best for Fremont's canal lots and trail-facing yards?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off Linden Avenue N, Palatine Avenue N, Evanston Avenue N, and Dayton Avenue N, where bungalows sit close enough that a shorter screen still reads the second floor. Lots along N 34th Street and the Burke-Gilman Trail often want a solid neighbor face, then a lighter hogwire stretch toward the Ship Canal so the water and boat traffic stay in the room. Homes next to Aurora Avenue N usually pick a taller, denser cedar run on the highway side to cut traffic noise. Hybrid aluminum-and-cedar on steel posts suits owners who do not want to restain after every wet winter on a canal-side lot. Fence Genius maps short bays and stepped panels so the fence follows the climb toward Phinney Ridge instead of leaving a gap at the downhill post.",
  },
  {
    question: "How much does fence installation cost in Fremont, Seattle?",
    answer:
      "Fremont fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Stepped panels on the climb toward N 43rd, extra gates on townhome courts near Fremont Avenue N, and Sunday-market or Fremont Fair staging on N 34th can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Fremont?",
    answer:
      "Most Fremont residential and townhome projects finish in one to three working days after any SDCI or landmark paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from stepping a run up Linden or Palatine, parking around Fremont Bridge openings, or waiting out Sunday Market traffic on Evanston and N 34th. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Fremont?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Fremont mixes century-old pins on the bungalow grid with later townhome courts near Fremont Avenue N and N 36th Street, so confirming the line before digging saves a redo on a short, sloped side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const FREMONT_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Troll's Knoll Park",
    url: "https://www.seattle.gov/parks/parks/trolls-knoll-park",
    description:
      "The small park at 820 N 36th Street, just west of the Fremont Troll under the Aurora Bridge. Weekend photo traffic on Troll Avenue N is part of how we time material drops on those east-edge blocks.",
  },
  {
    name: "Fremont Canal Park",
    url: "https://www.seattle.gov/parks/parks/fremont-canal-park",
    description:
      "The linear park along the Ship Canal from Phinney Avenue N toward 3rd Avenue NW. Lots facing this stretch usually want a fence that holds dogs without turning the boat traffic into a solid wall.",
  },
  {
    name: "A. B. Ernst Park",
    url: "https://www.seattle.gov/parks/parks/a-b-ernst-park",
    description:
      "The hillside pocket park at 723 N 35th Street, next to the Fremont Library. Nearby lots sit on the same drop from 35th to 34th, so we design stepped bays instead of forcing a flat-lot panel down the grade.",
  },
  {
    name: "Gas Works Park",
    url: "https://www.seattle.gov/parks/parks/gas-works-park",
    description:
      "The Lake Union park at 2101 N Northlake Way, a short walk east of Fremont. Trail and kite-hill crowds on Northlake are why we keep alley gates swinging toward the sidewalk, not into that walk.",
  },
  {
    name: "Fremont Sunday Market",
    url: "https://www.fremontmarket.com/",
    description:
      "The weekly street market around 3401 Evanston Avenue N and N 34th Street. We stage so a trailer is not sitting in that curb lane when Sunday vendors set up or the Fremont Fair fills the canal blocks.",
  },
];

const FremontPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Fremont, Seattle",
    pageTitle: "Fremont Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: FREMONT_FAQS,
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
                    Serving Fremont, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Fremont Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on canal-side bungalow lots, hogwire that keeps the Ship Canal in view, and hybrid systems built for Burke-Gilman trail yards, Aurora Avenue noise, and the compact courts around Fremont Avenue N.
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
                  city="Fremont, Seattle"
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
                <Award className="h-5 w-5 text-primary" />
                {WARRANTY_CONSTANTS.YEARS}-Year Warranty
              </span>
            </div>
          </div>
        </section>

        {/* 3. Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Canal-Side Fencing North of the Fremont Bridge
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Fremont sits north of the Lake Washington Ship Canal, east of Ballard, west of Wallingford, and south of the climb toward Phinney Ridge. Fremont Avenue N is the commercial spine — shops and townhomes cluster between N 34th Street and N 36th Street, the Fremont Bridge ties the neighborhood to Queen Anne, and Aurora Avenue N cuts the east edge under the Troll. Linden, Palatine, Evanston, Dayton, and Francis hold the quieter bungalow grid; N 34th and the Burke-Gilman Trail face the canal; N 43rd and N 45th step up toward Phinney. Older craftsman yards sit a few streets off B.F. Day Elementary while newer courts fill infill parcels toward Fremont Avenue and Stone Way. Yards here are wetter than a Queen Anne hilltop lot and busier at the trail edge than a Ravenna side yard. The design conversation starts with how the grade steps, whether the canal or trail face should stay open, and how much Aurora noise a solid run needs to block.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Seattle, including canal-adjacent work in Fremont and neighboring Ballard. We use Fence Genius to capture the drop from Palatine toward N 34th, the tight side yards off Linden Avenue N, and the true length of a trail-facing run before a crew arrives. The goal is a fence that belongs on a Fremont city lot — not a long suburban kit forced down a six-foot side yard that also happens to sit above a Sunday Market stall on Evanston.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Fremont Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Canal Moisture, Mapped Drainage
                      </h3>
                      <p className="text-muted-foreground">
                        Lots on N 34th Street and the Ship Canal hold damp soil longer after a rain. We keep the first board off grade, choose hardware that lasts in that wet belt, and set footings so winter runoff between two roofs does not pond against the bottom rail.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Bike className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Trail Privacy Without a Blank Wall
                      </h3>
                      <p className="text-muted-foreground">
                        Burke-Gilman commuters pass a few feet from some canal yards. We keep the trail face private where you need it and lighter toward the water so the reason someone bought a N 34th lot stays in the living room.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Aurora Avenue Noise Screening
                      </h3>
                      <p className="text-muted-foreground">
                        Homes near Aurora Avenue N and Troll Avenue N deal with highway traffic the rest of Fremont does not. A denser cedar run on that edge, with a quieter neighbor face, is a common split we design on the east side of the neighborhood.
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
                        Full coverage on materials and labor, including hardware chosen for damp canal-side yards and hilltop wind on the Phinney climb. We stand behind the install through Seattle winters.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Fremont Seattle fence" />

        {/* 6. Photo Gallery — nearby Seattle installs until Fremont-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near Fremont"
          description="These photos are from nearby Seattle jobs, including Ballard, Queen Anne, and Ravenna. Same crew, same materials, and the same Fence Genius process we use on Fremont lots along Linden Avenue N, N 34th Street, and the Burke-Gilman Trail."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Seattle" neighborhood="Fremont" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Fremont Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Fremont cedar-and-hogwire run sits on a compact lot off Linden Avenue N or N 34th Street, close enough to the Burke-Gilman Trail that a solid canal wall would erase the reason the house faces the water. The job is usually two fences in one: full-height cedar on the uphill neighbor and alley sides, then a lighter hogwire stretch toward the Ship Canal so the living room still reads boat traffic and the Fremont Bridge. Fence Genius maps the drop so panels step with the grade instead of leaving a wedge at the downhill post, and we set footings so winter runoff between two roofs does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Fremont yards run 60–140 linear feet and wrap in one to three working days after any city paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the trail stretch, the wet canal corner, and the steepest bay toward Phinney are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fremont-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Fremont Terrain From the Canal to Phinney Ridge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The neighborhood sits nearly flat along N 34th and the Ship Canal, then climbs north on Linden, Palatine, and Evanston toward N 43rd and Phinney Ridge. A flat-lot crew will leave a stepped gap or bury the low rail on that climb. Fence Genius maps the grade so each bay follows the yard instead of fighting it. On a sloping site Seattle allows the high point to read taller as long as the average height between posts stays within the six-foot rule — we design to that average instead of guessing from the sidewalk on Fremont Avenue N.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Ship Canal Moisture and Aurora Wind in Fremont
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Canal-side yards stay damp longer after a rain, and the Aurora Bridge corridor funnels wind that will rack a tall solid wall on N 36th Street. Hardware that lasts on a sheltered Ravenna side yard can loosen here in a few seasons. We keep soil off the first board and talk through whether the wet corner should be hybrid instead of a second round of stain. Walling every side in the same height is the most common regret we hear when the canal view was the reason someone bought the lot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Fremont Landmark Parcels, Not a District Overlay
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike Ballard Avenue or Harvard-Belmont, Fremont does not have a city landmark historic district that reviews every street-visible fence. What it does have is a handful of individually designated properties and the Fremont Bridge as a civic landmark. Work on a designated parcel can still need a Certificate of Approval from the Landmarks Preservation Board. We treat that check as part of the design — height, finish, and a simple site plan — so you are not surprised after a neighbor flags the street face. Lots that are not landmarks still follow Seattle height rules: six feet in side and rear yards, four feet in most front and street-side setbacks.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Staging Around the Fremont Bridge and Sunday Market
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Infill around Fremont Avenue N, N 36th Street, and Stone Way produced townhome courts and leftover bungalow lots whose side yards are measured in feet, not tens of feet. A panel that works on an Eastside acre lot will not swing a gate here. We measure the alley, the utility meters, and the neighbor fence first, then build panels that leave a usable path to Linden, Evanston, and N 34th. Bridge openings, Sunday Market setup on Evanston, and June Fremont Fair crowds also mean we plan material drops instead of leaving a trailer on N 34th all afternoon.
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
                Fence Installation Cost in Fremont
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Fremont fence is often a short, mixed-style run: a quieter neighbor face plus an open stretch toward the canal or a denser screen toward Aurora. Access, gates, stepped panels, and weekend-market staging move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Tear-out of an existing fence, extra gates on a townhome court, and hand-carrying materials on the climb toward Phinney may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Fremont property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Fremont property</Link>
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
                Popular Fence Styles in Fremont
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides, alley faces, and Aurora-adjacent lots. Full height for two-story townhomes, pre-stained cedar that holds up in a wet canal-side yard, and a look that fits both older craftsman houses and later courts off Fremont Avenue N.
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
                    Cedar frame with black mesh for lots that still want the Ship Canal or Gas Works skyline in the room. Dogs stay in, the lighter footprint takes less bridge-corridor wind than a solid wall, and the water does not disappear after a replacement.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a damp N 34th corner or trail-facing stretch has already eaten one fence. Strong enough for family yards without looking commercial on Fremont Avenue.
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
                Our Fremont Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Fremont Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the tight side yards, note the canal- or trail-facing stretch, map utilities, and check whether an Aurora-side run should stay denser. Fence Genius captures length, grade, and the neighbor fence so panels are built to the actual yard, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Fremont Design & Landmark Check
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle height rules plus any Certificate of Approval if the parcel is a designated landmark. Corner-lot sight triangles on Fremont Avenue N, N 34th Street, N 36th Street, and Stone Way N get marked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Fremont install days are mostly setting posts and hanging finished sections that already match the stepped side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Fremont Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off Linden Avenue N, Palatine Avenue N, N 34th Street, and Evanston Avenue N. Drainage-aware hardware on the wet canal corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Fremont Fence Installation FAQs"
          items={FREMONT_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Seattle"
        neighborhoodName="Fremont"
        attractions={FREMONT_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Fremont households sit in{" "}
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
                href="https://dayes.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                B.F. Day Elementary
              </a>{" "}
              is at 3921 Linden Avenue N on the residential grid, and many families later attend{" "}
              <a
                href="https://hamiltonms.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Hamilton International Middle School
              </a>{" "}
              at 1610 N 41st Street toward Wallingford. After school, the{" "}
              <a
                href="https://www.spl.org/hours-and-locations/fremont-branch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fremont Branch of the Seattle Public Library
              </a>{" "}
              on N 35th Street is a short walk from the shops on Fremont Avenue N.
            </p>
            <p>
              Weekday life also clusters around the{" "}
              <a
                href="https://www.seattle.gov/parks/parks/burke-gilman-trail"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Burke-Gilman Trail
              </a>{" "}
              and the canal blocks that host the{" "}
              <a
                href="https://www.fremontmarket.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fremont Sunday Market
              </a>
              , which is why we schedule crews around weekend vendor setup on N 34th. For fence height and permit questions, start with{" "}
              <a
                href="https://www.seattle.gov/construction-and-inspections/permits/common-projects/fences"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle SDCI fence guidance
              </a>
              {" or the "}
              <a
                href="https://www.seattle.gov/neighborhoods/historic-preservation/landmarks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle landmarks program
              </a>{" "}
              if your parcel is one of the neighborhood&apos;s designated properties. The canal puts Ballard, Queen Anne, and Wallingford within a short ride — which is why so many Fremont lots want a fence that works as hard as the commute and still leaves a window to the water.
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
                We install fences throughout Seattle. From Fremont we also work in Ballard toward Shilshole and Queen Anne across the bridge, and we quote Wallingford, Green Lake, and Magnolia from the Seattle service-area page.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Seattle overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/ballard">Ballard</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/queen-anne">Queen Anne</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/capitol-hill">Capitol Hill</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Wallingford</Link>
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
                Ready to Enhance Your Fremont Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Fremont. We&apos;ll walk the lot, talk through a canal-facing stretch vs. a private trail or Aurora face, and quote a fence that fits your property.
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

export default FremontPage;
