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
  Scale,
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

const CANONICAL = "https://myfence.com/service-areas/renton/east-renton-plateau";
const META_TITLE =
  "East Renton Plateau Fence Installation | Slope & Dual-Jurisdiction Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in East Renton Plateau, Renton, WA. Cedar, hogwire & hybrid fencing for 196th Avenue SE lots, May Creek grades, and mixed City/County parcels. Free quotes. (253) 455-1885.";

const EAST_RENTON_PLATEAU_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in East Renton Plateau?",
    answer:
      "It depends on the parcel. Annexed streets on the west and north edges sit inside the City of Renton, so Renton Municipal Code 4-4-040 applies: side- and rear-yard fences six feet or under typically do not need a building permit, a fence taller than six feet does, and front-yard fencing in the required setback is usually limited to four feet. A large share of 98059 lots still sit in unincorporated King County, where Local Services — not City Hall — reviews height, setback, and critical-area overlays. Corner lots on 196th Avenue SE, SE 128th Street, and Duvall Avenue NE must keep sight triangles clear. MyFence.com checks the jurisdiction and any plat packet before we quote so you are not following the wrong book.",
  },
  {
    question:
      "What fence styles work best for East Renton Plateau's slopes and view lots?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off SE 144th and 180th Avenue SE, where two-story plats sit close enough that a shorter screen still reads the neighbor's second floor. Lots that drop toward May Creek or look east toward the Cascades often mix styles: full-height cedar on the neighbor sides, then hogwire in a cedar frame on the downhill face so the view and the trees stay in the room. Hybrid aluminum-and-cedar on steel posts suits ridge lots that take more wind and homeowners who do not want to restain after every plateau winter. Fence Genius maps the grade so panels step with the hill instead of leaving a crawl gap at the low rail.",
  },
  {
    question: "How much does fence installation cost in East Renton Plateau?",
    answer:
      "East Renton Plateau fence installation typically runs $44–$67 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $54–$77 for hybrid aluminum/cedar. Stepped runs on May Creek-facing grades, extra gates on 196th, and hand-digging near older firs can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in East Renton Plateau?",
    answer:
      "Most East Renton Plateau residential projects finish in one to three working days after any city, county, or HOA paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from a 200-foot perimeter on a plateau lot, compact access during Sierra Heights pickup on Union Avenue NE, or matching an existing neighbor height on a shared side. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in East Renton Plateau?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Renton or King County does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Plateau plats mix 1970s pins with later 2000s courts, so confirming the line before digging saves a redo on a long side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const EAST_RENTON_PLATEAU_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Sierra Heights Elementary School",
    url: "https://sierraheights.rentonschools.us/",
    description:
      "The plateau campus at 2501 Union Avenue NE. Morning drop-off stacks on Union and the courts that feed SE 128th; we time material drops so a trailer is not sitting in that queue.",
  },
  {
    name: "Hazen High School",
    url: "https://hazen.rentonschools.us/",
    description:
      "The Renton School District high school at 1101 Hoquiam Avenue NE that serves East Plateau families. Friday traffic on Hoquiam and the climb from Sunset is how we stage equipment so a game-day stack does not sit behind a trailer.",
  },
  {
    name: "McKnight Middle School",
    url: "https://mcknight.rentonschools.us/",
    description:
      "The middle-school campus at 1200 Edmonds Avenue NE. After-school activity nights pull cars onto Edmonds; fence jobs on that corridor get staged so pickup is not the problem.",
  },
  {
    name: "Northeast Renton Park",
    url: "https://yourvoice.rentonwa.gov/northeastrentonpark",
    description:
      "An 18.5-acre park in design on the north edge of the East Plateau, between May Creek and Duvall Avenue NE. Lots that back this greenway usually want a fence that holds pets without walling off the trees and wetlands.",
  },
  {
    name: "Maplewood Golf Course",
    url: "https://www.rentonwa.gov/Activities-Events/Maplewood-Golf-Course",
    description:
      "The city course at 4050 Maple Valley Highway, down the hill from the plateau. Weekend tee times fill the highway; we plan crew arrivals from 196th so we are not fighting that stack.",
  },
];

const EastRentonPlateauPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "East Renton Plateau, Renton",
    pageTitle: "East Renton Plateau Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: EAST_RENTON_PLATEAU_FAQS,
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
                    Serving East Renton Plateau, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  East Renton Plateau Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Stepped cedar on May Creek grades, hogwire that keeps a Cascade view, and hybrid systems built for ridge wind and the mix of City of Renton and King County parcels along 196th Avenue SE.
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
                  city="East Renton Plateau, Renton"
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
                Stepped Runs on the Ridge Above May Creek
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                East Renton Plateau sits on the rise east of I-405 and the Cedar River valley, with 196th Avenue SE running north–south through 98059 and SE 128th, SE 144th, and Petrovitsky tying the courts together. Duvall Avenue NE and Union Avenue NE mark the north and school-side edges; May Creek and the planned Northeast Renton Park sit on the drop toward Newcastle. Lots here are larger than a downtown Renton side yard and windier than a Cascade rambler — 1970s streets share the plateau with 2000s two-story plats that sometimes carry architectural review. The design conversation starts with the grade, which book of rules applies, and whether the downhill face should stay open to the view.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Renton, including slope work on the East Plateau and neighboring Maple Ridge Estates. We use Fence Genius to capture the drop toward May Creek, tree locations, and the true length of a 196th side yard before a post goes in the ground, so a 180-foot run steps instead of leaving a gap a small dog can use. The goal is a fence that belongs on a ridge lot — not a flat-panel kit forced onto a hillside that also happens to sit in the wrong jurisdiction.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why East Renton Plateau Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Scale className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        City or County, Checked First
                      </h3>
                      <p className="text-muted-foreground">
                        Annexed blocks follow Renton code; many 98059 parcels still sit in unincorporated King County. We confirm the jurisdiction and any plat review before we quote, so the height on Duvall or 196th is not a surprise at inspection.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        May Creek Grade Mapping
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius records the drop on north-facing lots so panels step with the hill. We do not leave a triangular gap at the low rail or force a flat run across a rear line that falls toward the greenway.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Wind className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Ridge Wind and Mixed Styles
                      </h3>
                      <p className="text-muted-foreground">
                        Open hogwire on the downhill face cuts wind load and keeps the Cascade view; solid cedar on the neighbor sides handles privacy. Hybrid on steel posts is the option when a ridge lot has already eaten one fence.
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
                        Full coverage on materials and labor, including hardware chosen for wind and the extra damp that sits on north-facing May Creek slopes. We stand behind the install through south King County winters.
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
                What East Renton Plateau Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our rear line drops toward May Creek. They stepped the cedar so the dog cannot crawl under, then used hogwire on the view side so we still see the trees. They also caught that we are county, not city, before anyone pulled the wrong permit.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Dana in East Renton Plateau</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We are on 196th and wanted a quieter street face without boxing the backyard. Full cedar on 196th, open rail in back. They finished around Sierra Heights pickup so we were not blocking Union.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in East Renton Plateau</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;The last fence leaned after two windy winters on the ridge. They put hybrid on steel posts at the exposed corner. The walkthrough was picky in a good way — every gate latch got checked.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Linh in East Renton Plateau</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="East Renton Plateau Renton fence" />

        {/* 6. Photo Gallery — nearby Renton installs until East Plateau-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Renton"
          title="Recent Fence Work Near East Renton Plateau"
          description="These photos are from nearby Renton jobs, including Maple Ridge Estates, Fairwood, The Grove at Spring Lake, and Renton Highlands. Same crew, same materials, and the same Fence Genius process we use on East Renton Plateau lots along 196th Avenue SE, SE 144th, and the May Creek drop off Duvall Avenue NE."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Renton" neighborhood="East Renton Plateau" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured East Renton Plateau Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical East Renton Plateau cedar-and-hogwire run sits on a north-facing lot off SE 128th or Duvall Avenue NE, close enough to May Creek that a solid downhill wall would erase the reason the house was sited on the ridge. The job is usually two fences in one: full-height cedar on the neighbor and 196th sides, then a lighter hogwire stretch toward the greenway so the living room still reads the trees. Fence Genius maps the drop so panels step instead of leaving a gap, and we set footings so winter runoff on the creek-facing slope does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable East Plateau yards run 140–220 linear feet and wrap in one to three working days after any city, county, or plat paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the street face, the wet corner, and the view side are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                East Renton Plateau-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    East Renton Plateau Jurisdiction Split
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The plateau is not one permitting office. Annexed streets follow City of Renton height and setback rules under RMC 4-4-040. A large share of 98059 parcels still sit in unincorporated King County, where Local Services handles permits and critical-area overlays near May Creek. We check the parcel map first so a six-foot rear run on SE 144th is not quoted under the wrong code, and we flag corner-lot sight triangles on 196th and Duvall before a post hole is dug.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    East Renton Plateau Terrain Toward May Creek
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    North and northeast lots fall toward May Creek, the planned Northeast Renton Park, and the Newcastle line. A flat-lot crew will either leave a triangular gap or bury the low rail in dirt. Fence Genius records the grade so panels step; we use deeper footings on the downhill stretch and keep soil off the first board so winter seepage does not sit against cedar all season.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    East Renton Plateau Wind, Views, and Wildlife
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ridge lots take more wind than a valley rambler, and many were sited for a Cascade or tree-line view. Walling the downhill edge in solid cedar is the most common regret we hear. Hogwire in a cedar frame, or cedar on the sides with an open run toward the creek, is the usual mix. Deer move along the May Creek corridor; we talk through height and mesh so pets stay in without pretending a fence is a wildlife barrier.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    East Renton Plateau Plats and School-Street Staging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Newer courts near Maple Ridge Estates and The Grove at Spring Lake sometimes have architectural review even when the city or county does not ask for a permit. Older streets off 180th and SE 144th often do not. 196th Avenue SE and Union Avenue NE are the weekday spines — Sierra Heights pickup and Hazen game nights set the pattern. We stage compact equipment so we are not blocking a queue, and we plan material drops away from the school lot when that block is already full.
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
                Fence Installation Cost in East Renton Plateau
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                An East Renton Plateau fence is often a stepped run on a ridge lot, plus a quieter face on 196th. Slope, gates, and mixed-style runs move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $44–$67 per linear foot
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
                      $54–$77 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Stepped hillside runs, tear-out of an existing fence, and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your East Renton Plateau property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your East Renton Plateau property</Link>
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
                Popular Fence Styles in East Renton Plateau
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides and 196th street faces. Full height for two-story plats, pre-stained cedar that holds up on a wet north slope, and a look that fits both 1970s ramblers and later courts.
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
                    Cedar frame with black mesh for May Creek-facing lots that still want the trees in the room. Dogs stay in, the lighter footprint takes less wind than a solid wall, and the view does not disappear after a replacement.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when ridge wind has already leaned one fence. Strong enough for family yards without looking commercial on SE 144th or 180th.
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
                Our East Renton Plateau Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. East Renton Plateau Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the drop toward May Creek, note the windward corner, map trees, and check whether a 196th or view-facing stretch should stay more open. Fence Genius captures length, grade, and the neighbor fence so panels are built to the actual yard, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. East Renton Plateau Design & Jurisdiction Review
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document City of Renton rules under RMC 4-4-040 or King County Local Services rules for unincorporated parcels, plus any plat architectural packet near Maple Ridge Estates or The Grove. Corner-lot sight triangles on 196th and Duvall get marked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so East Plateau install days are mostly setting posts and hanging finished sections that already match the grade.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. East Renton Plateau Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 196th, SE 128th, SE 144th, and Union Avenue NE. Stepped footings on the creek-facing slope, drainage-aware hardware on the wet corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="East Renton Plateau Fence Installation FAQs"
          items={EAST_RENTON_PLATEAU_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Renton"
        neighborhoodName="East Renton Plateau"
        attractions={EAST_RENTON_PLATEAU_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              East Renton Plateau families are served by the{" "}
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
                href="https://sierraheights.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sierra Heights Elementary
              </a>{" "}
              on Union Avenue NE as the neighborhood campus. Most addresses then feed{" "}
              <a
                href="https://mcknight.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                McKnight Middle School
              </a>{" "}
              on Edmonds Avenue NE and{" "}
              <a
                href="https://hazen.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Hazen High School
              </a>
              . Weekday life is built around those campuses, the May Creek edge, and the short hop down to Maple Valley Highway.
            </p>
            <p>
              After-school hours split between school fields and a round at{" "}
              <a
                href="https://www.rentonwa.gov/Activities-Events/Maplewood-Golf-Course"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Maplewood Golf Course
              </a>
              . The city is designing{" "}
              <a
                href="https://yourvoice.rentonwa.gov/northeastrentonpark"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Northeast Renton Park
              </a>{" "}
              on the Duvall and May Creek edge to close a long park-access gap on the plateau. For fence height and permit questions, start with{" "}
              <a
                href="https://www.rentonwa.gov/City-Services/Permit-Services"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                City of Renton Permit Services
              </a>
              {", "}
              <a
                href="https://www.codepublishing.com/WA/Renton/html/Renton04/Renton0404/Renton0404040.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton fence code 4-4-040
              </a>
              {", or "}
              <a
                href="https://kingcounty.gov/en/dept/local-services"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                King County Local Services
              </a>{" "}
              if your 98059 parcel is still unincorporated. 196th Avenue SE and Maple Valley Highway put I-405 and downtown Renton within a short drive — which is why so many plateau lots want a fence that works as hard as the commute.
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
                We install fences throughout Renton. From East Renton Plateau we also work in Maple Ridge Estates and Maple Valley Heights on the same ridge, The Grove at Spring Lake, Fairwood to the south, Cascade toward the valley, and Renton Highlands to the west.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-ridge-estates">Maple Ridge Estates</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-valley-heights">Maple Valley Heights</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/the-grove-at-spring-lake">The Grove at Spring Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/fairwood">Fairwood</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/cascade">Cascade</Link>
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

        {/* 15. CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your East Renton Plateau Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in East Renton Plateau. We&apos;ll walk the lot, talk through a May Creek grade vs. a 196th street face, and quote a fence that fits your property.
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

export default EastRentonPlateauPage;
