import type { Metadata } from "next";
import MirrorMontPage from "@/components/neighborhoods/MirrorMontPage";

export const metadata: Metadata = {
  title: "Mirrormont Fence Installation | Issaquah | MyFence.com",
  description: "Mountain fence installation in Mirrormont, Issaquah. Wildlife-resistant cedar, hogwire & hybrid fencing for Squak Mountain properties. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/issaquah/mirrormont" },
};

export default function MirrorMontIssaquahPage() {
  return <MirrorMontPage />;
}
