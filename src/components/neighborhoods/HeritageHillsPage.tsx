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
  Ruler,
  Home,
  PawPrint,
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

const CANONICAL = "https://myfence.com/service-areas/sammamish/heritage-hills";
const HOA_HREF = "/service-areas/sammamish/heritage-hills/hoa-approved-fencing";
const META_TITLE =
  "Heritage Hills Sammamish Fence Installation | HOA-Reviewed Yards | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Heritage Hills, Sammamish, WA. Cedar, hogwire & hybrid fencing planned around city height rules and Heritage Hills HOA review. Free quotes. (253) 455-1885.";

const SAMMAMISH_FENCE_HANDOUT_URL =
  "https://www.sammamish.us/media/jqrdsnjd/220-handout-fencing.pdf";
const SAMMAMISH_EXEMPT_URL = "https://sammamish.municipal.codes/SMC/16.20.200";
const HHHOA_URL = "https://www.hhhoa.org/";
const HHHOA_GUIDELINES_URL =
  "https://heritagehills.communitysite.com/p/Summary-Guidelines";
const HHHOA_ACTIVITIES_URL =
  "https://heritagehills.communitysite.com/p/Guidelines-for-Common-Activities";

const linkClass =
  "font-semibold text-primary underline decoration-2 underline-offset-4";

const HERITAGE_HILLS_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Do I need a permit to build a fence in Heritage Hills, Sammamish?",
    answer:
      "Heritage Hills is part of the City of Sammamish, so city rules apply. Sammamish's municipal code lists fences not over six feet high among the work that does not need a permit, and the exemption does not apply within critical areas or standard shoreline setbacks. The city's residential fence handout shows six feet in rear and side yards, four feet in front yards, and 3.5 feet inside a 15-by-15-foot sight distance triangle. For taller fences, the handout describes a Type I construction permit request for a fence up to eight feet tall and no longer than 32 feet along a shared side or rear line, with an agreement with the adjoining owner recorded with King County. The city says its handouts are illustrative, so confirm your lot with the City of Sammamish Permit Center before you build. A city permit or exemption is separate from Heritage Hills HOA approval.",
  },
  {
    question: "Does the Heritage Hills HOA have to approve my fence?",
    answer:
      "The association's published summary guidelines say no fence or wall may be erected, placed, or altered on a lot until plans showing the nature, kind, shape, height, material, color, and location have been approved by the Architectural Chair, and that existing fences, hedges, and walls cannot be altered without prior approval. The same page asks owners to contact the Architectural Chair at least 2 weeks before starting. MyFence is not affiliated with the association. Check the association's current process before you order materials. Our Heritage Hills HOA fencing page walks through the steps.",
  },
  {
    question: "What fence styles work best in Heritage Hills?",
    answer:
      "Cedar privacy with a picture-frame border is a common choice for rear and side yards, hogwire in a cedar frame suits dog yards where you want an open look, and hybrid aluminum-and-cedar panels are a lower-maintenance option on a long run. These are styles that usually fit HOA reviews in general, because both faces can be finished and the height can stay within the city limit. They are not an association-approved list. The association has not told us which products it prefers, so submit your material, color, and height to the Architectural Chair.",
  },
  {
    question: "How much does fence installation cost in Heritage Hills?",
    answer:
      "Our typical Sammamish ranges are $45–$68 per linear foot for six-foot cedar privacy, $38–$58 for hogwire with a cedar frame, and $55–$76 for hybrid aluminum/cedar. Slope, tear-out of an old fence, extra gates, and tight access can add to a quote. Use the virtual quote tool for a starting number. We confirm the price after an on-site measurement.",
  },
  {
    question: "How long does fence installation take in Heritage Hills?",
    answer:
      "Many residential fence projects take one to three working days once the HOA and any needed city approvals are in place. Panels are built off-site from Fence Genius measurements, which keeps on-site time short. Review time at the association comes first, so plan for it. We confirm the schedule with you before the crew arrives.",
  },
];

const HERITAGE_HILLS_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Heritage Hills HOA website",
    url: HHHOA_URL,
    description:
      "The association's own website, which its summary guidelines point owners to for the CC&Rs and further guidelines. Check it for the current approval process before you plan a fence.",
  },
  {
    name: "Heritage Hills common-area guidelines",
    url: HHHOA_ACTIVITIES_URL,
    description:
      "The association describes sidewalks that individual homeowners maintain, busy main streets (25th Way and 28th Place), and a pool and park whose restrooms need a numbered key FOB from the Greeting Committee. Those facilities are for residents.",
  },
  {
    name: "City of Sammamish residential fence handout",
    url: SAMMAMISH_FENCE_HANDOUT_URL,
    description:
      "The city's one-page summary of fence heights in rear, side, and front yards, and in sight distance triangles. Draw your fence against it before you submit to the association.",
  },
];

const HeritageHillsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Heritage Hills, Sammamish",
    pageTitle: "Heritage Hills Sammamish Fence Installation",
    description: META_DESCRIPTION,
    faqItems: HERITAGE_HILLS_FAQS,
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
              href="/service-areas/sammamish"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sammamish
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Heritage Hills, Sammamish WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Heritage Hills Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar privacy, hogwire, and hybrid fencing for Heritage Hills
                  yards, planned around Sammamish height rules and the
                  association&apos;s architectural approval.
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
                  city="Heritage Hills, Sammamish"
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
                Fences for a Sammamish Neighborhood With HOA Review
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The Heritage Hills Home Owners Association describes its
                community as located in Sammamish, Washington. Its published{" "}
                <a
                  href={HHHOA_GUIDELINES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  summary guidelines
                </a>{" "}
                say no fence or wall can be put up or altered on a lot until
                plans are approved by the association&apos;s Architectural
                Chair, that existing fences, hedges, and walls cannot be
                altered without prior approval, and they ask owners to contact
                the Architectural Chair at least 2 weeks before work starts. So a Heritage Hills fence project has
                two tracks: the association&apos;s review, and the City of
                Sammamish&apos;s height and setback rules. We plan for both
                before a crew is scheduled.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence installs cedar, hogwire, and hybrid aluminum/cedar
                fences across Sammamish, including{" "}
                <Link href="/service-areas/sammamish/inglewood" className={linkClass}>
                  Inglewood
                </Link>
                ,{" "}
                <Link href="/service-areas/sammamish/trossachs" className={linkClass}>
                  Trossachs
                </Link>
                , and{" "}
                <Link href="/service-areas/sammamish/klahanie" className={linkClass}>
                  Klahanie
                </Link>
                . If you live in Heritage Hills and want to see the approval
                steps first, read our{" "}
                <Link href={HOA_HREF} className={linkClass}>
                  Heritage Hills HOA fencing guide
                </Link>
                . MyFence is not affiliated with the association.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Heritage Hills Homeowners Trust MyFence
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        City Height Rules, Checked Up Front
                      </h3>
                      <p className="text-muted-foreground">
                        Sammamish&apos;s fence handout shows 6 feet in rear and
                        side yards, 4 feet in front yards, and 3.5 feet in a
                        sight distance triangle. We draw to those numbers and
                        suggest you confirm your lot with the city.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        A Drawing for the Architectural Chair
                      </h3>
                      <p className="text-muted-foreground">
                        The association asks for the shape, height, material,
                        color, and location of a fence. We prepare a sketch with
                        those details for you to submit. The association makes
                        the decision.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <PawPrint className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Yards for Kids and Dogs
                      </h3>
                      <p className="text-muted-foreground">
                        The association&apos;s guidelines note the many children
                        in the neighborhood and that Sammamish has a dog leash
                        law. Gate latches and secure lines matter here.
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
                        chosen for Sammamish&apos;s wet winters.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Heritage Hills Sammamish fence" />

        {/* 6. Photo Gallery — Sammamish-area installs */}
        <ServiceAreaPhotoGallery
          city="Sammamish"
          title="Recent Fence Work in Sammamish"
          description="These photos are from Sammamish jobs, not specifically from Heritage Hills. Same crew, same materials, and the same Fence Genius process we use on Heritage Hills lots."
        />

        {/* 7. Featured project — renders only if a matching city/neighborhood photo exists */}
        <FeaturedProject city="Sammamish" neighborhood="Heritage Hills" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Heritage Hills-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Association Approval Comes First
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The association&apos;s summary guidelines say plans showing
                    the nature, kind, shape, height, material, color, and
                    location of a fence go to the Architectural Chair before
                    construction, and that changes to existing fences also need
                    prior approval. The same guidelines ask owners to
                    contact the Architectural Chair at least 2 weeks before
                    starting. We do not know the
                    association&apos;s current height or style limits, so we
                    do not guess at them. Ask the association before you order
                    anything, and read our{" "}
                    <Link href={HOA_HREF} className={linkClass}>
                      Heritage Hills HOA fencing page
                    </Link>{" "}
                    for the steps.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Sidewalks, Narrow Streets, and Where the Line Is
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The association says most Heritage Hills houses have
                    sidewalks that owners maintain, that many streets are narrow,
                    and that 25th Way and 28th Place carry a large volume of
                    traffic. For a fence, that means confirming where your
                    property line sits relative to the sidewalk, and keeping
                    driveway and corner sight lines clear. Sammamish&apos;s
                    handout caps a fence at 3.5 feet inside a 15-by-15-foot sight
                    distance triangle, and 4 feet in a front yard.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Rear and Side Yards, Corner Lots, and Taller Fences
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sammamish&apos;s handout shows 6 feet in rear and side yards.
                    A corner lot or other lot with more than one front yard may
                    have a six-foot fence in the front setback along a street
                    frontage that does not provide access to the property, as
                    long as it stays outside the sight distance triangle. The
                    city&apos;s code exempts fences not over 6 feet from a
                    permit, and the handout describes a Type I construction
                    permit request for a fence up to 8 feet tall and no longer
                    than 32 feet along a shared side or rear line, with an
                    agreement with the adjoining owner recorded with King
                    County. The handout says it is illustrative and points to
                    the municipal code, so confirm your lot with the city.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Trash Containers, Dogs, and Backyard Use
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The association&apos;s guidelines say trash containers should
                    be kept out of sight from the street except on collection
                    day, for example in the garage, behind a fence, or in the
                    backyard. They also remind owners that Heritage Hills is in
                    Sammamish, which has a dog leash law. A well-placed gate and
                    a fence line that respects the HOA review can serve both
                    purposes. Tell us how you use the yard when we measure.
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
                Fence Installation Cost in Heritage Hills
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Linear footage, slope, gates, and tear-out move the number more
                than the style does. These are typical Sammamish ranges; your
                on-site measurement is the real quote.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span>
                      <strong className="text-foreground">Cedar privacy (6&apos;):</strong>{" "}
                      $45–$68 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hogwire (cedar frame):</strong>{" "}
                      $38–$58 per linear foot
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong className="text-foreground">Hybrid aluminum/cedar:</strong>{" "}
                      $55–$76 per linear foot
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Custom gates are itemized separately. Get an exact quote for
                  your Heritage Hills property with a free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Heritage Hills property</Link>
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
                Popular Fence Styles in Heritage Hills
              </h2>
              <p className="text-muted-foreground mb-6">
                These are styles that usually fit HOA reviews in general. The
                Heritage Hills association has not published an approved product
                list that we found, so submit your choice for review.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A picture-frame border on a cedar privacy fence finishes
                    both faces, which suits side and rear yards up to the city&apos;s
                    6-foot limit.
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
                    Cedar frame with black mesh for dog yards and gardens where
                    you want to keep an open look, including a front-yard border
                    inside the 4-foot limit.
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
                    lower-maintenance option for a long run you do not want to
                    restain.
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
                Our Heritage Hills Installation Process
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    1. Heritage Hills Site Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    We walk the lot, measure the lines, note gate locations, and
                    look at grade and trees. Fence Genius captures lengths and
                    slope so panels are built to your yard.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    2. HOA Sketch & City Rules Check
                  </h3>
                  <p className="text-muted-foreground">
                    You pick the style and height. We prepare a sketch with the
                    shape, height, material, color, and location for the
                    Architectural Chair, and we go over Sammamish&apos;s height
                    and sight-triangle rules for your lot.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Custom Panel Manufacturing
                  </h3>
                  <p className="text-muted-foreground">
                    Once approvals are in hand, panels are built off-site from
                    the measurements, so install days are mostly setting posts
                    and hanging finished sections.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Heritage Hills Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Crews protect nearby landscaping where possible, keep
                    sidewalks and driveways clear, and clean up at the end of
                    each day.
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
          title="Heritage Hills Fence Installation FAQs"
          items={HERITAGE_HILLS_FAQS}
        />
      </main>

      {/* 13. About the Area — full width, outside max-w article wrapper */}
      <AboutTheArea
        cityName="Sammamish"
        neighborhoodName="Heritage Hills"
        attractionsHeading="Heritage Hills Resources"
        attractions={HERITAGE_HILLS_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              The Heritage Hills Home Owners Association&apos;s{" "}
              <a
                href={HHHOA_ACTIVITIES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                community guidelines
              </a>{" "}
              say the neighborhood is part of the City of Sammamish, that
              sidewalks at most houses are maintained by the owners, and that
              the pool and park restrooms require a resident key FOB. Two main
              streets, 25th Way and 28th Place, carry a large volume of traffic,
              according to the same page.
            </p>
            <p>
              Read the City of Sammamish&apos;s{" "}
              <a
                href={SAMMAMISH_FENCE_HANDOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                residential fence handout
              </a>{" "}
              and the municipal code section on{" "}
              <a
                href={SAMMAMISH_EXEMPT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                work exempt from permit
              </a>{" "}
              before you plan your fence, and check the association&apos;s{" "}
              <a
                href={HHHOA_GUIDELINES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                summary guidelines
              </a>
              . You can also see our{" "}
              <Link href={HOA_HREF} className={linkClass}>
                Heritage Hills HOA fencing guide
              </Link>
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
                Also Serving Sammamish Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Sammamish. Explore other
                neighborhood pages, or start with the Heritage Hills HOA guide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={HOA_HREF}>Heritage Hills HOA fencing</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/inglewood">Inglewood</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/trossachs">Trossachs</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish/klahanie">Klahanie</Link>
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
                Ready to Plan Your Heritage Hills Fence?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We&apos;ll walk the lot, talk through privacy versus an open
                yard, and prepare a sketch you can take to the association&apos;s
                Architectural Chair.
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

export default HeritageHillsPage;
