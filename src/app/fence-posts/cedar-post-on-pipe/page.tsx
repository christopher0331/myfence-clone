import type { Metadata } from "next";
import CedarPostOnPipe from "@/components/pages/posts/CedarPostOnPipe";

export const metadata: Metadata = {
  title: "Cedar Post on Pipe | Rot-Free Cedar Posts | Seattle",
  description:
    "Cedar Post on Pipe system with through-bolt reinforcement for enhanced wind resistance. Consistent cedar aesthetic with zero ground rot. Premium upgrade for Seattle fences.",
  alternates: {
    canonical: "https://myfence.com/fence-posts/cedar-post-on-pipe",
  },
};

export default function CedarPostOnPipeRoute() {
  return <CedarPostOnPipe />;
}


