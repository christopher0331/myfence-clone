import type { Metadata } from "next";
import CraftsmanStyleFence from "@/components/pages/fence-styles/CraftsmanStyleFence";

export const metadata: Metadata = {
  title: "Craftsman Style Fence | Seattle | MyFence.com",
  description: "Cedar craftsman style fences in Seattle with alternating board pattern for wind flow and visibility. 3 rails, 3 trim, top cap. Get a fast quote today.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/craftsman-style-fence",
  },
  openGraph: {
    title: "Craftsman Style Fence | Seattle | MyFence.com",
    description: "Cedar craftsman style fences in Seattle with alternating board pattern for wind flow and visibility. 3 rails, 3 trim, top cap. Get a fast quote today.",
    url: "https://myfence.com/fence-styles/craftsman-style-fence",
    images: [
      {
        url: "https://myfence.com/lovable-uploads/7f3fe64f-1dd1-4d94-b585-bf9cb4ae1bd6.png",
        width: 1200,
        height: 630,
        alt: "Craftsman style cedar fence in Seattle by MyFence.com",
      },
    ],
  },
};

export default function CraftsmanStyleFencePage() {
  return <CraftsmanStyleFence />;
}

