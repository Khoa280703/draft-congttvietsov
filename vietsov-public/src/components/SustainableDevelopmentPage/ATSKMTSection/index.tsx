import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/Shared/NewsListPageTemplate";
import { atskmtArticles } from "./data";

const ATSKMTSection: React.FC = () => {
  // Convert ATSKMTArticle to NewsItem format
  const articles: NewsItem[] = useMemo(() => {
    return atskmtArticles.map((article) => ({
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
      title="Bài viết về an toàn sức khỏe môi trường"
      articles={articles}
      searchPlaceholder="Tìm kiếm bài viết..."
      usePageWrapper={false}
    />
  );
};

export default ATSKMTSection;
