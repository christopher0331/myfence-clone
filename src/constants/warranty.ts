// Global warranty constants - update here to change across entire site
export const WARRANTY_CONSTANTS = {
  // Core warranty information
  YEARS: 2,
  TITLE: "2-Year Workmanship Warranty",
  SHORT_TITLE: "2-Year Warranty",
  BADGE_TEXT: "2-Year Warranty",
  
  // Descriptions for different contexts
  FULL_DESCRIPTION: "We stand behind our work with a comprehensive 2-year warranty on all installations — your peace of mind guaranteed.",
  CARD_DESCRIPTION: "We stand behind our workmanship with a comprehensive 2-year warranty on all installations for your peace of mind.",
  INLINE_TEXT: "2-year warranty on all installations",
  ABOUT_TEXT: "Licensed, insured, and backed by a 2-year workmanship warranty",
  
  // Formatted text for different uses
  CHECKMARK_TEXT: "✓ 2-Year Workmanship Warranty on all installations",
  BULLET_POINT: "• 2-year warranty on all installations",
  
  // Helper functions for dynamic text
  getFullTitle: () => `${WARRANTY_CONSTANTS.YEARS}-Year Workmanship Warranty`,
  getShortTitle: () => `${WARRANTY_CONSTANTS.YEARS}-Year Warranty`,
  getBadgeText: () => `${WARRANTY_CONSTANTS.YEARS}-Year Warranty`,
  getInlineText: () => `${WARRANTY_CONSTANTS.YEARS}-year warranty on all installations`,
  getCheckmarkText: () => `✓ ${WARRANTY_CONSTANTS.YEARS}-Year Workmanship Warranty on all installations`,
  getBulletPoint: () => `• ${WARRANTY_CONSTANTS.YEARS}-year warranty on all installations`,
} as const;

// Export individual constants for convenience
export const {
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