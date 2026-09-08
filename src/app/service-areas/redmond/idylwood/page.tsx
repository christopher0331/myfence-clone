import type { Metadata } from "next";
import IdylwoodPage from "@/components/neighborhoods/IdylwoodPage";

export const metadata: Metadata = {
  title:
    "Idylwood Redmond Fence Installation | Lake Sammamish Hillsides | MyFence.com",
  description:
    "Professional fence installation in Idylwood, Redmond, WA. Cedar, hogwire & hybrid fencing for hillside lots along West Lake Sammamish Parkway and Idylwood Beach Park. Free quotes. (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/service-areas/redmond/idylwood",
  },
};

export default function IdylwoodRedmondPage() {
  return <IdylwoodPage />;
}
