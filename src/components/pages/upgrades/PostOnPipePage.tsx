"use client";

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

const PostOnPipePage = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com/" },
      { "@type": "ListItem", position: 2, name: "Fence Styles", item: "https://myfence.com/fence-styles" },
      { "@type": "ListItem", position: 3, name: "Post on Pipe", item: "https://myfence.com/fence-upgrades/post-on-pipe" },
    ],
  } as const;

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Post on Pipe Fence Installation",
    description:
      "Post on Pipe fence post system for the Pacific Northwest. Eliminates post rot from soil contact using galvanized steel pipe foundations.",
    provider: {
      "@type": "LocalBusiness",
      name: "MyFence.com",
      address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
      telephone: "+1-253-455-1885",
    },
    areaServed: { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
  } as const;

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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Post on Pipe: Never Replace a Rotted Post Again</h1>
          <p className="text-xl text-muted-foreground">Galvanized steel pipe foundation eliminates traditional post rot from soil contact</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container py-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <AspectRatio ratio={4 / 3}>
              <OptimizedImage
                src={postOnPipeView}
                alt="Post on Pipe fence post cross-section showing galvanized steel pipe foundation and wood post"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </Card>
          <Card className="overflow-hidden">
            <AspectRatio ratio={4 / 3}>
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
                Post on Pipe is an innovative fence post system where a galvanized steel pipe is inserted into the ground within a concrete footing, and
                a wood fence post is mounted on top of the steel pipe. The steel pipe extends 10"-18" into the wood post, creating a rock-solid
                connection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>The primary benefit?</strong> You will never have your post rot out from soil contact. The galvanized steel pipe handles all
                ground contact, while the wood post stays elevated and protected from moisture and soil that cause traditional post rot.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This system is engineered for the wet Pacific Northwest climate where post rot is the number one cause of fence failure.
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
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> Complete Rot Elimination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Galvanized steel has zero contact with wood at ground level. Posts won’t rot from soil moisture.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Wrench className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> Easy Long-Term Replacement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">If a wood post ever needs replacement, slide a new post over the existing steel pipe foundation.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> Perfect for Shorter Fences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ideal for 3', 4', and 5' fences and all hogwire fences with minimal wind load.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> Low-Wind 6' Privacy Option
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Works for 6' privacy fences in protected, low-wind yards.</p>
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
                <X className="w-6 h-6 text-amber-500" /> Important: Wind Shear Considerations for 6' Privacy Fences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                In high-wind environments with 6' solid cedar privacy fences, failure can occur at the lower portion of the wood post where the pipe
                occupies internal volume. In exposed locations, prefer traditional full-depth wood posts.
              </p>
              <p className="text-muted-foreground leading-relaxed">This does not apply to shorter fences or hogwire fences, or 6' fences in low-wind locations.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <DollarSign className="w-6 h-6" /> Post on Pipe Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Post on Pipe System</h3>
                  <p className="text-3xl font-bold text-primary">~$55/post</p>
                  <p className="text-sm text-muted-foreground mt-1">Pipe, 4.125" × 4.125" × 7' wood post, and concrete footing</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Traditional Pressure-Treated Post</h3>
                  <p className="text-3xl font-bold">~$25/post</p>
                  <p className="text-sm text-muted-foreground mt-1">Standard 4.125" × 4.125" × 9' post with concrete footing</p>
                </div>
              </div>
              <ul className="list-disc ml-5 text-muted-foreground space-y-2">
                <li>Eliminates soil-contact rot</li>
                <li>Easier future replacements</li>
                <li>Longer lifespan in wet climates</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Build a Rot-Free Fence?</h2>
          <p className="text-lg text-muted-foreground">Let's discuss whether Post on Pipe is right for your property and wind conditions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/fence-styles">Explore Fence Styles</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostOnPipePage;
