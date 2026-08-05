import type { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Seattle Fence Gallery | Before & After Photos | MyFence",
  description:
    "View stunning fence installations across Seattle neighborhoods. Cedar, horizontal, hogwire, and custom designs. 30+ years craftsmanship. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/gallery",
  },
};

export default function GalleryRoute() {
  return <GalleryPage />;
}
