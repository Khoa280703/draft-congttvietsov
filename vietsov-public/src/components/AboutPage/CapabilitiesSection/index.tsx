import React from "react";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import capabilitiesImage from "@/assets/dankhoanvietsov.jpg";
import { type CapabilitiesSectionProps, defaultCapabilities } from "./data";

const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  capabilities = defaultCapabilities,
  className = "",
}) => {
  return (
    <motion.section
      id="capabilities"
      className={`${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 md:gap-12 lg:gap-18 inch32:gap-26 items-center w-full">
          {/* Left: Image Section */}
          <motion.div
            className="relative w-full h-64 md:h-80 lg:h-[26rem] inch32:h-[32rem] overflow-hidden col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{
              background: "transparent",
            }}
          >
            <img
              src={capabilitiesImage}
              alt="Oil rigs and ships in a port"
              className="w-full h-[18rem] md:h-[28rem] lg:h-[34rem] inch32:h-[42rem] object-cover object-center shadow-xl pr-10"
              // style={{
              //   borderTopLeftRadius: "16px",
              //   borderBottomLeftRadius: "60px",
              //   borderTopRightRadius: "60px",
              //   borderBottomRightRadius: "16px",
              // }}
            />
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            className="space-y-6 md:space-y-8 lg:space-y-6 inch32:space-y-8 col-span-4 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.h3
              className="text-sm md:text-base lg:text-sm inch32:text-base font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              NGHIÊN CỨU KHOA HỌC:
            </motion.h3>
            <ul className="space-y-3 md:space-y-4">
              {capabilities.map((item, index) => (
                <motion.li
                  key={item.id}
                  className="flex items-start gap-2 md:gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <HiCheck className="w-6 h-6 lg:w-5 lg:h-5 inch32:w-6 inch32:h-6 text-vietsov-green flex-shrink-0 mt-1 bg-vietsov-green/12 rounded-2xl p-1" />
                  <p className="text-base lg:text-sm inch32:text-base text-gray-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CapabilitiesSection;
