import type { ReactNode } from "react";
import FenceStyleJobPhotos from "@/components/service-areas/FenceStyleJobPhotos";

export default function FenceStylesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <FenceStyleJobPhotos />
    </>
  );
}
