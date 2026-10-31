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
  Mountain,
  Volume2,
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

const CANONICAL = "https://myfence.com/service-areas/seattle/beacon-hill";
const META_TITLE =
  "Beacon Hill Fence Installation | Seattle | Ridge Lots & City Views | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Beacon Hill, Seattle, WA. Cedar, hogwire & hybrid fencing for ridge lots, I-5 noise, and Jefferson Park yards. Free quotes. (253) 455-1885.";

const BEACON_HILL_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Beacon Hill, Seattle?",
    answer:
      "Seattle's Department of Construction and Inspections says you do not need a permit for a fence 8 feet or less that has no masonry or concrete elements over 6 feet. You do need a construction permit if the fence is in a flood-prone area, and you need one if the fence is taller than 8 feet. Most of those taller jobs are a subject-to-field-inspection permit with a site plan and section drawings. Zoning is separate from the permit: in neighborhood residential and multifamily zones the fence is limited to 6 feet, plus up to 2 more feet of mostly open architectural features such as an arbor or trellis, and it is limited to 4 feet in a front or street-side setback. On a slope the fence may reach 8 feet if the average height between posts stays at 6 feet. A fence on a retaining wall that raises the grade is limited to 9 feet 6 inches combined; if the wall lowers the grade, the normal fence limit applies. Environmentally critical areas, including steep slopes on the west drop toward I-5 and the east drop toward Rainier Valley, follow different rules. Beacon Hill is not one of Seattle's landmark preservation districts, so a typical house does not need a district Certificate of Approval. The former U.S. Marine Hospital campus at 1200 12th Avenue S is itself a designated landmark; that status does not automatically cover the bungalows around it. Ridge lots near Jefferson Park are rarely flood-prone — the valley floor toward Georgetown is the usual flood check, not the crown. Corner lots on Beacon Avenue S, 15th Avenue S, S Lander Street, and S Spokane Street must keep sight triangles clear. Call SDCI at (206) 684-8600 if the parcel is unclear.",
  },
  {
    question:
      "What fence styles work best for Beacon Hill's ridge lots and hillside yards?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off 15th Avenue S, 16th Avenue S, and 18th Avenue S, where neighboring houses sit close enough that a shorter screen still reads the second floor. West-facing lots near 12th Avenue S and Dr. Jose Rizal Park often want a solid neighbor face, then a lighter hogwire stretch toward downtown and Elliott Bay so the reason someone bought the lot stays in the room. East-facing lots above Cheasty Boulevard S usually keep the Rainier Valley outlook similarly open. Houses on the I-5 rim near S Holgate Street and S Atlantic Street typically want the solid run on the freeway side, where traffic noise is the point of the fence. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain after every wet winter on a north-shaded side yard. Fence Genius maps short bays and stepped panels so the drop from Beacon Avenue S toward 12th Avenue S — or toward Cheasty — follows the grade instead of leaving a gap at the downhill post.",
  },
  {
    question: "How much does fence installation cost in Beacon Hill, Seattle?",
    answer:
      "Beacon Hill fence installation typically runs $50–$74 per linear foot for six-foot cedar privacy, $45–$62 for hogwire with a cedar frame, and $58–$80 for hybrid aluminum/cedar. Stepped panels on the west face toward I-5, extra gates on townhome courts near Beacon Hill Station, and hand-carrying materials on 12th Avenue S or a narrow alley can move a quote. Removal of an old fence is priced separately. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Beacon Hill?",
    answer:
      "Most Beacon Hill residential and townhome projects finish in one to three working days after any SDCI paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from stepping a run down the west slope toward 12th Avenue S, parking around the light-rail plaza at Beacon Avenue S and S Lander Street, or matching an existing neighbor height on a six-foot side yard. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Beacon Hill?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Seattle does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Beacon Hill mixes early-1900s pins on the bungalow grid with later townhome courts near 15th Avenue S and Beacon Hill Station, so confirming the line before digging saves a redo on a short, sloped side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const BEACON_HILL_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Jefferson Park",
    url: "https://www.seattle.gov/parks/parks/jefferson-park",
    description:
      "The ridge-top park at 3801 Beacon Ave S, between S Spokane Street and S Dakota Street. Weekend field and skatepark traffic is how we time material drops on nearby 15th Avenue S lots.",
  },
  {
    name: "Dr. Jose Rizal Park",
    url: "https://www.seattle.gov/parks/parks/jose-rizal-park",
    description:
      "The west-slope overlook at 1007 12th Ave S. Lots facing downtown and Elliott Bay usually want a fence that holds dogs without turning that north-and-west view into a solid wall.",
  },
  {
    name: "El Centro de la Raza",
    url: "https://www.elcentrodelaraza.org/",
    description:
      "The community campus at 2524 16th Ave S, a short walk from Beacon Hill Station. Event days fill 16th Avenue S; we stage so a trailer is not sitting in that curb lane.",
  },
  {
    name: "Cheasty Natural Area",
    url: "https://www.seattle.gov/parks/parks/cheasty-natural-area",
    description:
      "The east-face woods along Cheasty Blvd S and S Della St, dropping toward Rainier Valley. Adjacent lots sit on the same steep drop, so we design stepped bays instead of forcing a flat-lot panel down the grade.",
  },
  {
    name: "Jefferson Community Center",
    url: "https://www.seattle.gov/parks/community-centers/jefferson-community-center",
    description:
      "The rec building at 3801 Beacon Ave S inside Jefferson Park, next to Mercer International Middle School. Families around S Columbian Way use this campus daily — we keep alley gates swinging toward the sidewalk, not into that walk.",
  },
];

const BeaconHillPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Beacon Hill, Seattle",
    pageTitle: "Beacon Hill Seattle Fence Installation",
    description: META_DESCRIPTION,
    faqItems: BEACON_HILL_FAQS,
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
                    Serving Beacon Hill, Seattle WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Beacon Hill Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on ridge lots, hogwire that keeps downtown or Mount Rainier in view, and hybrid systems built for the west drop toward I-5, the east face above Cheasty, and the compact yards around Beacon Hill Station.
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
                  city="Beacon Hill, Seattle"
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
                Ridge-Line Fencing Between Rainier Valley and the Duwamish
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Beacon Hill is the long ridge south of I-90, with Rainier Valley and Columbia City on the east drop and I-5, SODO, and Georgetown on the west. Beacon Avenue S is the commercial spine — North Beacon Hill clusters around the station at 2702 Beacon Ave S, 15th Avenue S, and S Lander Street; the mid-ridge opens at Jefferson Park, S Spokane Street, and S Columbian Way; South Beacon Hill continues toward Cleveland High at 5511 15th Ave S, S Myrtle Street, and Van Asselt. 12th Avenue S and Dr. Jose Rizal Park hold the downtown-facing lots; Cheasty Boulevard S and 23rd Avenue S look east toward the valley. Older craftsman bungalows sit a few streets off Beacon Avenue while newer townhome courts fill parcels near the light-rail plaza. Yards here are steeper than a Ravenna side yard and noisier than a Capitol Hill alley on the freeway rim. The design conversation starts with how the grade steps, whether the west or east face should stay open to the skyline or the mountain, and whether the I-5 side needs a solid screen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Seattle, including sloped-lot work on Beacon Hill and neighboring Capitol Hill. We use Fence Genius to capture the drop from Beacon Avenue S toward 12th Avenue S, the tight side yards off 15th and 16th Avenue S, and the true length of a run above Cheasty before a crew arrives. The goal is a fence that belongs on a ridge city lot — not a long suburban kit forced down a six-foot side yard that also happens to sit above a bus stop on Beacon Avenue.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Beacon Hill Homeowners Trust MyFence.com
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
                        The west drop from Beacon Avenue S toward 12th Avenue S and the east face above Cheasty will leave a gap or bury a rail if someone installs a flat-lot kit. Fence Genius maps each bay so the fence follows the yard, and we design to Seattle&apos;s average-height rule instead of guessing from the sidewalk.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        I-5 and Airfield Noise Screens
                      </h3>
                      <p className="text-muted-foreground">
                        West-rim lots near S Holgate Street, S Atlantic Street, and 12th Avenue S sit above freeway and Boeing Field traffic. We use a solid neighbor and freeway face where sound is the problem, then keep the view stretch lighter so downtown does not disappear with the noise.
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
                        Lots near Rizal Park bought the downtown and Elliott Bay outlook; lots above Cheasty often bought Mount Rainier. We keep neighbor sides private and the view stretch open so the skyline or the mountain stays in the living room after a replacement.
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
                        Full coverage on materials and labor, including hardware chosen for damp north-shaded yards and ridge-top wind. We stand behind the install through Seattle winters.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Beacon Hill Seattle fence" />

        {/* 6. Photo Gallery — nearby Seattle installs until Beacon Hill-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Seattle"
          title="Recent Fence Work Near Beacon Hill"
          description="These photos are from nearby Seattle jobs, including Ravenna and other city lots. Same crew, same materials, and the same Fence Genius process we use on Beacon Hill lots along 15th Avenue S, 12th Avenue S, and Beacon Avenue S."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Seattle" neighborhood="Beacon Hill" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Beacon Hill Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Beacon Hill cedar-and-hogwire run sits on a sloped lot off 12th Avenue S or 15th Avenue S, close enough to Rizal Park that a solid west wall would erase the downtown outlook — or close enough to I-5 that a fully open run would leave the freeway in the bedroom. The job is usually two fences in one: full-height cedar on the uphill neighbor and alley sides, then a lighter hogwire stretch toward the skyline so the living room still reads Elliott Bay. Fence Genius maps the drop so panels step with the grade instead of leaving a wedge at the downhill post, and we set footings so winter runoff between two roofs does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Beacon Hill yards run 60–150 linear feet and wrap in one to three working days after any city paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the view stretch, the freeway face, and the steepest bay are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Beacon Hill-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Beacon Hill Terrain on the West and East Faces
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The ridge climbs from I-90 and S Atlantic Street to the crown around Jefferson Park, then drops west toward 12th Avenue S and I-5 and east toward Cheasty Boulevard S and Rainier Avenue S. A flat-lot crew will leave a stepped gap or bury the low rail. Fence Genius maps the grade so each bay follows the yard instead of fighting it. On a sloping site Seattle allows the high point to read taller as long as the average height between posts stays within the six-foot rule — we design to that average instead of guessing from the sidewalk on 15th Avenue S.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Ridge Wind, Moisture, and Beacon Hill Noise
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The crown takes wind that will rack a tall solid wall, especially on open stretches near Jefferson Park and west-facing blocks above Rizal Park. North-shaded side yards stay damp longer after a rain. Hardware that lasts on a sheltered Ravenna lot can loosen here in a few seasons. We keep soil off the first board and talk through whether the wet corner should be hybrid instead of a second round of stain. Walling every side in the same height is the most common regret we hear when the downtown view — or a quieter bedroom on the I-5 rim — was the reason someone bought the lot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Beacon Hill Height Rules Without a Landmark District
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike Ballard Avenue or Harvard-Belmont, Beacon Hill does not have a city landmark historic district that reviews every street-visible fence. What it does have is at least one high-profile designated landmark on the north end — the former Marine Hospital campus at 1200 12th Avenue S — plus the historic El Centro building on 16th Avenue S. Work on a designated parcel can still need a Certificate of Approval from the Landmarks Preservation Board. We treat that check as part of the design so you are not surprised after a neighbor flags the street face. Lots that are not landmarks still follow Seattle height rules: six feet in side and rear yards, four feet in most front and street-side setbacks.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Staging Near Beacon Hill Station and Beacon Avenue
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Infill around 15th Avenue S, S Lander Street, and S Forest Street produced townhome courts and leftover older lots whose side yards are measured in feet, not tens of feet. A panel that works on an Eastside acre lot will not swing a gate here. We measure the alley, the utility meters, and the neighbor fence first, then build panels that leave a usable path to Beacon Avenue S, 15th Avenue S, and 16th Avenue S. Station traffic at the light-rail plaza and the steep grade toward 12th Avenue S also mean we plan material drops instead of leaving a trailer on Beacon Avenue all afternoon.
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
                Fence Installation Cost in Beacon Hill
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Beacon Hill fence is often a short, mixed-style run: a quieter neighbor or freeway face plus an open stretch toward downtown or the mountain. Access, gates, and stepped panels move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Tear-out of an existing fence, extra gates on a townhome court, and hand-carrying materials on a steep west-slope lot may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Beacon Hill property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Beacon Hill property</Link>
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
                Popular Fence Styles in Beacon Hill
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides, alley faces, and the I-5 rim. Full height for two-story townhomes, pre-stained cedar that holds up in a wet north-shaded yard, and a look that fits both older bungalows and later courts near the station.
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
                    Cedar frame with black mesh for lots that still want downtown, Elliott Bay, or Mount Rainier in the room. Dogs stay in, the lighter footprint takes less ridge wind than a solid wall, and the outlook does not disappear after a replacement.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a damp side yard or wind-facing stretch has already eaten one fence. Strong enough for family yards without looking commercial on Beacon Avenue S.
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
                Our Beacon Hill Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Beacon Hill Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the tight side yards, note whether the open stretch faces downtown or the mountain, map utilities, and check whether the I-5 rim should stay more solid. Fence Genius captures length, grade, and the neighbor fence so panels are built to the actual ridge, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Beacon Hill Design & Height Check
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document Seattle height rules plus any Certificate of Approval if the parcel is a designated landmark. Corner-lot sight triangles on Beacon Avenue S, 15th Avenue S, S Lander Street, and S Spokane Street get marked before we draw the line. Steep-slope overlays on the west and east faces get checked before we quote.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Beacon Hill install days are mostly setting posts and hanging finished sections that already match the stepped side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Beacon Hill Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 15th Avenue S, 16th Avenue S, 12th Avenue S, and Beacon Avenue S. Drainage-aware hardware on the wet north-shaded corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Beacon Hill Fence Installation FAQs"
          items={BEACON_HILL_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Seattle"
        neighborhoodName="Beacon Hill"
        attractions={BEACON_HILL_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Beacon Hill households sit in{" "}
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
                href="https://beaconhilles.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Beacon Hill International Elementary
              </a>{" "}
              is at 2025 14th Avenue S on the north ridge, and{" "}
              <a
                href="https://kimballes.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kimball Elementary
              </a>{" "}
              sits at 3200 23rd Avenue S toward Cheasty. Many families later attend{" "}
              <a
                href="https://mercerms.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Mercer International Middle School
              </a>{" "}
              at 1600 S Columbian Way, next to Jefferson Park, then{" "}
              <a
                href="https://clevelandhs.seattleschools.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cleveland High School
              </a>{" "}
              at 5511 15th Avenue S. After school, the{" "}
              <a
                href="https://www.spl.org/hours-and-locations/beacon-hill-branch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Beacon Hill Branch of the Seattle Public Library
              </a>{" "}
              at 2821 Beacon Ave S is a short walk from the mid-ridge shops.
            </p>
            <p>
              Weekday life also clusters around Beacon Avenue S and the deep-bore station at{" "}
              <a
                href="https://www.soundtransit.org/ride-with-us/stops-stations/beacon-hill-station"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Beacon Hill Station
              </a>
              , which is why we schedule crews around commute traffic on 15th Avenue S and S Lander Street. For fence height and permit questions, start with{" "}
              <a
                href="https://www.seattle.gov/construction-and-inspections/permits/common-projects/fences"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seattle SDCI fence guidance
              </a>
              . The ridge puts Columbia City, Georgetown, and Capitol Hill within a short ride — which is why so many Beacon Hill lots want a fence that works as hard as the commute and still leaves a window to downtown or the mountain.
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
                We install fences throughout Seattle. From Beacon Hill we also work in Capitol Hill toward downtown, and we quote Columbia City, Georgetown, and the rest of the ridge from the Seattle service-area page.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Seattle overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/capitol-hill">Capitol Hill</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Columbia City</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle">Georgetown</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seattle/queen-anne">Queen Anne</Link>
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
                Ready to Enhance Your Beacon Hill Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Beacon Hill. We&apos;ll walk the lot, talk through a skyline-facing stretch vs. a solid freeway face, and quote a fence that fits your property.
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

export default BeaconHillPage;
