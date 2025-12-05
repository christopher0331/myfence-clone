import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, CheckCircle, Sun } from "lucide-react";
import Seo from "@/components/Seo";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import { useMemo, useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArticleSummary } from "@/components/ArticleSummary";
import FenceStylesPreview from "@/components/FenceStylesPreview";

export interface Neighborhood {
  name: string;
  description: string;
  link?: string;
}

interface ServiceAreaTemplateProps {
  city: string;
  state: string;
  heroTitle?: string;
  heroDescription?: string;
  metaTitle?: string;
  metaDescription?: string;
  zipCodes?: string[];
  neighborhoods?: (string | Neighborhood)[];
  landmarks?: string[];
  localChallenges?: string[];
  localSolutions?: string[];
  climateDescription?: string;
  articleContent?: React.ReactNode;
  faqStructuredData?: any;
  enhancedBusinessData?: any;
}

const ServiceAreaTemplate = ({ 
  city, 
  state,
  heroTitle,
  heroDescription,
  metaTitle,
  metaDescription,
  zipCodes = [], 
  neighborhoods = [],
  landmarks = [],
  localChallenges = [],
  localSolutions = [],
  climateDescription = "",
  articleContent,
  faqStructuredData,
  enhancedBusinessData
}: ServiceAreaTemplateProps) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [showFullClimate, setShowFullClimate] = useState(false);
  
  // Load reviews from Supabase
  useEffect(() => {
    const loadReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('review_date', { ascending: false });
      
      if (error) {
        console.error('Error loading reviews:', error);
      } else if (data) {
        setReviews(data);
      }
    };

    loadReviews();
  }, []);
  
  // Load Trustindex reviews widget
  useEffect(() => {
    console.log('[ServiceArea] useEffect - Trustindex widget setup running');
    if (!reviewsRef.current) return;
    
    // Create the widget container div with proper Trustindex attributes
    const widgetDiv = document.createElement("div");
    widgetDiv.setAttribute("data-widget-id", "d273c79511b386516c861cd858a");
    widgetDiv.className = "trustindex-widget";
    reviewsRef.current.appendChild(widgetDiv);
    
    const s = document.createElement("script");
    s.src = "https://cdn.trustindex.io/loader.js?d273c79511b386516c861cd858a";
    s.async = true;
    s.defer = true;
    
    reviewsRef.current.appendChild(s);
    
    return () => {
      s.remove();
      widgetDiv.remove();
      if (reviewsRef.current) reviewsRef.current.innerHTML = "";
    };
  }, []);
  
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviews.length > 0 ? reviews.length.toString() : "150"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author_name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      },
      "datePublished": review.review_date,
      "reviewBody": review.review_text
    })),
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
  }), [city, citySlug, state, reviews]);

  return (
    <>
      <Seo 
        title={metaTitle || `Fence Installation & Repair in ${city}, ${state} | MyFence.com`}
        description={metaDescription || `Professional fence installation and repair services in ${city}, ${state}. Expert craftsmanship, competitive pricing, and quality materials. Call (253) 455-1885 for a free quote.`}
        canonical={`https://myfence.com/service-areas/${citySlug}`}
        structuredData={[
          breadcrumbData,
          ...(enhancedBusinessData ? [enhancedBusinessData] : [structuredData]),
          ...(faqStructuredData ? (Array.isArray(faqStructuredData) ? faqStructuredData : [faqStructuredData]) : [])
        ]}
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
                  {heroTitle || `Professional Fence Services in ${city}`}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {heroDescription || `Expert fence installation, repair, and staining services for residential and commercial properties in ${city}, ${state}.`}
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
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Services in {city}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {useMemo(() => [
                {
                  title: `Fence Installation in ${city}`,
                  description: `New fence installation with premium materials and expert craftsmanship throughout ${city}.`
                },
                {
                  title: `Fence Repair in ${city}`,
                  description: `Quick and reliable fence repair services to restore your fence's functionality and appearance.`
                },
                {
                  title: `Fence Staining in ${city}`,
                  description: `Professional staining and finishing to protect and enhance your wood fence.`
                },
                {
                  title: `Fence Replacement in ${city}`,
                  description: `Complete fence replacement services with minimal disruption to your property.`
                },
                {
                  title: `Custom Designs in ${city}`,
                  description: `Custom fence designs tailored to your property's unique style and requirements.`
                },
                {
                  title: `Commercial Fencing in ${city}`,
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
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
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
            </div>
          </div>
        </section>

        {/* Trustindex Reviews Section */}
        <section className="py-12 md:py-16 bg-muted/50" aria-labelledby="reviews-heading">
          <div className="container">
            <h2 id="reviews-heading" className="text-2xl md:text-3xl font-bold">
              What Our {city} Customers Say
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Choosing a {city} fence contractor is an investment—make it with the father & son team that builds it right the first time.
            </p>
            <Card className="mt-6">
              <CardContent className="p-6">
                <div ref={reviewsRef} className="w-full" aria-live="polite"></div>
                <noscript>
                  <p className="text-sm text-muted-foreground">Enable JavaScript to view our Trustindex reviews.</p>
                </noscript>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Summary Section */}
        <section className="py-16">
          <div className="container">
            <ArticleSummary
              pageTitle={`${city} Fence Services - MyFence.com`}
              pageContent={`Write a professional service area summary for MyFence.com in ${city}, ${state}. Highlight how MyFence.com serves ${city} with professional fence installation, repair, and staining services. Emphasize the use of exclusive Fence Genius technology that enables off-site prefabrication of custom, slope-following fence panels and gates. Note that this patented system ensures precision, quality, and efficiency while maintaining competitive pricing with traditional installers. Mention the father-son engineering team and their commitment to raising standards in fence building throughout the ${city} area.`}
            />
          </div>
        </section>

        {/* North Bend Fencing Video Section */}
        {city === "North Bend" && (
          <section className="py-12 md:py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  North Bend Fencing
                </h2>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    See our mountain fencing expertise in action. From steep terrain installations to wildlife-resistant designs, we've spent decades perfecting the techniques needed for North Bend's challenging conditions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every fence we build in North Bend is engineered for the unique demands of mountain living - snow loads, rocky soil, and wildlife pressure that lowland contractors never encounter.
                  </p>
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9/16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/5TJUg_Umx4s?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title="North Bend Fencing"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Bonney Lake Fencing Video Section */}
        {city === "Bonney Lake" && (
          <section className="py-12 md:py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Bonney Lake Fencing
                </h2>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Watch our expert fence installation process in Bonney Lake. We combine precision craftsmanship with cutting-edge Fence Genius technology to deliver superior results for your property.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From Tehaleh's master-planned neighborhoods to Mountain Creek estates, every Bonney Lake fence we build reflects our commitment to quality, punctuality, and lasting value.
                  </p>
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9/16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/5SicLB5q2kA?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title="Bonney Lake Fencing"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Issaquah Fencing Video Section */}
        {city === "Issaquah" && (
          <section className="py-12 md:py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Issaquah Fencing
                </h2>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    See our mountain-smart fence installations in Issaquah. From Tiger Mountain foothills to Squak Mountain neighborhoods, we build fences engineered for wildlife pressure and Pacific Northwest weather.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every Issaquah fence balances privacy with your property's natural beauty—protecting your outdoor living spaces while preserving the mountain views that make this community special.
                  </p>
                </div>
                <div className="w-full">
                  <AspectRatio ratio={9/16} className="bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/4Ls-aTAtQsw?controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080&mute=1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      title="Issaquah Fencing"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Local Expertise Section */}
        {climateDescription && (
          <section className="py-16 bg-muted/50">
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
                  <div className="text-lg">
                    {showFullClimate ? climateDescription : (climateDescription.length > 280 ? `${climateDescription.slice(0, 280).trimEnd()}…` : climateDescription)}
                    {climateDescription.length > 280 && (
                      <Button variant="link" size="sm" className="px-2 align-baseline" onClick={() => setShowFullClimate((v) => !v)}>
                        {showFullClimate ? 'Read less' : 'Read more'}
                      </Button>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}


        {/* Coverage Area with Neighborhoods */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Neighborhoods & Areas We Serve in {city}
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                We're proud to provide expert fence installation and repair services throughout {city}, {state}
              </p>
              
              {neighborhoods.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Popular Neighborhoods</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {neighborhoods.map((neighborhood) => {
                      const isObject = typeof neighborhood === 'object';
                      const name = isObject ? neighborhood.name : neighborhood;
                      const description = isObject ? neighborhood.description : '';
                      const link = isObject ? neighborhood.link : undefined;
                      
                      const cardContent = description ? (
                        <>
                          <h4 className="font-semibold text-primary text-lg mb-2">{name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                        </>
                      ) : (
                        <span className="font-medium">{name}</span>
                      );

                      if (link) {
                        return (
                          <Link key={name} to={link}>
                            <Card className="p-5 hover:shadow-xl hover:border-primary hover:scale-105 transition-all duration-300 cursor-pointer h-full bg-gradient-to-br from-background to-primary/5 border-2">
                              {cardContent}
                              <div className="mt-3 text-primary font-semibold text-sm flex items-center gap-1">
                                Learn More <span className="text-lg">→</span>
                              </div>
                            </Card>
                          </Link>
                        );
                      }

                      return description ? (
                        <Card key={name} className="p-5 hover:shadow-lg transition-shadow">
                          {cardContent}
                        </Card>
                      ) : (
                        <span key={name} className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium inline-block">
                          {name}
                        </span>
                      );
                    })}
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
            </div>
          </div>
        </section>

        {/* Fence Styles Preview */}
        <FenceStylesPreview city={city} />

        {/* Quote Form */}
        <section className="py-16 bg-muted/50">
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
          <section className="py-16 bg-muted/50">
            <div className="container">
              <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-a:underline prose-a:decoration-2 prose-a:underline-offset-4 hover:prose-a:decoration-primary">
                {articleContent}
              </div>
            </div>
          </section>
        )}

        {/* Google Business Location */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Our Location
                </h2>
                <p className="text-sm text-muted-foreground">
                  Serving {city} and the greater Seattle area
                </p>
              </div>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.5849474493!2d-122.04876700000001!3d47.389384699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906119f98d5b73%3A0x8ce80c589db968c5!2sMyFence.com%20-%20Wood%20Fence%20Contractor!5e0!3m2!1sen!2sus!4v1701500000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`MyFence.com location serving ${city}`}
                    className="w-full"
                  />
                  <div className="p-4 bg-muted/30">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">22927 257th Ave SE, Maple Valley, WA 98038</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Open 24/7</span>
                        </div>
                        <a 
                          href="https://www.google.com/maps/place/MyFence.com+-+Wood+Fence+Contractor/@47.3893847,-122.048767,17z" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          Directions →
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceAreaTemplate;
