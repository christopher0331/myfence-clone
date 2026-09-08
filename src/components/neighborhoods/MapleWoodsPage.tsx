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
  Layers,
  TreePine,
  Eye,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/maple-valley/maple-woods";
const META_TITLE =
  "Maple Woods Fence Installation | Maple Valley | MyFence.com";
const META_DESCRIPTION =
  "Cedar shadow box fence installation in Maple Woods, Maple Valley. Both-sides-finished privacy fencing built for tight residential lots. Free quotes. (253) 455-1885.";

const MAPLE_WOODS_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Lake Wilderness Park",
    url: "https://www.maplevalleywa.gov/departments/parks-recreation/parks-facilities/lake-wilderness-park",
    description:
      "The largest community park in Maple Valley, less than ten minutes from Maple Woods. Lake access, a splash pad, picnic shelters, and miles of connected walking trails make it the year-round hub for nearby residential neighborhoods.",
  },
  {
    name: "Cedar River Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation-open-space/king-county-parks/trails/cedar-river-trail",
    description:
      "A paved, multi-use trail running along the Cedar River corridor from Renton to Maple Valley. Maple Woods residents pick it up via the local trail network for daily walks, weekend bike rides, and connections into the broader King County trail system.",
  },
  {
    name: "Lake Wilderness Arboretum",
    url: "https://lakewildernessarboretum.org/",
    description:
      "A 42-acre botanical sanctuary on the south shore of Lake Wilderness, featuring native conifers, ornamental gardens, and quiet pathways. A short drive from Maple Woods and a popular spring and summer destination for Tahoma-area families.",
  },
  {
    name: "Rock Creek Sports Complex",
    url: "https://www.maplevalleywa.gov/",
    description:
      "Community athletic fields used by Tahoma-area youth sports and adult leagues. Maple Woods families with school-age kids spend a meaningful share of their weekends here from spring through fall.",
  },
  {
    name: "Four Corners Commercial District",
    url: "https://maplevalleychamber.org/",
    description:
      "The intersection at the heart of daily Maple Valley life — grocery, coffee, restaurants, and services for Maple Woods residents who'd rather not drive to Renton or Covington for the basics.",
  },
];

const MapleWoodsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Maple Woods, Maple Valley",
    pageTitle: "Maple Woods Maple Valley Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question:
          "What is a shadow box fence and why is it popular in Maple Woods?",
        answer:
          "A shadow box fence alternates vertical boards on opposite sides of the horizontal rails — so each face of the fence looks identical and finished. It's a popular choice in Maple Woods because the design eliminates the typical 'good side / bad side' problem on shared property lines, allows airflow between panels (helpful on tight lots), and reads as a higher-quality installation from both your yard and your neighbor's. MyFence.com builds cedar shadow box fences with pre-stained boards and proper rail spacing for clean visual rhythm.",
      },
      {
        question:
          "Do I need a permit to install a fence in Maple Woods, Maple Valley?",
        answer:
          "Maple Woods sits within Maple Valley city limits, which generally follow King County's residential fence rules. Fences six feet or under in side and rear yards typically do not require a building permit, while front-yard fencing is usually capped at four feet. Critical area buffers and corner-lot sight-distance rules still apply. MyFence.com confirms the requirements for your specific parcel before any design work begins, so your installation is compliant on day one.",
      },
      {
        question:
          "How much does a cedar shadow box fence cost in Maple Woods?",
        answer:
          "Cedar shadow box fence installations in Maple Woods typically range from $44–$64 per linear foot for a six-foot fence. Shadow box uses slightly more cedar than a comparable solid-board fence because boards alternate on both sides of the rail, which adds material cost but produces the finished-both-sides appearance. Custom gates, longer runs, and difficult access between homes affect the exact quote. Get a free on-site estimate for your Maple Woods property.",
      },
      {
        question: "How long does a fence install take in Maple Woods?",
        answer:
          "Most Maple Woods fence projects complete in one to three working days once permits and HOA approvals are in hand. Pre-fabricated panels and pre-staged cedar mean very little site time is spent on layout or cutting. Tight side-yard access between homes is the most common factor that adds half a day. We confirm the schedule with you in advance and protect landscaping and existing structures throughout the install.",
      },
    ],
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
              href="/service-areas/maple-valley"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Maple Valley
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Maple Woods, Maple Valley WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Maple Woods Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar shadow box and privacy fence specialists for Maple
                  Woods. Both-sides-finished panels built for tight lots,
                  shared property lines, and the kind of neighbor-friendly
                  installation Maple Valley homeowners expect.
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
                  city="Maple Valley"
                  state="WA"
                  radiusMiles={4}
                  zoom={12}
                  showBusinessInfo={false}
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
                Shadow Box Cedar Fencing for Maple Woods Homes
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Maple Woods is a quiet residential neighborhood tucked into
                Maple Valley&apos;s wooded plateau, with the kind of moderately
                sized lots and close-set houses where a fence is as much
                about neighbor relations as it is about privacy. The shadow
                box style — alternating cedar boards on opposite sides of
                the horizontal rails — has become a popular choice in the
                neighborhood because it eliminates the awkward
                &ldquo;good side / bad side&rdquo; conversation entirely.
                Both faces of the fence look identical, finished, and
                intentional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar shadow box fencing
                throughout Maple Woods, including tight side-yard runs
                between homes where access and material handling matter
                just as much as the finished look. Our Fence Genius
                measuring process captures your property line precisely so
                panels are manufactured to fit the run, and our crews stage
                materials in a way that protects landscaping and
                hardscape on both sides of the boundary.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Maple Woods Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Layers className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Shadow Box Specialists
                      </h3>
                      <p className="text-muted-foreground">
                        Alternating board layouts require precise rail
                        spacing and consistent board reveal to look right.
                        We build shadow box fences as a standard catalog
                        item, not a one-off — your panels arrive on site
                        already squared and ready to install.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Identical Both Sides
                      </h3>
                      <p className="text-muted-foreground">
                        No &ldquo;good side&rdquo; debate with your
                        neighbor. Shadow box panels look the same from
                        either yard, which usually shortens the
                        conversation about where the rails should face and
                        who pays for what.
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
                        Full coverage on materials and labor, including
                        the Pacific Northwest wet-season cycle that
                        stresses fasteners and rail joints. Maple Woods
                        installations are backed for the long haul.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Tight-Lot Experience
                      </h3>
                      <p className="text-muted-foreground">
                        Many Maple Woods runs are between closely spaced
                        homes. We&apos;ve worked these conditions enough
                        to plan panel staging, post placement, and
                        landscaping protection so the install moves fast
                        without scuffing your yard.
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
                What Maple Woods Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We wanted a fence that looked nice on our
                    neighbor&apos;s side too, and the shadow box style was
                    exactly the right call. The crew was in and out in two
                    days, and we&apos;ve had compliments from both
                    directions. Pre-stained cedar made the finish look
                    professional from day one.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Jess in Maple Woods</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our side-yard run between houses was narrow and
                    I was worried about the install scuffing up our siding
                    or our neighbor&apos;s. The MyFence team protected
                    everything and got the panels in cleanly. The custom
                    gate matches the rest of the fence
                    perfectly.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Brian in Maple Woods</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Maple Woods Maple Valley fence" />

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery city="Maple Valley" neighborhood="Maple Woods" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Maple Valley" neighborhood="Maple Woods" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Maple Woods Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Shared Property Lines and Neighbor Aesthetics
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maple Woods lots tend to share long property-line
                    runs with the neighbors on either side, which is
                    exactly the situation the shadow box style was
                    designed for. With boards alternating on both sides of
                    the rail, each yard sees the same finished face —
                    there&apos;s no &ldquo;framework&rdquo; side. That
                    tends to defuse the conversation about who&apos;s
                    paying, whose &ldquo;side&rdquo; the rails face, and
                    how the fence reads from the neighboring patio.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Tight Side-Yard Access
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Side-yard runs between homes are common in Maple
                    Woods, and they&apos;re often narrow enough that
                    handling full-length pre-fab panels requires
                    planning. We measure widths first, choose panel
                    breakdowns that fit the access, and stage material
                    in a way that avoids dragging cedar across landscaping
                    on either side of the line. Post placement is
                    confirmed with both property surveys and Fence Genius
                    measurements before any digging starts.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Pacific Northwest Moisture and Pre-Stained Cedar
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maple Valley sits in the Cascade foothills and gets
                    over 50 inches of rain in an average year. Standard
                    raw cedar grays out quickly under that kind of
                    moisture load, and exposed end grain is where decay
                    starts first. Our Maple Woods shadow box installs
                    use pre-stained cedar so the finish is fully sealed
                    before panels ever go in the ground, with stainless
                    or hot-dipped fasteners that won&apos;t bleed rust
                    streaks down the boards over time.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Custom Gates That Match the Run
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most Maple Woods projects include at least one custom
                    gate — typically a side-yard access gate or a back
                    patio gate. We build gates from the same shadow box
                    pattern as the rest of the fence so the transition
                    visually disappears. Heavy-duty hinges, drop rods
                    where needed, and adjustable latches account for
                    seasonal swelling and contraction of the cedar.
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
                Fence Installation Cost in Maple Woods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Below are typical ranges for Maple Woods installations.
                Exact pricing depends on linear footage, gate count,
                side-yard access, and any landscaping or hardscape that
                needs protection during the install.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">
                        Cedar shadow box (6&apos;):
                      </strong>{" "}
                      $44–$64 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">
                        Cedar privacy (6&apos;):
                      </strong>{" "}
                      $38–$58 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">
                        Hogwire (cedar frame):
                      </strong>{" "}
                      $35–$52 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">
                        Hybrid aluminum/cedar:
                      </strong>{" "}
                      $50–$70 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Shadow box runs slightly higher than solid board on a
                  per-foot basis because boards alternate on both sides
                  of the rail — you&apos;re paying for the
                  finished-both-sides appearance. Custom gates are
                  itemized separately. Get an exact quote for your Maple
                  Woods property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Maple Woods property
                  </Link>
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
                Popular Fence Styles in Maple Woods
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Shadow Box Cedar Fence
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The signature style of Maple Woods. Alternating
                    cedar boards on both sides of the horizontal rails
                    produce a fence that looks identical from either
                    yard, with subtle airflow between boards. The most
                    neighbor-friendly privacy option we offer.
                  </p>
                  <Link
                    href="/fence-styles/shadow-box-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View shadow box style &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Cedar Privacy Fence
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A more economical alternative when both sides
                    looking identical isn&apos;t critical. Boards on a
                    single face create a solid privacy wall, ideal for
                    yards where the fence backs onto a greenbelt or
                    common space rather than a neighbor&apos;s yard.
                  </p>
                  <Link
                    href="/fence-styles/picture-frame-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View privacy styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Hybrid Aluminum/Cedar
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Steel posts with aluminum panels in a cedar frame.
                    Zero staining and zero ground-contact wood, so
                    nothing rots at the base. A premium long-term
                    option for Maple Woods homeowners who want the
                    cedar look without the upkeep.
                  </p>
                  <Link
                    href="/fence-styles/cedar-steel-hybrid-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View hybrid system &rarr;
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
                Our Maple Woods Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Maple Woods Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk your property, measure the run, confirm
                    side-yard access widths, and identify landscaping
                    that needs protection. Fence Genius captures
                    precise data so panel manufacturing matches the run
                    exactly.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Design, Permits, and Neighbor Coordination
                  </h3>
                  <p className="text-muted-foreground">
                    We finalize the shadow box layout, board reveal,
                    gate placement, and any Maple Valley / King County
                    permitting required for your parcel. If your run
                    borders a neighbor, we can help frame the
                    conversation about cost sharing and timing.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Pre-Fab Cedar Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Shadow box panels are built and pre-stained at our
                    facility — boards alternated, rails squared, and
                    finish cured before anything ships to site. This
                    keeps Maple Woods install days short and prevents
                    moisture from getting into raw cedar ends.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Maple Woods Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews arrive with finished panels, set posts in
                    concrete with proper drainage, and align everything
                    against the property line and existing structures.
                    Most Maple Woods projects complete in one to three
                    working days depending on linear footage and gate
                    count.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty
                  </h3>
                  <p className="text-muted-foreground">
                    Final walkthrough with you reviewing every panel,
                    post, and gate. Full {WARRANTY_CONSTANTS.YEARS}-year
                    workmanship warranty activated on project completion.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 13. About the Area — rendered outside main below */}
      </main>

      <AboutTheArea
        cityName="Maple Valley"
        neighborhoodName="Maple Woods"
        attractions={MAPLE_WOODS_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Maple Woods families are served by the{" "}
              <a
                href="https://www.tahomasd.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Tahoma School District
              </a>
              , one of the highest-rated districts in south King County.
              Day-to-day errands sit within a short drive of the{" "}
              <a
                href="https://www.fredmeyer.com/stores/details/726/maple-valley"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fred Meyer at Four Corners
              </a>{" "}
              and the surrounding{" "}
              <a
                href="https://maplevalleychamber.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Maple Valley commercial corridor
              </a>
              , and weekends often gravitate to{" "}
              <a
                href="https://www.maplevalleywa.gov/departments/parks-recreation/parks-facilities/lake-wilderness-park"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Wilderness Park
              </a>{" "}
              or the{" "}
              <a
                href="https://lakewildernessarboretum.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Wilderness Arboretum
              </a>
              .
            </p>
            <p>
              Maple Woods&apos; position just off{" "}
              <a
                href="https://wsdot.wa.gov/travel/highways/sr169"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                SR-169 (Maple Valley Highway)
              </a>{" "}
              keeps commutes manageable in both directions — Renton and
              I-405 are roughly twenty minutes north, while{" "}
              <a
                href="https://wsdot.wa.gov/travel/highways/sr18"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                SR-18
              </a>{" "}
              provides quick access toward Auburn and Federal Way to the
              south. The neighborhood&apos;s relatively quiet residential
              streets, owner-occupied homes, and proximity to Tahoma-feeder
              schools tend to produce long-tenured households that invest
              in lasting improvements like quality cedar fencing.
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
                Also Serving Nearby Maple Valley Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Maple Valley. If you&apos;re
                in Maple Woods, we also work in Lake Park, Patrick&apos;s
                Faire, Barklay Woods, Elk Run, and Cherokee Bay Park.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley">
                    Maple Valley overview
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/lake-park">
                    Lake Park
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/patricks-faire">
                    Patrick&apos;s Faire
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/barklay-woods">
                    Barklay Woods
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/elk-run">
                    Elk Run
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
                Ready to Fence Your Maple Woods Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Maple Woods. We&apos;ll
                measure your run, walk through the shadow box vs.
                privacy decision, and recommend the right approach for
                your lot.
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

export default MapleWoodsPage;
