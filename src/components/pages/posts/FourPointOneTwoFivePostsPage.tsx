"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Seo from "@/components/Seo";
import Link from "next/link";
import BlogSection from "@/components/BlogSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import dynamic from "next/dynamic";

// Lazy-load Google Maps to keep it off the initial critical path
const GoogleBusinessMap = dynamic(() => import("@/components/GoogleBusinessMap"), {
  ssr: false,
  loading: () => null,
});

const FourPointOneTwoFivePostsPage = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com/" },
      { "@type": "ListItem", position: 2, name: "Fence Posts", item: "https://myfence.com/fence-posts" },
      { "@type": "ListItem", position: 3, name: "4.125\" x 4.125\" Fence Posts", item: "https://myfence.com/fence-posts/4-125-posts" },
    ],
  } as const;

  const galleryImages = [
    "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
    "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png",
    "/lovable-uploads/7f3fe64f-1dd1-4d94-b585-bf9cb4ae1bd6.png",
  ];

  return (
    <>
      <Seo
        title={"4.125\" x 4.125\" Fence Posts - Best Value & Strength | MyFence.com"}
        description={"Discover why 4.125\" x 4.125\" fence posts are the best choice for Seattle fences. Superior strength, less warping, and excellent value."}
        canonical="https://myfence.com/fence-posts/4-125-posts"
        structuredData={breadcrumbData}
      />

      {/* Hero */}
      <section className="relative pt-8 pb-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Premium 4.125" x 4.125" x 9' Fence Posts</h1>
            <p className="text-xl text-muted-foreground mb-8">Seattle's best value posts — superior strength and longevity vs. box-store 3.5" posts.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Call (253) 455-1885</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why we recommend */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-elevated transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Superior to Box Store Posts</h3>
              <p className="text-muted-foreground">Big-box "4x4" posts are actually 3.5" x 3.5". Our 4.125" posts add substantial cross-sectional area for stability.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-elevated transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Less Warping & Twisting</h3>
              <p className="text-muted-foreground">Optimized size with excellent stability over decades in Seattle's climate.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Installation Process */}
      <section className="container py-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            MyFence.com's Professional Installation Process
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our expert team follows proven techniques to ensure your fence posts last for decades in Seattle's unique climate.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Precise Post Placement</h3>
                <p className="text-muted-foreground">
                  We use our Fence Genius technology to ensure exact spacing and alignment for structural integrity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Surface-Level Concrete</h3>
                <p className="text-muted-foreground">
                  Concrete poured at or near surface level prevents soil contact, dramatically reducing rot risk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Cedar Posts</h3>
                <p className="text-muted-foreground">
                  Premium 4.125" x 4.125" x 9' cedar posts selected for strength and natural rot resistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Installed Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <img src={img} alt="Seattle fence installation using 4.125 posts" className="w-full h-64 object-cover" loading="lazy" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build with Better Posts?</h2>
          <p className="text-muted-foreground mb-6">Get a free quote from MyFence.com for your project using premium 4.125" posts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Call (253) 455-1885</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <BlogSection limit={4} />

      {/* Service Area Map Section */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Service Area</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Proudly serving the greater Seattle area within a 28-mile radius
        </p>
        <GoogleBusinessMap city="Maple Valley" state="WA" radiusMiles={28} showBusinessInfo={false} />
      </section>

      {/* Service Areas List Section */}
      <ServiceAreasSection />
    </>
  );
};

export default FourPointOneTwoFivePostsPage;
