import type { Metadata } from "next";
import PineLakePage from "@/components/neighborhoods/PineLakePage";

export const metadata: Metadata = {
  title: "Pine Lake Sammamish Fence Installation | Lakeside & Family Lots | MyFence.com",
  description:
    "Professional fence installation in Pine Lake, Sammamish, WA. Cedar, hogwire & hybrid fencing for lakeside lots, school-area yards, and view-conscious properties. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/pine-lake",
  },
};

export default function PineLakeSammamishPage() {
  return <PineLakePage />;
}
