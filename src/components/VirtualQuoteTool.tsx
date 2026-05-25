import { Card, CardContent } from "@/components/ui/card";

interface VirtualQuoteToolProps {
  fenceStyleName: string;
}

const VirtualQuoteTool = ({ fenceStyleName }: VirtualQuoteToolProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/20 -mx-8 px-8">
      <div className="w-full px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Use our virtual tool to estimate your {fenceStyleName} costs for your property
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get real-time pricing for your {fenceStyleName} project with our interactive quote tool.
          </p>
        </div>
        
        <Card className="w-full">
          <CardContent className="p-0">
            {/* Height set tall enough that the full multi-step quote flow
                fits without an internal scrollbar. If the embedded tool
                grows past this we'll either bump the value or wire up
                postMessage-based dynamic sizing (iframe-resizer pattern). */}
            <iframe
              src="https://seattlefencequote.com/?source=myfence"
              width="100%"
              height="2400"
              frameBorder={0}
              scrolling="no"
              loading="lazy"
              title="SeattleFenceQuote.com - Instant Online Quote"
              className="w-full h-[2400px] rounded-lg"
            />
          </CardContent>
        </Card>
        
        <p className="text-xs text-muted-foreground mt-2 text-center">
          If the tool doesn't load, open it in a new tab: <a 
            href="https://seattlefencequote.com/" 
            className="underline text-primary hover:text-primary/80" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            seattlefencequote.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default VirtualQuoteTool;