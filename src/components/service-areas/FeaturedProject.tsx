import { buildImageUrl, slugifyLocation } from "@/lib/serviceAreaPhotoUtils";
import featuredProjectsData from "@/data/featuredProjects.json";

interface FeaturedProjectEntry {
  city: string;
  neighborhood: string | null;
  photoFile: string;
  fenceStyle: string;
  seoTitle: string;
  description: string;
  altText: string;
  lat: number;
  lng: number;
}

const projects = featuredProjectsData as FeaturedProjectEntry[];

function findProject(
  city: string,
  neighborhood?: string
): FeaturedProjectEntry | null {
  const citySlug = slugifyLocation(city);
  const nbSlug = neighborhood ? slugifyLocation(neighborhood) : null;

  return (
    projects.find((p) => {
      const pCity = slugifyLocation(p.city);
      const pNb = p.neighborhood ? slugifyLocation(p.neighborhood) : null;
      if (nbSlug) return pCity === citySlug && pNb === nbSlug;
      return pCity === citySlug && !pNb;
    }) ?? null
  );
}

interface FeaturedProjectProps {
  city: string;
  neighborhood?: string;
}

export default function FeaturedProject({
  city,
  neighborhood,
}: FeaturedProjectProps) {
  const project = findProject(city, neighborhood);
  if (!project) return null;

  const location = project.neighborhood
    ? `${project.neighborhood}, ${project.city}`
    : project.city;

  const mobileUrl = buildImageUrl(project.photoFile, 400);
  const desktopUrl = buildImageUrl(project.photoFile, 600);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: buildImageUrl(project.photoFile),
    description: project.altText,
    name: project.seoTitle,
    contentLocation: {
      "@type": "Place",
      name: `${location}, WA`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: project.lat,
        longitude: project.lng,
      },
    },
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Featured {location} Project
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="overflow-hidden rounded-xl border bg-muted/50 shadow-lg">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={mobileUrl}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={desktopUrl}
                />
                <img
                  src={desktopUrl}
                  alt={project.altText}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl md:text-2xl font-semibold">
                {project.seoTitle}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-muted-foreground">
                <strong>Style:</strong> {project.fenceStyle}
                {" · "}
                <strong>Location:</strong> {location}, WA
              </p>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
}
