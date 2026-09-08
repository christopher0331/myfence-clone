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
  Mountain,
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

const CANONICAL = "https://myfence.com/service-areas/sammamish/inglewood";
const META_TITLE =
  "Inglewood Sammamish Fence Installation | Hillside & Family Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Inglewood, Sammamish, WA. Cedar, hogwire & hybrid fencing for Inglewood Hill slopes, lake-side lots, and school-area yards. Free quotes. (253) 455-1885.";

const INGLEWOOD_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Inglewood, Sammamish?",
    answer:
      "The City of Sammamish generally does not require a building permit for residential fences six feet or shorter in side and rear yards. Front-yard fencing is typically limited to four feet, and corner lots on Inglewood Hill Road, NE 8th Street, and 228th Avenue NE must keep sight-distance triangles clear. Fences over six feet need a Type I construction permit and a recorded neighbor agreement. Parcels that drop toward East Lake Sammamish Parkway, or that sit in a mapped shoreline or critical-area buffer, can trigger extra review regardless of height. MyFence.com checks the overlays for your Inglewood address before we quote.",
  },
  {
    question:
      "What fence styles work best for Inglewood's hillside lots and family yards?",
    answer:
      "Interior plateau lots near Inglewood Middle School and Margaret Mead Elementary usually choose six-foot cedar privacy so kids and dogs stay in after school. On the downhill face of Inglewood Hill, hogwire in a cedar frame keeps a sightline toward Lake Sammamish while still containing pets. Hybrid aluminum-and-cedar systems suit homeowners who want the cedar look without restaining in the extra damp that sits at the bottom of the hill along the parkway. Fence Genius maps the grade so panels step with the lot instead of leaving crawl gaps on a 10–20% slope.",
  },
  {
    question: "How much does fence installation cost in Inglewood, Sammamish?",
    answer:
      "Inglewood fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Stepped runs on Inglewood Hill, hand-digging around mature firs on older hillside streets, and custom gates can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Inglewood?",
    answer:
      "Most Inglewood residential projects finish in one to three working days after any city or small-HOA paperwork is complete. Prefabricated panels keep on-site time short. Extra half-days usually come from stepped posts on the lake-side drop, tight side yards on 1960s–1980s hillside lots, or working around pickup traffic near Inglewood Middle on NE 8th Street. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Inglewood?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Sammamish does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Inglewood has many older pin locations on hillside lots, so confirming the line before digging saves a redo. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const INGLEWOOD_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Sammamish Landing Park",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/sammamish-landing-park/",
    description:
      "The city's public beach on East Lake Sammamish Parkway NE, at the foot of Inglewood Hill. Picnic lawns, two docks, and a short hop from the trail make it the after-school water stop for households that live on the downhill side of the neighborhood.",
  },
  {
    name: "Inglewood Middle School",
    url: "https://ims.lwsd.org/",
    description:
      "The Lake Washington School District campus at 24120 NE 8th Street, where most local sixth-through-eighth graders spend the week. Afternoon pickup stacks on NE 8th and sets the rhythm for nearby family yards.",
  },
  {
    name: "East Sammamish Park",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/east-sammamish-park/",
    description:
      "Ballfields, pickleball, and a playground next to Margaret Mead Elementary on NE 16th Street. Inglewood families treat it as the weekday practice field without driving south to the Commons.",
  },
  {
    name: "East Lake Sammamish Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/east-lake-sammamish",
    description:
      "The paved north-south path along the east shore of the lake. Inglewood riders drop down Inglewood Hill Road to a designated trail access, then roll toward Redmond or Issaquah without getting on 228th.",
  },
  {
    name: "Eastlake High School",
    url: "https://ehs.lwsd.org/",
    description:
      "The neighborhood's high school on 228th Avenue NE. Friday-night games and after-practice carpools are part of the weekly traffic pattern Inglewood households plan around.",
  },
];

const InglewoodPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Inglewood, Sammamish",
    pageTitle: "Inglewood Sammamish Fence Installation",
    description: META_DESCRIPTION,
    faqItems: INGLEWOOD_FAQS,
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
                    Serving Inglewood, Sammamish WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Inglewood Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Hillside and plateau fence work for Inglewood homes — cedar privacy for school-area yards, hogwire that keeps the lake in view, and hybrid systems built for the grade drop from 228th down Inglewood Hill Road.
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
                  city="Inglewood, Sammamish"
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
                Fencing a Hill That Drops Straight to the Lake
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Inglewood sits on the northwest shoulder of the Sammamish plateau, where Inglewood Hill Road falls from 228th Avenue NE down to East Lake Sammamish Parkway. Lots on the plateau sit relatively flat near Inglewood Middle and Mead Elementary; a few blocks west, the same street grid tilts hard toward the water. Older hillside homes from the 1960s–1980s share the neighborhood with newer plateau builds, and there is no single master association like Klahanie — some cul-de-sacs have small architectural committees, many streets do not. The design conversation starts with the lot: steep grade, lake-side damp, kid-and-dog yards on NE 8th, and the firs that line the downhill side yards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built cedar, hogwire, and hybrid fences across north Sammamish, including Inglewood Hill runs and the Sahalee edge just to the southeast. We use Fence Genius to capture grade before a post goes in the ground, so stepped panels on the lake face stay even and plateau lots get tight, pet-safe bottoms. The goal is a fence that looks like it belongs on your street — not a flat-lot panel dropped onto a 15% slope.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Inglewood Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Inglewood Hill Grade Work
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps the drop from the plateau to the parkway so posts step instead of racking a six-foot bay across a cut. The top rail stays even from the street; the bottom tracks the lawn.
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
                        Full coverage on materials and labor, including hardware chosen for the extra humidity at the bottom of Inglewood Hill. We stand behind the install through Sammamish winters.
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
                        Self-closing gates, no crawl gaps at the bottom, and latch heights that work for households walking to Inglewood Middle or Mead. Built for after-school backyard use, not just curb appeal.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Lake-Side Moisture Details
                      </h3>
                      <p className="text-muted-foreground">
                        Pre-stained cedar, stainless or hot-dipped fasteners, and optional steel posts where ground contact stays wet along the parkway. Cool air off Lake Sammamish does not get a pass on rot.
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
                What Inglewood Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot falls toward the parkway and I did not want a solid wall blocking the lake. They stepped a hogwire run with a cedar frame and it still keeps the dog in. Finished before the weekend pickup rush on NE 8th.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Maya in Inglewood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We needed real privacy for the kids after school at Mead. The cedar looks like it belongs with the older houses on our street, the gates latch well, and they hand-dug around the firs in the side yard.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Chris in Inglewood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Small HOA on our cul-de-sac, nothing like Klahanie paperwork. They still put together a simple drawing and material list that the board signed off on the first pass. Appreciate the extra step.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Lena in Inglewood</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Inglewood Sammamish fence" />

        {/* 6. Photo Gallery — nearby Sammamish installs until Inglewood-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Sammamish"
          title="Recent Fence Work Near Inglewood"
          description="These photos are from nearby Sammamish jobs, including Klahanie on the south plateau. Same crew, same materials, and the same Fence Genius process we use on Inglewood Hill lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Sammamish" neighborhood="Inglewood" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Inglewood-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Inglewood Hill Terrain and Stepped Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Inglewood Hill Road is one of the steepest residential climbs on the Eastside. A fence built as one long level line either buries the bottom rail or leaves a gap a small dog can use. We measure grade with Fence Genius, then step or rack panels so the top stays even and the bottom tracks the lawn. On the steepest cuts toward East Lake Sammamish Parkway we shorten panel bays rather than forcing a six-foot bay across a drop.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Inglewood Moisture and Fastener Choice
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cool air off Lake Sammamish hangs in the lower streets overnight, longer than it does on the plateau near 228th. Raw cedar grays fast on the downhill face, and cheap galvanized nails start showing rust streaks. We spec pre-stained Western Red Cedar and stainless or hot-dipped fasteners, and we talk through steel posts where the soil stays wet at the lower corners of the lot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Inglewood View Corridors vs. Privacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hillside lots often want screening from the neighbor without a solid wall across the lake. Hogwire in a cedar frame, or cedar privacy on the side yards with an open run on the downhill edge, is the typical mix. Plateau lots near the schools usually want full-height cedar. We walk the lot with you and mark where a solid panel helps and where it just blocks the reason you bought the house.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Inglewood Trees, Small HOAs, and City Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some cul-de-sacs have small architectural committees; many older hillside streets do not. We still follow Sammamish height rules — six feet in most side and rear yards, four feet in the front setback — and we plan post holes around the firs and cedars that line the downhill side yards and the 216th Avenue NE corridor. If your parcel sits in a shoreline or wetland buffer along the parkway, we flag that before digging rather than after.
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
                Fence Installation Cost in Inglewood
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                An Inglewood fence is an investment in a school-area lot and, on the downhill side, a view. Slope, gates, and moisture details move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Stepped runs on Inglewood Hill and hand-digging near mature trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Inglewood property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Inglewood property</Link>
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
                Popular Fence Styles in Inglewood
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on plateau lots near Inglewood Middle and Mead. Full screening for after-school play, pre-stained cedar that holds up to Sammamish winters, and a look that fits both 1970s hillside ranches and newer two-story builds.
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
                    Cedar frame with black mesh for downhill lots that still want the lake. Dogs stay in, the water stays in view, and the lighter footprint is easier around roots than a solid privacy wall.
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
                Our Inglewood Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Inglewood Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note slope toward the parkway, map trees, and check whether the parcel sits in a Sammamish shoreline or critical-area overlay. Fence Genius captures grade so panels are built to the actual drop, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Inglewood Design & HOA Submission
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
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Inglewood install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Inglewood Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off Inglewood Hill Road, NE 8th, and 228th. Hand-digging near mature roots, stepped posts on the downhill face, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Inglewood Fence Installation FAQs"
          items={INGLEWOOD_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Sammamish"
        neighborhoodName="Inglewood"
        attractions={INGLEWOOD_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Inglewood sits in the{" "}
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
                href="https://mead.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Margaret Mead Elementary
              </a>
              , then{" "}
              <a
                href="https://ims.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Inglewood Middle School
              </a>{" "}
              on NE 8th Street, and later{" "}
              <a
                href="https://ehs.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Eastlake High School
              </a>
              {" "}
              on 228th. Weekday life is built around that school triangle and the short hop south on 228th to the{" "}
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
              Groceries and after-practice food cluster along 228th Avenue NE rather than requiring a drive into downtown Redmond. Weekends split between the docks at{" "}
              <a
                href="https://www.sammamish.us/our-community/recreation/parks-trails/sammamish-landing-park/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sammamish Landing Park
              </a>
              , ballfields at{" "}
              <a
                href="https://www.sammamish.us/our-community/recreation/parks-trails/east-sammamish-park/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                East Sammamish Park
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
              handles permits and parks; SR-202 and 228th connect you to Redmond, I-90, and the rest of the Eastside.
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
                We install fences throughout Sammamish. From Inglewood we also work in Sahalee just to the southeast, Pine Lake, Beaver Lake, Trossachs, and East Sammamish. Redmond sits across the lake via East Lake Sammamish Parkway.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/sahalee/hoa-approved-fencing">
                    Sahalee
                  </Link>
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
                Ready to Enhance Your Inglewood Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Inglewood. We&apos;ll walk the slope, talk through view vs. privacy, and quote a fence that fits your Sammamish lot.
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

export default InglewoodPage;
