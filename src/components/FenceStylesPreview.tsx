"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FenceStyle {
  img: string;
  title: string;
  desc: string;
  badge?: string;
  link?: string;
}

const popularStyles: FenceStyle[] = [
  { 
    img: "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png", 
    title: "Picture Frame Fence", 
    desc: "Refined border trim framing each panel for a premium look.",
    badge: "Most Popular",
    link: "/fence-styles/picture-frame-fence"
  },
  { 
    img: "/lovable-uploads/1d91d676-3b17-4347-9ea7-28027e05e373.png", 
    title: "Horizontal Fence", 
    desc: "Framed horizontal fence with center rail support for maximum durability.",
    badge: "Fan Favorite",
    link: "/fence-styles/horizontal-fence"
  },
  { 
    img: "/lovable-uploads/f729a8a5-2693-400d-96c0-a8869a528f05.png", 
    title: "6' Black Hogwire Fence", 
    desc: "Secure yet visually open fencing perfect for wooded properties.",
    badge: "Security & Style",
    link: "/fence-styles/black-hogwire-fence"
  },
  { 
    img: "/lovable-uploads/7f3fe64f-1dd1-4d94-b585-bf9cb4ae1bd6.png", 
    title: "Craftsman Style Fence", 
    desc: "Distinctive craftsman accents with open top detailing.",
    link: "/fence-styles/craftsman-style-fence"
  },
  { 
    img: "/lovable-uploads/8f73dbbc-942c-4ab6-9fda-bb95aa702af4.png", 
    title: "Horizontal Lattice Fence", 
    desc: "Horizontal lattice with craftsman foundation and stainless steel fasteners.",
    link: "/fence-styles/horizontal-lattice-fence"
  },
  { 
    img: "/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png", 
    title: "Solid Board Fence", 
    desc: "Budget-friendly option with 2 rails and stainless steel fasteners.",
    badge: "Budget Option",
    link: "/fence-styles/solid-board-fence"
  },
];

interface FenceStylesPreviewProps {
  city?: string;
}

const FenceStylesPreview = ({ city }: FenceStylesPreviewProps) => {
  return (
    <section className="container py-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Popular Fence Styles{city ? ` in ${city}` : ''}
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            From classic picture frame to modern horizontal designs, we offer cedar fence styles that complement any property.
          </p>
        </div>
        <Button asChild variant="outline" size="lg">
          <Link href="/fence-styles">
            View All Styles
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularStyles.map((style) => (
          <Card key={style.title} className="overflow-hidden hover:shadow-elevated transition-shadow group">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-lg">
                <span>{style.title}</span>
                {style.badge && (
                  <Badge variant="secondary" className="shrink-0">{style.badge}</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={1}>
                <img 
                  src={style.img} 
                  alt={`${style.title} ${city ? `in ${city}` : ''}`} 
                  loading="lazy" 
                  className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300" 
                />
              </AspectRatio>
              <p className="text-sm text-muted-foreground mt-3 mb-4">{style.desc}</p>
              {style.link && (
                <Link
                  href={style.link}
                  className="inline-flex text-primary hover:underline text-sm font-medium"
                  aria-label={`Learn more about ${style.title}`}
                >
                  Learn more →
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FenceStylesPreview;
