import type { Metadata } from "next";
import DiscountsPage from "@/components/pages/DiscountsPage";

export const metadata: Metadata = {
  title: "Mystery Fence Discount | MyFence.com Seattle",
  description:
    "Solve our daily riddle and spin the wheel for exclusive fence discounts. Get up to 15% off cedar fencing, free processing, and more!",
  alternates: {
    canonical: "https://myfence.com/discounts",
  },
};

export default function DiscountsRoute() {
  return <DiscountsPage />;
}
