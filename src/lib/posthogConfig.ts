/**
 * PostHog isolation for the client sites we manage:
 *
 *   One billed PostHog *organization* (Reactiv Labs) holds one *project* per client
 *   (MyFence.com, Naws Law, Texas Best, Lane HBS, Seattle Fence, Onsite, …).
 *   Same login (admin@reactivlabs.com); switch projects in the top-left picker.
 *   Do not send two companies into the same project token.
 *
 * This deployment is identified by NEXT_PUBLIC_SITE_ID (the client slug) and talks only
 * to that client's project via NEXT_PUBLIC_POSTHOG_KEY.
 */

export const SITE_ID = String(process.env.NEXT_PUBLIC_SITE_ID ?? "myfence").trim() || "myfence";

const MYFENCE_PROJECT_KEY = "phc_ASuETBWQm9J6g2tw7vc9YBZZFigxqFr32oiRhWuFgRdx";

/**
 * Project API key. Other client sites must set NEXT_PUBLIC_POSTHOG_KEY to *their*
 * org's token — never reuse the MyFence key.
 */
export const POSTHOG_KEY =
  String(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "").trim() ||
  (SITE_ID === "myfence" ? MYFENCE_PROJECT_KEY : "");

export const POSTHOG_HOST = String(process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com").trim();

/** Attached to every event so a miswired key is still filterable. */
export function posthogSuperProperties(): Record<string, string> {
  return {
    client: SITE_ID,
    site: SITE_ID,
  };
}

export type PosthogQueueItem = { event: string; properties?: Record<string, unknown> };

declare global {
  interface Window {
    __phEventQueue?: PosthogQueueItem[];
    /** @deprecated flushed for one deploy after the queue rename */
    __mfPosthogQueue?: PosthogQueueItem[];
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
      register?: (properties: Record<string, unknown>) => void;
    };
  }
}
