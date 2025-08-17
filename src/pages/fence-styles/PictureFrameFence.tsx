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
import { Link } from "react-router-dom";
import { getFenceStyleImages } from "@/data/fenceImages";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const images = getFenceStyleImages("picture-frame");
const heroImg = images.hero.src;
const altHero = images.hero.alt;
const fatherSonImg = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";

const PictureFrameFence = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Picture Frame Fence",
    "description": "Premium picture frame cedar fences with clean trim details, strong structure, and precise planning with Fence Genius technology.",
    "brand": {
      "@type": "Brand",
      "name": "MyFence.com"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247"
    }
  };

  return (
    <>
      <Seo
        title="Picture Frame Fence | Premium Cedar Privacy | MyFence.com"
        description="Premium picture frame cedar fences in Seattle. Clean trim, strong structure, and precise planning with Fence Genius. Get a fast, free quote today."
        canonical="https://myfence.com/fence-styles/picture-frame-fence"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Breadcrumb Navigation */}
        <nav className="bg-muted/30 py-3 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/fence-styles" className="text-muted-foreground hover:text-primary transition-colors">Fence Styles</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">Picture Frame Fence</span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/fence-styles" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fence Styles
          </Link>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="secondary" className="w-fit">Most Popular</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Picture Frame Fence
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A picture frame fence adds a clean, finished border around every panel. Built in premium cedar with precise trim details for exceptional curb appeal and privacy.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Premium Look
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Cedar Construction
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Fence Genius Precision
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={() => setIsQuoteModalOpen(true)} className="flex items-center gap-2">
                  Get Free Quote
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" asChild className="flex items-center gap-2">
                  <Link to="/contact">
                    Contact Us
                    <Mail className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImg}
                alt={altHero}
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
                Picture Frame Fence Features
              </CardTitle>
              <CardDescription>
                Our picture frame fence combines premium cedar construction with refined trim details for the ultimate in curb appeal and privacy.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Premium Trim Border</h3>
                </div>
                <p className="text-muted-foreground">
                  Finished border trim frames each panel for a refined, custom look that elevates your property's appearance.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Strong Cedar Rails</h3>
                </div>
                <p className="text-muted-foreground">
                  Two 2x4 rails screwed directly into posts for maximum strength and long-term stability.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Excellent Privacy</h3>
                </div>
                <p className="text-muted-foreground">
                  Clean lines that complement modern and classic homes while providing complete privacy.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Stainless Steel Fasteners</h3>
                </div>
                <p className="text-muted-foreground">
                  Standard stainless steel fasteners prevent corrosion and black streaking common with galvanized hardware.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Fence Genius Planning</h3>
                </div>
                <p className="text-muted-foreground">
                  Precisely planned layouts using <Link to="/fence-genius" className="text-primary hover:underline">Fence Genius technology</Link> to reduce surprises and change orders.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">HOA Friendly</h3>
                </div>
                <p className="text-muted-foreground">
                  Clean, professional appearance that meets most HOA requirements across Seattle neighborhoods.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gallery Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Picture Frame Fence Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See the beauty and craftsmanship of our picture frame fences. Each installation showcases premium cedar materials and professional workmanship.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.gallery.slice(0, 9).map((image, index) => (
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
                Why Choose Picture Frame Fence?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Seattle's Most Popular Style</h3>
                  <p className="text-muted-foreground">
                    Chosen by homeowners across Seattle and the Eastside for its perfect balance of privacy, curb appeal, and durability in Pacific Northwest weather.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Premium Materials</h3>
                  <p className="text-muted-foreground">
                    We use #1 grade cedar as standard, with clear cedar upgrades available. All rails are screwed directly into posts for superior strength.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Professional Construction</h3>
                  <p className="text-muted-foreground">
                    4.125" x 4.125" x 9' posts set deeper than 2' with approximately 180 lbs of properly mixed concrete for maximum stability.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Fence Genius Technology</h3>
                  <p className="text-muted-foreground">
                    Our proprietary <Link to="/fence-genius" className="text-primary hover:underline">planning software</Link> ensures every panel follows the ground contour perfectly, delivering the exact result you expect.
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
                    MyFence.com has been serving the Pacific Northwest with premium fencing solutions for three decades. Our picture frame fences represent the perfect blend of traditional craftsmanship and modern technology.
                  </p>
                  <p className="text-muted-foreground">
                    {WARRANTY_CONSTANTS.ABOUT_TEXT}, we take pride in delivering exceptional results with <Link to="/fence-genius" className="text-primary hover:underline">Fence Genius precision planning</Link>.
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

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready for Your Picture Frame Fence?</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Get a free, no-obligation quote for your picture frame fence project. Our experts will help you design the perfect solution for your property.
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
                    <Link to="/contact">Contact Our Experts</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Virtual Quote Tool */}
          <VirtualQuoteTool fenceStyleName="Picture Frame Fence" />

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

export default PictureFrameFence;