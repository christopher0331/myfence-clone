import type { Metadata } from "next";
import DiscountsPage from "@/components/pages/DiscountsPage";

export const metadata: Metadata = {
  title: "Mystery Fence Discount | MyFence.com",
  description:
    "Solve our daily riddle and spin for exclusive fence discounts from Seattle's fence builder. Up to 15% off cedar fencing & more. Play today!",
  alternates: {
    canonical: "https://myfence.com/discounts",
  },
  openGraph: {
    title: "Mystery Fence Discount | MyFence.com",
    description:
      "Solve our daily riddle and spin for exclusive fence discounts from Seattle's fence builder. Up to 15% off cedar fencing & more. Play today!",
    url: "https://myfence.com/discounts",
    images: [
      {
        url: "https://ik.imagekit.io/xft9mcl5v/Webp_Converter_Folder_webp/Gemini_Generated_Image_eze25zeze25zeze2%20(1).png?updatedAt=1764900185686",
        width: 1200,
        height: 630,
        alt: "MyFence.com Mystery Fence Discount",
      },
    ],
  },
};

export default function DiscountsRoute() {
  return <DiscountsPage />;
}
