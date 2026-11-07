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
  TreePine,
  Home,
  Ruler,
  Hammer,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
import Callout from "@/components/blog/Callout";
import ArticleToc, {
  type ArticleTocItem,
} from "@/components/neighborhoods/ArticleToc";
import {
  buildNeighborhoodStructuredData,
  type NeighborhoodFaqItem,
} from "@/components/neighborhoods/structuredData";
import NeighborhoodFaqSection from "@/components/neighborhoods/NeighborhoodFaqSection";

const CANONICAL = "https://myfence.com/service-areas/kirkland/everest";
const META_TITLE =
  "Everest Kirkland Fence Installation | City Rules & Styles | MyFence";
const META_DESCRIPTION =
  "Fence installation in Everest, Kirkland. Cedar, hogwire, and steel-post fences planned around Kirkland fence rules, front-yard limits, and wooded lots near Everest Park. Free quotes. (253) 455-1885.";

const KIRKLAND_FENCE_RULES =
  "https://www.kirklandwa.gov/files/sharedassets/public/v/1/development-services/fence-requirements.pdf";
const EVEREST_PLAN = "https://kirkland.municipal.codes/CompPlan/12.C";
const EVEREST_PARKS = "https://kirkland.municipal.codes/CompPlan/12.C_7";

const linkClass =
  "font-semibold text-primary underline decoration-2 underline-offset-4";

const TOC_ITEMS: ArticleTocItem[] = [
  { id: "overview", label: "Everest at a glance" },
  { id: "hoa-check", label: "HOAs and covenants" },
  { id: "trees", label: "Trees, slopes, and buffers" },
  { id: "city-rules", label: "City of Kirkland rules" },
  { id: "fence-styles", label: "Fence styles that fit" },
  { id: "photos", label: "Recent Kirkland fence work" },
  { id: "process", label: "Our installation process" },
  { id: "faq", label: "Everest fence FAQs" },
];

const EVEREST_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Everest?",
    answer:
      "Kirkland's Planning Department fence handout says any fence over 6 feet in height requires a building permit. Fences along side and rear property lines, and within required side and rear setback yards, may be no higher than 6 feet. Check with the city for your lot before you build.",
  },
  {
    question: "How tall can a front-yard fence be in Everest?",
    answer:
      "On a property that abuts a neighborhood access or collector street, Kirkland does not allow a fence over 3½ feet in the front yard. Lots on a principal or minor arterial have a separate 3.5-foot limit within 3 feet of the property line unless there is an improved landscape strip. Ask the city which street type applies to yours.",
  },
  {
    question: "How close to the street can a Kirkland fence go?",
    answer:
      "Kirkland's handout says a fence may not be closer than 15 feet to the street curb, or the pavement edge where there is no curb, unless the property line can be shown with a survey or other reasonable means. Fences over 3 feet are also kept out of the sight triangles at street and driveway intersections.",
  },
  {
    question: "Can I fence near a wetland, stream, or wooded buffer?",
    answer:
      "Kirkland's handout says fences may not be located in a stream, wetland, or their buffers, or in a Native Growth Protection Easement (NGPE). If your lot backs onto a ravine or wooded open space, check your plat and the city before you set posts.",
  },
  {
    question: "Does my Everest street have an HOA?",
    answer:
      "Some plats have an HOA or recorded covenants and many older lots do not. We don't publish rules for an HOA unless we can cite them. If you have an HOA, check with its architectural review committee before you build. We can provide a drawing and materials list for the application.",
  },
  {
    question: "How long does fence installation take?",
    answer:
      "Many residential fence projects take one to three working days once any approvals are in place. Panels are built off-site from Fence Genius measurements, which keeps on-site time short. Tear-out, slope, tree roots, or a long run can add time.",
  },
  {
    question: "How much does a fence cost in Everest?",
    answer:
      "Price depends on the style, total length, gates, slope, access, and whether an old fence has to come out. Use the virtual quote tool for a starting number, and we confirm the final price after an on-site measurement.",
  },
];

const EVEREST_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Everest Park",
    url: EVEREST_PARKS,
    description:
      "A 23-acre community park with youth playfields, a playground, picnic areas, trails, and more than 13 acres of natural area along Everest Creek, according to the city's neighborhood plan.",
  },
  {
    name: "Cross Kirkland Corridor",
    url: EVEREST_PLAN,
    description:
      "The trail along the neighborhood's west edge, which the plan describes as a gathering place and a walking and biking link to the Eastrail Corridor.",
  },
];

const EverestPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Everest, Kirkland",
    pageTitle: "Everest Kirkland Fence Installation",
    description: META_DESCRIPTION,
    faqItems: EVEREST_FAQS,
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
        {/* Hero */}
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
                    Serving Everest, Kirkland WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Everest Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar, hogwire, and steel-post fencing for Everest
                  yards, planned around City of Kirkland fence rules, front-yard
                  limits, and wooded lots near Everest Park.
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
                  state="Washington"
                  radiusMiles={3}
                  zoom={13}
                  showBusinessInfo={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust badges */}
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

        {/* Table of contents */}
        <section className="py-10">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <ArticleToc items={TOC_ITEMS} title="In this guide" />
            </div>
          </div>
        </section>

        {/* 1. Overview */}
        <section id="overview" className="pb-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                A Compact Neighborhood Between the Corridor and I-405
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                According to the city&apos;s{" "}
                <a href={EVEREST_PLAN} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Everest Neighborhood Plan
                </a>
                , Everest is bounded by I-405 on the east, the Cross Kirkland
                Corridor on the west, Central Way on the north, and the
                Houghton/Everest Neighborhood Center along NE 68th Street on
                the south. The plan calls it compact and central, with parks,
                homes, shopping, and light industry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fence work here usually means privacy on side and rear lines,
                keeping pets in, working around mature trees, and staying
                inside Kirkland&apos;s front-yard height limits.
              </p>
              <Card className="p-6 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">Everest fence quick facts</h3>
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead className="border-b">
                    <tr>
                      <th className="py-2 pr-4 font-semibold">Topic</th>
                      <th className="py-2 pr-4 font-semibold">What to know</th>
                      <th className="py-2 font-semibold">Source</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Building permit</td>
                      <td className="py-3 pr-4">Required for any fence over 6 feet.</td>
                      <td className="py-3">
                        <a href={KIRKLAND_FENCE_RULES} target="_blank" rel="noopener noreferrer" className={linkClass}>Kirkland fence handout</a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Side and rear</td>
                      <td className="py-3 pr-4">Up to 6 feet along side and rear lines and in side and rear setbacks.</td>
                      <td className="py-3">
                        <a href={KIRKLAND_FENCE_RULES} target="_blank" rel="noopener noreferrer" className={linkClass}>Kirkland fence handout</a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Front yard</td>
                      <td className="py-3 pr-4">3½ feet maximum on a neighborhood access or collector street.</td>
                      <td className="py-3">
                        <a href={KIRKLAND_FENCE_RULES} target="_blank" rel="noopener noreferrer" className={linkClass}>Kirkland fence handout</a>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Near the street</td>
                      <td className="py-3 pr-4">At least 15 feet from the curb unless the property line is shown by survey.</td>
                      <td className="py-3">
                        <a href={KIRKLAND_FENCE_RULES} target="_blank" rel="noopener noreferrer" className={linkClass}>Kirkland fence handout</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </section>

        {/* 2. HOA check */}
        <section id="hoa-check" className="py-16 bg-muted/50 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Home className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  HOAs and Covenants in Everest
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Everest is not one association. Some plats have an
                HOA or recorded covenants with fence rules, and many older lots
                have none. We don&apos;t publish rules for an HOA unless we can
                cite them.
              </p>
              <Callout title="Check with your HOA first" variant="info">
                <p>
                  If your home is in an HOA, check with its architectural
                  review committee for height, material, color, and approval
                  rules before you build. We give you a drawing and materials
                  list for the application.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* 3. Trees */}
        <section id="trees" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <TreePine className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Trees, Slopes, and Buffers
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Roots and mature trees</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We hand-dig post holes near large roots and adjust post
                    spacing so the fence line works around the tree.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Stepped or raked panels</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Where a yard falls away, we step panels to stay level or
                    rake them to follow the grade, depending on the style.
                  </p>
                </Card>
              </div>
              <Callout title="Wetlands, streams, and NGPEs" variant="warning">
                <p>
                  Kirkland&apos;s{" "}
                  <a href={KIRKLAND_FENCE_RULES} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    fence handout
                  </a>{" "}
                  says fences may not go in a stream, wetland, their buffers,
                  or a Native Growth Protection Easement. If your rear line
                  backs onto Everest Park&apos;s woods or creek, check your plat first.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* 4. City rules */}
        <section id="city-rules" className="py-16 bg-muted/50 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Ruler className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  City of Kirkland Fence Rules
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every Everest fence has to meet City of Kirkland
                rules, whether or not the lot is in an HOA. The Planning
                Department&apos;s handout summarizes them:
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-6">
                <li>
                  <strong className="text-foreground">Permit:</strong> any fence
                  over 6 feet in height requires a building permit.
                </li>
                <li>
                  <strong className="text-foreground">Side and rear:</strong> no
                  higher than 6 feet along side and rear lines and in required
                  side and rear setback yards.
                </li>
                <li>
                  <strong className="text-foreground">Front yard:</strong> no
                  fence over 3½ feet in the front yard on a neighborhood access
                  or collector street.
                </li>
                <li>
                  <strong className="text-foreground">Fence and wall:</strong> a
                  fence and retaining wall within 5 feet of each other in a
                  required yard may total 6 feet.
                </li>
                <li>
                  <strong className="text-foreground">Corners and driveways:</strong>{" "}
                  fences over 3 feet stay out of sight triangles at street and
                  driveway intersections.
                </li>
              </ul>
              <Callout title="Confirm with the city before you build" variant="warning">
                <p>
                  Codes change. Check the city&apos;s{" "}
                  <a href={KIRKLAND_FENCE_RULES} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    fence requirements
                  </a>{" "}
                  and ask the Planning Department about your lot.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* Quote tool */}
        <LeadCaptureTabs fenceStyleName="Everest Kirkland fence" />

        {/* 5. Fence styles */}
        <section id="fence-styles" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Fence Styles That Fit Everest
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These are styles that suit Everest yards. If you are in an
                HOA, check its rules before you choose.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Solid Board Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A six-foot cedar privacy fence for side and rear lines,
                    the most common privacy choice.
                  </p>
                  <Link href="/fence-styles/solid-board-fence" className="text-primary text-sm font-medium hover:underline">
                    View style →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Modified Picture Frame</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Cedar privacy with a framed top and base for a finished
                    look from both sides.
                  </p>
                  <Link href="/fence-styles/modified-picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View style →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Black Hogwire</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    An open mesh fence in a cedar frame that keeps views of
                    the yard. Check any HOA rules first.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View style →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar &amp; Steel Hybrid</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Steel posts with cedar panels for shady, damp yards under
                    tall trees.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View style →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Photos */}
        <section id="photos" className="pt-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">
                Recent Kirkland Fence Work
              </h2>
            </div>
          </div>
        </section>

        <ServiceAreaPhotoGallery
          city="Kirkland"
          title="Fence Work in Kirkland"
          description="These photos are from MyFence jobs in Kirkland, not specifically from Everest."
        />

        {/* 7. Process */}
        <section id="process" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Everest Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, look for survey markers, and note trees,
                    slope, gates, and any perimeter easement. Fence Genius
                    captures lengths and grade.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Layout &amp; Approvals</h3>
                  <p className="text-muted-foreground">
                    We give you a drawing with a north arrow, the fence size,
                    and distances from property lines, plus a materials list,
                    for any HOA application.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    After you have written approval, panels are built off-site
                    so install days stay short.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Installation</h3>
                  <p className="text-muted-foreground">
                    We build to the approved layout, work around roots, and
                    clean up at the end of each day.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    5. Walkthrough &amp; {WARRANTY_CONSTANTS.YEARS}-Year Warranty
                  </h3>
                  <p className="text-muted-foreground">
                    A final walkthrough covers every panel, post, and gate. Our{" "}
                    {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty starts
                    when the job is complete.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div id="faq" className="scroll-mt-24">
          <NeighborhoodFaqSection
            title="Everest Fence Installation FAQs"
            items={EVEREST_FAQS}
          />
        </div>
      </main>

      <AboutTheArea
        cityName="Kirkland"
        neighborhoodName="Everest"
        attractions={EVEREST_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              The city&apos;s neighborhood plan says westerly views of the
              mountains and Lake Washington open up from Everest&apos;s eastern
              hillside, and that the neighborhood is a short walk or ride to
              Downtown Kirkland and the Cross Kirkland Corridor.
            </p>
            <p>
              The plan also lists the Ohde Avenue Pea Patch Garden, the Rotary
              Central Station Pavilion, and Feriton Spur Park among the
              neighborhood&apos;s parks and open spaces.
            </p>
          </>
        }
      />

      <main>
        {/* Nearby */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Areas
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Kirkland and the Eastside.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/downtown-kirkland">Downtown Kirkland</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/moss-bay">Moss Bay, Kirkland</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/norkirk">Norkirk, Kirkland</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland/central-houghton">Central Houghton, Kirkland</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/redmond">Redmond</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Fence Your Everest Yard?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We&apos;ll walk the lot, prepare a drawing for any HOA
                application, and give you a free quote.
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

export default EverestPage;
