import Seo from "@/components/Seo";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import PaymentCalculator from "@/components/PaymentCalculator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { getFenceStyleImages } from "@/data/fenceImages";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const images = getFenceStyleImages("picture-frame");
const heroImg = images.hero.src;
const altHero = images.hero.alt;

const PictureFrameFence = () => {
  const canonical = "https://myfence.com/fence-styles/picture-frame-fence";
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Picture Frame Fence Installation",
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
      { "@type": "Place", name: "Renton, WA" }
    ],
    image: [heroImg],
    brand: {
      "@type": "Brand",
      name: "Fence Genius",
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is a picture frame fence constructed?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Our picture frame fences are built with two 2x4 rails, two trim boards that frame each panel, and a top 2x4 cap for a clean, finished look.",
        },
      },
      {
        "@type": "Question",
        name: "How are rails attached to the posts?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "All 2x4 rails are screwed directly into the fence posts for superior strength and long-term stability.",
        },
      },
      {
        "@type": "Question",
        name: "What fence posts and footings do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We standardize on 4.125\"x4.125\"x9' fence posts set deeper than 2 feet in the ground with approximately 180 pounds of properly mixed concrete.",
        },
      },
      {
        "@type": "Question",
        name: "Do you use stainless fasteners?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We use stainless steel fasteners as standard to prevent corrosion and eliminate black streaking common with galvanized fasteners.",
        },
      },
      {
        "@type": "Question",
        name: "What is Fence Genius and how does it improve results?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Fence Genius powers our data-driven design. After we collect precise post-to-post measurements, usable post height, grade changes, and angle adjustments, the software optimizes your layout for accuracy and maximum material yield.",
        },
      },
      {
        "@type": "Question",
        name: "Will my fence follow the ground contour at the top and bottom?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Fence Genius designs each panel to follow the terrain at both the top and bottom edges, delivering a clean, consistent look that matches your site conditions.",
        },
      },
      {
        "@type": "Question",
        name: "Is picture frame the most common fence style in Seattle?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. It’s the most commonly requested style across Seattle and the Eastside thanks to its privacy, clean trim profile, cedar durability in PNW weather, and HOA-friendly appearance.",
        },
      },
    ],
  };

  const videoUrl = "https://youtu.be/9k_jcZ3eEKk?si=rEWXZY0CcnPZYVZ3";
  const embedUrl = "https://www.youtube.com/embed/9k_jcZ3eEKk";

  const structuredData = [
    serviceStructuredData,
    faqStructuredData,
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Fence Genius planning process for picture frame fences",
      step: [
        { "@type": "HowToStep", name: "Tear out old fence" },
        {
          "@type": "HowToStep",
          name: "Set new posts",
          text: "Install 4.125\"x4.125\"x9' posts deeper than 2' with ~180 lbs of properly mixed concrete.",
        },
        {
          "@type": "HowToStep",
          name: "Collect site data",
          text: "Measure between posts, available post height, grade change, and any angle changes.",
        },
        {
          "@type": "HowToStep",
          name: "Design with Fence Genius",
          text: "Software designs panels to follow the ground at both top and bottom, maximizing material yield and accuracy.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Picture Frame Fence Installation Video",
      description: "Step-by-step installation of a picture frame fence.",
      embedUrl: embedUrl,
      contentUrl: videoUrl,
      thumbnailUrl: [heroImg]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myfence.com/" },
        { "@type": "ListItem", position: 2, name: "Fence Styles", item: "https://myfence.com/fence-styles" },
        { "@type": "ListItem", position: 3, name: "Picture Frame Fence", item: canonical }
      ]
    }
  ];

  return (
    <main>
      <Seo
        title="Picture Frame Fence | Seattle | MyFence.com"
        description="Premium picture frame cedar fences in Seattle. Clean trim, strong structure, and precise planning with Fence Genius. Get a fast, free quote today."
        canonical={canonical}
        structuredData={structuredData}
      />

      <article className="container py-10">
        <header className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Picture Frame Fence</h1>
            <p className="mt-3 text-muted-foreground max-w-prose">
              A picture frame fence adds a clean, finished border around every panel. Built in #1 grade
              cedar with precise trim details, it delivers premium curb appeal without sacrificing
              privacy or durability. Our Fence Genius planning technology ensures every post, panel,
              and corner lands exactly where it should.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Premium Look</Badge>
              <Badge variant="secondary">Cedar Construction</Badge>
              <Badge variant="secondary">Precision with Fence Genius</Badge>
            </div>
          </div>
          <div>
            <AspectRatio ratio={16/9}>
              <img
                src={heroImg}
                alt={altHero}
                loading="eager"
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </header>

        <section className="mt-6">
          <Alert>
            <AlertTitle>Seattle’s Most Common Fence Style</AlertTitle>
            <AlertDescription>
              Chosen by homeowners across Seattle and the Eastside for privacy, curb appeal, and durability in PNW weather.
            </AlertDescription>
          </Alert>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6 md:p-8 glass-card">
            <section aria-labelledby="seattle-common-heading">
              <h2 id="seattle-common-heading" className="text-2xl font-semibold tracking-tight">Why it’s Seattle’s most common fence style</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Excellent privacy with a refined, framed look that fits most neighborhoods and HOAs.</li>
                <li>Cedar performs well in the Pacific Northwest’s wet climate with proper installation.</li>
                <li>Easy to customize with rot boards, caps, and trim while keeping costs predictable.</li>
                <li>Pairs well with sloped lots thanks to Fence Genius grade-following designs.</li>
              </ul>
            </section>

            <h2 className="text-2xl font-semibold tracking-tight">Why homeowners choose picture frame</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Finished border trim frames each panel for a refined, custom look.</li>
              <li>Strong cedar rails and posts with options for added longevity.</li>
              <li>Excellent privacy with clean lines that complement modern and classic homes.</li>
              <li>Precisely planned layouts using Fence Genius to reduce surprises and change orders.</li>
            </ul>
            </Card>

            <Separator />

            <Card className="p-6 md:p-8 glass-card">
            <h3 className="text-xl font-semibold tracking-tight">Details that matter</h3>
            <p className="text-muted-foreground max-w-prose">
              Our standard is #1 grade cedar; upgrade to clear cedar for the most refined finish.
              Add a rot board, board-on-board privacy, or 4" exterior screws for superior hold. For
              maximum post life, we offer 4.125" posts or 6x6 upgrades, and steel core post-on-pipe
              systems. Explore options on our <Link to="/fence-styles#post-options" className="text-primary underline">post options</Link> and
              <Link to="/fence-styles#add-on-options" className="text-primary underline ml-1">add-ons</Link> pages.
            </p>

            <h3 className="text-xl font-semibold tracking-tight">How we build picture frame fences (our standard)</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Two 2x4 rails, two trim boards per panel, and a top 2x4 cap for a clean, framed profile.</li>
              <li>All 2x4 rails are screwed directly into the fence posts for maximum strength and stability.</li>
              <li>Standard posts: 4.125" x 4.125" x 9' set deeper than 2' with approximately 180 lbs of properly mixed concrete.</li>
              <li>Stainless steel fasteners used as standard to prevent corrosion and black streaking common with galvanized hardware.</li>
            </ul>

            <p className="text-muted-foreground max-w-prose">
              These construction details are part of every MyFence.com installation and further enhanced by
              our Fence Genius planning technology for precise layouts, reduced change orders, and a premium finish.
            </p>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AspectRatio ratio={4/3}>
                <img
                  src={images.gallery[0]?.src}
                  alt={images.gallery[0]?.alt}
                  loading="lazy"
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={4/3}>
                <img
                  src={images.gallery[1]?.src}
                  alt={images.gallery[1]?.alt}
                  loading="lazy"
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
            </div>

            <section aria-labelledby="gallery-heading" className="space-y-3">
              <h2 id="gallery-heading" className="text-2xl font-semibold tracking-tight text-center">Project Gallery</h2>
              <Card className="p-4 md:p-6 glass-card">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {images.gallery.slice(0, 9).map((img, idx) => (
                    <AspectRatio key={idx} ratio={4/3}>
                      <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full rounded-md object-cover" />
                    </AspectRatio>
                  ))}
                </div>
              </Card>
            </section>

            <section aria-labelledby="fence-genius-heading" className="space-y-3">
              <h3 id="fence-genius-heading" className="text-xl font-semibold tracking-tight">Fence Genius fence planning for picture frame fences</h3>
              <div className="rounded-lg border bg-card p-4">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/lovable-uploads/38b6f5fc-d1c5-4ebf-a99f-0ea3b357b2a1.png"
                    alt="MyFence.com powered by Fence Genius logo"
                    loading="lazy"
                    className="h-10 w-auto"
                  />
                  <p className="text-sm text-muted-foreground">
                    Our behind-the-scenes planning tech maximizes accuracy and material yield.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Tear-out and set new posts first for a stable, accurate baseline.</li>
                  <li>Collect precise measurements: distance between posts and usable post height.</li>
                  <li>Capture grade change from post to post and any angle changes along the line.</li>
                  <li>
                    Fence Genius designs panels to follow ground contour at both the top and bottom, optimizing
                    material use and delivering the exact result you expect.
                  </li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="key-specs-heading" className="space-y-3 hidden md:block">
              <h2 id="key-specs-heading" className="text-2xl font-semibold tracking-tight">Key specs</h2>
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
                      <TableCell>Two 2x4 rails, screwed directly into posts for strength</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Pickets</TableCell>
                      <TableCell>#1 grade cedar (clear cedar upgrade available)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cap/Trim</TableCell>
                      <TableCell>Top 2x4 cap; picture-frame trim boards on each panel</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Fasteners</TableCell>
                      <TableCell>Stainless steel fasteners standard to prevent corrosion/black streaking</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gates</TableCell>
                      <TableCell>Matching single/double gates; heavy-duty hardware</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium">Heights</TableCell>
                    <TableCell>Available: 4', 5', 6', 8'</TableCell>
                  </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Finishes</TableCell>
                      <TableCell>Natural cedar; stain/seal options available</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>

            <section aria-labelledby="options-heading" className="space-y-3">
              <h2 id="options-heading" className="text-2xl font-semibold tracking-tight">Options & upgrades</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Rot board for added durability at grade</li>
                <li>Board-on-board privacy (no direct sight lines)</li>
                <li>4" exterior screws for superior hold</li>
                <li>6x6 post upgrades</li>
                <li>Steel core post-on-pipe systems</li>
                <li>Decorative post caps and trim variants</li>
                <li>Professional stain and seal options</li>
              </ul>
            </section>

            <section aria-labelledby="gates-heading" className="space-y-3">
              <h2 id="gates-heading" className="text-2xl font-semibold tracking-tight">Gates & hardware</h2>
              <Card className="p-4 md:p-6 glass-card">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {[images.gallery[3], images.gallery[8], images.gallery[17]].map((img, idx) => (
                    <AspectRatio key={idx} ratio={4/3}>
                      <img src={img?.src} alt={img?.alt} loading="lazy" className="h-full w-full rounded-md object-cover" />
                    </AspectRatio>
                  ))}
                </div>
                <ul className="list-disc pl-6 mt-4 text-muted-foreground">
                  <li>Single and double walk/drive gates matched to your fence.</li>
                  <li>Heavy-duty hinges, latches, and optional self-closing hardware.</li>
                  <li>Framed gate construction for stability and long-term alignment.</li>
                </ul>
              </Card>
            </section>

            <section aria-labelledby="pricing-heading" className="space-y-3 hidden md:block">
              <h2 id="pricing-heading" className="text-2xl font-semibold tracking-tight">Pricing & payment options</h2>
              <p className="text-muted-foreground max-w-prose">
                Transparent pricing varies by height, gates, and upgrades. Use the calculator for a quick monthly estimate or request a fast quote.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary">
                  <Link to="/quote" aria-label="Use the Virtual Quote Tool from the picture frame page">Use Virtual Quote Tool</Link>
                </Button>
              </div>
              <PaymentCalculator />
              <p className="text-sm text-muted-foreground">
                Learn more about financing on our <Link to="/financing" className="text-primary underline">Financing</Link> page.
              </p>
            </section>

            <section aria-labelledby="maintenance-heading" className="space-y-3">
              <h2 id="maintenance-heading" className="text-2xl font-semibold tracking-tight">Maintenance & warranty</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Annual rinse and light clean as needed.</li>
                <li>Re-seal or stain every 2–3 years if you prefer a consistent tone.</li>
                <li>Check gate operation and hardware seasonally; tighten if needed.</li>
                <li>Cedar naturally silvers over time; staining helps preserve color.</li>
              </ul>
            </section>

            <section aria-labelledby="reviews-mini-heading" className="space-y-3">
              <h2 id="reviews-mini-heading" className="text-2xl font-semibold tracking-tight">What homeowners say</h2>
              <Card className="p-4 md:p-6 glass-card">
                <div className="grid md:grid-cols-3 gap-4">
                  <figure>
                    <blockquote className="text-sm">“Beautiful picture frame fence and sturdy gates. Crew was professional and fast.”</blockquote>
                    <figcaption className="mt-2 text-xs text-muted-foreground">— A. Nguyen, Seattle</figcaption>
                  </figure>
                  <figure>
                    <blockquote className="text-sm">“Accurate quote, clean trim details, and excellent communication.”</blockquote>
                    <figcaption className="mt-2 text-xs text-muted-foreground">— J. Patel, Bellevue</figcaption>
                  </figure>
                  <figure>
                    <blockquote className="text-sm">“Fence Genius planning nailed the layout on our sloped yard.”</blockquote>
                    <figcaption className="mt-2 text-xs text-muted-foreground">— R. Lee, Kirkland</figcaption>
                  </figure>
                </div>
              </Card>
            </section>

            <section aria-labelledby="service-areas-heading" className="space-y-3">
              <h2 id="service-areas-heading" className="text-2xl font-semibold tracking-tight">Service areas</h2>
              <p className="text-muted-foreground">We build picture frame fences across the Seattle metro.</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-muted-foreground">
                <li>Seattle</li>
                <li>Bellevue</li>
                <li>Kirkland</li>
                <li>Redmond</li>
                <li>Sammamish</li>
                <li>Issaquah</li>
                <li>Bothell</li>
                <li>Shoreline</li>
                <li>Renton</li>
              </ul>
            </section>

            <section aria-labelledby="faq-heading" className="space-y-3">
              <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight">Picture Frame Fence FAQs</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does a cedar picture frame fence last in Seattle?</AccordionTrigger>
                  <AccordionContent>
                    With #1 grade cedar, stainless fasteners, and proper install, you can expect 15–25+ years. Stain/seal extends life.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is this style good for pets and privacy?</AccordionTrigger>
                  <AccordionContent>
                    Yes—tight picket spacing limits gaps, and board-on-board upgrades remove direct sight lines for maximum privacy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Will it handle wind or slopes?</AccordionTrigger>
                  <AccordionContent>
                    Our planning accounts for grade changes; rails screw into posts and panels follow terrain. Proper post setting improves wind resistance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do I need HOA approval?</AccordionTrigger>
                  <AccordionContent>
                    Many HOAs approve picture frame fences. We’ll provide specs/photos to streamline approval if needed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section aria-labelledby="about-heading" className="space-y-3">
              <h2 id="about-heading" className="text-2xl font-semibold tracking-tight">About MyFence.com</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
                <div>
                  <p className="text-muted-foreground max-w-prose">
                    We’re a father & son team serving the Seattle area—licensed, insured, and backed by a 2-year workmanship warranty. Powered by Fence Genius for precise planning.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button asChild>
                      <Link to="/quote" aria-label="Start your picture frame fence quote">Start Your Quote</Link>
                    </Button>
                    <Button asChild variant="secondary">
                      <Link to="/contact" aria-label="Contact MyFence.com">Contact Us</Link>
                    </Button>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden ring-2 ring-primary/60 shadow-glow">
                  <AspectRatio ratio={4/3}>
                    <img
                      src="/lovable-uploads/5c7618b0-120d-445a-9d0a-d2bb8269b552.png"
                      alt="Father and son team from MyFence.com in Seattle standing by a cedar fence"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </section>

            <section aria-labelledby="permits-heading" className="space-y-3">
              <h2 id="permits-heading" className="text-2xl font-semibold tracking-tight">Permits and HOA notes (Seattle/Eastside)</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Verify property lines, setbacks, and any shared fence agreements.</li>
                <li>Always call for utility locates before digging.</li>
                <li>HOA approvals may specify height or look—picture frame is typically HOA-friendly.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Questions? <Link to="/fence-styles" className="text-primary underline">See styles</Link> or <Link to="/contact" className="text-primary underline">contact us</Link>.
              </p>
            </section>

            <section aria-labelledby="comparison-heading" className="space-y-3 hidden md:block">
              <h2 id="comparison-heading" className="text-2xl font-semibold tracking-tight">Style comparison</h2>
              <div className="md:overflow-x-auto overflow-x-visible">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="md:w-[180px]">Attribute</TableHead>
                      <TableHead>Picture Frame</TableHead>
                      <TableHead>Board-on-Board</TableHead>
                      <TableHead>Horizontal Cedar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Privacy</TableCell>
                      <TableCell>High</TableCell>
                      <TableCell>Very High (overlapping boards)</TableCell>
                      <TableCell>High</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Look</TableCell>
                      <TableCell>Clean framed trim</TableCell>
                      <TableCell>Deep shadow lines</TableCell>
                      <TableCell>Modern horizontal lines</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cost</TableCell>
                      <TableCell>$$</TableCell>
                      <TableCell>$$$</TableCell>
                      <TableCell>$$–$$$ (by board width)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Best for lots</TableCell>
                      <TableCell>Sloped or level</TableCell>
                      <TableCell>Maximum privacy</TableCell>
                      <TableCell>Modern homes; level runs preferred</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>

            <section aria-labelledby="testimonials-heading" className="space-y-3">
              <h2 id="testimonials-heading" className="text-2xl font-semibold tracking-tight">What local homeowners say</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <blockquote>
                    <p>“The picture frame trim made our yard feel finished. Install was fast and clean.”</p>
                    <footer className="mt-2 text-sm text-muted-foreground">— A. Nguyen, Bellevue</footer>
                  </blockquote>
                </Card>
                <Card className="p-4">
                  <blockquote>
                    <p>“Great privacy and it follows our slope perfectly. Would hire again.”</p>
                    <footer className="mt-2 text-sm text-muted-foreground">— J. Ramirez, Seattle</footer>
                  </blockquote>
                </Card>
              </div>
            </section>

            <section aria-labelledby="related-heading" className="space-y-3">
              <h2 id="related-heading" className="text-2xl font-semibold tracking-tight">Related styles</h2>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li><Link to="/fence-styles" className="text-primary underline">Board-on-Board Cedar</Link></li>
                <li><Link to="/fence-styles" className="text-primary underline">Horizontal Cedar</Link></li>
              </ul>
            </section>

            <div className="mt-6 text-sm text-muted-foreground">
              Looking for something slightly different? Explore our <Link to="/fence-styles" className="text-primary underline">full fence styles</Link>.
            </div>
          </div>

          <aside className="md:col-span-1">
            <InlineQuoteForm context="Picture Frame Fence Page" />
          </aside>
        </section>

        <section className="mt-12 space-y-4" aria-labelledby="installation-video-heading">
          <h2 id="installation-video-heading" className="text-2xl font-semibold tracking-tight">Picture Frame Fence Installation Video</h2>
          <p className="text-muted-foreground max-w-prose">
            Watch how we install a picture frame fence step by step.
          </p>
          <AspectRatio ratio={16/9}>
            <iframe
              src="https://www.youtube.com/embed/9k_jcZ3eEKk?rel=0"
              title="Picture Frame Fence Installation Video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full rounded-md"
            />
          </AspectRatio>
          <p className="text-sm">
            Prefer to watch on YouTube?{" "}
            <a href="https://youtu.be/9k_jcZ3eEKk?si=rEWXZY0CcnPZYVZ3" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Open the installation video
            </a>
          </p>
        </section>
      </article>
    </main>
  );
};

export default PictureFrameFence;
