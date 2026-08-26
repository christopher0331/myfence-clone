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

const CANONICAL = "https://myfence.com/service-areas/redmond/downtown-redmond";
const META_TITLE =
  "Downtown Redmond Fence Installation | Townhome & Mixed-Use Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Downtown Redmond, WA. Cedar, hogwire & hybrid fencing for townhomes, alley lots, and mixed-use yards near Town Center and the 2 Line. Free quotes. (253) 455-1885.";

const DOWNTOWN_REDMOND_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Downtown Redmond?",
    answer:
      "The City of Redmond generally does not require a building permit for fences seven feet or shorter, but zoning still controls height, materials, and placement. Downtown parcels sit in a mix of Downtown mixed-use zones and leftover residential lots, so the allowed height can be six feet on one block and eight feet on the next. Front setbacks along Cleveland Street, Redmond Way, and 164th Avenue NE also have to clear sight triangles at corners. Townhome HOAs around Redmond Town Center often want drawings even when the city does not. MyFence.com checks the parcel zone, HOA packet, and Redmond Development Services rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Downtown Redmond's townhome and mixed-use lots?",
    answer:
      "Six-foot cedar privacy is the usual choice on interior townhome yards that back to an alley or a neighbor's patio, where screening and dog containment matter more than a view. Along the Sammamish River and the Redmond Central Connector, hogwire in a cedar frame keeps the trail and water in sight without turning the lot into a solid wall. Hybrid aluminum-and-cedar systems suit households that would rather skip staining on a compact urban lot. Fence Genius maps the short runs and grade changes so panels fit the actual alley, not a suburban six-foot bay assumed from a catalog.",
  },
  {
    question: "How much does fence installation cost in Downtown Redmond?",
    answer:
      "Downtown Redmond fence installation typically runs $46–$70 per linear foot for six-foot cedar privacy, $40–$58 for hogwire with a cedar frame, and $56–$78 for hybrid aluminum/cedar. Tight alley access, custom gates for shared side yards, and HOA drawing packages can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Downtown Redmond?",
    answer:
      "Most Downtown Redmond residential and townhome projects finish in one to three working days after any city or HOA paperwork is complete. Pre-fabricated panels cut on-site time. Short bays, hand-carrying materials down alleys off Leary Way or NE 76th Street, and parking around Town Center are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question:
      "Do I need my neighbor's permission for a fence in Downtown Redmond?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Redmond does not require their signature. On townhome rows, the HOA or the adjoining owner may already control the shared side yard, so we confirm who owns which stretch before digging. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which run.",
  },
];

const DOWNTOWN_REDMOND_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Anderson Park",
    url: "https://www.redmond.gov/facilities/facility/details/Anderson-Park-59",
    description:
      "Redmond's oldest city park sits in the middle of downtown — lawn, evergreens, historic cabins, a brick plaza, and community garden beds a short walk from Cleveland Street townhomes.",
  },
  {
    name: "Redmond Town Center",
    url: "https://www.redmondtowncenter.com/",
    description:
      "The open-air retail and residential campus south of NE 76th Street, where downtown residents walk for groceries, dinner, and the light-rail station sitting just to the north.",
  },
  {
    name: "Redmond Central Connector",
    url: "https://www.redmond.gov/1717/Redmond-Central-Connector-Trail",
    description:
      "A paved linear park on the old rail corridor that cuts through downtown. Morning bike commutes and evening dog walks share the same path that now sits under the Downtown Redmond Station.",
  },
  {
    name: "Luke McRedmond Landing",
    url: "https://www.redmond.gov/facilities/facility/details/Luke-McRedmond-Landing-65",
    description:
      "A small riverfront park on the Sammamish with a canoe launch, fishing pier, and picnic tables — the closest put-in for downtown households that want water without driving to Marymoor.",
  },
  {
    name: "Old Redmond Schoolhouse Community Center",
    url: "https://www.redmond.gov/facilities/facility/details/Old-Redmond-Schoolhouse-Community-Center-67",
    description:
      "The 1922 schoolhouse on 168th Avenue NE, now a community center and preschool campus a few blocks from the downtown core. Evening classes and weekend rentals keep the block active after shops close.",
  },
];

const DowntownRedmondPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Downtown Redmond, Redmond",
    pageTitle: "Downtown Redmond Fence Installation",
    description: META_DESCRIPTION,
    faqItems: DOWNTOWN_REDMOND_FAQS,
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
              href="/service-areas/redmond"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Redmond
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Downtown Redmond, Redmond WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Downtown Redmond Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Townhome, alley, and mixed-use fence work for Downtown Redmond — cedar privacy for compact yards, hogwire that keeps the river trail in view, and hybrid systems built for busy urban lots.
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
                  city="Downtown Redmond, Redmond"
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
                Fencing a Walkable Core, Not a Cul-de-Sac
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Downtown Redmond is a mixed-use grid, not a hillside subdivision. Lots sit on Cleveland Street, Redmond Way, Leary Way, and the numbered avenues around 164th and 166th. Many are townhomes with alley gates, shared side yards, and a patio that faces another patio. The Sammamish River and Bear Creek cut through the district, the Redmond Central Connector runs under the 2 Line station at NE 76th Street, and Redmond Town Center is the daily errand loop. A fence here has to fit a short run, a HOA packet, and a neighbor who lives six feet away — not a 150-foot suburban back line.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across Redmond&apos;s Eastside core, including downtown townhome rows and the residential pockets that still sit between the retail blocks. We use Fence Genius to capture the actual bay lengths and any grade drop toward the river before a post goes in the ground, so panels arrive cut for the alley instead of getting ripped down on a busy street. The goal is a fence that looks like it belongs on Cleveland, not a catalog panel dropped onto a zero-lot-line yard.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Downtown Redmond Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Townhome HOA Drawings
                      </h3>
                      <p className="text-muted-foreground">
                        Compact associations around Town Center and Cleveland Street often want a simple elevation, stain note, and height callout. We put that packet together so the board is not guessing from a photo of someone else&apos;s yard.
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
                        Full coverage on materials and labor, including hardware chosen for the extra damp that sits along the Sammamish River corridor. We stand behind the install through Redmond winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Street-Noise Screening
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar on the Redmond Way and 164th sides of a lot takes the edge off traffic and light-rail ambient noise. We keep hogwire or lower runs where you still want eyes on the Connector or the river.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Alley-Width Installations
                      </h3>
                      <p className="text-muted-foreground">
                        Compact equipment and hand-carry days for alleys that will not take a full truck. Fence Genius shortens panel bays so a 12-foot townhome run does not get a leftover gap at the gate.
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
                What Downtown Redmond Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Townhome patio off the alley — we needed privacy from the neighbor without blocking the walkway. They built a short cedar run with a self-closing gate and it fits the HOA notes. Crew was in and out before the weekend market crowd hit Cleveland.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Maya in Downtown Redmond</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot backs toward the Connector. Hogwire in a cedar frame keeps the dog in and we still see people on the trail. They measured the slope down to the river so the bottom rail does not float.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Jordan in Downtown Redmond</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Redmond Way noise was the issue, not a giant backyard. Solid cedar on the street side, open run on the patio. The townhome board signed off on the first drawing they sent.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Downtown Redmond</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Downtown Redmond fence" />

        {/* 6. Photo Gallery — nearby Eastside installs until downtown-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Kirkland"
          title="Recent Fence Work Near Downtown Redmond"
          description="These photos are from nearby Eastside jobs, including Kirkland just west of Downtown Redmond. Same crew, same materials, and the same Fence Genius process we use on downtown townhome and mixed-use lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Redmond" neighborhood="Downtown Redmond" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Downtown Redmond–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Redmond Lot Width and Alley Access
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Townhome yards off Cleveland Street and the alleys behind 164th Avenue NE are often one patio deep. A six-foot privacy panel that works on Education Hill can swallow the whole space here. We measure the usable run, place gates where trash and bikes actually move, and shorten bays so the last panel is not a leftover stub. Crews hand-carry material when a truck cannot sit in the alley through the afternoon.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Redmond Mixed-Use Zoning and Height
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Downtown zones and remaining residential parcels sit next to each other. Mixed-use lots can allow a taller fence than a leftover R-zone lot a block north. Front setbacks on Redmond Way and 166th still have to keep sight triangles at corners near the station. We read the parcel zone before we promise a height, then match the townhome HOA if it is stricter than the city.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Redmond River Moisture and Trail Edges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that step down toward the Sammamish River or Bear Creek stay damp longer than the plateau on Education Hill. Raw cedar grays fast, and cheap fasteners streak. We spec pre-stained Western Red Cedar and stainless or hot-dipped hardware. Where a lot backs to the Central Connector, hogwire or a mixed-height run keeps eyes on the trail while still containing pets — and we flag critical-area buffers before digging rather than after.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Redmond Noise, Neighbors, and Shared Walls
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Redmond Way, the 2 Line, and Town Center parking all add ambient noise that a solid cedar run can soften on the street side of a patio. The other three sides are often another owner&apos;s wall or a shared HOA strip. We confirm who owns the line, talk through stain so two attached yards do not clash, and keep post holes off buried utilities that are denser downtown than on a suburban cul-de-sac.
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
                Fence Installation Cost in Downtown Redmond
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A downtown fence is a short-run urban install: alley access, HOA notes, and river-side moisture can move the number. These are typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $46–$70 per linear foot
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
                      $56–$78 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Alley hand-carry, custom gates, and HOA drawing packages may add 10–15%. Get an exact quote for your Downtown Redmond property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Downtown Redmond property</Link>
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
                Popular Fence Styles in Downtown Redmond
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior townhome patios and alley lots. Full screening from the neighbor, pre-stained cedar that holds up to river-corridor damp, and a look that fits mixed-use blocks around Cleveland and 164th.
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
                    Cedar frame with black mesh for lots that face the Connector, the Sammamish, or a courtyard. Dogs stay in, the trail stays in view, and the lighter footprint is easier in a 20-foot yard than a solid wall.
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
                    Aluminum panels in a cedar frame on steel posts — the low-maintenance option when a downtown calendar has no extra Saturday for staining. Clean enough for HOA review without looking like a commercial lot.
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
                Our Downtown Redmond Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Downtown Redmond Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the short run, note alley width, map utilities, and check whether the parcel sits in a Downtown mixed-use zone or a leftover residential zone. Fence Genius captures bay lengths and any drop toward the river so panels are built to the actual space.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Downtown Redmond Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your townhome row has an architectural committee, we prepare a simple drawing, stain note, and height callout. If it does not, we still document Redmond height and sight-triangle rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements — pre-stained cedar, hogwire frames, or hybrid modules — so downtown install days are mostly setting posts and hanging finished sections instead of ripping lumber on Cleveland Street.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Downtown Redmond Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment and hand-carry when alleys off Leary Way or NE 76th will not take a full truck. Short bays, careful post placement near shared walls, and full cleanup at the end of each day. Most jobs wrap in one to three days.
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
          title="Downtown Redmond Fence Installation FAQs"
          items={DOWNTOWN_REDMOND_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Redmond"
        neighborhoodName="Downtown Redmond"
        attractions={DOWNTOWN_REDMOND_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Downtown Redmond households sit in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              , with many elementary students at{" "}
              <a
                href="https://redmond.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Elementary
              </a>{" "}
              and middle-schoolers a short hop to{" "}
              <a
                href="https://rms.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Middle School
              </a>
              . After school, the{" "}
              <a
                href="https://kcls.org/locations/redmond/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Library
              </a>{" "}
              on NE 85th Street is the indoor fallback when the plaza at Anderson Park is packed.
            </p>
            <p>
              Weekdays are built around walking to Town Center and boarding the 2 Line at{" "}
              <a
                href="https://www.soundtransit.org/ride-with-us/stops-stations/downtown-redmond-station"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Downtown Redmond Station
              </a>
              . Weekends split between the river path at{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/sammamish-river-trail"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sammamish River Trail
              </a>
              , dinner and errands listed by{" "}
              <a
                href="https://experienceredmond.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Experience Redmond
              </a>
              , and city permits or park questions through{" "}
              <a
                href="https://www.redmond.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                the City of Redmond
              </a>
              . SR-520 and Redmond Way still carry the car trips; a lot of downtown life never needs them.
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
                Also Serving Nearby Redmond Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Redmond. From Downtown we also work in Education Hill to the north, Overlake to the south, Grass Lawn to the west, and across the city line into Kirkland and Bellevue.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond">Redmond overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/juanita">Juanita</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland</Link>
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
                Ready to Enhance Your Downtown Redmond Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Downtown Redmond. We&apos;ll walk the alley, talk through privacy vs. trail views, and quote a fence that fits your townhome or mixed-use lot.
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

export default DowntownRedmondPage;
