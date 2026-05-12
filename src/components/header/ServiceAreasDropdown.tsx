"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";
import { DismissableLayer } from "@radix-ui/react-dismissable-layer";
import { FocusScope } from "@radix-ui/react-focus-scope";

const serviceAreasByRegion = [
  {
    region: "King County",
    areas: [
      { to: "/service-areas/bellevue", label: "Bellevue" },
      { to: "/service-areas/bothell", label: "Bothell" },
      { to: "/service-areas/issaquah", label: "Issaquah" },
      { to: "/service-areas/issaquah-highlands", label: "Issaquah Highlands" },
      { to: "/service-areas/kent", label: "Kent" },
      { to: "/service-areas/kirkland", label: "Kirkland" },
      { to: "/service-areas/mountlake-terrace", label: "Mountlake Terrace" },
      { to: "/service-areas/redmond", label: "Redmond" },
      { to: "/service-areas/renton", label: "Renton" },
      { to: "/service-areas/sammamish", label: "Sammamish" },
      { to: "/service-areas/seattle", label: "Seattle" },
      { to: "/service-areas/seatac", label: "SeaTac" },
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
      { to: "/service-areas/orting", label: "Orting" },
      { to: "/service-areas/riverpoint", label: "Riverpoint" },
      { to: "/service-areas/sumner", label: "Sumner" },
      { to: "/service-areas/university-place", label: "University Place" },
    ],
  },
  {
    region: "East King County",
    areas: [
      { to: "/service-areas/black-diamond", label: "Black Diamond" },
      { to: "/service-areas/covington", label: "Covington" },
      { to: "/service-areas/enumclaw", label: "Enumclaw" },
      { to: "/service-areas/maple-valley", label: "Maple Valley" },
      { to: "/service-areas/north-bend", label: "North Bend" },
      { to: "/service-areas/snoqualmie", label: "Snoqualmie" },
    ],
  },
];

export default function ServiceAreasDropdown() {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [topPx, setTopPx] = useState(0);

  const syncPanelTop = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    setTopPx(el.getBoundingClientRect().bottom + 8);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    syncPanelTop();
    window.addEventListener("resize", syncPanelTop);
    window.addEventListener("scroll", syncPanelTop, true);
    return () => {
      window.removeEventListener("resize", syncPanelTop);
      window.removeEventListener("scroll", syncPanelTop, true);
    };
  }, [open, syncPanelTop]);

  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(syncPanelTop);
    return () => cancelAnimationFrame(id);
  }, [open, syncPanelTop]);

  const close = useCallback(() => setOpen(false), []);

  const panel = open ? (
    <DismissableLayer
      role="dialog"
      aria-label="Service areas"
      className="fixed left-1/2 z-[100] w-[min(96vw,960px)] max-w-[960px] -translate-x-1/2 rounded-md border bg-background p-5 text-popover-foreground shadow-md outline-none max-h-[min(70vh,calc(100vh-6rem))] overflow-y-auto overscroll-contain"
      style={{ top: Math.max(8, topPx) }}
      onPointerDownOutside={(event) => {
        const target = event.detail.originalEvent.target as Node | null;
        if (target && triggerRef.current?.contains(target)) {
          event.preventDefault();
        }
      }}
      onDismiss={close}
    >
      <FocusScope
        trapped
        loop
        onUnmountAutoFocus={(event) => {
          event.preventDefault();
          triggerRef.current?.focus();
        }}
      >
        <div className="grid grid-cols-3 gap-8">
          {serviceAreasByRegion.map((region) => {
            const useTwoColumns = region.areas.length >= 6;
            const midpoint = Math.ceil(region.areas.length / 2);
            const firstColumn = useTwoColumns ? region.areas.slice(0, midpoint) : region.areas;
            const secondColumn = useTwoColumns ? region.areas.slice(midpoint) : [];

            return (
              <div key={region.region} className="space-y-2 min-w-0">
                <h3 className="font-semibold text-sm text-foreground mb-3 text-center">{region.region}</h3>
                <div
                  className={
                    useTwoColumns
                      ? "flex justify-center gap-x-8 lg:gap-x-10 gap-1"
                      : "flex flex-col items-center gap-1"
                  }
                >
                  {useTwoColumns ? (
                    <>
                      <div className="flex flex-col gap-1 items-center min-w-0">
                        {firstColumn.map((area) => (
                          <Link
                            key={area.to}
                            href={area.to}
                            onClick={close}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 text-center"
                          >
                            {area.label}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-1 items-center min-w-0">
                        {secondColumn.map((area) => (
                          <Link
                            key={area.to}
                            href={area.to}
                            onClick={close}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 text-center"
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
                        onClick={close}
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
      </FocusScope>
    </DismissableLayer>
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
        className="text-base text-muted-foreground transition-colors hover:text-primary flex items-center gap-1"
      >
        Service Areas
        <ChevronDown className="h-4 w-4" />
      </button>
      {typeof document !== "undefined" && panel ? createPortal(panel, document.body) : null}
    </>
  );
}
