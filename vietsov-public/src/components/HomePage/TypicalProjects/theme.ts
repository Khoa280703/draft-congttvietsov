/**
 * Theme colors for TypicalProjects component
 * Centralized color management for light and dark themes
 *
 * Config màu sắc cho component này bằng cách chỉnh sửa các giá trị bên dưới
 */

export const TYPICAL_PROJECTS_THEME_COLORS = {
  light: {
    background: "bg-white",
    sectionBackground: "bg-white",
    cardBackground: "bg-white",
    title: "text-gray-900",
    description: "text-gray-700",
    link: "text-vietsov-green",
    buttonText: "text-vietsov-green",
  },
  dark: {
    background: "bg-vietsov-green-bold",
    sectionBackground: "bg-vietsov-green-bold",
    cardBackground: "bg-[#005a2e]",
    title: "text-white",
    description: "text-gray-200",
    link: "text-vietsov-yellow",
    buttonText: "text-vietsov-yellow",
  },
} as const;

/**
 * Get theme colors based on light mode state
 */
export const getTypicalProjectsThemeColors = (isLight: boolean) => {
  return isLight
    ? TYPICAL_PROJECTS_THEME_COLORS.light
    : TYPICAL_PROJECTS_THEME_COLORS.dark;
};
