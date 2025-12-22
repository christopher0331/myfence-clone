import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Seo from "@/components/Seo";
import OptimizedImage from "@/components/OptimizedImage";
import BlogSection from "@/components/BlogSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import dynamic from "next/dynamic";

// Lazy-load Google Maps to keep it off the initial critical path
const GoogleBusinessMap = dynamic(() => import("@/components/GoogleBusinessMap"), {
  ssr: false,
  loading: () => null,
});

const FourPointOneTwoFivePosts = () => {
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
        "name": "4.125\" x 4.125\" Fence Posts",
        "item": "https://myfence.com/fence-posts/4-125-posts"
      }
    ]
  };

  const galleryImages = [
    "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
    "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png",
    "/lovable-uploads/7f3fe64f-1dd1-4d94-b585-bf9cb4ae1bd6.png",
    "/lovable-uploads/8f73dbbc-942c-4ab6-9fda-bb95aa702af4.png",
    "/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png",
    "/lovable-uploads/1d91d676-3b17-4347-9ea7-28027e05e373.png",
  ];

  return (
    <>
      <Seo
        title="4.125&quot; x 4.125&quot; Fence Posts - Best Value &amp; Strength | MyFence.com"
        description="Discover why 4.125&quot; x 4.125&quot; fence posts are the best choice for Seattle fences. Superior strength, less warping, and excellent value. 30+ years experience."
        canonical="https://myfence.com/fence-posts/4-125-posts"
        image={galleryImages[0]}
        structuredData={breadcrumbData}
      />
      
      <section className="relative pt-8 pb-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Premium 4.125&quot; x 4.125&quot; x 9&apos; Fence Posts
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Seattle&apos;s Best Value Fence Posts - Superior Strength &amp; Longevity
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              MyFence.com | Serving Seattle, Bellevue, Redmond &amp; Surrounding Areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Call (253) 455-1885</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why MyFence.com Recommends 4.125&quot; x 4.125&quot; Fence Posts</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              After 30+ years of fence installation experience in the Seattle area, we&apos;ve found these posts 
              offer the perfect balance of strength, durability, and value for Pacific Northwest homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-elevated transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Superior to Box Store Posts</h3>
                    <p className="text-muted-foreground">
                      Box store &quot;4x4&quot; posts from Home Depot or Lowe&apos;s are actually only 3.5&quot; x 3.5&quot;. 
                      Our 4.125&quot; x 4.125&quot; posts give you nearly 5 additional square inches of cross-sectional 
                      surface area for significantly better strength and stability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elevated transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Decades of Durability</h3>
                    <p className="text-muted-foreground">
                      With proper installation and our concrete-pouring technique at or near surface level, 
                      these posts can withstand decades of Seattle weather. Less soil contact means less rot 
                      and longer fence life.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elevated transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Less Warping &amp; Twisting</h3>
                    <p className="text-muted-foreground">
                      These posts have excellent structural stability with minimal wood warping and twisting over time. 
                      The optimal size prevents the issues commonly seen in both smaller and larger posts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elevated transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Best Value for Your Investment</h3>
                    <p className="text-muted-foreground">
                      You get superior performance without the premium cost of 6x6 posts. This is the sweet spot 
                      for quality and value - the best bang for your buck in Seattle fence construction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Why Not 6x6 Posts?</h3>
              <p className="text-muted-foreground mb-4">
                While 6x6 posts are the most durable option, they have a significant drawback: checking (cracking). 
                The larger diameter causes the outside to dry much faster than the inside, leading to cracks that can 
                compromise the post&apos;s integrity and appearance.
              </p>
              <p className="text-muted-foreground">
                With 4.125&quot; x 4.125&quot; posts, you&apos;re much less likely to experience checking while still 
                getting exceptional strength and longevity. It&apos;s the perfect middle ground for Seattle homeowners.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            MyFence.com&apos;s Professional Installation Process
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our expert team follows proven techniques to ensure your fence posts last for decades in Seattle&apos;s unique climate.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Precise Post Placement</h3>
                <p className="text-muted-foreground">
                  We use our Fence Genius technology to ensure exact spacing and alignment for structural integrity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Surface-Level Concrete</h3>
                <p className="text-muted-foreground">
                  Concrete poured at or near surface level prevents soil contact, dramatically reducing rot risk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Cedar Posts</h3>
                <p className="text-muted-foreground">
                  Premium 4.125&quot; x 4.125&quot; x 9&apos; cedar posts selected for strength and natural rot resistance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              See Our 4.125&quot; x 4.125&quot; Posts in Action
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-elevated transition-shadow">
                  <CardContent className="p-0">
                    <OptimizedImage
                      src={img}
                      alt="Seattle fence installation featuring 4.125 inch x 4.125 inch fence posts by MyFence.com"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Fence in Seattle?</h2>
            <p className="text-muted-foreground mb-6">
              Get a free quote from MyFence.com for your fence project with our premium 4.125&quot; x 4.125&quot; posts. 
              Serving Seattle, Bellevue, Redmond, Renton, and surrounding King County areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Call (253) 455-1885</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              30+ years of experience | Licensed &amp; Insured | Family-owned
            </p>
          </CardContent>
        </Card>
      </section>

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
    </>
  );
};

export default FourPointOneTwoFivePosts;
