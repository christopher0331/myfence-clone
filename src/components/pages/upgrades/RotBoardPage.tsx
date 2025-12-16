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
    <main>
      <Seo
        title="2x4 Rot Board Fence Upgrade | Prevent Cedar Rot | Seattle"
        description="Protect your Seattle fence with a pressure-treated 2x4 rot board. Near-zero ground clearance, prevents cedar rot from soil contact, and deters digging dogs."
        canonical="https://myfence.com/fence-upgrades/rot-board"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="container py-12 md:py-16">
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

      {/* Benefits */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose a Rot Board?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["Near-Zero Ground Clearance", "Protects Cedar from Soil", "Extended Fence Longevity", "Dog-Friendly Solution"].map(
              (title, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {i === 0 && "Get your fence much closer to the ground for a tighter fit without worrying about cedar rot."}
                      {i === 1 && "Cedar should never be in contact with soil — the rot board takes all the soil contact, protecting your investment."}
                      {i === 2 && "Keeping cedar away from moisture and soil extends fence life; the rot board can be replaced later if needed."}
                      {i === 3 && "Bringing the fence closer to ground helps deter digging while protecting the fence from damage."}
                    </p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
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
    </main>
  );
};

export default RotBoardPage;
