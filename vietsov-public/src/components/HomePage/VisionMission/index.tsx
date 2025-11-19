import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { vision, mission } from "./data";
import Frame1 from "@/assets/icon/Frame-1";
import Frame2 from "@/assets/icon/Frame-2";

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
  (_props, ref) => {
    // Ref cho MissionSection để HomePage có thể track
    const missionSectionRef = useRef<HTMLDivElement>(null);

    // Expose ref ra ngoài để HomePage có thể sử dụng
    useImperativeHandle(ref, () => ({
      missionSectionRef,
    }));

    const iconColor = "#0B5E3F";

    return (
      <section
        className="w-full bg-white py-12 md:py-16 lg:py-20"
        id="vision-mission"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-10">
          <motion.div
            className="text-center mb-10 md:mb-12 lg:mb-16 laptop:mb-24 fhd:mb-32 qhd:mb-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl laptop:text-3xl fhd:text-4xl qhd:text-5xl font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] laptop:tracking-[0.25em] leading-tight px-4">
              <span className="block text-pvn-blue">TẦM NHÌN - SỨ MỆNH</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            <motion.div
              className="px-4 md:px-6 lg:px-8 laptop:px-10 fhd:px-12 qhd:px-16 max-w-lg laptop:max-w-xl fhd:max-w-2xl qhd:max-w-3xl mx-auto w-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Frame1
                size={80}
                color={iconColor}
                className="mx-auto mb-4 md:mb-5"
              />
              <h3 className="text-center text-vietsov-green font-bold text-sm md:text-base lg:text-lg laptop:text-xl fhd:text-2xl qhd:text-3xl tracking-[0.08em] md:tracking-[0.15em] laptop:tracking-[0.2em] uppercase mb-2 lg:mb-3 laptop:mb-4 fhd:mb-8 qhd:mb-12">
                {vision.title}
              </h3>
              {vision.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-center text-xs sm:text-md:text-sm lg:text-base laptop:text-lg fhd:text-xl qhd:text-2xl leading-relaxed opacity-90"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              ref={missionSectionRef}
              className="px-4 md:px-6 lg:px-8 laptop:px-10 fhd:px-12 qhd:px-16 max-w-lg laptop:max-w-xl fhd:max-w-2xl qhd:max-w-3xl mx-auto w-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Frame2
                size={80}
                color={iconColor}
                className="mx-auto mb-4 md:mb-5"
              />
              <h3 className="text-center text-vietsov-green font-bold text-sm md:text-base lg:text-lg laptop:text-xl fhd:text-2xl qhd:text-3xl tracking-[0.08em] md:tracking-[0.15em] laptop:tracking-[0.2em] uppercase mb-2 lg:mb-3 laptop:mb-4 fhd:mb-8 qhd:mb-12">
                {vision.title}
              </h3>
              {vision.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-center text-xs sm:text-md:text-sm lg:text-base laptop:text-lg fhd:text-xl qhd:text-2xl leading-relaxed opacity-90"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
);

export default VisionMission;
