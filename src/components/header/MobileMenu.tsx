"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

interface MobileMenuProps {
  onClose: () => void;
  pathname: string;
}

const navItems = [
  { to: "/quote", label: "Virtual Quote Tool" },
  { to: "/discounts", label: "Discounts" },
  { to: "/financing", label: "Financing" },
  { to: "/blog", label: "FAQ" },
  { to: "/contact", label: "Contact us" },
];

const fenceStylesSections = [
  { label: "Fence Styles", hash: "#fence-styles" },
  { label: "Fence Post Options", hash: "#post-options" },
  { label: "Upgrade Options", hash: "#add-on-options" },
];

const serviceAreasByRegion = [
  {
    region: "King County",
    areas: [
      { to: "/service-areas/bellevue", label: "Bellevue" },
      { to: "/service-areas/issaquah", label: "Issaquah" },
      { to: "/service-areas/kirkland", label: "Kirkland" },
      { to: "/service-areas/mountlake-terrace", label: "Mountlake Terrace" },
      { to: "/service-areas/redmond", label: "Redmond" },
      { to: "/service-areas/renton", label: "Renton" },
      { to: "/service-areas/sammamish", label: "Sammamish" },
      { to: "/service-areas/seattle", label: "Seattle" },
      { to: "/service-areas/tukwila", label: "Tukwila" },
    ],
  },
  {
    region: "Pierce County",
    areas: [
      { to: "/service-areas/bonney-lake", label: "Bonney Lake" },
      { to: "/service-areas/federal-way", label: "Federal Way" },
      { to: "/service-areas/gig-harbor", label: "Gig Harbor" },
      { to: "/service-areas/lake-tapps", label: "Lake Tapps" },
      { to: "/service-areas/sumner", label: "Sumner" },
    ],
  },
  {
    region: "East King County",
    areas: [
      { to: "/service-areas/covington", label: "Covington" },
      { to: "/service-areas/enumclaw", label: "Enumclaw" },
      { to: "/service-areas/maple-valley", label: "Maple Valley" },
      { to: "/service-areas/north-bend", label: "North Bend" },
    ],
  },
];

const serviceAreas = serviceAreasByRegion.flatMap(region => 
  region.areas.map(area => ({ ...area, label: `${area.label}, WA` }))
).sort((a, b) => a.label.localeCompare(b.label));

export default function MobileMenu({ onClose, pathname }: MobileMenuProps) {
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);

  return (
    <div className="py-3 px-4 flex flex-col gap-3">
      <Link
        href="/"
        onClick={onClose}
        className={`text-base transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-muted-foreground"}`}
      >
        Home
      </Link>
      <div className="text-base font-medium text-foreground">
        <Link href="/fence-styles" onClick={onClose} className="hover:text-primary transition-colors">
          Fence Styles
        </Link>
        <div className="flex flex-col gap-2 mt-2 pl-4">
          {fenceStylesSections.map((section) => (
            <Link
              key={section.hash}
              href={`/fence-styles${section.hash}`}
              onClick={onClose}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="/fence-genius"
        onClick={onClose}
        className={`text-base transition-colors hover:text-primary ${pathname === "/fence-genius" ? "text-primary" : "text-muted-foreground"}`}
      >
        Fence Genius
      </Link>
      {navItems.map((item) => {
        const isActive = pathname === item.to;
        return (
          <Link
            key={item.to}
            href={item.to}
            onClick={onClose}
            className={`text-base transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"} ${item.to === '/contact' ? 'font-semibold' : ''}`}
          >
            {item.label}
          </Link>
        );
      })}
      <Collapsible
        open={serviceAreasOpen}
        onOpenChange={setServiceAreasOpen}
        className="pt-2 border-t"
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium text-foreground hover:text-primary transition-colors">
          Service Areas
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${serviceAreasOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3 flex flex-col gap-3 overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          {serviceAreas.map((area, i) => (
            <Link
              key={area.to}
              href={area.to}
              onClick={onClose}
              className="text-base text-muted-foreground hover:text-primary transition-colors pl-4 opacity-0 animate-slide-fade-in"
              style={{ 
                animationDelay: `${i * 10}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {area.label}
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
