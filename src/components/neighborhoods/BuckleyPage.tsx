"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  CheckCircle2,
  Shield,
  Star,
  Award,
  ArrowLeft,
  MapPin,
  Phone,
  Mountain,
  TreePine,
  Wind,
  Fence,
} from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

const CANONICAL = "https://myfence.com/service-areas/enumclaw/buckley";
const META_TITLE = "Buckley Fence Installation | Rural & Mountain Properties | MyFence.com";
const META_DESCRIPTION =
  "Fence installation in Buckley, WA. Cedar, hogwire, and hybrid systems built for rural lots, mountain weather, and the White River corridor. Free quotes. (253) 455-1885.";

const BUCKLEY_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Foothills Trail",
    url: "https://piercecountywa.gov/3018/Foothills-Trail",
    description:
      "A paved multi-use trail stretching nearly 18 miles through the White River valley, connecting Buckley to Orting and popular with cyclists, runners, and families.",
  },
  {
    name: "White River County Park",
    url: "https://piercecountywa.gov/facilities/Facility/Details/White-River-County-Park-89",
    description:
      "A riverside park along the White River offering boat launches, fishing access, picnic areas, and sweeping views of the surrounding mountain foothills.",
  },
  {
    name: "Buckley Log Show",
    url: "https://www.buckleylogshow.com/",
    description:
      "A beloved annual tradition celebrating the region's timber heritage with logging competitions, chainsaw carving, and community events every summer.",
  },
  {
    name: "Federation Forest State Park",
    url: "https://parks.wa.gov/find-parks/state-parks/federation-forest-state-park",
    description:
      "Old-growth forest preserved just east of Buckley on the Highway 410 corridor, with interpretive trails through ancient stands of Douglas fir and cedar.",
  },
  {
    name: "Lake Tapps Regional Park",
    url: "https://www.piercecountywa.gov/facilities/Facility/Details/Lake-Tapps-Regional-Park-82",
    description:
      "A short drive west, this park provides boating, swimming, and shoreline recreation on one of Pierce County's largest freshwater lakes.",
  },
];

const BuckleyPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Buckley, WA",
    pageTitle: "Buckley Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Buckley, WA?",
        answer:
          "Buckley falls under City of Buckley regulations, which generally require a permit for fences over 6 feet in height. Properties in unincorporated Pierce County nearby follow county rules. MyFence.com researches permit requirements for your specific address and handles the paperwork.",
      },
      {
        question: "What fence styles work best for Buckley's rural and mountain properties?",
        answer:
          "Cedar privacy fences are popular for residential lots; hogwire works well for rural acreage and livestock containment; and our hybrid steel/cedar system handles mountain weather without ongoing maintenance. Fence Genius maps your terrain so panels fit your slope perfectly.",
      },
      {
        question: "How much does fence installation cost in Buckley?",
        answer:
          "Buckley fence installation typically runs $42–$72 per linear foot depending on style, materials, and slope or terrain complexity. Rural acreage projects with longer runs are often more cost-efficient per foot. Get an exact quote with our free on-site estimate.",
      },
      {
        question: "Can you install fencing on rural acreage lots near Buckley?",
        answer:
          "Yes — rural acreage is a specialty of ours in the Enumclaw corridor. We handle long fence runs, agricultural-style enclosures, wildlife-resistant designs, and slope-following installations across larger Pierce and King County properties near Buckley.",
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
              href="/service-areas/enumclaw"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Enumclaw
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    Serving Buckley, WA — Pierce County Foothills
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Buckley Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cedar, hogwire, and hybrid fence systems built for Buckley's rural lots, mountain weather, and the White River corridor. Snow-load rated, wildlife-resistant, and made to last.
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
                  city="Buckley"
                  state="WA"
                  radiusMiles={8}
                  zoom={11}
                  showBusinessInfo={false}
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
                Mountain-Foothills Fencing Along the White River Corridor
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Buckley sits where the Cascade foothills meet the White River valley, creating a landscape of mixed residential neighborhoods, rural acreage, and pastoral properties that demand fencing built for real conditions. Streets like River Road, Mundy Loss Road, and the rural properties spreading east toward Highway 410 range from flat agricultural land to sloped lots with mountain exposure. Snow accumulation, high winds off the ridgeline, and freeze-thaw cycles are real design factors here — not afterthoughts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com has built fences throughout the Enumclaw plateau and the communities along the Highway 410 corridor, including Buckley's mix of tight residential lots and sprawling rural properties. Our Fence Genius technology maps your terrain precisely so panels follow the grade — critical for Buckley's varied topography. Whether you need privacy fencing for a quarter-acre lot in town or a long agricultural run on the outskirts, we engineer every installation for the conditions it will actually face.
              </p>
            </div>
          </div>
        </section>

        {/* Optional: Video Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Buckley Area Fencing
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    See our work in the Enumclaw and Buckley corridor. Steel post systems, cedar framing, and hybrid panels built for the mountain climate — engineered to handle snow loads, wind exposure, and the dramatic terrain changes that define this part of Pierce County.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From privacy fencing on in-town residential lots to agricultural enclosures on larger rural properties along the White River, every project follows the same standard: Fence Genius precision planning, no subcontracting, and a {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty.
                  </p>
                  <Button asChild size="lg" variant="default">
                    <Link href="/quote">Get a Free Quote</Link>
                  </Button>
                </div>
                <div className="w-full max-w-[340px] mx-auto">
                  <AspectRatio ratio={9 / 16} className="rounded-xl overflow-hidden shadow-elevated">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/OVtjDbHHbtY?controls=0&playsinline=1&rel=0&modestbranding=1"
                      title="Buckley area fence installation by MyFence.com"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Buckley Homeowners Choose MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mountain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Mountain-Weather Engineering</h3>
                      <p className="text-muted-foreground">
                        Snow loads, freeze-thaw cycles, and Cascade wind exposure are factored into every Buckley installation. Deeper post footings, reinforced framing, and materials rated for elevation.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Fence className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Rural Acreage Specialists</h3>
                      <p className="text-muted-foreground">
                        Buckley's larger rural lots demand long fence runs and agricultural-grade durability. We handle acreage efficiently with cost-effective approaches that don't cut corners on materials.
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
                        Proximity to the Cascade foothills means deer, coyote, and other wildlife pressure. We build taller, sturdier enclosures and recommend systems that hold up to the wildlife activity common in the Buckley corridor.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Wind className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                      <p className="text-muted-foreground">
                        Every Buckley fence we install carries our full {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty. We stand behind our work in mountain conditions — no exceptions.
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
                What Buckley-Area Homeowners Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We have a big rural lot out near Buckley and needed a long fence run to contain our dogs and keep deer out. MyFence.com came out, measured everything precisely, and built a solid cedar fence that's held up through two winters so far. Professional from start to finish."
                  </p>
                  <p className="text-sm font-medium">— Mark in Buckley</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Our yard has a pretty good slope toward the back and we were worried about gaps under the fence line. They used their Fence Genius system to follow the grade and it looks perfect — no gaps, clean lines. Really happy with how it turned out."
                  </p>
                  <p className="text-sm font-medium">— Carrie near Enumclaw/Buckley</p>
                  <p className="text-xs text-muted-foreground">Google review, 2025</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Virtual Quote Tool */}
        <LeadCaptureTabs fenceStyleName="Buckley WA fence" />

        {/* 6. Project Gallery */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Recent Projects in the Enumclaw & Buckley Area
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Pictrue%20Frame%20Fence%20Hero.webp?updatedAt=1762037742056&tr=w-480,q-80"
                      alt="Cedar picture frame fence installed on rural lot near Buckley WA"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">6' Cedar Privacy Fence</h3>
                    <p className="text-sm text-muted-foreground">Rural residential lot, Enumclaw corridor</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://ik.imagekit.io/xft9mcl5v/service-area-photos/Maple-Valley/Daybreak-at-River-Ridge-Steel-Cedar-Hybrid-4.webp?tr=w-480,q-80"
                      alt="Steel and cedar hybrid fence installed near Buckley WA"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Steel & Cedar Hybrid</h3>
                    <p className="text-sm text-muted-foreground">Zero-maintenance, mountain-rated</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/6_%20Black%20Hogwire/IMG_7356.webp?updatedAt=1762037826604&tr=w-480,q-80"
                      alt="Black hogwire cedar frame fence on sloped rural property near Buckley"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Black Hogwire</h3>
                    <p className="text-sm text-muted-foreground">Sloped rural lot, open-view design</p>
                  </div>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                <Link href="/gallery" className="text-primary hover:underline">View our full project gallery</Link> for more Cascade foothills installations.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Case Study */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Featured Installation — Buckley Rural Property
              </h2>
              <Card className="p-6 md:p-8">
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/3%20Rail%20Picture%20Frame%20Pre-Stained%20Fence%20Fence%20Genius.webp?updatedAt=1762037642699&tr=w-900,q-80"
                    alt="Cedar fence installation on rural Buckley property near the White River corridor"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Buckley homeowner on a half-acre lot south of SR-410 needed a full perimeter fence to contain pets and define their property boundary along a sloped back yard. We used Fence Genius to map the grade and built cedar privacy panels that followed the terrain continuously — no stepped gaps, no raised sections where animals could squeeze through. Posts were set at 48-inch depth with extra concrete for freeze-thaw stability. The project ran approximately 220 linear feet and was completed over two days. The fence carries our {WARRANTY_CONSTANTS.YEARS}-year workmanship warranty and is built to handle the Buckley corridor's mountain winters.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Style:</strong> Cedar privacy, grade-following · <strong>Location:</strong> Buckley, WA
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. Buckley-Specific Considerations */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Buckley-Specific Fencing Considerations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Buckley's Terrain & Grade Variation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Buckley's residential areas range from flat valley-floor lots near the White River to moderately sloped properties climbing toward the foothills. Standard prefab fence panels fail on grade — they leave gaps or create awkward steps. We use Fence Genius to map your exact terrain and build custom-racked panels that contour to your land. Whether you're on a flat lot on Main Street or a hillside property along River Road, the fence follows the ground rather than fighting it.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Mountain Weather & Snow Loads</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Buckley receives meaningfully more precipitation than the lowland Puget Sound and sees real snow accumulation in winter. Snow loading and freeze-thaw cycles stress fence posts and boards differently than mild coastal climates. We address this with deeper footings, reinforced post installation, and wood species and hardware selected for temperature cycling. A fence that holds up in Maple Valley may need different engineering to last in Buckley.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wildlife Pressure Near the Foothills</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deer movement through Buckley residential areas — especially properties near the Foothills Trail corridor and rural outskirts — is a real consideration when planning fence height and build method. We recommend 6-foot minimum privacy fencing for deer deterrence and can discuss taller options for problem areas. Hogwire systems with solid cedar bases also work well for containing pets while deterring wildlife from entering.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Permits in Buckley & Pierce County</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fence permitting in Buckley depends on whether your property falls within the Buckley city limits or unincorporated Pierce County. City properties generally require a permit for fences over 6 feet; county rules vary by zone. We research requirements for your specific address before starting any project and can assist with permit applications to keep your installation compliant and on schedule.
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
                Fence Installation Cost in Buckley
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Buckley fence costs vary based on style, linear footage, terrain complexity, and post depth. Rural acreage projects with longer runs are typically more efficient per linear foot.
              </p>
              <Card className="p-6 mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4 border-b pb-3">
                    <span><strong className="text-foreground">Cedar privacy (6'):</strong> $45–$65 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b pb-3">
                    <span><strong className="text-foreground">Hogwire (cedar frame):</strong> $40–$58 per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b pb-3">
                    <span><strong className="text-foreground">Steel & Cedar Hybrid:</strong> $80+ per linear foot</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span><strong className="text-foreground">3-Rail Picture Frame:</strong> $50–$70 per linear foot</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Slope, soil depth, and wildlife-rated post heights may affect pricing. Contact us for a free on-site estimate for your Buckley property.
                </p>
              </Card>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/quote">Get an exact quote for your Buckley property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Popular Fence Styles */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Fence Styles in Buckley</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Cedar Privacy Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    The most-requested style in Buckley for residential lots. Grade-following panels, board-on-board privacy, and stainless hardware that handles freeze-thaw cycling.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Great for rural acreage and pet containment on Buckley's larger lots. Cedar frame with black or galvanized mesh; lower wind resistance on exposed properties.
                  </p>
                  <Link href="/fence-styles/black-hogwire-fence" className="text-primary text-sm font-medium hover:underline">
                    View hogwire styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Steel & Cedar Hybrid</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Zero-maintenance panels in a cedar frame — ideal for Buckley's wet winters and mountain sun. Never needs staining and qualifies for a 30-year warranty with steel post upgrade.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Buckley Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Buckley Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your property to walk the fence line, measure terrain with Fence Genius, assess soil and slope, note any wildlife or drainage factors, and check permit requirements for your specific Buckley address.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design & Permitting</h3>
                  <p className="text-muted-foreground">
                    You choose style, materials, and height. We prepare any required permit paperwork for Buckley city limits or Pierce County and get your approval before ordering materials.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Custom Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Panels are built off-site using precise Fence Genius measurements. Grade-following panels are cut to match your terrain. Post depth and concrete volumes are calculated for Buckley's soil and frost conditions.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Buckley Installation Day</h3>
                  <p className="text-muted-foreground">
                    Our crew handles everything — post setting, panel installation, and gate hardware. Most Buckley residential projects complete in 1–2 days. Rural acreage runs may extend to 3 days. We leave the site clean.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Final Walkthrough & {WARRANTY_CONSTANTS.YEARS}-Year Warranty</h3>
                  <p className="text-muted-foreground">
                    We walk the fence with you at completion to confirm everything meets your expectations. Your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty starts on installation day.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 14. Adjacent Neighborhoods */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Also Serving Nearby Enumclaw-Area Communities
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We install fences throughout the Enumclaw plateau and Highway 410 corridor, including Buckley, Black Diamond, Enumclaw, Green Valley, and surrounding Pierce and King County rural communities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/enumclaw">Enumclaw overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/black-diamond">Black Diamond</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/bonney-lake">Bonney Lake</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/sumner">Sumner</Link>
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
                Ready to Build Your Buckley Fence?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Same-day estimates available in Buckley. Get a free on-site quote from the mountain-foothills fence specialists — we'll assess your terrain, discuss styles, and provide exact pricing for your property.
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

      {/* 13. About the Area — full width outside main */}
      <AboutTheArea
        cityName="Enumclaw"
        neighborhoodName="Buckley"
        attractions={BUCKLEY_ATTRACTIONS}
        localLivingContent={
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Buckley is a Pierce County community of roughly 7,000 residents tucked between the White River and the rising terrain of the Cascade foothills. Families are served by the{" "}
              <a
                href="https://www.whiteriver.wednet.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                White River School District
              </a>
              , which draws students from Buckley, Enumclaw, and surrounding rural communities. The town's{" "}
              <a
                href="https://www.buckleylogshow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                annual Log Show
              </a>{" "}
              each summer remains one of the most distinctive community events in the county, celebrating the region's deep logging and timber heritage with competitions that draw crowds from across the South Sound.
            </p>
            <p>
              Outdoor life in Buckley revolves around the{" "}
              <a
                href="https://piercecountywa.gov/3018/Foothills-Trail"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Foothills Trail
              </a>{" "}
              — a paved multi-use path connecting the community to Orting and the broader Pierce County trail network — as well as fishing and recreation along the{" "}
              <a
                href="https://piercecountywa.gov/facilities/Facility/Details/White-River-County-Park-89"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                White River
              </a>
              . Residents are also within easy reach of{" "}
              <a
                href="https://parks.wa.gov/find-parks/state-parks/nolte-state-park"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Nolte State Park
              </a>{" "}
              and the{" "}
              <a
                href="https://www.nps.gov/mora/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-2 underline-offset-4"
              >
                Mount Rainier National Park
              </a>{" "}
              corridor via Highway 410, making it a natural base for hiking, skiing, and year-round mountain access.
            </p>
          </div>
        }
      />
    </>
  );
};

export default BuckleyPage;
