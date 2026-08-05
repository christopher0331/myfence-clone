import type { Metadata } from "next";
import ReferralsPage from "@/components/pages/ReferralsPage";

export const metadata: Metadata = {
  title: "Refer a Friend | $150 Amazon Gift Card | MyFence.com",
  description:
    "Refer a friend to Seattle's fence builder and you both receive a $150 Amazon gift card after their fence is installed. No limit on referrals!",
  alternates: {
    canonical: "https://myfence.com/referrals",
  },
};

export default function ReferralsRoute() {
  return <ReferralsPage />;
}
