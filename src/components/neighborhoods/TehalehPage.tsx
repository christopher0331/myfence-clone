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

interface TehalehPageProps {
  canonical?: string;
  isUpper?: boolean;
  title?: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  videoUrl?: string;
}

const TehalehPage = ({ 
  canonical = "https://myfence.com/service-areas/lower-tehaleh",
  isUpper = false,
  title,
  description,
  metaTitle,
  metaDescription,
  videoUrl = "gzAzQLdfqDA"
}: TehalehPageProps) => {
  const displayTitle = title || (isUpper ? "Upper Tehaleh Fence Installation" : "Lower Tehaleh Fence Installation");
  const displayMetaTitle = metaTitle || (isUpper ? "Upper Tehaleh Fence Installation | MyFence.com" : "Lower Tehaleh Fence Installation | MyFence.com");
  const displayMetaDesc = metaDescription || (isUpper 
    ? "Expert fence installation for Upper Tehaleh's elevated homesites. HOA-compliant cedar and hybrid fencing built for mountain views and plateau winds." 
    : "Professional fence installation for Lower Tehaleh's family neighborhoods. Serving walkable communities with HOA-approved cedar and hogwire fencing.");

  return (
    <>
      <Seo
        title={displayMetaTitle}
        description={displayMetaDesc}
        canonical={canonical}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
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
              {/* Hero Content */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving {isUpper ? "Upper Tehaleh" : "Lower Tehaleh"}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {displayTitle}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {description || (isUpper 
                    ? "Specialized HOA-compliant fence installation for Tehaleh's upper plateau. We build durable solutions engineered for elevated terrain and stunning mountain views."
                    : "Expert fence installation for Tehaleh's established family neighborhoods. Providing secure, beautiful, and HOA-approved fencing for your walkable community.")}
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
                  city={isUpper ? "Upper Tehaleh" : "Lower Tehaleh"}
                  state="Washington"
                  radiusMiles={2}
                  zoom={13}
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
                {isUpper ? "Fencing for the Upper Plateau" : "Fencing for Walkable Neighborhoods"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {isUpper 
                  ? "Upper Tehaleh represents the newest evolution of Bonney Lake's premier master-planned community. Living on the upper plateau offers unmatched proximity to nature and breathtaking views of Mt. Rainier, but it also brings unique challenges for fencing—including increased wind exposure and sharper terrain changes."
                  : "Lower Tehaleh is the heart of the community, characterized by established neighborhoods, the iconic Tehaleh Post, and miles of interconnected trails. Fencing here requires a balance between backyard privacy and the open, welcoming aesthetic that defines these walkable neighborhoods."}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {isUpper
                  ? "We specialize in 'mountain-smart' installations for Upper Tehaleh. Our hybrid systems are particularly popular here, combining the natural look of cedar with the wind-resistant strength of aluminum posts. We ensure every fence meets the specific architectural standards of the upper neighborhoods while maximizing the longevity of your investment."
                  : "In Lower Tehaleh, we focus on family-friendly designs that provide security for pets and children without obstructing the community feel. We're intimately familiar with the HOA requirements for neighborhoods near the trail systems and community parks, ensuring your project gets approved quickly and builds lasting value."}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why {isUpper ? "Upper Tehaleh" : "Lower Tehaleh"} Homeowners Trust MyFence.com
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">HOA Compliance Experts</h3>
                      <p className="text-muted-foreground">
                        Deep knowledge of Tehaleh's design standards. We handle
                        all submission documentation and ensure first-time approval for {isUpper ? "Plateau" : "Valley"} neighborhoods.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {isUpper ? "Wind & Slope Specialists" : "Trailside Specialists"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isUpper 
                          ? "Expert installation on the plateau's varied terrain using reinforced systems built for higher wind exposure."
                          : "Specialized designs for properties backing to Tehaleh's extensive trail network and community amenities."}
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
                        Comprehensive {WARRANTY_CONSTANTS.YEARS}-year craftsmanship warranty giving you peace of mind in {isUpper ? "Upper" : "Lower"} Tehaleh.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Family-Focused Designs</h3>
                      <p className="text-muted-foreground">
                        Safe, durable fencing solutions designed for active Tehaleh families with children and pets.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tehaleh Specific Considerations */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">{isUpper ? "Upper" : "Lower"} Tehaleh-Specific Considerations</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">HOA Architectural Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tehaleh maintains rigorous architectural review standards. We're intimately familiar with the Tehaleh Design Review Committee's requirements for both the {isUpper ? "newest phases on the plateau" : "established neighborhoods near the community center"}. Our team prepares comprehensive submission packages to ensure swift approval.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Topography and {isUpper ? "Wind" : "Trail"} Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {isUpper 
                      ? "The upper plateau's unique geography requires fencing that can handle both steep grade changes and increased wind loads. We use Fence Genius technology to create custom panels that follow the terrain perfectly while maintaining structural integrity."
                      : "Lower Tehaleh's properties often border the community's signature trail system. We design installations that provide privacy while respecting the setbacks and aesthetic requirements for these shared spaces."}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Premium, Low-Maintenance Materials</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {isUpper 
                      ? "For the newer homes in Upper Tehaleh, we recommend our hybrid aluminum/cedar systems. They provide a modern look that complements the latest architectural styles while virtually eliminating maintenance requirements."
                      : "In Lower Tehaleh, our Western Red Cedar privacy fences and hogwire systems are highly popular, offering a timeless Pacific Northwest look that fits the established neighborhood character."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName={`${isUpper ? "Upper" : "Lower"} Tehaleh fence`} />

        {/* Tehaleh Fencing Video Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{isUpper ? "Upper" : "Lower"} Tehaleh Fencing</h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Watch our efficient installation process in {isUpper ? "Upper" : "Lower"} Tehaleh. {isUpper 
                      ? "From plateau properties with mountain views to newer developments, we deliver mountain-smart fencing built for durability."
                      : "From family neighborhoods near the Post to trailside homes, we deliver quality fences that match the walkable community lifestyle."}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every {isUpper ? "Upper" : "Lower"} Tehaleh fence combines sophisticated aesthetics with family-friendly durability.
                  </p>
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoUrl}?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title={`${isUpper ? "Upper" : "Lower"} Tehaleh Fencing`}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our {isUpper ? "Upper" : "Lower"} Tehaleh Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">1. Free Consultation & Measurement</h3>
                  <p className="text-muted-foreground">
                    We meet at your home to understand your family's needs, assess your property's {isUpper ? "plateau" : "neighborhood"} terrain, and discuss HOA-compliant designs.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">2. Design Selection & HOA Approval</h3>
                  <p className="text-muted-foreground">
                    Choose from cedar, hogwire, or hybrid options approved for {isUpper ? "Upper" : "Lower"} Tehaleh. We handle all architectural committee documentation.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">3. Off-Site Panel Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Custom panels manufactured at our facility ensure consistent quality and minimize disruption to your daily routine.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">4. Professional Installation</h3>
                  <p className="text-muted-foreground">
                    Our crew arrives prepared with pre-fabricated panels and specialized equipment for {isUpper ? "wind-resistant" : "precise"} installation. Most projects finished in 1-2 days.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">5. Final Walkthrough & Warranty</h3>
                  <p className="text-muted-foreground">
                    Full walkthrough and activation of your {WARRANTY_CONSTANTS.YEARS}-year warranty coverage.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your {isUpper ? "Upper" : "Lower"} Tehaleh Property?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Schedule a free consultation with Tehaleh's trusted fence installation experts.
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

export default TehalehPage;
