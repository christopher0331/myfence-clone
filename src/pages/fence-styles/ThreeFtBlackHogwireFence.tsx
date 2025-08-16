import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Eye, Wrench, DollarSign, Home, Trees } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import PaymentCalculator from "@/components/PaymentCalculator";

const fatherSonImg = "/lovable-uploads/936790e3-e01a-4dcd-bf22-e5ac97188fd1.png";

const ThreeFtBlackHogwireFence = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "3' Black Hogwire Fence Installation",
    "description": "Budget-friendly 3' Black Hogwire fence with cedar frame. Perfect for flat terrain and wooded backdrops with visual openness.",
    "provider": {
      "@type": "Organization",
      "name": "MyFence.com",
      "url": "https://myfence.com"
    },
    "areaServed": "Seattle, WA",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Seo
        title="3' Black Hogwire Fence - Budget-Friendly Open Fencing | MyFence.com"
        description="Affordable 3' Black Hogwire Fence with cedar frame. Ideal for flat terrain and wooded backdrops. Maintains visual openness while providing boundary definition."
        canonical="https://myfence.com/fence-styles/three-ft-black-hogwire-fence"
        structuredData={structuredData}
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
                <Badge className="mb-4">Budget-Friendly & Open</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  3' Black Hogwire Fence
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  A more budget-friendly option that maintains the same open feeling as our 6' version. Perfect for flat ground terrain and wooded backdrops, this fence provides boundary definition while preserving your beautiful Seattle region views.
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
                  src="/lovable-uploads/8b824630-caac-4d82-8592-5043d8f1a099.png"
                  alt="3' Black Hogwire Fence with cedar frame in wooded setting"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose 3' Black Hogwire Fencing?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Budget-Friendly</h3>
                  <p className="text-muted-foreground">
                    More affordable option while maintaining the same quality construction and visual appeal as our taller versions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Visual Openness</h3>
                  <p className="text-muted-foreground">
                    Maintains the same open feeling as our 6' version, perfect for preserving beautiful wooded backdrops and natural views.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Ideal for Flat Terrain</h3>
                  <p className="text-muted-foreground">
                    Specifically designed for flat ground applications, providing clean lines and professional installation on level surfaces.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Gallery: 3' Black Hogwire Fence in Action
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <img
                  src="/lovable-uploads/8b824630-caac-4d82-8592-5043d8f1a099.png"
                  alt="3' Black Hogwire fence with cedar frame on flat terrain"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">
                  Cedar framed hogwire on flat terrain
                </p>
              </div>
              <div className="space-y-2">
                <img
                  src="/lovable-uploads/92eb7242-9591-46bf-96c5-a1c66b6fe149.png"
                  alt="Close-up detail of 3' Black Hogwire fence construction"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">
                  Detailed view of cedar frame and hogwire construction
                </p>
              </div>
              <div className="space-y-2">
                <img
                  src="/lovable-uploads/7bdb7009-0fec-4c97-935d-471cda904f04.png"
                  alt="3' Black Hogwire fence in wooded backyard setting"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">
                  Perfect integration with wooded backdrops
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              3' Black Hogwire Fence Specifications
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Panel Specifications</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Height:</strong> 3 feet (36 inches)</li>
                    <li>• <strong>Hogwire:</strong> 4" x 2" galvanized welded wire mesh</li>
                    <li>• <strong>Finish:</strong> Powder-coated black for durability</li>
                    <li>• <strong>Frame:</strong> Cedar construction for natural weather resistance</li>
                    <li>• <strong>Style:</strong> Similar construction to Picture Frame Fence</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Framing Details</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Posts:</strong> 4x4 cedar posts, professionally set</li>
                    <li>• <strong>Rails:</strong> 2x4 cedar horizontal rails</li>
                    <li>• <strong>Hardware:</strong> Galvanized fasteners throughout</li>
                    <li>• <strong>Spacing:</strong> Standard 6-8 foot panel sections</li>
                    <li>• <strong>Recommendation:</strong> Cedar components stained before assembly</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About 3' Black Hogwire Fencing */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">About 3' Black Hogwire Fencing</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover why our 3' Black Hogwire fence is the perfect budget-friendly solution for Seattle homeowners seeking boundary definition without sacrificing visual appeal.
              </p>
            </div>

            <div className="space-y-16">
              {/* Budget-Friendly Option */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/lovable-uploads/8b824630-caac-4d82-8592-5043d8f1a099.png"
                    alt="Affordable 3' Black Hogwire fence installation"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">Budget-Friendly Excellence</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Our 3' Black Hogwire fence offers the same quality construction and visual appeal as our taller versions at a more accessible price point. This makes it an excellent choice for homeowners who want the benefits of hogwire fencing without the investment of a full-height fence.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Lower material and installation costs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Same quality cedar and powder-coated steel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Professional installation included</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ideal Applications */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Trees className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">Perfect for Seattle Properties</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    This fence is specifically designed for flat ground terrain and works beautifully with wooded backdrops common in the Seattle region. The 3' height provides boundary definition while maintaining the open feeling that makes hogwire fencing so popular.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Ideal for flat, level installation areas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Complements wooded and natural backdrops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Maintains visual connection with surroundings</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="/lovable-uploads/92eb7242-9591-46bf-96c5-a1c66b6fe149.png"
                    alt="3' Black Hogwire fence in natural wooded setting"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Construction Quality */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/lovable-uploads/7bdb7009-0fec-4c97-935d-471cda904f04.png"
                    alt="Quality construction details of 3' Black Hogwire fence"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">Quality Construction</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Like our <Link to="/fence-styles/picture-frame-fence" className="text-primary hover:underline">Picture Frame Fence</Link>, this design features cedar-framed panels with powder-coated black hogwire. We recommend having the cedar components professionally stained before assembly for optimal longevity and appearance.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Cedar frame construction for durability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Powder-coated hogwire resists rust and wear</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Professional staining recommended</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Height Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Need More Height?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Looking for additional security or privacy? Consider our 6' Black Hogwire fence for the same great construction with added height.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              <div>
                <img
                  src="/lovable-uploads/02ec9ce3-6706-49f2-af0e-d95bab2cda3f.png"
                  alt="6' Black Hogwire Fence with cedar frame"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">6' Black Hogwire Fence</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Same great construction and visual openness, but with additional height for enhanced security and privacy.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Enhanced security with 6-foot height</li>
                      <li>• Same cedar frame and powder-coated steel</li>
                      <li>• Ideal for wooded properties</li>
                      <li>• Maintains visual openness</li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link to="/fence-styles/black-hogwire-fence">
                        View 6' Option
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About the Company */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Team?</h2>
                <p className="text-muted-foreground mb-6">
                  With over 20 years of experience in the Seattle fencing industry, we specialize in quality installations that complement the Pacific Northwest's natural beauty. Our hogwire fencing solutions are designed specifically for our region's unique landscape and climate.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Licensed and insured professionals</li>
                  <li>• Specialized in Pacific Northwest fencing solutions</li>
                  <li>• Quality materials sourced locally when possible</li>
                  <li>• Comprehensive warranty on all installations</li>
                  <li>• Free consultations and estimates</li>
                </ul>
              </div>
              <div>
                <img
                  src={fatherSonImg}
                  alt="Professional fence installation team"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Payment Calculator */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Financing Options Available</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Calculate your monthly payments and explore our flexible financing options for your 3' Black Hogwire fence project.
              </p>
            </div>
            <PaymentCalculator />
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="3' Black Hogwire Fence" />

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us today for a free consultation and estimate for your 3' Black Hogwire fence.
              </p>
            </div>
            <InlineQuoteForm context="3' Black Hogwire Fence inquiry from fence style page" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ThreeFtBlackHogwireFence;