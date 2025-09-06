import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import OptimizedImage from "@/components/OptimizedImage";
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
    link: "/quote-tool"
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Seattle Fence Blog - Expert Advice & Insights",
    "description": "Expert advice on fence installation, maintenance, and costs in Seattle, Washington. Get professional insights from Pacific Northwest fencing specialists.",
    "url": "https://seattlefence.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Seattle Fence Company"
    },
    "blogPost": blogArticles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.description,
      "datePublished": article.publishDate,
      "author": {
        "@type": "Organization",
        "name": "Seattle Fence Company"
      }
    }))
  };

  return (
    <>
      <Seo
        title="Seattle Fence Blog - Expert Advice & Installation Tips | Pacific Northwest Fencing"
        description="Expert fence advice for Seattle homeowners. Learn about costs, maintenance, longevity, and installation tips from Pacific Northwest fencing professionals."
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Carousel Section */}
        <section className="relative">
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
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90">
                          {slide.subtitle}
                        </p>
                        <Button asChild size="lg" className="mt-6">
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

        {/* Blog Articles Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Expert Fence Insights & Advice
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get professional advice on fence installation, maintenance, and costs from Seattle's trusted fencing experts
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All Articles</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="legal">Legal</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {blogArticles.map((article) => (
                    <Link key={article.id} to={`/blog/${article.id}`}>
                      <Card className="group cursor-pointer hover:shadow-lg transition-shadow h-full">
                        <CardHeader className="p-0">
                          <AspectRatio ratio={4/3}>
                            <OptimizedImage
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                            />
                          </AspectRatio>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {article.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {article.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {article.publishDate}
                            </span>
                            <Button variant="outline" size="sm">
                              Read More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="maintenance" className="space-y-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {blogArticles.filter(article => article.category === "Maintenance").map((article) => (
                    <Link key={article.id} to={`/blog/${article.id}`}>
                      <Card className="group cursor-pointer hover:shadow-lg transition-shadow h-full">
                        <CardHeader className="p-0">
                          <AspectRatio ratio={4/3}>
                            <OptimizedImage
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                            />
                          </AspectRatio>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {article.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {article.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {article.publishDate}
                            </span>
                            <Button variant="outline" size="sm">
                              Read More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {blogArticles.filter(article => article.category === "Pricing").map((article) => (
                    <Card key={article.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0">
                        <AspectRatio ratio={4/3}>
                          <OptimizedImage
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        </AspectRatio>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {article.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {article.publishDate}
                          </span>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="legal" className="space-y-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {blogArticles.filter(article => article.category === "Legal").map((article) => (
                    <Link key={article.id} to={`/blog/${article.id}`}>
                      <Card className="group cursor-pointer hover:shadow-lg transition-shadow h-full">
                        <CardHeader className="p-0">
                          <AspectRatio ratio={4/3}>
                            <OptimizedImage
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                            />
                          </AspectRatio>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {article.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {article.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {article.publishDate}
                            </span>
                            <Button variant="outline" size="sm">
                              Read More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Fence Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free quote from Seattle's trusted fence installation experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/quote-tool">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;