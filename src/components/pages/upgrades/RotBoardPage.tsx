"use client";

import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";

const RotBoardPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "2x4 Rot Board Fence Installation",
    description:
      "Pressure-treated 2x4 rot board installation for Seattle fences. Near-zero ground clearance without exposing cedar to soil.",
    provider: {
      "@type": "LocalBusiness",
      name: "MyFence.com",
      address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
      telephone: "+1-253-455-1885",
    },
    areaServed: { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
  } as const;

  return (
    <>
      <Seo
        title="2x4 Rot Board Fence Upgrade | Prevent Cedar Rot | Seattle"
        description="Protect your Seattle fence with a pressure-treated 2x4 rot board. Near-zero ground clearance, prevents cedar rot from soil contact, and deters digging dogs."
        canonical="https://myfence.com/fence-upgrades/rot-board"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="container pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">2x4 Rot Board Upgrade</h1>
          <p className="text-xl text-muted-foreground">Protect your fence with a pressure-treated sacrificial board for near-zero ground clearance</p>
        </div>
      </section>

      {/* What is a Rot Board */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What is a Rot Board?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A rot board is a pressure-treated 2x4 installed at the bottom of your fence, creating a sacrificial barrier between the ground and your cedar fence boards. This
                allows us to bring your fence much closer to the ground without risking damage to the cedar portion of your fence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We coined the name "rot board" because this pressure-treated lumber is specifically designed to take the abuse from soil contact — something cedar should
                never be exposed to, as it dramatically accelerates rot.
              </p>
              <div className="aspect-video w-full max-w-2xl mx-auto mt-6">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/pro_XLVrkqk"
                  title="Rot Board Installation Explanation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center gap-2 mt-6">
                <ExternalLink className="w-4 h-4" />
                <a
                  href="https://youtube.com/shorts/pro_XLVrkqk?feature=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Watch on YouTube
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose a Rot Board?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Near-Zero Ground Clearance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get your fence much closer to the ground for a tighter fit without worrying about cedar rot.
                  Perfect for properties with dogs or where privacy at ground level is important.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Protects Cedar from Soil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cedar should never be in contact with soil — it accelerates rot significantly. The pressure-treated
                  rot board takes all the soil contact, protecting your investment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Extended Fence Longevity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By keeping cedar away from moisture and soil, your fence will last significantly longer.
                  The rot board is designed to be replaced if needed, preserving the main fence structure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Dog-Friendly Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Have dogs that like to dig? The rot board adds utility by bringing the fence closer to the ground,
                  making it harder for pets to dig underneath while protecting the fence from damage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Considerations */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Important to Know</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                While the rot board significantly reduces ground gaps, it doesn't guarantee zero gaps everywhere along your fence line.
                Ground terrain naturally varies, and some areas may require soil adjustment to achieve the tightest possible fit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team will work with your property's unique contours to minimize gaps as much as possible, but perfect ground-to-fence
                contact along the entire fence line may not always be achievable due to natural terrain variations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How We Install Rot Boards</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pressure-Treated Lumber Selection</h3>
                  <p className="text-muted-foreground">
                    We use high-quality pressure-treated 2x4 lumber specifically rated for ground contact,
                    ensuring maximum durability against moisture and soil.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Strategic Placement</h3>
                  <p className="text-muted-foreground">
                    The rot board is installed at the base of your fence, positioned to maximize ground coverage
                    while keeping all cedar components safely elevated from soil contact.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Secure Fastening</h3>
                  <p className="text-muted-foreground">
                    We securely fasten the rot board to your fence structure using corrosion-resistant fasteners,
                    ensuring it stays in place for years to come.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Terrain Assessment</h3>
                  <p className="text-muted-foreground">
                    Our team evaluates your ground conditions and may recommend minor soil adjustments
                    to optimize ground clearance across your property.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Add a Rot Board to Your Fence?</h2>
          <p className="text-lg text-muted-foreground">Contact us today to learn more about adding this valuable upgrade to your fence project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/fence-styles">Explore Other Fence Styles</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RotBoardPage;
