"use client";

import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf, Sprout, Flower2, Check } from "lucide-react";

const TrellisSystemsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fence Trellis Systems",
    description: "Custom cedar trellis systems integrated with your fence for vines and climbing plants. Beautiful privacy and garden function.",
    provider: {
      "@type": "LocalBusiness",
      name: "MyFence.com",
      address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
      telephone: "+1-253-455-1885",
    },
    areaServed: { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
  } as const;

  return (
    <main>
      <Seo
        title="Fence Trellis Systems | Grow Vines & Add Privacy | Seattle WA"
        description="Integrated cedar trellis systems for your fence. Support climbing plants, add beauty and privacy, and create a lush living barrier."
        canonical="https://myfence.com/fence-upgrades/trellis-systems"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Trellis Systems</h1>
          <p className="text-xl text-muted-foreground">Grow climbing plants for a beautiful, living privacy screen</p>
        </div>
      </section>

      {/* Options */}
      <section className="container py-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Sprout className="w-5 h-5 text-primary" /> Integrated Fence Trellis</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Built directly into fence bays for clean, sturdy support. Great for jasmine, clematis, and climbing roses.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Leaf className="w-5 h-5 text-primary" /> Freestanding Trellis</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Add freestanding trellis panels near patios or garden beds for layered privacy and style.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Flower2 className="w-5 h-5 text-primary" /> Custom Patterns</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Horizontal, vertical, grid or diamond—designed to match your fence style and plant selection.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {["Living privacy that improves over time", "Enhances curb appeal and garden spaces", "Supports healthy vine growth", "Durable cedar construction"].map(
            (t, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /> {t}</CardTitle>
                </CardHeader>
              </Card>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Bring Your Fence to Life</h2>
          <p className="text-lg text-muted-foreground">We’ll recommend the right trellis design for your plants and property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link href="/quote">Get a Free Quote</Link></Button>
            <Button asChild variant="outline" size="lg"><Link href="/fence-styles">Explore Fence Styles</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrellisSystemsPage;
