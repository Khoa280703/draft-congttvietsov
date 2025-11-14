/**
 * Theme colors for OrgStructureSection component
 * Centralized color management for light and dark themes
 *
 * Config màu sắc cho component này bằng cách chỉnh sửa các giá trị bên dưới
 */

export const ORG_STRUCTURE_THEME_COLORS = {
  light: {
    sectionBackground: "bg-white",
    text: "text-gray-700",
    textSecondary: "text-gray-600",
    link: "text-vietsov-green",
    linkHover: "hover:text-vietsov-green",
    title: "text-vietsov-green",
    titlePrefix: "text-vietsov-green", // "CƠ CẤU"
    titleSuffix: "text-gray-700", // "TỔ CHỨC"
  },
  dark: {
    sectionBackground: "bg-vietsov-green-bold",
    text: "text-gray-200",
    textSecondary: "text-gray-300",
    link: "text-vietsov-yellow",
    linkHover: "hover:text-vietsov-yellow/80",
    title: "text-vietsov-yellow",
    titlePrefix: "text-white", // "CƠ CẤU"
    titleSuffix: "text-vietsov-yellow", // "TỔ CHỨC"
  },
} as const;

/**
 * Get theme colors based on light mode state
 */
export const getOrgStructureThemeColors = (isLight: boolean) => {
  return isLight
    ? ORG_STRUCTURE_THEME_COLORS.light
    : ORG_STRUCTURE_THEME_COLORS.dark;
};

