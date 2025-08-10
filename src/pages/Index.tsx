import { useState } from "react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import cedarImg from "@/assets/fences/cedar.jpg";
import modernImg from "@/assets/fences/horizontal-cedar.jpg";
import gallery1 from "@/assets/gallery/gallery1.jpg";
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
        description="Father & son fence company in Seattle using Fence Genius technology. Wood styles: picture frame, 3-rail, horizontal lattice. Call (253) 455-1885."
        canonical="https://myfence.com/"
        structuredData={orgLd}
      />

      <section
        className="relative h-screen w-full overflow-hidden border-b -mt-14 md:-mt-20"
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
        <div className="relative h-full w-full">
          <div className="video-hero" aria-hidden="true">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LlFKNi-35Mk?autoplay=1&mute=1&loop=1&playlist=LlFKNi-35Mk&controls=0&playsinline=1&modestbranding=1&rel=0"
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MyFence.com installation montage"
            />
          </div>
          <div className="container absolute inset-x-0 bottom-2 md:bottom-4 animate-fade-in">
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

      {/* Popular styles */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Popular Fence Styles</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Our most requested builds in Seattle.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card>
            <CardContent className="p-0 overflow-hidden">
              <img src={cedarImg} alt="Picture frame cedar fence in Seattle backyard" loading="lazy" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Picture Frame Fence</h3>
                <p className="text-sm text-muted-foreground">Clean lines, framed panels.</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0 overflow-hidden">
              <img src={gallery1} alt="Three-rail picture frame cedar fence installation" loading="lazy" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">3 Rail Picture Frame Fence</h3>
                <p className="text-sm text-muted-foreground">Sturdy rails with a premium look.</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0 overflow-hidden">
              <img src={modernImg} alt="Horizontal lattice top cedar fence" loading="lazy" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Horizontal Lattice Fence</h3>
                <p className="text-sm text-muted-foreground">Modern privacy with airflow.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Online quote tool embed */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Instant Online Quote</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Use our SeattleFenceQuote.com tool to price your fence in minutes.</p>
        <Card className="mt-6">
          <CardContent className="p-0">
            <iframe
              src="https://seattlefencequote.com/"
              width="100%"
              height="800"
              frameBorder={0}
              loading="lazy"
              title="SeattleFenceQuote.com - Instant Online Quote"
              className="w-full h-[800px]"
            />
          </CardContent>
        </Card>
        <p className="text-xs text-muted-foreground mt-2">If the tool doesn't load, open it in a new tab: <a href="https://seattlefencequote.com/" className="underline" target="_blank" rel="noopener noreferrer">seattlefencequote.com</a></p>
      </section>

      {/* Trellis systems */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Trellis & Pergola Systems</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Architectural trellis accents built to last — perfect for Northwest gardens.</p>
        <Card className="mt-6">
          <CardContent className="p-0 overflow-hidden">
            <img src={modernImg} alt="Custom cedar trellis pergola over fence line" loading="lazy" className="w-full h-72 md:h-96 object-cover" />
          </CardContent>
        </Card>
      </section>

      {/* Contact form */}
      <section className="container py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Tell us about your project. We’ll reply quickly.</p>
        <form
          className="grid md:grid-cols-2 gap-6 mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            toast({ title: "Message sent", description: "Thanks! We'll get back to you shortly." });
          }}
        >
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="h-full flex flex-col">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" className="min-h-[180px] flex-1" required />
            </div>
            <div className="flex gap-3">
              <Button type="submit">Send message</Button>
              <Button variant="secondary" asChild>
                <a href="tel:+12534551885" aria-label="Call (253) 455-1885">(253) 455-1885</a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">We'll wire this form to Resend email delivery next; please provide your API key to finalize.</p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Index;

