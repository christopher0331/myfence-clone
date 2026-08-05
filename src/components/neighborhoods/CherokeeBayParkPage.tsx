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
  TreePine,
  Waves,
  Clock,
  FileDown,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";

const CANONICAL = "https://myfence.com/service-areas/maple-valley/cherokee-bay-park";
const META_TITLE = "Cherokee Bay Park Fence Installation | Maple Valley | MyFence.com";
const META_DESCRIPTION =
  "Lakeside fence installation in Cherokee Bay Park, Maple Valley. Download the HOA fence application. View-preserving cedar & hogwire. Free quotes. (253) 455-1885.";

const CherokeeBayParkPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Cherokee Bay Park, Maple Valley",
    pageTitle: "Cherokee Bay Park Maple Valley Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Are there special permit requirements for fences near Lake Wilderness in Cherokee Bay Park?",
        answer:
          "Properties near Lake Wilderness may fall within King County's Shoreline Management area or critical-area buffers. These designations can restrict fence height, placement distance from the water, and materials. MyFence.com researches your specific parcel before quoting, determines which buffers or setbacks apply, and designs a compliant fence layout. We handle all King County permit paperwork so you don't have to navigate the process yourself.",
      },
      {
        question: "Does Cherokee Bay require an HOA fence application?",
        answer:
          "Yes. Cherokee Bay HOA residents should complete the official fence application before installation. Download the Cherokee Bay Fence Application for HOA on this page. After the project is complete, mail the finished documents to service@agynbyte.com. MyFence.com helps prepare HOA-ready plans so approval and closeout go smoothly.",
      },
      {
        question: "What fence options preserve lake views in Cherokee Bay Park?",
        answer:
          "Hogwire fencing with a cedar frame is the most popular view-preserving option—it defines your property line without blocking sight lines to Lake Wilderness. Our hybrid aluminum/cedar system with horizontal slat spacing also allows partial views while adding privacy. For homeowners who want full privacy on one side and open views on another, we commonly combine solid cedar panels along neighbor boundaries with hogwire sections facing the lake.",
      },
      {
        question: "How much does fence installation cost in Cherokee Bay Park, Maple Valley?",
        answer:
          "Cherokee Bay Park fence installation typically ranges from $36–$72 per linear foot depending on style, slope, and proximity to the lake. Cedar privacy runs $42–$62/ft, hogwire $36–$54/ft, and hybrid aluminum/cedar $52–$72/ft. Lakeside installations with slope work or buffer compliance may add 10–15%. Contact us for a free on-site estimate tailored to your specific property.",
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
                    Serving Cherokee Bay Park, Maple Valley WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Cherokee Bay Park Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Lakeside fence specialists for Cherokee Bay Park near Lake Wilderness. View-preserving cedar, hogwire, and hybrid fencing engineered for sloped lakefront lots and moisture-rich conditions.
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
                  radiusMiles={5}
                  zoom={11}
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
                Fencing for Cherokee Bay Park&apos;s Lakeside Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Cherokee Bay Park is a lakeside residential neighborhood near Lake Wilderness in Maple Valley, where homeowners enjoy water access, mature tree cover, and a mix of older and newer homes on lots that often slope toward the lake. The proximity to the water is the neighborhood&apos;s defining feature—but it also introduces fencing challenges that flat-land contractors routinely underestimate: downhill grades, saturated soils, shoreline buffer restrictions, and the competing desire for privacy without sacrificing the lake views that make this area special.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built fences across Maple Valley&apos;s lakeside neighborhoods and understands the specific engineering required for Cherokee Bay Park properties. We know how to design fence layouts that comply with King County&apos;s shoreline setbacks, select materials that resist the persistent moisture near the lake, and balance privacy with view preservation. Our Fence Genius system maps your lot&apos;s slope and property lines precisely, so every panel is manufactured to fit before we arrive on site.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Cherokee Bay Park Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lakeside Slope Specialists</h3>
                      <p className="text-muted-foreground">
                        Fence Genius maps your lot&apos;s grade toward the lake and manufactures panels that follow the terrain precisely. No gaps at the base, no awkward steps on sloped ground.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                      <p className="text-muted-foreground">
                        Full craftsmanship warranty covering materials, labor, and structural integrity—including lakeside installations exposed to higher moisture and seasonal water table fluctuations.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">View-Preserving Designs</h3>
                      <p className="text-muted-foreground">
                        We design fences that provide privacy where you need it while keeping Lake Wilderness views open. Mixed-style layouts—solid panels along neighbors, hogwire toward the water—are our specialty.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Moisture-Resistant Materials</h3>
                      <p className="text-muted-foreground">
                        Lake proximity means higher ground moisture year-round. Premium Western Red Cedar, marine-grade stainless fasteners, and our Post-on-Pipe upgrade handle Cherokee Bay Park&apos;s wet conditions.
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
                What Cherokee Bay Park Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;Our lot slopes pretty steeply toward the lake and we wanted privacy from the street side without blocking our water view. MyFence.com did cedar privacy panels along the front and hogwire along the back—it looks intentional, not like an afterthought. Great craftsmanship on a tricky lot.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Jeff in Cherokee Bay Park</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;We were worried about the permit situation near the lake. MyFence.com handled the whole thing—figured out the setback requirements, designed around them, and pulled the permit. The fence has been through two wet seasons now and looks just as good as day one.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Rachel in Cherokee Bay Park</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Cherokee Bay Park Maple Valley fence" />

        {/* 6. Photo Gallery */}
        <ServiceAreaPhotoGallery city="Maple Valley" neighborhood="Cherokee Bay Park" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Maple Valley" neighborhood="Cherokee Bay Park" />

        {/* 8. Neighborhood-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Cherokee Bay Park–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Lakeside Slopes & Grade Changes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Cherokee Bay Park lots slope downhill toward Lake Wilderness, with grade changes of 8–15 feet across a single property. Flat-ground fence panels leave widening gaps at the base on these slopes, and poorly planned installations end up with uneven sight lines. Fence Genius captures the exact elevation profile of your fence run and manufactures panels that step or rack to follow the terrain. Deeper post holes with reinforced footings provide stability on sloped ground, and our steel Post-on-Pipe upgrade handles the lateral pressure that gravity exerts on hillside fences over time.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Lake Proximity Moisture & Soil Conditions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Properties near Lake Wilderness contend with elevated ground moisture, seasonal water table fluctuations, and soil that stays saturated longer than inland lots. Standard wood posts set in concrete can wick moisture and rot from the base up within a few years. We address this with our Post-on-Pipe system that keeps the cedar post above ground contact, pressure-treated post bases where traditional installation is used, marine-grade stainless steel fasteners throughout, and premium Western Red Cedar selected for tight grain and high natural oil content that resists rot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Balancing Privacy with Lake Views</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cherokee Bay Park homeowners face a unique tension: wanting privacy from neighbors and the street while preserving their connection to Lake Wilderness. We solve this with mixed-style fence designs. Solid cedar privacy panels along side property lines and street-facing boundaries provide complete screening. Along lakeside edges, hogwire fencing with a cedar frame or our hybrid system with horizontal slat spacing maintains the property boundary and keeps pets contained without blocking the water view. Fence Genius lets us precisely plan where each style transitions for a cohesive look.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Shoreline Buffers & King County Regulations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cherokee Bay Park properties closest to Lake Wilderness may fall within King County&apos;s Shoreline Management Program area or critical-area buffers. These designations can restrict how close a fence can be placed to the ordinary high water mark, limit fence height, and require specific materials. MyFence.com researches the environmental designations for your specific parcel before quoting, designs fence layouts that comply with all applicable regulations, and handles the permit process. We ensure your fence is both legal and practical.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Cherokee Bay HOA Fence Application</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cherokee Bay HOA residents need to complete a fence application before installation. Download the official form below. After the project is finished, mail the completed application documents to{" "}
                    <a
                      href="mailto:service@agynbyte.com"
                      className="text-primary underline decoration-2 underline-offset-2"
                    >
                      service@agynbyte.com
                    </a>
                    . We help Cherokee Bay Park homeowners prepare HOA-ready plans so approval and closeout go smoothly.
                  </p>
                  <Card className="p-5 mt-5">
                    <h4 className="font-semibold mb-3">Download Cherokee Bay HOA Form</h4>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/docs/hoa/cherokee-bay-hoa-fence-application.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary underline decoration-2 underline-offset-2"
                        >
                          <FileDown className="h-4 w-4 shrink-0" aria-hidden />
                          Cherokee Bay Fence Application for HOA
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      Full process, lakeside notes, and closeout steps:{" "}
                      <Link
                        href="/service-areas/maple-valley/cherokee-bay-park/hoa"
                        className="text-primary underline decoration-2 underline-offset-2"
                      >
                        Cherokee Bay HOA fence application guide
                      </Link>
                      .
                    </p>
                  </Card>
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
                Fence Installation Cost in Cherokee Bay Park
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Lakeside lots with slopes and buffer requirements can affect pricing. Below are typical ranges for Cherokee Bay Park; your exact cost depends on linear footage, style, slope, and lake proximity.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6&apos;):</strong> $42–$62 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $36–$54 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$72 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Lakeside slope work and shoreline buffer compliance may add 10–15%. Get an exact quote for your Cherokee Bay Park property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Cherokee Bay Park property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Cherokee Bay Park</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The go-to for neighbor-side and street-side boundaries in Cherokee Bay Park. Board-on-board construction provides full screening and noise reduction. Pre-stained Western Red Cedar resists the high moisture near Lake Wilderness and weathers beautifully over time.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The most popular choice for lakeside boundaries. A cedar frame with black or galvanized mesh defines your property line and contains pets without blocking Lake Wilderness views. Lower wind load makes it ideal for exposed lakefront positions.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Aluminum panels in a cedar frame on steel posts—zero maintenance in Cherokee Bay Park&apos;s high-moisture environment. Horizontal slat options allow partial lake views while adding a modern architectural element to your property.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system &rarr;
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Cherokee Bay Park Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Lakeside Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We survey your Cherokee Bay Park property&apos;s slope toward the lake, soil conditions, existing trees, and proximity to any shoreline buffers. Fence Genius captures precise terrain and property-line data for panel manufacturing.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Regulatory Review</h3>
                  <p className="text-muted-foreground">
                    You select your styles and materials. We design the layout—often combining solid privacy panels along neighbors with view-preserving sections toward the lake. Any King County permits or shoreline setback requirements are handled by us.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Slope-following panels are precision-built off-site from Fence Genius measurements. Material selection accounts for Cherokee Bay Park&apos;s lakeside moisture—marine-grade fasteners, premium cedar, and Post-on-Pipe where soil stays wet.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Cherokee Bay Park Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew arrives with pre-fabricated panels. Deep post foundations with gravel drainage beds address the high water table. Stepped panels follow the lakeside slope precisely. Most Cherokee Bay Park projects complete in 1–3 days with full site cleanup.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Final inspection with you, reviewing every panel and post. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated on completion.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Maple Valley Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Maple Valley. If you&apos;re near Cherokee Bay Park, we also serve Barklay Woods, Lake Park, Highlands at Cedar Downs, Tahoma, and Cedar River.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley">Maple Valley overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/barklay-woods">Barklay Woods</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/lake-park">Lake Park</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/maple-valley/highlands-at-cedar-downs">Highlands at Cedar Downs</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 14. CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Fence Your Cherokee Bay Park Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Free on-site estimates available in Cherokee Bay Park. We&apos;ll assess your slope, lake proximity, and shoreline requirements, then recommend the right fence design for your lakeside lot.
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

export default CherokeeBayParkPage;
