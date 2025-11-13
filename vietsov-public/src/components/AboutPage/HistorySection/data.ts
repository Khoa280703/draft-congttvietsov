import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoatDongCongDong from "@/assets/hdcongdongvietsov.jpg";
import dankhoanvietsov from "@/assets/dankhoanvietsov.jpg";
import bannerDankhoan from "@/assets/banner-dankhoan.jpg";
import gianKhoan from "@/assets/background-slider/gian-khoan.jpg";

// Event trong một năm
export interface TimelineEventItem {
  id: string | number;
  // Content data
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  // Image data
  image: string;
  imageAlt: string;
  imageTitle: string;
  imageSubtitle?: string;
}

// Năm với nhiều events
export interface YearEvents {
  year: number;
  label?: string;
  events: TimelineEventItem[];
}

export interface HistorySectionData {
  years: YearEvents[];
}

// Legacy interfaces để backward compatibility (có thể xóa sau)
export interface TimelineItem {
  id: string | number;
  year: number;
  label?: string;
}

export interface ContentItem {
  id: string | number;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface ImageCard {
  id: string | number;
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
}

export interface HistorySectionProps {
  image: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
  animationDuration?: number;
  expandThreshold?: number;
  data?: HistorySectionData;
}

// Default data based on history milestones - nhóm theo năm với nhiều events
export const defaultHistorySectionData: HistorySectionData = {
  years: [
    {
      year: 2005,
      events: [
        {
          id: 1,
          title: "Phát hiện dầu tại Tầm Đảo-01",
          description:
            "Tầm Đảo-01 phát hiện dầu tại Giếng khoan trong tầng móng tại Đông Nam Rồng. Đây là một cột mốc quan trọng trong hoạt động thăm dò của Vietsovpetro, đánh dấu bước tiến đáng kể trong công nghệ khai thác dầu khí.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: daiHoiDaiBieu,
          imageAlt: "Phát hiện dầu tại Tầm Đảo-01",
          imageTitle: "2005 - Phát hiện dầu tại Tầm Đảo-01",
          imageSubtitle: "Cột mốc quan trọng trong hoạt động thăm dò",
        },
        {
          id: 2,
          title: "Khởi công dự án mới",
          description:
            "Khởi công dự án khai thác dầu khí mới tại khu vực Đông Nam Rồng, mở ra triển vọng phát triển cho ngành năng lượng.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: hoiNghiSuKien,
          imageAlt: "Khởi công dự án mới",
          imageTitle: "2005 - Khởi công dự án mới",
          imageSubtitle: "Mở ra triển vọng phát triển cho ngành năng lượng",
        },
        {
          id: 3,
          title: "Khởi công dự án mới",
          description:
            "Khởi công dự án khai thác dầu khí mới tại khu vực Đông Nam Rồng, mở ra triển vọng phát triển cho ngành năng lượng.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: hoiNghiSuKien,
          imageAlt: "Khởi công dự án mới",
          imageTitle: "2005 - Khởi công dự án mới",
          imageSubtitle: "Mở ra triển vọng phát triển cho ngành năng lượng",
        },
        {
          id: 4,
          title: "Khởi công dự án mới",
          description:
            "Khởi công dự án khai thác dầu khí mới tại khu vực Đông Nam Rồng, mở ra triển vọng phát triển cho ngành năng lượng.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: hoiNghiSuKien,
          imageAlt: "Khởi công dự án mới",
          imageTitle: "2005 - Khởi công dự án mới",
          imageSubtitle: "Mở ra triển vọng phát triển cho ngành năng lượng",
        },
        {
          id: 5,
          title: "Khởi công dự án mới",
          description:
            "Khởi công dự án khai thác dầu khí mới tại khu vực Đông Nam Rồng, mở ra triển vọng phát triển cho ngành năng lượng.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: hoiNghiSuKien,
          imageAlt: "Khởi công dự án mới",
          imageTitle: "2005 - Khởi công dự án mới",
          imageSubtitle: "Mở ra triển vọng phát triển cho ngành năng lượng",
        },
      ],
    },
    {
      year: 2009,
      events: [
        {
          id: 6,
          title: "Huân chương Hồ Chí Minh",
          description:
            "Chủ tịch nước CHXHCN Việt Nam ký Quyết định số 449/QĐ-CTN trao tặng Huân chương Hồ Chí Minh cho Liên doanh Việt – Nga Vietsovpetro, ghi nhận thành tích đặc biệt xuất sắc trong sản xuất, kinh doanh dầu khí và đóng góp to lớn vào sự nghiệp xây dựng, bảo vệ Tổ quốc.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: hoiNghiSuKien,
          imageAlt: "Huân chương Hồ Chí Minh",
          imageTitle: "2009 - Huân chương Hồ Chí Minh",
          imageSubtitle: "Ghi nhận thành tích đặc biệt xuất sắc",
        },
        {
          id: 7,
          title: "Huân chương Hồ Chí Minh",
          description:
            "Chủ tịch nước CHXHCN Việt Nam ký Quyết định số 449/QĐ-CTN trao tặng Huân chương Hồ Chí Minh cho Liên doanh Việt – Nga Vietsovpetro, ghi nhận thành tích đặc biệt xuất sắc trong sản xuất, kinh doanh dầu khí và đóng góp to lớn vào sự nghiệp xây dựng, bảo vệ Tổ quốc.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: hoiNghiSuKien,
          imageAlt: "Huân chương Hồ Chí Minh",
          imageTitle: "2009 - Huân chương Hồ Chí Minh",
          imageSubtitle: "Ghi nhận thành tích đặc biệt xuất sắc",
        },
        {
          id: 8,
          title: "Huân chương Hồ Chí Minh",
          description:
            "Chủ tịch nước CHXHCN Việt Nam ký Quyết định số 449/QĐ-CTN trao tặng Huân chương Hồ Chí Minh cho Liên doanh Việt – Nga Vietsovpetro, ghi nhận thành tích đặc biệt xuất sắc trong sản xuất, kinh doanh dầu khí và đóng góp to lớn vào sự nghiệp xây dựng, bảo vệ Tổ quốc.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: hoiNghiSuKien,
          imageAlt: "Huân chương Hồ Chí Minh",
          imageTitle: "2009 - Huân chương Hồ Chí Minh",
          imageSubtitle: "Ghi nhận thành tích đặc biệt xuất sắc",
        },
      ],
    },
    {
      year: 2010,
      events: [
        {
          id: 9,
          title: "Hiệp định hợp tác Việt - Xô",
          description:
            "Ký kết Hiệp định hợp tác Việt - Xô về thăm dò và khai thác Dầu khí ở thềm lục địa Việt Nam, ngày 03.07.1980. Đây là nền tảng cho sự phát triển của Vietsovpetro, mở ra kỷ nguyên mới cho ngành dầu khí Việt Nam.",
          buttonText: "Xem chi tiết",
          buttonLink: "#",
          image: hoatDongCongDong,
          imageAlt: "Hiệp định hợp tác Việt - Xô",
          imageTitle: "2010 - Hiệp định hợp tác Việt - Xô",
          imageSubtitle: "Nền tảng cho sự phát triển của Vietsovpetro",
        },
      ],
    },
    {
      year: 2012,
      events: [
        {
          id: 10,
          title: "Cung cấp khí cho nhà máy điện",
          description:
            "Cung cấp khí cho nhà máy nhiệt điện Bà Rịa - Đình Cô năm 1995. Đóng góp vào an ninh năng lượng quốc gia và phát triển công nghiệp điện lực, góp phần đảm bảo nguồn cung năng lượng ổn định cho đất nước.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: dankhoanvietsov,
          imageAlt: "Cung cấp khí cho nhà máy điện",
          imageTitle: "2012 - Cung cấp khí cho nhà máy điện",
          imageSubtitle: "Đóng góp vào an ninh năng lượng quốc gia",
        },
      ],
    },
    {
      year: 2016,
      events: [
        {
          id: 11,
          title: "Bác Phạm Văn Đồng thăm XNLD",
          description:
            "Bác Phạm Văn Đồng đến thăm và làm việc với XNLD năm 1981. Sự kiện lịch sử đánh dấu sự quan tâm của lãnh đạo cấp cao đối với ngành dầu khí, thể hiện tầm quan trọng của ngành trong phát triển kinh tế đất nước.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: bannerDankhoan,
          imageAlt: "Bác Phạm Văn Đồng thăm XNLD",
          imageTitle: "2016 - Bác Phạm Văn Đồng thăm XNLD",
          imageSubtitle: "Sự kiện lịch sử quan trọng",
        },
        {
          id: 12,
          title: "Bác Phạm Văn Đồng thăm XNLD",
          description:
            "Bác Phạm Văn Đồng đến thăm và làm việc với XNLD năm 1981. Sự kiện lịch sử đánh dấu sự quan tâm của lãnh đạo cấp cao đối với ngành dầu khí, thể hiện tầm quan trọng của ngành trong phát triển kinh tế đất nước.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: bannerDankhoan,
          imageAlt: "Bác Phạm Văn Đồng thăm XNLD",
          imageTitle: "2016 - Bác Phạm Văn Đồng thăm XNLD",
          imageSubtitle: "Sự kiện lịch sử quan trọng",
        },
      ],
    },
    {
      year: 2019,
      events: [
        {
          id: 13,
          title: "Đại tướng Võ Nguyên Giáp thăm Vietsovpetro",
          description:
            "Đại tướng Võ Nguyên Giáp đến thăm Vietsovpetro năm 2001. Một vinh dự lớn và nguồn động viên to lớn cho toàn thể cán bộ công nhân viên, khẳng định vai trò quan trọng của Vietsovpetro trong sự nghiệp phát triển đất nước.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: gianKhoan,
          imageAlt: "Đại tướng Võ Nguyên Giáp thăm Vietsovpetro",
          imageTitle: "2019 - Đại tướng Võ Nguyên Giáp thăm Vietsovpetro",
          imageSubtitle: "Vinh dự lớn và nguồn động viên to lớn",
        },
      ],
    },
    {
      year: 2025,
      events: [
        {
          id: 14,
          title: "Vietsovpetro thăm Việt Nam",
          description:
            "Vietsovpetro thăm Việt Nam năm 2025. Một sự kiện quan trọng đánh dấu sự quan tâm của Vietsovpetro đối với Việt Nam.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: gianKhoan,
          imageAlt: "Vietsovpetro thăm Việt Nam",
          imageTitle: "2025 - Vietsovpetro thăm Việt Nam",
          imageSubtitle: "Sự kiện quan trọng đánh dấu sự quan tâm",
        },
      ],
    },
    {
      year: 2026,
      events: [
        {
          id: 15,
          title: "Vietsovpetro thăm Việt Nam",
          description:
            "Vietsovpetro thăm Việt Nam năm 2025. Một sự kiện quan trọng đánh dấu sự quan tâm của Vietsovpetro đối với Việt Nam.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: gianKhoan,
          imageAlt: "Vietsovpetro thăm Việt Nam",
          imageTitle: "2026 - Vietsovpetro thăm Việt Nam",
          imageSubtitle: "Sự kiện quan trọng đánh dấu sự quan tâm",
        },
        {
          id: 16,
          title: "Vietsovpetro thăm Việt Nam",
          description:
            "Vietsovpetro thăm Việt Nam năm 2025. Một sự kiện quan trọng đánh dấu sự quan tâm của Vietsovpetro đối với Việt Nam.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: gianKhoan,
          imageAlt: "Vietsovpetro thăm Việt Nam",
          imageTitle: "2026 - Vietsovpetro thăm Việt Nam",
          imageSubtitle: "Sự kiện quan trọng đánh dấu sự quan tâm",
        },
        {
          id: 17,
          title: "Vietsovpetro thăm Việt Nam",
          description:
            "Vietsovpetro thăm Việt Nam năm 2025. Một sự kiện quan trọng đánh dấu sự quan tâm của Vietsovpetro đối với Việt Nam.",
          buttonText: "Xem chi tiết",
          buttonLink: "tintuc/chi-tiet",
          image: gianKhoan,
          imageAlt: "Vietsovpetro thăm Việt Nam",
          imageTitle: "2026 - Vietsovpetro thăm Việt Nam",
          imageSubtitle: "Sự kiện quan trọng đánh dấu sự quan tâm",
        },
      ],
    },
  ],
};
