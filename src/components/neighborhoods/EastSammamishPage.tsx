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
  Trees,
  Volume2,
  Bike,
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

const CANONICAL = "https://myfence.com/service-areas/sammamish/east-sammamish";
const META_TITLE =
  "East Sammamish Fence Installation | Mature Lots & Trail Edges | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in East Sammamish, WA. Cedar, hogwire & hybrid fencing for established lots, mature trees, and East Lake Sammamish Trail edges. Free quotes. (253) 455-1885.";

const EAST_SAMMAMISH_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in East Sammamish?",
    answer:
      "The City of Sammamish generally does not require a building permit for residential fences six feet or shorter in side and rear yards. Front-yard fencing is typically limited to four feet, and corner lots have sight-distance triangle rules. Fences over six feet need a Type I construction permit and a recorded neighbor agreement. Lots west of East Lake Sammamish Parkway, or parcels that sit in a mapped shoreline or critical-area buffer, can trigger extra review regardless of height. MyFence.com checks the rules for your East Sammamish address before we quote.",
  },
  {
    question:
      "What fence styles work best for East Sammamish's mature lots and trail edges?",
    answer:
      "Cedar privacy fencing is the usual choice on interior streets off 212th Avenue SE and Louis Thompson Road, where established gardens and close neighbors make screening the priority. Along the East Lake Sammamish Trail and downhill runs toward the parkway, hogwire in a cedar frame is popular because it contains dogs without boxing in the lake corridor. Hybrid aluminum-and-cedar systems suit homeowners who want the cedar look without staining long runs next to decades-old firs. Fence Genius maps roots, grade, and post locations so panels follow the lot instead of fighting the trees.",
  },
  {
    question: "How much does fence installation cost in East Sammamish?",
    answer:
      "East Sammamish fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $38–$57 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Hand-digging around mature roots, stepped runs from the plateau down toward East Lake Sammamish Parkway, and extra gates on corner lots can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in East Sammamish?",
    answer:
      "Most East Sammamish residential projects finish in one to three working days after any city or HOA paperwork is complete. Pre-fabricated panels cut on-site time. Tight side yards between 1970s and 1990s homes, hand-digging near 20- to 40-year-old trees, and stepped posts on the downhill side of the parkway are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in East Sammamish?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when the city does not require their signature. If you want a fence taller than six feet, Sammamish does require a recorded agreement with the adjoining owner. Many East Sammamish streets have no master HOA, but a few cul-de-sacs still have a small architectural committee. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which stretch.",
  },
];

const EAST_SAMMAMISH_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Sammamish Landing Park",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/sammamish-landing-park/",
    description:
      "The city's only public shoreline on Lake Sammamish, at 4607 East Lake Sammamish Parkway NE. East Sammamish households use the docks, picnic lawn, and beach access as the short hop when they want lake time without driving south to Issaquah.",
  },
  {
    name: "East Lake Sammamish Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/east-lake-sammamish",
    description:
      "The paved King County trail that runs the length of the neighborhood along the old rail grade. Weekend bike traffic and weekday walkers sit a few yards from many rear lots, which is why trail-edge fencing here is as much about privacy as it is about pets.",
  },
  {
    name: "Ebright Creek Park",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/ebright-creek-park/",
    description:
      "A 12-acre city park on 212th Avenue SE with boardwalks, play fields, and a creek corridor that many East Sammamish kids treat as their after-school loop. Lots on the uphill side of the parkway often sit a few blocks from this park rather than from the lake itself.",
  },
  {
    name: "East Lake Elementary",
    url: "https://ele.lwsd.org/",
    description:
      "The Lake Washington School District campus that serves the northern East Sammamish streets. Morning drop-off and afternoon pickup set the daily rhythm on the 228th and Inglewood Hill corridors.",
  },
  {
    name: "Sammamish Commons",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/sammamish-commons/",
    description:
      "The civic campus a short climb east on 228th Avenue — City Hall, the library, playfields, and the seasonal farmers market. East Sammamish households treat it as the weekday errand stop between school and home.",
  },
];

const EastSammamishPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "East Sammamish, Sammamish",
    pageTitle: "East Sammamish Fence Installation",
    description: META_DESCRIPTION,
    faqItems: EAST_SAMMAMISH_FAQS,
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
              href="/service-areas/sammamish"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sammamish
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving East Sammamish, Sammamish WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  East Sammamish Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence work for East Sammamish&apos;s established lots — cedar privacy that threads around decades-old trees, hogwire along the trail, and designs that still leave a corridor toward Lake Sammamish.
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
                  city="East Sammamish, Sammamish"
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
                Fencing Around Established Gardens, Not a Blank Subdivision
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                East Sammamish is the older residential fabric along East Lake Sammamish Parkway and the streets that climb east toward 212th Avenue SE and 228th. Lots here were built out decades before Klahanie or Trossachs, so the fence conversation starts with what is already in the ground: 20- to 40-year-old Douglas firs, maple canopies, irrigation, and garden beds that homeowners do not want ripped out for a post line. Some parcels drop toward the lake west of the parkway. Others sit flatter on the plateau but still hear trail traffic along the old rail grade.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built cedar, hogwire, and hybrid fences throughout this corridor, including trail-edge lots and the uphill streets off Louis Thompson Road and SE 8th. We use Fence Genius to map grade and root zones before a post goes in the ground, then hand-dig where an auger would tear into a tree that has been on the lot longer than the house. The goal is a fence that looks like it grew with the property — not a generic panel dropped through a garden.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why East Sammamish Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Trees className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Mature-Tree Post Planning
                      </h3>
                      <p className="text-muted-foreground">
                        We shift bay spacing and hand-dig around fir and maple roots instead of forcing a six-foot grid through a 30-year garden. Fence Genius marks conflict zones before the crew arrives.
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
                        Full coverage on materials and labor, including hardware chosen for the extra damp that sits along the lake and trail. We stand behind the install through Sammamish winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Bike className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Trail-Edge Privacy
                      </h3>
                      <p className="text-muted-foreground">
                        Rear lots along the East Lake Sammamish Trail get screening that keeps weekend cyclists out of the kitchen window without turning the yard into a tunnel. Height and style follow the actual sightline, not a catalog default.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Parkway Noise Buffering
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar on the East Lake Sammamish Parkway side cuts commuter noise; open hogwire on the downhill or lake edge keeps the view. We mix styles on the same lot when that is what the street actually needs.
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
                What East Sammamish Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our backyard sits a few feet from the trail and I did not want a solid wall the whole way. They ran cedar on the parkway side and hogwire toward the lake. The dog stays in and we still see the water.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Mei in East Sammamish</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;They planned every post around the old firs along 212th and did not chew up the irrigation. The cedar matches the house, and they finished in two days without turning the garden into a mud pit.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Cole in East Sammamish</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;No big HOA on our street, but they still walked Sammamish height rules and talked with the neighbor before digging. Appreciate that they treated it like a shared line, not just our project.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Hannah in East Sammamish</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="East Sammamish Sammamish fence" />

        {/* 6. Photo Gallery — nearby Sammamish installs until East Sammamish-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Sammamish"
          title="Recent Fence Work Near East Sammamish"
          description="These photos are from nearby Sammamish jobs, including Klahanie and other plateau streets. Same crew, same materials, and the same Fence Genius process we use on East Sammamish lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Sammamish" neighborhood="East Sammamish" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                East Sammamish–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    East Sammamish Tree Roots and Garden Beds
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Established lots along 212th Avenue SE, Louis Thompson Road, and the courts off SE 8th often have firs and maples whose roots sit exactly where a standard post grid would go. We measure first, then shorten bays or shift the line a few inches rather than cutting a structural root. Hand-digging replaces the auger at those posts, and we talk through any tree we cannot work around before the crew starts.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Grade From the Plateau Down to the Parkway
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Streets east of East Lake Sammamish Parkway climb toward the plateau. A fence built as one long level line either buries the bottom rail or leaves a gap a small dog can use. Fence Genius captures the drop, then we step or rack panels so the top stays even and the bottom tracks the lawn. On steeper cuts we shorten panel bays rather than forcing a six-foot bay across a drop.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Trail Traffic and Lake View Corridors
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The East Lake Sammamish Trail puts walkers and cyclists on the same elevation as many rear yards. Solid cedar is the right answer on the parkway-facing side; hogwire or a mixed-height run is usually better on the downhill or trail edge so the lake stays in the picture. We walk the lot with you and mark where a solid panel helps and where it just blocks the reason the house was sited here.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    East Sammamish HOAs, Shoreline, and City Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most of this corridor is not a single master association. A few cul-de-sacs have small architectural committees; many streets do not. We still follow Sammamish height rules — six feet in most side and rear yards, four feet in the front setback — and we flag shoreline or wetland buffers on parcels west of the parkway before digging rather than after.
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
                Fence Installation Cost in East Sammamish
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                An East Sammamish fence is an investment in an established lot — trees, gardens, and, on the downhill side, a view. Slope, gates, and hand-digging move the number. These are typical ranges; your on-site measurement is the real quote.
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
                      $38–$57 per linear foot
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
                  Hand-digging near mature trees and stepped runs toward the parkway may add 10–15%. Custom gates are itemized separately. Get an exact quote for your East Sammamish property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your East Sammamish property</Link>
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
                Popular Fence Styles in East Sammamish
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior East Sammamish lots near 212th and the school corridors. Full screening for established yards, pre-stained cedar that holds up to Sammamish winters, and a look that fits 1970s–1990s homes rather than a brand-new planned village.
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
                    Cedar frame with black mesh for trail-edge and downhill lots. Dogs stay in, the lake corridor stays in view, and the lighter footprint is easier around roots than a solid privacy wall.
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
                    Aluminum panels in a cedar frame on steel posts — the lower-maintenance option when lake-side humidity and long runs make staining a chore. Strong enough for family yards without looking like a commercial lot.
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
                Our East Sammamish Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. East Sammamish Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note slope toward the parkway, map trees and garden beds, and check whether the parcel sits in a Sammamish shoreline or critical-area overlay. Fence Genius captures grade so panels are built to the actual drop, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. East Sammamish Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your cul-de-sac has a small architectural committee, we prepare a simple drawing and material list. If it does not, we still document Sammamish height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so East Sammamish install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. East Sammamish Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off East Lake Sammamish Parkway and 212th. Hand-digging near mature roots, stepped posts on the downhill side, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="East Sammamish Fence Installation FAQs"
          items={EAST_SAMMAMISH_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Sammamish"
        neighborhoodName="East Sammamish"
        attractions={EAST_SAMMAMISH_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Northern East Sammamish streets sit in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              , so most families feed{" "}
              <a
                href="https://ele.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                East Lake Elementary
              </a>
              , then{" "}
              <a
                href="https://ims.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Inglewood Middle School
              </a>
              , and later{" "}
              <a
                href="https://ehs.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Eastlake High School
              </a>{" "}
              on 228th Avenue NE. Weekday life is built around that school triangle and the short climb to the{" "}
              <a
                href="https://kcls.org/locations/sammamish/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sammamish Library
              </a>{" "}
              at the Commons.
            </p>
            <p>
              Groceries and after-practice food cluster along 228th rather than requiring a drive into downtown Issaquah. Weekends split between the shoreline at{" "}
              <a
                href="https://www.sammamish.us/our-community/recreation/parks-trails/sammamish-landing-park/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sammamish Landing Park
              </a>
              , boardwalk loops at{" "}
              <a
                href="https://www.sammamish.us/our-community/recreation/parks-trails/ebright-creek-park/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Ebright Creek Park
              </a>
              , and bike miles on the{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/east-lake-sammamish"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                East Lake Sammamish Trail
              </a>
              .{" "}
              <a
                href="https://www.sammamish.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The City of Sammamish
              </a>{" "}
              handles permits and parks; SR 520 and I-90 are short runs north or south when you need Redmond, Bellevue, or Seattle.
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
                Also Serving Nearby Sammamish Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                From East Sammamish we also install in Pine Lake and Klahanie to the south, Beaver Lake and Trossachs farther east on the plateau, and Sahalee. Inglewood sits just north along the same parkway corridor.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/pine-lake">Pine Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/beaver-lake">Beaver Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/klahanie">Klahanie</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/trossachs">Trossachs</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/sahalee/hoa-approved-fencing">
                    Sahalee
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond">Redmond</Link>
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
                Ready to Enhance Your East Sammamish Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in East Sammamish. We&apos;ll walk the trees, talk through trail privacy vs. lake views, and quote a fence that fits your established lot.
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

export default EastSammamishPage;
