import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Check, Shield, Ruler, Wind, Trees, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import OptimizedImage from "@/components/OptimizedImage";
import horizontalLattice1 from "@/assets/lattice/horizontal-lattice-vertical.jpg";
import horizontalLattice2 from "@/assets/lattice/vertical-lattice-gate.jpg";
import verticalLattice from "@/assets/lattice/horizontal-lattice-backyard.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const LatticeToppers = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

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

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are lattice toppers code compliant in Washington State?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Washington State building codes generally allow 6-foot solid privacy fences and prohibit 8-foot solid fences. Adding a 2-foot lattice topper with approximately 50% airflow satisfies code requirements while giving you 8 feet of total height. The lattice design ensures proper airflow, which is the key requirement for code compliance."
        }
      },
      {
        "@type": "Question",
        "name": "How much do 2-foot lattice toppers cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lattice toppers typically add $15-25 per linear foot to your fence installation cost. The total cost depends on the lattice pattern chosen (horizontal, vertical, or custom), post requirements, and project size. Contact us for a free quote tailored to your specific project."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to install lattice toppers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Installation time depends on project size, but lattice toppers typically add 1-2 days to a standard fence installation. This includes time for installing larger 4x6 posts, pouring deeper 36-inch footings, and constructing the lattice panels. We'll provide an accurate timeline during your free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need larger fence posts for lattice toppers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we recommend full 4x6x12' fence posts for lattice topper installations. These larger posts provide the structural support needed for 8-foot total height and withstand increased wind loads. We also pour deeper footings (approximately 36 inches) to ensure long-term stability."
        }
      },
      {
        "@type": "Question",
        "name": "What lattice patterns are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our most popular options include horizontal lattice strips, vertical alternating boards, and custom patterns. The horizontal style is our fan favorite for its modern, clean appearance. We can also create custom lattice designs to match your property's aesthetic. All patterns maintain approximately 50% airflow for code compliance."
        }
      },
      {
        "@type": "Question",
        "name": "Can lattice toppers be added to existing fences?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In some cases, yes. However, existing fences must have posts strong enough to support the additional height and wind load. We'll need to inspect your current fence structure to determine if it can safely support a lattice topper or if post reinforcement is needed. Contact us for a free assessment."
        }
      }
    ]
  };

  const galleryImages = [
    {
      src: horizontalLattice1,
      alt: "6-foot cedar fence with 2-foot horizontal lattice topper along residential property line"
    },
    {
      src: horizontalLattice2,
      alt: "Cedar fence with vertical alternating board lattice topper and custom double gate"
    },
    {
      src: verticalLattice,
      alt: "Modern horizontal lattice topper on cedar fence creating beautiful backyard privacy"
    }
  ];

  return (
    <main>
      <Seo
        title="2-Foot Lattice Toppers | Code-Compliant 8-Foot Fences"
        description="Add 2-foot lattice toppers to your 6-foot fence for extra height and privacy while staying Washington State code compliant. Horizontal, vertical, or custom patterns."
        canonical="https://myfence.com/fence-upgrades/lattice-toppers"
        image={horizontalLattice1}
        structuredData={[breadcrumbData, serviceStructuredData, faqData]}
      />

      {/* Hero Section */}
      <section className="container py-3 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-3">Code-Compliant Height Solution</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            2-Foot Lattice Toppers: Extra Height, Privacy & Style
          </h1>
          <p className="text-xl text-muted-foreground">
            Get the 8-foot fence height you want while staying compliant with Washington State building codes
          </p>
        </div>
      </section>

      {/* Image Gallery Carousel */}
      <section className="md:container pt-0 pb-0 md:py-8">
        <div className="max-w-4xl md:mx-auto">
          {/* Desktop: Carousel */}
          <Carousel 
            className="w-full hidden md:block"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent className="md:ml-0">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:pl-4">
                  <div className="p-1">
                    <Card className="border-2 border-primary rounded-lg p-3">
                      <AspectRatio ratio={16/9} className="overflow-hidden rounded-md">
                        <OptimizedImage
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
            <CarouselPrevious className="flex" />
            <CarouselNext className="flex" />
          </Carousel>

          {/* Mobile: Simple stacked images */}
          <div className="md:hidden space-y-4 p-4">
            {galleryImages.map((image, index) => (
              <Card key={index} className="border-2 border-primary rounded-lg overflow-hidden">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </Card>
            ))}
          </div>
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

      {/* FAQ Section */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-primary" />
                <CardTitle className="text-3xl">Frequently Asked Questions</CardTitle>
              </div>
              <CardDescription>
                Common questions about lattice toppers and code compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Are lattice toppers code compliant in Washington State?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Washington State building codes generally allow 6-foot solid privacy fences and prohibit 8-foot solid fences. Adding a 2-foot lattice topper with approximately 50% airflow satisfies code requirements while giving you 8 feet of total height. The lattice design ensures proper airflow, which is the key requirement for code compliance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How much do 2-foot lattice toppers cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Lattice toppers typically add $15-25 per linear foot to your fence installation cost. The total cost depends on the lattice pattern chosen (horizontal, vertical, or custom), post requirements, and project size. Contact us for a free quote tailored to your specific project.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How long does it take to install lattice toppers?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Installation time depends on project size, but lattice toppers typically add 1-2 days to a standard fence installation. This includes time for installing larger 4x6 posts, pouring deeper 36-inch footings, and constructing the lattice panels. We'll provide an accurate timeline during your free consultation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Do I need larger fence posts for lattice toppers?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we recommend full 4x6x12' fence posts for lattice topper installations. These larger posts provide the structural support needed for 8-foot total height and withstand increased wind loads. We also pour deeper footings (approximately 36 inches) to ensure long-term stability.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    What lattice patterns are available?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our most popular options include horizontal lattice strips, vertical alternating boards, and custom patterns. The horizontal style is our fan favorite for its modern, clean appearance. We can also create custom lattice designs to match your property's aesthetic. All patterns maintain approximately 50% airflow for code compliance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    Can lattice toppers be added to existing fences?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    In some cases, yes. However, existing fences must have posts strong enough to support the additional height and wind load. We'll need to inspect your current fence structure to determine if it can safely support a lattice topper or if post reinforcement is needed. Contact us for a free assessment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
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
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/fence-styles">Explore All Styles</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default LatticeToppers;
