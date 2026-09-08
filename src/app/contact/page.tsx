import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact MyFence | Seattle Fence Contractor",
  description:
    "Talk with a Seattle fence contractor about installation, pricing, or a site visit. Call (253) 455-1885 or send a message.",
  alternates: {
    canonical: "https://myfence.com/contact",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
