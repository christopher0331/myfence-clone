import type { Metadata } from "next";
import BeaverLakePage from "@/components/neighborhoods/BeaverLakePage";

export const metadata: Metadata = {
  title: "Beaver Lake Sammamish Fence Installation | Lakeside & Forest Lots | MyFence.com",
  description:
    "Professional fence installation in Beaver Lake, Sammamish, WA. Cedar, hogwire & hybrid fencing for lakeside lots, school-area yards, and forest-edge properties. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/beaver-lake",
  },
};

export default function BeaverLakeSammamishPage() {
  return <BeaverLakePage />;
}
