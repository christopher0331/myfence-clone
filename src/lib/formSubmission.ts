/** Full URL of the page where a lead form was submitted (client-only). */
export function getFormSubmissionPage(): string {
  if (typeof window === "undefined") return "";
  return window.location.href;
}
