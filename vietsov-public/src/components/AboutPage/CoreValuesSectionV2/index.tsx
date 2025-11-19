import React, { useRef } from "react";
import { vietsovPetroValues, humanValues } from "./data";
import CardStack from "./CardStack";
import { getCoreValuesThemeColors } from "./theme";
import "./index.css";

interface CoreValuesSectionV2Props {
  className?: string;
  isLightMode?: boolean;
  humanValuesRef?: React.RefObject<HTMLDivElement | null>;
}

const CoreValuesSectionV2: React.FC<CoreValuesSectionV2Props> = ({
  className = "",
  isLightMode = true,
  humanValuesRef: externalHumanValuesRef,
}) => {
  const vietsovPetroRef = useRef<HTMLDivElement>(null);
  const internalHumanValuesRef = useRef<HTMLDivElement>(null);
  const humanValuesRef = externalHumanValuesRef || internalHumanValuesRef;

  // Theme: Cả hai CardStack dùng cùng theme từ hook
  const theme = getCoreValuesThemeColors(isLightMode);

  return (
    <section
      className={`relative overflow-hidden transition-colors duration-700 ${className}`}
    >
      {/* Section 1: Giá trị Vietsov Petro */}
      <div
        ref={vietsovPetroRef}
        className={`relative min-h-[110vh] flex items-center ${theme.sectionBackground} transition-colors duration-700`}
      >
        <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] relative z-10">
          <CardStack
            values={vietsovPetroValues}
            titleColor="green"
            isLightMode={isLightMode}
          />
        </div>
      </div>

      {/* Section 2: Giá trị Con người */}
      <div
        ref={humanValuesRef}
        className={`relative min-h-[110vh] flex items-center ${theme.sectionBackground} transition-colors duration-700`}
      >
        <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] relative z-10">
          <CardStack
            values={humanValues}
            titleColor="black"
            isLightMode={isLightMode}
          />
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSectionV2;
