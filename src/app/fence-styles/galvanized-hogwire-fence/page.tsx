import type { Metadata } from "next";
import GalvanizedHogwireFence from "@/components/pages/fence-styles/GalvanizedHogwireFence";

export const metadata: Metadata = {
  title: "5' Galvanized Hogwire Fence Seattle | Durable & Cost-Effective",
  description: "Affordable 5' galvanized hogwire fence for Seattle homes. Strong wire panels with cedar frame - perfect for moderate height privacy. Call (253) 455-1885.",
  alternates: {
    canonical: "https://myfence.com/fence-styles/galvanized-hogwire-fence",
  },
  openGraph: {
    title: "5' Galvanized Hogwire Fence Seattle | Durable & Cost-Effective",
    description: "Affordable 5' galvanized hogwire fence for Seattle homes. Strong wire panels with cedar frame - perfect for moderate height privacy. Call (253) 455-1885.",
    url: "https://myfence.com/fence-styles/galvanized-hogwire-fence",
    images: [
      {
        url: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/test_input_Converted/IMG_4554.webp?updatedAt=1766269883425&tr=w-1200,q-75",
        width: 1200,
        height: 800,
        alt: "5' galvanized hogwire fence hero image by MyFence.com",
      },
    ],
  },
};

export default function GalvanizedHogwireFencePage() {
  return <GalvanizedHogwireFence />;
}

