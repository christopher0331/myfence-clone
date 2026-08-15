import type { NeighborhoodFaqItem } from "@/components/neighborhoods/structuredData";

export type HoaTrustIcon = "clipboard" | "mail" | "shield" | "waves" | "mapPin" | "file";

export interface HoaDownloadableForm {
  href: string;
  title: string;
  timing: string;
  blurb: string;
}

export interface HoaProcessStep {
  title: string;
  body: string;
}

export interface HoaHelpCard {
  title: string;
  body: string;
  /** Optional lucide icon key rendered above the title */
  icon?: HoaTrustIcon;
}

export interface HoaTrustItem {
  label: string;
  icon: HoaTrustIcon;
}

export interface HoaFaqItem {
  q: string;
  a: string;
}

export interface HoaApprovedFencingConfig {
  /** Absolute canonical URL for the HOA page */
  canonical: string;
  /** Absolute URL for the parent neighborhood / city page */
  parentUrl: string;
  /** Relative path used by the back link */
  parentHref: string;
  parentLinkLabel: string;
  /** Breadcrumb parent name (e.g. "Klahanie, Sammamish") */
  parentCrumbName: string;
  metaTitle: string;
  metaDescription: string;
  /** Location line under the map pin */
  locationLabel: string;
  h1: string;
  heroIntro: string;
  /** Primary hero CTA label (anchors to #hoa-forms) */
  downloadCtaLabel: string;
  trustItems: HoaTrustItem[];
  formsHeading: string;
  formsIntro: string;
  /** Optional mailto shown in forms intro (linked) */
  formsSubmitEmail?: string;
  forms: HoaDownloadableForm[];
  processHeading: string;
  steps: HoaProcessStep[];
  reviewHeading: string;
  reviewIntro: string;
  reviewBullets: string[];
  /** Closing paragraph after review bullets; use parentHref for the install page link */
  reviewFooterBeforeLink: string;
  reviewFooterLinkLabel: string;
  reviewFooterAfterLink?: string;
  helpHeading: string;
  helpCards: HoaHelpCard[];
  leadFenceStyleName: string;
  faqHeading: string;
  faqs: HoaFaqItem[];
  /** FAQ items for JSON-LD (can mirror faqs) */
  schemaFaqs: NeighborhoodFaqItem[];
  ctaHeading: string;
  ctaBody: string;
}
