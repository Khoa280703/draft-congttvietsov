import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PageWithSidebar, Select, Pagination } from "@/components";
import type { SelectOption } from "@/components";
import { CardFullDetailHori } from "@/components/Card";
import { FiSearch, FiArrowUp, FiArrowDown } from "react-icons/fi";
import {
  defaultMainArticle as oilMain,
  defaultSideArticles as oilSides,
} from "@/components/NewsPage/OilNewsSection/data";

type SortBy = "views" | "date";
type SortOrder = "asc" | "desc";

const sortOptions: SelectOption<SortBy>[] = [
  { value: "views", label: "Theo lượt xem" },
  { value: "date", label: "Theo ngày đăng" },
];

const OilNewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("views");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const itemsPerPage = 6;

  // Generate more items for pagination testing
  const generateMoreItems = () => {
    const baseItems = [
      {
        id: 0,
        image: oilMain.image,
        imageAlt: oilMain.title,
        category: oilMain.category,
        title: oilMain.title,
        timestamp: oilMain.timestamp,
        description: oilMain.description,
        viewCount: 1850,
      },
      ...oilSides.map((a) => ({
        id: a.id,
        image: a.image,
        imageAlt: a.title,
        category: "TIN DẦU KHÍ",
        title: a.title,
        timestamp: a.timestamp,
        description: "",
        viewCount: Math.floor(Math.random() * 2500) + 150,
      })),
    ];

    // Add more items to test pagination (total ~20 items)
    const additionalItems = Array.from({ length: 15 }, (_, i) => ({
      id: baseItems.length + i,
      image: oilSides[i % oilSides.length]?.image || oilMain.image,
      imageAlt: `Tin dầu khí ${i + 1}`,
      category: "TIN DẦU KHÍ",
      title: `Tin dầu khí số ${i + 1}: ${[
        "Giá dầu thế giới",
        "Khai thác mỏ mới",
        "Công nghệ khoan",
        "Thị trường năng lượng",
        "Hợp đồng xuất khẩu",
      ][i % 5]}`,
      timestamp: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleString("vi-VN"),
      description: `Mô tả chi tiết về tin dầu khí số ${i + 1}...`,
      viewCount: Math.floor(Math.random() * 3500) + 100,
    }));

    return [...baseItems, ...additionalItems];
  };

  const allNewsData = useMemo(() => generateMoreItems(), []);

  // Filter by search term
  const filteredNews = useMemo(() => {
    if (!searchTerm) return allNewsData;
    return allNewsData.filter(
      (news) =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allNewsData, searchTerm]);

  // Sort news
  const sortedNews = useMemo(() => {
    const sorted = [...filteredNews];
    sorted.sort((a, b) => {
      if (sortBy === "views") {
        const comparison = (a.viewCount || 0) - (b.viewCount || 0);
        return sortOrder === "asc" ? comparison : -comparison;
      } else {
        const dateA = new Date(a.timestamp).getTime();
        const dateB = new Date(b.timestamp).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      }
    });
    return sorted;
  }, [filteredNews, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(sortedNews.length / itemsPerPage);
  const paginatedNews = sortedNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageWithSidebar activePath="/tintuc/tin-dau-khi">
      <div className="min-h-screen bg-gray-50">
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
                placeholder="Tìm kiếm tin tức..."
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
                className="p-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
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
              Tìm thấy {sortedNews.length} kết quả
            </p>
          )}
        </div>

        {/* News List */}
        {paginatedNews.length > 0 ? (
          <>
            <div className="space-y-6 lg:space-y-5 inch32:space-y-6">
              {paginatedNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardFullDetailHori
                    image={news.image}
                    imageAlt={news.imageAlt}
                    category={news.category}
                    title={news.title}
                    timestamp={news.timestamp}
                    description={news.description}
                    className="h-48"
                    onClick={() => {
                      window.location.href = "/tintuc/chi-tiet";
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
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
            <p className="text-gray-500">Không tìm thấy kết quả nào</p>
          </div>
        )}
      </div>
    </PageWithSidebar>
  );
};

export default OilNewsPage;
