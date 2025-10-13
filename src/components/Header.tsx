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
import { ChevronDown } from "lucide-react";
const navItems = [
  { to: "/fence-styles", label: "Fence Styles" },
  { to: "/gallery", label: "Gallery" },
  { to: "/quote", label: "Virtual Quote Tool" },
  { to: "/discounts", label: "Discounts" },
  { to: "/financing", label: "Financing" },
  { to: "/blog", label: "FAQ" },
  { to: "/contact", label: "Contact us" },
];

const serviceAreas = [
  { to: "/service-areas/federal-way", label: "Federal Way, WA" },
  { to: "/service-areas/redmond", label: "Redmond, WA" },
  { to: "/service-areas/sammamish", label: "Sammamish, WA" },
  { to: "/service-areas/seattle", label: "Seattle, WA" },
  { to: "/service-areas/kirkland", label: "Kirkland, WA" },
  { to: "/service-areas/renton", label: "Renton, WA" },
  { to: "/service-areas/mountlake-terrace", label: "Mountlake Terrace, WA" },
  { to: "/service-areas/maple-valley", label: "Maple Valley, WA" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
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
          <Badge variant="secondary" className="hidden md:inline-flex">
            <Link to="/fence-genius" className="hover:underline">Fence Genius Certified</Link>
          </Badge>
        </div>

        <nav className="hidden md:flex items-center gap-6">
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
          <a href="tel:12534551885" aria-label="Call MyFence.com">
            <Button variant="hero" size="lg">(253) 455-1885</Button>
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <a href="tel:12534551885" aria-label="Call MyFence.com">
            <Button variant="default" size="sm">Call</Button>
          </a>
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
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3">
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
            <div className="text-base font-medium text-foreground pt-2 border-t">Service Areas</div>
            {serviceAreas.map((area) => (
              <Link
                key={area.to}
                to={area.to}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover:text-primary transition-colors pl-4"
              >
                {area.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
