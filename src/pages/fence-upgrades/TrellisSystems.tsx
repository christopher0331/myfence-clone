import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Seo from "@/components/Seo";

const TrellisSystems = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cedar Trellis Systems",
    "description": "Custom cedar trellis systems with 6x6 posts, 2x8 runners, and decorative 2x2 slats. Features black hardware upgrades and chamfered or artisan edge options.",
    "brand": {
      "@type": "Organization",
      "name": "MyFence.com"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247"
    }
  };

  return (
    <>
      <Seo
        title="Cedar Trellis Systems Seattle | Gate Toppers | MyFence.com"
        description="Premium cedar trellis systems with 6x6 posts and black hardware. Add beauty and structural support to your gates. Chamfered or artisan edge options available."
        canonical="https://myfence.com/fence-upgrades/trellis-systems"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/trellis-system-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />
        </div>
        <div className="container relative z-10 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Learn More About Trellis Systems
            </h1>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              Stunning architectural elements that combine beauty with structural integrity
            </p>
          </div>
        </div>
      </section>

      {/* What Are Trellis Systems */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What Are Trellis Systems?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our trellis systems are custom-built architectural features that sit atop gates and fences, 
                creating an elegant entrance while providing crucial structural support. Built with premium materials 
                and attention to detail, they transform ordinary gates into stunning focal points.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trellis systems not only look great, but are highly recommended above gates. They make your gate 
                look inviting while adding critical structure to the gate posts. With horizontal framing above the 
                gate, it basically ensures that the gate's fence posts will almost never move, making sure your gate 
                will never have issues.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Construction Specifications */}
      <section className="container py-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Premium Construction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Posts</h3>
                  <p className="text-muted-foreground">
                    6x6x10' premium cedar fence posts provide robust structural support
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Runners</h3>
                  <p className="text-muted-foreground">
                    2x8 cedar runners form the horizontal framework
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Slats</h3>
                  <p className="text-muted-foreground">
                    Cedar 2x2 slats create the decorative pattern
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hardware</h3>
                  <p className="text-muted-foreground">
                    Standard galvanized hardware, or upgrade to premium black hardware for a stunning modern look 
                    (our personal favorite)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Project Gallery</h2>
          <p className="text-center text-muted-foreground mb-8">
            Real trellis installations showcasing various styles, finishes, and applications
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-0">
                <img
                  src="/lovable-uploads/chamfered-trellis-gate.jpg"
                  alt="Chamfered edge trellis with black hardware over cedar gate"
                  className="w-full rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Chamfered Modern Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Clean chamfered edges with upgraded black hardware over a board-on-board gate. 
                    The modern aesthetic perfectly complements contemporary home styles.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <img
                  src="/lovable-uploads/artisan-trellis-fence.jpg"
                  alt="Artisan swooped corner trellis with decorative slats"
                  className="w-full rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Artisan Swooped Style</h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional artisan design with elegant swooped corners above a horizontal lattice fence. 
                    Natural cedar finish showcases the craftsmanship and warmth of the wood.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <img
                  src="/lovable-uploads/chamfered-trellis-detail.jpg"
                  alt="Close-up detail of chamfered trellis construction and black hardware"
                  className="w-full rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Premium Hardware Detail</h3>
                  <p className="text-sm text-muted-foreground">
                    Close-up showing the precision of chamfered edges and the quality of black powder-coated 
                    hardware. Note the solid 6x6 posts and robust 2x8 runners.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <img
                  src="/lovable-uploads/black-stained-trellis-picket-gate.jpg"
                  alt="Black stained artisan trellis above picket fence gate"
                  className="w-full rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Black Stained Artisan</h3>
                  <p className="text-sm text-muted-foreground">
                    Stunning black-stained artisan trellis with swooped corners over a natural cedar picket gate. 
                    The dramatic contrast creates an eye-catching entrance statement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Design Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Chamfered Edge</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src="/lovable-uploads/chamfered-trellis-detail.jpg"
                  alt="Close-up of chamfered edge trellis showing modern clean lines and black hardware"
                  className="w-full rounded-lg"
                />
                <p className="text-muted-foreground">
                  Clean, modern edges with beveled corners create a contemporary aesthetic. Perfect for modern 
                  and minimalist home styles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Artisan Swooped Corner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src="/lovable-uploads/artisan-trellis-fence.jpg"
                  alt="Artisan style trellis with swooped corner design above picket fence gate"
                  className="w-full rounded-lg"
                />
                <p className="text-muted-foreground">
                  Elegant swooped corners add a handcrafted, artisan touch. Ideal for craftsman, traditional, 
                  and cottage-style homes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Structural Benefits */}
      <section className="container py-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Structural Benefits for Gates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src="/lovable-uploads/chamfered-trellis-gate.jpg"
                alt="Cedar gate with trellis system showing structural support and black hardware"
                className="w-full rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Post Stabilization</h3>
                  <p className="text-muted-foreground">
                    The horizontal framing connects gate posts together, preventing them from moving or twisting 
                    over time. This virtually eliminates common gate problems like sagging or misalignment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Long-Term Performance</h3>
                  <p className="text-muted-foreground">
                    By locking gate posts in place, trellis systems ensure your gate operates smoothly for years 
                    to come. No more adjusting latches or dealing with gates that won't close properly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Visual Appeal</h3>
                  <p className="text-muted-foreground">
                    Beyond structural benefits, trellis systems create an inviting entrance that elevates your 
                    entire fence design. They transform a simple gate into an architectural feature.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose This Upgrade */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Why Choose Trellis Systems?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Dramatic visual impact that makes your gate the focal point of your property</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Prevents gate post movement and ensures long-term gate performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Premium cedar construction that ages beautifully</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Choice of modern chamfered or traditional artisan edge styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Optional black hardware upgrade for stunning contemporary look</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Custom-built to perfectly complement your fence design</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Add a Trellis System?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transform your gate into an architectural masterpiece while ensuring it never has structural issues. 
              Let's discuss which trellis design is perfect for your home.
            </p>
            <Button size="lg" asChild>
              <a href="tel:+12063588943" className="inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (206) 358-8943
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default TrellisSystems;
