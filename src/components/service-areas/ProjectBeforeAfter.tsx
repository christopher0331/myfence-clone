import {
  buildImageUrl,
  getProjectBeforeAfterPairs,
} from "@/lib/serviceAreaPhotoUtils";

const MAX_PAIRS = 6;

interface ProjectBeforeAfterProps {
  city?: string;
  neighborhood?: string;
  fenceStyleSlug?: string;
}

export default function ProjectBeforeAfter({
  city,
  neighborhood,
  fenceStyleSlug,
}: ProjectBeforeAfterProps) {
  const pairs = getProjectBeforeAfterPairs({
    city,
    neighborhood,
    fenceStyleSlug,
  }).slice(0, MAX_PAIRS);

  if (!pairs.length) return null;

  const locationLabel = neighborhood
    ? `${neighborhood}, ${city}`
    : city || pairs[0]?.fenceStyle || "this project";

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Before &amp; after
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          One job site in {locationLabel} — same property, before the crew
          started and after the fence went in.
        </p>
        <div className="space-y-12 max-w-5xl mx-auto">
          {pairs.map((pair) => (
            <div
              key={pair.workOrderId}
              className="grid md:grid-cols-2 gap-6"
            >
              <figure className="overflow-hidden rounded-xl border bg-background shadow-sm">
                <img
                  src={buildImageUrl(pair.beforeFile, 800)}
                  alt={pair.beforeAlt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-4 py-2 text-sm font-medium text-muted-foreground">
                  Before
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border bg-background shadow-sm">
                <img
                  src={buildImageUrl(pair.afterFile, 800)}
                  alt={pair.afterAlt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-4 py-2 text-sm font-medium text-muted-foreground">
                  After
                  {pair.fenceStyle ? ` · ${pair.fenceStyle}` : ""}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
