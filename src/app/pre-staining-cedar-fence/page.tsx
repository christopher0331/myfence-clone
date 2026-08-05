import type { Metadata } from "next";
import PreStainingPage from "@/components/pages/PreStainingPage";

export const metadata: Metadata = {
  title: "Pre-Stained Cedar Fences Seattle | Superior Protection",
  description:
    "Discover our professional pre-staining process for cedar fences. Complete protection including hidden areas that can't be reached after installation. Superior to traditional on-site staining.",
  alternates: {
    canonical: "https://myfence.com/pre-staining-cedar-fence",
  },
};

export default function PreStainingRoute() {
  return <PreStainingPage />;
}
