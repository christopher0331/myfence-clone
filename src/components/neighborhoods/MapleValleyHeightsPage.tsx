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
  Mountain,
  Eye,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/renton/maple-valley-heights";
const META_TITLE = "Maple Valley Heights Fence Installation | Renton | MyFence.com";
const META_DESCRIPTION =
  "Hillside fence installation in Maple Valley Heights, Renton. Slope-following cedar, hogwire & hybrid fencing. Free quotes. (253) 455-1885.";

const MapleValleyHeightsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Maple Valley Heights, Renton",
    pageTitle: "Maple Valley Heights Renton Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Which jurisdiction handles fence permits in Maple Valley Heights?",
        answer:
          "Maple Valley Heights straddles the boundary between the City of Renton and unincorporated King County, so the permit process depends on which side of the line your parcel falls. Some properties are within Renton city limits while neighboring lots are county jurisdiction. MyFence.com verifies your parcel's exact jurisdiction through county records and handles the correct permit application — whether it's through the City of Renton or King County Department of Local Services.",
      },
      {
        question: "How do you install fences on the steep slopes in Maple Valley Heights?",
        answer:
          "Maple Valley Heights has some of the steepest residential terrain in the Renton area. Our Fence Genius system captures the precise slope profile along your property lines and manufactures racked panels that follow the grade continuously. On steep sections exceeding 20-degree inclines, we set posts 42–48 inches deep with oversized concrete footings and use our steel post-on-pipe system to resist the lateral forces that gravity exerts on hillside fence runs. The result is a fence that looks intentional and stays plumb for decades.",
      },
      {
        question: "How much does fence installation cost in Maple Valley Heights?",
        answer:
          "Maple Valley Heights fence installation typically ranges from $44–$65 per linear foot for cedar privacy, $38–$56 for hogwire, and $54–$74 for hybrid aluminum/cedar. The steeper terrain and reinforced footing requirements here place pricing at the higher end of Renton-area ranges. Contact us for a free on-site estimate specific to your property's slope conditions.",
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
              href="/service-areas/renton"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Renton
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Maple Valley Heights, Renton WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Maple Valley Heights Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Steep-slope fencing specialists for Maple Valley Heights' elevated properties. View-preserving cedar, hogwire, and hybrid systems engineered for the Renton-Maple Valley ridgeline.
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
                  city="Maple Valley Heights, Renton"
                  state="Washington"
                  radiusMiles={5}
                  zoom={11}
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
                Fencing for Maple Valley Heights' Elevated Hillside Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Maple Valley Heights occupies the elevated ridgeline where Renton's eastern boundary meets Maple Valley, making it one of the most dramatically sloped residential areas in the region. Properties here sit at significant elevation with views stretching across the Cedar River valley toward Mount Rainier and the Cascades. The steep terrain that provides those panoramic views also creates some of the most technically demanding fence installation conditions in the greater Renton area.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Adding complexity, Maple Valley Heights straddles the boundary between Renton city limits and unincorporated King County — meaning the fence permit process varies depending on exactly where your property sits. MyFence.com serves both jurisdictions and verifies which rules apply to your parcel before work begins. Our Fence Genius measurement system was built for exactly this type of terrain: capturing steep slope profiles to produce panels that follow the hillside without the gaps, steps, and structural failures that plague standard installations on severe grades.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Maple Valley Heights Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Steep Slope Engineering</h3>
                      <p className="text-muted-foreground">
                        Maple Valley Heights has grades exceeding 30 degrees on some property lines. Fence Genius maps every incline and produces continuously racked panels with reinforced deep-set footings built for severe terrain.
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
                        Full craftsmanship warranty covering materials, labor, and structural integrity — even on the steepest hillside installations where other contractors won't guarantee their work.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Dual-Jurisdiction Permits</h3>
                      <p className="text-muted-foreground">
                        Properties here fall under either Renton city or King County rules. We verify your parcel's jurisdiction and handle the correct permit process — no guesswork, no delays.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">View-Preserving Designs</h3>
                      <p className="text-muted-foreground">
                        Elevation means views — and you don't want a fence blocking them. We design installations that provide privacy at ground level while preserving sightlines to the Cascades and valley below.
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
                What Maple Valley Heights Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "The grade on our south property line is extreme — two other companies refused to quote it. MyFence came out, measured everything with their technology, and built a fence that follows the slope perfectly. It's been through two winters with zero movement. Incredible work."
                  </p>
                  <p className="text-sm font-medium">— Brian in Maple Valley Heights</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We wanted privacy in the backyard but couldn't lose our mountain view. They designed a hogwire section along the view corridor and cedar privacy on the sides. Smart approach and it looks great. They also figured out we were King County, not Renton, and got the right permit."
                  </p>
                  <p className="text-sm font-medium">— Diana in Maple Valley Heights</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Maple Valley Heights Renton fence" />

        {/* 6. Project Gallery */}
        <ServiceAreaPhotoGallery city="Renton" neighborhood="Maple Valley Heights" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Renton" neighborhood="Maple Valley Heights" />

        {/* 8. Maple Valley Heights–Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Maple Valley Heights–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Boundary Jurisdiction Complexity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maple Valley Heights is split between Renton city limits and unincorporated King County. Your next-door neighbor might be under different fence regulations than you are. The City of Renton and King County have different setback requirements, height limits, and permit thresholds. Some properties here also carry easements from utility access or stormwater drainage that restrict where fences can be placed. We pull your parcel's records from both the city and county systems, verify the exact jurisdiction boundary, and ensure your fence meets the rules that apply to your specific lot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Severe Grade Installation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This is not gentle rolling terrain. Maple Valley Heights has property lines with sustained 25–35 degree grades where gravity constantly pulls fence panels downhill. Standard installations fail within a few years — posts lean, panels separate from rails, and the whole structure drifts downslope. We counter this with our steel post-on-pipe system sunk 42–48 inches deep, oversized concrete footings, and panel-to-post connections engineered for lateral load. Our Fence Genius measurements ensure panels are manufactured at the exact rack angle for each section, so every panel sits flush to the terrain without shimming or field adjustment.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wind Exposure at Elevation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The ridgeline position means Maple Valley Heights properties catch sustained winds that lower-lying Renton neighborhoods don't experience. Solid privacy fences on exposed hillside lots act as wind sails, placing enormous stress on posts and connections. We manage this with reinforced post spacing — 6-foot centers instead of standard 8-foot — and recommend our hybrid aluminum/cedar system for the most exposed runs. Where full privacy isn't essential, hogwire sections allow wind to pass through while still defining the property line and containing pets.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">View Corridor Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Homeowners in Maple Valley Heights paid a premium for views of the Cascades, Mount Rainier, and the Cedar River valley. A 6-foot solid fence around the entire perimeter would eliminate the reason you bought the property. We design fencing that provides privacy where you need it — between neighboring homes, along driveways, around patios — while using view-friendly hogwire or lower-height panels along view corridors. The result is security and privacy without sacrificing the panoramic backdrop that makes Maple Valley Heights special.
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
                Fence Installation Cost in Maple Valley Heights
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Steep-slope installations require deeper footings, reinforced post systems, and precision-manufactured racked panels. Below are typical ranges for Maple Valley Heights; exact pricing depends on linear footage, grade severity, style, and material choices.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6&apos;):</strong> $44–$65 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $38–$56 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $54–$74 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Hillside engineering and post-on-pipe upgrades are factored into pricing. Get an exact quote for your Maple Valley Heights property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Maple Valley Heights property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Maple Valley Heights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The workhorse for side-yard privacy on Maple Valley Heights' hillside lots. Board-on-board construction with racked panels follows even the steepest grades. Pre-stained options complement the neighborhood's established homes.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The smart choice for view corridors. Cedar-framed hogwire defines boundaries and contains pets while letting mountain and valley views pass through unobstructed. Lower wind load on exposed hillside runs.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Our strongest system for Maple Valley Heights' most demanding terrain. Aluminum panels in a cedar frame on steel posts handle wind, gravity, and slope with zero maintenance and maximum structural integrity.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system →
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Maple Valley Heights Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Hillside Site Survey</h3>
                  <p className="text-muted-foreground">
                    We survey your property's grade changes, wind exposure, view corridors, and soil conditions. Fence Genius captures precise slope data along every fence line for custom panel manufacturing.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Jurisdiction Verification & Design</h3>
                  <p className="text-muted-foreground">
                    We confirm whether your parcel falls under Renton city or King County rules, check for easements, and handle the correct permit application. You choose your styles and materials, including view-corridor strategy.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Slope-Specific Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are precision-built at our facility from Fence Genius slope data. Each section is manufactured at the exact rack angle for its position — no field cutting or shimming on installation day.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Hillside Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew uses specialized hillside equipment to set posts deep with reinforced footings. Pre-fabricated panels go up quickly and precisely. Most Maple Valley Heights projects complete in 2–3 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Final inspection with you covering every panel, post, and connection point. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated — including all hillside and reinforced-footing sections.
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
                Also Serving Nearby Renton Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Renton and the surrounding plateau. If you're near Maple Valley Heights, we also serve Maple Ridge Estates, East Renton Plateau, The Grove at Spring Lake, and Fairwood.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton">Renton overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/maple-ridge-estates">Maple Ridge Estates</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/renton/the-grove-at-spring-lake">The Grove at Spring Lake</Link>
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
                Ready to Fence Your Maple Valley Heights Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Renton's hillside fence specialists. We'll assess your slope, verify your jurisdiction, and design a solution that handles the terrain while preserving your views.
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

export default MapleValleyHeightsPage;
