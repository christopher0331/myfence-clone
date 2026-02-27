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
  Mountain,
  HardHat,
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import OptimizedImage from "@/components/OptimizedImage";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/bonney-lake/lake-tapps";
const META_TITLE =
  "Lake Tapps Fence Installation | Bonney Lake Area | MyFence.com";
const META_DESCRIPTION =
  "Fence installation near Lake Tapps and Bonney Lake. Cedar, hogwire & hybrid fencing for lake-adjacent and plateau lots. Volcanic-soil experts. Free quotes. (253) 455-1885.";

const LakeTappsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Lake Tapps, Bonney Lake",
    pageTitle: "Lake Tapps Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence near Lake Tapps?",
        answer:
          "Bonney Lake and Pierce County generally don't require building permits for residential fences under 8 feet, but you must meet zoning and setback rules. Lake Tapps area properties may have covenants; we can help verify requirements for your address.",
      },
      {
        question: "What fence materials hold up best in Lake Tapps' climate?",
        answer:
          "Western Red Cedar with stainless steel fasteners is ideal for the wet, freeze-thaw cycles near Lake Tapps. We avoid vinyl (brittle in cold) and use cedar, hogwire, or our hybrid aluminum/cedar system—all proven in Pierce County conditions.",
      },
      {
        question: "How much does fence installation cost near Lake Tapps?",
        answer:
          "Lake Tapps and Bonney Lake area fence installation typically runs $42–$65 per linear foot depending on style, soil conditions, and lot size. Rocky or volcanic soil can add 10–15%. Use our Virtual Quote Tool for an estimate, then we'll provide exact pricing after an on-site measurement.",
      },
      {
        question: "How do you handle rocky or volcanic soil near Lake Tapps?",
        answer:
          "The area sits on lahar deposits—we hit rock and compacted material often. Our crews use hydraulic augers and rock bars and adjust post placement when we hit boulders. Local experience prevents the delays that catch other contractors off guard.",
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
                    Serving Lake Tapps & Bonney Lake Area WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Lake Tapps Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fence specialists for Lake Tapps and the Bonney Lake plateau. Cedar, hogwire, and hybrid fencing built for larger lots, volcanic soil, and Pierce County weather.
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
                  city="Lake Tapps"
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
                Fencing for Lake Tapps & the Bonney Lake Plateau
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Lake Tapps and the older neighborhoods along the Bonney Lake plateau offer larger acreage, lake views, and a mix of established homes with fewer HOA restrictions than the newer master-planned communities. That freedom also means you need a fence contractor who knows the area: volcanic soil that breaks drill bits, freeze-thaw cycles that stress materials, and deer that treat unfenced gardens as buffets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout the Lake Tapps and Bonney Lake area—from lake-adjacent lots to plateau properties. We use Fence Genius for precise measurements, marine-grade stainless fasteners for our wet climate, and techniques that work in rocky soil. Our cedar, hogwire, and hybrid systems are built for Pierce County and the specific challenges of lake-adjacent and plateau living.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Lake Tapps Area Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <HardHat className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Volcanic-Soil Experts</h3>
                      <p className="text-muted-foreground">
                        We hit rock and lahar deposits on nearly every Bonney Lake–area job. Our crews use augers and rock bars and adjust post placement instead of fighting immovable stone—no surprise change orders.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lake-Adjacent Ready</h3>
                      <p className="text-muted-foreground">
                        Properties near the water get extra moisture and freeze-thaw stress. We use cedar and stainless hardware that hold up; no galvanized fasteners that rust out in years.
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
                        Full craftsmanship warranty on materials and labor. We stand behind every Lake Tapps and Bonney Lake area fence we build.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fence Genius Precision</h3>
                      <p className="text-muted-foreground">
                        Custom panels built off-site from precise measurements—30–50% faster installs and less disruption on your larger Lake Tapps lot.
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
                What Lake Tapps Area Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We're near the lake and had a lot of rock when they dug. MyFence.com knew exactly how to handle it—adjusted a couple post locations and the fence went in clean. Cedar looks great and they were on time."
                  </p>
                  <p className="text-sm font-medium">— Mike near Lake Tapps</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Big lot on the plateau. They measured everything, panels showed up ready to go, and the crew finished in two days. No deer getting into the garden now. Very happy with the fence."
                  </p>
                  <p className="text-sm font-medium">— Lisa in Bonney Lake</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Project Gallery */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Work in Lake Tapps & Bonney Lake
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We've completed fence projects throughout the Lake Tapps and Bonney Lake area—cedar privacy, hogwire, and hybrid installations built for Pierce County soil and weather.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                      alt="6' cedar privacy fence installation in Bonney Lake area"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">6' Cedar Privacy</h3>
                    <p className="text-sm text-muted-foreground">Lake Tapps area property</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/6_%20Black%20Hogwire/IMG_7356.webp?updatedAt=1762037826604"
                      alt="Hogwire with cedar frame fence near Lake Tapps"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hogwire with Cedar Frame</h3>
                    <p className="text-sm text-muted-foreground">Open views, lake-area style</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png"
                      alt="Cedar aluminum hybrid fence in Bonney Lake area"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hybrid Aluminum/Cedar</h3>
                    <p className="text-sm text-muted-foreground">Low-maintenance plateau</p>
                  </div>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                <Link href="/gallery" className="text-primary hover:underline">View full gallery</Link> for more Bonney Lake–area projects.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Case Study Spotlight */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Featured Lake Tapps Area Installation
              </h2>
              <Card className="p-6 md:p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <OptimizedImage
                    src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                    alt="Featured Lake Tapps area installation: cedar privacy fence, Bonney Lake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A homeowner near Lake Tapps needed to replace a failing fence on a larger lot with rocky soil. We installed a 6' cedar privacy fence with marine-grade stainless fasteners and pressure-treated posts. The crew hit volcanic material in several post locations and adjusted placement without extra charge. Total linear footage was 220 feet; installation was completed in two days. The fence is under our {WARRANTY_CONSTANTS.YEARS}-year warranty and built to last in Pierce County's freeze-thaw and wet conditions.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Style:</strong> Cedar privacy · <strong>Location:</strong> Lake Tapps / Bonney Lake area
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. Lake Tapps–Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Lake Tapps–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Lake Tapps Volcanic Soil & Rock</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Bonney Lake area sits on Mount Rainier lahar deposits—we hit rock and compacted material on nearly every job. Our crews carry hydraulic augers and rock bars and adjust post placement when we encounter boulders rather than fighting immovable stone. This local experience prevents the delays and change orders that catch other contractors off guard.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Lake Tapps & Plateau Climate</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Freeze-thaw cycles and wet winters stress fences. Vinyl becomes brittle; we've replaced cracked vinyl throughout the older neighborhoods. We install cedar, hogwire, and hybrid aluminum/cedar—materials that hold up in Pierce County. Stainless fasteners resist rust from rain and lake-adjacent moisture.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Lake Tapps Lot Size & Deer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Lake Tapps and plateau lots are larger with gardens and landscaping. Deer are common; a well-built fence defines the property and protects planting beds. We can run longer stretches efficiently with Fence Genius–prebuilt panels and experienced crews.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Permits & Covenants Near Lake Tapps</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Residential fences under 8 feet generally don't require a Bonney Lake building permit, but you must comply with setbacks and zoning. Some Lake Tapps area properties have covenants; we can help verify requirements for your address so your project stays compliant.
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
                Fence Installation Cost Near Lake Tapps
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fencing is an investment in your Lake Tapps or Bonney Lake property. Below are typical ranges; your exact price depends on linear footage, style, and soil conditions.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $42–$62 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $38–$55 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $52–$65 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Rocky or volcanic soil may add 10–15%. Get an exact quote for your Lake Tapps area property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Lake Tapps area property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles Near Lake Tapps</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The go-to for Lake Tapps and Bonney Lake backyards. Cedar holds up to rain and cold; stainless hardware won't rust. Perfect for privacy and deer control.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Rustic look with open views—fits the lake-area vibe. Cedar frame with black or galvanized mesh. Defines the property without blocking the view.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Low-maintenance for busy Lake Tapps homeowners. Black aluminum panels in a cedar frame; no staining, and it stands up to freeze-thaw and moisture.
                  </p>
                  <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary text-sm font-medium hover:underline">
                    View hybrid system →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Lake Tapps Bonney Lake fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Lake Tapps Area Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Lake Tapps Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your property to measure the fence line, note soil and rock conditions, and identify any covenant or setback requirements. Fence Genius captures precise measurements.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Approvals</h3>
                  <p className="text-muted-foreground">
                    You choose style and materials. We prepare any needed documentation for Bonney Lake / Pierce County and get your approval before ordering materials.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements. Materials selected for Pierce County weather and soil conditions.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Lake Tapps Area Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew installs with the right tools for rocky soil. Most Lake Tapps and Bonney Lake area projects finish in 1–3 days. We clean up and walk you through the finished fence.
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
                Also Serving Nearby Bonney Lake Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout the Bonney Lake area. If you're near Lake Tapps, we also serve Tehaleh, Falling Water, Mountain Creek, and Downtown Bonney Lake.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake">Bonney Lake overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/lower-tehaleh">Tehaleh</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/falling-water">Falling Water</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake/mountain-creek">Mountain Creek</Link>
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
                Ready to Fence Your Lake Tapps Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available. Get a free on-site quote from Bonney Lake's fence specialists—we'll assess your lot, soil, and recommend the right materials for the area.
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

export default LakeTappsPage;
