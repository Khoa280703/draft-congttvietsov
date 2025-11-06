import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/Shared/NewsListPageTemplate";
import { trainingPrograms } from "./data";

const TrainingSection: React.FC = () => {
  // Convert TrainingProgram to NewsItem format
  const articles: NewsItem[] = useMemo(() => {
    return trainingPrograms.map((program) => ({
      id: program.id,
      image: program.image,
      imageAlt: program.imageAlt,
      category: program.category,
      title: program.title,
      timestamp: program.publishDate,
      description: program.content,
      viewCount: Math.floor(Math.random() * 2000) + 100,
    }));
  }, []);

  return (
    <NewsListPageTemplate
      title="Chương trình đào tạo"
      articles={articles}
      searchPlaceholder="Tìm kiếm chương trình..."
      usePageWrapper={false}
    />
  );
};

export default TrainingSection;
