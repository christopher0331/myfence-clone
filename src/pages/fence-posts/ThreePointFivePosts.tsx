import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertCircle, Phone } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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

      <div className="container py-12 max-w-4xl">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            3.5" x 3.5" Fence Posts: Why We Don't Use Them
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding why undersized fence posts are a poor investment for your Seattle property
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <Button asChild size="lg">
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+12538667031">
                <Phone className="h-4 w-4 mr-2" />
                (253) 866-7031
              </a>
            </Button>
          </div>
        </section>

        {/* Warning Alert */}
        <Alert variant="destructive" className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Not Recommended for Quality Fences</AlertTitle>
          <AlertDescription>
            3.5" x 3.5" posts are commonly used by budget contractors but represent a false economy. 
            They compromise the structural integrity and longevity of your entire fence.
          </AlertDescription>
        </Alert>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2>The Problem with 3.5" x 3.5" Posts</h2>
          
          <div className="bg-muted p-6 rounded-lg mb-6">
            <h3 className="mt-0">Key Issues:</h3>
            <ul className="mb-0">
              <li><strong>Insufficient Height:</strong> At only 8' tall, there's barely enough length for proper installation</li>
              <li><strong>Inadequate Depth:</strong> For a 6' fence, you can't achieve the proper burial depth needed for stability</li>
              <li><strong>Prone to Rot:</strong> Smaller dimensions mean faster deterioration from ground contact</li>
              <li><strong>Warping & Twisting:</strong> Less material means more susceptibility to movement and distortion</li>
              <li><strong>Poor Wind Resistance:</strong> Undersized posts can't handle Seattle's weather conditions</li>
            </ul>
          </div>

          <h2>Why Cheap Contractors Use Them</h2>
          <p>
            The cheapest contractors often use 3.5" x 3.5" posts because they're readily available at big box stores 
            like Home Depot and Lowes, and they cost less. However, this is a classic case of penny-wise and 
            pound-foolish. When you're investing thousands of dollars in a new fence, skimping on the posts—the 
            foundation of your entire fence—is like building a house on a weak foundation.
          </p>

          <h2>The Math Doesn't Work</h2>
          <p>
            For a proper 6-foot fence installation, you need:
          </p>
          <ul>
            <li>6 feet of fence height above ground</li>
            <li>At least 2.5-3 feet of post below ground for stability</li>
            <li>Total required: 8.5-9 feet minimum</li>
          </ul>
          <p>
            With only 8 feet of total length, 3.5" x 3.5" posts simply can't provide adequate burial depth. 
            This results in unstable fences that lean, sag, or fail prematurely.
          </p>

          <h2>Throwing Good Money at Bad</h2>
          <p>
            Your fence posts are the foundation of your fence. Everything else—the rails, boards, gates—depends 
            on them. Using undersized posts is equivalent to throwing good money at bad. You might save $200-300 
            on posts, but you'll end up with a fence that:
          </p>
          <ul>
            <li>Needs replacement sooner (often within 5-7 years instead of 15-20+)</li>
            <li>Requires more frequent repairs and maintenance</li>
            <li>Looks unprofessional as it ages and warps</li>
            <li>Provides poor wind resistance in Seattle's storms</li>
            <li>May not meet local building codes for proper depth</li>
          </ul>

          <h2>What We Recommend Instead</h2>
          <p>
            At MyFence.com, we exclusively use larger, professional-grade posts:
          </p>
          <ul>
            <li>
              <Link to="/fence-posts/4-125-posts" className="text-primary hover:underline">
                <strong>4.125" x 4.125" x 9' posts</strong>
              </Link> - Our standard and most popular option, providing proper depth and durability
            </li>
            <li>
              <Link to="/fence-posts/6x6" className="text-primary hover:underline">
                <strong>5.5" x 5.5" x 10' (6x6) posts</strong>
              </Link> - Premium option for maximum longevity and strength
            </li>
            <li>
              <Link to="/fence-upgrades/post-on-pipe" className="text-primary hover:underline">
                <strong>Post on Pipe</strong>
              </Link> - Steel-reinforced posts for ultimate durability
            </li>
          </ul>
        </section>

        {/* Warning Section */}
        <section className="bg-muted p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Red Flag Warning</h2>
          <p className="text-lg mb-4">
            If a contractor quotes you a fence using 3.5" x 3.5" posts (often marketed as "4x4" posts), 
            this is a red flag. They're either:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Cutting corners to offer the lowest price</li>
            <li>Using inferior materials from big box stores</li>
            <li>Not concerned about the long-term performance of your fence</li>
            <li>Unaware of professional fencing standards</li>
          </ul>
          <p className="text-lg font-semibold">
            A quality fence is an investment in your property. Don't let a cheap contractor compromise that 
            investment by using undersized posts.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary/5 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Get a Professional Fence Built Right</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            At MyFence.com, we never compromise on quality. Every fence we build uses properly sized posts 
            for lasting performance you can count on.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote">Request Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+12538667031">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Today
              </a>
            </Button>
          </div>
        </section>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Button asChild variant="ghost">
            <Link to="/fence-styles#post-options">← Back to Fence Styles</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ThreePointFivePosts;
