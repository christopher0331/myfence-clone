import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { ArticleSummary } from "@/components/ArticleSummary";
import img1x6x6Better from "@/assets/blog/1x6x6-1-better-cedar.jpg";
import img1x4x6Face from "@/assets/blog/1x4x6-1-2-face-cedar.jpg";
import img1x4x6Clear from "@/assets/blog/1x4x6-clear-cedar.jpg";
import img1x4x8Clear from "@/assets/blog/1x4x8-clear-cedar.jpg";
import img1x6x6Clear from "@/assets/blog/1x6x6-clear-cedar.jpg";

const CedarBoardGradeMDX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Choosing Cedar Fence Board Grade: A Complete Guide";
  const pageContent = `Learn about the different cedar fence board grades MyFence.com offers, including 1x4x6 #1 - 2 Face, 1x6x6 #1 & Better, and Clear Cedar options. Understand the benefits of different board widths, how shrinkage affects fence appearance over time, and which grade is best for your specific fence style and budget.`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Choosing Cedar Fence Board Grade: A Complete Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Learn about the different cedar fence board grades MyFence.com offers and how to choose the right grade for your fence project.
          </p>
        </div>
      </section>

      {/* AI Summary Section */}
      <section className="container py-8">
        <ArticleSummary 
          pageTitle={pageTitle}
          pageContent={pageContent}
        />
      </section>

      {/* Introduction */}
      <section className="container py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            When planning your cedar fence installation, one of the most important decisions you'll make is selecting the right board grade. At MyFence.com, we offer several cedar fence board options, each with distinct characteristics, benefits, and price points. This guide will help you understand the differences and choose the best option for your project.
          </p>
          
          <h2 className="text-3xl font-bold mb-4 text-foreground">Understanding Cedar Board Dimensions</h2>
          <p className="text-muted-foreground mb-6">
            Before diving into grades, it's important to understand board dimensions. At MyFence.com, we primarily work with two widths:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex gap-3 text-muted-foreground">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground">1x4 boards:</strong> A true 4 inches wide</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground">1x6 boards:</strong> A true 6 inches wide</span>
            </li>
          </ul>
          <p className="text-muted-foreground mb-12">
            The width you choose affects both the aesthetic and structural characteristics of your fence.
          </p>
        </div>
      </section>

      {/* 1x6x6 #1 & Better - Image Left */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">1x6x6 #1 & Better Cedar Fence Boards</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={img1x6x6Better} 
                alt="1x6x6 #1 & Better Cedar Fence Boards showing natural knots and grain patterns" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-semibold mb-4">What is #1 & Better Grade?</h3>
              <p className="text-muted-foreground mb-6">
                The #1 & Better grade represents a premium cedar option that balances quality with value. This grade allows for some natural characteristics like small knots and minor color variation, while maintaining excellent structural integrity and appearance.
              </p>
              
              <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">True 6-inch width</strong> provides maximum coverage</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Superior structural strength</strong> due to wider board dimension</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Tight knots</strong> that remain secure over time</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Natural cedar grain patterns</strong> for authentic beauty</span>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3">Best For:</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-muted-foreground">• Standard privacy fences</li>
                <li className="text-muted-foreground">• <Link to="/fence-styles/picture-frame-fence" className="text-primary hover:underline">Picture frame style fences</Link></li>
                <li className="text-muted-foreground">• Properties where natural wood character is desired</li>
                <li className="text-muted-foreground">• Budget-conscious projects requiring quality materials</li>
              </ul>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Advantages of 6-inch Width:</strong> The wider boards naturally provide more structural integrity and require fewer boards to complete your fence, potentially reducing labor costs. The substantial feel of 6-inch boards creates a solid, premium appearance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 1x4x6 #1-2 Face - Image Right */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">1x4x6 #1 - 2 Face Cedar Fence Boards</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <h3 className="text-2xl font-semibold mb-4">What is #1 - 2 Face Grade?</h3>
              <p className="text-muted-foreground mb-6">
                This grade designation means the boards have at least one face (side) that meets #1 grade standards, with the second face potentially having more natural characteristics. These narrower boards are specifically chosen for their application in pattern-based fence designs.
              </p>
              
              <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">4-inch width</strong> perfect for patterns</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Versatile design applications</strong></span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Good quality</strong> with natural cedar characteristics</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Cost-effective</strong> for certain fence styles</span>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3">Best For:</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-muted-foreground">• <Link to="/fence-styles/horizontal-lattice-fence" className="text-primary hover:underline">Horizontal lattice fences</Link></li>
                <li className="text-muted-foreground">• <Link to="/fence-styles/craftsman-style-fence" className="text-primary hover:underline">Craftsman style fences</Link></li>
                <li className="text-muted-foreground">• Decorative pattern work</li>
                <li className="text-muted-foreground">• Projects emphasizing design over solid privacy</li>
              </ul>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">The Shrinkage Advantage:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    One often-overlooked benefit of 4-inch boards is their dimensional stability. Since there is less material width to shrink, the gaps between boards remain more consistent over time compared to 6-inch boards, ensuring a more uniform appearance throughout the fence's lifespan.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="order-2">
              <img 
                src={img1x4x6Face} 
                alt="1x4x6 #1 - 2 Face Cedar Fence Boards showing natural characteristics" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1x4x6 Clear Cedar - Image Left */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">1x4x6 Clear Cedar Fence Boards</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={img1x4x6Clear} 
                alt="1x4x6 Clear Cedar Fence Boards showing virtually knot-free appearance" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-semibold mb-4">What Makes Clear Cedar Special?</h3>
              <p className="text-muted-foreground mb-6">
                Clear cedar represents the premium end of cedar grading. These boards are carefully selected to be virtually knot-free, offering the most uniform appearance and longest lifespan.
              </p>
              
              <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Nearly knot-free</strong> appearance</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Uniform grain patterns</strong> throughout</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Superior longevity</strong> - no knot holes to fall out</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Premium aesthetic</strong> for high-end projects</span>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3">Benefits of Going Clear:</h4>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Longevity:</strong> Without knots, there are no weak points where moisture can penetrate or pieces can fall out over time. Your fence maintains its integrity longer.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Uniform Appearance:</strong> Clear cedar boards age more consistently, maintaining a uniform look as they weather naturally.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong className="text-foreground">Long-term Value:</strong> While the initial cost is higher, the extended lifespan and reduced maintenance often make clear cedar more cost-effective over the fence's lifetime.
              </p>

              <h4 className="text-xl font-semibold mb-3">Ideal Applications:</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Premium <Link to="/fence-styles/horizontal-lattice-fence" className="text-primary hover:underline">horizontal lattice</Link> installations</li>
                <li className="text-muted-foreground">• High-visibility fence sections</li>
                <li className="text-muted-foreground">• Properties where appearance is paramount</li>
                <li className="text-muted-foreground">• Homeowners planning to stain or finish their fence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 1x4x8 Clear Cedar - Image Right */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">1x4x8 Clear Cedar Fence Boards</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <h3 className="text-2xl font-semibold mb-4">Extended Length Clear Cedar</h3>
              <p className="text-muted-foreground mb-6">
                The 8-foot length option in clear cedar offers the same premium, knot-free quality with the added benefit of extended board length for taller fence installations or specific design requirements.
              </p>
              
              <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">8-foot length</strong> for taller applications</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">All benefits of clear cedar</strong> quality</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Fewer joints</strong> required in tall fence sections</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Premium appearance</strong> maintained</span>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3">Best Uses:</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-muted-foreground">• Tall privacy fences (7-8 feet)</li>
                <li className="text-muted-foreground">• <Link to="/fence-upgrades/lattice-toppers" className="text-primary hover:underline">Lattice topper installations</Link></li>
                <li className="text-muted-foreground">• Decorative top sections</li>
                <li className="text-muted-foreground">• Architectural detail work</li>
              </ul>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Design Flexibility:</strong> The 8-foot length allows for creative applications like continuous lattice patterns that span greater heights without seams, or decorative top sections that maintain their clean appearance.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="order-2">
              <img 
                src={img1x4x8Clear} 
                alt="1x4x8 Clear Cedar Fence Boards showing extended length and premium quality" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1x6x6 Clear Cedar - Image Left */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">1x6x6 Clear Cedar Fence Boards</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={img1x6x6Clear} 
                alt="1x6x6 Clear Cedar Fence Boards showing ultimate premium quality" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-semibold mb-4">The Ultimate Premium Option</h3>
              <p className="text-muted-foreground mb-6">
                Combining the structural benefits of 6-inch width with the superior quality of clear cedar, these boards represent the top tier of fence materials available.
              </p>
              
              <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">True 6-inch width</strong> for maximum coverage</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Virtually knot-free</strong> premium appearance</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Superior structural integrity</strong></span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Longest lifespan</strong> of all options</span>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Most uniform aging</strong> and weathering</span>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20 mb-6">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Premium Performance:</strong> This combination delivers both the structural advantages of wider boards and the longevity benefits of clear cedar. These boards are our top recommendation for customers who want the absolute best in both appearance and performance.
                  </p>
                </CardContent>
              </Card>

              <h4 className="text-xl font-semibold mb-3">Perfect For:</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Luxury home installations</li>
                <li className="text-muted-foreground">• High-end <Link to="/fence-styles/picture-frame-fence" className="text-primary hover:underline">picture frame fences</Link></li>
                <li className="text-muted-foreground">• Properties with strict aesthetic standards</li>
                <li className="text-muted-foreground">• Long-term investment fences (20+ years)</li>
                <li className="text-muted-foreground">• Featured fence sections visible from the street</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Making Your Choice */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Making Your Choice</h2>
          
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Consider These Factors:</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Budget</h4>
                  <p className="text-muted-foreground">
                    Clear cedar costs more upfront but may offer better long-term value. Standard grades provide excellent quality at a lower initial cost.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Aesthetic Goals</h4>
                  <p className="text-muted-foreground">
                    If a uniform, premium appearance is crucial, clear cedar is worth the investment. If you appreciate natural wood character, #1 & Better grades are beautiful.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Fence Style</h4>
                  <p className="text-muted-foreground">
                    Pattern-based designs like <Link to="/fence-styles/craftsman-style-fence" className="text-primary hover:underline">craftsman style</Link> and <Link to="/fence-styles/horizontal-lattice-fence" className="text-primary hover:underline">horizontal lattice</Link> often benefit from narrower 1x4 boards.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Longevity Plans</h4>
                  <p className="text-muted-foreground">
                    Planning to stay in your home for decades? Clear cedar's extended lifespan becomes more valuable.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Maintenance Commitment</h4>
                  <p className="text-muted-foreground">
                    All cedar requires maintenance, but clear cedar maintains its appearance more consistently with less intervention.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Our Recommendation</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">For standard privacy fences:</strong> 1x6x6 #1 & Better offers excellent value and performance
                  </p>
                </div>
                <div className="flex gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">For pattern-based designs:</strong> 1x4x6 #1 - 2 Face provides the right combination of quality and dimension
                  </p>
                </div>
                <div className="flex gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">For premium installations:</strong> Clear cedar in either width delivers unmatched longevity and appearance
                  </p>
                </div>
                <div className="flex gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">For tall or decorative sections:</strong> 1x4x8 Clear Cedar provides the perfect combination of length and quality
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Choose Your Cedar Grade?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Understanding these differences helps you make an informed decision that balances your aesthetic goals, budget, and long-term plans. Our team at MyFence.com can help you select the perfect board grade for your specific project.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Each cedar grade we offer has been carefully selected for quality and performance. Whether you choose our value-oriented #1 & Better grade or invest in premium clear cedar, you're getting professionally installed, beautiful cedar fencing backed by our 3-year workmanship warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/fence-styles">View Fence Styles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CedarBoardGradeMDX;
