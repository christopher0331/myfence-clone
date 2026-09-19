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
  Eye,
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

const CANONICAL = "https://myfence.com/service-areas/issaquah/montreux";
const META_TITLE =
  "Montreux Issaquah Fence Installation | View Lots & HOA | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Montreux, Issaquah, WA. Cedar, hogwire & hybrid fencing for Cougar Mountain view lots and Montreux HOA review. Free quotes. (253) 455-1885.";

const MONTREUX_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Montreux, Issaquah?",
    answer:
      "The City of Issaquah generally does not require a building permit for residential fences six feet or shorter, but a permit is required over six feet or if the run sits in a mapped critical area or Native Growth Protection Easement. Front-yard fencing is typically limited to four feet, and corner lots along Northwest Montreux Drive and Northwest Lac Leman Drive must keep sight triangles clear. Separate from the city, the Montreux Homeowners Association Architectural Control Officer reviews exterior changes — including fences and tree work — before you build. MyFence.com checks city overlays and MHA packets for your Montreux address before we quote.",
  },
  {
    question:
      "What fence styles work best for Montreux view lots and HOA review?",
    answer:
      "Lots that look north toward Lake Sammamish usually keep the downhill edge more open — hogwire in a cedar frame, or a shorter open run — so the water and Cascade ridgeline stay in the picture. Side yards on Matterhorn Place NW, Mont Blanc Place NW, and the Alpine courts often take six-foot cedar privacy so neighbors and street traffic drop out of the evening. Hybrid aluminum-and-cedar systems suit homeowners who want the cedar look without restaining under the Cougar Mountain canopy. Fence Genius maps the north-face grade so panels step instead of leaving crawl gaps. We prepare a drawing and material list for MHA architectural review.",
  },
  {
    question: "How much does fence installation cost in Montreux, Issaquah?",
    answer:
      "Montreux fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Stepped runs on Northwest Montreux Drive, hand-digging around firs on Northwest Village Park Drive, custom gates, and HOA-required finishes can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Montreux?",
    answer:
      "Most Montreux residential projects finish in one to three working days after city (if needed) and MHA architectural paperwork is complete. Prefabricated panels keep on-site time short. Extra half-days usually come from stepped posts on the north Cougar Mountain face, tight side yards on Swiss-named cul-de-sacs, or working around the winding entrance off Lakemont Boulevard. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Montreux?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Issaquah does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Montreux lots often share wooded common-area edges and irregular pins on hillside cuts, so confirming the line before digging saves a redo. MHA review is a separate step from neighbor consent. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const MONTREUX_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Cougar Mountain Zoo",
    url: "https://www.cougarmountainzoo.org/",
    description:
      "A compact conservation park at 19525 SE 54th Street, just down the hill from the Montreux entrance. Weekend visits and school-group days are a short hop instead of a freeway trailhead.",
  },
  {
    name: "Cougar Mountain Regional Wildland Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/cougar-mountain",
    description:
      "Thousands of protected acres on the same mountain the neighborhood sits on. Greenbelt backs on Northwest Village Park Drive and the Alpine courts often connect to trail miles without loading a car.",
  },
  {
    name: "Lewis Creek Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/lewis-creek-park",
    description:
      "A 55-acre headwater park at 5808 Lakemont Boulevard SE with boardwalks, a visitor center, and play fields. Montreux households use it as the after-school loop when they drop off the mountain toward Lakemont.",
  },
  {
    name: "Lakemont Community Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/lakemont-community-park",
    description:
      "Playgrounds, pickleball, and a skate bowl at 5170 Village Park Drive SE. Soft-surface trails tie this park to Lewis Creek, so a Saturday walk can start at the Montreux gate and stay off I-90.",
  },
  {
    name: "Lake Sammamish State Park",
    url: "https://parks.wa.gov/find-parks/state-parks/lake-sammamish-state-park",
    description:
      "Two swimming beaches and lake-edge trails at 2182 NW Sammamish Road — the water most Montreux view lots look toward. A few minutes down Lakemont Boulevard and I-90 when you want sand instead of a forest path.",
  },
];

const MontreuxPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Montreux, Issaquah",
    pageTitle: "Montreux Issaquah Fence Installation",
    description: META_DESCRIPTION,
    faqItems: MONTREUX_FAQS,
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
                    Serving Montreux, Issaquah WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Montreux Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  View-lot fence work for Montreux homes on the north face of Cougar Mountain — cedar privacy on the side yards, hogwire that keeps Lake Sammamish in the frame, and hybrid systems built for the grade off Lakemont Boulevard.
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
                  city="Montreux, Issaquah"
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
                View Lots on the North Face of Cougar Mountain
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Montreux is a 260-acre planned community on the northern slope of Cougar Mountain, entered from the Lakemont Boulevard corridor off I-90. About 247 single-family homes sit among Swiss-named streets — Northwest Montreux Drive, Northwest Lac Leman Drive, Matterhorn Place NW, Mont Blanc Place NW — and roughly half the acreage is wooded common ground deeded to the homeowners. Most lots look toward Lake Sammamish and the Cascades. There is a single master association, the Montreux Homeowners Association, and an Architectural Control Officer who signs off on exterior changes, including fences and tree work. The design conversation starts with the lot: a north-facing drop, a view you do not want to wall off, firs that have had thirty years to own the side yards, and Native Growth Protection Easements that sit on more parcels than people expect.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built cedar, hogwire, and hybrid fences across Issaquah&apos;s hillside communities, including Montreux runs and the Talus, Highlands, and Mirrormont edges nearby. We use Fence Genius to capture grade and tree locations before a post goes in the ground, so panels on a lake-facing tilt stay even and side yards get a solid screen without a flat-lot wall across the view. The goal is a fence the MHA officer can approve on the first pass — and one that still lets you see the water from the deck.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Montreux Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Lake-View Corridor Design
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar on the neighbor sides, a more open downhill run toward Lake Sammamish. We mark where a six-foot panel helps and where it just hides the reason you bought on the north face.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <FileCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Montreux HOA Packets
                      </h3>
                      <p className="text-muted-foreground">
                        We prepare drawings, heights, and material lists for the MHA Architectural Control Officer so you are not guessing what passes on Northwest Montreux Drive or the Alpine courts.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Trees, Common Areas, and NGPE Edges
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps firs and easement lines before we dig. Hand-digging and shifted spacing protect trees that the association — and often the city — treat as part of the lot, not extras you can drop.
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
                        Full coverage on materials and labor, including hardware chosen for the damp that sits under Montreux&apos;s canopy. We stand behind the install through Issaquah winters.
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
                What Montreux Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit on Lac Leman and the lake is the whole point of the lot. They put cedar on the sides and hogwire on the downhill edge. The dog stays in and we still see the water from the kitchen.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Nadia in Montreux</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;The Architectural Control Officer wanted a specific stain and height. They sent a drawing and material list that matched the MHA guidelines. Packet went through without a second round.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Kenji in Montreux</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Mature firs along our Matterhorn side yard. They hand-dug every hole near the trunks and the fence still reads as a straight line. No torn roots, no argument about the common-area pin.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Allison in Montreux</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Montreux Issaquah fence" />

        {/* 6. Photo Gallery — nearby Issaquah installs until Montreux-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Issaquah"
          title="Recent Fence Work Near Montreux"
          description="These photos are from nearby Issaquah jobs, including Mirrormont and Issaquah Highlands. Same crew, same materials, and the same Fence Genius process we use on Montreux view lots along Northwest Montreux Drive and Northwest Lac Leman Drive."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Issaquah" neighborhood="Montreux" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Montreux Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Montreux cedar-and-hogwire run sits on a north-facing lot off Northwest Montreux Drive or Northwest Lac Leman Drive, close enough to the lake view that a solid downhill wall would erase the reason the house was sited there. The job is usually two fences in one: full-height cedar on the neighbor and street sides, then a lighter hogwire stretch toward the water so the deck still reads the Cascades. Fence Genius maps the drop so panels step instead of leaving a gap a small dog can use, and we hand-dig around the firs that line so many Matterhorn and Mont Blanc side yards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Montreux yards run 90–200 linear feet and wrap in one to three working days after MHA paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the view corridor, the common-area edge, and any Native Growth Protection Easement are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Montreux-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Montreux Terrain on a North-Facing Grade
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The climb from Lakemont Boulevard into Northwest Montreux Drive is not a flat-lot grid. A fence built as one long level line either buries the bottom rail or leaves a gap on the downhill face. We measure grade with Fence Genius, then step or rack panels so the top stays even from the street and the bottom tracks the lawn. On the steeper cuts toward the wildland park we shorten panel bays rather than forcing a six-foot bay across a drop.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Montreux View Preservation vs. Privacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A majority of the homes here were sited for Lake Sammamish and Cascade views. Walling the downhill edge in solid cedar is the most common regret we hear from neighbors who hired a flat-lot crew. Hogwire in a cedar frame, or cedar on the sides with an open run toward the water, is the usual mix. Interior lots on Northwest Village Park Drive that sit deeper in the trees often want full-height cedar. We walk the lot and mark both.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Montreux Canopy Moisture and Fastener Choice
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cool air and shade hang on the north face longer than they do on the Issaquah valley floor. Raw cedar grays fast on the downhill side, and light galvanized nails start showing rust streaks. We spec pre-stained Western Red Cedar and stainless or hot-dipped fasteners, and we talk through steel posts where the soil stays wet at the lower corners of the lot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Montreux HOA Review, Trees, and City Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Montreux Homeowners Association Architectural Control Officer reviews fence style, height, finish, and tree work before construction. We still follow Issaquah height rules — six feet in most side and rear yards, four feet in the front setback — and we plan post holes around the firs that line the Alpine courts and the common-area backs. If your parcel sits in a Native Growth Protection Easement or a steep-slope overlay, we flag that before digging rather than after. The neighborhood also has no conventional streetlights, so we stage compact equipment and keep driveway lamps and sight lines clear on the winding entrance.
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
                Fence Installation Cost in Montreux
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Montreux fence is an investment in a view lot and, on the downhill edge, a sightline you do not want to lose. Slope, gates, HOA finish requirements, and tree work move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Stepped runs on Northwest Montreux Drive and hand-digging near mature trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Montreux property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Montreux property</Link>
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
                Popular Fence Styles in Montreux
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on side yards along Matterhorn Place NW and the Alpine courts. Full screening from the neighbor, pre-stained cedar that holds up to foothill winters, and a look that fits MHA architectural review.
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
                    Cedar frame with black mesh for downhill lots that still want Lake Sammamish in the picture. Dogs stay in, the trees stay in view, and the lighter footprint is easier around roots than a solid privacy wall.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when north-face shade makes staining a chore. Strong enough for family yards without looking like a commercial lot on the mountain.
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
                Our Montreux Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Montreux Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note the north-facing drop toward Lake Sammamish, map trees, and check whether the parcel sits in an Issaquah steep-slope overlay or a Native Growth Protection Easement. Fence Genius captures grade so panels are built to the actual tilt, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Montreux Design & MHA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We prepare a drawing and material list for the Montreux Homeowners Association Architectural Control Officer. We still document Issaquah height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Montreux install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Montreux Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to the winding entrance and residential streets off Northwest Montreux Drive, Northwest Lac Leman Drive, and Northwest Village Park Drive. Hand-digging near mature roots, stepped posts on the lake-facing drop, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Montreux Fence Installation FAQs"
          items={MONTREUX_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Issaquah"
        neighborhoodName="Montreux"
        attractions={MONTREUX_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Montreux sits in the{" "}
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
                href="https://cougarridge.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cougar Ridge Elementary
              </a>{" "}
              on 167th Avenue SE, then later{" "}
              <a
                href="https://issaquahmiddle.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah Middle School
              </a>{" "}
              and{" "}
              <a
                href="https://issaquahhigh.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah High School
              </a>
              . Attendance boundaries do not always match the neighborhood line — confirm your address with the district. The{" "}
              <a
                href="https://montreux-hoa.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Montreux Homeowners Association
              </a>{" "}
              handles common areas and architectural review.
            </p>
            <p>
              Groceries and after-practice food sit down the hill toward Lakemont and Olde Town rather than inside the community. Dinner reservations often land at{" "}
              <a
                href="https://www.finsbistroissaquah.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fins Bistro
              </a>{" "}
              on Front Street before a show, or a weekend walk mapped by the{" "}
              <a
                href="https://mtsgreenway.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Mountains to Sound Greenway Trust
              </a>
              .{" "}
              <a
                href="https://www.issaquahwa.gov/parks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah Parks & Community Services
              </a>{" "}
              lists city parks and permits; I-90 exit 13 and Lakemont Boulevard connect you to downtown Issaquah, Bellevue, and the rest of the Eastside.
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
                We install fences throughout Issaquah. From Montreux we also work in Talus on the west face of Cougar Mountain, Issaquah Highlands across I-90, Mirrormont on Squak Mountain, and Newcastle on the wooded ridge toward Bellevue.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah">Issaquah overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah/talus">Talus</Link>
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
                Ready to Enhance Your Montreux Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Montreux. We&apos;ll walk the north-facing grade, talk through MHA review and view vs. privacy, and quote a fence that fits your Cougar Mountain lot.
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

export default MontreuxPage;
