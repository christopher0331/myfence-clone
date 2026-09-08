import type { Metadata } from "next";
import JuanitaPage from "@/components/neighborhoods/JuanitaPage";

export const metadata: Metadata = {
  title: "Juanita Kirkland Fence Installation | Lake Washington Waterfront | MyFence.com",
  description:
    "Waterfront fence installation in Juanita, Kirkland. Marine-grade cedar, hogwire & hybrid fencing for Lake Washington properties. View-preserving designs. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kirkland/juanita",
  },
};

export default function JuanitaKirklandPage() {
  return <JuanitaPage />;
}
