import type { Metadata } from "next";
import PostOnPipePage from "@/components/pages/upgrades/PostOnPipePage";

export const metadata: Metadata = {
  title: "Post on Pipe Fence Posts | Rot-Free Foundation | Seattle",
  description:
    "Eliminate fence post rot with our Post on Pipe system. Galvanized steel pipe foundation prevents soil contact damage. Perfect for Pacific Northwest fences.",
  alternates: {
    canonical: "https://myfence.com/fence-upgrades/post-on-pipe",
  },
};

export default function PostOnPipeRoute() {
  return <PostOnPipePage />;
}
