/**
 * Theme colors for PetroNews component
 * Centralized color management for light and dark themes
 * 
 * Config màu sắc cho component này bằng cách chỉnh sửa các giá trị bên dưới
 */

export const PETRO_NEWS_THEME_COLORS = {
  light: {
    background: "bg-white",
    sectionBackground: "bg-white",
    title: "text-gray-900",
    description: "text-gray-700",
    link: "text-vietsov-green",
    buttonText: "text-vietsov-green",
  },
  dark: {
    background: "bg-[#006d38]",
    sectionBackground: "bg-[#006d38]",
    title: "text-white",
    description: "text-gray-200",
    link: "text-vietsov-yellow",
    buttonText: "text-vietsov-yellow",
  },
} as const;

/**
 * Get theme colors based on light mode state
 */
export const getPetroNewsThemeColors = (isLight: boolean) => {
  return isLight ? PETRO_NEWS_THEME_COLORS.light : PETRO_NEWS_THEME_COLORS.dark;
};

