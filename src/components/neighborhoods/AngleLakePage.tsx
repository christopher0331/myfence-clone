"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft, MapPin, Phone, Star } from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import OptimizedImage from "@/components/OptimizedImage";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

interface AngleLakePageProps {
  canonical?: string;
}

const AngleLakePage = ({
  canonical = "https://myfence.com/service-areas/seatac/angle-lake",
}: AngleLakePageProps) => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical,
    neighborhoodName: "Angle Lake, SeaTac",
    pageTitle: "Angle Lake Fence Installation",
    description:
      "Professional fence installation in Angle Lake, SeaTac. Waterfront and near-lake fencing with moisture-resistant cedar, hogwire, and hybrid systems. Privacy and views-conscious designs.",
    faqItems: [
      {
        question: "Do I need a permit for a fence in Angle Lake, SeaTac?",
        answer: "SeaTac residential fences up to 6 feet in side and rear yards typically do not require a permit but must comply with setback and sight-distance rules. Front yard fences are limited to 4 feet. We can confirm current rules for your Angle Lake property during the site visit.",
      },
      {
        question: "What fence styles work best for Angle Lake waterfront properties?",
        answer: "Cedar and hybrid systems hold up well to lake moisture and Puget Sound weather. Hogwire preserves views of the water while defining the boundary. We use marine-grade fasteners and recommend Post-on-Pipe for posts near water or damp soil.",
      },
      {
        question: "How much does fence installation cost in Angle Lake, SeaTac?",
        answer: "Angle Lake fence installation typically runs $42–$66 per linear foot depending on style and site access. Waterfront and view-oriented designs may use premium materials. We provide exact pricing after a free on-site measurement.",
      },
      {
        question: "How long does fence installation take in Angle Lake?",
        answer: "Most Angle Lake projects complete in 1–2 days on-site. We fabricate panels in advance from Fence Genius measurements so install day is efficient with minimal disruption to your property.",
      },
    ],
  });

  return (
    <>
      <Seo
        title="Angle Lake SeaTac Fence Installation | Waterfront & Privacy | MyFence.com"
        description="Fence installation in Angle Lake, SeaTac. Waterfront and near-lake cedar, hogwire & hybrid fencing. Moisture-resistant materials and views-conscious designs. Free quotes. (253) 455-1885."
        canonical={canonical}
        structuredData={structuredData}
      />

      <main className="min-h-screen">
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/seatac"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to SeaTac
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving Angle Lake, SeaTac WA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Angle Lake Fence Installation</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Waterfront and near-lake fencing for Angle Lake—moisture-resistant materials, privacy where you want it, and views-conscious designs that fit the neighborhood.
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
                <GoogleBusinessMap city="Angle Lake" state="Washington" radiusMiles={3} zoom={12} showBusinessInfo={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges Bar */}
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

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Fencing for Angle Lake's Waterfront & Near-Lake Lots</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Angle Lake sits in the heart of SeaTac, with waterfront homes and properties near Angle Lake Park. Fence choices here need to handle lake-side moisture, optional sound buffering from the airport corridor, and the desire to keep views of the water and park where it makes sense.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We install cedar privacy, hogwire, and hybrid aluminum/cedar systems throughout Angle Lake and SeaTac. Our Fence Genius process ensures precise measurements and efficient installation, and we use marine-grade hardware and moisture-resistant practices so your fence holds up to Puget Sound weather.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Angle Lake Homeowners Choose MyFence.com</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Waterfront-Ready Materials</h3>
                      <p className="text-muted-foreground">We specify cedar and hybrid systems with marine-grade fasteners and optional Post-on-Pipe so posts and framework last in lake-adjacent moisture.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Efficient, Low-Disruption Install</h3>
                      <p className="text-muted-foreground">Panels are built off-site from Fence Genius measurements. Most Angle Lake projects are done in 1–2 days with a clean site when we leave.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Long-Term Confidence</h3>
                      <p className="text-muted-foreground">Every installation is backed by a {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty so you can enjoy your fence with peace of mind.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Privacy or Views—Your Choice</h3>
                      <p className="text-muted-foreground">We help you choose solid cedar for full privacy and noise buffer, or hogwire and hybrid for definition without blocking your view of the lake.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Local Reviews */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What Angle Lake Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We're close to the lake and wanted a fence that wouldn't rot out in a few years. They used cedar with the post-on-pipe option and it still looks great. Professional and on time."
                  </p>
                  <p className="text-sm font-medium">— James in Angle Lake</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Wanted to keep our view of the water but add some definition and safety for the kids. The hogwire fence was the perfect fit. Clean install and they left the yard spotless."
                  </p>
                  <p className="text-sm font-medium">— Maria in Angle Lake</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Work in Angle Lake & SeaTac
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We've completed fence projects throughout Angle Lake and the SeaTac area—cedar privacy, hogwire, and hybrid installations for waterfront and near-lake properties.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                      alt="6' cedar privacy fence in Angle Lake, SeaTac"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">6' Cedar Privacy</h3>
                    <p className="text-sm text-muted-foreground">Angle Lake waterfront lot</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/6_%20Black%20Hogwire/IMG_7356.webp?updatedAt=1762037826604"
                      alt="Hogwire fence in Angle Lake"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hogwire with Cedar Frame</h3>
                    <p className="text-sm text-muted-foreground">View-friendly perimeter</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png"
                      alt="Hybrid aluminum cedar fence in Angle Lake"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hybrid Aluminum/Cedar</h3>
                    <p className="text-sm text-muted-foreground">Low-maintenance near the lake</p>
                  </div>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                <Link href="/gallery" className="text-primary hover:underline">View full gallery</Link> for more SeaTac-area projects.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Featured Angle Lake Installation
              </h2>
              <Card className="p-6 md:p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <OptimizedImage
                    src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                    alt="Featured Angle Lake installation: cedar fence, SeaTac"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  An Angle Lake homeowner near the lake needed a privacy fence that could handle damp soil and occasional splash. We installed a 6' cedar privacy fence with marine-grade stainless fasteners and our Post-on-Pipe upgrade so no wood touched the ground. The project included a gate for side access and followed SeaTac's 6-foot rear-yard height. Total linear footage was 155 feet; installation was completed in two days. The fence is under our {WARRANTY_CONSTANTS.YEARS}-year warranty and built for waterfront conditions.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Style:</strong> Cedar privacy, Post-on-Pipe · <strong>Location:</strong> Angle Lake, SeaTac
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Angle Lake–Specific Fencing Considerations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Angle Lake Waterfront Moisture & Drainage</h3>
                  <p className="text-muted-foreground leading-relaxed">Properties near the lake or with seasonal wet soil need posts and hardware that resist moisture. We use pressure-treated or Post-on-Pipe systems and marine-grade fasteners so your fence lasts without early rot or rust.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Angle Lake Privacy vs. Views</h3>
                  <p className="text-muted-foreground leading-relaxed">Many Angle Lake lots want a balance—privacy from the street or neighbors without blocking the view of the water. We help you place solid cedar where it matters and hogwire or hybrid where you want to keep sightlines open.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Angle Lake SeaTac Code & Setbacks</h3>
                  <p className="text-muted-foreground leading-relaxed">SeaTac fence height and setback rules apply in Angle Lake. We design to comply with front 4 ft, side/rear 6 ft limits and any critical-area or shoreline rules so your project stays permitted and neighbor-friendly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Fence Installation Cost in Angle Lake
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fencing is an investment in your Angle Lake property. Below are typical ranges; your exact price depends on linear footage, style, and site access.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $44–$65 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $40–$55 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$66 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Post-on-Pipe and waterfront prep may affect cost. Get an exact quote for your Angle Lake property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Angle Lake property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Fence Styles */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Angle Lake</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Full privacy and sound buffer for Angle Lake lots. Marine-grade hardware and optional Post-on-Pipe for lake-side durability. Board-on-board or picture-frame to match your home.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Keeps your view of Angle Lake and the park. Cedar frame with black or galvanized mesh; secure for kids and pets while staying open and low-maintenance.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Low-maintenance for waterfront living. Black aluminum panels in cedar frame; no staining, built for Puget Sound moisture. Great for second homes or busy families.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <VirtualQuoteTool fenceStyleName="Angle Lake SeaTac fence" />

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Angle Lake Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Angle Lake Site Assessment</h3>
                  <p className="text-muted-foreground">We evaluate lot lines, moisture and drainage, view priorities, and SeaTac code constraints. Fence Genius captures precise measurements for custom panels.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Angle Lake Design & Material Selection</h3>
                  <p className="text-muted-foreground">Choose cedar, hogwire, or hybrid with guidance for waterfront durability and views. We confirm height and placement with SeaTac rules before fabrication.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">Panels are built off-site from Fence Genius measurements so installation is faster and cleaner on your property.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Angle Lake Installation</h3>
                  <p className="text-muted-foreground">Our crew completes the build with careful alignment and secure post setting. Most Angle Lake projects finish in 1–2 days.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">We review the finished fence with you and activate your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby SeaTac Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout SeaTac. If you're in Angle Lake, we also serve McMicken Heights, Bow Lake, Riverton, Madrona, and the rest of the SeaTac area.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seatac">SeaTac overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seatac/bow-lake">Bow Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/seatac/mcmicken-heights">McMicken Heights</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas">All service areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Angle Lake Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">Same-day estimates available in Angle Lake. Book a free consultation with our SeaTac fencing team and get a clear plan for your project.</p>
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

export default AngleLakePage;
