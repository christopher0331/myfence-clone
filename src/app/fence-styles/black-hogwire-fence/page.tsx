import type { Metadata } from "next";
import BlackHogwireFence from "@/components/pages/fence-styles/BlackHogwireFence";

export const metadata: Metadata = {
  title: "6' Black Hogwire Fence Seattle | Security & Style Combined",
  description: "Secure 6' black hogwire fence for Seattle properties. Perfect for wooded backyards - keeps animals out while maintaining openness. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/black-hogwire-fence",
  },
};

export default function BlackHogwireFencePage() {
  return <BlackHogwireFence />;
}

