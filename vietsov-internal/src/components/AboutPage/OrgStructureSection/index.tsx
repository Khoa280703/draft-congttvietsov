import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import OrganizationStructure from "./OrganizationStructure";
import { type OrgStructureSectionProps, defaultOrgStructureData } from "./data";
import { getOrgStructureThemeColors } from "./theme";

interface ExtendedOrgStructureSectionProps extends OrgStructureSectionProps {
  isLightMode?: boolean;
}

const OrgStructureSection: React.FC<ExtendedOrgStructureSectionProps> = ({
  data = defaultOrgStructureData,
  className = "",
  isLightMode = true, // Default light mode
}) => {
  const theme = getOrgStructureThemeColors(isLightMode);
  return (
    <section
      className={`${theme.sectionBackground} transition-colors duration-700 ${className}`}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full py-8 md:py-12 lg:py-16 laptop:py-20 fhd:py-24 qhd:py-28 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
        {/* Title */}
        <motion.div
          className="text-center mb-6 md:mb-8 lg:mb-12 laptop:mb-14 fhd:mb-24 qhd:mb-18"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl laptop:text-5xl fhd:text-6xl qhd:text-7xl font-bold uppercase leading-tight transition-colors duration-700">
            <span className={`${theme.titlePrefix} mr-4`}>CƠ CẤU</span>
            <span className={theme.titleSuffix}>TỔ CHỨC</span>
          </h2>
        </motion.div>

        <div className="relative z-10">
          <motion.div
            className="grid grid-cols-1 gap-8 md:gap-16 lg:gap-12 laptop:gap-14 fhd:gap-16 qhd:gap-18"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className={`${theme.text} transition-colors duration-700`}
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <div
                className={`space-y-4 lg:space-y-3 inch32:space-y-4 ${theme.textSecondary} leading-relaxed text-base lg:text-sm inch32:text-base transition-colors duration-700`}
              >
                {data.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.15,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    {paragraph.includes("Vietsovpetro") ? (
                      <>
                        {paragraph.split("Vietsovpetro")[0]}
                        <span
                          className={`font-bold ${theme.title} text-xl transition-colors duration-700`}
                        >
                          Vietsovpetro
                        </span>
                        {paragraph.split("Vietsovpetro")[1]}
                      </>
                    ) : (
                      paragraph
                    )}
                  </motion.p>
                ))}
              </div>

              <motion.a
                href={data.readMoreLink}
                className={`inline-flex items-center font-semibold mt-8 ${theme.link} ${theme.linkHover} transition-colors duration-700 cursor-pointer`}
                initial={{ opacity: 0, y: 20, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                whileHover={{ x: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {data.readMoreText}
                <FiArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <OrganizationStructure />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrgStructureSection;
