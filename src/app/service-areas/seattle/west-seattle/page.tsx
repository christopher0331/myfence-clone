import type { Metadata } from "next";
import WestSeattlePage from "@/components/neighborhoods/WestSeattlePage";

export const metadata: Metadata = {
  title:
    "West Seattle Fence Installation | Seattle | Alki Wind & Hillside Lots | MyFence.com",
  description:
    "Professional fence installation in West Seattle, Seattle, WA. Cedar, hogwire & hybrid fencing for Alki salt air, California Ave SW lots, and the drop toward Delridge. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/seattle/west-seattle",
  },
};

export default function WestSeattleSeattlePage() {
  return <WestSeattlePage />;
}
