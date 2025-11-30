// Global warranty constants - update here to change across entire site
export const WARRANTY_CONSTANTS = {
  // Core warranty information
  MONTHS: 36,
  YEARS: 3, // Kept for backward compatibility (represents 36 months / 3 years)
  TITLE: "36 Month Workmanship Warranty",
  SHORT_TITLE: "36 Month Warranty",
  BADGE_TEXT: "36 Month Warranty",
  
  // Descriptions for different contexts
  FULL_DESCRIPTION: "We stand behind our work with a comprehensive 36 month warranty on all installations — your peace of mind guaranteed.",
  CARD_DESCRIPTION: "We stand behind our workmanship with a comprehensive 36 month warranty on all installations for your peace of mind.",
  INLINE_TEXT: "36 month warranty on all installations",
  ABOUT_TEXT: "Licensed, insured, and backed by a 36 month workmanship warranty",
  
  // Formatted text for different uses
  CHECKMARK_TEXT: "✓ 36 Month Workmanship Warranty on all installations",
  BULLET_POINT: "• 36 month warranty on all installations",
  
  // Helper functions for dynamic text
  getFullTitle: () => `${WARRANTY_CONSTANTS.MONTHS} Month Workmanship Warranty`,
  getShortTitle: () => `${WARRANTY_CONSTANTS.MONTHS} Month Warranty`,
  getBadgeText: () => `${WARRANTY_CONSTANTS.MONTHS} Month Warranty`,
  getInlineText: () => `${WARRANTY_CONSTANTS.MONTHS} month warranty on all installations`,
  getCheckmarkText: () => `✓ ${WARRANTY_CONSTANTS.MONTHS} Month Workmanship Warranty on all installations`,
  getBulletPoint: () => `• ${WARRANTY_CONSTANTS.MONTHS} month warranty on all installations`,
} as const;

// Export individual constants for convenience
export const {
  MONTHS,
  YEARS,
  TITLE,
  SHORT_TITLE,
  BADGE_TEXT,
  FULL_DESCRIPTION,
  CARD_DESCRIPTION,
  INLINE_TEXT,
  ABOUT_TEXT,
  CHECKMARK_TEXT,
  BULLET_POINT
} = WARRANTY_CONSTANTS;