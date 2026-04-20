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
  TreePine,
  Ruler,
  Layers,
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";

const CANONICAL = "https://myfence.com/service-areas/maple-valley/elk-run";
const META_TITLE = "Elk Run Fence Installation | Maple Valley | MyFence.com";
const META_DESCRIPTION =
  "Professional fence installation in Elk Run, Maple Valley. Cedar picture frame and privacy fencing for HOA-governed lots near the former golf course. Free quotes. (253) 455-1885.";

const ELK_RUN_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Lake Wilderness Park",
    url: "https://www.maplevalleywa.gov/departments/parks-recreation/parks-facilities/lake-wilderness-park",
    description:
      "A sprawling community park just northwest of Elk Run, featuring a splash pad, beach access on Lake Wilderness, sports fields, and picnic shelters. The connecting trail network is popular with Elk Run residents for evening walks and weekend recreation.",
  },
  {
    name: "Lake Sawyer Regional Park",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation-open-space/king-county-parks/find-a-park/lake-sawyer-regional-park",
    description:
      "Located south of Elk Run, this King County park offers a public boat launch, sandy beach, and fishing access on Lake Sawyer. It's a frequent summer destination for Elk Run families looking to stay close to home.",
  },
  {
    name: "Tahoma High School Fields & Trails",
    url: "https://www.tahomasd.us/schools/tahoma-high-school",
    description:
      "The Tahoma School District campus anchors the eastern edge of the broader Maple Valley community. Elk Run families feed into this award-winning district, and the campus athletic fields and open grounds are used for community events.",
  },
  {
    name: "Elk Run Golf Course Greens",
    url: "https://www.maplevalleywa.gov/",
    description:
      "The former Elk Run Golf Course fairways—while no longer in play—remain a defining feature of the neighborhood, providing open green space, walking paths, and the park-like setting that gives Elk Run its distinctive character.",
  },
  {
    name: "Cedar River Trail",
    url: "https://kingcounty.gov/en/dept/dnrp/nature-recreation/parks-recreation-open-space/king-county-parks/trails/cedar-river-trail",
    description:
      "One of King County's premier paved multi-use trails, connecting Renton to Maple Valley along the Cedar River corridor. Elk Run riders and joggers access it via short connector routes, making it a daily fitness staple for the neighborhood.",
  },
];

const ElkRunPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Elk Run, Maple Valley",
    pageTitle: "Elk Run Maple Valley Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Does Elk Run have an HOA with fence rules?",
        answer:
          "Yes. Elk Run is divided into five HOA divisions, each with its own governing documents. Most divisions restrict fence height, approved materials, and placement relative to the street and property lines. MyFence.com reviews your specific division's CC&Rs before design, so your fence is approved on the first submission rather than revised after installation.",
      },
      {
        question: "What fence styles work best in Elk Run, Maple Valley?",
        answer:
          "Cedar picture frame and standard privacy fences are the most common choices in Elk Run. The picture frame style is HOA-friendly in most divisions because it presents a clean, finished look on both sides. For properties bordering the former golf course green space, homeowners sometimes opt for a shorter decorative fence or hogwire with cedar framing to preserve sight lines across the open fairway area.",
      },
      {
        question: "How much does fence installation cost in Elk Run?",
        answer:
          "Elk Run fence installation typically ranges from $38–$65 per linear foot depending on style and lot conditions. Cedar privacy fencing runs $40–$60/ft, hogwire with cedar framing $35–$52/ft, and hybrid aluminum/cedar $50–$70/ft. Properties backing the former golf course may have longer unobstructed fence runs that benefit from volume pricing. Get a free on-site estimate for your specific property.",
      },
      {
        question: "Do I need a permit for a fence in Elk Run?",
        answer:
          "Elk Run falls under King County permitting jurisdiction. Residential fences under 6 feet generally don't require a building permit, though HOA approval is typically required regardless of height. If your lot includes a critical area easement from the original golf course development, additional setbacks may apply. MyFence.com researches your parcel's requirements and handles all HOA submission documentation.",
      },
    ],
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
              href="/service-areas/maple-valley"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Maple Valley
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Elk Run, Maple Valley WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Elk Run Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence installation tailored to Elk Run&apos;s HOA-governed lots and the open, golf-course character of the neighborhood. Cedar picture frame, privacy, and hybrid fencing designed for long-tenured family properties in southeast Maple Valley.
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
                  city="Maple Valley"
                  state="WA"
                  radiusMiles={4}
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
                Fencing for Elk Run&apos;s HOA Properties and Open Greens
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Elk Run is one of Maple Valley&apos;s most recognizable neighborhoods—a well-established community built around the fairways of the former Elk Run Golf Course, now a network of open green space and walking paths. Homes here sit on moderately sized lots along streets like SE 277th Place and 227th Court SE, with the retired course providing a park-like backdrop that few subdivisions can match. The neighborhood spans five separate HOA divisions, each with its own set of governing documents that regulate everything from fence height to approved materials and placement near property lines.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has worked with Elk Run homeowners across multiple divisions. We review your specific CC&Rs before we draft a single design, so your fence clears HOA approval on the first submission. Our Fence Genius system measures your property precisely, and panels are manufactured to spec before our crew arrives—no measuring delays on installation day, and no surprises for your neighbors.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Elk Run Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">HOA-First Design Process</h3>
                      <p className="text-muted-foreground">
                        Elk Run&apos;s five divisions each have different CC&Rs. We review your division&apos;s governing documents before design begins, prepare submission materials, and ensure every dimension and material meets the board&apos;s standards.
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
                        Full warranty on materials and labor, covering installations in Elk Run&apos;s seasonal Pacific Northwest conditions—from dry summers to wet winters that stress fence posts and hardware.
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
                        Fence Genius maps your property line to the inch. Panels are cut and assembled off-site to your exact measurements—consistent height and spacing that HOA boards expect on finished installations.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Mature Lot Experience</h3>
                      <p className="text-muted-foreground">
                        Homes built in the 1980s–2000s mean established landscaping, mature trees, and decades of root growth along fence lines. We plan post placement around existing features so your yard is preserved during installation.
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
                What Elk Run Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our HOA in Elk Run has pretty strict rules about fence appearance. MyFence.com asked for our CC&Rs right away and handled the approval documentation before starting any work. The picture frame cedar fence looks exactly like what the board approved. Cleanest install we&apos;ve seen in the neighborhood.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Mark in Elk Run</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We have big roots from an old laurel hedge along the back of the yard. The crew mapped everything ahead of time and adjusted the post spacing so none of the roots were disturbed. The fence is perfectly straight and the whole project took two days. Highly recommend for anyone on the old golf course side.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Kathy in Elk Run</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery city="Maple Valley" neighborhood="Elk Run" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Maple Valley" neighborhood="Elk Run" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Elk Run–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Elk Run HOA Requirements by Division</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Elk Run is subdivided into five HOA divisions, and fence standards are not uniform across all of them. Division 3 and 5 (with homes along SE 277th Place, SE 279th Street, 226th Court SE, and 227th Court SE) have their own board and governing documents separate from the other divisions. Before any Elk Run installation, we request the CC&Rs for your specific division and confirm allowable fence heights, approved materials, setback distances from the street and property lines, and whether your design requires formal board review or simple written approval. Skipping this step is the most common reason HOA fence projects get stopped mid-installation in Maple Valley—we don&apos;t skip it.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Golf Course Boundary Properties</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Several Elk Run lots back directly onto the former golf course fairways. These properties often feature long, unobstructed rear fence runs with no adjacent neighbor for reference—meaning post placement and fence line straightness depend entirely on accurate measurements. Many homeowners on the course boundary also want fencing that complements the open, green backdrop rather than closing it off. Cedar picture frame fencing and lower-profile hogwire with cedar frames are popular choices for these rear yard boundaries, providing a defined edge while preserving the neighborhood&apos;s signature park-like feel.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Established Landscaping and Root Systems</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Elk Run homes were built primarily from the 1980s through the early 2000s, and many properties have four decades of mature tree and hedge growth along their fence lines. Laurel hedges, ornamental plums, and established Douglas firs create root systems that complicate standard post-hole augering. We use Fence Genius to pre-plan post locations and identify root conflict zones before the crew arrives. Where root systems prevent standard placement, adjusted post spacing or our Post-on-Pipe steel system provides a solid anchor with a smaller-diameter hole.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Pacific Northwest Moisture Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maple Valley receives over 50 inches of annual precipitation, and Elk Run&apos;s mix of shade and seasonal wet-dry cycles accelerates wood decay at ground level if materials and installation details aren&apos;t chosen carefully. We use premium Western Red Cedar with natural rot resistance, marine-grade stainless fasteners that won&apos;t bleed rust stains into the wood, and our Post-on-Pipe upgrade for homeowners who want to eliminate ground-contact decay at the post base altogether. Proper drainage beds beneath footings and minimum 36-inch post depth further extend the fence&apos;s service life in this climate.
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
                Fence Installation Cost in Elk Run
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Most Elk Run properties involve standard suburban lot conditions. Below are typical ranges; your exact cost depends on linear footage, style, and any site-specific factors.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span><strong className="text-foreground">Cedar picture frame (6&apos;):</strong> $40–$60 per linear foot</span>
                  </li>
                  <li>
                    <span><strong className="text-foreground">Cedar privacy (6&apos;):</strong> $38–$58 per linear foot</span>
                  </li>
                  <li>
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $35–$52 per linear foot</span>
                  </li>
                  <li>
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $50–$70 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Root navigation near mature landscaping may add 5–12%. Long runs along the former golf course typically stay within the standard range. Get an exact quote for your Elk Run property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Elk Run property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Elk Run</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Picture Frame Cedar Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The most HOA-compatible style in Elk Run. A horizontal top and bottom rail frames the fence boards cleanly on both faces—acceptable to most division boards and popular on streets with visible front or side yard fencing. Stainless fasteners prevent rust streaks on light-colored cedar.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Cedar-framed hogwire is popular on Elk Run&apos;s golf course–facing rear yards where homeowners want a defined boundary without blocking the open views across the former fairways. Lighter post requirements also make it easier to work around established landscaping.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Steel posts with aluminum panels in a cedar frame—zero staining or sealing required under Elk Run&apos;s wet-season conditions. The longest-lasting option for homeowners who want a maintenance-free fence through Maple Valley&apos;s multi-decade ownership cycles.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system &rarr;
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Elk Run Maple Valley fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Elk Run Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Elk Run Site Assessment & HOA Review</h3>
                  <p className="text-muted-foreground">
                    We walk your property, measure the fence line, note mature landscaping and root zones, and confirm your Elk Run HOA division&apos;s requirements. Fence Genius captures precise terrain and boundary data for panel manufacturing.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & HOA Submission</h3>
                  <p className="text-muted-foreground">
                    You select your style and materials. We finalize the design to meet your division&apos;s CC&Rs and prepare any documentation required for HOA review. King County permitting is handled by us if applicable.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are precision-built off-site from Fence Genius measurements. Premium Western Red Cedar, marine-grade fasteners, and moisture-resistant hardware selected for Elk Run&apos;s wet Pacific Northwest climate.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Elk Run Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew arrives with pre-fabricated panels and efficient equipment suited for Elk Run&apos;s residential lots. Root conflicts are navigated as planned, and all site disturbance is cleaned up daily. Most projects complete in 1–2 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Final inspection with you reviewing every panel, post, and gate. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated on project completion.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 13. About the Area */}
      </main>

      <AboutTheArea
        cityName="Maple Valley"
        neighborhoodName="Elk Run"
        attractions={ELK_RUN_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Elk Run families are served by the{" "}
              <a
                href="https://www.tahomasd.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Tahoma School District
              </a>
              , consistently ranked among the top districts in Washington State.{" "}
              <a
                href="https://www.tahomasd.us/schools/cedar-river-middle-school"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Cedar River Middle School
              </a>{" "}
              and{" "}
              <a
                href="https://www.tahomasd.us/schools/tahoma-high-school"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Tahoma High School
              </a>{" "}
              draw families from across Maple Valley and contribute to the neighborhood&apos;s strong owner-occupancy rate. Daily essentials are covered at the{" "}
              <a
                href="https://www.fredmeyer.com/stores/details/726/maple-valley"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Fred Meyer on Maple Valley Highway
              </a>
              , and the surrounding 4 Corners commercial corridor offers a broad mix of restaurants and services without requiring a freeway trip.
            </p>
            <p>
              Elk Run&apos;s position between{" "}
              <a
                href="https://wsdot.wa.gov/travel/highways/sr169"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                SR-169 (Maple Valley Highway)
              </a>{" "}
              and{" "}
              <a
                href="https://wsdot.wa.gov/travel/highways/sr18"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                SR-18
              </a>{" "}
              makes it one of the more commuter-convenient neighborhoods in Maple Valley—Renton is roughly 20 minutes north and Auburn is accessible via SR-18 in about the same time. The neighborhood&apos;s high owner-occupancy rate (84%+) and tight-knit HOA structure mean properties are consistently well-maintained, and homeowners invest in long-term improvements like quality fencing that protects their significant equity stake.{" "}
              <a
                href="https://www.maplevalleywa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                The City of Maple Valley
              </a>{" "}
              provides community events and recreation programming that keeps residents connected throughout the year.
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
                Also Serving Nearby Maple Valley Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Maple Valley. If you&apos;re in Elk Run, we also work in Barklay Woods, Cherokee Bay Park, Highlands at Cedar Downs, Lake Park, and Daybreak at River Ridge.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley">Maple Valley overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/barklay-woods">Barklay Woods</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/cherokee-bay-park">Cherokee Bay Park</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/highlands-at-cedar-downs">Highlands at Cedar Downs</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/lake-park">Lake Park</Link>
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
                Ready to Fence Your Elk Run Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Free on-site estimates available in Elk Run. We&apos;ll review your HOA division requirements, measure your lot, and recommend the right style and materials for your property.
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

export default ElkRunPage;
