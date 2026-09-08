import type { Metadata } from "next";
import RavensdalePage from "@/components/neighborhoods/RavensdalePage";

export const metadata: Metadata = {
  title: "Ravensdale Fence Installation | Maple Valley | MyFence.com",
  description:
    "Fence installation in Ravensdale near Maple Valley. Cedar picture frame, privacy & hogwire fencing for wooded rural lots. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/maple-valley/ravensdale" },
};

export default function RavensdaleMapleValleyPage() {
  return <RavensdalePage />;
}
