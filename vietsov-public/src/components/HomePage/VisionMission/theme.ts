/**
 * Theme colors for VisionMission component
 * Centralized color management for light and dark themes
 */

export const THEME_COLORS = {
  light: {
    background: "bg-white",
    title: "text-vietsov-green",
    description: "text-vietsov-black",
    link: "text-vietsov-green",
    dotLine: {
      dot: "#10954f",
      line: "#242424",
    },
  },
  dark: {
    background: "bg-vietsov-green-bold",
    title: "text-vietsov-yellow",
    description: "text-white",
    link: "text-vietsov-yellow",
    dotLine: {
      dot: "#FBBF24",
      line: "#FFFFFF",
    },
  },
} as const;

/**
 * Get theme colors based on dark mode state
 */
export const getThemeColors = (isDark: boolean) => {
  return isDark ? THEME_COLORS.dark : THEME_COLORS.light;
};
