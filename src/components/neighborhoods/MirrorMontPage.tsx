"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
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
  "Fence installation in Mirrormont, in the Tiger Mountain foothills southeast of Issaquah. Cedar and hybrid fencing, with covenant review before wire mesh. Free quotes. (253) 455-1885.";

const MirrorMontPage = () => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: CANONICAL,
    neighborhoodName: "Mirrormont, Issaquah",
    pageTitle: "Mirrormont Issaquah Fence Installation",
    description: META_DESCRIPTION,
    faqItems: [
      {
        question: "Do I need a permit to build a fence in Mirrormont?",
        answer:
          "King County is the permitting authority. King County says fences 6 feet high or less do not need a building permit unless the property contains critical areas, and fences over 6 feet do (https://kingcounty.gov/en/dept/local-services/certificates-permits-licenses/permits/permits-inspections-codes-buildings-land-use/do-you-need-a-permit). Steep lots in the Tiger Mountain foothills can fall in that review. We research the parcel and file county paperwork when it is required. Fence plans still go to the Mirrormont Architectural Committee before installation.",
      },
      {
        question: "What fence styles are best for wildlife resistance in Mirrormont?",
        answer:
          "Cedar privacy fences with reinforced bottom rails and no-dig barriers deter deer and small animals. A hybrid aluminum/cedar system on steel posts adds impact resistance where larger animals pass through. Hogwire is wire mesh. The Mirrormont covenants do not allow chain-link or other wire mesh where it is visible from the adjacent road. The Architectural Committee may approve wire mesh in other locations. Submit the plan to the committee before panels are ordered.",
      },
      {
        question: "How much does fence installation cost for Mirrormont mountain properties?",
        answer:
          "Mirrormont fence costs carry a mountain premium due to steep terrain, access, and reinforced engineering. Cedar privacy typically runs $45–$65 per linear foot, hogwire $38–$55, and hybrid aluminum/cedar $55–$75. Wire mesh, including hogwire, still has to clear the Architectural Committee and cannot be visible from the adjacent road. Exact pricing depends on slope, access, and linear footage. Contact us for a free on-site estimate for your Tiger Mountain foothill property.",
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
                  Mountain fence specialists for Mirrormont in the Tiger Mountain foothills. Wildlife-resistant cedar and hybrid fencing for steep forested lots, with covenant review before any wire mesh.
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
                <Award className="h-5 w-5 text-primary" />
                {WARRANTY_CONSTANTS.YEARS}-Year Warranty
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
                Mirrormont is a wooded residential community in the Tiger Mountain foothills, southeast of Issaquah in unincorporated King County. Lots here are larger and forested, with steep driveways and grade changes along the property line. The{" "}
                <a
                  href="https://www.mirrormont.org/covenants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  Mirrormont Community Association covenants
                </a>{" "}
                require Architectural Committee approval before a fence is built. Chain-link and other wire mesh are not permitted where they can be seen from the adjacent road. The streets are{" "}
                <a
                  href="https://www.mirrormont.org/new-resident-faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  King County roads
                </a>
                . The foothill setting still asks more of a fence than a flat suburban lot.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com builds fences throughout Mirrormont and plans for what these lots demand: reinforced post foundations for steep grades, wildlife-resistant designs, and materials that hold up under the wetter forest canopy of the{" "}
                <a
                  href="https://www.mirrormont.org/park-committee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-2 underline-offset-2"
                >
                  Tiger Mountain foothills
                </a>
                . Fence Genius maps the grade so every panel follows the slope. Fence drawings go to the Architectural Committee before installation.
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
                        Fences built for deer, bears, and coyotes that move through the Tiger Mountain foothills. Reinforced bottom rails, no-dig barriers, and structural strength for large-animal contact.
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
                        King County maintains Mirrormont's roads, and many driveways are still steep and narrow. We plan equipment staging and material delivery around those county-road conditions.
                      </p>
                    </div>
                  </div>
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
                    Mirrormont lots often change grade along a single property line, and many driveways climb from the King County road below. Standard fence panels leave gaps or jut at odd angles on that kind of slope. Fence Genius maps the slope profile and we manufacture custom racked panels that follow it. Posts are set deep with reinforced concrete so the line stays put on a foothill grade.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Wildlife Pressure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mirrormont sits in active wildlife habitat in the Tiger Mountain foothills. Deer, black bears, and coyotes use these lots. A fence here needs structural integrity for animal contact. We use reinforced bottom rails with no-dig barriers for deer, and a hybrid aluminum/cedar system on steel posts where larger animals are the concern. Hogwire is wire mesh. The covenants allow the Architectural Committee to approve it only where it is not visible from the adjacent road.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Forest Canopy & Moisture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mirrormont's heavy tree cover creates a wetter microclimate than lower Issaquah. Properties under dense canopy stay damp longer, accelerating rot in substandard materials. We use premium Western Red Cedar with marine-grade stainless hardware, and our steel post-on-pipe option is especially popular here for its resistance to moisture and ground movement. Proper drainage around post bases is part of every Mirrormont installation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Covenants and the Architectural Committee</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mirrormont has recorded covenants and a{" "}
                    <a
                      href="https://www.mirrormont.org/architectural-committee-faq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline decoration-2 underline-offset-2"
                    >
                      Mirrormont Architectural Committee
                    </a>{" "}
                    (MARC). Fence plans go to the committee before installation. The published guidelines list split rail, cedar plank privacy, and picket fencing among acceptable materials. Chain-link and other wire mesh are not permitted where they are visible from the adjacent roadway. The committee may approve wire mesh in other locations, depending on proximity to roads, neighboring properties, and wooded buffers. Written approval names the property and the conditions. Contact the committee at marc@mirrormont.org and read the{" "}
                    <a
                      href="https://www.mirrormont.org/covenants"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline decoration-2 underline-offset-2"
                    >
                      covenant fence guidelines
                    </a>{" "}
                    before you lock a style. The association describes itself as a community association. Confirm anything that is not in those published pages with the committee.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Access on King County Roads</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mirrormont&apos;s roads are maintained by King County. The association directs street maintenance, paving, and snow plowing to the county, and its{" "}
                    <a
                      href="https://www.mirrormont.org/_files/ugd/c88aa2_5cbdb279c1ca42b0863cad0a531859a3.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline decoration-2 underline-offset-2"
                    >
                      roads newsletter
                    </a>{" "}
                    describes county maintenance on the main roads. Those roads are still narrow, winding, and steep. We stage equipment, use compact machinery where the climb requires it, and plan delivery so the project stays on schedule.
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
                Mountain fencing is an investment that reflects the terrain and logistics of the Tiger Mountain foothills. Below are typical ranges for Mirrormont; exact pricing depends on slope, access, wildlife requirements, and linear footage. Wire mesh still needs Architectural Committee approval and cannot face the road.
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
                    A covenant-listed option for Mirrormont properties that need privacy and wildlife deterrence. Board-on-board construction with reinforced bottom rails handles deer pressure. Pre-stained cedar fits the forested Tiger Mountain foothills. Submit the plan to the Architectural Committee.
                  </p>
                  <Link href="/fence-styles/picture-frame-fence" className="text-primary text-sm font-medium hover:underline">
                    View cedar styles →
                  </Link>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hogwire Fence</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Wire mesh, including hogwire, is not permitted where it is visible from the adjacent road. The Architectural Committee may approve it elsewhere, depending on buffers and neighboring lots. Confirm placement in writing before you choose this style.
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
                    Choose cedar, hybrid, or a wire-mesh layout the Architectural Committee can approve. We handle King County permit applications and any critical-area documentation for Tiger Mountain foothill lots.
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
                    Our crew arrives with pre-fabricated panels and compact equipment suited to Mirrormont&apos;s steep King County roads. Deep post foundations, reinforced bracing, and precision panel fitting. Most projects complete in 2–4 days.
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
                We install fences throughout Issaquah and the surrounding foothills. If you're near Mirrormont, we also serve Squak Mountain, Grand Ridge, Talus, Olde Town, Providence Point, and Issaquah Highlands.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah">Issaquah overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah/talus">Talus</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah/providence-point">Providence Point</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah-highlands">Issaquah Highlands</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/service-areas/issaquah/olde-town">Olde Town</Link>
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
                Get a free on-site estimate from fence specialists who work the Tiger Mountain foothills. We&apos;ll assess the slope, review the covenant limits on wire mesh, and recommend a design you can take to the Architectural Committee.
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
