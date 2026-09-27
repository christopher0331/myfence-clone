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
  Building2,
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

const CANONICAL = "https://myfence.com/service-areas/renton/downtown-renton";
const META_TITLE =
  "Downtown Renton Fence Installation | Compact City Lots & Cedar River | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Downtown Renton, WA. Cedar, hogwire & hybrid fencing for Williams Avenue lots, civic-core yards, and Cedar River blocks. Free quotes. (253) 455-1885.";

const DOWNTOWN_RENTON_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Downtown Renton?",
    answer:
      "Downtown Renton sits inside City of Renton limits, so Renton Municipal Code 4-4-040 applies. Side- and rear-yard fences six feet or under typically do not need a building permit; a fence taller than six feet does. Front-yard fencing in the required setback is usually limited to four feet, and corner lots on Williams Avenue S, S 2nd Street, Bronson Way, and Houser Way S must keep sight triangles clear. Mixed-use parcels around the Piazza, the Pavilion, and Legacy Square sometimes carry a design-review packet even when City Hall does not ask for a permit. MyFence.com checks the parcel zone and any plat or association rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Downtown Renton's compact lots and river-adjacent yards?",
    answer:
      "Six-foot cedar privacy is the usual choice on alley lots and shared side yards off Williams Avenue S, Wells Avenue S, and Garden Avenue N, where the neighbor's patio sits close enough that a shorter screen still reads the second floor. Lots that face Rainier Avenue S or I-405 often want a solid street face for traffic noise, then a lighter hogwire stretch toward the Cedar River Trail or Liberty Park so the path stays in view. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain after every wet valley winter. Fence Genius maps short bays and alley gates so panels fit without blocking the only walk to Mill Avenue or S 3rd.",
  },
  {
    question: "How much does fence installation cost in Downtown Renton?",
    answer:
      "Downtown Renton fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $40–$58 for hogwire with a cedar frame, and $55–$78 for hybrid aluminum/cedar. Tight alley access off Williams or Burnett, extra gates on townhome courts, and hand-digging near older trees on Garden Avenue can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Downtown Renton?",
    answer:
      "Most Downtown Renton residential and townhome projects finish in one to three working days after any city or association paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from hand-carrying materials down an alley off S 2nd or S 3rd, parking around Renton High School pickup, or matching an existing neighbor height on a six-foot side yard. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Downtown Renton?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Renton does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Downtown mixes older pins on Garden Avenue and Logan Avenue with later townhome courts near The Landing and the civic core, so confirming the line before digging saves a redo on a short side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const DOWNTOWN_RENTON_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Liberty Park",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "The civic park at 1101 Bronson Way N — skate park, ball fields, and the weekend lawn between the river and S 3rd. Lots that face this green usually want a fence that holds pets without walling off the path to the pavilion.",
  },
  {
    name: "Piazza Park & Renton Market",
    url: "https://www.rentonwa.gov/Projects-Development/Public-Works-Projects/Current-Projects-and-Programs/Renton-Market-and-Piazza",
    description:
      "The HEART Block plaza at 233 Burnett Avenue S, next to the Pavilion and Legacy Square. Market days and evening events fill Burnett and Wells; we stage material drops so a trailer is not sitting in that curb lane.",
  },
  {
    name: "Renton History Museum",
    url: "https://www.rentonwa.gov/Activities-Events/Museum",
    description:
      "The 1942 firehouse at 235 Mill Avenue S, a short walk from the library and the river. Downtown lots on Mill and Main sit in the same historic grid — we keep equipment off the small front lot that visitors use.",
  },
  {
    name: "Cedar River Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/cedar-river",
    description:
      "The paved corridor from Lake Washington up the river through downtown. Yards that back this path often keep a hogwire stretch so the water and the commuters stay in view instead of disappearing behind a solid wall.",
  },
  {
    name: "Renton Library",
    url: "https://kcls.org/locations/renton/",
    description:
      "The King County Library System branch at 100 Mill Avenue S, on the river side of the civic core. After-school homework traffic fills Mill; fence jobs on that block get timed so the library curb is not the problem.",
  },
];

const DowntownRentonPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Downtown Renton, Renton",
    pageTitle: "Downtown Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: DOWNTOWN_RENTON_FAQS,
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
                    Serving Downtown Renton, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Downtown Renton Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on alley lots, hogwire that keeps the Cedar River Trail in view, and hybrid systems built for Rainier Avenue traffic and the compact yards around Liberty Park.
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
                  city="Downtown Renton, Renton"
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
                Fencing the Civic Core Along the Cedar River
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Downtown Renton is the valley-floor grid at the south tip of Lake Washington, west of I-405 and south of Kennydale. Williams Avenue S, Wells Avenue S, Burnett Avenue S, and Garden Avenue N run the historic Main Street blocks; S 2nd and S 3rd carry Renton High School traffic; Bronson Way and Houser Way S follow the river toward Liberty Park. Older bungalows sit a few streets off the civic core while newer townhome courts fill infill parcels toward The Landing. Yards here are shorter than a Highlands side yard and wetter than a Fairwood lot. The design conversation starts with how close the neighbor sits, whether the street face should mute Rainier Avenue, and whether the river side should stay open.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Renton, including compact-lot work downtown and neighboring Kennydale and Sunset. We use Fence Genius to capture tight alley widths, grade changes toward the Cedar River, and the true length of a Garden Avenue run before a post goes in the ground. The goal is a fence that belongs on a civic-core lot — not a long suburban kit squeezed onto a six-foot side yard that also happens to sit next to a library parking lane.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Downtown Renton Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Alley Lots, Measured First
                      </h3>
                      <p className="text-muted-foreground">
                        Townhome courts and bungalow side yards off Williams and Wells leave little room for a misplaced post. Fence Genius records the alley, the meter, and the neighbor fence so a gate still opens after the panels go up.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Rainier Avenue and I-405 Noise
                      </h3>
                      <p className="text-muted-foreground">
                        Rainier Avenue S, SR-167, and the freeway sit close enough that a solid cedar street face is often the first request. We keep the river-facing stretch lighter when you still want to see the trail and Liberty Park.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Valley-Floor Moisture
                      </h3>
                      <p className="text-muted-foreground">
                        The Cedar River and the low civic core hold more winter water than a Highlands lot. We keep soil off the first board, choose hardware that holds up in that damp slot, and avoid burying the low rail where two roofs drain together.
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
                        Full coverage on materials and labor, including hardware chosen for wet valley yards and boulevard wind. We stand behind the install through south King County winters.
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
                What Downtown Renton Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit one block off Rainier and wanted a quieter backyard without boxing the river path. Full cedar on the street side, hogwire toward Houser Way. They finished around library hours so Mill Avenue stayed open.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Diego in Downtown Renton</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our Garden Avenue side yard is barely wide enough for a wheelbarrow. They measured twice, kept the gate off the only walkway, and the cedar still matches the neighbor height on S 3rd.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Lena in Downtown Renton</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;The last fence sat in a puddle all winter next to the river. They lifted the bottom board and used hybrid on the wet corner. The walkthrough checked every latch before they left.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Downtown Renton</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Downtown Renton fence" />

        {/* 6. Photo Gallery — nearby Renton installs until downtown-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Renton"
          title="Recent Fence Work Near Downtown Renton"
          description="These photos are from nearby Renton jobs, including Kennydale, Sunset, Cascade, and Fairwood. Same crew, same materials, and the same Fence Genius process we use on downtown lots along Williams Avenue S, Garden Avenue N, and the Cedar River."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Renton" neighborhood="Downtown Renton" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Downtown Renton Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Downtown Renton cedar-and-hogwire run sits on a small lot off Williams Avenue S or Garden Avenue N, close enough to the Cedar River Trail that a solid downhill wall would erase the reason the house faces the water. The job is usually two fences in one: full-height cedar on the Rainier and neighbor sides, then a lighter hogwire stretch toward the path so the living room still reads the trees. Fence Genius maps the tight alley so panels fit without blocking the walk to Mill Avenue, and we set footings so winter runoff between two roofs does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable downtown yards run 70–150 linear feet and wrap in one to three working days after any city or association paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the street face, the wet corner, and the river side are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Downtown Renton–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Compact Lots and Alley Staging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Infill around the civic core produced townhome courts and leftover bungalow lots whose side yards are measured in feet, not tens of feet. A panel that works on a Fairwood acre lot will not swing a gate here. We measure the alley, the utility meters, and the neighbor fence first, then build panels that leave a usable path to Williams, Wells, and S 3rd.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Rainier Avenue Traffic and I-405 Noise
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rainier Avenue S is the old highway spine, I-405 sits on the east edge, and Boeing and Southport add weekday truck traffic. Lots that face those corridors usually want a solid cedar street face. Walling every side in the same height is the most common regret we hear when the river path or Liberty Park walk was the reason someone bought the lot. Mixed styles — solid on the noisy face, open toward the trail — are the usual fix.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Cedar River Moisture on the Valley Floor
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Downtown sits lower than Sunset or the Highlands, and the Cedar River keeps winter soil wetter for longer. Two roofs and a short side yard dump a surprising amount of water into one strip. A flat-lot crew will bury the low rail or leave cedar sitting in that puddle all winter. We keep soil off the first board, use hardware that holds up in the damp slot, and talk through whether the wet corner should be hybrid instead of a second round of stain.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    School, Market, and Civic-Core Staging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Renton High School pickup on S 2nd, library hours on Mill Avenue, and market days on the Piazza set the weekday pattern. Newer courts sometimes have architectural review even when the city does not ask for a permit; older streets on Garden and Logan often do not. We stage compact equipment so we are not blocking a queue, and we plan material drops away from the high-school lot when that block is already full.
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
                Fence Installation Cost in Downtown Renton
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A downtown fence is often a short, mixed-style run: a quieter face on Rainier plus an open stretch toward the river. Access, gates, and wet corners move the number. These are typical ranges; your on-site measurement is the real quote.
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
                      $40–$58 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $55–$78 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Tear-out of an existing fence, extra gates on a townhome court, and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Downtown Renton property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Downtown Renton property</Link>
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
                Popular Fence Styles in Downtown Renton
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides and Rainier street faces. Full height for two-story townhomes, pre-stained cedar that holds up in a wet side yard, and a look that fits both older bungalows and later courts.
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
                    Cedar frame with black mesh for lots that still want the Cedar River Trail in the room. Dogs stay in, the lighter footprint takes less wind than a solid wall, and the path does not disappear after a replacement.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a wet river-side corner has already eaten one fence. Strong enough for family yards without looking commercial on Mill Avenue or Williams.
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
                Our Downtown Renton Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Downtown Renton Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the tight side yards, note the Rainier-facing stretch, map utilities, and check whether a river-facing run should stay more open. Fence Genius captures length, grade, and the neighbor fence so panels are built to the actual yard, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Downtown Renton Design & City Review
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document City of Renton rules under RMC 4-4-040 plus any association packet on the newer courts. Corner-lot sight triangles on Williams Avenue S, S 2nd Street, Bronson Way, and Houser Way S get marked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so downtown install days are mostly setting posts and hanging finished sections that already match the tight side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Downtown Renton Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off Williams, Garden, Mill, and S 3rd. Drainage-aware hardware on the wet corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Downtown Renton Fence Installation FAQs"
          items={DOWNTOWN_RENTON_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Renton"
        neighborhoodName="Downtown Renton"
        attractions={DOWNTOWN_RENTON_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Downtown Renton households sit in the{" "}
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
                href="https://rentonhs.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton High School
              </a>{" "}
              is on S 2nd Street in the civic core, so weekday traffic on S 2nd and Bronson is part of how we schedule a crew. Elementary assignment changes by block — use the district{" "}
              <a
                href="https://www.rentonschools.us/learning-and-teaching/registration/school-boundary-map"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                school boundary map
              </a>{" "}
              to confirm the campus. After school, many families walk to the{" "}
              <a
                href="https://kcls.org/locations/renton/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton Library
              </a>{" "}
              on Mill Avenue or down to Liberty Park.
            </p>
            <p>
              Evening and weekend life clusters around the{" "}
              <a
                href="https://www.rentondowntown.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton Downtown Partnership
              </a>{" "}
              calendar, the Piazza market, and a short hop across I-405 to{" "}
              <a
                href="https://www.shopthelandinginrenton.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The Landing
              </a>
              . Rec programs and the pool sit at the{" "}
              <a
                href="https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton Community Center
              </a>{" "}
              on Maple Valley Highway, next to Cedar River Park. For fence height and permit questions, start with{" "}
              <a
                href="https://www.rentonwa.gov/City-Services/Permit-Services"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                City of Renton Permit Services
              </a>
              {" or "}
              <a
                href="https://www.codepublishing.com/WA/Renton/html/Renton04/Renton0404/Renton0404040.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton fence code 4-4-040
              </a>
              . I-405, Rainier Avenue, and SR-167 put Bellevue, Seattle, and Sea-Tac within a short drive — which is why so many downtown lots want a fence that works as hard as the commute.
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
                We install fences throughout Renton. From downtown we also work in Kennydale toward the lake, Sunset and Renton Highlands up the hill, Cascade toward the valley, and Fairwood to the south.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/kennydale">Kennydale</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/sunset">Sunset</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/renton-highlands">Renton Highlands</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/cascade">Cascade</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/fairwood">Fairwood</Link>
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
                Ready to Enhance Your Downtown Renton Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Downtown Renton. We&apos;ll walk the lot, talk through a Rainier street face vs. a river-side stretch, and quote a fence that fits your property.
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

export default DowntownRentonPage;
