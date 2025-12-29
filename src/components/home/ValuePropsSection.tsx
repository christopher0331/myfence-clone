import Link from "next/link";
import { WARRANTY_CONSTANTS } from "@/constants/warranty";

export const ValuePropsSection = () => {
  return (
    <section className="container pt-20 md:pt-28 lg:pt-36 pb-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">Top-Rated Fence Company in Seattle</h2>
          <p className="text-muted-foreground mt-2">From classic cedar privacy to sleek horizontal and metal accents, we bring your vision to life.</p>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">Transparent Fence Pricing in Seattle</h2>
          <p className="text-muted-foreground mt-2">
            Use our Virtual Quote Tool for a fast estimate, then we confirm on-site with
            {" "}
            <Link href="/fence-genius" className="text-primary hover:underline">
              Fence Genius
            </Link>
            .
          </p>
        </div>
        <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold">{WARRANTY_CONSTANTS.TITLE}</h2>
          <p className="text-muted-foreground mt-2">{WARRANTY_CONSTANTS.FULL_DESCRIPTION}</p>
        </div>
      </div>
    </section>
  );
};
