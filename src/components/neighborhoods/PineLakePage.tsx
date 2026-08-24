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
  Waves,
  Eye,
  Home,
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

const CANONICAL = "https://myfence.com/service-areas/sammamish/pine-lake";
const META_TITLE =
  "Pine Lake Sammamish Fence Installation | Lakeside & Family Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Pine Lake, Sammamish, WA. Cedar, hogwire & hybrid fencing for lakeside lots, school-area yards, and view-conscious properties. Free quotes. (253) 455-1885.";

const PINE_LAKE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Pine Lake, Sammamish?",
    answer:
      "The City of Sammamish generally does not require a building permit for residential fences six feet or shorter in side and rear yards. Front-yard fencing is typically limited to four feet, and corner lots have sight-distance triangle rules. Fences over six feet need a Type I construction permit and a recorded neighbor agreement. Lots that slope into Pine Lake, or that sit in a mapped shoreline or critical-area buffer, can trigger extra review regardless of height. MyFence.com checks the rules for your Pine Lake address before we quote.",
  },
  {
    question:
      "What fence styles work best for Pine Lake's lakeside lots and family yards?",
    answer:
      "Cedar privacy fencing is the most common choice on interior Pine Lake lots where kids, pets, and backyard screening matter. Along the lake and on downhill runs toward the water, hogwire in a cedar frame is popular because it keeps a view corridor while still containing dogs. Hybrid aluminum-and-cedar systems suit homeowners who want the cedar look without staining in the extra moisture that sits around the lake. Fence Genius maps slope and post locations so panels follow the grade instead of fighting it.",
  },
  {
    question: "How much does fence installation cost in Pine Lake, Sammamish?",
    answer:
      "Pine Lake fence installation typically runs $44–$66 per linear foot for six-foot cedar privacy, $38–$56 for hogwire with a cedar frame, and $54–$74 for hybrid aluminum/cedar. Lakeside moisture details, stepped runs on the downhill side of Issaquah-Pine Lake Road, and custom gates can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Pine Lake?",
    answer:
      "Most Pine Lake residential projects finish in one to three working days after any city or HOA paperwork is complete. Pre-fabricated panels cut on-site time. Stepped runs toward the lake, mature trees along 228th Avenue SE corridors, and tight side-yard access are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question:
      "Do I need my neighbor's permission for a fence in Pine Lake?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when the city does not require their signature. If you want a fence taller than six feet, Sammamish does require a recorded agreement with the adjoining owner. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which stretch.",
  },
];

const PINE_LAKE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Pine Lake Park",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/pine-lake-park/",
    description:
      "The neighborhood's shoreline gathering spot — a small city park with a swimming beach, fishing dock, and picnic lawns that sit a short walk from many homes on the south and east sides of the lake.",
  },
  {
    name: "Pine Lake Middle School",
    url: "https://pinelake.isd411.org/",
    description:
      "The Issaquah School District campus at 3095 Issaquah-Pine Lake Road, where most local sixth-through-eighth graders spend the week. After-school pickup traffic is a daily rhythm on that corridor.",
  },
  {
    name: "Big Rock Park",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/big-rock-park/",
    description:
      "A three-site city park system north of the lake with forested walking loops, a historic farmstead, and open meadow — a quieter alternative when Pine Lake Park is packed on summer weekends.",
  },
  {
    name: "Sammamish Commons",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/sammamish-commons/",
    description:
      "The civic campus a few minutes north on 228th Avenue SE, with City Hall, the library, playfields, and the seasonal farmers market that Pine Lake families treat as their weekday errand hub.",
  },
  {
    name: "East Lake Sammamish Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/east-lake-sammamish",
    description:
      "The paved north-south trail along the east shore of Lake Sammamish. Pine Lake residents typically reach it via 212th or 228th for bike commutes toward Issaquah and Redmond without getting on I-90.",
  },
];

const PineLakePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Pine Lake, Sammamish",
    pageTitle: "Pine Lake Sammamish Fence Installation",
    description: META_DESCRIPTION,
    faqItems: PINE_LAKE_FAQS,
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
                    Serving Pine Lake, Sammamish WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Pine Lake Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Lakeside and hillside fence work for Pine Lake homes — cedar privacy for family yards, hogwire that keeps the water in view, and hybrid systems built for the extra moisture around the lake.
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
                  city="Pine Lake, Sammamish"
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
                Fencing Around a Kettle Lake, Not a Planned Village
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Pine Lake is a glacial kettle lake ringed by single-family streets off Issaquah-Pine Lake Road SE and 228th Avenue SE. Lots drop toward the water on the downhill side, sit flatter on the plateau above, and often back onto mature firs rather than a community greenbelt. Unlike Klahanie to the south, there is no single master association dictating one fence catalog — some pockets have smaller HOAs, many do not — so the design conversation starts with the lot: shoreline views, kid-and-dog yards near Creekside and Pine Lake Middle, and the extra damp that hangs over the lake on cool mornings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built cedar, hogwire, and hybrid fences throughout south Sammamish, including the Pine Lake basin and the Klahanie edge just down the hill. We use Fence Genius to capture grade before a post goes in the ground, so stepped runs on the lake side stay even and interior lots get tight, pet-safe bottoms. The goal is a fence that looks like it belongs on your street — not a generic panel dropped onto a slope.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Pine Lake Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        View-Conscious Lake Designs
                      </h3>
                      <p className="text-muted-foreground">
                        Hogwire and mixed-height cedar layouts keep sightlines to the water while screening the neighbor&apos;s patio. We plan post heights against the slope so the top rail stays level from the street.
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
                        Full coverage on materials and labor, including hardware chosen for the extra humidity around Pine Lake. We stand behind the install through Sammamish winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        School-Area Family Yards
                      </h3>
                      <p className="text-muted-foreground">
                        Self-closing gates, no crawl gaps at the bottom, and latch heights that work for households walking to Pine Lake Middle or Creekside. Built for after-school backyard use, not just curb appeal.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Moisture-Ready Materials
                      </h3>
                      <p className="text-muted-foreground">
                        Pre-stained cedar, stainless or hot-dipped fasteners, and optional steel posts where ground contact stays wet. The lake does not get a pass on rot — neither do we.
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
                What Pine Lake Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our backyard drops toward the lake and I did not want a solid wall blocking the water. They stepped a hogwire run with a cedar frame and it still keeps the dog in. Clean work and they finished before the weekend.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Dana in Pine Lake</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We needed a real privacy fence for the kids after school. The cedar looks like it belongs on the street, the gates latch well, and they were careful around the old firs along the side yard.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Pine Lake</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Small HOA on our street, not Klahanie-level paperwork. They still put together a simple drawing and material list that the board signed off on the first pass. Appreciate the extra step.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Evan in Pine Lake</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Pine Lake Sammamish fence" />

        {/* 6. Photo Gallery — nearby Sammamish installs until Pine Lake-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Sammamish"
          title="Recent Fence Work Near Pine Lake"
          description="These photos are from nearby Sammamish jobs, including Klahanie just south of Pine Lake. Same crew, same materials, and the same Fence Genius process we use on Pine Lake lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Sammamish" neighborhood="Pine Lake" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pine Lake–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Pine Lake Slope and Stepped Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Streets on the downhill side of Issaquah-Pine Lake Road SE fall toward the water, so a fence that is built as one long level line either buries the bottom rail or leaves a gap a small dog can use. We measure grade with Fence Genius, then step or rack panels so the top stays even and the bottom tracks the lawn. On steeper cuts we shorten panel bays rather than forcing a six-foot bay across a drop.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Pine Lake Moisture and Fastener Choice
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The kettle lake holds cool air and overnight damp longer than the plateau toward Sammamish Commons. Raw cedar grays fast on the lake side, and cheap galvanized nails start showing rust streaks. We spec pre-stained Western Red Cedar and stainless or hot-dipped fasteners, and we talk through steel posts where the soil stays wet at the downhill corners of the lot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Pine Lake View Corridors vs. Privacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Waterfront and view lots usually want screening from the neighbor without a solid wall across the lake. Hogwire in a cedar frame, or cedar privacy on the side yards with an open run on the downhill edge, is the typical mix. We walk the lot with you and mark where a solid panel helps and where it just blocks the reason you bought the house.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Pine Lake HOAs, Trees, and City Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some cul-de-sacs around the lake have small architectural committees; many streets do not. We still follow Sammamish height rules — six feet in most side and rear yards, four feet in the front setback — and we plan post holes around the firs and cedars that line SE 24th Street and the 228th corridor. If your parcel sits in a shoreline or wetland buffer, we flag that before digging rather than after.
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
                Fence Installation Cost in Pine Lake
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Pine Lake fence is an investment in a school-area lot and, on the downhill side, a view. Slope, gates, and moisture details move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $44–$66 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $38–$56 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $54–$74 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Stepped runs toward the lake and hand-digging near mature trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Pine Lake property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Pine Lake property</Link>
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
                Popular Fence Styles in Pine Lake
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior Pine Lake lots near the schools. Full screening for after-school play, pre-stained cedar that holds up to Sammamish winters, and a look that fits 1970s–1990s ranch and two-story homes around the lake.
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
                    Cedar frame with black mesh for downhill and waterfront lots. Dogs stay in, the lake stays in view, and the lighter footprint is easier around roots than a solid privacy wall.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when lake-side humidity makes staining a chore. Strong enough for busy family yards without looking like a commercial lot.
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
                Our Pine Lake Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Pine Lake Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note slope toward the lake, map trees, and check whether the parcel sits in a Sammamish shoreline or critical-area overlay. Fence Genius captures grade so panels are built to the actual drop, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Pine Lake Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your street has a small HOA, we prepare a simple drawing and material list. If it does not, we still document Sammamish height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Pine Lake install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Pine Lake Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 228th and Issaquah-Pine Lake Road. Hand-digging near mature roots, stepped posts on the downhill side, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Pine Lake Fence Installation FAQs"
          items={PINE_LAKE_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Sammamish"
        neighborhoodName="Pine Lake"
        attractions={PINE_LAKE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Pine Lake sits in the Issaquah School District, so most families feed{" "}
              <a
                href="https://creekside.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Creekside Elementary
              </a>
              , then{" "}
              <a
                href="https://pinelake.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Pine Lake Middle School
              </a>{" "}
              on Issaquah-Pine Lake Road, and later{" "}
              <a
                href="https://skyline.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Skyline High School
              </a>
              . Weekday life is built around that school triangle and the short hop north on 228th Avenue SE to the{" "}
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
              Groceries and after-practice food cluster at the retail along Issaquah-Pine Lake Road rather than requiring a drive into downtown Issaquah. Weekends split between the swimming beach at{" "}
              <a
                href="https://www.sammamish.us/our-community/recreation/parks-trails/pine-lake-park/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Pine Lake Park
              </a>
              , wooded loops at{" "}
              <a
                href="https://www.sammamish.us/our-community/recreation/parks-trails/big-rock-park/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Big Rock Park
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
              handles permits and parks; I-90 is a short run south via 228th when you need Bellevue or Seattle.
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
                We install fences throughout Sammamish. From Pine Lake we also work in Klahanie just to the south, Sahalee, Beaver Lake, Trossachs, and East Sammamish.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/klahanie">Klahanie</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/sahalee/hoa-approved-fencing">
                    Sahalee
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah">Issaquah</Link>
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
                Ready to Enhance Your Pine Lake Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Pine Lake. We&apos;ll walk the slope, talk through view vs. privacy, and quote a fence that fits your Sammamish lot.
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

export default PineLakePage;
