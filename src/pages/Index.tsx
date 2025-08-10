import { useState } from "react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Home, ShieldCheck, Hammer } from "lucide-react";

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
        className="relative h-screen w-full overflow-hidden border-b"
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
          <div className="container absolute inset-x-0 bottom-6 md:bottom-10 animate-fade-in">
            <div className="grid md:grid-cols-[1fr_1fr] items-stretch rounded-xl shadow-elevated overflow-hidden">
              <div className="bg-foreground text-background p-6 md:p-10">
                <div className="text-xs uppercase tracking-wider opacity-80">About Us</div>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-tight">Your Local Seattle Fence Contractor</h2>
                <p className="mt-3 text-sm opacity-90">MyFence.com is a father & son team using Fence Genius to deliver precise, durable fences across Seattle.</p>
                <div className="mt-5">
                  <Button asChild size="lg" variant="secondary"><a href="/quote" className="hover-scale">Free Quotes</a></Button>
                </div>
              </div>
              <div className="bg-card text-foreground p-6 md:p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">100's Built</div>
                      <div className="text-sm text-muted-foreground">Custom wood fences</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cpu className="w-6 h-6 text-primary" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">Fence Genius</div>
                      <div className="text-sm text-muted-foreground">Advanced software</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home className="w-6 h-6 text-primary" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">Family Owned</div>
                      <div className="text-sm text-muted-foreground">Father & son team</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">2 Year Warranty</div>
                      <div className="text-sm text-muted-foreground">Workmanship guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-28 md:pt-36 pb-12">
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

