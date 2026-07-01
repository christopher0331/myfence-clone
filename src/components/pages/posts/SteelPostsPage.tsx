"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Ruler, Hammer, CheckCircle2, DollarSign, Clock, Droplets, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Seo from "@/components/Seo";
import Link from "next/link";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import OptimizedImage from "@/components/OptimizedImage";
import BlogSectionClient from "@/components/BlogSectionClient";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import {
  getNeighborhoodPhotosBySlugs,
  buildImageUrl,
  type ServiceAreaPhoto,
} from "@/lib/serviceAreaPhotoUtils";
import dynamic from "next/dynamic";

// Lazy-load Google Maps to keep it off the initial critical path
const GoogleBusinessMap = dynamic(() => import("@/components/GoogleBusinessMap"), {
  ssr: false,
  loading: () => null,
});

const STEEL_POST_FINISH_DESCRIPTION =
  "Metal fence posts are powder coated with Polyester or Super Durable Polyester (SDP), often meeting AAMA 2604 or 2605 standards for high UV resistance and durability [5.4, 5.6].";

const STEEL_POST_HERO_IMAGE =
  "https://ik.imagekit.io/xft9mcl5v/hero-images/Board-On-Board-Black-Posts-Hero.webp";

const SteelPostsPage = () => {
  const [lightbox, setLightbox] = useState<{ images: string[]; captions: string[]; index: number } | null>(null);

  const openLightbox = (images: string[], captions: string[], index: number) =>
    setLightbox({ images, captions, index });
  const closeLightbox = () => setLightbox(null);
  const lightboxPrev = () => setLightbox((lb) => lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : null);
  const lightboxNext = () => setLightbox((lb) => lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com" },
      { "@type": "ListItem", position: 2, name: "Fence Posts", item: "https://myfence.com/fence-posts" },
      { "@type": "ListItem", position: 3, name: "4x4 Steel Fence Posts", item: "https://myfence.com/fence-posts/steel-posts" },
    ],
  } as const;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "4x4 Black Steel Fence Posts",
    description: `${STEEL_POST_FINISH_DESCRIPTION} Black powder-coated 4x4 steel posts from Barrier Boss, available in 9' and 12' heights for 6' fences or 6' fences with 2' lattice toppers.`,
    image: STEEL_POST_HERO_IMAGE,
    url: "https://myfence.com/fence-posts/steel-posts",
    brand: { "@type": "Brand", name: "Barrier Boss" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "225",
      highPrice: "250",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url: "https://myfence.com/fence-posts/steel-posts"
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "US",
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted"
    }
  } as const;

  const galleryImages = [
    "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Kent/Wynaco-Steel-Fence-Posts-2.webp?tr=w-800",
    "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Kent/Wynaco-Steel-Fence-Posts-4.webp?tr=w-800",
  ];

  const ravennaSteelPostPhotos = getNeighborhoodPhotosBySlugs("seattle", "ravenna");

  const ravennaSteelGallery = [3, 4]
    .map((n) =>
      ravennaSteelPostPhotos.find(
        (photo) => photo.neighborhoodAlt === `Ravenna Horizontal Slat Cedar Fence ${n}`
      )
    )
    .filter((photo): photo is ServiceAreaPhoto => Boolean(photo));

  return (
    <>
      <Seo
        title="4x4 Steel Fence Posts Seattle | MyFence"
        description={`${STEEL_POST_FINISH_DESCRIPTION} Barrier Boss 4x4 black steel posts—won't rot like wood. 9' ($225) and 12' ($250) heights. Professional Seattle installation.`}
        canonical="https://myfence.com/fence-posts/steel-posts"
        structuredData={[breadcrumbData, productSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-8 pb-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                4x4 Black Steel Fence Posts
              </h1>
              <div className="max-w-3xl mx-auto mb-10 rounded-lg overflow-hidden shadow-lg border bg-muted/30">
                <OptimizedImage
                  src={STEEL_POST_HERO_IMAGE}
                  alt="Cedar board-on-board fence with black 4x4 steel posts on a residential lot, installed by MyFence.com"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:2534551885">Call (253) 455-1885</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Why Upgrade to Steel Posts?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Powder coating & UV durability</h3>
                <p className="text-muted-foreground">{STEEL_POST_FINISH_DESCRIPTION}</p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Won't Rot Like Wood</h3>
                <p className="text-muted-foreground">
                  Unlike traditional <Link href="/fence-posts/6x6" className="text-primary hover:underline">wood posts</Link> that rot out over time, steel posts are immune to ground-rot, moisture damage, and insect infestation.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Ruler className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">9' and 12' Options</h3>
                <p className="text-muted-foreground">
                  Available in 9' tall (for standard 6' fences) or 12' tall (for 6' fences with 2' <Link href="/fence-upgrades/lattice-toppers" className="text-primary hover:underline">lattice toppers</Link> for added privacy and style).
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Hammer className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Modern Industrial Aesthetic</h3>
                <p className="text-muted-foreground">
                  The black powder-coated finish complements cedar framing beautifully, creating that sought-after industrial/modern look with PNW warmth.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Long-Standing Asset</h3>
                <p className="text-muted-foreground">
                  These are an investment for a long-standing fence—not a temporary solution. Perfect for homeowners who want to build once and never worry again.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Clear Pricing</h3>
                <p className="text-muted-foreground">
                  9' posts: ~$225/post. 12' posts: ~$250/post. Pricing subject to change from Barrier Boss, but always transparent from us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal for Wet Soil Areas Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-background border border-primary/20 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    Ideal for Wet Soil Areas
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Steel posts are especially valuable in areas with high moisture, poor drainage, or saturated soil conditions. Unlike wood posts that absorb moisture and accelerate rot, steel posts remain unaffected by ground water levels.
                  </p>
                  <p className="text-foreground mb-4">
                    We highly recommend steel posts for properties in:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/service-areas/enumclaw" className="inline-flex items-center px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors">
                      Enumclaw
                    </Link>
                    <Link href="/service-areas/seattle" className="inline-flex items-center px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors">
                      West Seattle
                    </Link>
                    <Link href="/service-areas/kirkland" className="inline-flex items-center px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors">
                      Kirkland
                    </Link>
                    <Link href="/service-areas/renton" className="inline-flex items-center px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors">
                      Newcastle
                    </Link>
                    <Link href="/service-areas/issaquah" className="inline-flex items-center px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors">
                      Issaquah
                    </Link>
                    <Link href="/service-areas/north-bend" className="inline-flex items-center px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors">
                      North Bend
                    </Link>
                    <Link href="/service-areas/maple-valley" className="inline-flex items-center px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors">
                      Maple Valley
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Properties near lakes, rivers, wetlands, or in low-lying areas benefit most from the rot-proof nature of steel posts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Sizes Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Available Sizes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary">9'</span>
                  <p className="text-lg text-muted-foreground mt-2">Tall Posts</p>
                </div>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Perfect for standard 6' tall fences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>~24" set in ground with concrete</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>~$225/post (subject to change)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border-2 border-primary/30 hover:border-primary/50 transition-colors relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Best for Lattice
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary">12'</span>
                  <p className="text-lg text-muted-foreground mt-2">Tall Posts</p>
                </div>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>6' fence + 2' lattice topper capability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>~24" set in ground with concrete</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>~$250/post (subject to change)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Professional Installation Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Precise Layout</h3>
                <p className="text-muted-foreground">
                  We carefully measure and mark post locations to ensure perfect alignment and proper spacing for your fence line.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Deep-Set Installation</h3>
                <p className="text-muted-foreground">
                  Each post is set approximately 24" deep and secured with about 3 bags (180 lbs) of concrete per hole for maximum stability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  We verify plumb, level, and alignment before the concrete sets—ensuring a fence that stands straight for decades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect Pairing Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Perfect Pairings
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Barrier Boss Panels</h3>
                  <p className="text-muted-foreground">
                    Pair with Barrier Boss corrugated steel panels for a complete steel-core fence system. See our <Link href="/fence-styles/cedar-steel-hybrid-fence" className="text-primary hover:underline">Cedar/Steel Hybrid Fence</Link> for details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">ColorMax Panels</h3>
                  <p className="text-muted-foreground">
                    Also compatible with ColorMax steel panels for the same industrial/modern aesthetic with cedar framing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                <Hammer className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Cedar Framing</h3>
                  <p className="text-muted-foreground">
                    The black steel posts complement cedar rails and framing beautifully—combining industrial strength with PNW warmth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                <Ruler className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Lattice Toppers</h3>
                  <p className="text-muted-foreground">
                    12' posts are ideal for adding 2' <Link href="/fence-upgrades/lattice-toppers" className="text-primary hover:underline">horizontal or vertical lattice toppers</Link> for enhanced privacy and style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Steel Posts in Action
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(
                    galleryImages,
                    [
                      "Wynaco, Kent — pre-stained cedar with steel posts",
                      "Wynaco, Kent — board-on-board picture frame with steel posts",
                    ],
                    index
                  )}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group cursor-zoom-in"
                  aria-label={`View gallery photo ${index + 1} of ${galleryImages.length}`}
                >
                  <OptimizedImage
                    src={image}
                    alt={`4x4 steel fence post installation example ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-8 h-8 drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {index + 1} / {galleryImages.length}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Ravenna horizontal + steel posts */}
        {ravennaSteelGallery.length > 0 && (
          <section className="py-10 px-4">
            <div className="container mx-auto max-w-4xl">
              <p className="text-center text-muted-foreground mb-6">
                Horizontal slat cedar on 4×4 steel posts — see the full{" "}
                <Link href="/service-areas/seattle/ravenna" className="text-primary font-medium hover:underline">
                  project in Ravenna
                </Link>
                .
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {ravennaSteelGallery.map((photo, index) => (
                  <button
                    key={photo.file}
                    type="button"
                    onClick={() =>
                      openLightbox(
                        ravennaSteelGallery.map((p) => buildImageUrl(p.file, 1200)),
                        ravennaSteelGallery.map(
                          (p) =>
                            p.neighborhoodAlt ??
                            "Horizontal slat cedar fence with 4x4 steel posts in Ravenna, Seattle"
                        ),
                        index
                      )
                    }
                    className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md group cursor-zoom-in"
                    aria-label={`View Ravenna photo ${index + 1}`}
                  >
                    <OptimizedImage
                      src={buildImageUrl(photo.file, 800)}
                      alt={
                        photo.neighborhoodAlt ??
                        "Horizontal slat cedar fence with steel posts in Ravenna, Seattle"
                      }
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Real Job Spotlight: Wynaco, Kent */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                From the Field — Wynaco, Kent WA
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Real Job: 4"×4"×9' Galvanized Steel Posts, Powder Coated Black
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                This Kent installation combined every premium upgrade into one build. Pre-stained cedar panels, picture frame style with board-on-board for full privacy, a rot board at the base to keep cedar off the ground, and 4"×4"×9' galvanized steel posts powder coated black throughout.
              </p>
            </div>

            {/* Job spec badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                "4\"×4\"×9' Galvanized Steel Posts",
                "Powder Coated Black",
                "Picture Frame Style",
                "Board-on-Board Upgrade",
                "Pre-Stained Cedar",
                "Rot Board at Base",
              ].map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border rounded-full text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {spec}
                </span>
              ))}
            </div>

            {/* 5-photo grid */}
            {(() => {
              const wynacoImages = [1,2,3,4,5].map(n => `https://ik.imagekit.io/xft9mcl5v/service-area-photos/Kent/Wynaco-Steel-Fence-Posts-${n}.webp?tr=w-1600`);
              const wynacoCaptions = [
                "Wynaco, Kent — 4\"×4\"×9' galvanized steel posts, powder coated black",
                "Wynaco, Kent — pre-stained picture frame cedar with board-on-board",
                "Wynaco, Kent — rot board at base keeps cedar off the ground",
                "Wynaco, Kent — steel post installation in concrete, no wood-to-soil contact",
                "Wynaco, Kent — completed fence line overview",
              ];
              return (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                  {[1,2,3,4,5].map((n, i) => (
                    <button
                      key={n}
                      onClick={() => openLightbox(wynacoImages, wynacoCaptions, i)}
                      className={`relative rounded-lg overflow-hidden shadow-lg bg-muted/50 group cursor-zoom-in ${
                        n === 5 ? "col-span-2 md:col-span-1" : ""
                      }`}
                      aria-label={`View Wynaco job photo ${n} of 5`}
                    >
                      <OptimizedImage
                        src={`https://ik.imagekit.io/xft9mcl5v/service-area-photos/Kent/Wynaco-Steel-Fence-Posts-${n}.webp?tr=w-800`}
                        alt={wynacoCaptions[i]}
                        className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-8 h-8 drop-shadow-lg" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        {n} / 5
                      </div>
                    </button>
                  ))}
                </div>
              );
            })()}

            {/* Job details breakdown */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Steel Posts</h3>
                <p className="text-muted-foreground text-sm">
                  4"×4"×9' galvanized steel posts, powder coated black. Set approximately 24" deep in concrete—no wood-to-soil contact anywhere on the fence line. Coatings are chosen for UV resistance and long-term finish durability in the PNW climate.
                </p>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Picture Frame + Board-on-Board</h3>
                <p className="text-muted-foreground text-sm">
                  Picture frame cedar panels with board-on-board boards for zero gaps and full privacy. Pre-stained before installation for consistent coverage on all sides of each board.
                </p>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Rot Board at Base</h3>
                <p className="text-muted-foreground text-sm">
                  A 2×4 rot board raises the cedar fence panels off the ground. The sacrificial board protects the cedar from soil contact and moisture wicking—the leading cause of early fence failure.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/service-areas/kent/wynaco" className="inline-flex items-center gap-2 text-primary hover:underline font-medium mr-6">
                View all photos from this Wynaco job →
              </Link>
              <Link href="/quote" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                Get a quote with steel posts →
              </Link>
            </div>
          </div>
        </section>

      {/* Gallery Lightbox Modal */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={closeLightbox}>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl w-[90vw] max-w-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close + counter */}
            <div className="flex items-center justify-between px-5 py-3 border-b">
              <span className="text-sm font-medium text-gray-500">
                {lightbox.index + 1} of {lightbox.images.length}
              </span>
              <button
                onClick={closeLightbox}
                className="text-gray-400 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image area */}
            <div className="relative bg-gray-100 overflow-hidden flex items-center justify-center" style={{ height: "min(70vh, 600px)" }}>
              <img
                src={lightbox.images[lightbox.index]}
                alt={lightbox.captions[lightbox.index]}
                className="max-w-full max-h-full object-contain"
              />

            </div>

            {/* Footer: prev / caption / next */}
            <div className="flex items-center gap-4 px-5 py-4 border-t">
              <button
                onClick={lightboxPrev}
                className="flex-shrink-0 bg-primary text-white hover:bg-primary/80 rounded-full p-3 transition-colors shadow-sm"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <p className="text-sm text-gray-600 text-center flex-1">{lightbox.captions[lightbox.index]}</p>
              <button
                onClick={lightboxNext}
                className="flex-shrink-0 bg-primary text-white hover:bg-primary/80 rounded-full p-3 transition-colors shadow-sm"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

        {/* Comparison Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Steel vs. Wood Posts
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center p-4 font-semibold text-primary">Steel Posts</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">Wood Posts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Warranty</td>
                    <td className="p-4 text-center text-primary font-semibold">40 Years</td>
                    <td className="p-4 text-center text-muted-foreground">None (material)</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Rot Resistance</td>
                    <td className="p-4 text-center text-primary font-semibold">100% Immune</td>
                    <td className="p-4 text-center text-muted-foreground">Will eventually rot</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Expected Lifespan</td>
                    <td className="p-4 text-center text-primary font-semibold">40+ Years</td>
                    <td className="p-4 text-center text-muted-foreground">15-30 Years</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-foreground">Upfront Cost</td>
                    <td className="p-4 text-center text-muted-foreground">Higher</td>
                    <td className="p-4 text-center text-foreground">Lower</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Long-Term Value</td>
                    <td className="p-4 text-center text-primary font-semibold">Excellent</td>
                    <td className="p-4 text-center text-muted-foreground">Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <Link 
                href="/blog/steel-vs-wood-posts" 
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Read our full comparison: Steel vs Wood Fence Posts →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready for a Fence That Lasts Decades?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Invest in 4x4 steel posts from Barrier Boss. Get a free quote today and discover why Seattle homeowners are choosing steel for their forever fence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:2534551885">Call (253) 455-1885</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              {WARRANTY_CONSTANTS.FULL_DESCRIPTION}
            </p>
          </div>
        </section>

        {/* Blog Articles Section */}
        <BlogSectionClient limit={4} />

        {/* Service Area Map Section */}
        <section className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Service Area</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Proudly serving the greater Seattle area within a 28-mile radius
          </p>
          <GoogleBusinessMap city="Maple Valley" state="WA" radiusMiles={28} showBusinessInfo={false} />
        </section>

        {/* Service Areas List Section */}
        <ServiceAreasSection />
      </div>
    </>
  );
};

export default SteelPostsPage;
