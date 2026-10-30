import type { Metadata } from "next";
import TwinLakesPage from "@/components/neighborhoods/TwinLakesPage";

export const metadata: Metadata = {
  title:
    "Twin Lakes Federal Way Fence Installation | Lakeside & HOA Lots | MyFence.com",
  description:
    "Fence installation in Twin Lakes, Federal Way, WA. Cedar privacy and picture-frame fences for lakeside and golf-course lots, with HOA approval and city rules explained. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/federal-way/twin-lakes",
  },
};

export default function TwinLakesFederalWayPage() {
  return <TwinLakesPage />;
}
