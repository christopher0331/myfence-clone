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
  Mountain,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import ServiceAreaPhotoGallery from "@/components/service-areas/ServiceAreaPhotoGallery";
import FeaturedProject from "@/components/service-areas/FeaturedProject";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/issaquah/mirrormont";
const META_TITLE = "Mirrormont Fence Installation | Issaquah | MyFence.com";
const META_DESCRIPTION =
  "Mountain fence installation in Mirrormont, Issaquah. Wildlife-resistant cedar, hogwire & hybrid fencing for Squak Mountain properties. Free quotes. (253) 455-1885.";

const MirrorMontPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Mirrormont, Issaquah",
    pageTitle: "Mirrormont Issaquah Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence on Squak Mountain in Mirrormont?",
        answer:
          "Yes — King County and the City of Issaquah require building permits for most fences over 6 feet, and Squak Mountain properties may have additional critical-area setback requirements due to steep slopes and environmentally sensitive zones. MyFence.com handles the full permit process for Mirrormont homeowners, including any geotechnical documentation needed for mountain lots.",
      },
      {
        question: "What fence styles are best for wildlife resistance in Mirrormont?",
        answer:
          "Cedar privacy fences with reinforced bottom rails and no-dig barriers deter deer and small animals effectively. For bear country, we recommend our hybrid aluminum/cedar system with steel posts — it provides the structural strength needed to withstand large-animal contact. Hogwire with a cedar frame is also popular in Mirrormont for defining property lines while maintaining the natural forest aesthetic.",
      },
      {
        question: "How much does fence installation cost for Mirrormont mountain properties?",
        answer:
          "Mirrormont fence costs carry a mountain premium due to steep terrain, remote access, and reinforced engineering. Cedar privacy typically runs $45–$65 per linear foot, hogwire $38–$55, and hybrid aluminum/cedar $55–$75. Exact pricing depends on slope severity, access difficulty, and linear footage. Contact us for a free on-site estimate specific to your Squak Mountain property.",
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
              href="/service-areas/issaquah"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Issaquah
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Mirrormont, Issaquah WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Mirrormont Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Mountain fence specialists for Mirrormont's Squak Mountain properties. Wildlife-resistant cedar, hogwire, and hybrid fencing engineered for steep forested terrain and rugged elevation changes.
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
                  city="Mirrormont, Issaquah"
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
                Fencing for Mirrormont's Mountain Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Mirrormont is a secluded, wooded residential community perched on Squak Mountain in Issaquah. Properties here sit on larger, heavily forested lots at elevation — with steep driveways, rugged terrain, and a rural character that feels miles from the city despite being minutes from downtown Issaquah. There's no HOA and the roads are private, but the mountain environment creates fencing challenges that most contractors simply aren't prepared for.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built fences throughout Mirrormont and understands what mountain lots demand: reinforced post foundations for steep grades, wildlife-resistant designs that hold up against deer, bears, and coyotes, and materials that perform in the wetter, cooler microclimate of Squak Mountain's forest canopy. Our Fence Genius technology maps the exact terrain of your lot so every panel follows the grade — no gaps, no shortcuts.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Mirrormont Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Mountain Terrain Specialists</h3>
                      <p className="text-muted-foreground">
                        Fence Genius precision mapping handles Mirrormont's steep mountain grades. Custom panels follow your terrain exactly — deep post footings and reinforced bracing for slope stability at elevation.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Wildlife-Resistant Designs</h3>
                      <p className="text-muted-foreground">
                        Fences built to deter deer, bears, and coyotes common on Squak Mountain. Reinforced bottom rails, no-dig barriers, and structural strength to withstand large-animal contact.
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
                        Full craftsmanship warranty on materials and labor — including mountain-terrain installations. We stand behind every Mirrormont fence we build, even on the steepest lots.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Remote-Access Experience</h3>
                      <p className="text-muted-foreground">
                        Mirrormont's private roads and steep driveways require equipment and logistics planning that general contractors overlook. We've done it before and know how to get the job done efficiently.
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
                What Mirrormont Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our lot on Squak Mountain has some serious elevation change. MyFence.com measured everything with their tech and the cedar fence follows the hill perfectly. The deer haven't gotten through either. Best fence company we've worked with."
                  </p>
                  <p className="text-sm font-medium">— Brian in Mirrormont</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We needed a fence strong enough for bear country and that could handle the steep grade behind our house. They used the hybrid system with steel posts and it's incredibly solid. Getting equipment up our driveway was no problem for them."
                  </p>
                  <p className="text-sm font-medium">— Sarah in Mirrormont</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Mirrormont Issaquah fence" />

        {/* 6. Project Gallery */}
        <ServiceAreaPhotoGallery city="Issaquah" neighborhood="Mirrormont" />

        {/* 7. Case Study Spotlight */}
        <FeaturedProject city="Issaquah" neighborhood="Mirrormont" />

        {/* 8. Mirrormont-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Mirrormont-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Steep Mountain Terrain</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mirrormont lots routinely have 25–45 degree grade changes across a single property line. Many driveways alone climb hundreds of feet from the private roads below. Standard fence panels can't follow this kind of terrain — you end up with large triangular gaps at the bottom or panels that jut out at odd angles. Our Fence Genius system maps the exact slope profile and we manufacture custom racked panels that follow it precisely. Posts are set 36–48 inches deep with reinforced concrete to resist the lateral forces that mountain slopes produce over time.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wildlife Pressure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mirrormont sits in the middle of active wildlife habitat. Deer are a daily presence, black bears pass through regularly, and coyotes are common after dark. A fence here isn't just a boundary marker — it needs structural integrity to resist animal contact. We use reinforced bottom rails with no-dig barriers for deer, and our hybrid aluminum/cedar system on steel posts provides the impact resistance needed for larger animals. Hogwire sections can be used strategically to maintain sightlines while keeping wildlife out of gardens and play areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Forest Canopy & Moisture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mirrormont's heavy tree cover creates a wetter microclimate than lower Issaquah. Properties under dense canopy stay damp longer, accelerating rot in substandard materials. We use premium Western Red Cedar with marine-grade stainless hardware, and our steel post-on-pipe option is especially popular here for its resistance to moisture and ground movement. Proper drainage around post bases is part of every Mirrormont installation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Access & Logistics on Private Roads</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mirrormont's private roads are narrow, winding, and steep. Getting materials and equipment to your property requires advance planning — standard delivery trucks can't always make the climb. We coordinate equipment staging, use compact machinery where needed, and plan material delivery around Mirrormont's road conditions so your project stays on schedule without disrupting neighbors.
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
                Fence Installation Cost in Mirrormont
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Mountain fencing is an investment that reflects the terrain and logistics of Squak Mountain. Below are typical ranges for Mirrormont; exact pricing depends on slope severity, access difficulty, wildlife requirements, and linear footage.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $45–$65 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $38–$55 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $55–$75 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Mountain premium reflects reinforced engineering, deeper footings, and remote-access logistics. Get an exact quote for your Mirrormont property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Mirrormont property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Mirrormont</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The top choice for Mirrormont properties needing privacy and wildlife deterrence. Board-on-board construction with reinforced bottom rails handles deer pressure. Pre-stained options blend with Squak Mountain's natural surroundings.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Defines property lines while preserving Mirrormont's forest views and natural feel. Cedar frame with black or galvanized mesh. Lower wind load makes it ideal for exposed mountain slopes.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Our strongest system — aluminum panels in a cedar frame on steel posts. Built for Mirrormont's bear country and extreme slopes. Zero staining required; handles moisture and wildlife contact.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mirrormont Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Mountain Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your Mirrormont property to survey slope, soil, tree placement, wildlife activity, and access logistics. Fence Genius captures precise terrain data for custom panel manufacturing.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Permits</h3>
                  <p className="text-muted-foreground">
                    Choose from cedar, hogwire, or hybrid styles. We handle Issaquah/King County permit applications and any critical-area documentation required for Squak Mountain properties.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Slope-following panels are precision-built at our facility from Fence Genius terrain data. Materials are selected for mountain moisture and wildlife resistance. No on-site cutting or waste.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Mountain Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew arrives with pre-fabricated panels and compact equipment suited for Mirrormont's private roads. Deep post foundations, reinforced bracing, and precision panel fitting. Most projects complete in 2–4 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Detailed final inspection with you, covering every panel and post. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty activated on completion — including mountain-terrain installations.
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
                Also Serving Nearby Issaquah Communities
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Issaquah and the surrounding foothills. If you're near Mirrormont, we also serve Squak Mountain, Grand Ridge, Talus, and Issaquah Highlands.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah">Issaquah overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah-highlands">Issaquah Highlands</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sammamish">Sammamish</Link>
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
                Ready to Fence Your Mirrormont Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free on-site estimate from Issaquah's mountain fence specialists. We'll assess your Squak Mountain slope, discuss wildlife-resistant options, and recommend the best solution for your property.
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

export default MirrorMontPage;
