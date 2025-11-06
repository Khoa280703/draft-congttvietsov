import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/Shared/NewsListPageTemplate";
import {
  defaultMainArticle as prodMain,
  defaultSideArticles as prodSides,
} from "@/components/NewsPage/ProductionActivitySection/data";

const ProductionActivityPage: React.FC = () => {
  // Generate more items for pagination testing
  const generateMoreItems = (): NewsItem[] => {
    const baseItems: NewsItem[] = [
      {
        id: 0,
        image: prodMain.image,
        imageAlt: prodMain.title,
        category: prodMain.category,
        title: prodMain.title,
        timestamp: prodMain.timestamp,
        description: prodMain.description,
        viewCount: 1250,
        featured: true,
      },
      ...prodSides.map((a) => ({
        id: a.id,
        image: a.image,
        imageAlt: a.title,
        category: "HOẠT ĐỘNG SẢN XUẤT",
        title: a.title,
        timestamp: a.timestamp,
        description: a.description || "",
        viewCount: Math.floor(Math.random() * 2000) + 100,
        featured: false,
      })),
    ];

    // Add more items to test pagination (total ~20 items)
    const additionalItems = Array.from({ length: 15 }, (_, i) => ({
      id: baseItems.length + i,
      image: prodSides[i % prodSides.length]?.image || prodMain.image,
      imageAlt: `Tin tức ${i + 1}`,
      category: "HOẠT ĐỘNG SẢN XUẤT",
      title: `Tin tức hoạt động sản xuất số ${i + 1}: ${
        [
          "Dự án khai thác dầu khí mới",
          "Hợp tác quốc tế",
          "Công nghệ mới trong ngành",
          "Báo cáo tài chính",
          "Sự kiện nổi bật",
        ][i % 5]
      }`,
      timestamp: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleString(
        "vi-VN"
      ),
      description: `Mô tả chi tiết về tin tức hoạt động sản xuất số ${
        i + 1
      }...`,
      viewCount: Math.floor(Math.random() * 3000) + 50,
      featured: false,
    }));

    return [...baseItems, ...additionalItems];
  };

  const allNewsData = useMemo(() => generateMoreItems(), []);

  return (
    <NewsListPageTemplate
      activePath="/tintuc/hoat-dong-sx-kd"
      title="Hoạt động sản xuất và kinh doanh"
      articles={allNewsData}
    />
  );
};

export default ProductionActivityPage;
