import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildImageUrl,
  buildResponsiveSrcSet,
  getCityNameBySlug,
  getNeighborhoodNameBySlugs,
  getNeighborhoodPhotosBySlugs,
} from "@/lib/serviceAreaPhotoUtils";
import NeighborhoodQuoteSection from "./NeighborhoodQuoteSection";
import FeaturedProject from "@/components/service-areas/FeaturedProject";

type NeighborhoodPageProps = {
  params: {
    city: string;
    neighborhood: string;
  };
};

export function generateMetadata({ params }: NeighborhoodPageProps): Metadata {
  const cityName = getCityNameBySlug(params.city);
  const neighborhoodName = getNeighborhoodNameBySlugs(
    params.city,
    params.neighborhood
  );

  if (!cityName || !neighborhoodName) {
    return {
      title: "Neighborhood Service Area | MyFence.com",
      description: "Fence installation and repair services by neighborhood.",
    };
  }

  return {
    title: `${neighborhoodName} Fence Installation | ${cityName} | MyFence.com`,
    description: `Professional fence installation in ${neighborhoodName}, ${cityName}, WA. See recent projects and get a free quote. Call (253) 455-1885.`,
    alternates: {
      canonical: `https://myfence.com/service-areas/${params.city}/${params.neighborhood}`,
    },
  };
}

export default function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const cityName = getCityNameBySlug(params.city);
  const neighborhoodName = getNeighborhoodNameBySlugs(
    params.city,
    params.neighborhood
  );
  const photos = getNeighborhoodPhotosBySlugs(params.city, params.neighborhood);

  if (!cityName || !neighborhoodName || !photos.length) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 md:pt-24 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-4xl mx-auto">
          <Link
            href={`/service-areas/${params.city}`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            &larr; Back to {cityName}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            {neighborhoodName} Fence Installation
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Professional fence installation and replacement in{" "}
            {neighborhoodName}, {cityName}. Browse recent projects below and
            request your free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="tel:12534551885">
              <span className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Call (253) 455-1885
              </span>
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Recent {neighborhoodName} Projects
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            Fence installations completed by MyFence.com in {neighborhoodName},{" "}
            {cityName}.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <figure
                key={photo.file}
                className="overflow-hidden rounded-xl border bg-background"
              >
                <img
                  src={buildImageUrl(photo.file, 800)}
                  srcSet={buildResponsiveSrcSet(photo.file, photo.width)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={photo.neighborhoodAlt || photo.cityAlt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProject city={cityName} neighborhood={neighborhoodName} />

      {/* Quote Form (client component) */}
      <NeighborhoodQuoteSection
        neighborhoodName={neighborhoodName}
        cityName={cityName}
      />

      {/* Adjacent links */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Also serving nearby neighborhoods in {cityName}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/service-areas/${params.city}`}
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {cityName} overview
            </Link>
            <Link
              href="/service-areas"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              All service areas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
