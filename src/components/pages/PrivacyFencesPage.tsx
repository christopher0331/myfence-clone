"use client";

import Seo from "@/components/Seo";
import { SCHEMA_ADDRESS } from "@/constants/siteConfig";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import OptimizedImage from "@/components/OptimizedImage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import boardOnBoardImg from "@/assets/fences/board-on-board-updated.png";
import { ChevronDown, HelpCircle, Shield, CheckCircle, Phone } from "lucide-react";
import { YouTubeShortsGallery } from "@/components/YouTubeShortEmbed";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";

/** Hero images pulled from each linked style/upgrade page's own hero asset. */
const privacyStyles = [
  {
    img: "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
    title: "Picture Frame Fence",
    desc: "Our most popular cedar privacy fence. Clean trim frames solid boards for a finished look on your side — the go-to backyard privacy style.",
    link: "/fence-styles/picture-frame-fence",
    badge: "Most Popular",
  },
  {
    img: "https://ik.imagekit.io/xft9mcl5v/hero-images/Modified-Full-Panel-Hero.webp",
    title: "Modified Picture Frame Fence",
    desc: "Same framed look as full picture frame with top cap and side trim — no bottom board. A more economical cedar privacy panel that many HOAs approve.",
    link: "/fence-styles/modified-picture-frame-fence",
    badge: "HOA Friendly",
  },
  {
    img: "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png",
    title: "3 Rail Picture Frame Fence",
    desc: "Picture frame privacy with a third rail and matching trim for extra rigidity and a refined craftsman profile.",
    link: "/fence-styles/3-rail-picture-frame-fence",
    badge: "Added Structure",
  },
  {
    img: "https://ik.imagekit.io/xft9mcl5v/hero-images/Shadow-Box-Hero.webp",
    title: "Shadow Box Fence",
    desc: "Alternating boards finished identically on both sides — the classic good-neighbor privacy fence that still blocks the view at normal angles.",
    link: "/fence-styles/shadow-box-fence",
    badge: "Good Neighbor",
  },
  {
    img: "/lovable-uploads/1d91d676-3b17-4347-9ea7-28027e05e373.png",
    title: "Horizontal Fence",
    desc: "Horizontal cedar boards on an external 2x4 frame with center rail support — a favorite modern privacy style.",
    link: "/fence-styles/horizontal-fence",
    badge: "Modern",
  },
  {
    img: "/lovable-uploads/76711349-f698-430f-a01f-14709e320e1b.png",
    title: "Horizontal Lattice Fence",
    desc: "Horizontal lattice screening (not solid boards) built on a craftsman foundation with 5/8-inch-thick cedar strips — privacy with airflow and a lighter look.",
    link: "/fence-styles/horizontal-lattice-fence",
    badge: "Partial Screening",
  },
  {
    img: "/lovable-uploads/ee554667-1407-47ea-a6f4-ec25700f4bcb.png",
    title: "Solid Board Fence",
    desc: "The budget-friendly cedar privacy option: solid boards, 2 rails, and stainless steel fasteners.",
    link: "/fence-styles/solid-board-fence",
    badge: "Budget",
  },
  {
    img: "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Maple-Valley/Daybreak-at-River-Ridge-Steel-Cedar-Hybrid-4.webp",
    title: "Cedar/Steel Hybrid Fence",
    desc: "26-gauge corrugated steel panels with HDP NoFade™ paint inside cedar framing for low-maintenance, solid privacy.",
    link: "/fence-styles/cedar-steel-hybrid-fence",
    badge: "Low Maintenance",
  },
];

const upgrades = [
  {
    img: boardOnBoardImg,
    title: "Board-on-Board Upgrade",
    desc: "Overlapping boards eliminate seasonal gaps for year-round privacy and a dimensional look — a favorite upgrade on picture frame builds.",
    link: "/fence-upgrades/board-on-board",
    badge: "Max Privacy",
  },
  {
    img: "/lovable-uploads/64a3d163-65f2-4ddc-a1bb-cc89381508a1.png",
    title: "Pre-Staining Finish",
    desc: "Not a fence style — a finish that protects cedar on every face before install, including spots you cannot reach after the fence is up.",
    link: "/pre-staining-cedar-fence",
    badge: "Finish Option",
  },
];

const galleryImages = [
  "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
  "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png",
  "/lovable-uploads/1d91d676-3b17-4347-9ea7-28027e05e373.png",
  "/lovable-uploads/ee554667-1407-47ea-a6f4-ec25700f4bcb.png",
  "/lovable-uploads/76711349-f698-430f-a01f-14709e320e1b.png",
  "https://ik.imagekit.io/xft9mcl5v/hero-images/Shadow-Box-Hero.webp",
];

const faqs = [
  {
    q: "What privacy fence styles does MyFence build?",
    a: "We build cedar picture frame, modified picture frame, 3-rail picture frame, shadow box (good neighbor), horizontal, solid board, and cedar/steel hybrid privacy fences. Horizontal lattice is available when you want screening with airflow rather than solid boards. Board-on-board is an upgrade for maximum privacy, and pre-staining is an optional finish — not a style.",
  },
  {
    q: "What materials do you use for privacy fences?",
    a: "MyFence specializes in cedar and cedar/steel hybrid privacy fencing. Those are the materials we build with.",
  },
  {
    q: "What is a good-neighbor privacy fence?",
    a: "A shadow box (good neighbor) fence alternates boards on both sides of the rails so each face looks finished. It still provides privacy at normal viewing angles while letting a bit of light and air through the staggered pattern.",
  },
  {
    q: "How do I get a privacy fence quote?",
    a: "Use our free quote form or virtual quote tool, or call (253) 455-1885. We serve Auburn, Kent, Federal Way, and surrounding South King County communities.",
  },
  {
    q: "Can a cedar privacy fence be pre-stained?",
    a: "Yes. Pre-staining coats every board face before installation so hidden edges and overlaps get protection on day one. Ask about adding it when you request a quote.",
  },
];

const HERO_BG = "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png";
const FATHER_SON = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";

const PrivacyFencesPage = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Fences",
        item: "https://myfence.com/privacy-fences",
      },
    ],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Privacy Fence Installation",
    provider: {
      "@type": "LocalBusiness",
      name: "MyFence.com",
      address: SCHEMA_ADDRESS,
      telephone: "+1-253-455-1885",
    },
    areaServed: {
      "@type": "City",
      name: "Seattle",
      containedInPlace: { "@type": "State", name: "Washington" },
    },
  };

  const scrollTo = (id: string) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <Seo
        title="Cedar Privacy Fence Installation | Auburn, Kent & Federal Way | MyFence"
        description="Cedar and cedar/steel hybrid privacy fences built by a local father & son team. Compare privacy styles and get a free quote. Call (253) 455-1885."
        canonical="https://myfence.com/privacy-fences"
        image={HERO_BG}
        structuredData={[breadcrumbData, faqData, serviceData]}
      />

      {/* Full-bleed hero — same pattern as /fence-genius */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/60" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-background">
              Privacy Fence Installation in Auburn &amp; South King County
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-6 md:mb-8 px-4">
              Cedar and cedar/steel hybrid privacy fences built by a local father &amp; son team —
              compare every privacy style we offer, then get a free quote.
            </p>
            <div className="flex items-center justify-center gap-2 md:gap-4 text-background/80 flex-wrap px-4 mb-8">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 rounded-full text-xs md:text-sm font-medium">
                Cedar Privacy
              </span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 rounded-full text-xs md:text-sm font-medium">
                Good Neighbor Options
              </span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 rounded-full text-xs md:text-sm font-medium">
                {WARRANTY_CONSTANTS.BADGE_TEXT}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-background bg-background text-foreground hover:bg-background hover:text-foreground focus-visible:bg-background focus-visible:text-foreground active:bg-background active:text-foreground"
              >
                <a href="tel:+12534551885">
                  <Phone className="w-4 h-4 mr-2" />
                  (253) 455-1885
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Styles grid — same Card / AspectRatio / OptimizedImage pattern as /fence-styles */}
      <section id="privacy-styles" className="container scroll-mt-24 md:scroll-mt-32 pt-10 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Fence Styles We Build</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                Jump to Section
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-50 w-56 bg-background">
              <DropdownMenuItem onSelect={() => scrollTo("privacy-styles")}>Privacy Styles</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => scrollTo("upgrades")}>Upgrades &amp; Finishes</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => scrollTo("why-us")}>Why MyFence</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => scrollTo("gallery")}>Gallery</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => scrollTo("faq")}>FAQ</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => scrollTo("quote")}>Get a Quote</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Every card links to the full style page with construction details and photos. Planning is backed by our{" "}
          <Link href="/fence-genius" className="text-primary hover:underline">
            Fence Genius technology
          </Link>
          .
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {privacyStyles.map((s) => (
            <Card
              key={s.title}
              className="overflow-hidden hover:shadow-elevated transition-shadow h-full flex flex-col group"
            >
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-2 flex-wrap">
                  <span className="group-hover:text-primary transition-colors leading-tight">{s.title}</span>
                  {s.badge ? <Badge variant="secondary">{s.badge}</Badge> : null}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <Link href={s.link} className="block cursor-pointer">
                  <AspectRatio ratio={1}>
                    <OptimizedImage
                      src={s.img}
                      alt={`${s.title} privacy fence in Seattle by MyFence.com`}
                      className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                </Link>
                <p className="text-sm text-muted-foreground mt-4">{s.desc}</p>
                <div className="mt-auto pt-4">
                  <Button asChild className="w-full text-sm whitespace-normal leading-tight justify-center py-2">
                    <Link href={s.link}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Looking for open styles (picket, ranch, hogwire)? Those are not privacy fences — see{" "}
          <Link href="/fence-styles" className="text-primary hover:underline">
            all fence styles
          </Link>
          .
        </p>
      </section>

      {/* Upgrades — same card grid language as /fence-styles add-ons */}
      <section id="upgrades" className="container py-10 border-t scroll-mt-24 md:scroll-mt-32">
        <h2 className="text-2xl font-semibold tracking-tight">Privacy Upgrades &amp; Finishes</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Pair a privacy style with an upgrade or finish when you need tighter screening or day-one protection.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {upgrades.map((a) => (
            <Card key={a.title} className="hover:shadow-elevated transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-2 flex-wrap leading-tight">
                  <span>{a.title}</span>
                  {a.badge ? <Badge variant="secondary">{a.badge}</Badge> : null}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <AspectRatio ratio={1}>
                  <OptimizedImage
                    src={a.img}
                    alt={`${a.title} for Seattle privacy fences by MyFence.com`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </AspectRatio>
                <p className="text-sm text-muted-foreground mt-4 leading-tight">{a.desc}</p>
                <div className="mt-auto pt-4">
                  <Button asChild className="w-full text-sm whitespace-normal leading-tight justify-center py-2">
                    <Link href={a.link}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust / process — ValueProps + father/son block used on style pages */}
      <section id="why-us" className="py-16 bg-muted/50 scroll-mt-24 md:scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Homeowners Choose MyFence</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Local Father &amp; Son Team</h3>
                <p className="text-muted-foreground text-sm">
                  Founded by Eric &amp; Andrew Knudsen. Zero subcontracting — skilled crews build your privacy fence
                  in-house.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fence Genius Precision</h3>
                <p className="text-muted-foreground text-sm">
                  Panels are planned with{" "}
                  <Link href="/fence-genius" className="text-primary hover:underline">
                    Fence Genius
                  </Link>{" "}
                  so grade changes and panel lengths are dialed in before we dig.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{WARRANTY_CONSTANTS.TITLE}</h3>
                <p className="text-muted-foreground text-sm">{WARRANTY_CONSTANTS.FULL_DESCRIPTION}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0 items-stretch">
                <div className="p-6 md:p-10 space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold text-sm uppercase tracking-wide">Built for the PNW</span>
                  </div>
                  <h3 className="text-2xl font-bold">Privacy that stands up to Pacific Northwest weather</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 text-primary shrink-0" />
                      Stainless steel fasteners standard to limit black streaking
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 text-primary shrink-0" />
                      Optional{" "}
                      <Link href="/pre-staining-cedar-fence" className="text-primary hover:underline">
                        pre-staining
                      </Link>{" "}
                      for day-one board protection
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 text-primary shrink-0" />
                      Optional{" "}
                      <Link href="/fence-upgrades/board-on-board" className="text-primary hover:underline">
                        board-on-board
                      </Link>{" "}
                      for year-round gap-free screening
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Family Owned</Badge>
                    <Badge variant="secondary">{WARRANTY_CONSTANTS.BADGE_TEXT}</Badge>
                    <Badge variant="secondary">Fence Genius Certified</Badge>
                  </div>
                </div>
                <div className="relative min-h-[260px]">
                  <img
                    src={FATHER_SON}
                    alt="MyFence father and son team with a completed cedar privacy fence"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Shorts gallery — same component as /fence-styles */}
      <section className="container py-10">
        <YouTubeShortsGallery
          heading="Privacy fence walkthroughs"
          description="Picture frame, board-on-board, and pre-stained privacy runs — the same construction behind the styles above."
          videos={[
            {
              videoId: "MAaTNUxiA_0",
              title: "Picture frame fence pre-stained with post on pipe",
            },
            {
              videoId: "drwdTbZL42I",
              title: "Board on board picture frame style — pre-stained",
            },
            {
              videoId: "rjdljZMsQYo",
              title: "180 Foot Three Rail Picture Frame Fence in Maple Valley",
            },
            {
              videoId: "gzAzQLdfqDA",
              title: "Pre-stained cedar fence install in Washington",
            },
          ]}
        />
      </section>

      {/* Photo gallery strip — same square grid language as /gallery */}
      <section id="gallery" className="container py-10 border-t scroll-mt-24 md:scroll-mt-32">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Privacy Fence Project Gallery</h2>
        <p className="text-muted-foreground mt-1 mb-6 max-w-2xl">
          A sample of privacy installs across the Seattle area.{" "}
          <Link href="/gallery" className="text-primary hover:underline">
            Browse the full gallery →
          </Link>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <div key={src} className="aspect-square w-full overflow-hidden rounded-lg shadow-elevated">
              <img
                src={src}
                alt={`Seattle privacy fence project ${i + 1} by MyFence.com`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — same Accordion Card pattern as style detail pages */}
      <section id="faq" className="container py-10 scroll-mt-24 md:scroll-mt-32">
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary" />
              <CardTitle className="text-3xl">Privacy Fence FAQ</CardTitle>
            </div>
            <CardDescription>Common questions about cedar privacy fencing in South King County</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i + 1}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* CTA banner — same primary Card as picture-frame style pages */}
      <section id="quote" className="container pb-10 scroll-mt-24 md:scroll-mt-32">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready for Your Privacy Fence?</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Get a free, no-obligation quote for your privacy fence project. Call{" "}
                <a href="tel:+12534551885" className="underline font-semibold">
                  (253) 455-1885
                </a>{" "}
                or start online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-primary">
                  <Link href="/quote">Get Free Quote Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <a href="tel:+12534551885">(253) 455-1885</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/service-areas">Service Areas</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-2xl mx-auto mt-10">
          <InlineQuoteForm />
        </div>
      </section>
    </>
  );
};

export default PrivacyFencesPage;
