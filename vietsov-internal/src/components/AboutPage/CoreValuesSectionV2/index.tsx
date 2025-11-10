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
      className={`relative py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 inch32:pt-22 inch32:pb-15 overflow-hidden ${className}`}
    >
      <motion.div
        className="container mx-auto px-4 relative z-10"
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
          className="flex items-center justify-center my-16 md:my-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-4 w-full max-w-2xl">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-vietsov-green/30 to-vietsov-green/30" />
            <motion.div
              className="w-3 h-3 rounded-full bg-vietsov-green"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-vietsov-green/30 to-vietsov-green/30" />
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
