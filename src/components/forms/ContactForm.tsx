"use client";

import { useState } from "react";
import { AddressAutocomplete } from "@/components/ui/AddressAutocomplete";
import ServiceProviderRecommendations from "@/components/ServiceProviderRecommendations";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Checkbox } from "@/components/ui/checkbox";
import { TEXT_CONSENT_MESSAGE } from "@/constants/textConsent";
import { buildSourcePage, deriveFormSku, getLeadAttribution, trackFormSubmit } from "@/lib/analytics";
import type { FieldErrors } from "react-hook-form";

const FORM_KEY = "home-contact";

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  address: z.string().trim().min(1, "Address is required").max(255),
  description: z.string().trim().min(1, "Message is required").max(1000),
  textConsent: z.boolean().refine((value) => value, "Consent is required to receive text messages."),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; phone: string; address: string } | null>(null);
  const [addressValid, setAddressValid] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      description: "",
      textConsent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!addressValid) {
      form.setError("address", { message: "Please select an address from the dropdown suggestions." });
      return;
    }
    setIsSubmitting(true);
    const sourcePage = buildSourcePage(FORM_KEY);
    const attribution = getLeadAttribution(FORM_KEY);
    try {
      // Webhook is enabled without Turnstile. Keep dual-path delivery for reliability.
      let leadError: string | null = null;
      try {
        const lead = await supabase.functions.invoke("send-website-lead-webhook", {
          body: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            propertyAddress: data.address,
            fenceType: "Contact Form",
            message: data.description,
            textConsent: data.textConsent,
            sourcePage,
            site: attribution.site,
            formId: attribution.formId,
            originPage: attribution.originPage,
          },
        });
        if (lead.error) leadError = lead.error.message;
      } catch (e) {
        // Network/CORS failures throw; keep fallback path alive.
        leadError = e instanceof Error ? e.message : String(e);
      }

      let emailError: string | null = null;
      try {
        const legacy = await supabase.functions.invoke("send-contact-form", {
          body: {
            ...data,
            sourcePage,
            site: attribution.site,
            formId: attribution.formId,
            formSku: deriveFormSku(),
            originPage: attribution.originPage,
          },
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

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setSubmittedData({
        name: `${data.firstName} ${data.lastName}`.trim(),
        email: data.email,
        phone: data.phone,
        address: data.address,
      });
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalid = (errors: FieldErrors<FormData>) => {
    if (errors.textConsent) {
      document.getElementById("contact-form-text-consent-row")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      toast({
        title: "Consent required",
        description: "Please check the text consent box before submitting your phone number.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted && submittedData) {
    return (
      <div>
        <div className="text-center py-8">
          <CheckCircle2 className="mx-auto h-14 w-14 text-green-600 mb-3" />
          <h3 className="text-2xl font-semibold text-green-700 mb-1">Message Sent!</h3>
          <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <AddressAutocomplete
                    value={field.value}
                    onChange={field.onChange}
                    onValidChange={setAddressValid}
                    placeholder="123 Main St, Seattle, WA"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your fence project..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="textConsent"
          render={({ field }) => (
            <FormItem
              id="contact-form-text-consent-row"
              className={`flex items-start space-x-2 rounded-md ${form.formState.errors.textConsent ? "border-2 border-amber-500 bg-amber-50 p-3 ring-2 ring-amber-200" : ""}`}
            >
              <FormControl>
                <Checkbox
                  id="contact-text-consent"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel
                  htmlFor="contact-text-consent"
                  className={`text-xs ${form.formState.errors.textConsent ? "text-amber-900 font-semibold" : "text-muted-foreground"}`}
                >
                  {TEXT_CONSENT_MESSAGE}
                </FormLabel>
                <FormMessage />
                {form.formState.errors.textConsent ? (
                  <p className="text-sm font-semibold text-amber-800">
                    ⚠ Required: check this box to submit when a phone number is entered.
                  </p>
                ) : null}
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Message
        </Button>
      </form>
    </Form>
  );
}
