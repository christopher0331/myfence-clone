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
  Mountain,
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

const CANONICAL = "https://myfence.com/service-areas/redmond/education-hill";
const META_TITLE =
  "Education Hill Redmond Fence Installation | Family & School Lots | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Education Hill, Redmond, WA. Cedar, hogwire & hybrid fencing for hillside family lots near Hartman Park and Redmond High. Free quotes. (253) 455-1885.";

const EDUCATION_HILL_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Education Hill, Redmond?",
    answer:
      "The City of Redmond generally does not require a building permit for residential fences under eight feet, but the fence still has to meet zoning height and setback rules. Front-yard fencing is typically limited to four feet; side and rear yards are usually allowed up to six feet without special approval. Corner lots along 166th Avenue NE and NE 104th Street have sight-distance triangle rules that can shorten a run near the sidewalk. Pocket HOAs on Education Hill — including some condo and planned-unit clusters — may still require architectural review even when the city does not. MyFence.com checks the parcel, HOA paperwork, and Redmond Development Services rules before we quote.",
  },
  {
    question:
      "What fence styles work best for Education Hill's hillside family lots?",
    answer:
      "Six-foot cedar privacy is the most common choice on interior Education Hill lots where kids, dogs, and after-school play need a solid backyard. On downhill runs toward Avondale and on lots that back to greenbelt, hogwire in a cedar frame keeps a more open look while still containing pets. Hybrid aluminum-and-cedar systems suit households that would rather skip staining on a busy school-year calendar. Fence Genius maps the grade so panels follow the hill instead of leaving triangular gaps at the bottom.",
  },
  {
    question: "How much does fence installation cost in Education Hill, Redmond?",
    answer:
      "Education Hill fence installation typically runs $42–$65 per linear foot for six-foot cedar privacy, $36–$54 for hogwire with a cedar frame, and $52–$72 for hybrid aluminum/cedar. Stepped runs on the hill, custom gates for side-yard access, and HOA drawing packages can move a quote. Use the virtual quote tool for a starting number, then we confirm pricing after an on-site Fence Genius measurement.",
  },
  {
    question: "How long does fence installation take in Education Hill?",
    answer:
      "Most Education Hill residential projects finish in one to three working days after any city or HOA paperwork is complete. Pre-fabricated panels cut on-site time. Stepped posts on hillside lots, mature trees along 166th and NE 104th corridors, and tight side yards between 1970s–1990s homes are the usual reasons a job stretches an extra half day. We set the schedule with you before the crew arrives.",
  },
  {
    question:
      "Do I need my neighbor's permission for a fence in Education Hill?",
    answer:
      "Washington treats a fence on the property line as a potential shared improvement, so talking with the neighbor early is the practical path even when Redmond does not require their signature. If your street has a small HOA, the architectural committee may want both owners listed on the application. MyFence.com can help you confirm pins, share a simple site plan, and keep the conversation focused on height, style, and who pays for which stretch.",
  },
];

const EDUCATION_HILL_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Hartman Park",
    url: "https://www.redmond.gov/facilities/facility/details/Hartman-Park-63",
    description:
      "A 40-acre city park in the middle of Education Hill with Little League fields, turf soccer, tennis and pickleball, a playground, walking paths, and the Redmond Pool. Weeknight practice traffic is a familiar rhythm on the streets around the park.",
  },
  {
    name: "Redmond High School",
    url: "https://rhs.lwsd.org/",
    description:
      "The Lake Washington School District campus at 17272 NE 104th Street. Many Education Hill households live within a short walk or bike ride, and game nights plus drop-off hours shape the daily pattern on 104th.",
  },
  {
    name: "Grass Lawn Park",
    url: "https://www.redmond.gov/facilities/facility/details/Grass-Lawn-Park-62",
    description:
      "Just west of the hill, with a seasonal splash pad, lighted courts, turf fields, and a picnic pavilion. Education Hill families treat it as the warm-weather overflow when Hartman is packed with games.",
  },
  {
    name: "Farrel-McWhirter Park",
    url: "https://www.redmond.gov/288/Farrel-McWhirter-Park",
    description:
      "A working-farm park a few minutes east toward Avondale, with trails, farm animals, and seasonal youth programs. A quieter weekend destination when you want woods and pasture instead of ballfields.",
  },
  {
    name: "Redmond Library",
    url: "https://kcls.org/locations/redmond/",
    description:
      "The King County Library System branch at NE 85th Street and 160th, a short downhill hop from the neighborhood. Homework stops, study rooms, and weekend browsing sit between Education Hill and downtown Redmond.",
  },
];

const EducationHillPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Education Hill, Redmond",
    pageTitle: "Education Hill Redmond Fence Installation",
    description: META_DESCRIPTION,
    faqItems: EDUCATION_HILL_FAQS,
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
                    Serving Education Hill, Redmond WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Education Hill Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Hillside fence specialists for Education Hill&apos;s school-centered
                  streets. Cedar, hogwire, and hybrid fencing built for kids, pets,
                  and the grade changes that run down toward Avondale and downtown
                  Redmond.
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
                Fencing for School-Street Yards on the Hill
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Education Hill is Redmond&apos;s largest residential neighborhood, a
                mix of 1970s–1990s family homes and later infill sitting above
                downtown. The name is literal: Horace Mann Elementary, Redmond
                Middle School on 166th Avenue NE, and Redmond High School on NE
                104th Street sit inside the neighborhood, and Hartman Park fills
                the middle with fields and the city pool. Lots are typically
                compact enough that a fence is about containing after-school play
                and dogs, not fencing acreage — and the hill itself means many
                rear lines drop several feet from street grade to the back corner.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout Education Hill,
                including side-yard runs between closely spaced homes and stepped
                privacy lines that follow the grade toward Avondale Road NE. There
                is no single neighborhood-wide HOA, but pocket associations and
                some condo clusters still want drawings before a crew shows up.
                Our Fence Genius measurements capture the slope so panels are
                manufactured to the actual drop, and we handle Redmond
                Development Services checks so height, setbacks, and
                sight-distance rules on 166th and 104th are settled before
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
                Why Education Hill Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Built for Kids, Pets, and After-School Yards
                      </h3>
                      <p className="text-muted-foreground">
                        Education Hill yards get used hard between school pickup
                        and dinner. We spec gates, latch height, and panel
                        strength for dogs and kids — not a showpiece that fails
                        the first season of backyard soccer.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Hillside Grade That Actually Follows the Lot
                      </h3>
                      <p className="text-muted-foreground">
                        Rear lines on Education Hill often fall toward Avondale or
                        the downtown bowl. Fence Genius maps that drop so panels
                        rack with the terrain instead of leaving a gap a dog can
                        squeeze through.
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
                        Full coverage on materials and labor, including stepped
                        hillside posts and the Pacific Northwest wet-season cycle
                        that stresses fasteners. Education Hill installs are
                        backed for the long haul.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Pocket HOA and City Rule Help
                      </h3>
                      <p className="text-muted-foreground">
                        Some streets have a small architectural committee; others
                        only need Redmond zoning. We prepare drawings when an HOA
                        asks, and we confirm height and setback rules so the
                        install is clean with the city.
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
                What Education Hill Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our backyard drops toward the neighbor on 104th and I
                    was worried about a gap under the fence. They mapped the slope
                    and the panels follow the grade. The side gate is easy for the
                    kids after school and the dog hasn&apos;t found a way out.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Priya in Education Hill</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We needed HOA drawings for our little association off
                    166th. MyFence sent a clean packet, the committee approved it
                    the first time, and the crew was careful around the mature
                    cedars along the property line.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Mark in Education Hill</p>
                  <p className="text-xs text-muted-foreground">Customer review, 2026</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Education Hill Redmond fence" />

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery city="Redmond" neighborhood="Education Hill" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Redmond" neighborhood="Education Hill" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Education Hill-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Education Hill Terrain and Stepped Runs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The neighborhood sits on a real hill. Street grade on NE 104th
                    and 166th Avenue NE is often several feet higher than a rear
                    corner that falls toward Avondale Road NE or the downtown
                    bowl. A fence built as if the lot were flat leaves triangular
                    gaps or a jagged step pattern that looks unfinished from the
                    neighbor&apos;s patio. We map the grade with Fence Genius,
                    manufacture panels to the actual drop, and use deeper post
                    holes with reinforced concrete on the downhill stretches so
                    the line stays plumb through wet winters.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    School-Street Traffic, Sight Lines, and Compact Lots
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Drop-off and game-night traffic around Redmond High, Redmond
                    Middle, and Hartman Park means corner lots need extra care at
                    sidewalks and driveways. Redmond&apos;s sight-distance rules
                    can shorten a front-yard or street-side run even when a
                    six-foot privacy fence is legal in the back. Interior lots are
                    close enough that side-yard access is often a single-person
                    path — we plan panel breakdowns so cedar is not dragged across
                    landscaping on either side of the line.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Education Hill HOAs Versus City-Only Streets
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most of Education Hill does not sit under one master
                    association. Some clusters — condos, planned-unit pockets, and
                    streets near Emerald Heights — still require architectural
                    review, stain color, and height notes before work starts.
                    Everyone else still has to follow City of Redmond zoning:
                    typically four feet in the front yard and six feet on the
                    sides and rear, with extra review if a line touches a mapped
                    critical area or stream buffer toward Bear Creek. We sort
                    which bucket your parcel is in before we order materials.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Wildlife, Trees, and Moisture on the Hill
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lots that back to greenbelt or the farm-park side of Avondale
                    see deer pressure on gardens. A six-foot cedar privacy fence
                    is the usual first line; some homeowners add a lattice cap
                    where the city and any HOA allow extra height. Mature firs and
                    cedars along older Education Hill streets mean hand-digging
                    near roots instead of a trench across the yard. Pre-stained
                    cedar and stainless or hot-dipped fasteners handle the
                    Eastside rain cycle without rust streaks down the boards.
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
                Fence Installation Cost in Education Hill
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A new fence is a real investment on Education Hill lots. These
                ranges cover typical residential runs; hillside stepping, extra
                gates, and HOA drawing packages can change the final number.
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
                  Stepped runs on the downhill side of the hill and hand-digging
                  near mature trees may add 10–15%. Custom gates are itemized
                  separately. Get an exact quote for your Education Hill property
                  with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Get an exact quote for your Education Hill property
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
                Popular Fence Styles in Education Hill
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse on interior Education Hill lots near the
                    schools. Full screening for after-school play, pre-stained
                    cedar that holds up to Eastside winters, and a look that fits
                    1970s–1990s family homes around Hartman Park.
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
                    Cedar frame with black mesh for downhill lots and greenbelt
                    edges. Dogs stay in, more of the hill view stays open, and
                    the lighter footprint is easier around roots than a solid
                    privacy wall.
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
                    low-maintenance option when a school-year calendar leaves
                    little time for staining. Strong enough for busy family yards
                    without looking commercial.
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
                Our Education Hill Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Education Hill Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the run, note slope toward Avondale
                    or downtown, map trees, and check whether a pocket HOA or
                    Redmond critical-area overlay applies. Fence Genius captures
                    grade so panels are built to the actual drop, not a flat-lot
                    assumption.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Education Hill Design & HOA Submission
                  </h3>
                  <p className="text-muted-foreground">
                    You pick style and height. If your street has a small HOA, we
                    prepare a drawing and material list for the architectural
                    committee. If it does not, we still document Redmond height
                    and setback rules — including sight-distance on 166th and
                    104th — so the install is clean with the city.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements —
                    pre-stained cedar, hogwire frames, or hybrid modules — so
                    Education Hill install days are mostly setting posts and
                    hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Education Hill Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets off
                    166th Avenue NE and NE 104th Street. Hand-digging near mature
                    roots, stepped posts on the downhill side, and full cleanup
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
          title="Education Hill Fence Installation FAQs"
          items={EDUCATION_HILL_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Redmond"
        neighborhoodName="Education Hill"
        attractions={EDUCATION_HILL_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Education Hill sits in the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Lake Washington School District
              </a>
              , so most households feed{" "}
              <a
                href="https://mann.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Horace Mann Elementary
              </a>
              , then{" "}
              <a
                href="https://rms.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Middle School
              </a>{" "}
              on 166th Avenue NE, and later{" "}
              <a
                href="https://rhs.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond High School
              </a>{" "}
              on NE 104th Street. Weekday life is built around that school
              cluster, Hartman Park practices, and a short downhill hop to the{" "}
              <a
                href="https://kcls.org/locations/redmond/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Redmond Library
              </a>{" "}
              at 85th and 160th.
            </p>
            <p>
              Groceries and dinner after a game often mean a few minutes south
              into downtown rather than a drive across the Eastside. Families
              grab burgers at{" "}
              <a
                href="https://tipsycowburgerbar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Tipsy Cow Burger Bar
              </a>{" "}
              on Cleveland Street, then loop home via 164th or 166th. Height and
              setback questions are covered in{" "}
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
              is the usual path west toward Bellevue and Seattle once you drop
              off the hill.
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
                We install fences throughout Redmond. From Education Hill we also
                work in Grass Lawn just to the west, Downtown Redmond down the
                hill, Overlake, and nearby Juanita in Kirkland.
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
                Ready to Enhance Your Education Hill Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Education Hill. We&apos;ll walk
                the slope, talk through privacy vs. open hogwire, and quote a
                fence that fits your Redmond lot.
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

export default EducationHillPage;
