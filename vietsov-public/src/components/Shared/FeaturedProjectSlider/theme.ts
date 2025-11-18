/**
 * Theme colors for FeaturedProjectSlider component
 * Centralized color management for light and dark themes
 *
 * Config màu sắc cho component này bằng cách chỉnh sửa các giá trị bên dưới
 */

export const FEATURED_PROJECT_SLIDER_THEME_COLORS = {
  light: {
    sectionBackground: "bg-white",
    title: "text-vietsov-green",
    titlePrefix: "text-pvn-blue", // "HÌNH ẢNH"
    titleSuffix: "text-vietsov-green", // "TƯ LIỆU"
    dateBar: "bg-vietsov-green",
    dateText: "text-white",
    titleText: "text-white",
    navigationButton: "bg-white/90 hover:bg-white",
    navigationIcon: "text-gray-700 group-hover:text-vietsov-green",
    seeMoreButton:
      "!text-white !bg-vietsov-green hover:!bg-white hover:!text-vietsov-green",
    gradientOverlay:
      "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
  },
  dark: {
    sectionBackground: "bg-vietsov-green-bold",
    title: "text-white",
    titlePrefix: "text-white", // "HÌNH ẢNH"
    titleSuffix: "text-vietsov-yellow", // "TƯ LIỆU"
    dateBar: "bg-[#006d38]",
    dateText: "text-white",
    titleText: "text-white",
    navigationButton: "bg-white/90 hover:bg-white",
    navigationIcon: "text-gray-700 group-hover:text-vietsov-green",
    seeMoreButton:
      "border-vietsov-yellow text-vietsov-yellow hover:bg-vietsov-yellow hover:text-[#006d38]",
    gradientOverlay:
      "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
  },
} as const;

/**
 * Get theme colors based on light mode state
 */
export const getFeaturedProjectSliderThemeColors = (isLight: boolean) => {
  return isLight
    ? FEATURED_PROJECT_SLIDER_THEME_COLORS.light
    : FEATURED_PROJECT_SLIDER_THEME_COLORS.dark;
};
