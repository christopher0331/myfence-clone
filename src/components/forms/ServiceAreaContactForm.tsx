"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AddressAutocomplete } from "@/components/ui/AddressAutocomplete";
import ServiceProviderRecommendations from "@/components/ServiceProviderRecommendations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { burstFirework } from "@/lib/effects";
import { supabase } from "@/integrations/supabase/client";
import { TEXT_CONSENT_MESSAGE } from "@/constants/textConsent";
import {
  buildSourcePageById,
  deriveFormSku,
  getLeadAttributionById,
  trackFormSubmit,
} from "@/lib/analytics";
import { locationLabelFromPath } from "@/lib/serviceAreaLabel";

const ServiceAreaContactForm = () => {
  const pathname = usePathname() || "";
  const sku = useMemo(() => deriveFormSku(pathname), [pathname]);
  const location = useMemo(() => locationLabelFromPath(pathname), [pathname]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
  } | null>(null);
  const [textConsentError, setTextConsentError] = useState(false);
  const [addressValid, setAddressValid] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    textConsent: false,
  });
  const { toast } = useToast();

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
      document.getElementById(`sa-contact-consent-${sku}`)?.scrollIntoView({
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
      const sourcePage = buildSourcePageById(sku);
      const attribution = getLeadAttributionById(sku);
      const [first, ...rest] = (formData.fullName || "").trim().split(/\s+/).filter(Boolean);
      const message = location
        ? `[Service Area: ${location}] [SKU: ${sku}]\n${formData.message}`
        : `[SKU: ${sku}]\n${formData.message}`;

      // Webhook is enabled without Turnstile. Keep dual-path delivery for reliability.
      let leadError: string | null = null;
      try {
        const lead = await supabase.functions.invoke("send-website-lead-webhook", {
          body: {
            firstName: first || "",
            lastName: rest.join(" "),
            email: formData.email,
            phone: formData.phone,
            propertyAddress: formData.address,
            fenceType: "Service Area Contact",
            message,
            textConsent: formData.textConsent,
            sourcePage,
            site: attribution.site,
            formId: attribution.formId,
            formSku: sku,
            originPage: attribution.originPage,
          },
        });
        if (lead.error) leadError = lead.error.message;
      } catch (err) {
        leadError = err instanceof Error ? err.message : String(err);
      }

      let emailError: string | null = null;
      try {
        const legacy = await supabase.functions.invoke("send-contact-form", {
          body: {
            firstName: first || "",
            lastName: rest.join(" "),
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            description: message,
            textConsent: formData.textConsent,
            sourcePage,
          },
        });
        if (legacy.error) emailError = legacy.error.message;
      } catch (err) {
        emailError = err instanceof Error ? err.message : String(err);
      }

      // Only fail if BOTH webhook + email fail.
      if (leadError && emailError) {
        throw new Error(leadError || emailError || "Failed to send message");
      }

      trackFormSubmit("service-area-contact", { formType: "contact", formId: sku });

      burstFirework(window.innerWidth / 2, window.innerHeight / 2);

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setSubmittedData({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      });
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", address: "", message: "", textConsent: false });
    } catch (err) {
      console.error("Service area contact submission error:", err);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us at (253) 455-1885.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted && submittedData) {
    return (
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="text-center py-6">
          <div className="text-5xl mb-3">🎉</div>
          <h3 className="text-xl font-semibold text-green-700 mb-1">Message Sent!</h3>
          <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
        </div>
        <ServiceProviderRecommendations
          customerName={submittedData.name}
          customerEmail={submittedData.email}
          customerPhone={submittedData.phone}
          customerAddress={submittedData.address}
        />
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="text-xl font-semibold tracking-tight">
        {location ? `Contact Us About Your ${location} Fence` : "Contact Us About Your Fence"}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Tell us about your project and we'll get back to you within 24 hours.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`sa-name-${sku}`}>Full Name *</Label>
          <Input
            id={`sa-name-${sku}`}
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            placeholder="Enter your full name"
            autoComplete="name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`sa-email-${sku}`}>Email Address *</Label>
          <Input
            id={`sa-email-${sku}`}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="your.email@example.com"
            autoComplete="email"
            inputMode="email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`sa-phone-${sku}`}>Phone Number *</Label>
          <Input
            id={`sa-phone-${sku}`}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="(253) 555-0123"
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
        {formData.phone.trim() ? (
          <>
            <div
              id={`sa-contact-consent-${sku}`}
              className={`flex items-start space-x-2 rounded-md ${textConsentError ? "border-2 border-amber-500 bg-amber-50 p-3 ring-2 ring-amber-200" : ""}`}
            >
              <Checkbox
                id={`sa-consent-check-${sku}`}
                checked={formData.textConsent}
                onCheckedChange={(checked) => {
                  const consentGiven = checked === true;
                  setFormData((prev) => ({ ...prev, textConsent: consentGiven }));
                  if (consentGiven) setTextConsentError(false);
                }}
              />
              <Label
                htmlFor={`sa-consent-check-${sku}`}
                className={`text-xs leading-5 ${textConsentError ? "text-amber-900 font-semibold" : "text-muted-foreground"}`}
              >
                {TEXT_CONSENT_MESSAGE}
              </Label>
            </div>
            {textConsentError ? (
              <p className="text-sm font-semibold text-amber-800">
                ⚠ Required: check this box to submit when a phone number is entered.
              </p>
            ) : null}
          </>
        ) : null}

        <div className="space-y-2">
          <Label htmlFor={`sa-address-${sku}`}>Property Address *</Label>
          <AddressAutocomplete
            id={`sa-address-${sku}`}
            value={formData.address}
            onChange={(val) => setFormData((prev) => ({ ...prev, address: val }))}
            onValidChange={setAddressValid}
            required
            placeholder="Street address, City, State, ZIP"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`sa-message-${sku}`}>How can we help?</Label>
          <Textarea
            id={`sa-message-${sku}`}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Tell us about your fence project..."
            rows={4}
            autoComplete="off"
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Prefer to talk? Call us at <strong>(253) 455-1885</strong>
      </p>
    </div>
  );
};

export default ServiceAreaContactForm;
