"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const InlineContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const [first, ...rest] = (formData.name || "").trim().split(/\s+/).filter(Boolean);
      let leadError: string | null = null;
      try {
        const lead = await supabase.functions.invoke("send-website-lead-webhook", {
          body: {
            firstName: first || "",
            lastName: rest.join(" "),
            email: formData.email,
            phone: formData.phone,
            propertyAddress: formData.address,
            fenceType: "Inline Contact",
            message: formData.message,
          },
        });
        if (lead.error) leadError = lead.error.message;
      } catch (e) {
        leadError = e instanceof Error ? e.message : String(e);
      }

      // Fail-safe: fall back to the legacy Supabase email flow
      if (leadError) {
        const legacy = await supabase.functions.invoke("send-contact-form", {
          body: formData,
        });
        if (legacy.error) {
          throw new Error(leadError || legacy.error.message || "Failed to send message");
        }
      }

      const formElement = document.querySelector('#inline-contact-form');
      if (formElement) {
        const rect = formElement.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        import("@/lib/effects").then(m => {
          m.burstFirework(x, y);
          m.popEmoji(x - 50, y - 100, "🎉");
        });
      }

      setIsFormSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container py-12 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
      <p className="text-muted-foreground mt-2 max-w-2xl">Tell us about your project. We'll reply quickly.</p>
      
      <Card className="mt-6">
        <CardContent className="p-6">
          {isFormSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-700 mb-2">Form Successfully Sent!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for your message. We'll get back to you within 24 hours.
              </p>
              <Button variant="secondary" asChild>
                <a href="tel:+12534551885" aria-label="Call (253) 455-1885">(253) 455-1885</a>
              </Button>
            </div>
          ) : (
            <form
              id="inline-contact-form"
              className="grid lg:grid-cols-2 gap-6"
              onSubmit={handleSubmit}
            >
              <div className="space-y-4">
                <div>
                  <Label htmlFor="inline-name" className="text-sm font-medium">Name *</Label>
                  <Input
                    id="inline-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="inline-email" className="text-sm font-medium">Email *</Label>
                  <Input
                    id="inline-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="inline-phone" className="text-sm font-medium">Phone</Label>
                  <Input
                    id="inline-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="inline-address" className="text-sm font-medium">Property Address</Label>
                  <Input
                    id="inline-address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Seattle, WA"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="inline-message" className="text-sm font-medium">Project Details</Label>
                  <Textarea
                    id="inline-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 min-h-[200px] resize-none"
                    placeholder="Tell us about your fence project..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full lg:w-auto px-8"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
};
