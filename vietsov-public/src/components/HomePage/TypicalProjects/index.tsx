import React from "react";
import { motion } from "framer-motion";
import { SeeMoreButton } from "@/components/Button";
import { type TypicalProjectsProps, defaultProjects } from "./data";
import { getTypicalProjectsThemeColors } from "./theme";

interface TypicalProjectsWithThemeProps extends TypicalProjectsProps {
  isLightMode?: boolean;
}

const TypicalProjects: React.FC<TypicalProjectsWithThemeProps> = ({
  projects = defaultProjects,
  viewMoreText = "Xem thêm",
  viewMoreLink = "/doitac-duan/du-an",
  className = "",
  isLightMode = true,
}) => {
  const theme = getTypicalProjectsThemeColors(isLightMode);

  return (
    <motion.section
      className={`${theme.sectionBackground} transition-colors duration-700 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 w-full py-8 md:py-12 lg:py-16 inch32:py-15">
        {/* Title */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16 inch32:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-4xl inch32:text-5xl font-bold transition-colors duration-700 ${
              isLightMode ? "text-vietsov-green" : "text-vietsov-yellow"
            }`}
          >
            Dự án tiêu biểu
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 inch32:gap-8 mb-8 md:mb-12 lg:mb-16 inch32:mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="h-full hover:scale-105 transition-transform duration-300">
                <div
                  className={`${theme.cardBackground} backdrop-blur-sm overflow-hidden h-full transition-colors duration-700`}
                  style={{
                    boxShadow: isLightMode
                      ? "0 5px 16px 0 rgba(2, 55, 102, 0.09)"
                      : "0 5px 16px 0 rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="relative inch32:px-5 inch32:pt-5 pb-4 md:pb-6 lg:pb-4 inch32:pb-6">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-48 md:h-56 lg:h-52 inch32:h-64 object-cover"
                    />
                  </div>

                  <div className="px-4 md:px-5 lg:px-4 inch32:px-5 space-y-4 md:space-y-5 lg:space-y-4 inch32:space-y-6 pb-4 md:pb-6 lg:pb-5 inch32:pb-6">
                    {/* Title */}
                    <h3
                      className={`text-2xl lg:text-xl inch32:text-2xl font-semibold leading-tight line-clamp-1 transition-colors duration-700 ${theme.title}`}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm lg:text-xs inch32:text-sm leading-relaxed line-clamp-3 transition-colors duration-700 ${theme.description}`}
                    >
                      {project.description}
                    </p>

                    {/* Read More Link */}
                    <a
                      href="/doitac-duan/du-an/chi-tiet"
                      className={`inline-flex items-center text-base lg:text-sm inch32:text-base font-semibold transition-colors duration-200 cursor-pointer ${theme.link}`}
                    >
                      Xem thêm
                      <svg
                        className={`w-4 h-4 lg:w-3.5 lg:h-3.5 inch32:w-4 inch32:h-4 ml-1 ${theme.link}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <SeeMoreButton
            text={viewMoreText}
            href={viewMoreLink}
            variant="outline"
            className={
              isLightMode
                ? ""
                : "border-vietsov-yellow text-vietsov-yellow hover:bg-vietsov-yellow hover:text-[#006d38]"
            }
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TypicalProjects;
