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
  TreePine,
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

const CANONICAL = "https://myfence.com/service-areas/sammamish/beaver-lake";
const META_TITLE =
  "Beaver Lake Sammamish Fence Installation | Lakeside & Forest Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Beaver Lake, Sammamish, WA. Cedar, hogwire & hybrid fencing for lakeside lots, school-area yards, and forest-edge properties. Free quotes. (253) 455-1885.";

const BEAVER_LAKE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Beaver Lake, Sammamish?",
    answer:
      "Most Beaver Lake side and rear fences six feet or shorter do not need a City of Sammamish building permit. Front-yard height is usually capped at four feet, and corner lots must keep the sight triangle clear. Anything taller than six feet requires a Type I construction permit plus a recorded agreement with the adjoining owner. Parcels that slope into Beaver Lake or Little Beaver Lake, or that sit in a mapped shoreline or critical-area buffer along West Beaver Lake Drive, can need extra review even at standard height. MyFence.com checks those overlays for your address before we quote.",
  },
  {
    question:
      "What fence styles work best for Beaver Lake's lakeside and forest-edge lots?",
    answer:
      "Interior streets near Beaver Lake Middle School usually choose six-foot cedar privacy so kids and dogs stay in after school. On downhill runs toward the water, hogwire in a cedar frame keeps a view corridor while still containing pets. Forest-edge lots backing toward Beaver Lake Preserve often mix solid cedar on the street sides with hogwire on the treeline so deer pressure is visible and airflow stays high. Hybrid aluminum-and-cedar is the low-maintenance pick when lake-side damp makes staining a chore. Fence Genius maps grade so panels step with the lot instead of leaving crawl gaps.",
  },
  {
    question: "How much does fence installation cost in Beaver Lake, Sammamish?",
    answer:
      "Beaver Lake fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Longer runs on larger plateau lots, hand-digging around firs on West Beaver Lake Drive, and stepped lake-side panels can move the number. Use the quote tool for a starting range, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Beaver Lake?",
    answer:
      "Most Beaver Lake residential jobs finish in one to three working days after any city or HOA paperwork is done. Prefabricated panels keep on-site time short. Extra half-days usually come from stepped runs toward the lakes, mature roots along SE 24th Street and 244th Avenue SE, or tight side-yard access on older lakefront streets. We lock the schedule with you before the crew arrives.",
  },
  {
    question:
      "Do I need my neighbor's permission for a fence in Beaver Lake?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Sammamish does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. MyFence.com can help confirm pins, share a simple site plan, and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const BEAVER_LAKE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Beaver Lake Park",
    url: "https://www.sammamish.us/our-community/recreation/parks-trails/beaver-lake-park/",
    description:
      "An 83-acre city park split between the lake-side lodge on SE 24th Street and the athletic fields, playground, and off-leash dog area on 244th Avenue SE — the weekday backyard for many homes around both kettle lakes.",
  },
  {
    name: "Beaver Lake Middle School",
    url: "https://beaverlake.isd411.org/",
    description:
      "The Issaquah School District campus at 25025 SE 32nd Street, where local sixth-through-eighth graders spend the week. Afternoon pickup stacks along SE 32nd and sets the rhythm for nearby family yards.",
  },
  {
    name: "Soaring Eagle Regional Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/backcounty-trails/soaring-eagle",
    description:
      "King County forest just east of the neighborhood, reached from West Beaver Lake Drive through Beaver Lake Preserve. Homes that back toward this corridor deal with deer traffic and a true forest edge, not a manicured greenbelt.",
  },
  {
    name: "Duthie Hill Mountain Bike Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/duthie-hill",
    description:
      "The 120-acre bike park on Issaquah-Fall City Road, a short hop from Endeavour Elementary. Beaver Lake families treat it as the weekend trailhead, and muddy bikes coming home are a real reason people want a contained side yard.",
  },
  {
    name: "Endeavour Elementary School",
    url: "https://endeavour.isd411.org/",
    description:
      "The K–5 campus on SE Issaquah-Fall City Road that feeds Beaver Lake Middle. Walking and carpool traffic from the eastern streets of the neighborhood funnels here on school mornings.",
  },
];

const BeaverLakePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Beaver Lake, Sammamish",
    pageTitle: "Beaver Lake Sammamish Fence Installation",
    description: META_DESCRIPTION,
    faqItems: BEAVER_LAKE_FAQS,
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
                    Serving Beaver Lake, Sammamish WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Beaver Lake Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence work for Beaver Lake and Little Beaver Lake homes — cedar privacy for school-area yards, hogwire that keeps the water in view, and hybrid systems built for forest-edge lots and lake-side damp.
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
                  city="Beaver Lake, Sammamish"
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
                Where Two Kettle Lakes Meet the East Plateau Forest
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Beaver Lake is not a single cul-de-sac. It is a pair of glacial kettle lakes — Beaver Lake and Little Beaver Lake — ringed by older lakefront streets on West Beaver Lake Drive and E Beaver Lake Drive SE, then by plateau lots along 244th Avenue SE, SE 24th Street, and SE 32nd Street. Some parcels drop straight to the water. Others sit flatter and back onto firs that connect toward Beaver Lake Preserve. Trossachs sits just east with a master association; many Beaver Lake streets do not, so the design conversation starts with the lot: shoreline views, kid-and-dog yards near Beaver Lake Middle, and the extra damp that hangs over the lakes on cool mornings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across south and east Sammamish, including the Beaver Lake basin and the Klahanie edge to the southwest. We use Fence Genius to capture grade before a post goes in the ground, so stepped runs on the lake side stay even and forest-edge lots get tight bottoms that deer and small dogs cannot exploit. The fence should look like it belongs on your street — not a catalog panel dropped onto a slope.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Beaver Lake Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Lake-Side View Corridors
                      </h3>
                      <p className="text-muted-foreground">
                        Hogwire and mixed-height cedar keep sightlines to Beaver Lake and Little Beaver Lake while screening the neighbor&apos;s patio. Post heights are planned against the slope so the top rail stays level from the street.
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
                        Full coverage on materials and labor, including hardware chosen for lake-side humidity and forest-edge ground contact. We stand behind the install through Sammamish winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        School-Street Family Yards
                      </h3>
                      <p className="text-muted-foreground">
                        Self-closing gates, no crawl gaps at the bottom, and latch heights that work for households walking to Beaver Lake Middle or Endeavour. Built for after-school backyard use, not just curb appeal.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Forest-Edge Installations
                      </h3>
                      <p className="text-muted-foreground">
                        Hand-digging around mature firs, panels that follow the treeline toward the preserve, and bottoms tight enough that deer pressure does not open a gap. We plan post holes around roots instead of cutting through them.
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
                What Beaver Lake Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot backs toward the preserve and I did not want a solid wall hiding the trees. They ran hogwire along the treeline and cedar on the street sides. The dog stays in and the woods still feel like part of the yard.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Beaver Lake</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We needed a real privacy fence after the kids started walking to middle school. The cedar matches the older houses on our street, the gates latch well, and they were careful around the firs along the side yard.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Elena in Beaver Lake</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Small HOA on our cul-de-sac, nothing like Trossachs paperwork. They still put together a drawing and material list the board signed off on the first pass. Appreciate not having to chase that ourselves.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Jordan in Beaver Lake</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Beaver Lake Sammamish fence" />

        {/* 6. Photo Gallery — nearby Sammamish installs until Beaver Lake-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Sammamish"
          title="Recent Fence Work Near Beaver Lake"
          description="These photos are from nearby Sammamish jobs, including Klahanie just southwest of Beaver Lake. Same crew, same materials, and the same Fence Genius process we use on Beaver Lake lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Sammamish" neighborhood="Beaver Lake" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Beaver Lake–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Beaver Lake Slope and Stepped Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Streets on the downhill side of the plateau fall toward both kettle lakes, so a fence built as one long level line either buries the bottom rail or leaves a gap a small dog can use. We measure grade with Fence Genius, then step or rack panels so the top stays even and the bottom tracks the lawn. On steeper cuts toward E Beaver Lake Drive SE we shorten panel bays rather than forcing a six-foot bay across a drop.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Beaver Lake Moisture and Fastener Choice
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The lakes hold cool air and overnight damp longer than the plateau toward Trossachs. Raw cedar grays fast on the water side, and cheap galvanized nails start showing rust streaks. We spec pre-stained Western Red Cedar and stainless or hot-dipped fasteners, and we talk through steel posts where the soil stays wet at the downhill corners of the lot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Beaver Lake Wildlife and Forest Edges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that back toward Beaver Lake Preserve and Soaring Eagle see regular deer traffic. A privacy wall on that edge often fights the reason people bought the house; hogwire with a cedar frame still contains dogs without boxing in the woods. We keep bottoms tight and avoid leaving a crawl space under the last panel where the grade falls into the trees.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Beaver Lake HOAs, Trees, and City Height Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some cul-de-sacs around the lakes have small architectural committees; many older lakefront streets do not. Trossachs next door is a different set of rules if your parcel sits on that edge. We still follow Sammamish height limits — six feet in most side and rear yards, four feet in the front setback — and we plan post holes around the firs along SE 24th Street and 244th Avenue SE. If your parcel sits in a shoreline or wetland buffer, we flag that before digging rather than after.
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
                Fence Installation Cost in Beaver Lake
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Beaver Lake fence is an investment in a school-area lot and, on the downhill side, a view of the water. Slope, forest-edge hand-digging, and gates move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Stepped runs toward the lakes and hand-digging near mature trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Beaver Lake property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Beaver Lake property</Link>
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
                Popular Fence Styles in Beaver Lake
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior Beaver Lake lots near the middle school. Full screening for after-school play, pre-stained cedar that holds up to Sammamish winters, and a look that fits older lakefront houses as well as newer plateau builds.
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
                    Cedar frame with black mesh for downhill, waterfront, and preserve-edge lots. Dogs stay in, the lake or woods stay in view, and the lighter footprint is easier around roots than a solid privacy wall.
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
                Our Beaver Lake Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Beaver Lake Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note slope toward either lake, map trees, and check whether the parcel sits in a Sammamish shoreline or critical-area overlay. Fence Genius captures grade so panels are built to the actual drop, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Beaver Lake Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your street has a small HOA, we prepare a simple drawing and material list. If you sit on the Trossachs edge, we flag those rules separately. If there is no association, we still document Sammamish height and setback so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Beaver Lake install days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Beaver Lake Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off 244th Avenue SE, SE 24th Street, and SE 32nd Street. Hand-digging near mature roots, stepped posts on the downhill side, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Beaver Lake Fence Installation FAQs"
          items={BEAVER_LAKE_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Sammamish"
        neighborhoodName="Beaver Lake"
        attractions={BEAVER_LAKE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Beaver Lake families are served by the{" "}
              <a
                href="https://www.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah School District
              </a>
              , feeding{" "}
              <a
                href="https://endeavour.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Endeavour Elementary
              </a>
              {" "}on Issaquah-Fall City Road, then{" "}
              <a
                href="https://beaverlake.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Beaver Lake Middle School
              </a>
              {" "}on SE 32nd Street, and later{" "}
              <a
                href="https://skyline.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Skyline High School
              </a>
              . Weekday life is built around that school triangle and a short hop west to the{" "}
              <a
                href="https://kcls.org/locations/sammamish/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sammamish Library
              </a>
              {" "}at the Commons.
            </p>
            <p>
              Groceries and after-practice meals cluster at Klahanie Village rather than requiring a drive into downtown Issaquah — pizza and group tables at{" "}
              <a
                href="https://2468restaurant.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                2-4-6-8 Restaurant
              </a>
              {" "}and Persian-Mediterranean dinners at{" "}
              <a
                href="https://diyarrestaurant.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Diyar
              </a>
              . Weekends split between the lodge lawns and dog park at Beaver Lake Park, forest miles at{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/backcounty-trails/soaring-eagle"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Soaring Eagle Regional Park
              </a>
              , and bike laps at Duthie Hill.{" "}
              <a
                href="https://www.sammamish.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The City of Sammamish
              </a>{" "}
              handles permits and parks; I-90 is a short run south via 228th or Issaquah-Fall City Road when you need Bellevue or Seattle.
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
                We install fences throughout Sammamish. From Beaver Lake we also work in Pine Lake to the west, Klahanie to the southwest, Sahalee, Trossachs, and East Sammamish.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/pine-lake">Pine Lake</Link>
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
                Ready to Enhance Your Beaver Lake Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Beaver Lake. We&apos;ll walk the slope, talk through lake view versus privacy, and quote a fence that fits your Sammamish lot.
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

export default BeaverLakePage;
