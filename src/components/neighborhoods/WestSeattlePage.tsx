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

const CANONICAL = "https://myfence.com/service-areas/seattle/west-seattle";
const META_TITLE =
  "West Seattle Fence Installation | Seattle | Alki Wind & Hillside Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in West Seattle, Seattle, WA. Cedar, hogwire & hybrid fencing for Alki salt air, California Ave SW lots, and the drop toward Delridge. Free quotes. (253) 455-1885.";

const WEST_SEATTLE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in West Seattle, Seattle?",
    answer:
      "Seattle's Department of Construction and Inspections says you do not need a permit for a fence 8 feet or less that has no masonry or concrete elements over 6 feet. You do need a construction permit if the fence is in a flood-prone area, and you need one if the fence is taller than 8 feet. Most of those taller jobs are a subject-to-field-inspection permit with a site plan and section drawings. Zoning is separate from the permit: in neighborhood residential and multifamily zones the fence is limited to 6 feet, plus up to 2 more feet of mostly open architectural features such as an arbor or trellis, and it is limited to 4 feet in a front or street-side setback. On a slope the fence may reach 8 feet if the average height between posts stays at 6 feet. A fence on a retaining wall that raises the grade is limited to 9 feet 6 inches combined; if the wall lowers the grade, the normal fence limit applies. Environmentally critical areas, including steep slopes on the drop from California Ave SW toward Alki and toward Delridge, follow different rules. Waterfront parcels along Alki Ave SW, Harbor Ave SW, and Beach Drive SW are the ones we check for shoreline overlay and floodplain before we quote. West Seattle is not one of Seattle's seven landmark preservation districts, so a typical house does not need a district Certificate of Approval. West Seattle High School at 3000 California Ave SW is itself a designated landmark; that status does not automatically cover the houses around it. Call SDCI at (206) 684-8600 if the parcel is unclear.",
  },
  {
    question:
      "What fence styles work best for West Seattle's hillside lots and Alki wind?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off 42nd Ave SW, 47th Ave SW, and the alleys between SW Admiral Way and SW Alaska Street, where neighboring houses sit close and the second story looks straight into the yard. West-facing lots above Alki Beach and along Beach Drive SW often want a solid neighbor face, then a lighter hogwire stretch toward Elliott Bay so the water stays in the room. Houses on Harbor Ave SW near Hamilton Viewpoint usually want the solid run on the street side, where traffic and salt spray are the point of the fence. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain a damp Alki or Fauntleroy corner after every wet winter. Fence Genius maps short bays and stepped panels so the climb from Alki Ave SW toward California Ave SW — and the east drop toward 35th Ave SW and Delridge — follows the grade instead of leaving a gap at the downhill post.",
  },
  {
    question: "How much does fence installation cost in West Seattle, Seattle?",
    answer:
      "West Seattle fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Stepped panels on the drop from California Ave SW, extra gates on townhome courts near the Junction at SW Alaska Street, and hand-carrying materials along Alki Ave SW or a narrow Admiral alley can move a quote. Removal of an old fence is priced separately. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in West Seattle?",
    answer:
      "Most West Seattle bungalow and hillside projects finish in one to three working days after any SDCI paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from stepping a run up from Alki, parking around Junction shoppers on California Ave SW, or matching an existing neighbor height on a short side yard. We lock the schedule with you before the crew arrives, and we avoid Fauntleroy Way SW during ferry backup when the job sits near Lincoln Park or the dock.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in West Seattle?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. West Seattle mixes early-1900s pins on the Admiral and Junction grid with later cottages along Alki Ave SW and townhome courts near California Ave SW, so confirming the line before digging saves a redo on a short, sloped side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const WEST_SEATTLE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Alki Beach Park",
    url: "https://www.seattle.gov/parks/allparks/alki-beach-park",
    description:
      "The beach strip at 2665 Alki Ave SW, running from Alki Point toward Duwamish Head. Weekend parking on Alki Ave SW sets when we can unload; lots here take salt air and usually want a solid neighbor face with an open stretch toward Elliott Bay.",
  },
  {
    name: "Lincoln Park",
    url: "https://www.seattle.gov/parks/allparks/lincoln-park",
    description:
      "The bluff park at 8011 Fauntleroy Way SW, just north of the Fauntleroy ferry dock. Houses on Beach Drive SW and Fauntleroy Way SW sit in the same marine air; we schedule around ferry queues so a trailer is not sitting in that curb lane.",
  },
  {
    name: "Schmitz Preserve Park",
    url: "https://www.seattle.gov/parks/allparks/schmitz-preserve-park",
    description:
      "The forested ravine at 5551 SW Admiral Way. Nearby Admiral lots often share a tree line with the preserve, so we hand-set posts instead of forcing a machine through roots on the downhill side of SW Admiral Way.",
  },
  {
    name: "Camp Long",
    url: "https://www.seattle.gov/parks/allparks/camp-long",
    description:
      "The park at 5200 35th Ave SW, entered at SW Dawson Street and 35th. Delridge and High Point blocks around 35th see trail and cabin traffic; we keep alley gates swinging toward the sidewalk, not into that walk.",
  },
  {
    name: "Hamilton Viewpoint Park",
    url: "https://www.seattle.gov/parks/allparks/hamilton-viewpoint-park",
    description:
      "The overlook at 1120 California Ave SW. Lots on the north end of California and the drop toward Harbor Ave SW usually want a fence that holds dogs without turning the Elliott Bay and downtown view into a solid wall.",
  },
];

const WestSeattlePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "West Seattle, Seattle",
    pageTitle: "West Seattle Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: WEST_SEATTLE_FAQS,
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
                    Serving West Seattle, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  West Seattle Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on Junction and Admiral lots, hogwire that keeps Elliott Bay in view from Alki and Beach Drive, and hybrid systems for salt air, Fauntleroy wind, and the steep drop from California Ave SW toward Delridge.
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
                  city="West Seattle, Seattle"
                  state="Washington"
                  radiusMiles={4}
                  zoom={13}
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
                Fencing From Alki Point to the Fauntleroy Ferry
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                West Seattle is the peninsula west of the Duwamish Waterway, with Elliott Bay on the north and Puget Sound on the west. The West Seattle Bridge and the Spokane Street low bridge are how most crews arrive. California Ave SW is the ridge spine: Admiral District shops cluster at SW Admiral Way, and the Junction sits at SW Alaska Street. Residential streets drop west through 47th, 49th, and 59th Ave SW toward Alki Ave SW, Harbor Ave SW, and Beach Drive SW. They drop east toward 35th Ave SW, High Point, and Delridge. Older craftsman bungalows fill most of the Admiral and Junction grid. Beach cottages and later houses line Alki and Beach Drive. Yards are short on the ridge, alleys are steep, and a west lot line may sit a few houses from the seawall.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across Seattle, including salt-air and hillside lots in West Seattle. Fence Genius records the rise from Alki Ave SW, the true length of an Admiral side yard, and the neighbor fence we have to meet before a crew arrives. The result is a fence sized for a West Seattle lot, with panels that fit an alley gate and a grade that is already stepping before the first post is set.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why West Seattle Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Grade Off California Ave SW
                      </h3>
                      <p className="text-muted-foreground">
                        The blocks between Alki Ave SW and California Ave SW — and the east drop toward 35th Ave SW — rise fast enough that a flat panel leaves a triangle a dog can use. Fence Genius maps each bay, and we design to Seattle&apos;s average-height rule on a slope instead of guessing from the sidewalk.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Wind className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Salt Air on Alki and Fauntleroy
                      </h3>
                      <p className="text-muted-foreground">
                        Lots on Alki Ave SW, Harbor Ave SW, Beach Drive SW, and Fauntleroy Way SW take marine air that eats cheap hardware. We keep soil off the first board and talk through whether the waterfront corner should be hybrid instead of another wood fence that has already failed.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Landmark className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        SDCI Rules, Not a West Seattle District
                      </h3>
                      <p className="text-muted-foreground">
                        West Seattle is not one of Seattle&apos;s seven landmark preservation districts. We still check height, front-yard limits, shoreline overlay along Alki, and whether the parcel itself is a designated landmark before we quote.
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
                        Full coverage on materials and labor, including hardware chosen for damp Alki corners and the wind that comes up Fauntleroy Way SW. We stand behind the install through Seattle winters.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="West Seattle Seattle fence" />

        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near West Seattle"
          description="These photos are from nearby Seattle jobs. Same crew, same materials, and the same Fence Genius process we use on West Seattle lots along California Ave SW, Alki Ave SW, and the Fauntleroy bluff."
        />

        <FeaturedProject city="Seattle" neighborhood="West Seattle" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured West Seattle Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical West Seattle cedar-and-hogwire run sits on a hillside lot off 47th Ave SW or SW Admiral Way, close enough to Alki that a solid west wall would erase Elliott Bay. The job is usually two fences in one: full-height cedar on the neighbor and alley sides, then a lighter hogwire stretch toward the water so the living room still reads the Sound. On Harbor Ave SW near Hamilton Viewpoint, the solid face goes toward the street instead, because traffic and salt spray are the problem and the view is on the downhill side. Fence Genius maps the rise so panels step with the grade, and we set footings so winter runoff between two close roofs does not sit against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable West Seattle yards run 60–160 linear feet and wrap in one to three working days after any city paperwork. We use cedar privacy, hogwire, or hybrid aluminum/cedar, and we walk the line with you before posts go in so the water-facing stretch, the wet corner, and the steepest bay are all accounted for.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                West Seattle-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    The Climb from Alki Ave SW to California Ave SW
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Canal-level is the wrong picture here. Beach-level blocks along Alki Ave SW, Harbor Ave SW, and Beach Drive SW are relatively flat. A few streets east, the same lots are stepping hard toward California Ave SW. The east face toward 35th Ave SW and Delridge does the same thing in the other direction. A crew that treats West Seattle like a level Junction alley will leave a gap or bury a rail. Fence Genius maps the grade so each bay follows the yard. On a sloping site Seattle allows the high point to read taller when the average height between posts stays within the six-foot zoning limit. We design to that average, then check it against the four-foot cap if the run sits in a front or street-side setback.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    West Seattle Salt Air, Wind, and Ferry Traffic
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots backing Alki Beach Park stay damp and salty longer than a yard at the Junction. Hardware that is fine on a dry ridge block can streak here. We keep soil off the first board and talk through whether the waterfront corner should be hybrid. Fauntleroy Way SW feeds the ferry dock just south of Lincoln Park; backup on SW Barton Street and Fauntleroy is part of how we time material drops on those southwest blocks. Summer weekends on Alki Ave SW are the other constraint — we schedule deliveries outside those peaks so a trailer is not blocking the beach curb lane.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    View Lots at Hamilton Viewpoint and the Alki Bluff
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seattle Parks places Hamilton Viewpoint Park at 1120 California Ave SW, looking across Elliott Bay to downtown. Houses on the north end of California and the drop toward Harbor Ave SW bought the lot for that view. A solid cedar run on every side would erase the reason they live there. We put height where the neighbor and the street need it, then open the water face with hogwire so dogs stay in and the bay stays in the room. The same split shows up on Beach Drive SW south of Alki Point, where the Sound is the west wall of the house.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Seattle Fence Rules on a Peninsula Without a Landmark District
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seattle&apos;s historic-preservation FAQ lists seven preservation districts. West Seattle is not one of them, so a street-visible fence on an ordinary house does not go through a district board the way a Ballard Avenue storefront does. SDCI still limits height: 6 feet in neighborhood residential and multifamily zones, 4 feet in a front or street-side setback, with the slope average and the retaining-wall combination rules on the same fence page. A flood-prone or shoreline lot along Alki needs extra review even when the fence is under 8 feet. Steep-slope overlays, common on the west face toward Alki and the east face toward Delridge, follow the environmentally critical areas code. West Seattle High School, at 3000 California Ave SW, is a designated Seattle landmark; work on that parcel is a different question from a fence on the house across California. We check the parcel before we order materials.
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
                Fence Installation Cost in West Seattle
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A West Seattle fence is often a mixed-style run: a quieter neighbor face plus an open stretch toward Elliott Bay, or a solid face toward Harbor Ave SW. Access, gates, and stepped panels move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Tear-out of an existing fence, extra gates on a townhome court, and hand-carrying materials up from Alki Ave SW are itemized separately. Get an exact quote for your West Seattle property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your West Seattle property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Popular Fence Styles in West Seattle
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides, alleys, and the street-facing run near Harbor Ave SW. Pre-stained cedar holds up in a wet Alki yard and fits both older Admiral bungalows and later houses off California Ave SW.
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
                    Cedar frame with black mesh for lots that still want Elliott Bay or a garden in the room. Dogs stay in, and the lighter face takes less wind off Alki Point than a solid wall on every side.
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
                    Aluminum panels in a cedar frame on steel posts for the damp corner along Beach Drive SW or a north-facing side yard that has already eaten one wood fence. Quiet enough for the Junction.
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
                Our West Seattle Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. West Seattle Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the side yards, note whether the open stretch faces Elliott Bay or should face away from Harbor Ave SW, and map utilities. Fence Genius captures length and grade so panels are built to the actual hill, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. SDCI Height and Shoreline Check</h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle&apos;s 6-foot zoning limit, the 4-foot front and street-side setback, the slope average, and whether an Alki or Beach Drive parcel needs extra review because it is shoreline or flood-prone. Steep-slope overlays on both faces of the ridge get checked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so West Seattle install days are mostly setting posts and hanging finished sections that already match the stepped side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. West Seattle Installation</h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to alleys and residential streets off California Ave SW, 42nd Ave SW, Alki Ave SW, and Fauntleroy Way SW. Drainage-aware hardware on the wet Alki corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="West Seattle Fence Installation FAQs"
          items={WEST_SEATTLE_FAQS}
        />
      </main>

      <AboutTheArea
        cityName="Seattle"
        neighborhoodName="West Seattle"
        attractions={WEST_SEATTLE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              West Seattle households sit in{" "}
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
                href="https://www.seattleschools.org/schools/alkies/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Alki Elementary
              </a>{" "}
              is at 3010 59th Ave SW, a short walk from the beach grid.{" "}
              <a
                href="https://www.seattleschools.org/schools/lafayettees/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lafayette Elementary
              </a>{" "}
              sits at 2645 California Ave SW in the Admiral District. Many families later attend{" "}
              <a
                href="https://www.seattleschools.org/schools/westseattlehs/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                West Seattle High School
              </a>{" "}
              at 3000 California Ave SW. The district lists that building on the Seattle Historic Preservation Landmarks list.
            </p>
            <p>
              After school, the{" "}
              <a
                href="https://www.spl.org/hours-and-locations/west-seattle-branch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                West Seattle Branch of the Seattle Public Library
              </a>{" "}
              at 2306 42nd Ave SW is a short walk from the Junction; the Carnegie building is itself a city landmark. For fence height and permit questions, start with{" "}
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
              names the seven preservation districts; West Seattle is not on that list. The peninsula puts Queen Anne and downtown across Elliott Bay, which is why so many West Seattle lots want a fence that holds a dog on a short, sloped yard and still leaves a window to the water.
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
                We install fences throughout Seattle. From West Seattle we also work in Queen Anne across Elliott Bay, Fremont and Ballard toward the Ship Canal, and Capitol Hill farther east. Georgetown and Beacon Hill are quoted from the Seattle service-area page.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Seattle overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/queen-anne">Queen Anne</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/fremont">Fremont</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/ballard">Ballard</Link>
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
                Ready to Enhance Your West Seattle Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in West Seattle. We&apos;ll walk the lot, talk through a water-facing stretch versus a solid face toward the street, and quote a fence that fits your property.
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

export default WestSeattlePage;
