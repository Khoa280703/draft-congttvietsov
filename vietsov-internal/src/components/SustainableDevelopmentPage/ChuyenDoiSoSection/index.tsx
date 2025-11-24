import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/NewsListPageTemplate";
import { chuyenDoiSoArticles } from "./data";

const ChuyenDoiSoSection: React.FC = () => {
  // Convert ChuyenDoiSoArticle to NewsItem format
  const articles: NewsItem[] = useMemo(() => {
    return chuyenDoiSoArticles.map((article) => ({
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
      title="Bài viết về chuyển đổi số"
      articles={articles}
      searchPlaceholder="Tìm kiếm bài viết..."
      usePageWrapper={false}
    />
  );
};

export default ChuyenDoiSoSection;
