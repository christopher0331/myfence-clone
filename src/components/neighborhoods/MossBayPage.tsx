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
  Waves,
  Eye,
  Mountain,
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

const CANONICAL = "https://myfence.com/service-areas/kirkland/moss-bay";
const META_TITLE =
  "Moss Bay Kirkland Fence Installation | Waterfront & Hillside Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Moss Bay, Kirkland, WA. Cedar, hogwire & hybrid fencing for waterfront condos, townhomes, and hillside lots along Lake Street S and Lake Washington Blvd. Free quotes. (253) 455-1885.";

const MOSS_BAY_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Moss Bay?",
    answer:
      "The City of Kirkland generally does not require a building permit for residential fences under eight feet, but zoning still controls height, setbacks, and corner sight triangles. Front-yard fencing is typically limited to four feet; side and rear yards are usually allowed up to six feet. Moss Bay sits inside Kirkland's Greater Downtown Urban Center, so a parcel on Lake Street S or 2nd Avenue S can sit in a pedestrian-oriented mixed-use zone while the next lot up the hill toward 6th Street S is still residential. Lots within 200 feet of Lake Washington's ordinary high water mark may also need shoreline review. Condo and townhome boards along the waterfront often want a drawing packet even when the city does not. MyFence.com checks the parcel zone, any HOA rules, and Kirkland Planning and Building requirements before we quote.",
  },
  {
    question:
      "What fence styles work best for Moss Bay's hillside lots and waterfront condos?",
    answer:
      "Six-foot cedar privacy is the usual choice on interior townhome patios and uphill lots off State Street S or 6th Street S, where screening from a neighbor matters more than a view. Along Lake Street S and Lake Washington Boulevard, hogwire in a cedar frame keeps Lake Washington in sight without turning a short waterfront run into a solid wall. Hybrid aluminum-and-cedar systems suit households that would rather skip staining in a damp lakeside climate. Fence Genius maps the grade drop toward the lake so panels step with the slope instead of floating over it.",
  },
  {
    question: "How much does fence installation cost in Moss Bay?",
    answer:
      "Moss Bay fence installation typically runs $48–$72 per linear foot for six-foot cedar privacy, $42–$60 for hogwire with a cedar frame, and $56–$80 for hybrid aluminum/cedar. Steep lots, custom gates for shared side yards, moisture-ready hardware near the water, and HOA drawing packages can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Moss Bay?",
    answer:
      "Most Moss Bay residential and condo projects finish in one to three working days after any city or HOA paperwork is complete. Pre-fabricated panels cut on-site time. Stepped hillside bays, hand-carrying materials down Lake Street S or 2nd Avenue S, and parking around Marina Park event days are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Moss Bay?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Kirkland does not require their signature. On condo decks and townhome rows, the HOA or the adjoining owner may already control the shared side yard, so we confirm who owns which stretch before digging. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which run.",
  },
];

const MOSS_BAY_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "David E. Brink Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/David-E.-Brink-Park",
    description:
      "A pocket waterfront at 555 Lake Street S — dock, benches, and a paved loop a short walk from Moss Bay condos. Households on this block often keep an open hogwire run so the shoreline stays in the yard instead of disappearing behind a solid wall.",
  },
  {
    name: "Marsh Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Marsh-Park",
    description:
      "The next lawn south on Lake Washington Boulevard: grass, picnic tables, and a dock that Moss Bay walkers treat as the weekend extension of their own lot. Street parking is thin, which is the same constraint a fence crew hits on install day.",
  },
  {
    name: "Marina Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Marina-Park",
    description:
      "The sandy beach and Al Locke Pavilion at the north end of the Moss Bay waterfront. Summer concerts and the Saturday crowd set the noise and parking pattern that hillside lots above Lake Street live with after work.",
  },
  {
    name: "Cross Kirkland Corridor",
    url: "https://www.kirklandwa.gov/Government/Departments/Public-Works-Department/Cross-Kirkland-Corridor",
    description:
      "The rail-trail that climbs the inland edge of Moss Bay toward Everest and the NE 85th corridor. Back lines that face the trail often want screening from foot traffic without boxing in a small uphill yard.",
  },
  {
    name: "Peter Kirk Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Peter-Kirk-Park",
    description:
      "The civic lawn on 3rd Street — pool, pickleball, skate park, and Lee Johnson Field. Moss Bay households a few blocks east treat this as the extra backyard when a condo patio is one gate deep.",
  },
];

const MossBayPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Moss Bay, Kirkland",
    pageTitle: "Moss Bay Kirkland Fence Installation",
    description: META_DESCRIPTION,
    faqItems: MOSS_BAY_FAQS,
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
                    Serving Moss Bay, Kirkland WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Moss Bay Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Waterfront condo, townhome, and hillside fence work for Moss
                  Bay — cedar privacy for compact yards, hogwire that keeps Lake
                  Washington in view, and hybrid systems built for the slope
                  between Lake Street S and 6th Street S.
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
                  city="Moss Bay, Kirkland"
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
                Fencing the Slope From Lake Street to the Corridor
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Moss Bay is Kirkland&apos;s official waterfront neighborhood — the
                stretch that drops from the Cross Kirkland Corridor down Lake
                Street S, 2nd Avenue S, and State Street S to Lake Washington.
                Lots here are a mix of condo decks, townhome patios, and older
                hillside houses, not a single cul-de-sac pattern. Marina Park
                and David E. Brink Park sit on the water; Marsh Park is the next
                lawn south on Lake Washington Boulevard. A fence in this grid
                has to handle a grade change, a condo packet, and a neighbor
                who lives one landing away.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across
                Moss Bay, including waterfront buildings and the remaining
                single-family pockets toward Everest and Houghton. We use Fence
                Genius to capture the actual bay lengths and the drop toward
                the lake before a post goes in the ground, so panels arrive
                stepped for the hillside instead of getting ripped down on a
                busy Saturday on Lake Street S. The goal is a fence that looks
                like it belongs on this slope, not a catalog panel dropped onto
                a zero-lot-line yard.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Moss Bay Homeowners Trust MyFence.com
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
                        Associations along Lake Street S and the waterfront
                        buildings near 2nd Avenue S often want a simple
                        elevation, stain note, and height callout. We put that
                        packet together so the board is not guessing from a
                        photo of someone else&apos;s suburban yard.
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
                        and the Brink Park shoreline. We stand behind the
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
                        Lots that face Lake Washington or Marsh Park rarely want
                        a six-foot wall on every side. We keep hogwire or a
                        lower run on the water side and put solid cedar where
                        you actually need screening from the neighbor or the
                        trail.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Stepped Panels for the Hillside
                      </h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps the drop from 6th Street S down toward
                        Lake Street so each bay follows the grade. Compact
                        equipment and hand-carry days cover the blocks a full
                        truck cannot sit on through a pavilion concert night.
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
                What Moss Bay Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Condo patio off 2nd Avenue S — we needed a short
                    cedar run that the board would actually approve. They sent
                    a height callout and stain note with the quote, then
                    stepped the panels so the bottom rail follows the drop
                    toward the lake.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Moss Bay</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot faces Lake Washington Boulevard near Marsh
                    Park. Hogwire in a cedar frame keeps the dog in and we
                    still see the water. They measured the slope so the last
                    bay does not hover over the grade.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Moss Bay</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Uphill lot toward the Corridor — trail traffic was
                    the issue, not a giant backyard. Solid cedar on the trail
                    side, open run toward the lake. Crew hand-carried
                    everything because Lake Street S was packed for a concert
                    night.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Elise in Moss Bay</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Moss Bay Kirkland fence" />

        {/* 6. Photo Gallery — Kirkland-area installs until Moss Bay-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Kirkland"
          title="Recent Fence Work Near Moss Bay"
          description="These photos are from Kirkland jobs in and around the Moss Bay waterfront and hillside. Same crew, same materials, and the same Fence Genius process we use on condo, townhome, and sloped lots here."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Kirkland" neighborhood="Moss Bay" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Moss Bay–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Moss Bay Terrain and Stepped Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The neighborhood falls from the Cross Kirkland Corridor
                    toward Lake Washington. A six-foot privacy panel that sits
                    level on a Kingsgate cul-de-sac will leave a gap at the
                    downhill post here. We measure each bay, step panels with
                    the grade, and place gates where bikes and trash actually
                    move on 2nd Avenue S and State Street S. Crews hand-carry
                    material when a truck cannot sit on Lake Street S through a
                    market or concert morning.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Mixed-Use Zoning in the Greater Downtown Center
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Moss Bay is part of Kirkland&apos;s Greater Downtown Urban
                    Center. Pedestrian-oriented parcels along Lake Street S can
                    read differently than a leftover residential lot a block
                    uphill toward 6th Street S. Front setbacks still have to
                    keep sight triangles at corners near the transit center. We
                    read the parcel zone before we promise a height, then match
                    the condo HOA if it is stricter than the city.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Lake Moisture and Shoreline Edges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that step down toward Lake Washington stay damp longer
                    than inland Kingsgate. Raw cedar grays fast, and cheap
                    fasteners streak. We spec pre-stained Western Red Cedar and
                    stainless or hot-dipped hardware. Properties within 200 feet
                    of the ordinary high water mark may need shoreline review
                    before a fence goes in. Where a lot faces Brink Park or
                    Marsh Park, hogwire or a mixed-height run keeps eyes on the
                    water while still containing pets.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Moss Bay Views, Neighbors, and Shared Walls
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lake Street traffic and pavilion concert nights add ambient
                    noise that a solid cedar run can soften on the street side
                    of a patio. The water side is often a view the owner paid
                    for. The other two sides may be another owner&apos;s wall or
                    a shared HOA strip. We confirm who owns the line, talk
                    through stain so two attached yards do not clash, and keep
                    post holes off buried utilities that are denser here than
                    on a suburban cul-de-sac.
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
                Fence Installation Cost in Moss Bay
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Moss Bay fence is a short-run urban and hillside install:
                slope, HOA notes, and lake-side moisture can move the number.
                These are typical ranges; your on-site measurement is the real
                quote.
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
                  Stepped hillside bays, custom gates, moisture-ready hardware
                  near the water, and HOA drawing packages may add 10–15%. Get
                  an exact quote for your Moss Bay property with a free on-site
                  measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Moss Bay property
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
                Popular Fence Styles in Moss Bay
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior townhome patios and uphill lots.
                    Full screening from the neighbor or the Corridor, pre-stained
                    cedar that holds up to lakeside damp, and a look that fits
                    the mixed-use blocks around 2nd Avenue S and State Street S.
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
                    Cedar frame with black mesh for lots that face Brink Park,
                    Marsh Park, or the boulevard. Dogs stay in, the water stays
                    in view, and the lighter footprint is easier on a short
                    waterfront run than a solid wall.
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
                Our Moss Bay Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Moss Bay Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note the grade toward the
                    lake, map utilities, and check whether the parcel sits in a
                    downtown mixed-use zone or a leftover residential zone.
                    Fence Genius captures bay lengths and the drop so panels are
                    built to the actual hillside.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Moss Bay Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your condo building or
                    townhome row has an architectural committee — or if the
                    Moss Bay Neighborhood Association packet applies — we
                    prepare a simple drawing, stain note, and height callout. If
                    it does not, we still document Kirkland height, setback, and
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
                    Moss Bay install days are mostly setting posts and hanging
                    finished sections instead of ripping lumber on Lake Street S.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Moss Bay Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment and hand-carry when 2nd Avenue S
                    or Lake Street S will not take a full truck. Stepped bays,
                    careful post placement near shared walls, and full cleanup
                    at the end of each day. Most jobs wrap in one to three days.
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
          title="Moss Bay Fence Installation FAQs"
          items={MOSS_BAY_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Kirkland"
        neighborhoodName="Moss Bay"
        attractions={MOSS_BAY_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Moss Bay households sit in the{" "}
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
              . Civic questions and neighborhood meetings run through the{" "}
              <a
                href="https://www.mossbay.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Moss Bay Neighborhood Association
              </a>
              .
            </p>
            <p>
              Weekdays are built around walking Lake Street S and boarding
              buses toward I-405 at NE 85th Street. Weekends split between the
              dock at Brink Park, the lawn at Marsh Park, trail miles on the{" "}
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
              . The city&apos;s{" "}
              <a
                href="https://www.kirklandwa.gov/Government/Departments/Planning-and-Building/Planning-Projects/Neighborhood-Planning/Moss-Bay-Neighborhood-Plan-Update"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Moss Bay Neighborhood Plan
              </a>{" "}
              is the policy backdrop for how this urban-center slope keeps
              growing.
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
                We install fences throughout Kirkland. From Moss Bay we also
                work in the Downtown Kirkland retail core, north into Juanita,
                along the Market waterfront, and across the city line into
                Redmond and Bellevue.
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
                Ready to Enhance Your Moss Bay Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Moss Bay. We&apos;ll walk the
                slope, talk through privacy versus lake views, and quote a fence
                that fits your condo, townhome, or hillside lot.
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

export default MossBayPage;
