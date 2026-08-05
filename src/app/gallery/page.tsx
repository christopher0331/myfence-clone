import type { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Seattle Fence Builder Gallery | Real Project Photos",
  description:
    "Browse real fence project photos from Seattle's fence builder. Cedar, hogwire, hybrid & custom designs across the metro. See our craftsmanship. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/gallery",
  },
};

export default function GalleryRoute() {
  return <GalleryPage />;
}
