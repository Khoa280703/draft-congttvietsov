import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/Shared/NewsListPageTemplate";
import { innovationItems } from "./data";

const InnovationSection: React.FC = () => {
  // Convert InnovationItem to NewsItem format
  const articles: NewsItem[] = useMemo(() => {
    return innovationItems.map((item) => ({
      id: item.id,
      image: item.image,
      imageAlt: item.imageAlt,
      category: item.category,
      title: item.title,
      timestamp: item.publishDate,
      description: item.content,
      viewCount: Math.floor(Math.random() * 2000) + 100,
    }));
  }, []);

  return (
    <NewsListPageTemplate
      title="Sáng kiến và sáng chế"
      articles={articles}
      searchPlaceholder="Tìm kiếm sáng kiến..."
      usePageWrapper={false}
    />
  );
};

export default InnovationSection;
