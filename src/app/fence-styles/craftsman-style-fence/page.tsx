import type { Metadata } from "next";
import CraftsmanStyleFence from "@/components/pages/fence-styles/CraftsmanStyleFence";

export const metadata: Metadata = {
  title: "Craftsman Style Fence | Seattle | MyFence.com",
  description: "Cedar craftsman style fences in Seattle with alternating board pattern for wind flow and visibility. 3 rails, 3 trim, top cap. Get a fast quote today.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/craftsman-style-fence",
  },
};

export default function CraftsmanStyleFencePage() {
  return <CraftsmanStyleFence />;
}

