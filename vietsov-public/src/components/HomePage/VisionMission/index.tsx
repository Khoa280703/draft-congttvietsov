import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Frame3 from "@/assets/icon/Frame-3.svg";
import Frame2 from "@/assets/icon/Frame-2.svg";
import { type VisionMissionProps, defaultVisionMissionData } from "./data";

const VisionMission: React.FC<VisionMissionProps> = ({
  data = defaultVisionMissionData,
  backgroundColor = "",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect cho image
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageParallaxY = useTransform(imageScrollProgress, [0, 1], ["10%", "-10%"]);
  const imageScale = useTransform(imageScrollProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${backgroundColor} ${className} overflow-hidden`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-vietsov-green/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-vietsov-green/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content with relative z-index */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
          {/* Left Column - Vision & Mission Cards */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Vision Card */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              {/* Glassmorphism Card */}
              <div className="relative backdrop-blur-lg bg-white/80 border-2 border-white/30 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden">
                {/* Gradient accent border top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-vietsov-green via-vietsov-green/80 to-transparent" />
                
                {/* Content */}
                <div className="space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex-shrink-0 relative"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="absolute inset-0 bg-vietsov-green/20 rounded-full blur-md" />
                      <div className="relative bg-gradient-to-br from-vietsov-green/10 to-vietsov-green/5 p-3 rounded-xl">
                        <img
                          src={Frame2}
                          alt="Vision Icon"
                          className="w-8 h-8 md:w-10 md:h-10"
                        />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-vietsov-black">
                      {data.vision.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg font-normal pl-0 md:pl-16">
                    {data.vision.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-vietsov-green/0 via-vietsov-green/5 to-vietsov-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              {/* Glassmorphism Card */}
              <div className="relative backdrop-blur-lg bg-white/80 border-2 border-white/30 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden">
                {/* Gradient accent border top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-vietsov-green via-vietsov-green/80 to-transparent" />
                
                {/* Content */}
                <div className="space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex-shrink-0 relative"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="absolute inset-0 bg-vietsov-green/20 rounded-full blur-md" />
                      <div className="relative bg-gradient-to-br from-vietsov-green/10 to-vietsov-green/5 p-3 rounded-xl">
                        <img
                          src={Frame3}
                          alt="Mission Icon"
                          className="w-8 h-8 md:w-10 md:h-10"
                        />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-vietsov-black">
                      {data.mission.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg font-normal pl-0 md:pl-16">
                    {data.mission.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-vietsov-green/0 via-vietsov-green/5 to-vietsov-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Parallax */}
          <motion.div
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              style={{
                y: imageParallaxY,
                scale: imageScale,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Image with gradient overlay */}
              <div className="relative">
                <img
                  src={data.image.src}
                  alt={data.image.alt}
                  className="w-full h-[20rem] md:h-[32rem] lg:h-[38rem] inch32:h-[44rem] object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/30 rounded-tr-2xl" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white/30 rounded-bl-2xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default VisionMission;
