import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
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
    <>
      <motion.section
        id="introdution"
        className={`${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl md:text-4xl font-medium text-gray-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {data.title}
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Video Section */}
            <motion.div
              className="p-2 border-2 border-vietsov-green rounded-3xl"
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

            {/* Content Section */}
            <motion.div
              className="text-gray-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default JointVentureSection;
