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

const CANONICAL = "https://myfence.com/service-areas/kirkland/downtown-kirkland";
const META_TITLE =
  "Downtown Kirkland Fence Installation | Townhome & Mixed-Use Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Downtown Kirkland, WA. Cedar, hogwire & hybrid fencing for townhomes, alley lots, and mixed-use yards near Marina Park and Park Lane. Free quotes. (253) 455-1885.";

const DOWNTOWN_KIRKLAND_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Downtown Kirkland?",
    answer:
      "The City of Kirkland generally does not require a building permit for residential fences under eight feet, but zoning still controls height, setbacks, and corner sight triangles. Front-yard fencing is typically limited to four feet; side and rear yards are usually allowed up to six feet. Downtown parcels sit in a mix of pedestrian-oriented mixed-use zones along Lake Street, Central Way, and Kirkland Avenue and leftover residential lots toward Norkirk and Houghton, so the allowed height can change from one block to the next. Townhome and condo associations around Kirkland Urban and Park Lane often want architectural drawings even when the city does not. Lots within 200 feet of Lake Washington's ordinary high water mark may also need shoreline review. MyFence.com checks the parcel zone, HOA packet, and Kirkland Planning and Building rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Downtown Kirkland's townhome yards and waterfront-adjacent lots?",
    answer:
      "Six-foot cedar privacy is the usual choice on interior townhome patios and alley lots off 3rd Street or State Street, where screening from a neighbor and dog containment matter more than a view. Along Lake Street South and on lots that face Marina Park or David E. Brink Park, hogwire in a cedar frame keeps the water in sight without turning a short run into a solid wall. Hybrid aluminum-and-cedar systems suit households that would rather skip staining on a downtown calendar. Fence Genius maps the short bays and any grade drop toward the lake so panels fit the actual patio, not a suburban catalog length.",
  },
  {
    question: "How much does fence installation cost in Downtown Kirkland?",
    answer:
      "Downtown Kirkland fence installation typically runs $48–$72 per linear foot for six-foot cedar privacy, $42–$60 for hogwire with a cedar frame, and $56–$80 for hybrid aluminum/cedar. Tight alley access, custom gates for shared side yards, marine-grade hardware near the water, and HOA drawing packages can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Downtown Kirkland?",
    answer:
      "Most Downtown Kirkland residential and townhome projects finish in one to three working days after any city or HOA paperwork is complete. Pre-fabricated panels cut on-site time. Short bays, hand-carrying materials down alleys off Kirkland Avenue or 5th Avenue, and parking around Marina Park event days are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question:
      "Do I need my neighbor's permission for a fence in Downtown Kirkland?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Kirkland does not require their signature. On townhome rows and condo decks, the HOA or the adjoining owner may already control the shared side yard, so we confirm who owns which stretch before digging. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which run.",
  },
];

const DOWNTOWN_KIRKLAND_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Marina Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Marina-Park",
    description:
      "The waterfront plaza at the foot of Lake Street — sandy beach, public dock, and the Al Locke Pavilion. Saturday markets and summer concerts set the crowd pattern that downtown households walk into after work.",
  },
  {
    name: "Peter Kirk Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Peter-Kirk-Park",
    description:
      "Kirkland's civic lawn on 3rd Street: seasonal pool, pickleball, skate park, and Lee Johnson Field. Downtown patios that are one gate deep treat this park as the extra backyard.",
  },
  {
    name: "Kirkland Performance Center",
    url: "https://www.kpcenter.org/",
    description:
      "The 400-seat theater at 350 Kirkland Avenue, next to the library. Evening shows fill street parking on 3rd and Central Way — a real constraint when a crew needs to stage a downtown install.",
  },
  {
    name: "Kirkland Urban",
    url: "https://kirklandurban.com/",
    description:
      "The mixed-use campus wrapping the park — offices, apartments, splash pad, and ground-floor dining. Townhome and condo yards around the block often share HOA packets that want fencing to sit quietly next to this streetscape.",
  },
  {
    name: "David E. Brink Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/David-E.-Brink-Park",
    description:
      "A quieter waterfront strip at 555 Lake Street S, a few blocks south of the pavilion. Dock, pocket beach, and a paved loop — lots along Lake Street S often keep an open hogwire run so this shoreline stays in view.",
  },
];

const DowntownKirklandPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Downtown Kirkland, Kirkland",
    pageTitle: "Downtown Kirkland Fence Installation",
    description: META_DESCRIPTION,
    faqItems: DOWNTOWN_KIRKLAND_FAQS,
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
                    Serving Downtown Kirkland, Kirkland WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Downtown Kirkland Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Townhome, alley, and mixed-use fence work for Downtown
                  Kirkland — cedar privacy for compact yards, hogwire that keeps
                  Lake Washington in view, and hybrid systems built for busy
                  urban lots near Marina Park and Park Lane.
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
                  city="Downtown Kirkland, Kirkland"
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
                Fencing a Waterfront Grid, Not a Cul-de-Sac
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Downtown Kirkland is a walkable mixed-use core, not a hillside
                subdivision. Lots sit on Lake Street, Central Way, Kirkland
                Avenue, Park Lane, and the numbered streets around 3rd and 5th.
                Many are townhomes or condos with alley gates, shared side
                yards, and a patio that faces another patio. Marina Park anchors
                the waterfront, Peter Kirk Park is the civic lawn a block inland,
                and Kirkland Urban wraps the park with offices and apartments.
                A fence here has to fit a short run, a condo packet, and a
                neighbor who lives six feet away — not a 150-foot suburban back
                line.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across
                Kirkland&apos;s urban village, including downtown townhome rows
                and the remaining single-family pockets toward Norkirk and
                Houghton. We use Fence Genius to capture the actual bay lengths
                and any grade drop toward Lake Washington before a post goes in
                the ground, so panels arrive cut for the alley instead of getting
                ripped down on a busy Saturday on Park Lane. The goal is a fence
                that looks like it belongs on Lake Street, not a catalog panel
                dropped onto a zero-lot-line yard.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Downtown Kirkland Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Condo and Townhome Drawing Packets
                      </h3>
                      <p className="text-muted-foreground">
                        Associations around Kirkland Urban, Park Lane, and the
                        Lake Street condos often want a simple elevation, stain
                        note, and height callout. We put that packet together so
                        the board is not guessing from a photo of someone
                        else&apos;s suburban yard.
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
                        and the Marina Park shoreline. We stand behind the
                        install through Kirkland winters.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Screening for Lake Street and Event Nights
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar on the Central Way and Lake Street sides of a
                        lot takes the edge off traffic and pavilion concert
                        nights. We keep hogwire or lower runs where you still
                        want eyes on the water or Peter Kirk Park.
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
                        Compact equipment and hand-carry days for alleys that
                        will not take a full truck. Fence Genius shortens panel
                        bays so a 12-foot townhome run does not get a leftover
                        gap at the gate.
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
                What Downtown Kirkland Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Townhome patio off 3rd Street — we needed privacy from
                    the neighbor without boxing in the walkway to the garage.
                    They built a short cedar run with a self-closing gate and it
                    matched the HOA stain note. Crew wrapped before the Saturday
                    market crowd hit Lake Street.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Lena in Downtown Kirkland</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot steps down toward Lake Street S. Hogwire in a
                    cedar frame keeps the dog in and we still see the water past
                    Brink Park. They measured the slope so the bottom rail does
                    not float over the grade.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Owen in Downtown Kirkland</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Central Way noise was the issue, not a giant backyard.
                    Solid cedar on the street side, open run on the patio. The
                    condo board signed off on the first drawing they sent.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Nadia in Downtown Kirkland</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Downtown Kirkland fence" />

        {/* 6. Photo Gallery — Kirkland-area installs until downtown-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Kirkland"
          title="Recent Fence Work Near Downtown Kirkland"
          description="These photos are from Kirkland jobs in and around the urban core. Same crew, same materials, and the same Fence Genius process we use on downtown townhome and mixed-use lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Kirkland" neighborhood="Downtown Kirkland" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Downtown Kirkland–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Kirkland Lot Width and Alley Access
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Townhome yards off 3rd Street and the alleys behind Kirkland
                    Avenue are often one patio deep. A six-foot privacy panel
                    that works on Finn Hill can swallow the whole space here. We
                    measure the usable run, place gates where trash and bikes
                    actually move, and shorten bays so the last panel is not a
                    leftover stub. Crews hand-carry material when a truck cannot
                    sit on Park Lane through a market morning.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Kirkland Mixed-Use Zoning and Height
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pedestrian-oriented downtown zones and remaining residential
                    parcels sit next to each other. Mixed-use lots along Central
                    Way can read differently than a leftover residential lot a
                    block toward Norkirk. Front setbacks on Lake Street and 5th
                    Avenue still have to keep sight triangles at corners near the
                    transit center. We read the parcel zone before we promise a
                    height, then match the condo HOA if it is stricter than the
                    city.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Kirkland Lake Moisture and Shoreline Edges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that step down toward Lake Washington stay damp longer
                    than inland Kingsgate. Raw cedar grays fast, and cheap
                    fasteners streak. We spec pre-stained Western Red Cedar and
                    stainless or hot-dipped hardware. Properties within 200 feet
                    of the ordinary high water mark may need shoreline review
                    before a fence goes in. Where a lot faces Marina Park or
                    Brink Park, hogwire or a mixed-height run keeps eyes on the
                    water while still containing pets.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Downtown Kirkland Noise, Neighbors, and Shared Walls
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lake Street, Central Way, and pavilion concert nights add
                    ambient noise that a solid cedar run can soften on the street
                    side of a patio. The other three sides are often another
                    owner&apos;s wall or a shared HOA strip. We confirm who owns
                    the line, talk through stain so two attached yards do not
                    clash, and keep post holes off buried utilities that are
                    denser downtown than on a suburban cul-de-sac.
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
                Fence Installation Cost in Downtown Kirkland
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A downtown fence is a short-run urban install: alley access, HOA
                notes, and lake-side moisture can move the number. These are
                typical ranges; your on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $48–$72 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $42–$60 per linear foot
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
                  Alley hand-carry, custom gates, marine-grade hardware near the
                  water, and HOA drawing packages may add 10–15%. Get an exact
                  quote for your Downtown Kirkland property with a free on-site
                  measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Downtown Kirkland property
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
                Popular Fence Styles in Downtown Kirkland
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior townhome patios and alley lots.
                    Full screening from the neighbor, pre-stained cedar that
                    holds up to lake-corridor damp, and a look that fits mixed-use
                    blocks around 3rd Street and Kirkland Avenue.
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
                    Cedar frame with black mesh for lots that face Marina Park,
                    Brink Park, or a courtyard. Dogs stay in, the water stays in
                    view, and the lighter footprint is easier in a 20-foot yard
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
                    low-maintenance option when a downtown calendar has no extra
                    Saturday for staining. Clean enough for HOA review without
                    looking like a commercial lot.
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
                Our Downtown Kirkland Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Downtown Kirkland Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the short run, note alley width, map
                    utilities, and check whether the parcel sits in a downtown
                    mixed-use zone or a leftover residential zone. Fence Genius
                    captures bay lengths and any drop toward the lake so panels
                    are built to the actual space.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Downtown Kirkland Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your townhome row or condo
                    building has an architectural committee, we prepare a simple
                    drawing, stain note, and height callout. If it does not, we
                    still document Kirkland height, setback, and shoreline rules
                    so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements —
                    pre-stained cedar, hogwire frames, or hybrid modules — so
                    downtown install days are mostly setting posts and hanging
                    finished sections instead of ripping lumber on Lake Street.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Downtown Kirkland Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment and hand-carry when alleys off
                    Kirkland Avenue or 5th Avenue will not take a full truck.
                    Short bays, careful post placement near shared walls, and
                    full cleanup at the end of each day. Most jobs wrap in one to
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
          title="Downtown Kirkland Fence Installation FAQs"
          items={DOWNTOWN_KIRKLAND_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Kirkland"
        neighborhoodName="Downtown Kirkland"
        attractions={DOWNTOWN_KIRKLAND_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Downtown Kirkland households sit in the{" "}
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
                href="https://lve.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lakeview Elementary
              </a>
              , then later to{" "}
              <a
                href="https://kms.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kirkland Middle School
              </a>
              . After school, the{" "}
              <a
                href="https://kcls.org/locations/1518"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kirkland Library
              </a>{" "}
              on Kirkland Avenue is the indoor fallback when Peter Kirk Park is
              packed for pickleball or a ballgame.
            </p>
            <p>
              Weekdays are built around walking Park Lane and boarding buses at
              the downtown transit center toward I-405 at NE 85th Street.
              Weekends split between the waterfront at Marina Park, a show at
              the{" "}
              <a
                href="https://www.kpcenter.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kirkland Performance Center
              </a>
              , trail miles on the{" "}
              <a
                href="https://www.kirklandwa.gov/Government/Departments/Public-Works-Department/Cross-Kirkland-Corridor"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cross Kirkland Corridor
              </a>
              , and errands listed by{" "}
              <a
                href="https://www.explorekirkland.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Explore Kirkland
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
              . A lot of downtown life never needs a car.
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
                We install fences throughout Kirkland. From Downtown we also
                work in Juanita to the north, along the Market and Moss Bay
                waterfront, and across the city line into Redmond and Bellevue.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/juanita">Juanita</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond">Redmond</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/grass-lawn">Grass Lawn</Link>
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
                Ready to Enhance Your Downtown Kirkland Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Downtown Kirkland. We&apos;ll
                walk the alley, talk through privacy versus lake views, and quote
                a fence that fits your townhome or mixed-use lot.
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

export default DowntownKirklandPage;
