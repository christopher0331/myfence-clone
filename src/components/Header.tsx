import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { burstFirework, popEmoji } from "@/lib/effects";
import { Phone, Home } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";
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
  { to: "/referrals", label: "Referrals" },
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

const Header = () => {
  const [open, setOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <div className="container flex h-20 md:h-24 items-center justify-between">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2" onClick={(e) => {
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            const x = e.clientX || rect.left + rect.width / 2;
            const y = e.clientY || rect.top + rect.height / 2;
            burstFirework(x, y);
          }}>
            <span className="text-2xl font-semibold tracking-tight">{SITE_CONFIG.fullName}</span>
          </Link>
          <Badge variant="secondary" className="hidden lg:inline-flex">
            <Link to="/fence-genius" className="hover:underline flex items-center justify-center">Fence Genius Certified</Link>
          </Badge>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Left: Call Button */}
          <a href="tel:+12534551885">
            <Button variant="default" size="sm" className="flex items-center gap-1.5">
              <Phone size={16} />
              Call
            </Button>
          </a>

          {/* Center: Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5" onClick={(e) => {
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            const x = e.clientX || rect.left + rect.width / 2;
            const y = e.clientY || rect.top + rect.height / 2;
            burstFirework(x, y);
          }}>
            <span className="text-xl font-semibold tracking-tight">{SITE_CONFIG.fullName}</span>
          </Link>

          {/* Right: Menu Button */}
          <button 
            aria-label="Toggle menu" 
            className="px-4 h-9 flex flex-col items-center justify-center gap-1.5 relative bg-primary hover:bg-primary/90 rounded-md transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-base text-muted-foreground transition-colors hover:text-primary flex items-center gap-1">
              Fence Styles
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border z-50">
              {fenceStylesSections.map((section) => (
                <DropdownMenuItem key={section.hash} asChild>
                  <Link to={`/fence-styles${section.hash}`}>
                    {section.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navItems.filter(item => item.to !== '/discounts').map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-base transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"} ${item.to === '/contact' ? 'font-semibold' : ''}`
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
                      <div className={`${isKingCounty ? 'flex justify-center gap-x-8' : 'flex flex-col items-center'} gap-1`}>
                        {isKingCounty ? (
                          <>
                            <div className="flex flex-col gap-1 items-end">
                              {firstColumn.map((area) => (
                                <Link
                                  key={area.to}
                                  to={area.to}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                >
                                  {area.label}
                                </Link>
                              ))}
                            </div>
                            <div className="flex flex-col gap-1 items-start">
                              {secondColumn.map((area) => (
                                <Link
                                  key={area.to}
                                  to={area.to}
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
                              to={area.to}
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
          <Link to="/contact">
            <Button variant="hero" size="lg">(253) 455-1885</Button>
          </Link>
        </nav>

      </div>

      {/* Backdrop overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        style={{ top: '5rem' }}
      />
      
      <div className={`lg:hidden fixed right-0 border-t border-l h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain pb-2 pb-[env(safe-area-inset-bottom)] bg-background transition-transform duration-300 w-64 ${open ? 'translate-x-0' : 'translate-x-full'}`} style={{ WebkitOverflowScrolling: 'touch', top: '5rem' }}>
        <div className="py-3 px-4 flex flex-col gap-3">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              Home
            </NavLink>
            <div className="text-base font-medium text-foreground">
              <Link to="/fence-styles" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">
                Fence Styles
              </Link>
              <div className="flex flex-col gap-2 mt-2 pl-4">
                {fenceStylesSections.map((section) => (
                  <Link
                    key={section.hash}
                    to={`/fence-styles${section.hash}`}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            </div>
            <NavLink
              to="/fence-genius"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              Fence Genius
            </NavLink>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"} ${item.to === '/contact' ? 'font-semibold' : ''}`
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
                      animationDelay: `${i * 100}ms`,
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
    </header>
  );
};

export default Header;
