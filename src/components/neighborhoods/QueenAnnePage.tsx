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
  Landmark,
  Mountain,
  Eye,
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

const CANONICAL = "https://myfence.com/service-areas/seattle/queen-anne";
const META_TITLE =
  "Queen Anne Fence Installation | Seattle | Hilltop Views & Slopes | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Queen Anne, Seattle, WA. Cedar, hogwire & hybrid fencing for steep lots, Kerry Park views, and landmark homes. Free quotes. (253) 455-1885.";

const QUEEN_ANNE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Queen Anne, Seattle?",
    answer:
      "Most Queen Anne side- and rear-yard fences six feet or under do not need a Seattle Department of Construction and Inspections building permit. Front and street-side setbacks are usually capped at four feet. Corner lots on Queen Anne Avenue N, W Galer Street, 1st Avenue W, and W McGraw Street must keep sight triangles clear. Queen Anne is not a city landmark historic district, so a Certificate of Approval is not automatic the way it is on Ballard Avenue or Harvard-Belmont. If the parcel itself is a designated Seattle landmark — and the hill has more than fifty of them — street-visible work on that property can still need Landmarks Preservation Board review. MyFence.com checks the parcel, any landmark controls, and the slope average before we quote.",
  },
  {
    question:
      "What fence styles work best for Queen Anne's steep lots and downtown views?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off 1st Avenue W, 3rd Avenue W, and 6th Avenue W, where neighboring houses sit close enough that a shorter screen still reads the second floor. South- and west-facing lots near W Highland Drive, Kerry Park, and Kinnear Park often want a solid neighbor face, then a lighter hogwire stretch toward downtown, the Space Needle, or Elliott Bay so the reason someone bought the lot stays in the room. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain after every wet winter on a north slope. On the Counterbalance blocks of Queen Anne Avenue N and in Lower Queen Anne near Mercer, we keep the street-facing run quieter in detail so it reads as a residential fence, not a commercial wall. Fence Genius maps short bays and stepped panels so the fence follows the grade instead of leaving a gap at the downhill post.",
  },
  {
    question: "How much does fence installation cost in Queen Anne, Seattle?",
    answer:
      "Queen Anne fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Stepped panels on the south slope, extra gates on townhome courts near Seattle Center, and hand-carrying materials up W Galer or 1st Avenue W can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Queen Anne?",
    answer:
      "Most Queen Anne residential and townhome projects finish in one to three working days after any SDCI or landmark paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from stepping a run down the south face toward W Olympic Place, parking around event traffic at Seattle Center, or matching an existing neighbor height on a six-foot side yard. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Queen Anne?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Queen Anne mixes century-old pins on the upper-hill grid with later townhome courts near Mercer and 4th Avenue N, so confirming the line before digging saves a redo on a short, sloped side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const QUEEN_ANNE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Kerry Park",
    url: "https://www.seattle.gov/parks/parks/kerry-park",
    description:
      "The south-slope overlook at 211 W Highland Drive. Lots on Highland and the blocks just above it usually want a fence that holds dogs without turning the downtown and Elliott Bay view into a solid wall.",
  },
  {
    name: "Kinnear Park",
    url: "https://www.seattle.gov/parks/parks/kinnear-park",
    description:
      "The hillside park at 899 W Olympic Place, dropping toward Interbay and the Sound. Weekend walk traffic on Olympic Place is part of how we time material drops on those west-slope blocks.",
  },
  {
    name: "Parsons Gardens",
    url: "https://www.seattle.gov/parks/parks/parsons-gardens",
    description:
      "The tucked garden at 650 W Highland Drive, a short walk from Kerry Park. Nearby lots sit on the same steep south face, so we design stepped bays instead of forcing a flat-lot panel down the grade.",
  },
  {
    name: "Queen Anne Bowl Playfield",
    url: "https://www.seattle.gov/parks/parks/queen-anne-bowl-playfield",
    description:
      "The former quarry bowl at 2806 3rd Avenue W, next to McClure Middle School. Families around 3rd and 1st Avenue W use this field daily — we keep alley gates swinging toward the sidewalk, not into that walk.",
  },
  {
    name: "Seattle Center",
    url: "https://www.seattlecenter.com/",
    description:
      "The civic campus at 305 Harrison Street, at the foot of Lower Queen Anne. Event days fill Mercer and 1st Avenue N; we stage so a trailer is not sitting in that curb lane when a show lets out.",
  },
];

const QueenAnnePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Queen Anne, Seattle",
    pageTitle: "Queen Anne Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: QUEEN_ANNE_FAQS,
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
                    Serving Queen Anne, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Queen Anne Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on steep hilltop lots, hogwire that keeps downtown and Elliott Bay in view, and hybrid systems built for Counterbalance grades, W Highland Drive wind, and the compact yards around Seattle Center.
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
                  city="Queen Anne, Seattle"
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
                Stepped Fencing on Seattle&apos;s Steepest Hill
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Queen Anne is the hill north of Seattle Center and west of Lake Union, with Interbay and Elliott Bay on the west drop and the Ship Canal toward Fremont on the north. Queen Anne Avenue N is the commercial spine — Lower Queen Anne and Uptown sit at the Mercer Street base, the Counterbalance climbs the south face, and the upper-hill shops run from Galer toward McGraw. W Highland Drive and W Olympic Place hold the view lots; 1st, 3rd, 6th, and 7th Avenue W keep the quieter residential grid; Bigelow Avenue N and 4th Avenue N look east toward the lake. Older craftsman and Victorian yards sit a few streets off Kerry Park while newer townhome courts fill infill parcels toward Harrison and Republican. Yards here are steeper than a Ballard alley lot and windier than a Ravenna side yard. The design conversation starts with how the grade steps, whether the south or west face should stay open to the skyline, and whether the parcel is one of the hill&apos;s designated landmarks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Seattle, including sloped-lot work on Queen Anne and neighboring Capitol Hill. We use Fence Genius to capture the drop from the crown toward Kinnear Park, the tight side yards off 1st Avenue W, and the true length of a Highland Drive run before a crew arrives. The goal is a fence that belongs on a hilltop city lot — not a long suburban kit forced down a six-foot side yard that also happens to sit above a bus stop on Queen Anne Avenue.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Queen Anne Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Grade-Mapped Stepped Panels
                      </h3>
                      <p className="text-muted-foreground">
                        The south face from Galer down to Mercer and the west drop toward Interbay will leave a gap or bury a rail if someone installs a flat-lot kit. Fence Genius maps each bay so the fence follows the yard, and we design to Seattle&apos;s average-height rule instead of guessing from the sidewalk.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        View Corridors, Not Blank Walls
                      </h3>
                      <p className="text-muted-foreground">
                        Lots near Kerry Park, Parsons Gardens, and W Highland Drive bought the downtown and Elliott Bay outlook. We keep neighbor sides private and the view stretch lighter so the skyline stays in the living room after a replacement.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Landmark className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Landmark Parcel Checks
                      </h3>
                      <p className="text-muted-foreground">
                        Queen Anne has no neighborhood landmark district, but it has more than fifty individually designated properties, plus Queen Anne Boulevard as a city landmark. We check the parcel before we quote so a Certificate of Approval is not a surprise on a designated home.
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
                        Full coverage on materials and labor, including hardware chosen for damp north-slope yards and hilltop wind. We stand behind the install through Seattle winters.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Queen Anne Seattle fence" />

        {/* 6. Photo Gallery — nearby Seattle installs until Queen Anne-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near Queen Anne"
          description="These photos are from nearby Seattle jobs, including Ravenna and other city lots. Same crew, same materials, and the same Fence Genius process we use on Queen Anne lots along 1st Avenue W, W Highland Drive, and the Counterbalance."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Seattle" neighborhood="Queen Anne" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Queen Anne Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Queen Anne cedar-and-hogwire run sits on a sloped lot off 1st Avenue W or W Highland Drive, close enough to Kerry Park that a solid south wall would erase the reason the house faces downtown. The job is usually two fences in one: full-height cedar on the uphill neighbor and alley sides, then a lighter hogwire stretch toward the skyline so the living room still reads the Space Needle and Elliott Bay. Fence Genius maps the drop so panels step with the grade instead of leaving a wedge at the downhill post, and we set footings so winter runoff between two roofs does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Queen Anne yards run 60–150 linear feet and wrap in one to three working days after any city or landmark paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the view stretch, the wet north corner, and the steepest bay are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Queen Anne-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Queen Anne Terrain on the South and West Faces
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The hill climbs from Mercer and Harrison to the crown around Galer and Boston, then drops west toward Interbay and east toward Lake Union. A flat-lot crew will leave a stepped gap or bury the low rail. Fence Genius maps the grade so each bay follows the yard instead of fighting it. On a sloping site Seattle allows the high point to read taller as long as the average height between posts stays within the six-foot rule — we design to that average instead of guessing from the sidewalk on 3rd Avenue W.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Hilltop Wind and Moisture on Queen Anne
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The crown takes wind that will rack a tall solid wall, especially on W Highland Drive, 8th Avenue W, and the west-facing blocks above Kinnear Park. North-slope yards stay damp longer after a rain. Hardware that lasts on a sheltered Ravenna side yard can loosen here in a few seasons. We keep soil off the first board and talk through whether the wet corner should be hybrid instead of a second round of stain. Walling every side in the same height is the most common regret we hear when the downtown view was the reason someone bought the lot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Queen Anne Landmark Homes, Not a District Overlay
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike Ballard Avenue or Harvard-Belmont, Queen Anne does not have a city landmark historic district that reviews every street-visible fence. What it does have is a dense collection of individually designated landmarks and Queen Anne Boulevard as a scenic landmark drive. Work on a designated parcel can still need a Certificate of Approval from the Landmarks Preservation Board. We treat that check as part of the design — height, finish, and a simple site plan — so you are not surprised after a neighbor flags the street face. Lots that are not landmarks still follow Seattle height rules: six feet in side and rear yards, four feet in most front and street-side setbacks.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Staging on the Counterbalance and Lower Queen Anne
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Infill around Mercer, Republican, and 1st Avenue N produced townhome courts and leftover older lots whose side yards are measured in feet, not tens of feet. A panel that works on an Eastside acre lot will not swing a gate here. We measure the alley, the utility meters, and the neighbor fence first, then build panels that leave a usable path to Queen Anne Avenue, 1st Avenue W, and W Galer. Event traffic at Seattle Center and the steep grade of the Counterbalance also mean we plan material drops instead of leaving a trailer on Queen Anne Avenue all afternoon.
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
                Fence Installation Cost in Queen Anne
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Queen Anne fence is often a short, mixed-style run: a quieter neighbor face plus an open stretch toward the skyline. Access, gates, stepped panels, and landmark review on designated parcels move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Tear-out of an existing fence, extra gates on a townhome court, and hand-carrying materials on a steep south-slope lot may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Queen Anne property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Queen Anne property</Link>
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
                Popular Fence Styles in Queen Anne
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides and alley faces. Full height for two-story townhomes, pre-stained cedar that holds up in a wet north-slope yard, and a look that fits both older craftsman houses and later courts off Mercer.
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
                    Cedar frame with black mesh for lots that still want Kerry Park or Elliott Bay in the room. Dogs stay in, the lighter footprint takes less hilltop wind than a solid wall, and the skyline does not disappear after a replacement.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a damp north corner or wind-facing stretch has already eaten one fence. Strong enough for family yards without looking commercial on Queen Anne Avenue.
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
                Our Queen Anne Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Queen Anne Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the tight side yards, note the skyline-facing stretch, map utilities, and check whether a south or west run should stay more open. Fence Genius captures length, grade, and the neighbor fence so panels are built to the actual hill, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Queen Anne Design & Landmark Check
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle height rules plus any Certificate of Approval if the parcel is a designated landmark. Corner-lot sight triangles on Queen Anne Avenue N, W Galer Street, 1st Avenue W, and W McGraw Street get marked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Queen Anne install days are mostly setting posts and hanging finished sections that already match the stepped side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Queen Anne Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 1st Avenue W, 3rd Avenue W, W Highland Drive, and 7th Avenue W. Drainage-aware hardware on the wet north corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Queen Anne Fence Installation FAQs"
          items={QUEEN_ANNE_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Seattle"
        neighborhoodName="Queen Anne"
        attractions={QUEEN_ANNE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Queen Anne households sit in{" "}
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
                href="https://coees.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Coe Elementary
              </a>{" "}
              is at 2424 7th Avenue W on the west slope, and{" "}
              <a
                href="https://queenannees.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Queen Anne Elementary
              </a>{" "}
              sits at 2100 4th Avenue N toward Lake Union. Many families later attend{" "}
              <a
                href="https://mcclurems.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                McClure Middle School
              </a>{" "}
              on 1st Avenue W, next to the Bowl. After school, the{" "}
              <a
                href="https://www.spl.org/hours-and-locations/queen-anne-branch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Queen Anne Branch of the Seattle Public Library
              </a>{" "}
              on W Garfield Street is a short walk from the upper-hill shops.
            </p>
            <p>
              Weekday life also clusters around Queen Anne Avenue N and the civic campus at{" "}
              <a
                href="https://www.seattlecenter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle Center
              </a>
              , which is why we schedule crews around event traffic on Mercer. For fence height and permit questions, start with{" "}
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
              if your parcel is one of the hill&apos;s designated properties. The hill puts Ballard, Fremont, and Magnolia within a short ride — which is why so many Queen Anne lots want a fence that works as hard as the commute and still leaves a window to the water and downtown.
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
                We install fences throughout Seattle. From Queen Anne we also work in Ballard toward the Ship Canal, Capitol Hill toward downtown, and West Seattle across Elliott Bay, and we quote Fremont, Magnolia, and Green Lake from the Seattle service-area page.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Seattle overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/ballard">Ballard</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/capitol-hill">Capitol Hill</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Fremont</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Magnolia</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/west-seattle">West Seattle</Link>
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
                Ready to Enhance Your Queen Anne Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Queen Anne. We&apos;ll walk the lot, talk through a skyline-facing stretch vs. a private uphill face, and quote a fence that fits your property.
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

export default QueenAnnePage;
