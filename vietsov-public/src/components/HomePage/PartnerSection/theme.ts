/**
 * Theme colors for PartnerSection component
 * Centralized color management for light and dark themes
 *
 * Config màu sắc cho component này bằng cách chỉnh sửa các giá trị bên dưới
 */

export const PARTNER_SECTION_THEME_COLORS = {
  light: {
    background: "bg-white",
    title: "text-gray-900",
    description: "text-gray-700",
    link: "text-vietsov-green",
    // Thêm các màu khác cần thiết cho component
  },
  dark: {
    background: "bg-gray-900",
    title: "text-white",
    description: "text-gray-300",
    link: "text-vietsov-yellow",
    // Thêm các màu khác cần thiết cho component
  },
} as const;

/**
 * Get theme colors based on light mode state
 */
export const getPartnerSectionThemeColors = (isLight: boolean) => {
  return isLight
    ? PARTNER_SECTION_THEME_COLORS.light
    : PARTNER_SECTION_THEME_COLORS.dark;
};
