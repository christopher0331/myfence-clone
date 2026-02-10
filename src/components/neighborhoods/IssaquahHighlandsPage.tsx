"use client";

import Link from "next/link";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Award, ArrowLeft, MapPin, Phone } from "lucide-react";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface VideoTag {
  label: string;
  link: string;
}

interface IssaquahHighlandsPageProps {
  canonical?: string;
  videoTags?: VideoTag[];
}

const IssaquahHighlandsPage = ({ 
  canonical = "https://myfence.com/service-areas/issaquah-highlands",
  videoTags = [
    { label: "Galvanized Hog Wire", link: "/fence-styles/galvanized-hogwire-fence" }
  ]
}: IssaquahHighlandsPageProps) => {
  return (
    <>
      <Seo
        title="Issaquah Highlands Fence Installation | HOA-Compliant Experts"
        description="Professional fence installation for Issaquah Highlands. Specializing in HOA-compliant designs, hillside engineering, and premium cedar & hogwire systems."
        canonical={canonical}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
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
              {/* Hero Content */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving Issaquah Highlands</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Issaquah Highlands Fence Installation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Specialized HOA-compliant fence installation for the Highlands. We build durable solutions engineered for hillside terrain and premium architectural standards.
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

              {/* Service Area Map */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <GoogleBusinessMap
                  city="Issaquah Highlands"
                  state="Washington"
                  radiusMiles={2}
                  zoom={14}
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
                Fencing for the Highlands Lifestyle
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The Issaquah Highlands represents a premier master-planned community where urban convenience meets mountain proximity. Living here offers stunning views of the Issaquah Alps and Lake Sammamish, but it also brings unique challenges for fencing—including strict HOA guidelines and varied hillside topography.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in 'Highlands-smart' installations. Our hogwire and premium cedar systems are particularly popular here, providing the security you need for pets and children without obstructing the views that make this community so special. We ensure every fence meets the specific architectural standards of the Highlands while maximizing the longevity of your investment.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Issaquah Highlands Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">HOA Compliance Experts</h3>
                      <p className="text-muted-foreground">
                        Deep knowledge of Highlands design standards. We handle
                        all submission documentation and ensure first-time approval for your neighborhood.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Hillside Specialists
                      </h3>
                      <p className="text-muted-foreground">
                        Expert installation on the Highlands' varied terrain using precision-engineered systems built for slope stability and wind exposure.
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
                        Comprehensive {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty giving you peace of mind in the Issaquah Highlands.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
                      <p className="text-muted-foreground">
                        Only the highest grade Western Red Cedar and professional-grade metal components to match the quality of Highlands homes.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Highlands Specific Considerations */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Highlands-Specific Considerations</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">HOA Architectural Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Issaquah Highlands maintains rigorous architectural review standards. We're intimately familiar with the Highlands Fiber Co-op and neighborhood-specific requirements. Our team prepares comprehensive submission packages to ensure swift approval.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Topography Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Highlands' geography requires fencing that can handle steep grade changes perfectly. We use Fence Genius technology to create custom panels that follow the terrain while maintaining structural integrity and a clean, modern aesthetic.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">View-Preserving Designs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For many Highlands homes, the view is the primary asset. Our galvanized hogwire systems provide the security of a full fence while remaining nearly invisible from a distance, preserving your vista of the valley or the Cascades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Issaquah Highlands fence" />

        {/* Issaquah Highlands Fencing Video Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Issaquah Highlands Fencing</h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Watch our expert installation process in the Issaquah Highlands. We specialize in precision-engineered solutions designed for hillside properties and strict architectural requirements.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From view-preserving hogwire to premium privacy cedar, we deliver durable fences that enhance the beauty and value of your Highlands home.
                  </p>
                  {videoTags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {videoTags.map((tag) => (
                        <Link 
                          key={tag.label} 
                          href={tag.link}
                          className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 rounded-full text-sm font-medium transition-colors"
                        >
                          {tag.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/krIoTEuYyrY?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title="Issaquah Highlands Fencing"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Highlands Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Consultation & Design</h3>
                  <p className="text-muted-foreground">
                    We assess your property's topography and discuss Highlands-approved designs that meet your family's specific needs.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. HOA Documentation</h3>
                  <p className="text-muted-foreground">
                    We provide the detailed drawings and material specifications required for your neighborhood's architectural review process.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Precision Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Using Fence Genius technology, we manufacture custom panels that will follow your property's slopes perfectly.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Expert Installation</h3>
                  <p className="text-muted-foreground">
                    Our professional crew installs your fence with minimal disruption, typically finishing within 1-3 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Warranty Activation</h3>
                  <p className="text-muted-foreground">
                    Full walkthrough and activation of your {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Highlands Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Schedule a free consultation with Issaquah's trusted Highlands fencing experts.
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

export default IssaquahHighlandsPage;
