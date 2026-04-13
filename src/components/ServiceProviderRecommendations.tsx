"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Trees,
  Wrench,
  Sparkles,
  Paintbrush,
  Home,
  Hammer,
  Building2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Loader2,
  Send,
  Handshake,
  Phone,
  CheckCircle2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Provider data                                                      */
/* ------------------------------------------------------------------ */

interface Provider {
  name: string;
  website: string;
  email: string;
  phone: string;
}

interface ServiceCategory {
  id: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  providers: Provider[];
  featured: boolean;
}

const SERVICES: ServiceCategory[] = [
  {
    id: "landscaping",
    category: "Landscaping & Hardscape",
    icon: <Trees className="w-5 h-5" />,
    description: "Professional landscaping, hardscaping & outdoor living design.",
    providers: [
      {
        name: "Cedar County Landscaping",
        website: "https://www.cedarcountylandscaping.com/",
        email: "office@cedarcountylandscaping.com",
        phone: "(425) 358-2779",
      },
    ],
    featured: true,
  },
  {
    id: "minor-repairs",
    category: "Handyman/Repairs",
    icon: <Wrench className="w-5 h-5" />,
    description: "Handyman services for small fixes around the home.",
    providers: [
      {
        name: "Mike's NW Handyman Services",
        website: "https://www.mikesnwhandymanservicesllc.com/home/work-request",
        email: "Mpierce@MNWHS.net",
        phone: "(253) 259-9679",
      },
    ],
    featured: true,
  },
  {
    id: "exterior-cleaning",
    category: "Exterior Cleaning & Pressure Washing",
    icon: <Sparkles className="w-5 h-5" />,
    description: "Pressure washing, roof cleaning & exterior restoration.",
    providers: [
      {
        name: "NW Pro Wash LLC",
        website: "https://www.nwprowashllc.com/",
        email: "office@nwprowashllc.com",
        phone: "(253) 290-0057",
      },
    ],
    featured: true,
  },
  {
    id: "painting",
    category: "Painting (Interior & Exterior)",
    icon: <Paintbrush className="w-5 h-5" />,
    description: "Interior & exterior painting with quality craftsmanship.",
    providers: [
      {
        name: "Black Pearl Painters",
        website: "https://blackpearlpainters.com/",
        email: "Justin.Schulke@blackpearlpainters.com",
        phone: "(253) 203-5335",
      },
    ],
    featured: false,
  },
  {
    id: "roofing",
    category: "Roof Replacement",
    icon: <Home className="w-5 h-5" />,
    description: "Full roof replacement from trusted local roofers.",
    providers: [
      {
        name: "Trust Worthy Roofing",
        website: "https://trustworthy-roofing.com/",
        email: "trustworthyroofing2@gmail.com",
        phone: "(253) 455-4347",
      },
      {
        name: "Banner Projects",
        website: "https://sites.google.com/view/bannerprojectsllc",
        email: "",
        phone: "",
      },
    ],
    featured: false,
  },
  {
    id: "remodeling",
    category: "Home Remodeling",
    icon: <Hammer className="w-5 h-5" />,
    description: "Kitchen, bath & full-home remodeling experts.",
    providers: [
      {
        name: "Eikon Homes — Matt Cahill",
        website: "https://www.eikonhomes.com/",
        email: "office@eikonhomes.com",
        phone: "+1 (253) 300-6644",
      },
    ],
    featured: false,
  },
  {
    id: "real-estate",
    category: "Real Estate Agent",
    icon: <Building2 className="w-5 h-5" />,
    description: "Local real estate expertise for buying or selling.",
    providers: [
      {
        name: "André Bohall — Timber Real Estate",
        website: "https://www.timberrealestate.com/agents/2020221/Andre%27+Bohall",
        email: "andre@onsiteregroup.com",
        phone: "",
      },
    ],
    featured: false,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface ServiceProviderRecommendationsProps {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress?: string;
}

export default function ServiceProviderRecommendations({
  customerName,
  customerEmail,
  customerPhone,
  customerAddress,
}: ServiceProviderRecommendationsProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const [contactPref, setContactPref] = useState<"self" | "provider">("self");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const toggleService = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const visibleServices = showAll ? SERVICES : SERVICES.filter((s) => s.featured);
  const hiddenCount = SERVICES.length - SERVICES.filter((s) => s.featured).length;

  const handleSubmit = async () => {
    if (selected.size === 0) {
      toast({
        title: "No services selected",
        description: "Please select at least one service to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedServices = SERVICES.filter((s) => selected.has(s.id));

      await supabase.functions.invoke("send-provider-referral", {
        body: {
          customerName,
          customerEmail,
          customerPhone,
          customerAddress: customerAddress || "",
          contactPreference: contactPref,
          services: selectedServices.map((s) => ({
            id: s.id,
            category: s.category,
            providers: s.providers,
          })),
        },
      });

      setIsSubmitted(true);
      toast({
        title: "Request sent!",
        description:
          contactPref === "self"
            ? "Provider details have been sent to your email."
            : "Our partners will reach out to you shortly.",
      });
    } catch (err) {
      console.error("Provider referral error:", err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---- Success state ---- */
  if (isSubmitted) {
    return (
      <div className="mt-8 rounded-2xl border bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-4" />
        <h3 className="text-xl font-semibold text-green-900 mb-2">You're All Set!</h3>
        <p className="text-green-700 max-w-md mx-auto">
          {contactPref === "self"
            ? "We've sent the contact details for your selected providers to your email. Reach out at your convenience!"
            : "Our vetted partners will be reaching out to you shortly. Keep an eye on your phone and inbox!"}
        </p>
      </div>
    );
  }

  /* ---- Main UI ---- */
  return (
    <div className="mt-8">
      {/* Header */}
      <div className="rounded-2xl border bg-gradient-to-br from-primary/5 via-background to-primary/5 p-6 md:p-8">
        <div className="flex items-start gap-3 mb-1">
          <Handshake className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-lg md:text-xl font-semibold tracking-tight">
              Explore Our Trusted Local Partners
            </h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-lg">
              Interested in additional services? Select any you'd like and we'll connect you with our
              vetted partners.
            </p>
          </div>
        </div>

        {/* Provider Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          {visibleServices.map((service) => {
            const isChecked = selected.has(service.id);
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleService(service.id)}
                className={`group relative text-left rounded-xl border-2 p-4 transition-all duration-200 cursor-pointer ${
                  isChecked
                    ? "border-primary bg-primary/5 shadow-md ring-1 ring-primary/20"
                    : "border-border bg-card hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                {/* Checkbox + Icon row */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${
                      isChecked
                        ? "bg-primary/15 text-primary"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <Checkbox
                    checked={isChecked}
                    className="pointer-events-none h-5 w-5"
                    tabIndex={-1}
                  />
                </div>

                {/* Category */}
                <p className="font-semibold text-sm leading-tight mb-1">{service.category}</p>

                {/* Provider name(s) */}
                <div className="space-y-0.5">
                  {service.providers.map((p) => (
                    <p key={p.name} className="text-xs text-muted-foreground leading-snug">
                      {p.name}
                    </p>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground/70 mt-2 leading-relaxed hidden sm:block">
                  {service.description}
                </p>

                {/* Selected badge */}
                {isChecked && (
                  <Badge
                    variant="default"
                    className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 shadow-sm"
                  >
                    Selected
                  </Badge>
                )}
              </button>
            );
          })}
        </div>

        {/* Show more / Show less */}
        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-1.5 mx-auto mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show {hiddenCount} More Services <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}

        {/* Contact preference + submit */}
        {selected.size > 0 && (
          <div className="mt-6 pt-6 border-t space-y-5">
            <div>
              <p className="text-sm font-medium mb-3">How would you like to connect?</p>
              <RadioGroup
                value={contactPref}
                onValueChange={(v) => setContactPref(v as "self" | "provider")}
                className="flex flex-col sm:flex-row gap-3"
              >
                <label
                  className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3 cursor-pointer transition-all ${
                    contactPref === "self"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <RadioGroupItem value="self" id="pref-self" />
                  <div>
                    <p className="text-sm font-medium flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5" /> I'll Reach Out To Them
                    </p>
                    <p className="text-xs text-muted-foreground">
                      We'll send you their contact info
                    </p>
                  </div>
                </label>
                <label
                  className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3 cursor-pointer transition-all ${
                    contactPref === "provider"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <RadioGroupItem value="provider" id="pref-provider" />
                  <div>
                    <p className="text-sm font-medium flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" /> Please Contact Me
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Our partners will reach out directly
                    </p>
                  </div>
                </label>
              </RadioGroup>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full sm:w-auto"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Request Provider Info
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
