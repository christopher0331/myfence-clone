import type { Metadata } from "next";
import FenceStylesIndexPage from "@/components/fence-styles/FenceStylesIndexPage";

export const metadata: Metadata = {
  title: "Seattle Cedar Fence Styles: Picture Frame, Horizontal",
  description:
    "Expert fence styles in Seattle, WA: picture frame cedar, horizontal, hogwire, craftsman designs. 30+ years experience. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles",
  },
};

export default function FenceStylesPage() {
  return <FenceStylesIndexPage />;
}
