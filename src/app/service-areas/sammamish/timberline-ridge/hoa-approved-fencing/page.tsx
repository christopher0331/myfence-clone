import type { Metadata } from "next";
import TimberlineRidgeHoaPage from "@/components/neighborhoods/TimberlineRidgeHoaPage";

export const metadata: Metadata = {
  title: "Timberline Ridge HOA Fencing Guide | Sammamish | MyFence",
  description:
    "Timberline Ridge fence rules in Sammamish from the association's public website: the standard 6 ft fence, clear stain, banned chain link, ACC approval, and the official forms. MyFence handles the HOA application. Not affiliated with the association.",
  alternates: {
    canonical: "https://myfence.com/service-areas/sammamish/timberline-ridge/hoa-approved-fencing",
  },
};

export default function TimberlineRidgeHoaRoutePage() {
  return <TimberlineRidgeHoaPage />;
}
