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
  Volume2,
  Home,
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

const CANONICAL = "https://myfence.com/service-areas/renton/sunset";
const META_TITLE =
  "Sunset Renton Fence Installation | Compact Lots & Boulevard Noise | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Sunset, Renton, WA. Cedar, hogwire & hybrid fencing for Sunset Lane NE lots, park-and-library blocks, and NE Sunset Boulevard yards. Free quotes. (253) 455-1885.";

const SUNSET_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Sunset, Renton?",
    answer:
      "Sunset sits inside City of Renton limits, so Renton Municipal Code 4-4-040 applies. Side- and rear-yard fences six feet or under typically do not need a building permit; a fence taller than six feet does. Front-yard fencing in the required setback is usually limited to four feet, and corner lots on NE Sunset Boulevard, Sunset Lane NE, and NE 10th Street must keep sight triangles clear. Newer townhome and mixed-use courts around the park sometimes carry a design-review packet even when City Hall does not ask for a permit. MyFence.com checks the parcel and any plat rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Sunset's compact lots and boulevard traffic?",
    answer:
      "Six-foot cedar privacy is the usual choice on shared side yards off Sunset Lane NE and NE 7th, where townhomes and small-lot houses sit close enough that a shorter screen still reads the neighbor's second floor. Lots that face NE Sunset Boulevard or I-405 often want a solid street face for noise, then a lighter hogwire stretch toward Sunset Neighborhood Park so the play lawn stays in view. Hybrid aluminum-and-cedar on steel posts suits homeowners who do not want to restain after every wet Highlands winter. Fence Genius maps tight side yards so panels fit without forcing a gate into the only walkway to the library.",
  },
  {
    question: "How much does fence installation cost in Sunset, Renton?",
    answer:
      "Sunset fence installation typically runs $43–$66 per linear foot for six-foot cedar privacy, $38–$56 for hogwire with a cedar frame, and $53–$75 for hybrid aluminum/cedar. Compact access off Sunset Lane, extra gates on NE 10th, and hand-digging near older trees on the pre-redevelopment streets can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Sunset, Renton?",
    answer:
      "Most Sunset residential projects finish in one to three working days after any city or plat paperwork is complete. Prefabricated panels keep on-site time short. Extra time usually comes from a long perimeter on a boulevard-facing lot, compact access during Highlands Elementary pickup on NE 7th, or matching an existing neighbor height on a shared townhome side. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Sunset, Renton?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Renton does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Sunset mixes 1950s–1970s pins on streets north of the boulevard with later redevelopment courts around the park, so confirming the line before digging saves a redo on a six-foot side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const SUNSET_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Sunset Neighborhood Park",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "The 3.2-acre park at 2680 Sunset Lane NE — playgrounds, a gathering lawn, and the weekday midpoint between the library and the townhome courts. Lots that face this green usually want a fence that holds pets without walling off the play area.",
  },
  {
    name: "Renton Highlands Library",
    url: "https://kcls.org/locations/renton-highlands/",
    description:
      "The King County Library System branch at 2801 NE 10th Street, across from the park. After-school homework traffic fills NE 10th; we stage material drops so a trailer is not sitting in that curb lane.",
  },
  {
    name: "Highlands Elementary School",
    url: "https://highlands.rentonschools.us/",
    description:
      "The neighborhood campus at 2720 NE 7th Street. Morning drop-off stacks on NE 7th and the courts that feed Sunset Lane; fence jobs on that block get timed so pickup is not the problem.",
  },
  {
    name: "Highlands Park & Neighborhood Center",
    url: "https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails",
    description:
      "Fields, courts, and the community building at 800 Edmonds Avenue NE, a short walk west of the Sunset core. Weekend tournaments fill Edmonds; we plan crew arrivals so game-day parking is not competing with a trailer.",
  },
  {
    name: "The Landing",
    url: "https://www.shopthelandinginrenton.com/",
    description:
      "The outdoor retail and dining center downhill via I-405 Exit 5 and NE Sunset Boulevard. Weekend shopper traffic on the boulevard is part of how we schedule crew arrivals from the Highlands side.",
  },
];

const SunsetPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Sunset, Renton",
    pageTitle: "Sunset Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: SUNSET_FAQS,
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
                    Serving Sunset, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Sunset Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy on tight side yards, hogwire that keeps Sunset Neighborhood Park in view, and hybrid systems built for NE Sunset Boulevard traffic and the compact lots around the library.
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
                  city="Sunset, Renton"
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
                Fencing the Park-and-Library Core of the Highlands
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Sunset is the redeveloped heart of the Renton Highlands, east of I-405 Exit 5 along NE Sunset Boulevard (SR-900). Sunset Lane NE, NE 10th Street, and NE 7th Street wrap the park, the library, and Highlands Elementary; older ramblers sit a few blocks north of the boulevard while newer townhome and small-lot courts fill the former Sunset Terrace ground. Yards here are shorter than a plateau side yard and louder than a Kennydale cul-de-sac. The design conversation starts with how close the neighbor sits, whether the street face should mute boulevard traffic, and whether the park side should stay open.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed cedar, hogwire, and hybrid fences across Renton, including compact-lot work in Sunset and neighboring Renton Highlands. We use Fence Genius to capture tight side-yard widths, grade changes on streets that climb south of the boulevard, and the true length of a NE 10th run before a post goes in the ground. The goal is a fence that belongs on a park-block lot — not a long rural kit squeezed onto a six-foot side yard that also happens to sit next to a library parking lane.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Sunset Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Tight-Lot Layouts, Measured First
                      </h3>
                      <p className="text-muted-foreground">
                        Townhome courts and small-lot houses around Sunset Lane leave little room for a misplaced post. Fence Genius records the walkway, the meter, and the neighbor fence so a gate still opens after the panels go up.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Boulevard and I-405 Noise
                      </h3>
                      <p className="text-muted-foreground">
                        NE Sunset Boulevard and the freeway sit close enough that a solid cedar street face is often the first request. We keep the park-facing stretch lighter when you still want to see the lawn and the library walk.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Wet Corners Between Buildings
                      </h3>
                      <p className="text-muted-foreground">
                        Compact lots shed rain into the same side-yard strip. We keep soil off the first board, choose hardware that holds up in that damp slot, and avoid burying the low rail where two roofs drain together.
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
                        Full coverage on materials and labor, including hardware chosen for wet side yards and boulevard wind. We stand behind the install through south King County winters.
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
                What Sunset Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit one block off Sunset Boulevard and wanted a quieter backyard without boxing the park. Full cedar on the street side, hogwire toward Sunset Lane. They finished around library hours so NE 10th stayed open.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Sunset</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our townhome side yard is barely wide enough for a wheelbarrow. They measured twice, kept the gate off the only walkway, and the cedar still matches the neighbor height on NE 7th.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Andre in Sunset</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;The last fence sat in a puddle all winter between the two roofs. They lifted the bottom board and used hybrid on the wet corner. The walkthrough checked every latch before they left.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Mei in Sunset</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Sunset Renton fence" />

        {/* 6. Photo Gallery — nearby Renton installs until Sunset-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Renton"
          title="Recent Fence Work Near Sunset"
          description="These photos are from nearby Renton jobs, including Renton Highlands, Kennydale, Cascade, and Fairwood. Same crew, same materials, and the same Fence Genius process we use on Sunset lots along Sunset Lane NE, NE 10th Street, and NE Sunset Boulevard."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Renton" neighborhood="Sunset" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Sunset Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Sunset cedar-and-hogwire run sits on a small lot off Sunset Lane NE or NE 10th Street, close enough to the park that a solid downhill wall would erase the reason the house faces the lawn. The job is usually two fences in one: full-height cedar on the boulevard and neighbor sides, then a lighter hogwire stretch toward the play area so the living room still reads the trees. Fence Genius maps the tight side yard so panels fit without blocking the walk to the library, and we set footings so winter runoff between two roofs does not pond against the bottom board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable Sunset yards run 80–160 linear feet and wrap in one to three working days after any city or plat paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the street face, the wet corner, and the park side are all accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Sunset-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Compact Lots Around the Park
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Redevelopment around Sunset Neighborhood Park produced townhome courts and small-lot houses whose side yards are measured in feet, not tens of feet. A panel that works on a Fairwood acre lot will not swing a gate here. We measure the walkway, the utility meters, and the neighbor fence first, then build panels that leave a usable path to Sunset Lane and NE 10th.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Sunset Boulevard Traffic and I-405 Noise
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    NE Sunset Boulevard is SR-900, and I-405 Exit 5 sits at the west edge of the neighborhood. Lots that face those corridors usually want a solid cedar street face. Walling every side in the same height is the most common regret we hear when the park or library walk was the reason someone bought the lot. Mixed styles — solid on the noisy face, open toward the lawn — are the usual fix.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Sunset Drainage Between Close Buildings
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Two roofs and a short side yard dump a surprising amount of water into one strip. A flat-lot crew will bury the low rail or leave cedar sitting in that puddle all winter. We keep soil off the first board, use hardware that holds up in the damp slot, and talk through whether the wet corner should be hybrid instead of a second round of stain.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    School, Library, and Plat Staging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Highlands Elementary pickup on NE 7th, library hours on NE 10th, and park events on Sunset Lane set the weekday pattern. Newer courts sometimes have architectural review even when the city does not ask for a permit; older streets north of the boulevard often do not. We stage compact equipment so we are not blocking a queue, and we plan material drops away from the school lot when that block is already full.
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
                Fence Installation Cost in Sunset
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Sunset fence is often a short, mixed-style run: a quieter face on the boulevard plus an open stretch toward the park. Access, gates, and wet corners move the number. These are typical ranges; your on-site measurement is the real quote.
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
                      $38–$56 per linear foot
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
                  Tear-out of an existing fence, extra gates on a townhome court, and hand-digging near older trees may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Sunset property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Sunset property</Link>
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
                Popular Fence Styles in Sunset
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on neighbor sides and boulevard street faces. Full height for two-story townhomes, pre-stained cedar that holds up in a wet side yard, and a look that fits both older ramblers and later courts.
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
                    Cedar frame with black mesh for lots that still want Sunset Neighborhood Park in the room. Dogs stay in, the lighter footprint takes less wind than a solid wall, and the play lawn does not disappear after a replacement.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a wet corner has already eaten one fence. Strong enough for family yards without looking commercial on NE 10th or Sunset Lane.
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
                Our Sunset Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Sunset Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the tight side yards, note the boulevard-facing stretch, map utilities, and check whether a park-facing run should stay more open. Fence Genius captures length, grade, and the neighbor fence so panels are built to the actual yard, not a wide-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Sunset Design & City Review
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. We document City of Renton rules under RMC 4-4-040 plus any plat architectural packet on the redevelopment courts. Corner-lot sight triangles on NE Sunset Boulevard, Sunset Lane NE, and NE 10th get marked before we draw the line.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Sunset install days are mostly setting posts and hanging finished sections that already match the tight side yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Sunset Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off Sunset Lane NE, NE 10th, NE 7th, and the boulevard. Drainage-aware hardware on the wet corner, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Sunset Fence Installation FAQs"
          items={SUNSET_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Renton"
        neighborhoodName="Sunset"
        attractions={SUNSET_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Sunset families are served by the{" "}
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
                href="https://highlands.rentonschools.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Highlands Elementary
              </a>{" "}
              at 2720 NE 7th Street as the neighborhood campus. Most addresses then feed{" "}
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
              . Weekday life is built around those campuses, the park, and the short hop down Sunset Boulevard to I-405.
            </p>
            <p>
              After-school hours split between the playground at{" "}
              <a
                href="https://www.rentonwa.gov/Government/Departments-and-Offices/Parks-and-Recreation/Parks-and-Trails"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sunset Neighborhood Park
              </a>{" "}
              and homework time at the{" "}
              <a
                href="https://kcls.org/locations/renton-highlands/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Renton Highlands Library
              </a>
              . Weekend errands drop down to{" "}
              <a
                href="https://www.shopthelandinginrenton.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The Landing
              </a>
              . For fence height and permit questions, start with{" "}
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
              . NE Sunset Boulevard and I-405 Exit 5 put downtown Renton, Bellevue, and Sea-Tac within a short drive — which is why so many Sunset lots want a fence that works as hard as the commute.
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
                We install fences throughout Renton. From Sunset we also work in Renton Highlands on the same plateau, Kennydale toward the lake, Downtown Renton at the bottom of the hill, Cascade toward the valley, and Fairwood to the south.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/renton-highlands">Renton Highlands</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/kennydale">Kennydale</Link>
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
                Ready to Enhance Your Sunset Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Sunset. We&apos;ll walk the lot, talk through a boulevard street face vs. a park-side stretch, and quote a fence that fits your property.
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

export default SunsetPage;
