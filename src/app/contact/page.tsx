import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact MyFence | Seattle Fence Contractor",
  description:
    "Request a quote or ask a question. Call (253) 455-1885 or message MyFence.com — Seattle's father & son fence pros.",
  alternates: {
    canonical: "https://myfence.com/contact",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
