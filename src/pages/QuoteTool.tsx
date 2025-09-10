import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const QuoteTool = () => {
  return (
    <main>
      <Seo
        title="Free Seattle Fence Quote Tool | Instant Online Estimates 2024"
        description="Get instant fence quotes for Seattle properties. Real-time pricing for cedar, horizontal, hogwire fences. Powered by Fence Genius. Call (253) 455-1885."
        canonical="https://myfence.com/quote"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Seattle Fence Quote Tool",
          "description": "Instant online fence quote calculator for Seattle properties",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "provider": {
            "@type": "LocalBusiness",
            "name": "MyFence.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Seattle",
              "addressRegion": "WA"
            },
            "telephone": "+1-253-455-1885"
          }
        }}
      />
      <section className="relative py-10">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed"
          style={{ backgroundImage: "url('/lovable-uploads/28e8e878-729d-417b-ad3f-53643cf19710.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/60" aria-hidden="true" />
        <div className="container relative z-10">
          <h1 className="text-4xl font-bold tracking-tight mb-3 text-background">Instant Online Quote</h1>
          <p className="max-w-2xl text-background/90">Use our online tool to get real-time pricing for your fence project. After your quote, we'll use <Link to="/fence-genius" className="underline hover:no-underline text-background">Fence Genius technology</Link> to ensure perfect installation.</p>

          <Card className="mt-8">
            <CardContent className="p-0">
              <iframe
                src="https://seattlefencequote.com/"
                width="100%"
                height="750"
                frameBorder={0}
                loading="lazy"
                title="SeattleFenceQuote.com - Instant Online Quote"
                className="w-full h-[750px]"
              />
            </CardContent>
          </Card>
          <p className="text-xs text-background/80 mt-2">
            If the tool doesn't load, open it in a new tab: <a href="https://seattlefencequote.com/" className="underline text-background" target="_blank" rel="noopener noreferrer">seattlefencequote.com</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default QuoteTool;
