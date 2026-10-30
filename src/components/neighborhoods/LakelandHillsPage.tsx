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

const CANONICAL = "https://myfence.com/service-areas/auburn/lakeland-hills";
const META_TITLE =
  "Lakeland Hills Auburn Fence Installation | HOA & City Rules | MyFence";
const META_DESCRIPTION =
  "Fence installation in Lakeland Hills, Auburn, WA. Cedar fences planned around Auburn height rules and the Lakeland Hills HOA guidelines. Free quotes. (253) 455-1885.";

const HOA_HREF = "/service-areas/auburn/lakeland-hills/hoa-approved-fencing";

const AUBURN_FENCE_CODE = "https://auburn.municipal.codes/ACC/18.31.020";
const AUBURN_PERMIT_FAQ =
  "https://www.auburnwa.gov/city_hall/community_development/f_a_q";
const AUBURN_PARK_URL =
  "https://www.auburnwa.gov/city_hall/parks_arts_recreation/parks_trails/lakeland_hills";
const AUBURN_PROFILE_URL =
  "https://cdnsm5-hosted.civiclive.com/UserFiles/Servers/Server_11470554/File/City%20Hall/Community%20Development/Zoning%20and%20Land%20Use/Comprehensive%20Plan/Appendix%20H%20-%20Auburn%20Community%20Profile.pdf";
const LHHA_HISTORY_URL =
  "http://auburnlakelandhills.org/sitebuildercontent/sitebuilderfiles/Part1Introduction.pdf";
const LHHA_STANDARDS =
  "http://auburnlakelandhills.org/sitebuildercontent/sitebuilderfiles/accstandards1-26-26.pdf";
const LHHA_FORMS = "https://auburnlakelandhills.org/id7.html";
const SCHOOL_URL = "https://lakelandhills.auburn.wednet.edu/our-school";

const linkClass =
  "font-semibold text-primary underline decoration-2 underline-offset-4";

const TOC_ITEMS: ArticleTocItem[] = [
  { id: "overview", label: "Lakeland Hills at a glance" },
  { id: "city-rules", label: "Auburn fence rules" },
  { id: "hoa-guidelines", label: "Lakeland Hills HOA guidelines" },
  { id: "hillside-lots", label: "Hillside lots and gates" },
  { id: "fence-styles", label: "Fence styles that fit" },
  { id: "photos", label: "Recent Auburn fence work" },
  { id: "process", label: "Our installation process" },
  { id: "faq", label: "Lakeland Hills fence FAQs" },
];

const LAKELAND_HILLS_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Lakeland Hills, Auburn?",
    answer:
      "Auburn City Code 18.31.020 requires a building permit for fences over 84 inches high, and the city's permit FAQ asks owners with a fence over 6 feet to contact the Permit Center with their address or parcel number. A fence on a retaining wall may need a permit too. Confirm your lot with the City of Auburn before you build.",
  },
  {
    question: "How tall can a fence be in Lakeland Hills?",
    answer:
      "Under Auburn City Code 18.31.020, fences in required setbacks are limited to 42 inches in the front setback (72 inches for chain link, wrought iron, or similar see-through material) and 72 inches in side, rear, and street-side setbacks. The code also measures a fence on a retaining wall from the base of the wall. The Lakeland Hills HOA guidelines we found do not state a fence height, so ask the HOA's Architectural Control Committee as well.",
  },
  {
    question: "Does the Lakeland Hills HOA need to approve my fence?",
    answer:
      "The Lakeland Hills Homeowners Association's published guidelines for Divisions 1, 2, and 4A say specific approval of a fence is not required if it follows City of Auburn restrictions, is made of wood, brick, or wrought iron, and does not use chain-link, chicken wire, or barbed wire. Significant construction and alterations do need Architectural Control Committee approval, and the covenants still apply. Check which division your address is in and ask the ACC if you are unsure.",
  },
  {
    question: "What fence styles work best for Lakeland Hills yards?",
    answer:
      "Cedar privacy fences, including picture-frame and Craftsman spindle-top builds, match the wood material the HOA guidelines list. Hogwire panels and aluminum-and-cedar hybrid fences use materials the guidelines do not name, so ask the ACC before you plan either. Keep street-facing sections uniform and in good repair, as the guidelines require.",
  },
  {
    question: "How long does fence installation take in Lakeland Hills?",
    answer:
      "Many residential fence projects take one to three working days once any needed approvals are in place. Panels are built off-site from Fence Genius measurements, which keeps on-site time short. Tear-out of an old fence, a long run, or a steep lot can add time. We confirm the schedule with you before the crew arrives.",
  },
  {
    question: "How much does a fence cost in Lakeland Hills?",
    answer:
      "Our Auburn pages show fence installation commonly ranging from $42 to $68 per linear foot depending on style and access, with cedar privacy at $42 to $58 per foot and Craftsman spindle-top privacy at $48 to $62 per foot. Grade changes and gates affect the final quote. Use the virtual quote tool for a starting number, and we confirm the price after an on-site measurement.",
  },
];

const LAKELAND_HILLS_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Lakeland Hills Park",
    url: AUBURN_PARK_URL,
    description:
      "A 5.05-acre City of Auburn neighborhood park at 1401 Evergreen Way SE, dedicated in 1993, with a play structure, informal field, picnic shelter, native woodland, and a 0.39-mile paved trail.",
  },
  {
    name: "Lakeland Hills Elementary School",
    url: SCHOOL_URL,
    description:
      "An Auburn School District elementary school (PK to grade 5) at 1020 Evergreen Way SE.",
  },
  {
    name: "Lakeland Hills Homeowners Association",
    url: LHHA_FORMS,
    description:
      "The association's downloads and forms page, which lists its Architectural Standards and Application for Alterations.",
  },
];

const LakelandHillsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Lakeland Hills, Auburn",
    pageTitle: "Lakeland Hills Auburn Fence Installation",
    description: META_DESCRIPTION,
    faqItems: LAKELAND_HILLS_FAQS,
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
              href="/service-areas/auburn"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Auburn
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Lakeland Hills, Auburn WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Lakeland Hills Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy and spindle-top fencing for Lakeland Hills
                  yards, with the Auburn city rules and the HOA guidelines
                  explained up front.
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
                  city="Lakeland Hills, Auburn"
                  state="Washington"
                  radiusMiles={2}
                  zoom={14}
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
                A Planned Hillside Community in South Auburn
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Lakeland Hills is a planned residential community in south
                Auburn. It grew in phases from the late 1970s, so yards, lot
                lines, and fence conditions vary a lot from street to street.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A fence here usually has to answer three questions: what the
                City of Auburn allows, what the Lakeland Hills Homeowners
                Association&apos;s guidelines say, and what works on a sloped
                lot. This guide walks through each one.
              </p>

              <Card className="p-6 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">Lakeland Hills quick facts</h3>
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
                      <td className="py-3 pr-4 font-medium text-foreground">Beginnings</td>
                      <td className="py-3 pr-4">
                        The association&apos;s own history says a developer began
                        Lakeland Hills about 1977.
                      </td>
                      <td className="py-3">
                        <a href={LHHA_HISTORY_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Lakeland Hills HOA history
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">City plans</td>
                      <td className="py-3 pr-4">
                        Auburn adopted the Lakeland Hills Plan for the King
                        County portion in 1988, and the Lakeland Hills South Plan
                        in 1998, when it annexed the Pierce County portion.
                      </td>
                      <td className="py-3">
                        <a href={AUBURN_PROFILE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          City of Auburn community profile
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Park</td>
                      <td className="py-3 pr-4">
                        Lakeland Hills Park, 1401 Evergreen Way SE, was dedicated
                        in 1993 and sits on a wooded hillside.
                      </td>
                      <td className="py-3">
                        <a href={AUBURN_PARK_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          City of Auburn
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">School</td>
                      <td className="py-3 pr-4">
                        Lakeland Hills Elementary is part of the Auburn School
                        District.
                      </td>
                      <td className="py-3">
                        <a href={SCHOOL_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Lakeland Hills Elementary
                        </a>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">HOA</td>
                      <td className="py-3 pr-4">
                        The Lakeland Hills Homeowners Association publishes
                        architectural guidelines for Divisions 1, 2, and 4A,
                        dated January 27, 2026.
                      </td>
                      <td className="py-3">
                        <a href={LHHA_STANDARDS} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Association guidelines
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </section>

        {/* 2. City rules */}
        <section id="city-rules" className="py-16 bg-muted/50 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Ruler className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Auburn Fence Rules in Plain Language
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                These are the city rules we go over with Lakeland Hills
                homeowners before we draw a fence line. Always confirm the
                details for your parcel with the City of Auburn.
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-6">
                <li>
                  <strong className="text-foreground">Front setback:</strong> 42
                  inches, or 72 inches for chain link, wrought iron, or similar
                  material that provides visibility.
                </li>
                <li>
                  <strong className="text-foreground">Side, rear, and street-side setbacks:</strong>{" "}
                  72 inches.
                </li>
                <li>
                  <strong className="text-foreground">Permit:</strong> building
                  permits are required for fences over 84 inches. The city also
                  asks owners with a fence over 6 feet to contact its Permit
                  Center.
                </li>
                <li>
                  <strong className="text-foreground">Retaining walls:</strong> a
                  fence on a retaining wall is measured from the base of the
                  wall, and a permit may be required.
                </li>
                <li>
                  <strong className="text-foreground">Sight lines and access:</strong>{" "}
                  a fence may not reduce required sight distances or block fire
                  hydrants and utility access, and fences are generally
                  prohibited in city utility easements.
                </li>
              </ul>
              <Callout title="Confirm with the city before you build" variant="warning">
                <p>
                  Zoning and permit rules change, and your parcel may have
                  extra limits. Read{" "}
                  <a href={AUBURN_FENCE_CODE} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Auburn City Code 18.31.020
                  </a>{" "}
                  and the city&apos;s{" "}
                  <a href={AUBURN_PERMIT_FAQ} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    permit FAQ
                  </a>
                  , then contact the City of Auburn Permit Center if you are
                  unsure.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* 3. HOA guidelines */}
        <section id="hoa-guidelines" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Landmark className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  What the Lakeland Hills HOA Guidelines Say
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The Lakeland Hills Homeowners Association has an Architectural
                Control Committee (ACC). Its published standards for Divisions
                1, 2, and 4A have a Fences section, and it is short.
              </p>
              <Callout title="The fence section, in short" variant="info">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Fences must follow City of Auburn restrictions.</li>
                  <li>Materials are wood, brick, or wrought iron.</li>
                  <li>No chain-link, chicken wire, or barbed wire of any type.</li>
                  <li>
                    Specific ACC approval of a fence is not required if those
                    conditions are met.
                  </li>
                  <li>
                    Fencing visible from the street must be maintained, with no
                    broken or missing pieces, no mismatched stains or paint, and
                    uniform material.
                  </li>
                </ul>
              </Callout>
              <p className="text-muted-foreground leading-relaxed">
                The guidelines also say they supplement the association&apos;s
                Declaration of Covenants and Restrictions, and that the more
                restrictive document applies if they differ. We have not seen
                your covenants. They also say significant construction,
                alterations, or improvements need ACC approval of submitted
                plans, so ask the ACC if your fence is unusual or you are
                unsure. Start with the association&apos;s{" "}
                <a href={LHHA_STANDARDS} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  architectural standards
                </a>{" "}
                and{" "}
                <a href={LHHA_FORMS} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  forms page
                </a>
                .
              </p>
              <Callout title="Check your division first" variant="warning">
                <p>
                  The guidelines we found are for Lakeland Hills Divisions 1,
                  2, and 4A. Lakeland Hills grew in phases, and the association&apos;s{" "}
                  <a href="http://www.auburnlakelandhills.org/id6.html" target="_blank" rel="noopener noreferrer" className={linkClass}>
                    contacts page
                  </a>{" "}
                  lists other homeowners associations within the Lakeland
                  Hills community, so not every address is in those divisions.
                  Your closing documents or the association can confirm which
                  rules apply to your lot.
                </p>
              </Callout>
              <p className="text-muted-foreground leading-relaxed">
                We wrote a separate page that walks through the association&apos;s
                guidelines, the city rules, and the approval steps. Read the{" "}
                <Link href={HOA_HREF} className={linkClass}>
                  Lakeland Hills HOA fencing guide
                </Link>
                . MyFence is not affiliated with the association and is not an
                approved vendor.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Hillside lots */}
        <section id="hillside-lots" className="py-16 bg-muted/50 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Mountain className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Hillside Lots, Street Sides, and Gates
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The City of Auburn describes Lakeland Hills Park as nestled into
                a wooded hillside, and its{" "}
                <a href={AUBURN_PARK_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  driving directions
                </a>{" "}
                climb up the hill on Lakeland Hills Way. Lots here may have
                grade, and on a graded lot the details below matter more than
                the style.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Slopes and walls</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Auburn measures a fence on a retaining wall from the base of
                    the wall, so a fence and wall combination can be taller than
                    it looks. We measure grade with Fence Genius so the plan you
                    check with the city matches what we build. We can also add a{" "}
                    <Link href="/fence-upgrades/post-on-pipe" className={linkClass}>
                      post-on-pipe upgrade
                    </Link>{" "}
                    to keep wood posts out of wet soil.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Street sides and gates</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The city sets a lower limit in the front setback and a
                    higher one on street-side lines, and it expects a vehicle
                    gate to sit far enough inside the lot that a waiting car
                    does not block the street or sidewalk. Hydrants and
                    utility access must stay clear.
                  </p>
                </Card>
              </div>
              <Callout title="Keep the street-facing side uniform" variant="info">
                <p>
                  The HOA guidelines ask that fencing visible from the street
                  be uniform and well maintained. A single material and stain
                  across street-facing sections keeps a fence consistent with
                  that guideline.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* Quote tool */}
        <LeadCaptureTabs fenceStyleName="Lakeland Hills Auburn fence" />

        {/* 5. Fence styles */}
        <section id="fence-styles" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Fence Styles That Fit Lakeland Hills
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The HOA guidelines list wood, brick, and wrought iron, so
                cedar is the most direct match for what we found. This is
                general guidance, not an HOA approval.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Craftsman Spindle-Top Privacy</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Solid cedar boards below and a spindle detail along the top.
                    It is the style in our recent Auburn photos below.
                  </p>
                  <Link
                    href="/fence-styles/craftsman-style-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View style →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Picture Frame</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A cedar privacy fence with a framed top and base for side
                    and rear lines.
                  </p>
                  <Link
                    href="/fence-styles/picture-frame-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View style →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Solid Board Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A straightforward cedar privacy fence for side and rear
                    lines.
                  </p>
                  <Link
                    href="/fence-styles/solid-board-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View style →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire and Hybrid (ask first)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Black hogwire and cedar-and-steel hybrid fences use
                    materials the HOA fence section does not name. Ask the ACC
                    before you plan either.
                  </p>
                  <Link
                    href="/fence-styles/cedar-steel-hybrid-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View hybrid style →
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
                Recent Auburn Fence Work
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These photos are from MyFence jobs in Auburn. They are not from
                Lakeland Hills, but they show the same crew, materials, and
                finish we bring to a Lakeland Hills yard.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <figure>
                  <OptimizedImage
                    src="https://ik.imagekit.io/xft9mcl5v/service-area-photos/Auburn/Christopher-Spindle-Top-Privacy-Fence-4.webp"
                    alt="Cedar spindle-top privacy fence along a yard in Auburn, WA"
                    className="w-full h-auto rounded-lg object-cover"
                    width={1920}
                    height={1440}
                  />
                  <ImageCaption>
                    A cedar spindle-top privacy fence on an Auburn job (not in
                    Lakeland Hills).
                  </ImageCaption>
                </figure>
                <figure>
                  <OptimizedImage
                    src="https://ik.imagekit.io/xft9mcl5v/service-area-photos/Auburn/Christopher-Spindle-Top-Privacy-Fence-6.webp"
                    alt="Cedar spindle-top privacy fence along an Auburn, WA backyard"
                    className="w-full h-auto rounded-lg object-cover"
                    width={1920}
                    height={1440}
                  />
                  <ImageCaption>
                    A cedar spindle-top privacy fence along a backyard on an
                    Auburn job (not in Lakeland Hills).
                  </ImageCaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreaPhotoGallery
          city="Auburn"
          title="More Fence Work in Auburn"
          description="These photos are from Auburn jobs, not specifically from Lakeland Hills."
        />

        {/* 7. Process */}
        <section id="process" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Lakeland Hills Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the lines, and note slope, trees,
                    gates, hydrants, and utility access. Fence Genius captures
                    lengths and grade so panels are built to your yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Design, City Rules, and HOA Details
                  </h3>
                  <p className="text-muted-foreground">
                    You pick the style and height. We go over the city&apos;s
                    rules for your lot and give you the height, material,
                    finish, and drawing the HOA committee asks for if you need
                    its review.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from the measurements, so install
                    days are mostly setting posts and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Installation</h3>
                  <p className="text-muted-foreground">
                    We start after any needed approvals are in hand, protect
                    nearby landscaping where possible, and clean up at the end
                    of each day.
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
            title="Lakeland Hills Fence Installation FAQs"
            items={LAKELAND_HILLS_FAQS}
          />
        </div>
      </main>

      <AboutTheArea
        cityName="Auburn"
        neighborhoodName="Lakeland Hills"
        attractions={LAKELAND_HILLS_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Lakeland Hills sits in south Auburn. Part of the community is in
              King County and part is in Pierce County, and the City of Auburn
              annexed the Pierce County portion in 1998, according to the{" "}
              <a href={AUBURN_PROFILE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                city&apos;s community profile
              </a>
              . Check the Auburn School District&apos;s boundary tools for the
              school that serves your address.
            </p>
            <p>
              For the association&apos;s own account of how the community grew,
              see the{" "}
              <a href={LHHA_HISTORY_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Lakeland Hills HOA history
              </a>
              .
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
                We install fences throughout Auburn and South King County.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/auburn">Auburn overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={HOA_HREF}>Lakeland Hills HOA fencing</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kent">Kent</Link>
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
                Ready to Fence Your Lakeland Hills Yard?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We&apos;ll walk the lot, talk through privacy and slope, and
                give you a quote and the details your HOA committee asks for.
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

export default LakelandHillsPage;
