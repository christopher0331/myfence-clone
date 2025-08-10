import Seo from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thanks! We'll reach out ASAP." });
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MyFence.com",
    url: "https://myfence.com",
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

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-4">
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
          <div className="space-y-4">
            <div>
              <Label htmlFor="message">How can we help?</Label>
              <Textarea id="message" rows={7} required />
            </div>
            <div className="flex gap-3">
              <Button type="submit" variant="hero">Send Message</Button>
              <Button type="button" variant="secondary" onClick={() => (window.location.href = "tel:12534551885")}>Call Now</Button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
