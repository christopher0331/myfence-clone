/**
 * Centralized site configuration
 * This ensures consistent branding across all pages and components
 */
export const SITE_CONFIG = {
  /**
   * Full company name used for all site metadata, SEO, and branding
   */
  fullName: "MyFence.com",

  /**
   * Legal entity name for business documents and structured data
   */
  legalName: "MyFence.com",

  /**
   * Short name for space-constrained areas
   */
  shortName: "MyFence",

  /**
   * Primary business phone number
   */
  phone: "(253)455-1885",

  /**
   * Formatted phone number for tel: links
   */
  phoneLink: "2534551885",

  /**
   * Business address
   */
  address: {
    street: "",
    city: "Maple Valley",
    state: "WA",
    zip: "98038",
    country: "US",
  },

  /**
   * Geographic coordinates for maps
   */
  coordinates: {
    latitude: 47.3926,
    longitude: -122.0465,
  },

  /**
   * Primary service area
   */
  serviceArea: {
    city: "Seattle",
    state: "Washington",
    radius: 28, // miles from Maple Valley
  },

  /**
   * Website URLs
   */
  url: "https://myfence.com",
  logoUrl: "https://myfence.com/myfence-logo.png",

  /**
   * Business description
   */
  tagline: "Father & Son Fence Company in Seattle",
  description: "Professional cedar fence installation in Seattle using Fence Genius technology",
} as const;

/**
 * Default site name to use throughout the application
 * Uses fullName for consistency
 */
export const DEFAULT_SITE_NAME = SITE_CONFIG.fullName;
