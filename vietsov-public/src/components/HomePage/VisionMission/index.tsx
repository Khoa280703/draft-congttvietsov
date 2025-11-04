import React from "react";
import { motion } from "framer-motion";
import Frame3 from "@/assets/icon/Frame-3.svg";
import Frame2 from "@/assets/icon/Frame-2.svg";
import { type VisionMissionProps, defaultVisionMissionData } from "./data";

const VisionMission: React.FC<VisionMissionProps> = ({
  data = defaultVisionMissionData,
  backgroundColor = "",
  className = "",
}) => {
  return (
    <motion.div
      className={`${backgroundColor} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 md:gap-12 lg:gap-18 inch32:gap-26 items-center w-full">
        <motion.div
          className="space-y-6 md:space-y-6 lg:space-y-5 inch32:space-y-6 col-span-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Vision Section */}
          <motion.div
            className="space-y-4 py-4 md:py-5 lg:py-4 inch32:py-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            {/* Icon and Title Row */}
            <div className="flex items-center space-x-4">
              <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.5, ease: "backOut" }}
              >
                <img
                  src={Frame2}
                  alt="Vision Icon"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </motion.div>
              <h3 className="text-2xl md:text-3xl lg:text-2xl inch32:text-3xl font-bold text-gray-800">
                {data.vision.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base lg:text-sm inch32:text-base font-normal">
              {data.vision.description}
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="space-y-4 py-4 md:py-5 lg:py-4 inch32:py-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            {/* Icon and Title Row */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.7, ease: "backOut" }}
              >
                <img
                  src={Frame3}
                  alt="Mission Icon"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </motion.div>
              <h3 className="text-2xl md:text-3xl lg:text-2xl inch32:text-3xl font-bold text-gray-800">
                {data.mission.title}
              </h3>
            </div>
            {/* Description aligned with icon */}
            <p className="text-gray-600 leading-relaxed text-base lg:text-sm inch32:text-base font-normal">
              {data.mission.description}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative col-span-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="w-full h-[18rem] md:h-[28rem] lg:h-[34rem] inch32:h-[42rem] object-cover pl-10"
              // style={{
              //   borderTopLeftRadius: "60px",
              //   borderBottomLeftRadius: "16px",
              //   borderTopRightRadius: "16px",
              //   borderBottomRightRadius: "60px",
              // }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VisionMission;
