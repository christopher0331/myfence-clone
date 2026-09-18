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

const CANONICAL = "https://myfence.com/service-areas/bellevue/crossroads";
const META_TITLE =
  "Crossroads Bellevue Fence Installation | Townhome & Arterial Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Crossroads, Bellevue, WA. Cedar, hogwire & hybrid fencing for townhomes, mid-century lots, and yards along NE 8th Street and 156th Avenue NE. Free quotes. (253) 455-1885.";

const CROSSROADS_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Crossroads, Bellevue?",
    answer:
      "The City of Bellevue generally does not require a building permit for a residential fence unless it is taller than eight feet, sits in a critical-area buffer, or is built of concrete block. Height still matters: fences in a required front-yard setback are typically limited to four feet six inches; side and rear yards can usually go to six or eight feet depending on the zone. Corner lots on NE 8th Street, 156th Avenue NE, 148th Avenue NE, and NE 12th Street must keep sight-distance triangles clear. Townhome and condo boards along 156th often want a drawing packet even when the city does not. MyFence.com checks the parcel zone, any HOA rules, and Bellevue Development Services requirements before we quote.",
  },
  {
    question:
      "What fence styles work best for Crossroads townhomes and lots along NE 8th Street?",
    answer:
      "Six-foot cedar privacy is the usual choice on interior townhome patios and on the NE 8th Street or 156th Avenue NE side of a lot, where screening from traffic and neighbors matters more than a long view. On yards that open toward Crossroads Park or a shared greenbelt, hogwire in a cedar frame keeps dogs in without stacking a solid wall on a short run. Hybrid aluminum-and-cedar systems suit households that would rather skip staining in a dense, shaded side yard. Fence Genius maps each bay so panels fit compact lots instead of getting ripped down on a Saturday when the mall lot is full.",
  },
  {
    question: "How much does fence installation cost in Crossroads, Bellevue?",
    answer:
      "Crossroads fence installation typically runs $46–$68 per linear foot for six-foot cedar privacy, $40–$58 for hogwire with a cedar frame, and $54–$76 for hybrid aluminum/cedar. Tight townhome side yards, extra gates for shared walks, HOA drawing packages, and hand-carrying materials off 156th Avenue NE can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Crossroads?",
    answer:
      "Most Crossroads residential and townhome projects finish in one to three working days after any city or HOA paperwork is complete. Pre-fabricated panels cut on-site time. Tight side yards between 1960s–1990s homes, parking around Crossroads Bellevue and the park, and custom gates for shared walks are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Crossroads?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Bellevue does not require their signature. On townhome rows and condo decks, the HOA or the adjoining owner may already control the shared side yard, so we confirm who owns which stretch before digging. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which run.",
  },
];

const CROSSROADS_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Crossroads Park",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/crossroads-park",
    description:
      "A 34-acre civic lawn on 164th Avenue NE with courts, a skate bowl, spray playground, and looping paths. Back lines that face the park often want screening from weekend crowds without boxing in a short backyard.",
  },
  {
    name: "Crossroads Community Center",
    url: "https://bellevuewa.gov/city-government/departments/parks/community-centers/crossroads",
    description:
      "The recreation hall at 16000 NE 10th Street — classes, theater, and evening programs that set the after-school traffic pattern a fence crew works around on NE 10th and 164th.",
  },
  {
    name: "Crossroads Bellevue",
    url: "https://www.crossroadsbellevue.com/",
    description:
      "The indoor market at 15600 NE 8th Street. Groceries, restaurants, and the Tuesday farmers market pull cars onto 156th; that same curb is where install trucks have to stage without blocking a townhome walk.",
  },
  {
    name: "Crossroads Library Connection",
    url: "https://kcls.org/locations/crossroads/",
    description:
      "The King County Library System branch inside the shopping center. Families treat it as the weekday indoor stop; nearby lots often add a side-yard gate so kids can walk to the mall without cutting through a neighbor's patio.",
  },
  {
    name: "Kelsey Creek Farm",
    url: "https://bellevuewa.gov/city-government/departments/parks/parks-and-trails/parks/kelsey-creek-farm",
    description:
      "Bellevue's working farm park a short drive west of 148th Avenue NE. Crossroads households use it as the extra outing when the spray park at Crossroads Park is already full on a Saturday.",
  },
];

const CrossroadsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Crossroads, Bellevue",
    pageTitle: "Crossroads Bellevue Fence Installation",
    description: META_DESCRIPTION,
    faqItems: CROSSROADS_FAQS,
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
                    Serving Crossroads, Bellevue WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Crossroads Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Townhome, mid-century, and arterial-lot fence work for
                  Crossroads — cedar privacy that quiets NE 8th Street, hogwire
                  that keeps Crossroads Park in view, and hybrid systems built
                  for compact yards along 156th Avenue NE.
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
                  city="Crossroads, Bellevue"
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
                Fencing Between NE 8th Street and the Park
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Crossroads sits at Bellevue&apos;s east-side intersection of NE
                8th Street and 156th Avenue NE — a mix of mid-century houses,
                townhome rows, and apartment courts rather than one cul-de-sac
                pattern. Crossroads Park and the community center occupy the
                east end on 164th; the shopping center fills the southwest
                corner of the same grid. A fence here has to handle a short
                side yard, a board packet from a townhome association, and
                traffic noise that does not exist on a quiet Somerset hillside.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across
                Crossroads, including townhome patios off 156th and older lots
                that step south toward Lake Hills Boulevard. We use Fence Genius
                to capture the actual bay lengths and any grade change before a
                post goes in the ground, so panels arrive cut for compact yards
                instead of getting ripped down while mall traffic stacks on NE
                8th. The goal is a fence that belongs on this block, not a
                catalog panel dropped onto a shared walk.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Crossroads Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Townhome and Condo Drawing Packets
                      </h3>
                      <p className="text-muted-foreground">
                        Associations along 156th Avenue NE and NE 12th Street
                        often want a simple elevation, stain note, and height
                        callout. We put that packet together so the board is
                        not guessing from a photo of someone else&apos;s
                        suburban yard.
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
                        chosen for shaded, high-traffic side yards that stay
                        damp after NE 8th Street rain. We stand behind the
                        install through Bellevue winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Screening From Arterial Traffic
                      </h3>
                      <p className="text-muted-foreground">
                        Lots that face NE 8th Street or 156th Avenue NE rarely
                        want an open run on the street side. We put solid cedar
                        where bus and mall traffic sit, and keep hogwire or a
                        lower run toward Crossroads Park when a view still
                        matters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Compact-Lot Panel Planning
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps short bays, gate swings, and shared
                        walks so a six-foot run does not steal the last three
                        feet of a townhome patio. Compact equipment and
                        hand-carry days cover the blocks a full truck cannot
                        sit on through a farmers-market Tuesday.
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
                What Crossroads Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Townhome patio off 156th — we needed a short cedar
                    run that the board would actually approve. They sent a
                    height callout and stain note with the quote, then hung
                    the panels so the gate still swings toward the shared
                    walk.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Ana in Crossroads</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot faces NE 8th Street near the shopping
                    center. Solid cedar on the street side cut the bus noise
                    enough that we actually sit outside after work. Crew
                    staged off a side street so they were not blocking mall
                    traffic.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— David in Crossroads</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Back line looks at Crossroads Park. Hogwire in a
                    cedar frame keeps the dog in and we still see the spray
                    park. They measured the short bay so the last panel does
                    not hover over the grade toward 164th.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Mei in Crossroads</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Crossroads Bellevue fence" />

        {/* 6. Photo Gallery — Bellevue-area installs until Crossroads-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Bellevue"
          title="Recent Fence Work Near Crossroads"
          description="These photos are from Bellevue jobs in and around east Bellevue, including Crossroads, Sherwood Forest, and nearby hillside lots. Same crew, same materials, and the same Fence Genius process we use on townhome, mid-century, and arterial lots here."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Bellevue" neighborhood="Crossroads" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Crossroads-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Crossroads Arterial Noise and Street Screening
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    NE 8th Street and 156th Avenue NE carry bus routes, mall
                    traffic, and after-school drop-off for Stevenson and Odle.
                    A six-foot cedar run on the street side of a lot will not
                    erase that sound, but it does cut the visual traffic and
                    soften the evening rush. We keep hogwire or a lower height
                    toward the park or a neighbor&apos;s garden so the yard
                    does not feel like a box. Sight triangles at 156th and NE
                    8th, 148th, and NE 12th still have to stay clear of a
                    tall front-yard fence.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Mixed Housing and Townhome HOA Rules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Crossroads is not one plat. Mid-century houses south toward
                    Lake Hills sit next to townhome rows and apartment courts
                    that face 156th. Pedestrian-oriented parcels near the
                    shopping center can read differently than a leftover
                    residential lot a block east toward 164th. We read the
                    parcel zone before we promise a height, then match the
                    townhome HOA if it is stricter than the city.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Compact Crossroads Lots and Shared Walks
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Crossroads yards are one patio deep. A six-foot privacy
                    panel that sits comfortably on a Somerset hillside can
                    swallow a townhome side yard here. We measure each bay,
                    place gates where bikes and trash actually move, and keep
                    post holes off buried utilities that are denser near the
                    mall than on a suburban cul-de-sac. Crews hand-carry
                    material when 156th or NE 8th will not take a full truck
                    through a market morning.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Park Edges, Pets, and Pedestrian Traffic
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that back toward Crossroads Park, the community
                    center, or the paths along 164th see more foot traffic than
                    a typical east Bellevue street. Solid cedar on the park
                    side can help with evening privacy; hogwire keeps dogs in
                    without hiding the spray playground. We confirm who owns
                    the line — city park, HOA strip, or neighbor — before we
                    dig, and we talk through stain so two attached yards do not
                    clash.
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
                Fence Installation Cost in Crossroads
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Crossroads fence is often a short-run urban and townhome
                install: HOA notes, tight access, and extra gates can move the
                number. These are typical ranges; your on-site measurement is
                the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $46–$68 per linear foot
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
                      $54–$76 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Tight townhome side yards, custom gates, HOA drawing packages,
                  and hand-carrying materials off 156th Avenue NE may add
                  10–15%. Get an exact quote for your Crossroads property with
                  a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Crossroads property
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
                Popular Fence Styles in Crossroads
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on townhome patios and lots that face NE 8th
                    Street. Full screening from the neighbor or the mall
                    corridor, pre-stained cedar that holds up in shaded side
                    yards, and a look that fits mixed housing around 156th
                    Avenue NE.
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
                    Cedar frame with black mesh for lots that face Crossroads
                    Park or a shared greenbelt. Dogs stay in, the park stays in
                    view, and the lighter footprint is easier on a short run
                    than a solid wall.
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
                    low-maintenance option when a Crossroads calendar has no
                    extra Saturday for staining. Clean enough for HOA review
                    without looking like a commercial lot.
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
                Our Crossroads Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Crossroads Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note traffic on NE 8th or
                    156th, map utilities, and check whether the parcel sits in a
                    townhome association or a leftover single-family zone.
                    Fence Genius captures bay lengths and any grade change so
                    panels are built to the actual yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Crossroads Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your townhome row or condo
                    building has an architectural committee, we prepare a
                    simple drawing, stain note, and height callout. If it does
                    not, we still document Bellevue height, setback, and
                    sight-triangle rules so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements —
                    pre-stained cedar, hogwire frames, or hybrid modules — so
                    Crossroads install days are mostly setting posts and hanging
                    finished sections instead of ripping lumber on 156th Avenue
                    NE.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Crossroads Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment and hand-carry when NE 8th
                    Street or the mall lot will not take a full truck. Careful
                    post placement near shared walls, gates that match actual
                    walks, and full cleanup at the end of each day. Most jobs
                    wrap in one to three days.
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
          title="Crossroads Fence Installation FAQs"
          items={CROSSROADS_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Bellevue"
        neighborhoodName="Crossroads"
        attractions={CROSSROADS_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Crossroads households sit in the{" "}
              <a
                href="https://bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue School District
              </a>
              . Many elementary students walk or ride a short hop on NE 8th
              Street to{" "}
              <a
                href="https://stevenson.bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Stevenson Elementary
              </a>
              , then later to{" "}
              <a
                href="https://odle.bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Odle Middle School
              </a>{" "}
              on 143rd Avenue NE and{" "}
              <a
                href="https://interlakehigh.bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Interlake High School
              </a>{" "}
              on NE 24th Street. Evening homework stops often land at the{" "}
              <a
                href="https://kcls.org/locations/lake-hills/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Hills Library
              </a>{" "}
              a mile south on Lake Hills Boulevard.
            </p>
            <p>
              Weekdays are built around buses on 156th Avenue NE and the short
              hop west toward I-405 at NE 8th. Weekends split between the spray
              park at Crossroads Park, errands inside Crossroads Bellevue, and
              a quieter farm visit at Kelsey Creek. Height and setback
              questions go through{" "}
              <a
                href="https://bellevuewa.gov/city-government/departments/development/zoning-and-land-use/zoning-requirements/fences"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue fence and zoning rules
              </a>
              . Parks programming and community-center hours are listed by{" "}
              <a
                href="https://bellevuewa.gov/city-government/departments/parks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue Parks &amp; Community Services
              </a>
              .
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
                We install fences throughout Bellevue. From Crossroads we also
                work south into Sherwood Forest, west toward Wilburton and
                Downtown Bellevue, and downhill into Somerset and Newport Hills.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/sherwood-forest">
                    Sherwood Forest
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/somerset">Somerset</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newport-hills">
                    Newport Hills
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/newcastle">Newcastle</Link>
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
                Ready to Enhance Your Crossroads Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Crossroads. We&apos;ll walk the
                lot, talk through privacy versus park views, and quote a fence
                that fits your townhome, mid-century house, or arterial-side
                yard.
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

export default CrossroadsPage;
