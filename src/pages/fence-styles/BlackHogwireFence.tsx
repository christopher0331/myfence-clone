import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Eye, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import PaymentCalculator from "@/components/PaymentCalculator";

const fatherSonImg = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";

const BlackHogwireFence = () => {
  return (
    <>
      <Seo
        title="6' Black Hogwire Fence - Secure & Visually Open Fencing | MyFence.com"
        description="Secure your property with our 6' Black Hogwire Fence. Perfect for wooded backyards - keeps animals out while maintaining visual openness. Cedar frame with powder-coated steel."
        canonical="https://myfence.com/fence-styles/black-hogwire-fence"
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
                    <Link to="/quote-tool">Get Quote</Link>
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
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specifications & Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Panel Specifications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Height: 6 feet</li>
                      <li>• Material: Black powder-coated steel</li>
                      <li>• Opening size: 4"x4" squares</li>
                      <li>• Robust durability construction</li>
                      <li>• Weather-resistant coating</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Frame & Installation</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Cedar frame construction</li>
                      <li>• Pre-staining recommended</li>
                      <li>• Professional installation</li>
                      <li>• Matching frame longevity to steel</li>
                      <li>• Custom fitting available</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Style Description */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Black Hogwire Fencing</h2>
            
            {/* Style & Construction Details */}
            <Card className="overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/7f467c89-d3c2-4358-8880-019c3b17581a.png" 
                      alt="Black hogwire fence panel construction detail showing steel frame and cedar posts" 
                      className="h-full w-full object-cover min-h-[300px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
                <CardContent className="p-6 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Style & Construction Details</h3>
                    <p className="text-muted-foreground mb-4">
                      The 6' Black Hogwire Fence combines the robust security of powder-coated steel panels with the timeless appeal of cedar framing. This unique fencing style features the same premium cedar frame construction as our popular <Link to="/fence-styles/picture-frame-fence" className="text-primary hover:underline">Picture Frame Fence</Link>, ensuring consistent quality and aesthetic appeal across your property.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The black powder-coated steel hogwire panels feature precise 4"x4" square openings that provide excellent visibility while maintaining security boundaries. Unlike traditional solid fencing, this semi-transparent design allows natural light to filter through while preserving your connection to the surrounding landscape.
                    </p>
                    <p className="text-muted-foreground">
                      Each panel is professionally framed with premium cedar rails and posts, using the same construction techniques that have made our <Link to="/fence-styles/picture-frame-fence" className="text-primary hover:underline">Picture Frame Fence style</Link> Seattle's most popular choice for over three decades.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Perfect for the Pacific Northwest */}
            <Card className="overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <CardContent className="order-2 md:order-1 p-6 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Perfect for the Pacific Northwest</h3>
                    <p className="text-muted-foreground mb-4">
                      Seattle homeowners particularly value the Black Hogwire Fence for its ability to work harmoniously with the region's natural beauty. The dark steel finish complements the Pacific Northwest's lush greenery and provides a sophisticated backdrop that doesn't compete with your landscaping.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This style is especially popular in neighborhoods like Bellevue, Kirkland, and Redmond where homes often back up to wooded areas or greenbelt spaces. The fence allows you to maintain those coveted forest views while creating a secure boundary that keeps local wildlife out and your family pets safely contained.
                    </p>
                    <p className="text-muted-foreground">
                      The cedar frame construction is naturally suited to Washington's climate, offering excellent resistance to moisture while aging beautifully over time. When pre-stained to match the steel's longevity, this fencing solution provides decades of reliable performance in our wet winters and dry summers.
                    </p>
                  </div>
                </CardContent>
                <div className="order-1 md:order-2">
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/26313a9e-b7aa-4a31-8d3d-ca0abe3e0df8.png" 
                      alt="Black hogwire fence with cedar frame in Pacific Northwest backyard setting" 
                      className="h-full w-full object-cover min-h-[300px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Why Choose Black Hogwire */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/bc3f0275-e178-4cd4-8731-8c9c78f95185.png" 
                      alt="Long section of black hogwire fencing showing visual openness and security" 
                      className="h-full w-full object-cover min-h-[300px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
                <CardContent className="p-6 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Why Choose Black Hogwire Over Traditional Fencing?</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Visual Benefits</h4>
                        <ul className="text-muted-foreground space-y-2">
                          <li>• Maintains sight lines to preserve views</li>
                          <li>• Creates defined boundaries without visual barriers</li>
                          <li>• Complements both modern and traditional architecture</li>
                          <li>• Allows natural light penetration for better landscaping</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Practical Advantages</h4>
                        <ul className="text-muted-foreground space-y-2">
                          <li>• Superior wildlife deterrent for Seattle-area properties</li>
                          <li>• Excellent pet containment with visibility for monitoring</li>
                          <li>• Lower wind resistance than solid panel fencing</li>
                          <li>• Combines security with neighborhood-friendly aesthetics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Wooded Properties</h3>
                    <p className="text-muted-foreground">
                      Ideal for homes backing up to wooded areas where you want to maintain the natural view while creating a secure boundary.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Pet & Child Safety</h3>
                    <p className="text-muted-foreground">
                      Keep children and pets safely contained in your yard while preventing unwanted animals from entering your property.
                    </p>
                  </CardContent>
                </Card>
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
                      Licensed, insured, and backed by a 2-year workmanship warranty, we take pride in delivering exceptional results with Fence Genius precision planning.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">30+ Years Experience</Badge>
                      <Badge variant="secondary">Family Owned</Badge>
                      <Badge variant="secondary">2-Year Warranty</Badge>
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