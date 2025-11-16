import { Button } from "@/components/ui/button";
import { Shield, Ruler, Hammer, Wind, CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import sixBySixTrellis from "@/assets/6x6-trellis-gate.jpg";

const SixBySixPosts = () => {
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
        "name": "6x6 Fence Posts",
        "item": "https://myfence.com/fence-posts/6x6"
      }
    ]
  };

  const galleryImages = [
    sixBySixTrellis,
    "/lovable-uploads/76711349-f698-430f-a01f-14709e320e1b.png",
    "/lovable-uploads/7586a395-5060-4524-a596-fd70bb61c275.png",
  ];

  return (
    <>
      <Seo
        title="6x6 Fence Posts Seattle: Premium 30-Year Cedar Posts | MyFence"
        description="Premium 6x6 cedar fence posts (5.5x5.5 actual) with 30-year life expectancy. Perfect for high-wind areas, gate posts, and craftsman aesthetics. Professional Seattle installation."
        canonical="https://myfence.com/fence-posts/6x6"
        structuredData={breadcrumbData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Premium 6x6 Fence Posts
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Superior strength and longevity for Seattle's demanding climate. Built to last 30 years with unmatched durability.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/quote-tool">Get Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:2534788589">Call (253) 478-8589</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Why Choose 6x6 Cedar Posts?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">30-Year Life Expectancy</h3>
                <p className="text-muted-foreground">
                  A worthy long-term investment with an estimated lifespan of three decades—perfect for Seattle's wet PNW climate.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Ruler className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">True 5.5" x 5.5" Dimensions</h3>
                <p className="text-muted-foreground">
                  Actual measurement of 5.5" x 5.5" provides massive wood volume for superior durability and structural integrity.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Wind className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">High Wind Resistance</h3>
                <p className="text-muted-foreground">
                  Sheer mass tackles the PNW climate head-on. Perfect for high-wind areas and exposed locations.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Hammer className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Ideal for Gate Posts</h3>
                <p className="text-muted-foreground">
                  Natural strength makes these perfect for gate hinge posts—supporting heavy gates without sagging or shifting.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">180+ lbs Concrete Per Hole</h3>
                <p className="text-muted-foreground">
                  We use over 180 pounds of concrete per post hole to ensure these massive posts aren't going anywhere.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">10-Foot Tall Posts</h3>
                <p className="text-muted-foreground">
                  Available in 10-foot increments for maximum height and flexibility in your fence design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Checking Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Shield className="w-8 h-8 text-amber-600" />
                Understanding "Checking" in 6x6 Posts
              </h2>
              <p className="text-foreground/90 mb-4">
                With this much wood mass, a natural phenomenon called <strong>"checking"</strong> is more prone to occur. Checking causes visual cracks in the fence post when the outer layers of wood dry faster than the inner layers, leading to layer separation.
              </p>
              <p className="text-foreground/90 mb-4">
                <strong>This is completely natural</strong> and may occur in any large cedar post. It doesn't compromise the structural integrity of the post—it's simply part of the wood's natural drying process.
              </p>
              <div className="bg-amber-100 dark:bg-amber-900/20 p-4 rounded-lg mt-4">
                <p className="text-sm text-foreground/80">
                  <strong>Note:</strong> Our {WARRANTY_CONSTANTS.SHORT_TITLE} covers workmanship, but does not cover organic defects such as checking of fence posts, as this is a natural characteristic of cedar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Installation Section */}
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
                <h3 className="text-xl font-semibold mb-3 text-foreground">Precise Measurement</h3>
                <p className="text-muted-foreground">
                  We carefully measure and mark post locations to ensure perfect alignment and spacing for your fence line.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Deep-Set Installation</h3>
                <p className="text-muted-foreground">
                  Each post is set deep and secured with 180+ pounds of concrete per hole for maximum stability and wind resistance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  We verify plumb, level, and alignment before the concrete sets—ensuring a fence that stands straight for 30 years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Perfect For These Applications
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                <Wind className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">High-Wind Areas</h3>
                  <p className="text-muted-foreground">
                    Exposed properties or areas with frequent strong winds benefit from the extra mass and strength.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                <Hammer className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Craftsman Aesthetics</h3>
                  <p className="text-muted-foreground">
                    The robust appearance of 6x6 posts enhances craftsman-style fencing with a premium look.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Heavy Gates</h3>
                  <p className="text-muted-foreground">
                    Ideal hinge posts for large driveway gates or double gates that need extra support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Long-Term Investment</h3>
                  <p className="text-muted-foreground">
                    When you want a fence that will last 30 years with minimal maintenance—this is the choice.
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
              6x6 Posts in Action
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`6x6 cedar fence post installation example ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready for Premium 6x6 Posts?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Invest in the strength and longevity of 6x6 cedar posts. Get a free quote today and discover why Seattle homeowners choose the best.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/quote-tool">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:2534788589">Call (253) 478-8589</a>
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

export default SixBySixPosts;
