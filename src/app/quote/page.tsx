import type { Metadata } from "next";
import QuoteToolPage from "@/components/pages/QuoteToolPage";

export const metadata: Metadata = {
  title: "Free Seattle Fence Installation Quote | Instant Estimate",
  description:
    "Get an instant fence installation quote for Seattle properties. Real-time pricing for cedar, hogwire, and hybrid fences. Powered by Fence Genius. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/quote",
  },
};

export default function QuoteRoute() {
  return <QuoteToolPage />;
}
