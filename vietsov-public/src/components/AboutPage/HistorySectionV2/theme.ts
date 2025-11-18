/**
 * Theme colors for HistorySectionV2 component
 * Centralized color management for light and dark themes
 */

export const HISTORY_SECTION_V2_THEME_COLORS = {
  light: {
    sectionBackground: "bg-white",
    text: "text-gray-700",
    textSecondary: "text-gray-600",
    titlePrefix: "text-pvn-blue", // pvn-blue
    titleSuffix: "text-vietsov-green", // pvn-green
    yearActive: "text-vietsov-green",
    yearInactive: "text-gray-400",
    underline: "bg-vietsov-green",
    eventText: "text-gray-700",
    eventTextActive: "text-gray-900",
    button: "bg-vietsov-green text-white",
    buttonHover: "hover:bg-green-600",
  },
  dark: {
    sectionBackground: "bg-vietsov-green-bold",
    text: "text-gray-200",
    textSecondary: "text-gray-300",
    titlePrefix: "text-white",
    titleSuffix: "text-vietsov-yellow",
    yearActive: "text-vietsov-yellow",
    yearInactive: "text-gray-400",
    underline: "bg-vietsov-yellow",
    eventText: "text-gray-200",
    eventTextActive: "text-white",
    button: "bg-vietsov-yellow text-gray-900",
    buttonHover: "hover:bg-yellow-400",
  },
} as const;

/**
 * Get theme colors based on light mode state
 */
export const getHistorySectionV2ThemeColors = (isLight: boolean) => {
  return isLight
    ? HISTORY_SECTION_V2_THEME_COLORS.light
    : HISTORY_SECTION_V2_THEME_COLORS.dark;
};
