"use client";

import Seo from "@/components/Seo";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import PaymentCalculator from "@/components/PaymentCalculator";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Layers, Eye, Wind, ShieldCheck } from "lucide-react";
import {
  getNeighborhoodPhotosBySlugs,
  buildImageUrl,
  buildResponsiveSrcSet,
} from "@/lib/serviceAreaPhotoUtils";

const shadowBoxPhotos = getNeighborhoodPhotosBySlugs(
  "maple-valley",
  "maple-woods"
);
// Hand-picked hero so the top-of-page image is independent of JSON ordering.
const HERO_FILE_SUFFIX = "Maple-Woods-Shadow-Box-Fence-8.webp";
const heroPhoto =
  shadowBoxPhotos.find((photo) => photo.file.endsWith(HERO_FILE_SUFFIX)) ??
  shadowBoxPhotos[0];
const heroImg = heroPhoto
  ? buildImageUrl(heroPhoto.file, 1200)
  : "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png";

// Hand-picked pair for the top gallery row so the two shots aren't visually
// redundant. Both files are confirmed landscape (1920x1440) in the manifest.
const FEATURED_GALLERY_FILE_SUFFIXES = [
  "Maple-Woods-Shadow-Box-Fence-2.webp",
  "Maple-Woods-Shadow-Box-Fence-5.webp",
] as const;

const featuredGalleryPair = FEATURED_GALLERY_FILE_SUFFIXES.map((suffix) =>
  shadowBoxPhotos.find((photo) => photo.file.endsWith(suffix))
).filter((photo): photo is (typeof shadowBoxPhotos)[number] => Boolean(photo));

const featuredGalleryFileSet = new Set(featuredGalleryPair.map((p) => p.file));

const remainingShadowBoxPhotos = shadowBoxPhotos.filter(
  (photo) =>
    photo.file !== heroPhoto?.file && !featuredGalleryFileSet.has(photo.file)
);

const ShadowBoxFence = () => {
  const canonical = "https://myfence.com/fence-styles/shadow-box-fence";

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Shadow Box Fence Installation",
    serviceType: "Fence Installation",
    provider: {
      "@type": "Organization",
      name: "MyFence.com",
      url: "https://myfence.com",
      telephone: "+1-253-455-1885",
    },
    areaServed: [
      { "@type": "Place", name: "Maple Valley, WA" },
      { "@type": "Place", name: "Kent, WA" },
      { "@type": "Place", name: "Renton, WA" },
      { "@type": "Place", name: "Covington, WA" },
      { "@type": "Place", name: "Bellevue, WA" },
      { "@type": "Place", name: "Issaquah, WA" },
      { "@type": "Place", name: "Sammamish, WA" },
      { "@type": "Place", name: "Bonney Lake, WA" },
      { "@type": "Place", name: "Bothell, WA" },
    ],
    image: [heroImg],
    brand: { "@type": "Brand", name: "Fence Genius" },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a shadow box fence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A shadow box fence — sometimes called a 'good neighbor' fence — alternates vertical cedar boards on opposite sides of the horizontal rails. Each board overlaps the gap between the boards on the other side, so both faces of the fence look identical and finished, with subtle airflow passing through the staggered pattern.",
        },
      },
      {
        "@type": "Question",
        name: "Is a shadow box fence more expensive than a solid board fence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, slightly. A shadow box fence uses more cedar than a solid board fence of the same length because boards alternate on both sides of the rails — you're paying for a finished appearance on both faces. Expect roughly $44–$64 per linear foot for cedar shadow box installations.",
        },
      },
      {
        "@type": "Question",
        name: "Does a shadow box fence provide privacy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mostly, yes. When viewed straight on, a shadow box fence blocks the line of sight because the boards on the opposite side cover the gaps. At a sharp angle you can catch a small amount of visibility through the alternating gaps, which also lets air pass through — a benefit on tight lots between homes where solid board fences can feel oppressive.",
        },
      },
      {
        "@type": "Question",
        name: "Why is it called a 'good neighbor' fence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most privacy fences have a 'good side' (the smooth face of the boards) and a 'bad side' (the rails and posts). Deciding which neighbor gets the good side can be a sensitive conversation. Shadow box construction eliminates the problem entirely because each face is identical — there's no front or back. That's why it's commonly recommended for shared property lines.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a shadow box fence last in the Pacific Northwest?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A properly installed cedar shadow box fence typically lasts 15–25 years in Pacific Northwest conditions. The alternating board layout actually helps longevity because airflow between panels dries the cedar faster after rain, slowing the rot that accelerates on solid board fences with limited drying.",
        },
      },
    ],
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Shadow Box Cedar Fence",
    description:
      "Cedar shadow box fence with alternating vertical boards on both sides of the horizontal rails. Identical finished appearance from either yard, with airflow between staggered boards. Ideal for shared property lines.",
    image: heroImg,
    brand: { "@type": "Brand", name: "MyFence.com" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "48",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: canonical,
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
          addressRegion: "WA",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "7",
            maxValue: "14",
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnNotPermitted",
        merchantReturnDays: "0",
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://myfence.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fence Styles",
        item: "https://myfence.com/fence-styles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Shadow Box Fence",
        item: canonical,
      },
    ],
  };

  const structuredData = [
    serviceStructuredData,
    faqStructuredData,
    productStructuredData,
    breadcrumbStructuredData,
  ];

  return (
    <>
      <Seo
        title="Shadow Box Fence Installation | Good Neighbor Cedar Fence | MyFence.com"
        description="Cedar shadow box fence installation in the Seattle area. Alternating boards finished identically on both sides — the 'good neighbor' fence. Free quotes. (253) 455-1885."
        canonical={canonical}
        image={heroImg}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <nav className="bg-background pt-4 pb-2 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link
                href="/fence-styles"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Fence Styles
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">
                Shadow Box Fence
              </span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 pt-4 md:pt-28 pb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/fence-styles" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Fence Styles
            </Link>
          </Button>

          <article className="pt-2 md:pt-4 pb-10">
            {/* Hero */}
            <header className="grid gap-6 md:grid-cols-2 md:items-center max-w-6xl mx-auto">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">
                  Shadow Box Fence
                </h1>
                <p className="mt-3 text-muted-foreground max-w-prose">
                  The shadow box fence — also called a &ldquo;good
                  neighbor&rdquo; fence — alternates cedar boards on opposite
                  sides of the horizontal rails. Each side of the fence looks
                  identical and finished, eliminating the
                  &ldquo;good-side / bad-side&rdquo; conversation on shared
                  property lines while letting subtle airflow pass through
                  the staggered panels.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">Good Neighbor Fence</Badge>
                  <Badge variant="secondary">Identical Both Sides</Badge>
                  <Badge variant="secondary">Cedar Construction</Badge>
                  <Badge variant="secondary">Airflow Between Boards</Badge>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg">
                    <Link href="/quote">Get Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div>
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={heroImg}
                    srcSet={
                      heroPhoto
                        ? buildResponsiveSrcSet(heroPhoto.file, 1200)
                        : undefined
                    }
                    sizes="(max-width: 768px) 100vw, 600px"
                    alt={
                      heroPhoto?.neighborhoodAlt ??
                      heroPhoto?.cityAlt ??
                      "Cedar shadow box fence installation in Maple Woods, Maple Valley, WA by MyFence.com"
                    }
                    loading="eager"
                    className="h-full w-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </header>

            {/* Ambient B-roll — autoplays muted and loops as a non-interactive
                moving picture. Lazy-loaded facade keeps the iframe (~1.3 MB of
                YouTube player JS) out of the initial page load. */}
            <section
              aria-label="Shadow box fence in motion"
              className="mt-8 max-w-6xl mx-auto"
            >
              <LiteYouTubeEmbed
                videoId="V5wDdtIWEX0"
                title="Shadow box cedar fence — B-roll showing the alternating board pattern in motion"
                ambient
                className="shadow-lg"
              />
            </section>

            <section className="mt-10 space-y-8 max-w-6xl mx-auto">
              {/* Why homeowners choose shadow box */}
              <Card className="p-6 md:p-8 glass-card">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Why homeowners choose a shadow box fence
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="flex gap-3">
                    <Eye className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Finished both sides
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Each face of the fence looks identical. No
                        rails-visible &ldquo;bad side,&rdquo; so the fence
                        reads as intentional from either yard.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Wind className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Airflow between panels
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Staggered boards let air pass through. Helpful on
                        tight lots where a solid wall would block breeze
                        and dry-out cycles.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Layers className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Strong privacy at normal viewing angles
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Boards on the opposite side cover the gaps when
                        viewed straight on. Privacy holds across most
                        sightlines, with a small angled view by design.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Better drying = longer life
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Airflow between staggered boards dries the cedar
                        faster after Pacific Northwest rain, slowing the
                        rot that accelerates on solid-wall fences.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Separator />

              {/* How we build it */}
              <Card className="p-6 md:p-8 glass-card">
                <h3 className="text-xl font-semibold tracking-tight">
                  How we build shadow box fences (our standard)
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>
                    Two or three 2x4 cedar rails screwed directly into
                    posts for strength and consistent board alignment.
                  </li>
                  <li>
                    #1 grade cedar pickets alternated on both sides of the
                    rails — each board overlaps the gap on the opposite
                    side for visual privacy.
                  </li>
                  <li>
                    Board reveal calibrated so the staggered pattern reads
                    consistently down the entire run.
                  </li>
                  <li>
                    Pre-stained cedar where requested, so the finish is
                    sealed before panels go in the ground.
                  </li>
                  <li>
                    Stainless steel or hot-dipped galvanized fasteners
                    throughout to prevent rust streaking down the cedar.
                  </li>
                  <li>
                    Standard posts: 4.125&quot; x 4.125&quot; x 9&apos;
                    set ~2&apos; deep with ~180 lbs of properly mixed
                    concrete and gravel drainage beneath each footing.
                  </li>
                  <li>
                    Optional top cap available — a 2x4 finished cap board
                    spanning the run protects exposed end grain at the
                    top of the boards.
                  </li>
                </ul>
                <p className="text-muted-foreground max-w-prose mt-3">
                  Use our Virtual Quote Tool below for an instant estimate
                  on your specific run.
                </p>
              </Card>

              {/* Gallery (featured pair) */}
              {featuredGalleryPair.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featuredGalleryPair.map((photo) => (
                    <AspectRatio key={photo.file} ratio={4 / 3}>
                      <img
                        src={buildImageUrl(photo.file, 800)}
                        srcSet={buildResponsiveSrcSet(photo.file, 800)}
                        sizes="(max-width: 640px) 100vw, 400px"
                        alt={
                          photo.neighborhoodAlt ??
                          photo.cityAlt ??
                          "Cedar shadow box fence by MyFence.com"
                        }
                        loading="lazy"
                        className="h-full w-full rounded-md object-cover"
                      />
                    </AspectRatio>
                  ))}
                </div>
              )}

              {/* Shadow box vs. solid board comparison */}
              <Card className="p-6 md:p-8 glass-card">
                <h3 className="text-xl font-semibold tracking-tight">
                  Shadow box vs. solid board: which is right for you?
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Choose shadow box when:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground text-sm">
                      <li>
                        Your fence runs along a shared property line and
                        both yards see the fence daily.
                      </li>
                      <li>
                        You want airflow between panels — useful on
                        narrow side-yards or close-set homes.
                      </li>
                      <li>
                        Neighbor relations matter and you&apos;d rather
                        skip the &ldquo;which side gets the good side&rdquo;
                        conversation.
                      </li>
                      <li>
                        You want a fence that reads as a higher-quality
                        installation from every angle.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Choose solid board when:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground text-sm">
                      <li>
                        Maximum privacy is the priority and angled
                        sightlines are unacceptable.
                      </li>
                      <li>
                        Budget is the deciding factor — solid board uses
                        less cedar per foot.
                      </li>
                      <li>
                        The fence backs onto a greenbelt, alley, or
                        common space where the &ldquo;back&rdquo; face
                        won&apos;t be seen by a neighbor.
                      </li>
                      <li>
                        Wind blocking is desired (solid wall blocks more
                        air movement than staggered boards).
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  See our{" "}
                  <Link
                    href="/fence-styles/solid-board-fence"
                    className="text-primary hover:underline"
                  >
                    Solid Board Fence
                  </Link>{" "}
                  page for direct comparison, or our{" "}
                  <Link
                    href="/fence-styles/picture-frame-fence"
                    className="text-primary hover:underline"
                  >
                    Picture Frame Fence
                  </Link>{" "}
                  for a step up in finished appearance.
                </p>
              </Card>

              {/* Video: shadow box style up close */}
              <Card className="p-6 md:p-8 glass-card">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight">
                      See the shadow box style up close
                    </h3>
                    <p className="text-muted-foreground mt-3 max-w-prose">
                      A quick look at the alternating cedar boards that
                      give the shadow box fence its name. Notice how
                      each board overlaps the gap on the opposite side
                      — that staggered layout is what creates the
                      identical, finished appearance from either yard
                      while still letting a hint of light and airflow
                      pass through the panels.
                    </p>
                    <p className="text-muted-foreground mt-3 max-w-prose text-sm">
                      Want this same look along your property line?{" "}
                      <Link
                        href="/quote"
                        className="text-primary hover:underline"
                      >
                        Get a free shadow box quote
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="w-full max-w-xs md:w-64 md:flex-shrink-0 md:self-center mx-auto md:mx-0">
                    <AspectRatio ratio={9 / 16}>
                      <iframe
                        src="https://www.youtube.com/embed/r__y1k-bHUc"
                        title="Shadow box cedar fence — close-up look at the alternating board pattern"
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full rounded-md border-0"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </Card>

              {/* Pricing */}
              <Card className="p-6 md:p-8 glass-card">
                <h3 className="text-xl font-semibold tracking-tight">
                  Shadow box fence pricing
                </h3>
                <p className="text-muted-foreground mt-3">
                  Cedar shadow box installations typically range from{" "}
                  <strong className="text-foreground">
                    $44–$64 per linear foot
                  </strong>{" "}
                  for a six-foot fence. Shadow box uses slightly more
                  cedar than a comparable solid board fence because
                  boards alternate on both sides of the rails — you&apos;re
                  paying for the finished-both-sides appearance. Custom
                  gates, longer runs, sloped lots, and tight access
                  conditions affect the exact quote.
                </p>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/quote">Get an exact quote</Link>
                  </Button>
                </div>
              </Card>

              {/* Gallery (rest) */}
              {remainingShadowBoxPhotos.length > 0 && (
                <section>
                  <h3 className="text-xl font-semibold tracking-tight mb-4">
                    Recent shadow box installations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {remainingShadowBoxPhotos.map((photo) => (
                      <AspectRatio key={photo.file} ratio={4 / 3}>
                        <img
                          src={buildImageUrl(photo.file, 800)}
                          srcSet={buildResponsiveSrcSet(photo.file, 800)}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          alt={
                            photo.neighborhoodAlt ??
                            photo.cityAlt ??
                            "Cedar shadow box fence by MyFence.com"
                          }
                          loading="lazy"
                          className="h-full w-full rounded-md object-cover"
                        />
                      </AspectRatio>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              <Card className="p-6 md:p-8 glass-card">
                <h3 className="text-xl font-semibold tracking-tight">
                  Frequently asked questions
                </h3>
                <div className="space-y-5 mt-4">
                  <div>
                    <h4 className="font-semibold mb-1">
                      What is a shadow box fence?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      A shadow box fence alternates cedar boards on
                      opposite sides of the horizontal rails. Each board
                      overlaps the gap between the boards on the other
                      side, so both faces of the fence look identical
                      with subtle airflow passing through the staggered
                      pattern.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Why is it called a &ldquo;good neighbor&rdquo;
                      fence?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Most privacy fences have a smooth &ldquo;good
                      side&rdquo; and a rail-and-post &ldquo;bad
                      side.&rdquo; Shadow box construction eliminates
                      that distinction — each face is identical, so
                      there&apos;s no front or back to negotiate with
                      your neighbor.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Does it provide full privacy?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Mostly. Viewed straight on, the boards on the
                      opposite side cover the gaps. At a sharp angle
                      you can catch limited visibility through the
                      staggered gaps — by design — which also allows
                      airflow.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      How long does it last in the Pacific Northwest?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      A properly installed cedar shadow box fence
                      typically lasts 15–25 years. Airflow between the
                      alternating boards actually helps longevity by
                      drying the cedar faster after rain.
                    </p>
                  </div>
                </div>
              </Card>
            </section>
          </article>

          {/* Finance Calculator */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Flexible financing options
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Make your shadow box fence project more affordable
                  with our financing options. Calculate your monthly
                  payment and see how easy it is to get started.
                </p>
              </div>
              <PaymentCalculator />
            </div>
          </section>

          {/* Virtual Quote Tool */}
          <VirtualQuoteTool fenceStyleName="Shadow Box Fence" />

          {/* Inline Quote Form */}
          <div className="max-w-2xl mx-auto">
            <InlineQuoteForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShadowBoxFence;
