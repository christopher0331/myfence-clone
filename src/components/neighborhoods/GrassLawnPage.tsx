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

const CANONICAL = "https://myfence.com/service-areas/redmond/grass-lawn";
const META_TITLE =
  "Grass Lawn Redmond Fence Installation | Mature Lots & Park Streets | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Grass Lawn, Redmond, WA. Cedar, hogwire & hybrid fencing for established lots near Grass Lawn Park and 148th Ave NE. Free quotes. (253) 455-1885.";

const GRASS_LAWN_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Grass Lawn, Redmond?",
    answer:
      "The City of Redmond generally does not require a building permit for residential fences under eight feet, but zoning still controls height and setbacks. Front-yard fencing is typically limited to four feet; side and rear yards are usually allowed up to six feet. Corner lots along 148th Avenue NE, NE 70th Street, and NE 80th Street have sight-distance triangle rules that can shorten a run near the sidewalk. A few plat associations ask for drawings even when the city does not. MyFence.com checks the parcel, any CC&Rs, and Redmond Development Services rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Grass Lawn's mature trees and park-side lots?",
    answer:
      "Six-foot cedar privacy is the usual choice on interior Grass Lawn lots that sit close to a neighbor or take evening noise from 148th Avenue NE. On lots that open toward Grass Lawn Park or keep a stand of firs along the rear line, hogwire in a cedar frame screens pets without boxing in the canopy. Hybrid aluminum-and-cedar systems suit households that would rather skip staining on a weekday commute calendar. Fence Genius maps roots and the gentle roll of the lot so panels follow the grade instead of leaving a gap a dog can use.",
  },
  {
    question: "How much does fence installation cost in Grass Lawn, Redmond?",
    answer:
      "Grass Lawn fence installation typically runs $42–$65 per linear foot for six-foot cedar privacy, $36–$54 for hogwire with a cedar frame, and $52–$72 for hybrid aluminum/cedar. Hand-digging around mature roots, extra gates for side-yard access off 152nd or 156th, and HOA drawing packages can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Grass Lawn?",
    answer:
      "Most Grass Lawn residential projects finish in one to three working days after any city or plat paperwork is complete. Pre-fabricated panels cut on-site time. Hand-digging near older firs and cedars, stepped posts on the downhill side of a lot, and tight side yards between 1970s–1990s homes are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question:
      "Do I need my neighbor's permission for a fence in Grass Lawn?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Redmond does not require their signature. If your street has a small plat association, the architectural contact may want both owners listed on the application. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which stretch.",
  },
];

const GRASS_LAWN_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Grass Lawn Park",
    url: "https://www.redmond.gov/facilities/facility/details/Grass-Lawn-Park-62",
    description:
      "The neighborhood's namesake at 7031 148th Avenue NE — splash pad in warm months, lighted tennis and pickleball, turf fields, a playground, and a rentable pavilion. Weeknight practices and weekend picnics set the rhythm on the streets around the park.",
  },
  {
    name: "Marymoor Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/parks/marymoor",
    description:
      "King County's large river-valley park a short drive east of Grass Lawn. Climbing walls, velodrome, off-leash fields, and the Sammamish shoreline give households a bigger outing when the neighborhood park is booked for games.",
  },
  {
    name: "Redmond Community Center at Marymoor Village",
    url: "https://www.redmond.gov/241/Redmond-Community-Center-at-Marymoor-Vil",
    description:
      "The city's recreation hub at 6505 176th Avenue NE — classes, gym time, and field-rental paperwork for Grass Lawn Park when a team needs a permit instead of a first-come lawn.",
  },
  {
    name: "Sammamish River Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/sammamish-river-trail",
    description:
      "The paved King County trail along the river, a few minutes east of 148th. Morning bike commutes toward downtown Redmond and evening dog walks share the same corridor Grass Lawn households use to skip Redmond Way traffic.",
  },
  {
    name: "Overlake Village Station",
    url: "https://www.soundtransit.org/ride-with-us/stops-stations/overlake-village-station",
    description:
      "The 2 Line stop south of the neighborhood on 152nd Avenue NE. Grass Lawn commuters heading to Bellevue or Seattle often drop down 148th instead of fighting SR-520 from the hill.",
  },
];

const GrassLawnPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Grass Lawn, Redmond",
    pageTitle: "Grass Lawn Redmond Fence Installation",
    description: META_DESCRIPTION,
    faqItems: GRASS_LAWN_FAQS,
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
                    Serving Grass Lawn, Redmond WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Grass Lawn Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence work for Grass Lawn&apos;s established yards — cedar,
                  hogwire, and hybrid lines that respect mature trees, quiet the
                  148th Avenue NE corridor, and fit the park-centered streets
                  between downtown Redmond and Overlake.
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
                  city="Redmond"
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
                Fencing Around a Park-Centered Street Grid
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Grass Lawn sits on the west side of Redmond, a band of
                1970s–1990s family homes wrapped around Grass Lawn Park on 148th
                Avenue NE. The park is the neighborhood&apos;s actual center —
                splash pad, lighted courts, turf fields, and a pavilion that
                books out on summer weekends — and most lots are a short walk
                from NE 70th Street, NE 76th Street, or 152nd Avenue NE. Housing
                is older than Overlake&apos;s newer plats and flatter than
                Education Hill, so the work is less about a steep drop and more
                about threading a fence past fifty-year-old firs without
                wrecking the landscaping that already defines the yard.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout Grass Lawn,
                including side-yard runs between closely spaced homes off 152nd
                and privacy lines that take the edge off traffic on 148th and
                Redmond Way. There is no single neighborhood-wide HOA, but some
                plats still want a drawing and a stain note before a crew shows
                up. Our Fence Genius measurements capture the gentle roll of
                each lot and the root zones we need to hand-dig, and we handle
                Redmond Development Services checks so height, setbacks, and
                sight-distance rules on 148th and 70th are settled before
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
                Why Grass Lawn Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Installs That Keep the Existing Trees
                      </h3>
                      <p className="text-muted-foreground">
                        Grass Lawn yards already have the canopy. We hand-dig
                        near mature firs and cedars, skip a trench across a
                        root flare, and place posts so the fence sits with the
                        landscaping instead of cutting a new scar through it.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Volume2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Screening for 148th and Park-Night Noise
                      </h3>
                      <p className="text-muted-foreground">
                        148th Avenue NE is a through street, and lighted fields
                        at Grass Lawn Park run late. A six-foot cedar privacy
                        line on the street or park side cuts the evening din
                        without turning the lot into a tunnel.
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
                        wet-season cycle that stresses fasteners. Grass Lawn
                        installs are backed for the long haul.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Plat Rules and City Height Checks
                      </h3>
                      <p className="text-muted-foreground">
                        Some streets have a small architectural contact; most
                        only need Redmond zoning. We prepare drawings when a
                        plat asks, and we confirm height and setback rules so
                        the install is clean with the city.
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
                What Grass Lawn Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We sit a block off 148th and wanted privacy without
                    losing the big firs along the rear line. They hand-dug
                    around the roots and the panels sit tight to the grade. The
                    street noise dropped enough that we actually use the patio
                    after dinner.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Elena in Grass Lawn</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our side yard between the houses on 152nd is barely
                    a path. The crew carried panels in by hand, left the
                    neighbor&apos;s rhododendrons alone, and the gate latch is
                    high enough that the dog cannot walk it open.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Derek in Grass Lawn</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Grass Lawn Redmond fence" />

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery city="Redmond" neighborhood="Grass Lawn" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Redmond" neighborhood="Grass Lawn" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Grass Lawn-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Grass Lawn Tree Roots and Established Landscaping
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most Grass Lawn lots were planted decades ago. Firs,
                    cedars, and maples sit on or near the property line, and a
                    mechanical trench will tear a root flare that the tree
                    cannot replace. We walk the line first, mark roots we will
                    not cut, and hand-dig post holes where the canopy is
                    oldest. Fence Genius still maps the gentle roll so panels
                    follow the ground instead of hovering over a low spot the
                    dog will find.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Arterial Noise Along 148th and Redmond Way
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    148th Avenue NE carries park traffic, school drop-off
                    overflow, and the commute between Overlake and Kirkland.
                    Redmond Way and Old Redmond Road sit on the east edge of
                    the neighborhood. A solid six-foot cedar privacy fence on
                    the street side does more for evening use of the yard than
                    a decorative picket ever will. Corner lots still have to
                    honor Redmond&apos;s sight-distance triangles at 70th and
                    80th, so the front stretch may step down even when the
                    rear line stays at six feet.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Grass Lawn Plats Versus City-Only Streets
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Grass Lawn does not sit under one master association. Some
                    1980s–1990s plats still have an architectural contact who
                    wants height, stain, and a simple site plan. Everyone else
                    still follows City of Redmond zoning: typically four feet
                    in the front yard and six feet on the sides and rear. We
                    sort which bucket your parcel is in before we order
                    materials so you are not rewriting a design after the
                    lumber is on the truck.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Pets, Park Edges, and Eastside Moisture
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that back toward Grass Lawn Park or a wooded rear
                    neighbor still see the occasional deer, and almost every
                    household has a dog that will test the bottom of a panel.
                    We keep the skirt tight to grade and spec latches that
                    kids can use after a game but a dog cannot walk open.
                    Pre-stained Western Red Cedar and stainless or hot-dipped
                    fasteners handle the Eastside rain cycle without rust
                    streaks down the boards.
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
                Fence Installation Cost in Grass Lawn
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A new fence is a real investment on Grass Lawn lots. These
                ranges cover typical residential runs; root-zone hand-digging,
                extra gates, and plat drawing packages can change the final
                number.
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
                  separately. Get an exact quote for your Grass Lawn property
                  with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Grass Lawn property
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
                Popular Fence Styles in Grass Lawn
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on lots that face 148th or sit close to a
                    neighbor. Full screening for evening noise, pre-stained
                    cedar that holds up to Eastside winters, and a look that
                    fits 1970s–1990s homes around the park.
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
                    that want the canopy left open. Dogs stay in, more of the
                    trees stay in view, and the lighter footprint is easier
                    around roots than a solid privacy wall.
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
                    low-maintenance option when a commute down 148th leaves
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
                Our Grass Lawn Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Grass Lawn Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, mark mature roots, note
                    the roll toward 148th or the park, and check whether a
                    plat association or Redmond sight-distance rule applies.
                    Fence Genius captures grade so panels are built to the
                    actual line, not a flat-lot assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Grass Lawn Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your street has a small plat
                    contact, we prepare a drawing and material list. If it
                    does not, we still document Redmond height and setback
                    rules — including sight-distance on 148th, 70th, and 80th
                    — so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements —
                    pre-stained cedar, hogwire frames, or hybrid modules — so
                    Grass Lawn install days are mostly setting posts and
                    hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Grass Lawn Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets
                    off 148th Avenue NE and 152nd Avenue NE. Hand-digging near
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
          title="Grass Lawn Fence Installation FAQs"
          items={GRASS_LAWN_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Redmond"
        neighborhoodName="Grass Lawn"
        attractions={GRASS_LAWN_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Grass Lawn households sit in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              . Many elementary students head east to{" "}
              <a
                href="https://redmond.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Elementary
              </a>{" "}
              on NE 80th Street, then later to{" "}
              <a
                href="https://rms.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Middle School
              </a>
              . After a Saturday at the park, families often continue to{" "}
              <a
                href="https://www.redmond.gov/241/Redmond-Community-Center-at-Marymoor-Vil"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Community Center at Marymoor Village
              </a>{" "}
              for a class or a field-permit question.
            </p>
            <p>
              Dinner after a game is usually a short hop toward Old Town rather
              than a drive across the Eastside —{" "}
              <a
                href="https://www.matadorrestaurants.com/locations/redmond"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Matador Redmond
              </a>{" "}
              on Leary Way is a regular stop. Commuters heading south catch the
              2 Line at{" "}
              <a
                href="https://www.soundtransit.org/ride-with-us/stops-stations/overlake-village-station"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Overlake Village Station
              </a>
              , or take 148th to NE 70th toward I-405. Height and setback
              questions are covered in{" "}
              <a
                href="https://www.redmond.gov/526/Fences-Decks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                the City of Redmond&apos;s fence guidelines
              </a>
              ; weekend trail miles live on the{" "}
              <a
                href="https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation/king-county-parks/trails/leafline-trails/sammamish-river-trail"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Sammamish River Trail
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
                Also Serving Nearby Redmond Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Redmond. From Grass Lawn we also
                work in Education Hill to the east, Downtown Redmond toward
                Town Center, Overlake to the south, and across the city line
                into Juanita in Kirkland.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond">Redmond overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/education-hill">
                    Education Hill
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond/downtown-redmond">
                    Downtown Redmond
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/juanita">Juanita</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland</Link>
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
                Ready to Enhance Your Grass Lawn Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Grass Lawn. We&apos;ll walk the
                lot, talk through privacy versus open hogwire around the trees,
                and quote a fence that fits your Redmond yard.
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

export default GrassLawnPage;
