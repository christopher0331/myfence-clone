import SeattleFenceQuoteEmbed from "@/components/SeattleFenceQuoteEmbed";

interface VirtualQuoteToolProps {
  fenceStyleName: string;
}

const VirtualQuoteTool = ({ fenceStyleName }: VirtualQuoteToolProps) => {
  return (
    <section className="py-16 border-t bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Use our virtual tool to estimate your {fenceStyleName} costs for your property
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get real-time pricing for your {fenceStyleName} project with our interactive quote tool.
          </p>
        </div>

        <SeattleFenceQuoteEmbed />
      </div>
    </section>
  );
};

export default VirtualQuoteTool;
