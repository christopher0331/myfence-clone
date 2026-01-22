"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

export default function ServiceAreasDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-base text-muted-foreground transition-colors hover:text-primary flex items-center gap-1">
        Service Areas
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="bg-background border z-50 w-[600px] p-4 mt-0">
        <div className="grid grid-cols-4 gap-6">
          {serviceAreasByRegion.map((region) => {
            const isKingCounty = region.region === "King County";
            const midpoint = Math.ceil(region.areas.length / 2);
            const firstColumn = isKingCounty ? region.areas.slice(0, midpoint) : region.areas;
            const secondColumn = isKingCounty ? region.areas.slice(midpoint) : [];
            
            return (
              <div key={region.region} className={`space-y-2 ${isKingCounty ? 'col-span-2' : ''}`}>
                <h3 className="font-semibold text-sm text-foreground mb-3 text-center">{region.region}</h3>
                <div className={`${isKingCounty ? 'flex justify-center gap-x-12' : 'flex flex-col items-center'} gap-1`}>
                  {isKingCounty ? (
                    <>
                      <div className="flex flex-col gap-1 items-center">
                        {firstColumn.map((area) => (
                          <Link
                            key={area.to}
                            href={area.to}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            {area.label}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        {secondColumn.map((area) => (
                          <Link
                            key={area.to}
                            href={area.to}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            {area.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    region.areas.map((area) => (
                      <Link
                        key={area.to}
                        href={area.to}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {area.label}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
