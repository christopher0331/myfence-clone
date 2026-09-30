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
  Wind,
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

const CANONICAL = "https://myfence.com/service-areas/renton/west-hill";
const META_TITLE =
  "West Hill Renton Fence Installation | Hillside Lots Near Skyway | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in West Hill, Renton, WA. Cedar, horizontal, and hybrid fencing for hillside lots near Skyway and Bryn Mawr, with King County and City of Renton permit checks. Free quotes. (253) 455-1885.";

const linkClass =
  "text-primary underline decoration-2 underline-offset-2";
const livingLinkClass =
  "font-semibold text-primary underline decoration-2 underline-offset-4";

const WEST_HILL_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in West Hill?",
    answer:
      "Check the parcel before you assume a city. King County describes West Hill as unincorporated King County and as part of the City of Renton's potential annexation area, made up of Bryn Mawr, Lakeridge, Skyway, and Earlington, with Seattle, Renton, and Tukwila around it. Many mailboxes still read Seattle, often in the 98178 ZIP, which does not decide who permits the fence. On an unincorporated parcel, King County's permitting page says a fence 6 feet high or less generally does not need a building permit unless the property has critical areas. If the address is inside Renton city limits, City of Renton rules apply instead, including Renton Municipal Code 4-4-040: a fence taller than six feet needs a building permit or a written exemption, front-yard setbacks are limited to 48 inches, and clear-vision areas at corners are limited to 42 inches. Look up the address in the King County Parcel Viewer, then use King County Permitting or City of Renton Permit Services for that jurisdiction. MyFence.com walks the lot with you before we quote.",
  },
  {
    question:
      "What fence styles work on West Hill slopes, wind, and view lots?",
    answer:
      "Six-foot cedar privacy is the usual request on shared side yards where houses sit close, including streets around Renton Avenue South in Skyway. Horizontal cedar is a common ask on the same lots when the house face is more contemporary and a vertical board wall would fight the siding. Bryn Mawr and Lakeridge lots that look toward Lake Washington, and east-facing yards that look down into the Renton valley, usually keep hogwire in a cedar frame on the view side so the outlook stays open and the fence takes less wind than a solid wall. Hybrid aluminum-and-cedar on steel posts is the metal option we install when someone is comparing ornamental iron and wants a lower-maintenance face. MyFence.com does not install vinyl, chain link, or standalone ornamental iron. Fence Genius records the grade so a panel follows the slope instead of leaving a gap at the bottom.",
  },
  {
    question: "How much does fence installation cost in West Hill?",
    answer:
      "West Hill fence installation typically runs $44–$67 per linear foot for six-foot cedar privacy, including horizontal cedar layouts in that same cedar range, $39–$58 for hogwire with a cedar frame, and $54–$76 for hybrid aluminum/cedar. Hillside grade, tear-out of an older fence, extra gates, and hand-digging near mature trees can move a quote. We do not price vinyl, chain link, or ornamental iron because we do not install those systems. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in West Hill?",
    answer:
      "Most West Hill residential projects finish in one to three working days after any King County or City of Renton paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from a steep side yard, removing a leaning older fence, or staging so a trailer is not blocking Renton Avenue South through the Skyway business district or school traffic at Bryn Mawr, Lakeridge, or Campbell Hill. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in West Hill?",
    answer:
      "A fence on the property line is often a shared decision in practice, even when the county or the city does not ask for a signature. West Hill mixes older hillside houses with later infill near Skyway, Bryn Mawr, and Lakeridge, so the pin line is worth confirming before posts go in. Talk with the neighbor, then confirm height and any critical-area limits with King County Permitting if the parcel is unincorporated, or with the City of Renton if it is inside the city. Some individual plats have private covenants; there is not one community-wide association for West Hill. MyFence.com can share a simple site plan so that conversation stays on style, height, and who pays for which stretch.",
  },
];

const WEST_HILL_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Skyway Park",
    url: "https://kingcountyparks.org/2026/04/17/a-new-home-for-the-future-skyway-community-center/",
    description:
      "King County Parks' central open space in the West Hill community, with paths, courts, and wetlands at the headwaters of Taylor Creek. Lots on the streets around S 120th Place usually want a fence that holds pets without blocking the walk into the park.",
  },
  {
    name: "Bryn Mawr Elementary School",
    url: "https://brynmawr.rentonschools.us/",
    description:
      "A Renton School District campus at 8212 S 118th St in the Bryn Mawr part of West Hill. Morning drop-off stacks on the residential streets around the school, so fence jobs on that block get timed around the line.",
  },
  {
    name: "Skyway Library",
    url: "https://kcls.org/locations/skyway/",
    description:
      "The King County Library System branch in the Skyway business district along Renton Avenue South. It is an easy walk from nearby houses, which is why side-yard gates on those blocks need to stay usable for a stroller or a dog.",
  },
  {
    name: "Lakeridge Elementary School",
    url: "https://lakeridge.rentonschools.us/",
    description:
      "The Renton School District school at 7400 S 115th St, on the lake-view side of the hill. Yards here often want screening between neighbors and a lighter fence toward the water.",
  },
];

const WestHillPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "West Hill, Renton",
    pageTitle: "West Hill Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: WEST_HILL_FAQS,
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
              href="/service-areas/renton"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Renton
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-lg text-muted-foreground">
                    Serving West Hill, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  West Hill Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy and horizontal cedar for close hillside yards, hogwire that keeps a lake or valley view, and hybrid panels for the ridge above the Renton valley near Skyway and Bryn Mawr.
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
                  city="West Hill, Renton"
                  state="Washington"
                  radiusMiles={5}
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

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing the Hill Above the Renton Valley
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                West Hill is the ridge on Renton&apos;s west and northwest side, between Seattle, Tukwila, and the Renton valley. King County treats the community as unincorporated Skyway-West Hill: Bryn Mawr and Lakeridge sit toward Lake Washington, Skyway and Earlington sit along Renton Avenue South, and the south and east edges meet the City of Renton. The ground is rarely flat. A side yard can drop a full panel height between the street and the back corner, and the open face of the lot may look at the lake, at the valley and Rainier Avenue South, or into trees.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, horizontal cedar, hogwire, and hybrid fences on this hill and on the Renton streets just east of it, including downtown. Fence Genius records the grade, the true length of a short side yard, and where an older pin line sits before a post goes in. The fence follows the slope and the outlook: a solid neighbor side where houses are close, and a lighter stretch where the view is the reason the lot was bought.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why West Hill Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Grade Measured Before Panels</h3>
                      <p className="text-muted-foreground">
                        Lots step as they leave Renton Avenue South, MLK Way South, and the lake-side streets in Bryn Mawr. Fence Genius captures the rise so panels follow the ground and a gate still swings on the uphill walk to the house.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lake and Valley Views</h3>
                      <p className="text-muted-foreground">
                        A solid wall on the open side erases the reason many of these houses were built. We keep privacy on the neighbor faces and use hogwire where the lot looks toward Lake Washington or down into the Renton valley.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Wind className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Wind on the Exposed Ridge</h3>
                      <p className="text-muted-foreground">
                        This hill sits above the valley, so an open lot takes more wind than a sheltered downtown yard. A lighter view-side panel, and posts set for the grade, holds up better than a tall solid run on the windward face.
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
                        Coverage on materials and labor, including hardware chosen for a wet low corner on a slope. The warranty is MyFence.com&apos;s workmanship warranty.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="West Hill Renton fence" />

        <ServiceAreaPhotoGallery
          city="Renton"
          title="Recent Fence Work Near West Hill"
          description="These photos are from nearby Renton jobs, including downtown and other hillside streets. Same crew, same materials, and the same Fence Genius process we use on West Hill lots near Skyway, Bryn Mawr, and Lakeridge."
        />

        <FeaturedProject city="Renton" neighborhood="West Hill" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Featured West Hill Installation</h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical West Hill run sits on a sloping lot off Renton Avenue South, or on a lake-side street in Bryn Mawr or Lakeridge. The neighbor faces are often full-height cedar, sometimes with horizontal boards when the house is newer infill. The open stretch is lighter — hogwire in a cedar frame — when the backyard looks toward Lake Washington or down toward the Renton valley and Rainier Avenue South. Fence Genius maps the grade so the bottom of the fence follows the slope instead of leaving a gap a pet can slip through, and we set the line so winter runoff does not pond against the first board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Comparable residential yards here are a backyard plus two side yards, and most wrap in one to three working days after any county or city paperwork. We use cedar privacy, horizontal cedar, hogwire, or hybrid aluminum/cedar. We walk the line with you before posts go in so the close neighbor side, the windy ridge face, and the open view side are all accounted for.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">West Hill Fencing Considerations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Slopes Above the Valley</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    West Hill rises west of downtown Renton and drops toward Rainier Avenue South, the Renton Municipal Airport flats, and the lake to the north. A panel layout drawn for a flat backyard will gap or rack on these grades. We measure the rise along each run, then build panels that follow the ground and still leave a gate that opens on the uphill side of the house.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Views, Wind, and Privacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Houses along Renton Avenue South and the older Skyway blocks often want a solid cedar street or neighbor face because the next house is close. Bryn Mawr and Lakeridge lots that face the lake, and east-facing yards over the valley, lose the outlook if every side is the same solid height. Mixed styles — solid where privacy matters, open toward the view — also present less sail area on the windy ridge. Horizontal cedar is the board layout we use when the house already reads that way and a vertical picture-frame would look out of place.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Cedar, Hogwire, and Hybrid — and Materials We Do Not Install</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    MyFence.com installs cedar privacy, horizontal cedar, hogwire with a cedar frame, and hybrid aluminum-and-cedar. Homeowners on this hill sometimes ask about vinyl, chain link, and ornamental iron. We do not install vinyl, chain link, or standalone ornamental iron. Hybrid aluminum panels in a cedar frame are the metal face we build when the comparison is ornamental iron and the goal is a cleaner, lower-maintenance line. Chain link does not give the privacy these close lots usually need, and we will not quote it as a substitute.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">King County or City of Renton, by Parcel</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    West Hill is not one city. King County&apos;s{" "}
                    <a
                      href="https://kingcounty.gov/en/dept/local-services/buildings-property/development-planning-regulations/regional-planning/annexations/potential-annexation-areas/west-hill"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      West Hill potential annexation page
                    </a>{" "}
                    describes the community as unincorporated King County next to Seattle, Renton, and Tukwila. The city line runs along the south and east edges, so a lot that feels like the same hill can sit inside Renton. Confirm the address in the{" "}
                    <a
                      href="https://gismaps.kingcounty.gov/parcelviewer2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      King County Parcel Viewer
                    </a>
                    , then use{" "}
                    <a
                      href="https://kingcounty.gov/en/dept/local-services/certificates-permits-licenses/permits/permits-inspections-codes-buildings-land-use/do-you-need-a-permit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      King County&apos;s do-you-need-a-permit page
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://www.rentonwa.gov/City-Services/Permit-Services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      City of Renton Permit Services
                    </a>
                    . For an in-city parcel,{" "}
                    <a
                      href="https://www.codepublishing.com/WA/Renton/html/Renton04/Renton0404/Renton0404040.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      Renton fence code 4-4-040
                    </a>{" "}
                    is the height and setback section. There is no single West Hill homeowners association; if a plat has private covenants, that review is separate from the permit.
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
                Fence Installation Cost in West Hill
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A West Hill fence is often a mixed-style run: cedar on the close neighbor side, and an open stretch toward the lake or the valley. Grade, access, and an older fence that has to come out move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;), including horizontal cedar:</strong> $44–$67 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong> $39–$58 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong> $54–$76 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Tear-out of an existing fence, extra gates, and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your West Hill property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg" className="max-w-full whitespace-normal h-auto text-center">
                  <Link href="/quote">Get an exact quote for your West Hill property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in West Hill</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The usual choice on neighbor sides along Renton Avenue South and the closer Skyway blocks. Full height where the next house is near, in pre-stained cedar that fits both older houses and later infill.
                  </p>
                  <Link
                    href="/fence-styles/picture-frame-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Horizontal Cedar Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The same cedar, run horizontally, for houses that already use a clean board line. It still screens a side yard. On a windy ridge we talk through height before a long solid run faces the open slope.
                  </p>
                  <Link
                    href="/fence-styles/horizontal-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Cedar frame with black mesh for lake-facing Bryn Mawr and Lakeridge yards, and for backs that look down into the Renton valley. Dogs stay in, and the lighter panel takes less wind than a solid wall.
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
                    Aluminum panels in a cedar frame on steel posts. This is the metal option when a homeowner is comparing ornamental iron. It reads residential on Skyway and Bryn Mawr streets and skips a yearly stain on the panels.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our West Hill Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. West Hill Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the grade, note which face takes wind and which face holds the lake or valley view, map utilities, and check whether the downhill side should stay more open. Fence Genius captures length and slope so panels are built to the hill.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design and the Right Permit Desk</h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We look up whether the parcel is unincorporated King County or inside the City of Renton before we draw. County parcels follow King County permitting, including the general six-foot fence exemption when critical areas are not involved. In-city parcels follow Renton&apos;s six-foot permit line, the 48-inch front-yard limit, and corner sight lines. If a plat has private covenants, that packet is separate. Confirm the rules with the jurisdiction on the parcel before we schedule.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, horizontal cedar, hogwire frames, or hybrid modules — so install days are mostly setting posts and hanging finished sections that already match the slope.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. West Hill Installation</h3>
                  <p className="text-muted-foreground">
                    Crews work residential streets off Renton Avenue South, Martin Luther King Jr. Way South, and the Bryn Mawr and Lakeridge blocks. We time arrivals around school pickup at Bryn Mawr, Lakeridge, and Campbell Hill and keep trailers off the Skyway business-district frontage when we can. Most jobs wrap in one to three days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty
                  </h3>
                  <p className="text-muted-foreground">
                    Final walkthrough covering every panel, post, and gate. The {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty starts when the job is complete.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <NeighborhoodFaqSection title="West Hill Fence Installation FAQs" items={WEST_HILL_FAQS} />
      </main>

      <AboutTheArea
        cityName="Renton"
        neighborhoodName="West Hill"
        attractions={WEST_HILL_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              West Hill families are served by the{" "}
              <a
                href="https://www.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className={livingLinkClass}
              >
                Renton School District
              </a>
              . King County planning documents place{" "}
              <a
                href="https://brynmawr.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className={livingLinkClass}
              >
                Bryn Mawr Elementary
              </a>
              ,{" "}
              <a
                href="https://campbellhill.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className={livingLinkClass}
              >
                Campbell Hill Elementary
              </a>
              ,{" "}
              <a
                href="https://lakeridge.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className={livingLinkClass}
              >
                Lakeridge Elementary
              </a>
              , and{" "}
              <a
                href="https://dimmitt.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className={livingLinkClass}
              >
                Dimmitt Middle School
              </a>{" "}
              among the campuses on this hill. Attendance boundaries are set by the district, so confirm your assigned school for the specific address.
            </p>
            <p>
              Daily errands run along Renton Avenue South through the Skyway business district, with the{" "}
              <a
                href="https://kcls.org/locations/skyway/"
                target="_blank"
                rel="noopener noreferrer"
                className={livingLinkClass}
              >
                Skyway Library
              </a>{" "}
              and Skyway Park in the middle of the community. Martin Luther King Jr. Way South (SR 900) and Rainier Avenue South carry traffic toward Seattle, Tukwila, and the Renton valley. For fence permits, start with the parcel:{" "}
              <a
                href="https://gismaps.kingcounty.gov/parcelviewer2/"
                target="_blank"
                rel="noopener noreferrer"
                className={livingLinkClass}
              >
                King County Parcel Viewer
              </a>{" "}
              shows the jurisdiction, then{" "}
              <a
                href="https://kingcounty.gov/en/dept/local-services/certificates-permits-licenses/permits/permits-inspections-codes-buildings-land-use/do-you-need-a-permit"
                target="_blank"
                rel="noopener noreferrer"
                className={livingLinkClass}
              >
                King County Permitting
              </a>{" "}
              or{" "}
              <a
                href="https://www.rentonwa.gov/City-Services/Permit-Services"
                target="_blank"
                rel="noopener noreferrer"
                className={livingLinkClass}
              >
                City of Renton Permit Services
              </a>
              . The hill is a short drive from downtown Renton, which is why so many of these yards want a fence that keeps the view and still gives the side yard some quiet.
            </p>
          </>
        }
      />

      <main>
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Renton Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Renton. From West Hill we also work in Downtown Renton in the valley to the east, Kennydale along the lake, and Talbot Hill on the hillside south of downtown.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/downtown-renton">Downtown Renton</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/kennydale">Kennydale</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/talbot-hill">Talbot Hill</Link>
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
                Ready to Enhance Your West Hill Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in West Hill. We&apos;ll walk the lot, confirm whether the parcel is King County or City of Renton, and quote a fence that fits the slope and the view.
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

export default WestHillPage;
