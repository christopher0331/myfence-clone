import { Button } from "@/components/ui/button";
import { Shield, Ruler, Hammer, CheckCircle2, DollarSign, Clock, ExternalLink, Droplets } from "lucide-react";
import Seo from "@/components/Seo";
import Link from "next/link";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

const SteelPosts = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myfence.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Fence Posts",
        "item": "https://myfence.com/fence-posts"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "4x4 Steel Fence Posts",
        "item": "https://myfence.com/fence-posts/steel-posts"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "4x4 Black Steel Fence Posts",
    "description": "Premium black powder-coated 4x4 steel fence posts from Barrier Boss with 40-year warranty. Available in 9' and 12' heights for 6' fences or 6' fences with 2' lattice toppers.",
    "image": "https://myfence.com/lovable-uploads/barrier-boss-4x4-steel-post.webp",
    "url": "https://myfence.com/fence-posts/steel-posts",
    "brand": {
      "@type": "Brand",
      "name": "Barrier Boss"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "225",
      "highPrice": "250",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
      "url": "https://myfence.com/fence-posts/steel-posts"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US",
        "addressRegion": "WA"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 14,
          "unitCode": "DAY"
        }
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "US",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
    }
  };

  const galleryImages = [
    "/lovable-uploads/4x4-steel-posts-fence.webp",
    "/lovable-uploads/barrier-boss-4x4-steel-post.webp",
    "/lovable-uploads/barrier-boss-steel-post-closeup.webp",
  ];

  return (
    <>
      <Seo
        title="4x4 Steel Fence Posts Seattle: 40-Year Warranty | MyFence"
        description="Premium 4x4 black steel fence posts from Barrier Boss with 40-year warranty. Never rot, never fail. Available in 9' ($225) and 12' ($250) heights. Professional Seattle installation."
        canonical="https://myfence.com/fence-posts/steel-posts"
        structuredData={[breadcrumbData, productSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                4x4 Black Steel Fence Posts
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                The ultimate long-term investment. <a href="https://barrierbossusa.com/products/metal-fence-posts-for-wood-fence?variant=47959096557787" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Barrier Boss steel posts<ExternalLink className="w-4 h-4" /></a> backed by a robust 40-year warranty—won't rot like wood.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote-tool">Get Free Quote</Link>
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
                <h3 className="text-xl font-semibold mb-3 text-foreground">40-Year Warranty</h3>
                <p className="text-muted-foreground">
                  Barrier Boss backs these posts with a robust 40-year warranty. This is a true long-term investment that outlasts any wood post on the market.
                </p>
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
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
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
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`4x4 steel fence post installation example ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

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
                href="/blog/steel-vs-wood-fence-posts" 
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Read our full comparison: Steel vs Wood Fence Posts →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready for a Fence That Lasts Decades?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Invest in 4x4 steel posts from Barrier Boss. Get a free quote today and discover why Seattle homeowners are choosing steel for their forever fence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/quote-tool">Get Free Quote</Link>
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
      </div>
    </>
  );
};

export default SteelPosts;
