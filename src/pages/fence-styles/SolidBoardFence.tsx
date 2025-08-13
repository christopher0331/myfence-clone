import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Users, DollarSign, AlertTriangle, ArrowLeft, Phone, Mail } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

// Images for Solid Board Fence
const heroImg = "/lovable-uploads/ee554667-1407-47ea-a6f4-ec25700f4bcb.png"; // New cedar fence installation
const gallery = [
  { src: "/lovable-uploads/cf328f99-f352-4f8e-85f2-c95ccad2a4e7.png", alt: "Fresh cedar solid board fence installation showing clean lines and budget-friendly construction" },
  { src: "/lovable-uploads/30c81d4a-1f53-4e00-b4d8-b01bbab735b3.png", alt: "Solid board fence with MyFence.com branding showcasing professional installation" },
  { src: "/lovable-uploads/05c3b669-599a-45a4-8f5b-1ab86199a24a.png", alt: "Before and after comparison showing weathered fence replacement with new solid board fence" },
  { src: "/lovable-uploads/3dc197eb-8ef5-48d6-a325-717bae4443fb.png", alt: "Before and after with 3D rendering showing transformation from old to new solid board fence" },
];

const fatherSonImg = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";

const SolidBoardFence = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Solid Board Fence",
    "description": "Budget-friendly solid board fencing with 2 rails and stainless steel fasteners. Most economical fence option for privacy and property boundaries.",
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
      "ratingValue": "4.6",
      "reviewCount": "89"
    }
  };

  return (
    <>
      <Seo
        title="Solid Board Fence | Budget-Friendly Privacy Fence | MyFence.com"
        description="Economical solid board fencing with 2 rails and stainless steel fasteners. Most budget-friendly fence option for privacy. Professional installation available."
        canonical="https://myfence.com/fence-styles/solid-board-fence"
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
              <span className="text-foreground font-medium">Solid Board Fence</span>
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
                <Badge variant="secondary" className="w-fit">Budget-Friendly Option</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Solid Board Fence
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The most economical fencing option featuring 2 rails with fence boards attached using stainless steel fasteners. Perfect for budget-conscious property owners seeking basic privacy.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  Most Affordable
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Stainless Steel Fasteners
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 border-amber-400 text-amber-700">
                  <AlertTriangle className="w-3 h-3" />
                  Budget Construction
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
                alt="New cedar solid board fence installation with clean lines and professional construction"
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
                <DollarSign className="w-5 h-5 text-primary" />
                Solid Board Fence Features
              </CardTitle>
              <CardDescription>
                Our solid board fence provides basic privacy at the most economical price point, though it comes with some limitations to consider.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Most Budget-Friendly</h3>
                </div>
                <p className="text-muted-foreground">
                  The most economical fencing option available, perfect for tight budgets requiring basic privacy.
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
                  <h3 className="font-semibold">Simple 2-Rail Construction</h3>
                </div>
                <p className="text-muted-foreground">
                  Streamlined construction with 2 rails keeps material costs down while providing functional privacy.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-semibold">No Top Cap Protection</h3>
                </div>
                <p className="text-muted-foreground">
                  Missing 2x4 cap leaves fence board tops exposed to weather, creating potential for rot over time.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-semibold">Weather Vulnerability</h3>
                </div>
                <p className="text-muted-foreground">
                  Exposed grain at board tops can absorb rainwater, potentially leading to rot and shorter lifespan.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Professional Installation</h3>
                </div>
                <p className="text-muted-foreground">
                  Expert installation ensures proper board alignment and fastener placement for best possible performance.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gallery Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Solid Board Fence Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See our solid board fence installations and transformations. These before and after photos showcase the immediate improvement this budget-friendly option provides.
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

          {/* Important Considerations */}
          <Card className="mb-12 border-amber-200 bg-amber-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <AlertTriangle className="w-5 h-5" />
                Important Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-800">Cost vs. Longevity Trade-off</h3>
                  <p className="text-amber-700">
                    While this is our most affordable option, the lack of a top cap means fence boards are vulnerable to weather damage. The exposed grain at the top can absorb rainwater, leading to rot over time.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-amber-800">When This Fence Works Best</h3>
                  <p className="text-amber-700">
                    Ideal for temporary privacy needs, rental properties, or situations where immediate cost savings outweigh long-term durability concerns.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-800">Recommended Alternatives</h3>
                  <p className="text-amber-700">
                    For slightly more investment, our Picture Frame or Craftsman Style fences include top caps that protect the fence boards and significantly extend fence life.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-amber-800">Maintenance Considerations</h3>
                  <p className="text-amber-700">
                    Regular staining and sealing of the top edges is recommended to help protect against moisture absorption and extend the fence's lifespan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Why Choose Our Solid Board Fence?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Honest Assessment</h3>
                  <p className="text-muted-foreground">
                    We're upfront about the limitations of this fence style. While it's the most budget-friendly option, we make sure you understand the trade-offs so you can make an informed decision.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Quality Materials</h3>
                  <p className="text-muted-foreground">
                    Even in our most economical fence, we use stainless steel fasteners to prevent streaking and ensure the best possible performance within this price range.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Professional Installation</h3>
                  <p className="text-muted-foreground">
                    Our experienced installers ensure proper construction techniques, maximizing the performance and appearance of your budget-friendly fence.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Immediate Privacy</h3>
                  <p className="text-muted-foreground">
                    Despite being our most economical option, this fence still provides immediate privacy and property boundary definition at an affordable price point.
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
                    MyFence.com has been serving the Pacific Northwest with honest, reliable fencing solutions for three decades. We believe in transparency about our products, including the limitations of budget options.
                  </p>
                  <p className="text-muted-foreground">
                    Our solid board fence represents an entry-level option that still maintains our commitment to quality installation and honest communication about what you can expect.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">30+ Years Experience</Badge>
                    <Badge variant="secondary">Family Owned</Badge>
                    <Badge variant="secondary">Honest Advice</Badge>
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
                <h2 className="text-3xl font-bold">Ready for Your Budget-Friendly Fence?</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Get a free, no-obligation quote for your solid board fence project. We'll help you understand all your options and make the best choice for your budget and needs.
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

export default SolidBoardFence;