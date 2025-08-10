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
        <div className="relative">
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LlFKNi-35Mk?autoplay=1&mute=1&loop=1&playlist=LlFKNi-35Mk&controls=0&playsinline=1&modestbranding=1&rel=0"
                allow="autoplay; encrypted-media; picture-in-picture"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="absolute inset-0 -z-0 pointer-events-none bg-gradient-to-b from-background/70 via-background/50 to-background/30" aria-hidden="true"></div>
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

