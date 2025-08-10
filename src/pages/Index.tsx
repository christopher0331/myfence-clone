import { useState } from "react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MyFence.com",
    url: "https://myfence.com",
    telephone: "+1-253-455-1885",
    address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
  };

  return (
    <main>
      <Seo
        title="Seattle Fence Contractor | MyFence.com"
        description="Father & son fence company in Seattle using Fence Genius technology. Cedar, vinyl, chain-link, iron. Call (253) 455-1885."
        canonical="https://myfence.com/"
        structuredData={orgLd}
      />

      <section
        className="relative overflow-hidden border-b"
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
          setPointer({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        style={{
          // signature interaction: responsive gradient following cursor
          // safely setting CSS variables used by the design system
          ['--pointer-x' as any]: `${pointer.x}px`,
          ['--pointer-y' as any]: `${pointer.y}px`,
        }}
      >
        <div className="bg-gradient-primary">
          <div className="container py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Seattle’s Father & Son Fence Pros</h1>
              <p className="mt-4 text-lg text-muted-foreground">MyFence.com builds beautiful, lasting fences across Seattle using exclusive Fence Genius technology to perfect planning and construction.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg"><a href="/quote">Get a Virtual Quote</a></Button>
                <Button asChild variant="secondary" size="lg"><a href="/fence-styles">Explore Styles</a></Button>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { t: "Fence Genius", d: "Precision planning" },
                  { t: "Seattle Local", d: "Licensed & insured" },
                  { t: "Craftsmanship", d: "Built to last" },
                ].map((f) => (
                  <Card key={f.t} className="hover:shadow-elevated transition-shadow">
                    <CardContent className="py-4">
                      <div className="text-sm font-semibold">{f.t}</div>
                      <div className="text-xs text-muted-foreground">{f.d}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold">Cedar & Modern Styles</h2>
            <p className="text-muted-foreground mt-2">From classic cedar privacy to sleek horizontal and metal accents, we bring your vision to life.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Transparent Pricing</h2>
            <p className="text-muted-foreground mt-2">Use our Virtual Quote Tool for a fast estimate, then we confirm on-site with Fence Genius.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Proudly Seattle</h2>
            <p className="text-muted-foreground mt-2">We know Northwest weather and build for longevity — rain or shine.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;

