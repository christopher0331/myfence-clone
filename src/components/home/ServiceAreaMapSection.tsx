"use client";

import dynamic from "next/dynamic";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function ServiceAreaMapSection() {
  const [shouldLoad, setShouldLoad] = useState(false);

  const LazyMap = useMemo(() => {
    if (!shouldLoad) return null;
    return dynamic(() => import("@/components/GoogleBusinessMap"), {
      ssr: false,
      loading: () => <div className="h-[360px] w-full rounded-lg bg-muted/20 animate-pulse" />,
    });
  }, [shouldLoad]);

  return (
    <section className="container py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Service Area</h2>
      <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
        Proudly serving the greater Seattle area within a 28-mile radius
      </p>
      
      <div className="relative min-h-[360px] w-full rounded-xl overflow-hidden bg-muted/10 border">
        {!shouldLoad ? (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center transition-all group cursor-pointer bg-gradient-to-br from-muted/20 to-muted/50"
            onClick={() => setShouldLoad(true)}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <Button 
              size="lg" 
              variant="hero"
              className="z-10 gap-2 shadow-elevated group-hover:scale-105 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                setShouldLoad(true);
              }}
            >
              <MapPin className="w-5 h-5" />
              View Interactive Map
            </Button>
            <p className="z-10 mt-4 text-sm font-medium text-muted-foreground">
              Click to see our full service coverage area
            </p>
          </div>
        ) : (
          <div className="min-h-[360px]">
            {LazyMap && <LazyMap city="Maple Valley" state="WA" radiusMiles={28} showBusinessInfo={false} />}
          </div>
        )}
      </div>
    </section>
  );
}
