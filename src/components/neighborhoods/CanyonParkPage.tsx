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
import { buildImageUrl } from "@/lib/serviceAreaPhotoUtils";

const CANONICAL = "https://myfence.com/service-areas/bothell/canyon-park";
const META_TITLE =
  "Canyon Park Bothell Fence Installation | Creek-Side & Suburban Lots | MyFence";
const META_DESCRIPTION =
  "Fence installation in Canyon Park, Bothell, WA. Cedar privacy and picture-frame fences, with Bothell fence rules and North Creek wetland cautions explained. Free quotes. (253) 455-1885.";

const BMC_FENCE_URL = "https://bothell.municipal.codes/BMC/12.14.150";
const BMC_PERMIT_URL = "https://bothell.municipal.codes/BMC/20.02.095";
const BMC_PERMIT_EXEMPT_PDF_URL =
  "https://www.bothellwa.gov/DocumentCenter/View/13367/Work-Exempt-from-Permit-PDF?bidId=";
const BMC_CRITICAL_ADJACENT_URL = "https://bothell.municipal.codes/BMC/14.04.080";
const BMC_CRITICAL_FENCING_URL = "https://bothell.municipal.codes/BMC/14.04_ArtX";
const SUBAREA_PLAN_URL =
  "https://www.bothellwa.gov/DocumentCenter/View/448/Canyon-Park-Subarea-Plan-PDF";
const SUBAREA_PLAN_2020_URL =
  "https://www.bothellwa.gov/DocumentCenter/View/12373/CP-Subarea-Plan---PREFINAL---1232020";
const FEIS_URL =
  "https://www.bothellwa.gov/DocumentCenter/View/12385/Canyon-Park-FEIS-2020_12-Vol1";
const HISTORYLINK_URL = "https://www.historylink.org/File/4187";
const CENTENNIAL_PARK_URL = "https://www.bothellwa.gov/1029/Centennial-Park";
const PARKS_URL = "https://www.bothellwa.gov/250/Parks";
const NORTH_CREEK_TRAIL_URL = "https://www.traillink.com/trail/north-creek-trail/";
const NSD_BOUNDARIES_URL =
  "https://www.nsd.org/schools/get-started/schools-boundaries";
const PERMIT_CENTER_URL = "https://bothellwa.gov/337/Permit-Center";

const linkClass =
  "font-semibold text-primary underline decoration-2 underline-offset-4";

const TOC_ITEMS: ArticleTocItem[] = [
  { id: "overview", label: "Canyon Park at a glance" },
  { id: "city-rules", label: "Bothell fence rules" },
  { id: "creeks-wetlands", label: "North Creek and wetland lots" },
  { id: "neighbors-hoa", label: "Business-park edges and HOAs" },
  { id: "fence-styles", label: "Fence styles that fit" },
  { id: "photos", label: "Recent Bothell fence work" },
  { id: "process", label: "Our installation process" },
  { id: "faq", label: "Canyon Park fence FAQs" },
];

const CANYON_PARK_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Canyon Park, Bothell?",
    answer:
      "The City of Bothell's building code lists fences not over six feet high as exempt from a building permit, and notes that an exemption does not authorize work that violates other code requirements. Bothell also regulates activity near wetlands and streams, and Canyon Park has several. Confirm your parcel with the City of Bothell Permit Center before you build, especially if your lot is near North Creek, a wetland, or a stream.",
  },
  {
    question: "How tall can a fence be in Canyon Park?",
    answer:
      "Bothell's code allows fences six feet or less in nominal height in any zone, without a setback in a front, side, or rear yard, as long as they sit behind any landscape buffer the code requires. A fence taller than six feet must meet the required yard setbacks. Fences also cannot block a fire hydrant or break the city's sight-distance rules. Confirm the details for your lot with the city.",
  },
  {
    question: "Can I build a solid fence next to a wetland or stream in Canyon Park?",
    answer:
      "Not necessarily. Bothell's critical areas code regulates activity adjacent to wetlands and streams, and for projects it covers, the code calls for a nonsolid fence three to six feet high along the edge of a critical-area buffer, with solid fencing not permitted there. Whether this applies to a home fence on your lot is a question for the City of Bothell, so ask before you choose a style.",
  },
  {
    question: "Does my Canyon Park home have an HOA?",
    answer:
      "Some Bothell homes sit inside homeowners associations, and some do not. Check your closing documents or ask the HOA or management company. If you have one, get its fence approval steps and rules in writing before work starts, since they can be stricter than the city's.",
  },
  {
    question: "What fence styles work best for Canyon Park yards?",
    answer:
      "Six-foot cedar privacy fences, including picture-frame and modified picture-frame builds, are a common fit for side and rear lines. A black hogwire fence in a cedar frame keeps an open view along a greenbelt or creek edge where you do not need privacy. A cedar and steel hybrid is an option where the ground stays damp and you do not want to restain often.",
  },
  {
    question: "How long does fence installation take in Canyon Park?",
    answer:
      "Many residential fence projects take one to three working days once any needed approvals are in place. Panels are built off-site from Fence Genius measurements, which keeps on-site time short. Tear-out of an old fence, a long run, a sloped lot, or soft ground can add time. We confirm the schedule with you before the crew arrives.",
  },
  {
    question: "How much does a fence cost in Canyon Park?",
    answer:
      "Price depends on the style, the total length, gates, slope, access, and whether an old fence has to come out. Use the virtual quote tool for a starting number, and we confirm the final price after an on-site measurement.",
  },
];

const CANYON_PARK_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Centennial Park",
    url: CENTENNIAL_PARK_URL,
    description:
      "A 54-acre City of Bothell natural park at 1130 208th St SE with wetlands, walking paths, a picnic shelter, and restrooms, near the north edge of the Canyon Park subarea.",
  },
  {
    name: "North Creek Trail",
    url: NORTH_CREEK_TRAIL_URL,
    description:
      "A regional trail whose Bothell segment runs from 208th St SE south to the Sammamish River Trail, through creekside greenery and wetlands.",
  },
  {
    name: "Bothell Parks & Trails",
    url: PARKS_URL,
    description:
      "The City of Bothell's parks page, covering its park system and regional trails, including the parks in and around Canyon Park.",
  },
];

const CanyonParkPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Canyon Park, Bothell",
    pageTitle: "Canyon Park Bothell Fence Installation",
    description: META_DESCRIPTION,
    faqItems: CANYON_PARK_FAQS,
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
              href="/service-areas/bothell"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bothell
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Canyon Park, Bothell WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Canyon Park Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy and picture-frame fencing for Canyon Park yards,
                  with Bothell&apos;s fence rules and the North Creek wetland
                  cautions explained up front.
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
                  city="Canyon Park, Bothell"
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
                A Creek-Side Neighborhood Beside a Business Park
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Canyon Park is in the Snohomish County part of Bothell, along
                I-405 and SR 527. North Creek runs through the middle of it, and the
                city&apos;s plan for the area describes a mix of homes, retail,
                a business park, wetlands, and trails.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A fence here usually has to answer two questions: what the City
                of Bothell allows, and how close your lot is to water. This
                guide walks through both, then the styles we build.
              </p>

              <Card className="p-6 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">Canyon Park quick facts</h3>
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
                      <td className="py-3 pr-4 font-medium text-foreground">Joined Bothell</td>
                      <td className="py-3 pr-4">
                        Bothell annexed Canyon Park on April 30, 1992, adding
                        5.3 square miles in Snohomish County.
                      </td>
                      <td className="py-3">
                        <a href={HISTORYLINK_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          HistoryLink
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Subarea size</td>
                      <td className="py-3 pr-4">
                        The city&apos;s Canyon Park Subarea covers about 989
                        acres, entirely inside Bothell city limits.
                      </td>
                      <td className="py-3">
                        <a href={SUBAREA_PLAN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Canyon Park Subarea Plan
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Water</td>
                      <td className="py-3 pr-4">
                        North Creek crosses the subarea, and the plan notes
                        extensive wetlands and several smaller streams.
                      </td>
                      <td className="py-3">
                        <a href={SUBAREA_PLAN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Canyon Park Subarea Plan
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Land use</td>
                      <td className="py-3 pr-4">
                        The 2020 plan update covers housing, retail, and the
                        Canyon Park Business Center, a private business park.
                      </td>
                      <td className="py-3">
                        <a href={SUBAREA_PLAN_2020_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          2020 Subarea Plan update
                        </a>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">Fence permit</td>
                      <td className="py-3 pr-4">
                        Fences not over six feet high are listed as exempt from
                        a building permit.
                      </td>
                      <td className="py-3">
                        <a href={BMC_PERMIT_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          BMC 20.02.095
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
                  Bothell Fence Rules in Plain Language
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                These are the city rules we go over with Canyon Park homeowners
                before we draw a fence line. Always confirm the details for your
                parcel with the City of Bothell.
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-6">
                <li>
                  <strong className="text-foreground">Up to 6 feet:</strong>{" "}
                  Bothell&apos;s code allows fences six feet or less in nominal
                  height in any zone, with no setback in a front, side, or rear
                  yard where no landscape buffer is required (BMC 12.14.150).
                </li>
                <li>
                  <strong className="text-foreground">Landscape buffers:</strong>{" "}
                  a fence must sit behind any landscape buffer the code
                  requires. This can matter where a lot meets commercial land.
                </li>
                <li>
                  <strong className="text-foreground">Over 6 feet:</strong>{" "}
                  a taller fence must meet the required front, side, and rear
                  yard setbacks.
                </li>
                <li>
                  <strong className="text-foreground">Hydrants and sight lines:</strong>{" "}
                  no fence may sit closer than three feet to a fire hydrant or
                  hide it, and fences must meet the city&apos;s sight-distance
                  standards.
                </li>
                <li>
                  <strong className="text-foreground">Permit:</strong> fences
                  not over six feet high are listed as exempt from a building
                  permit, but the exemption does not allow work that breaks
                  other code requirements.
                </li>
              </ul>
              <Callout title="Confirm with the city before you build" variant="warning">
                <p>
                  Codes change, and your parcel may have extra limits. Read{" "}
                  <a href={BMC_FENCE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    BMC 12.14.150
                  </a>{" "}
                  and the city&apos;s{" "}
                  <a href={BMC_PERMIT_EXEMPT_PDF_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    work-exempt-from-permit list
                  </a>
                  , then call the{" "}
                  <a href={PERMIT_CENTER_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Bothell Permit Center
                  </a>{" "}
                  if you are unsure.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* 3. Creeks and wetlands */}
        <section id="creeks-wetlands" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Waves className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  North Creek and Wetland Lots
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The Canyon Park plan describes North Creek winding through a
                broad plain, with wetlands and small creeks feeding into it.
                The city&apos;s 2020 environmental review also calls North Creek
                a state-regulated stream. If your yard backs onto a creek,
                wetland, or greenbelt, a fence plan needs one extra step.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Ask about critical areas first</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Bothell&apos;s critical areas code covers wetlands and
                    streams, and it treats activity near them as regulated,
                    including some work within 300 feet upland of a stream or
                    wetland. A short call to the city tells you whether your
                    parcel is affected (see{" "}
                    <a href={BMC_CRITICAL_ADJACENT_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      BMC 14.04.080
                    </a>
                    ).
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Open styles at a buffer edge</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For projects that must fence a buffer, the code calls for a
                    nonsolid fence and says solid fencing is not permitted
                    there (see{" "}
                    <a href={BMC_CRITICAL_FENCING_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      BMC 14.04.270
                    </a>
                    ). Whether that applies to a home fence is the city&apos;s call.
                  </p>
                </Card>
              </div>
              <Callout title="Wet ground is hard on wood posts" variant="info">
                <p>
                  Where the soil stays damp, we can add a{" "}
                  <Link href="/fence-upgrades/post-on-pipe" className={linkClass}>
                    post-on-pipe upgrade
                  </Link>{" "}
                  to keep wood posts out of wet soil. Ask us which fence
                  materials make sense for your yard.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* 4. Business-park edges and HOAs */}
        <section id="neighbors-hoa" className="py-16 bg-muted/50 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Landmark className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Business-Park Edges and HOAs
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Canyon Park mixes single-family streets with retail and
                business-park land. The city&apos;s{" "}
                <a href={SUBAREA_PLAN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  subarea plan
                </a>{" "}
                calls for recognizing and protecting the existing single-family
                neighborhoods, so a home lot can sit close to commercial
                property.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Where a yard faces a parking lot, a service road, or a busy
                arterial, a solid six-foot cedar fence is the usual way to add
                privacy. Where it faces a creek or greenbelt, an open style may
                be the better fit.
              </p>
              <Callout title="Check for an HOA before you plan" variant="info">
                <p>
                  Some Bothell homes sit inside homeowners associations, and
                  some do not. If yours does, ask for its fence rules and
                  approval steps in writing before work starts, because they can
                  be stricter than the city&apos;s. We can give you the height,
                  length, material, and finish details an HOA committee asks
                  for.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* Quote tool */}
        <LeadCaptureTabs fenceStyleName="Canyon Park Bothell fence" />

        {/* 5. Fence styles */}
        <section id="fence-styles" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="h-8 w-8 text-primary flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Fence Styles That Fit Canyon Park
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Modified Picture Frame</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A cedar privacy fence with a framed top and base, a clean
                    look for suburban streets. It is the style in our Bothell
                    photos below.
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
                    An open mesh fence in a cedar frame for dog yards and
                    creek or greenbelt views. Confirm with the city whether an
                    open style is required near a critical area.
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
                Recent Bothell Fence Work
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These photos are from MyFence jobs in Bothell. They are not
                from Canyon Park, but they show the same crew, materials, and
                finish we bring to a Canyon Park yard.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <figure>
                  <OptimizedImage
                    src={buildImageUrl("Bothell/Bothell-Modified-Picture-Frame-2.webp", 900)}
                    alt="Cedar modified picture frame privacy fence along a side yard in Bothell, WA"
                    className="w-full h-auto rounded-lg object-cover"
                    width={900}
                    height={1200}
                  />
                  <ImageCaption>
                    A cedar picture-frame fence along a side yard on a Bothell
                    job (not in Canyon Park).
                  </ImageCaption>
                </figure>
                <figure>
                  <OptimizedImage
                    src={buildImageUrl("Bothell/Bothell-Modified-Picture-Frame-4.webp", 900)}
                    alt="Cedar double gate between two houses on a fence installation in Bothell, WA"
                    className="w-full h-auto rounded-lg object-cover"
                    width={900}
                    height={1200}
                  />
                  <ImageCaption>
                    A cedar double gate between two houses on a Bothell job
                    (not in Canyon Park).
                  </ImageCaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreaPhotoGallery
          city="Bothell"
          title="More Fence Work in Bothell"
          description="These photos are from Bothell jobs, not specifically from Canyon Park."
        />

        {/* 7. Process */}
        <section id="process" className="py-16 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Canyon Park Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the lines, and note slope, trees,
                    gates, and any creek, wetland, or greenbelt edge. Fence
                    Genius captures lengths and grade so panels are built to
                    your yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Design, City Rules, and HOA Details
                  </h3>
                  <p className="text-muted-foreground">
                    You pick the style and height. We go over the city&apos;s
                    rules for your lot and can give you the height, length,
                    materials, and finish an HOA committee asks for.
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
            title="Canyon Park Fence Installation FAQs"
            items={CANYON_PARK_FAQS}
          />
        </div>
      </main>

      <AboutTheArea
        cityName="Bothell"
        neighborhoodName="Canyon Park"
        attractions={CANYON_PARK_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Canyon Park sits along I-405 and SR 527 in the Snohomish County
              part of Bothell. The city&apos;s{" "}
              <a href={SUBAREA_PLAN_2020_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Canyon Park Subarea Plan
              </a>{" "}
              describes the area as a mix of housing, retail, and a regional
              business hub, with wetlands, creeks, and trails running through
              it. Its{" "}
              <a href={FEIS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                environmental impact statement
              </a>{" "}
              maps the study area.
            </p>
            <p>
              School boundaries vary by address. Use the Northshore School
              District&apos;s{" "}
              <a href={NSD_BOUNDARIES_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                schools and boundaries tool
              </a>{" "}
              to confirm the schools for your address. For the area&apos;s
              history, see{" "}
              <a href={HISTORYLINK_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                HistoryLink&apos;s story of the 1992 annexation
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
                We install fences throughout Bothell and the north Eastside.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bothell">Bothell overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland</Link>
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
                Ready to Fence Your Canyon Park Yard?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We&apos;ll walk the lot, talk through privacy versus an open
                view, and give you a quote and the details your city or HOA
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

export default CanyonParkPage;
