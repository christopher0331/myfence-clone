import type { Metadata } from "next";
import CedarAluminumHybridFence from "@/components/pages/fence-styles/CedarAluminumHybridFence";

export const metadata: Metadata = {
  title: "Cedar/Steel Hybrid Fence Seattle | Modern Privacy Fence",
  description: "Premium cedar/steel hybrid fence in Seattle. 26 gauge corrugated steel panels with HDP NoFade™ paint and cedar framing. Zero maintenance, ultimate privacy. Starting at $80/LF. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/cedar-steel-hybrid-fence",
  },
  openGraph: {
    title: "Cedar/Steel Hybrid Fence Seattle | Modern Privacy Fence",
    description: "Premium cedar/steel hybrid fence in Seattle. 26 gauge corrugated steel panels with HDP NoFade™ paint and cedar framing. Zero maintenance, ultimate privacy. Starting at $80/LF. Call (253) 455-1885.",
    url: "https://myfence.com/fence-styles/cedar-steel-hybrid-fence",
    images: [
      {
        url: "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Maple-Valley/Daybreak-at-River-Ridge-Steel-Cedar-Hybrid-4.webp",
        width: 1200,
        height: 630,
        alt: "Cedar and steel hybrid fence in Seattle by MyFence.com",
      },
    ],
  },
};

export default function CedarSteelHybridFencePage() {
  return <CedarAluminumHybridFence />;
}

