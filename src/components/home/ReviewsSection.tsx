import { Card, CardContent } from "@/components/ui/card";

interface ReviewsSectionProps {
  reviewsRef: React.RefObject<HTMLDivElement>;
}

export const ReviewsSection = ({ reviewsRef }: ReviewsSectionProps) => {
  return (
    <section className="container py-12 md:py-16" aria-labelledby="reviews-heading">
      <h2 id="reviews-heading" className="text-2xl md:text-3xl font-bold">What Seattle Homeowners Say About Us</h2>
      <p className="text-muted-foreground mt-2 max-w-2xl">Choosing a Seattle fence contractor is an investment—make it with the father & son team that builds it right the first time. If you're searching for a fence company near me, our customers agree you're in the right place.</p>
      <Card className="mt-6">
        <CardContent className="p-6">
          <div
            ref={reviewsRef}
            className="w-full min-h-[40px] text-sm text-muted-foreground"
            aria-live="polite"
          >
            Loading reviews…
          </div>
          <noscript>
            <p className="text-sm text-muted-foreground">Enable JavaScript to view our Trustindex reviews.</p>
          </noscript>
        </CardContent>
      </Card>
    </section>
  );
};
