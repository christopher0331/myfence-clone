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

const CANONICAL = "https://myfence.com/service-areas/seattle/fremont";
const META_TITLE =
  "Fremont Fence Installation | Seattle | Canal Lots & Hillside Bungalows | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Fremont, Seattle, WA. Cedar, hogwire & hybrid fencing for Ship Canal lots, Burke-Gilman edges, and the climb toward N 46th. Free quotes. (253) 455-1885.";

const FREMONT_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Fremont, Seattle?",
    answer:
      "Seattle's Department of Construction and Inspections says you do not need a permit for a fence 8 feet or less that has no masonry or concrete elements over 6 feet. You do need a construction permit if the fence is in a flood-prone area, and you need one if the fence is taller than 8 feet. Most of those taller jobs are a subject-to-field-inspection permit with a site plan and section drawings. Zoning is separate from the permit: in neighborhood residential and multifamily zones the fence is limited to 6 feet, plus up to 2 more feet of mostly open architectural features such as an arbor or trellis, and it is limited to 4 feet in a front or street-side setback. On a slope the fence may reach 8 feet if the average height between posts stays at 6 feet. A fence on a retaining wall that raises the grade is limited to 9 feet 6 inches combined; if the wall lowers the grade, the normal fence limit applies. Environmentally critical areas, including steep slopes and wetlands, follow different rules. Fremont is not one of Seattle's seven landmark preservation districts, so a typical house does not need a district Certificate of Approval. B.F. Day Elementary at 3921 Linden Avenue N is itself a designated landmark; that status does not automatically cover the bungalows around it. Canal-edge lots along N Canal Street and the Burke-Gilman Trail are the ones we check for floodplain before we quote. Call SDCI at (206) 684-8600 if the parcel is unclear.",
  },
  {
    question:
      "What fence styles work best for Fremont's canal lots and hillside bungalows?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off Evanston Avenue N, Linden Avenue N, and the alleys between N 39th and N 43rd, where neighboring houses sit close and the second story looks straight into the yard. South-facing lots above Fremont Canal Park and the Burke-Gilman Trail often want a solid neighbor face, then a lighter hogwire stretch toward the Ship Canal so the water stays in the room. Houses under the Aurora Bridge near Troll Avenue N and N 36th Street usually want the solid run on the bridge side, where traffic noise is the point of the fence. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain a damp canal-edge corner after every wet winter. Fence Genius maps short bays and stepped panels so the climb from N 34th Street toward N 46th Street follows the grade instead of leaving a gap at the downhill post.",
  },
  {
    question: "How much does fence installation cost in Fremont, Seattle?",
    answer:
      "Fremont fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Stepped panels on the climb toward N 46th Street, extra gates on townhome courts near Stone Way N, and hand-carrying materials along N Canal Street or a narrow alley can move a quote. Removal of an old fence is priced separately. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Fremont?",
    answer:
      "Most Fremont bungalow and townhome projects finish in one to three working days after any SDCI paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from stepping a run up from the canal, parking around Burke-Gilman commuters and the June Fremont Fair crowd at Fremont Canal Park, or matching an existing neighbor height on a short side yard. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Fremont?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Fremont mixes early-1900s pins on the bungalow grid with later townhome courts near Stone Way N and N 34th Street, so confirming the line before digging saves a redo on a short side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const FREMONT_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Fremont Canal Park",
    url: "https://www.seattle.gov/parks/parks/fremont-canal-park",
    description:
      "The linear park at 199 N Canal Street, along the north side of the Ship Canal from about Phinney Avenue N to 3rd Avenue NW, next to the Burke-Gilman Trail. June's Fremont Fair fills this edge; we stage material drops so a trailer is not sitting in that curb lane.",
  },
  {
    name: "Burke-Gilman Trail",
    url: "https://www.seattle.gov/parks/parks/burke-gilman-trail",
    description:
      "The former rail trail that runs the canal edge through Fremont. Commute hours and weekend riders set when we can unload on N Canal Street and N 34th Street without blocking the path.",
  },
  {
    name: "Troll's Knoll Park",
    url: "https://www.seattle.gov/parks/parks/trolls-knoll-park",
    description:
      "The park at 820 N 36th Street, in the right-of-way at the north end of the Aurora Avenue Bridge and just west of the Fremont Troll. Lots on N 36th and Troll Avenue N take bridge noise and a steady stream of visitors.",
  },
  {
    name: "B.F. Day Playground",
    url: "https://www.seattle.gov/parks/parks/bf-day-playground",
    description:
      "The playfield at 4020 Fremont Avenue N, at Fremont Avenue N and N 41st Street, next to B.F. Day Elementary. The 1911 shelterhouse and the school day both shape how we time work on the surrounding blocks.",
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
                  Cedar privacy on tight bungalow lots, hogwire that keeps the Ship Canal in view, and hybrid systems for the climb from N Canal Street toward N 46th Street and the blocks under the Aurora Bridge.
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

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing Between the Ship Canal and N 50th Street
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Fremont sits on the north bank of the Lake Washington Ship Canal, with Ballard to the west, Wallingford across Stone Way N, and Phinney Ridge and Woodland Park above N 50th Street. The{" "}
                <a
                  href="https://www.seattle.gov/documents/departments/neighborhoods/historicpreservation/historicresourcessurvey/context-fremont.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  city&apos;s Fremont residential survey
                </a>{" "}
                used those edges: the canal and Lake Union on the south, N 50th Street on the north, Stone Way on the east, and 8th Avenue NW on the west. Fremont Avenue N is the spine. Shops and restaurants cluster on N 34th, N 35th, and N 36th. The residential grid climbs through Evanston, Linden, and Phinney toward N 41st, N 43rd, and N 46th. Older craftsman bungalows fill most of that grid. Newer townhome courts sit closer to the canal and along Stone Way N. Yards are short, alleys are narrow, and a south lot line may be a few steps from the Burke-Gilman Trail.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across Seattle, including canal-edge and hillside lots in Fremont. Fence Genius records the rise from N Canal Street, the true length of a bungalow side yard, and the neighbor fence we have to meet before a crew arrives. The result is a fence sized for a Fremont lot, with panels that fit an alley gate and a grade that is already stepping before the first post is set.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Fremont Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Grade from the Canal Uphill
                      </h3>
                      <p className="text-muted-foreground">
                        The blocks between N 34th Street and N 46th Street rise fast enough that a flat panel leaves a triangle a dog can use. Fence Genius maps each bay, and we design to Seattle&apos;s average-height rule on a slope instead of guessing from the sidewalk.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Bungalow Yards, Not Acre Lots
                      </h3>
                      <p className="text-muted-foreground">
                        Side yards off Evanston Avenue N and Linden Avenue N are measured in feet. We measure the alley, the meter, and the neighbor fence first, then build panels that still leave a path to the gate.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Landmark className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        SDCI Rules, Not a Fremont District
                      </h3>
                      <p className="text-muted-foreground">
                        Fremont is not one of Seattle&apos;s seven landmark preservation districts. We still check height, front-yard limits, floodplain along the canal, and whether the parcel itself is a designated landmark before we quote.
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
                        Full coverage on materials and labor, including hardware chosen for damp canal-edge corners and the wind that comes down the Aurora Bridge corridor. We stand behind the install through Seattle winters.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Fremont Seattle fence" />

        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near Fremont"
          description="These photos are from nearby Seattle jobs. Same crew, same materials, and the same Fence Genius process we use on Fremont lots along Fremont Avenue N, N 36th Street, and the canal edge."
        />

        <FeaturedProject city="Seattle" neighborhood="Fremont" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Fremont Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Fremont cedar-and-hogwire run sits on a bungalow lot off Evanston Avenue N or N 43rd Street, close enough to the canal that a solid south wall would erase the water. The job is usually two fences in one: full-height cedar on the neighbor and alley sides, then a lighter hogwire stretch toward Fremont Canal Park so the living room still reads the Ship Canal. On N 36th Street near Troll&apos;s Knoll, the solid face goes toward the Aurora Bridge instead, because traffic noise is the problem and the view is not. Fence Genius maps the rise so panels step with the grade, and we set footings so winter runoff between two close roofs does not sit against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Fremont yards run 50–130 linear feet and wrap in one to three working days after any city paperwork. We use cedar privacy, hogwire, or hybrid aluminum/cedar, and we walk the line with you before posts go in so the canal stretch, the wet corner, and the steepest bay are all accounted for.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fremont-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    The Climb from N 34th Street to N 46th
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Canal-level blocks along N Canal Street and N 34th Street are relatively flat. A few streets north, the same lots are stepping. A crew that treats Fremont like a level Ballard alley will leave a gap or bury a rail. Fence Genius maps the grade so each bay follows the yard. On a sloping site Seattle allows the high point to read taller when the average height between posts stays within the six-foot zoning limit. We design to that average, then check it against the four-foot cap if the run sits in a front or street-side setback.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Canal Moisture, the Trail, and Fair Week
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots backing Fremont Canal Park stay damp longer than a yard at N 46th Street. Hardware that is fine on a dry upper block can streak here. We keep soil off the first board and talk through whether the canal corner should be hybrid. The Burke-Gilman Trail is the neighborhood&apos;s commute path, and Seattle Parks notes that the Fremont Fair in June draws a large crowd to the canal park. We schedule deliveries outside those peaks so a trailer is not blocking N Canal Street or the trail crossing.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Aurora Bridge Noise at Troll&apos;s Knoll
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seattle Parks places Troll&apos;s Knoll Park at 820 N 36th Street, in the right-of-way at the north end of the Aurora Avenue Bridge and just west of the Fremont Troll. Houses on N 36th Street and Troll Avenue N hear the bridge all day, and visitors park on the same blocks. A solid cedar run on that face does more work than an open panel. The opposite side of the same lot may still want hogwire if it opens toward a neighbor garden rather than the roadway. We do not wrap every side at the same height when only one side is taking the noise.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Seattle Fence Rules in a Neighborhood Without a Landmark District
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seattle&apos;s historic-preservation FAQ lists seven preservation districts. Fremont is not one of them, so a street-visible fence on an ordinary house does not go through a district board the way a Ballard Avenue storefront does. SDCI still limits height: 6 feet in neighborhood residential and multifamily zones, 4 feet in a front or street-side setback, with the slope average and the retaining-wall combination rules on the same fence page. A flood-prone canal lot needs a construction permit even when the fence is under 8 feet. Steep-slope and wetland overlays, more common on the upper blocks toward N 50th Street, follow the environmentally critical areas code. B.F. Day Elementary, at 3921 Linden Avenue N, is a designated Seattle landmark; work on that parcel is a different question from a fence on the house across the street. We check the parcel before we order materials.
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
                Fence Installation Cost in Fremont
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Fremont fence is often a short, mixed-style run: a quieter neighbor face plus an open stretch toward the canal, or a solid face toward the bridge. Access, gates, and stepped panels move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Tear-out of an existing fence, extra gates on a townhome court, and hand-carrying materials up from N Canal Street are itemized separately. Get an exact quote for your Fremont property with a free on-site measurement.
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
                    The workhorse on neighbor sides, alleys, and the Aurora-facing run near N 36th Street. Pre-stained cedar holds up in a wet canal-edge yard and fits both older bungalows and later townhomes off Stone Way N.
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
                    Cedar frame with black mesh for lots that still want the Ship Canal or a garden in the room. Dogs stay in, and the lighter face takes less wind off the bridge than a solid wall on every side.
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
                    Aluminum panels in a cedar frame on steel posts for the damp corner along N Canal Street or a north-facing side yard that has already eaten one wood fence. Quiet enough for Fremont Avenue N.
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

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Fremont Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Fremont Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the side yards, note whether the open stretch faces the canal or should face away from the bridge, and map utilities. Fence Genius captures length and grade so panels are built to the actual hill, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. SDCI Height and Flood Check</h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle&apos;s 6-foot zoning limit, the 4-foot front and street-side setback, the slope average, and whether a canal-edge parcel needs a permit because it is flood-prone. Steep-slope overlays on the upper blocks get checked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Fremont install days are mostly setting posts and hanging finished sections that already match the stepped side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Fremont Installation</h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to alleys and residential streets off Fremont Avenue N, Evanston Avenue N, N 36th Street, and N Canal Street. Drainage-aware hardware on the wet canal corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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

        <NeighborhoodFaqSection
          title="Fremont Fence Installation FAQs"
          items={FREMONT_FAQS}
        />
      </main>

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
                href="https://www.seattleschools.org/schools/dayes/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                B.F. Day Elementary
              </a>{" "}
              is at 3921 Linden Avenue N. The district lists the building on the Seattle Historic Preservation Landmarks list. The playground next door, at Fremont Avenue N and N 41st Street, is the after-school field for the surrounding blocks.
            </p>
            <p>
              Weekday life also runs along Fremont Avenue N and the canal. For fence height and permit questions, start with{" "}
              <a
                href="https://www.seattle.gov/construction-and-inspections/permits/common-projects/fences"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle SDCI fence guidance
              </a>
              . Seattle&apos;s{" "}
              <a
                href="https://www.seattle.gov/neighborhoods/historic-preservation/frequently-asked-questions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                historic-preservation FAQ
              </a>{" "}
              names the seven preservation districts; Fremont is not on that list. The neighborhood puts Ballard, Queen Anne, and Wallingford within a short ride, which is why so many Fremont lots want a fence that holds a dog on a small yard and still leaves a window to the canal.
            </p>
          </>
        }
      />

      <main>
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Seattle Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Seattle. From Fremont we also work in Ballard toward the locks, Queen Anne and Magnolia across the canal, and Capitol Hill and Ravenna farther east.
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
                  <Link href="/service-areas/seattle/magnolia">Magnolia</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/capitol-hill">Capitol Hill</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/ravenna">Ravenna</Link>
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
                Ready to Enhance Your Fremont Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Fremont. We&apos;ll walk the lot, talk through a canal-facing stretch versus a solid face toward the bridge, and quote a fence that fits your property.
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
