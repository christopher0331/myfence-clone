"use client";

import { useTrustindexReviews } from "@/hooks/useTrustindexReviews";
import { ReviewsSection } from "@/components/home/ReviewsSection";

const ReviewsSectionWithData = () => {
  const { reviewsRef } = useTrustindexReviews();

  return <ReviewsSection reviewsRef={reviewsRef} />;
};

export default ReviewsSectionWithData;
