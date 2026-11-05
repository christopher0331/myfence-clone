import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact MyFence | Talk to Our Team",
  description:
    "Talk to our team about fence installation, pricing, or a site visit. Call (253) 455-1885 or send a message.",
  alternates: {
    canonical: "https://myfence.com/contact",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
