import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const navItems = [
  { to: "/fence-styles", label: "Fence Styles" },
  { to: "/gallery", label: "Gallery" },
  { to: "/quote", label: "Virtual Quote Tool" },
  { to: "/financing", label: "Financing" },
  { to: "/contact", label: "Contact us" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const triggerFirework = (x: number, y: number) => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.right = '0';
      canvas.style.bottom = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      if (!ctx) { document.body.removeChild(canvas); return; }

      const css = getComputedStyle(document.documentElement);
      const hsl = (name: string) => {
        const v = css.getPropertyValue(name).trim();
        return v ? `hsl(${v})` : 'hsl(0 0% 100%)';
      };
      const colors = [hsl('--primary'), hsl('--secondary'), hsl('--accent')];

      const particles = Array.from({ length: 28 }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 3;
        return {
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          radius: 1 + Math.random() * 2,
        };
      });

      const start = performance.now();
      const duration = 800;
      function tick(now: number) {
        const t = (now - start) / duration;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          p.vy += 0.02; // gravity
          p.x += p.vx;
          p.y += p.vy;
          p.alpha = Math.max(0, 1 - t);
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color as string;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
        if (t < 1) requestAnimationFrame(tick);
        else {
          ctx.globalAlpha = 1;
          document.body.removeChild(canvas);
        }
      }
      requestAnimationFrame(tick);
    } catch {
      // no-op
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container flex h-20 md:h-24 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2" onClick={(e) => { const rect = (e.currentTarget as HTMLElement).getBoundingClientRect(); const x = e.clientX || rect.left + rect.width / 2; const y = e.clientY || rect.top + rect.height / 2; triggerFirework(x, y); }}>
            <span className="text-xl font-semibold tracking-tight">MyFence.com</span>
          </Link>
          <Badge variant="secondary" className="hidden md:inline-flex">Fence Genius Certified</Badge>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
