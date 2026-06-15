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
  Waves,
  Eye,
  TreePine,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import OptimizedImage from "@/components/OptimizedImage";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/kirkland/juanita";
const META_TITLE = "Juanita Fence Installation | MyFence.com";
const META_DESCRIPTION =
  "Waterfront fence installation in Juanita, Kirkland. Marine-grade cedar, hogwire & hybrid fencing for Lake Washington properties. View-preserving designs. Free quotes. (253) 455-1885.";

const JuanitaPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Juanita, Kirkland",
    pageTitle: "Juanita Kirkland Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Juanita, Kirkland?",
        answer:
          "Fences under 8 feet typically don't require a Kirkland building permit, but must meet height and setback rules. Waterfront properties within 200 feet of Lake Washington may need shoreline review. MyFence.com handles permit research and can prepare any required HOA or shoreline documentation for your Juanita property.",
      },
      {
        question: "What fence materials hold up best on Juanita's waterfront?",
        answer:
          "Western Red Cedar with marine-grade stainless steel fasteners is the standard for Juanita's lakefront. We use 316-grade stainless to resist corrosion from Lake Washington humidity and avoid the rust that kills galvanized hardware within years. For properties within 500 feet of the water, we recommend our Post-on-Pipe system to eliminate ground-contact rot.",
      },
      {
        question: "How much does fence installation cost in Juanita, Kirkland?",
        answer:
          "Juanita fence installation typically runs $48–$75 per linear foot depending on style, materials, and waterfront access. Marine-grade hardware and view-preserving designs may add 10–15%. Use our Virtual Quote Tool for an estimate, then we'll provide exact pricing after an on-site Fence Genius measurement.",
      },
      {
        question: "Can I keep my lake view and still add privacy in Juanita?",
        answer:
          "Yes. We design horizontal and semi-private fences that preserve sightlines to the water while screening neighboring properties. Hogwire and custom-spaced cedar are popular in Juanita for exactly this balance. Our Fence Genius system ensures consistent spacing and a clean look that fits the neighborhood.",
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
              href="/service-areas/kirkland"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Kirkland
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Juanita, Kirkland WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Juanita Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Lake Washington waterfront fence specialists for Juanita. Marine-grade cedar, hogwire, and hybrid fencing built for moisture, views, and the Juanita Beach lifestyle.
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
                  city="Kirkland"
                  state="WA"
                  radiusMiles={6}
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
                Fencing for Juanita's Lake Washington Waterfront
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Juanita sits on the north end of Kirkland's shoreline, with Juanita Beach Park, Juanita Bay Park, and miles of residential waterfront along Lake Washington. The neighborhood's mix of mid-century homes and newer construction means fence projects here face consistent moisture, wind off the lake, and homeowners who care deeply about preserving views while adding privacy and security.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout Juanita—from properties near NE 116th Street and Juanita Drive to lots right on the water. We use marine-grade stainless hardware, cedar and hogwire systems proven in waterfront conditions, and designs that preserve sightlines to the lake. Our Fence Genius technology ensures precise measurements and panels that hold up to Juanita's unique microclimate.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Juanita Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Waterfront-Ready Materials</h3>
                      <p className="text-muted-foreground">
                        Marine-grade stainless steel fasteners and cedar or hybrid systems built for Lake Washington's humidity and salt exposure. No galvanized hardware that rusts out in years.
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
                        Horizontal cedar, hogwire, and semi-private options that add privacy without blocking your Juanita lake views. Designs that match the neighborhood's aesthetic.
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
                        Full craftsmanship warranty on materials and labor—including waterfront installations. We stand behind every Juanita fence we build.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Landscaping-Safe Installation</h3>
                      <p className="text-muted-foreground">
                        Careful work around mature trees and gardens common in Juanita. Compact equipment and hand-digging near roots so your yard stays intact.
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
                What Juanita Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We're right off Juanita Bay and needed a fence that could handle the moisture. MyFence.com used stainless everything and the cedar looks great. They preserved our view of the water while giving us privacy from the street."
                  </p>
                  <p className="text-sm font-medium">— Mark in Juanita</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Had our fence replaced after the old one rotted near the lake. The crew was careful with our landscaping and the new fence has held up perfectly through two wet seasons. Would recommend to any Juanita neighbor."
                  </p>
                  <p className="text-sm font-medium">— Sarah in Juanita</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Juanita Kirkland fence" />

        {/* 6. Project Gallery placeholder */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Work in Juanita & Kirkland
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We've completed dozens of waterfront and near-water fence projects in Juanita and surrounding Kirkland neighborhoods. Cedar privacy, hogwire, and hybrid installations built for Lake Washington conditions.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                      alt="6' cedar privacy fence installation in Juanita, Kirkland"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">6' Cedar Privacy</h3>
                    <p className="text-sm text-muted-foreground">Lakefront Kirkland property</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/6_%20Black%20Hogwire/IMG_7356.webp?updatedAt=1762037826604"
                      alt="Hogwire with cedar frame fence in Juanita"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hogwire with Cedar Frame</h3>
                    <p className="text-sm text-muted-foreground">View-preserving design</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png"
                      alt="Cedar aluminum hybrid fence section in Juanita"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hybrid Aluminum/Cedar</h3>
                    <p className="text-sm text-muted-foreground">Zero-maintenance waterfront</p>
                  </div>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                <Link href="/gallery" className="text-primary hover:underline">View full gallery</Link> for more Kirkland-area projects.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Case Study Spotlight */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Featured Juanita Installation
              </h2>
              <Card className="p-6 md:p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <OptimizedImage
                    src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                    alt="Featured Juanita installation: 6' cedar privacy fence near Juanita Bay Park, Kirkland"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Juanita homeowner near Juanita Bay Park needed to replace a failing fence that was rotting from constant lake moisture. We installed a 6' cedar privacy fence with board-on-board construction, marine-grade stainless steel fasteners throughout, and posts set in concrete with no wood-to-soil contact. The project included a gate for beach access and careful work around existing landscaping. Total linear footage was 180 feet; installation was completed in two days. The fence is under our {WARRANTY_CONSTANTS.YEARS}-year warranty and built to last in Juanita's waterfront environment.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Style:</strong> Cedar privacy, board-on-board · <strong>Location:</strong> Juanita, Kirkland
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. Juanita-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Juanita-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Juanita Waterfront Moisture & Corrosion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Properties near Juanita Beach and along the lake experience higher humidity and occasional salt spray. Standard galvanized hardware can corrode within 5–10 years. We use 316-grade stainless steel fasteners and, for posts, recommend our Post-on-Pipe system within 500 feet of the water to eliminate ground-contact rot. Cedar is naturally rot-resistant and holds up well when combined with the right hardware.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Juanita View Preservation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lake Washington views are a major reason people live in Juanita. Solid 6' walls aren't always the answer. We design horizontal cedar, hogwire, and semi-private sections that screen neighbors and street noise while keeping sightlines to the water. Many Juanita projects mix solid panels in back yards with open or lower sections toward the lake.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Juanita Landscaping & Setbacks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Juanita has mature trees and gardens, and Kirkland's setback rules apply: typically 4 ft max in front yards, 6 ft in side/rear. Corner lots have sight-distance rules. We plan post placement to avoid major roots and irrigation where possible, and we verify setbacks and any HOA requirements before installation so your project stays compliant.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Shoreline & Permits in Juanita</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If your property is within 200 feet of Lake Washington's ordinary high water mark, Kirkland's shoreline regulations may apply. We can help you understand whether your fence needs shoreline review and what to submit. For standard residential fences under 8 ft, Kirkland usually doesn't require a building permit, but we always confirm current rules for your address.
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
                Fence Installation Cost in Juanita
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Waterfront fencing is an investment in your property and lifestyle. Below are typical ranges for Juanita and Kirkland; your exact price depends on linear footage, style, and site conditions.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $48–$65 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $42–$58 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $55–$75 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Waterfront and marine-grade options may add 10–15%. Slope and access can also affect cost. Get an exact quote for your Juanita property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Juanita property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Juanita</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The go-to for Juanita backyards. Board-on-board adds privacy and noise buffering. Stainless hardware and optional Post-on-Pipe for waterfront lots.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Keeps your lake view while defining the property line. Cedar frame with black or galvanized mesh. Popular along Juanita's waterfront and near Juanita Bay Park.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Low-maintenance option for busy Juanita homeowners. Black aluminum panels in a cedar frame; no staining, and it stands up to lakefront moisture.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Juanita Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Juanita Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your property to measure the fence line, check slope and soil, note waterfront proximity and view lines, and identify any HOA or shoreline requirements. Fence Genius captures precise terrain data.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Approvals</h3>
                  <p className="text-muted-foreground">
                    You choose style and materials. We prepare any needed HOA or permit paperwork for Kirkland/Juanita and get your approval before ordering materials.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements. Marine-grade hardware and materials selected for waterfront where applicable.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Juanita Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew installs with minimal impact on your landscaping. Most Juanita projects finish in 1–3 days. We clean up and walk you through the finished fence.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    Final inspection with you. Full {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty starts at completion.
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
                Also Serving Nearby Kirkland Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Kirkland. If you're near Juanita, we also serve Downtown Kirkland, Finn Hill, Kingsgate, Bridle Trails, Market, and Moss Bay.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/kirkland">Kirkland overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah">Issaquah</Link>
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
                Ready to Enhance Your Juanita Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Juanita. Get a free on-site quote from Kirkland's waterfront fence specialists—we'll assess your lot, view lines, and recommend the right materials for the lake.
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

export default JuanitaPage;
