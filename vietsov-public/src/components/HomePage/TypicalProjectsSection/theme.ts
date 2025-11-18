/**
 * Theme colors for TypicalProjectsSection component
 * Centralized color management for light and dark themes
 *
 * Config màu sắc cho component này bằng cách chỉnh sửa các giá trị bên dưới
 */

export const TYPICAL_PROJECTS_SECTION_THEME_COLORS = {
  light: {
    sectionBackground: "bg-white",
    featuredProjectDateBar: "bg-vietsov-green",
    featuredProjectTitle: "text-vietsov-black",
    featuredProjectType: "text-vietsov-green",
    featuredProjectDescription: "text-vietsov-black",
    featuredProjectLink: "text-vietsov-green",
    featuredProjectLinkHover: "hover:text-gray-900",
    featuredProjectContentBox: "bg-white",
    relatedProjectsTitlePrefix: "text-pvn-blue", // pvn-blue
    relatedProjectsTitleSuffix: "text-vietsov-green", // pvn-green
    relatedProjectsDateBox: "bg-[#0d7377]",
    relatedProjectsTitle: "text-vietsov-black",
    relatedProjectsTitleHover: "group-hover:text-vietsov-green",
    relatedProjectsLink: "text-vietsov-green",
    relatedProjectsLinkHover: "hover:text-vietsov-green/80",
  },
  dark: {
    sectionBackground: "bg-vietsov-green-bold",
    featuredProjectDateBar: "bg-[#006d38]",
    featuredProjectTitle: "text-vietsov-black",
    featuredProjectType: "text-vietsov-green",
    featuredProjectDescription: "text-vietsov-black",
    featuredProjectLink: "text-vietsov-green",
    featuredProjectLinkHover: "hover:text-black",
    featuredProjectContentBox: "bg-white",
    relatedProjectsTitlePrefix: "text-vietsov-yellow",
    relatedProjectsTitleSuffix: "text-white",
    relatedProjectsDateBox: "bg-[#0d7377]",
    relatedProjectsTitle: "text-white",
    relatedProjectsTitleHover: "group-hover:text-vietsov-yellow",
    relatedProjectsLink: "text-vietsov-yellow",
    relatedProjectsLinkHover: "hover:text-vietsov-yellow/80",
  },
} as const;

/**
 * Get theme colors based on light mode state
 */
export const getTypicalProjectsSectionThemeColors = (isLight: boolean) => {
  return isLight
    ? TYPICAL_PROJECTS_SECTION_THEME_COLORS.light
    : TYPICAL_PROJECTS_SECTION_THEME_COLORS.dark;
};
