import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Clock, Wrench, Star, CheckCircle } from 'lucide-react';
import QuoteModal from '@/components/QuoteModal';
import InlineQuoteForm from '@/components/forms/InlineQuoteForm';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

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
    "brand": {
      "@type": "Brand",
      "name": "MyFence.com"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
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
        title="Horizontal Cedar Fence | Framed Construction | MyFence.com"
        description="Premium horizontal cedar fence with external 2x4 frame, center vertical rail support, and grade 1 cedar. Professional installation with 30+ years experience."
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-8">
          <nav className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/fence-styles" className="hover:text-primary">Fence Styles</Link>
            <span className="mx-2">/</span>
            <span>Horizontal Fence</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
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
                  <Link to="/contact">Contact Our Experts</Link>
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
        <section className="bg-muted/50 py-16">
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

        {/* Company Info */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Family-Owned Excellence Since 1994</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over 30 years of experience, we take pride in delivering superior horizontal fence 
                construction that stands the test of time. Our framed approach ensures your investment 
                will provide lasting beauty and functionality for decades to come.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Fences Installed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5★</div>
                  <div className="text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready For Your Premium Horizontal Fence?
                </h2>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Get a free quote today and discover why our framed horizontal fence construction 
                  is the choice of discerning homeowners who demand the best.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Get Free Quote Today
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
                    <Link to="/contact">Contact Our Experts</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Inline Quote Form */}
        <section className="py-16 bg-muted/30">
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