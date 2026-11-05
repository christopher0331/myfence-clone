import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import ArticleToc from "@/components/neighborhoods/ArticleToc";
import type { StaticImageData } from "next/image";
import boardOnBoardImg from "@/assets/fences/board-on-board-updated.png";

const TITLE =
  "Cedar Privacy Fence Installation | Auburn, Kent & Federal Way | MyFence";
const DESCRIPTION =
  "Cedar and cedar/steel hybrid privacy fences built by a local father & son team. Compare privacy styles and get a free quote. Call (253) 455-1885.";
const URL = "https://myfence.com/privacy-fences";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MyFence",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

type PrivacyCard = {
  href: string;
  name: string;
  body: string;
  badge?: string;
  img: string | StaticImageData;
  imgAlt: string;
  supporting?: boolean;
};

const privacyStyles: PrivacyCard[] = [
  {
    href: "/fence-styles/picture-frame-fence",
    name: "Picture Frame Fence",
    badge: "Most Popular",
    body: "Our most popular cedar privacy fence. Clean trim frames solid boards for a finished look on your side — the go-to backyard privacy style.",
    img: "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
    imgAlt: "Picture frame cedar privacy fence with trim details",
  },
  {
    href: "/fence-styles/modified-picture-frame-fence",
    name: "Modified Picture Frame Fence",
    badge: "HOA Friendly",
    body: "Same framed look as full picture frame with top cap and side trim — no bottom board. A more economical cedar privacy panel that many HOAs approve.",
    img: "https://ik.imagekit.io/xft9mcl5v/hero-images/Modified-Full-Panel-Hero.webp",
    imgAlt: "Modified full panel cedar privacy fence",
  },
  {
    href: "/fence-styles/3-rail-picture-frame-fence",
    name: "3 Rail Picture Frame Fence",
    badge: "Added Structure",
    body: "Picture frame privacy with a third rail and matching trim for extra rigidity and a refined craftsman profile.",
    img: "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png",
    imgAlt: "3 rail picture frame cedar privacy fence",
  },
  {
    href: "/fence-styles/shadow-box-fence",
    name: "Shadow Box Fence",
    badge: "Good Neighbor",
    body: "Alternating boards finished identically on both sides — the classic good-neighbor privacy fence that still blocks the view at normal angles.",
    img: "https://ik.imagekit.io/xft9mcl5v/hero-images/Shadow-Box-Hero.webp",
    imgAlt: "Shadow box good neighbor cedar privacy fence",
  },
  {
    href: "/fence-styles/horizontal-fence",
    name: "Horizontal Fence",
    badge: "Modern",
    body: "Horizontal cedar boards on an external 2x4 frame with center rail support — a favorite modern privacy style.",
    img: "/lovable-uploads/1d91d676-3b17-4347-9ea7-28027e05e373.png",
    imgAlt: "Horizontal cedar privacy fence",
  },
  {
    href: "/fence-styles/horizontal-lattice-fence",
    name: "Horizontal Lattice Fence",
    badge: "Partial Screening",
    body: "Horizontal lattice screening (not solid boards) built on a craftsman foundation with 5/8-inch-thick cedar strips — privacy with airflow and a lighter look.",
    img: "/lovable-uploads/8f73dbbc-942c-4ab6-9fda-bb95aa702af4.png",
    imgAlt: "Horizontal lattice cedar fence for partial privacy screening",
  },
  {
    href: "/fence-styles/solid-board-fence",
    name: "Solid Board Fence",
    badge: "Budget",
    body: "The budget-friendly cedar privacy option: solid boards, 2 rails, and stainless steel fasteners.",
    img: "/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png",
    imgAlt: "Solid board cedar privacy fence",
  },
  {
    href: "/fence-styles/cedar-steel-hybrid-fence",
    name: "Cedar/Steel Hybrid Fence",
    badge: "Low Maintenance",
    body: "26-gauge corrugated steel panels with HDP NoFade™ paint inside cedar framing for low-maintenance, solid privacy.",
    img: "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Maple-Valley/Daybreak-at-River-Ridge-Steel-Cedar-Hybrid-4.webp",
    imgAlt: "Cedar and steel hybrid privacy fence",
  },
];

const upgrades: PrivacyCard[] = [
  {
    href: "/fence-upgrades/board-on-board",
    name: "Board-on-Board Upgrade",
    badge: "Max Privacy",
    body: "Overlapping boards eliminate seasonal gaps for year-round privacy and a dimensional look — a favorite upgrade on picture frame and craftsman builds.",
    img: boardOnBoardImg,
    imgAlt: "Board on board overlapping cedar privacy fence",
    supporting: true,
  },
  {
    href: "/pre-staining-cedar-fence",
    name: "Pre-Staining Finish",
    badge: "Finish Option",
    body: "Not a fence style — a factory-style finish that protects cedar on every face before install, including spots you cannot reach after the fence is up.",
    img: "/service-area-photos/Federal-Way/Federal-Way-Modified-Picture-Frame-Cedar-Privacy-Fence-01.jpg",
    imgAlt: "Pre-stained cedar privacy fence finish",
    supporting: true,
  },
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

const tocItems = [
  { id: "styles", label: "Privacy fence styles" },
  { id: "upgrades", label: "Upgrades & finishes" },
  { id: "why", label: "Why homeowners choose us" },
  { id: "faq", label: "FAQ" },
  { id: "quote", label: "Get a free quote" },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com/" },
    { "@type": "ListItem", position: 2, name: "Privacy Fences", item: URL },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function StyleCard({ card }: { card: PrivacyCard }) {
  return (
    <Link
      href={card.href}
      className="group block overflow-hidden rounded-lg border bg-card hover:border-primary transition-colors"
    >
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={card.img}
          alt={card.imgAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold">{card.name}</h3>
          {card.badge ? (
            <span className="rounded-full bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5">
              {card.badge}
            </span>
          ) : null}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
        <span className="mt-3 inline-block text-sm font-medium text-primary underline underline-offset-4">
          View {card.supporting ? "details" : "style"} →
        </span>
      </div>
    </Link>
  );
}

export default function PrivacyFencesPage() {
  return (
    <main className="container pt-24 md:pt-28 pb-16 max-w-5xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground font-medium">Privacy Fences</li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Privacy Fence Installation in Auburn &amp; South King County
      </h1>
      <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
        A privacy fence should block the view, stand up to Pacific Northwest weather, and look good for
        years. We build cedar and cedar/steel hybrid privacy fences across Auburn, Kent, Federal Way,
        and the surrounding area.
      </p>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Browse every privacy style we actually offer below, then request a free quote or call{" "}
        <a href="tel:+12534551885" className="text-primary font-medium underline">
          (253) 455-1885
        </a>
        .
      </p>

      <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-5 mb-6">
        <p className="font-semibold mb-1">Skip the staining</p>
        <p className="text-muted-foreground">
          Our cedar privacy fences can be pre-stained before install, so the boards are protected on day
          one.{" "}
          <Link href="/pre-staining-cedar-fence" className="text-primary underline">
            See how pre-staining works
          </Link>
          .
        </p>
      </div>

      <div className="rounded-lg border-l-4 border-blue-500 bg-blue-500/5 p-5 mb-10">
        <p className="font-semibold mb-1">Need maximum privacy?</p>
        <p className="text-muted-foreground">
          Ask about the{" "}
          <Link href="/fence-upgrades/board-on-board" className="text-primary underline">
            board-on-board upgrade
          </Link>{" "}
          — overlapping boards close seasonal gaps for year-round screening.
        </p>
      </div>

      <div className="mb-10">
        <ArticleToc items={tocItems} />
      </div>

      <section id="styles" className="mb-14 scroll-mt-28">
        <h2 className="text-2xl font-bold mb-2">Privacy fence styles we build</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Each card links to the full style page with photos, construction details, and a quote path.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {privacyStyles.map((s) => (
            <StyleCard key={s.href} card={s} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Looking for open styles (picket, ranch, hogwire)? Those are not privacy fences — see{" "}
          <Link href="/fence-styles" className="text-primary underline">
            all fence styles
          </Link>
          .
        </p>
      </section>

      <section id="upgrades" className="mb-14 scroll-mt-28">
        <h2 className="text-2xl font-bold mb-2">Privacy upgrades &amp; finishes</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Pair a privacy style with an upgrade or finish when you need tighter screening or day-one
          protection.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {upgrades.map((s) => (
            <StyleCard key={s.href} card={s} />
          ))}
        </div>
      </section>

      <section id="why" className="mb-14 scroll-mt-28">
        <h2 className="text-2xl font-bold mb-4">Why homeowners choose MyFence</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Local father &amp; son team.</strong> Founded by
                Eric &amp; Andrew Knudsen.
              </li>
              <li>
                <strong className="text-foreground">Fence Genius certified.</strong>{" "}
                <Link href="/fence-genius" className="text-primary underline">
                  Learn what that means
                </Link>
                .
              </li>
              <li>
                <strong className="text-foreground">36 month workmanship warranty</strong> on all
                installations.
              </li>
              <li>
                <strong className="text-foreground">Real projects.</strong>{" "}
                <Link href="/gallery" className="text-primary underline">
                  Browse the gallery
                </Link>
                .
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="faq" className="mb-14 scroll-mt-28">
        <h2 className="text-2xl font-bold mb-4">Privacy fence FAQ</h2>
        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <section
        id="quote"
        className="rounded-lg bg-muted/40 p-6 md:p-8 text-center scroll-mt-28"
      >
        <h2 className="text-2xl font-bold mb-2">Get a free privacy fence quote</h2>
        <p className="text-muted-foreground mb-4">
          Use our virtual quote tool or call{" "}
          <a href="tel:+12534551885" className="font-semibold text-foreground">
            (253) 455-1885
          </a>
          .
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/quote"
            className="rounded-md bg-primary px-5 py-2 font-semibold text-primary-foreground"
          >
            Free Quote
          </Link>
          <a
            href="tel:+12534551885"
            className="rounded-md border px-5 py-2 font-semibold"
          >
            (253) 455-1885
          </a>
          <Link href="/service-areas" className="rounded-md border px-5 py-2 font-semibold">
            Service Areas
          </Link>
          <Link href="/fence-styles" className="rounded-md border px-5 py-2 font-semibold">
            All Fence Styles
          </Link>
        </div>
      </section>
    </main>
  );
}
