import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Droplets, Eye, Clock, TreePine, Hammer, Paintbrush2, Target } from "lucide-react";
import { Link } from "react-router-dom";

const PreStaining = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pre-Staining Cedar Fences: Superior Protection Before Installation",
    "description": "Discover why pre-staining cedar fence materials before installation provides superior protection compared to traditional on-site staining. Complete coverage including hidden areas.",
    "author": {
      "@type": "Organization",
      "name": "MyFence.com"
    },
    "datePublished": "2024-09-01",
    "dateModified": "2024-09-01",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is pre-staining for cedar fences?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pre-staining is the process of staining individual cedar fence components before installation, ensuring complete coverage including hidden areas that can't be reached after the fence is built."
          }
        },
        {
          "@type": "Question", 
          "name": "Why is pre-staining better than traditional staining?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pre-staining provides superior protection by covering all surfaces including hidden joints, board backs, and tight spaces that become inaccessible after installation."
          }
        }
      ]
    }
  };

  return (
    <>
      <Seo
        title="Pre-Staining Cedar Fences: Superior Protection | MyFence.com"
        description="Discover our professional pre-staining process for cedar fences. Complete protection including hidden areas that can't be reached after installation. Superior to traditional on-site staining."
        canonical="https://myfence.com/pre-staining-cedar-fence"
        structuredData={structuredData}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Pre-Staining: The Ultimate Cedar Protection
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Why settle for surface-level protection when you can have <strong>complete coverage</strong>? 
              Our pre-staining process gives your cedar fence the best possible start in life.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>360° Protection</span>
              </div>
              <div className="flex items-center gap-1">
                <TreePine className="w-4 h-4" />
                <span>Cedar Specialist</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                <span>Hidden Area Coverage</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Paintbrush2 className="w-8 h-8 text-orange-500" />
                    <h3 className="text-xl font-semibold text-orange-700">Traditional On-Site Staining</h3>
                  </div>
                  <ul className="space-y-3 text-orange-600">
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Only covers visible surfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Can't reach behind boards or tight joints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Weather-dependent application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Risk of drips and uneven coverage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-green-500" />
                    <h3 className="text-xl font-semibold text-green-700">MyFence Pre-Staining</h3>
                  </div>
                  <ul className="space-y-3 text-green-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Complete 360° coverage of every piece</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Hidden areas fully protected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Controlled shop environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Perfect, uniform finish</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Meticulous Pre-Staining Process</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Material Selection & Advanced Purchasing</h3>
                  <p className="text-muted-foreground mb-4">
                    We purchase premium cedar materials well in advance of your project. This isn't just about inventory – 
                    it's about giving the wood time to properly acclimate and reach optimal moisture content for stain absorption.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <TreePine className="w-4 h-4 text-green-500" />
                      <span>Premium grade cedar selection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>2-4 weeks advance purchasing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Controlled Drying Environment</h3>
                  <p className="text-muted-foreground mb-4">
                    Fresh cedar contains natural moisture that can prevent proper stain penetration. We carefully dry each piece 
                    in our controlled environment until it reaches the perfect moisture content (12-15%) for optimal stain absorption.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span>Optimal 12-15% moisture content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Weather-independent process</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Complete Staining of Uncut Surfaces</h3>
                  <p className="text-muted-foreground mb-4">
                    Here's where the magic happens. Every single piece – boards, rails, posts, caps – gets completely stained in its entirety. 
                    We stain all six sides of each uncut component, ensuring complete protection including areas that will be hidden after installation. 
                    If any boards need cutting during production, those cuts represent minimal loss of pre-stained coverage.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-500" />
                      <span>Complete coverage of uncut boards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-orange-500" />
                      <span>Hidden joints protected</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Curing & Quality Control</h3>
                  <p className="text-muted-foreground mb-4">
                    Each stained component undergoes a controlled curing process to ensure the stain fully penetrates and bonds. 
                    We inspect every piece for uniform coverage and quality before it's approved for installation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>48-72 hour curing time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Quality inspection checkpoint</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Expert Installation</h3>
                  <p className="text-muted-foreground mb-4">
                    Now comes the careful installation of your pre-stained components. Our experienced crew handles each piece 
                    with care to preserve the beautiful finish while creating a fence that's protected from day one.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Hammer className="w-4 h-4 text-orange-500" />
                      <span>Careful handling during install</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Protected from day one</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Areas Problem */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">The Hidden Areas Problem</h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Traditional on-site staining leaves critical areas unprotected – areas where moisture loves to hide and cause damage.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-3 text-red-700">Behind Fence Boards</h3>
                    <p className="text-sm text-muted-foreground">
                      The back side of fence boards faces your neighbor's yard but is completely exposed to rain, moisture, and UV damage.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplets className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="font-semibold mb-3 text-orange-700">Tight Joints & Gaps</h3>
                    <p className="text-sm text-muted-foreground">
                      Where boards meet rails and posts, tiny gaps collect moisture. These joints are impossible to reach with a brush or sprayer after assembly.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="font-semibold mb-3 text-blue-700">Complete Staining of Uncut Surfaces</h3>
                    <p className="text-sm text-muted-foreground">
                      We stain every board completely in its entirety before installation. If boards need cutting during production, those cuts represent minimal loss of pre-stained coverage.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 p-6 bg-background rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold mb-3 text-lg">Why This Matters</h4>
                <p className="text-muted-foreground">
                  Unprotected areas become the weak link in your fence's defense system. Moisture enters through these gaps, 
                  causing rot from the inside out. By the time you see the damage on the surface, it's often too late and 
                  costly repairs are needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Deep Dive */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Pre-Staining is Superior</h2>
            
            <div className="space-y-8">
              <article className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Complete Moisture Protection</h3>
                <p className="text-muted-foreground mb-4">
                  With every surface protected, moisture has nowhere to enter. This is especially crucial in Seattle's climate 
                  where rain can come from any direction and moisture can linger for days.
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                  <li>360° protection prevents moisture infiltration</li>
                  <li>Hidden joints and crevices fully sealed</li>
                  <li>Reduced expansion and contraction cycles</li>
                  <li>Prevents mildew growth in trapped moisture areas</li>
                </ul>
              </article>

              <article className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-semibold mb-3">Extended Fence Lifespan</h3>
                <p className="text-muted-foreground mb-4">
                  Pre-stained fences typically last 25-30% longer than traditionally stained ones because there are no weak, 
                  unprotected areas where decay can start.
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                  <li>Uniform aging across all surfaces</li>
                  <li>No hidden rot developing over time</li>
                  <li>Stronger structural integrity maintained</li>
                  <li>Reduced need for individual board replacements</li>
                </ul>
              </article>

              <article className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-semibold mb-3">Superior Aesthetic Quality</h3>
                <p className="text-muted-foreground mb-4">
                  Shop-controlled application means perfect coverage and uniform color. No drips, missed spots, or 
                  weather-related application issues that can mar the appearance.
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                  <li>Professional, uniform finish quality</li>
                  <li>No spray marks or brush streaks</li>
                  <li>Consistent color throughout the fence</li>
                  <li>Weather-independent application quality</li>
                </ul>
              </article>

              <article className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-semibold mb-3">Better Value Investment</h3>
                <p className="text-muted-foreground mb-4">
                  While pre-staining adds to the initial cost, the superior protection means longer intervals between 
                  maintenance and fewer repairs over the fence's lifetime.
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                  <li>Longer time between re-staining needs</li>
                  <li>Reduced repair and replacement costs</li>
                  <li>Higher property value retention</li>
                  <li>Peace of mind from day one</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Process Comparison */}
        <section className="bg-gradient-to-r from-primary/5 to-muted/20 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Side-by-Side Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-background rounded-lg shadow-lg">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Aspect</th>
                      <th className="text-center p-4 font-semibold text-orange-600">Traditional Staining</th>
                      <th className="text-center p-4 font-semibold text-green-600">Pre-Staining</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="p-4 font-medium">Coverage</td>
                      <td className="p-4 text-center">Visible surfaces only</td>
                      <td className="p-4 text-center">Complete 360° coverage</td>
                    </tr>
                    <tr className="border-b bg-muted/20">
                      <td className="p-4 font-medium">Hidden Area Protection</td>
                      <td className="p-4 text-center text-red-600">❌ Unprotected</td>
                      <td className="p-4 text-center text-green-600">✅ Fully Protected</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Application Quality</td>
                      <td className="p-4 text-center">Weather dependent</td>
                      <td className="p-4 text-center">Controlled environment</td>
                    </tr>
                    <tr className="border-b bg-muted/20">
                      <td className="p-4 font-medium">Moisture Content</td>
                      <td className="p-4 text-center">Variable (10-25%)</td>
                      <td className="p-4 text-center">Optimal (12-15%)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Uncut Surface Protection</td>
                      <td className="p-4 text-center text-red-600">❌ Limited</td>
                      <td className="p-4 text-center text-green-600">✅ Complete</td>
                    </tr>
                    <tr className="border-b bg-muted/20">
                      <td className="p-4 font-medium">Expected Lifespan</td>
                      <td className="p-4 text-center">15-20 years</td>
                      <td className="p-4 text-center">20-25+ years</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">First Re-stain Needed</td>
                      <td className="p-4 text-center">3-4 years</td>
                      <td className="p-4 text-center">4-6 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Pre-Staining FAQ</h2>
            
            <div className="space-y-6">
              <details className="group bg-background p-6 rounded-lg shadow">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  How much does pre-staining add to the project cost?
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="mt-4 text-muted-foreground">
                  <p>Pre-staining typically adds 15-25% to the material cost, but this investment pays for itself through 
                  extended fence life and reduced maintenance needs. When you factor in the superior protection and longer 
                  intervals between re-staining, it's actually more economical long-term.</p>
                </div>
              </details>

              <details className="group bg-background p-6 rounded-lg shadow">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Does pre-staining delay the project timeline?
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="mt-4 text-muted-foreground">
                  <p>We plan for pre-staining by purchasing and processing materials well in advance. While the staining and 
                  curing process takes additional time, we coordinate this with your project schedule so there's minimal impact 
                  on your installation timeline.</p>
                </div>
              </details>

              <details className="group bg-background p-6 rounded-lg shadow">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Can I choose any stain color for pre-staining?
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="mt-4 text-muted-foreground">
                  <p>Absolutely! We work with premium stain manufacturers and can accommodate virtually any color preference. 
                  We'll provide color samples and recommendations based on your home's style and the local climate conditions.</p>
                </div>
              </details>

              <details className="group bg-background p-6 rounded-lg shadow">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  What happens if a pre-stained piece gets damaged during installation?
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="mt-4 text-muted-foreground">
                  <p>Our experienced crew takes extra care with pre-stained materials. In the rare case of damage, we keep 
                  touch-up stain on hand and can address minor scratches immediately. For major damage, we have backup 
                  pre-stained pieces ready.</p>
                </div>
              </details>

              <details className="group bg-background p-6 rounded-lg shadow">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  How does pre-staining work with different fence styles?
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="mt-4 text-muted-foreground">
                  <p>Pre-staining works excellent with all our fence styles. It's particularly beneficial for styles with 
                  tight joints like horizontal fences, lattice work, or picture frame designs where traditional staining 
                  can't reach many surfaces.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Give Your Cedar Fence the Best Start</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't compromise on protection. Pre-staining ensures your fence investment is protected from day one, 
              with complete coverage that traditional staining simply can't match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link to="/quote">Get Pre-Staining Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link to="/fence-styles">View Fence Styles</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Ask about adding pre-staining to any of our cedar fence styles during your consultation.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default PreStaining;