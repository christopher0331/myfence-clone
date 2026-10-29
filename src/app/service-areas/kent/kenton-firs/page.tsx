import type { Metadata } from "next";
import KentonFirsPage from "@/components/neighborhoods/KentonFirsPage";

export const metadata: Metadata = {
  title:
    "Kenton Firs Kent Fence Installation | AACC & City Rules | MyFence",
  description:
    "Fence installation in Kenton Firs, Kent, WA. Cedar fences planned around the Kenton Firs covenants, the AACC site visit, and City of Kent rules. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/kent/kenton-firs",
  },
};

export default function KentonFirsKentPage() {
  return <KentonFirsPage />;
}
