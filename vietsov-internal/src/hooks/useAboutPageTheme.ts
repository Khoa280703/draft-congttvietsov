import type { RefObject } from "react";
import { useInView } from "framer-motion";

/**
 * Hook để quản lý theme cho AboutPage
 * - Default: Light mode (isLightMode = true)
 * - Khi scroll đến CardStack thứ 2 (Giá trị Con người): chuyển sang dark mode (isLightMode = false)
 * - Khi scroll đến OrgStructureSection: chuyển sang light mode (isLightMode = true)
 * - Khi scroll đến CapabilitiesSectionParallax: chuyển sang dark mode (isLightMode = false)
 * - Khi scroll đến FeaturedProjectSlider: chuyển sang dark mode (isLightMode = false)
 *
 * @param coreValuesSectionRef - Ref của CoreValuesSectionV2 (không sử dụng, giữ lại để tương thích)
 * @param humanValuesRef - Ref của CardStack thứ 2 (Giá trị Con người)
 * @param orgStructureSectionRef - Ref của OrgStructureSection
 * @param capabilitiesSectionRef - Ref của CapabilitiesSectionParallax
 * @param archivePhotosSectionRef - Ref của FeaturedProjectSlider (archive photos)
 * @returns { isLightMode: boolean, currentTheme: 'light' | 'dark' }
 */
export const useAboutPageTheme = (
  _coreValuesSectionRef?: RefObject<HTMLElement | null>, // Giữ lại để tương thích, không sử dụng
  humanValuesRef?: RefObject<HTMLElement | null>,
  orgStructureSectionRef?: RefObject<HTMLElement | null>,
  capabilitiesSectionRef?: RefObject<HTMLElement | null>,
  archivePhotosSectionRef?: RefObject<HTMLElement | null>
) => {
  // Detect khi scroll đến CardStack thứ 2 (Giá trị Con người) - nếu trong view thì dark mode
  const isHumanValuesInView = useInView(humanValuesRef || { current: null }, {
    once: false,
    margin: "-20%",
  });

  // Detect khi scroll đến OrgStructureSection - nếu trong view thì light mode
  const isOrgStructureInView = useInView(
    orgStructureSectionRef || { current: null },
    {
      once: false,
      margin: "-20%",
    }
  );

  // Detect khi scroll đến CapabilitiesSectionParallax - nếu trong view thì dark mode
  const isCapabilitiesInView = useInView(
    capabilitiesSectionRef || { current: null },
    {
      once: false,
      margin: "-20%",
    }
  );

  // Detect khi scroll đến FeaturedProjectSlider - nếu trong view thì dark mode
  const isArchivePhotosInView = useInView(
    archivePhotosSectionRef || { current: null },
    {
      once: false,
      margin: "-20%",
    }
  );

  // Logic:
  // - Mặc định: Light mode (isLightMode = true)
  // - Khi scroll đến CardStack thứ 2 (Giá trị Con người): Dark mode (isLightMode = false)
  // - Khi scroll đến OrgStructureSection: Light mode (isLightMode = true)
  // - Khi scroll đến CapabilitiesSectionParallax: Dark mode (isLightMode = false)
  // - Khi scroll đến FeaturedProjectSlider: Dark mode (isLightMode = false)
  // - Ưu tiên: OrgStructureSection > ArchivePhotos > Capabilities > HumanValues > Default
  const isLightMode = isOrgStructureInView
    ? true
    : isArchivePhotosInView
    ? true
    : isCapabilitiesInView
    ? false
    : isHumanValuesInView
    ? false
    : true;
  const currentTheme = isLightMode ? "light" : "dark";

  return {
    isLightMode,
    currentTheme,
  };
};

