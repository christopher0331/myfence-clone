import type { Metadata } from "next";
import ThreeRailRanchFence from "@/components/pages/fence-styles/ThreeRailRanchFence";

export const metadata: Metadata = {
  title: "3-Rail Ranch Fence Installation | Pressure Treated Post-and-Rail | MyFence.com",
  description:
    "3-rail ranch fence installation in the Seattle area. 6x6 pressure treated posts with three pressure treated 2x8 horizontal rails — clean, open boundary fencing for driveways, property lines, and large lots. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/3-rail-ranch-fence",
  },
  openGraph: {
    title: "3-Rail Ranch Fence Installation | Pressure Treated Post-and-Rail | MyFence.com",
    description:
      "3-rail ranch fence — 6x6 pressure treated posts with three pressure treated 2x8 horizontal rails. Open, post-and-rail style for driveways, property lines, and large lots.",
    url: "https://myfence.com/fence-styles/3-rail-ranch-fence",
    images: [
      {
        url: "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Kent/Kent-3-Rail-Fence-2.webp",
        width: 1920,
        height: 1080,
        alt: "3-rail ranch fence with pressure treated posts and 2x8 rails in Kent, WA by MyFence.com",
      },
    ],
  },
};

export default function ThreeRailRanchFencePage() {
  return <ThreeRailRanchFence />;
}
