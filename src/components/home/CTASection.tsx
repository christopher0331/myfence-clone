import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Property?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Get a free estimate from Seattle's most trusted fence contractor. Family-owned, engineer-built, and backed by cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8 animate-fade-in" asChild>
            <Link href="/quote">Get Your Free Quote</Link>
          </Button>
          <Button size="lg" variant="outline" className="px-8 animate-fade-in" asChild>
            <a href="tel:+12534551885">(253) 455-1885</a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          ⭐ 4.9/5 Stars • 100+ Happy Customers • Licensed & Insured
        </p>
      </div>
    </section>
  );
};
