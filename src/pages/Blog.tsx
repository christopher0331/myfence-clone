import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import OptimizedImage from "@/components/OptimizedImage";
import GoogleBusinessMap from "@/components/GoogleBusinessMap";
import { blogArticles } from "@/data/blogArticles";

const heroSlides = [
  {
    id: 1,
    title: "Expert Fence Installation in Seattle",
    subtitle: "Quality cedar fencing built to last in the Pacific Northwest",
    image: "/lovable-uploads/2a60013b-3add-48a8-9881-e5c6c8baf7fd.png",
    link: "/fence-styles"
  },
  {
    id: 2,
    title: "Transparent Fence Pricing",
    subtitle: "Get accurate quotes for your Seattle fence project",
    image: "/lovable-uploads/76711349-f698-430f-a01f-14709e320e1b.png",
    link: "/quote"
  },
  {
    id: 3,
    title: "Fence Maintenance & Care",
    subtitle: "Keep your investment protected with proper maintenance",
    image: "/lovable-uploads/44503efa-b853-47c1-8bd9-52b13e55fbd1.png",
    link: "/should-i-stain-my-fence"
  }
];

const Blog = () => {
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
        "name": "Blog",
        "item": "https://myfence.com/blog"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MyFence.com Blog - Expert Fence Advice",
    "description": "Expert fence advice for Seattle homeowners.",
    "url": "https://myfence.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "MyFence.com",
      "url": "https://myfence.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myfence.com/myfence-logo.png"
      }
    }
  };

  return (
    <>
      <Seo
        title="Seattle Fence Blog - Expert Advice & Installation Tips | MyFence.com"
        description="Expert fence advice for Seattle homeowners. Learn about costs, maintenance, and installation from Pacific Northwest fencing professionals."
        canonical="https://myfence.com/blog"
        structuredData={[breadcrumbData, structuredData]}
      />
      
      <div className="min-h-screen bg-background pt-8">
        {/* Hero Carousel */}
        <section className="relative mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {heroSlides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className="relative h-[60vh] overflow-hidden">
                    <OptimizedImage
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white space-y-4 max-w-4xl px-4">
                        <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
                        <p className="text-xl md:text-2xl">{slide.subtitle}</p>
                        <Button asChild size="lg">
                          <Link to={slide.link}>Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        {/* Blog Articles */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Fence Insights</h2>
              <p className="text-xl text-muted-foreground">Professional advice from Seattle's fencing experts</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="legal">Legal</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogArticles.map((article) => (
                    <Link key={article.id} to={`/blog/${article.id}`}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader className="p-0">
                          <AspectRatio ratio={16/9}>
                            <OptimizedImage
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover rounded-t-lg"
                            />
                          </AspectRatio>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="flex gap-2 mb-3">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{article.category}</span>
                            <span className="text-xs text-muted-foreground">{article.readTime}</span>
                          </div>
                          <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.description}</p>
                          <Button variant="outline" size="sm">Read More</Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="maintenance">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogArticles.filter(a => a.category === "Maintenance").map((article) => (
                    <Link key={article.id} to={`/blog/${article.id}`}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader className="p-0">
                          <AspectRatio ratio={16/9}>
                            <OptimizedImage src={article.image} alt={article.title} className="w-full h-full object-cover rounded-t-lg" />
                          </AspectRatio>
                        </CardHeader>
                        <CardContent className="p-6">
                          <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                          <Button variant="outline" size="sm">Read</Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="pricing">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogArticles.filter(a => a.category === "Pricing").map((article) => (
                    <Link key={article.id} to={`/blog/${article.id}`}>
                      <Card className="h-full"><CardContent className="p-6"><CardTitle>{article.title}</CardTitle></CardContent></Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="legal">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogArticles.filter(a => a.category === "Legal").map((article) => (
                    <Link key={article.id} to={`/blog/${article.id}`}><Card className="h-full"><CardContent className="p-6"><CardTitle>{article.title}</CardTitle></CardContent></Card></Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
