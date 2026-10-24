import type { Metadata } from "next";
import NorkirkPage from "@/components/neighborhoods/NorkirkPage";

export const metadata: Metadata = {
  title:
    "Norkirk Kirkland Fence Installation | Bungalow Blocks & Alleys | MyFence.com",
  description:
    "Professional fence installation in Norkirk, Kirkland, WA. Cedar, hogwire & hybrid fencing for bungalow lots, alley-grid yards, and Crestwoods Park blocks. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kirkland/norkirk",
  },
};

export default function NorkirkKirklandPage() {
  return <NorkirkPage />;
}
