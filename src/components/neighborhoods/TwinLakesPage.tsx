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
  Waves,
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

const CANONICAL = "https://myfence.com/service-areas/federal-way/twin-lakes";
const META_TITLE =
  "Twin Lakes Federal Way Fence Installation | Lakeside & HOA Lots | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Twin Lakes, Federal Way, WA. Cedar privacy and picture-frame fences for lakeside and golf-course lots, with HOA approval and city rules explained. Free quotes. (253) 455-1885.";

const FW_CODE_URL =
  "https://www.codepublishing.com/WA/FederalWay/html/FederalWay19/FederalWay19125.html";
const FW_PERMIT_EXEMPTIONS_URL =
  "https://www.federalwaywa.gov/page/residential-permit-exemptions";
const TLHOA_ACC_URL = "https://www.twinlakeshoa.com/acc-form";
const TLHOA_LAKES_URL = "https://www.twinlakeshoa.com/lakes";
const TLHOA_RULES_URL =
  "https://www.twinlakeshoa.com/_files/ugd/774c9e_086c4c625b2e426492efaf3382938e6a.pdf";
const JOES_CREEK_URL =
  "https://www.federalwaywa.gov/sites/default/files/Documents/Department/PW/Surface%20Water/FedWayLakes_HSPF3-31-03FINAL_Revised.pdf";
const HISTORYLINK_URL = "https://historylink.org/File/4215";
const GOLF_ABOUT_URL = "https://www.twinlakesgolf.net/about/";

const linkClass =
  "font-semibold text-primary underline decoration-2 underline-offset-4";

const TOC_ITEMS: ArticleTocItem[] = [
  { id: "overview", label: "Twin Lakes at a glance" },
  { id: "city-rules", label: "Federal Way fence rules" },
  { id: "hoa-approval", label: "Twin Lakes HOA approval" },
  { id: "lakeside-lots", label: "Lakeside and golf-course lots" },
  { id: "fence-styles", label: "Fence styles that fit" },
  { id: "photos", label: "Recent Federal Way fence work" },
  { id: "process", label: "Our installation process" },
  { id: "faq", label: "Twin Lakes fence FAQs" },
];

const TWIN_LAKES_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Twin Lakes, Federal Way?",
    answer:
      "The City of Federal Way lists fences not over 6 feet high as exempt from a building permit, with an exception for any work in a critical area such as a wetland, stream, landslide hazard, or their buffers. The city also notes that other code requirements may still apply. Check your parcel with the City of Federal Way Permit Center before you build, especially if your lot touches a lake, a stream, or a steep slope.",
  },
  {
    question: "How tall can a fence be in Twin Lakes?",
    answer:
      "Federal Way's zoning code allows fences and railings of up to 6 feet in required yards, and it caps the combined height of a fence and a rockery or retaining wall within 5 feet of it at 6 feet, with a limited safety-rail exception. The Twin Lakes Homeowners Association's published rules separately say fences may not exceed 6 feet. Confirm both with the city and the HOA before you choose a height.",
  },
  {
    question: "Does the Twin Lakes HOA need to approve my fence?",
    answer:
      "The Twin Lakes HOA says changes to the outside of a property, including fences, repairs, and re-staining, need prior approval from its Architectural Control Committee, and that the committee asks for height, length, materials, finish, and a diagram showing the fence in relation to the property lines. The HOA asks owners to allow up to 30 days for approval. If you live in the community, submit the request before any work starts, and ask the HOA office for the current rules and CC&Rs.",
  },
  {
    question: "What fence styles work best for Twin Lakes yards?",
    answer:
      "Six-foot cedar privacy fences, including picture-frame and modified picture-frame builds, are a common fit for side and rear lines. A black hogwire fence with a cedar frame can keep a lake or golf-course view open where you do not need privacy. Hybrid aluminum-and-cedar panels are an option for a damp corner that you do not want to restain often. Chain-link is listed by the HOA as not an approved fencing material, so ask the HOA before you plan anything other than wood.",
  },
  {
    question: "How long does fence installation take in Twin Lakes?",
    answer:
      "Many residential fence projects take one to three working days once any needed approvals are in place. Panels are built off-site from Fence Genius measurements, which keeps on-site time short. Tear-out of an old fence, a long run, a sloped lot, or soft ground near a lake can add time. We confirm the schedule with you before the crew arrives.",
  },
  {
    question: "How much does a fence cost in Twin Lakes?",
    answer:
      "Price depends on the style, the total length, gates, slope, access, and whether an old fence has to come out. Use the virtual quote tool for a starting number, and we confirm the final price after an on-site measurement.",
  },
];

const TWIN_LAKES_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Olympic View Park",
    url: "https://www.federalwaywa.gov/page/our-parks",
    description:
      "A 9.8-acre City of Federal Way neighborhood park at the crossroads of 29th Ave SW and SW 330th St in the Twin Lakes neighborhood, with parking, a picnic area, a playground, and a walking trail.",
  },
  {
    name: "Twin Lakes Elementary School",
    url: "https://twinlakes.fwps.org/",
    description:
      "A Federal Way Public Schools elementary school at 4400 SW 320th St, located in the Twin Lakes neighborhood.",
  },
  {
    name: "Twin Lakes Golf & Country Club",
    url: GOLF_ABOUT_URL,
    description:
      "A private club whose front nine opened in 1967 and back nine two years later, built as part of the planned community. Yards that border the course often want a fence that keeps the view open.",
  },
  {
    name: "Twin Lakes HOA parks and lakes",
    url: TLHOA_LAKES_URL,
    description:
      "The Twin Lakes Homeowners Association owns and maintains three parks for its members, including Treasure Island Park on Lake Lorene. Lake Lorene and Lake Jeane are private lakes.",
  },
];

const TwinLakesPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Twin Lakes, Federal Way",
    pageTitle: "Twin Lakes Federal Way Fence Installation",
    description: META_DESCRIPTION,
    faqItems: TWIN_LAKES_FAQS,
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
              href="/service-areas/federal-way"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Federal Way
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Twin Lakes, Federal Way WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Twin Lakes Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy and picture-frame fencing for Twin Lakes yards,
                  with the city rules and the HOA approval step explained up
                  front.
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
                  city="Twin Lakes, Federal Way"
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
                A Planned Lake and Golf Community in Federal Way
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Twin Lakes is a neighborhood in the west part of Federal Way,
                built around Lake Lorene, Lake Jeane, and a golf course. It
                started as a planned community in the 1960s, so many yards were
                laid out long before today&apos;s fence styles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A fence here usually has to answer three questions: what the
                City of Federal Way allows, what the Twin Lakes Homeowners
                Association approves, and what suits a yard near water or a
                fairway. This guide walks through each one.
              </p>

              <Card className="p-6 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">Twin Lakes quick facts</h3>
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
                      <td className="py-3 pr-4 font-medium text-foreground">Opened</td>
                      <td className="py-3 pr-4">
                        The Twin Lakes housing community opened in 1965 on Lake
                        Jeane and Lake Lorene.
                      </td>
                      <td className="py-3">
                        <a href={HISTORYLINK_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          HistoryLink
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Lakes</td>
                      <td className="py-3 pr-4">
                        Lake Lorene and Lake Jeane are private lakes. The HOA
                        manages Lake Lorene and the golf club manages Lake Jeane.
                      </td>
                      <td className="py-3">
                        <a href={TLHOA_LAKES_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Twin Lakes HOA
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Golf course</td>
                      <td className="py-3 pr-4">
                        The front nine opened in 1967 and the back nine two
                        years later, as part of the planned community.
                      </td>
                      <td className="py-3">
                        <a href={GOLF_ABOUT_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Twin Lakes Golf &amp; Country Club
                        </a>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Schools</td>
                      <td className="py-3 pr-4">
                        Twin Lakes Elementary is part of Federal Way Public
                        Schools.
                      </td>
                      <td className="py-3">
                        <a href="https://twinlakes.fwps.org/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Twin Lakes Elementary
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
                  Federal Way Fence Rules in Plain Language
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                These are the city rules we go over with Twin Lakes homeowners
                before we draw a fence line. Always confirm the details for your
                parcel with the City of Federal Way.
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-6">
                <li>
                  <strong className="text-foreground">Height:</strong> the city&apos;s
                  zoning code allows fences and railings not over 6 feet in
                  required yards (FWRC 19.125.160).
                </li>
                <li>
                  <strong className="text-foreground">Fence on a wall:</strong> when a
                  rockery or retaining wall sits within 5 feet of the fence, the
                  combined height is limited to 6 feet, with a narrow safety-rail
                  exception. This matters on sloped lots.
                </li>
                <li>
                  <strong className="text-foreground">Sight distance:</strong> the code
                  says landscaping and fencing may not violate sight-distance
                  safety requirements at street intersections and driveways.
                </li>
                <li>
                  <strong className="text-foreground">Permit:</strong> the city lists
                  fences not over 6 feet high as exempt from a building permit,
                  but not when the work is in a critical area such as a wetland,
                  stream, or landslide hazard, or their buffers.
                </li>
              </ul>
              <Callout title="Confirm with the city before you build" variant="warning">
                <p>
                  Zoning and permit rules change, and your parcel may have
                  extra limits. Read the{" "}
                  <a href={FW_CODE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Federal Way code, Chapter 19.125
                  </a>{" "}
                  and the city&apos;s{" "}
                  <a href={FW_PERMIT_EXEMPTIONS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    residential permit exemptions
                  </a>
                  , then call the City of Federal Way Permit Center if you are
                  unsure.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* 3. HOA approval */}
        <section id="hoa-approval" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Landmark className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Twin Lakes HOA Approval Comes First
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Twin Lakes has a homeowners association with an Architectural
                Control Committee. The HOA says changes to the outside of your
                property need approval before work starts, and its list
                includes fences, fence repairs, and re-staining.
              </p>
              <Callout title="What the HOA asks you to submit" variant="info">
                <ul className="list-disc pl-5 space-y-1">
                  <li>The fence height and length.</li>
                  <li>A diagram showing where the fence sits in relation to the property lines.</li>
                  <li>The materials and the finish.</li>
                  <li>A written request. The HOA asks owners to allow up to 30 days for approval.</li>
                </ul>
              </Callout>
              <p className="text-muted-foreground leading-relaxed">
                The HOA&apos;s published rules and regulations also say fencing
                plans must meet the setbacks in the CC&amp;Rs, that fences may
                not exceed 6 feet, and that chain-link is not an approved
                material. Read the HOA&apos;s{" "}
                <a href={TLHOA_ACC_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  architectural approval page
                </a>{" "}
                and{" "}
                <a href={TLHOA_RULES_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  rules and regulations
                </a>
                , and ask the HOA office for the current CC&amp;Rs, because they
                can change.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence can give you the height, length, material, and finish
                details the committee asks for, along with a drawing from our
                on-site measurement. Check whether your address is inside the HOA
                before you plan.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Lakeside lots */}
        <section id="lakeside-lots" className="py-16 bg-muted/50 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Waves className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Lakeside and Golf-Course Lots
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Lake Lorene and Lake Jeane sit on the west branch of Joes Creek,
                according to the{" "}
                <a href={JOES_CREEK_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  City of Federal Way&apos;s surface-water analysis
                </a>
                . Wet ground near a lake is hard on wood, so the details below
                matter more than the style.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Near the water</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Check your parcel for a critical area or buffer before you
                    plan a fence, since the city&apos;s 6-foot permit exemption
                    does not cover work in one. The HOA also publishes a
                    critical areas report for lakeside properties on its lakes
                    page. We use stainless fasteners and can add a{" "}
                    <Link href="/fence-upgrades/post-on-pipe" className={linkClass}>
                      post-on-pipe upgrade
                    </Link>{" "}
                    to keep wood posts out of wet soil.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Along the fairway</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If your yard borders the golf course, the HOA&apos;s rules
                    note extra setback requirements for fairway lots. A lower,
                    open style such as black hogwire can keep the view, while a
                    cedar privacy fence suits the sides and the street.
                  </p>
                </Card>
              </div>
              <Callout title="Slopes, retaining walls, and rockeries" variant="warning">
                <p>
                  On a graded lot, the fence and any rockery or retaining wall
                  within 5 feet of it share the city&apos;s 6-foot combined limit.
                  We measure grade with Fence Genius so the plan you send to the
                  city and the HOA matches what we build.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* Quote tool */}
        <LeadCaptureTabs fenceStyleName="Twin Lakes Federal Way fence" />

        {/* 5. Fence styles */}
        <section id="fence-styles" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Fence Styles That Fit Twin Lakes
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Modified Picture Frame</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A cedar privacy fence with a framed top and base, a clean
                    look that blends with established homes. It is the style in
                    our recent Federal Way photos below.
                  </p>
                  <Link
                    href="/fence-styles/modified-picture-frame-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View style →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Solid Board Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A straightforward six-foot cedar privacy fence for side and
                    rear lines.
                  </p>
                  <Link
                    href="/fence-styles/solid-board-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View style →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Black Hogwire</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    An open mesh fence in a cedar frame for dog yards and lake
                    or fairway views. Ask the HOA whether it approves the
                    material for your lot.
                  </p>
                  <Link
                    href="/fence-styles/black-hogwire-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View style →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar &amp; Steel Hybrid</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Steel posts with cedar panels for damp areas where you do
                    not want to restain often. Check HOA approval for the
                    materials.
                  </p>
                  <Link
                    href="/fence-styles/cedar-steel-hybrid-fence"
                    className="text-primary text-sm font-medium hover:underline"
                  >
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
                Recent Federal Way Fence Work
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These photos are from MyFence jobs in Federal Way. They are not
                from Twin Lakes, but they show the same crew, materials, and
                finish we bring to a Twin Lakes yard.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <figure>
                  <OptimizedImage
                    src="/service-area-photos/Federal-Way/Federal-Way-Modified-Picture-Frame-Cedar-Privacy-Fence-02.jpg"
                    alt="Modified cedar picture frame privacy fence with a double gate installed in Federal Way, WA"
                    className="w-full h-auto rounded-lg object-cover"
                    width={1600}
                    height={1200}
                  />
                  <ImageCaption>
                    A cedar picture-frame fence with a double gate on a Federal
                    Way job (not in Twin Lakes).
                  </ImageCaption>
                </figure>
                <figure>
                  <OptimizedImage
                    src="/service-area-photos/Federal-Way/Federal-Way-Modified-Picture-Frame-Cedar-Privacy-Fence-05.jpg"
                    alt="Modified cedar picture frame privacy fence along a side yard in Federal Way, WA"
                    className="w-full h-auto rounded-lg object-cover"
                    width={1600}
                    height={1200}
                  />
                  <ImageCaption>
                    A cedar privacy fence along a side yard on a Federal
                    Way job (not in Twin Lakes).
                  </ImageCaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreaPhotoGallery
          city="Federal Way"
          title="More Fence Work in Federal Way"
          description="These photos are from Federal Way jobs, not specifically from Twin Lakes."
        />

        {/* 7. Process */}
        <section id="process" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Twin Lakes Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the lines, and note slope, trees,
                    gates, and any lake or fairway edge. Fence Genius captures
                    lengths and grade so panels are built to your yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Design, City Rules, and HOA Details
                  </h3>
                  <p className="text-muted-foreground">
                    You pick the style and height. We go over the city&apos;s
                    rules for your lot and give you the height, length,
                    materials, finish, and drawing the HOA committee asks for.
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
            title="Twin Lakes Fence Installation FAQs"
            items={TWIN_LAKES_FAQS}
          />
        </div>
      </main>

      <AboutTheArea
        cityName="Federal Way"
        neighborhoodName="Twin Lakes"
        attractions={TWIN_LAKES_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Twin Lakes sits in the west part of Federal Way, where homes
              surround Lake Lorene, Lake Jeane, and the golf course. The
              neighborhood is served by Twin Lakes Elementary School in{" "}
              <a
                href="https://www.fwps.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Federal Way Public Schools
              </a>
              ; check the district&apos;s boundary tools for the school that
              serves your address.
            </p>
            <p>
              For the lakes and the HOA&apos;s parks, see the{" "}
              <a href={TLHOA_LAKES_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Twin Lakes HOA parks and lakes page
              </a>
              . For the neighborhood&apos;s early history, see{" "}
              <a href={HISTORYLINK_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                HistoryLink&apos;s Federal Way history
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
                We install fences throughout Federal Way and South King County.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/federal-way">Federal Way overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kent">Kent</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/auburn">Auburn</Link>
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
                Ready to Fence Your Twin Lakes Yard?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We&apos;ll walk the lot, talk through privacy versus an open
                view, and give you a quote and the details your HOA committee
                asks for.
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

export default TwinLakesPage;
