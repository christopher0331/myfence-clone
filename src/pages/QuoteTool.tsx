import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";

const QuoteTool = () => {
  return (
    <main>
      <Seo
        title="Instant Online Quote | MyFence.com Seattle"
        description="Get an instant fence quote online with our secure tool. See pricing for your project in minutes."
        canonical="https://myfence.com/quote"
      />
      <section className="relative py-10">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed"
          style={{ backgroundImage: "url('/lovable-uploads/28e8e878-729d-417b-ad3f-53643cf19710.png')" }}
          aria-hidden="true"
        />
        <div className="container relative">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Instant Online Quote</h1>
          <p className="text-muted-foreground max-w-2xl">Use our online tool to get real-time pricing for your fence project.</p>

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
          <p className="text-xs text-muted-foreground mt-2">
            If the tool doesn't load, open it in a new tab: <a href="https://seattlefencequote.com/" className="underline" target="_blank" rel="noopener noreferrer">seattlefencequote.com</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default QuoteTool;
