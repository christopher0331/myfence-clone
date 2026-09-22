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
  Ruler,
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

const CANONICAL = "https://myfence.com/service-areas/bellevue/downtown-bellevue";
const META_TITLE =
  "Downtown Bellevue Fence Installation | Townhome & Patio Screens | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Downtown Bellevue, WA. Cedar, hogwire & hybrid fencing for Old Bellevue lots, townhome courtyards, and ground-floor patio screens. Free quotes. (253) 455-1885.";

const DOWNTOWN_BELLEVUE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Downtown Bellevue?",
    answer:
      "The City of Bellevue generally does not require a building permit for a residential fence unless it is taller than eight feet, sits in a critical area or critical-area buffer, or is built of concrete block or similar masonry. Height still matters. Fences in a required front-yard setback are typically limited to four feet six inches; side and rear yards can usually go higher under Land Use Code 20.20.400. Downtown parcels also sit under LUC 20.25A, so setbacks along Bellevue Way NE, 108th Avenue NE, NE 4th Street, and Main Street can differ from a Somerset or Eastgate lot. Corner lots must keep sight triangles clear under Bellevue City Code 14.60.240. Townhome and condo boards often want a drawing and material list even when the city does not. MyFence.com checks the downtown overlay, any association packet, and Development Services rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Downtown Bellevue townhomes and patio lots?",
    answer:
      "Six-foot cedar privacy is the usual choice on interior townhome courtyards and on the I-405 or Bellevue Way side of a lot, where screening from traffic and a neighboring patio matters more than a long view. On yards that open toward Downtown Park, Meydenbauer Bay, or a shared green strip off 100th Avenue NE, hogwire in a cedar frame keeps dogs in without stacking a solid wall on a short run. Hybrid aluminum-and-cedar systems suit households that would rather skip staining on a compact urban calendar. Fence Genius maps each bay so panels fit a 20-foot patio instead of getting ripped down on a Saturday when Lincoln Square parking is full.",
  },
  {
    question: "How much does fence installation cost in Downtown Bellevue?",
    answer:
      "Downtown Bellevue fence installation typically runs $46–$72 per linear foot for six-foot cedar privacy, $40–$60 for hogwire with a cedar frame, and $56–$80 for hybrid aluminum/cedar. Tight townhome side yards, extra gates for shared walks, HOA drawing packages, and hand-carrying materials off 108th Avenue NE or Main Street can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Downtown Bellevue?",
    answer:
      "Most Downtown Bellevue residential and townhome projects finish in one to three working days after any city or association paperwork is complete. Prefabricated panels keep on-site time short. Extra half-days usually come from alley or loading-dock access, street-parking rules around NE 8th and 110th, or working around weekday pickup at KidsQuest and the Bellevue Library. We lock the schedule with you before the crew arrives.",
  },
  {
    question:
      "Do I need my neighbor's permission for a fence in Downtown Bellevue?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Bellevue does not require a signature. On townhome rows and ground-floor patio units, the HOA or the adjoining owner may already control the shared side yard, so we confirm who owns which stretch before digging. A fence taller than six feet often needs a recorded agreement with the adjoining owner. MyFence.com can help share a simple site plan covering height, style, and who pays for which run.",
  },
];

const DOWNTOWN_BELLEVUE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Bellevue Downtown Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/bellevue-downtown-park",
    description:
      "The circular lawn at NE 4th Street and 102nd Avenue NE is the open space most downtown households do not have at home. Evening events and weekend picnics fill the paths, which is why lots on 100th Avenue NE and NE 1st often want a screen from the crowd without boxing in a short backyard.",
  },
  {
    name: "Meydenbauer Bay Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/meydenbauer-beach-park",
    description:
      "Lake access at the foot of 100th Avenue NE, a short walk from Old Bellevue. West-edge townhomes and remaining houses between Main Street and the bay treat this as the evening walk; patio fences along that strip often keep a gap or hogwire panel so the water still reads from the yard.",
  },
  {
    name: "KidsQuest Children's Museum",
    url: "https://www.kidsquestmuseum.org/",
    description:
      "The indoor play campus at 1116 108th Avenue NE, next to the library. Saturday parking and stroller traffic stack on 108th and NE 12th, so we schedule nearby installs around museum rush instead of blocking a shared townhome walk.",
  },
  {
    name: "Ashwood Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/ashwood-playfield",
    description:
      "The grass field on NE 12th Street that downtown families share with the library lot. Townhome rows off 110th use it as the closest open lawn when Downtown Park is reserved for an event, and those same lots are where a side-yard gate gets used every weekday.",
  },
  {
    name: "Bellevue Downtown Station",
    url: "https://www.soundtransit.org/ride-with-us/stops-stations/bellevue-downtown-station",
    description:
      "The 2 Line stop at 594 110th Avenue NE, between NE 6th and the transit center. Patio gates on 110th now have to account for rider foot traffic that did not exist on these blocks before East Link, and crews stage so they are not sitting in a drop-off lane.",
  },
];

const DowntownBellevuePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Downtown Bellevue, Bellevue",
    pageTitle: "Downtown Bellevue Fence Installation",
    description: META_DESCRIPTION,
    faqItems: DOWNTOWN_BELLEVUE_FAQS,
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
              href="/service-areas/bellevue"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bellevue
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Downtown Bellevue, Bellevue WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Downtown Bellevue Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence work for Downtown Bellevue&apos;s short runs — cedar privacy for townhome courtyards and I-405 lots, hogwire that keeps Downtown Park in view, and hybrid systems built for condo review on 108th, Main Street, and the streets around Lincoln Square.
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
                  city="Downtown Bellevue, Bellevue"
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
                Privacy Screens Between Towers, Townhomes, and the Park
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Downtown Bellevue is a mixed-use grid, not a hillside plat. The core sits between I-405 on the east, Meydenbauer Bay on the west, NE 12th Street on the north, and Main Street plus East Main Station on the south. Daily life runs on Bellevue Way NE, 108th Avenue NE, 106th, 110th, 100th, NE 4th, NE 8th, and the NE 6th pedestrian spine. High-rises do not get a suburban back-line fence. The work we actually do here is townhome courtyards, ground-floor patio screens, remaining houses west of 100th and south of Main in Old Bellevue, and short perimeter runs around shared residential courts. There is no Somerset-style master HOA. Each condo or townhome association writes its own material list, and the City of Bellevue still applies downtown setbacks under LUC 20.25A. The design conversation starts with who owns the line, how short the bay is, and whether the noisy face is the freeway or Bellevue Way.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across Bellevue, including downtown townhome rows and the residential pockets that still sit between the retail blocks. We use Fence Genius to capture the actual bay lengths and any grade drop toward the bay before a post goes in the ground, so panels arrive cut for a patio instead of getting ripped down on 108th. The goal is a fence that belongs on Main Street or a courtyard off 110th — not a catalog panel dropped onto a zero-lot-line yard.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Downtown Bellevue Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Condo and Townhome Drawings
                      </h3>
                      <p className="text-muted-foreground">
                        Associations around Lincoln Square, Old Bellevue, and the 108th Avenue NE mid-rises often want a simple elevation, stain note, and height callout. We put that packet together so the board is not guessing from a photo of someone else&apos;s patio.
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
                        Full coverage on materials and labor, including hardware chosen for the extra exhaust and damp that sit along I-405 and the bay-facing west edge. We stand behind the install through Bellevue winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        I-405 and Bellevue Way Screening
                      </h3>
                      <p className="text-muted-foreground">
                        Full-height cedar on the freeway and arterial faces, with tighter picket gaps and no crawl space at the bottom. Built to cut traffic sound on a short downtown run without looking like a commercial lot dropped next to Downtown Park.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Short-Bay Urban Layout
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps 12- to 40-foot patio runs, alley gates, and shared walks so panels fit the actual court. Compact equipment and hand-carry staging keep 108th, Main Street, and NE 8th moving while we work.
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
                What Downtown Bellevue Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our townhome patio on 108th looks straight into the next unit. They built a six-foot cedar screen on that side and left the park-facing edge more open. The courtyard is actually private now without feeling boxed in.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Maya in Downtown Bellevue</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Old Bellevue lot south of Main, tight side yard, and a board that wanted stain chips before we could start. They sent a drawing that passed on the first try and hand-carried every panel so the alley stayed open.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Chris in Downtown Bellevue</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit close enough to I-405 that evenings were loud. Solid cedar on the freeway side, hogwire toward the bay, and they finished in two days around the shared walk. Exactly the split we asked for.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Jordan in Downtown Bellevue</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Downtown Bellevue fence" />

        {/* 6. Photo Gallery — nearby Bellevue installs until downtown-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Bellevue"
          title="Recent Fence Work Near Downtown Bellevue"
          description="These photos are from nearby Bellevue jobs, including Wilburton just east of I-405 and other central Bellevue installs. Same crew, same materials, and the same Fence Genius process we use on downtown townhome and Old Bellevue lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Bellevue" neighborhood="Downtown Bellevue" />

        {/* Featured case study copy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Downtown Bellevue Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A typical Downtown Bellevue cedar privacy run sits on a townhome or leftover house lot west of 108th Avenue NE, close enough to Bellevue Way or I-405 that traffic is part of the evening soundtrack. The job is usually two fences in one: a full-height cedar screen on the arterial and neighbor sides, then a lighter hogwire stretch toward Downtown Park or the bay so the patio still feels open. Fence Genius maps the short bays and any drop toward 100th Avenue NE so panels step instead of leaving a gap a small dog can use, and we hand-carry materials when a loading dock or alley is the only access.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most comparable downtown yards run 40–120 linear feet and wrap in one to three working days after any city or association paperwork. We use generic cedar privacy, hogwire, or hybrid aluminum/cedar — no unverified construction claims — and we walk the line with you before posts go in so the station-area foot traffic and the HOA stain note are both accounted for.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Downtown Bellevue-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Bellevue Access, Alleys, and Street Staging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A fence built for a Somerset hillside will not fit a downtown patio. Runs are shorter, corners are tighter, and many parcels only have alley or loading-dock access off 108th, 106th, or the lanes behind Main Street. We shorten panel bays, plan gate swings so they do not block a shared walk, and use compact equipment that can work on NE 8th and 110th without sitting in a transit drop-off. Street parking around Lincoln Square and the library is part of the schedule, not an afterthought.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Bellevue Condo and Townhome Design Review
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most older streets in Old Bellevue have no architectural committee. Newer townhome plats and condo associations around the towers often do. Boards typically care about height, stain color, and whether the finished face points at the courtyard. We still follow Bellevue&apos;s front-yard and sight-triangle rules, and we prepare a simple drawing when a board asks for one so the install does not stall after materials are already cut.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Bellevue Traffic Noise on I-405 and Bellevue Way
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I-405 is the east wall of downtown; Bellevue Way NE is the daily arterial through the middle. Lots that face either want mass, height, and a tight bottom. We spec six-foot cedar privacy on that face, keep picket gaps small, and avoid leaving a stepped opening at grade. On the park or bay side of the same lot we often switch to hogwire so you are not boxed in on every compass point.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Bellevue Height, Setbacks, and Sight Triangles
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Downtown zoning under LUC 20.25A can change the setback from one block to the next. A front-yard screen on Main Street or 100th Avenue NE is usually capped near four feet six inches; a side-yard screen on an interior townhome court can go higher. Corners at NE 8th, 108th, and Bellevue Way have to keep sight triangles clear. If your parcel sits in a mapped critical area toward the bay, we flag that in the quote instead of after the crew is on site.
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
                Fence Installation Cost in Downtown Bellevue
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A downtown fence is a short-run urban install: alley access, HOA notes, and arterial screening can move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $46–$72 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $40–$60 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $56–$80 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Tight downtown access, hand-carrying materials, and association drawing packages may add 10–15%. Custom gates are itemized separately. Get an exact quote for your Downtown Bellevue property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Downtown Bellevue property</Link>
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
                Popular Fence Styles in Downtown Bellevue
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on I-405 and Bellevue Way lots that need a solid screen, and on interior townhome patios that look into the next unit. Full height, tight bottoms, pre-stained cedar that holds up in a shaded court, and a look that fits both Old Bellevue houses and newer mid-rise courtyards.
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
                    Cedar frame with black mesh for park-facing and bay-facing lots that still want a sightline. Dogs stay in, the lighter footprint is easier on a 20-foot patio than a solid wall, and it reads as an open edge instead of a barrier next to Downtown Park.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a downtown calendar has no extra Saturday for staining. Clean enough for HOA review without looking like a commercial lot on Main Street.
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
                Our Downtown Bellevue Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Downtown Bellevue Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the patio or lot, measure the run, note I-405 or Bellevue Way exposure, map utilities and shared walks, and check whether the parcel sits in a downtown overlay or a critical-area buffer toward the bay. Fence Genius captures the short bays so panels are built to the actual court, not a suburban assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Downtown Bellevue Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your townhome or condo association has a design committee, we prepare a simple drawing and material list. If your Old Bellevue street has no association — which is still common south of Main — we still document Bellevue height and setback rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so downtown install days are mostly setting posts and hanging finished sections instead of ripping lumber on 108th Avenue NE.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Downtown Bellevue Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to Main Street, 100th, 108th, 110th, and NE 8th. Hand-carrying near shared courts, stepped posts on any drop toward the bay, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Downtown Bellevue Fence Installation FAQs"
          items={DOWNTOWN_BELLEVUE_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Bellevue"
        neighborhoodName="Downtown Bellevue"
        attractions={DOWNTOWN_BELLEVUE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Downtown Bellevue families are served by the{" "}
              <a
                href="https://www.bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue School District
              </a>
              , with{" "}
              <a
                href="https://www.bsd405.org/schools/high-schools/bellevue"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue High School
              </a>{" "}
              a short hop south of the core on Wolverine Way. Weekday life is built around the{" "}
              <a
                href="https://kcls.org/locations/bellevue/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue Library
              </a>{" "}
              on 110th,{" "}
              <a
                href="https://www.soundtransit.org/ride-with-us/stops-stations/bellevue-downtown-station"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue Downtown Station
              </a>{" "}
              for 2 Line trips into Seattle or out toward Redmond, and{" "}
              <a
                href="https://www.soundtransit.org/ride-with-us/stops-stations/east-main-station"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                East Main Station
              </a>{" "}
              at the south edge of downtown for households closer to Old Bellevue.
            </p>
            <p>
              Groceries and after-work food stay inside the core rather than requiring a drive to Crossroads. Dinner reservations often land at{" "}
              <a
                href="https://dtf.com/en-us/locations/bellevue"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Din Tai Fung
              </a>{" "}
              in Lincoln Square or along the retail floors of{" "}
              <a
                href="https://www.thebellevuecollection.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The Bellevue Collection
              </a>
              . Weekend plans split between Downtown Park, the bay, and events posted by the{" "}
              <a
                href="https://bellevuedowntown.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue Downtown Association
              </a>
              . I-405, NE 8th, and Bellevue Way still carry the car trips; a lot of downtown life never needs them.
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
                Also Serving Nearby Bellevue Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Bellevue. From Downtown Bellevue we also work in Wilburton just east of I-405, Crossroads along NE 8th, Factoria and Newport Hills toward I-90, and Somerset on the hillside south of the core.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/wilburton">Wilburton</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/crossroads">Crossroads</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/factoria">Factoria</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newport-hills">Newport Hills</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/somerset">Somerset</Link>
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
                Ready to Enhance Your Downtown Bellevue Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Downtown Bellevue. We&apos;ll walk the patio, talk through HOA notes and arterial noise, and quote a fence that fits your downtown lot.
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

export default DowntownBellevuePage;
