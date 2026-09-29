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
  Volume2,
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

const CANONICAL = "https://myfence.com/service-areas/renton/benson-hill";
const META_TITLE =
  "Benson Hill Renton Fence Installation | Hillside Lots & 116th Corridor | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Benson Hill, Renton, WA. Cedar, hogwire & hybrid fencing for hillside lots on 116th Avenue SE, Petrovitsky Road, and the Benson community planning area. Free quotes. (253) 455-1885.";

const BENSON_HILL_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Benson Hill, Renton?",
    answer:
      "Benson Hill is Renton's Benson community planning area, south and southeast of downtown. Most lots here were annexed into the City of Renton in 2008, so city fence rules apply. A few parcels toward the south edge near SE 200th Street and the east edge near 128th Avenue SE can still sit in unincorporated King County. Height limits, front-yard setbacks, and corner sight lines depend on which jurisdiction the parcel is in. Some subdivisions also have an architectural review committee, and those standards are not the same from one plat to the next. Check with the City of Renton — or King County if the lot was not annexed — and with your HOA's architectural review committee before you build. MyFence.com reviews the parcel with you before we quote.",
  },
  {
    question:
      "What fence styles work best for Benson Hill's hillside lots and 116th Avenue traffic?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards and on street faces that take 116th Avenue SE or Petrovitsky Road traffic. Wooded backyards and lots that still look down toward the valley often do better with hogwire in a cedar frame so dogs stay in and the trees stay visible. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain after every wet south King County winter, especially on a downslope corner that stays damp. Fence Genius maps the grade change so panels follow the hill instead of stepping in a way that leaves a gap a pet can slip through.",
  },
  {
    question: "How much does fence installation cost in Benson Hill, Renton?",
    answer:
      "Benson Hill fence installation typically runs $43–$66 per linear foot for six-foot cedar privacy, $38–$57 for hogwire with a cedar frame, and $53–$75 for hybrid aluminum/cedar. Hillside grade, tear-out of an older county-era fence, extra gates, and hand-digging near mature trees can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Benson Hill, Renton?",
    answer:
      "Most Benson Hill residential projects finish in one to three working days after any city, county, or HOA paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from a long hillside perimeter, removing a leaning older fence, or compact access during school pickup on 116th Avenue SE. We lock the schedule with you before the crew arrives.",
  },
  {
    question:
      "Do I need my neighbor's permission for a fence in Benson Hill, Renton?",
    answer:
      "A fence on the property line is often a shared decision in practice, even when the city does not ask for a signature. Benson Hill was built out mostly while it was still in King County, so older pins and later infill do not always line up. Talk with the neighbor before posts go in, confirm the line, and check height and maintenance rules with the City of Renton and your HOA's architectural review committee. MyFence.com can share a simple site plan so that conversation stays on style, height, and who pays for which stretch.",
  },
];

const BENSON_HILL_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Family First Community Center",
    url: "https://familyfirstrenton.org/",
    description:
      "The community center at 16200 116th Ave SE, between the Cascade and Benson Hill neighborhoods, which opened to the public in 2023. Gym time and evening programs fill the curb lane; we stage material drops so a trailer is not sitting in that queue.",
  },
  {
    name: "Benson Hill Elementary School",
    url: "https://bensonhill.rentonschools.us/",
    description:
      "The Renton School District campus at 18665 116th Ave SE. Morning drop-off and afternoon pickup stack along 116th; fence jobs on that block get timed so the school line stays clear.",
  },
  {
    name: "Cascade Park",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "A wooded city park at 16165 126th Avenue SE, east of the 116th spine. Walking paths and a playground sit under the trees. Lots that back this way usually want a fence that holds pets without erasing the canopy.",
  },
  {
    name: "Cascade Elementary School",
    url: "https://cascade.rentonschools.us/",
    description:
      "The campus at 16022 116th Avenue SE, next to Family First. Weekday traffic on 116th and the courts off SE 160th is part of how we plan crew arrivals on the north end of Benson Hill.",
  },
  {
    name: "Lindbergh High School",
    url: "https://lindbergh.rentonschools.us/",
    description:
      "The Renton School District high school campus at 16426 128th Avenue SE, on the east side of this part of south Renton. Game-day and event traffic on 128th is why we keep trailers off that approach when a job is nearby.",
  },
];

const BensonHillPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Benson Hill, Renton",
    pageTitle: "Benson Hill Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: BENSON_HILL_FAQS,
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
                    Serving Benson Hill, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Benson Hill Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy for 116th Avenue and Petrovitsky street faces, hogwire that keeps wooded backyards open, and hybrid systems built for hillside grade and wet south King County winters.
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
                  city="Benson Hill, Renton"
                  state="Washington"
                  radiusMiles={5}
                  zoom={13}
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
                Fencing the Hill South of the Cedar River
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Benson Hill is Renton&apos;s Benson community planning area: a broad stretch of south and southeast Renton that climbs out of the Cedar River valley. 116th Avenue SE is the north-south spine. Petrovitsky Road crosses the commercial edge, and Cascade Village sits on 116th just north of that intersection. The area was annexed into the City of Renton effective March 1, 2008 — much of what had been unincorporated Benson Hill north of SE 200th Street and west of 128th Avenue SE. Lots here mix mid-century houses from the county years with later infill, and the ground is rarely as flat as a valley-floor yard.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across Renton, including hillside and plateau work in Benson Hill and the neighboring Cascade and Fairwood areas. Fence Genius records the grade change, the true length of a side yard, and where an older pin line actually sits before a post goes in the ground. The goal is a fence that follows the hill and the street it faces — not a flat-lot kit that gaps at the low corner or walls off a wooded backyard you bought the house for.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Benson Hill Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Hillside Grade, Measured First
                      </h3>
                      <p className="text-muted-foreground">
                        Benson Hill lots step and slope as they leave the valley. Fence Genius captures the rise so panels follow the ground and gates still swing on the uphill side.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        116th and Petrovitsky Traffic
                      </h3>
                      <p className="text-muted-foreground">
                        The 116th corridor and Petrovitsky Road carry the neighborhood&apos;s through traffic. A solid cedar street face is a common request. We keep the wooded or downhill side lighter when you still want the trees in view.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Wet Winters and Downslope Drainage
                      </h3>
                      <p className="text-muted-foreground">
                        Rain runs off this hill toward the valley. We keep soil off the first board, choose hardware that holds up in a damp low corner, and talk through hybrid panels where a previous fence sat in water all winter.
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
                        Full coverage on materials and labor, including hardware chosen for hillside drainage and wet south King County winters. We stand behind the install.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Benson Hill Renton fence" />

        {/* Photo Gallery — nearby Renton installs until Benson Hill-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Renton"
          title="Recent Fence Work Near Benson Hill"
          description="These photos are from nearby Renton jobs, including Cascade, Fairwood, Kennydale, and Renton Highlands. Same crew, same materials, and the same Fence Genius process we use on Benson Hill lots along 116th Avenue SE, Petrovitsky Road, and the hillside streets south of the Cedar River."
        />

        {/* Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Renton" neighborhood="Benson Hill" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Benson Hill Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Benson Hill cedar-and-hogwire run sits on a hillside lot off 116th Avenue SE or the streets that climb toward Petrovitsky Road. The street face is often full-height cedar because the corridor is busy. The backyard stretch is lighter — hogwire in a cedar frame — when the lot backs into trees or looks down the hill and a solid wall would erase that. Fence Genius maps the grade so the bottom of the fence follows the slope instead of leaving a gap at the low corner, and we set the line so winter runoff does not pond against the first board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Comparable residential yards here are a backyard plus two side yards, and most wrap in one to three working days after any city, county, or HOA paperwork. We use cedar privacy, hogwire, or hybrid aluminum/cedar. We walk the line with you before posts go in so the street face, the wet low corner, and the wooded side are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Benson Hill Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Hillside Lots Above the Valley
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Benson Hill rises south of downtown Renton and the Cedar River. A panel layout drawn for a flat Fairwood backyard will gap or rack on these grades. We measure the rise along each run, then build panels that follow the ground and still leave a gate that opens on the uphill walk to the house.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Traffic on the 116th Spine
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    116th Avenue SE runs nearly the length of the planning area, and Petrovitsky Road carries east-west traffic past Cascade Village. Lots that face those roads usually want a solid cedar street face. Walling every side to the same height is the regret we hear when the backyard was the wooded part of the lot. Mixed styles — solid on the noisy face, open toward the trees — are the usual fix.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    County-Era Yards, Drainage, and Trees
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Much of Benson Hill was developed while it was still King County, so sidewalks, drainage, and lot lines vary. Mature trees sit close to older fences, and winter rain runs downhill into the same low corner. We hand-dig near roots when a machine would tear them up, keep the bottom board out of standing water, and replace a rotting low section with hybrid panels when stain has already lost that fight.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    City Rules and HOA Review That Vary
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Benson Hill Community Plan, adopted in 2013, guides the area, but it is not a fence permit. City of Renton rules cover most annexed lots. Parcels near the south and east edges may still be unincorporated King County. Some plats have an architectural review committee; many older streets do not. We do not guess which book applies. You confirm it with the City of Renton and your HOA&apos;s architectural review committee, and we build to the answer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in Benson Hill
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Benson Hill fence is often a mixed-style run: a quieter face on 116th or Petrovitsky, plus an open stretch toward the trees. Slope, access, and an older fence that has to come out move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $43–$66 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $38–$57 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $53–$75 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Tear-out of an existing fence, extra gates, and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Benson Hill property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Benson Hill property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Popular Fence Styles in Benson Hill
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides and on 116th or Petrovitsky street faces. Full height where traffic is close, pre-stained cedar that fits both older ramblers and later infill.
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
                    Cedar frame with black mesh for wooded backs and lots that still want the hillside in the room. Dogs stay in, and the lighter footprint takes less wind than a solid wall on an exposed grade.
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
                    Aluminum panels in a cedar frame on steel posts — the lower-maintenance option when a damp low corner has already worn out one fence. Strong enough for family yards without looking commercial on a residential street.
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

        {/* Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Benson Hill Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Benson Hill Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the grade, note which face takes 116th or Petrovitsky traffic, map utilities, and check whether the wooded side should stay more open. Fence Genius captures length and slope so panels are built to the hill, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Design, City, and HOA Review
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We flag whether the parcel is inside the City of Renton or still in King County, and whether the plat has an architectural review committee. Corner sight lines on 116th Avenue SE, Petrovitsky Road, and SE 168th Street get marked before we draw the line. Rules vary — confirm them with the city and your HOA.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so install days are mostly setting posts and hanging finished sections that already match the slope.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Benson Hill Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews work residential streets off 116th Avenue SE and the hillside blocks toward Petrovitsky. We time arrivals around Benson Hill Elementary and Cascade Elementary pickup, use drainage-aware hardware on the low corner, and clean up at the end of each day. Most jobs wrap in one to three days.
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

        {/* FAQ — visible content matches FAQPage JSON-LD */}
        <NeighborhoodFaqSection
          title="Benson Hill Fence Installation FAQs"
          items={BENSON_HILL_FAQS}
        />
      </main>

      {/* About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Renton"
        neighborhoodName="Benson Hill"
        attractions={BENSON_HILL_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Benson Hill families are served by the{" "}
              <a
                href="https://www.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton School District
              </a>
              .{" "}
              <a
                href="https://bensonhill.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Benson Hill Elementary
              </a>{" "}
              sits on 116th Avenue SE at the south end of the corridor, and{" "}
              <a
                href="https://cascade.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cascade Elementary
              </a>{" "}
              anchors the north end next to the community center. Attendance boundaries are set by the district, so confirm your assigned school before you assume a feeder pattern.{" "}
              <a
                href="https://lindbergh.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lindbergh High School
              </a>{" "}
              is the south Renton high school campus on 128th Avenue SE.
            </p>
            <p>
              Weekday life runs along 116th: school pickup, errands at Cascade Village just north of Petrovitsky Road, and programs at the{" "}
              <a
                href="https://familyfirstrenton.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Family First Community Center
              </a>
              . Weekend walks often land at{" "}
              <a
                href="https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cascade Park
              </a>{" "}
              and the rest of the{" "}
              <a
                href="https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton parks and trails
              </a>{" "}
              system. For fence height and permit questions on annexed lots, start with{" "}
              <a
                href="https://www.rentonwa.gov/City-Services/Permit-Services"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                City of Renton Permit Services
              </a>
              . If the parcel is still unincorporated,{" "}
              <a
                href="https://kingcounty.gov/en/dept/local-services/certificates-permits-licenses/permits/permits-inspections-codes-buildings-land-use/do-you-need-a-permit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                King County permit guidance
              </a>{" "}
              is the first check. Where a plat has design rules, the HOA architectural review committee is the other call. 116th Avenue SE and Petrovitsky Road put downtown Renton, I-405, and Maple Valley Highway within a short drive — which is why so many Benson Hill lots want a fence that works as hard as the commute.
            </p>
          </>
        }
      />

      <main>
        {/* Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Renton Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Renton. From Benson Hill we also work in Talbot Hill to the northwest, Cascade along the same 116th corridor, Fairwood to the east, East Renton Plateau farther up the plateau, Downtown Renton in the valley, and Renton Highlands to the north.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/talbot-hill">Talbot Hill</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/cascade">Cascade</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/fairwood">Fairwood</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/east-renton-plateau">East Renton Plateau</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/downtown-renton">Downtown Renton</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/renton-highlands">Renton Highlands</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Benson Hill Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Benson Hill. We&apos;ll walk the lot, talk through a 116th street face versus a wooded backyard, and quote a fence that fits your hillside property.
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

export default BensonHillPage;
