"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceAreaContactForm from "@/components/forms/ServiceAreaContactForm";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import { locationLabelFromPath } from "@/lib/serviceAreaLabel";

interface LeadCaptureTabsProps {
  /** Optional override for the virtual quote tool heading; otherwise derived from the URL. */
  fenceStyleName?: string;
}

/**
 * Two-tab lead capture block:
 *  - Left tab (default): the SKU-stamped contact form for this page.
 *  - Right tab: the interactive Virtual Quote Tool.
 */
export default function LeadCaptureTabs({ fenceStyleName }: LeadCaptureTabsProps) {
  const pathname = usePathname() || "";
  const location = useMemo(() => locationLabelFromPath(pathname), [pathname]);
  const toolName = fenceStyleName || (location ? `${location} fence` : "your fence");

  return (
    <section className="py-12 md:py-16">
      <Tabs defaultValue="contact" className="w-full">
        <div className="container flex justify-center">
          <TabsList>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="quote">Virtual Quote Tool</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="contact">
          <div className="container">
            <div className="mx-auto mt-6 max-w-2xl">
              <ServiceAreaContactForm />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="quote" className="mt-0">
          <VirtualQuoteTool fenceStyleName={toolName} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
