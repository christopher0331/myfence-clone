import type { Metadata } from "next";
import PreStainingPage from "@/components/pages/PreStainingPage";

export const metadata: Metadata = {
  title: "Pre-Stained Cedar Fences Seattle | MyFence.com",
  description:
    "Professional pre-staining from Seattle's fence builder. Full cedar protection including hidden areas unreachable after install. Superior to on-site staining.",
  alternates: {
    canonical: "https://myfence.com/pre-staining-cedar-fence",
  },
};

export default function PreStainingRoute() {
  return <PreStainingPage />;
}
