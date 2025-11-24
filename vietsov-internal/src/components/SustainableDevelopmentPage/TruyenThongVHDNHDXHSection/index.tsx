import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/NewsListPageTemplate";
import { truyenThongArticles } from "./data";

const TruyenThongVHDNHDXHSection: React.FC = () => {
  // Convert TruyenThongArticle to NewsItem format
  const articles: NewsItem[] = useMemo(() => {
    return truyenThongArticles.map((article) => ({
      id: article.id,
      image: article.image,
      imageAlt: article.imageAlt,
      category: article.category,
      title: article.title,
      timestamp: article.publishDate,
      description: article.content,
      viewCount: Math.floor(Math.random() * 2000) + 100,
    }));
  }, []);

  return (
    <NewsListPageTemplate
      title="Bài viết về văn hóa doanh nghiệp và hoạt động xã hội"
      articles={articles}
      searchPlaceholder="Tìm kiếm bài viết..."
      usePageWrapper={false}
    />
  );
};

export default TruyenThongVHDNHDXHSection;
