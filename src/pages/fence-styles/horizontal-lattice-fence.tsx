import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Users, Zap, Award, ArrowLeft, Phone, Mail } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import Seo from "@/components/Seo";
import Link from "next/link";

// Images for Horizontal Lattice Fence
const heroImg = "/lovable-uploads/76711349-f698-430f-a01f-14709e320e1b.png"; // Corner horizontal lattice fence with beautiful landscaping
const gallery = [
  { src: "/lovable-uploads/840c5f7f-0578-45fa-9b5c-195760503695.png", alt: "Long run of horizontal lattice fence showing stainless steel construction" },
  { src: "/lovable-uploads/ce85f22d-f633-494b-95d2-43dfd7d0d327.png", alt: "Horizontal lattice fence with full 5/8 inch thick lattice strips" },
  { src: "/lovable-uploads/dba64f6a-f5d7-473c-9ad3-e4ffbf262b0a.png", alt: "Beautiful horizontal lattice fence with hydrangeas and MyFence.com branding" },
  { src: "/lovable-uploads/d4ffbddf-6231-4516-ac39-980f77e46794.png", alt: "Corner installation of horizontal lattice fence with craftsman foundation" },
  { src: "/lovable-uploads/815744dc-6440-4c65-917a-afb302ed2788.png", alt: "Professional installer with completed horizontal lattice fence project" },
  { src: "/lovable-uploads/91a0014d-7b00-467d-b825-97379145e02a.png", alt: "Horizontal lattice gate with craftsman style and stainless steel hardware" },
  { src: "/lovable-uploads/a96f833f-b6db-4dc7-bd32-b2115d6b99d8.png", alt: "Horizontal lattice gate detail showing premium construction quality" },
  { src: "/lovable-uploads/55f7a6cd-3e20-4897-afde-8510c45f10f6.png", alt: "Horizontal lattice fence with landscaping showing professional installation" },
];

const fatherSonImg = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";

const HorizontalLatticeFence = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Horizontal Lattice Fence",
    "description": "Premium horizontal lattice fencing with craftsman foundation, 5/8 inch thick lattice strips, and stainless steel fasteners for superior durability and beauty.",
    "image": "https://myfence.com/lovable-uploads/76711349-f698-430f-a01f-14709e320e1b.png",
    "brand": {
      "@type": "Brand",
      "name": "MyFence.com"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "55.75",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://myfence.com/fence-styles/horizontal-lattice-fence",
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
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <>
      <Seo
        title="Horizontal Lattice Fence Seattle | Premium 5/8 Inch Thick Cedar Strips"
        description="Premium horizontal lattice fence with 5/8 inch thick strips, craftsman foundation, stainless steel fasteners. Seattle's finest lattice work. Call (253) 455-1885."
        canonical="https://myfence.com/fence-styles/horizontal-lattice-fence"
        image={heroImg}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <nav className="bg-background pt-8 pb-3 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/fence-styles" className="text-muted-foreground hover:text-primary transition-colors">Fence Styles</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">Horizontal Lattice Fence</span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 pt-28 md:pt-36 pb-8">
          {/* Back Button */}
          <Link href="/fence-styles" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fence Styles
          </Link>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="secondary" className="w-fit">Premium Construction</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Horizontal Lattice Fence
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Elegant horizontal lattice design built on our craftsman foundation with premium 5/8 inch thick lattice strips and stainless steel fasteners for superior durability and beauty.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  5/8 Inch Thick Lattice
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Stainless Steel Fasteners
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Premium Quality
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={() => setIsQuoteModalOpen(true)} className="flex items-center gap-2">
                  Get Free Quote
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" asChild className="flex items-center gap-2">
                  <Link href="/contact">
                    Contact Us
                    <Mail className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImg}
                alt="Beautiful horizontal lattice fence with craftsman foundation and landscaping"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Key Features */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Horizontal Lattice Fence Features
              </CardTitle>
              <CardDescription>
                Our horizontal lattice fence combines the strength of our craftsman foundation with elegant horizontal lattice strips for a beautiful, functional barrier.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Premium 5/8 Inch Thick Lattice</h3>
                </div>
                <p className="text-muted-foreground">
                  Full 5/8 inch thick lattice strips, not the thin cheap lattice from box stores that quickly fails and warps.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Stainless Steel Fasteners</h3>
                </div>
                <p className="text-muted-foreground">
                  All stainless steel fasteners prevent black streaking that occurs with traditional galvanized fasteners.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Craftsman Foundation</h3>
                </div>
                <p className="text-muted-foreground">
                  Built on our proven craftsman foundation with 3 rails, 3 trim, and top cap for maximum strength.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Narrowing Design</h3>
                </div>
                <p className="text-muted-foreground">
                  Beautiful narrowing thickness design creates visual depth and sophisticated appearance.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Professional Installation</h3>
                </div>
                <p className="text-muted-foreground">
                  Expert installation ensures proper alignment and long-lasting performance of your lattice fence.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Superior Durability</h3>
                </div>
                <p className="text-muted-foreground">
                  Premium materials and construction methods ensure your fence looks beautiful for years to come.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gallery Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Horizontal Lattice Fence Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See the beauty and craftsmanship of our horizontal lattice fences. Each installation showcases premium materials and professional workmanship.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Why Choose Our Horizontal Lattice Fence?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Superior Materials</h3>
                  <p className="text-muted-foreground">
                    We use full 5/8 inch thick lattice strips instead of the thin, cheap lattice commonly sold at box stores. This premium thickness ensures your fence will not warp, crack, or fail prematurely.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Stainless Steel Construction</h3>
                  <p className="text-muted-foreground">
                    All fasteners are stainless steel, preventing the unsightly black streaking that occurs with galvanized fasteners over time. Your fence maintains its beautiful appearance for years.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Proven Foundation</h3>
                  <p className="text-muted-foreground">
                    Built on our time-tested craftsman foundation with 3 rails, 3 trim pieces, and a top cap. This structure provides the strength needed to support the lattice panels properly.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Beautiful Design</h3>
                  <p className="text-muted-foreground">
                    The horizontal lattice pattern with narrowing thickness creates visual depth and sophistication while maintaining privacy and allowing filtered light and air flow.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About the Company */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Family-Owned Excellence Since 1994</h2>
                  <p className="text-muted-foreground">
                    MyFence.com has been serving the Pacific Northwest with premium fencing solutions for three decades. Our horizontal lattice fences represent the perfect blend of traditional craftsmanship and modern materials.
                  </p>
                  <p className="text-muted-foreground">
                    We take pride in using only the finest materials and time-tested construction methods to ensure your fence not only looks beautiful but stands the test of time.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">30+ Years Experience</Badge>
                    <Badge variant="secondary">Family Owned</Badge>
                    <Badge variant="secondary">Local Expert</Badge>
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

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready for Your Horizontal Lattice Fence?</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Get a free, no-obligation quote for your horizontal lattice fence project. Our experts will help you design the perfect solution for your property.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="text-primary"
                  >
                    Get Free Quote Today
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Link href="/contact">Contact Our Experts</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Virtual Quote Tool */}
          <VirtualQuoteTool fenceStyleName="Horizontal Lattice Fence" />

          {/* Inline Quote Form */}
          <div className="max-w-2xl mx-auto">
            <InlineQuoteForm />
          </div>
        </div>

        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </div>
    </>
  );
};

export default HorizontalLatticeFence;