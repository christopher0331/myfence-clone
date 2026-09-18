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
  Volume2,
  TrainFront,
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

const CANONICAL = "https://myfence.com/service-areas/bellevue/wilburton";
const META_TITLE =
  "Wilburton Bellevue Fence Installation | I-405 Lots & Garden Streets | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Wilburton, Bellevue, WA. Cedar, hogwire & hybrid fencing for I-405 noise screening, Main Street yards, and mature-tree lots. Free quotes. (253) 455-1885.";

const WILBURTON_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Wilburton, Bellevue?",
    answer:
      "The City of Bellevue typically requires a building permit for fences taller than six feet, and for any fence that sits in a mapped critical area, wetland buffer, or stream corridor. Lots that drain toward Kelsey Creek or sit near Mercer Slough can trigger extra review even when the fence itself is six feet. Front-yard fencing is usually limited to four feet, and corner lots on 116th Avenue NE, Main Street, and NE 8th Street must keep sight triangles clear. MyFence.com checks overlays for your Wilburton address before we quote and handles the paperwork when a permit is required.",
  },
  {
    question:
      "What fence styles work best for Wilburton's I-405 lots and garden-district yards?",
    answer:
      "Western Wilburton lots along 116th Avenue NE usually choose six-foot cedar privacy to cut freeway noise without looking like a commercial screen. On the quieter streets around Wilburton Hill Park and the Botanical Garden, hogwire in a cedar frame keeps a more open, planted feel while still containing dogs. Hybrid aluminum-and-cedar systems suit homeowners who want the cedar look without restaining in the extra damp that collects under 50-year maples and firs. Fence Genius maps grade so panels step toward Kelsey Creek instead of leaving crawl gaps on a tilt.",
  },
  {
    question: "How much does fence installation cost in Wilburton, Bellevue?",
    answer:
      "Wilburton fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Hand-digging around mature roots on Main Street and 124th Avenue NE, stepped runs toward the creek, and custom gates can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Wilburton?",
    answer:
      "Most Wilburton residential projects finish in one to three working days after any city or small-HOA paperwork is complete. Prefabricated panels keep on-site time short. Extra half-days usually come from hand-digging near older trees, tight side yards on mid-century lots west of 124th, or working around light-rail and 116th Avenue traffic. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Wilburton?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Bellevue does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Wilburton has a mix of 1950s–1970s pin locations and newer townhome plats near Wilburton Station, so confirming the line before digging saves a redo. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const WILBURTON_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Wilburton Hill Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/wilburton-hill-park",
    description:
      "Bellevue's largest upland park sits at 12400 Main Street, with ballfields, a playground zip line, and the Lake-to-Lake trail spine that Wilburton households use to walk east toward Kelsey Creek without getting on NE 8th.",
  },
  {
    name: "Bellevue Botanical Garden",
    url: "https://bellevuebotanical.org/",
    description:
      "Fifty-three acres of display gardens and woodland paths at 12001 Main Street, a short walk from Wilburton Elementary. Weekend parking fills early, so many neighbors on 120th and 124th simply walk in through the park side.",
  },
  {
    name: "Kelsey Creek Park Trails",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/nature-trails/kelsey-creek-park-nature-trails",
    description:
      "Pasture loops and a creek-side trail at 410 130th Place SE, just east of the neighborhood. Wilburton families treat the farm barns and wetland boardwalk as the after-school walk when the Botanical Garden is packed.",
  },
  {
    name: "Wilburton Station",
    url: "https://www.soundtransit.org/ride-with-us/stops-stations/wilburton-station",
    description:
      "East Link's stop at 800 118th Avenue NE, between NE 8th and the hospital campus. Commuters on 116th plan fence gates and driveway turns around station-area traffic that did not exist on these streets a few years ago.",
  },
  {
    name: "Mercer Slough Nature Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/mercer-slough-nature-park",
    description:
      "A 320-acre wetland south of I-90, reached from Wilburton via the Lake Hills Connector and Bellevue Way. Boardwalks and blueberry fields are the weekend reset when you want water without driving to the lake.",
  },
];

const WilburtonPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Wilburton, Bellevue",
    pageTitle: "Wilburton Bellevue Fence Installation",
    description: META_DESCRIPTION,
    faqItems: WILBURTON_FAQS,
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
              href="/service-areas/bellevue"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bellevue
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Wilburton, Bellevue WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Wilburton Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy that cuts I-405 noise, hogwire that keeps garden-street lots open, and hybrid systems built around the mature trees on Main Street, 116th Avenue NE, and the streets that feed Wilburton Station.
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
                  city="Wilburton, Bellevue"
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
                Fencing Between the Freeway and the Garden
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Wilburton sits in the seam between downtown Bellevue and the Lake Hills plateau — I-405 on the west, NE 8th Street and the Spring District to the north, 140th-ish streets toward Crossroads on the east, and I-90 plus the Lake Hills Connector on the south. 116th Avenue NE is the noisy spine; two blocks east, Main Street and 124th Avenue NE feel like a different neighborhood, with 1950s–1970s houses under maples that have had fifty years to own the side yards. There is no single master HOA the way Somerset or Klahanie have one. Some newer townhome plats near Wilburton Station have design review; most older streets do not. The design conversation starts with the lot: freeway noise, root plates, a gentle drop toward Kelsey Creek, and how close you sit to station traffic.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built cedar, hogwire, and hybrid fences across central Bellevue, including Wilburton runs along 116th, Main Street, and the streets that feed the Botanical Garden. We use Fence Genius to capture grade and tree locations before a post goes in the ground, so panels on a creek-facing tilt stay even and I-405 lots get a solid screen without looking like a sound wall dropped on a mid-century ranch. The goal is a fence that belongs on your street — not a flat-lot panel forced through a root zone.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Wilburton Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        I-405 Noise Screening
                      </h3>
                      <p className="text-muted-foreground">
                        Full-height cedar on the freeway side of 116th Avenue NE lots, with tighter picket gaps and no crawl space at the bottom. Built to cut traffic sound without turning your yard into a commercial corridor.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Root-Conscious Post Layout
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps the maples and firs on Main Street and 124th before we dig. Hand-digging and adjusted spacing protect trees that have been on these lots longer than most of the houses.
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
                        Full coverage on materials and labor, including hardware chosen for the damp that sits under Wilburton&apos;s mature canopy. We stand behind the install through Bellevue winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TrainFront className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Station-Area Design Review
                      </h3>
                      <p className="text-muted-foreground">
                        Newer plats near Wilburton Station sometimes want a drawing and material list. Older streets usually do not. We still document Bellevue height and setback rules so the install is clean with the city either way.
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
                What Wilburton Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit one block off 116th and the freeway is constant. They put up a six-foot cedar screen on that side and left the garden edge more open. The yard is actually usable in the evening now.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Wilburton</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Huge maples along the side yard on our Main Street lot. They hand-dug every hole near the trunks and the fence still reads as a straight line. No torn roots, no argument with the neighbor about the pin.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Dan in Wilburton</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Small design packet for our townhome board near the station — nothing like a Somerset HOA packet. They still sent a drawing and color list that passed on the first try. Crew was careful with the shared driveway.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Elena in Wilburton</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Wilburton Bellevue fence" />

        {/* 6. Photo Gallery — nearby Bellevue installs until Wilburton-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Bellevue"
          title="Recent Fence Work Near Wilburton"
          description="These photos are from nearby Bellevue jobs, including Sherwood Forest and other central Bellevue installs. Same crew, same materials, and the same Fence Genius process we use on Wilburton lots along 116th Avenue NE and Main Street."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Bellevue" neighborhood="Wilburton" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Wilburton Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Wilburton cedar privacy run sits on a mid-century lot west of 124th Avenue NE, close enough to 116th that I-405 is part of the evening soundtrack. The job is usually two fences in one: a full-height cedar screen on the freeway and neighbor sides, then a lighter hogwire stretch toward the garden so the yard still feels planted. Fence Genius maps the drop toward Kelsey Creek so panels step instead of leaving a gap a small dog can use, and we hand-dig around the maples that line so many Main Street side yards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Wilburton yards run 80–180 linear feet and wrap in one to three working days after any city paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the station-area traffic pattern and the tree drip lines are both accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Wilburton-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Wilburton Freeway Noise and Solid Screens
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I-405 is not a distant rumble on the west edge of Wilburton — it is the west edge. Lots along 116th Avenue NE and the streets that dead-end toward the freeway want mass, height, and a tight bottom. We spec six-foot cedar privacy on that face, keep picket gaps small, and avoid leaving a stepped opening at grade. On the east and garden sides of the same lot we often switch to hogwire so you are not boxed in on every compass point.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Wilburton Trees, Roots, and Older Pins
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Main Street, 120th, and 124th Avenue NE are lined with maples and firs that predate a lot of the current houses. Standard auger work will hit roots. We plan post locations with Fence Genius, then hand-dig at the critical points and shift spacing a few inches rather than cutting a structural root. Older pins on 1950s–1970s lots are not always where a phone map says they are; confirming the line before the first hole is cheaper than moving a finished panel.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Wilburton Moisture Along the Creek Corridor
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The east and south edges of the neighborhood drain toward Kelsey Creek and, farther down, Mercer Slough. Cool air and wet soil hang in the lower corners overnight. Pre-stained Western Red Cedar, stainless or hot-dipped fasteners, and optional steel posts at the wettest corners last longer than raw cedar and light galvanized nails. If your parcel sits in a mapped stream or wetland buffer, we flag that in the quote instead of after the crew is on site.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Wilburton Station Traffic and Small HOAs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Light rail changed how 118th Avenue NE and NE 8th Street move at rush hour. We stage compact equipment so we are not blocking a shared townhome drive or a school pickup stack near Wilburton Elementary on Main Street. Most older streets have no architectural committee. Newer plats near the station might. We still follow Bellevue&apos;s six-foot side/rear and four-foot front-yard height rules, and we prepare a simple drawing when a board asks for one.
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
                Fence Installation Cost in Wilburton
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Wilburton fence is an investment in a garden-district lot and, on the west side, a quieter evening. Slope, roots, gates, and noise-screening details move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Hand-digging near mature trees and stepped runs toward Kelsey Creek may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Wilburton property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Wilburton property</Link>
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
                Popular Fence Styles in Wilburton
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on 116th Avenue NE lots that need I-405 screening. Full height, tight bottoms, pre-stained cedar that holds up under Wilburton&apos;s canopy, and a look that fits both mid-century ranches and newer two-story builds near the station.
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
                    Cedar frame with black mesh for garden-street lots that still want to see the plantings. Dogs stay in, the lighter footprint is easier around maple roots than a solid wall, and it reads as a planted edge instead of a barrier.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when shade and creek-side damp make staining a chore. Strong enough for family yards without looking like a commercial lot on Main Street.
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
                Our Wilburton Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Wilburton Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note I-405 exposure, map trees, and check whether the parcel sits in a Bellevue stream or critical-area overlay toward Kelsey Creek. Fence Genius captures grade so panels are built to the actual tilt, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Wilburton Design & City / HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your townhome plat near Wilburton Station has a small design committee, we prepare a simple drawing and material list. If your street has no association — which is most of older Wilburton — we still document Bellevue height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Wilburton install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Wilburton Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 116th, Main Street, 120th, and 124th. Hand-digging near mature roots, stepped posts on the creek-facing drop, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Wilburton Fence Installation FAQs"
          items={WILBURTON_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Bellevue"
        neighborhoodName="Wilburton"
        attractions={WILBURTON_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Wilburton sits in the{" "}
              <a
                href="https://www.bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue School District
              </a>
              , with{" "}
              <a
                href="https://www.bsd405.org/about-us/schools"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Wilburton Elementary
              </a>{" "}
              on Main Street as the neighborhood campus that opened in 2018. Weekday life is built around that school, the short hop west across I-405 to the{" "}
              <a
                href="https://kcls.org/locations/bellevue/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue Library
              </a>
              {" "}
              on 110th, and{" "}
              <a
                href="https://www.soundtransit.org/ride-with-us/stops-stations/wilburton-station"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Wilburton Station
              </a>{" "}
              for East Link trips into Seattle or out toward Redmond.
            </p>
            <p>
              Groceries and after-work food split between NE 8th, downtown just west of the freeway, and the Spring District to the north. Dinner reservations often land at{" "}
              <a
                href="https://johnhowiesteak.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                John Howie Steak
              </a>{" "}
              in Lincoln Square or{" "}
              <a
                href="https://seastarrestaurant.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Seastar
              </a>{" "}
              at the Bellevue Collection — both a few minutes across I-405, not a drive to Seattle. Weekends split between the Botanical Garden, the{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/eastrail"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Eastrail
              </a>{" "}
              corridor and Wilburton Trestle project, and the rest of the{" "}
              <a
                href="https://bellevuewa.gov/city-government/departments/parks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue parks system
              </a>
              . NE 8th, 116th, and I-405 put downtown, Crossroads, and I-90 within a few minutes.
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
                Also Serving Nearby Bellevue Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Bellevue. From Wilburton we also work in Downtown Bellevue just west of I-405, Somerset and Newport Hills to the south, Sherwood Forest and Crossroads to the east, and Newcastle on the wooded ridge beyond I-90.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/somerset">Somerset</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newport-hills">Newport Hills</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/sherwood-forest">Sherwood Forest</Link>
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
                Ready to Enhance Your Wilburton Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Wilburton. We&apos;ll walk the freeway edge, talk through trees vs. privacy, and quote a fence that fits your Bellevue lot.
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

export default WilburtonPage;
