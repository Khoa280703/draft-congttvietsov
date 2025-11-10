import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/NewsListPageTemplate";
import {
  defaultMainArticle as oilMain,
  defaultSideArticles as oilSides,
} from "@/components/NewsPage/OilNewsSection/data";

const OilNewsPage: React.FC = () => {
  // Generate more items for pagination testing
  const generateMoreItems = (): NewsItem[] => {
    const baseItems: NewsItem[] = [
      {
        id: 0,
        image: oilMain.image,
        imageAlt: oilMain.title,
        category: oilMain.category,
        title: oilMain.title,
        timestamp: oilMain.timestamp,
        description: oilMain.description,
        viewCount: 1850,
        featured: true,
      },
      ...oilSides.map((a) => ({
        id: a.id,
        image: a.image,
        imageAlt: a.title,
        category: "TIN DẦU KHÍ",
        title: a.title,
        timestamp: a.timestamp,
        description: a.description || "",
        viewCount: Math.floor(Math.random() * 2500) + 150,
        featured: false,
      })),
    ];

    // Add more items to test pagination (total ~20 items)
    const additionalItems = Array.from({ length: 15 }, (_, i) => ({
      id: baseItems.length + i,
      image: oilSides[i % oilSides.length]?.image || oilMain.image,
      imageAlt: `Tin dầu khí ${i + 1}`,
      category: "TIN DẦU KHÍ",
      title: `Tin dầu khí số ${i + 1}: ${
        [
          "Giá dầu thế giới",
          "Khai thác mỏ mới",
          "Công nghệ khoan",
          "Thị trường năng lượng",
          "Hợp đồng xuất khẩu",
        ][i % 5]
      }`,
      timestamp: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleString(
        "vi-VN"
      ),
      description: `Mô tả chi tiết về tin dầu khí số ${i + 1}...`,
      viewCount: Math.floor(Math.random() * 3500) + 100,
      featured: false,
    }));

    return [...baseItems, ...additionalItems];
  };

  const allNewsData = useMemo(() => generateMoreItems(), []);

  return (
    <NewsListPageTemplate
      activePath="/tintuc/tin-dau-khi"
      title="Tin dầu khí"
      articles={allNewsData}
    />
  );
};

export default OilNewsPage;
