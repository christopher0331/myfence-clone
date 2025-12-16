"use client";

import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ruler, Grid, Layers, Check } from "lucide-react";

const LatticeToppersPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Lattice Topper Fence Upgrade",
    description: "Horizontal or vertical lattice toppers for 6' fences (adds +2'). Privacy, style, and airflow for Seattle homes.",
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
        title="Fence Lattice Toppers | Horizontal & Vertical | Seattle WA"
        description="Upgrade your fence with 2' lattice toppers. Horizontal or vertical patterns for added privacy, airflow, and modern style."
        canonical="https://myfence.com/fence-upgrades/lattice-toppers"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Lattice Toppers</h1>
          <p className="text-xl text-muted-foreground">Add privacy and style with a 2' lattice extension above your 6' fence</p>
        </div>
      </section>

      {/* Options */}
      <section className="container py-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Grid className="w-5 h-5 text-primary" /> Horizontal Lattice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>Clean, modern lines with horizontal slats. Our most popular option for contemporary homes.</p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" /> Excellent airflow</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" /> Modern aesthetic</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Layers className="w-5 h-5 text-primary" /> Vertical Lattice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>Classic vertical pattern that pairs nicely with traditional and craftsman styles.</p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" /> Timeless look</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" /> Works with most fences</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sizing note */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Ruler className="w-5 h-5 text-primary" /> Sizing</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Standard lattice toppers add approximately 2' above a 6' fence (for overall ~8'). Check HOA and city guidelines when needed.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Add Lattice?</h2>
          <p className="text-lg text-muted-foreground">We’ll help you choose the perfect pattern for your home and privacy goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link href="/quote">Get a Free Quote</Link></Button>
            <Button asChild variant="outline" size="lg"><Link href="/fence-styles">Explore Fence Styles</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LatticeToppersPage;
