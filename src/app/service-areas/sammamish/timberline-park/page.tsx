import type { Metadata } from "next";
import TimberlineParkPage from "@/components/neighborhoods/TimberlineParkPage";

export const metadata: Metadata = {
  title: "Timberline Park Fence Installation | Sammamish | MyFence",
  description: "Fence installation in Timberline Park, Sammamish. Timberline Park lot owners association fence rules, no chain link, matching replacements, and we handle the ACC request. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/sammamish/timberline-park" },
};

export default function TimberlineParkSammamishPage() {
  return <TimberlineParkPage />;
}
