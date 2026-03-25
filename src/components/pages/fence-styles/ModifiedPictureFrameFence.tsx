"use client";

import Seo from "@/components/Seo";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import PaymentCalculator from "@/components/PaymentCalculator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import {
  getCityPhotosBySlug,
  buildImageUrl,
  buildResponsiveSrcSet,
} from "@/lib/serviceAreaPhotoUtils";

const bothellPhotos = getCityPhotosBySlug("bothell");
const heroPhoto = bothellPhotos[0];
const heroImg = heroPhoto
  ? buildImageUrl(heroPhoto.file, 1200)
  : "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png";

const fatherSonImg = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";

const ModifiedPictureFrameFence = () => {
  const canonical =
    "https://myfence.com/fence-styles/modified-picture-frame-fence";

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Modified Picture Frame Fence Installation",
    serviceType: "Fence Installation",
    provider: {
      "@type": "Organization",
      name: "MyFence.com",
      url: "https://myfence.com",
      telephone: "+1-253-455-1885",
    },
    areaServed: [
      { "@type": "Place", name: "Seattle, WA" },
      { "@type": "Place", name: "Bothell, WA" },
      { "@type": "Place", name: "Bellevue, WA" },
      { "@type": "Place", name: "Kirkland, WA" },
      { "@type": "Place", name: "Redmond, WA" },
      { "@type": "Place", name: "Sammamish, WA" },
      { "@type": "Place", name: "Issaquah, WA" },
      { "@type": "Place", name: "Shoreline, WA" },
      { "@type": "Place", name: "Renton, WA" },
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
        name: "What is a modified picture frame fence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A modified picture frame fence uses top trim and side trim to frame each panel but omits the bottom trim board. This leaves the bottom picket ends exposed and fasteners visible at the base, reducing material cost while keeping a polished top and sides.",
        },
      },
      {
        "@type": "Question",
        name: "Why do HOAs sometimes require modified picture frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some HOAs specify a modified picture frame style because it provides a neat, framed appearance at eye level and from the street while keeping costs down. Associations that manage large numbers of homes often standardize on this look as a balance between aesthetics and affordability.",
        },
      },
      {
        "@type": "Question",
        name: "Why are stainless steel fasteners so important for this style?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because the bottom of the fence has exposed fasteners with no covering trim, any corrosion runs directly down the face of the pickets and stains the wood with dark streaks that are very visible. Stainless steel fasteners resist corrosion and keep the finished fence looking clean for years.",
        },
      },
      {
        "@type": "Question",
        name: "Is modified picture frame cheaper than standard picture frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Removing the bottom trim board reduces material and labor, making it a more economical choice while still delivering a framed look at the top and sides where visual impact matters most.",
        },
      },
    ],
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Modified Picture Frame Fence",
    description:
      "Cedar modified picture frame fence with top and side trim but no bottom board. HOA-friendly, economical, stainless steel fasteners required.",
    image: `https://myfence.com${heroImg}`,
    brand: { "@type": "Brand", name: "MyFence.com" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "44",
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

  const structuredData = [
    serviceStructuredData,
    faqStructuredData,
    productStructuredData,
    {
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
          name: "Modified Picture Frame Fence",
          item: canonical,
        },
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Modified Picture Frame Fence | HOA-Approved | MyFence.com"
        description="Cedar modified picture frame fence — top and side trim, no bottom board. HOA-approved, more economical than full picture frame. Stainless steel fasteners standard. Free quotes."
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
                Modified Picture Frame Fence
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
                  Modified Picture Frame Fence
                </h1>
                <p className="mt-3 text-muted-foreground max-w-prose">
                  The modified picture frame fence keeps the framed look where
                  it counts — top cap and side trim — while omitting the bottom
                  trim board. Less material means a lower price point, and the
                  clean top profile satisfies most HOA requirements. Because the
                  bottom fasteners are exposed, stainless steel hardware is
                  non-negotiable to keep the cedar looking sharp for years.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">HOA-Approved Style</Badge>
                  <Badge variant="secondary">More Economical</Badge>
                  <Badge variant="secondary">Stainless Steel Fasteners</Badge>
                </div>
              </div>
              <div>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={heroImg}
                    srcSet={heroPhoto ? buildResponsiveSrcSet(heroPhoto.file, 1200) : undefined}
                    sizes="(max-width: 768px) 100vw, 600px"
                    alt={heroPhoto?.cityAlt ?? "Modified picture frame cedar fence in Bothell by MyFence.com"}
                    loading="eager"
                    className="h-full w-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </header>

            {/* Fastener alert */}
            <section className="mt-6 max-w-6xl mx-auto">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Stainless Steel Fasteners Are Essential</AlertTitle>
                <AlertDescription>
                  With no bottom trim to conceal the base, any corroding
                  fastener will streak dark rust stains straight down the face
                  of the pickets. We always use stainless steel fasteners on
                  this style — it's the only way to keep the fence looking clean
                  long-term.
                </AlertDescription>
              </Alert>
            </section>

            <section className="mt-10 space-y-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                {/* Why homeowners and HOAs choose it */}
                <Card className="p-6 md:p-8 glass-card">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Why homeowners and HOAs choose modified picture frame
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                    <li>
                      Framed cap and side trim deliver the polished look where
                      it's most visible — the top and sides of each panel.
                    </li>
                    <li>
                      Omitting the bottom trim board reduces material cost,
                      making it a smart choice for longer fence runs.
                    </li>
                    <li>
                      Commonly specified by HOAs that want a consistent, tidy
                      appearance without the full picture frame premium.
                    </li>
                    <li>
                      Cedar construction holds up well in Pacific Northwest
                      weather when fasteners are properly specified.
                    </li>
                    <li>
                      Fence Genius planning ensures consistent top line,
                      accurate rail spacing, and clean gate alignment across
                      every panel.
                    </li>
                  </ul>
                </Card>

                <Separator />

                {/* How we build it */}
                <Card className="p-6 md:p-8 glass-card">
                  <h3 className="text-xl font-semibold tracking-tight">
                    How we build modified picture frame fence (our standard)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                    <li>
                      Two or three 2x4 cedar rails screwed directly into posts
                      for strength.
                    </li>
                    <li>
                      #1 grade cedar pickets face-nailed or screwed to rails.
                    </li>
                    <li>
                      Top 2x4 cap board spans the full run for a clean, finished
                      top edge.
                    </li>
                    <li>
                      Side trim boards on each post face to frame the panels
                      left and right.
                    </li>
                    <li>
                      <strong>No bottom trim board</strong> — picket ends sit
                      above grade with exposed fasteners at the base.
                    </li>
                    <li>
                      <strong>Stainless steel fasteners throughout</strong> —
                      mandatory for this style to prevent visible corrosion
                      streaking down exposed picket ends.
                    </li>
                    <li>
                      Standard posts: 4.125" × 4.125" × 9' set ~2' deep with
                      ~180 lbs of properly mixed concrete.
                    </li>
                  </ul>
                  <p className="text-muted-foreground max-w-prose mt-3">
                    Use our Virtual Quote Tool below for an instant estimate
                    based on your exact fence run.
                  </p>
                </Card>

                {/* First 2 gallery images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bothellPhotos.slice(1, 3).map((photo) => (
                    <AspectRatio key={photo.file} ratio={4 / 3}>
                      <img
                        src={buildImageUrl(photo.file, 800)}
                        srcSet={buildResponsiveSrcSet(photo.file, 800)}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        alt={photo.cityAlt ?? "Modified picture frame fence installation in Bothell"}
                        loading="lazy"
                        className="h-full w-full rounded-md object-cover"
                      />
                    </AspectRatio>
                  ))}
                </div>

                {/* Video + comparison side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Video */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      See the Bothell Installation
                    </h3>
                    <AspectRatio ratio={16 / 9}>
                      <iframe
                        className="rounded-lg shadow-2xl w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/-j5ghYESllU?playsinline=1&rel=0&modestbranding=1&vq=hd1080"
                        title="Modified Picture Frame Fence Installation in Bothell"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </AspectRatio>
                    <p className="text-sm text-muted-foreground mt-2">
                      A recent modified picture frame install in Bothell, WA —
                      no bottom trim, exposed fasteners at the base, stainless
                      steel hardware throughout.
                    </p>
                  </div>

                  {/* How it differs from standard picture frame */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Modified vs. standard picture frame
                    </h3>
                    <Card className="p-4">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead>Feature</TableHead>
                            <TableHead>Standard</TableHead>
                            <TableHead>Modified</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              Top cap
                            </TableCell>
                            <TableCell>Yes</TableCell>
                            <TableCell>Yes</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Side trim
                            </TableCell>
                            <TableCell>Yes</TableCell>
                            <TableCell>Yes</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Bottom trim
                            </TableCell>
                            <TableCell>Yes</TableCell>
                            <TableCell className="text-muted-foreground">
                              No
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Exposed fasteners at base
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              No
                            </TableCell>
                            <TableCell>Yes</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Stainless steel required
                            </TableCell>
                            <TableCell>Recommended</TableCell>
                            <TableCell className="font-semibold">
                              Essential
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Relative cost
                            </TableCell>
                            <TableCell>Higher</TableCell>
                            <TableCell>Lower</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              HOA-approved
                            </TableCell>
                            <TableCell>Common</TableCell>
                            <TableCell>Common</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Card>
                  </div>
                </div>

                {/* Full gallery */}
                <section className="mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">
                      Modified Picture Frame Fence Gallery
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Recent installations showing the clean cap-and-side-trim
                      profile that makes this style stand out from a simple
                      solid board fence.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bothellPhotos.map((photo, index) => (
                      <div
                        key={photo.file}
                        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <img
                          src={buildImageUrl(photo.file, 800)}
                          srcSet={buildResponsiveSrcSet(photo.file, 800)}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          alt={photo.cityAlt ?? `Modified picture frame fence installation in Bothell ${index + 1}`}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white text-sm font-medium">
                              {photo.cityAlt ?? "Modified picture frame fence in Bothell"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Key specs */}
                <section
                  aria-labelledby="key-specs-heading"
                  className="space-y-3"
                >
                  <h2
                    id="key-specs-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Key specs
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="p-4 md:p-6">
                      <div className="md:overflow-x-auto overflow-x-visible">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="md:w-[200px]">
                                Spec
                              </TableHead>
                              <TableHead>Standard</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                Posts
                              </TableCell>
                              <TableCell>
                                4.125" × 4.125" × 9' set ~2' deep with ~180 lbs
                                properly mixed concrete
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Rails
                              </TableCell>
                              <TableCell>
                                Two or three 2×4 rails screwed into posts
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Pickets
                              </TableCell>
                              <TableCell>
                                #1 grade cedar (clear cedar upgrade available)
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Top cap
                              </TableCell>
                              <TableCell>2×4 cedar cap board</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Side trim
                              </TableCell>
                              <TableCell>
                                Trim boards on each post face
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bottom trim
                              </TableCell>
                              <TableCell>
                                None — picket ends exposed at grade
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Fasteners
                              </TableCell>
                              <TableCell>
                                Stainless steel — required for this style
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Heights
                              </TableCell>
                              <TableCell>Available: 4', 5', 6'</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Gates
                              </TableCell>
                              <TableCell>
                                Matching single/double gates; heavy-duty
                                hardware
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </Card>

                    <Card className="p-4 md:p-6">
                      <h3 className="text-xl font-semibold tracking-tight text-center">
                        Options & upgrades
                      </h3>
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center">
                        <Card className="w-full">
                          <div className="p-3 text-center text-sm text-muted-foreground">
                            Clear cedar boards for a cleaner grain
                          </div>
                        </Card>
                        <Card className="w-full">
                          <div className="p-3 text-center text-sm text-muted-foreground">
                            4" exterior screws instead of nails for superior
                            hold
                          </div>
                        </Card>
                        <Card className="w-full">
                          <div className="p-3 text-center text-sm text-muted-foreground">
                            Rot board at base to keep pickets off soil
                          </div>
                        </Card>
                        <Card className="w-full">
                          <div className="p-3 text-center text-sm text-muted-foreground">
                            6×6 post upgrades for maximum longevity
                          </div>
                        </Card>
                        <Card className="w-full">
                          <div className="p-3 text-center text-sm text-muted-foreground">
                            Steel core post-on-pipe system
                          </div>
                        </Card>
                        <Card className="w-full">
                          <div className="p-3 text-center text-sm text-muted-foreground">
                            Pre-staining for consistent protection
                          </div>
                        </Card>
                      </div>
                    </Card>
                  </div>
                </section>

                {/* Fence Genius */}
                <section
                  aria-labelledby="fence-genius-heading"
                  className="space-y-3"
                >
                  <h3
                    id="fence-genius-heading"
                    className="text-xl font-semibold tracking-tight"
                  >
                    Fence Genius planning for modified picture frame
                  </h3>
                  <div className="rounded-lg border bg-card p-4">
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        Fence Genius software models the entire fence run before
                        a single board is cut — post spacing, rail lengths, trim,
                        and gate openings are all calculated upfront.
                      </li>
                      <li>
                        Materials arrive on-site prefabricated to spec, so
                        installation is clean and fast with no guesswork in
                        the field.
                      </li>
                      <li>
                        The top cap line is modeled to follow your terrain
                        consistently, so every panel tracks the grade the same way.
                      </li>
                      <li>
                        Gate hardware and clearances are confirmed in the plan
                        before anything is ordered or installed.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* FAQ */}
                <section
                  aria-labelledby="faq-heading"
                  className="space-y-3"
                >
                  <h2
                    id="faq-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Modified Picture Frame Fence FAQs
                  </h2>
                  <div className="rounded-lg border bg-card p-4">
                    <details>
                      <summary className="cursor-pointer font-medium">
                        Does the missing bottom trim affect structural integrity?
                      </summary>
                      <p className="mt-2 text-muted-foreground">
                        No. The rails and posts carry all the structural load.
                        The bottom trim on a standard picture frame is purely
                        cosmetic and protective — removing it has no effect on
                        strength.
                      </p>
                    </details>
                    <details className="mt-3">
                      <summary className="cursor-pointer font-medium">
                        Can I add a rot board instead of a bottom trim?
                      </summary>
                      <p className="mt-2 text-muted-foreground">
                        Yes — a rot board sits directly at grade and keeps picket
                        ends out of soil contact. It functions differently from
                        decorative bottom trim and pairs well with the modified
                        style.
                      </p>
                    </details>
                    <details className="mt-3">
                      <summary className="cursor-pointer font-medium">
                        My HOA requires this style — do you build to spec?
                      </summary>
                      <p className="mt-2 text-muted-foreground">
                        Yes. If your HOA has documented guidelines, share them
                        with us when requesting your quote and we'll confirm
                        compliance before we build.
                      </p>
                    </details>
                    <details className="mt-3">
                      <summary className="cursor-pointer font-medium">
                        How do I get a price?
                      </summary>
                      <p className="mt-2 text-muted-foreground">
                        Use our Virtual Quote Tool below for an instant estimate,
                        or submit the form and we'll follow up quickly.
                      </p>
                    </details>
                  </div>
                </section>

                {/* Related styles */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Related fence styles
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                      <Link href="/fence-styles/picture-frame-fence">
                        Picture Frame Fence (full trim)
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/fence-styles/3-rail-picture-frame-fence">
                        3-Rail Picture Frame Fence
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/fence-styles/solid-board-fence">
                        Solid Board Fence
                      </Link>
                    </Button>
                  </div>
                </section>

                {/* Virtual Quote Tool */}
                <VirtualQuoteTool fenceStyleName="Modified Picture Frame Fence" />

                <section className="mt-6">
                  <InlineQuoteForm context="Modified Picture Frame Fence page" />
                </section>
              </div>
            </section>

            {/* About MyFence.com */}
            <section aria-labelledby="about-heading" className="py-12">
              <div className="container">
                <div className="mx-auto max-w-6xl">
                  <h2
                    id="about-heading"
                    className="text-2xl font-semibold tracking-tight text-center"
                  >
                    About MyFence.com
                  </h2>
                  <div className="mt-4 grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-muted-foreground max-w-prose mx-auto md:mx-0">
                        We're a father &amp; son team serving the Seattle
                        area — licensed, insured, and backed by a{" "}
                        {WARRANTY_CONSTANTS.INLINE_TEXT}. Powered by Fence
                        Genius for precise planning.
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                        <Button asChild>
                          <Link
                            href="/quote"
                            aria-label="Start your modified picture frame fence quote"
                          >
                            Start Your Quote
                          </Link>
                        </Button>
                        <Button asChild variant="secondary">
                          <Link
                            href="/contact"
                            aria-label="Contact MyFence.com"
                          >
                            Contact Us
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden ring-2 ring-primary/60 shadow-glow">
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={fatherSonImg}
                          alt="Father and son team from MyFence.com standing by a cedar fence"
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Finance Calculator */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Flexible Financing Options
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Make your Modified Picture Frame Fence project more
                    affordable with our financing options.
                  </p>
                </div>
                <PaymentCalculator />
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default ModifiedPictureFrameFence;
