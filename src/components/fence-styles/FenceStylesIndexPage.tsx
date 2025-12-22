"use client";

import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import boardOnBoardImg from "@/assets/fences/board-on-board-updated.png";
import cedarPostOnPipeImg from "@/assets/cedar-post-on-pipe.jpg";
import { ChevronDown } from "lucide-react";

const styles = [
  { img: "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png", title: "Picture Frame Fence", desc: "Refined border trim framing each panel for a premium look.", link: "/fence-styles/picture-frame-fence", badge: "Most Popular" },
  { img: "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png", title: "3 Rail Picture Frame Fence", desc: "Three horizontal rails add strength and architectural detail.", link: "/fence-styles/3-rail-picture-frame-fence" },
  { img: "/lovable-uploads/7f3fe64f-1dd1-4d94-b585-bf9cb4ae1bd6.png", title: "Craftsman Style Fence", desc: "Distinctive craftsman accents with open top detailing.", link: "/fence-styles/craftsman-style-fence" },
  { img: "/lovable-uploads/8f73dbbc-942c-4ab6-9fda-bb95aa702af4.png", title: "Horizontal Lattice Fence", desc: "Horizontal lattice with craftsman foundation, 5/8 inch thick strips, and stainless steel fasteners.", link: "/fence-styles/horizontal-lattice-fence" },
  { img: "/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png", title: "Solid Board Fence", desc: "Budget-friendly option with 2 rails and stainless steel fasteners. Most economical choice.", badge: "Budget Option", link: "/fence-styles/solid-board-fence" },
  { img: "/lovable-uploads/1d91d676-3b17-4347-9ea7-28027e05e373.png", title: "Horizontal Fence", desc: "Framed horizontal fence with center rail support for maximum durability.", badge: "Fan Favorite", link: "/fence-styles/horizontal-fence" },
  { img: "/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png", title: "Cedar/Steel Hybrid Fence", desc: "26 gauge corrugated steel panels with HDP NoFade™ paint and cedar framing. Zero maintenance, ultimate privacy. Starting at $80/LF.", badge: "Premium Investment", link: "/fence-styles/cedar-steel-hybrid-fence" },
  { img: "/lovable-uploads/84481d29-7e44-45ca-8f45-7cb118cf360e.png", title: "5' Galvanized Hogwire Fence", desc: "Strong galvanized wire panels for durable visibility and style.", link: "/fence-styles/galvanized-hogwire-fence" },
  { img: "/lovable-uploads/f729a8a5-2693-400d-96c0-a8869a528f05.png", title: "6' Black Hogwire Fence", desc: "Secure yet visually open fencing perfect for wooded properties. Cedar frame with powder-coated steel panels.", badge: "Security & Style", link: "/fence-styles/black-hogwire-fence" },
  { img: "/lovable-uploads/96fca880-7890-4f75-83cc-4a78693640a9.png", title: "3' Black Hogwire Fence", desc: "Budget-friendly option with the same open feeling. Perfect for flat terrain and wooded backdrops.", badge: "Budget Option", link: "/fence-styles/three-ft-black-hogwire-fence" },
  { img: "/lovable-uploads/be14d195-34f5-4c25-9618-a506bed8ecc1.png", title: "Picket Fence", desc: "Timeless neighborhood charm with classic pickets.", link: "/fence-styles/picket-fence" },
];

const postOptions = [
  {
    title: '3.5" x 3.5" Fence Posts',
    badge: 'Not recommended',
    img: '/lovable-uploads/f6023686-8397-4b40-adba-9874bf191350.png',
    desc: 'Smaller “4x4” posts with shorter lifespan; more prone to warp and rot over time.',
  },
  {
    title: '4.125" x 4.125" x 9\' Posts',
    badge: 'Recommended',
    img: '/lovable-uploads/ad96634b-cce1-43d6-ad83-d21b2b2cd5ca.png',
    desc: 'Our most common and recommended post size—great balance of strength, cost, and longevity.',
  },
  {
    title: '5.5" x 5.5" x 10\' (6x6)',
    badge: 'Longest lasting',
    img: '/lovable-uploads/3ab63582-2f4d-4294-99aa-f04fd0426960.png',
    desc: 'Premium, heavy-duty posts providing maximum rigidity and the best long-term performance.',
  },
  {
    title: '4x4 Steel Posts',
    badge: '40-Year Warranty',
    img: '/lovable-uploads/barrier-boss-4x4-steel-post.webp',
    desc: "Barrier Boss black steel posts—won't rot like wood. Available in 9' and 12' heights for lattice toppers.",
  },
  {
    title: 'Post on Pipe',
    badge: 'Steel core',
    img: '/lovable-uploads/4240161f-87d0-4bbd-9c54-8d4fe261f7be.png',
    desc: 'A steel fence post inserted into a 4.125" x 4.125" x 7\' wood post to resist ground-rot factors.',
  },
  {
    title: 'Cedar Post on Pipe',
    badge: 'Premium Cedar',
    img: cedarPostOnPipeImg,
    desc: 'Cedar post on steel pipe with through-bolt for enhanced wind resistance. Maintains consistent cedar aesthetic.',
  },
];

const addOns = [
  { title: 'Upgrade to 4" Screws', img: '/lovable-uploads/81402d1b-e77f-4e51-88db-e0cd71e3a274.png', desc: 'Use 4" exterior screws for 2x4 rails instead of nails for superior hold and longevity.' },
  { title: 'Clear Cedar Fence Boards Upgrade', img: '/lovable-uploads/d27f46a0-cb41-4ed9-917a-44e0969e2f57.png', desc: 'Premium clear cedar boards with minimal knots for a refined appearance.' },
  { title: 'Board on Board Style', img: boardOnBoardImg, desc: 'Overlapping fence boards eliminate gaps for complete privacy.' },
  { title: '2x4 Rot Board', img: '/lovable-uploads/f24146a2-1913-4499-8e33-5f182b33635e.png', desc: 'Bottom 2x4 sacrificial board for near-zero ground clearance without exposing cedar to soil.' },
  { title: '2 Foot Lattice Topper', img: '/lovable-uploads/23f4897d-5b29-491b-9810-3568c0cb6ebe.png', desc: 'Add a 2-foot lattice extension to achieve near 8-foot total fence height for maximum privacy while maintaining the elegant lattice aesthetic at the top.' },
  { title: 'Pre-Staining', img: '/lovable-uploads/64a3d163-65f2-4ddc-a1bb-cc89381508a1.png', desc: 'Cedar components are stained prior to install for consistent coverage and early protection.' },
  { title: 'Soil Haul-Away', img: '/lovable-uploads/19760b8b-24e6-48d2-991f-f1dd5b571776.png', desc: 'We remove excess soil generated during post hole digging.' },
  { title: 'Trellis Systems', img: '/lovable-uploads/793a9940-252a-431c-bc9c-f109022e1b92.png', desc: 'Add trellis features to elevate curb appeal and support plants.' },
];

const FenceStylesIndexPage = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myfence.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Fence Styles",
        "item": "https://myfence.com/fence-styles",
      },
    ],
  };

  return (
    <>
      <Seo
        title="Seattle Cedar Fence Styles: Picture Frame, Horizontal"
        description="Expert fence styles in Seattle, WA: picture frame cedar, horizontal, hogwire, craftsman designs. 30+ years experience. Call (253) 455-1885 for free estimates."
        canonical="https://myfence.com/fence-styles"
        structuredData={[
          breadcrumbData,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fence Installation Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MyFence.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "addressCountry": "US",
              },
              "telephone": "+1-253-455-1885",
            },
            "areaServed": {
              "@type": "City",
              "name": "Seattle",
              "containedInPlace": {
                "@type": "State",
                "name": "Washington",
              },
            },
          },
        ]}
      />

      <section id="fence-styles" className="container pt-8 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
          <h1 className="text-4xl font-bold tracking-tight">Fence Styles for Every Seattle Home</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                Jump to Section
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-50 w-56 bg-background">
              <DropdownMenuItem
                onSelect={() => {
                  setTimeout(() => {
                    document
                      .getElementById("fence-styles")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100);
                }}
              >
                Fence Styles
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  setTimeout(() => {
                    document
                      .getElementById("post-options")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100);
                }}
              >
                Fence Post Options
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  setTimeout(() => {
                    document
                      .getElementById("add-on-options")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100);
                }}
              >
                Add-On Options
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          We design and build fences that fit your property, lifestyle, and budget — backed by our exclusive
          {" "}
          <Link href="/fence-genius" className="text-primary hover:underline">
            Fence Genius technology
          </Link>{" "}
          for perfect planning.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {styles.map((s) => (
            <Card key={s.title} className="overflow-hidden hover:shadow-elevated transition-shadow h-full flex flex-col group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="group-hover:text-primary transition-colors">{s.title}</span>
                  {s.badge && <Badge variant="secondary">{s.badge}</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <AspectRatio ratio={1}>
                  <OptimizedImage
                    src={s.img}
                    alt={`${s.title} fence in Seattle by MyFence.com`}
                    className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
                <p className="text-sm text-muted-foreground mt-4">{s.desc}</p>
                <div className="mt-auto pt-4">
                  <Button asChild className="w-full">
                    <Link href={s.link}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <h2 id="post-options" className="text-2xl font-semibold tracking-tight">
          Fence Post Options
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Choose the right post for your fence. We typically recommend 4.125" x 4.125" x 9' posts for most projects; upgrade
          options increase strength and longevity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {postOptions.map((p) => (
            <Card key={p.title} className="hover:shadow-elevated transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.title}</span>
                  <Badge variant="secondary">{p.badge}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <AspectRatio ratio={1}>
                  <OptimizedImage
                    src={p.img}
                    alt={`${p.title} post option for Seattle fences by MyFence.com`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </AspectRatio>
                <p className="text-sm text-muted-foreground mt-4 mb-4">{p.desc}</p>
                {p.title === '3.5" x 3.5" Fence Posts' && (
                  <Button asChild className="mt-auto w-full" variant="destructive">
                    <Link href="/fence-posts/3-5-posts">Learn Why We Don't Use These</Link>
                  </Button>
                )}
                {p.title === "4.125\" x 4.125\" x 9' Posts" && (
                  <Button asChild className="mt-auto w-full">
                    <Link href="/fence-posts/4-125-posts">Learn More</Link>
                  </Button>
                )}
                {p.title === "5.5\" x 5.5\" x 10' (6x6)" && (
                  <Button asChild className="mt-auto w-full">
                    <Link href="/fence-posts/6x6">Learn More About 6x6 Posts</Link>
                  </Button>
                )}
                {p.title === "4x4 Steel Posts" && (
                  <Button asChild className="mt-auto w-full">
                    <Link href="/fence-posts/steel-posts">Learn More About Steel Posts</Link>
                  </Button>
                )}
                {p.title === "Post on Pipe" && (
                  <Button asChild className="mt-auto w-full">
                    <Link href="/fence-upgrades/post-on-pipe">Learn More About Post on Pipe</Link>
                  </Button>
                )}
                {p.title === "Cedar Post on Pipe" && (
                  <Button asChild className="mt-auto w-full">
                    <Link href="/fence-posts/cedar-post-on-pipe">Learn More About Cedar Post on Pipe</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <h2 id="add-on-options" className="text-2xl font-semibold tracking-tight">
          Optional Fence Upgrades
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Optional upgrades that enhance durability, privacy, and finish.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {addOns.map((a) => (
            <Card key={a.title} className="hover:shadow-elevated transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>{a.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <AspectRatio ratio={1}>
                  <OptimizedImage
                    src={a.img}
                    alt={`${a.title} add-on option for Seattle fences by MyFence.com`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </AspectRatio>
                <p className="text-sm text-muted-foreground mt-4">{a.desc}</p>
                <div className="mt-auto pt-4">
                  {a.title === 'Upgrade to 4" Screws' && (
                    <Button asChild className="w-full">
                      <Link href="/fence-upgrades/exterior-screws">Learn More About Exterior Screws</Link>
                    </Button>
                  )}
                  {a.title === "Clear Cedar Fence Boards Upgrade" && (
                    <Button asChild className="w-full">
                      <Link href="/fence-upgrades/clear-cedar">Learn More About Clear Cedar</Link>
                    </Button>
                  )}
                  {a.title === "Board on Board Style" && (
                    <Button asChild className="w-full">
                      <Link href="/fence-upgrades/board-on-board">Learn More About Board on Board</Link>
                    </Button>
                  )}
                  {a.title === "2x4 Rot Board" && (
                    <Button asChild className="w-full">
                      <Link href="/fence-upgrades/rot-board">Learn More About Rot Boards</Link>
                    </Button>
                  )}
                  {a.title === "2 Foot Lattice Topper" && (
                    <Button asChild className="w-full">
                      <Link href="/fence-upgrades/lattice-toppers">Learn More About Lattice Toppers</Link>
                    </Button>
                  )}
                  {a.title === "Pre-Staining" && (
                    <Button asChild className="w-full">
                      <Link href="/pre-staining-cedar-fence">Learn More About Pre-Staining</Link>
                    </Button>
                  )}
                  {a.title === "Soil Haul-Away" && (
                    <Button asChild className="w-full">
                      <Link href="/fence-upgrades/soil-haul-away">Learn More About Soil Haul-Away</Link>
                    </Button>
                  )}
                  {a.title === "Trellis Systems" && (
                    <Button asChild className="w-full">
                      <Link href="/fence-upgrades/trellis-systems">Learn More About Trellis Systems</Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default FenceStylesIndexPage;
