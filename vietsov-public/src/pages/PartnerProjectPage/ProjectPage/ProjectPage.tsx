import React, { useState, useMemo } from "react";
import { PageWithSidebar, Select, Pagination } from "@/components";
import type { SelectOption } from "@/components";
import { CardFullDetailHori } from "@/components/Card";
import { motion } from "framer-motion";
import { FiSearch, FiArrowUp, FiArrowDown } from "react-icons/fi";
import { projectData, featuredProjectData } from "./data";
import { useNavigate } from "react-router-dom";

type SortBy = "date" | "category" | "title";
type SortOrder = "asc" | "desc";

const sortOptions: SelectOption<SortBy>[] = [
  { value: "date", label: "Theo ngày đăng" },
  { value: "category", label: "Theo danh mục" },
  { value: "title", label: "Theo tiêu đề" },
];

const ProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const itemsPerPage = 6;

  // Filter by search term
  const filteredProjects = useMemo(() => {
    if (!searchTerm) return projectData;
    return projectData.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Sort projects
  const sortedProjects = useMemo(() => {
    const sorted = [...filteredProjects];
    sorted.sort((a, b) => {
      if (sortBy === "date") {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      } else if (sortBy === "category") {
        const comparison = a.category.localeCompare(b.category, "vi");
        return sortOrder === "asc" ? comparison : -comparison;
      } else {
        // Sort by title
        const comparison = a.title.localeCompare(b.title, "vi");
        return sortOrder === "asc" ? comparison : -comparison;
      }
    });
    return sorted;
  }, [filteredProjects, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const paginatedProjects = sortedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };
  return (
    <div>
      <PageWithSidebar
        activePath="/doitac-duan/du-an"
        sidebarContent={
          <div className="space-y-6">
            <div>
              <h3 className="text-lg lg:text-base inch32:text-lg font-bold text-gray-800 mb-4 lg:mb-3 inch32:mb-4">
                Dự án nổi bật
              </h3>
              <div className="space-y-4 lg:space-y-3 inch32:space-y-4">
                {featuredProjectData.slice(0, 3).map((project, index) => (
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
                      timestamp={project.date}
                      description={project.description}
                      maxTitleLines={2}
                      maxDescriptionLines={2}
                      detail={false}
                      onClick={() => navigate("/doitac-duan/du-an/chi-tiet")}
                      className="h-full"
                    />
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
          <div className="p-6 lg:p-5 inch32:p-6">
            <h2 className="text-2xl lg:text-xl inch32:text-2xl font-bold text-gray-800 mb-6 lg:mb-5 inch32:mb-6">
              Tất cả dự án
            </h2>

            {/* Search and Sort Controls */}
            <div className="mb-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="relative flex-1 w-full sm:max-w-md">
                  <FiSearch
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Tìm kiếm dự án..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-vietsov-green focus:border-transparent transition-colors"
                  />
                </div>

                {/* Sort Controls */}
                <div className="flex items-center gap-2">
                  <Select<SortBy>
                    options={sortOptions}
                    value={sortBy}
                    onChange={(newValue) => {
                      if (newValue !== null && !Array.isArray(newValue)) {
                        setSortBy(newValue);
                        setCurrentPage(1);
                      }
                    }}
                    placeholder="Sắp xếp"
                    searchable={false}
                    clearable={false}
                    width="200px"
                    className="min-w-[200px]"
                  />

                  <button
                    onClick={() =>
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    }
                    className="p-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    title={sortOrder === "asc" ? "Tăng dần" : "Giảm dần"}
                  >
                    {sortOrder === "asc" ? (
                      <FiArrowUp size={20} className="text-gray-600" />
                    ) : (
                      <FiArrowDown size={20} className="text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Results count */}
              {searchTerm && (
                <p className="text-sm text-gray-600">
                  Tìm thấy {sortedProjects.length} kết quả
                </p>
              )}
            </div>
          </div>

          <div className="p-6 lg:p-5 inch32:p-6">
            {paginatedProjects.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-6 lg:gap-5 inch32:gap-6">
                  {paginatedProjects.map((project, index) => (
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
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Không tìm thấy dự án nào</p>
              </div>
            )}
          </div>
        </motion.section>
      </PageWithSidebar>
    </div>
  );
};

export default ProjectPage;
