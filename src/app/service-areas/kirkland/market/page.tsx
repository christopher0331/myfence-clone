import type { Metadata } from "next";
import MarketPage from "@/components/neighborhoods/MarketPage";

export const metadata: Metadata = {
  title:
    "Market Kirkland Fence Installation | Historic Waterfront Lots | MyFence.com",
  description:
    "Professional fence installation in Market, Kirkland, WA. Cedar, hogwire & hybrid fencing for historic hillside lots along Waverly Way, Market Street, and Lake Washington. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kirkland/market",
  },
};

export default function MarketKirklandPage() {
  return <MarketPage />;
}
