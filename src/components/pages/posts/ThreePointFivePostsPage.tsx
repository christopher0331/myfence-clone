"use client";

import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import OptimizedImage from "@/components/OptimizedImage";
import Link from "next/link";
import { AlertCircle, XCircle, TrendingDown, AlertTriangle, DollarSign, Shield, Phone } from "lucide-react";
import postComparison from "@/assets/post-size-comparison.png";
import { SITE_CONFIG } from "@/constants/siteConfig";

const ThreePointFivePostsPage = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com/" },
      { "@type": "ListItem", position: 2, name: "Fence Styles", item: "https://myfence.com/fence-styles" },
      { "@type": "ListItem", position: 3, name: '3.5" x 3.5" Fence Posts', item: "https://myfence.com/fence-posts/3-5-posts" },
    ],
  } as const;

  return (
    <>
      <Seo
        title={"3.5\" x 3.5\" Fence Posts: Why We Don't Recommend Them | MyFence.com"}
        description={"Learn why 3.5x3.5 inch fence posts aren't recommended for Seattle fences. Understand the risks of undersized posts including inadequate depth, rot, and twisting."}
        canonical="https://myfence.com/fence-posts/3-5-posts"
        structuredData={breadcrumbData}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-br from-destructive/5 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
                <AlertCircle className="h-5 w-5" />
                <span className="font-semibold">Not Recommended</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">3.5" x 3.5" Fence Posts: Why We Don't Use Them</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Understanding why undersized fence posts are a poor investment for your Seattle property</p>
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

        <section className="px-4 py-8">
          <div className="container mx-auto max-w-4xl">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Critical Warning for Homeowners</AlertTitle>
              <AlertDescription>
                3.5" x 3.5" posts (often marketed as "4x4") compromise the structural integrity and longevity of your fence. Avoid the false economy.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Visual Size Comparison</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">See the dramatic difference in post dimensions. The smaller the post, the weaker the foundation.</p>
            <div className="bg-card p-8 rounded-lg shadow-sm border">
              <OptimizedImage
                src={postComparison}
                alt="Comparison of 3.5, 4.125, and 5.5 inch posts"
                className="w-full max-w-4xl mx-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-destructive/20"><CardContent className="p-6"><XCircle className="w-12 h-12 text-destructive mb-4" /><h3 className="text-xl font-semibold mb-3">Insufficient Height</h3><p>At only 8' tall, there's barely enough for proper 2' burial depth on a 6' fence.</p></CardContent></Card>
            <Card className="border-destructive/20"><CardContent className="p-6"><AlertTriangle className="w-12 h-12 text-destructive mb-4" /><h3 className="text-xl font-semibold mb-3">Inadequate Depth</h3><p>Can't achieve proper burial depth—results in leaning and failing fences.</p></CardContent></Card>
            <Card className="border-destructive/20"><CardContent className="p-6"><TrendingDown className="w-12 h-12 text-destructive mb-4" /><h3 className="text-xl font-semibold mb-3">Prone to Rot</h3><p>Smaller dimensions rot faster from ground contact—5-7 years vs. 15-20+ years.</p></CardContent></Card>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-primary/5 p-8 rounded-lg border">
              <h2 className="text-3xl font-bold mb-4">Get a Professional Fence Built Right</h2>
              <p className="text-lg text-muted-foreground mb-6">We use properly sized posts for lasting performance.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild><Link href="/quote">Request Free Quote</Link></Button>
                <Button size="lg" variant="outline" asChild><a href={`tel:+1${SITE_CONFIG.phoneLink}`}><Phone className="h-4 w-4 mr-2" />Call Us Today</a></Button>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 pb-8">
          <div className="container mx-auto max-w-4xl text-center">
            <Button asChild variant="ghost"><Link href="/fence-styles#post-options">← Back to Fence Styles</Link></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreePointFivePostsPage;
