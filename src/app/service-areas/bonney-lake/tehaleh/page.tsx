import type { Metadata } from "next";
import TehalehHubPage from "@/components/neighborhoods/TehalehHubPage";

const OG_IMAGE =
  "https://ik.imagekit.io/xft9mcl5v/service-area-photos/Bonney-Lake/Bonney-Lake-Clear-Cedar-Picture-Frame-Fence-1.webp?tr=w-1200,h-630,c-maintain_ratio";

export const metadata: Metadata = {
  title: "Tehaleh Fence Installation | Bonney Lake HOA Fencing | MyFence.com",
  description:
    "Fence installation in Tehaleh, the master-planned community south of Bonney Lake. Upper & Lower Tehaleh, Design Manual fence standards, and Design Review prep. Free quotes. (253) 455-1885.",
  alternates: { canonical: "https://myfence.com/service-areas/bonney-lake/tehaleh" },
  openGraph: {
    title: "Tehaleh Fence Installation | Bonney Lake HOA Fencing | MyFence.com",
    description:
      "Fence installation in Tehaleh near Bonney Lake. Upper & Lower Tehaleh pages, Design Manual fence standards, and Design Review prep.",
    url: "https://myfence.com/service-areas/bonney-lake/tehaleh",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Clear cedar picture frame fence installed by MyFence.com in the Bonney Lake area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tehaleh Fence Installation | Bonney Lake HOA Fencing | MyFence.com",
    description:
      "Cedar, hogwire and hybrid fencing for Tehaleh homes, planned around the community's Design Manual and Design Review.",
    images: [OG_IMAGE],
  },
};

export default function TehalehBonneyLakePage() {
  return <TehalehHubPage />;
}
