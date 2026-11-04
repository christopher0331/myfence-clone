"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { burstFirework, popEmoji } from "@/lib/effects";
import { Phone, Home, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { imageKitLoader } from "@/lib/imagekit";
import dynamic from "next/dynamic";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const headerLogoUrl = "https://ik.imagekit.io/xft9mcl5v/testing-3.webp";

const ServiceAreasDropdown = dynamic(() => import("./header/ServiceAreasDropdown"), {
  ssr: false,
  loading: () => <span className="text-base text-muted-foreground flex items-center gap-1">Service Areas <ChevronDown className="h-4 w-4" /></span>
});

const MobileMenu = dynamic(() => import("./header/MobileMenu"), {
  ssr: false
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b z-50 transition-all duration-300">
      <div
        className={`container flex items-center justify-center gap-6 transition-all duration-300 ${
          isScrolled ? "h-16 md:h-20" : "h-24 md:h-32"
        }`}
      >
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-3 mr-4">
          <Link href="/" className="flex flex-col items-start" onClick={(e) => {
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            const x = e.clientX || rect.left + rect.width / 2;
            const y = e.clientY || rect.top + rect.height / 2;
            burstFirework(x, y);
          }}>
            <Image
              loader={imageKitLoader}
              src={headerLogoUrl}
              alt={SITE_CONFIG.fullName}
              width={240}
              height={80}
              priority
              sizes="(max-width: 1024px) 160px, 220px"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-8 md:h-12" : "h-16 md:h-24"
              }`}
            />
          </Link>
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
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5" onClick={(e) => {
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            const x = e.clientX || rect.left + rect.width / 2;
            const y = e.clientY || rect.top + rect.height / 2;
            burstFirework(x, y);
          }}>
            <Image
              loader={imageKitLoader}
              src={headerLogoUrl}
              alt={SITE_CONFIG.fullName}
              width={180}
              height={56}
              sizes="140px"
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? "h-9 min-w-[64px] min-h-[64px]" : "h-10 min-w-[75px] min-h-[75px]"
              }`}
            />
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

        <nav className="hidden lg:flex items-center gap-8 pt-3">
          {[
            { to: "/privacy-fences", label: "Privacy Fences" },
            { to: "/pre-staining-cedar-fence", label: "Cedar Fences" },
            { to: "/fence-styles/cedar-steel-hybrid-fence", label: "Hybrid Fences" },
          ].map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`text-base transition-colors hover:text-primary ${pathname === item.to ? "text-primary" : "text-muted-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
          <ServiceAreasDropdown />
          <Link
            href="/gallery"
            className={`text-base transition-colors hover:text-primary ${pathname === "/gallery" ? "text-primary" : "text-muted-foreground"}`}
          >
            Gallery
          </Link>
          <Link href="/quote" className="text-base font-semibold text-primary transition-colors hover:underline">
            Free Quote
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-base text-muted-foreground transition-colors hover:text-primary flex items-center gap-1">
              More
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border z-50">
              {[
                { label: "All Fence Styles", href: "/fence-styles#fence-styles" },
                { label: "Fence Post Options", href: "/fence-styles#post-options" },
                { label: "Upgrade Options", href: "/fence-styles#add-on-options" },
                { label: "Financing", href: "/financing" },
                { label: "FAQ", href: "/blog" },
                { label: "Contact us", href: "/contact" },
              ].map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} scroll={false}>
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-col items-center gap-1 ml-4">
            <Link href="/contact">
              <Button variant="hero" size="lg">(253) 455-1885</Button>
            </Link>
            <Badge variant="secondary">
              <Link href="/fence-genius" className="hover:underline flex items-center justify-center">Fence Genius Certified</Link>
            </Badge>
          </div>
        </nav>

      </div>

      {/* Backdrop overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 z-40 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        style={{ top: '5rem' }}
      />
      
      <div className={`lg:hidden fixed right-0 border-t border-l mobile-menu-height overflow-y-auto overscroll-contain pb-2 pb-[env(safe-area-inset-bottom)] bg-background transition-transform duration-300 w-64 z-50 ${open ? 'translate-x-0' : 'translate-x-full'}`} style={{ WebkitOverflowScrolling: 'touch', top: '5rem' }}>
        {open && <MobileMenu onClose={() => setOpen(false)} pathname={pathname} />}
      </div>
    </header>
  );
};

export default Header;
