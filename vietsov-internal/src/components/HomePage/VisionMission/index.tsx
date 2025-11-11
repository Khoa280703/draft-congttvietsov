import React from "react";
import IsometricCubeBackground from "./IsometricCubeBackground";
import VisionSection from "./VisionSection";
import MissionSection from "./MissionSection";
import { vision } from "./data";
import { mission } from "./data";

export interface VisionMissionProps {
  visionImage?: string;
  visionImageAlt?: string;
  missionImage?: string;
  missionImageAlt?: string;
}

const VisionMission: React.FC<VisionMissionProps> = ({
  visionImage,
  visionImageAlt,
  missionImage,
  missionImageAlt,
}) => {
  return (
    <div className="w-full bg-white relative overflow-hidden">
      <div
        className="absolute overflow-visible"
        style={{ top: "-100%", bottom: 0, left: 0, right: 0 }}
      >
        <IsometricCubeBackground />
      </div>
      <VisionSection
        data={vision}
        image={visionImage}
        imageAlt={visionImageAlt}
      />
      <MissionSection
        data={mission}
        image={missionImage}
        imageAlt={missionImageAlt}
      />
    </div>
  );
};

export default VisionMission;
