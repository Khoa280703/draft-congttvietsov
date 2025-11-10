import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/NewsListPageTemplate";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const TimKiem: React.FC = () => {
  // Generate items from capabilities data
  const generateItems = (): NewsItem[] => {
    const baseItems: NewsItem[] = [
      {
        id: 1,
        image: hoiNghiSuKien,
        imageAlt: "Khảo sát địa chấn 3D",
        category: "TÌM KIẾM DẦU KHÍ",
        title: "Khảo sát địa chấn 3D",
        timestamp: new Date().toLocaleString("vi-VN"),
        description:
          "Thu thập, xử lý và minh giải dữ liệu địa chấn chất lượng cao phục vụ xác định cấu trúc có tiềm năng.",
        viewCount: Math.floor(Math.random() * 2000) + 100,
        featured: false,
      },
      {
        id: 2,
        image: hoiNghiPetro,
        imageAlt: "Phân tích địa hóa",
        category: "TÌM KIẾM DẦU KHÍ",
        title: "Phân tích địa hóa",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleString(
          "vi-VN"
        ),
        description:
          "Đánh giá nguồn sinh, đá chứa, bẫy chứa bằng các kỹ thuật phân tích phòng thí nghiệm và mô hình hóa.",
        viewCount: Math.floor(Math.random() * 2000) + 100,
        featured: false,
      },
      {
        id: 3,
        image: hoiNghiSuKien,
        imageAlt: "Mô hình hóa địa chất",
        category: "TÌM KIẾM DẦU KHÍ",
        title: "Mô hình hóa địa chất",
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString(
          "vi-VN"
        ),
        description:
          "Xây dựng mô hình địa chất 3D, mô phỏng dòng chảy và dự báo tiềm năng trước khi quyết định khoan.",
        viewCount: Math.floor(Math.random() * 2000) + 100,
        featured: false,
      },
    ];

    // Add more items to test pagination (total ~20 items)
    const additionalItems = Array.from({ length: 17 }, (_, i) => ({
      id: baseItems.length + i + 1,
      image: [hoiNghiSuKien, hoiNghiPetro][i % 2],
      imageAlt: `Tìm kiếm dầu khí ${i + 1}`,
      category: "TÌM KIẾM DẦU KHÍ",
      title: `Tìm kiếm dầu khí số ${i + 1}: ${
        [
          "Khảo sát địa chấn",
          "Phân tích địa hóa",
          "Mô hình hóa địa chất",
          "Công nghệ tìm kiếm",
          "Dự án hợp tác",
        ][i % 5]
      }`,
      timestamp: new Date(
        Date.now() - (i + 3) * 24 * 60 * 60 * 1000
      ).toLocaleString("vi-VN"),
      description: `Mô tả chi tiết về tìm kiếm dầu khí số ${i + 1}...`,
      viewCount: Math.floor(Math.random() * 2500) + 150,
      featured: false,
    }));

    return [...baseItems, ...additionalItems];
  };

  const allItems = useMemo(() => generateItems(), []);

  return (
    <NewsListPageTemplate
      activePath="/linhvuc-nangluc/tim-kiem"
      title="Tìm kiếm Dầu khí"
      articles={allItems}
      searchPlaceholder="Tìm kiếm về tìm kiếm dầu khí..."
    />
  );
};

export default TimKiem;


