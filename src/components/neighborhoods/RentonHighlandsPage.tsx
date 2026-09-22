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
  Eye,
  Droplets,
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

const CANONICAL = "https://myfence.com/service-areas/renton/renton-highlands";
const META_TITLE =
  "Renton Highlands Fence Installation | Hillside Views & Privacy | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Renton Highlands, Renton, WA. Cedar, hogwire & hybrid fencing for hillside lots, view corridors, and Sunset Boulevard yards. Free quotes. (253) 455-1885.";

const HIGHLANDS_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Renton Highlands?",
    answer:
      "Most Renton Highlands lots sit inside City of Renton limits, so fence rules follow the city's residential code rather than King County. Side- and rear-yard fences six feet or under usually do not need a building permit, while front-yard fencing is typically limited to four feet. Corner lots on NE 4th Street, Union Avenue NE, and Edmonds Avenue NE must keep sight triangles clear. Some newer plats have a small design review packet even when the city does not require a permit. MyFence.com checks your address against city overlays and any association rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Renton Highlands hillside lots and view corridors?",
    answer:
      "Six-foot cedar privacy is the usual choice on the downhill and neighbor sides of a Highlands lot, where the grade drops toward the valley and you want a solid screen. Along a view corridor facing Lake Washington, the Olympics, or downtown Seattle, hogwire in a cedar frame keeps the skyline open while still holding dogs. Hybrid aluminum-and-cedar systems suit homeowners who want the cedar look without restaining on a north-facing slope that stays damp after rain. Fence Genius maps the drop so panels step with the hill instead of leaving a crawl gap at the low end.",
  },
  {
    question: "How much does fence installation cost in Renton Highlands?",
    answer:
      "Renton Highlands fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Stepped runs on NE 12th and NE 16th, hand-digging around older firs, and custom gates on tight side yards can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Renton Highlands?",
    answer:
      "Most Renton Highlands residential projects finish in one to three working days after any city or small-HOA paperwork is complete. Prefabricated panels keep on-site time short. Extra half-days usually come from stepped posts on a steep rear line, compact access off Edmonds or Union, or working around school pickup near Highlands Elementary and McKnight. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Renton Highlands?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Renton does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Highlands lots mix 1950s–1970s pins with newer infill plats, so confirming the line before digging saves a redo on a hillside. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const HIGHLANDS_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Highlands Park & Neighborhood Center",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "The neighborhood's everyday park at 800 Edmonds Avenue NE — playground, fields, and the community building that hosts after-school programs. Families on Edmonds and Union treat it as the walkable midpoint between Honey Dew Elementary and McKnight.",
  },
  {
    name: "North Highlands Park",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "A hilltop open space at 3000 NE 16th Street, paired with Meadow Crest Playground. NE 16th lots use it as the short evening walk when the kids need a swing set without driving down to the lake.",
  },
  {
    name: "Kiwanis Park",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "A compact neighborhood park at 815 Union Avenue NE, a block from Honey Dew Elementary. Weekend birthday parties and after-practice pickups fill the play area; fence gates on Union often get planned around that foot traffic.",
  },
  {
    name: "Honey Dew Creek Trail",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "A wooded path that starts across from 2601 NE 27th Street and follows the creek corridor through the north edge of the Highlands. Lots that back to the greenbelt want a fence that holds pets without boxing out the trees.",
  },
  {
    name: "Hazen High School",
    url: "https://hazen.rentonschools.us/",
    description:
      "The neighborhood high school at 1101 Hoquiam Avenue NE, reached by climbing Sunset Boulevard from I-405 Exit 5. Friday night traffic on Hoquiam is part of how we stage equipment so we are not blocking a game-day stack.",
  },
];

const RentonHighlandsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Renton Highlands, Renton",
    pageTitle: "Renton Highlands Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: HIGHLANDS_FAQS,
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
              href="/service-areas/renton"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Renton
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Renton Highlands, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Renton Highlands Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Hillside cedar that holds a slope, hogwire that keeps a lake view, and hybrid systems built for the grade changes on NE 12th, Edmonds Avenue NE, and the streets that climb Sunset Boulevard.
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
                  city="Renton Highlands, Renton"
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
                Fencing on the Hill Above Downtown Renton
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Renton Highlands sits on the rise east of I-405, above The Landing and the Cedar River valley. Sunset Boulevard is the climb from Exit 5; once you are up, NE 4th, NE 7th, NE 12th, and NE 16th run across the plateau while Edmonds, Union, and Hoquiam drop north–south toward the schools. Mid-century ramblers share blocks with two-story infill. Some newer courts have a small architectural review. Most older streets do not. The design conversation starts with the lot: how steep the rear line falls, whether you want to keep a west-facing view, and how wet the low corner stays after a December rain.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Renton, including hillside runs in the Highlands and neighboring Kennydale. We use Fence Genius to capture grade and tree locations before a post goes in the ground, so panels on a drop toward the valley stay even and view-side stretches stay open without leaving a gap a dog can use. The goal is a fence that belongs on your street — not a flat-lot panel forced down a slope.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Renton Highlands Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Hillside Panel Stepping
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps the drop on NE 12th and NE 16th lots so cedar panels step with the grade. No triangular gap at the low end, no racked-looking top rail on a street that already has a view.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        View-Corridor Planning
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar where you need privacy from the neighbor or the downhill street; hogwire on the west face when the Olympics or Lake Washington are the reason you bought the lot.
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
                        Full coverage on materials and labor, including hardware chosen for the extra damp that sits on shaded north slopes. We stand behind the install through Renton winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Drainage-Aware Footings
                      </h3>
                      <p className="text-muted-foreground">
                        Water runs downhill here. We set posts and grade the dirt line so a winter storm does not pond against the bottom rail or wash out a hole on the low corner of the yard.
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
                What Renton Highlands Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our back line drops hard toward the valley. They stepped the cedar so it follows the hill and still looks like one fence from the deck. The west stretch stayed hogwire so we did not lose the lake view.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Maya in Renton Highlands</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Tight side yard off Edmonds near McKnight. They used compact equipment, finished in two days, and left the street clean before pickup. Posts are solid on a slope that used to hold water.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Chris in Renton Highlands</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Small design packet for our newer court — nothing like a big master HOA. They sent a drawing and height notes that the board signed on the first pass. Communication was clear the whole way.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Renton Highlands</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Renton Highlands Renton fence" />

        {/* 6. Photo Gallery — nearby Renton installs until Highlands-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Renton"
          title="Recent Fence Work Near Renton Highlands"
          description="These photos are from nearby Renton jobs, including Kennydale, Maple Ridge Estates, and other hillside installs. Same crew, same materials, and the same Fence Genius process we use on Renton Highlands lots along NE 12th, Edmonds Avenue NE, and Sunset Boulevard."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Renton" neighborhood="Renton Highlands" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Renton Highlands Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Renton Highlands cedar privacy run sits on a mid-century lot west of Hoquiam, close enough to Sunset Boulevard that evening traffic is part of the soundtrack. The job is usually two fences in one: a full-height cedar screen on the neighbor and downhill sides, then a hogwire stretch on the west face so the lake or Olympic view stays in the living room. Fence Genius maps the drop so panels step instead of leaving a gap at the low rail, and we set footings so winter runoff does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Highlands yards run 90–180 linear feet and wrap in one to three working days after any city paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the view corridor and the wet corner are both accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Renton Highlands-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Renton Highlands Terrain and Stepped Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The neighborhood is named for a reason. Rear lines on NE 12th, NE 16th, and the streets that fall toward Honey Dew Creek can drop several feet across a single lot. A flat-panel fence leaves a wedge a small dog will find. We spec stepped cedar on the steep face, keep the top line as even as the grade allows, and use deeper footings on the downhill posts so the first winter storm does not lean the line.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    View Preservation on West-Facing Lots
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Highlands decks look west toward Lake Washington, the Seattle skyline, or the Olympics. A six-foot solid wall on that face solves privacy and kills the reason people pay for the hill. We often mix styles on one property: cedar on the sides, hogwire or a lower rail on the view edge. Fence Genius lets us show that mix on a plan before anyone digs.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Renton Highlands Moisture on North Slopes
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    North-facing yards and the creek-side lots near Honey Dew stay wet longer than the valley floor. Pre-stained Western Red Cedar, stainless or hot-dipped fasteners, and optional steel posts at the wettest corners last longer than raw cedar and light galvanized nails. We also keep dirt from piling against the bottom rail so the first board does not sit in a puddle all winter.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    School Streets and Small Design Review
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Highlands Elementary on NE 7th, Honey Dew on Union, McKnight on Edmonds, and Hazen on Hoquiam set the weekday traffic pattern. We stage compact equipment so we are not blocking a pickup stack. Most older streets have no architectural committee. A few newer courts do. We still follow Renton&apos;s six-foot side/rear and four-foot front-yard height rules, and we prepare a simple drawing when a board asks for one.
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
                Fence Installation Cost in Renton Highlands
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Highlands fence is an investment in a hillside lot and, on the west side, a view you do not want to wall off. Slope, gates, and mixed-style runs move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Stepped hillside runs and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Renton Highlands property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Renton Highlands property</Link>
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
                Popular Fence Styles in Renton Highlands
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on downhill and neighbor sides where the hill needs a solid screen. Full height, stepped bottoms, pre-stained cedar that holds up on a north slope, and a look that fits both ramblers and newer two-story builds.
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
                    Cedar frame with black mesh for west-facing lots that still want the lake or Olympic view. Dogs stay in, the lighter footprint is easier around fir roots than a solid wall, and the skyline stays in the room.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a shaded slope makes staining a chore. Strong enough for family yards without looking commercial on Edmonds or Union.
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
                Our Renton Highlands Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Renton Highlands Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note the downhill drop, map trees, and check whether a west-facing stretch should stay open. Fence Genius captures grade so panels are built to the actual tilt, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Renton Highlands Design & City / HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your newer court has a small design committee, we prepare a simple drawing and material list. If your street has no association — which is most of older Highlands — we still document Renton height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Highlands install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Renton Highlands Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off Edmonds, Union, NE 7th, and Hoquiam. Stepped posts on the downhill face, drainage-aware footings on the wet corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Renton Highlands Fence Installation FAQs"
          items={HIGHLANDS_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Renton"
        neighborhoodName="Renton Highlands"
        attractions={HIGHLANDS_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Renton Highlands families are served by the{" "}
              <a
                href="https://www.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton School District
              </a>
              , with{" "}
              <a
                href="https://highlands.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Highlands Elementary
              </a>{" "}
              on NE 7th Street and{" "}
              <a
                href="https://honeydew.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Honey Dew Elementary
              </a>{" "}
              on Union Avenue NE as the two neighborhood campuses. Middle schoolers walk or get dropped at{" "}
              <a
                href="https://mcknight.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                McKnight Middle School
              </a>{" "}
              on Edmonds, then most continue to Hazen. Weekday life is built around those four campuses and the short hop downhill to{" "}
              <a
                href="https://www.shopthelandinginrenton.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The Landing
              </a>{" "}
              for groceries and a movie.
            </p>
            <p>
              After-school hours split between Highlands Park, Kiwanis Park, and the Honey Dew Creek path. Dinner often lands downtown at the restaurants collected by{" "}
              <a
                href="https://rentondowntown.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Downtown Renton
              </a>
              {" "}
              or at the lake after a stop in the{" "}
              <a
                href="https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton parks system
              </a>
              . The{" "}
              <a
                href="https://kcls.org/locations/renton/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton Library
              </a>{" "}
              downtown handles homework nights. I-405 at Sunset Boulevard and NE 4th put Bellevue, Seattle, and Sea-Tac within a short drive — which is why so many Highlands lots want a fence that works as hard as the commute.
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
                Also Serving Nearby Renton Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Renton. From the Highlands we also work in Kennydale toward the lake, Downtown Renton and Sunset at the bottom of the hill, Maple Ridge Estates on the East Plateau, and Newcastle on the wooded ridge to the north.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/kennydale">Kennydale</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-ridge-estates">Maple Ridge Estates</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-valley-heights">Maple Valley Heights</Link>
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
                Ready to Enhance Your Renton Highlands Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Renton Highlands. We&apos;ll walk the slope, talk through privacy vs. the view, and quote a fence that fits your hillside lot.
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

export default RentonHighlandsPage;
