import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: "Fence Builder FAQ | Pricing, Permits & Install | MyFence.com",
  description:
    "Seattle fence builder FAQ covering pricing, permits, cedar vs hogwire, HOA rules, and install timelines. Straight answers before you quote. Call (253) 455-1885.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/faq`,
  },
};

export default function FaqPage() {
  return <FaqSection isPage={true} />;
}
