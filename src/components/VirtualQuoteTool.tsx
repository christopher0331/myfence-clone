import { Card, CardContent } from "@/components/ui/card";
import SeattleFenceQuoteEmbed from "@/components/SeattleFenceQuoteEmbed";

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

        <Card className="w-full overflow-visible">
          <CardContent className="p-0 overflow-visible">
            <SeattleFenceQuoteEmbed />
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground mt-2 text-center">
          If the tool doesn&apos;t load, open it in a new tab:{" "}
          <a
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
