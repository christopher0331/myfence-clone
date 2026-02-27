import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { burstFirework } from "@/lib/effects";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import { supabase } from "@/integrations/supabase/client";
import { TEXT_CONSENT_MESSAGE } from "@/constants/textConsent";

interface InlineQuoteFormProps {
  context?: string; // e.g., "Picture Frame Fence page"
}

const InlineQuoteForm = ({ context }: InlineQuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [textConsentError, setTextConsentError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    projectDescription: "",
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

    if (formData.phone.trim() && !formData.textConsent) {
      setTextConsentError(true);
      document.getElementById("inline-quote-text-consent-row")?.scrollIntoView({
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
      const [first, ...rest] = (formData.fullName || "").trim().split(/\s+/).filter(Boolean);
      const message = context
        ? `[Source: ${context}]\n${formData.projectDescription}`
        : formData.projectDescription;

      // TEMP: Turnstile/webhook path disabled to restore quote delivery immediately.
      // Re-enable once Turnstile token flow is fixed end-to-end.
      // let leadError: string | null = null;
      // try {
      //   const lead = await supabase.functions.invoke("send-website-lead-webhook", {
      //     body: {
      //       firstName: first || "",
      //       lastName: rest.join(" "),
      //       email: formData.email,
      //       phone: formData.phone,
      //       propertyAddress: formData.address,
      //       fenceType: "Quote Request",
      //       message,
      //       textConsent: formData.textConsent,
      //     },
      //   });
      //   if (lead.error) leadError = lead.error.message;
      // } catch (e) {
      //   leadError = e instanceof Error ? e.message : String(e);
      // }

      // Always send the legacy quote email notification too (info@myfence.com).
      let emailError: string | null = null;
      try {
        const legacy = await supabase.functions.invoke("send-quote-request", {
          body: JSON.stringify({
            ...formData,
            projectDescription: message,
          }),
        });
        if (legacy.error) emailError = legacy.error.message;
      } catch (e) {
        emailError = e instanceof Error ? e.message : String(e);
      }

      // With webhook disabled, only fail if legacy email fails.
      if (emailError) {
        throw new Error(emailError || "Failed to send quote request");
      }
      
      // Trigger fireworks animation
      burstFirework();

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with a detailed quote.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        projectDescription: "",
        textConsent: false,
      });
    } catch (err) {
      console.error('Quote request submission error:', err);
      toast({
        title: "Error",
        description:
          "Failed to send quote request. Please try again or call us directly at (253) 455-1885.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="text-xl font-semibold tracking-tight">Get a Free Quote</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Tell us about your project and we'll provide a detailed estimate.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            placeholder="Enter your full name"
            autoComplete="name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
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
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
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
          <div
            id="inline-quote-text-consent-row"
            className={`flex items-start space-x-2 rounded-md ${textConsentError ? "border-2 border-amber-500 bg-amber-50 p-3 ring-2 ring-amber-200" : ""}`}
          >
            <Checkbox
              id="inline-quote-text-consent"
              checked={formData.textConsent}
              onCheckedChange={(checked) => {
                const consentGiven = checked === true;
                setFormData((prev) => ({ ...prev, textConsent: consentGiven }));
                if (consentGiven) setTextConsentError(false);
              }}
            />
            <Label
              htmlFor="inline-quote-text-consent"
              className={`text-xs leading-5 ${textConsentError ? "text-amber-900 font-semibold" : "text-muted-foreground"}`}
            >
              {TEXT_CONSENT_MESSAGE}
            </Label>
          </div>
          {textConsentError ? (
            <p className="text-sm font-semibold text-amber-800">⚠ Required: check this box to submit when a phone number is entered.</p>
          ) : null}
        ) : null}

        <div className="space-y-2">
          <Label htmlFor="address">Project Address *</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            placeholder="Street address, City, State, ZIP"
            autoComplete="street-address"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDescription">Project Description *</Label>
          <Textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            required
            placeholder="Describe your fencing project: type, length, height, materials..."
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
            "Send Quote Request"
          )}
        </Button>
      </form>
      <div className="text-center text-xs text-muted-foreground mt-4 space-y-2">
        <p>✓ <strong>{WARRANTY_CONSTANTS.TITLE}</strong> on all installations</p>
        <p>Prefer to talk? Call us at <strong>(253) 455-1885</strong></p>
      </div>
    </div>
  );
};

export default InlineQuoteForm;
