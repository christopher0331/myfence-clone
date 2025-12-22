import type { Metadata } from "next";
import GalvanizedHogwireFence from "@/components/pages/fence-styles/GalvanizedHogwireFence";

export const metadata: Metadata = {
  title: "5' Galvanized Hogwire Fence Seattle | Durable & Cost-Effective",
  description: "Affordable 5' galvanized hogwire fence for Seattle homes. Strong wire panels with cedar frame - perfect for moderate height privacy. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/galvanized-hogwire-fence",
  },
};

export default function GalvanizedHogwireFencePage() {
  return <GalvanizedHogwireFence />;
}

