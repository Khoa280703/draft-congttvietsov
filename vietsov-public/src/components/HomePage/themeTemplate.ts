/**
 * Theme Template cho các components trong HomePage
 * 
 * Hướng dẫn sử dụng:
 * 1. Copy file này vào component folder của bạn (ví dụ: TypicalProjects/theme.ts)
 * 2. Đổi tên THEME_COLORS thành tên phù hợp (ví dụ: TYPICAL_PROJECTS_THEME_COLORS)
 * 3. Config màu sắc cho light và dark theme
 * 4. Import và sử dụng getThemeColors(isLightMode) trong component
 * 
 * @example
 * ```tsx
 * import { getThemeColors } from "./theme";
 * 
 * const MyComponent = ({ isLightMode = true }) => {
 *   const theme = getThemeColors(isLightMode);
 *   return <div className={theme.background}>...</div>;
 * };
 * ```
 */

export interface ThemeColors {
  background: string;
  title?: string;
  description?: string;
  link?: string;
  [key: string]: string | { [key: string]: string } | undefined;
}

export const THEME_COLORS = {
  light: {
    background: "bg-white",
    title: "text-gray-900",
    description: "text-gray-700",
    link: "text-blue-600",
  },
  dark: {
    background: "bg-gray-900",
    title: "text-white",
    description: "text-gray-300",
    link: "text-blue-400",
  },
} as const;

/**
 * Get theme colors based on light mode state
 * @param isLight - true for light mode, false for dark mode
 * @returns Theme colors object
 */
export const getThemeColors = (isLight: boolean): ThemeColors => {
  return isLight ? THEME_COLORS.light : THEME_COLORS.dark;
};

