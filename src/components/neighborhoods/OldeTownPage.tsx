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
  Home,
  Landmark,
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

const CANONICAL = "https://myfence.com/service-areas/issaquah/olde-town";
const META_TITLE =
  "Olde Town Issaquah Fence Installation | Historic Downtown Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Olde Town, Issaquah, WA. Cedar, hogwire & hybrid fencing for Front Street-era lots, creek-side yards, and tight downtown side yards. Free quotes. (253) 455-1885.";

const OLDE_TOWN_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Olde Town Issaquah?",
    answer:
      "The City of Issaquah generally does not require a building permit for residential fences six feet or shorter, unless the run sits in a critical area or other land-use limits apply. Front-yard fencing is typically capped at four feet, and side and rear yards at six feet. Single-family and duplex lots also follow IMC 18.700.160, which asks that the front entry stay visible from the street. Parcels along Issaquah Creek — including streets near Sunset Way, NW Juniper, and Rainier Boulevard — can trigger extra review even at standard height. MyFence.com checks the overlays for your Olde Town address before we quote.",
  },
  {
    question:
      "What fence styles work best for Olde Town's small lots and historic street grid?",
    answer:
      "Most Olde Town yards are tighter than Issaquah Highlands or Talus, so a six-foot cedar privacy fence is the usual choice along shared side yards on Front Street, Rainier Boulevard, and the blocks off Sunset Way. Hogwire in a cedar frame suits creek-facing lots that still want a sightline toward Issaquah Creek or the hatchery lawn. Hybrid aluminum-and-cedar systems help homeowners who want the cedar look without restaining in the extra damp that sits in the valley floor. Fence Genius maps the lot so panels fit the short runs and grade changes instead of leaving crawl gaps on a compact downtown property.",
  },
  {
    question: "How much does fence installation cost in Olde Town, Issaquah?",
    answer:
      "Olde Town fence installation typically runs $45–$68 per linear foot for six-foot cedar privacy, $39–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Tight side yards, hand-digging around older foundations, custom gates on alley lots, and creek-buffer setbacks can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Olde Town Issaquah?",
    answer:
      "Most Olde Town residential projects finish in one to three working days after any city paperwork is complete. Prefabricated panels keep on-site time short. Extra half-days usually come from compact equipment on Front Street and Sunset Way, working around pickup at Issaquah Valley Elementary on NW Holly, or avoiding Salmon Days weekend closures. We lock the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Olde Town?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when the city does not require a signature. A fence taller than six feet does require a recorded agreement with the adjoining owner. Olde Town lots are often older pin locations on a tight grid, so confirming the line before digging saves a redo on a three-foot side yard. MyFence.com can help share a simple site plan and keep the conversation on height, style, and who pays for which stretch.",
  },
];

const OLDE_TOWN_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Issaquah Salmon Hatchery",
    url: "https://www.issaquahfish.org/",
    description:
      "The working hatchery at 125 W Sunset Way sits in the middle of Olde Town. Fall spawning weekends pull neighbors and visitors onto the creek paths, so backyard privacy along Sunset Way matters more than it does in a quiet cul-de-sac.",
  },
  {
    name: "Gilman Village",
    url: "https://www.gilmanvillage.com/",
    description:
      "A cluster of relocated historic houses on NW Gilman Boulevard, a short walk from Front Street. Olde Town households treat it as the weekday coffee-and-errand stop without driving out to the plateau shopping centers.",
  },
  {
    name: "Village Theatre",
    url: "https://villagetheatre.org/mainstage/plan-your-visit/issaquah/",
    description:
      "The Gaudette and Hunt Family stages on Front Street North keep downtown busy on show nights. Street parking and after-curtain foot traffic are part of the weekly rhythm for homes a block or two off the commercial strip.",
  },
  {
    name: "Salmon Run Nature Park",
    url: "https://www.issaquahwa.gov/facilities/facility/details/Salmon-Run-Nature-Park-77",
    description:
      "A small creek-side open space on the main stem of Issaquah Creek, reached via NW Juniper past Gilman Village. Useful as a quiet walk from Olde Town blocks that sit closer to the water than to I-90.",
  },
  {
    name: "Issaquah History Museums",
    url: "https://www.issaquahhistory.org/",
    description:
      "The Depot Museum and Gilman Town Hall keep the railroad and city-hall story on display a few minutes from Front Street. The same historic street grid that framed those buildings is the one we fence on residential lots today.",
  },
];

const OldeTownPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Olde Town, Issaquah",
    pageTitle: "Olde Town Issaquah Fence Installation",
    description: META_DESCRIPTION,
    faqItems: OLDE_TOWN_FAQS,
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
              href="/service-areas/issaquah"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Issaquah
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Olde Town, Issaquah WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Olde Town Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Historic-core fence work for Olde Town homes — cedar privacy that fits Front Street-era lots, hogwire that keeps Issaquah Creek in view, and hybrid systems built for tight downtown side yards along Sunset Way and Rainier Boulevard.
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
                  city="Olde Town, Issaquah"
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
                Fencing the Original Street Grid, Not a Plateau Cul-de-Sac
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Olde Town is the part of Issaquah that was laid out before the car-oriented plats on the hills. Front Street, Sunset Way, Rainier Boulevard, NW Juniper, and SE Andrews still run on a tight grid of smaller lots, older craftsman and mid-century houses, and a mix of storefronts and homes. There is no master association like Issaquah Highlands or Talus — design review, when it applies, comes from the City of Issaquah, including front-yard height and the rule that the front door stay visible from the street. Issaquah Creek cuts through the district, I-90 sits on the north edge, and Salmon Days weekends turn downtown into a crowd. The fence conversation starts with lot width, creek buffers, and whether you want screening from the sidewalk or a view toward the water.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built cedar, hogwire, and hybrid fences across Issaquah, including valley-floor lots in the historic core and the hillside communities that sit above it. We use Fence Genius to capture grade and run length before a post goes in the ground, so short downtown bays stay even and creek-side lots get tight, pet-safe bottoms without ignoring the floodplain overlay. The goal is a fence that looks like it belongs on a Front Street-era lot — not a suburban panel dropped onto a 40-foot side yard.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Olde Town Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Tight-Lot, Historic-Grid Fits
                      </h3>
                      <p className="text-muted-foreground">
                        Olde Town side yards are often a few feet wide, with older foundations and alley access instead of a wide HOA easement. We measure the actual run, pick gate swings that clear the sidewalk, and keep the front entry visible so the install matches city street-facing rules.
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
                        Full coverage on materials and labor, including hardware chosen for the extra damp on the valley floor near Issaquah Creek. We stand behind the install through Issaquah winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Creek Overlay Awareness
                      </h3>
                      <p className="text-muted-foreground">
                        Lots near the hatchery, Salmon Run Nature Park, and the main stem of Issaquah Creek can sit in mapped critical areas. We flag those overlays before digging rather than after a post hole is already open.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Landmark className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Downtown Character Without a Tract Look
                      </h3>
                      <p className="text-muted-foreground">
                        Cedar that reads as a historic-core fence, not a plateau subdivision wall. Side-yard privacy for I-90 and sidewalk traffic, with open runs where a solid panel would just hide the reason you live two blocks from Front Street.
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
                What Olde Town Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our side yard is barely wide enough for a wheelbarrow. They stepped a cedar run that still leaves the front porch visible from the street, and the dog cannot squeeze under the bottom rail toward Sunset Way.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Olde Town</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit closer to the creek than to I-90 and did not want a solid wall. Hogwire in a cedar frame keeps the kids in and the water in view. They flagged the buffer before quoting, which saved a redo.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Olde Town</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;No HOA packet like the Highlands, but the city still cares about front-yard height. They put together a simple drawing that matched the four-foot front / six-foot side rules. Finished before the Salmon Days weekend.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Elena in Olde Town</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Olde Town Issaquah fence" />

        {/* 6. Photo Gallery — nearby Issaquah installs until Olde Town-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Issaquah"
          title="Recent Fence Work Near Olde Town"
          description="These photos are from nearby Issaquah jobs, including hillside work above the valley floor. Same crew, same materials, and the same Fence Genius process we use on Front Street-era lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Issaquah" neighborhood="Olde Town" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Olde Town-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Compact Lots and Alley Access
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A fence built for a Highland plateau lot will not fit an Olde Town side yard. Runs are shorter, corners are tighter, and some parcels still use alley access off Rainier Boulevard or the streets behind Front Street. We shorten panel bays, plan gate swings so they do not block the sidewalk, and use compact equipment that can work on downtown streets without shutting a whole block.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Issaquah Creek Buffers and Valley Moisture
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The hatchery, Salmon Run Nature Park, and the main stem of Issaquah Creek sit inside the neighborhood, not a mile away. Cool air hangs on the valley floor overnight, longer than it does on Talus or the Highlands. Raw cedar grays fast, and cheap fasteners start showing rust streaks. We spec pre-stained Western Red Cedar and stainless or hot-dipped hardware, and we talk through setbacks before a post hole goes in a mapped buffer.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    City Height Rules Instead of a Master HOA
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Olde Town does not have a single architectural committee handing out approved stain colors. The City of Issaquah still limits front setbacks to about four feet, side and rear yards to six feet, and asks that the prominent entry stay visible from the street on single-family and duplex lots. We design to those rules so you do not get a surprise after the panels are already stained.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Sidewalk Traffic, I-90, and View vs. Privacy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Homes a block off Front Street deal with show-night parking and Salmon Days crowds. Lots closer to the freeway want screening without a solid wall that makes a small yard feel smaller. The typical mix is cedar privacy on the shared side yards, a lower or more open run toward the street, and hogwire where the creek or mountain view is the reason you bought the house.
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
                Fence Installation Cost in Olde Town
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                An Olde Town fence is an investment in a small, walkable lot — and, on the creek side, a view. Access, gates, and moisture details move the number. These are typical ranges; your on-site measurement is the real quote.
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
                  Tight downtown access and hand-digging near older foundations or creek buffers may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Olde Town property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Olde Town property</Link>
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
                Popular Fence Styles in Olde Town
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on shared side yards a block off Front Street. Full screening for small backyards, pre-stained cedar that holds up to valley-floor winters, and a look that fits craftsman and mid-century houses better than a wide-lot plateau wall.
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
                    Cedar frame with black mesh for lots that still want Issaquah Creek or the hatchery lawn in view. Dogs stay in, the water stays visible, and the lighter footprint is easier around roots than a solid privacy wall.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when valley humidity makes staining a chore. Strong enough for busy family yards without looking like a commercial lot on Rainier Boulevard.
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
                Our Olde Town Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Olde Town Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note creek or critical-area overlays, map older trees and foundations, and check front-entry visibility from the street. Fence Genius captures grade so panels are built to the actual lot, not a plateau assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Olde Town Design & City Review
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. There is no Highlands-style HOA packet, but we still document Issaquah height and setback rules — four feet in the front setback, six feet in most side and rear yards, front door visible from the street — so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so Olde Town install days are mostly setting posts and hanging finished sections on a tight lot.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Olde Town Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to Front Street, Sunset Way, Rainier Boulevard, and the residential blocks off NW Holly. Hand-digging near older foundations, careful staging around downtown parking, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Olde Town Fence Installation FAQs"
          items={OLDE_TOWN_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Issaquah"
        neighborhoodName="Olde Town"
        attractions={OLDE_TOWN_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Olde Town families are served by the{" "}
              <a
                href="https://www.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah School District
              </a>
              , with many elementary students walking or a short ride to{" "}
              <a
                href="https://issaquahvalley.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah Valley Elementary
              </a>{" "}
              on NW Holly Street. Later years typically feed{" "}
              <a
                href="https://ihs.isd411.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah High School
              </a>
              . Weekday life also runs through the{" "}
              <a
                href="https://kcls.org/locations/issaquah/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah Library
              </a>{" "}
              at Front Street and Sunset Way — a block that already sits at the center of the historic grid.
            </p>
            <p>
              Groceries and after-school food stay in the downtown core rather than requiring a drive to the plateau. Weekends split between creek paths, show nights on Front Street, and the October{" "}
              <a
                href="https://www.salmondays.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Salmon Days Festival
              </a>
              .{" "}
              <a
                href="https://www.issaquahwa.gov/parks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Issaquah Parks & Community Services
              </a>{" "}
              maintains the small parks inside the district, while{" "}
              <a
                href="https://www.issaquahwa.gov/1760/Olde-Town"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                the City&apos;s Olde Town page
              </a>{" "}
              covers neighborhood planning. I-90 Exit 17 (Front Street) connects you to Bellevue, Sammamish, and the rest of the Eastside;{" "}
              <a
                href="https://parks.wa.gov/find-a-park/lake-sammamish-state-park"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Sammamish State Park
              </a>{" "}
              is a short hop north of the freeway.
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
                Also Serving Nearby Issaquah Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Issaquah. From Olde Town we also work in Issaquah Highlands on the plateau, Mirrormont on Squak Mountain, and Newcastle on the Cougar Mountain side. Sammamish sits just north of Lake Sammamish State Park.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah">Issaquah overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah-highlands">Issaquah Highlands</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah/mirrormont">Mirrormont</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newcastle">Newcastle</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish</Link>
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
                Ready to Enhance Your Olde Town Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Olde Town. We&apos;ll walk the lot, talk through creek setbacks and front-yard height, and quote a fence that fits your downtown Issaquah property.
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

export default OldeTownPage;
