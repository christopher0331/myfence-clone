import type { Metadata } from "next";
import ShadowBoxFence from "@/components/pages/fence-styles/ShadowBoxFence";

export const metadata: Metadata = {
  title: "Shadow Box Fence Installation | Good Neighbor Cedar Fence | MyFence.com",
  description:
    "Cedar shadow box fence installation in the Seattle area. Alternating boards finished identically on both sides — the 'good neighbor' fence. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/shadow-box-fence",
  },
  openGraph: {
    title: "Shadow Box Fence Installation | Good Neighbor Cedar Fence | MyFence.com",
    description:
      "Cedar shadow box fence with alternating boards on both sides of the rails. Identical finished appearance from either yard, with airflow between boards.",
    url: "https://myfence.com/fence-styles/shadow-box-fence",
    images: [
      {
        url: "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Maple-Valley/Maple-Woods-Shadow-Box-Fence-1.webp",
        width: 1200,
        height: 630,
        alt: "Cedar shadow box fence in Maple Woods, Maple Valley, WA by MyFence.com",
      },
    ],
  },
};

export default function ShadowBoxFencePage() {
  return <ShadowBoxFence />;
}
