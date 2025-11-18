import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const vietsovPetroRef = useRef<HTMLDivElement>(null);
  const internalHumanValuesRef = useRef<HTMLDivElement>(null);
  const humanValuesRef = externalHumanValuesRef || internalHumanValuesRef;

  // Detect when each CardStack is in view
  const isVietsovPetroInView = useInView(vietsovPetroRef, {
    once: false,
    margin: "0%",
    amount: 0.3,
  });
  const isHumanValuesInView = useInView(humanValuesRef, {
    once: false,
    margin: "0%",
    amount: 0.3,
  });

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax y transform - di chuyển nhẹ khi scroll
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  // Opacity fade in khi scroll đến
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.3, 1, 1, 0.8]
  );

  // Theme: Cả hai CardStack dùng cùng theme từ hook
  const theme = getCoreValuesThemeColors(isLightMode);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden transition-colors duration-700 ${className}`}
    >
      {/* Section 1: Giá trị Vietsov Petro */}
      <div
        ref={vietsovPetroRef}
        className={`relative min-h-[100vh] flex items-center ${theme.sectionBackground} transition-colors duration-700`}
      >
        <motion.div
          className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] relative z-10"
          style={{
            y: parallaxY,
            opacity,
          }}
        >
          <CardStack
            values={vietsovPetroValues}
            titleColor="green"
            isInView={isVietsovPetroInView}
            parallaxSpeed={1}
            isLightMode={isLightMode}
          />
        </motion.div>
      </div>

      {/* Section 2: Giá trị Con người */}
      <div
        ref={humanValuesRef}
        className={`relative min-h-[100vh] flex items-center ${theme.sectionBackground} transition-colors duration-700`}
      >
        <motion.div
          className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] relative z-10"
          style={{
            y: parallaxY,
            opacity,
          }}
        >
          <CardStack
            values={humanValues}
            titleColor="black"
            isInView={isHumanValuesInView}
            parallaxSpeed={-1}
            isLightMode={isLightMode}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSectionV2;
