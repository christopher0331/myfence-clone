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
  Mountain,
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
import ImageCaption from "@/components/blog/ImageCaption";
import OptimizedImage from "@/components/OptimizedImage";
import ArticleToc, {
  type ArticleTocItem,
} from "@/components/neighborhoods/ArticleToc";
import {
  buildNeighborhoodStructuredData,
  type NeighborhoodFaqItem,
} from "@/components/neighborhoods/structuredData";
import NeighborhoodFaqSection from "@/components/neighborhoods/NeighborhoodFaqSection";
import { buildImageUrl } from "@/lib/serviceAreaPhotoUtils";


const CANONICAL = "https://myfence.com/service-areas/kent/panther-lake";
const META_TITLE =
  "Panther Lake Kent Fence Installation | City Rules & Styles | MyFence";
const META_DESCRIPTION =
  "Fence installation on the Panther Lake area of Kent. Cedar, hogwire, and steel-post fences planned around City of Kent fence rules, corner lots, and sloped yards. Free quotes. (253) 455-1885.";

const KENT_PERMIT_FAQ =
  "https://www.kentwa.gov/pay-and-apply/apply-for-a-permit/do-i-need-a-permit";
const KENT_FENCE_HANDOUT =
  "https://www.kentwa.gov/home/showpublisheddocument/24945/639113417182900000";
const KENT_KCC_1508 =
  "https://www.codepublishing.com/WA/Kent/html/Kent15/Kent1508.html";
const LAKE_MERIDIAN_PARK =
  "https://www.kentwa.gov/residents/parks-recreation-and-community-services/parks/lake-meridian-park";

const linkClass =
  "font-semibold text-primary underline decoration-2 underline-offset-4";

const TOC_ITEMS: ArticleTocItem[] = [
  { id: "overview", label: "Panther Lake at a glance" },
  { id: "hoa-check", label: "HOAs and covenants" },
  { id: "slopes", label: "Yards, trees, and drainage" },
  { id: "city-rules", label: "City of Kent rules" },
  { id: "fence-styles", label: "Fence styles that fit" },
  { id: "photos", label: "Recent Kent fence work" },
  { id: "process", label: "Our installation process" },
  { id: "faq", label: "Panther Lake fence FAQs" },
];

const PANTHER_LAKE_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a City of Kent permit for a fence in Panther Lake?",
    answer:
      "The City of Kent lists fences 7 feet high or less among work that does not need a permit, and says the work must still follow the applicable codes. Fences over 7 feet need plans. Confirm with the city for your lot before you build.",
  },
  {
    question: "Does my Panther Lake subdivision have fence rules?",
    answer:
      "Many Panther Lake subdivisions have a homeowners association or recorded covenants, and some have none. Rules on height, materials, color, and approval vary by plat. If you have an HOA, check with its architectural committee before you build. We can provide a drawing and materials list for the application.",
  },
  {
    question: "What are the corner-lot rules in Kent?",
    answer:
      "Kent City Code 15.08.130 keeps a 20-foot sight triangle at residential street intersections clear between 2½ and 10 feet above street grade. That limits solid fences near the corner, so check the code for your lot.",
  },
  {
    question: "How do you handle sloped yards?",
    answer:
      "On a slope we either step the panels or rake them to follow grade, depending on the style and how steep the run is. Fence Genius measurements capture the grade so the panels are built to fit.",
  },
  {
    question: "What fence styles work best in Panther Lake?",
    answer:
      "Six-foot cedar privacy fences are a common choice for side and rear lines. Black hogwire keeps views open, and steel posts with cedar panels hold up well in damp Northwest yards. Check any HOA rules first.",
  },
  {
    question: "How long does fence installation take?",
    answer:
      "Many residential fence projects take one to three working days once any approvals are in place. Panels are built off-site from Fence Genius measurements, which keeps on-site time short. Tear-out, slope, tree roots, or a long run can add time.",
  },
  {
    question: "How much does a fence cost in Panther Lake?",
    answer:
      "Price depends on the style, total length, gates, slope, access, and whether an old fence has to come out. Use the virtual quote tool for a starting number, and we confirm the final price after an on-site measurement.",
  },
];

const PANTHER_LAKE_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Lake Meridian Park",
    url: LAKE_MERIDIAN_PARK,
    description:
      "A City of Kent park on Lake Meridian, south of Panther Lake on East Hill, with a swimming beach, fishing dock, and picnic areas.",
  },
];

const PantherLakePage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Panther Lake, Kent",
    pageTitle: "Panther Lake Kent Fence Installation",
    description: META_DESCRIPTION,
    faqItems: PANTHER_LAKE_FAQS,
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
              href="/service-areas/kent"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Kent
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Panther Lake, Kent WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Panther Lake Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar, hogwire, and steel-post fencing for Panther Lake yards,
                  planned around City of Kent fence rules, corner lots, and
                  sloped lots.
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
                  city="Kent"
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
                Kent&apos;s North-End Plateau
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Panther Lake is a residential area on the plateau at the north
                end of Kent, between Kent&apos;s East Hill and Renton. It was
                unincorporated King County until the City of Kent annexed it in
                2010, so today its fences follow City of Kent code. It is a mix
                of older homes on larger lots and newer subdivisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fence work here usually means privacy along side and rear
                lines, keeping pets and kids in, and replacing older fences
                built before the area joined Kent.
              </p>
              <Card className="p-6 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">Panther Lake fence quick facts</h3>
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
                      <td className="py-3 pr-4 font-medium text-foreground">City permit</td>
                      <td className="py-3 pr-4">
                        Fences 7 feet or less are listed as not needing a
                        permit; code still applies.
                      </td>
                      <td className="py-3">
                        <a href={KENT_PERMIT_FAQ} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          City of Kent
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Over 7 feet</td>
                      <td className="py-3 pr-4">
                        The city&apos;s fence handout asks for a site plan and
                        construction plans.
                      </td>
                      <td className="py-3">
                        <a href={KENT_FENCE_HANDOUT} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Fence handout
                        </a>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Corner lots</td>
                      <td className="py-3 pr-4">
                        A 20-foot sight triangle at residential intersections
                        stays clear between 2½ and 10 feet above street grade.
                      </td>
                      <td className="py-3">
                        <a href={KENT_KCC_1508} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          KCC 15.08.130
                        </a>
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
                  HOAs and Covenants in Panther Lake
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Panther Lake is not one association. Some subdivisions have an HOA
                or recorded covenants with fence rules, and many older lots
                have none. We don&apos;t publish rules for an HOA unless we can
                cite them.
              </p>
              <Callout title="Check with your HOA first" variant="info">
                <p>
                  If your home is in an HOA, check with its architectural
                  committee for height, material, color, and approval rules
                  before you build. We give you a drawing and materials list
                  for the application.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* 3. Slopes */}
        <section id="slopes" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Mountain className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Yards, Trees, and Drainage
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Stepped or raked panels</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Where a yard falls away, we step panels to stay level or
                    rake them to follow the grade, depending on the style.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Wet ground</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    In soggy spots, steel posts or gravel at the base help a
                    fence last through Northwest winters.
                  </p>
                </Card>
              </div>
              <Callout title="Know your property line" variant="warning">
                <p>
                  Older Panther Lake lots don&apos;t always have visible survey
                  markers. If the line is unclear, a survey before building
                  saves a dispute with a neighbor later.
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
                  City of Kent Fence Rules
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every Panther Lake fence has to meet City of Kent zoning and
                building codes, whether or not the lot is in an HOA.
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-6">
                <li>
                  <strong className="text-foreground">Permit:</strong> the city
                  lists fences 7 feet high or less as not needing a permit, but
                  the work must still follow code.
                </li>
                <li>
                  <strong className="text-foreground">Over 7 feet:</strong> the
                  city&apos;s fence handout asks for a site plan and
                  construction plans.
                </li>
                <li>
                  <strong className="text-foreground">Corner lots:</strong> Kent
                  City Code 15.08.130 keeps a 20-foot triangle at residential
                  intersections clear between 2½ and 10 feet above street grade.
                </li>
              </ul>
              <Callout title="Confirm with the city before you build" variant="warning">
                <p>
                  Codes change. Check the city&apos;s{" "}
                  <a href={KENT_PERMIT_FAQ} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    permit guidance
                  </a>
                  , its{" "}
                  <a href={KENT_FENCE_HANDOUT} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    fence handout
                  </a>
                  , and{" "}
                  <a href={KENT_KCC_1508} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    KCC chapter 15.08
                  </a>{" "}
                  for your lot.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* Quote tool */}
        <LeadCaptureTabs fenceStyleName="Panther Lake Kent fence" />

        {/* 5. Fence styles */}
        <section id="fence-styles" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Fence Styles That Fit Panther Lake
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These are styles that suit Panther Lake yards. If you are in an
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
                    the plateau.
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
        <section id="photos" className="py-16 bg-muted/50 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Recent Kent Fence Work
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These photos are from MyFence jobs in Kent. They are not from
                Panther Lake, but they show the same crew and finish we bring to
                a Panther Lake yard.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <figure>
                  <OptimizedImage
                    src={buildImageUrl("/service-area-photos/myfence-kent-picture-frame-8216c5b4-after-01.jpg")}
                    alt="Cedar picture frame privacy fence installed by MyFence in Kent, WA"
                    className="w-full h-auto rounded-lg object-cover"
                    width={1600}
                    height={1200}
                  />
                  <ImageCaption>
                    A cedar picture-frame fence on a Kent job (not on East
                    Hill).
                  </ImageCaption>
                </figure>
                <figure>
                  <OptimizedImage
                    src={buildImageUrl("Kent/Kent-3-Rail-Fence-1.webp", 900)}
                    alt="Wood 3-rail fence installed by MyFence in Kent, WA"
                    className="w-full h-auto rounded-lg object-cover"
                    width={900}
                    height={1200}
                  />
                  <ImageCaption>
                    A 3-rail fence on a Kent job (not on Panther Lake).
                  </ImageCaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreaPhotoGallery
          city="Kent"
          title="More Fence Work in Kent"
          description="These photos are from Kent jobs, not specifically from Panther Lake."
        />

        {/* 7. Process */}
        <section id="process" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Panther Lake Installation Process
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
            title="Panther Lake Fence Installation FAQs"
            items={PANTHER_LAKE_FAQS}
          />
        </div>
      </main>

      <AboutTheArea
        cityName="Kent"
        neighborhoodName="Panther Lake"
        attractions={PANTHER_LAKE_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Panther Lake sits at the north end of Kent&apos;s plateau, next
              to Renton, and became part of the City of Kent in 2010.
            </p>
            <p>
              Lake Meridian Park, a City of Kent park on East Hill, is a short
              drive south.
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
                We install fences throughout Kent and South King County.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kent">Kent overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kent/kenton-firs">Kenton Firs, Kent</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kent/east-hill">East Hill, Kent</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/covington">Covington</Link>
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
                Ready to Fence Your Panther Lake Yard?
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

export default PantherLakePage;
