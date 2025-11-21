import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, DollarSign } from "lucide-react";

const SoilHaulAway = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Soil Haul-Away Service for Fence Installation",
    "description": "Professional soil and excavation debris removal service for Seattle fence installations. Keep your property clean during fence post excavation.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "MyFence.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Seattle",
        "addressRegion": "WA",
        "addressCountry": "US"
      },
      "telephone": "+1-253-455-1885"
    },
    "areaServed": {
      "@type": "City",
      "name": "Seattle",
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    }
  };

  return (
    <main>
      <Seo
        title="Soil Haul-Away Service | Fence Installation Cleanup | Seattle"
        description="Professional soil removal service for Seattle fence installations. Keep your property clean with our excavation debris haul-away service. Learn about costs and benefits."
        canonical="https://myfence.com/fence-upgrades/soil-haul-away"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Soil Haul-Away Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Keep your property clean during fence installation with professional excavation debris removal
          </p>
        </div>
      </section>

      {/* What is Soil Haul-Away */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What is Soil Haul-Away?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                During the excavation process of digging for each fence post, we are going at minimum 2 feet in the ground, 
                and generally about 10 inches wide. All of that dirt and rock comes up and has to go somewhere.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Many homeowners choose to have us roughly rake the excavated soil along the fence run so grass can grow back 
                on top of it. This is our standard approach and is included in the base installation cost, as it saves both time and expense.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                However, if you have landscaped areas, gardens, or simply prefer not to have the added debris along your fence line, 
                you may want to consider our soil haul-away service.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Process */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How Soil Haul-Away Works</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Excavation</h3>
                  <p className="text-muted-foreground">
                    As we dig each fence post hole (minimum 2 feet deep, approximately 10 inches wide), all excavated 
                    soil, dirt, and rock is carefully set aside.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Collection</h3>
                  <p className="text-muted-foreground">
                    Instead of spreading the debris along your fence line, we bucket out all of the dirt and rock, 
                    transporting it to our trailer in a clean and organized manner.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Disposal</h3>
                  <p className="text-muted-foreground">
                    We haul all excavated material to the dump, leaving your property clean and ready for landscaping 
                    or your preferred ground cover along the fence line.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Benefits of Soil Haul-Away</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Clean Property
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Keep your landscaping, gardens, and lawn areas pristine without mounds of excavated soil 
                  disrupting the aesthetic of your property.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Protect Landscaping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have plants, flowers, or decorative elements near your fence line, removing the soil 
                  prevents unwanted debris from covering or damaging your existing landscaping.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Easier Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Without piles of rocky soil along your fence, mowing, trimming, and general yard maintenance 
                  becomes significantly easier and more efficient.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Ready for Your Plans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you plan to install a new lawn, garden, or hardscaping along your fence line, 
                  starting with a clean slate makes your next project easier.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Information */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-primary" />
                Cost Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Soil haul-away is an added service to our standard fence installation process. Because it requires additional 
                time for collection, loading, transportation, and disposal fees, there is an additional cost.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For the average residential fence project, soil haul-away generally adds approximately <strong>$500</strong> to 
                the total cost. This fee covers labor for bucketing and loading the excavated material, transportation to the 
                dump, and disposal fees.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The exact cost may vary based on the size of your fence project, the amount of material excavated, and 
                accessibility of your property. We'll provide a specific quote for your project during the estimate process.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Real Project Examples */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold mb-6">Real Project Examples</h2>
          
          {/* Example 1: Soil Hauled Away */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Soil Hauled Away - River Rock Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src="/lovable-uploads/soil-haul-away-river-rock.png"
                alt="Soil haul-away service protecting river rock landscaping during fence installation"
                className="w-full rounded-lg"
              />
              <p className="text-muted-foreground leading-relaxed">
                This customer had a fresh river rock bed installed along their fence line before we began the fence project. 
                Obviously, they didn't want excavated soil covering their new decorative rock, so we bucketed out all the 
                excavation debris and disposed of it at the dump.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result: a beautiful craftsman-style fence with pristine river rock landscaping underneath—exactly as 
                the homeowner envisioned. This is a perfect example of when soil haul-away service protects your investment 
                in landscaping.
              </p>
            </CardContent>
          </Card>

          {/* Example 2: Soil Left */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Soil Left - Standard Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src="/lovable-uploads/fence-soil-debris.jpg"
                alt="Excavated soil roughly raked along fence line allowing grass regrowth"
                className="w-full rounded-lg"
              />
              <p className="text-muted-foreground leading-relaxed">
                This project shows our standard approach where excavated soil is roughly raked along the fence line. 
                The soil you see along the base of the fence is from the post hole excavation, distributed evenly 
                to allow grass to naturally grow back over time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This method is included in the base installation cost and works perfectly for properties without existing 
                landscaping along the fence line. Many homeowners prefer this approach as it's cost-effective and the 
                grass typically fills in within a growing season.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* When to Consider */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">When to Consider Soil Haul-Away</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    You have existing landscaping, gardens, or decorative elements along your fence line
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    You plan to install new landscaping or hardscaping after fence installation
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    You prefer a completely clean property finish without soil mounds
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Your property has limited space to spread excavated material
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    You want to maintain a pristine appearance during and after installation
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Need Soil Haul-Away for Your Project?</h2>
          <p className="text-lg text-muted-foreground">
            Contact us today to add soil haul-away service to your fence installation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/fence-styles">Explore Fence Styles</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SoilHaulAway;
