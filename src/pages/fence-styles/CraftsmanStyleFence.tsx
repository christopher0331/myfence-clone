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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

// Images (initial set). You can upload more and we will extend this gallery automatically.
const heroImg = "/lovable-uploads/1ab1a228-3d1d-4b69-8561-371fabba22e1.png"; // Angled craftsman fence with Fence Genius planning
const gallery = [
  { src: "/lovable-uploads/15a13f77-9fdf-4253-9fc2-9888c15816d0.png", alt: "Craftsman fence with pergola gate and cedar construction" },
  { src: "/lovable-uploads/53ff106a-b96e-4b79-b816-4379aba7f89b.png", alt: "Cedar craftsman fence with pergola and alternating board pattern" },
  { src: "/lovable-uploads/3b892c6d-b23a-4d63-ad26-ebb74d1166c7.png", alt: "Long run of craftsman style fence along street with alternating boards" },
  { src: "/lovable-uploads/0e5dfefe-49ce-4d52-b4dc-7cc011fc2a36.png", alt: "Double gate with craftsman style alternating board design" },
  { src: "/lovable-uploads/d2b4f7d1-08ba-4970-86d5-5b360e146135.png", alt: "Craftsman fence with Fence Genius planning visualization" },
  { src: "/lovable-uploads/dcd969d9-d333-404b-98a9-c1334925b869.png", alt: "Craftsman fence installation with Fence Genius grade-following model" },
  { src: "/lovable-uploads/152a9d59-7c85-4105-b186-08092819fb4d.png", alt: "Straight run of craftsman fence showing alternating board pattern" },
  { src: "/lovable-uploads/f77a4cb6-6689-40e1-ae50-3546ae7a98f1.png", alt: "Craftsman fence with pergola and Fence Genius design overlay" },
];

const fatherSonImg = "/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png";

const CraftsmanStyleFence = () => {
  const canonical = "https://myfence.com/fence-styles/craftsman-style-fence";

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Craftsman Style Fence Installation",
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
        name: "What makes a craftsman style fence unique?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The alternating board pattern with 5' and 6' fence boards creates 12 inch gaps for wind flow and visibility while maintaining strong structure with 3 rails and trim.",
        },
      },
      {
        "@type": "Question",
        name: "Does the alternating pattern affect privacy?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The 12 inch gaps provide openness for wind and visibility while still offering substantial privacy. It's perfect for areas where you want airflow.",
        },
      },
      {
        "@type": "Question",
        name: "What fasteners and posts do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Stainless fasteners are standard. Posts are typically 4.125 x 4.125 x 9' set deeper than 2' with roughly 180 lbs of properly mixed concrete.",
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
        { "@type": "ListItem", position: 3, name: "Craftsman Style Fence", item: canonical },
      ],
    },
  ];

  return (
    <main>
      <Seo
        title="Craftsman Style Fence | Seattle | MyFence.com"
        description="Cedar craftsman style fences in Seattle with alternating board pattern for wind flow and visibility. 3 rails, 3 trim, top cap. Get a fast quote today."
        canonical={canonical}
        image={heroImg}
        structuredData={structuredData}
      />

      <article className="container py-10">
        <header className="grid gap-6 md:grid-cols-2 md:items-center max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Craftsman Style Fence</h1>
            <p className="mt-3 text-muted-foreground max-w-prose">
              The craftsman style fence features an alternating board pattern with 5' and 6' fence boards,
              creating 12" gaps for wind flow and visibility. Built with 3 rails, 3 trim, and a top cap in
              #1 grade cedar for a unique architectural look with Fence Genius precision.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Unique Pattern</Badge>
              <Badge variant="secondary">Wind Flow</Badge>
              <Badge variant="secondary">Fence Genius Precision</Badge>
            </div>
          </div>
          <div>
            <AspectRatio ratio={16 / 9}>
              <img src={heroImg} alt="Craftsman style fence with alternating board pattern in Seattle" loading="eager" className="h-full w-full rounded-md object-cover" />
            </AspectRatio>
          </div>
        </header>

        <section className="mt-6">
          <Alert>
            <AlertTitle>Distinctive Craftsman Design</AlertTitle>
            <AlertDescription>The alternating board pattern creates a unique visual appeal while providing wind flow and enhanced visibility.</AlertDescription>
          </Alert>
        </section>

        <section className="mt-10 space-y-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="p-6 md:p-8 glass-card">
              <h2 className="text-2xl font-semibold tracking-tight">Why homeowners choose craftsman style</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Alternating 5' and 6' board pattern creates distinctive craftsman aesthetic.</li>
                <li>12" gaps allow wind to pass through, reducing fence stress in storms.</li>
                <li>Enhanced visibility while maintaining substantial privacy.</li>
                <li>Strong 3-rail structure with matching trim and top cap.</li>
                <li>Cedar construction excels in the Pacific Northwest climate.</li>
                <li>Fence Genius planning delivers precise measurements and clean lines.</li>
              </ul>
            </Card>

            <Separator />

            <Card className="p-6 md:p-8 glass-card">
              <h3 className="text-xl font-semibold tracking-tight">How we build craftsman style fence (our standard)</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Three 2x4 rails, screwed directly into the posts for maximum strength.</li>
                <li>Alternating board pattern: 5' and 6' fence boards creating 12" wind gaps.</li>
                <li>Three trim boards that frame each panel to complement the rail structure.</li>
                <li>Top 2x4 cap for a finished, architectural profile.</li>
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
              <h2 className="text-3xl font-bold mb-4">Craftsman Style Fence Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See the unique alternating board pattern and craftsmanship of our craftsman style fences.
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
              <h3 id="fence-genius-heading" className="text-xl font-semibold tracking-tight">Fence Genius planning for craftsman designs</h3>
              <div className="rounded-lg border bg-card p-4">
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Set new posts first to establish a stable baseline for the alternating pattern.</li>
                  <li>Capture post-to-post measurements and calculate optimal board placement.</li>
                  <li>Plan alternating board heights to maintain consistent 12" gaps.</li>
                  <li>Panels are optimized to follow the ground at both top and bottom for clean lines.</li>
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
                          <TableCell className="font-medium">Board Pattern</TableCell>
                          <TableCell>Alternating 5' and 6' fence boards with 12" wind gaps</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Pickets</TableCell>
                          <TableCell>#1 grade cedar (clear cedar upgrade available)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Cap/Trim</TableCell>
                          <TableCell>Top 2x4 cap; three trim boards to complement rail structure</TableCell>
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
                          <TableCell>Available: 4', 5', 6', 8' (alternating pattern maintained)</TableCell>
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
                      <div className="p-3 text-center text-sm text-muted-foreground">Custom gap spacing for different wind requirements</div>
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
                      <div className="p-3 text-center text-sm text-muted-foreground">2 foot lattice topper for 8 foot height</div>
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
                  <img src="/lovable-uploads/e0a73408-c5ab-4748-9378-9494e3f88cbd.png" alt="Craftsman style fence gate with heavy-duty hardware" loading="lazy" className="w-full h-full object-cover rounded-md" />
                </AspectRatio>
                <AspectRatio ratio={4 / 3}>
                  <img src="/lovable-uploads/07de637e-347f-4731-ae87-f86ca8fec0cf.png" alt="Double gate matching craftsman style design" loading="lazy" className="w-full h-full object-cover rounded-md" />
                </AspectRatio>
                <AspectRatio ratio={4 / 3}>
                  <img src="/lovable-uploads/9f934060-aa7f-4147-9100-775bb5867e91.png" alt="Gate design planned with Fence Genius" loading="lazy" className="w-full h-full object-cover rounded-md" />
                </AspectRatio>
              </div>
            </section>

            <section aria-labelledby="faq-heading" className="space-y-3">
              <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight">Craftsman Style Fence FAQs</h2>
              <div className="rounded-lg border bg-card p-4">
                <details>
                  <summary className="cursor-pointer font-medium">How does the alternating pattern affect strength?</summary>
                  <p className="mt-2 text-muted-foreground">The 3-rail structure maintains excellent strength while the alternating pattern actually reduces wind load, making it more storm-resistant.</p>
                </details>
                <details className="mt-3">
                  <summary className="cursor-pointer font-medium">Can I adjust the gap size?</summary>
                  <p className="mt-2 text-muted-foreground">Yes, we can customize the board heights to create different gap sizes based on your privacy and wind flow preferences.</p>
                </details>
                <details className="mt-3">
                  <summary className="cursor-pointer font-medium">How do I see cost?</summary>
                  <p className="mt-2 text-muted-foreground">Use our Virtual Quote Tool for an instant estimate based on your property and measurements.</p>
                </details>
              </div>
            </section>

            {/* Virtual Quote Tool */}
            <VirtualQuoteTool fenceStyleName="Craftsman Style Fence" />

            <section className="mt-6">
              <InlineQuoteForm context="Craftsman Style Fence page" />
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
                    We're a father & son team serving the Seattle area—licensed, insured, and backed by a
                    {WARRANTY_CONSTANTS.INLINE_TEXT}. Powered by Fence Genius for precise planning.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                    <Button asChild>
                      <Link to="/quote" aria-label="Start your craftsman style fence quote">Start Your Quote</Link>
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

        {/* About Craftsman Style Fencing */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Craftsman Style Fencing</h2>
            
            {/* Unique Alternating Pattern */}
            <Card className="overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="h-full w-full">
                    <img 
                      src="/lovable-uploads/53ff106a-b96e-4b79-b816-4379aba7f89b.png" 
                      alt="Craftsman fence with pergola and alternating board pattern construction" 
                      className="h-full w-full object-cover min-h-[300px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
                <CardContent className="p-6 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Unique Alternating Board Pattern</h3>
                    <p className="text-muted-foreground mb-4">
                      The craftsman style fence features a distinctive alternating board pattern with 5' and 6' fence boards, creating 12" gaps that allow wind to flow through while maintaining substantial privacy.
                    </p>
                    <p className="text-muted-foreground">
                      Built with the same premium cedar frame construction as our popular <Link to="/fence-styles/picture-frame-fence" className="text-primary hover:underline">Picture Frame Fence</Link>, but with added architectural interest.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Finance Calculator */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flexible Financing Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Make your Craftsman Style Fence project more affordable with our financing options.
              </p>
            </div>
            <PaymentCalculator />
          </div>
        </section>
      </article>
    </main>
  );
};

export default CraftsmanStyleFence;