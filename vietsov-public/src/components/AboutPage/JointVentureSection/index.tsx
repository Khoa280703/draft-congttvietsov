import React from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import { type JointVentureSectionProps, defaultJointVentureData } from "./data";

const JointVentureSection: React.FC<JointVentureSectionProps> = ({
  data = defaultJointVentureData,
  className = "",
}) => {
  const playerOptions = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: data.videoId,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8 lg:gap-8 laptop:gap-8 fhd:gap-16 qhd:gap-24 items-start">
        {/* Video Section */}
        <motion.div
          className="p-2 qhd:p-4 border-2 border-vietsov-green rounded-3xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
            <YouTube
              videoId={data.videoId}
              opts={playerOptions}
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Content Section - Cùng chiều cao với video */}
        <motion.div
          className="text-gray-700 h-full flex flex-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {/* Wrapper để match chiều cao với video container (bao gồm padding và border) */}
          <div className="p-2 md:p-3 lg:p-4 laptop:p-5 fhd:p-6 qhd:p-8 border-2 border-transparent h-full flex flex-col">
            <div className="relative w-full aspect-video overflow-y-auto overflow-x-hidden flex flex-col justify-center">
              <div className="space-y-2 md:space-y-3 lg:space-y-4 laptop:space-y-5 fhd:space-y-6 qhd:space-y-7 text-gray-600 leading-relaxed text-xs md:text-sm lg:text-base laptop:text-lg fhd:text-xl qhd:text-2xl pr-2 md:pr-3 lg:pr-4 laptop:pr-5 fhd:pr-6 qhd:pr-8">
                {data.description.split("\n\n").map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JointVentureSection;
