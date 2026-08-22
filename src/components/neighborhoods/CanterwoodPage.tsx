"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft, MapPin, Phone, FileDown } from "lucide-react";
import LeadCaptureTabs from "@/components/forms/LeadCaptureTabs";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { buildNeighborhoodStructuredData } from "@/components/neighborhoods/structuredData";

interface CanterwoodPageProps {
  canonical?: string;
  metaTitle?: string;
  metaDescription?: string;
}

const CanterwoodPage = ({
  canonical = "https://myfence.com/service-areas/gig-harbor/canterwood",
  metaTitle = "Canterwood Fence Installation | Gig Harbor | MyFence.com",
  metaDescription = "HOA-compliant fence installation in Canterwood, Gig Harbor WA. Custom cedar, hogwire & hybrid fences for golf course & gated community lots.",
}: CanterwoodPageProps) => {
  const structuredData = buildNeighborhoodStructuredData({
    canonical,
    neighborhoodName: "Canterwood, Gig Harbor",
    pageTitle: "Canterwood Gig Harbor Fence Installation",
    description: metaDescription,
    faqItems: [
      {
        question: "Do I need HOA approval to build a fence in Canterwood?",
        answer: "Yes, Canterwood Golf & Country Club HOA requires architectural review for all fence installations. MyFence.com provides site plans, elevation diagrams, and material specs to streamline your Canterwood HOA submission.",
      },
      {
        question: "What fence styles meet Canterwood HOA guidelines?",
        answer: "Picture frame cedar fences, horizontal lattice-top designs, and black hybrid aluminum/hogwire fences are popular in Canterwood. They provide privacy and security while blending naturally with golf course sightlines and wooded lots.",
      },
      {
        question: "How much does fence installation cost in Canterwood, Gig Harbor?",
        answer: "Canterwood fence installations typically range from $48 to $80 per linear foot depending on style, terrain, and custom gate configurations. Use our online quote tool or call for a free on-site estimate.",
      },
    ],
  });

  return (
    <>
      <Seo
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        structuredData={structuredData}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link
              href="/service-areas/gig-harbor"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Gig Harbor
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving Canterwood, Gig Harbor WA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Canterwood Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  HOA-compliant, high-end fencing tailored for Canterwood's gated community and golf course lots. Built with premium cedar, steel posts, and Fence Genius technology.
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
                  city="Canterwood, Gig Harbor"
                  state="Washington"
                  radiusMiles={5}
                  zoom={12}
                  showBusinessInfo={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Premier Fence Builders for Canterwood Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Canterwood is one of Gig Harbor's premier gated communities, surrounding a championship golf course and featuring mature evergreen timber and luxury custom homes. Building a fence in Canterwood requires careful attention to architectural review requirements, property boundary easements, and high-end aesthetic standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyFence.com builds premium cedar and hybrid metal fences designed specifically for Canterwood homeowners. Using Fence Genius precision design technology and Post-on-Pipe steel foundations, we ensure your fence stands straight against Pacific Northwest coastal weather while maintaining golf course sightlines and HOA compliance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Canterwood HOA fence review</h2>
              <Link
                href="/service-areas/gig-harbor/canterwood/hoa-approved-fencing"
                className="block h-full"
              >
                <Card className="p-5 hover:shadow-xl hover:border-primary hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full bg-gradient-to-br from-background to-primary/5 border-2">
                  <h3 className="font-semibold text-primary text-lg mb-2">
                    Canterwood HOA Approved Fencing
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Download our ACC submission checklist, learn the gated-community review process,
                    and get cedar or hybrid installs built for golf-course lots.
                  </p>
                  <div className="mt-3 text-primary font-semibold text-sm flex items-center gap-1">
                    Learn More <span className="text-lg">→</span>
                  </div>
                </Card>
              </Link>
              <Card className="p-5">
                <h4 className="font-semibold mb-3">Download Canterwood HOA Fence Checklist</h4>
                <a
                  href="/docs/hoa/canterwood-hoa-fence-submission-checklist.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary underline decoration-2 underline-offset-2"
                >
                  <FileDown className="h-4 w-4 shrink-0" aria-hidden />
                  Canterwood HOA Fence Submission Checklist
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Want the full ACC walkthrough? See our{" "}
                  <Link
                    href="/service-areas/gig-harbor/canterwood/hoa-approved-fencing"
                    className="text-primary underline decoration-2 underline-offset-2"
                  >
                    Canterwood HOA approved fencing guide
                  </Link>
                  .
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Canterwood Homeowners Choose MyFence.com
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">HOA Approval Ready</h3>
                <p className="text-sm text-muted-foreground">
                  We prepare complete submittal packages for Canterwood architectural review.
                </p>
              </Card>
              <Card className="p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Fence Genius Tech</h3>
                <p className="text-sm text-muted-foreground">
                  3D site mapping for exact panel fit along wooded or sloped lot lines.
                </p>
              </Card>
              <Card className="p-6">
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Steel Post Strength</h3>
                <p className="text-sm text-muted-foreground">
                  Heavy-duty steel post foundations hidden within cedar framing or exposed powder-coat posts.
                </p>
              </Card>
              <Card className="p-6">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">{WARRANTY_CONSTANTS.TITLE}</h3>
                <p className="text-sm text-muted-foreground">
                  Backed by our father-and-son family craftsmanship warranty.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Get an Estimate for Your Canterwood Fence</h2>
              <p className="text-muted-foreground">
                Request a free estimate or contact our team for your Gig Harbor property.
              </p>
            </div>
            <Card className="p-6 md:p-8">
              <LeadCaptureTabs />
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default CanterwoodPage;
