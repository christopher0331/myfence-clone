import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import Seo from "@/components/Seo";
import { useNavigate } from "react-router-dom";

const NeighborFenceCostSplit = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Should My Neighbor Split Our Fence Cost With Me?",
    "description": "Navigate the complexities of shared fence costs with neighbors, including Washington State laws and best practices for property line fencing.",
    "author": {
      "@type": "Organization",
      "name": "Quality Fence USA"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Quality Fence USA"
    },
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://qualityfenceusa.com/blog/neighbor-split"
    }
  };

  return (
    <>
      <Seo 
        title="Should My Neighbor Split Our Fence Cost With Me? | Washington State Law Guide"
        description="Learn about Washington State RCW fence laws, neighbor cost sharing requirements, and how to use our Fence Genius proposal system for fair fence cost agreements."
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-8 overflow-hidden">
          <div className="relative h-64 md:h-80">
            <OptimizedImage
              src="/lovable-uploads/92eb7242-9591-46bf-96c5-a1c66b6fe149.png"
              alt="Neighbors discussing fence cost sharing along property line"
              className="w-full h-full object-cover"
            />
          </div>
          
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Legal</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                4 min read
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                December 2024
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Should My Neighbor Split Our Fence Cost With Me?
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              Understanding Washington State fence laws and using modern tools to reach fair cost-sharing agreements with neighbors.
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            One of the most common questions homeowners ask when considering a fence installation is whether their neighbor should help pay for it. In Washington State, the law provides clear guidance on this matter, and with modern tools like our Fence Genius proposal system, reaching a fair agreement has never been easier.
          </p>

          <div className="my-8">
            <OptimizedImage
              src="/src/assets/fences/cedar.jpg"
              alt="Beautiful cedar fence between two properties"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <h2>Washington State Law: RCW 16.60.020 - The 50/50 Rule</h2>

          <p>
            Washington State has specific laws governing fence cost sharing between neighbors. The key statute is <strong>RCW 16.60.020</strong>, which establishes the "partition fence" principle:
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic my-6 bg-muted/50 p-4 rounded-r">
            When any fence has been erected by any person on the boundary line of their land and the person owning land adjoining thereto shall make an enclosure so that such fence may also answer the purpose of enclosing their ground, they shall pay the owner of such fence already erected one-half of the value of so much thereof as serves for a partition fence between them.
          </blockquote>

          <div className="my-8">
            <OptimizedImage
              src="/src/assets/fences/horizontal-cedar.jpg"
              alt="Horizontal cedar fence showing property boundary"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <h3>When Your Neighbor Must Pay Half</h3>

          <p>According to Washington State law, your neighbor is required to pay half the fence cost when:</p>

          <ul>
            <li>The fence is built on or very near the property line</li>
            <li>The fence serves as a partition between both properties</li>
            <li>Your neighbor uses the fence to enclose their property</li>
            <li>The fence benefits both properties</li>
          </ul>

          <h2>The Notice Requirement: RCW 16.60.030</h2>

          <p>
            Before building a partition fence, Washington State law requires proper notice under RCW 16.60.030:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-2">Legal Notice Process:</h4>
            <ol>
              <li>Provide written notice to your neighbor about the fence plan</li>
              <li>Allow reasonable time for response (typically 30 days)</li>
              <li>If they agree, both parties share the cost 50/50</li>
              <li>If they refuse, you can build the entire fence and still recover half the cost legally</li>
            </ol>
          </div>

          <div className="my-8">
            <OptimizedImage
              src="/src/assets/fences/vinyl.jpg"
              alt="White vinyl fence along property boundary"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <h2>How Our Fence Genius Proposal System Helps</h2>

          <p>
            Modern fence disputes don't have to be contentious. Our Fence Genius proposal system makes it easy to:
          </p>

          <h3>Generate Professional Proposals</h3>
          <ul>
            <li><strong>Detailed Cost Breakdown:</strong> Each fence section shows exact materials and labor costs</li>
            <li><strong>Visual Property Maps:</strong> Clear drawings showing which sections belong to which neighbor</li>
            <li><strong>Multiple Options:</strong> Different fence styles and upgrade options with transparent pricing</li>
            <li><strong>Professional Presentation:</strong> Clean, easy-to-understand proposals that facilitate discussions</li>
          </ul>

          <div className="my-8">
            <OptimizedImage
              src="/src/assets/fences/wrought-iron.jpg"
              alt="Ornamental wrought iron fence with decorative posts"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <h3>Simplify Neighbor Negotiations</h3>

          <p>With our system, you can:</p>
          <ul>
            <li>Show exactly what each linear foot costs</li>
            <li>Demonstrate how costs are calculated fairly</li>
            <li>Present options for different materials and styles</li>
            <li>Provide professional documentation for agreements</li>
          </ul>

          <h2>Recovery Options: RCW 16.60.040</h2>

          <p>
            If your neighbor refuses to pay their share after proper notice, Washington State law allows you to:
          </p>

          <ol>
            <li>Build the entire fence yourself</li>
            <li>Sue to recover half the reasonable cost</li>
            <li>Collect attorney fees if successful (in many cases)</li>
          </ol>

          <div className="my-8">
            <OptimizedImage
              src="/src/assets/fences/aluminum-slat.jpg"
              alt="Modern aluminum slat fence installation"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <h2>Best Practices for Neighbor Fence Agreements</h2>

          <h3>Before You Start</h3>
          <ul>
            <li>Get a professional survey to confirm property lines</li>
            <li>Check local building codes and HOA requirements</li>
            <li>Obtain necessary permits</li>
            <li>Document everything in writing</li>
          </ul>

          <h3>During Negotiations</h3>
          <ul>
            <li>Present professional proposals using our Fence Genius system</li>
            <li>Offer multiple options at different price points</li>
            <li>Be transparent about all costs</li>
            <li>Consider maintenance agreements for ongoing care</li>
          </ul>

          <div className="my-8">
            <OptimizedImage
              src="/src/assets/fences/chainlink.jpg"
              alt="Chain link fence along residential property line"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <h2>Special Considerations</h2>

          <h3>Upgrade Costs</h3>
          <p>
            If you want premium materials or special features that exceed a "lawful fence" standard, your neighbor typically only pays for the basic fence cost unless they specifically agree to upgrades.
          </p>

          <h3>Maintenance Responsibilities</h3>
          <p>
            Under RCW 16.60.050, both neighbors must maintain partition fences in "equal shares" as long as they continue to use the fence.
          </p>

          <h2>Get Started with Professional Fence Planning</h2>

          <p>
            Don't let fence cost disputes strain neighbor relationships. Our Fence Genius proposal system provides the transparency and professionalism needed to reach fair agreements that satisfy everyone involved.
          </p>

          <div className="bg-primary/5 p-6 rounded-lg my-8 border border-primary/20">
            <h3 className="text-lg font-semibold mb-4">Ready to Create Your Fence Proposal?</h3>
            <p className="mb-4">
              Use our advanced tools to generate professional proposals that make neighbor negotiations smooth and successful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/quote-tool')} 
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Try Fence Genius
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/contact')}
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Speak with an Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NeighborFenceCostSplit;