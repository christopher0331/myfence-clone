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
  Landmark,
  Waves,
  Eye,
  TreePine,
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

const CANONICAL = "https://myfence.com/service-areas/kirkland/market";
const META_TITLE =
  "Market Kirkland Fence Installation | Historic Waterfront Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Market, Kirkland, WA. Cedar, hogwire & hybrid fencing for historic hillside lots along Waverly Way, Market Street, and Lake Washington. Free quotes. (253) 455-1885.";

const MARKET_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Market, Kirkland?",
    answer:
      "The City of Kirkland generally does not require a building permit for residential fences under eight feet, but zoning still controls height, setbacks, and corner sight triangles. Front-yard fencing is typically limited to four feet; side and rear yards are usually allowed up to six feet. Lots on Waverly Way, 6th Street West, and the corners at Market Street and 7th Avenue have extra sight-distance rules near the sidewalk. Properties within 200 feet of Lake Washington's ordinary high water mark may also need shoreline review. A few historic or subdivided parcels ask for a simple drawing even when the city does not. MyFence.com checks the parcel, any plat notes, and Kirkland Planning and Building rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Market's hillside lots and lake views?",
    answer:
      "Six-foot cedar privacy is the usual choice on the Market Street side of a lot or where a neighbor sits close on 5th Avenue West or 8th Avenue West. On lots that drop toward Lake Washington or open onto Waverly Beach Park and Heritage Park, hogwire in a cedar frame keeps dogs in without stacking a solid wall across the water. Hybrid aluminum-and-cedar systems suit households that would rather skip staining through the damp that sits along the shoreline. Fence Genius maps the grade so panels step with the slope instead of leaving a gap a pet can use.",
  },
  {
    question: "How much does fence installation cost in Market, Kirkland?",
    answer:
      "Market fence installation typically runs $47–$71 per linear foot for six-foot cedar privacy, $40–$59 for hogwire with a cedar frame, and $55–$79 for hybrid aluminum/cedar. Stepped posts on the downhill side toward the lake, hand-digging around century-old firs and maples, extra gates for alley or side-yard access off Waverly Way, and shoreline or historic-parcel drawing packages can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Market?",
    answer:
      "Most Market residential projects finish in one to three working days after any city or shoreline paperwork is complete. Pre-fabricated panels cut on-site time. Stepped posts on a drop toward Waverly Way, hand-carrying materials down a narrow historic street, and tight side yards between 1890s–1930s homes are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Market?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Kirkland does not require their signature. On the older west-of-Market grid the pin can sit on a slope, and a shared side yard off 6th Street West or 10th Street W may already have landscaping both owners care about. If your parcel sits next to a designated historic house, a simple site plan helps keep height and stain from becoming a surprise. MyFence.com can help you confirm pins, share a drawing, and keep the conversation focused on height, style, and who pays for which stretch.",
  },
];

const MARKET_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Waverly Beach Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Waverly-Beach-Park",
    description:
      "Kirkland's swimming beach on Lake Washington at 633 Waverly Park Way — dock, playground, and a reservable picnic shelter. Summer weekends fill the Waverly Way pull-offs; households a block uphill often keep an open hogwire run so the water stays in the yard instead of disappearing behind a wall.",
  },
  {
    name: "Heritage Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Heritage-Park",
    description:
      "The lawn, tennis courts, and Heritage Hall at 111 Waverly Way, just inside the south edge of Market. The terrace that used to hold Kirkland's old high school is now the extra backyard for lots along 6th Street West when a historic side yard is only one gate deep.",
  },
  {
    name: "Kiwanis Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Kiwanis-Park",
    description:
      "A quiet shoreline pocket at 1405 10th Street W with a short trail and a small beach. West-of-Market lots that face this strip usually want screening from the street without boxing in a view toward the lake.",
  },
  {
    name: "Juanita Bay Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Juanita-Bay-Park",
    description:
      "The wetland and boardwalk at the north end of Market, where Forbes Creek meets Lake Washington. Back lines that face the marsh often need a wildlife-aware run that still lets eagles and herons stay in sight.",
  },
  {
    name: "Kirkland Arts Center",
    url: "https://kirklandartscenter.org/",
    description:
      "The studio and gallery building at 620 Market Street, on the neighborhood's commercial spine. Classes and evening openings set the parking pattern a fence crew has to work around on a weekday along Market Street.",
  },
];

const MarketPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Market, Kirkland",
    pageTitle: "Market Kirkland Fence Installation",
    description: META_DESCRIPTION,
    faqItems: MARKET_FAQS,
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
              href="/service-areas/kirkland"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Kirkland
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Market, Kirkland WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Market Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Historic hillside and lakeside fence work for Market — cedar
                  privacy that quiets Market Street, hogwire that keeps Lake
                  Washington in view, and hybrid systems built for the slope
                  along Waverly Way and 6th Street West.
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
                  city="Market, Kirkland"
                  state="Washington"
                  radiusMiles={4}
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
                Fencing the Hill That Drops From Market Street to the Lake
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Market is Kirkland&apos;s original west-of-the-arterial
                neighborhood — the grid that falls from Market Street and the
                7th Avenue crossing down Waverly Way, 5th Avenue West, and 6th
                Street West to Lake Washington. Lots here mix 1890s cottages,
                later infill, and a few newer houses on the same narrow
                parcels, not a single-builder cul-de-sac. Heritage Park and
                Waverly Beach Park sit on the water side; Kiwanis Park and
                Juanita Bay Park bookend the north. A fence in this grid has to
                handle a grade change, a mature tree, and a neighbor whose
                kitchen window is one lot away.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across
                Market, including shoreline lots and the remaining older houses
                toward Norkirk and downtown. We use Fence Genius to capture the
                actual bay lengths and the drop toward the lake before a post
                goes in the ground, so panels arrive stepped for the hillside
                instead of getting ripped down on a Saturday when Market Street
                is already stacked for an arts-center opening. The goal is a
                fence that looks like it belongs on this slope, not a catalog
                panel dropped onto a historic side yard.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Market Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Landmark className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Historic-Lot Drawing Packets
                      </h3>
                      <p className="text-muted-foreground">
                        Parcels along Market Street, 7th Avenue, and 8th Avenue
                        West can sit next to designated older houses. We put
                        together a simple elevation, stain note, and height
                        callout so a neighbor or the city is not guessing from
                        a photo of someone else&apos;s suburban yard.
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
                        Full coverage on materials and labor, including hardware
                        chosen for the extra damp that sits along Lake Washington
                        and the Waverly Beach shoreline. We stand behind the
                        install through Kirkland winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        View Corridors Toward the Lake
                      </h3>
                      <p className="text-muted-foreground">
                        Lots that face Lake Washington, Heritage Park, or
                        Waverly Beach rarely want a six-foot wall on every
                        side. We keep hogwire or a lower run on the water side
                        and put solid cedar where you actually need screening
                        from Market Street or the neighbor.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Root-Conscious Posts on Older Lots
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps the drop from Market Street down
                        toward Waverly Way so each bay follows the grade. We
                        hand-dig around the firs and maples that have been here
                        longer than the current house, and we use compact
                        equipment on streets a full truck cannot sit on.
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
                What Market Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Side yard off 6th Street West — we needed cedar
                    privacy from Market Street traffic without boxing in the
                    lake. They sent a height callout with the quote, then
                    stepped the panels so the bottom rail follows the drop
                    toward Waverly Way.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Dana in Market</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot faces Heritage Park. Hogwire in a cedar
                    frame keeps the dog in and we still see the lawn and the
                    water. They measured around two big firs so the last bay
                    does not hover over the grade.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Theo in Market</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Narrow lot toward 10th Street W — Kiwanis Park
                    walkers were the issue, not a giant backyard. Solid cedar
                    on the street side, open run toward the lake. Crew
                    hand-carried everything because Waverly Way was packed for
                    a beach afternoon.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Noelle in Market</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Market Kirkland fence" />

        {/* 6. Photo Gallery — Kirkland-area installs until Market-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Kirkland"
          title="Recent Fence Work Near Market"
          description="These photos are from Kirkland jobs in and around the Market hillside and waterfront. Same crew, same materials, and the same Fence Genius process we use on historic, sloped, and lakeside lots here."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Kirkland" neighborhood="Market" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Market-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Market Terrain and Stepped Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The neighborhood falls from Market Street toward Lake
                    Washington. A six-foot privacy panel that sits level on a
                    Kingsgate cul-de-sac will leave a gap at the downhill post
                    here. We measure each bay, step panels with the grade, and
                    place gates where bikes and trash actually move on Waverly
                    Way and 6th Street West. Crews hand-carry material when a
                    truck cannot sit through a beach afternoon or an
                    Independence Day parade morning on Market Street.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Market Street Corridor Versus Residential Lots
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Market Street itself is a mixed commercial and denser
                    residential spine shared with Norkirk. A parcel on the
                    arterial can read differently than a leftover single-family
                    lot a block west toward 5th Avenue West. Front setbacks
                    still have to keep sight triangles at corners near 7th
                    Avenue. We read the parcel zone before we promise a height,
                    then match any plat note if it is stricter than the city.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Lake Moisture, Slopes, and Shoreline Edges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that step down toward Lake Washington stay damp longer
                    than inland Kingsgate. Raw cedar grays fast, and cheap
                    fasteners streak. We spec pre-stained Western Red Cedar and
                    stainless or hot-dipped hardware. Properties within 200 feet
                    of the ordinary high water mark may need shoreline review
                    before a fence goes in. The hillside also has pockets of
                    slide-prone soil along the shoreline, so we keep post holes
                    off obvious drainage paths and do not fight a grade that
                    wants to shed water toward the lake.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Market Trees, Views, and Shared Side Yards
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Market Street traffic and arts-center evenings add ambient
                    noise that a solid cedar run can soften on the street side
                    of a yard. The water side is often a view the owner paid
                    for. The other two sides may already hold a neighbor&apos;s
                    hedge or a shared pin on a slope. We confirm who owns the
                    line, talk through stain so two attached yards do not
                    clash, and keep post holes off the root zones that keep
                    these blocks green.
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
                Fence Installation Cost in Market
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Market fence is a short-run historic and hillside install:
                slope, mature trees, and lake-side moisture can move the
                number. These are typical ranges; your on-site measurement is
                the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $47–$71 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $40–$59 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $55–$79 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Stepped hillside bays, custom gates, moisture-ready hardware
                  near the water, and historic-parcel drawing packages may add
                  10–15%. Get an exact quote for your Market property with a
                  free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Market property
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
                Popular Fence Styles in Market
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior side yards and lots that face
                    Market Street. Full screening from the arterial, pre-stained
                    cedar that holds up to lakeside damp, and a look that fits
                    the older houses around 5th Avenue West and 8th Avenue West.
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
                    Cedar frame with black mesh for lots that face Heritage
                    Park, Waverly Beach Park, or the lake. Dogs stay in, the
                    water stays in view, and the lighter footprint is easier on
                    a short shoreline run than a solid wall.
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
                    Aluminum panels in a cedar frame on steel posts — the
                    low-maintenance option when a lakeside calendar has no extra
                    Saturday for staining. Clean enough for a historic-block
                    review without looking like a commercial lot.
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
                Our Market Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Market Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note the grade toward the
                    lake, map utilities and large roots, and check whether the
                    parcel sits on the Market Street corridor or a leftover
                    residential lot west of the arterial. Fence Genius captures
                    bay lengths and the drop so panels are built to the actual
                    hillside.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Market Design & City / Plat Review
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your parcel has a plat note
                    or sits next to a designated historic house, we prepare a
                    simple drawing, stain note, and height callout. If it does
                    not, we still document Kirkland height, setback, and
                    shoreline rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements —
                    pre-stained cedar, hogwire frames, or hybrid modules — so
                    Market install days are mostly setting posts and hanging
                    finished sections instead of ripping lumber on Waverly Way.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Market Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment and hand-carry when 6th Street
                    West or Waverly Way will not take a full truck. Stepped
                    bays, careful post placement near mature roots, and full
                    cleanup at the end of each day. Most jobs wrap in one to
                    three days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty
                  </h3>
                  <p className="text-muted-foreground">
                    Final walkthrough covering every panel, post, and gate. Full{" "}
                    {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty starts
                    when the job is complete.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — visible content matches FAQPage JSON-LD */}
        <NeighborhoodFaqSection
          title="Market Fence Installation FAQs"
          items={MARKET_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Kirkland"
        neighborhoodName="Market"
        attractions={MARKET_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Market households sit in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              . Many elementary students walk or ride a short hop to{" "}
              <a
                href="https://kirk.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Peter Kirk Elementary
              </a>
              {" "}
              on 6th Street, then later to{" "}
              <a
                href="https://kms.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kirkland Middle School
              </a>{" "}
              and{" "}
              <a
                href="https://lwhs.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington High School
              </a>
              . Neighborhood history and walking-tour notes live with the{" "}
              <a
                href="https://kirklandheritage.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kirkland Heritage Society
              </a>
              .
            </p>
            <p>
              Weekdays are built around walking Market Street and boarding
              buses toward downtown and I-405. Weekends split between the dock
              at Waverly Beach Park, the lawn at Heritage Park, birding at
              Juanita Bay, and evening openings at the{" "}
              <a
                href="https://kirklandartscenter.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kirkland Arts Center
              </a>
              . Height and setback questions go through{" "}
              <a
                href="https://www.kirklandwa.gov/Government/Departments/Planning-and-Building/Building-Permits"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kirkland Planning and Building
              </a>
              . Dining and event listings from{" "}
              <a
                href="https://www.explorekirkland.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Explore Kirkland
              </a>{" "}
              cover the same corridor. The city&apos;s{" "}
              <a
                href="https://www.kirklandwa.gov/files/sharedassets/public/v/1/planning-amp-building/kirkland-2044-comp-plan/general-neighborhood-plan-amendments/final_12i_market-neighborhoodplan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Market Neighborhood Plan
              </a>{" "}
              is the policy backdrop for how this historic hillside keeps
              changing.
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
                Also Serving Nearby Kirkland Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Kirkland. From Market we also work
                south into Downtown Kirkland, along the Moss Bay waterfront,
                north into Juanita, and across the city line into Redmond and
                Bellevue.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/downtown-kirkland">
                    Downtown Kirkland
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/moss-bay">Moss Bay</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/juanita">Juanita</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond">Redmond</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue</Link>
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
                Ready to Enhance Your Market Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Market. We&apos;ll walk the
                slope, talk through privacy versus lake views, and quote a fence
                that fits your historic hillside lot.
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

export default MarketPage;
