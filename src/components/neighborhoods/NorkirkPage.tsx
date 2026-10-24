"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Award,
  ArrowLeft,
  MapPin,
  Phone,
  Home,
  Ruler,
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

const CANONICAL = "https://myfence.com/service-areas/kirkland/norkirk";
const META_TITLE =
  "Norkirk Kirkland Fence Installation | Bungalow Blocks & Alleys | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Norkirk, Kirkland, WA. Cedar, hogwire & hybrid fencing for bungalow lots, alley-grid yards, and Crestwoods Park blocks. Free quotes. (253) 455-1885.";

const KIRKLAND_FENCE_RULES_URL =
  "https://www.kirklandwa.gov/files/sharedassets/public/v/1/development-services/fence-requirements.pdf";
const KIRKLAND_PERMIT_URL =
  "https://www.kirklandwa.gov/Government/Departments/Development-Services-Center/Do-you-need-a-permit";

const linkClass =
  "font-semibold text-primary underline decoration-2 underline-offset-4";

const NORKIRK_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Norkirk, Kirkland?",
    answer:
      "The City of Kirkland lists fences that are six feet or shorter as a project that does not need a building permit, and a fence over six feet does need one. Zoning rules still apply either way. Under the Kirkland Zoning Code, a detached home that abuts a neighborhood access or collector street is limited to a 3.5-foot fence in the required front yard. A fence along a principal or minor arterial such as Market Street is limited to 3.5 feet within three feet of the property line unless the street has an improved landscape strip. Side and rear fences can be up to six feet. Fences over three feet cannot sit in the sight triangle at an intersection or driveway. The permit exemption does not apply on parcels with steep-slope, wetland, or other critical areas, and the city's Norkirk plan maps steep slopes and landslide-hazard areas north of Peter Kirk Elementary near the Cross Kirkland Corridor. Check your parcel with the City of Kirkland Planning Department before you build. MyFence can walk the lot with you and point out what to confirm.",
  },
  {
    question: "What fence styles work best for Norkirk's older bungalow lots?",
    answer:
      "Most Norkirk yards are laid out on a historic street-and-alley grid, so a fence usually has a short run, a rear alley gate, and a street-facing side that neighbors will see. A six-foot cedar privacy fence with a picture-frame border suits side yards and rear lines. A hogwire fence with a cedar frame works well for a dog yard or garden where you want to keep the light and the view of the street. Hybrid aluminum-and-cedar panels are an option for a wet or shaded corner where you do not want to restain every few years. Keep the street-facing side lower and more open where the 3.5-foot front-yard limit applies. We can mix styles on one property, for example solid cedar on the neighbor side and hogwire at the front.",
  },
  {
    question: "How much does fence installation cost in Norkirk, Kirkland?",
    answer:
      "Our typical Kirkland ranges are $47–$71 per linear foot for six-foot cedar privacy, $40–$59 for hogwire with a cedar frame, and $55–$79 for hybrid aluminum/cedar. Stepped bays on a sloped lot, extra or wider gates, tear-out of an old fence, and tight access can add to a quote. Use the virtual quote tool for a starting number. We confirm the price after an on-site measurement.",
  },
  {
    question: "How long does fence installation take in Norkirk?",
    answer:
      "Many residential fence projects here take one to three working days once any needed approvals are in place. Panels are built off-site from Fence Genius measurements, which keeps on-site time short. Extra time usually comes from tear-out, a long run, a sloped lot, or working around mature trees and landscaping. We confirm the schedule with you before the crew arrives.",
  },
  {
    question: "Do I need my neighbor's permission for a fence in Norkirk?",
    answer:
      "Kirkland's code allows a fence of six feet or less anywhere on your property, including on the property line, if you can show where the line is with a survey or other reasonable means. Otherwise a fence has to stay 15 feet back from the street curb. Many Norkirk lots are small and platted on an alley grid, so we suggest confirming the line first and talking with your neighbor about height and style before the work starts. We can help you share a simple sketch of the plan.",
  },
];

const NORKIRK_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Crestwoods Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Crestwoods-Park",
    description:
      "The neighborhood's largest park, at 1818 6th Street, with ball fields, a soccer field, a playground, and trails that connect to the Cross Kirkland Corridor. Homes on the blocks around it often want a dog-safe yard fence that still looks good from the sidewalk.",
  },
  {
    name: "Van Aalst Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Van-Aalst-Park",
    description:
      "A 1.6-acre neighborhood park at 335 13th Avenue with a playground, a half-court, and open lawn. Nearby yards tend to be family yards where gate latches and sight lines matter.",
  },
  {
    name: "Tot Lot Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Tot-Lot-Park",
    description:
      "A small park at 119 9th Avenue with a fenced playground for young children and community garden plots. A good reminder of how many Norkirk blocks mix homes, gardens, and small public spaces.",
  },
  {
    name: "Reservoir Park",
    url: "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Reservoir-Park",
    description:
      "A pocket park at 1501 3rd Street with a playground and lawn, on 3rd Street, one of the streets where the city's Norkirk plan calls for preserving public views of Lake Washington and the Olympics.",
  },
  {
    name: "Cross Kirkland Corridor",
    url: "https://www.kirklandwa.gov/Government/Departments/Public-Works-Department/Cross-Kirkland-Corridor",
    description:
      "The 5.75-mile gravel trail on the former rail line forms Norkirk's eastern edge. Yards that back onto the corridor edge need a fence line checked against the property survey before posts go in.",
  },
];

const NorkirkPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Norkirk, Kirkland",
    pageTitle: "Norkirk Kirkland Fence Installation",
    description: META_DESCRIPTION,
    faqItems: NORKIRK_FAQS,
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
                    Serving Norkirk, Kirkland WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Norkirk Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy, hogwire, and hybrid fencing for Norkirk&apos;s
                  bungalow blocks, alley-grid yards, and the streets around
                  Crestwoods Park and the Cross Kirkland Corridor.
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
                  city="Norkirk, Kirkland"
                  state="Washington"
                  radiusMiles={2}
                  zoom={14}
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
                <Award className="h-5 w-5 text-primary" />
                {WARRANTY_CONSTANTS.YEARS}-Year Warranty
              </span>
            </div>
          </div>
        </section>

        {/* 3. Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fences for One of Kirkland&apos;s Oldest Residential Neighborhoods
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The City of Kirkland&apos;s Norkirk Neighborhood Plan places
                Norkirk between the Cross Kirkland Corridor on the east, Market
                Street on the west, the Moss Bay neighborhood and downtown on the
                south, and the crest of the Juanita Slope near 20th Avenue on the
                north. The plan describes a mostly residential neighborhood with
                some of Kirkland&apos;s oldest homes, the greatest number of
                bungalows in the city, and a street-and-alley grid that dates to
                the early 1900s. City Hall, Kirkland Middle School, and Peter
                Kirk Elementary are here too. Fences in Norkirk are usually short,
                careful jobs: a side yard between two older houses, a rear line on
                an alley, or a front-yard border that has to stay inside the
                city&apos;s height limits.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence installs cedar, hogwire, and hybrid aluminum/cedar fences
                across Kirkland, including the neighboring{" "}
                <Link href="/service-areas/kirkland/market" className={linkClass}>
                  Market
                </Link>{" "}
                and{" "}
                <Link href="/service-areas/kirkland/moss-bay" className={linkClass}>
                  Moss Bay
                </Link>{" "}
                neighborhoods. We use Fence Genius to capture lengths, grade, and
                gate locations before a crew arrives, so panels are built to the
                yard instead of to a standard lot.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Norkirk Homeowners Trust MyFence
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Height and Setback Rules, Checked Up Front
                      </h3>
                      <p className="text-muted-foreground">
                        Kirkland limits front-yard fences along neighborhood
                        access and collector streets to 3.5 feet, and has
                        sight-triangle and curb-distance rules. We go over those
                        with you before we draw the line, and we suggest you
                        confirm the details with the city.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Fences That Suit Older Homes
                      </h3>
                      <p className="text-muted-foreground">
                        Bungalow and craftsman-era houses look best with a
                        simple, well-proportioned fence. We keep the street side
                        clean and put the privacy where the neighbors and the
                        alley are.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Working Around Trees and Slopes
                      </h3>
                      <p className="text-muted-foreground">
                        Norkirk values its trees and has mapped steep slopes on
                        its north side. We lay out posts around roots and grade
                        changes and tell you when a parcel may need city review.
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
                        Full coverage on materials and labor, with hardware
                        chosen for Kirkland&apos;s wet winters.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Norkirk Kirkland fence" />

        {/* 6. Photo Gallery — Kirkland-area installs until Norkirk-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Kirkland"
          title="Recent Fence Work in Kirkland"
          description="These photos are from Kirkland jobs, not specifically from Norkirk. Same crew, same materials, and the same Fence Genius process we use on Norkirk lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Kirkland" neighborhood="Norkirk" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Norkirk-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Norkirk Alley Grid and Gate Placement
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The city&apos;s plan notes that parts of Norkirk platted in
                    the early 20th century have a distinct alley grid, and it
                    wants to keep that grid. For a fence that means the rear line
                    often meets an alley, and a gate there has to swing without
                    blocking a neighbor or a garage. We measure the alley side
                    first so the gate width and swing are right.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Front Yards, Corners, and Market Street
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Under the Kirkland Zoning Code, a detached home abutting a
                    neighborhood access or collector street is limited to a
                    3.5-foot fence in the required front yard. A lot along a
                    principal or minor arterial, such as Market Street on
                    Norkirk&apos;s western edge, is limited to 3.5 feet within
                    three feet of the property line unless there is an improved
                    landscape strip. Fences taller than three feet also have to
                    stay out of intersection and driveway sight triangles, and a
                    fence generally has to be 15 feet back from the street curb
                    unless a survey shows the property line. We plan corner lots
                    with those rules in mind.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Slopes and Critical Areas North of Peter Kirk Elementary
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Norkirk plan maps steep slopes with landslide hazard
                    north of Peter Kirk Elementary near the Cross Kirkland
                    Corridor, a small wetland at Van Aalst Park, and Forbes Creek
                    and Moss Bay drainage basins. The city&apos;s permit page
                    says its exemption for fences six feet and under does not
                    apply to areas such as steep slope, wetland, or shoreline
                    critical areas. If your lot is near one of these, check the
                    parcel report with the city before you plan a fence. We
                    can then design around what the city allows.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Trees, Lake Views, and Infill Next Door
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Norkirk plan notes that residents prize open space and
                    abundant trees, that older homes are being replaced by newer
                    infill, and that public views of Lake Washington and the
                    Olympics are preserved from 1st, 2nd, and 3rd Streets. Those
                    public view corridors are in the street, not on your lot, but
                    a lower, more open front or side fence helps keep light and
                    sight lines for you and your neighbors when a new, taller
                    house goes up next door. We set posts to avoid major roots
                    where we can.
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
                Fence Installation Cost in Norkirk
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                A Norkirk fence is usually a short residential run, so access,
                gates, tear-out, and slope move the number more than the style
                does. These are typical Kirkland ranges; your on-site
                measurement is the real quote.
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
                  Stepped bays on sloped lots, custom gates, tear-out of an
                  existing fence, and tight access may add 10–15%. Get an exact
                  quote for your Norkirk property with a free on-site
                  measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Norkirk property</Link>
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
                Popular Fence Styles in Norkirk
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A good fit for side yards and rear lines between older
                    houses. A picture-frame border gives it a finished look that
                    sits well next to bungalow and craftsman trim.
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
                    Cedar frame with black mesh for dog yards, gardens, and
                    front-yard borders where you want to keep things open and
                    stay within the 3.5-foot limit.
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
                    Aluminum panels in a cedar frame on steel posts, a
                    lower-maintenance option for a shaded, damp corner or a long
                    run you do not want to restain.
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
                Our Norkirk Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Norkirk Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the lines, note the alley and gate
                    locations, and look at slope and trees. Fence Genius captures
                    lengths and grade so panels are built to your yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Norkirk Design & City Rules Check
                  </h3>
                  <p className="text-muted-foreground">
                    You pick the style and height. We go over Kirkland&apos;s
                    height, setback, curb-distance, and sight-triangle rules for
                    your lot and flag anything you should confirm with the city,
                    such as a parcel near a mapped critical area.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from the measurements, so install
                    days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Norkirk Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews use compact equipment suited to residential streets
                    and alleys, protect nearby landscaping where possible, and
                    clean up at the end of each day.
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
          title="Norkirk Fence Installation FAQs"
          items={NORKIRK_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Kirkland"
        neighborhoodName="Norkirk"
        attractions={NORKIRK_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Norkirk is a short walk from downtown Kirkland and home to Kirkland
              City Hall, Kirkland Middle School next to Crestwoods Park, and Peter
              Kirk Elementary on 6th Street. The city&apos;s plan also notes the
              neighborhood&apos;s historic bungalows and its location along the
              Cross Kirkland Corridor. Public schools here are part of the{" "}
              <a
                href="https://www.lwsd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Lake Washington School District
              </a>
              ; check the district&apos;s boundary tools for the school that serves
              your address.
            </p>
            <p>
              You can read the City of Kirkland&apos;s{" "}
              <a
                href={KIRKLAND_FENCE_RULES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                fence requirements
              </a>{" "}
              and its{" "}
              <a
                href={KIRKLAND_PERMIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                guide to projects that do and do not need a permit
              </a>{" "}
              before you plan your fence. For the neighborhood&apos;s
              history, policies, and mapped features, see the city&apos;s{" "}
              <a
                href="https://www.kirklandwa.gov/files/sharedassets/public/v/1/planning-amp-building/kirkland-2044-comp-plan/general-neighborhood-plan-amendments/final_12m_norkirk-neighborhoodplan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Norkirk Neighborhood Plan
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
                We install fences throughout Kirkland. From Norkirk we also work
                west into Market, south into Moss Bay and Downtown Kirkland, and
                north toward Juanita.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/market">Market</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/moss-bay">Moss Bay</Link>
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
                Ready to Enhance Your Norkirk Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Norkirk. We&apos;ll walk the
                lot, talk through privacy versus an open front yard, and quote a
                fence that fits your home.
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

export default NorkirkPage;
