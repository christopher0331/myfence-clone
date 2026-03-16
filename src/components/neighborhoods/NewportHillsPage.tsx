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
  Droplets,
} from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import OptimizedImage from "@/components/OptimizedImage";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/bellevue/newport-hills";
const META_TITLE = "Newport Hills Fence Installation | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Newport Hills, Bellevue. Steep-slope experts for wooded lots. Cedar, hogwire & hybrid fencing with reinforced posts and drainage. Free quotes. (253) 455-1885.";

const NewportHillsPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Newport Hills, Bellevue",
    pageTitle: "Newport Hills Bellevue Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Newport Hills, Bellevue?",
        answer:
          "Bellevue typically requires a building permit for fences over 6 feet. Newport Hills properties may also be subject to HOA or covenant review. MyFence.com handles permit research and can prepare any required documentation for your Newport Hills lot.",
      },
      {
        question: "What fence styles work best on Newport Hills' steep, wooded lots?",
        answer:
          "Cedar privacy with stepped or racked panels handles slope changes; we use Fence Genius to map terrain and build custom panels. Hogwire and hybrid aluminum/cedar also perform well. Reinforced posts and deeper footings are standard for Newport Hills' hillside conditions.",
      },
      {
        question: "How much does fence installation cost in Newport Hills, Bellevue?",
        answer:
          "Newport Hills fence installation typically runs $48–$72 per linear foot depending on style, slope complexity, and tree/root work. Steep terrain and drainage integration can add 10–20%. Use our Virtual Quote Tool for an estimate, then we'll provide exact pricing after an on-site assessment.",
      },
      {
        question: "How do you protect mature trees during fence installation in Newport Hills?",
        answer:
          "We plan post placement to avoid major roots where possible, use compact equipment and hand-digging near trees, and work with you to preserve critical landscaping. Our Fence Genius measurement helps us minimize impact on your wooded lot.",
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
              href="/service-areas/bellevue"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bellevue
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Newport Hills, Bellevue WA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Newport Hills Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Wooded hillside fence specialists for Newport Hills. Cedar, hogwire, and hybrid fencing engineered for steep slopes, tall trees, and Bellevue's wet climate.
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
                  city="Bellevue"
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
                Fencing for Newport Hills' Wooded Hillside Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Newport Hills sits on Bellevue's southeastern edge, a wooded community of winding streets, steep lots, and mature trees. Properties along Newport Way, 119th Avenue SE, and the streets that climb toward the Cougar Mountain foothills face slope challenges, drainage concerns, and the need for fences that work around 50+ year old evergreens and root systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has installed fences throughout Newport Hills—from flatter lots near the commercial corridor to steep backyards with significant grade change. We use Fence Genius to map terrain for custom slope-following panels, reinforce posts for hillside stability, and plan installations that protect your trees and landscaping. Our cedar, hogwire, and hybrid systems are built for Bellevue's humidity and the extra moisture that wooded hillside lots can hold.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Newport Hills Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Steep-Slope Specialists</h3>
                      <p className="text-muted-foreground">
                        Fence Genius terrain mapping and custom racked or stepped panels that follow Newport Hills' grades. Deeper footings and reinforced posts for long-term stability.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tree & Landscaping Care</h3>
                      <p className="text-muted-foreground">
                        Careful post placement and hand-digging near roots. We protect your mature trees and gardens so your Newport Hills lot stays intact.
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
                        Full craftsmanship warranty on materials and labor—including hillside and wooded-lot installations. We stand behind every Newport Hills fence we build.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Droplets className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Drainage-Integrated Design</h3>
                      <p className="text-muted-foreground">
                        We account for water flow on slopes so your fence doesn't create pooling or erosion. Proper grading and post placement for Newport Hills' wet seasons.
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
                What Newport Hills Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our backyard in Newport Hills drops off pretty steep. MyFence.com measured everything and the panels followed the slope perfectly. They were also careful around our big fir trees. Very professional."
                  </p>
                  <p className="text-sm font-medium">— David in Newport Hills</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We needed a fence that could handle the wet soil and slope. They used deeper posts and the cedar looks great. No issues after two winters. Would recommend to any Newport Hills neighbor."
                  </p>
                  <p className="text-sm font-medium">— Jennifer in Newport Hills</p>
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
                Our Work in Newport Hills & Bellevue
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We've completed hillside and wooded-lot fence projects throughout Newport Hills and surrounding Bellevue neighborhoods. Cedar privacy, hogwire, and hybrid installations built for slope and moisture.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                      alt="6' cedar privacy fence installation in Bellevue hillside"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">6' Cedar Privacy</h3>
                    <p className="text-sm text-muted-foreground">Hillside Bellevue property</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/6_%20Black%20Hogwire/IMG_7356.webp?updatedAt=1762037826604"
                      alt="Hogwire with cedar frame fence on sloped lot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hogwire with Cedar Frame</h3>
                    <p className="text-sm text-muted-foreground">Slope-friendly open design</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-muted/50">
                    <OptimizedImage
                      src="/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png"
                      alt="Cedar aluminum hybrid fence on wooded lot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Hybrid Aluminum/Cedar</h3>
                    <p className="text-sm text-muted-foreground">Low-maintenance hillside</p>
                  </div>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                <Link href="/gallery" className="text-primary hover:underline">View full gallery</Link> for more Bellevue-area projects.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Case Study Spotlight */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Featured Newport Hills Installation
              </h2>
              <Card className="p-6 md:p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <OptimizedImage
                    src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/IMG_6977.webp?updatedAt=1762037835797"
                    alt="Featured Newport Hills installation: cedar privacy fence on sloped wooded lot, Bellevue"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Newport Hills homeowner near 119th Avenue SE needed to replace a failing fence on a steep, wooded lot. We installed a 6' cedar privacy fence with stepped panels that followed the grade, marine-grade stainless fasteners, and posts set in concrete with deeper footings on the slope. The project required hand-digging near several mature trees to avoid major roots. Total linear footage was 165 feet; installation was completed in two days. The fence is under our {WARRANTY_CONSTANTS.YEARS}-year warranty and built to last in Newport Hills' wet, wooded conditions.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Style:</strong> Cedar privacy, stepped · <strong>Location:</strong> Newport Hills, Bellevue
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. Newport Hills–Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Newport Hills–Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Newport Hills Terrain & Slope</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many Newport Hills lots have significant grade change from street to back property line. Standard fence panels don't follow slope—you get gaps or awkward steps. We use Fence Genius to capture the exact terrain and build racked or stepped panels that follow your grade. Deeper post holes (36–48 inches) and extra concrete are standard on slopes to resist lateral pressure and frost heave.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Newport Hills Drainage & Moisture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wooded hillside lots hold moisture longer than flat, open yards. We position posts to avoid creating water traps and use pressure-treated or steel posts where soil stays wet. Bellevue's dual-lake microclimate means 15–20% higher humidity; we use marine-grade stainless hardware so fasteners don't rust and cedar gets the right joinery for long life.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Newport Hills Trees & Roots</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mature firs and cedars are part of what makes Newport Hills desirable. We plan post placement to avoid major roots where possible, use compact equipment and hand-digging near trees, and never cut significant roots without your approval. Protecting your landscaping is part of every Newport Hills quote.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Permits & HOAs in Newport Hills</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bellevue generally requires a building permit for fences over 6 feet. Some Newport Hills areas have covenants or HOAs with design review. We can research requirements for your address and prepare any needed submissions so your project stays compliant.
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
                Fence Installation Cost in Newport Hills
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Hillside and wooded-lot fencing is an investment in your property. Below are typical ranges for Newport Hills and Bellevue; your exact price depends on linear footage, style, slope, and tree/root work.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $48–$68 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $42–$58 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">Hybrid aluminum/cedar:</strong> $55–$72 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Steep slope and tree/root work may add 10–20%. Get an exact quote for your Newport Hills property with our free on-site measurement.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Newport Hills property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Newport Hills</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The go-to for Newport Hills backyards. Stepped or racked panels follow your slope. Board-on-board adds privacy; stainless hardware stands up to Bellevue's humidity.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Lighter wind load on hillsides while defining the property line. Cedar frame with black or galvanized mesh. Fits the wooded Newport Hills look.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Aluminum/Cedar</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Strong and low-maintenance for busy Newport Hills homeowners. Black aluminum panels in a cedar frame; no staining, and it handles slope and moisture well.
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
        <VirtualQuoteTool fenceStyleName="Newport Hills Bellevue fence" />

        {/* 12. Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Newport Hills Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Newport Hills Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your property to measure the fence line, map slope and soil, note trees and roots, and identify any HOA or permit requirements. Fence Genius captures precise terrain data.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Approvals</h3>
                  <p className="text-muted-foreground">
                    You choose style and materials. We prepare any needed HOA or permit paperwork for Bellevue/Newport Hills and get your approval before ordering materials.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site from Fence Genius measurements. Slope-following racked or stepped panels; materials selected for hillside and moisture conditions.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Newport Hills Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew installs with minimal impact on trees and landscaping. Most Newport Hills projects finish in 1–3 days. We clean up and walk you through the finished fence.
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
                Also Serving Nearby Bellevue Neighborhoods
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout Bellevue. If you're near Newport Hills, we also serve Somerset, Factoria, Eastgate, Crossroads, Wilburton, and West Bellevue.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue">Bellevue overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/somerset">Somerset</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bellevue/sherwood-forest">Sherwood Forest</Link>
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
                Ready to Enhance Your Newport Hills Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Newport Hills. Get a free on-site quote from Bellevue's hillside fence specialists—we'll assess your slope, trees, and recommend the right materials for your lot.
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

export default NewportHillsPage;
