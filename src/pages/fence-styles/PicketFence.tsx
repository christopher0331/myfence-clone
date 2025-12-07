import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Eye, Wrench, DollarSign, Home, Trees } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import PaymentCalculator from "@/components/PaymentCalculator";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const fatherSonImg = "/lovable-uploads/936790e3-e01a-4dcd-bf22-e5ac97188fd1.png";

const PicketFence = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Traditional Picket Fence",
    "description": "Classic American front yard picket fence with dog ear boards and trellis options. Perfect for traditional curb appeal up to 4' height.",
    "image": "https://myfence.com/lovable-uploads/2a60013b-3add-48a8-9881-e5c6c8baf7fd.png",
    "brand": { "@type": "Brand", "name": "MyFence.com" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "38",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://myfence.com/fence-styles/picket-fence",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
        "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US", "addressRegion": "WA" },
        "deliveryTime": { "@type": "ShippingDeliveryTime", "handlingTime": { "@type": "QuantitativeValue", "minValue": "7", "maxValue": "14", "unitCode": "DAY" } }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
        "merchantReturnDays": "0",
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "65" }
  };

  return (
    <>
      <Seo
        title="Classic Picket Fence Seattle | Traditional Front Yard Cedar Fencing"
        description="Traditional cedar picket fence with dog ear boards. Perfect for Seattle front yards, up to 4' height. Classic American charm. Call (253) 455-1885 for quotes."
        canonical="https://myfence.com/fence-styles/picket-fence"
        image="/lovable-uploads/2a60013b-3add-48a8-9881-e5c6c8baf7fd.png"
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
                <Badge className="mb-4">Classic American Style</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Traditional Picket Fence
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Capture the classic American front yard look with our traditional picket fence featuring dog ear boards and 2-rail construction. Perfect for front yards seeking timeless curb appeal with optional trellis systems for added charm.
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
                  src="/lovable-uploads/2a60013b-3add-48a8-9881-e5c6c8baf7fd.png"
                  alt="Traditional picket fence with dog ear boards and black posts"
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
              Why Choose a Traditional Picket Fence?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Classic Curb Appeal</h3>
                  <p className="text-muted-foreground">
                    Iconic American front yard styling with dog ear boards that create the timeless picket fence look homeowners love.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">City Code Compliant</h3>
                  <p className="text-muted-foreground">
                    Designed to meet front yard height restrictions with maximum 4' height, ensuring compliance with local regulations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Trees className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Trellis Options</h3>
                  <p className="text-muted-foreground">
                    Optional trellis systems make your property more inviting and create beautiful garden focal points at gates and entrances.
                  </p>
                </CardContent>
              </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{WARRANTY_CONSTANTS.SHORT_TITLE}</h3>
                    <p className="text-muted-foreground">
                      {WARRANTY_CONSTANTS.CARD_DESCRIPTION}
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
              Gallery: Traditional Picket Fence Installations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <img
                  src="/lovable-uploads/2a60013b-3add-48a8-9881-e5c6c8baf7fd.png"
                  alt="Traditional picket fence corner installation with black posts"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">
                  Corner installation with black posts and cedar pickets
                </p>
              </div>
              <div className="space-y-2">
                <img
                  src="/lovable-uploads/76e685fa-a87c-4bfc-82aa-0d1621f5e397.png"
                  alt="Picket fence gate with trellis arbor system"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">
                  Gate entrance with optional trellis arbor
                </p>
              </div>
              <div className="space-y-2">
                <img
                  src="/lovable-uploads/c710a5aa-d0b0-4201-93c7-f3902d2dd091.png"
                  alt="Picket fence gate detail with trellis overhead"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">
                  Close-up of gate detail with trellis feature
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Traditional Picket Fence Specifications
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Panel Specifications</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Height:</strong> Up to 4 feet (city code compliant for front yards)</li>
                    <li>• <strong>Boards:</strong> Dog ear cedar pickets with chamfered tips</li>
                    <li>• <strong>Rails:</strong> 2-rail construction for durability</li>
                    <li>• <strong>Posts:</strong> Black powder-coated steel posts</li>
                    <li>• <strong>Style:</strong> Traditional American front yard design</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Construction Details</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Posts:</strong> Steel posts professionally set and leveled</li>
                    <li>• <strong>Hardware:</strong> Galvanized fasteners throughout</li>
                    <li>• <strong>Spacing:</strong> Standard picket spacing for classic look</li>
                    <li>• <strong>Optional:</strong> Trellis systems for gates and entrances</li>
                    <li>• <strong>Finish:</strong> Natural cedar with staining recommended</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Traditional Picket Fencing */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">About Traditional Picket Fencing</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover why our traditional picket fence is the perfect choice for Seattle homeowners seeking classic American front yard styling with modern construction quality.
              </p>
            </div>

            <div className="space-y-16">
              {/* Classic American Style */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/lovable-uploads/aee5ef8a-22a4-43b8-b4d8-d2de5eaccf2d.png"
                    alt="Traditional picket fence providing classic American front yard appeal"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Home className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">Classic American Front Yard</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Our traditional picket fence captures the iconic American front yard look that never goes out of style. The dog ear boards with chamfered tips create the classic silhouette homeowners love, while black powder-coated posts provide a striking contrast that enhances curb appeal.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Timeless design that enhances property value</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Dog ear boards with chamfered tips</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Black posts for striking visual contrast</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* City Code Compliance */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">City Code Compliant Design</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Our picket fence is specifically designed to meet front yard height restrictions with a maximum height of 4 feet. This ensures your fence complies with local city codes while still providing the classic look and boundary definition you want for your front yard.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Maximum 4' height for front yard compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Professional installation ensures proper setbacks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">No permit required for most installations</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="/lovable-uploads/c710a5aa-d0b0-4201-93c7-f3902d2dd091.png"
                    alt="City code compliant picket fence installation"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Trellis Options */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/lovable-uploads/76e685fa-a87c-4bfc-82aa-0d1621f5e397.png"
                    alt="Picket fence with optional trellis system at gate entrance"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Trees className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">Optional Trellis Systems</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Make your property more inviting with optional trellis systems that can be added to gates and entrance points. These beautiful additions create focal points in your landscape design and provide support for climbing plants and vines.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Creates welcoming entrance focal points</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Supports climbing plants and garden design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Custom designs to match your landscape</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Height Option */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Need Lower Height?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Looking for a more budget-friendly option with open visibility? Consider our 3' Black Hogwire fence for a modern alternative.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              <div>
                <img
                  src="/lovable-uploads/8b824630-caac-4d82-8592-5043d8f1a099.png"
                  alt="3' Black Hogwire Fence alternative option"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">3' Black Hogwire Fence</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      A modern alternative offering visual openness while maintaining boundary definition at a lower height and budget-friendly price point.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Budget-friendly modern design</li>
                      <li>• Visual openness with boundary definition</li>
                      <li>• Perfect for wooded properties</li>
                      <li>• Cedar frame with powder-coated steel</li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link to="/fence-styles/three-ft-black-hogwire-fence">
                        View 3' Hogwire Option
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
                <img
                  src={fatherSonImg}
                  alt="MyFence.com father and son team"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Family-Owned, Community-Focused
                </h2>
                <p className="text-muted-foreground mb-6">
                  As a father-son team serving the Seattle region, we understand the importance of quality craftsmanship and customer service. Our traditional picket fences are built to last, combining time-tested construction methods with modern materials for superior durability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Over 20 years of fencing experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{WARRANTY_CONSTANTS.INLINE_TEXT}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Free estimates and consultations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Licensed, bonded, and insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Calculator */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Financing Your Picket Fence</h2>
              <p className="text-lg text-muted-foreground">
                Calculate your monthly payments and make your traditional picket fence affordable with our financing options.
              </p>
            </div>
            <PaymentCalculator />
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Traditional Picket Fence" />

        {/* Contact Form */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us today for a free estimate on your traditional picket fence installation.
              </p>
            </div>
            <InlineQuoteForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default PicketFence;