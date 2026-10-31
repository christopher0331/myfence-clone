import type { Metadata } from "next";
import TimberlineRidgePage from "@/components/neighborhoods/TimberlineRidgePage";

export const metadata: Metadata = {
  title: "Timberline Ridge Fence Installation | Sammamish | MyFence",
  description: "Fence installation in Timberline Ridge, Sammamish. Timberline Ridge HOA fence rules, the 6 ft standard-style wood fence, and we handle the ACC application. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/sammamish/timberline-ridge" },
};

export default function TimberlineRidgeSammamishPage() {
  return <TimberlineRidgePage />;
}
