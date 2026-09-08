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
  Home,
  TreePine,
  Volume2,
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

const CANONICAL = "https://myfence.com/service-areas/kirkland/kingsgate";
const META_TITLE =
  "Kingsgate Kirkland Fence Installation | Family Lots East of I-405 | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Kingsgate, Kirkland, WA. Cedar, hogwire & hybrid fencing for family lots near 132nd Square Park, Kingsgate Library, and NE 140th. Free quotes. (253) 455-1885.";

const KINGSGATE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Kingsgate, Kirkland?",
    answer:
      "The City of Kirkland generally does not require a building permit for residential fences six feet or less, but zoning still controls height and placement. Side and rear lines are typically allowed up to six feet. Front-yard fencing on a neighborhood access or collector street is often limited to 3½ feet, and lots along principal or minor arterials — including stretches of NE 132nd Street and 124th Avenue NE — have extra setback and height rules near the sidewalk. Kirkland also expects a fence to stay at least 15 feet from the curb unless you can show the property line with a survey. A few Kingsgate plats still ask for drawings even when the city does not. MyFence.com checks the parcel, any CC&Rs, and Kirkland Development Services rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Kingsgate's family yards and I-405-side lots?",
    answer:
      "Six-foot cedar privacy is the usual choice on interior Kingsgate cul-de-sacs that sit close to a neighbor or take freeway noise from I-405. On lots that open toward Kingsgate Park's wooded trails or keep a stand of firs along the rear line, hogwire in a cedar frame screens pets without boxing in the canopy. Hybrid aluminum-and-cedar systems suit households that would rather skip staining on a school-and-commute calendar. Fence Genius maps roots, the gentle roll of 1960s–1980s lots, and any drop toward a ravine so panels follow the grade instead of leaving a gap a dog can use.",
  },
  {
    question: "How much does fence installation cost in Kingsgate, Kirkland?",
    answer:
      "Kingsgate fence installation typically runs $42–$65 per linear foot for six-foot cedar privacy, $36–$54 for hogwire with a cedar frame, and $52–$72 for hybrid aluminum/cedar. Hand-digging around mature roots, extra gates for side-yard access off NE 140th or 132nd Avenue NE, arterial-side noise screening, and plat drawing packages can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Kingsgate?",
    answer:
      "Most Kingsgate residential projects finish in one to three working days after any city or plat paperwork is complete. Pre-fabricated panels cut on-site time. Hand-digging near older firs and cedars, stepped posts on the downhill side of a lot, tight side yards between ranch and split-level homes, and weekday traffic on NE 132nd Street are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Kingsgate?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Kirkland does not require their signature. If your street has a small plat association, the architectural contact may want both owners listed on the application. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which stretch.",
  },
];

const KINGSGATE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "132nd Square Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/132nd-Square-Park",
    description:
      "The neighborhood's game-night hub at 13159 132nd Avenue NE — lighted synthetic turf, a youth baseball diamond, picnic shelters, and an all-abilities playground with a zipline after the 2023 renovation. Evening practices set the rhythm on the streets around the park.",
  },
  {
    name: "Kingsgate Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Kingsgate-Park",
    description:
      "A 6.9-acre natural park at 11532 NE 140th Street with short trails and a Green Kirkland restoration site. Households on the 140th corridor use it for quiet walks rather than playground noise, and the wooded edge is a common rear-lot neighbor for fence lines.",
  },
  {
    name: "Kingsgate Library",
    url: "https://kcls.org/locations/kingsgate/",
    description:
      "The King County Library System branch at 12315 NE 143rd Street — study rooms, a meeting room, and the Saturday story-time stop that pulls families off 124th Avenue NE without a drive into downtown Kirkland.",
  },
  {
    name: "Totem Lake Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Totem-Lake-Park",
    description:
      "The wetland park just south of Kingsgate at 12207 NE Totem Lake Way, with an all-abilities playground and a boardwalk that ties into the Cross Kirkland Corridor. A short hop down 124th when 132nd Square is booked for games.",
  },
  {
    name: "The Village at Totem Lake",
    url: "https://www.thevillageattotemlake.com/",
    description:
      "The mixed-use center on 124th Avenue NE where Kingsgate households grab groceries, a meal, and a movie without fighting downtown parking. The same corridor carries the weekday commute toward I-405 and EvergreenHealth.",
  },
];

const KingsgatePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Kingsgate, Kirkland",
    pageTitle: "Kingsgate Kirkland Fence Installation",
    description: META_DESCRIPTION,
    faqItems: KINGSGATE_FAQS,
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
                    Serving Kingsgate, Kirkland WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Kingsgate Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence work for Kingsgate&apos;s family lots east of I-405 —
                  cedar, hogwire, and hybrid lines that quiet the freeway
                  corridor, keep pets in, and fit the cul-de-sacs around 132nd
                  Square Park and Kingsgate Library.
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
                  city="Kirkland"
                  state="WA"
                  radiusMiles={5}
                  zoom={12}
                  showBusinessInfo={false}
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
                Privacy Lines on Family Cul-de-Sacs East of I-405
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Kingsgate sits on Kirkland&apos;s north side, a band of
                1960s–1980s ranch and split-level homes east of I-405 and north
                of Totem Lake. City maps sometimes label the same streets
                Evergreen Hill. The daily landmarks are close: Frost Elementary
                and Kingsgate Park on NE 140th Street, the library on NE 143rd,
                Kamiakin Middle and 132nd Square Park on 132nd Avenue NE. Lots
                are closer together than Juanita&apos;s waterfront blocks and
                flatter than Finn Hill, so the work is less about a lake view
                and more about a tight side yard, a dog that will test the
                bottom rail, and the freeway hum that reaches the western
                streets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout north Kirkland,
                including privacy runs that take the edge off I-405 and 124th
                Avenue NE and side-yard gates that still leave room for a trash
                cart on a 1970s lot. There is no single neighborhood-wide HOA,
                but some plats still want a drawing and a stain note before a
                crew shows up. Our Fence Genius measurements capture the gentle
                roll of each lot and the root zones we need to hand-dig, and we
                handle Kirkland Development Services checks so height, setbacks,
                and the 15-foot curb rule on 132nd and 124th are settled before
                installation day.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Kingsgate Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Screening for I-405 and Arterial Noise
                      </h3>
                      <p className="text-muted-foreground">
                        I-405 runs the west edge of Kingsgate, and NE 132nd
                        Street plus 124th Avenue NE carry park traffic and the
                        commute. A six-foot cedar privacy line on the street or
                        freeway side cuts the evening din without turning a
                        modest lot into a tunnel.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Built for Kids, Dogs, and Tight Side Yards
                      </h3>
                      <p className="text-muted-foreground">
                        Kingsgate yards are working family space. We keep the
                        skirt tight to grade, spec latches kids can use after a
                        game at 132nd Square, and hand-carry panels through the
                        narrow side yards typical of ranch and split-level
                        streets.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Installs That Keep the Existing Trees
                      </h3>
                      <p className="text-muted-foreground">
                        Lots near Kingsgate Park and along NE 140th already have
                        the canopy. We hand-dig near mature firs and cedars,
                        skip a trench across a root flare, and place posts so
                        the fence sits with the landscaping instead of cutting a
                        new scar through it.
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
                        Full coverage on materials and labor, including
                        hand-set posts in root-heavy soil and the Eastside
                        wet-season cycle that stresses fasteners. Kingsgate
                        installs are backed for the long haul.
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
                What Kingsgate Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit a few streets off I-405 and wanted privacy
                    without losing the firs along the rear line. They hand-dug
                    around the roots and the panels sit tight to the grade. The
                    freeway noise dropped enough that we actually use the patio
                    after dinner.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Kingsgate</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our side yard between the houses on 140th is barely
                    a path. The crew carried panels in by hand, left the
                    neighbor&apos;s rhododendrons alone, and the gate latch is
                    high enough that the dog cannot walk it open after a game at
                    132nd Square.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Marcus in Kingsgate</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Kingsgate Kirkland fence" />

        {/* 6. Photo Gallery — closest available Kirkland work */}
        <ServiceAreaPhotoGallery
          city="Kirkland"
          title="Recent Kirkland Projects Serving Kingsgate"
          description="Photos from our Kirkland installations. Kingsgate sits on the same north-city streets we already work — NE 140th, 132nd Avenue NE, and the Totem Lake edge."
        />

        {/* 7. Case Study Spotlight — closest available Kirkland project */}
        <FeaturedProject city="Kirkland" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Kingsgate-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Freeway and Arterial Noise Along I-405
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I-405 is the west wall of Kingsgate. NE 132nd Street and
                    124th Avenue NE add park drop-off, school traffic, and the
                    Totem Lake commute. A solid six-foot cedar privacy fence on
                    the street or freeway side does more for evening use of the
                    yard than a decorative picket ever will. Corner lots still
                    have to honor Kirkland&apos;s sight-distance and 15-foot
                    curb rules, so the front stretch may step down even when
                    the rear line stays at six feet.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Kingsgate Tree Roots and Established Landscaping
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most Kingsgate lots were planted decades ago. Firs, cedars,
                    and maples sit on or near the property line, especially
                    toward Kingsgate Park and the wooded pockets off NE 140th.
                    A mechanical trench will tear a root flare that the tree
                    cannot replace. We walk the line first, mark roots we will
                    not cut, and hand-dig post holes where the canopy is
                    oldest. Fence Genius still maps the gentle roll so panels
                    follow the ground instead of hovering over a low spot the
                    dog will find.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Kirkland Height Rules Versus Kingsgate Plats
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kingsgate does not sit under one master association. Some
                    1970s–1980s plats still have an architectural contact who
                    wants height, stain, and a simple site plan. Everyone else
                    still follows City of Kirkland zoning: typically 3½ feet in
                    a front yard on a collector, six feet on the sides and rear,
                    and extra limits on lots that abut an arterial such as NE
                    132nd Street. We sort which bucket your parcel is in before
                    we order materials so you are not rewriting a design after
                    the lumber is on the truck.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Pets, Park Edges, and Eastside Moisture
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that back toward Kingsgate Park or take evening field
                    lights from 132nd Square still see the occasional deer, and
                    almost every household has a dog that will test the bottom
                    of a panel. We keep the skirt tight to grade and spec
                    latches that kids can use after a game but a dog cannot walk
                    open. Pre-stained Western Red Cedar and stainless or
                    hot-dipped fasteners handle the Eastside rain cycle without
                    rust streaks down the boards.
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
                Fence Installation Cost in Kingsgate
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A new fence is a real investment on Kingsgate lots. These
                ranges cover typical residential runs; root-zone hand-digging,
                extra gates, arterial-side screening, and plat drawing packages
                can change the final number.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $42–$65 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $36–$54 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $52–$72 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Hand-digging near mature trees and custom gates are itemized
                  separately. Get an exact quote for your Kingsgate property
                  with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Kingsgate property
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
                Popular Fence Styles in Kingsgate
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on lots that face I-405 or sit close to a
                    neighbor. Full screening for evening noise, pre-stained
                    cedar that holds up to Eastside winters, and a look that
                    fits 1960s–1980s homes around 132nd Square Park.
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
                    Cedar frame with black mesh for park-edge lots and yards
                    that want the canopy left open toward Kingsgate Park. Dogs
                    stay in, more of the trees stay in view, and the lighter
                    footprint is easier around roots than a solid privacy wall.
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
                    low-maintenance option when a commute down 124th leaves
                    little time for staining. Strong enough for busy family
                    yards without looking commercial.
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
                Our Kingsgate Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Kingsgate Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, mark mature roots, note
                    the roll toward I-405 or 132nd Square, and check whether a
                    plat association or Kirkland arterial/curb rule applies.
                    Fence Genius captures grade so panels are built to the
                    actual line, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Kingsgate Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your street has a small plat
                    contact, we prepare a drawing and material list. If it
                    does not, we still document Kirkland height and setback
                    rules — including the 3½-foot front-yard limit and the
                    15-foot curb rule on 132nd and 124th — so the install is
                    clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements —
                    pre-stained cedar, hogwire frames, or hybrid modules — so
                    Kingsgate install days are mostly setting posts and hanging
                    finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Kingsgate Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets
                    off NE 140th Street and 132nd Avenue NE. Hand-digging near
                    mature roots, careful carry-in on tight side yards, and
                    full cleanup at the end of each day. Most jobs wrap in one
                    to three days.
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
          title="Kingsgate Fence Installation FAQs"
          items={KINGSGATE_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Kirkland"
        neighborhoodName="Kingsgate"
        attractions={KINGSGATE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Kingsgate households sit in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              . Elementary students typically walk or short-bus to{" "}
              <a
                href="https://frost.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Robert Frost Elementary
              </a>{" "}
              on NE 140th Street, then later to{" "}
              <a
                href="https://kams.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kamiakin Middle School
              </a>{" "}
              on 132nd Avenue NE and{" "}
              <a
                href="https://jhs.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Juanita High School
              </a>
              . After a Saturday at the park, families often continue to{" "}
              <a
                href="https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Recreation-Programs-Services/Community-Centers"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                North Kirkland Community Center
              </a>{" "}
              for a class or a field-permit question.
            </p>
            <p>
              Dinner after a game is usually a short hop down 124th to{" "}
              <a
                href="https://www.thevillageattotemlake.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The Village at Totem Lake
              </a>{" "}
              rather than a drive into downtown. Commuters heading south take
              NE 132nd or NE 124th to I-405, or continue toward{" "}
              <a
                href="https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Parks-and-Trails/Cross-Kirkland-Corridor"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                the Cross Kirkland Corridor
              </a>{" "}
              from Totem Lake Park. Height and setback questions are covered in{" "}
              <a
                href="https://www.kirklandwa.gov/files/sharedassets/public/v/1/development-services/fence-requirements.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kirkland&apos;s fence requirements
              </a>
              ; weekend trail miles on the quiet side of the neighborhood live
              at{" "}
              <a
                href="https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Kingsgate-Park"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Kingsgate Park
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
                Also Serving Nearby Kirkland Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Kirkland. From Kingsgate we also
                work in Juanita across I-405, Finn Hill farther west, Downtown
                Kirkland toward the water, and south into the Totem Lake edge
                of the city.
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
                Ready to Enhance Your Kingsgate Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Kingsgate. We&apos;ll walk the
                lot, talk through privacy versus open hogwire around the trees,
                and quote a fence that fits your Kirkland yard.
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

export default KingsgatePage;
