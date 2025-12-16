import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Eye, Wrench } from "lucide-react";
import Link from "next/link";
import Seo from "@/components/Seo";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import PaymentCalculator from "@/components/PaymentCalculator";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const fatherSonImg = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";

const GalvanizedHogwireFence = () => {
  return (
    <>
      <Seo
        title="5' Galvanized Hogwire Fence Seattle | Durable & Cost-Effective"
        description="Affordable 5' galvanized hogwire fence for Seattle homes. Strong wire panels with cedar frame - perfect for moderate height privacy. Call (253) 455-1885."
        canonical="https://myfence.com/fence-styles/galvanized-hogwire-fence"
        image="/lovable-uploads/galvanized-hogwire-og.webp"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "5 Foot Galvanized Hogwire Fence",
          "description": "Durable galvanized hogwire fence with cedar frame and galvanized steel panels",
          "image": "https://myfence.com/lovable-uploads/galvanized-hogwire-og.webp",
          "brand": {
            "@type": "Brand",
            "name": "MyFence.com"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "51",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://myfence.com/fence-styles/galvanized-hogwire-fence",
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
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "95"
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
            <Link href="/fence-styles" className="flex items-center gap-2">
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
                <Badge className="mb-4">Cost-Effective</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  5' Galvanized Hogwire Fence
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Strong galvanized wire panels for durable visibility and style. The perfect mid-height solution that provides security while maintaining an open feel and natural views of your surroundings.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="/quote">Get Quote</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/dbb0832a-18d2-43bd-90c3-6883046cafd1.png"
                  alt="5' Galvanized Hogwire Fence installed in residential backyard with cedar frame"
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Galvanized Hogwire Fencing?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Galvanized Durability</h3>
                  <p className="text-muted-foreground">
                    Hot-dip galvanized steel construction provides excellent corrosion resistance and long-lasting protection against Seattle's wet climate conditions.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Eye className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Visual Openness</h3>
                  <p className="text-muted-foreground">
                    Wire mesh construction maintains clear sight lines while providing effective boundaries, perfect for maintaining neighborhood visibility and natural views.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Wrench className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Cedar Frame Quality</h3>
                  <p className="text-muted-foreground">
                    Premium cedar frame construction provides natural beauty and weather resistance, complementing the galvanized panels with timeless Pacific Northwest appeal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Galvanized Hogwire Fence Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <img
                src="/lovable-uploads/98579841-b63d-44cb-9fa3-abff821578dd.png"
                alt="Galvanized hogwire fence panels showing wire mesh construction detail"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/f490fbd6-ff06-4706-bf83-5743bf1e50fb.png"
                alt="5' galvanized hogwire fence with gate installation in residential setting"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/d3f678b8-2d95-4d9b-9cd7-db7aa5c24e6b.png"
                alt="Galvanized hogwire fence with cedar frame showcasing modern home installation"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/c80beb63-92b8-46fc-97d5-e50baf6b2592.png"
                alt="Long section of galvanized hogwire fencing with landscaping and natural backdrop"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/e66dc6e6-038b-4a7c-8615-8c9ed155f692.png"
                alt="Galvanized hogwire fence on hillside terrain showing adaptability"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/b4449c89-5a3b-4949-9f89-7c367548b2b1.png"
                alt="Galvanized hogwire fence with gate access and professional installation"
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
                      <li>• Height: 5 feet</li>
                      <li>• Material: Hot-dip galvanized steel</li>
                      <li>• Wire mesh construction</li>
                      <li>• Corrosion-resistant coating</li>
                      <li>• Weather-resistant finish</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Frame & Installation</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Premium cedar frame construction</li>
                      <li>• Pre-staining options available</li>
                      <li>• Professional installation included</li>
                      <li>• Custom gate options</li>
                      <li>• Adaptable to terrain variations</li>
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
            <h2 className="text-3xl font-bold text-center mb-12">About Galvanized Hogwire Fencing</h2>
            
            {/* Style & Construction Details */}
            <Card className="overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/ebc373d0-b5d1-4531-b443-fa1582e7b456.png" 
                      alt="Galvanized hogwire fence showing wire mesh detail and cedar frame construction" 
                      className="h-full w-full object-cover min-h-[300px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
                <CardContent className="p-6 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Style & Construction Details</h3>
                    <p className="text-muted-foreground mb-4">
                      The 5' Galvanized Hogwire Fence combines the durability of hot-dip galvanized steel with the natural beauty of cedar framing. This mid-height fencing solution uses the same premium cedar frame construction as our popular <Link href="/fence-styles/picture-frame-fence" className="text-primary hover:underline">Picture Frame Fence</Link>, ensuring consistent quality and aesthetic appeal.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The galvanized steel wire mesh panels provide excellent visibility while maintaining secure boundaries. The galvanization process creates a protective zinc coating that prevents rust and corrosion, making this fence ideal for Seattle's wet climate conditions.
                    </p>
                    <p className="text-muted-foreground">
                      Each panel is professionally framed with premium cedar rails and posts, using time-tested construction techniques that ensure decades of reliable performance. The natural cedar complements the galvanized finish beautifully, creating a fence that ages gracefully in the Pacific Northwest environment.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Perfect Mid-Height Solution */}
            <Card className="overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <CardContent className="order-2 md:order-1 p-6 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Perfect Mid-Height Solution</h3>
                    <p className="text-muted-foreground mb-4">
                      At 5 feet tall, this fence provides an ideal balance between privacy, security, and openness. It's tall enough to deter unwanted entry and contain most pets, yet low enough to maintain a welcoming neighborhood feel and preserve natural sight lines.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Seattle homeowners appreciate this fence for front yard applications where HOA requirements limit fence height, or backyard areas where maximum privacy isn't the primary concern. The galvanized finish provides a clean, professional appearance that complements both traditional and contemporary architecture.
                    </p>
                    <p className="text-muted-foreground">
                      The wire mesh construction allows air flow and light penetration, making it an excellent choice for areas where you want to define boundaries without creating a visual or physical barrier. This is particularly valuable for properties with beautiful landscaping or natural views you want to preserve.
                    </p>
                  </div>
                </CardContent>
                <div className="order-1 md:order-2">
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/dbb0832a-18d2-43bd-90c3-6883046cafd1.png" 
                      alt="5' galvanized hogwire fence showing perfect height balance in residential setting" 
                      className="h-full w-full object-cover min-h-[300px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Cost-Effective Durability */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/f490fbd6-ff06-4706-bf83-5743bf1e50fb.png" 
                      alt="Galvanized hogwire fence installation showing durability and cost-effective construction" 
                      className="h-full w-full object-cover min-h-[300px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
                <CardContent className="p-6 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Cost-Effective Durability</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Galvanized Benefits</h4>
                        <ul className="text-muted-foreground space-y-2">
                          <li>• Superior corrosion resistance for Seattle's wet climate</li>
                          <li>• Lower maintenance requirements than painted steel</li>
                          <li>• Excellent value for long-term performance</li>
                          <li>• Natural patina develops over time for attractive aging</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Practical Applications</h4>
                        <ul className="text-muted-foreground space-y-2">
                          <li>• Front yard boundary definition with HOA compliance</li>
                          <li>• Garden and landscape area protection</li>
                          <li>• Pet containment with visibility for monitoring</li>
                          <li>• Property line marking with neighbor-friendly aesthetics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Height Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Need More Height?</h2>
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <CardContent className="p-6 md:p-10 flex items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Consider Our 6' Black Hogwire Fence</h3>
                      <p className="text-muted-foreground mb-4">
                        If you need maximum privacy and security, our <Link href="/fence-styles/black-hogwire-fence" className="text-primary hover:underline">6' Black Hogwire Fence</Link> offers the same quality construction with additional height. The black powder-coated finish provides a more contemporary look while offering enhanced privacy for backyard areas.
                      </p>
                      <p className="text-muted-foreground mb-6">
                        Both options use identical cedar frame construction and professional installation techniques, ensuring consistent quality regardless of which height best suits your needs.
                      </p>
                      <Button asChild>
                        <Link href="/fence-styles/black-hogwire-fence">
                          Learn About 6' Black Hogwire →
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                  <div className="relative">
                    <img
                      src="/lovable-uploads/f729a8a5-2693-400d-96c0-a8869a528f05.png"
                      alt="6' Black Hogwire Fence for comparison with 5' galvanized option"
                      className="h-full w-full object-cover min-h-[300px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Card>
            </div>
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
                    <h3 className="text-xl font-semibold mb-3">Front Yard Boundaries</h3>
                    <p className="text-muted-foreground">
                      Ideal for defining front yard boundaries while maintaining curb appeal and complying with most HOA height restrictions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Garden Protection</h3>
                    <p className="text-muted-foreground">
                      Perfect for protecting gardens and landscaped areas from animals while allowing visibility and maintaining aesthetic appeal.
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
                      For over {new Date().getFullYear() - 1994} years, we've been Seattle's trusted fence installation experts. Our family-owned business combines traditional craftsmanship with modern techniques to deliver fencing solutions that stand the test of time.
                    </p>
                    <p className="text-muted-foreground">
                      Every galvanized hogwire fence we install comes with our {WARRANTY_CONSTANTS.YEARS}-year warranty, reflecting our confidence in both our materials and installation quality.
                    </p>
                    <div className="flex gap-4">
                      <Button asChild>
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/gallery">View Our Work</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={fatherSonImg}
                      alt="Father and son team from MyFence.com, Seattle's trusted fence installation experts since 1994"
                      className="rounded-lg shadow-lg w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Payment Calculator */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Flexible Payment Options</h2>
              <PaymentCalculator />
            </div>
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Get Your Instant Quote</h2>
              <VirtualQuoteTool fenceStyleName="Galvanized Hogwire Fence" />
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Ready to Get Started?</h2>
              <p className="text-center text-muted-foreground mb-8">
                Contact us today for a free consultation and detailed quote for your 5' galvanized hogwire fence project.
              </p>
              <InlineQuoteForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GalvanizedHogwireFence;