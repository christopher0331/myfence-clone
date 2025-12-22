import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { AlertCircle, XCircle, TrendingDown, AlertTriangle, DollarSign, Shield, Phone } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import OptimizedImage from "@/components/OptimizedImage";
import postComparison from "@/assets/post-size-comparison.png";
import { SITE_CONFIG } from "@/constants/siteConfig";
import BlogSection from "@/components/BlogSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import dynamic from "next/dynamic";

// Lazy-load Google Maps to keep it off the initial critical path
const GoogleBusinessMap = dynamic(() => import("@/components/GoogleBusinessMap"), {
  ssr: false,
  loading: () => null,
});

const ThreePointFivePosts = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com/" },
      { "@type": "ListItem", position: 2, name: "Fence Styles", item: "https://myfence.com/fence-styles" },
      { "@type": "ListItem", position: 3, name: '3.5" x 3.5" Fence Posts', item: "https://myfence.com/fence-posts/3-5-posts" },
    ],
  };

  return (
    <>
      <Seo
        title="3.5&quot; x 3.5&quot; Fence Posts: Why We Don't Recommend Them | MyFence.com"
        description="Learn why 3.5x3.5 inch fence posts aren't recommended for Seattle fences. Understand the risks of undersized posts including inadequate depth, rot, and twisting."
        canonical="https://myfence.com/fence-posts/3-5-posts"
        structuredData={breadcrumbData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-8 pb-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
                <AlertCircle className="h-5 w-5" />
                <span className="font-semibold">Not Recommended</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                3.5" x 3.5" Fence Posts: Why We Don't Use Them
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Understanding why undersized fence posts are a poor investment for your Seattle property
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:+1${SITE_CONFIG.phoneLink}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {SITE_CONFIG.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Alert */}
        <section className="px-4 py-8">
          <div className="container mx-auto max-w-4xl">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Critical Warning for Homeowners</AlertTitle>
              <AlertDescription>
                3.5" x 3.5" posts (often marketed as &quot;4x4&quot;) are commonly used by budget contractors but represent 
                a false economy. They compromise the structural integrity and longevity of your entire fence investment.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Size Comparison */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Visual Size Comparison
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              See the dramatic difference in post dimensions. The smaller the post, the weaker the foundation.
            </p>
            <div className="bg-card p-8 rounded-lg shadow-sm border">
              <OptimizedImage
                src={postComparison}
                alt="Comparison of 3.5 inch, 4.125 inch, and 5.5 inch fence post dimensions"
                className="w-full max-w-4xl mx-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Critical Problems with 3.5" x 3.5" Posts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <XCircle className="w-12 h-12 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Insufficient Height</h3>
                  <p className="text-muted-foreground">
                    At only 8' tall, there's barely enough length for proper installation. You need at least 8 feet 
                    minimum for a 6' fence with proper 2-foot burial depth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Inadequate Depth</h3>
                  <p className="text-muted-foreground">
                    For a 6' fence, you can't achieve the proper 2 feet of burial depth needed for stability. 
                    This results in leaning and failing fences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <TrendingDown className="w-12 h-12 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Prone to Rot</h3>
                  <p className="text-muted-foreground">
                    Smaller dimensions mean faster deterioration from ground contact. These posts rot through 
                    in 5-7 years instead of 15-20+ years.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <AlertCircle className="w-12 h-12 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Warping & Twisting</h3>
                  <p className="text-muted-foreground">
                    Less material means more susceptibility to movement and distortion. Your fence will look 
                    unprofessional as it ages.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Poor Wind Resistance</h3>
                  <p className="text-muted-foreground">
                    Undersized posts can't handle Seattle's weather conditions. High winds will stress and 
                    eventually break down your fence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <DollarSign className="w-12 h-12 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">False Economy</h3>
                  <p className="text-muted-foreground">
                    Save $200-300 now, spend $5,000+ on premature replacement. This is throwing good money 
                    at bad materials.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Cheap Contractors Use Them */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Why Cheap Contractors Use 3.5" x 3.5" Posts
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg">
                The cheapest contractors often use 3.5" x 3.5" posts because they're readily available at big box stores 
                like Home Depot and Lowes, and they cost less. However, this is a classic case of penny-wise and 
                pound-foolish.
              </p>
              <p className="text-muted-foreground text-lg">
                When you're investing thousands of dollars in a new fence, skimping on the posts—the foundation of your 
                entire fence—is like building a house on a weak foundation. Everything above ground depends on what's 
                below, and undersized posts simply cannot provide the support needed.
              </p>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">The Math Doesn't Work</h3>
                <p className="text-muted-foreground mb-4">For a proper 6-foot fence installation, you need:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>6 feet of fence height above ground</li>
                  <li>At least 2 feet of post below ground for stability</li>
                  <li><strong>Total required: 8 feet minimum</strong></li>
                </ul>
                <p className="text-muted-foreground">
                  With only 8 feet of total length and limited cross-section, 3.5" x 3.5" posts provide barely adequate burial depth and lack the structural integrity needed for long-term stability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Recommend */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              What We Recommend Instead
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:shadow-elevated transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-primary mb-2">4.125"</div>
                    <p className="text-sm text-muted-foreground">x 4.125" x 9'</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-foreground">Our Standard</h3>
                  <p className="text-muted-foreground mb-6 text-center">
                    Provides proper depth, durability, and value for Pacific Northwest homes.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/fence-posts/4-125-posts">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-elevated transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-primary mb-2">5.5"</div>
                    <p className="text-sm text-muted-foreground">x 5.5" x 10' (6x6)</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-foreground">Premium Option</h3>
                  <p className="text-muted-foreground mb-6 text-center">
                    Maximum longevity and strength. 30-year life expectancy.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/fence-posts/6x6">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-elevated transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-primary mb-2">Steel</div>
                    <p className="text-sm text-muted-foreground">Post on Pipe</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-foreground">Ultimate Durability</h3>
                  <p className="text-muted-foreground mb-6 text-center">
                    Steel-reinforced posts for maximum ground-rot resistance.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/fence-upgrades/post-on-pipe">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Red Flag Warning */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card p-8 rounded-lg border border-destructive/20">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Red Flag Warning for Homeowners</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    If a contractor quotes you a fence using 3.5" x 3.5" posts (often marketed as &quot;4x4&quot; posts), 
                    this is a major red flag. They're either:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
                    <li>Cutting corners to offer the lowest price</li>
                    <li>Using inferior materials from big box stores</li>
                    <li>Not concerned about the long-term performance of your fence</li>
                    <li>Unaware of professional fencing standards</li>
                  </ul>
                  <p className="text-lg font-semibold text-foreground">
                    A quality fence is an investment in your property. Don't let a cheap contractor compromise that 
                    investment by using undersized posts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center bg-primary/5 p-8 rounded-lg border">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Get a Professional Fence Built Right</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                At MyFence.com, we never compromise on quality. Every fence we build uses properly sized posts 
                for lasting performance you can count on.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/quote">Request Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:+1${SITE_CONFIG.phoneLink}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us Today
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="px-4 pb-8">
          <div className="container mx-auto max-w-4xl text-center">
            <Button asChild variant="ghost">
              <Link href="/fence-styles#post-options">← Back to Fence Styles</Link>
            </Button>
          </div>
        </div>

        {/* Blog Articles Section */}
        <BlogSection limit={4} />

        {/* Service Area Map Section */}
        <section className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Service Area</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Proudly serving the greater Seattle area within a 28-mile radius
          </p>
          <GoogleBusinessMap city="Maple Valley" state="WA" radiusMiles={28} showBusinessInfo={false} />
        </section>

        {/* Service Areas List Section */}
        <ServiceAreasSection />
      </div>
    </>
  );
};

export default ThreePointFivePosts;
