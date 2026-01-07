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
        url: "https://myfence.com/lovable-uploads/cedar-aluminum-hybrid-fence-hero.png",
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

