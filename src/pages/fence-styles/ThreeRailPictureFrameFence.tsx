import Seo from "@/components/Seo";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import VirtualQuoteTool from "@/components/VirtualQuoteTool";
import PaymentCalculator from "@/components/PaymentCalculator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

// Images (initial set). You can upload more and we will extend this gallery automatically.
const heroImg = "/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png"; // 3-rail detail
const gallery = [
  { src: "/lovable-uploads/d87230cd-96a6-4566-a1f9-11237790eea5.png", alt: "3 rail picture frame fence following terrain in Seattle" },
  { src: "/lovable-uploads/913ab5db-5bb0-4601-b16b-cb82980c1a02.png", alt: "Cedar 3 rail picture frame fence with craftsman look" },
  { src: "/lovable-uploads/202129bf-e11e-4b28-92ba-83866ca6e42d.png", alt: "Three rail picture frame fence with stepped grade" },
  { src: "/lovable-uploads/90c5c403-5b3c-4b79-b1fa-22abb96787a8.png", alt: "Close-up of 3 rail picture frame fence rails and trim" },
  { src: "/lovable-uploads/fb1299f7-72f9-4c43-b762-a1ba637b5732.png", alt: "Long run of cedar 3-rail picture frame fence in Seattle" },
  { src: "/lovable-uploads/78133561-db65-4e96-932f-e60c0eeaf449.png", alt: "Cedar gate in matching 3-rail picture frame style" },
];

const fatherSonImg = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";

const ThreeRailPictureFrameFence = () => {
  const canonical = "https://myfence.com/fence-styles/3-rail-picture-frame-fence";

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "3 Rail Picture Frame Fence Installation",
    serviceType: "Fence Installation",
    provider: {
      "@type": "Organization",
      name: "MyFence.com",
      url: "https://myfence.com",
      telephone: "+1-253-455-1885",
    },
    areaServed: [
      { "@type": "Place", name: "Seattle, WA" },
      { "@type": "Place", name: "Bellevue, WA" },
      { "@type": "Place", name: "Kirkland, WA" },
      { "@type": "Place", name: "Redmond, WA" },
      { "@type": "Place", name: "Sammamish, WA" },
      { "@type": "Place", name: "Issaquah, WA" },
      { "@type": "Place", name: "Bothell, WA" },
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
        name: "What makes a 3 rail picture frame fence different?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "It adds a third horizontal 2x4 rail and matching trim, increasing structure and delivering a more craftsman look compared to standard picture frame.",
        },
      },
      {
        "@type": "Question",
        name: "Do the panels still follow grade at the top and bottom?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Fence Genius plans each panel to follow the terrain at both the top and bottom edges for a clean, consistent line.",
        },
      },
      {
        "@type": "Question",
        name: "What fasteners and posts do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Stainless fasteners are standard. Posts are typically 4.125\" x 4.125\" x 9' set deeper than 2' with roughly 180 lbs of properly mixed concrete.",
        },
      },
    ],
  };

  const structuredData = [
    serviceStructuredData,
    faqStructuredData,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com/" },
        { "@type": "ListItem", position: 2, name: "Fence Styles", item: "https://myfence.com/fence-styles" },
        { "@type": "ListItem", position: 3, name: "3 Rail Picture Frame Fence", item: canonical },
      ],
    },
  ];

  return (
    <main>
      <Seo
        title="3 Rail Picture Frame Fence | Seattle | MyFence.com"
        description="Cedar 3 rail picture frame fences in Seattle. Extra rail and trim for added structure and a refined craftsman look. Get a fast quote today."
        canonical={canonical}
        structuredData={structuredData}
      />

      <article className="container py-10">
        <header className="grid gap-6 md:grid-cols-2 md:items-center max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">3 Rail Picture Frame Fence</h1>
            <p className="mt-3 text-muted-foreground max-w-prose">
              The 3 rail picture frame adds a third horizontal rail and matching trim for extra rigidity
              and a distinctive craftsman profile. Built in #1 grade cedar and planned with Fence Genius,
              it delivers a premium, long‑lasting privacy fence.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Craftsman Look</Badge>
              <Badge variant="secondary">Added Structure</Badge>
              <Badge variant="secondary">Fence Genius Precision</Badge>
            </div>
          </div>
          <div>
            <AspectRatio ratio={16 / 9}>
              <img src={heroImg} alt="3 rail picture frame fence detail in Seattle" loading="eager" className="h-full w-full rounded-md object-cover" />
            </AspectRatio>
          </div>
        </header>

        <section className="mt-6">
          <Alert>
            <AlertTitle>Popular Upgrade to Picture Frame</AlertTitle>
            <AlertDescription>Homeowners choose the 3 rail variant for added strength and a refined, architectural finish.</AlertDescription>
          </Alert>
        </section>

        <section className="mt-10 space-y-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="p-6 md:p-8 glass-card">
              <h2 className="text-2xl font-semibold tracking-tight">Why homeowners choose 3 rail picture frame</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Extra rail increases panel rigidity and durability over time.</li>
                <li>Third trim board mirrors the rail layout for a balanced craftsman aesthetic.</li>
                <li>Cedar construction excels in the Pacific Northwest climate.</li>
                <li>Fence Genius planning delivers precise grade-following panels and clean top lines.</li>
              </ul>
            </Card>

            <Separator />

            <Card className="p-6 md:p-8 glass-card">
              <h3 className="text-xl font-semibold tracking-tight">How we build 3 rail picture frame (our standard)</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Three 2x4 rails, screwed directly into the posts.</li>
                <li>Trim that frames each panel with an added third trim to complement the third rail.</li>
                <li>Top 2x4 cap for a finished profile.</li>
                <li>Standard posts: 4.125" x 4.125" x 9' set deeper than 2' with ~180 lbs of properly mixed concrete.</li>
                <li>Stainless steel fasteners standard to prevent corrosion and black streaking.</li>
              </ul>
              <p className="text-muted-foreground max-w-prose mt-2">
                Pricing is available in our Virtual Quote Tool with your exact measurements.
              </p>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gallery.slice(0, 2).map((img) => (
                <AspectRatio key={img.src} ratio={4 / 3}>
                  <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full rounded-md object-cover" />
                </AspectRatio>
              ))}
            </div>

            <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">3 Rail Picture Frame Fence Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See the strength and craftsmanship of our 3 rail picture frame fences with enhanced structural design.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

            <section aria-labelledby="fence-genius-heading" className="space-y-3">
              <h3 id="fence-genius-heading" className="text-xl font-semibold tracking-tight">Fence Genius planning for 3 rail designs</h3>
              <div className="rounded-lg border bg-card p-4">
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Set new posts first to establish a stable baseline.</li>
                  <li>Capture post-to-post measurements, usable post height, grade change, and angles.</li>
                  <li>Panels are optimized to follow the ground at both top and bottom for a clean, consistent look.</li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="key-specs-heading" className="space-y-3">
              <h2 id="key-specs-heading" className="text-2xl font-semibold tracking-tight">Key specs</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4 md:p-6">
                  <div className="md:overflow-x-auto overflow-x-visible">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="md:w-[200px]">Spec</TableHead>
                          <TableHead>Standard</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Posts</TableCell>
                          <TableCell>4.125" x 4.125" x 9' set deeper than 2' with ~180 lbs properly mixed concrete</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Rails</TableCell>
                          <TableCell>Three 2x4 rails, screwed directly into posts</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Pickets</TableCell>
                          <TableCell>#1 grade cedar (clear cedar upgrade available)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Cap/Trim</TableCell>
                          <TableCell>Top 2x4 cap; additional trim to complement the third rail</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Fasteners</TableCell>
                          <TableCell>Stainless fasteners to prevent corrosion/black streaking</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Gates</TableCell>
                          <TableCell>Matching single/double gates; heavy-duty hardware</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Heights</TableCell>
                          <TableCell>Available: 4', 5', 6', 8'</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </Card>
                <Card className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-center">Options & upgrades</h3>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center">
                    <Card className="w-full">
                      <div className="p-3 text-center text-sm text-muted-foreground">Rot board for added durability at grade</div>
                    </Card>
                    <Card className="w-full">
                      <div className="p-3 text-center text-sm text-muted-foreground">Board-on-board privacy (no direct sight lines)</div>
                    </Card>
                    <Card className="w-full">
                      <div className="p-3 text-center text-sm text-muted-foreground">4" exterior screws for superior hold</div>
                    </Card>
                    <Card className="w-full">
                      <div className="p-3 text-center text-sm text-muted-foreground">6x6 post upgrades</div>
                    </Card>
                    <Card className="w-full">
                      <div className="p-3 text-center text-sm text-muted-foreground">Steel core post-on-pipe systems</div>
                    </Card>
                    <Card className="w-full">
                      <div className="p-3 text-center text-sm text-muted-foreground">Decorative post caps and trim variants</div>
                    </Card>
                    <Card className="w-full sm:col-span-2">
                      <div className="p-3 text-center text-sm text-muted-foreground">Professional stain and seal options</div>
                    </Card>
                  </div>
                </Card>
              </div>
            </section>


            <section aria-labelledby="gates-heading" className="space-y-3">
              <h2 id="gates-heading" className="text-2xl font-semibold tracking-tight">Gates & hardware</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <AspectRatio ratio={4 / 3}>
                  <img src="/lovable-uploads/e0a73408-c5ab-4748-9378-9494e3f88cbd.png" alt="Picture frame fence gate with heavy-duty hardware" loading="lazy" className="w-full h-full object-cover rounded-md" />
                </AspectRatio>
                <AspectRatio ratio={4 / 3}>
                  <img src="/lovable-uploads/07de637e-347f-4731-ae87-f86ca8fec0cf.png" alt="Double gate matching picture frame style" loading="lazy" className="w-full h-full object-cover rounded-md" />
                </AspectRatio>
                <AspectRatio ratio={4 / 3}>
                  <img src="/lovable-uploads/9f934060-aa7f-4147-9100-775bb5867e91.png" alt="Gate design planned with Fence Genius" loading="lazy" className="w-full h-full object-cover rounded-md" />
                </AspectRatio>
              </div>
            </section>

            <section aria-labelledby="faq-heading" className="space-y-3">
              <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight">3 Rail Picture Frame FAQs</h2>
              <div className="rounded-lg border bg-card p-4">
                <details>
                  <summary className="cursor-pointer font-medium">Is this stronger than standard picture frame?</summary>
                  <p className="mt-2 text-muted-foreground">Yes, the added rail improves rigidity and helps long runs stay straighter over time.</p>
                </details>
                <details className="mt-3">
                  <summary className="cursor-pointer font-medium">Can I combine with board‑on‑board or rot board?</summary>
                  <p className="mt-2 text-muted-foreground">Absolutely. These upgrades pair nicely with the 3 rail layout and enhance privacy and durability.</p>
                </details>
                <details className="mt-3">
                  <summary className="cursor-pointer font-medium">How do I see cost?</summary>
                  <p className="mt-2 text-muted-foreground">Use our Virtual Quote Tool for an instant estimate based on your property and measurements.</p>
                </details>
              </div>
            </section>


            {/* Virtual Quote Tool */}
            <VirtualQuoteTool fenceStyleName="3 Rail Picture Frame Fence" />

            <section className="mt-6">
              <InlineQuoteForm context="3 Rail Picture Frame Fence page" />
            </section>
          </div>

        </section>
      <section aria-labelledby="about-heading" className="py-12">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 id="about-heading" className="text-2xl font-semibold tracking-tight text-center">About MyFence.com</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-muted-foreground max-w-prose mx-auto md:mx-0">
                  We’re a father & son team serving the Seattle area—licensed, insured, and backed by a
                  2‑year workmanship warranty. Powered by Fence Genius for precise planning.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                  <Button asChild>
                    <Link to="/quote" aria-label="Start your 3 rail picture frame fence quote">Start Your Quote</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link to="/contact" aria-label="Contact MyFence.com">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden ring-2 ring-primary/60 shadow-glow">
                <AspectRatio ratio={4 / 3}>
                  <img src={fatherSonImg} alt="Father and son team from MyFence.com in Seattle standing by a cedar fence" loading="lazy" className="w-full h-full object-cover" />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="finance-calculator-heading" className="py-12">
        <div className="container">
          <Card className="max-w-6xl mx-auto p-4 md:p-6">
            <h2 id="finance-calculator-heading" className="text-2xl font-semibold tracking-tight text-center">Finance Calculator</h2>
            <div className="mt-4">
              <PaymentCalculator />
            </div>
          </Card>
        </div>
      </section>

      </article>
    </main>
  );
};

export default ThreeRailPictureFrameFence;
