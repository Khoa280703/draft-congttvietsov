import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/NewsListPageTemplate";
import { scienceTechArticles } from "./data";

const ScienceTechSection: React.FC = () => {
  // Convert ScienceTechArticle to NewsItem format
  const articles: NewsItem[] = useMemo(() => {
    return scienceTechArticles.map((article) => ({
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
      title="Nghiên cứu khoa học và công nghệ"
      articles={articles}
      searchPlaceholder="Tìm kiếm nghiên cứu..."
      usePageWrapper={false}
    />
  );
};

export default ScienceTechSection;
