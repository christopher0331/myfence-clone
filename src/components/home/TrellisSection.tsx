import { Card, CardContent } from "@/components/ui/card";

export const TrellisSection = () => {
  return (
    <section className="container py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Trellis & Pergola Systems</h2>
      <p className="text-muted-foreground mt-2 max-w-2xl">Architectural trellis accents built to last — perfect for Northwest gardens.</p>
      <Card className="mt-6">
        <CardContent className="p-0 overflow-hidden">
          <img src="/lovable-uploads/881d3263-4c0d-4f6f-b48f-92eda8da6f09.png" alt="Cedar trellis and pergola system by MyFence.com, designed with Fence Genius technology" loading="lazy" className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] object-cover" />
        </CardContent>
      </Card>
    </section>
  );
};
