import type { RefObject } from "react";
import { useInView } from "framer-motion";

/**
 * Hook để quản lý theme cho HomePage
 * - Default: Light mode (isLightMode = true)
 * - Khi scroll đến MissionSection: chuyển sang dark mode (isLightMode = false)
 * - Khi scroll đến "Lĩnh vực Hoạt động": chuyển sang dark mode (isLightMode = false)
 * - Khi scroll đến TypicalProjectsSection: chuyển sang dark mode (isLightMode = false)
 * - Khi scroll đến PetroNewsSection: kích hoạt light mode (isLightMode = true)
 *
 * @param missionSectionRef - Ref của MissionSection (trong VisionMission)
 * @param capabilitiesSectionRef - Ref của "Lĩnh vực Hoạt động" section
 * @param typicalProjectsSectionRef - Ref của TypicalProjectsSection
 * @param petroNewsSectionRef - Ref của PetroNewsSection
 * @returns { isLightMode: boolean, currentTheme: 'light' | 'dark' }
 */
export const useHomePageTheme = (
  missionSectionRef: RefObject<HTMLElement | null> | null,
  capabilitiesSectionRef?: RefObject<HTMLElement | null>,
  typicalProjectsSectionRef?: RefObject<HTMLElement | null>,
  petroNewsSectionRef?: RefObject<HTMLElement | null>
) => {
  // Detect khi scroll đến MissionSection - nếu trong view thì dark mode
  const isMissionInView = useInView(missionSectionRef || { current: null }, {
    once: false,
    margin: "-20%",
  });

  // Detect khi scroll đến "Lĩnh vực Hoạt động" - nếu trong view thì dark mode
  const isCapabilitiesInView = useInView(
    capabilitiesSectionRef || { current: null },
    {
      once: false,
      margin: "-20%",
    }
  );

  // Detect khi scroll đến TypicalProjectsSection - nếu trong view thì dark mode
  const isTypicalProjectsSectionInView = useInView(
    typicalProjectsSectionRef || { current: null },
    {
      once: false,
      margin: "-20%",
    }
  );

  // Detect khi scroll đến PetroNewsSection - nếu trong view thì light mode
  const isPetroNewsInView = useInView(
    petroNewsSectionRef || { current: null },
    {
      once: false,
      margin: "-20%",
    }
  );

  // Logic:
  // - Mặc định: Light mode (isLightMode = true)
  // - Khi scroll đến MissionSection: Dark mode (isLightMode = false)
  // - Khi scroll đến Capabilities: Dark mode (isLightMode = false)
  // - Khi scroll đến TypicalProjectsSection: Dark mode (isLightMode = false)
  // - Khi scroll đến PetroNewsSection: Light mode (isLightMode = true)
  // - Ưu tiên: PetroNewsSection > TypicalProjectsSection > Capabilities > Mission > Default
  const isLightMode = isPetroNewsInView
    ? true
    : isTypicalProjectsSectionInView
    ? false
    : isCapabilitiesInView
    ? true
    : isMissionInView
    ? true
    : true;
  const currentTheme = isLightMode ? "light" : "dark";

  return {
    isLightMode,
    currentTheme,
  };
};
