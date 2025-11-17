import React, { useState, useMemo, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  PageWithSidebar,
  Select,
  Pagination,
  useSidebarState,
} from "@/components";
import { FeaturedNewsLayout } from "@/components/Shared";
import type { FeaturedNewsItem } from "@/components/Shared/FeaturedNewsLayout";
import type { SelectOption } from "@/components";
import { CardFullDetailHori } from "@/components/Card";
import { FiSearch, FiArrowUp, FiArrowDown } from "react-icons/fi";

export interface NewsItem {
  id: number;
  image: string;
  imageAlt: string;
  category?: string;
  title: string;
  timestamp: string;
  description?: string;
  viewCount?: number;
  featured?: boolean;
}

export interface NewsListPageTemplateProps {
  activePath?: string;
  title: string;
  articles: NewsItem[];
  searchPlaceholder?: string;
  sortOptions?: SelectOption<"views" | "date">[];
  itemsPerPage?: number;
  onArticleClick?: (article: NewsItem) => void;
  usePageWrapper?: boolean;
}

type FeaturedHighlightData = {
  mainCard: FeaturedNewsItem;
  sideCards: FeaturedNewsItem[];
};

const FeaturedNewsWithSidebar: React.FC<{ data: FeaturedHighlightData }> = ({
  data,
}) => {
  const isSidebarOpen = useSidebarState();
  return (
    <FeaturedNewsLayout
      mainCard={data.mainCard}
      sideCards={data.sideCards}
      isSidebarOpen={isSidebarOpen}
    />
  );
};

const NewsListPageTemplate: React.FC<NewsListPageTemplateProps> = ({
  activePath,
  title,
  articles,
  searchPlaceholder = "Tìm kiếm tin tức...",
  sortOptions = [
    { value: "views", label: "Theo lượt xem" },
    { value: "date", label: "Theo ngày đăng" },
  ],
  itemsPerPage = 6,
  onArticleClick,
  usePageWrapper = true,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"views" | "date">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Use all articles
  const regularArticles = useMemo(() => articles, [articles]);

  // Handle article click
  const handleArticleClick = useCallback(
    (article: NewsItem) => {
      if (onArticleClick) {
        onArticleClick(article);
      } else {
        window.location.href = "/tintuc/chi-tiet";
      }
    },
    [onArticleClick]
  );

  // Get featured articles for FeaturedNewsLayout
  const featuredArticles = useMemo(() => {
    const featured = regularArticles.filter(
      (article) => article.featured === true
    );
    // If no featured articles, use first 4 articles
    if (featured.length === 0 && regularArticles.length > 0) {
      return regularArticles.slice(0, 4);
    }
    // If less than 4 featured, add regular articles to fill
    if (featured.length < 4) {
      const remaining = regularArticles
        .filter((article) => !article.featured)
        .slice(0, 4 - featured.length);
      return [...featured, ...remaining].slice(0, 4);
    }
    return featured.slice(0, 4);
  }, [regularArticles]);

  // Prepare FeaturedNewsLayout data
  const featuredNewsData: FeaturedHighlightData | null = useMemo(() => {
    if (featuredArticles.length === 0) return null;
    const mainCard = featuredArticles[0];
    const sideCards = featuredArticles.slice(1, 4);
    return {
      mainCard: {
        image: mainCard.image,
        imageAlt: mainCard.imageAlt,
        category: mainCard.category,
        title: mainCard.title,
        timestamp: mainCard.timestamp,
        description: mainCard.description || "",
        onClick: () => handleArticleClick(mainCard),
      },
      sideCards: sideCards.map((card) => ({
        image: card.image,
        imageAlt: card.imageAlt,
        category: card.category,
        title: card.title,
        timestamp: card.timestamp,
        description: card.description || "",
        onClick: () => handleArticleClick(card),
      })),
    };
  }, [featuredArticles, handleArticleClick]);

  // Filter by search term and exclude featured articles from list
  const filteredArticles = useMemo(() => {
    let filtered = regularArticles;

    // Exclude featured articles from the list (to avoid duplication)
    const featuredIds = new Set(featuredArticles.map((a) => a.id));
    filtered = filtered.filter((article) => !featuredIds.has(article.id));

    if (!searchTerm) return filtered;
    return filtered.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (article.description &&
          article.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) ||
        (article.category &&
          article.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [regularArticles, searchTerm, featuredArticles]);

  // Sort articles
  const sortedArticles = useMemo(() => {
    const sorted = [...filteredArticles];
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
  }, [filteredArticles, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(sortedArticles.length / itemsPerPage);
  const paginatedArticles = sortedArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to title instead of top
    if (titleRef.current) {
      const offsetTop = titleRef.current.offsetTop - 100; // 100px offset from top
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const content = (
    <div className={usePageWrapper ? "min-h-screen" : "space-y-8"}>
      {/* Featured News Layout - Only show when no search term */}
      {!searchTerm && featuredNewsData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <FeaturedNewsWithSidebar data={featuredNewsData} />
        </motion.div>
      )}

      {/* Articles Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="mb-6">
          <h2 ref={titleRef} className="text-2xl font-bold text-gray-900 mb-6">
            {title}
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
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-vietsov-green focus:border-transparent transition-colors cursor-pointer"
                />
              </div>

              {/* Sort Controls */}
              <div className="flex items-center gap-2">
                <Select<"views" | "date">
                  options={sortOptions}
                  value={sortBy}
                  onChange={(newValue) => {
                    if (
                      newValue !== null &&
                      !Array.isArray(newValue) &&
                      (newValue === "views" || newValue === "date")
                    ) {
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
                Tìm thấy {sortedArticles.length} kết quả
              </p>
            )}
          </div>
        </div>

        {/* Articles List */}
        {paginatedArticles.length > 0 ? (
          <>
            <div className="space-y-6 lg:space-y-5 inch32:space-y-6">
              {paginatedArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={
                    index !== paginatedArticles.length - 1
                      ? "border-b border-vietsov-green/30 pb-6 lg:pb-5 inch32:pb-6"
                      : ""
                  }
                >
                  <CardFullDetailHori
                    image={article.image}
                    imageAlt={article.imageAlt}
                    category={article.category}
                    title={article.title}
                    timestamp={article.timestamp}
                    description={article.description}
                    className="h-48"
                    onClick={() => handleArticleClick(article)}
                    detail={true}
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
      </motion.div>
    </div>
  );

  if (usePageWrapper && activePath) {
    return <PageWithSidebar activePath={activePath}>{content}</PageWithSidebar>;
  }

  return content;
};

export default NewsListPageTemplate;
