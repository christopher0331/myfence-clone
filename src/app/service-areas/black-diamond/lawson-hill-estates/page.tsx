import type { Metadata } from "next";
import LawsonHillEstatesPage from "@/components/neighborhoods/LawsonHillEstatesPage";

export const metadata: Metadata = {
  title: "Lawson Hill Estates Fence Installation | Black Diamond | MyFence.com",
  description: "Fence installation in Lawson Hill Estates, Black Diamond. Cedar, hogwire & hybrid fencing for foothills properties. Rocky soil specialists. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/black-diamond/lawson-hill-estates",
  },
};

export default function LawsonHillEstatesBlackDiamondPage() {
  return <LawsonHillEstatesPage />;
}
