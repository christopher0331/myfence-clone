import type { Metadata } from "next";
import MirrorMontPage from "@/components/neighborhoods/MirrorMontPage";

export const metadata: Metadata = {
  title: "Mirrormont Fence Installation | Issaquah | MyFence.com",
  description: "Fence installation in Mirrormont, in the Tiger Mountain foothills southeast of Issaquah. Cedar and hybrid fencing, with covenant review before wire mesh. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/issaquah/mirrormont" },
};

export default function MirrorMontIssaquahPage() {
  return <MirrorMontPage />;
}
