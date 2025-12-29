import type { Metadata } from "next";
import PrivacyPolicyPage from "@/components/pages/legal/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy - MyFence.com",
  description:
    "Learn about MyFence.com's privacy policy and how we protect your personal information when you use our fencing services.",
  alternates: {
    canonical: "https://myfence.com/privacy-policy",
  },
};

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicyPage />;
}


