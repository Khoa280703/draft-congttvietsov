import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { vietsovPetroValues, humanValues } from "./data";
import CardStack from "./CardStack";
import "./index.css";

interface CoreValuesSectionV2Props {
  className?: string;
}

const CoreValuesSectionV2: React.FC<CoreValuesSectionV2Props> = ({
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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

  return (
    <section
      ref={sectionRef}
      className={`relative py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 laptop:py-20 fhd:py-24 qhd:py-28 overflow-hidden ${className}`}
    >
      <motion.div
        className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] relative z-10"
        style={{
          y: parallaxY,
          opacity,
        }}
      >
        {/* Section 1: Giá trị Vietsov Petro */}
        <CardStack
          values={vietsovPetroValues}
          titleColor="green"
          isInView={isInView}
          parallaxSpeed={1} // Parallax xuống khi scroll
        />

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center my-16 md:my-24 lg:my-28 laptop:my-32 fhd:my-36 qhd:my-40"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-4 md:gap-6 laptop:gap-8 fhd:gap-10 qhd:gap-12 w-full max-w-2xl laptop:max-w-3xl fhd:max-w-4xl qhd:max-w-5xl">
            <div className="flex-1 h-px md:h-[2px] laptop:h-[3px] fhd:h-[4px] qhd:h-[5px] bg-gradient-to-r from-transparent via-vietsov-green/30 to-vietsov-green/30" />
            <motion.div
              className="w-3 h-3 md:w-4 md:h-4 laptop:w-5 laptop:h-5 fhd:w-6 fhd:h-6 qhd:w-8 qhd:h-8 rounded-full bg-vietsov-green"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="flex-1 h-px md:h-[2px] laptop:h-[3px] fhd:h-[4px] qhd:h-[5px] bg-gradient-to-l from-transparent via-vietsov-green/30 to-vietsov-green/30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <CardStack
            values={humanValues}
            titleColor="black"
            isInView={isInView}
            parallaxSpeed={-1} // Parallax lên khi scroll (ngược với stack trên)
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoreValuesSectionV2;
