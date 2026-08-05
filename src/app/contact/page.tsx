import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact MyFence | Seattle Fence Builder",
  description:
    "Reach Seattle's fence builder for quotes and project questions. Father & son team with Fence Genius. Call (253) 455-1885 or send a message today.",
  alternates: {
    canonical: "https://myfence.com/contact",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
