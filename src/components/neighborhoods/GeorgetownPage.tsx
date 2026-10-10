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
  Plane,
  Droplets,
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

const CANONICAL = "https://myfence.com/service-areas/seattle/georgetown";
const META_TITLE =
  "Georgetown Fence Installation | Seattle | Duwamish Valley Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Georgetown, Seattle, WA. Cedar, hogwire & hybrid fencing for Airport Way lots, Boeing Field noise, and Duwamish Valley yards. Free quotes. (253) 455-1885.";

const GEORGETOWN_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Georgetown, Seattle?",
    answer:
      "Seattle's Department of Construction and Inspections says you do not need a permit for a fence 8 feet or less that has no masonry or concrete elements over 6 feet. You do need a construction permit if the fence is in a flood-prone area, and you need one if the fence is taller than 8 feet. Most of those taller jobs are a subject-to-field-inspection permit with a site plan and section drawings. Zoning is separate from the permit: in neighborhood residential and multifamily zones the fence is limited to 6 feet, plus up to 2 more feet of mostly open architectural features such as an arbor or trellis, and it is limited to 4 feet in a front or street-side setback. On a slope the fence may reach 8 feet if the average height between posts stays at 6 feet. A fence on a retaining wall that raises the grade is limited to 9 feet 6 inches combined. Environmentally critical areas, including wetlands and shoreline overlays along the Duwamish, follow different rules. Georgetown is not one of Seattle's seven landmark preservation districts, so a typical house does not need a district Certificate of Approval. The Georgetown Steam Plant at 6605 13th Avenue S is itself a designated landmark; that status does not automatically cover the houses on Corson Avenue S or Carleton Avenue S. Valley lots near E Marginal Way S and the Duwamish are the ones we check for floodplain before we quote. Call SDCI at (206) 684-8600 if the parcel is unclear.",
  },
  {
    question:
      "What fence styles work best for Georgetown's industrial edge and valley lots?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off Corson Avenue S, Carleton Avenue S, Ellis Avenue S, and Flora Avenue S, and on any face that looks at Airport Way S or a light-industrial neighbor. Lots that sit closer to Boeing Field or E Marginal Way S often want the solid run on the noise side, then a lighter hogwire stretch toward Oxbow Park, Georgetown Playfield, or a quieter neighbor garden so the yard does not become a box. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain a damp valley corner after every wet winter. Fence Genius maps short bays and alley gates so panels fit a Georgetown lot instead of a wide suburban run.",
  },
  {
    question: "How much does fence installation cost in Georgetown, Seattle?",
    answer:
      "Georgetown fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Extra gates on alley lots off S Lucile Street or S Homer Street, hand-carrying materials around Airport Way S traffic, and floodplain or shoreline paperwork can move a quote. Removal of an old fence is priced separately. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Georgetown?",
    answer:
      "Most Georgetown bungalow and infill projects finish in one to three working days after any SDCI paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from a flood-prone parcel check, parking around Airport Way S deliveries, or matching an existing neighbor height on a short side yard off Corson Avenue S. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Georgetown?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Georgetown mixes older pins on the residential grid west of Airport Way S with later infill and live-work lots toward 13th Avenue S, so confirming the line before digging saves a redo on a short side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const GEORGETOWN_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Oxbow Park",
    url: "https://www.seattle.gov/parks/allparks/oxbow-park",
    description:
      "The pocket park at 6430 Corson Avenue S, where the Hat n' Boots sit at the center of the residential grid. Lots on Corson, Vale, and nearby alleys use this block as the daily walk — we stage so a trailer is not sitting on that curb during weekend park traffic.",
  },
  {
    name: "Georgetown Playfield",
    url: "https://www.seattle.gov/parks/allparks/georgetown-playfield",
    description:
      "The lit turf, spray park, and courts at 750 S Homer Street. Game nights and after-school use set when we can unload on S Homer and the blocks between the playfield and Airport Way S.",
  },
  {
    name: "Georgetown Steam Plant",
    url: "https://www.seattle.gov/city-light/in-the-community/tours-recreation-and-education/georgetown-steam-plant",
    description:
      "The National Historic Landmark at 6605 13th Avenue S, next to King County International Airport. Second-Saturday open houses bring extra cars onto Ellis Avenue S and S Warsaw Street; we keep material drops off those approaches on tour days.",
  },
  {
    name: "Duwamish Waterway Park",
    url: "https://www.seattle.gov/parks/allparks/duwamish-waterway-park",
    description:
      "The river-edge park at 7900 10th Avenue S in South Park, a short hop south of Georgetown. Valley lots that sit closer to the waterway are the ones we check for shoreline and floodplain rules before quoting a fence line.",
  },
  {
    name: "Jules Maes Saloon",
    url: "https://www.julesmaessaloon.com/",
    description:
      "The long-running room at 5919 Airport Way S, on Georgetown's commercial spine. Evening crowds here and on the adjoining storefronts are part of how we time Airport Way S deliveries so a trailer is not blocking the curb lane.",
  },
];

const GeorgetownPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Georgetown, Seattle",
    pageTitle: "Georgetown Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: GEORGETOWN_FAQS,
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
                    Serving Georgetown, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Georgetown Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy that quiets Airport Way S and Boeing Field, hogwire that keeps a valley yard from feeling boxed in, and hybrid systems built for damp Duwamish lots on Corson, Carleton, and 13th Avenue S.
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
                  city="Georgetown, Seattle"
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
                Fencing on the Duwamish Valley Floor
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Georgetown sits on the flat of the Duwamish Valley, with SoDo and the industrial rail yards to the north, Beacon Hill rising east of I-5, South Park across S Michigan Street and the river bend, and King County International Airport just west of E Marginal Way S. Airport Way S is the commercial spine. Residential blocks fill in on Corson Avenue S, Carleton Avenue S, Ellis Avenue S, and Flora Avenue S, with cross streets at S Lucile, S Vale, S Homer, S Fidalgo, and S Bailey. Live-work and older houses share the grid with warehouses. Yards are short, alleys are tight, and one lot line may face a taproom while the other faces a loading dock.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across Seattle, including valley and industrial-edge lots in Georgetown. Fence Genius records the true length of a Corson side yard, the alley gate we have to keep, and the neighbor fence we have to meet before a crew arrives. The result is a fence sized for a Georgetown lot, with a solid face where Airport Way or the airfield is the problem and a lighter stretch where the yard still wants air.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Georgetown Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        A Solid Face Where the Noise Is
                      </h3>
                      <p className="text-muted-foreground">
                        Airport Way S, the airfield, and light-industrial neighbors are not the same problem as a quiet side yard off Flora Avenue S. We put full-height cedar on the loud face and leave the garden side lighter when that is what the lot needs.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Valley Moisture and Flood Checks
                      </h3>
                      <p className="text-muted-foreground">
                        The Duwamish floor stays wet longer than a Beacon Hill lot. We keep soil off the first board, talk through hybrid on the dampest corner, and check flood-prone parcels before we quote so SDCI is not a surprise after posts are set.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Plane className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Airfield and Alley Access
                      </h3>
                      <p className="text-muted-foreground">
                        Staging on Airport Way S, S Albro Place, and the alleys off Corson is different from a quiet Eastside cul-de-sac. Compact equipment and timed deliveries keep the crew out of the curb lane when trucks and weekend park traffic are already using it.
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
                        Full coverage on materials and labor, including hardware chosen for damp valley corners and the wind that comes across the airfield. We stand behind the install through Seattle winters.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Georgetown Seattle fence" />

        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near Georgetown"
          description="These photos are from nearby Seattle jobs. Same crew, same materials, and the same Fence Genius process we use on Georgetown lots along Airport Way S, Corson Avenue S, and the blocks around Oxbow Park."
        />

        <FeaturedProject city="Seattle" neighborhood="Georgetown" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Georgetown Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Georgetown cedar-and-hogwire run sits on a short lot off Corson Avenue S or Carleton Avenue S, close enough to Airport Way S that a solid wall on every side would erase the yard. The job is usually two fences in one: full-height cedar on the neighbor, alley, and commercial faces, then a lighter hogwire stretch toward Oxbow Park or Georgetown Playfield so the living room still reads the block. On 13th Avenue S near the Steam Plant, the solid face goes toward the airfield instead, because aircraft noise is the problem and the view is not. Fence Genius maps the line so panels fit the alley gate, and we set footings so winter runoff on the valley floor does not sit against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Georgetown yards run 50–130 linear feet and wrap in one to three working days after any city paperwork. We use cedar privacy, hogwire, or hybrid aluminum/cedar, and we walk the line with you before posts go in so the noisy face, the wet corner, and the playfield-side stretch are all accounted for.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Georgetown-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Valley Floor Drainage, Not a Beacon Hill Grade
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Georgetown is the flat. The climb starts east of I-5 on Beacon Hill, not on Corson Avenue S. What the valley does instead is hold water. Lots near E Marginal Way S, S Michigan Street, and the Duwamish sit closer to flood-prone and shoreline overlays than a house on the hill. Seattle requires a construction permit when a fence is in a flood-prone area even if the fence is under 8 feet. We check that overlay in the quote, keep the first board out of standing soil, and talk through hybrid on the corner that stays wet after every storm.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Boeing Field and Airport Way S Noise
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    King County International Airport sits immediately west of the neighborhood. Houses on 13th Avenue S, Ellis Avenue S, and the blocks toward E Marginal Way S hear aircraft and industrial traffic all day. Airport Way S adds truck and weekend bar traffic on the commercial spine. A solid cedar run on that face does more work than an open panel. The opposite side of the same lot may still want hogwire if it opens toward Oxbow Park or a neighbor garden rather than the roadway. We do not wrap every side at the same height when only one side is taking the noise.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Tight Alleys and Mixed-Use Neighbors
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Georgetown&apos;s residential pocket shares fences with taprooms, studios, and warehouses. Side yards off Corson Avenue S and Carleton Avenue S are measured in feet. We measure the alley, the meter, and the neighbor fence first, then build panels that still leave a path to the gate. S Albro Place is the I-5 exit into the neighborhood; we time material drops so a trailer is not sitting in that approach during weekday freight hours.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Seattle Fence Rules in a Neighborhood Without a Landmark District
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seattle&apos;s historic-preservation FAQ lists seven preservation districts. Georgetown is not one of them, so a street-visible fence on an ordinary house does not go through a district board the way a Columbia City storefront does. SDCI still limits height: 6 feet in neighborhood residential and multifamily zones, 4 feet in a front or street-side setback, with the slope average and the retaining-wall combination rules on the same fence page. A flood-prone valley lot needs a construction permit even when the fence is under 8 feet. The Georgetown Steam Plant, at 6605 13th Avenue S, is a designated Seattle landmark; work on that parcel is a different question from a fence on the house across Ellis Avenue S. We check the parcel before we order materials.
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
                Fence Installation Cost in Georgetown
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Georgetown fence is often a short, mixed-style run: a quieter neighbor face plus a solid stretch toward Airport Way S or the airfield. Access, gates, and floodplain checks move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Tear-out of an existing fence, extra alley gates, and hand-carrying materials off Airport Way S are itemized separately. Get an exact quote for your Georgetown property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Georgetown property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Popular Fence Styles in Georgetown
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides, alleys, and the Airport Way–facing run. Pre-stained cedar holds up in a wet valley yard and reads as a residential fence next to both older houses and later live-work lots.
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
                    Cedar frame with black mesh for lots that still want Oxbow Park or a garden in the room. Dogs stay in, and the lighter face takes less wind off the airfield than a solid wall on every side.
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
                    Aluminum panels in a cedar frame on steel posts for the damp corner toward the Duwamish or a north-facing side yard that has already eaten one wood fence. Quiet enough for Corson Avenue S.
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
                Our Georgetown Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Georgetown Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the side yards, note whether the solid stretch should face Airport Way S or the airfield, and map utilities. Fence Genius captures length and the alley gate so panels are built to the actual lot, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. SDCI Height and Flood Check</h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle&apos;s 6-foot zoning limit, the 4-foot front and street-side setback, and whether a valley parcel needs a permit because it is flood-prone. Shoreline and wetland overlays near the Duwamish get checked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Georgetown install days are mostly setting posts and hanging finished sections that already match the short side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Georgetown Installation</h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to alleys and residential streets off Corson Avenue S, Carleton Avenue S, S Homer Street, and Airport Way S. Drainage-aware hardware on the wet valley corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Georgetown Fence Installation FAQs"
          items={GEORGETOWN_FAQS}
        />
      </main>

      <AboutTheArea
        cityName="Seattle"
        neighborhoodName="Georgetown"
        attractions={GEORGETOWN_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Georgetown households sit in{" "}
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
                href="https://www.seattleschools.org/schools/concordes/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Concord International Elementary
              </a>{" "}
              is at 723 S Concord Street in South Park, the valley school many Georgetown families use.{" "}
              <a
                href="https://www.seattleschools.org/schools/cleveland/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cleveland High School
              </a>{" "}
              sits at 5511 15th Avenue S on the Beacon Hill side of 98108. The{" "}
              <a
                href="https://www.seattle.gov/parks/find/centers/south-park-community-center"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                South Park Community Center
              </a>{" "}
              at 8319 8th Avenue S is the closest full recreation building for after-school and evening programs.
            </p>
            <p>
              For fence height and permit questions, start with{" "}
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
              names the seven preservation districts; Georgetown is not on that list. The{" "}
              <a
                href="https://www.spl.org/hours-and-locations/beacon-hill-branch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Beacon Hill Branch of The Seattle Public Library
              </a>{" "}
              at 2821 Beacon Avenue S is the nearest full library, a short climb east of I-5. Weeknight life still runs along Airport Way S, which is why so many Georgetown lots want a fence that holds a dog on a small yard and still leaves a quieter face toward Corson and the park.
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
                We install fences throughout Seattle. From Georgetown we also work toward Beacon Hill and Columbia City up the hill, and we already have pages for Capitol Hill, Ravenna, Queen Anne, Fremont, and Ballard farther north.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Seattle overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Beacon Hill</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Columbia City</Link>
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
                Ready to Enhance Your Georgetown Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Georgetown. We&apos;ll walk the lot, talk through a solid face toward Airport Way S versus a lighter stretch toward the park, and quote a fence that fits your property.
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

export default GeorgetownPage;
