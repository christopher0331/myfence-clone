import { MapPin, ExternalLink } from "lucide-react";

export interface LocalAttraction {
  name: string;
  url: string;
  description: string;
}

export interface AboutTheAreaProps {
  cityName: string;
  neighborhoodName?: string;
  attractionsHeading?: string;
  attractionsImage?: string;
  attractionsImageAlt?: string;
  attractions: LocalAttraction[];
  localLivingHeading?: string;
  localLivingImage?: string;
  localLivingImageAlt?: string;
  localLivingContent: React.ReactNode;
}

export default function AboutTheArea({
  cityName,
  neighborhoodName,
  attractionsHeading,
  attractionsImage,
  attractionsImageAlt,
  attractions,
  localLivingHeading,
  localLivingImage,
  localLivingImageAlt,
  localLivingContent,
}: AboutTheAreaProps) {
  const areaName = neighborhoodName ?? cityName;

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-10">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Discover {areaName}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Attractions Column */}
          <div className="space-y-6">
            {attractionsImage && (
              <div className="overflow-hidden rounded-xl">
                <img
                  src={attractionsImage}
                  alt={attractionsImageAlt ?? `${areaName} attractions and local gems`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <h3 className="text-xl md:text-2xl font-bold">
              {attractionsHeading ??
                `Explore ${areaName}'s Top Attractions & Local Gems`}
            </h3>
            <ul className="space-y-4">
              {attractions.map((attraction) => (
                <li key={attraction.name} className="leading-relaxed">
                  <a
                    href={attraction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {attraction.name}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <span className="text-muted-foreground">
                    : {attraction.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Living Column */}
          <div className="space-y-6">
            {localLivingImage && (
              <div className="overflow-hidden rounded-xl">
                <img
                  src={localLivingImage}
                  alt={localLivingImageAlt ?? `Living in ${areaName}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <h3 className="text-xl md:text-2xl font-bold">
              {localLivingHeading ?? "Local Living & Community"}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {localLivingContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
