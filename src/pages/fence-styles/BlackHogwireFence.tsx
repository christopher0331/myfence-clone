import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Eye, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import PaymentCalculator from "@/components/PaymentCalculator";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const fatherSonImg = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";

const BlackHogwireFence = () => {
  return (
    <>
      <Seo
        title="6' Black Hogwire Fence Seattle | Security & Style Combined"
        description="Secure 6' black hogwire fence for Seattle properties. Perfect for wooded backyards - keeps animals out while maintaining openness. Call (253) 455-1885."
        canonical="https://myfence.com/fence-styles/black-hogwire-fence"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "6 Foot Black Hogwire Fence",
          "description": "Secure black hogwire fence with cedar frame and powder-coated steel panels",
          "brand": {
            "@type": "Brand",
            "name": "MyFence.com"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "manufacturer": {
            "@type": "LocalBusiness",
            "name": "MyFence.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Seattle",
              "addressRegion": "WA"
            },
            "telephone": "+1-253-455-1885"
          }
        }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/fence-styles" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Fence Styles
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Security & Style</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  6' Black Hogwire Fence
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  The perfect balance of security and visual openness. Our black hogwire fence is ideal for properties backing up to wooded areas, allowing you to maintain beautiful views while keeping your yard secure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/quote">Get Quote</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/f729a8a5-2693-400d-96c0-a8869a528f05.png"
                  alt="6' Black Hogwire Fence installed in residential backyard with cedar frame"
                  className="rounded-lg shadow-2xl w-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Black Hogwire Fencing?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Robust Security</h3>
                  <p className="text-muted-foreground">
                    Black powder-coated steel construction provides excellent durability and prevents animals from entering while keeping pets and children safely contained.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Eye className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Visual Openness</h3>
                  <p className="text-muted-foreground">
                    4"x4" square openings maintain clear sight lines to preserve beautiful wooded backdrops and natural views while providing effective boundaries.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Wrench className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Quality Construction</h3>
                  <p className="text-muted-foreground">
                    Cedar frame construction with pre-stained options to match the longevity of the steel panels, ensuring years of reliable performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Black Hogwire Fence Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <img
                src="/lovable-uploads/7f467c89-d3c2-4358-8880-019c3b17581a.png"
                alt="Black hogwire fence panel construction detail"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/243104b3-f71c-4197-a589-dc9d8d9508ef.png"
                alt="Black hogwire fence installed along residential property"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/26313a9e-b7aa-4a31-8d3d-ca0abe3e0df8.png"
                alt="Black hogwire fence with cedar frame in backyard setting"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/bc3f0275-e178-4cd4-8731-8c9c78f95185.png"
                alt="Long section of black hogwire fencing with landscaping"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/f42d189c-5d7d-499c-9363-7b3f3177ad07.png"
                alt="Black hogwire fence showing brand marking"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/8ft-hogwire-1.jpg"
                alt="Black hogwire fence with cedar frame in wooded Pacific Northwest setting"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/8ft-hogwire-2.jpg"
                alt="Long run of black hogwire fence through forested backyard"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/8ft-hogwire-3.jpg"
                alt="Black hogwire fence on sloped terrain with cedar posts and top rail"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Specifications & Video */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Specifications & Features</h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left 2/3 - Specification Cards */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Top Row - Two Cards */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Panel Specifications</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-foreground">Height</p>
                            <p className="text-sm text-muted-foreground">6 feet (on flat grade)</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Material</p>
                            <p className="text-sm text-muted-foreground">Black powder-coated steel with weather-resistant finish</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Opening Size</p>
                            <p className="text-sm text-muted-foreground">4"x4" square mesh pattern</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Durability</p>
                            <p className="text-sm text-muted-foreground">Heavy-gauge steel construction designed for Pacific Northwest weather</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Frame Construction</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-foreground">Material</p>
                            <p className="text-sm text-muted-foreground">Premium cedar posts, rails, and framing</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Finish Options</p>
                            <p className="text-sm text-muted-foreground">Pre-staining recommended to match panel longevity</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Installation</p>
                            <p className="text-sm text-muted-foreground">Professional-grade with custom terrain fitting</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Warranty</p>
                            <p className="text-sm text-muted-foreground">{WARRANTY_CONSTANTS.YEARS}-year warranty on workmanship</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Bottom Row - Full Width Card */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Terrain & Installation Considerations</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-foreground">Flat Grade Installation</p>
                          <p className="text-sm text-muted-foreground">Full 6' panel height maintained with level top rails. Ideal for yards with minimal slope, providing the cleanest aesthetic.</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Sloped Terrain Options</p>
                          <p className="text-sm text-muted-foreground">Panels are custom-trimmed to maintain level appearance on steep grades. This ensures the 4"x4" mesh stays perfectly horizontal, though panel height may be reduced.</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Stepped Installation</p>
                          <p className="text-sm text-muted-foreground">For extreme slopes, panels can be stepped to preserve full 6' height. This creates small gaps between sections where terrain changes dramatically.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Right 1/3 - Video */}
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-semibold mb-4 text-center">See It In Action</h3>
                  <div className="w-full">
                    <AspectRatio ratio={9/16}>
                      <iframe
                        className="rounded-lg shadow-2xl w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/4Ls-aTAtQsw?playsinline=1&rel=0&modestbranding=1&vq=hd1080"
                        title="Black Hogwire Fence Installation"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Company */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="mb-12">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Family-Owned Excellence Since 1994</h2>
                    <p className="text-muted-foreground">
                      MyFence.com has been serving the Pacific Northwest with premium fencing solutions for three decades. Our black hogwire fences represent the perfect blend of traditional craftsmanship and modern security technology.
                    </p>
                    <p className="text-muted-foreground">
                      {WARRANTY_CONSTANTS.ABOUT_TEXT}, we take pride in delivering exceptional results with Fence Genius precision planning.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">30+ Years Experience</Badge>
                      <Badge variant="secondary">Family Owned</Badge>
                      <Badge variant="secondary">{WARRANTY_CONSTANTS.BADGE_TEXT}</Badge>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={fatherSonImg}
                      alt="MyFence.com father and son team with over 37 years of fencing expertise"
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Finance Calculator */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flexible Financing Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Make your Black Hogwire Fence project more affordable with our financing options. Calculate your monthly payment and see how easy it is to get started.
              </p>
            </div>
            <PaymentCalculator />
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Black Hogwire Fence" />

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Ready to Secure Your Property?
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Get a personalized quote for your Black Hogwire Fence project. Our team will help you design the perfect solution for your property.
              </p>
              <InlineQuoteForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlackHogwireFence;