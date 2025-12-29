"use client";

import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Eye, Shield, Dog } from "lucide-react";
import boardOnBoardCraftsman from "@/assets/fences/board-on-board-craftsman.png";
import boardOnBoardCorner from "@/assets/fences/board-on-board-corner.png";
import OptimizedImage from "@/components/OptimizedImage";

const BoardOnBoard = () => {
  return (
    <main>
      <Seo
        title="Board on Board Fence | Maximum Privacy Seattle WA"
        description="Board on board fencing in Seattle eliminates gaps for complete privacy. Perfect for dogs, no seasonal gaps, stunning 3D visual depth. Expert installation by MyFence.com"
        canonical="https://myfence.com/fence-upgrades/board-on-board"
        image={boardOnBoardCraftsman}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Board on Board Fence Installation",
          "description": "Premium board on board fencing with overlapping boards for maximum privacy, no gaps, and stunning visual depth in Seattle area.",
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
            Board on Board Fencing: Maximum Privacy with Stunning Depth
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            One of our personal favorites for both visual appeal and utility—overlapping boards eliminate gaps for complete privacy year-round while creating a beautiful 3D effect.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Why We Love Board on Board</h2>
            <p className="text-muted-foreground mb-6">
              The board on board style is one of our personal favorites, not only for its exceptional visual appeal but also for its practical utility. This design features overlapping fence boards that eliminate the traditional gaps found in standard fencing, delivering benefits that matter to Seattle homeowners.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">True Year-Round Privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    The huge benefit to board on board is that it removes all vertical gaps that normally appear between fence boards as they expand and contract through the seasons. The overlapping design ensures maximum privacy for your yard, regardless of weather conditions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Dog className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Perfect for Dog Owners</h3>
                  <p className="text-sm text-muted-foreground">
                    This upgrade is especially helpful when there are dogs involved. If dogs cannot see each other through the traditional gaps between fence boards, they are much less likely to try and attack each other through the fence. It creates a calmer environment for both pets and neighbors.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Eye className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Stunning 3D Visual Effect</h3>
                  <p className="text-sm text-muted-foreground">
                    The overlapping boards add an amazing visual effect, creating a 3D or depth effect that makes your fence incredibly appealing. This dimensional quality elevates your fence from simple barrier to architectural feature.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/lovable-uploads/bb4c3899-96f6-4bf3-9454-9cc827adade0.png"
              alt="Board on board fence showing overlapping boards and 3D depth effect"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="order-2 lg:order-1">
            <OptimizedImage
              src={boardOnBoardCraftsman}
              alt="Craftsman style board on board fence with decorative pergola"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-semibold mb-4">Additional Benefits</h2>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">No Shrinkage Gaps</h3>
                  <p className="text-sm text-muted-foreground">
                    Seattle's climate causes wood to expand in wet winters and contract in dry summers. Board on board construction compensates for this movement, maintaining complete privacy even as individual boards shrink.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Enhanced Wind Resistance</h3>
                  <p className="text-sm text-muted-foreground">
                    The overlapping design provides superior structural integrity compared to standard board fencing, making it more resistant to strong Pacific Northwest winds.
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20 mt-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">A Favorite for Good Reason</h3>
                <p className="text-sm text-muted-foreground">
                  The board on board style combines form and function in a way that few fence designs can match. It solves real problems—seasonal gaps, pet visibility, privacy concerns—while delivering a premium aesthetic that enhances any property.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">How Board on Board Works</h2>
            <p className="text-muted-foreground mb-4">
              Unlike traditional fencing where boards are installed side-by-side with gaps between them, board on board construction alternates boards on opposite sides of the horizontal rails. This creates an overlap pattern that eliminates any possibility of seeing through the fence.
            </p>
            
            <h3 className="font-semibold mb-3 text-lg">Key Construction Features:</h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Boards installed on alternating sides of the fence rails</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Minimum 1-inch overlap between boards for complete privacy</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Creates visual depth and architectural interest</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Both sides of the fence look finished and attractive</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Uses approximately 20% more material than standard board fencing</span>
              </li>
            </ul>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Investment in Privacy & Beauty</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  While board on board requires additional materials and labor, the benefits far outweigh the modest increase in cost. You gain true privacy that lasts through all seasons, a dog-friendly barrier, and a fence that stands out as a premium feature of your property.
                </p>
                <Button asChild className="w-full">
                  <Link href="/quote">Get a Quote for Board on Board Fence</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <OptimizedImage
              src={boardOnBoardCorner}
              alt="Board on board corner fence installation with craftsman style top"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="bg-muted/50 py-12">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-6 text-center">Common Fence Problems That Board on Board Solves</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-destructive">❌ Standard Board Fencing Issues</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Seasonal gaps appear as boards shrink</li>
                  <li>• Dogs can see and bark at each other</li>
                  <li>• Privacy compromised over time</li>
                  <li>• Flat, one-dimensional appearance</li>
                  <li>• Visible through gaps at angles</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-primary md:scale-105">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-primary">✓ Board on Board Solutions</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No gaps ever - complete privacy</li>
                  <li>• Dogs can't see through fence</li>
                  <li>• Privacy maintained year-round</li>
                  <li>• Beautiful dimensional depth</li>
                  <li>• Solid barrier from all angles</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">💰 Long-Term Value</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No need to fill gaps later</li>
                  <li>• Better neighbor relationships</li>
                  <li>• Calmer pets and less stress</li>
                  <li>• Enhanced property value</li>
                  <li>• Lasting beauty and function</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Perfect Scenarios for Board on Board</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <Dog className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Dog Owners</h3>
              <p className="text-sm text-muted-foreground">
                Prevent fence aggression and create a peaceful environment for your dogs and your neighbors' pets.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Privacy Seekers</h3>
              <p className="text-sm text-muted-foreground">
                Maximum privacy guaranteed year-round, perfect for hot tubs, pools, or private outdoor spaces.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <Eye className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Design Enthusiasts</h3>
              <p className="text-sm text-muted-foreground">
                The stunning 3D effect and dimensional quality make this a showpiece fence design.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <Check className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Quality-Focused</h3>
              <p className="text-sm text-muted-foreground">
                For homeowners who want a fence that performs flawlessly and looks great for decades.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison with Visual */}
      <section className="bg-muted/50 py-12">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">Board on Board vs. Standard Fencing</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Standard Board Fence</h3>
                    <p className="text-sm text-muted-foreground">
                      Boards installed side-by-side on one side of rails with small gaps. Over time, gaps widen as boards shrink, compromising privacy. Dogs can see through gaps, and seasonal movement creates maintenance issues.
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Board on Board Fence</h3>
                    <p className="text-sm text-muted-foreground">
                      Boards alternate on opposite sides with overlap. Gaps never appear regardless of seasonal changes. Complete privacy maintained, dogs can't see through, and the dimensional appearance adds beauty and value.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready for True Privacy and Stunning Depth?
          </h2>
          <p className="text-muted-foreground mb-6">
            Board on board fencing is the perfect choice for Seattle homeowners who want maximum privacy, a dog-friendly barrier, and a fence with exceptional visual appeal. The overlapping design ensures your privacy is protected year-round while adding beautiful dimensional character to your property.
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

export default BoardOnBoard;
