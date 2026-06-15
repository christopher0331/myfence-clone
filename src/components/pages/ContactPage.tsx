"use client";

import { useState } from "react";
import { AddressAutocomplete } from "@/components/ui/AddressAutocomplete";
import ServiceProviderRecommendations from "@/components/ServiceProviderRecommendations";
import Seo from "@/components/Seo";
import { SCHEMA_ADDRESS } from "@/constants/siteConfig";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { TEXT_CONSENT_MESSAGE } from "@/constants/textConsent";
import { buildSourcePage, getLeadAttribution, trackFormSubmit } from "@/lib/analytics";

const FORM_KEY = "contact-page";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [textConsentError, setTextConsentError] = useState(false);
  const [addressValid, setAddressValid] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    textConsent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      textConsent: name === "phone" && value.trim() === "" ? false : prev.textConsent,
    }));
    if (name === "phone" && value.trim() === "") {
      setTextConsentError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.address.trim() || !addressValid) {
      toast({
        title: !formData.address.trim() ? "Address required" : "Invalid address",
        description: !formData.address.trim()
          ? "Please enter your property address."
          : "Please select an address from the dropdown suggestions.",
        variant: "destructive",
      });
      return;
    }

    if (formData.phone.trim() && !formData.textConsent) {
      setTextConsentError(true);
      document.getElementById("contact-page-text-consent-row")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      toast({
        title: "Consent required",
        description: "Please consent to receive text messages before submitting your phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const sourcePage = buildSourcePage(FORM_KEY);
      const attribution = getLeadAttribution(FORM_KEY);
      // Webhook is enabled without Turnstile. Keep dual-path delivery for reliability.
      let leadError: string | null = null;
      try {
        const lead = await supabase.functions.invoke("send-website-lead-webhook", {
          body: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            propertyAddress: formData.address,
            fenceType: "Contact Page",
            message: formData.message,
            textConsent: formData.textConsent,
            sourcePage,
            site: attribution.site,
            formId: attribution.formId,
            originPage: attribution.originPage,
          },
        });
        if (lead.error) leadError = lead.error.message;
      } catch (e) {
        leadError = e instanceof Error ? e.message : String(e);
      }

      let emailError: string | null = null;
      try {
        const legacy = await supabase.functions.invoke("send-contact-form", {
          body: JSON.stringify({ ...formData, sourcePage }),
        });
        if (legacy.error) emailError = legacy.error.message;
      } catch (e) {
        emailError = e instanceof Error ? e.message : String(e);
      }

      // Only fail if BOTH webhook + email fail.
      if (leadError && emailError) {
        throw new Error(leadError || emailError || "Failed to send message");
      }

      trackFormSubmit(FORM_KEY, { formType: "contact" });

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
    address: SCHEMA_ADDRESS,
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
          <div>
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
            <ServiceProviderRecommendations
              customerName={`${formData.firstName} ${formData.lastName}`.trim()}
              customerEmail={formData.email}
              customerPhone={formData.phone}
              customerAddress={formData.address}
            />
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
                  <div
                    id="contact-page-text-consent-row"
                    className={`flex items-start space-x-2 rounded-md ${textConsentError ? "border-2 border-amber-500 bg-amber-50 p-3 ring-2 ring-amber-200" : ""}`}
                  >
                    <Checkbox
                      id="contact-page-text-consent"
                      checked={formData.textConsent}
                      onCheckedChange={(checked) => {
                        const consentGiven = checked === true;
                        setFormData((prev) => ({ ...prev, textConsent: consentGiven }));
                        if (consentGiven) setTextConsentError(false);
                      }}
                    />
                    <Label
                      htmlFor="contact-page-text-consent"
                      className={`text-xs leading-5 ${textConsentError ? "text-amber-900 font-semibold" : "text-muted-foreground"}`}
                    >
                      {TEXT_CONSENT_MESSAGE}
                    </Label>
                  </div>
                  {textConsentError ? (
                    <p className="text-sm font-semibold text-amber-800 mt-1">
                      ⚠ Required: check this box to submit when a phone number is entered.
                    </p>
                  ) : null}
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <AddressAutocomplete
                      id="address"
                      value={formData.address}
                      onChange={(val) => setFormData((prev) => ({ ...prev, address: val }))}
                      onValidChange={setAddressValid}
                      required
                      placeholder="123 Main St, Seattle, WA"
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
