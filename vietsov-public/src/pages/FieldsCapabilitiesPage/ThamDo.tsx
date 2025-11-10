import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/NewsListPageTemplate";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const ThamDo: React.FC = () => {
  // Generate items from capabilities data
  const generateItems = (): NewsItem[] => {
    const baseItems: NewsItem[] = [
      {
        id: 1,
        image: hoiNghiSuKien,
        imageAlt: "Địa chất - Địa vật lý",
        category: "THĂM DÒ DẦU KHÍ",
        title: "Địa chất - Địa vật lý",
        timestamp: new Date().toLocaleString("vi-VN"),
        description:
          "Khảo sát địa chấn 2D/3D, phân tích tài liệu địa chất, mô hình hóa cấu trúc và đánh giá tiềm năng chứa dầu khí.",
        viewCount: Math.floor(Math.random() * 2000) + 100,
        featured: false,
      },
      {
        id: 2,
        image: hoiNghiPetro,
        imageAlt: "Khoan thăm dò",
        category: "THĂM DÒ DẦU KHÍ",
        title: "Khoan thăm dò",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleString(
          "vi-VN"
        ),
        description:
          "Thiết kế giếng khoan, khoan xác minh, lấy mẫu và đo kiểm giếng phục vụ đánh giá mỏ ban đầu.",
        viewCount: Math.floor(Math.random() * 2000) + 100,
        featured: false,
      },
      {
        id: 3,
        image: hoiNghiSuKien,
        imageAlt: "Đánh giá trữ lượng",
        category: "THĂM DÒ DẦU KHÍ",
        title: "Đánh giá trữ lượng",
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString(
          "vi-VN"
        ),
        description:
          "Tổng hợp dữ liệu để ước tính tài nguyên, lập báo cáo đánh giá trữ lượng và đề xuất phương án khai thác.",
        viewCount: Math.floor(Math.random() * 2000) + 100,
        featured: false,
      },
    ];

    // Add more items to test pagination (total ~20 items)
    const additionalItems = Array.from({ length: 17 }, (_, i) => ({
      id: baseItems.length + i + 1,
      image: [hoiNghiSuKien, hoiNghiPetro][i % 2],
      imageAlt: `Thăm dò dầu khí ${i + 1}`,
      category: "THĂM DÒ DẦU KHÍ",
      title: `Thăm dò dầu khí số ${i + 1}: ${
        [
          "Địa chất địa vật lý",
          "Khoan thăm dò",
          "Đánh giá trữ lượng",
          "Nghiên cứu mỏ",
          "Quy trình thăm dò",
        ][i % 5]
      }`,
      timestamp: new Date(
        Date.now() - (i + 3) * 24 * 60 * 60 * 1000
      ).toLocaleString("vi-VN"),
      description: `Mô tả chi tiết về thăm dò dầu khí số ${i + 1}...`,
      viewCount: Math.floor(Math.random() * 2500) + 150,
      featured: false,
    }));

    return [...baseItems, ...additionalItems];
  };

  const allItems = useMemo(() => generateItems(), []);

  return (
    <NewsListPageTemplate
      activePath="/linhvuc-nangluc/tham-do"
      title="Thăm dò Dầu khí"
      articles={allItems}
      searchPlaceholder="Tìm kiếm về thăm dò dầu khí..."
    />
  );
};

export default ThamDo;


