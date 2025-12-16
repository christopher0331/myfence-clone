import type { Metadata } from "next";
import FourPointOneTwoFivePostsPage from "@/components/pages/posts/FourPointOneTwoFivePostsPage";

export const metadata: Metadata = {
  title: "4.125\" x 4.125\" Fence Posts - Best Value & Strength | MyFence.com",
  description:
    "Discover why 4.125\" x 4.125\" fence posts are the best choice for Seattle fences. Superior strength, less warping, and excellent value.",
  alternates: {
    canonical: "https://myfence.com/fence-posts/4-125-posts",
  },
};

export default function FourPointOneTwoFivePostsRoute() {
  return <FourPointOneTwoFivePostsPage />;
}
