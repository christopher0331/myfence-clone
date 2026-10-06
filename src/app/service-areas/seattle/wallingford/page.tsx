import type { Metadata } from "next";
import WallingfordPage from "@/components/neighborhoods/WallingfordPage";

export const metadata: Metadata = {
  title:
    "Wallingford Fence Installation | Seattle | Bungalow Lots & Northlake Grade | MyFence.com",
  description:
    "Professional fence installation in Wallingford, Seattle, WA. Cedar, hogwire & hybrid fencing for N 45th bungalows, Gas Works edges, and the drop toward Northlake. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seattle/wallingford",
  },
};

export default function WallingfordSeattlePage() {
  return <WallingfordPage />;
}
