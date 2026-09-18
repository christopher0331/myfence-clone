import type { Metadata } from "next";
import MossBayPage from "@/components/neighborhoods/MossBayPage";

export const metadata: Metadata = {
  title:
    "Moss Bay Kirkland Fence Installation | Waterfront & Hillside Lots | MyFence.com",
  description:
    "Professional fence installation in Moss Bay, Kirkland, WA. Cedar, hogwire & hybrid fencing for waterfront condos, townhomes, and hillside lots along Lake Street S and Lake Washington Blvd. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kirkland/moss-bay",
  },
};

export default function MossBayKirklandPage() {
  return <MossBayPage />;
}
