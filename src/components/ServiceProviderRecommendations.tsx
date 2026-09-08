"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  // {
  //   id: "web-tech",
  //   category: "Web & Technology",
  //   icon: <Building2 className="w-5 h-5" />,
  //   description: "Web development, technology consulting & digital services.",
  //   providers: [
  //     {
  //       name: "Reactiv Labs — Christopher Hancock",
  //       website: "https://reactivlabs.com",
  //       email: "admin@reactivlabs.com",
  //       phone: "(206) 247-4308",
  //     },
  //   ],
  //   featured: false,
  // },
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
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const [contactPref, setContactPref] = useState<"self" | "provider">("self");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="sm:max-w-[700px] max-h-[90vh] overflow-hidden p-0 gap-0 border-0"
        style={{ background: "rgba(234, 88, 12, 0.80)" }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-2">
          <DialogHeader>
            <DialogTitle className="!text-white text-xl md:text-2xl font-bold flex items-center gap-2.5">
              <Handshake className="w-6 h-6 text-orange-200 flex-shrink-0" />
              {isSubmitted ? "You're All Set!" : "Explore Our Trusted Local Partners"}
            </DialogTitle>
            {!isSubmitted && (
              <p className="text-orange-100 text-sm mt-1.5 ml-[34px]">
                Need more work done? Select any services below and we'll connect you with our vetted partners.
              </p>
            )}
          </DialogHeader>
        </div>

        {/* Content area */}
        <div className="px-6 pb-6 pt-4 overflow-y-auto max-h-[calc(90vh-100px)]">
          {isSubmitted ? (
            <div className="text-center py-6 bg-white/15 rounded-2xl p-8">
              <CheckCircle2 className="mx-auto h-14 w-14 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Request Sent!</h3>
              <p className="text-orange-100 max-w-md mx-auto mb-6">
                {contactPref === "self"
                  ? "We've sent the contact details for your selected providers to your email. Reach out at your convenience!"
                  : "Our vetted partners will be reaching out to you shortly. Keep an eye on your phone and inbox!"}
              </p>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-white text-orange-700 hover:bg-orange-50 font-semibold"
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              {/* Provider Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {visibleServices.map((service) => {
                  const isChecked = selected.has(service.id);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`group relative text-left rounded-xl border-2 p-4 transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? "border-white bg-white shadow-lg ring-2 ring-white/50"
                          : "border-white/30 bg-white/90 hover:bg-white hover:border-white/60 hover:shadow-md"
                      }`}
                    >
                      {/* Checkbox + Icon row */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${
                            isChecked
                              ? "bg-orange-100 text-orange-700"
                              : "bg-orange-50 text-orange-400 group-hover:bg-orange-100 group-hover:text-orange-600"
                          }`}
                        >
                          {service.icon}
                        </div>
                        <Checkbox
                          checked={isChecked}
                          className="pointer-events-none h-5 w-5 border-gray-300 data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
                          tabIndex={-1}
                        />
                      </div>

                      {/* Category */}
                      <p className="font-semibold text-sm leading-tight mb-1 text-gray-900">{service.category}</p>

                      {/* Provider name(s) */}
                      <div className="space-y-0.5">
                        {service.providers.map((p) => (
                          <p key={p.name} className="text-xs text-gray-500 leading-snug">
                            {p.name}
                          </p>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed hidden sm:block">
                        {service.description}
                      </p>

                      {/* Selected badge */}
                      {isChecked && (
                        <Badge className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 shadow-sm bg-orange-600 hover:bg-orange-700">
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
                  className="flex items-center gap-1.5 mx-auto mt-4 text-sm font-medium text-white hover:text-orange-100 transition-colors"
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
                <div className="mt-5 pt-5 border-t border-white/20 space-y-5">
                  <div>
                    <p className="text-sm font-medium mb-3 text-white">How would you like to connect?</p>
                    <RadioGroup
                      value={contactPref}
                      onValueChange={(v) => setContactPref(v as "self" | "provider")}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <label
                        className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3 cursor-pointer transition-all ${
                          contactPref === "self"
                            ? "border-white bg-white shadow-md"
                            : "border-white/30 bg-white/90 hover:bg-white hover:border-white/60"
                        }`}
                      >
                        <RadioGroupItem value="self" id="pref-self" className="text-orange-600" />
                        <div>
                          <p className="text-sm font-medium flex items-center gap-1.5 text-gray-900">
                            <ExternalLink className="w-3.5 h-3.5" /> I'll Reach Out To Them
                          </p>
                          <p className="text-xs text-gray-500">
                            We'll send you their contact info
                          </p>
                        </div>
                      </label>
                      <label
                        className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3 cursor-pointer transition-all ${
                          contactPref === "provider"
                            ? "border-white bg-white shadow-md"
                            : "border-white/30 bg-white/90 hover:bg-white hover:border-white/60"
                        }`}
                      >
                        <RadioGroupItem value="provider" id="pref-provider" className="text-orange-600" />
                        <div>
                          <p className="text-sm font-medium flex items-center gap-1.5 text-gray-900">
                            <Phone className="w-3.5 h-3.5" /> Please Contact Me
                          </p>
                          <p className="text-xs text-gray-500">
                            Our partners will reach out directly
                          </p>
                        </div>
                      </label>
                    </RadioGroup>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-white text-orange-700 hover:bg-orange-50 font-semibold shadow-md"
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

              {/* No thanks link */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="block mx-auto mt-4 text-xs text-white/70 hover:text-white transition-colors underline underline-offset-2"
              >
                No thanks, I'm all set
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
