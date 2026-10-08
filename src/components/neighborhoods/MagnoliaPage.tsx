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
  Wind,
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

const CANONICAL = "https://myfence.com/service-areas/seattle/magnolia";
const META_TITLE =
  "Magnolia Fence Installation | Seattle | Bluff Views & Salt Air | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Magnolia, Seattle, WA. Cedar, hogwire & hybrid fencing for Magnolia Blvd bluffs, Discovery Park edges, and Village lots. Free quotes. (253) 455-1885.";

const MAGNOLIA_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Magnolia, Seattle?",
    answer:
      "Seattle's Department of Construction and Inspections says you do not need a permit for a fence 8 feet or less that has no masonry or concrete elements over 6 feet. You do need a construction permit if the fence is in a flood-prone area, and you need one if the fence is taller than 8 feet. Most of those taller jobs are a subject-to-field-inspection permit with a site plan and section drawings. Zoning is separate from the permit: in neighborhood residential and multifamily zones the fence is limited to 6 feet, plus up to 2 more feet of mostly open architectural features such as an arbor or trellis, and it is limited to 4 feet in a front or street-side setback. On a slope the fence may reach 8 feet if the average height between posts stays at 6 feet. A fence on a retaining wall that raises the grade is limited to 9 feet 6 inches combined. Bluff lots along Magnolia Boulevard W, W Howe Street, and the west face toward Puget Sound often sit in environmentally critical areas, which follow different rules than a flat Village lot on W McGraw Street. Magnolia as a whole is not one of Seattle's street-level preservation districts. The Fort Lawton Landmark District covers a cluster of former fort buildings inside Discovery Park, not the typical house on 32nd Avenue W or W Emerson Street. Work inside that district needs a Certificate of Approval and follows its own height and material limits. Call SDCI at (206) 684-8600 if the parcel is unclear.",
  },
  {
    question:
      "What fence styles work best for Magnolia's bluff lots and Village yards?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off 28th Avenue W, 32nd Avenue W, and the alleys behind W McGraw Street, where neighboring houses sit close and the second story looks straight into the yard. West-facing lots on Magnolia Boulevard W, W Howe Street, and the blocks above Smith Cove often want a solid neighbor face, then a lighter hogwire stretch toward Elliott Bay and the Olympics so the water stays in the room. East-edge lots on Thorndyke Avenue W take rail and port noise from Interbay; those runs usually want the solid face toward the tracks. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain a windward Magnolia Boulevard corner after every wet winter. Fence Genius maps short bays and stepped panels so the drop from the boulevard toward W Galer Street or W Emerson Street follows the grade instead of leaving a gap at the downhill post.",
  },
  {
    question: "How much does fence installation cost in Magnolia, Seattle?",
    answer:
      "Magnolia fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Stepped panels on the west bluff, extra gates on Village lots near W McGraw Street, and hand-carrying materials onto a Magnolia Boulevard W terrace can move a quote. Removal of an old fence is priced separately. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Magnolia?",
    answer:
      "Most Magnolia residential projects finish in one to three working days after any SDCI paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from stepping a run down from Magnolia Boulevard W, parking around Discovery Park trail traffic on W Emerson Street and W Government Way, or matching an existing neighbor height on a short Village side yard. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Magnolia?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Magnolia mixes mid-century pins on the Village grid with later splits on the bluff and townhome courts near W Dravus Street, so confirming the line before digging saves a redo on a short, sloped side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const MAGNOLIA_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Discovery Park",
    url: "https://www.seattle.gov/parks/parks/discovery-park",
    description:
      "Seattle Parks lists the entrance at 3801 Discovery Park Blvd. Weekend trail traffic on W Emerson Street, W Government Way, and 36th Avenue W is part of how we time material drops on the north and west edges of the peninsula.",
  },
  {
    name: "Magnolia Park",
    url: "https://www.seattle.gov/parks/parks/magnolia-park",
    description:
      "The bluff picnic park at 1461 Magnolia Blvd W, near W Howe Street and W Garfield Street. Lots on those blocks usually want a fence that holds dogs without turning the Sound and downtown view into a solid wall.",
  },
  {
    name: "Magnolia Playfield",
    url: "https://www.seattle.gov/parks/parks/magnolia-playfield",
    description:
      "The multi-block field at 2518 34th Ave W, next to the community center and Catharine Blaine K-8. After-school pickup on 34th and W McGraw Street is why we keep Village alley gates swinging toward the sidewalk, not into that walk.",
  },
  {
    name: "Lawton Park",
    url: "https://www.seattle.gov/parks/parks/lawton-park",
    description:
      "The hillside park at 4005 27th Ave W, with paths that open toward Ballard and the Ship Canal. Nearby lots on 27th and W Emerson Street sit on the same north-slope grade we map before we order panels.",
  },
  {
    name: "Magnolia Boulevard",
    url: "https://www.seattle.gov/parks/parks/magnolia-boulevard",
    description:
      "The linear greenspace Seattle Parks lists from W Emerson Street to W Howe Street. Wind and salt off Puget Sound hit this face first, so we talk through hardware and whether the west run should stay open to the water.",
  },
];

const MagnoliaPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Magnolia, Seattle",
    pageTitle: "Magnolia Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: MAGNOLIA_FAQS,
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
                    Serving Magnolia, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Magnolia Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on Village side yards, hogwire that keeps Puget Sound in view, and hybrid systems for wind and salt on Magnolia Boulevard W, W Emerson Street, and the drop toward Interbay.
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
                  city="Magnolia, Seattle"
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
                Fencing on a Peninsula Between the Sound and Interbay
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Magnolia sits on its own bluff west of the BNSF yard and Terminal 91, with Queen Anne across Interbay, Ballard across Salmon Bay, and Elliott Bay wrapping the south and west faces. Three crossings carry almost every trip on or off the peninsula: W Emerson Street on the north, W Dravus Street through the middle, and the Magnolia Bridge on W Garfield Street. W McGraw Street is the Village spine between about 32nd and 35th Avenue W. Residential streets climb and drop through 28th, 32nd, 34th, and 36th Avenue W. Magnolia Boulevard W holds the west-facing lots above the water. W Commodore Way follows the canal on the north. Yards here are often wider than a Fremont bungalow lot, but the west face still has to decide how much Sound to keep and how much wind to stop.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across Seattle, including bluff and Village lots in Magnolia. Fence Genius records the drop from Magnolia Boulevard W, the true length of a McGraw side yard, and the neighbor fence we have to meet before a crew arrives. The result is a fence sized for a Magnolia lot, with panels that fit a terrace gate and a grade that is already stepping before the first post is set.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Magnolia Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Grade Off the West Bluff
                      </h3>
                      <p className="text-muted-foreground">
                        Lots on Magnolia Boulevard W, W Howe Street, and the west drop toward W Galer Street lose height fast enough that a flat panel leaves a triangle a dog can use. Fence Genius maps each bay, and we design to Seattle&apos;s average-height rule on a slope instead of guessing from the curb.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Wind className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Salt Air and Peninsula Wind
                      </h3>
                      <p className="text-muted-foreground">
                        A west lot on Magnolia Boulevard W takes more salt and more wind than a sheltered Village alley off W McGraw Street. We keep soil off the first board and talk through whether that face should be hybrid instead of another all-wood run.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Sound Views Without a Solid Wall
                      </h3>
                      <p className="text-muted-foreground">
                        Many Magnolia buyers paid for Elliott Bay, the Olympics, or the downtown skyline from Magnolia Park and the boulevard. We keep cedar on the neighbor sides and open hogwire toward the water so the reason for the lot stays in the room.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Landmark className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        SDCI Rules, Plus Fort Lawton When It Applies
                      </h3>
                      <p className="text-muted-foreground">
                        Ordinary Magnolia houses follow city fence height and setback rules. The Fort Lawton Landmark District is a separate pocket inside Discovery Park. We check the parcel before we quote so a Certificate of Approval is not a surprise.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Magnolia Seattle fence" />

        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near Magnolia"
          description="These photos are from nearby Seattle jobs. Same crew, same materials, and the same Fence Genius process we use on Magnolia lots along Magnolia Boulevard W, W McGraw Street, and W Emerson Street."
        />

        <FeaturedProject city="Seattle" neighborhood="Magnolia" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Magnolia Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Magnolia cedar-and-hogwire run sits on a west-facing lot off Magnolia Boulevard W or W Howe Street, close enough to the bluff that a solid west wall would erase Elliott Bay. The job is usually two fences in one: full-height cedar on the neighbor and alley sides, then a lighter hogwire stretch toward Magnolia Park so the living room still reads the Sound. On Thorndyke Avenue W, the solid face goes toward Interbay instead, because rail and terminal noise is the problem and the view is not. Fence Genius maps the drop so panels step with the grade, and we set footings so winter runoff on the west face does not sit against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Magnolia yards run 80–180 linear feet and wrap in one to three working days after any city paperwork. We use cedar privacy, hogwire, or hybrid aluminum/cedar, and we walk the line with you before posts go in so the water stretch, the windward corner, and the steepest bay are all accounted for.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Magnolia-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Magnolia Bluff Grade from the Boulevard Downhill
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Village blocks around W McGraw Street and 34th Avenue W are relatively gentle. A few streets west, the same lot line is stepping down the bluff. A crew that treats Magnolia like a level Ballard alley will leave a gap or bury a rail. Fence Genius maps the grade so each bay follows the yard. On a sloping site Seattle allows the high point to read taller when the average height between posts stays within the six-foot zoning limit. We design to that average, then check it against the four-foot cap if the run sits in a front or street-side setback on Magnolia Boulevard W or W Emerson Street.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Magnolia Salt, Wind, and Bridge-Day Access
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    West-facing lots along Magnolia Boulevard W stay wetter and windier than a sheltered yard behind the Village. Hardware that is fine on 28th Avenue W can streak here. We keep soil off the first board and talk through whether the west corner should be hybrid. Almost every delivery crosses W Emerson Street, W Dravus Street, or the Magnolia Bridge. Discovery Park trail days fill W Emerson Street and W Government Way; we schedule drops so a trailer is not sitting in that curb lane when the lots fill.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Magnolia View Corridors Versus Neighbor Privacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seattle Parks places Magnolia Park at 1461 Magnolia Blvd W, with the boulevard greenspace running from W Emerson Street to W Howe Street. Houses on those blocks bought the water. A six-foot solid wall on every side solves the dog and loses the reason for the lot. We keep cedar on the shared sides and open the west or south face when the view is the point. East-edge lots on Thorndyke Avenue W make the opposite call: the solid run faces Interbay, and the lighter face can open toward the house.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Seattle Fence Rules and the Fort Lawton Landmark Pocket
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most Magnolia parcels are ordinary neighborhood residential or multifamily lots. SDCI still limits height: 6 feet in those zones, 4 feet in a front or street-side setback, with the slope average and the retaining-wall combination rules on the same fence page. Steep-slope and shoreline overlays are more common on the west bluff and along W Commodore Way than on a Village alley. The Fort Lawton Landmark District is a separate historic pocket of former fort buildings inside Discovery Park. Seattle&apos;s district page requires a Certificate of Approval for exterior and landscape changes there, and the district guidelines keep fencing low and quiet — wood or hedge, not chain link. That packet does not apply to a typical house on W McGraw Street. We check the parcel before we order materials.
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
                Fence Installation Cost in Magnolia
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Magnolia fence is often a mixed-style run: a quieter neighbor face plus an open stretch toward the Sound, or a solid face toward Interbay. Access, gates, and stepped panels move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Tear-out of an existing fence, extra gates on a Village lot, and hand-carrying materials onto a Magnolia Boulevard W terrace are itemized separately. Get an exact quote for your Magnolia property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Magnolia property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Popular Fence Styles in Magnolia
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides, Village alleys, and the Interbay-facing run near Thorndyke Avenue W. Pre-stained cedar holds up in a wet west-bluff yard and fits both older houses and later splits off W Dravus Street.
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
                    Cedar frame with black mesh for lots that still want Elliott Bay or a garden in the room. Dogs stay in, and the lighter face takes less wind off Magnolia Boulevard W than a solid wall on every side.
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
                    Aluminum panels in a cedar frame on steel posts for the windward corner on Magnolia Boulevard W or a north-facing side yard that has already eaten one wood fence. Quiet enough for the Village on W McGraw Street.
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
                Our Magnolia Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Magnolia Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the side yards, note whether the open stretch faces the Sound or should face away from Interbay, and map utilities. Fence Genius captures length and grade so panels are built to the actual bluff, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. SDCI Height and Overlay Check</h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle&apos;s 6-foot zoning limit, the 4-foot front and street-side setback, the slope average, and whether a west-bluff parcel sits in a steep-slope or shoreline overlay. If the address is inside the Fort Lawton Landmark District, we flag the Certificate of Approval before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Magnolia install days are mostly setting posts and hanging finished sections that already match the stepped west face.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Magnolia Installation</h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off W McGraw Street, Magnolia Boulevard W, 32nd Avenue W, and W Emerson Street. Drainage-aware hardware on the windward corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Magnolia Fence Installation FAQs"
          items={MAGNOLIA_FAQS}
        />
      </main>

      <AboutTheArea
        cityName="Seattle"
        neighborhoodName="Magnolia"
        attractions={MAGNOLIA_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Magnolia households sit in{" "}
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
                href="https://lawtones.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lawton Elementary
              </a>{" "}
              is at 4000 27th Avenue W, across from Lawton Park.{" "}
              <a
                href="https://magnoliaes.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Magnolia Elementary
              </a>{" "}
              is at 2418 28th Avenue W. Many families later attend{" "}
              <a
                href="https://blainek8.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Catharine Blaine K-8
              </a>{" "}
              at 2550 34th Avenue W, on the playfield campus next to the community center.
            </p>
            <p>
              After school, the{" "}
              <a
                href="https://www.spl.org/hours-and-locations/magnolia-branch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Magnolia Branch of the Seattle Public Library
              </a>{" "}
              at 2801 34th Avenue W is a short walk from the Village, with the book return on W Armour Street. The{" "}
              <a
                href="https://www.seattle.gov/parks/community-centers/magnolia-community-center"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Magnolia Community Center
              </a>{" "}
              sits on the same 34th Avenue W block as the playfield. For fence height and permit questions, start with{" "}
              <a
                href="https://www.seattle.gov/construction-and-inspections/permits/common-projects/fences"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle SDCI fence guidance
              </a>
              . If the parcel is inside Discovery Park&apos;s historic pocket, use the{" "}
              <a
                href="https://www.seattle.gov/neighborhoods/historic-preservation/historic-districts/fort-lawton-landmark-district"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fort Lawton Landmark District
              </a>{" "}
              page. The peninsula puts Queen Anne, Ballard, and Fremont within a short ride — which is why so many Magnolia lots want a fence that holds a dog and still leaves a window to the water.
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
                We install fences throughout Seattle. From Magnolia we also work in Queen Anne across Interbay, Ballard across Salmon Bay, and Fremont along the canal.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Seattle overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/queen-anne">Queen Anne</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/ballard">Ballard</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/fremont">Fremont</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/capitol-hill">Capitol Hill</Link>
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
                Ready to Enhance Your Magnolia Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Magnolia. We&apos;ll walk the lot, talk through a Sound-facing stretch versus a solid face toward Interbay, and quote a fence that fits your property.
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

export default MagnoliaPage;
