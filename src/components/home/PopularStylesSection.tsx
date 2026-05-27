"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import { imageKitLoader } from "@/lib/imagekit";
import type { ImageLoader } from "next/image";

interface PopularStylesSectionProps {
  onOpenQuoteModal?: () => void;
}

const pictureFrameHeroUrl =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Pictrue%20Frame%20Fence%20Hero.webp?updatedAt=1762037742056";

const threeRailHeroUrl =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/3%20Rail%20Picture%20Frame/3%20Rail%20Picture%20Frame%20Pre-Stained%20Fence%20Fence%20Genius.webp?updatedAt=1762037642699";

/** Same asset as Horizontal Lattice Fence on /fence-styles */
const horizontalLatticeHeroUrl = "/lovable-uploads/8f73dbbc-942c-4ab6-9fda-bb95aa702af4.png";

export const PopularStylesSection = ({ onOpenQuoteModal }: PopularStylesSectionProps) => {
  const EstimateButton = ({ label }: { label: string }) => {
    if (onOpenQuoteModal) {
      return (
        <Button className="mt-3 w-full" onClick={onOpenQuoteModal} aria-label={`Click here for Free Estimate for ${label}`}>
          Click here for Free Estimate
        </Button>
      );
    }
    return (
      <Button className="mt-3 w-full" asChild>
        <Link href="/quote" aria-label={`Click here for Free Estimate for ${label}`}>
          Click here for Free Estimate
        </Link>
      </Button>
    );
  };

  return (
    <section className="container py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Popular Fence Styles in Seattle</h2>
      <p className="text-muted-foreground mt-2 max-w-2xl">Our most requested builds in Seattle.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        <Card className="glass-card">
          <CardContent className="p-3">
            <Link href="/fence-styles/picture-frame-fence" className="block">
              <div className="glass-frame hover:opacity-90 transition-opacity">
                <AspectRatio ratio={1}>
                  <div className="relative h-full w-full">
                    <Image
                      loader={imageKitLoader}
                      src={pictureFrameHeroUrl}
                      alt="Picture frame cedar fence by MyFence.com in Seattle"
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                      className="object-cover"
                    />
                  </div>
                </AspectRatio>
              </div>
            </Link>
            <div className="p-4 text-center">
              <h3 className="font-semibold">Picture Frame Fences</h3>
              <p className="text-sm text-muted-foreground">Clean lines, framed panels.</p>
              <EstimateButton label="Picture Frame Fence" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-3">
            <Link href="/fence-styles/3-rail-picture-frame-fence" className="block">
              <div className="glass-frame hover:opacity-90 transition-opacity">
                <AspectRatio ratio={1}>
                  <div className="relative h-full w-full">
                    <Image
                      loader={imageKitLoader}
                      src={threeRailHeroUrl}
                      alt="3 rail picture frame cedar fence installation in Seattle"
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                      className="object-cover"
                    />
                  </div>
                </AspectRatio>
              </div>
            </Link>
            <div className="p-4 text-center">
              <h3 className="font-semibold">3 Rail Picture Frame Fence</h3>
              <p className="text-sm text-muted-foreground">Sturdy rails with a premium look.</p>
              <EstimateButton label="3 Rail Picture Frame Fence" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card sm:col-span-2 lg:col-span-1">
          <CardContent className="p-3">
            <Link href="/fence-styles/horizontal-lattice-fence" className="block">
              <div className="glass-frame hover:opacity-90 transition-opacity">
                <AspectRatio ratio={1}>
                  <div className="relative h-full w-full">
                    <Image
                      src={horizontalLatticeHeroUrl}
                      alt="Horizontal lattice top cedar fence by MyFence.com"
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                      className="object-cover"
                    />
                  </div>
                </AspectRatio>
              </div>
            </Link>
            <div className="p-4 text-center">
              <h3 className="font-semibold">Horizontal Lattice & Trellis Systems</h3>
              <p className="text-sm text-muted-foreground">Modern privacy with airflow.</p>
              <EstimateButton label="Horizontal Lattice Fence" />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mt-8 relative">
        <Link href="/fence-styles">
          <Button size="lg" variant="default" className="hover-scale">
            Browse All Our Fence Styles
          </Button>
        </Link>
        <span className="absolute top-1/2 -translate-y-1/2 right-[calc(50%-120px)] sm:right-[calc(50%-140px)] text-4xl sm:text-5xl animate-pulse -rotate-45 pointer-events-none z-10" aria-hidden="true">👆</span>
      </div>
    </section>
  );
};
