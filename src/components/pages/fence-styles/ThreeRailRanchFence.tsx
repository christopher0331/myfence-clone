"use client";

import Seo from "@/components/Seo";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import PaymentCalculator from "@/components/PaymentCalculator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  Mountain,
  Wind,
  ShieldCheck,
} from "lucide-react";
import {
  getCityPhotosBySlug,
  buildImageUrl,
  buildResponsiveSrcSet,
} from "@/lib/serviceAreaPhotoUtils";

// Pull only the Kent 3-Rail Fence photos out of the broader Kent set so the
// Wynaco steel-post installs don't end up on this style page.
const threeRailRanchPhotos = getCityPhotosBySlug("kent").filter((photo) =>
  photo.file.includes("3-Rail-Fence")
);

// The landscape shot (1920x1080) is the best fit for the side-by-side hero;
// the two portrait shots work better in the gallery below.
const heroPhoto =
  threeRailRanchPhotos.find((photo) => photo.file.endsWith("Kent-3-Rail-Fence-2.webp")) ??
  threeRailRanchPhotos[0];
const heroImg = heroPhoto
  ? buildImageUrl(heroPhoto.file, 1200)
  : "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Kent/Kent-3-Rail-Fence-2.webp";

const galleryPhotos = threeRailRanchPhotos.filter(
  (photo) => photo.file !== heroPhoto?.file
);

const ThreeRailRanchFence = () => {
  const canonical = "https://myfence.com/fence-styles/3-rail-ranch-fence";

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "3-Rail Ranch Fence Installation",
    serviceType: "Fence Installation",
    provider: {
      "@type": "Organization",
      name: "MyFence.com",
      url: "https://myfence.com",
      telephone: "+1-253-455-1885",
    },
    areaServed: [
      { "@type": "Place", name: "Kent, WA" },
      { "@type": "Place", name: "Maple Valley, WA" },
      { "@type": "Place", name: "Covington, WA" },
      { "@type": "Place", name: "Renton, WA" },
      { "@type": "Place", name: "Auburn, WA" },
      { "@type": "Place", name: "Bonney Lake, WA" },
      { "@type": "Place", name: "Black Diamond, WA" },
      { "@type": "Place", name: "Enumclaw, WA" },
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
        name: "What is a 3-rail ranch fence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 3-rail ranch fence — sometimes called a post-and-rail or split-rail fence — is an open-style fence built from heavy cedar posts with three horizontal cedar rails running between them. There are no pickets or vertical boards, so the fence reads as a clean boundary line without blocking sightlines, light, or wind.",
        },
      },
      {
        "@type": "Question",
        name: "What is a 3-rail ranch fence used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ranch-style 3-rail fences are most commonly used to define property lines, frame driveways, mark pasture boundaries, and add architectural interest to front yards and large lots. They are decorative and territorial rather than secure — they do not provide privacy and won't contain small pets unless wire mesh is added.",
        },
      },
      {
        "@type": "Question",
        name: "Does a 3-rail fence give privacy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The 3-rail ranch fence is intentionally open, with full sightlines between the rails. If privacy is the goal, a solid board, shadow box, or picture frame fence is the right choice. Many homeowners pair a 3-rail fence with landscaping or hedging to soften the openness while keeping the timber look.",
        },
      },
      {
        "@type": "Question",
        name: "Can you add wire mesh to a 3-rail fence to contain pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Welded wire or galvanized field fence can be stapled to the inside face of the rails to contain dogs, small livestock, or chickens while preserving the timber appearance from the outside. We size mesh openings based on what you're keeping in (or out).",
        },
      },
      {
        "@type": "Question",
        name: "How long does a cedar 3-rail fence last in the Pacific Northwest?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A properly built cedar ranch fence typically lasts 15–25 years in Pacific Northwest conditions, with the posts being the limiting factor. Because the rails sit above grade with airflow on both sides, they dry quickly after rain and avoid the rot patterns that shorten the life of solid-wall fences.",
        },
      },
    ],
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "3-Rail Ranch Cedar Fence",
    description:
      "Cedar 3-rail ranch fence — heavy cedar posts with three horizontal cedar rails. Open, post-and-rail style for property lines, driveways, and large lots. No pickets.",
    image: heroImg,
    brand: { "@type": "Brand", name: "MyFence.com" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "32",
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
        name: "3-Rail Ranch Fence",
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
        title="3-Rail Ranch Fence Installation | Cedar Post-and-Rail | MyFence.com"
        description="Cedar 3-rail ranch fence installation in the Seattle area. Heavy cedar posts with three horizontal rails — clean, open boundary fencing for driveways, property lines, and large lots. Free quotes. (253) 455-1885."
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
                3-Rail Ranch Fence
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
                  3-Rail Ranch Fence
                </h1>
                <p className="mt-3 text-muted-foreground max-w-prose">
                  The 3-rail ranch fence — also known as post-and-rail or
                  split-rail — uses heavy cedar posts with three horizontal
                  cedar rails between them. It&apos;s an open, intentional
                  boundary that frames a driveway or property line without
                  blocking views, light, or wind. A classic Northwest look
                  with very little material between you and the landscape.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">Open Style</Badge>
                  <Badge variant="secondary">Heavy Cedar Posts</Badge>
                  <Badge variant="secondary">Driveways &amp; Perimeters</Badge>
                  <Badge variant="secondary">Add Wire Mesh Optional</Badge>
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
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={heroImg}
                    srcSet={
                      heroPhoto
                        ? buildResponsiveSrcSet(heroPhoto.file, 1200)
                        : undefined
                    }
                    sizes="(max-width: 768px) 100vw, 600px"
                    alt={
                      heroPhoto?.cityAlt ??
                      "Cedar 3-rail ranch fence installation in Kent, WA by MyFence.com"
                    }
                    loading="eager"
                    className="h-full w-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </header>

            <section className="mt-10 space-y-8 max-w-6xl mx-auto">
              {/* Why homeowners choose 3-rail ranch */}
              <Card className="p-6 md:p-8 glass-card">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Why homeowners choose a 3-rail ranch fence
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="flex gap-3">
                    <Eye className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Open sightlines, intentional boundary
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        The fence reads as a clear property line without
                        walling off the view. Ideal for front yards,
                        driveways, and large lots where you want a defined
                        edge without losing the landscape behind it.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Wind className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Lets wind, light, and snow pass through
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Open rails don&apos;t catch wind like a solid panel,
                        so they hold up in exposed locations and don&apos;t
                        drift snow against the fence the way a privacy
                        fence will.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mountain className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Handles sloped and uneven terrain well
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Rails step or rack with the grade between posts, so
                        a 3-rail line looks intentional on slopes that
                        would force ugly stair-stepping on a picket-style
                        fence.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Long-lived with minimal upkeep
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Less material means less surface area to fail.
                        Cedar posts and rails with proper footings and
                        stainless steel hardware routinely deliver 15–25
                        years of service in Pacific Northwest weather.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Separator />

              {/* How we build it */}
              <Card className="p-6 md:p-8 glass-card">
                <h3 className="text-xl font-semibold tracking-tight">
                  How we build 3-rail ranch fences (our standard)
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>
                    Heavy cedar posts — typically 4&quot; x 6&quot; or
                    6&quot; x 6&quot; — set ~2&apos; deep with ~180 lbs of
                    properly mixed concrete and gravel drainage beneath
                    each footing.
                  </li>
                  <li>
                    Rounded cedar post caps standard for a clean finished
                    top that sheds water.
                  </li>
                  <li>
                    Three 2x6 cedar rails (rough sawn or surfaced) attached
                    to the inside face of the posts with structural screws
                    or lag bolts — no nails.
                  </li>
                  <li>
                    Even rail spacing top-to-bottom so the fence reads as
                    intentional along the entire run.
                  </li>
                  <li>
                    Stainless steel or hot-dipped galvanized fasteners
                    throughout to prevent rust streaking down the cedar.
                  </li>
                  <li>
                    Rails racked or stepped across slopes so the fence
                    follows grade cleanly without awkward gaps under the
                    bottom rail.
                  </li>
                  <li>
                    Optional welded-wire or field-fence backing stapled to
                    the inside face when you need pet, livestock, or
                    poultry containment.
                  </li>
                  <li>
                    Pre-stained cedar where requested so the finish is
                    sealed before the rails are installed.
                  </li>
                </ul>
                <p className="text-muted-foreground max-w-prose mt-3">
                  Use our Virtual Quote Tool below for an instant estimate
                  on your specific run.
                </p>
              </Card>

              {/* Gallery (Kent installs) */}
              {galleryPhotos.length > 0 && (
                <section>
                  <h3 className="text-xl font-semibold tracking-tight mb-3">
                    Recent 3-rail ranch installations
                  </h3>
                  <p className="text-muted-foreground max-w-prose mb-4">
                    A recent ranch-fence installation in Kent, WA — three
                    cedar rails between heavy posts with rounded caps,
                    framing a driveway and property edge.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {galleryPhotos.map((photo) => (
                      <AspectRatio key={photo.file} ratio={3 / 4}>
                        <img
                          src={buildImageUrl(photo.file, 800)}
                          srcSet={buildResponsiveSrcSet(photo.file, 800)}
                          sizes="(max-width: 640px) 100vw, 50vw"
                          alt={
                            photo.cityAlt ??
                            "Cedar 3-rail ranch fence by MyFence.com"
                          }
                          loading="lazy"
                          className="h-full w-full rounded-md object-cover"
                        />
                      </AspectRatio>
                    ))}
                  </div>
                </section>
              )}

              {/* When to choose 3-rail ranch vs other styles */}
              <Card className="p-6 md:p-8 glass-card">
                <h3 className="text-xl font-semibold tracking-tight">
                  When 3-rail ranch is the right choice
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Choose 3-rail ranch when:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground text-sm">
                      <li>
                        You want to define a property line, driveway, or
                        pasture edge without walling off the view.
                      </li>
                      <li>
                        Your lot is large and a privacy fence would feel
                        oppressive or wall-like at the perimeter.
                      </li>
                      <li>
                        The fence runs across noticeable grade changes
                        that would look awkward with stair-stepped picket
                        panels.
                      </li>
                      <li>
                        You want a classic Northwest / ranch aesthetic
                        with heavy cedar timbers and rounded caps.
                      </li>
                      <li>
                        You need optional pet or livestock containment
                        (we add wire mesh to the inside of the rails).
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Choose a different style when:</h4>
                    <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground text-sm">
                      <li>
                        You need privacy — see our{" "}
                        <Link
                          href="/fence-styles/picture-frame-fence"
                          className="text-primary hover:underline"
                        >
                          Picture Frame
                        </Link>
                        ,{" "}
                        <Link
                          href="/fence-styles/shadow-box-fence"
                          className="text-primary hover:underline"
                        >
                          Shadow Box
                        </Link>
                        , or{" "}
                        <Link
                          href="/fence-styles/solid-board-fence"
                          className="text-primary hover:underline"
                        >
                          Solid Board
                        </Link>{" "}
                        styles.
                      </li>
                      <li>
                        You want a refined, architectural picture frame
                        look with three rails — see our{" "}
                        <Link
                          href="/fence-styles/3-rail-picture-frame-fence"
                          className="text-primary hover:underline"
                        >
                          3 Rail Picture Frame Fence
                        </Link>
                        .
                      </li>
                      <li>
                        You need secure containment for medium or large
                        dogs without a wire backing — a picket or hogwire
                        style is a better fit.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Pricing */}
              <Card className="p-6 md:p-8 glass-card">
                <h3 className="text-xl font-semibold tracking-tight">
                  3-rail ranch fence pricing
                </h3>
                <p className="text-muted-foreground mt-3">
                  Cedar 3-rail ranch installations typically range from{" "}
                  <strong className="text-foreground">
                    $28–$45 per linear foot
                  </strong>
                  {" "}depending on post size, rail dimensions, and site
                  conditions. Because there are no pickets and less total
                  material than a privacy fence, ranch fence is one of the
                  most cost-effective ways to fence a long perimeter or
                  driveway. Adding welded-wire backing for pet or
                  livestock containment is an inexpensive upgrade.
                </p>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/quote">Get an exact quote</Link>
                  </Button>
                </div>
              </Card>

              {/* FAQ */}
              <Card className="p-6 md:p-8 glass-card">
                <h3 className="text-xl font-semibold tracking-tight">
                  Frequently asked questions
                </h3>
                <div className="space-y-5 mt-4">
                  <div>
                    <h4 className="font-semibold mb-1">
                      What is a 3-rail ranch fence?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      An open-style fence built from heavy cedar posts with
                      three horizontal cedar rails between them. No
                      pickets — the fence reads as a clean boundary
                      without blocking sightlines, light, or wind.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      What is it used for?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Property lines, driveway frames, pasture edges, and
                      architectural front-yard boundaries on large lots.
                      Decorative and territorial rather than secure — it
                      doesn&apos;t provide privacy or pet containment on
                      its own.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Can I add wire mesh for pets or livestock?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Yes. Welded-wire or galvanized field fence can be
                      stapled to the inside face of the rails to contain
                      dogs, small livestock, or poultry while preserving
                      the timber look from the outside.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      How does it handle slopes?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Very well. Rails rack or step between posts to
                      follow grade cleanly, so the fence looks intentional
                      on terrain that would force awkward stair-stepping
                      on a picket fence.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      How long does it last in the Pacific Northwest?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      A properly built cedar ranch fence typically lasts
                      15–25 years, with the posts being the limiting
                      factor. Rails sit above grade with airflow on both
                      sides, so they dry quickly after rain.
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
                  Make your 3-rail ranch fence project more affordable
                  with our financing options. Calculate your monthly
                  payment and see how easy it is to get started.
                </p>
              </div>
              <PaymentCalculator />
            </div>
          </section>

          {/* Virtual Quote Tool */}
          <VirtualQuoteTool fenceStyleName="3-Rail Ranch Fence" />

          {/* Inline Quote Form */}
          <div className="max-w-2xl mx-auto">
            <InlineQuoteForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeRailRanchFence;
