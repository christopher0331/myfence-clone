"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Seo from "@/components/Seo";
import Link from "next/link";

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
    <main>
      <Seo
        title={"4.125\" x 4.125\" Fence Posts - Best Value & Strength | MyFence.com"}
        description={"Discover why 4.125\" x 4.125\" fence posts are the best choice for Seattle fences. Superior strength, less warping, and excellent value."}
        canonical="https://myfence.com/fence-posts/4-125-posts"
        structuredData={breadcrumbData}
      />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
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
      <section className="container py-16 bg-muted/30">
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
    </main>
  );
};

export default FourPointOneTwoFivePostsPage;
