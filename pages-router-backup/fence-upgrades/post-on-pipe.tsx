import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";
import Link from "next/link";
import { Check, X, Shield, Wrench, DollarSign } from "lucide-react";
import postOnPipeView from "@/assets/post-on-pipe-view.webp";
import postOnPipe from "@/assets/post-on-pipe.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PostOnPipe = () => {
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
        "name": "Post on Pipe",
        "item": "https://myfence.com/fence-upgrades/post-on-pipe"
      }
    ]
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Post on Pipe Fence Installation",
    "description": "Post on Pipe fence post system for the Pacific Northwest. Eliminates post rot from soil contact using galvanized steel pipe foundations.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "MyFence.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Seattle",
        "addressRegion": "WA",
        "addressCountry": "US"
      },
      "telephone": "+1-253-455-1885"
    },
    "areaServed": {
      "@type": "City",
      "name": "Seattle",
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    }
  };

  return (
    <main>
      <Seo
        title="Post on Pipe Fence Posts | Rot-Free Foundation | Seattle"
        description="Eliminate fence post rot with our Post on Pipe system. Galvanized steel pipe foundation prevents soil contact damage. Perfect for Pacific Northwest fences."
        canonical="https://myfence.com/fence-upgrades/post-on-pipe"
        image={postOnPipeView}
        structuredData={[breadcrumbData, serviceStructuredData]}
      />

      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4">Revolutionary Fence Post System</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Post on Pipe: Never Replace a Rotted Post Again
          </h1>
          <p className="text-xl text-muted-foreground">
            Galvanized steel pipe foundation eliminates traditional post rot from soil contact
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container py-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <AspectRatio ratio={4/3}>
              <OptimizedImage
                src={postOnPipeView}
                alt="Post on Pipe fence post cross-section showing galvanized steel pipe foundation and wood post"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </Card>
          <Card className="overflow-hidden">
            <AspectRatio ratio={4/3}>
              <OptimizedImage
                src={postOnPipe}
                alt="Stacked fence panels with galvanized steel pipes ready for installation"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </Card>
        </div>
      </section>

      {/* What is Post on Pipe */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What is Post on Pipe?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Post on Pipe is an innovative fence post system where a galvanized steel pipe is inserted into the ground 
                within a concrete footing, and a wood fence post is mounted on top of the steel pipe. The steel pipe extends 
                10"-18" into the wood post, creating a rock-solid connection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>The primary benefit?</strong> You will never have your post rot out from soil contact. The galvanized 
                steel pipe handles all ground contact, while the wood post stays elevated and protected from moisture and soil 
                that cause traditional post rot.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This system represents a fundamental rethinking of fence post design, specifically engineered for the wet 
                Pacific Northwest climate where post rot is the number one cause of fence failure.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Post on Pipe Advantage</h2>
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
                  The galvanized steel pipe has zero contact with wood at ground level. Your fence posts will never 
                  rot from soil moisture — the number one failure point of traditional fence posts in the Pacific Northwest.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Wrench className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Easy Long-Term Replacement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If a wood post ever needs replacement (due to above-ground damage or aesthetic refresh), you can simply 
                  core out a new post and slide it onto the existing steel pipe. The foundation stays forever.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Perfect for Shorter Fences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Post on Pipe is ideal for 3', 4', and 5' fences where wind load is minimal. It's also the perfect choice 
                  for all hogwire fences, providing excellent strength without the weight of full privacy panels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Low-Wind 6' Privacy Option
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In protected yards with minimal wind exposure, Post on Pipe works beautifully for 6' privacy fences. 
                  If your yard is surrounded by trees or buildings that block wind, this system provides excellent value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Considerations */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-amber-500/50 bg-amber-500/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <X className="w-6 h-6 text-amber-500" />
                Important: Wind Shear Considerations for 6' Privacy Fences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong>The one limitation of Post on Pipe:</strong> In high-wind environments with 6' solid cedar privacy 
                fences, the system can be prone to premature failure — not from the steel pipe breaking, but from the wood 
                post itself failing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here's why: The steel pipe extends 10"-18" into the wood post. When strong winds hit a 6' tall solid fence, 
                all the force transfer occurs at the lower portion of the post where most of the wood has been carved out to 
                accommodate the steel pipe. This leaves less wood structure to resist the torque applied by the tall fence panel.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Bottom line:</strong> If you live in an exposed, windy area and plan to install a 6' solid cedar privacy 
                fence, we recommend traditional full-depth wood posts instead. However, if your yard is protected from wind by 
                trees, neighboring structures, or terrain, Post on Pipe can work perfectly.
              </p>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                This concern does NOT apply to shorter fences, hogwire fences, or 6' fences in low-wind locations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best Applications */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ideal Applications for Post on Pipe</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Perfect For:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>All Hogwire Fences (3', 5', 6')</strong> — The open panel design creates minimal wind resistance, 
                    making Post on Pipe ideal regardless of wind exposure.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Shorter Privacy Fences (3' and 4')</strong> — Lower profiles catch less wind, making Post on Pipe 
                    a smart choice for maximum longevity.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>6' Fences in Protected Areas</strong> — Properties with natural windbreaks (dense trees, neighboring 
                    buildings, terrain features) are excellent candidates.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Properties Prioritizing Zero Post Rot</strong> — If eliminating ground-level rot is your top priority 
                    and you understand the wind considerations, Post on Pipe delivers unmatched durability.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Not Recommended For:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>6' Solid Fences in High-Wind Areas</strong> — Exposed hilltops, open fields, waterfront properties, 
                    or locations with frequent strong winds should use traditional full-depth posts.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Properties with Frequent Severe Weather</strong> — If your area experiences regular windstorms 
                    or extreme weather events, traditional posts provide better structural redundancy.
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
                Post on Pipe Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Post on Pipe System</h3>
                  <p className="text-3xl font-bold text-primary">~$55/post</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Includes galvanized steel pipe, 4.125" × 4.125" × 7' wood post, and concrete footing
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Traditional Pressure-Treated Post</h3>
                  <p className="text-3xl font-bold">~$25/post</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Standard 4.125" × 4.125" × 9' jumbo pressure-treated post with concrete footing
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                While Post on Pipe costs approximately $30 more per post upfront, the investment pays off through:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Complete elimination of soil-contact post rot</li>
                <li>Significantly easier post replacement if ever needed</li>
                <li>Longer overall fence lifespan in wet climates</li>
                <li>Reduced long-term maintenance and repair costs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pacific Northwest Context */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Post on Pipe Makes Sense in the Pacific Northwest</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Pacific Northwest's wet climate is notoriously hard on traditional wood fence posts. Even pressure-treated 
                lumber, designed to resist rot, will eventually fail when constantly exposed to our wet soil conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Post rot typically occurs 6"-12" below ground level where moisture is constant and air circulation is minimal. 
                By the time you notice a leaning or loose post, the damage is already severe — requiring complete post replacement 
                including digging out the old concrete footing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Post on Pipe eliminates this failure mode entirely. The steel pipe handles all below-grade duty, and galvanized 
                steel in concrete simply doesn't rot. Your fence's structural integrity is permanently protected from our wet soil.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For homeowners planning to stay in their homes long-term, Post on Pipe represents the most durable foundation 
                option for fence styles that can accommodate it. It's an investment in never dealing with rotted posts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Build a Rot-Free Fence?</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss whether Post on Pipe is the right choice for your property, fence style, and local wind conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/fence-styles">Explore Fence Styles</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Questions? Call us at <a href="tel:+12534551885" className="text-primary hover:underline">(253) 455-1885</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default PostOnPipe;
