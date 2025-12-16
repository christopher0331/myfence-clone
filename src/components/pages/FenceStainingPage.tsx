"use client";

import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CloudRain, Shield, Palette, Clock, TreePine, Droplets, Sun } from "lucide-react";
import Link from "next/link";

const FenceStainingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Should I Stain My Cedar Fence? The Complete Seattle Guide",
    description:
      "Expert guide on cedar fence staining in Seattle's rainy climate. Learn why staining every 3-5 years protects your investment and prevents costly repairs.",
    author: {
      "@type": "Organization",
      name: "MyFence.com",
    },
    datePublished: "2024-09-01",
    dateModified: "2024-09-01",
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Should I stain my cedar fence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you should stain your cedar fence every 3-5 years, especially in Seattle's wet climate. Staining protects against moisture, UV damage, and extends fence life significantly.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I stain my fence in Seattle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Seattle's rainy Pacific Northwest climate, cedar fences should be stained every 3-4 years due to increased moisture exposure and mildew risks.",
          },
        },
      ],
    },
  };

  return (
    <>
      <Seo
        title="Cedar Fence Staining Seattle: When & Why to Stain"
        description="Professional cedar fence staining guide for Seattle's wet climate. Protect your investment with expert tips. 30+ years experience. Call (253) 455-1885."
        canonical="https://myfence.com/should-i-stain-my-fence"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Should I Stain My Cedar Fence?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The short answer? <strong>Absolutely yes!</strong> Especially if you're living in Seattle's soggy paradise.
              Let's dive into why your cedar fence is basically begging for some TLC every 3-5 years.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <TreePine className="w-4 h-4" />
                <span>Cedar Expert Guide</span>
              </div>
              <div className="flex items-center gap-1">
                <CloudRain className="w-4 h-4" />
                <span>PNW Climate Focused</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Section */}
        <section className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
                  <p className="text-lg mb-4">
                    <strong>Yes, you should stain your cedar fence every 3-5 years.</strong> In Seattle's wet climate,
                    we recommend leaning toward the 3-4 year mark. Think of it as sunscreen for your fence –
                    skip it, and you'll be dealing with some serious "sunburn" (or in our case, rain-burn).
                  </p>
                  <p className="text-muted-foreground">
                    Trust us, your wallet will thank you later when you're not replacing rotted boards!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Stain Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Your Seattle Fence Needs Staining</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Living in the Pacific Northwest means your fence faces unique challenges. Here's why staining isn't optional – it's
              essential.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CloudRain className="w-8 h-8 text-blue-500" />
                    <h3 className="text-xl font-semibold">Seattle's Rain Reality</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We average 37 inches of rain per year (yes, we counted). That's a lot of moisture trying to penetrate your cedar.
                    Unstained wood is like a sponge at a water balloon fight – it's going to get soaked.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-400" />
                      <span>Prevents water absorption and warping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-400" />
                      <span>Reduces mildew and moss growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sun className="w-8 h-8 text-yellow-500" />
                    <h3 className="text-xl font-semibold">UV Protection</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Even on our (admittedly rare) sunny days, UV rays are working overtime to turn your beautiful cedar into
                    weathered gray driftwood. Stain acts like SPF 50 for your fence.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-yellow-400" />
                      <span>Prevents graying and weathering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-yellow-400" />
                      <span>Maintains wood's natural beauty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-green-500" />
                    <h3 className="text-xl font-semibold">Structural Protection</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Cedar is naturally rot-resistant, but it's not invincible. Think of stain as your fence's personal bodyguard,
                    keeping insects, moisture, and decay at bay.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Extends fence lifespan by 50-75%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Prevents costly board replacements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-8 h-8 text-purple-500" />
                    <h3 className="text-xl font-semibold">Aesthetic Appeal</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Let's be honest – a well-maintained, stained fence looks amazing and adds serious curb appeal.
                    Your neighbors will be asking for your secret (spoiler: it's regular maintenance).
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-purple-400" />
                      <span>Enhances natural wood grain</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-purple-400" />
                      <span>Increases property value</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Seattle Factor */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">The Pacific Northwest Factor</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Living in Seattle means your fence is basically in a long-term relationship with moisture.
                  We're talking 150+ rainy days per year, high humidity, and enough mildew to make a biology teacher weep with joy.
                </p>
                <p>
                  <strong>Here's what makes our climate particularly challenging for cedar fences:</strong>
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    <strong>Constant moisture cycles:</strong> Wet, dry, wet, dry – this constant expansion and contraction is tough on unstained wood
                  </li>
                  <li>
                    <strong>Mild temperatures:</strong> Perfect breeding ground for mildew, moss, and algae (the unholy trinity of fence destroyers)
                  </li>
                  <li>
                    <strong>Limited sun exposure:</strong> Less natural drying time means moisture lingers longer
                  </li>
                  <li>
                    <strong>Marine air:</strong> That salty Pacific breeze carries extra moisture and can accelerate weathering
                  </li>
                </ul>
                <p>
                  The good news? A properly stained and sealed fence can laugh in the face of all this moisture madness.
                  We've seen stained cedar fences that look nearly new after 5 years, while unstained ones start showing their age after just 18 months.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Deep Dive */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Benefits of a Stained & Sealed Fence</h2>

            <div className="space-y-8">
              <article className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Financial Protection</h3>
                <p className="text-muted-foreground mb-4">
                  Let's talk money because we know that's what really matters. A $300-500 staining job every 3-4 years beats
                  a $3,000-8,000 fence replacement any day of the week. Do the math – regular staining can extend your fence's
                  life from 10-15 years to 20-25 years.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Pro tip: Think of staining as insurance for your fence investment.
                </p>
              </article>

              <article className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-semibold mb-3">Moisture Defense System</h3>
                <p className="text-muted-foreground mb-4">
                  Quality stain and sealer create a barrier that repels water like a duck's back. This prevents:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                  <li>Board warping and splitting</li>
                  <li>Post rot at ground level</li>
                  <li>Joint separation</li>
                  <li>Mildew and moss colonization (yes, they're basically tiny invaders)</li>
                </ul>
              </article>

              <article className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-semibold mb-3">Color & Character Preservation</h3>
                <p className="text-muted-foreground mb-4">
                  Cedar is gorgeous when it's fresh – that rich, warm tone that makes your backyard feel like a luxury retreat.
                  Without stain, that beautiful color fades to silver-gray within 6-12 months. With proper staining, you can
                  maintain that "just-installed" look for years.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Bonus: You can even enhance the natural color or go for a completely different look!
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* When to Stain */}
        <section className="bg-gradient-to-r from-primary/5 to-muted/20 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">When Should You Stain Your Fence?</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-600">New Fence Timeline</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong>Month 1-3:</strong> Let it weather slightly for better stain absorption
                      </li>
                      <li>
                        <strong>Month 3-6:</strong> Perfect time for first staining
                      </li>
                      <li>
                        <strong>Year 3-4:</strong> Time for your first re-staining
                      </li>
                      <li>
                        <strong>Every 3-4 years after:</strong> Maintain the protection
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Signs It's Time to Re-stain</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Water no longer beads on the surface</li>
                      <li>• Color is fading or looking patchy</li>
                      <li>• You can see the wood grain clearly through the stain</li>
                      <li>• Green algae or mildew starting to appear</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  <strong>Seattle Pro Tip:</strong> The best time to stain is during our brief "dry season" (July-September).
                  You need at least 24-48 hours of no rain for proper curing. Yes, we know – finding that window can be like
                  spotting a unicorn, but it's worth the wait!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Real Cost of NOT Staining</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Without Regular Staining</h3>
                  <ul className="space-y-3 text-red-600">
                    <li>• Board replacement: $15-25 per linear foot</li>
                    <li>• Full fence replacement: $3,000-8,000+</li>
                    <li>• Decreased property value</li>
                    <li>• Reduced lifespan: 8-12 years</li>
                    <li>• Constant repair headaches</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">With Regular Staining</h3>
                  <ul className="space-y-3 text-green-600">
                    <li>• Staining cost: $300-500 every 3-4 years</li>
                    <li>• Extended lifespan: 20-25+ years</li>
                    <li>• Maintained property value</li>
                    <li>• Minimal repairs needed</li>
                    <li>• Peace of mind (priceless!)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h4 className="text-lg font-semibold mb-3">The 20-Year Math</h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-medium text-red-700">No Staining:</p>
                  <p>Replace fence twice: $6,000-16,000</p>
                </div>
                <div>
                  <p className="font-medium text-green-700">Regular Staining:</p>
                  <p>5 staining sessions: $1,500-2,500</p>
                </div>
              </div>
              <p className="mt-4 font-semibold text-center">
                Potential savings: <span className="text-green-600">$4,500-13,500!</span>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/20 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <details className="group bg-background p-6 rounded-lg shadow">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    Can I stain my fence myself?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      Absolutely! It's a great weekend project. You'll need a pump sprayer or brush, quality stain, and about 2-3
                      days for prep, application, and drying. Just make sure you have that rare Seattle phenomenon called
                      "consecutive sunny days."
                    </p>
                  </div>
                </details>

                <details className="group bg-background p-6 rounded-lg shadow">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    What type of stain is best for Seattle's climate?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      Semi-transparent or solid color stains with built-in water repellent work best here. Look for products
                      specifically designed for wet climates. Oil-based stains typically last longer, but water-based stains dry
                      faster (crucial in our climate!).
                    </p>
                  </div>
                </details>

                <details className="group bg-background p-6 rounded-lg shadow">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    How long does stain last in Seattle?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      Quality stain should last 3-4 years in our wet climate, compared to 4-6 years in drier regions. The constant
                      moisture and UV exposure (yes, even on cloudy days) gradually breaks down the protective barrier.
                    </p>
                  </div>
                </details>

                <details className="group bg-background p-6 rounded-lg shadow">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    Should I pressure wash before staining?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      Yes, but be gentle! Use low pressure (1200-1500 PSI) and keep the nozzle moving. Let the fence dry completely
                      for 24-48 hours before staining. This is where Seattle's weather becomes... challenging.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Fence Investment?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't let Seattle's weather win the battle against your beautiful cedar fence. Whether you need a new fence
              that's ready for staining or want to discuss maintenance for your current one, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link href="/contact">Ask Our Experts</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Family-owned and Seattle-focused since day one. We know fences, and we definitely know rain!
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default FenceStainingPage;
