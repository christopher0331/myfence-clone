import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

interface AboutUsSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutUsSection = ({ onOpenQuoteModal }: AboutUsSectionProps) => {
  return (
    <section className="container relative z-10 -mt-12 md:-mt-36 lg:-mt-44 pt-10 md:pt-12 pb-0">
      <div className="grid md:grid-cols-[1fr_1fr] items-stretch rounded-xl shadow-elevated overflow-hidden">
        <div className="bg-foreground text-background p-6 md:p-10">
          <div className="text-xs uppercase tracking-wider opacity-80">About Us</div>
          <h1 className="mt-2 text-2xl md:text-3xl font-bold leading-tight text-center md:text-left">Seattle Fence Contractor | Fence Installation & Design in Seattle</h1>
          <p className="mt-2 text-sm opacity-80 text-center md:text-left">Local Father & Son Owned</p>
          <p className="mt-4 text-sm md:text-base opacity-90 leading-relaxed hidden md:block">
            MyFence.com is a Seattle-based startup founded by father and son duo Eric & Andrew Knudsen. We're not a
            franchise—just a local company with a killer name! As the original company using
            <Link href="/fence-genius" className="text-primary hover:underline">
              Fence Genius
            </Link>
            technology, we're spearheading efforts to modernize an outdated industry where traditional contractors build
            everything onsite with no customer clarity about what they'll receive. With zero subcontracting, everything
            is done in-house by our skilled team, combining traditional craftsmanship with innovative technology to
            deliver exceptional, transparent results.
          </p>
          <div className="mt-5 flex justify-center relative">
            <Button size="lg" variant="secondary" onClick={onOpenQuoteModal} className="hover-scale px-16 sm:px-12 text-base sm:text-lg relative">
              Free Quotes
            </Button>
            <span className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-40 text-4xl sm:text-5xl animate-pulse -rotate-45 pointer-events-none z-10" aria-hidden="true">👆</span>
          </div>
        </div>
        <div className="bg-card text-foreground p-3 md:p-8 flex items-center justify-center order-first md:order-last">
          <div className="w-full rounded-xl overflow-hidden ring-2 ring-primary/60 shadow-glow">
            <AspectRatio ratio={16/9} className="md:aspect-[4/3]">
              <img
                src="/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png"
                alt="Father and son team at MyFence.com standing in front of a cedar fence in Seattle"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};
