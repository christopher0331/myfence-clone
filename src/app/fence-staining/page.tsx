import type { Metadata } from "next";
import FenceStainingPage from "@/components/pages/FenceStainingPage";

export const metadata: Metadata = {
  title: "Cedar Fence Staining Seattle: When & Why to Stain",
  description:
    "Professional cedar fence staining guide for Seattle's wet climate. Protect your investment with expert tips. 30+ years experience. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/should-i-stain-my-fence",
  },
};

export default function FenceStainingRoute() {
  return <FenceStainingPage />;
}
