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
  Trees,
  Landmark,
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

const CANONICAL = "https://myfence.com/service-areas/kent/kenton-firs";
const META_TITLE =
  "Kenton Firs Kent Fence Installation | AACC & City Rules | MyFence";
const META_DESCRIPTION =
  "Fence installation in Kenton Firs, Kent, WA. Cedar fences planned around the Kenton Firs covenants, the AACC site visit, and City of Kent rules. Free quotes. (253) 455-1885.";

const HOA_HREF = "/service-areas/kent/kenton-firs/hoa-approved-fencing";
const KF_HOME = "https://kentonfirs.org/";
const KF_COVENANTS =
  "https://assets.zyrosite.com/mePLZ3K2bzH43xMz/recorded-covenants-combined-AoPG1WPM84iwR16p.pdf";
const KF_AMENDMENTS =
  "https://assets.zyrosite.com/mePLZ3K2bzH43xMz/2021-amendmts-with-recording-1-YD0pkjMVnbS4Dzkk.pdf";
const KF_AACC_PACKET =
  "https://assets.zyrosite.com/mePLZ3K2bzH43xMz/aacc_appl-revised-2-12-22-mk3DO88QV2fw7jeM.pdf";
const KENT_PERMIT_FAQ =
  "https://www.kentwa.gov/pay-and-apply/apply-for-a-permit/do-i-need-a-permit";
const KENT_FENCE_HANDOUT =
  "https://www.kentwa.gov/home/showpublisheddocument/24945/639113417182900000";
const KENT_KCC_1508 =
  "https://www.codepublishing.com/WA/Kent/html/Kent15/Kent1508.html";

const linkClass =
  "font-semibold text-primary underline decoration-2 underline-offset-4";

const TOC_ITEMS: ArticleTocItem[] = [
  { id: "overview", label: "Kenton Firs at a glance" },
  { id: "covenants", label: "What the covenants say about fences" },
  { id: "trees-easements", label: "Trees, buffers, and easements" },
  { id: "city-rules", label: "City of Kent rules" },
  { id: "fence-styles", label: "Fence styles that fit" },
  { id: "photos", label: "Recent Kent fence work" },
  { id: "process", label: "Our installation process" },
  { id: "faq", label: "Kenton Firs fence FAQs" },
];

const KENTON_FIRS_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need association approval to build a fence in Kenton Firs?",
    answer:
      "Yes, according to the Kenton Firs Community Association's recorded covenants: no fence may be erected until the Architectural/Agricultural Control Committee (AACC) approves the design and specifications. The association's AACC packet says fences need approval from three committee members before any work or preparation begins.",
  },
  {
    question: "How tall can a fence be in Kenton Firs?",
    answer:
      "The covenants say no fence can be over six feet from the ground, or from the bottom of a deck substructure, to its highest point. City of Kent rules also apply, including the corner-lot visibility triangle, so confirm the limits for your lot with the city and the AACC.",
  },
  {
    question: "Do I need a City of Kent permit for a fence in Kenton Firs?",
    answer:
      "The City of Kent lists fences 7 feet high or less among work that does not need a permit, and says the work must still follow the applicable codes. Confirm with the city for your lot. City rules and association approval are separate steps.",
  },
  {
    question: "Will someone from the association check my fence line?",
    answer:
      "The 2021 amendments to the covenants say two AACC members visit the property to verify the fence location is visually within the property lines, and that the AACC can require a survey at the owner's expense if it sees a possible encroachment.",
  },
  {
    question: "What fence styles work best in Kenton Firs?",
    answer:
      "A six-foot cedar privacy fence is a common choice for side and rear lines, and it matches the example in the AACC packet. That example is not an approval. Barbed wire and electric fences are not allowed under the covenants. Submit your chosen style to the AACC first.",
  },
  {
    question: "How long does fence installation take?",
    answer:
      "Many residential fence projects take one to three working days once approvals are in place. Panels are built off-site from Fence Genius measurements, which keeps on-site time short. Tear-out, slope, tree roots, or a long run can add time.",
  },
  {
    question: "How much does a fence cost in Kenton Firs?",
    answer:
      "Price depends on the style, total length, gates, slope, access, and whether an old fence has to come out. Use the virtual quote tool for a starting number, and we confirm the final price after an on-site measurement.",
  },
];

const KENTON_FIRS_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Kenton Firs common areas",
    url: KF_HOME,
    description:
      "The association's website describes seven common areas, about four acres set aside by the original developer, maintained by the association for residents.",
  },
  {
    name: "Kenton Firs Community Association",
    url: KF_HOME,
    description:
      "The association's site links its covenants, amendments, fine schedule, AACC application, and board list, and lists kentonfirs@gmail.com as its contact.",
  },
];

const KentonFirsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Kenton Firs, Kent",
    pageTitle: "Kenton Firs Kent Fence Installation",
    description: META_DESCRIPTION,
    faqItems: KENTON_FIRS_FAQS,
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
                    Serving Kenton Firs, Kent WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Kenton Firs Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar fencing for Kenton Firs lots, planned around the
                  association&apos;s fence covenants, the AACC site visit, and
                  City of Kent rules.
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
                A Wooded, Owner-Run Community in Kent
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Kenton Firs is a manufactured-home community in Kent where
                homeowners own their lots. Every owner belongs to the Kenton
                Firs Community Association, run by an elected volunteer board.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The association says the developers set out in 1971 to keep
                the wooded site as natural as possible. Many of the original
                Douglas firs and bigleaf maples still stand, and that shapes
                where a fence can go.
              </p>

              <Card className="p-6 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">Kenton Firs quick facts</h3>
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
                      <td className="py-3 pr-4 font-medium text-foreground">Size</td>
                      <td className="py-3 pr-4">
                        146 lots, with seven common areas.
                      </td>
                      <td className="py-3">
                        <a href={KF_HOME} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Association website
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Founded</td>
                      <td className="py-3 pr-4">
                        Plat application for a planned unit development in
                        1971.
                      </td>
                      <td className="py-3">
                        <a href={KF_HOME} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Association website
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Fence approval</td>
                      <td className="py-3 pr-4">
                        The AACC must approve a fence&apos;s design and
                        specifications before it is built.
                      </td>
                      <td className="py-3">
                        <a href={KF_COVENANTS} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Recorded covenants
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Fence height</td>
                      <td className="py-3 pr-4">
                        No fence over six feet, measured from the ground or
                        the bottom of a deck substructure.
                      </td>
                      <td className="py-3">
                        <a href={KF_COVENANTS} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Recorded covenants
                        </a>
                      </td>
                    </tr>
                    <tr className="align-top">
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
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </section>

        {/* 2. Covenants */}
        <section id="covenants" className="py-16 bg-muted/50 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Landmark className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  What the Covenants Say About Fences
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The association publishes its{" "}
                <a href={KF_COVENANTS} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  recorded covenants
                </a>{" "}
                and{" "}
                <a href={KF_AMENDMENTS} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  2021 amendments
                </a>
                . Here is what they say about fences, in plain language.
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-6">
                <li>
                  <strong className="text-foreground">Approval first:</strong>{" "}
                  no fence may be built until the AACC approves its design and
                  specifications.
                </li>
                <li>
                  <strong className="text-foreground">Six-foot cap:</strong> no
                  fence over six feet from the ground or the bottom of a deck
                  substructure.
                </li>
                <li>
                  <strong className="text-foreground">Banned types:</strong> no
                  barbed wire or electric fences, and no fence in a public right
                  of way.
                </li>
                <li>
                  <strong className="text-foreground">Site visit:</strong> two
                  AACC members visit to check that the fence line is visually
                  inside the property lines.
                </li>
                <li>
                  <strong className="text-foreground">Survey:</strong> if the
                  AACC sees a possible encroachment, it requires a survey at the
                  owner&apos;s expense before approval.
                </li>
              </ul>
              <Callout title="Use the AACC packet" variant="info">
                <p>
                  The association&apos;s{" "}
                  <a href={KF_AACC_PACKET} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    AACC plan and project request packet
                  </a>{" "}
                  asks for a project request, a materials list, and a drawing
                  with a north arrow and distances from property lines. See our{" "}
                  <Link href={HOA_HREF} className={linkClass}>
                    Kenton Firs fencing guide
                  </Link>{" "}
                  for the full approval steps.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* 3. Trees and easements */}
        <section id="trees-easements" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Trees className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Trees, Buffers, and Easements
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The covenants set aside a 30-foot recreation easement around
                the edge of the plat, on each lot along the perimeter. It is
                meant as a screen and buffer.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Perimeter lots</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    No fence or structure is permitted in the recreation
                    easement without the AACC&apos;s prior written approval,
                    and trees there are not to be removed without approval.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Neighbor access</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The covenants also let a neighbor cross part of an adjoining
                    lot to move a home, and make that neighbor responsible for
                    restoring a damaged fence. Ask the AACC how this affects your
                    side lines.
                  </p>
                </Card>
              </div>
              <Callout title="Roots change where posts go" variant="warning">
                <p>
                  Near large firs and maples, we shift post holes to avoid major
                  roots and may suggest a gate or a gap rather than cutting
                  through a root zone. Any tree removal is a question for the
                  AACC first.
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
                The covenants say every fence must meet City of Kent zoning and
                building codes, and that getting any permit is the
                homeowner&apos;s job.
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
                  construction plans. The covenants cap Kenton Firs fences at
                  six feet anyway.
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
        <LeadCaptureTabs fenceStyleName="Kenton Firs Kent fence" />

        {/* 5. Fence styles */}
        <section id="fence-styles" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Fence Styles That Fit Kenton Firs
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We did not find a published list of required fence materials or
                colors. These are general suggestions, not association
                approvals. Submit your choice to the AACC.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Solid Board Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A six-foot cedar privacy fence for side and rear lines,
                    like the example in the AACC packet.
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
                    the trees. Ask the AACC first.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View style →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar &amp; Steel Hybrid</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Steel posts with cedar panels for shady, damp yards under
                    the firs. Check materials with the AACC.
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
                Kenton Firs, but they show the same crew and finish we bring to
                a Kenton Firs lot.
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
                    A cedar picture-frame fence on a Kent job (not in Kenton
                    Firs).
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
                    A 3-rail fence on a Kent job (not in Kenton Firs).
                  </ImageCaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreaPhotoGallery
          city="Kent"
          title="More Fence Work in Kent"
          description="These photos are from Kent jobs, not specifically from Kenton Firs."
        />

        {/* 7. Process */}
        <section id="process" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Kenton Firs Installation Process
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
                  <h3 className="text-xl font-semibold mb-3">2. Drawing for the AACC</h3>
                  <p className="text-muted-foreground">
                    We give you a drawing with a north arrow, the fence size,
                    and distances from property lines, plus a materials list,
                    for your AACC packet.
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
            title="Kenton Firs Fence Installation FAQs"
            items={KENTON_FIRS_FAQS}
          />
        </div>
      </main>

      <AboutTheArea
        cityName="Kent"
        neighborhoodName="Kenton Firs"
        attractions={KENTON_FIRS_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              The{" "}
              <a href={KF_HOME} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Kenton Firs Community Association
              </a>{" "}
              describes a property-owned community where the original
              developers kept tall stands of Douglas fir and bigleaf maple, with
              dogwood, hazelnut, vine maple, and hemlock beneath them.
            </p>
            <p>
              Owners automatically belong to the association, which maintains
              the common areas with a volunteer board and a management company.
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
                  <Link href={HOA_HREF}>Kenton Firs fencing guide</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kent/wynaco">Wynaco, Kent</Link>
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
                Ready to Fence Your Kenton Firs Lot?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We&apos;ll walk the lot, prepare the drawing your AACC packet
                needs, and give you a free quote.
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

export default KentonFirsPage;
