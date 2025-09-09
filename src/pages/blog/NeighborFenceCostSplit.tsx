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
        title="Should My Neighbor Split Our Fence Cost? Washington State RCW Law Guide 2024"
        description="Learn Washington State RCW 16.60.020 fence cost sharing laws. Get professional Fence Genius proposals to help neighbors split fence costs fairly and legally."
        structuredData={structuredData}
      />
      
      <article className="min-h-screen bg-background">
        {/* Hero Section */}
        <header className="relative h-[60vh] overflow-hidden">
          <OptimizedImage
            src="/lovable-uploads/92eb7242-9591-46bf-96c5-a1c66b6fe149.png"
            alt="Property line fence between neighboring homes showing shared boundary"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/90 text-black">Legal Guide</Badge>
                <Badge variant="outline" className="border-white/60 text-white bg-black/30">
                  <Clock className="h-3 w-3 mr-1" />
                  4 min read
                </Badge>
                <Badge variant="outline" className="border-white/60 text-white bg-black/30">
                  <Calendar className="h-3 w-3 mr-1" />
                  Dec 2024
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Should My Neighbor Split Our Fence Cost With Me?
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Understanding Washington State RCW laws and modern tools for fair fence cost agreements
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              One of the most common questions homeowners ask when considering a fence installation is whether their neighbor should help pay for it. In Washington State, the law provides clear guidance on this matter, and with modern tools like our Fence Genius proposal system, reaching a fair agreement has never been easier.
            </p>
          </div>

          {/* Washington State Law Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Washington State Law: The 50/50 Rule</h2>
                <p className="text-lg mb-6">
                  Washington State has specific laws governing fence cost sharing between neighbors. The key statute is <strong>RCW 16.60.020</strong>, which establishes the "partition fence" principle.
                </p>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/78133561-db65-4e96-932f-e60c0eeaf449.png"
                  alt="Cedar fence installation showing property boundary between two homes"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20 mb-8">
              <h3 className="text-lg font-semibold mb-4 text-primary">RCW 16.60.020 Summary</h3>
              <blockquote className="text-lg italic border-l-4 border-primary pl-6">
                "When any fence has been erected by any person on the boundary line of their land and the person owning land adjoining thereto shall make an enclosure so that such fence may also answer the purpose of enclosing their ground, they shall pay the owner of such fence already erected one-half of the value..."
              </blockquote>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">When Neighbors Must Pay Half:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Fence is built on or near property line
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Serves as partition between both properties
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Neighbor uses fence to enclose their property
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Fence benefits both properties
                  </li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3">Legal Notice Process:</h4>
                <ol className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center mt-0.5 flex-shrink-0">1</span>
                    Provide written notice to neighbor
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center mt-0.5 flex-shrink-0">2</span>
                    Allow reasonable response time (30 days)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center mt-0.5 flex-shrink-0">3</span>
                    Share costs 50/50 if agreed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center mt-0.5 flex-shrink-0">4</span>
                    Can recover costs legally if refused
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Fence Genius Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Our Fence Genius System Helps</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Modern fence disputes don't have to be contentious. Our Fence Genius proposal system makes neighbor negotiations transparent and professional.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="relative mb-6">
                  <OptimizedImage
                    src="/lovable-uploads/44503efa-b853-47c1-8bd9-52b13e55fbd1.png"
                    alt="Horizontal cedar fence showing professional installation quality"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Proposals</h3>
                <p className="text-muted-foreground">
                  Detailed cost breakdowns, visual property maps, and multiple style options with transparent pricing.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-6">
                  <OptimizedImage
                    src="/lovable-uploads/936790e3-e01a-4dcd-bf22-e5ac97188fd1.png"
                    alt="Vinyl privacy fence installation along property boundary"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fair Cost Calculations</h3>
                <p className="text-muted-foreground">
                  Show exactly what each linear foot costs and how expenses are calculated fairly for both parties.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-6">
                  <OptimizedImage
                    src="/lovable-uploads/815744dc-6440-4c65-917a-afb302ed2788.png"
                    alt="Aluminum fence installation showing modern design"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy Documentation</h3>
                <p className="text-muted-foreground">
                  Professional documentation that facilitates smooth discussions and legal agreements.
                </p>
              </div>
            </div>
          </section>

          {/* Recovery Options */}
          <section className="mb-16">
            <div className="bg-card rounded-xl p-8 border">
              <h2 className="text-2xl font-bold mb-6">What If Your Neighbor Refuses? (RCW 16.60.040)</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-6 text-lg">
                    If your neighbor refuses to pay their share after proper notice, Washington State law allows you to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold">1</span>
                      Build the entire fence yourself
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold">2</span>
                      Sue to recover half the reasonable cost
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold">3</span>
                      Collect attorney fees if successful
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <OptimizedImage
                    src="/lovable-uploads/913ab5db-5bb0-4601-b16b-cb82980c1a02.png"
                    alt="Chain link fence showing durable property boundary solution"
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Best Practices for Success</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Before You Start</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Get Professional Survey</h4>
                      <p className="text-muted-foreground">Confirm exact property lines to avoid disputes</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Check Building Codes</h4>
                      <p className="text-muted-foreground">Review local requirements and HOA rules</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Obtain Permits</h4>
                      <p className="text-muted-foreground">Secure necessary building permits</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Document Everything</h4>
                      <p className="text-muted-foreground">Keep written records of all communications</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">During Negotiations</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-secondary-foreground text-sm">→</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Present Professional Proposals</h4>
                      <p className="text-muted-foreground">Use Fence Genius for clear, detailed estimates</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-secondary-foreground text-sm">→</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Offer Multiple Options</h4>
                      <p className="text-muted-foreground">Provide different price points and materials</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-secondary-foreground text-sm">→</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Be Transparent</h4>
                      <p className="text-muted-foreground">Show detailed cost breakdowns</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-secondary-foreground text-sm">→</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Plan Maintenance</h4>
                      <p className="text-muted-foreground">Discuss ongoing care responsibilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/96a63d79-9269-47b1-96ef-9727feb60536.png"
                  alt="Picture frame fence installation showing quality craftsmanship"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/840c5f7f-0578-45fa-9b5c-195760503695.png"
                  alt="Cedar fence with cap and trim showing professional finish"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Special Considerations */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Special Considerations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Upgrade Costs</h3>
                  <p className="text-muted-foreground mb-4">
                    If you want premium materials or special features that exceed a "lawful fence" standard, your neighbor typically only pays for the basic fence cost unless they specifically agree to upgrades.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Maintenance Responsibilities</h3>
                  <p className="text-muted-foreground mb-4">
                    Under RCW 16.60.050, both neighbors must maintain partition fences in "equal shares" as long as they continue to use the fence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-primary/5 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Your Fence Proposal?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't let fence cost disputes strain neighbor relationships. Our Fence Genius system provides the transparency and professionalism needed for successful agreements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate('/quote-tool')} 
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Try Fence Genius
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  onClick={() => navigate('/contact')}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Speak with an Expert
                </Button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default NeighborFenceCostSplit;