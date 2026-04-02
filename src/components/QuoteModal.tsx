"use client";

import { useState } from "react";
import { AddressAutocomplete } from "@/components/ui/AddressAutocomplete";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [textConsentError, setTextConsentError] = useState(false);
  const [addressValid, setAddressValid] = useState(false);
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
    setFormData(prev => ({
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
      document.getElementById("quote-modal-text-consent-row")?.scrollIntoView({
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
            fenceType: "Quote Modal",
            message: formData.projectDescription,
            textConsent: formData.textConsent,
          },
        });
        if (lead.error) leadError = lead.error.message;
      } catch (e) {
        leadError = e instanceof Error ? e.message : String(e);
      }

      let emailError: string | null = null;
      try {
        const legacy = await supabase.functions.invoke("send-quote-request", {
          body: formData,
        });
        if (legacy.error) emailError = legacy.error.message;
      } catch (e) {
        emailError = e instanceof Error ? e.message : String(e);
      }

      // Only fail if BOTH webhook + email fail.
      if (leadError && emailError) {
        throw new Error(leadError || emailError || "Failed to send quote request");
      }
      
      // Trigger fireworks animation
      burstFirework();

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with a detailed quote.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        projectDescription: "",
        textConsent: false,
      });
      
      onClose();
    } catch (error) {
      console.error('Quote request submission error:', error);
      toast({
        title: "Error",
        description: `Failed to send quote request: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or call us directly at (253) 455-1885.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Get Your Free Quote</DialogTitle>
          <p className="text-muted-foreground text-center">
            Tell us about your fencing project and we'll provide a detailed estimate
          </p>
        </DialogHeader>
        
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
            <>
              <div
                id="quote-modal-text-consent-row"
                className={`flex items-start space-x-2 rounded-md ${textConsentError ? "border-2 border-amber-500 bg-amber-50 p-3 ring-2 ring-amber-200" : ""}`}
              >
                <Checkbox
                  id="quote-modal-text-consent"
                  checked={formData.textConsent}
                  onCheckedChange={(checked) => {
                    const consentGiven = checked === true;
                    setFormData((prev) => ({ ...prev, textConsent: consentGiven }));
                    if (consentGiven) setTextConsentError(false);
                  }}
                />
                <Label
                  htmlFor="quote-modal-text-consent"
                  className={`text-xs leading-5 ${textConsentError ? "text-amber-900 font-semibold" : "text-muted-foreground"}`}
                >
                  {TEXT_CONSENT_MESSAGE}
                </Label>
              </div>
              {textConsentError ? (
                <p className="text-sm font-semibold text-amber-800">⚠ Required: check this box to submit when a phone number is entered.</p>
              ) : null}
            </>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="address">Project Address *</Label>
            <AddressAutocomplete
              id="address"
              value={formData.address}
              onChange={(val) => setFormData((prev) => ({ ...prev, address: val }))}
              onValidChange={setAddressValid}
              required
              placeholder="Street address, City, State, ZIP"
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
              placeholder="Describe your fencing project: type of fence, approximate length, height, any special requirements..."
              rows={4}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Quote Request"
              )}
            </Button>
          </div>
        </form>

        <div className="text-center text-sm text-muted-foreground border-t pt-4 space-y-2">
          <p>✓ <strong>{WARRANTY_CONSTANTS.TITLE}</strong> on all installations</p>
          <p>Questions? Call us directly at <strong>(253) 455-1885</strong></p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
