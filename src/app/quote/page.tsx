import type { Metadata } from "next";
import QuoteToolPage from "@/components/pages/QuoteToolPage";

export const metadata: Metadata = {
  title: "Free Fence Quote | Seattle Fence Builder | MyFence.com",
  description:
    "Get your free fence quote from a Seattle fence builder. Instant cedar, hogwire & hybrid pricing powered by Fence Genius. No obligation. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/quote",
  },
};

export default function QuoteRoute() {
  return <QuoteToolPage />;
}
