import type { Metadata } from "next";
import BoardOnBoardPage from "@/components/pages/upgrades/BoardOnBoardPage";

export const metadata: Metadata = {
  title: "Board on Board Fence | Maximum Privacy Seattle WA",
  description:
    "Board on board fencing in Seattle eliminates gaps for complete privacy. Perfect for dogs, no seasonal gaps, stunning 3D visual depth. Expert installation by MyFence.com",
  alternates: {
    canonical: "https://myfence.com/fence-upgrades/board-on-board",
  },
};

export default function BoardOnBoardRoute() {
  return <BoardOnBoardPage />;
}


