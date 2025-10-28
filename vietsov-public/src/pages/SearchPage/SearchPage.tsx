import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiSearch, HiX } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { SeeMoreButton } from "@/components/Button";
import { CardFullDetailHori } from "@/components/Card";

// Mock search results data
const mockSearchResults = [
  {
    id: 1,
    title: "VietsovPetro tổ chức hội nghị tổng kết năm 2024",
    description:
      "Ngày 15/12/2024, VietsovPetro đã tổ chức hội nghị tổng kết hoạt động sản xuất kinh doanh năm 2024 với sự tham gia của toàn thể cán bộ công nhân viên.",
    imageUrl:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    category: "Tin tức",
    date: "15/12/2024",
    author: "Ban biên tập",
    url: "/tintuc/chi-tiet",
  },
  {
    id: 2,
    title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ",
    description:
      "VietsovPetro tiếp tục triển khai các hoạt động khai thác dầu khí tại mỏ Bạch Hổ với những công nghệ tiên tiến nhất.",
    imageUrl:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    category: "Dự án",
    date: "10/12/2024",
    author: "Phòng kỹ thuật",
    url: "/tintuc/chi-tiet",
  },
  {
    id: 3,
    title: "Chương trình đào tạo nâng cao kỹ năng cho nhân viên",
    description:
      "VietsovPetro tổ chức các khóa đào tạo nâng cao kỹ năng chuyên môn cho đội ngũ nhân viên nhằm nâng cao chất lượng lao động.",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    category: "Đào tạo",
    date: "08/12/2024",
    author: "Phòng nhân sự",
    url: "/tintuc/chi-tiet",
  },
  {
    id: 4,
    title: "Hợp tác quốc tế trong lĩnh vực năng lượng",
    description:
      "VietsovPetro ký kết thỏa thuận hợp tác với các đối tác quốc tế trong lĩnh vực năng lượng tái tạo và phát triển bền vững.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "Hợp tác",
    date: "05/12/2024",
    author: "Ban đối ngoại",
    url: "/tintuc/chi-tiet",
  },
  {
    id: 5,
    title: "Công nghệ AI trong quản lý dự án dầu khí",
    description:
      "VietsovPetro ứng dụng công nghệ trí tuệ nhân tạo trong quản lý và vận hành các dự án dầu khí, nâng cao hiệu quả sản xuất.",
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    category: "Công nghệ",
    date: "03/12/2024",
    author: "Phòng IT",
    url: "/tintuc/chi-tiet",
  },
];

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(mockSearchResults);
  const [isSearching, setIsSearching] = useState(false);

  // Get search query from URL params
  useEffect(() => {
    const query = searchParams.get("q") || "";
    setSearchQuery(query);
    if (query) {
      performSearch(query);
    }
  }, [searchParams]);

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Filter results based on query
    const filteredResults = mockSearchResults.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
    setIsSearching(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
      performSearch(searchQuery.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchParams({});
    setSearchResults(mockSearchResults);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tìm kiếm
            </h1>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Bạn đang tìm kiếm điều gì?"
                  className="w-full px-6 py-4 pr-16 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-vietsov-green focus:border-vietsov-green outline-none transition-all duration-200"
                  autoFocus
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <HiX className="w-5 h-5" />
                    </button>
                  )}
                  <button
                    type="submit"
                    className="p-2 text-vietsov-green hover:text-vietsov-green/80 transition-colors"
                  >
                    <HiSearch className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Search Results */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {isSearching ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-vietsov-green"></div>
              <p className="mt-4 text-gray-600">Đang tìm kiếm...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Tìm thấy{" "}
                  <span className="font-semibold text-vietsov-green">
                    {searchResults.length}
                  </span>{" "}
                  kết quả
                  {searchQuery && (
                    <span>
                      {" "}
                      cho "<span className="font-medium">{searchQuery}</span>"
                    </span>
                  )}
                </p>
              </div>

              <div className="space-y-6">
                {searchResults.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CardFullDetailHori
                      image={result.imageUrl}
                      imageAlt={result.title}
                      title={result.title}
                      description={result.description}
                      category={result.category}
                      timestamp={result.date}
                      maxTitleLines={2}
                      maxDescriptionLines={3}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="mt-8 text-center">
                <SeeMoreButton
                  onClick={() => {
                    // Simulate loading more results
                  }}
                  text="Xem thêm kết quả"
                />
              </div>
            </>
          ) : searchQuery ? (
            <div className="text-center py-12">
              <HiSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Không tìm thấy kết quả
              </h3>
              <p className="text-gray-500 mb-6">
                Không có kết quả nào cho "
                <span className="font-medium">{searchQuery}</span>"
              </p>
              <button
                onClick={clearSearch}
                className="px-6 py-3 bg-vietsov-green text-white rounded-lg hover:bg-vietsov-green/90 transition-colors"
              >
                Xóa tìm kiếm
              </button>
            </div>
          ) : (
            <div className="text-center py-12">
              <HiSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Tìm kiếm thông tin
              </h3>
              <p className="text-gray-500">
                Nhập từ khóa để tìm kiếm thông tin trên website
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SearchPage;
