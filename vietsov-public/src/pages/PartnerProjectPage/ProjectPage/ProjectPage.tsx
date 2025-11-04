import React, { useState } from "react";
import { PageWithSidebar } from "@/components";
import { CardFullDetailHori } from "@/components/Card";
import { motion } from "framer-motion";
import { projectData, featuredProjectData } from "./data";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@/components";

const ProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil(projectData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projectData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 120, behavior: "smooth" });
  };
  return (
    <div>
      <PageWithSidebar
        activePath="/doitac-duan/du-an"
        sidebarContent={
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg lg:text-base inch32:text-lg font-bold text-gray-800 mb-4 lg:mb-3 inch32:mb-4">
                Dự án nổi bật
              </h3>
              <div className="space-y-4 lg:space-y-3 inch32:space-y-4">
                {featuredProjectData.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="border-b border-gray-200 pb-4 lg:pb-3 inch32:pb-4 last:border-b-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h4 className="text-sm lg:text-xs inch32:text-sm font-semibold text-gray-800 mb-1 lg:mb-0.5 inch32:mb-1 leading-relaxed">
                      {project.title}
                    </h4>
                    <p className="text-xs lg:text-[10px] inch32:text-xs text-gray-600 mb-2 lg:mb-1.5 inch32:mb-2 line-clamp-2">
                      {project.description}
                    </p>
                    <span className="text-xs lg:text-[10px] inch32:text-xs text-green-600 font-medium">
                      {project.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <motion.section
          className=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-6 lg:p-5 inch32:p-6 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h2 className="text-2xl lg:text-xl inch32:text-2xl font-bold text-gray-800 mb-2 lg:mb-1.5 inch32:mb-2">
                Tất cả dự án
              </h2>
              <p className="text-gray-600 lg:text-sm inch32:text-base">
                Hiển thị {startIndex + 1}-
                {Math.min(endIndex, projectData.length)} trong tổng số{" "}
                {projectData.length} dự án
              </p>
            </div>
          </div>

          <div className="p-6 lg:p-5 inch32:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 inch32:gap-6">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CardFullDetailHori
                    image={project.image}
                    imageAlt={project.title}
                    title={project.title}
                    description={project.description}
                    category={project.category}
                    timestamp={project.date}
                    maxTitleLines={2}
                    maxDescriptionLines={3}
                    className="h-full"
                    detail={true}
                    onClick={() => navigate("/doitac-duan/du-an/chi-tiet")}
                  />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 lg:mt-7 inch32:mt-8 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>
        </motion.section>
      </PageWithSidebar>
    </div>
  );
};

export default ProjectPage;
