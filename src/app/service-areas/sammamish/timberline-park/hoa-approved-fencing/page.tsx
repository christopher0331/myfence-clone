import type { Metadata } from "next";
import TimberlineParkHoaPage from "@/components/neighborhoods/TimberlineParkHoaPage";

export const metadata: Metadata = {
  title: "Timberline Park HOA Fencing Guide | Sammamish | MyFence",
  description:
    "Timberline Park fence rules in Sammamish from the association's published CC&Rs: ACC approval, no barbed wire, chain link or fiberglass, matching replacements, the 30-day review window, and the official ACC form. MyFence handles the HOA application. Not affiliated with the association.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/timberline-park/hoa-approved-fencing",
  },
};

export default function TimberlineParkHoaRoutePage() {
  return <TimberlineParkHoaPage />;
}
