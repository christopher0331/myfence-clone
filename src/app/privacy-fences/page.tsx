import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Cedar Privacy Fence Installation | Auburn, Kent & Federal Way | MyFence";
const DESCRIPTION =
  "Cedar and cedar/steel hybrid privacy fences built by a local father & son team. Compare privacy styles and get a free quote. Call (253) 455-1885.";
const URL = "https://myfence.com/privacy-fences";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: "website", locale: "en_US", siteName: "MyFence", url: URL, title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const styles = [
  {
    href: "/fence-styles/picture-frame-fence",
    name: "Picture Frame Fence",
    body: "Our most popular cedar privacy fence. Clean trim details frame solid boards for a finished look on your side.",
  },
  {
    href: "/fence-styles/shadow-box-fence",
    name: "Shadow Box Fence",
    body: "Alternating boards finished identically on both sides: the 'good neighbor' fence that still blocks the view.",
  },
  {
    href: "/fence-styles/horizontal-fence",
    name: "Horizontal Fence",
    body: "Horizontal cedar boards on an external 2x4 frame with center rail support, a favorite modern privacy style.",
  },
  {
    href: "/fence-styles/solid-board-fence",
    name: "Solid Board Fence",
    body: "The budget-friendly cedar privacy option: 2 rails and stainless steel fasteners.",
  },
  {
    href: "/fence-styles/cedar-steel-hybrid-fence",
    name: "Cedar/Steel Hybrid Fence",
    body: "26 gauge corrugated steel panels with HDP NoFade™ paint inside cedar framing for low-maintenance privacy.",
  },
];

export default function PrivacyFencesPage() {
  return (
    <main className="container pt-24 md:pt-28 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Fence Installation in Auburn &amp; South King County</h1>
      <p className="text-lg text-muted-foreground mb-6">
        A privacy fence should block the view, stand up to Pacific Northwest weather, and look good for years.
        We build cedar and cedar/steel hybrid privacy fences across Auburn, Kent, Federal Way and the surrounding area.
      </p>

      <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-5 mb-10">
        <p className="font-semibold mb-1">Skip the staining</p>
        <p className="text-muted-foreground">
          Our cedar privacy fences can be pre-stained before install, so the boards are protected on day one.{" "}
          <Link href="/pre-staining-cedar-fence" className="text-primary underline">See how pre-staining works</Link>.
        </p>
      </div>

      <nav aria-label="On this page" className="mb-10 rounded-lg border p-5">
        <p className="font-semibold mb-2">On this page</p>
        <ul className="list-disc pl-5 space-y-1 text-primary">
          <li><a href="#styles">Privacy fence styles</a></li>
          <li><a href="#why">Why homeowners choose us</a></li>
          <li><a href="#quote">Get a free quote</a></li>
        </ul>
      </nav>

      <section id="styles" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Privacy fence styles we build</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {styles.map((s) => (
            <Link key={s.href} href={s.href} className="block rounded-lg border p-5 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
              <p className="text-muted-foreground">{s.body}</p>
            </Link>
          ))}
        </div>
        <p className="mt-4">
          <Link href="/fence-styles" className="text-primary underline">Compare every fence style</Link>
        </p>
      </section>

      <section id="why" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why homeowners choose MyFence</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li><strong className="text-foreground">Local father &amp; son team.</strong> Founded by Eric &amp; Andrew Knudsen.</li>
          <li><strong className="text-foreground">Fence Genius certified.</strong> <Link href="/fence-genius" className="text-primary underline">Learn what that means</Link>.</li>
          <li><strong className="text-foreground">36 month workmanship warranty</strong> on all installations.</li>
          <li><strong className="text-foreground">Real projects.</strong> <Link href="/gallery" className="text-primary underline">Browse the gallery</Link>.</li>
        </ul>
      </section>

      <section id="quote" className="rounded-lg bg-muted/40 p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Get a free privacy fence quote</h2>
        <p className="text-muted-foreground mb-4">Use our virtual quote tool or call (253) 455-1885.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/quote" className="rounded-md bg-primary px-5 py-2 font-semibold text-primary-foreground">Free Quote</Link>
          <a href="tel:+12534551885" className="rounded-md border px-5 py-2 font-semibold">(253) 455-1885</a>
          <Link href="/service-areas" className="rounded-md border px-5 py-2 font-semibold">Service Areas</Link>
        </div>
      </section>
    </main>
  );
}
