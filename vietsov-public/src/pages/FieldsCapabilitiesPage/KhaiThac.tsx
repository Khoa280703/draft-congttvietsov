import React, { useMemo } from "react";
import NewsListPageTemplate, {
  type NewsItem,
} from "@/components/Shared/NewsListPageTemplate";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const KhaiThac: React.FC = () => {
  // Generate items from capabilities data
  const generateItems = (): NewsItem[] => {
    const baseItems: NewsItem[] = [
      {
        id: 1,
        image: hoiNghiSuKien,
        imageAlt: "Vận hành giàn khoan",
        category: "KHAI THÁC DẦU KHÍ",
        title: "Vận hành giàn khoan",
        timestamp: new Date().toLocaleString("vi-VN"),
        description:
          "Quản lý vận hành an toàn - hiệu quả, tối ưu thời gian dừng máy, bảo dưỡng theo tình trạng.",
        viewCount: Math.floor(Math.random() * 2000) + 100,
        featured: false,
      },
      {
        id: 2,
        image: hoiNghiPetro,
        imageAlt: "Xử lý & vận chuyển",
        category: "KHAI THÁC DẦU KHÍ",
        title: "Xử lý & vận chuyển",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleString(
          "vi-VN"
        ),
        description:
          "Thu gom, xử lý, tách dầu - khí - nước; xuất bán và vận chuyển tới điểm tiếp nhận.",
        viewCount: Math.floor(Math.random() * 2000) + 100,
        featured: false,
      },
      {
        id: 3,
        image: hoiNghiSuKien,
        imageAlt: "An toàn & môi trường",
        category: "KHAI THÁC DẦU KHÍ",
        title: "An toàn & môi trường",
        timestamp: new Date(
          Date.now() - 2 * 24 * 60 * 60 * 1000
        ).toLocaleString("vi-VN"),
        description:
          "Áp dụng tiêu chuẩn ATSKMT, ứng cứu sự cố, quan trắc môi trường liên tục và báo cáo định kỳ.",
        viewCount: Math.floor(Math.random() * 2000) + 100,
        featured: false,
      },
    ];

    // Add more items to test pagination (total ~20 items)
    const additionalItems = Array.from({ length: 17 }, (_, i) => ({
      id: baseItems.length + i + 1,
      image: [hoiNghiSuKien, hoiNghiPetro][i % 2],
      imageAlt: `Khai thác dầu khí ${i + 1}`,
      category: "KHAI THÁC DẦU KHÍ",
      title: `Khai thác dầu khí số ${i + 1}: ${
        [
          "Vận hành giàn khoan",
          "Xử lý và vận chuyển",
          "An toàn môi trường",
          "Công nghệ khai thác",
          "Quản lý dự án",
        ][i % 5]
      }`,
      timestamp: new Date(
        Date.now() - (i + 3) * 24 * 60 * 60 * 1000
      ).toLocaleString("vi-VN"),
      description: `Mô tả chi tiết về khai thác dầu khí số ${i + 1}...`,
      viewCount: Math.floor(Math.random() * 2500) + 150,
      featured: false,
    }));

    return [...baseItems, ...additionalItems];
  };

  const allItems = useMemo(() => generateItems(), []);

  return (
    <NewsListPageTemplate
      activePath="/linhvuc-nangluc/khai-thac"
      title="Khai thác Dầu khí"
      articles={allItems}
      searchPlaceholder="Tìm kiếm về khai thác dầu khí..."
    />
  );
};

export default KhaiThac;
