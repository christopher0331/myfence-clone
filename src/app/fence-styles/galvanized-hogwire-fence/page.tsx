import type { Metadata } from "next";
import GalvanizedHogwireFence from "@/components/pages/fence-styles/GalvanizedHogwireFence";

export const metadata: Metadata = {
  title: "5' Galvanized Hogwire Fence Seattle | Durable & Cost-Effective",
  description: "Affordable 5' galvanized hogwire fence for Seattle homes. Strong wire panels with cedar frame - perfect for moderate height privacy. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/galvanized-hogwire-fence",
  },
  openGraph: {
    title: "5' Galvanized Hogwire Fence Seattle | Durable & Cost-Effective",
    description: "Affordable 5' galvanized hogwire fence for Seattle homes. Strong wire panels with cedar frame - perfect for moderate height privacy. Call (253) 455-1885.",
    url: "https://myfence.com/fence-styles/galvanized-hogwire-fence",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/84481d29-7e44-45ca-8f45-7cb118cf360e.png",
        width: 1200,
        height: 630,
        alt: "Galvanized hogwire fence in Seattle by MyFence.com",
      },
    ],
  },
};

export default function GalvanizedHogwireFencePage() {
  return <GalvanizedHogwireFence />;
}

