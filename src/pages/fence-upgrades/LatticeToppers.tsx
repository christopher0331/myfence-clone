import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Shield, Ruler, Wind, Trees } from "lucide-react";
import horizontalLattice1 from "@/assets/lattice/horizontal-lattice-1.jpg";
import horizontalLattice2 from "@/assets/lattice/horizontal-lattice-2.jpg";
import verticalLattice from "@/assets/lattice/vertical-lattice.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LatticeToppers = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myfence.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Fence Styles",
        "item": "https://myfence.com/fence-styles"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Lattice Toppers",
        "item": "https://myfence.com/fence-upgrades/lattice-toppers"
      }
    ]
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "2-Foot Lattice Topper Installation",
    "description": "Add 2-foot lattice toppers to your 6-foot fence for extra height, privacy, and style while remaining code compliant in Washington State.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "MyFence.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Seattle",
        "addressRegion": "WA",
        "addressCountry": "US"
      },
      "telephone": "+1-253-455-1885"
    },
    "areaServed": {
      "@type": "City",
      "name": "Seattle",
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    }
  };

  const galleryImages = [
    {
      src: horizontalLattice1,
      alt: "6-foot cedar fence with 2-foot horizontal lattice topper adding style and privacy to backyard"
    },
    {
      src: horizontalLattice2,
      alt: "Modern horizontal lattice topper on cedar fence with 50% airflow spacing"
    },
    {
      src: verticalLattice,
      alt: "Cedar fence with vertical alternating board lattice topper and custom gate"
    }
  ];

  return (
    <main>
      <Seo
        title="2-Foot Lattice Toppers | Code-Compliant 8-Foot Fences"
        description="Add 2-foot lattice toppers to your 6-foot fence for extra height and privacy while staying Washington State code compliant. Horizontal, vertical, or custom patterns."
        canonical="https://myfence.com/fence-upgrades/lattice-toppers"
        image={horizontalLattice1}
        structuredData={[breadcrumbData, serviceStructuredData]}
      />

      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4">Code-Compliant Height Solution</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            2-Foot Lattice Toppers: Extra Height, Privacy & Style
          </h1>
          <p className="text-xl text-muted-foreground">
            Get the 8-foot fence height you want while staying compliant with Washington State building codes
          </p>
        </div>
      </section>

      {/* Image Gallery Carousel */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* What Are Lattice Toppers */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">The Washington State Height Solution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                In Washington State, building codes allow for 6-foot solid privacy fences but generally prohibit 8-foot solid privacy fences. The solution? Add a 2-foot lattice topper to your 6-foot solid fence for the extra height you need while maintaining code compliance.
              </p>
              <p className="text-lg">
                A lattice topper features approximately 50% airflow, which satisfies code requirements while adding extra privacy, style, and a beautiful perimeter to your backyard. It's the perfect balance between height, aesthetics, and compliance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Benefits of Lattice Toppers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Ruler className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Code-Compliant 8-Foot Height</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Get the height you want without violating local building codes. The 50% airflow design keeps you compliant while adding 2 feet to your fence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Enhanced Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Gain an extra 2 feet of privacy screening while maintaining proper airflow. Perfect for blocking views from neighboring second-story windows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trees className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Architectural Style</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Add visual interest and elegance to your fence with horizontal, vertical, or custom lattice patterns that complement your home's design.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wind className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Wind-Load Engineered</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Built with 4x6x12' posts and 36" deep footings to withstand Pacific Northwest wind loads while maintaining structural integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Construction Specifications */}
      <section className="container py-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Professional Construction Standards</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Check className="text-primary" />
                    Post Requirements
                  </h3>
                  <p className="text-muted-foreground ml-8">
                    We use full 4x6x12' fence posts for lattice topper installations. These larger posts provide the structural support needed for 8-foot total fence height and ensure long-term stability.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Check className="text-primary" />
                    Foundation Depth
                  </h3>
                  <p className="text-muted-foreground ml-8">
                    Large post footings are poured approximately 36 inches deep to withstand the increased wind loads that come with additional fence height. This ensures your fence remains stable through Pacific Northwest storms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Check className="text-primary" />
                    Airflow Design
                  </h3>
                  <p className="text-muted-foreground ml-8">
                    The lattice section features approximately 50% airflow spacing, which is the recommended standard for code compliance and proper wind management while still providing effective privacy screening.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Styles */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Popular Lattice Styles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Horizontal Lattice Strips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our most popular option. Clean horizontal lines that create a modern, contemporary look while maximizing privacy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vertical Alternating Boards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vertical spacing creates visual height and complements traditional fence designs with timeless appeal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work with us to create unique lattice patterns that match your vision and complement your property's style.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <Card className="max-w-3xl mx-auto text-center bg-primary/5 border-primary/20">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Code-Compliant 8-Foot Fences?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get a free quote for your lattice topper installation. We'll help you choose the perfect style for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/fence-styles">Explore All Styles</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default LatticeToppers;
