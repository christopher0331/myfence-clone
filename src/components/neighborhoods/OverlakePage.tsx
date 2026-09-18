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
  Briefcase,
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

const CANONICAL = "https://myfence.com/service-areas/redmond/overlake";
const META_TITLE =
  "Overlake Redmond Fence Installation | Campus & Village Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Overlake, Redmond, WA. Cedar, hogwire & hybrid fencing for townhomes, condos, and single-family lots near Microsoft campus and the 2 Line. Free quotes. (253) 455-1885.";

const OVERLAKE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Overlake, Redmond?",
    answer:
      "The City of Redmond generally does not require a building permit for residential fences under eight feet, but zoning still controls height, setbacks, and corner sight triangles. Front-yard fencing is typically limited to four feet; side and rear yards are usually allowed up to six feet. Overlake parcels sit in a mix of single-family streets north of NE 40th and Overlake Village mixed-use zones along 152nd Avenue NE, so the allowed height can change from one block to the next. Townhome and condo associations around the village and Village at Overlake Station often want architectural drawings even when the city does not. Lots that sit on the Bellevue side of NE 24th or 148th Avenue NE follow Bellevue rules instead. MyFence.com checks the parcel city, zone, and HOA packet before we quote.",
  },
  {
    question:
      "What fence styles work best for Overlake's townhome yards and campus-adjacent lots?",
    answer:
      "Six-foot cedar privacy is the usual choice on interior townhome patios and older cul-de-sac lots north of NE 40th, where screening from 148th or 156th Avenue NE and dog containment matter more than a view. Along SR-520 pedestrian bridges and on lots that face a courtyard, hogwire in a cedar frame keeps the space open without turning a short run into a solid wall. Hybrid aluminum-and-cedar systems suit households that would rather skip staining on a Microsoft-week calendar. Fence Genius maps the short bays and any grade drop so panels fit the actual patio, not a suburban catalog length.",
  },
  {
    question: "How much does fence installation cost in Overlake, Redmond?",
    answer:
      "Overlake fence installation typically runs $44–$68 per linear foot for six-foot cedar privacy, $38–$56 for hogwire with a cedar frame, and $54–$76 for hybrid aluminum/cedar. Tight townhome access, custom gates for shared side yards, HOA drawing packages, and arterial-side noise screening can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Overlake?",
    answer:
      "Most Overlake residential and townhome projects finish in one to three working days after any city or HOA paperwork is complete. Pre-fabricated panels cut on-site time. Hand-carrying materials through Overlake Village courtyards, parking around Redmond Technology Station, and weekday traffic on 148th and 156th are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Overlake?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Redmond does not require their signature. On townhome rows and condo decks, the HOA or the adjoining owner may already control the shared side yard, so we confirm who owns which stretch before digging. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which run.",
  },
];

const OVERLAKE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Redmond Technology Station",
    url: "https://www.soundtransit.org/ride-with-us/stops-stations/redmond-technology-station",
    description:
      "The 2 Line stop at 156th Avenue NE and NE 40th Street, with a parking garage and bus bays that sit on the Microsoft campus edge. Overlake households treat it as the weekday commute hinge between home, campus, and downtown Bellevue.",
  },
  {
    name: "Overlake Village Station",
    url: "https://www.soundtransit.org/ride-with-us/stops-stations/overlake-village-station",
    description:
      "A street-level 2 Line station at 2801 152nd Avenue NE, with pickup on Da Vinci Avenue NE. Townhome and condo residents in the village walk to the platform instead of fighting 148th at rush hour.",
  },
  {
    name: "Grass Lawn Park",
    url: "https://www.redmond.gov/facilities/facility/details/Grass-Lawn-Park-62",
    description:
      "A 39-acre city park just north of Overlake with turf fields, a seasonal splash pad, lighted courts, and a picnic pavilion. Weekend overflow when village courtyards feel too tight for a full family afternoon.",
  },
  {
    name: "Idylwood Beach Park",
    url: "https://www.redmond.gov/Facilities/Facility/Details/Idylwood-Beach-Park-64",
    description:
      "Lake Sammamish shoreline a few minutes east of 156th — swimming beach, picnic shelter, and a small car-top boat launch. The closest water stop for Overlake households that want a lake day without driving to Marymoor.",
  },
  {
    name: "Bridle Trails State Park",
    url: "https://parks.wa.gov/find-parks/state-parks/bridle-trails-state-park",
    description:
      "A 482-acre forest just west of 148th Avenue NE, with a dense trail network used by riders and walkers. Overlake lots that back toward the park edge see more wildlife pressure than the village blocks.",
  },
];

const OverlakePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Overlake, Redmond",
    pageTitle: "Overlake Redmond Fence Installation",
    description: META_DESCRIPTION,
    faqItems: OVERLAKE_FAQS,
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
                    Serving Overlake, Redmond WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Overlake Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Campus-adjacent fence work for Overlake townhomes, condos, and
                  cul-de-sac lots — cedar privacy that screens 148th and 156th,
                  hogwire for courtyard views, and hybrid systems built for a
                  Microsoft-week calendar.
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
                  city="Overlake, Redmond"
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
                Fencing Between Campus, Village, and the City Line
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Overlake is Redmond&apos;s southwest edge, where Microsoft&apos;s
                campus, two 2 Line stations, and the Bellevue city line sit in
                the same few blocks. South of NE 40th Street the streetscape is
                Overlake Village — townhomes, condos, and retail along 152nd
                Avenue NE and Da Vinci Avenue NE. North of 40th, older
                single-family cul-de-sacs still sit off 148th and 156th. SR-520
                cuts the district, with pedestrian bridges tying campus to the
                village. A fence here has to fit a short patio, an HOA packet,
                and arterial noise — not a 150-foot suburban back line.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com installs cedar, hogwire, and hybrid fences across
                Overlake, including village townhome rows and the residential
                pockets that still sit between office parks awaiting
                redevelopment. We use Fence Genius to capture actual bay lengths
                and any grade change before a post goes in the ground, so panels
                arrive cut for the courtyard instead of getting ripped down on
                156th. There is no single neighborhood-wide HOA, but village
                associations and campus-adjacent condos still want drawings. We
                check whether the parcel is Redmond or Bellevue so height and
                setback rules are settled before installation day.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Overlake Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Village HOA Drawing Packets
                      </h3>
                      <p className="text-muted-foreground">
                        Townhome and condo boards around Overlake Village and
                        Village at Overlake Station often want a simple
                        elevation, stain note, and height callout. We put that
                        packet together so the committee is not guessing from a
                        photo of someone else&apos;s patio.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Arterial and 520 Noise Screening
                      </h3>
                      <p className="text-muted-foreground">
                        Solid cedar on the 148th, 156th, and SR-520 sides of a
                        lot takes the edge off commute traffic. We keep hogwire
                        or a lower run where you still want eyes on a courtyard
                        or the pedestrian bridge.
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
                        chosen for the extra splash and grit that sit along
                        156th and the 520 corridor. Overlake installs are backed
                        for the long haul.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Briefcase className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Low-Maintenance Campus Calendars
                      </h3>
                      <p className="text-muted-foreground">
                        Hybrid aluminum-and-cedar and pre-stained privacy runs
                        suit households that walk to Redmond Technology Station
                        and do not have a spare Saturday for staining. We spec
                        for the calendar you actually keep.
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
                What Overlake Homeowners Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Townhome patio off 152nd — we needed screening from
                    the neighbor without eating the whole courtyard. They built
                    a short cedar run with a self-closing gate and the HOA
                    signed the drawing on the first pass. Crew finished before
                    the weekday station rush.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Lena in Overlake</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot sits closer to 148th than I wanted to admit.
                    Solid cedar on the arterial side cut the traffic noise.
                    Hogwire on the back keeps the dog in and we still see the
                    trees toward Bridle Trails.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Chris in Overlake</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We work on campus and did not want a fence that
                    needed staining every spring. Hybrid panels in a cedar
                    frame, steel posts, and they measured the short bays so
                    nothing looked leftover at the gate.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Overlake</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Overlake Redmond fence" />

        {/* 6. Photo Gallery — nearby Eastside installs until Overlake-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Bellevue"
          title="Recent Fence Work Near Overlake"
          description="These photos are from nearby Eastside jobs, including Bellevue just south of the Overlake city line. Same crew, same materials, and the same Fence Genius process we use on Overlake townhome, condo, and single-family lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Redmond" neighborhood="Overlake" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Overlake-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Overlake Village Lot Width and Courtyard Access
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Townhome yards off 152nd Avenue NE and Da Vinci Avenue NE
                    are often one patio deep. A six-foot privacy panel that
                    works on Education Hill can swallow the whole space here.
                    We measure the usable run, place gates where bikes and
                    trash actually move toward the station, and shorten bays so
                    the last panel is not a leftover stub. Crews hand-carry
                    material when a truck cannot sit in the courtyard through a
                    weekday afternoon.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Overlake Zoning, Two Cities, and Height
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Overlake Village mixed-use lots and leftover single-family
                    parcels sit next to each other, and the Redmond–Bellevue
                    line along NE 24th Street and 148th Avenue NE can put two
                    neighbors under different city codes. Mixed-use lots can
                    allow a taller fence than an R-zone cul-de-sac a block
                    north. Front setbacks on 148th and 156th still have to keep
                    sight triangles at corners near the stations. We read the
                    parcel city and zone before we promise a height, then match
                    the HOA if it is stricter than the city.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Overlake Arterial Noise and SR-520 Edges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    148th, 156th, NE 40th, and SR-520 all add ambient noise that
                    a solid cedar run can soften on the street side of a patio.
                    Lots that face a pedestrian bridge or a village courtyard
                    often want hogwire or a mixed-height run so the fence does
                    not feel like a box. We keep post holes off the denser
                    utility corridors that follow the arterials, and we flag
                    any mapped critical-area or stormwater overlay before
                    digging rather than after.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Overlake Trees, Wildlife, and Moisture
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cul-de-sac lots north of NE 40th and parcels that back
                    toward Bridle Trails see deer pressure on gardens. A
                    six-foot cedar privacy fence is the usual first line; some
                    homeowners add a lattice cap where the city and any HOA
                    allow extra height. Mature firs on older streets mean
                    hand-digging near roots instead of a trench across the
                    yard. Pre-stained cedar and stainless or hot-dipped
                    fasteners handle the Eastside rain cycle and the grit that
                    blows off 520 without rust streaks down the boards.
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
                Fence Installation Cost in Overlake
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                An Overlake fence is often a short-run urban or pocket-lot
                install: courtyard access, HOA notes, and arterial-side
                screening can move the number. These are typical ranges; your
                on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $44–$68 per linear foot
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
                      $54–$76 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Courtyard hand-carry, custom gates, and HOA drawing packages
                  may add 10–15%. Get an exact quote for your Overlake property
                  with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Overlake property
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
                Popular Fence Styles in Overlake
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior townhome patios and cul-de-sac
                    lots north of 40th. Full screening from the neighbor,
                    pre-stained cedar that holds up to arterial grit, and a
                    look that fits both older homes and village rows.
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
                    Cedar frame with black mesh for courtyard lots and parcels
                    that face a pedestrian bridge or tree line. Dogs stay in,
                    more of the view stays open, and the lighter footprint is
                    easier in a 20-foot yard than a solid wall.
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
                    low-maintenance option when a campus calendar leaves no
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
                Our Overlake Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Overlake Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the short run, note courtyard or
                    cul-de-sac access, map utilities, and check whether the
                    parcel sits in Overlake Village mixed-use, a leftover
                    residential zone, or across the Bellevue line. Fence Genius
                    captures bay lengths and any grade change so panels are
                    built to the actual space.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Overlake Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your townhome row or condo
                    board has an architectural committee, we prepare a simple
                    drawing, stain note, and height callout. If it does not, we
                    still document Redmond or Bellevue height and
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
                    Overlake install days are mostly setting posts and hanging
                    finished sections instead of ripping lumber on 156th Avenue
                    NE.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Overlake Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment and hand-carry when village
                    courtyards or cul-de-sacs off 148th will not take a full
                    truck through weekday station traffic. Short bays, careful
                    post placement near shared walls, and full cleanup at the
                    end of each day. Most jobs wrap in one to three days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty
                  </h3>
                  <p className="text-muted-foreground">
                    Final walkthrough covering every panel, post, and gate.
                    Full {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty
                    starts when the job is complete.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — visible content matches FAQPage JSON-LD */}
        <NeighborhoodFaqSection
          title="Overlake Fence Installation FAQs"
          items={OVERLAKE_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Redmond"
        neighborhoodName="Overlake"
        attractions={OVERLAKE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Overlake sits on the Redmond–Bellevue line, so school assignment
              is address-specific. Redmond-side lots are in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              ; parcels that cross into Bellevue use the{" "}
              <a
                href="https://bsd405.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Bellevue School District
              </a>
              . Confirm the feeder school at your address — NE 24th Street and
              148th Avenue NE can put two neighbors in different districts.
              Indoor homework fallback is often the{" "}
              <a
                href="https://kcls.org/locations/redmond/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Library
              </a>{" "}
              on NE 85th, a short hop north of the village.
            </p>
            <p>
              Weekdays are built around walking or one stop on the 2 Line.
              Station and bus details live on{" "}
              <a
                href="https://goredmond.com/lightrail/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Go Redmond&apos;s light-rail page
              </a>
              . The city&apos;s long-range plan for the district is posted at{" "}
              <a
                href="https://www.redmond.gov/Overlake"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond&apos;s Overlake hub
              </a>
              . Height and setback questions are covered in{" "}
              <a
                href="https://www.redmond.gov/526/Fences-Decks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                the City of Redmond&apos;s fence guidelines
              </a>
              ;{" "}
              <a
                href="https://wsdot.wa.gov/travel/roads-bridges/toll-roads-bridges-tunnels/sr-520-bridge-tolling"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                SR-520
              </a>{" "}
              still carries the car trips west toward Bellevue and Seattle once
              you leave the village grid.
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
                We install fences throughout Redmond. From Overlake we also
                work in Downtown Redmond to the north, Education Hill farther
                up the hill, Grass Lawn just north of 40th, and across the city
                line into Bellevue and Kirkland.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond">Redmond overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/downtown-redmond">
                    Downtown Redmond
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/education-hill">
                    Education Hill
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/idylwood">Idylwood</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland</Link>
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
                Ready to Enhance Your Overlake Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Overlake. We&apos;ll walk the
                courtyard or cul-de-sac, talk through privacy vs. open hogwire,
                and quote a fence that fits your Redmond lot.
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

export default OverlakePage;
