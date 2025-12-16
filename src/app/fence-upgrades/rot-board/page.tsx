import type { Metadata } from "next";
import RotBoardPage from "@/components/pages/upgrades/RotBoardPage";

export const metadata: Metadata = {
  title: "2x4 Rot Board Fence Upgrade | Prevent Cedar Rot | Seattle",
  description:
    "Protect your Seattle fence with a pressure-treated 2x4 rot board. Near-zero ground clearance, prevents cedar rot from soil contact, and deters digging dogs.",
  alternates: {
    canonical: "https://myfence.com/fence-upgrades/rot-board",
  },
};

export default function RotBoardRoute() {
  return <RotBoardPage />;
}
