/** Title-case a URL slug, e.g. "upper-tehaleh" -> "Upper Tehaleh". */
export function titleizeSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Build a friendly "Neighborhood, City" (or "City") label from a service-area path.
 * Returns "" for non service-area paths.
 *   /service-areas/bellevue                  -> "Bellevue"
 *   /service-areas/bonney-lake/upper-tehaleh -> "Upper Tehaleh, Bonney Lake"
 */
export function locationLabelFromPath(pathname: string): string {
  const segments = (pathname || "").split("?")[0].split("#")[0].split("/").filter(Boolean);
  if (segments[0] !== "service-areas") return "";
  const rest = segments.slice(1);
  if (rest.length >= 2) return `${titleizeSlug(rest[1])}, ${titleizeSlug(rest[0])}`;
  if (rest.length === 1) return titleizeSlug(rest[0]);
  return "";
}
