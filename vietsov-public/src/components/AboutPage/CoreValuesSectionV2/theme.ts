/**
 * Theme colors for CoreValuesSectionV2 component
 * Centralized color management for light and dark themes
 *
 * Config màu sắc cho component này bằng cách chỉnh sửa các giá trị bên dưới
 */

export const CORE_VALUES_THEME_COLORS = {
  light: {
    sectionBackground: "bg-white]",
    title: "text-white",
    description: "text-white",
    // CardStack colors
    cardStackTitleGreen: "text-pvn-blue", // pvn-blue
    cardStackTitleBlack: "text-vietsov-green",
    cardStackGradientLine:
      "bg-gradient-to-r from-transparent via-vietsov-green to-transparent",
    // Card colors
    cardBackground: "bg-vietsov-green",
    cardBorder: "border border-vietsov-green",
    cardShadow: "0 5px 16px 0 rgba(2, 55, 102, 0.09)",
    cardShadowHover: "0 10px 32px 0 rgba(2, 55, 102, 0.15)",
    iconColor: "#489C51",
    iconBackground: "bg-white",
    iconBorder: "border border-white",
    // Button colors
    buttonBackground: "bg-white",
    buttonText: "text-vietsov-green",
    buttonBorder: "border border-white",
    buttonHover: "hover:bg-gray-100",
    // CardV2 colors
    cardText: "text-white",
    cardGradientOverlay: "bg-gradient-to-b from-transparent to-black/50",
    cardButtonBackground: "bg-black",
    cardButtonHover: "hover:bg-[#0d0d0d]",
    cardButtonFocus: "focus:outline-yellow-400",
  },
  dark: {
    sectionBackground: "bg-vietsov-green-bold",
    title: "text-gray-900",
    description: "text-gray-700",
    // CardStack colors
    cardStackTitleGreen: "text-vietsov-yellow",
    cardStackTitleBlack: "text-white",
    cardStackGradientLine:
      "bg-gradient-to-r from-transparent via-vietsov-yellow to-transparent",
    // Card colors
    cardBackground: "bg-white",
    cardBorder: "border border-gray-200",
    cardShadow: "0 5px 16px 0 rgba(0, 0, 0, 0.1)",
    cardShadowHover: "0 10px 32px 0 rgba(0, 0, 0, 0.2)",
    iconColor: "#ffffff",
    iconBackground: "bg-vietsov-green",
    iconBorder: "border border-vietsov-green",
    // Button colors
    buttonBackground: "bg-vietsov-green",
    buttonText: "text-white",
    buttonBorder: "border border-vietsov-green",
    buttonHover: "hover:bg-vietsov-green-bold",
    // CardV2 colors
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
