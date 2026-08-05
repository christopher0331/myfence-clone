import type { Metadata } from "next";
import QuoteToolPage from "@/components/pages/QuoteToolPage";

export const metadata: Metadata = {
  title: "Free Seattle Fence Quote | Instant Online Estimate",
  description:
    "Get instant fence quotes for Seattle properties. Real-time pricing for cedar, horizontal, hogwire fences. Powered by Fence Genius. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/quote",
  },
};

export default function QuoteRoute() {
  return <QuoteToolPage />;
}
