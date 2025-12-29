"use client";

import { useState } from "react";
import Seo from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/website-lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          fence_type: "",
          message: formData.message,
        }),
      });

      const j = await res.json().catch(() => null);
      if (!res.ok || j?.ok === false) {
        // Fail-safe during transition: fall back to the legacy Supabase email flow
        const legacy = await supabase.functions.invoke("send-contact-form", {
          body: JSON.stringify(formData),
        });
        if (legacy.error) {
          throw new Error(j?.error || legacy.error.message || "Failed to send message");
        }
      }

      await import("@/lib/effects").then((m) =>
        m.burstFirework(window.innerWidth / 2, window.innerHeight / 2),
      );

      toast({ title: "Message sent", description: "Thanks! We'll reach out ASAP." });
      setIsSubmitted(true);
    } catch (err) {
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or call us directly at (253) 455-1885.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://myfence.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://myfence.com/contact",
      },
    ],
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://myfence.com",
    name: "MyFence.com",
    url: "https://myfence.com",
    logo: {
      "@type": "ImageObject",
      url: "https://myfence.com/myfence-logo.png",
    },
    image: "https://myfence.com/myfence-logo.png",
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
        title="Contact MyFence | Seattle Fence Contractor"
        description="Request a quote or ask a question. Call (253) 455-1885 or message MyFence.com — Seattle's father & son fence pros."
        canonical="https://myfence.com/contact"
        structuredData={[breadcrumbData, orgLd]}
      />
      <section className="container py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl">
          We're here to help. Call
          <a className="text-primary underline-offset-4 hover:underline" href="tel:12534551885">
            (253) 455-1885
          </a>
          or send us a message below.
        </p>

        {isSubmitted ? (
          <div className="mt-8 text-center py-12 bg-card rounded-lg border shadow-sm">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-semibold mb-2">Message Sent Successfully!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for contacting us! We'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Send Another Message
              </Button>
              <Button
                onClick={() => (window.location.href = "tel:12534551885")}
                variant="hero"
              >
                Call Us Now
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-start">
            <div>
              <p className="text-muted-foreground">
                Father & son owned and operated. We build with our proprietary
                {" "}
                <Link href="/fence-genius" className="text-primary hover:underline">
                  Fence Genius technology
                </Link>
                {" "}
                for superior build quality and unmatched customer clarity from estimate to final walkthrough.
              </p>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      autoComplete="given-name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      autoComplete="family-name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                      inputMode="email"
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      autoComplete="street-address"
                      maxLength={200}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={7}
                      required
                      autoComplete="off"
                      maxLength={1000}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" variant="hero" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      className="w-full sm:w-auto"
                      onClick={() => (window.location.href = "tel:12534551885")}
                    >
                      Call Now
                    </Button>
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
              <figcaption className="sr-only">
                Father and son owned fence company using Fence Genius technology
              </figcaption>
            </figure>
          </div>
        )}
      </section>
    </main>
  );
};

export default ContactPage;
