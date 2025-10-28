import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock, CheckCircle, Sun, AlertCircle } from "lucide-react";
import Seo from "@/components/Seo";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";

interface ServiceAreaTemplateProps {
  city: string;
  state: string;
  zipCodes?: string[];
  neighborhoods?: string[];
  landmarks?: string[];
  localChallenges?: string[];
  localSolutions?: string[];
  climateDescription?: string;
  articleContent?: React.ReactNode;
  faqStructuredData?: any;
}

const ServiceAreaTemplate = ({ 
  city, 
  state, 
  zipCodes = [], 
  neighborhoods = [],
  landmarks = [],
  localChallenges = [],
  localSolutions = [],
  climateDescription = "",
  articleContent,
  faqStructuredData
}: ServiceAreaTemplateProps) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const isMobile = useIsMobile();
  
  const breadcrumbData = useMemo(() => ({
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
        "name": "Service Areas",
        "item": "https://myfence.com/service-areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": city,
        "item": `https://myfence.com/service-areas/${citySlug}`
      }
    ]
  }), [city, citySlug]);

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://myfence.com/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`,
    "name": "MyFence.com",
    "image": "https://myfence.com/myfence-logo.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://myfence.com/myfence-logo.png"
    },
    "url": "https://myfence.com",
    "telephone": "+12534551885",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "22927 257th Ave SE",
      "addressLocality": "Maple Valley",
      "addressRegion": "WA",
      "postalCode": "98038",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.3394",
      "longitude": "-122.0461"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "founder": {
      "@type": "Person",
      "name": "Andrew Knudsen"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": "Washington",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": state
        }
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fence Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fence Installation",
            "description": `Professional fence installation services in ${city}, ${state}`,
            "areaServed": {
              "@type": "City",
              "name": city
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fence Repair",
            "description": `Expert fence repair and maintenance in ${city}, ${state}`,
            "areaServed": {
              "@type": "City",
              "name": city
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fence Staining",
            "description": `Professional fence staining and finishing services in ${city}, ${state}`,
            "areaServed": {
              "@type": "City",
              "name": city
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fence Replacement",
            "description": `Complete fence replacement services in ${city}, ${state}`,
            "areaServed": {
              "@type": "City",
              "name": city
            }
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/myfence.com.official",
      "https://www.instagram.com/myfence.com.official/",
      "https://twitter.com/MyFenceDotCom",
      "https://www.youtube.com/@fencegenius",
      "https://www.linkedin.com/company/myfence-com/",
      "https://www.pinterest.com/MyFenceDotCom/",
      "https://www.tiktok.com/@myfence.com"
    ]
  }), [city, citySlug, state]);

  return (
    <>
      <Seo 
        title={`Fence Installation & Repair in ${city}, ${state} | MyFence.com`}
        description={`Professional fence installation and repair services in ${city}, ${state}. Expert craftsmanship, competitive pricing, and quality materials. Call (253) 455-1885 for a free quote.`}
        canonical={`https://myfence.com/service-areas/${citySlug}`}
        structuredData={faqStructuredData ? [breadcrumbData, structuredData, faqStructuredData] : [breadcrumbData, structuredData]}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              {/* Hero Content */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">Serving {city}, {state}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Professional Fence Services in {city}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Expert fence installation, repair, and staining services for residential and commercial properties in {city}, {state}.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="tel:12534551885">
                    <Button size="lg" variant="hero" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (253) 455-1885
                    </Button>
                  </a>
                  <Link to="/quote">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Service Area Map */}
              <div className="w-full">
                <GoogleBusinessMap 
                  city={city}
                  state={state}
                  radiusMiles={4}
                  showBusinessInfo={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container">
            {isMobile ? (
              <Accordion type="single" collapsible className="max-w-4xl mx-auto">
                <AccordionItem value="services">
                  <AccordionTrigger className="text-2xl font-bold">
                    Our Services in {city}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-6 pt-4">
                      {useMemo(() => [
                        {
                          title: "Fence Installation",
                          description: `New fence installation with premium materials and expert craftsmanship throughout ${city}.`
                        },
                        {
                          title: "Fence Repair",
                          description: `Quick and reliable fence repair services to restore your fence's functionality and appearance.`
                        },
                        {
                          title: "Fence Staining",
                          description: `Professional staining and finishing to protect and enhance your wood fence.`
                        },
                        {
                          title: "Fence Replacement",
                          description: `Complete fence replacement services with minimal disruption to your property.`
                        },
                        {
                          title: "Custom Designs",
                          description: `Custom fence designs tailored to your property's unique style and requirements.`
                        },
                        {
                          title: "Commercial Fencing",
                          description: `Durable commercial fencing solutions for businesses in ${city}.`
                        }
                      ], [city]).map((service, index) => (
                        <Card key={index} className="p-6">
                          <CheckCircle className="h-8 w-8 text-primary mb-4" />
                          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Services in {city}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {useMemo(() => [
                    {
                      title: "Fence Installation",
                      description: `New fence installation with premium materials and expert craftsmanship throughout ${city}.`
                    },
                    {
                      title: "Fence Repair",
                      description: `Quick and reliable fence repair services to restore your fence's functionality and appearance.`
                    },
                    {
                      title: "Fence Staining",
                      description: `Professional staining and finishing to protect and enhance your wood fence.`
                    },
                    {
                      title: "Fence Replacement",
                      description: `Complete fence replacement services with minimal disruption to your property.`
                    },
                    {
                      title: "Custom Designs",
                      description: `Custom fence designs tailored to your property's unique style and requirements.`
                    },
                    {
                      title: "Commercial Fencing",
                      description: `Durable commercial fencing solutions for businesses in ${city}.`
                    }
                  ], [city]).map((service, index) => (
                    <Card key={index} className="p-6">
                      <CheckCircle className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {isMobile ? (
                <Accordion type="single" collapsible>
                  <AccordionItem value="why-choose">
                    <AccordionTrigger className="text-2xl font-bold">
                      Why Choose MyFence.com in {city}?
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-8 pt-4">
                        <div className="flex gap-4">
                          <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
                            <p className="text-muted-foreground">
                              We respect your time and complete projects efficiently without compromising quality.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                            <p className="text-muted-foreground">
                              Fully licensed contractors with comprehensive insurance for your peace of mind.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                            <p className="text-muted-foreground">
                              We use only premium materials to ensure your fence stands the test of time.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold mb-2">Local Experts</h3>
                            <p className="text-muted-foreground">
                              Deep knowledge of {city} regulations, permits, and local building codes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Why Choose MyFence.com in {city}?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
                        <p className="text-muted-foreground">
                          We respect your time and complete projects efficiently without compromising quality.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                        <p className="text-muted-foreground">
                          Fully licensed contractors with comprehensive insurance for your peace of mind.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                        <p className="text-muted-foreground">
                          We use only premium materials to ensure your fence stands the test of time.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Local Experts</h3>
                        <p className="text-muted-foreground">
                          Deep knowledge of {city} regulations, permits, and local building codes.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Local Expertise Section */}
        {climateDescription && (
          <section className="py-16 bg-muted/30">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <Card className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Sun className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Local Climate Expertise</h2>
                      <p className="text-muted-foreground">Understanding {city}'s unique conditions</p>
                    </div>
                  </div>
                  <p className="text-lg mb-6">{climateDescription}</p>
                  
                  {localChallenges.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-primary" />
                        Local Fencing Challenges:
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {localChallenges.map((challenge, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {localSolutions.length > 0 && (
                    <div className="mt-8 pt-6 border-t">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Our Local Solutions</h3>
                          <p className="text-muted-foreground">Tailored for {city} properties</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {localSolutions.map((solution, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </section>
        )}


        {/* Coverage Area with Neighborhoods */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {isMobile ? (
                <Accordion type="single" collapsible>
                  <AccordionItem value="coverage">
                    <AccordionTrigger className="text-2xl font-bold">
                      Neighborhoods & Areas We Serve
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground text-center mb-8">
                        We're proud to provide expert fence installation and repair services throughout {city}, {state}
                      </p>
                      
                      {neighborhoods.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold mb-4 text-center">Popular Neighborhoods</h3>
                          <div className="flex flex-wrap justify-center gap-3">
                            {neighborhoods.map((neighborhood) => (
                              <span key={neighborhood} className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                                {neighborhood}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {landmarks.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold mb-4 text-center">Serving Properties Near</h3>
                          <div className="flex flex-wrap justify-center gap-3">
                            {landmarks.map((landmark) => (
                              <span key={landmark} className="px-4 py-2 bg-muted rounded-lg text-sm">
                                {landmark}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {zipCodes.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-center">Zip Codes</h3>
                          <div className="flex flex-wrap justify-center gap-3">
                            {zipCodes.map((zip) => (
                              <span key={zip} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">
                                {zip}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                    Neighborhoods & Areas We Serve in {city}
                  </h2>
                  <p className="text-muted-foreground text-center mb-8">
                    We're proud to provide expert fence installation and repair services throughout {city}, {state}
                  </p>
                  
                  {neighborhoods.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-center">Popular Neighborhoods</h3>
                      <div className="flex flex-wrap justify-center gap-3">
                        {neighborhoods.map((neighborhood) => (
                          <span key={neighborhood} className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                            {neighborhood}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {landmarks.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-center">Serving Properties Near</h3>
                      <div className="flex flex-wrap justify-center gap-3">
                        {landmarks.map((landmark) => (
                          <span key={landmark} className="px-4 py-2 bg-muted rounded-lg text-sm">
                            {landmark}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {zipCodes.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-center">Zip Codes</h3>
                      <div className="flex flex-wrap justify-center gap-3">
                        {zipCodes.map((zip) => (
                          <span key={zip} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">
                            {zip}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get Your Free Quote Today
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <InlineQuoteForm context={`Service Area: ${city}, ${state}`} />
            </div>
          </div>
        </section>

        {/* Article Content */}
        {articleContent && (
          <section className="py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-a:underline prose-a:decoration-2 prose-a:underline-offset-4 hover:prose-a:decoration-primary">
                {articleContent}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ServiceAreaTemplate;
