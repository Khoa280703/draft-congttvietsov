import React, { useRef, forwardRef, useImperativeHandle } from "react";
import VisionSection from "./VisionSection";
import MissionSection from "./MissionSection";
import { vision, mission } from "./data";

export interface VisionMissionProps {
  visionImage?: string;
  visionImageAlt?: string;
  missionImage?: string;
  missionImageAlt?: string;
  isLightMode?: boolean;
}

export interface VisionMissionRef {
  missionSectionRef: React.RefObject<HTMLDivElement | null>;
}

const VisionMission = forwardRef<VisionMissionRef, VisionMissionProps>(
  (
    {
      visionImage,
      visionImageAlt,
      missionImage,
      missionImageAlt,
      isLightMode = true,
    },
    ref
  ) => {
    // Ref cho MissionSection để HomePage có thể track
    const missionSectionRef = useRef<HTMLDivElement>(null);

    // Expose ref ra ngoài để HomePage có thể sử dụng
    useImperativeHandle(ref, () => ({
      missionSectionRef,
    }));

    // Convert isLightMode sang isDarkTheme cho VisionMission
    // isLightMode = true -> isDarkTheme = false (light theme)
    // isLightMode = false -> isDarkTheme = true (dark theme)
    const isDarkTheme = !isLightMode;

    return (
      <div
        className="w-full bg-white relative overflow-hidden"
        id="vision-mission"
      >
        <VisionSection
          data={vision}
          image={visionImage}
          imageAlt={visionImageAlt}
          isDarkTheme={isDarkTheme}
        />
        <div ref={missionSectionRef}>
          <MissionSection
            data={mission}
            image={missionImage}
            imageAlt={missionImageAlt}
            isDarkTheme={isDarkTheme}
          />
        </div>
      </div>
    );
  }
);

export default VisionMission;
