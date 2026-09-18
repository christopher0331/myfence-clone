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
  TreePine,
  Mountain,
  Home,
  FileCheck,
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

const CANONICAL = "https://myfence.com/service-areas/issaquah/talus";
const META_TITLE =
  "Talus Issaquah Fence Installation | Hillside & HOA | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Talus, Issaquah, WA. Cedar, hogwire & hybrid fencing for Cougar Mountain slopes and Talus Residential Association review. Free quotes. (253) 455-1885.";

const TALUS_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Talus, Issaquah?",
    answer:
      "The City of Issaquah generally does not require a building permit for residential fences six feet or shorter, but a permit is required over six feet or if the run sits in a mapped critical area. Front-yard fencing is typically limited to four feet, and corner lots along NW Talus Drive and Shangri-La Way NW must keep sight-distance triangles clear. Separate from the city, the Talus Residential Association Architectural Review Committee reviews style, height, and finish before you build. Lots that climb toward Cougar Mountain or sit in a steep-slope overlay can trigger extra review regardless of height. MyFence.com checks city rules and TRA packets for your Talus address before we quote.",
  },
  {
    question:
      "What fence styles work best for Talus hillside lots and HOA review?",
    answer:
      "Interior lots near Harvey Manning Park and Cougar Mountain Middle School usually choose six-foot cedar privacy so kids, dogs, and trail traffic stay on the right side of the line. On steeper cuts toward Bear Ridge and the Cougar Mountain greenbelt, hogwire in a cedar frame keeps a sightline into the trees while still containing pets. Hybrid aluminum-and-cedar systems suit homeowners who want the cedar look without restaining under the forest canopy. Fence Genius maps the grade so panels step with the lot instead of leaving crawl gaps on a 15–30% slope. We prepare a simple drawing and material list for TRA architectural review.",
  },
  {
    question: "How much does fence installation cost in Talus, Issaquah?",
    answer:
      "Talus fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Stepped runs on NW Talus Drive, hand-digging around mature firs on Shangri-La Way, custom gates, and HOA-required finishes can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Talus?",
    answer:
      "Most Talus residential projects finish in one to three working days after city (if needed) and TRA architectural paperwork is complete. Prefabricated panels keep on-site time short. Extra half-days usually come from stepped posts on the Cougar Mountain face, tight side yards on hillside cul-de-sacs, or working around pickup traffic at Cougar Mountain Middle School on NW Talus Drive. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Talus?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Issaquah does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Talus lots often share greenbelt edges and irregular pins on hillside cuts, so confirming the line before digging saves a redo. TRA review is a separate step from neighbor consent. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const TALUS_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Harvey Manning Park at Talus",
    url: "https://www.issaquahwa.gov/Facilities/Facility/Details/Harvey-Manning-Park-at-Talus-27",
    description:
      "The neighborhood's 10-acre hub at 919 Bear Ridge Court NW — playground, basketball half-court, and the trailhead most Talus households use to reach Cougar Mountain without driving to a distant lot.",
  },
  {
    name: "Cougar Mountain Regional Wildland Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/cougar-mountain",
    description:
      "Thousands of protected acres above the neighborhood. Surprise Creek and Bear Ridge connections mean a Saturday hike can start at the back fence instead of a freeway trailhead.",
  },
  {
    name: "Cougar Mountain Middle School",
    url: "https://cougarmountain.isd411.org/",
    description:
      "The Issaquah School District campus at 1929 NW Talus Drive, opened in 2022 on the hillside below Timber Ridge. Afternoon pickup stacks on NW Talus Drive even for families whose kids attend other district schools.",
  },
  {
    name: "Cougar Mountain Zoo",
    url: "https://www.cougarmountainzoo.org/",
    description:
      "A compact wildlife park just down the hill toward downtown Issaquah. Weekend visits and school-group days are a short hop from the NW Talus Drive entrance off SR-900.",
  },
  {
    name: "Issaquah Salmon Hatchery",
    url: "https://www.issaquahfish.org/",
    description:
      "The creek-side hatchery in Olde Town, a few minutes from the Talus gate. Fall returns and the surrounding parks are the usual family outing when you drop off the mountain.",
  },
];

const TalusPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Talus, Issaquah",
    pageTitle: "Talus Issaquah Fence Installation",
    description: META_DESCRIPTION,
    faqItems: TALUS_FAQS,
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
                    Serving Talus, Issaquah WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Talus Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Hillside fence work for Talus homes on Cougar Mountain — cedar privacy for family yards, hogwire that keeps the forest in view, and hybrid systems built for the grade climb from SR-900 up NW Talus Drive.
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
                  city="Talus, Issaquah"
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
                Building Along a Cougar Mountain Grade
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Talus is a 630-acre planned community on the west face of Cougar Mountain, entered from SR-900 onto NW Talus Drive. Lots near the school and Harvey Manning Park sit on gentler benches; a few streets later the same grid tilts hard toward Bear Ridge and the wildland park. Homes here are newer than Olde Town Issaquah, with a single master association — the Talus Residential Association — and an Architectural Review Committee that signs off on height, finish, and style. The design conversation starts with the lot: steep cut, forest moisture, trail-edge wildlife, and the firs that line Shangri-La Way and the greenbelt backs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built cedar, hogwire, and hybrid fences across Issaquah&apos;s hillside communities, including Talus runs and the Mirrormont and Highlands edges nearby. We use Fence Genius to capture grade before a post goes in the ground, so stepped panels on the mountain face stay even and bench lots get tight, pet-safe bottoms. The goal is a fence that reads as part of the street — not a flat-lot panel dropped onto a 20% slope — and a packet the TRA committee can approve on the first pass.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Talus Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Cougar Mountain Grade Work
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps the climb from SR-900 to the upper cul-de-sacs so posts step instead of racking a six-foot bay across a cut. The top rail stays even from the street; the bottom tracks the lawn.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <FileCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Talus Residential Association Packets
                      </h3>
                      <p className="text-muted-foreground">
                        We prepare drawings, heights, and material lists for TRA architectural review so you are not guessing what the committee wants on NW Talus Drive or Shangri-La Way.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        School-Area and Trail-Edge Yards
                      </h3>
                      <p className="text-muted-foreground">
                        Self-closing gates, no crawl gaps at the bottom, and latch heights that work for households walking to Cougar Mountain Middle or Harvey Manning Park. Built for after-school use, not just curb appeal.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Forest Moisture and Wildlife Details
                      </h3>
                      <p className="text-muted-foreground">
                        Pre-stained cedar, stainless or hot-dipped fasteners, and optional steel posts where canopy shade keeps the soil wet. Deer and the occasional bear use the same greenbelts your fence has to hold.
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
                What Talus Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot climbs toward the greenbelt and I did not want a solid wall blocking the trees. They stepped a hogwire run with a cedar frame and it still keeps the dog in. TRA packet went through on the first try.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Talus</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We needed real privacy after school pickup on NW Talus Drive. The cedar looks like it belongs with the newer houses, the gates latch well, and they hand-dug around the firs in the side yard.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Talus</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;The Architectural Review Committee wanted a specific stain and height. They put together a drawing and material list that matched the TRA guidelines. Appreciate not having to redo the packet.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Elena in Talus</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Talus Issaquah fence" />

        {/* 6. Photo Gallery — nearby Issaquah installs until Talus-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Issaquah"
          title="Recent Fence Work Near Talus"
          description="These photos are from nearby Issaquah jobs, including Mirrormont and Issaquah Highlands. Same crew, same materials, and the same Fence Genius process we use on Talus hillside lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Issaquah" neighborhood="Talus" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Talus-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Talus Terrain and Stepped Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    NW Talus Drive is a continuous climb from the SR-900 entrance to the upper benches. A fence built as one long level line either buries the bottom rail or leaves a gap a small dog can use. We measure grade with Fence Genius, then step or rack panels so the top stays even and the bottom tracks the lawn. On the steepest cuts toward Bear Ridge and the Cougar Mountain face we shorten panel bays rather than forcing a six-foot bay across a drop.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Talus Canopy Moisture and Fastener Choice
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cool air and shade from the Cougar Mountain canopy hang in the lower and north-facing yards overnight, longer than they do on the Issaquah valley floor. Raw cedar grays fast on the downhill face, and cheap galvanized nails start showing rust streaks. We spec pre-stained Western Red Cedar and stainless or hot-dipped fasteners, and we talk through steel posts where the soil stays wet at the lower corners of the lot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Talus View Corridors vs. Privacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hillside lots often want screening from the neighbor without a solid wall across the forest. Hogwire in a cedar frame, or cedar privacy on the side yards with an open run on the greenbelt edge, is the typical mix. Bench lots near the school and Harvey Manning Park usually want full-height cedar. We walk the lot with you and mark where a solid panel helps and where it just blocks the reason you bought on Cougar Mountain.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Talus HOA Review, Trees, and City Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Talus Residential Association Architectural Review Committee reviews fence style, height, and finish before construction. Timber Ridge has its own association on the upper campus. We still follow Issaquah height rules — six feet in most side and rear yards, four feet in the front setback — and we plan post holes around the firs and cedars that line Shangri-La Way and the greenbelt backs. If your parcel sits in a steep-slope or critical-area overlay, we flag that before digging rather than after.
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
                Fence Installation Cost in Talus
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Talus fence is an investment in a hillside lot and, on the greenbelt edge, a view. Slope, gates, HOA finish requirements, and moisture details move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $45–$68 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $39–$58 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $55–$76 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Stepped runs on NW Talus Drive and hand-digging near mature trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Talus property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Talus property</Link>
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
                Popular Fence Styles in Talus
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on bench lots near Cougar Mountain Middle and Harvey Manning Park. Full screening for after-school play, pre-stained cedar that holds up to foothill winters, and a look that fits TRA architectural review.
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
                    Cedar frame with black mesh for downhill lots that still want the forest. Dogs stay in, the trees stay in view, and the lighter footprint is easier around roots than a solid privacy wall.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when canopy humidity makes staining a chore. Strong enough for busy family yards without looking like a commercial lot.
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
                Our Talus Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Talus Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note slope toward Cougar Mountain, map trees, and check whether the parcel sits in an Issaquah steep-slope or critical-area overlay. Fence Genius captures grade so panels are built to the actual drop, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Talus Design & TRA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We prepare a drawing and material list for the Talus Residential Association Architectural Review Committee. Timber Ridge addresses follow that community&apos;s packet. We still document Issaquah height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Talus install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Talus Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off NW Talus Drive, Shangri-La Way, and Bear Ridge. Hand-digging near mature roots, stepped posts on the mountain face, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Talus Fence Installation FAQs"
          items={TALUS_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Issaquah"
        neighborhoodName="Talus"
        attractions={TALUS_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Talus sits in the{" "}
              <a
                href="https://www.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah School District
              </a>
              . Many households feed{" "}
              <a
                href="https://issaquahvalley.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah Valley Elementary
              </a>
              {" "}
              downtown, then later{" "}
              <a
                href="https://issaquahhigh.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah High School
              </a>
              .{" "}
              <a
                href="https://cougarmountain.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cougar Mountain Middle School
              </a>{" "}
              is on NW Talus Drive, but attendance boundaries do not automatically match the neighborhood — confirm your address with the district. The{" "}
              <a
                href="https://www.talusliving.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Talus Residential Association
              </a>{" "}
              handles common areas and architectural review.
            </p>
            <p>
              Groceries and after-practice food sit down the hill in Olde Town and along Gilman Boulevard rather than inside the gates. Weekends split between the playground at{" "}
              <a
                href="https://www.issaquahwa.gov/Facilities/Facility/Details/Harvey-Manning-Park-at-Talus-27"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Harvey Manning Park at Talus
              </a>
              , boutique stops at{" "}
              <a
                href="https://www.gilmanvillage.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Gilman Village
              </a>
              , and trail miles mapped by the{" "}
              <a
                href="https://www.issaquahalps.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah Alps Trails Club
              </a>
              .{" "}
              <a
                href="https://www.issaquahwa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The City of Issaquah
              </a>{" "}
              handles permits and parks; I-90 exit 15 and SR-900 connect you to downtown, Costco, and the rest of the Eastside.
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
                We install fences throughout Issaquah. From Talus we also work in Issaquah Highlands across I-90, Mirrormont on Squak Mountain, Newcastle on the west slope, and Olde Town at the base of the hill.
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
                  <Link href="/service-areas/bellevue/newcastle">Newcastle</Link>
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
                Ready to Enhance Your Talus Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Talus. We&apos;ll walk the slope, talk through TRA review and view vs. privacy, and quote a fence that fits your Cougar Mountain lot.
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

export default TalusPage;
