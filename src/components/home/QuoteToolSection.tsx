import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const QuoteToolSection = () => {
  return (
    <section className="container py-12 md:py-16" aria-labelledby="instant-quote-heading">
      <h2 id="instant-quote-heading" className="text-2xl md:text-3xl font-bold">Get Your Free Fence Quote Today</h2>
      <p className="text-muted-foreground mt-2 max-w-2xl">Build your fence estimate in minutes with real-time pricing.</p>
      
      {/* Mobile version - Simple button to external site */}
      <Card className="mt-6 glass-card overflow-hidden md:hidden">
        <CardContent className="p-6 text-center">
          <div className="text-xs uppercase tracking-wider text-primary/90 mb-2">Powered by SeattleFenceQuote.com</div>
          <h3 className="text-xl font-semibold mb-4">Instant Online Estimate in 60 Seconds</h3>
          <p className="text-muted-foreground mb-6">Use our interactive tool to design your fence and get instant pricing.</p>
          <Button size="lg" className="w-full" asChild>
            <a href="https://SeattleFenceQuote.com" target="_blank" rel="noopener noreferrer" aria-label="Get Virtual Quote on SeattleFenceQuote.com">
              Get Virtual Quote
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Desktop version - Full layout */}
      <Card className="mt-6 glass-card overflow-hidden hidden md:block">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-wider text-primary/90">Powered by SeattleFenceQuote.com</div>
              <h3 className="mt-2 text-2xl font-semibold">Or Call Our Seattle Team</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" /> Real-time pricing</li>
                <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" /> Interactive map layout</li>
                <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" /> No obligation — free to use</li>
              </ul>
              <div className="mt-6">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/quote" aria-label="Start Building Your Estimate on the quote page">Start Building Your Estimate</Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[220px] lg:min-h-[320px] bg-gradient-primary p-4 md:p-6 flex items-center justify-center">
              <div className="w-full h-full rounded-xl overflow-hidden ring-2 ring-primary/60 shadow-glow">
                <img
                  src="/lovable-uploads/f8a11a30-3a13-42cb-8880-f95fd7547c0e.png"
                  alt="Fence layout map example from SeattleFenceQuote"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-x-4 bottom-4">
                <p className="text-xs md:text-sm bg-background/70 text-foreground rounded-md px-3 py-2 shadow-elevated backdrop-blur">
                  Pick your fence style, posts, and upgrades — then draw your fence on your property to get a quick quote.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
