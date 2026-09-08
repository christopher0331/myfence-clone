import { Card, CardContent } from "@/components/ui/card";

interface ReviewsSectionProps {
  reviewsRef: React.RefObject<HTMLDivElement>;
}

export const ReviewsSection = ({ reviewsRef }: ReviewsSectionProps) => {
  return (
    <section className="container py-12 md:py-16" aria-labelledby="reviews-heading">
      <h2 id="reviews-heading" className="text-2xl md:text-3xl font-bold">What Seattle Homeowners Say About Us</h2>
      <p className="text-muted-foreground mt-2 max-w-2xl">Choosing a Seattle fence company is an investment—make it with the father & son team that installs it right the first time. If you are searching for fence installation near me, our customers agree you are in the right place.</p>
      <div ref={reviewsRef} aria-live="polite" />
    </section>
  );
};
