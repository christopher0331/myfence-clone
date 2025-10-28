import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import OptimizedImage from "@/components/OptimizedImage";

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
    <main>
      <Seo
        title="4.125&quot; x 4.125&quot; Fence Posts - Best Value &amp; Strength | MyFence.com"
        description="Discover why 4.125&quot; x 4.125&quot; fence posts are the best choice for Seattle fences. Superior strength, less warping, and excellent value. 30+ years experience."
        canonical="https://myfence.com/fence-posts/4-125-posts"
        structuredData={breadcrumbData}
      />
      
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              4.125&quot; x 4.125&quot; x 9&apos; Fence Posts
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The Best Bang for Your Buck in Fence Posts
            </p>
            <Button asChild size="lg" className="font-semibold">
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why We Recommend 4.125&quot; x 4.125&quot; Fence Posts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In our opinion, 4.125&quot; x 4.125&quot; fence posts are the best bang for your buck.
                  They are much more stout than the traditional &quot;4x4&quot; found in box stores like 
                  Home Depot and Lowe&apos;s, which is really only 3.5&quot; x 3.5&quot;.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Superior Strength & Durability</h3>
                 <p className="text-muted-foreground leading-relaxed mb-4">
                  By gaining nearly an additional 5 square inches of cross-sectional surface area, 
                  our 4.125&quot; x 4.125&quot; posts ensure they can withstand decades of use for your fence.
                  We make sure to pour the concrete at surface level or close to surface level, 
                  so there isn&apos;t lots of soil added on the fence post which can cause rot.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These fence posts are the best in our opinion as they have great strength and 
                  tend to do less wood warping and twisting compared to other options.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Less Checking Than 6x6 Posts</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  An issue that 6x6 fence posts have is they can check (crack) more often. 
                  Since 6x6 fence posts have a larger diameter, the outside dries quicker than 
                  the inside, which causes this checking. With 4.125&quot; x 4.125&quot; fence posts, 
                  you are much less likely to experience that.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Price Effective Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not to mention, they are very price effective. You get superior performance 
                  without the premium cost of 6x6 posts, making them the perfect balance of 
                  quality and value for your fence project.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            See Our 4.125&quot; x 4.125&quot; Posts in Action
          </h2>
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
      </section>

      <section className="container py-16">
        <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Fence?</h2>
            <p className="text-muted-foreground mb-6">
              Get a free quote for your fence project with our recommended 4.125&quot; x 4.125&quot; posts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/fence-styles">View All Fence Styles</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default FourPointOneTwoFivePosts;
