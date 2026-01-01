import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import { imageKitLoader } from "@/lib/imagekit";

interface PopularStylesSectionProps {
  onOpenQuoteModal: () => void;
}

const pictureFrameHeroUrl =
  "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Picture%20Frame/Pictrue%20Frame%20Fence%20Hero.webp?updatedAt=1762037742056";

export const PopularStylesSection = ({ onOpenQuoteModal }: PopularStylesSectionProps) => {
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
                      // Keep slot size accurate; DPR may still request a larger width for crispness.
                      sizes="(max-width: 640px) 328px, (max-width: 1024px) 300px, 360px"
                      className="object-cover"
                    />
                  </div>
                </AspectRatio>
              </div>
            </Link>
            <div className="p-4 text-center">
              <h3 className="font-semibold">Picture Frame Fences</h3>
              <p className="text-sm text-muted-foreground">Clean lines, framed panels.</p>
              <Button className="mt-3 w-full" onClick={onOpenQuoteModal} aria-label="Click here for Free Estimate for Picture Frame Fence">Click here for Free Estimate</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-3">
            <Link href="/fence-styles/3-rail-picture-frame-fence" className="block">
              <div className="glass-frame hover:opacity-90 transition-opacity">
                <AspectRatio ratio={1}>
                  <img src="/lovable-uploads/3ec61262-f5b7-49bf-8010-8dff863ca81b.png" alt="3 rail picture frame cedar fence installation in Seattle" loading="lazy" className="w-full h-full object-cover" width={1080} height={1080} />
                </AspectRatio>
              </div>
            </Link>
            <div className="p-4 text-center">
              <h3 className="font-semibold">3 Rail Picture Frame Fence</h3>
              <p className="text-sm text-muted-foreground">Sturdy rails with a premium look.</p>
              <Button className="mt-3 w-full" onClick={onOpenQuoteModal} aria-label="Click here for Free Estimate for 3 Rail Picture Frame Fence">Click here for Free Estimate</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card sm:col-span-2 lg:col-span-1">
          <CardContent className="p-3">
            <Link href="/fence-styles/horizontal-lattice-fence" className="block">
              <div className="glass-frame hover:opacity-90 transition-opacity">
                <AspectRatio ratio={1}>
                  <img src="/lovable-uploads/6ca53c52-066f-4174-81fb-cf30fd6b64fd.png" alt="Horizontal lattice top cedar fence by MyFence.com" loading="lazy" className="w-full h-full object-cover" width={1080} height={1080} />
                </AspectRatio>
              </div>
            </Link>
            <div className="p-4 text-center">
              <h3 className="font-semibold">Horizontal Lattice & Trellis Systems</h3>
              <p className="text-sm text-muted-foreground">Modern privacy with airflow.</p>
              <Button className="mt-3 w-full" onClick={onOpenQuoteModal} aria-label="Click here for Free Estimate for Horizontal Lattice Fence">Click here for Free Estimate</Button>
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
