import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoatDongCongDong from "@/assets/hdcongdongvietsov.jpg";
import dankhoanvietsov from "@/assets/dankhoanvietsov.jpg";
import bannerDankhoan from "@/assets/banner-dankhoan.jpg";
import gianKhoan from "@/assets/background-slider/gian-khoan.jpg";

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

export interface FullScreenBackgroundImageData {
  timelineItems: TimelineItem[];
  contentItems: ContentItem[];
  imageCards: ImageCard[];
}

export interface FullScreenBackgroundImageProps {
  image: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
  animationDuration?: number;
  expandThreshold?: number;
  data?: FullScreenBackgroundImageData;
}

// Default data based on history milestones
export const defaultFullScreenBackgroundImageData: FullScreenBackgroundImageData =
  {
    timelineItems: [
      { id: 1, year: 2005 },
      { id: 2, year: 2009 },
      { id: 3, year: 2010 },
      { id: 4, year: 2012 },
      { id: 5, year: 2016 },
      { id: 6, year: 2019 },
    ],
    contentItems: [
      {
        id: 1,
        title: "2005 - Phát hiện dầu tại Tầm Đảo-01",
        description:
          "Tầm Đảo-01 phát hiện dầu tại Giếng khoan trong tầng móng tại Đông Nam Rồng. Đây là một cột mốc quan trọng trong hoạt động thăm dò của Vietsovpetro, đánh dấu bước tiến đáng kể trong công nghệ khai thác dầu khí.",
        buttonText: "Xem chi tiết",
        buttonLink: "#",
      },
      {
        id: 2,
        title: "2009 - Huân chương Hồ Chí Minh",
        description:
          "Chủ tịch nước CHXHCN Việt Nam ký Quyết định số 449/QĐ-CTN trao tặng Huân chương Hồ Chí Minh cho Liên doanh Việt – Nga Vietsovpetro, ghi nhận thành tích đặc biệt xuất sắc trong sản xuất, kinh doanh dầu khí và đóng góp to lớn vào sự nghiệp xây dựng, bảo vệ Tổ quốc.",
        buttonText: "Xem chi tiết",
        buttonLink: "#",
      },
      {
        id: 3,
        title: "2010 - Hiệp định hợp tác Việt - Xô",
        description:
          "Ký kết Hiệp định hợp tác Việt - Xô về thăm dò và khai thác Dầu khí ở thềm lục địa Việt Nam, ngày 03.07.1980. Đây là nền tảng cho sự phát triển của Vietsovpetro, mở ra kỷ nguyên mới cho ngành dầu khí Việt Nam.",
        buttonText: "Xem chi tiết",
        buttonLink: "#",
      },
      {
        id: 4,
        title: "2012 - Cung cấp khí cho nhà máy điện",
        description:
          "Cung cấp khí cho nhà máy nhiệt điện Bà Rịa - Đình Cô năm 1995. Đóng góp vào an ninh năng lượng quốc gia và phát triển công nghiệp điện lực, góp phần đảm bảo nguồn cung năng lượng ổn định cho đất nước.",
        buttonText: "Xem chi tiết",
        buttonLink: "#",
      },
      {
        id: 5,
        title: "2016 - Bác Phạm Văn Đồng thăm XNLD",
        description:
          "Bác Phạm Văn Đồng đến thăm và làm việc với XNLD năm 1981. Sự kiện lịch sử đánh dấu sự quan tâm của lãnh đạo cấp cao đối với ngành dầu khí, thể hiện tầm quan trọng của ngành trong phát triển kinh tế đất nước.",
        buttonText: "Xem chi tiết",
        buttonLink: "#",
      },
      {
        id: 6,
        title: "2019 - Đại tướng Võ Nguyên Giáp thăm Vietsovpetro",
        description:
          "Đại tướng Võ Nguyên Giáp đến thăm Vietsovpetro năm 2001. Một vinh dự lớn và nguồn động viên to lớn cho toàn thể cán bộ công nhân viên, khẳng định vai trò quan trọng của Vietsovpetro trong sự nghiệp phát triển đất nước.",
        buttonText: "Xem chi tiết",
        buttonLink: "#",
      },
    ],
    imageCards: [
      {
        id: 1,
        image: daiHoiDaiBieu,
        imageAlt: "Đại hội đại biểu IVPVN",
        title: "Đại hội đại biểu",
        subtitle: "Sự kiện quan trọng của ngành dầu khí",
      },
      {
        id: 2,
        image: hoiNghiSuKien,
        imageAlt: "Hội nghị sự kiện công tác PVN",
        title: "Hội nghị công tác",
        subtitle: "Tổng kết và định hướng phát triển",
      },
      {
        id: 3,
        image: hoatDongCongDong,
        imageAlt: "Hoạt động cộng đồng Vietsovpetro",
        title: "Hoạt động cộng đồng",
        subtitle: "Gắn kết và phát triển bền vững",
      },
      {
        id: 4,
        image: dankhoanvietsov,
        imageAlt: "Đàn khoan Vietsovpetro",
        title: "Đàn khoan",
        subtitle: "Công nghệ khai thác hiện đại",
      },
      {
        id: 5,
        image: bannerDankhoan,
        imageAlt: "Banner đàn khoan",
        title: "Hoạt động khai thác",
        subtitle: "Sản xuất dầu khí hiệu quả",
      },
      {
        id: 6,
        image: gianKhoan,
        imageAlt: "Giàn khoan",
        title: "Giàn khoan",
        subtitle: "Cơ sở hạ tầng quan trọng",
      },
    ],
  };
