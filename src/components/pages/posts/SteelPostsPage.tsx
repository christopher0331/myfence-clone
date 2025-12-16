"use client";

import { Button } from "@/components/ui/button";
import { Shield, Ruler, Hammer, CheckCircle2, DollarSign, Clock, ExternalLink, Droplets } from "lucide-react";
import Seo from "@/components/Seo";
import Link from "next/link";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const SteelPostsPage = () => {
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
    description:
      "Premium black powder-coated 4x4 steel fence posts from Barrier Boss with 40-year warranty. Available in 9' and 12' heights for 6' fences or 6' fences with 2' lattice toppers.",
    image: "https://myfence.com/lovable-uploads/barrier-boss-4x4-steel-post.webp",
    url: "https://myfence.com/fence-posts/steel-posts",
    brand: { "@type": "Brand", name: "Barrier Boss" },
    offers: { "@type": "AggregateOffer", lowPrice: "225", highPrice: "250", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  } as const;

  const galleryImages = [
    "/lovable-uploads/4x4-steel-posts-fence.webp",
    "/lovable-uploads/barrier-boss-4x4-steel-post.webp",
    "/lovable-uploads/barrier-boss-steel-post-closeup.webp",
  ];

  return (
    <>
      <Seo
        title="4x4 Steel Fence Posts Seattle: 40-Year Warranty | MyFence"
        description="Premium 4x4 black steel fence posts from Barrier Boss with 40-year warranty. Never rot, never fail. Available in 9' and 12' heights. Professional Seattle installation."
        canonical="https://myfence.com/fence-posts/steel-posts"
        structuredData={[breadcrumbData, productSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">4x4 Black Steel Fence Posts</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                The ultimate long-term investment.
                <a
                  href="https://barrierbossusa.com/products/metal-fence-posts-for-wood-fence?variant=47959096557787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Barrier Boss steel posts <ExternalLink className="w-4 h-4" />
                </a>
                backed by a robust 40-year warranty—won't rot like wood.
              </p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Upgrade to Steel Posts?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">40-Year Warranty</h3>
                <p className="text-muted-foreground">Barrier Boss backs these posts with a robust 40-year warranty. This is a true long-term investment.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Won't Rot Like Wood</h3>
                <p className="text-muted-foreground">Unlike traditional wood posts that rot out over time, steel posts are immune to ground-rot and moisture damage.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Ruler className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">9' and 12' Options</h3>
                <p className="text-muted-foreground">For 6' fences or 6' fences with 2' lattice toppers. Flexible and strong.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Hammer className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Modern Industrial Aesthetic</h3>
                <p className="text-muted-foreground">Black powder-coated finish complements cedar framing for a modern look.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Long-Standing Asset</h3>
                <p className="text-muted-foreground">Build once and never worry again. Ideal for homeowners wanting decades of performance.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Clear Pricing</h3>
                <p className="text-muted-foreground">9' ~ $225, 12' ~ $250 (subject to supplier). Always transparent pricing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Wet Soil Note */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Ideal for Wet Soil Areas</h2>
                  <p className="text-muted-foreground mb-4">Steel posts excel where drainage is poor or soil remains saturated—immune to the rot that destroys wood posts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Steel Posts in Action</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`4x4 steel fence post installation example ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready for a Fence That Lasts Decades?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Invest in 4x4 steel posts from Barrier Boss. Get a free quote today and see why Seattle homeowners choose steel for a forever fence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:2534551885">Call (253) 455-1885</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">{WARRANTY_CONSTANTS.FULL_DESCRIPTION}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SteelPostsPage;
