import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { burstFirework, popEmoji } from "@/lib/effects";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
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
  { label: "Add-On Options", hash: "#add-on-options" },
];

const serviceAreas = [
  { to: "/service-areas/bellevue", label: "Bellevue, WA" },
  { to: "/service-areas/covington", label: "Covington, WA" },
  { to: "/service-areas/enumclaw", label: "Enumclaw, WA" },
  { to: "/service-areas/federal-way", label: "Federal Way, WA" },
  { to: "/service-areas/gig-harbor", label: "Gig Harbor, WA" },
  { to: "/service-areas/issaquah", label: "Issaquah, WA" },
  { to: "/service-areas/kirkland", label: "Kirkland, WA" },
  { to: "/service-areas/lake-tapps", label: "Lake Tapps, WA" },
  { to: "/service-areas/maple-valley", label: "Maple Valley, WA" },
  { to: "/service-areas/mountlake-terrace", label: "Mountlake Terrace, WA" },
  { to: "/service-areas/north-bend", label: "North Bend, WA" },
  { to: "/service-areas/redmond", label: "Redmond, WA" },
  { to: "/service-areas/renton", label: "Renton, WA" },
  { to: "/service-areas/sammamish", label: "Sammamish, WA" },
  { to: "/service-areas/seattle", label: "Seattle, WA" },
].sort((a, b) => a.label.localeCompare(b.label));

const Header = () => {
  const [open, setOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container flex h-20 md:h-24 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2" onClick={(e) => {
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            const x = e.clientX || rect.left + rect.width / 2;
            const y = e.clientY || rect.top + rect.height / 2;
            burstFirework(x, y);
          }}>
            <span className="text-xl font-semibold tracking-tight">MyFence.com</span>
          </Link>
          <Badge variant="secondary" className="hidden lg:inline-flex">
            <Link to="/fence-genius" className="hover:underline">Fence Genius Certified</Link>
          </Badge>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-base text-muted-foreground transition-colors hover:text-primary flex items-center gap-1">
              Fence Styles
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border z-50">
              {fenceStylesSections.map((section) => (
                <DropdownMenuItem
                  key={section.hash}
                  onSelect={() => {
                    setTimeout(() => {
                      window.location.href = `/fence-styles${section.hash}`;
                    }, 100);
                  }}
                >
                  {section.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-base transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-base text-muted-foreground transition-colors hover:text-primary flex items-center gap-1">
              Service Areas
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border z-50">
              {serviceAreas.map((area) => (
                <DropdownMenuItem key={area.to} asChild>
                  <Link to={area.to} className="cursor-pointer">
                    {area.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/contact">
            <Button variant="hero" size="lg">(253) 455-1885</Button>
          </Link>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <Link to="/contact">
            <Button variant="default" size="sm">Call</Button>
          </Link>
          <Button aria-label="Toggle menu" variant="secondary" size="icon" onClick={() => setOpen((v) => !v)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain pb-2 pb-[env(safe-area-inset-bottom)] animate-slide-in-left" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="container py-3 flex flex-col gap-3">
            <div className="text-base font-medium text-foreground">
              <Link to="/fence-styles" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">
                Fence Styles
              </Link>
              <div className="flex flex-col gap-2 mt-2 pl-4">
                {fenceStylesSections.map((section) => (
                  <a
                    key={section.hash}
                    href={`/fence-styles${section.hash}`}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </div>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
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
                    to={area.to}
                    onClick={() => setOpen(false)}
                    className="text-base text-muted-foreground hover:text-primary transition-colors pl-4 opacity-0 animate-slide-fade-in"
                    style={{ 
                      animationDelay: `${i * 200}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {area.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
