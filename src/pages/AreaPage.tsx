import Seo from "@/components/Seo";
import { Link, useParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const AREAS: Record<string, { name: string; hero: string; metaTitle: string; metaDescription: string; }> = {
  "seattle": {
    name: "Seattle",
    hero: "/lovable-uploads/641f2848-38da-4ddc-aeae-4d93503830ca.png",
    metaTitle: "Seattle Fence Contractor | MyFence.com",
    metaDescription: "Premium cedar and hog wire fences in Seattle, WA. Family-owned craftsmanship with Fence Genius precision. Free estimates.",
  },
  "bellevue": {
    name: "Bellevue",
    hero: "/lovable-uploads/5f84fd61-a240-4aab-9d39-9728f6a27f36.png",
    metaTitle: "Bellevue Fence Contractor | MyFence.com",
    metaDescription: "Cedar and modern hog wire fencing in Bellevue, WA. Durable, beautiful, and built precisely. Get your free quote.",
  },
  "redmond": {
    name: "Redmond",
    hero: "/lovable-uploads/4b59fcdd-ded2-42f1-bb1c-9eb01268a427.png",
    metaTitle: "Redmond Fence Contractor | MyFence.com",
    metaDescription: "Expert cedar fence installation in Redmond, WA. Modern styles, transparent pricing, trusted locally.",
  },
  "issaquah": {
    name: "Issaquah",
    hero: "/lovable-uploads/96a63d79-9269-47b1-96ef-9727feb60536.png",
    metaTitle: "Issaquah Fence Contractor | MyFence.com",
    metaDescription: "Custom cedar and hog wire fences in Issaquah, WA. Built to last in the PNW. Request a free estimate.",
  },
  "renton": {
    name: "Renton",
    hero: "/lovable-uploads/304e6ac7-d932-4522-a07f-a481b9dac9c2.png",
    metaTitle: "Renton Fence Contractor | MyFence.com",
    metaDescription: "Quality cedar fences in Renton, WA. Father & son team delivering precise builds with Fence Genius.",
  },
  "maple-valley": {
    name: "Maple Valley",
    hero: "/lovable-uploads/8ea10d1b-63ce-44fe-a29f-12f029415560.png",
    metaTitle: "Maple Valley Fence Contractor | MyFence.com",
    metaDescription: "Modern and classic cedar fencing in Maple Valley, WA. Beautiful results, excellent service.",
  },
};

const canonicalBase = "https://myfence.com";

const AreaPage = () => {
  const { slug = "seattle" } = useParams();
  const area = AREAS[slug] ?? AREAS["seattle"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Thanks!", description: "We received your request and will reach out shortly." });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MyFence.com",
    url: `${canonicalBase}/areas/${slug}`,
    telephone: "+1-253-455-1885",
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: "WA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: area.name,
    },
    serviceType: [
      "Cedar Fence Installation",
      "Hog Wire Fence Installation",
      "Fence Repair",
      "Custom Fence Design",
    ],
  };

  return (
    <main>
      <Seo
        title={`${area.metaTitle}`}
        description={area.metaDescription}
        canonical={`${canonicalBase}/areas/${slug}`}
        structuredData={structuredData}
      />

      <section className="relative overflow-hidden">
        <div className="h-64 sm:h-80 md:h-96 w-full">
          <img
            src={area.hero}
            alt={`${area.name} cedar fence project by MyFence.com`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container py-8">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Fence Contractor in {area.name}, WA</h1>
          <p className="text-muted-foreground max-w-2xl">
            Premium cedar and modern hog wire fencing in {area.name}. As a father-and-son team, we build beautiful, long-lasting fences with precision using our Fence Genius system.
          </p>
          <div className="mt-4 flex gap-4">
            <Link to="/quote" className="underline text-primary">Instant Online Quote</Link>
            <Link to="/gallery" className="underline text-primary">View Gallery</Link>
          </div>
        </div>
      </section>

      <section className="container py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <article>
          <h2 className="text-2xl font-semibold">Why homeowners in {area.name} choose us</h2>
          <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Premium cedar, rot-resistant builds, and clean modern styles</li>
            <li>Transparent pricing and fast, accurate estimates</li>
            <li>Expert craftsmanship with 2-year workmanship warranty</li>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <img src="/lovable-uploads/be14d195-34f5-4c25-9618-a506bed8ecc1.png" alt={`${area.name} modern cedar fence close-up`} loading="lazy" className="w-full h-40 object-cover rounded-lg" />
            <img src="/lovable-uploads/81e50e54-927c-4bb5-b22e-9cf6336b8154.png" alt={`${area.name} hog wire fence detail`} loading="lazy" className="w-full h-40 object-cover rounded-lg" />
          </div>
        </article>

        <aside>
          <div className="rounded-lg border p-6 shadow-elevated bg-card">
            <h2 className="text-2xl font-semibold mb-4">Request a Free Estimate</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input id="name" name="name" required className="w-full border rounded-md px-3 py-2 bg-background" placeholder="Jane Doe" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input id="email" type="email" name="email" required className="w-full border rounded-md px-3 py-2 bg-background" placeholder="jane@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                  <input id="phone" name="phone" required className="w-full border rounded-md px-3 py-2 bg-background" placeholder="(555) 555-5555" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Project details</label>
                <textarea id="message" name="message" className="w-full border rounded-md px-3 py-2 bg-background min-h-28" placeholder={`Looking for a cedar fence in ${area.name}...`} />
              </div>
              <button type="submit" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                Get My Free Estimate
              </button>
              <p className="text-xs text-muted-foreground">Or call <a href="tel:+12534551885" className="underline">(253) 455-1885</a></p>
            </form>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default AreaPage;
