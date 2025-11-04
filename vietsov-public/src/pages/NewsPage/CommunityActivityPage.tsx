import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PageWithSidebar, Select, Pagination } from "@/components";
import type { SelectOption } from "@/components";
import { CardFullDetailHori } from "@/components/Card";
import { FiSearch, FiArrowUp, FiArrowDown } from "react-icons/fi";

import giaiBongDa from "@/assets/giaibongda.png";

type SortBy = "views" | "date";
type SortOrder = "asc" | "desc";

const sortOptions: SelectOption<SortBy>[] = [
  { value: "views", label: "Theo lượt xem" },
  { value: "date", label: "Theo ngày đăng" },
];

const CommunityActivityPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("views");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const itemsPerPage = 6;

  // Generate more items for pagination testing
  const generateMoreItems = () => {
    const baseItems = [
      {
        id: 1,
        image: giaiBongDa,
        imageAlt: "Meeting room with Vietsovpetro logo",
        category: "HOẠT ĐỘNG SẢN XUẤT",
        title:
          "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học và phát triển nguồn nhân lực Dầu khí",
        timestamp: "9/6/2024 9:54:47 AM",
        description:
          "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ học bổng nghiên cứu khoa học giữa Vietsovpetro và Trường Đại học Dầu khí Việt Nam (PVU). Đây là một trong những nội dung liên quan đến thỏa thuận...",
        viewCount: 2340,
      },
      {
        id: 2,
        image: giaiBongDa,
        imageAlt: "Volleyball team photo",
        category: "HOẠT ĐỘNG ĐOÀN THỂ",
        title: "Công đoàn XN Cơ điện tổ chức giải bóng chuyển năm 2024",
        timestamp: "9/23/2024 2:05:33 PM",
        description:
          "Thực hiện kế hoạch hoạt động của ban TT-VH năm 2024 và chuẩn bị đội tuyển tham dự giải bóng chuyển do Công đoàn Liên doanh Việt - Nga Vietsovpetro tổ chức, công đoàn XN Cơ điện đã tổ chức giải bóng chuyển nội bộ từ ngày 07-11/10/2024 tại sân bóng chuyền mới...",
        viewCount: 1890,
      },
      {
        id: 3,
        image: giaiBongDa,
        imageAlt: "Volleyball tournament group photo",
        category: "TIN DẦU KHÍ",
        title: "Công đoàn Vietsovpetro khai mạc giải Bóng chuyến năm 2024",
        timestamp: "10/2/2024 10:19:04 AM",
        description:
          'Thực hiện Chương trình công tác năm 2024, với tinh thần "Một đội ngũ, một mục tiêu", chiếu ngày 14/10/2024, tại Trung tâm Văn hóa - Thể thao Vietsovpetro, Công đoàn Vietsovpetro đã tổ chức khai mạc Giải Bóng chuyến Vietsovpetro năm 2024.',
        viewCount: 1560,
      },
      {
        id: 4,
        image: giaiBongDa,
        imageAlt: "Charity event with children",
        category: "HOẠT ĐỘNG SẢN XUẤT",
        title:
          'Đoàn thanh niên và Ban nữ công Trung tâm CNTT&LL tổ chức chương trình an sinh xã hội "Chia sẻ yêu thương - Tiếp bước đến trường"',
        timestamp: "9/6/2024 9:54:47 AM",
        description:
          'Thực hiện Kế hoạch công tác năm 2024, nhằm lan tỏa giá trị "Trách nhiệm - Sẻ chia cùng với tinh thần tương thân tương ái của con người Vietsovpetro, vào ngày 04/10 vừa qua, Chi đoàn cơ sở Trung tâm CNTT&LL đã phối hợp cùng Ban Nữ công thực hiện chương trình "Chi..."',
        viewCount: 2100,
      },
      {
        id: 5,
        image: giaiBongDa,
        imageAlt: "Award ceremony stage",
        category: "HOẠT ĐỘNG ĐOÀN THỂ",
        title:
          "Các sự kiện nổi bật của Petrovietnam trong tuần từ ngày 6/10 đến 13/10/2024",
        timestamp: "9/23/2024 2:05:33 PM",
        description:
          "Ngày 9/10, Chủ tịch HĐTV Petrovietnam Lê Mạnh Hùng đã chủ trì cuộc họp giao ban giữa HĐTV và Ban điều hành đánh giá kết quả hoạt động sản xuất kinh doanh 9 tháng năm 2024 và triển khai nhiệm vụ những tháng cuối năm.",
        viewCount: 1750,
      },
      {
        id: 6,
        image: giaiBongDa,
        imageAlt: "Safety culture contest poster",
        category: "TIN DẦU KHÍ",
        title:
          'Vietsovpetro khởi động cuộc thi "Check in hình ảnh và sáng tạo Slogan về Văn hóa an toàn"',
        timestamp: "10/2/2024 10:19:04 AM",
        description:
          'Nhằm tuyên truyền rộng rãi đến toàn thể CBCNV-NLĐ tại các đơn vị trong Vietsovpetro hiểu sâu về vai trò của Giá trị Trách nhiệm và nâng cao văn hóa An toàn đối với sự phát triển của Vietsovpetro, Tổ công tác VHDN đã xây dựng kế hoạch tổ chức cuộc thi "Check in hình..."',
        viewCount: 1980,
      },
      {
        id: 7,
        image: giaiBongDa,
        imageAlt: "Sports festival group photo",
        category: "HOẠT ĐỘNG SẢN XUẤT",
        title:
          "Các sự kiện nổi bật của Petrovietnam trong tuần từ ngày 6/10 đến 13/10/2024",
        timestamp: "9/6/2024 9:54:47 AM",
        description:
          'Ngày 06 tháng 10 năm 2024, Công đoàn CSTV Công ty Công đoàn và Trung tâm VHTT đã tổ chức Ngày hội Văn hóa Thể thao với chủ đề "Một đội ngũ - Một mục tiêu" tại Nhà Đa năng - Trung tâm Văn hóa Thể thao Vietsovpetro. Đây được coi là ngày truyền thống của CĐCS vớ',
        viewCount: 1420,
      },
      {
        id: 8,
        image: giaiBongDa,
        imageAlt: "Port services volleyball team",
        category: "HOẠT ĐỘNG ĐOÀN THỂ",
        title:
          "Công đoàn Xí Nghiệp Dịch vụ cảng và Cung ứng vật tư thiết bị tổ chức Giải bóng chuyển nội bộ năm 2024",
        timestamp: "9/23/2024 2:05:33 PM",
        description:
          "Thực hiện kế hoạch hoạt động thể thao năm 2024, Công đoàn Xí nghiệp Dịch vụ Cảng và Cung ứng Vật tư thiết bị (XNDV) đã tổ chức giải bóng chuyển nội bộ từ ngày 03/10/2024 đến ngày 04/10/2024 tại sân bóng chuyến XN Dịch vụ số 44 đường 30/4, phường Thắng N...",
        viewCount: 1680,
      },
      {
        id: 9,
        image: giaiBongDa,
        imageAlt: "Table tennis tournament",
        category: "TIN DẦU KHÍ",
        title: "Công đoàn Vietsovpetro tổ chức Giải bóng bàn năm 2024",
        timestamp: "10/2/2024 10:19:04 AM",
        description:
          "Thực hiện Kế hoạch hoạt động thể thao năm 2024, chào mừng kỷ niệm 79 năm Cách mạng tháng Tám (19/8/1945-19/8/2024) và Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam (2/9/1945-2/9/2024), hưởng ứng Tuần Lễ Văn hóa Dầu khí lần thứ XV năm 2024, từng..",
        viewCount: 1340,
      },
    ];

    // Add more items to test pagination (total ~20 items)
    const additionalItems = Array.from({ length: 12 }, (_, i) => ({
      id: baseItems.length + i + 1,
      image: giaiBongDa,
      imageAlt: `Hoạt động đoàn thể ${i + 1}`,
      category: ["HOẠT ĐỘNG ĐOÀN THỂ", "HOẠT ĐỘNG SẢN XUẤT", "TIN DẦU KHÍ"][
        i % 3
      ],
      title: `Hoạt động đoàn thể số ${i + 1}: ${
        [
          "Giải thể thao",
          "Hoạt động tình nguyện",
          "Sự kiện văn hóa",
          "Hội nghị công đoàn",
          "Chương trình giao lưu",
        ][i % 5]
      }`,
      timestamp: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleString(
        "vi-VN"
      ),
      description: `Mô tả chi tiết về hoạt động đoàn thể số ${i + 1}...`,
      viewCount: Math.floor(Math.random() * 2800) + 200,
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
        news.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.category.toLowerCase().includes(searchTerm.toLowerCase())
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
    <PageWithSidebar activePath="/tintuc/hoat-dong-doan-the">
      <div className="min-h-screen">
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

export default CommunityActivityPage;
