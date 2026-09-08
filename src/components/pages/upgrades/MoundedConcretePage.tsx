"use client";

import Seo from "@/components/Seo";
import { SCHEMA_ADDRESS } from "@/constants/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import OptimizedImage from "@/components/OptimizedImage";
import Link from "next/link";
import { Check } from "lucide-react";

const HERO = "/images/upgrades/mounded-concrete/hero-line.png";

const gallery = [
  {
    src: "/images/upgrades/mounded-concrete/close-1.png",
    alt: "Close-up of a domed, above-grade concrete footing around a pressure-treated fence post",
  },
  {
    src: "/images/upgrades/mounded-concrete/close-3.png",
    alt: "Mounded concrete footing with a smooth troweled dome shedding away from the post",
  },
  {
    src: "/images/upgrades/mounded-concrete/line-2.png",
    alt: "Cedar privacy fence with exposed mounded concrete footings along the post line",
  },
  {
    src: "/images/upgrades/mounded-concrete/close-2.png",
    alt: "Raised concrete mound keeping the fence post above surrounding soil",
  },
  {
    src: "/images/upgrades/mounded-concrete/line-3.png",
    alt: "Long run of cedar fence posts set in above-grade domed concrete",
  },
  {
    src: "/images/upgrades/mounded-concrete/close-4.png",
    alt: "Detail of an exposed concrete footing shaped to drain water away from the wood post",
  },
];

const MoundedConcretePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mounded Concrete Fence Footings",
    description:
      "Optional fence upgrade that raises concrete above grade with an exposed, domed footing so water runs away from the post base.",
    provider: {
      "@type": "LocalBusiness",
      name: "MyFence.com",
      address: SCHEMA_ADDRESS,
      telephone: "+1-253-455-1885",
    },
    areaServed: { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
    image: HERO,
  } as const;

  return (
    <>
      <Seo
        title="Mounded Concrete Fence Footings | Raised & Domed Posts"
        description="Raise fence post concrete above grade with an exposed, domed footing so water sheds away from the post. A Pacific Northwest upgrade to help mitigate rot."
        canonical="https://myfence.com/fence-upgrades/mounded-concrete"
        structuredData={structuredData}
      />

      <section className="container pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-3">Fence Upgrade</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Mounded Concrete</h1>
          <p className="text-xl text-muted-foreground">
            Raise the footing above grade and dome the top so water runs away from the post — not into it.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-8 overflow-hidden rounded-xl">
          <AspectRatio ratio={4 / 3}>
            <OptimizedImage
              src={HERO}
              alt="Cedar fence with exposed mounded concrete footings raised above grade"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </AspectRatio>
        </div>
      </section>

      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What is mounded concrete?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Most fence posts are set in concrete that gets finished flush with the dirt — or worse, slightly
                cupped so rain sits against the wood. In the Pacific Northwest, that standing moisture at grade is
                where posts start to rot.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The <strong>mounded concrete</strong> upgrade raises the footing{" "}
                <strong>above grade</strong> so you can see an exposed concrete collar around the post. Then we
                trowel a <strong>domed top</strong> that sheds water away from the wood instead of letting it pool.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The goal is simple: keep soil and standing water off the post at ground level, which can help
                mitigate rot and potentially prolong the life of the post. It is not a magic shield — posts still
                need proper depth, drainage, and treated lumber — but it is one of the most useful details we can
                add in a wet climate.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Mounded Concrete?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Raised above grade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The footing sits higher than the surrounding soil, so dirt, mulch, and splashback are less likely
                  to bury the post and trap moisture against the wood.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Domed to shed water
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A flat or concave pour becomes a birdbath. A crown on the concrete sends rain away from the post
                  instead of holding it at the wood-to-concrete joint.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Built for PNW rain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seattle-area clay, moss, and months of wet weather are hard on posts. An exposed, shaped footing
                  is a small extra step that matches how water actually behaves here.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  Easy to inspect later
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Because the collar stays visible, you can see the post-to-concrete connection during walk-throughs
                  and years later — instead of guessing what is happening under a pile of soil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How we shape the footing</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Set the post as usual</h3>
                  <p className="text-muted-foreground">
                    Posts still go to the depth the job needs, with gravel drainage at the bottom of the hole when
                    site conditions call for it.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Bring concrete above grade</h3>
                  <p className="text-muted-foreground">
                    Instead of hiding the pour under dirt, we leave an exposed collar so the wood is not sitting in
                    a soil bowl at ground level.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Dome the top</h3>
                  <p className="text-muted-foreground">
                    While the mix is workable, we trowel a rounded crown that slopes away from the post on all
                    sides. That is the detail that keeps water from pooling.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Keep soil and mulch back</h3>
                  <p className="text-muted-foreground">
                    After install, landscaping should not be piled against the mound. Burying a good footing undoes
                    the water-shedding shape.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">On the job</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((photo) => (
              <div key={photo.src} className="overflow-hidden rounded-lg bg-muted">
                <AspectRatio ratio={4 / 3}>
                  <OptimizedImage
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">What this upgrade does not do</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Mounded concrete helps at the ground line. It does not replace pressure-treated posts, proper hole
                depth, or keeping fence boards off the soil. For extra protection at the bottom of the panels, see
                our{" "}
                <Link href="/fence-upgrades/rot-board" className="text-primary hover:underline font-medium">
                  2x4 rot board
                </Link>
                . For a steel core that keeps wood out of the ground entirely, see{" "}
                <Link href="/fence-upgrades/post-on-pipe" className="text-primary hover:underline font-medium">
                  Post on Pipe
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Will this stop my posts from ever rotting?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No upgrade can promise that. A domed, above-grade footing is designed to keep water from sitting
                  against the post, which helps mitigate rot. Soil, grade, and landscaping still matter over time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I add this to an existing fence?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This is built with new post setting. On a replacement or new install we can mound every footing.
                  Retrofitting already-buried posts is a different conversation — ask us when you request a quote.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Does the concrete stay visible?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes. That is the point. You will see a gray collar at each post. If you later add landscaping,
                  keep mulch and soil from burying the mound so it can still shed water.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Add mounded concrete to your fence</h2>
          <p className="text-lg text-muted-foreground">
            Ask for this upgrade on your next quote. We will confirm it fits your grade, soil, and post layout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/fence-styles#add-on-options">See Other Upgrades</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/fence-upgrades/rot-board" className="text-primary hover:underline font-medium">
              Rot Board →
            </Link>
            <Link href="/fence-upgrades/post-on-pipe" className="text-primary hover:underline font-medium">
              Post on Pipe →
            </Link>
            <Link href="/fence-upgrades/soil-haul-away" className="text-primary hover:underline font-medium">
              Soil Haul-Away →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoundedConcretePage;
