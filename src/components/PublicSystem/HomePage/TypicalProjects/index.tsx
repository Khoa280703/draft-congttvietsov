import React from "react";
import { motion } from "framer-motion";
import { CardWithPadding } from "@/components/Card";
import { SeeMoreButton } from "@/components/Button";
import { type TypicalProjectsProps, defaultProjects } from "./data";
import { useNavigate } from "react-router-dom";

const TypicalProjects: React.FC<TypicalProjectsProps> = ({
  projects = defaultProjects,
  viewMoreText = "Xem thêm",
  viewMoreLink = "/projects",
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              <CardWithPadding
                image={project.image}
                imageAlt={project.imageAlt}
                title={project.title}
                description={project.description}
                readMoreLink={project.link}
                className="h-full"
                onClick={() => navigate("/doitac-duan/du-an/chi-tiet")}
              />
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
          onClick={() => navigate("/doitac-duan/du-an")}
        />
      </motion.div>
    </motion.div>
  );
};

export default TypicalProjects;
