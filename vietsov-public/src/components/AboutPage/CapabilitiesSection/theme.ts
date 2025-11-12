/**
 * Theme colors for CapabilitiesSectionParallax component
 * Centralized color management for light and dark themes
 */

export const CAPABILITIES_THEME_COLORS = {
  light: {
    background: "bg-white",
    sectionBackground: "bg-white",
    title: "text-vietsov-green",
    description: "text-gray-700",
    link: "text-vietsov-green",
    button: {
      active: "bg-vietsov-green text-white",
      inactive: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    },
    checkIcon: "text-vietsov-green",
    checkIconBg: "bg-vietsov-green/15",
  },
  dark: {
    background: "bg-vietsov-green-bold",
    sectionBackground: "bg-vietsov-green-bold",
    title: "text-vietsov-yellow",
    description: "text-gray-200",
    link: "text-vietsov-yellow",
    button: {
      active: "bg-vietsov-yellow text-[#006d38]",
      inactive: "bg-gray-700 text-gray-300 hover:bg-gray-600",
    },
    checkIcon: "text-vietsov-yellow",
    checkIconBg: "bg-vietsov-yellow/15",
  },
} as const;

/**
 * Get theme colors based on light mode state
 */
export const getCapabilitiesThemeColors = (isLight: boolean) => {
  return isLight
    ? CAPABILITIES_THEME_COLORS.light
    : CAPABILITIES_THEME_COLORS.dark;
};
