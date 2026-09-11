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
  Users,
  Home,
  Leaf,
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

const CANONICAL = "https://myfence.com/service-areas/issaquah/providence-point";
const META_TITLE =
  "Providence Point Issaquah Fence Installation | 55+ Village HOA | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Providence Point, Issaquah, WA. HOA-ready cedar, hogwire & hybrid fencing for 55+ village lots near Lake Sammamish. Free quotes. (253) 455-1885.";

const PROVIDENCE_POINT_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Providence Point, Issaquah?",
    answer:
      "The City of Issaquah generally does not require a building permit for residential fences six feet or shorter, unless the run sits in a mapped critical area or you want a taller fence. Front-setback height is typically four feet; side and rear yards can go to six feet. Laughing Jacobs Creek and the wetlands along the south edge of Providence Point can trigger extra review even at standard height. Village architectural approval from the Providence Point Condo Association is a separate step and usually comes first. MyFence.com checks both the city overlays and your village packet before we quote.",
  },
  {
    question:
      "What fence styles work best for Providence Point's village lots and HOA rules?",
    answer:
      "Most village boards want a low-maintenance look that matches the painted exteriors and common landscaping. Six-foot cedar privacy is common on interior patio edges in Hilltop, Forest, and Meadow villages when neighbors want screening without a commercial-looking wall. Hogwire in a cedar frame is the usual pick along trail-facing lots and the creek side, where a solid wall would cut off the trees. Hybrid aluminum-and-cedar systems suit homeowners who want the cedar look without restaining every few years. Fence Genius maps the gentle rolls so short courtyard runs stay even instead of leaving crawl gaps at the downhill corner.",
  },
  {
    question: "How much does fence installation cost in Providence Point, Issaquah?",
    answer:
      "Providence Point fence installation typically runs $45–$66 per linear foot for six-foot cedar privacy, $39–$56 for hogwire with a cedar frame, and $55–$74 for hybrid aluminum/cedar. Shorter patio and courtyard runs, custom gates for village walkways, and hand-digging near maintained plantings can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement and a look at your village guidelines.",
  },
  {
    question: "How long does fence installation take in Providence Point?",
    answer:
      "Most Providence Point residential projects finish in one to three working days after village architectural approval is in hand. Prefabricated panels keep on-site time short, which matters on shared drives and near the security gate on Providence Point Drive SE. Extra half-days usually come from stepped posts on creek-side lots, tight side yards between attached homes, or working around community shuttle and visitor traffic. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Providence Point?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the adjoining owner early is the practical path even when the city does not require a signature. In Providence Point the bigger gate is the village board: many lots sit against common landscaping rather than a private side yard, so the association has to confirm you can place posts on that edge at all. A fence taller than six feet also requires a recorded agreement with the adjoining owner. MyFence.com can help share a simple site plan with both the neighbor and the village reviewer.",
  },
];

const PROVIDENCE_POINT_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Lake Sammamish State Park",
    url: "https://parks.wa.gov/find-parks/state-parks/lake-sammamish-state-park",
    description:
      "The big public shoreline at the south end of the lake, a short hop down East Lake Sammamish Parkway from the SE 43rd Way entrance. Picnic lawns, swimming beaches, and trail connections make it the weekday walk most Providence Point households take without getting on I-90.",
  },
  {
    name: "Issaquah Salmon Hatchery",
    url: "https://www.issaquahfish.org/",
    description:
      "The working hatchery on W Sunset Way in downtown Issaquah. Fall spawning season draws residents who want a short outing that is not another medical appointment — and it sits on the same creek system that borders the south edge of the community.",
  },
  {
    name: "Gilman Village",
    url: "https://www.gilmanvillage.com/",
    description:
      "A cluster of relocated historic houses on NW Gilman Boulevard with independent shops and sit-down lunch spots. Providence Point drivers typically reach it via East Lake Sammamish Parkway and I-90 Exit 17 without climbing into the Highlands.",
  },
  {
    name: "Swedish Issaquah Campus",
    url: "https://www.swedish.org/locations/issaquah-campus",
    description:
      "The hospital and clinic campus on NE Blakely Drive in Issaquah Highlands. Many residents time fence walkthroughs around appointments here; the campus is the main medical stop for the 98029 zip rather than a drive into Bellevue.",
  },
  {
    name: "Pickering Multiple Use Trail",
    url: "https://www.issaquahwa.gov/facilities/facility/details/Pickering-Multiple-Use-Trail-18",
    description:
      "The paved connector along Issaquah Creek by Pickering Barn and Costco. It ties the state park, the East Lake Sammamish Trail, and downtown errands into one loop that does not require a highway hop.",
  },
];

const ProvidencePointPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Providence Point, Issaquah",
    pageTitle: "Providence Point Issaquah Fence Installation",
    description: META_DESCRIPTION,
    faqItems: PROVIDENCE_POINT_FAQS,
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
              href="/service-areas/issaquah"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Issaquah
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Providence Point, Issaquah WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Providence Point Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Village-ready fence work for Issaquah&apos;s 55+ campus — cedar privacy for patio edges, hogwire that keeps trail views, and hybrid systems built for HOA review on Providence Point Drive SE.
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
                  city="Providence Point, Issaquah"
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
                Fencing a Gated Campus With Seven Village Boards
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Providence Point is not a typical Issaquah subdivision. The campus covers about 161 rolling acres on the lake side of town, entered from East Lake Sammamish Parkway via SE 43rd Way and Providence Point Drive SE, with a security gate before you reach Town Hall. Seven villages — including Hilltop, Forest, Highland, Meadow, and Center — sit around Laughing Jacobs Creek instead of a single street grid. Homes are mostly attached or clustered, common landscaping is association-maintained, and a fence conversation starts with whether the run is on exclusive-use space or shared ground.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Issaquah, including village lots here and the nearby Highlands and Klahanie edges. We use Fence Genius to capture grade on the creek-facing rolls before a post goes in, and we put together the drawing and material list village reviewers actually want to see. The goal is a fence that reads as part of the campus — not a one-off wall dropped onto a patio that the board will send back.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Providence Point Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Village Board Packet Ready
                      </h3>
                      <p className="text-muted-foreground">
                        Each village elects its own board and reads guidelines a little differently. We prepare a simple site plan, height notes, and material list so Hilltop, Forest, or Meadow reviewers can say yes on the first pass.
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
                        Full coverage on materials and labor, including hardware chosen for the extra damp along Laughing Jacobs Creek. We stand behind the install through Issaquah winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Low-Maintenance 55+ Details
                      </h3>
                      <p className="text-muted-foreground">
                        Self-closing gates, latches that do not fight arthritic hands, and finishes that do not need a ladder every spring. Built for patio living, not a weekend of staining.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Leaf className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Creek-Side Planting Care
                      </h3>
                      <p className="text-muted-foreground">
                        Association crews already tend the beds. We hand-dig near established plantings and trail edges so a new run does not tear up the landscaping residents pay dues to keep.
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
                What Providence Point Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our Hilltop patio needed screening from the walkway without looking like a warehouse wall. They put a short cedar run together, walked the drawing to the village board with us, and finished before our next clubhouse class.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Diane in Providence Point</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;The lot rolls toward the creek and I did not want a solid fence blocking the trees. Hogwire in a cedar frame keeps the dog in and the view open. Crew was careful around the common plantings.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Robert in Providence Point</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We wanted something we would not have to stain. The hybrid system got through Meadow Village review, the gate latch is easy to use, and they worked around the security-gate schedule without blocking neighbors.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Linda in Providence Point</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Providence Point Issaquah fence" />

        {/* 6. Photo Gallery — nearby Issaquah installs until Providence Point-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Issaquah"
          title="Recent Fence Work Near Providence Point"
          description="These photos are from nearby Issaquah jobs, including Mirrormont on Squak Mountain. Same crew, same materials, and the same Fence Genius process we use on Providence Point village lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Issaquah" neighborhood="Providence Point" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Providence Point-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Providence Point Village Review and Common Ground
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Providence Point Condo Association maintains exteriors, roofs, and landscaping; each village still has its own board and a slightly different reading of what belongs on a patio edge. A lot of proposed fence lines sit against common beds rather than a private side yard, so the first question is not height — it is whether posts can go there at all. We start with a simple drawing, stain or color notes, and a note on gates so the reviewer is not guessing from a phone photo.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Providence Point Terrain Along Laughing Jacobs Creek
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The campus looks gentle from the gate, but Forest and Hilltop lots still roll toward the creek corridor. A fence built as one long level line either buries the bottom rail or leaves a gap at the downhill corner. We measure grade with Fence Genius, then step or rack short panels so the top stays even and the bottom tracks the lawn. Creek-side parcels can also sit in a city critical-area overlay, which we flag before digging rather than after.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Providence Point Moisture and Finish Choice
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cool air off Lake Sammamish and the creek bottom keeps lower courtyards damp longer than the Town Hall lawn. Raw cedar grays fast on the shaded side of attached buildings, and cheap fasteners start showing rust streaks against painted siding. We spec pre-stained Western Red Cedar and stainless or hot-dipped hardware, and we talk through hybrid aluminum-and-cedar when staining from a patio chair is not in the plan.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Providence Point Access, Gates, and Neighbor Sightlines
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Materials come through the attendant gate on Providence Point Drive SE, then along village drives that are not built for a full lumber truck. We stage compact equipment, keep dumpsters off shared walkways, and time deliveries around the community shuttle. On the design side, trail-facing lots often want screening from a neighbor without a solid wall across the trees — hogwire on the view edge and cedar on the patio sides is the mix we walk most often.
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
                Fence Installation Cost in Providence Point
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Providence Point fence is often a shorter courtyard or patio run, not a full-acre perimeter. Village-approved materials, gates, and creek-side grade still move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $45–$66 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $39–$56 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $55–$74 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Hand-digging near association plantings and custom gates on village walkways may add 10–15%. Slope along the creek can add the same. Get an exact quote for your Providence Point property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Providence Point property</Link>
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
                Popular Fence Styles in Providence Point
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The usual pick for patio edges in Hilltop and Meadow when you want screening from a walkway. Pre-stained cedar that fits painted village exteriors, with panel heights the board already recognizes.
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
                    Cedar frame with black mesh for creek- and trail-facing lots. Pets stay in, the trees stay in view, and the lighter footprint is easier around association plantings than a solid privacy wall.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when staining is off the table. Strong enough for a small yard without looking like a commercial lot.
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
                Our Providence Point Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Providence Point Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note slope toward Laughing Jacobs Creek, map association plantings, and check whether the parcel sits in an Issaquah critical-area overlay. Fence Genius captures grade so short courtyard panels are built to the actual drop.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Providence Point Design & Village Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We prepare a drawing and material list for your village board — Hilltop, Forest, Highland, Meadow, or Center — and still document Issaquah height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Providence Point install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Providence Point Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to the gate on Providence Point Drive SE and the village drives off SE 42nd Terrace and SE 45th Street. Hand-digging near maintained beds, stepped posts on creek-facing lots, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Providence Point Fence Installation FAQs"
          items={PROVIDENCE_POINT_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Issaquah"
        neighborhoodName="Providence Point"
        attractions={PROVIDENCE_POINT_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Providence Point sits in the{" "}
              <a
                href="https://www.issaquahwa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                City of Issaquah
              </a>
              , entered from East Lake Sammamish Parkway at SE 43rd Way. Daily life is built around village paths, Town Hall, and the short hop to{" "}
              <a
                href="https://www.swedish.org/locations/issaquah-campus"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Swedish Issaquah Campus
              </a>{" "}
              on NE Blakely Drive. The{" "}
              <a
                href="https://www.providencepointliving.com/public-our-community/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Providence Point Condo Association
              </a>{" "}
              handles common landscaping and village amenities; the city handles permits and parks. For errands that are not on campus, the{" "}
              <a
                href="https://kcls.org/locations/issaquah/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah Library
              </a>{" "}
              on Front Street is the usual downtown stop.
            </p>
            <p>
              Weekdays often split between a walk on the{" "}
              <a
                href="https://parks.wa.gov/find-parks/state-parks/lake-sammamish-state-park"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Sammamish State Park
              </a>{" "}
              shoreline and a paved mile on the{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/east-lake-sammamish"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                East Lake Sammamish Trail
              </a>
              . Lunch in town usually means{" "}
              <a
                href="https://www.gilmanvillage.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Gilman Village
              </a>{" "}
              or the shops along Front Street, then I-90 Exit 17 back to the gate. The community shuttle also runs into downtown Issaquah, which keeps fence-install staging on village drives from competing with extra personal cars.
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
                Also Serving Nearby Issaquah Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Issaquah. From Providence Point we also work in Issaquah Highlands just up the hill, Mirrormont on Squak Mountain, and Klahanie across SE 43rd Way in Sammamish.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah">Issaquah overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah-highlands">Issaquah Highlands</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah/mirrormont">Mirrormont</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/klahanie">Klahanie</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish</Link>
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
                Ready to Enhance Your Providence Point Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Providence Point. We&apos;ll walk the patio edge, talk through village review, and quote a fence that fits your Issaquah lot.
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

export default ProvidencePointPage;
