import type { Metadata } from "next";
import BlackHogwireFence from "@/components/pages/fence-styles/BlackHogwireFence";

export const metadata: Metadata = {
  title: "6' Black Hogwire Fence Seattle | Security & Style Combined",
  description: "Secure 6' black hogwire fence for Seattle properties. Perfect for wooded backyards - keeps animals out while maintaining openness. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/black-hogwire-fence",
  },
  openGraph: {
    title: "6' Black Hogwire Fence Seattle | Security & Style Combined",
    description: "Secure 6' black hogwire fence for Seattle properties. Perfect for wooded backyards - keeps animals out while maintaining openness. Call (253) 455-1885.",
    url: "https://myfence.com/fence-styles/black-hogwire-fence",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/f729a8a5-2693-400d-96c0-a8869a528f05.png",
        width: 1200,
        height: 630,
        alt: "6' black hogwire fence in Seattle by MyFence.com",
      },
    ],
  },
};

export default function BlackHogwireFencePage() {
  return <BlackHogwireFence />;
}

