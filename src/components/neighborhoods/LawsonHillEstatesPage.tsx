"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Award, ArrowLeft, MapPin, Phone, Star, Mountain, TreePine } from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";

interface LawsonHillEstatesPageProps {
  canonical?: string;
}

const LawsonHillEstatesPage = ({
  canonical = "https://myfence.com/service-areas/black-diamond/lawson-hill-estates",
}: LawsonHillEstatesPageProps) => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical,
    neighborhoodName: "Lawson Hill Estates, Black Diamond",
    pageTitle: "Lawson Hill Estates Fence Installation",
    description:
      "Fence installation in Lawson Hill Estates, Black Diamond. Cedar, hogwire & hybrid fencing for foothills properties. Rocky soil specialists. Free quotes. (253) 455-1885.",
    faqItems: [
      {
        question: "What are the HOA fence requirements in Lawson Hill Estates?",
        answer:
          "Lawson Hill Estates enforces design standards covering fence height, style, and finish. We work directly with the community's architectural review process, preparing detailed elevation drawings and material specifications so your application moves through approval without delays.",
      },
      {
        question: "How do you handle the rocky soil in Lawson Hill Estates?",
        answer:
          "Black Diamond's rocky, glacially deposited soil is especially prominent in Lawson Hill Estates. We use heavy-duty power augers and manual rock bars to reach proper post depth (36–48 inches). When we encounter large rock shelves, we switch to surface-mount post brackets or core-drill anchoring to maintain structural integrity.",
      },
      {
        question: "How much does fence installation cost in Lawson Hill Estates?",
        answer:
          "Lawson Hill Estates fence installation typically ranges from $40–$70 per linear foot depending on style, lot size, and slope. Rocky soil conditions may add to foundation costs. Use our Virtual Quote Tool for an initial estimate, then we provide exact pricing after an on-site measurement.",
      },
    ],
  });

  return (
    <>
      <Seo
        title="Lawson Hill Estates Fence Installation | Black Diamond | MyFence.com"
        description="Fence installation in Lawson Hill Estates, Black Diamond. Cedar, hogwire & hybrid fencing for foothills properties. Rocky soil specialists. Free quotes. (253) 455-1885."
        canonical={canonical}
        structuredData={structuredData}
      />

      <main className="min-h-screen">
        {/* 1. Hero */}
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/black-diamond"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Black Diamond
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving Lawson Hill Estates, Black Diamond WA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Lawson Hill Estates Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Durable fencing built for Lawson Hill Estates' larger lots, rocky foothills terrain, and HOA design standards. Cedar, hogwire, and hybrid solutions with Cascade views in mind.
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

              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <GoogleBusinessMap
                  city="Lawson Hill Estates, Black Diamond"
                  state="Washington"
                  radiusMiles={5}
                  zoom={11}
                  showBusinessInfo={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trust Badges */}
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
                Fencing Designed for Lawson Hill Estates Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Lawson Hill Estates is one of Black Diamond's newer residential developments, offering generous lot sizes with views stretching across the Cascade foothills. The combination of newer construction homes, moderate terrain slopes, and rocky soil makes fencing here a different job than what most contractors are prepared for. Standard approaches often fail because post holes hit rock at shallow depths and property lines follow uneven grades.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built fences throughout Black Diamond's developing neighborhoods and understands the ground conditions firsthand. We bring heavy-duty augers, rock bars, and the Fence Genius measurement system to every Lawson Hill Estates project so panels follow your terrain precisely, posts reach proper depth even in dense substrate, and the finished fence meets your HOA's architectural standards from day one.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Lawson Hill Estates Homeowners Choose MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Rocky Terrain Specialists</h3>
                      <p className="text-muted-foreground">
                        Black Diamond's glacially deposited soil is packed with rock. We arrive with power augers and manual rock bars, and switch to surface-mount or core-drill anchoring when we hit solid shelves — no shortcuts on post depth.
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
                        Every Lawson Hill Estates installation includes our comprehensive craftsmanship warranty covering materials, labor, and structural integrity — including projects with rocky soil foundations.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">HOA Design Compliance</h3>
                      <p className="text-muted-foreground">
                        We prepare complete architectural review packages with elevation drawings, material specs, and color samples tailored to Lawson Hill Estates' design standards for smooth first-time approval.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Foothills-Grade Materials</h3>
                      <p className="text-muted-foreground">
                        Western Red Cedar with marine-grade stainless fasteners and reinforced 4.125" posts built to handle Black Diamond's higher rainfall, wind exposure, and proximity to forested areas.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Testimonials */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What Black Diamond Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our lot backs up to trees and the ground is full of rock. Other companies said they couldn't guarantee post depth but MyFence brought the right equipment and every post is solid. The cedar fence looks amazing against the forest backdrop."
                  </p>
                  <p className="text-sm font-medium">— Derek in Lawson Hill Estates</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We needed the fence to pass HOA review on the first try. MyFence handled the drawings, picked a stain color that matched the neighborhood, and the install crew was done in a day and a half. Really smooth process from start to finish."
                  </p>
                  <p className="text-sm font-medium">— Sarah in Lawson Hill Estates</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Lawson Hill Estates Black Diamond fence" />

        {/* 6. Gallery */}
        <ServiceAreaPhotoGallery city="Black Diamond" neighborhood="Lawson Hill Estates" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Black Diamond" neighborhood="Lawson Hill Estates" />

        {/* 8. Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Lawson Hill Estates Fencing Considerations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Rocky Soil and Post Foundations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lawson Hill Estates sits on ground shaped by glacial activity, leaving behind compacted clay laced with cobbles and boulders. Standard residential augers stall out frequently in these conditions. We carry heavy-duty equipment purpose-built for rock and use manual rock bars when needed. Where solid rock shelves prevent digging to full depth, we switch to surface-mount post brackets with concrete pads or core-drill anchoring — methods that provide equivalent lateral strength without compromising the installation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">HOA Architectural Review</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As a newer development, Lawson Hill Estates maintains active design standards governing fence height, material, color, and placement. We prepare submission-ready packages with elevation drawings, material specifications, and finish samples. Our familiarity with common HOA-approved styles in Black Diamond's newer communities — including cedar privacy, hogwire, and hybrid aluminum/cedar — helps ensure your application clears review on the first pass.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Moderate Slopes and Grade Transitions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most Lawson Hill Estates lots feature gentle-to-moderate slopes, especially toward rear property lines that face the foothills. Fence Genius maps these grade changes precisely so we can manufacture panels that rack or step to follow the terrain without gaps at the bottom or awkward height changes. Proper drainage flow is maintained so water doesn't pool against fence lines during Black Diamond's wet winters.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wildlife and Forested Edges</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Properties on Lawson Hill Estates' perimeter back up to forested areas and the Green River corridor, bringing deer, coyotes, and smaller wildlife into regular contact with yards. Our fence designs account for this — reinforced bottom rails sit close to grade to prevent animals from pushing underneath, while material choices and heights are selected to deter climbing without creating an eyesore against the natural tree line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Pricing */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in Lawson Hill Estates
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Pricing depends on linear footage, fence style, slope, and soil conditions. Below are typical ranges for Lawson Hill Estates properties.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $40–$60 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $35–$50 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $50–$70 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Rocky soil may add to foundation costs on some lots. Get an exact quote for your Lawson Hill Estates property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Lawson Hill Estates property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Lawson Hill Estates</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The top choice for Lawson Hill Estates backyards. Board-on-board construction provides full privacy and a clean finish that complements newer home construction. Pre-stained options available to match HOA color palettes.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Great for lots with Cascade views or forested edges. Cedar frame with black or galvanized wire mesh defines property boundaries while keeping sightlines open. Lower wind load makes it ideal for exposed positions.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles &rarr;
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Our strongest, lowest-maintenance system. Aluminum panels in a cedar frame on steel posts stand up to Black Diamond's wind and rain with zero staining required. A popular pick for larger Lawson Hill lots.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system &rarr;
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Lawson Hill Estates Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Property & Soil Assessment</h3>
                  <p className="text-muted-foreground">
                    We survey your lot's grade changes, soil composition, and rocky spots. Fence Genius captures precision measurements so every panel is built to your terrain's exact profile.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & HOA Submission</h3>
                  <p className="text-muted-foreground">
                    Choose from cedar privacy, hogwire, or hybrid systems. We prepare the architectural review package with elevation drawings, material specs, and color samples for your HOA's approval process.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are precision-built at our facility from Fence Genius terrain data. Slope-matched panels arrive ready to install — no on-site cutting or waste.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Rocky Terrain Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew arrives equipped for Black Diamond's rock-heavy soil. Deep post foundations, heavy-duty augering, and reinforced bracing ensure a stable, long-lasting installation. Most Lawson Hill projects complete in 1–3 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    We walk the finished fence with you, checking every panel and post. Your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activates on completion.
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
                Also Serving Nearby Black Diamond Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout the Black Diamond area. If you're in Lawson Hill Estates, we also serve Ten Trails, Lake Sawyer, Morgan Creek, and Historic Downtown Black Diamond.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/black-diamond">Black Diamond overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/black-diamond">Ten Trails</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/black-diamond">Lake Sawyer</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/black-diamond">Morgan Creek</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/black-diamond">Historic Downtown</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Fence Your Lawson Hill Estates Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Black Diamond's rocky soil fence specialists. We'll assess your lot, discuss HOA requirements, and recommend the best fencing solution for your property and budget.
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

export default LawsonHillEstatesPage;
