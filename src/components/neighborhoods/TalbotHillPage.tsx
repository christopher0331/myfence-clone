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

const CANONICAL = "https://myfence.com/service-areas/renton/talbot-hill";
const META_TITLE =
  "Talbot Hill Renton Fence Installation | Hillside Lots & Talbot Road | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Talbot Hill, Renton, WA. Cedar, hogwire & hybrid fencing for hillside lots along Talbot Road S, S Puget Drive, and the Valley Medical corridor. Free quotes. (253) 455-1885.";

const TALBOT_HILL_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Talbot Hill, Renton?",
    answer:
      "Talbot Hill is inside the City of Renton, so Renton Municipal Code 4-4-040 applies. A fence taller than six feet needs a building permit or a written exemption from the Building Official. Fences in a front-yard setback may not exceed 48 inches, and they may not exceed 42 inches inside a clear-vision area at a corner. Many older streets have no homeowners association; some plats still have private covenants. If your lot has an architectural review committee, that review is separate from the city permit. Confirm the parcel with City of Renton Permit Services and with your HOA's architectural review committee if you have one. MyFence.com walks the lot with you before we quote.",
  },
  {
    question:
      "What fence styles work on Talbot Hill's slopes and Talbot Road traffic?",
    answer:
      "Six-foot cedar privacy is the usual request on shared side yards and on lots that face Talbot Road S, where hospital-campus traffic is close. S Puget Drive and the streets that climb off it often do better with a solid neighbor side and hogwire in a cedar frame toward the trees, so the downhill view stays open. Hybrid aluminum-and-cedar on steel posts suits a low corner that stays wet after rain runs off the hill. Fence Genius records the grade so a panel follows the slope instead of leaving a gap at the bottom.",
  },
  {
    question: "How much does fence installation cost in Talbot Hill, Renton?",
    answer:
      "Talbot Hill fence installation typically runs $44–$67 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $54–$76 for hybrid aluminum/cedar. Hillside grade, tear-out of an older fence, extra gates, and hand-digging near mature trees can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Talbot Hill, Renton?",
    answer:
      "Most Talbot Hill residential projects finish in one to three working days after any city or HOA paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from a steep side yard, removing a leaning older fence, or staging so a trailer is not sitting in Talbot Road S traffic near Valley Medical Center or during pickup at Talbot Hill Elementary. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Talbot Hill, Renton?",
    answer:
      "A fence on the property line is often a shared decision in practice, even when the city does not ask for a signature. Talbot Hill mixes older hillside pins with later houses and smaller multifamily buildings along S Puget Drive, so the line is worth confirming before posts go in. Talk with the neighbor, check height and front-yard limits with the City of Renton, and check with your HOA's architectural review committee if the plat has one. MyFence.com can share a simple site plan so that conversation stays on style, height, and who pays for which stretch.",
  },
];

const TALBOT_HILL_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Talbot Hill Reservoir Park",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "The city park at 1900 Talbot Rd S, listed on Renton's parks and trails page. The city's project page says the renovated park has reopened with accessible paths and court work on the reservoir site. Lots nearby usually want a fence that holds pets without blocking the walk to the courts.",
  },
  {
    name: "Talbot Hill Elementary School",
    url: "https://talbothill.rentonschools.us/our-school/contact-us",
    description:
      "The Renton School District campus at 2300 Talbot Road S. Morning drop-off and afternoon pickup stack along Talbot Road; fence jobs on that block get timed so a trailer is not in the school line.",
  },
  {
    name: "Valley Medical Center, Talbot Professional Center",
    url: "https://www.valleymed.org/find-a-location/t/talbot-professional-center",
    description:
      "UW Medicine | Valley Medical Center's Talbot Professional Center at 4011 Talbot Rd S, with the Medical Arts Center next door at 4033 Talbot Rd S. Campus traffic is why we keep material drops off the main hospital approach.",
  },
  {
    name: "Talbot / Valley neighborhood",
    url: "https://visitrenton.com/explore/talbot-valley/",
    description:
      "Visit Renton's guide to the Talbot/Valley area, which describes Talbot as a former coal-mining community from the 1870s with valley views. The hill above the medical campus is the residential side we fence.",
  },
];

const TalbotHillPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Talbot Hill, Renton",
    pageTitle: "Talbot Hill Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: TALBOT_HILL_FAQS,
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
                    Serving Talbot Hill, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Talbot Hill Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy for Talbot Road street faces, hogwire that keeps a hillside backyard open, and hybrid panels built for grade changes south of downtown Renton.
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
                  city="Talbot Hill, Renton"
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
                Fencing the Hill Above Valley Medical
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Talbot Hill is the residential rise immediately south of downtown Renton. Talbot Road S is the spine: it leaves the valley, passes the Valley Medical Center campus, and climbs toward Talbot Hill Elementary and Talbot Hill Reservoir Park. S Puget Drive turns off that road into blocks of houses and smaller multifamily buildings. The ground is rarely flat. A side yard can drop a full panel height between the sidewalk and the back corner.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences on Renton hillsides, including Talbot Hill and the neighboring downtown and Benson Hill streets. Fence Genius records the grade, the true length of a short side yard, and where an older pin line sits before a post goes in. The fence follows the hill and the street it faces — a Talbot Road frontage that wants quiet, or a backyard that still looks down toward the valley.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Talbot Hill Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Grade Measured Before Panels</h3>
                      <p className="text-muted-foreground">
                        Lots step as they leave Talbot Road. Fence Genius captures the rise so panels follow the ground and a gate still swings on the uphill walk to the house.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Talbot Road and Hospital Traffic</h3>
                      <p className="text-muted-foreground">
                        The Valley Medical campus sits on Talbot Road S. A solid cedar face is a common request on that frontage. We keep the downhill or wooded side lighter when you still want the view.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Rain That Runs Downhill</h3>
                      <p className="text-muted-foreground">
                        Water leaves this hill toward the valley. We keep soil off the bottom board, use hardware that holds up in a damp low corner, and talk through hybrid panels where an older fence already sat in water.
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
                        Coverage on materials and labor, including hardware chosen for hillside drainage. The warranty is MyFence.com&apos;s workmanship warranty.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <LeadCaptureTabs fenceStyleName="Talbot Hill Renton fence" />

        <ServiceAreaPhotoGallery
          city="Renton"
          title="Recent Fence Work Near Talbot Hill"
          description="These photos are from nearby Renton jobs, including downtown, Benson Hill, and other hillside streets. Same crew, same materials, and the same Fence Genius process we use on Talbot Hill lots along Talbot Road S and S Puget Drive."
        />

        <FeaturedProject city="Renton" neighborhood="Talbot Hill" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Talbot Hill Installation</h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Talbot Hill run sits on a sloping lot off Talbot Road S or a side street such as S Puget Drive. The road face is often full-height cedar because campus and commuter traffic are close. The backyard stretch is lighter — hogwire in a cedar frame — when the lot looks downhill or into trees and a solid wall would erase that. Fence Genius maps the grade so the bottom of the fence follows the slope instead of leaving a gap a pet can slip through, and we set the line so winter runoff does not pond against the first board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Comparable residential yards here are a backyard plus two side yards, and most wrap in one to three working days after any city or HOA paperwork. We use cedar privacy, hogwire, or hybrid aluminum/cedar. We walk the line with you before posts go in so the Talbot Road face, the wet low corner, and the open downhill side are all accounted for.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Talbot Hill Fencing Considerations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Hillside Lots South of Downtown</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Talbot Hill rises between downtown Renton and the Benson Hill streets farther south. A panel layout drawn for a flat plateau backyard will gap or rack on these grades. We measure the rise along each run, then build panels that follow the ground and still leave a gate that opens on the uphill side of the house.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Talbot Road S and S Puget Drive</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Talbot Road S carries traffic to Valley Medical Center and up to the elementary school and reservoir park. S Puget Drive leaves that road into residential blocks. Lots on the arterial usually want a solid cedar street face. Walling every side to the same height is the regret we hear when the backyard was the open part of the lot. Mixed styles — solid on the noisy face, open toward the slope — are the usual fix.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Older Yards, Trees, and Drainage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Houses here span older hillside stock and later infill. Mature trees sit close to existing fences, and rain runs to the same low corner every winter. We hand-dig near roots when a machine would tear them up, keep the bottom board out of standing water, and replace a rotting low section with hybrid panels when stain has already lost that fight.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">City Fence Rules, and HOAs Where They Exist</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    City of Renton fence standards in RMC 4-4-040 cover height, front-yard limits, and corner sight lines. Talbot Hill is not one master association. Some plats have an architectural review committee; many older streets do not. We do not guess which book applies. You confirm it with{" "}
                    <a
                      href="https://www.rentonwa.gov/City-Services/Permit-Services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline decoration-2 underline-offset-2"
                    >
                      City of Renton Permit Services
                    </a>{" "}
                    and with your HOA&apos;s architectural review committee if the plat has one, and we build to the answer.
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
                Fence Installation Cost in Talbot Hill
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Talbot Hill fence is often a mixed-style run: a quieter face on Talbot Road, plus an open stretch toward the slope. Grade, access, and an older fence that has to come out move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong> $44–$67 per linear foot
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
                  Tear-out of an existing fence, extra gates, and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Talbot Hill property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Talbot Hill property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Talbot Hill</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The usual choice on neighbor sides and on Talbot Road faces near the hospital campus. Full height where traffic is close, pre-stained cedar that fits both older houses and later infill.
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
                    Cedar frame with black mesh for wooded backs and lots that still want the valley in view. Dogs stay in, and the lighter footprint takes less wind than a solid wall on an exposed grade.
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
                    Aluminum panels in a cedar frame on steel posts — the lower-maintenance option when a damp low corner has already worn out one fence. Strong enough for family yards without looking commercial on S Puget Drive.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Talbot Hill Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Talbot Hill Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the grade, note which face takes Talbot Road traffic, map utilities, and check whether the downhill side should stay more open. Fence Genius captures length and slope so panels are built to the hill.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design, City Rules, and HOA Review</h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We flag Renton&apos;s six-foot permit line, the 48-inch front-yard limit, and corner sight lines before we draw. If the plat has an architectural review committee, that packet is separate from the city. Rules vary — confirm them with the city and your HOA before we schedule.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so install days are mostly setting posts and hanging finished sections that already match the slope.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Talbot Hill Installation</h3>
                  <p className="text-muted-foreground">
                    Crews work residential streets off Talbot Road S and S Puget Drive. We time arrivals around Talbot Hill Elementary pickup and keep trailers off the Valley Medical approach. Drainage-aware hardware goes on the low corner. Most jobs wrap in one to three days.
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

        <NeighborhoodFaqSection title="Talbot Hill Fence Installation FAQs" items={TALBOT_HILL_FAQS} />
      </main>

      <AboutTheArea
        cityName="Renton"
        neighborhoodName="Talbot Hill"
        attractions={TALBOT_HILL_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Talbot Hill families are served by the{" "}
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
                href="https://talbothill.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Talbot Hill Elementary
              </a>{" "}
              sits at 2300 Talbot Road S. Attendance boundaries are set by the district, so confirm your assigned school before you assume a feeder pattern.
            </p>
            <p>
              Weekday life runs along Talbot Road: school pickup, trips to the Valley Medical campus at 4011 and 4033 Talbot Rd S, and walks up to{" "}
              <a
                href="https://yourvoice.rentonwa.gov/talbot-park"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Talbot Hill Reservoir Park
              </a>
              .{" "}
              <a
                href="https://visitrenton.com/explore/talbot-valley/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Visit Renton
              </a>{" "}
              describes the Talbot neighborhood as a coal-mining community in the 1870s, now a mix of older houses and later streets with valley views. For fence height and permit questions, start with{" "}
              <a
                href="https://www.rentonwa.gov/City-Services/Permit-Services"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                City of Renton Permit Services
              </a>{" "}
              and{" "}
              <a
                href="https://www.codepublishing.com/WA/Renton/html/Renton04/Renton0404/Renton0404040.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton fence code 4-4-040
              </a>
              . Where a plat has design rules, the HOA architectural review committee is the other call. Talbot Road S puts downtown Renton and I-405 within a short drive — which is why so many hillside lots want a fence that works as hard as the commute.
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
                We install fences throughout Renton. From Talbot Hill we also work in Downtown Renton in the valley just north, West Hill on the ridge west of the valley, Benson Hill farther south along the hill, Kennydale toward the lake, and Cascade to the east.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/downtown-renton">Downtown Renton</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/west-hill">West Hill</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/benson-hill">Benson Hill</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/kennydale">Kennydale</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/cascade">Cascade</Link>
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
                Ready to Enhance Your Talbot Hill Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Talbot Hill. We&apos;ll walk the lot, talk through a Talbot Road street face versus an open downhill yard, and quote a fence that fits the slope.
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

export default TalbotHillPage;
