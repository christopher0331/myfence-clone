import Seo from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thanks! We'll reach out ASAP." });
    import("@/lib/effects").then(m => m.burstFirework(window.innerWidth / 2, window.innerHeight / 2));
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MyFence.com",
    url: "https://myfence.com",
    image: "https://myfence.com/lovable-uploads/5f84fd61-a240-4aab-9d39-9728f6a27f36.png",
    telephone: "+1-253-455-1885",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
    areaServed: "Seattle-Tacoma, WA",
  };

  return (
    <main>
      <Seo
        title="Contact MyFence.com | Seattle Fence Contractor"
        description="Request a quote or ask a question. Call (253) 455-1885 or message MyFence.com — Seattle's father & son fence pros."
        canonical="https://myfence.com/contact"
        structuredData={orgLd}
      />
      <section className="container py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl">We’re here to help. Call <a className="text-primary underline-offset-4 hover:underline" href="tel:12534551885">(253) 455-1885</a> or send us a message below.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-start">
          <div>
            <p className="text-muted-foreground">
              Father & son owned and operated. We build with our proprietary <Link to="/fence-genius" className="text-primary hover:underline">Fence Genius technology</Link> for superior build quality and unmatched customer clarity from estimate to final walkthrough.
            </p>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required autoComplete="name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required autoComplete="email" inputMode="email" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" autoComplete="tel" inputMode="tel" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" rows={7} required autoComplete="off" />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" variant="hero" className="w-full sm:w-auto">Send Message</Button>
                  <Button type="button" variant="secondary" className="w-full sm:w-auto" onClick={() => (window.location.href = "tel:12534551885")}>Call Now</Button>
                </div>
              </div>
            </form>
          </div>
          <figure>
            <div className="aspect-square w-full overflow-hidden rounded-lg shadow-elevated">
              <img
                src="/lovable-uploads/5f84fd61-a240-4aab-9d39-9728f6a27f36.png"
                alt="Father and son fence contractors in Seattle from MyFence.com"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="sr-only">Father and son owned fence company using Fence Genius technology</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Contact;
