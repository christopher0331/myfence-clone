import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, X, Shield, Wrench, DollarSign, Anchor } from "lucide-react";
import cedarPostOnPipe from "@/assets/cedar-post-on-pipe.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CedarPostOnPipe = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myfence.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Fence Styles",
        "item": "https://myfence.com/fence-styles"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cedar Post on Pipe",
        "item": "https://myfence.com/fence-posts/cedar-post-on-pipe"
      }
    ]
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cedar Post on Pipe Fence System",
    "description": "Cedar post on pipe fence system with through-bolt reinforcement for enhanced wind resistance. Eliminates post rot while maintaining consistent cedar aesthetic throughout your fence.",
    "image": {
      "@type": "ImageObject",
      "url": "https://myfence.com/assets/cedar-post-on-pipe.jpg",
      "width": 1200,
      "height": 900
    },
    "brand": {
      "@type": "Brand",
      "name": "MyFence.com"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "85",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://myfence.com/fence-posts/cedar-post-on-pipe",
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
            "minValue": 7,
            "maxValue": 14,
            "unitCode": "d"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89"
    }
  };

  return (
    <main>
      <Seo
        title="Cedar Post on Pipe | Rot-Free Cedar Posts | Seattle"
        description="Cedar Post on Pipe system with through-bolt reinforcement for enhanced wind resistance. Consistent cedar aesthetic with zero ground rot. Premium upgrade for Seattle fences."
        canonical="https://myfence.com/fence-posts/cedar-post-on-pipe"
        image={cedarPostOnPipe}
        structuredData={[breadcrumbData, productStructuredData]}
      />

      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4">Premium Cedar Option</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Cedar Post on Pipe: Uniform Aesthetics, Zero Rot
          </h1>
          <p className="text-xl text-muted-foreground">
            All-cedar appearance with galvanized steel foundation and through-bolt reinforcement for enhanced wind resistance
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <AspectRatio ratio={4/3}>
              <img 
                src={cedarPostOnPipe} 
                alt="Cedar Post on Pipe installation showing cedar post mounted on galvanized steel pipe with visible through-bolt"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </Card>
        </div>
      </section>

      {/* What is Cedar Post on Pipe */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What is Cedar Post on Pipe?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Cedar Post on Pipe follows the same rot-prevention principle as our standard <Link to="/fence-upgrades/post-on-pipe" className="text-primary hover:underline">Post on Pipe system</Link> — a galvanized steel pipe is inserted into the ground within a concrete footing, and a wood post is mounted on top. However, instead of a pressure-treated post, we use a <strong>premium cedar post</strong> for a completely uniform cedar appearance throughout your fence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>The key enhancement:</strong> Cedar Post on Pipe includes a <strong>through-bolt</strong> that passes horizontally through both the cedar post and the steel pipe inside. This mechanical connection significantly reduces the wind shear weakness found in standard post-on-pipe systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The through-bolt creates a positive connection between the wood and steel, distributing wind forces more effectively and reducing the stress concentration at the bottom of the post where it meets the pipe.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Cedar Post on Pipe?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Complete Rot Elimination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Like our standard Post on Pipe, the galvanized steel handles all ground contact. Your cedar posts will never rot from soil moisture — the number one failure point in the Pacific Northwest.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Consistent Cedar Aesthetic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many homeowners prefer the uniform look of all-cedar construction. With cedar posts matching your cedar fence boards and rails, your fence maintains a cohesive, natural appearance rather than mixing wood species.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Anchor className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Through-Bolt Wind Resistance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The horizontal through-bolt creates a mechanical connection between the cedar post and steel pipe, significantly improving resistance to wind shear forces compared to friction-only post-on-pipe systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Wrench className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Future-Proof Foundation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The steel pipe foundation lasts indefinitely. If you ever need to replace the cedar post (for aesthetic refresh or damage), the foundation remains in place — simply install a new post onto the existing pipe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison to Standard Post on Pipe */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Cedar vs. Pressure-Treated Post on Pipe</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 pr-4 font-semibold">Feature</th>
                      <th className="py-3 px-4 font-semibold text-center">Cedar Post on Pipe</th>
                      <th className="py-3 pl-4 font-semibold text-center">Standard Post on Pipe</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="py-3 pr-4">Post Material</td>
                      <td className="py-3 px-4 text-center">Western Red Cedar</td>
                      <td className="py-3 pl-4 text-center">Pressure-Treated Pine</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Rot Protection</td>
                      <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                      <td className="py-3 pl-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Through-Bolt</td>
                      <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                      <td className="py-3 pl-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Wind Shear Resistance</td>
                      <td className="py-3 px-4 text-center font-semibold text-primary">Enhanced</td>
                      <td className="py-3 pl-4 text-center">Standard</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Uniform Cedar Look</td>
                      <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                      <td className="py-3 pl-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Stains Uniformly</td>
                      <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                      <td className="py-3 pl-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Approximate Cost</td>
                      <td className="py-3 px-4 text-center font-semibold">~$85/post</td>
                      <td className="py-3 pl-4 text-center">~$55/post</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* When to Choose Cedar Post on Pipe */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">When to Choose Cedar Post on Pipe</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ideal Applications:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>All-Cedar Fence Projects</strong> — If you're building a premium cedar fence and want consistency between posts, rails, and fence boards.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Staining the Entire Fence</strong> — Cedar stains beautifully and uniformly, while pressure-treated wood often absorbs stain differently. For the best staining results, all-cedar construction is preferred.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>6' Privacy Fences in Moderate Wind</strong> — The through-bolt significantly improves wind resistance, making Cedar Post on Pipe suitable for 6' fences in areas with moderate wind exposure.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Homeowners Prioritizing Aesthetics</strong> — When visual consistency matters as much as durability, the premium is worthwhile.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consider Alternatives For:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Budget-Focused Projects</strong> — If cost is your primary concern, standard Post on Pipe or traditional pressure-treated posts offer significant savings.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Extreme Wind Exposure</strong> — For hilltops, open fields, or coastal areas with severe wind, <Link to="/fence-posts/steel-posts" className="text-primary hover:underline">4x4 Steel Posts</Link> provide the most robust option.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                Cedar Post on Pipe Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold mb-2">Cedar Post on Pipe</h3>
                  <p className="text-3xl font-bold text-primary">~$85/post</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    With through-bolt
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <h3 className="font-semibold mb-2">Standard Post on Pipe</h3>
                  <p className="text-3xl font-bold">~$55/post</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pressure-treated
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <h3 className="font-semibold mb-2">Traditional Post</h3>
                  <p className="text-3xl font-bold">~$25/post</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pressure-treated
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The additional investment in Cedar Post on Pipe delivers:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Complete rot elimination from ground contact</li>
                <li>Uniform cedar aesthetic throughout your fence</li>
                <li>Enhanced wind resistance via through-bolt connection</li>
                <li>Better stain absorption and color consistency</li>
                <li>Forever foundation for future post replacements</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready for a Premium All-Cedar Fence?</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss whether Cedar Post on Pipe is the right choice for your project. We'll assess your property's wind exposure and aesthetic preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote">Get Your Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+12534551885">Call (253) 455-1885</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">All Fence Post Options</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button asChild variant="outline" className="h-auto py-4">
              <Link to="/fence-posts/4-125-posts" className="flex flex-col items-start text-left">
                <span className="font-semibold">4.125" x 4.125" Posts</span>
                <span className="text-sm text-muted-foreground">Our recommended standard</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4">
              <Link to="/fence-posts/6x6" className="flex flex-col items-start text-left">
                <span className="font-semibold">6x6 Posts</span>
                <span className="text-sm text-muted-foreground">Maximum strength & longevity</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4">
              <Link to="/fence-posts/steel-posts" className="flex flex-col items-start text-left">
                <span className="font-semibold">4x4 Steel Posts</span>
                <span className="text-sm text-muted-foreground">40-year warranty</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4">
              <Link to="/fence-upgrades/post-on-pipe" className="flex flex-col items-start text-left">
                <span className="font-semibold">Post on Pipe</span>
                <span className="text-sm text-muted-foreground">Pressure-treated option</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4">
              <Link to="/fence-posts/3-5-posts" className="flex flex-col items-start text-left">
                <span className="font-semibold">3.5" x 3.5" Posts</span>
                <span className="text-sm text-muted-foreground">Why we don't recommend</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CedarPostOnPipe;
