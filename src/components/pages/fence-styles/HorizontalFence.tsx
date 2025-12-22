"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Clock, Wrench, Star, CheckCircle } from 'lucide-react';
import QuoteModal from '@/components/QuoteModal';
import InlineQuoteForm from '@/components/forms/InlineQuoteForm';
import VirtualQuoteTool from '@/components/VirtualQuoteTool';
import PaymentCalculator from '@/components/PaymentCalculator';
import Seo from '@/components/Seo';
import Link from 'next/link';
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const heroImage = "/lovable-uploads/1d91d676-3b17-4347-9ea7-28027e05e373.png";

const galleryImages = [
  {
    src: "/lovable-uploads/ef70b87f-116f-4698-9fc8-c09dc900a2b9.png",
    alt: "Horizontal cedar fence with proper framing and center rail support",
    description: "Professional horizontal cedar fence installation with external 2x4 frame"
  },
  {
    src: "/lovable-uploads/ae3ed7fa-7d59-43e7-91b5-9a8187f353d3.png",
    alt: "Horizontal cedar fence gate with black metal posts",
    description: "Custom horizontal fence gate with durable metal post installation"
  },
  {
    src: "/lovable-uploads/7f8b20c7-79af-49f1-8b32-0fb410ceb9f2.png",
    alt: "Long horizontal cedar fence in residential backyard",
    description: "Extensive horizontal cedar fencing providing complete backyard privacy"
  },
  {
    src: "/lovable-uploads/64d7349c-738e-4be3-984c-a966eb7637ca.png",
    alt: "Horizontal fence gate with diagonal bracing",
    description: "Double gate design with proper diagonal bracing for structural integrity"
  },
  {
    src: "/lovable-uploads/749525f7-cf8b-4960-9cb7-011acac96ce0.png",
    alt: "Close-up of horizontal cedar fence construction",
    description: "Detailed view showing quality cedar construction and stainless steel fasteners"
  }
];

const HorizontalFence = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Horizontal Cedar Fence",
    "description": "Professional horizontal cedar fence with external 2x4 frame, center vertical rail support, and stainless steel fasteners for maximum durability.",
    "image": "https://myfence.com/lovable-uploads/1d91d676-3b17-4347-9ea7-28027e05e373.png",
    "brand": {
      "@type": "Brand",
      "name": "MyFence.com"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "55",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://myfence.com/fence-styles/horizontal-fence",
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
      "reviewCount": "150"
    }
  };

  return (
    <>
      <Seo 
        title="Horizontal Cedar Fence Seattle | Modern Framed Construction"
        description="Premium horizontal cedar fence with external 2x4 frame, center rail support, Seattle's favorite modern style. 30+ years craftsmanship. Call (253) 455-1885."
        canonical="https://myfence.com/fence-styles/horizontal-fence"
        image={heroImage}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-28 md:pt-36">
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/fence-styles" className="hover:text-primary">Fence Styles</Link>
            <span className="mx-2">/</span>
            <span>Horizontal Fence</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-4 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Horizontal Cedar Fence
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Professional horizontal fence construction with external 2x4 cedar frame, center vertical rail support, and premium grade 1 cedar for maximum durability and beauty.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    <Shield className="w-4 h-4 mr-2" />
                    Framed Construction
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    <Award className="w-4 h-4 mr-2" />
                    Grade 1 Cedar
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    <Star className="w-4 h-4 mr-2" />
                    Fan Favorite
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Center Rail Support
                  </Badge>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Free Quote Today
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Our Experts</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional horizontal cedar fence installation"
                className="rounded-lg shadow-2xl w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Horizontal Fence Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-medium">{image.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Superior Construction Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">External 2x4 Cedar Frame</h3>
                <p className="text-muted-foreground">
                  Horizontal fence boards nest properly on an external 2x4 cedar frame, providing superior structural integrity compared to traditional face-nailed installations.
                </p>
              </Card>
              
              <Card className="p-6">
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">6" Exterior Rated Screws</h3>
                <p className="text-muted-foreground">
                  Frame is properly secured to fence posts using 6" exterior rated screws for maximum holding power and longevity in all weather conditions.
                </p>
              </Card>
              
              <Card className="p-6">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Center Vertical Rail</h3>
                <p className="text-muted-foreground">
                  Critical center vertical 2x4 rail provides structure in the middle to prevent fence board drooping - a feature missing in traditional horizontal installations.
                </p>
              </Card>
              
              <Card className="p-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Grade 1 Cedar</h3>
                <p className="text-muted-foreground">
                  All materials use premium grade 1 cedar with optional clear cedar upgrade for the ultimate in beauty and natural weather resistance.
                </p>
              </Card>
              
              <Card className="p-6">
                <Star className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Stainless Steel Fasteners</h3>
                <p className="text-muted-foreground">
                  All fasteners are stainless steel to prevent rust staining and ensure long-lasting connections that won't fail over time.
                </p>
              </Card>
              
              <Card className="p-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Built to Last</h3>
                <p className="text-muted-foreground">
                  Our framed horizontal fence construction method ensures your fence will stand the test of time, unlike traditional installations that lack proper support.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Why Our Horizontal Fence is Different</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Proper Framed Construction</h3>
                  <p className="text-muted-foreground mb-6">
                    Traditional horizontal fences are just nailed to the face of posts without proper support structure. 
                    This isn't recommended for structural reasons and leads to early failure.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-primary">Premium Add-On Options</h3>
                  <p className="text-muted-foreground">
                    Consider pre-staining to minimize wood alterations and protect your investment. 
                    Post-on-pipe fence posts prevent ground rotting for ultimate longevity.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Clear Cedar Upgrade</h3>
                  <p className="text-muted-foreground mb-6">
                    A fan favorite upgrade to clear cedar provides the ultimate in beauty with minimal knots 
                    and consistent grain patterns for a premium appearance.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-primary">Structural Integrity</h3>
                  <p className="text-muted-foreground">
                    Our center vertical 2x4 rail system prevents fence board sagging and maintains 
                    structural integrity over the life of your fence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Horizontal Fencing */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Horizontal Cedar Fencing</h2>
            
            {/* Framed Construction Details */}
            <Card className="overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/ef70b87f-116f-4698-9fc8-c09dc900a2b9.png" 
                      alt="Professional horizontal cedar fence with external 2x4 frame construction" 
                      className="h-full w-full object-cover min-h-[300px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
                <CardContent className="p-6 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Superior Framed Construction</h3>
                    <p className="text-muted-foreground mb-4">
                      Unlike traditional horizontal fences that are simply nailed to posts, our horizontal cedar fence features a professional external 2x4 cedar frame system. This provides superior structural integrity and longevity compared to standard installations.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The frame is secured to fence posts using 6" exterior rated screws for maximum holding power, while the center vertical 2x4 rail prevents fence board drooping - a critical feature missing in traditional horizontal installations.
                    </p>
                    <p className="text-muted-foreground">
                      Every component uses premium grade 1 cedar with stainless steel fasteners to prevent rust staining and ensure long-lasting connections in the Pacific Northwest climate.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Perfect for Modern Homes */}
            <Card className="overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <CardContent className="order-2 md:order-1 p-6 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Perfect for Modern Homes</h3>
                    <p className="text-muted-foreground mb-4">
                      Horizontal fencing has become increasingly popular in Seattle and the Eastside for its clean, contemporary aesthetic. The horizontal lines create a sense of width and openness while providing complete privacy.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This style complements both modern and traditional architecture, making it a versatile choice for neighborhoods like Bellevue, Kirkland, and Redmond. The natural cedar ages beautifully, developing a weathered silver-gray patina that enhances the modern look.
                    </p>
                    <p className="text-muted-foreground">
                      Our clear cedar upgrade option provides the ultimate in beauty with minimal knots and consistent grain patterns for homeowners who want the premium appearance that matches their home's value.
                    </p>
                  </div>
                </CardContent>
                <div className="order-1 md:order-2">
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/ae3ed7fa-7d59-43e7-91b5-9a8187f353d3.png" 
                      alt="Horizontal cedar fence gate with modern metal posts in residential setting" 
                      className="h-full w-full object-cover min-h-[300px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Why Choose Our Method */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/64d7349c-738e-4be3-984c-a966eb7637ca.png" 
                      alt="Double horizontal fence gate showing proper diagonal bracing and construction quality" 
                      className="h-full w-full object-cover min-h-[300px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
                <CardContent className="p-6 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Why Our Construction Method Matters</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Structural Advantages</h4>
                        <ul className="text-muted-foreground space-y-2">
                          <li>• External frame prevents board sagging over time</li>
                          <li>• Center vertical rail provides crucial middle support</li>
                          <li>• 6" screws create superior connection strength</li>
                          <li>• Proper drainage prevents water accumulation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Long-term Performance</h4>
                        <ul className="text-muted-foreground space-y-2">
                          <li>• Maintains straight lines for years without warping</li>
                          <li>• Stainless steel fasteners prevent black streaking</li>
                          <li>• Frame design allows for thermal expansion</li>
                          <li>• Built to withstand Pacific Northwest weather</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
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
                       MyFence.com has been perfecting horizontal fence construction for over three decades. Our framed approach combined with <Link href="/fence-genius" className="text-primary hover:underline">Fence Genius technology</Link> ensures your investment will provide lasting beauty and functionality far beyond traditional installations.
                    </p>
                    <p className="text-muted-foreground">
                      {WARRANTY_CONSTANTS.ABOUT_TEXT}, we take pride in delivering superior construction that stands the test of time.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">30+ Years Experience</Badge>
                      <Badge variant="secondary">Family Owned</Badge>
                      <Badge variant="secondary">{WARRANTY_CONSTANTS.BADGE_TEXT}</Badge>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png"
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flexible Financing Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Make your Horizontal Fence project more affordable with our financing options. Calculate your monthly payment and see how easy it is to get started.
              </p>
            </div>
            <PaymentCalculator />
          </div>
        </section>

        {/* Virtual Quote Tool */}
        <VirtualQuoteTool fenceStyleName="Horizontal Fence" />

        {/* Inline Quote Form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <InlineQuoteForm />
          </div>
        </section>
      </div>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default HorizontalFence;

