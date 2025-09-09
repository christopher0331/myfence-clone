import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, Clock, Thermometer, Droplets } from "lucide-react";
import Seo from "@/components/Seo";
import OptimizedImage from "@/components/OptimizedImage";

const HowToStainFence = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Do I Stain My Fence?",
    "description": "Complete guide to fence staining in Seattle - brushing vs spraying techniques, best practices, and step-by-step instructions for lasting results.",
    "author": {
      "@type": "Organization",
      "name": "Seattle Fence Company"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Seattle Fence Company"
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://seattlefence.com/blog/how-to-stain-fence"
    }
  };

  return (
    <>
      <Seo
        title="How Do I Stain My Fence? Complete Seattle Staining Guide | Best Techniques"
        description="Complete guide to fence staining in Seattle - brushing vs spraying techniques, best practices, and step-by-step instructions for lasting results."
        canonical="https://seattlefence.com/blog/how-to-stain-fence"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link to="/blog" className="text-primary hover:underline">
                ← Back to Blog
              </Link>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Maintenance Guide
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  How Do I Stain My Fence?
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Master fence staining with our comprehensive guide covering techniques, timing, and best practices for Seattle's unique climate.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    10 min read
                  </span>
                  <span>January 2025</span>
                </div>
              </div>
              <div>
                <OptimizedImage
                  src="/lovable-uploads/44503efa-b853-47c1-8bd9-52b13e55fbd1.png"
                  alt="Professional fence staining in progress"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Choosing the Right Stain for Seattle's Climate</h2>
            <p>
              Seattle's wet winters and dry summers demand a high-quality stain that can withstand moisture and UV exposure. Semi-transparent stains offer the best balance of protection and natural wood appearance, while solid stains provide maximum protection for older or weathered fences.
            </p>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Recommended Stain Types for Seattle</h3>
                <ul className="space-y-2">
                  <li><strong>Semi-transparent:</strong> Shows wood grain, moderate protection (2-4 years)</li>
                  <li><strong>Semi-solid:</strong> Some grain visible, good protection (3-5 years)</li>
                  <li><strong>Solid stain:</strong> Opaque coverage, maximum protection (4-6 years)</li>
                </ul>
              </CardContent>
            </Card>

            <h2>Weather Considerations for Seattle Fence Staining</h2>
            <p>
              Timing is crucial for successful fence staining in the Pacific Northwest. Ideal conditions include:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <Thermometer className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <h4 className="font-semibold">Temperature</h4>
                  <p className="text-sm">50-85°F</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-semibold">Humidity</h4>
                  <p className="text-sm">Below 70%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <h4 className="font-semibold">Best Months</h4>
                  <p className="text-sm">May - September</p>
                </CardContent>
              </Card>
            </div>

            <h2>Brushing vs Spraying: Complete Comparison</h2>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Brushing Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Advantages
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Deeper stain penetration</li>
                        <li>• Works stain into wood grain</li>
                        <li>• Longer-lasting results (6-8 years)</li>
                        <li>• Better coverage on rough surfaces</li>
                        <li>• More control over application</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                        <X className="w-4 h-4" />
                        Disadvantages
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Time-intensive process</li>
                        <li>• More physical effort required</li>
                        <li>• Potential for brush marks</li>
                        <li>• Difficult on tall fences</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Spraying Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Advantages
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Fast application</li>
                        <li>• Even coating distribution</li>
                        <li>• Good for large projects</li>
                        <li>• Reaches high/difficult areas</li>
                        <li>• Professional appearance</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                        <X className="w-4 h-4" />
                        Disadvantages
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Shorter lifespan (3-5 years)</li>
                        <li>• Surface application only</li>
                        <li>• Overspray concerns</li>
                        <li>• Equipment requirements</li>
                        <li>• Wind sensitivity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="my-8 bg-blue-50 dark:bg-blue-950/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Professional Recommendation</h3>
                <p>
                  For maximum longevity in Seattle's climate, we recommend brushing for the first coat (deep penetration) followed by a light spray application for even coverage. This hybrid approach combines the benefits of both methods.
                </p>
              </CardContent>
            </Card>

            <h2>Tools and Materials Needed</h2>

            <h3>Essential Equipment</h3>
            <ul>
              <li><strong>Brushes:</strong> 4-inch natural bristle brush for boards, 2-inch for detail work</li>
              <li><strong>Sprayer:</strong> Airless sprayer or pump sprayer for spray method</li>
              <li><strong>Rollers:</strong> 3/8-inch nap roller for smooth application</li>
              <li><strong>Drop cloths:</strong> Protect plants and surfaces</li>
              <li><strong>Safety gear:</strong> Gloves, eye protection, respirator</li>
            </ul>

            <h3>Material Calculations</h3>
            <p>
              <strong>Coverage rates (per gallon):</strong>
            </p>
            <ul>
              <li>Smooth surfaces: 250-350 sq ft</li>
              <li>Rough/textured surfaces: 150-250 sq ft</li>
              <li>First-time staining: 100-200 sq ft</li>
            </ul>

            <h2>Step-by-Step Staining Process</h2>

            <h3>Preparation (Critical Step)</h3>
            <ol>
              <li><strong>Clean the fence thoroughly</strong> (see our fence cleaning guide)</li>
              <li><strong>Allow 48-72 hours drying time</strong> after cleaning</li>
              <li><strong>Check weather forecast</strong> - need 24-48 hours of dry weather</li>
              <li><strong>Cover plants and surfaces</strong> with drop cloths</li>
              <li><strong>Sand rough areas</strong> with 80-120 grit sandpaper if needed</li>
            </ol>

            <h3>Application Process</h3>
            <ol>
              <li><strong>Stir stain thoroughly</strong> - mix periodically during use</li>
              <li><strong>Start from top</strong> and work down to avoid drip marks</li>
              <li><strong>Work in manageable sections</strong> (3-4 fence panels at a time)</li>
              <li><strong>Apply thin, even coats</strong> - avoid heavy application</li>
              <li><strong>Maintain wet edge</strong> to prevent lap marks</li>
              <li><strong>Back-brush spray applications</strong> for better penetration</li>
            </ol>

            <h3>Drying and Curing</h3>
            <ul>
              <li><strong>Touch dry:</strong> 2-4 hours (surface dry to touch)</li>
              <li><strong>Recoat time:</strong> 4-6 hours between coats</li>
              <li><strong>Full cure:</strong> 24-48 hours (weather dependent)</li>
              <li><strong>Avoid foot traffic:</strong> Until fully cured</li>
            </ul>

            <h2>Common Mistakes to Avoid</h2>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-red-600">Top 5 Staining Mistakes</h3>
                <ol className="space-y-3">
                  <li><strong>1. Staining wet or dirty wood</strong> - Always ensure surface is clean and dry</li>
                  <li><strong>2. Ignoring weather conditions</strong> - Humidity and rain will ruin your project</li>
                  <li><strong>3. Applying too thick</strong> - Multiple thin coats outperform one thick coat</li>
                  <li><strong>4. Not maintaining wet edge</strong> - Creates visible lap marks</li>
                  <li><strong>5. Rushing the process</strong> - Proper preparation prevents poor performance</li>
                </ol>
              </CardContent>
            </Card>

            <h2>Maintenance Schedule for Seattle Fences</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Brushed Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>Initial stain:</strong> Lasts 6-8 years</li>
                    <li><strong>Maintenance coat:</strong> Every 6-8 years</li>
                    <li><strong>Annual inspection:</strong> Check for wear spots</li>
                    <li><strong>Touch-ups:</strong> As needed for high-wear areas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sprayed Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>Initial stain:</strong> Lasts 3-5 years</li>
                    <li><strong>Maintenance coat:</strong> Every 3-5 years</li>
                    <li><strong>Annual inspection:</strong> Check for fading/wear</li>
                    <li><strong>Touch-ups:</strong> More frequent than brushed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>When to Call Professionals</h2>
            <p>Consider hiring professionals for fence staining when:</p>
            <ul>
              <li>Fence height exceeds comfortable reach (over 6 feet)</li>
              <li>Large fence area (over 200 linear feet)</li>
              <li>Complex fence design with many angles/details</li>
              <li>Time constraints or physical limitations</li>
              <li>Warranty requirements for commercial properties</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Successful fence staining in Seattle requires attention to weather conditions, proper preparation, and choosing the right application method for your needs. While brushing provides longer-lasting results, spraying offers efficiency for larger projects. Regardless of method, proper preparation and quality materials are essential for protecting your fence investment in the Pacific Northwest climate.
            </p>

            {/* CTA Section */}
            <div className="mt-12 p-6 bg-muted rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Need Professional Fence Staining?</h3>
              <p className="mb-4 text-muted-foreground">
                Get expert staining services with guaranteed results in Seattle
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/quote">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/blog/fence-cleaning-staining">Read Cleaning Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToStainFence;