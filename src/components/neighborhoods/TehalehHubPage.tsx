"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Shield,
  Award,
  ArrowLeft,
  MapPin,
  Phone,
  Mountain,
  Trees,
  Ruler,
  ClipboardCheck,
  FileText,
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

const CANONICAL = "https://myfence.com/service-areas/bonney-lake/tehaleh";
const META_TITLE = "Tehaleh Fence Installation | Bonney Lake HOA Fencing | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Tehaleh, the master-planned community south of Bonney Lake. Upper & Lower Tehaleh, Design Manual fence standards, and Design Review prep. Free quotes. (253) 455-1885.";

const HOA_GUIDE_HREF = "/service-areas/bonney-lake/tehaleh/hoa-approved-fencing";

/** Pierce County-hosted copy of the Tehaleh Design Manual (residential fencing: pp. 48–50). */
const DESIGN_MANUAL_URL =
  "https://www.piercecountywa.gov/DocumentCenter/View/94339/Tehaleh-Design-Manual---082020-Revision---PPW-Approved-090220";
const PIERCE_TEHALEH_REGS_URL = "https://www.piercecountywa.gov/4195/Regulations";
const PIERCE_PERMIT_FAQ_URL = "https://www.piercecountywa.gov/8146/Frequently-Asked-Questions";
const PIERCE_EXEMPT_WORK_URL =
  "https://www.piercecountywa.gov/DocumentCenter/View/4295/Guide-Work-Exempt-From-Permit";

const linkClass = "text-primary underline decoration-2 underline-offset-2";
const aboutLinkClass = "font-semibold text-primary underline decoration-2 underline-offset-4";

const TEHALEH_FAQS: NeighborhoodFaqItem[] = [
  {
    question: "Is Tehaleh in the City of Bonney Lake?",
    answer:
      "Tehaleh uses Bonney Lake 98391 addresses, but the community describes itself as immediately south of Bonney Lake, and its development agreements, design manual and building permits are administered by Pierce County. For a fence, that means Pierce County building rules plus your Tehaleh association's design review, not City of Bonney Lake fence code.",
  },
  {
    question: "Do I need HOA approval to build a fence in Tehaleh?",
    answer:
      "Yes, plan on it. The Tehaleh Design Manual says that if a property owner adds a fence, its design and location must be reviewed and approved by the Architectural Review Committee (ARC) or the owner association based on the manual's fencing standards. Tehaleh Owner's Association is managed by Cohere; Trilogy at Tehaleh and Verterra homes belong to the Whitman Community Association, managed by The Management Trust. Request the current application from your association and wait for written approval before work starts.",
  },
  {
    question: "How tall can a fence be in Tehaleh?",
    answer:
      "The Design Manual's standards cap side and rear yard privacy fencing at 6 feet to the top of the cap, set back at least 10 feet from the front façade of the home. Front yard fencing is limited to 3 feet, at least 50% transparent, and set back at least 2 feet from the front property line. Fences facing a public walk or open space must be 50% transparent overall or have no more than 5 feet of solid fencing with a 1-foot transparent band above. The ARC can approve deviations, so confirm the current rules for your lot with your association.",
  },
  {
    question: "Are chain link or vinyl fences allowed in Tehaleh?",
    answer:
      "The Design Manual lists wood, masonry, iron, stone and limited amounts of wire steel or mesh as acceptable fence materials, and says no chain link or vinyl fences are allowed unless approved by the ARC. Its standard stain options are Sherwin-Williams Woodscapes Polyurethane Semi-Transparent Cedar Bark (SW 3511) or clear.",
  },
  {
    question: "Do I need a Pierce County permit for a fence in Tehaleh?",
    answer:
      "Pierce County says a fence more than 6 feet high, measured from the ground next to the fence, needs a building permit and must meet setbacks. Retaining walls over 4 feet also need a permit, and the Design Manual notes that a fence on top of such a wall must be shown on the permit submittal. Because the Design Manual caps privacy fencing at 6 feet, a fence built to the standard usually stays within the county exemption, which makes the association's design review the main approval step.",
  },
];

const TEHALEH_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "The Post",
    url: "https://www.tehaleh.com/community/",
    description:
      "Tehaleh's visitor headquarters, described in the community tour guide as having community maps and information, a café, a warming hut, a trailhead and an outdoor fire pit. It's also where the tour guide suggests picking up a trail map.",
  },
  {
    name: "Discovery Park",
    url: "https://www.tehaleh.com/community/parks-trails/",
    description:
      "A 15-acre community park with a playground, fields, a bocce court, a picnic shelter and a community garden. Homes near busy parks like this are a good example of where the Design Manual's open-space fence rules come into play.",
  },
  {
    name: "Hounds Hollow",
    url: "https://www.tehaleh.com/community/parks-trails/",
    description:
      "Tehaleh's fully fenced off-leash dog park with an agility course, an open field and dog-friendly trails, per the community tour guide.",
  },
  {
    name: "Expedition Grove",
    url: "https://www.tehaleh.com/community/parks-trails/",
    description:
      "A park with a discovery trail, hiking trails, a picnic spot and a climbing tree fort, with views of Mount Rainier.",
  },
  {
    name: "Tehaleh Trail Network",
    url: "https://www.tehaleh.com/community/parks-trails/",
    description:
      "Tehaleh says residents have more than 40 miles of trails, and that parks, trails and open space are planned to cover about 40% of the community's land when it's complete. Many backyards border these trail corridors.",
  },
];

const TehalehHubPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Tehaleh, Bonney Lake",
    pageTitle: "Tehaleh Bonney Lake Fence Installation",
    description: META_DESCRIPTION,
    faqItems: TEHALEH_FAQS,
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
              href="/service-areas/bonney-lake"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bonney Lake
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Tehaleh, Bonney Lake WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Tehaleh Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar, hogwire and hybrid fencing for homes across Tehaleh, the master-planned community just south of Bonney Lake. We plan every fence around the Tehaleh Design Manual and your association&apos;s design review, then build exactly what gets approved.
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
                  city="Tehaleh, Bonney Lake"
                  state="Washington"
                  radiusMiles={5}
                  zoom={12}
                  showBusinessInfo={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trust Badges Bar (no rating/review-count claims on this page) */}
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
              <span className="flex items-center gap-2 text-muted-foreground">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                Design Review Package Prep
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Free On-Site Estimates
              </span>
            </div>
          </div>
        </section>

        {/* 3. Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Fencing for Tehaleh&apos;s Master-Planned Neighborhoods
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Tehaleh is a roughly 4,700-acre master-planned community where South Puget Sound meets the Cascade foothills, immediately south of Bonney Lake. It is developed and owned by Brookfield Properties and governed by development agreements with Pierce County, so homes carry Bonney Lake 98391 addresses while county rules apply. Tehaleh&apos;s own directions route visitors from SR 410 to South Prairie Road and 200th Avenue Court East, which becomes 198th Avenue East leading to the community entrance. A newer connection via Tehaleh Boulevard and Falling Water Boulevard, part of the New Rhodes Lake Road East corridor, is planned to link the plateau to SR 162 and the Orting Valley.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fences here are part of a coordinated streetscape. The Tehaleh Design Manual sets standard fence designs, a standard stain, height limits and setbacks, and owner-added fences go through architectural review. This page brings our Tehaleh content together: install guides for Upper and Lower Tehaleh, a summary of the published fence standards, and our Tehaleh HOA approved fencing guide with a submission checklist.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Explore Tehaleh pages */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Explore Fencing in Tehaleh
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
                Pick the page that matches your project. All three cover Tehaleh&apos;s design review; the Upper and Lower pages focus on terrain and lot conditions.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/service-areas/bonney-lake/upper-tehaleh" className="block h-full">
                  <Card className="p-5 hover:shadow-xl hover:border-primary hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full bg-gradient-to-br from-background to-primary/5 border-2">
                    <Mountain className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-primary text-lg mb-2">Upper Tehaleh</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Newer homesites on higher ground with more wind exposure and grade changes. Wind-ready cedar and hybrid options.
                    </p>
                    <div className="mt-3 text-primary font-semibold text-sm flex items-center gap-1">
                      Learn More <span className="text-lg">→</span>
                    </div>
                  </Card>
                </Link>
                <Link href="/service-areas/bonney-lake/lower-tehaleh" className="block h-full">
                  <Card className="p-5 hover:shadow-xl hover:border-primary hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full bg-gradient-to-br from-background to-primary/5 border-2">
                    <Trees className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-primary text-lg mb-2">Lower Tehaleh</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Established family neighborhoods around The Post, parks and trail corridors. Cedar privacy and hogwire for trailside lots.
                    </p>
                    <div className="mt-3 text-primary font-semibold text-sm flex items-center gap-1">
                      Learn More <span className="text-lg">→</span>
                    </div>
                  </Card>
                </Link>
                <Link href={HOA_GUIDE_HREF} className="block h-full">
                  <Card className="p-5 hover:shadow-xl hover:border-primary hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full bg-gradient-to-br from-background to-primary/5 border-2">
                    <ClipboardCheck className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-primary text-lg mb-2">
                      Tehaleh HOA Approved Fencing
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Design Review steps, our fence submission checklist, and how to request the current packet from your association.
                    </p>
                    <div className="mt-3 text-primary font-semibold text-sm flex items-center gap-1">
                      Learn More <span className="text-lg">→</span>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Villages & associations */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Tehaleh Villages and Which Association Reviews Your Fence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Tehaleh is built out in villages. The community&apos;s map and tour guide names villages including Cedar Run, Inspiration Ridge, Pinnacle Ridge, Berkeley Park, Landmark, Painted Ridge, Sterling, Silver Rock, Beacon Pointe and Grandview, along with the 55+ neighborhoods of Trilogy at Tehaleh and, more recently, Trilogy Verterra. Builders and plans change as the community grows, so use your plat or closing documents to confirm exactly which neighborhood and association your lot belongs to.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Tehaleh Owner&apos;s Association</h3>
                  <p className="text-muted-foreground">
                    The community-wide association. Tehaleh says Cohere has managed the Tehaleh Owner&apos;s Association since spring 2025, with an office on Myers Road. Start here for the current design review application.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Whitman Community Association</h3>
                  <p className="text-muted-foreground">
                    The association for Trilogy at Tehaleh and Trilogy Verterra, managed by The Management Trust according to Tehaleh. 55+ homeowners should confirm fence rules and forms with Whitman as well.
                  </p>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground">
                Tehaleh also lists a separate Discovery Park Association. If your home is in a sub-association, ask whether it has its own review on top of the community standards.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Design Manual fence standards */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                What the Tehaleh Design Manual Says About Fences
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pierce County posts the{" "}
                <a href={DESIGN_MANUAL_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Tehaleh Design Manual
                </a>{" "}
                on its{" "}
                <a href={PIERCE_TEHALEH_REGS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Tehaleh regulations page
                </a>
                . The residential fencing section (revision dated August 20, 2020) is written mainly for builders, but it says fences a homeowner adds must be reviewed and approved by the ARC or owner association using the same standards. Here is a plain-language summary:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Front Yard</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-5">
                    <li>Maximum 3 feet tall, decorative only.</li>
                    <li>Set back at least 2 feet from the front property line to leave room for planting.</li>
                    <li>At least 50% transparent, matching the home&apos;s materials and color.</li>
                    <li>Carried around the side yards at least 10 feet back from the front façade.</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Side and Rear Yard</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-5">
                    <li>Privacy fencing up to 6 feet, measured to the top of the cap.</li>
                    <li>Set back at least 10 feet from the front façade of the home.</li>
                    <li>The front-facing return runs perpendicular to the house and includes a gate.</li>
                    <li>Other designs or locations need ARC approval.</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Facing Public Space</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-5">
                    <li>Along a public walk or open space: 50% transparent overall, or up to 5 feet solid with a 1-foot transparent band above.</li>
                    <li>Set back at least 2 feet from the property line, with plantings in between.</li>
                    <li>Corner lots: at least 15 feet back from the front façade and 2 feet from the back of sidewalk.</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Materials, Stain and Slopes</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-5">
                    <li>Acceptable: wood, masonry, iron, stone, and limited wire steel or mesh.</li>
                    <li>No chain link or vinyl unless the ARC approves it.</li>
                    <li>Standard stain: Sherwin-Williams Woodscapes Semi-Transparent Cedar Bark (SW 3511) or clear.</li>
                    <li>On slopes over 15%, fences step in sections to keep the top line level.</li>
                    <li>A fence on a wall can only be as tall as 6 feet minus the wall height.</li>
                  </ul>
                </Card>
              </div>
              <Card className="p-5 border-2">
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    MyFence.com is not affiliated with Tehaleh, Brookfield Properties, Cohere, or any Tehaleh association, and we don&apos;t speak for the Architectural Review Committee. This is a summary of a published document, not the rules themselves. Associations can adopt newer guidelines or approve deviations, so check with your HOA&apos;s architectural review committee for the current requirements before you build. Our{" "}
                    <Link href={HOA_GUIDE_HREF} className={linkClass}>
                      Tehaleh HOA approved fencing guide
                    </Link>{" "}
                    walks through the submission steps.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 7. Why Choose Us */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Tehaleh Homeowners Call MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <ClipboardCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Design Review Packages</h3>
                      <p className="text-muted-foreground">
                        Site plan with lot lines, setbacks and gates, elevation drawings, materials list and stain spec, assembled so your application is complete when you submit it.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Ruler className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Precision Panel Manufacturing</h3>
                      <p className="text-muted-foreground">
                        Fence Genius measures your fence line and panels are built off-site, so heights, setbacks and stepped sections come out the way the approved drawing shows them.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Slope and Wind Planning</h3>
                      <p className="text-muted-foreground">
                        Parts of Tehaleh sit on sloped, exposed ground. We plan stepped panels, post depth and hardware for the grade and weather at your lot.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Craftsmanship Warranty</h3>
                      <p className="text-muted-foreground">
                        Full warranty on our workmanship, activated at the final walkthrough.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Tehaleh Bonney Lake fence" />

        {/* Photo Gallery — Bonney Lake city photos until Tehaleh-tagged photos exist */}
        <ServiceAreaPhotoGallery
          city="Bonney Lake"
          title="Recent Fence Installations Around Bonney Lake"
        />

        {/* Featured project — Bonney Lake city-level project */}
        <FeaturedProject city="Bonney Lake" />

        {/* 8. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Fence Styles That Fit Tehaleh&apos;s Standards
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Wood is on the Design Manual&apos;s acceptable list, and cedar takes the standard Cedar Bark or clear stain. A natural fit for 6-foot side and rear yards.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A cedar frame with wire mesh is an open design for lots facing trails, walks or open space, where the transparency rules apply. Confirm the mesh amount with your ARC.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Low-maintenance black metal panels in a cedar frame. Aluminum isn&apos;t named on the Design Manual&apos;s materials list, so we include it in your design review submission rather than assume approval.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system &rarr;
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Permits */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Tehaleh Fence Permits: Pierce County Rules Apply
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Because Tehaleh is permitted through Pierce County, county building rules apply rather than City of Bonney Lake code. Pierce County&apos;s{" "}
                <a href={PIERCE_PERMIT_FAQ_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  permit FAQ
                </a>{" "}
                says a fence more than 6 feet high, measured from the ground next to the fence, needs a building permit and must meet setbacks. The county&apos;s{" "}
                <a href={PIERCE_EXEMPT_WORK_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  work exempt from permit guide
                </a>{" "}
                also exempts retaining walls up to 4 feet. Taller walls need a permit, and the Design Manual adds that a fence on top of one has to appear on the permit submittal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                County approval and association approval are separate. A 6-foot backyard fence may not need a county permit, but it still needs design review in Tehaleh. We check both before we schedule your installation.
              </p>
            </div>
          </div>
        </section>

        {/* 10. Installation Process */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Tehaleh Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Site Visit and Association Check</h3>
                  <p className="text-muted-foreground">
                    We walk your lot, measure the fence line, note slopes, easements and any frontage on walks or open space, and confirm which association reviews your project.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design to the Published Standards</h3>
                  <p className="text-muted-foreground">
                    You choose the style. We draw it to the Design Manual&apos;s heights, setbacks, transparency and stain standards, and flag anything that needs an ARC deviation.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Design Review Submission</h3>
                  <p className="text-muted-foreground">
                    We prepare the drawings and specs for your application. You submit them with your association&apos;s current form, and we wait for written approval before ordering materials.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Panel Manufacturing and Installation</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements, then installed to the approved layout, with stepped sections on slopes.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    We review every panel, post and gate with you and activate your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — visible content matches FAQPage JSON-LD */}
        <NeighborhoodFaqSection title="Tehaleh Fence Installation FAQs" items={TEHALEH_FAQS} />
      </main>

      {/* 11. About the Area */}
      <AboutTheArea
        cityName="Bonney Lake"
        neighborhoodName="Tehaleh"
        attractions={TEHALEH_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Tehaleh is in the{" "}
              <a href="https://www.sumnersd.org/" target="_blank" rel="noopener noreferrer" className={aboutLinkClass}>
                Sumner-Bonney Lake School District
              </a>
              , and the community tour guide marks Donald Eismann Elementary inside Tehaleh and Tehaleh Heights Elementary nearby. Daily shopping, dining and services are a short drive north in Bonney Lake along SR 410. The community says Tacoma is about 21 miles away, Seattle about 43 miles, and the Carbon River entrance to Mount Rainier National Park about 25 miles.
            </p>
            <p>
              Tehaleh is still growing, with future village centers, a town center and an employment center in the community plan, and{" "}
              <a href="https://www.tehaleh.com/future-plans/" target="_blank" rel="noopener noreferrer" className={aboutLinkClass}>
                road projects
              </a>{" "}
              including the completed 198th Avenue East improvements and the New Rhodes Lake Road East corridor. New construction means many homeowners are fencing a yard for the first time, which is a good time to plan the fence before landscaping goes in.
            </p>
          </>
        }
      />

      <main>
        {/* 12. Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Bonney Lake Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout the Bonney Lake plateau. Near Tehaleh, we also work in Falling Water, Mountain Creek, Downtown Bonney Lake and Lake Tapps.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake">Bonney Lake overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/upper-tehaleh">Upper Tehaleh</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/lower-tehaleh">Lower Tehaleh</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/falling-water">Falling Water</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/mountain-creek">Mountain Creek</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/downtown-bonney-lake">Downtown Bonney Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/lake-tapps">Lake Tapps</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 13. CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Fence Your Tehaleh Home?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Free on-site estimates throughout Tehaleh. We&apos;ll measure your lot, check it against the community&apos;s fence standards, and prepare the drawings for your design review application.
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

export default TehalehHubPage;
