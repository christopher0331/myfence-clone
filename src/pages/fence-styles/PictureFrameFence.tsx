import Seo from "@/components/Seo";
import InlineQuoteForm from "@/components/forms/InlineQuoteForm";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const heroImg = "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png";
const altHero = "Picture frame cedar fence installed in Seattle by MyFence.com";

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
    areaServed: {
      "@type": "Place",
      name: "Seattle, WA metro area",
    },
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
    ],
  };

  const structuredData = [serviceStructuredData, faqStructuredData];

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
              A picture frame fence adds a clean, finished border around every panel. Built in select
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

        <section className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Why homeowners choose picture frame</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Finished border trim frames each panel for a refined, custom look.</li>
              <li>Strong cedar rails and posts with options for added longevity.</li>
              <li>Excellent privacy with clean lines that complement modern and classic homes.</li>
              <li>Precisely planned layouts using Fence Genius to reduce surprises and change orders.</li>
            </ul>

            <Separator />

            <h3 className="text-xl font-semibold tracking-tight">Details that matter</h3>
            <p className="text-muted-foreground max-w-prose">
              Choose standard select-knot cedar or upgrade to clear cedar for the most refined finish.
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AspectRatio ratio={4/3}>
                <img
                  src="/lovable-uploads/dca011a1-b730-4b73-b631-80847936dfcd.png"
                  alt="3-rail picture frame fence detail in Seattle"
                  loading="lazy"
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={4/3}>
                <img
                  src="/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png"
                  alt="Solid board picture frame panel in cedar"
                  loading="lazy"
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
            </div>

            <section aria-labelledby="fence-genius-heading" className="space-y-3">
              <h3 id="fence-genius-heading" className="text-xl font-semibold tracking-tight">Powered by Fence Genius</h3>
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

            <div className="mt-6 text-sm text-muted-foreground">
              Looking for something slightly different? Explore our <Link to="/fence-styles" className="text-primary underline">full fence styles</Link>.
            </div>
          </div>

          <aside className="md:col-span-1">
            <InlineQuoteForm context="Picture Frame Fence Page" />
          </aside>
        </section>
      </article>
    </main>
  );
};

export default PictureFrameFence;
