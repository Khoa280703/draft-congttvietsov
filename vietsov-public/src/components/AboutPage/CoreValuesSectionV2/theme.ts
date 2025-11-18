/**
 * Theme colors for CoreValuesSectionV2 component
 * Centralized color management for light and dark themes
 *
 * Config màu sắc cho component này bằng cách chỉnh sửa các giá trị bên dưới
 */

export const CORE_VALUES_THEME_COLORS = {
  light: {
    sectionBackground: "bg-white]",
    title: "text-vietsov-green",
    description: "text-gray-700",
    // CardStack colors
    cardStackTitleGreen: "text-pvn-blue", // pvn-blue
    cardStackTitleBlack: "text-vietsov-green",
    cardStackGradientLine:
      "bg-gradient-to-r from-transparent via-vietsov-green to-transparent",
    // CardV2 colors
    cardBackground: "bg-white",
    cardText: "text-white",
    cardGradientOverlay: "bg-gradient-to-b from-transparent to-black/50",
    cardButtonBackground: "bg-black",
    cardButtonHover: "hover:bg-[#0d0d0d]",
    cardButtonFocus: "focus:outline-yellow-400",
  },
  dark: {
    sectionBackground: "bg-vietsov-green-bold",
    title: "text-vietsov-yellow",
    description: "text-gray-200",
    // CardStack colors
    cardStackTitleGreen: "text-vietsov-yellow",
    cardStackTitleBlack: "text-white",
    cardStackGradientLine:
      "bg-gradient-to-r from-transparent via-vietsov-yellow to-transparent",
    // CardV2 colors
    cardBackground: "bg-white",
    cardText: "text-white",
    cardGradientOverlay: "bg-gradient-to-b from-transparent to-black/50",
    cardButtonBackground: "bg-black",
    cardButtonHover: "hover:bg-[#0d0d0d]",
    cardButtonFocus: "focus:outline-yellow-400",
  },
} as const;

/**
 * Get theme colors based on light mode state
 */
export const getCoreValuesThemeColors = (isLight: boolean) => {
  return isLight
    ? CORE_VALUES_THEME_COLORS.light
    : CORE_VALUES_THEME_COLORS.dark;
};
