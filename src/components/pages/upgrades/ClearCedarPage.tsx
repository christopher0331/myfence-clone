"use client";

import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import clearCedarUpgrade from "@/assets/fences/clear-cedar-upgrade.png";
import { ArticleSummary } from "@/components/ArticleSummary";
import OptimizedImage from "@/components/OptimizedImage";

const ClearCedar = () => {
  return (
    <main>
      <Seo
        title="Clear Cedar Fence Boards Upgrade | Premium Seattle Fencing"
        description="Upgrade to clear cedar fence boards in Seattle. Knot-free, uniform appearance that lasts longer. No knots falling out. Premium Western Red Cedar fencing."
        canonical="https://myfence.com/fence-upgrades/clear-cedar"
        image={clearCedarUpgrade}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Clear Cedar Fence Board Installation",
          "description": "Premium clear cedar fence boards with no knots for superior visual appeal and long-lasting uniformity in Seattle fencing projects.",
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
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Clear Cedar Fence Boards: Premium Quality Without Compromise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Transform your property's appearance with knot-free clear cedar boards that deliver unmatched visual appeal and lasting uniformity for your Seattle fence.
          </p>
        </div>
      </section>

      {/* AI Summary Section */}
      <section className="container py-8">
        <ArticleSummary 
          pageTitle="Clear Cedar Fence Upgrade"
          pageContent="Clear cedar boards offer a premium upgrade for your fence with zero knots, providing unmatched visual appeal and durability. Unlike standard tight-knot cedar, clear cedar features uniform grain patterns, consistent color, and eliminates common issues like knot shrinkage, cracks, and potential weaknesses. This upgrade creates a sophisticated, high-end look that enhances curb appeal and property value. Clear cedar boards are ideal for homeowners planning to sell, those who frequently entertain outdoors, or anyone taking pride in their property's appearance. The knot-free boards allow for cleaner cuts, tighter joints, and a more refined installation. While tight knot cedar can develop gaps around knots as they shrink over time, clear cedar maintains its integrity and appearance throughout its lifespan. The investment in clear cedar pays dividends through superior aesthetics, enhanced durability, and lasting beauty that won't compromise over the years."
        />
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">The Clear Cedar Difference</h2>
            <p className="text-muted-foreground mb-6">
              For anyone who wants the border of their yard to look cleaner and more refined, the clear cedar fence board upgrade is one of our favorite options to offer. The absence of knots creates a uniform, elegant appearance that transforms your fence from functional to exceptional.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Pristine Visual Appeal</h3>
                  <p className="text-sm text-muted-foreground">
                    Knot-free boards create a clean, uniform appearance that enhances your property's curb appeal and gives your fence a premium, refined look.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Long-Lasting Uniformity</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear cedar boards maintain their consistent appearance over time, staying more uniform for years compared to standard tight knot cedar.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">No Falling Knots</h3>
                  <p className="text-sm text-muted-foreground">
                    Even the highest grade tight knot Western Red Cedar is prone to having knots fall out over time. Clear cedar eliminates this issue entirely.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Better Stain Acceptance</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear cedar accepts stain more evenly without the variation that knots create, resulting in a more consistent, professional finish.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Premium Western Red Cedar</h3>
                  <p className="text-sm text-muted-foreground">
                    Still harvested from the same premium Western Red Cedar known for its natural durability and resistance to decay, just without knots.
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Perfect for Discerning Homeowners</h3>
                <p className="text-sm text-muted-foreground">
                  Clear cedar is ideal for properties where aesthetics matter. Whether you're preparing to sell, want to enhance your outdoor living space, or simply take pride in your home's appearance, clear cedar delivers the premium look you're after.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <img
              src="/lovable-uploads/d27f46a0-cb41-4ed9-917a-44e0969e2f57.png"
              alt="Clear cedar fence boards showing uniform grain without knots"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Second Row - Image Left, Content Right */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <OptimizedImage
              src={clearCedarUpgrade}
              alt="Premium clear cedar fence installation showcasing uniform boards without knots"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-4">The Knot Problem</h2>
            <p className="text-muted-foreground mb-4">
              While tight knot Western Red Cedar is a quality material, knots present several challenges over the life of your fence:
            </p>
            
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>Knots can shrink, loosen, and eventually fall out, leaving holes in your fence</span>
              </li>
              <li className="flex gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>Knots create visual inconsistency and can make staining uneven</span>
              </li>
              <li className="flex gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>Areas around knots are more prone to cracking and splitting</span>
              </li>
              <li className="flex gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>Knots can weep sap, especially in hot weather</span>
              </li>
              <li className="flex gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>Larger knots can create weak points in the board</span>
              </li>
            </ul>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">An Investment in Beauty</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Clear cedar represents a premium upgrade that pays dividends in curb appeal and longevity. Your fence becomes a showcase feature rather than just a boundary marker, adding value to your property and pride to your home.
                </p>
                <Button asChild className="w-full">
                  <Link href="/quote">Get a Quote for Clear Cedar Fence</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Comparison Section */}
      <section className="bg-muted/50 py-12">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-6 text-center">Clear Cedar vs. Tight Knot Cedar</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4 text-lg">Standard Tight Knot Cedar</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Quality material with natural character</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Contains small to medium knots</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Knots may fall out over time</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>More rustic, varied appearance</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Economical option</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-primary">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                  Clear Cedar Upgrade
                  <Badge className="bg-primary text-primary-foreground">Premium</Badge>
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Premium grade with no knots</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Uniform, consistent grain pattern</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>No knot fall-out issues</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Clean, refined appearance</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Enhanced property value</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Seattle Homeowners Choose Clear Cedar</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">For Home Sales</h3>
              <p className="text-sm text-muted-foreground">
                First impressions matter. A clear cedar fence signals quality and care, helping your home stand out in the competitive Seattle real estate market.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">For Entertaining Spaces</h3>
              <p className="text-sm text-muted-foreground">
                Create a sophisticated backdrop for your outdoor living area. Clear cedar fencing elevates your patio or deck into a premium entertainment space.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">For Pride of Ownership</h3>
              <p className="text-sm text-muted-foreground">
                Some homeowners simply want the best. Clear cedar delivers a fence that looks as good in 10 years as it does on day one.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Elevate Your Fence to Premium Quality
          </h2>
          <p className="text-muted-foreground mb-6">
            The clear cedar upgrade transforms your fence into a showcase feature. Perfect for Seattle homeowners who value aesthetics and long-term quality, this upgrade ensures your fence maintains its pristine appearance for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/quote">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/fence-styles">View All Fence Styles</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClearCedar;
