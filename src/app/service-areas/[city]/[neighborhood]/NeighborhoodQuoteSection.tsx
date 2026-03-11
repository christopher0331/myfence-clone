"use client";

import InlineQuoteForm from "@/components/forms/InlineQuoteForm";

interface NeighborhoodQuoteSectionProps {
  neighborhoodName: string;
  cityName: string;
}

export default function NeighborhoodQuoteSection({
  neighborhoodName,
  cityName,
}: NeighborhoodQuoteSectionProps) {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>
          </div>
          <InlineQuoteForm
            context={`Neighborhood: ${neighborhoodName}, ${cityName}, WA`}
          />
        </div>
      </div>
    </section>
  );
}
