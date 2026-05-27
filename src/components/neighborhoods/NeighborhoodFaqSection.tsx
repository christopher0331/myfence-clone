import { Card } from "@/components/ui/card";
import type { NeighborhoodFaqItem } from "@/components/neighborhoods/structuredData";

interface NeighborhoodFaqSectionProps {
  title: string;
  items: NeighborhoodFaqItem[];
}

/**
 * Visible FAQ content that must match FAQPage JSON-LD on the same page.
 */
export default function NeighborhoodFaqSection({
  title,
  items,
}: NeighborhoodFaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
          <div className="space-y-4">
            {items.map((faq) => (
              <Card key={faq.question} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
