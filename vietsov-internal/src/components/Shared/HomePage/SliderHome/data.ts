// Import ảnh
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoatDongCongDong from "@/assets/hdcongdongvietsov.jpg";
import gianKhoan from "@/assets/background-slider/gian-khoan.jpg";
import resort from "@/assets/background-slider/vietsovpetro-resort-3.jpg";
import kinhNguTrang from "@/assets/background-slider/kinh-ngu-trang.jpg";
// Types for API integration
export interface HeroSlideData {
  id: string | number;
  categoryText: string;
  mainTitleLine1: string;
  mainTitleLine2: string;
  descriptionText: string;
  buttonText: string;
  buttonLink: string;
  backgroundImageSrc: string;
  showRigNavigationArrow?: boolean;
  rigNavigationArrowDirection?: "left" | "right";
  textColor?: "white" | "black";
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  overlayColor?: string;
  // Video support
  videoId?: string;
  isVideo?: boolean;
}

export interface HeroSliderProps {
  slides?: HeroSlideData[];
  autoplayDelay?: number;
  showPagination?: boolean;
  className?: string;
  basePath?: string;
}

// Default slides data for public system
export const defaultPublicSlidesData: HeroSlideData[] = [
  {
    id: 1,
    categoryText: "GIỚI THIỆU",
    mainTitleLine1: "Giới thiệu về",
    mainTitleLine2: "Liên doanh Vietsovpetro",
    descriptionText:
      "Liên doanh Vietsovpetro (gọi tắt là Vietsovpetro) là pháp nhân hợp pháp của nước CHXHCN Việt Nam, được thành lập năm 1981, là đơn vị thành viên của Tập đoàn Dầu khí Quốc gia Việt Nam,",
    buttonText: "Chi tiết",
    buttonLink: "tintuc/chi-tiet",
    backgroundImageSrc: gianKhoan,
    showRigNavigationArrow: true,
    rigNavigationArrowDirection: "right",
    textColor: "white",
    buttonBackgroundColor: "white",
    buttonTextColor: "black",
    overlayColor: "rgba(0, 0, 0, 0.4)",
  },
  {
    id: 2,
    categoryText: "SỰ KIỆN NỔI BẬT",
    mainTitleLine1: "Vietsovpetro đón dòng dầu đầu tiên tại mỏ Kình Ngư Trắng",
    mainTitleLine2: "",
    descriptionText: "6 tháng đầu năm 2025",
    buttonText: "Chi tiết",
    buttonLink: "tintuc/chi-tiet",
    backgroundImageSrc: kinhNguTrang,
    showRigNavigationArrow: true,
    rigNavigationArrowDirection: "right",
    textColor: "white",
    buttonBackgroundColor: "white",
    buttonTextColor: "black",
    overlayColor: "rgba(0, 0, 0, 0.4)",
  },
  {
    id: 3,
    categoryText: "HOẠT ĐỘNG CỘNG ĐỒNG",
    mainTitleLine1: "Resort Vietsovpetro",
    mainTitleLine2: "Hồ Tràm",
    descriptionText: "Khu du lịch mang nét hoang sơ mà trữ tình",
    buttonText: "Chi tiết",
    buttonLink: "tintuc/chi-tiet",
    backgroundImageSrc: resort,
    showRigNavigationArrow: true,
    rigNavigationArrowDirection: "right",
    textColor: "white",
    buttonBackgroundColor: "white",
    buttonTextColor: "black",
    overlayColor: "rgba(0, 0, 0, 0.4)",
  },
];

// Default slides data for internal system
export const defaultInternalSlidesData: HeroSlideData[] = [
  {
    id: 1,
    categoryText: "GIỚI THIỆU",
    mainTitleLine1: "Giới thiệu về",
    mainTitleLine2: "Liên doanh Vietsovpetro",
    descriptionText:
      "Liên doanh Vietsovpetro (gọi tắt là Vietsovpetro) là pháp nhân hợp pháp của nước CHXHCN Việt Nam, được thành lập năm 1981, là đơn vị thành viên của Tập đoàn Dầu khí Quốc gia Việt Nam,",
    buttonText: "Chi tiết",
    buttonLink: "/internal/gioithieu",
    backgroundImageSrc: daiHoiDaiBieu,
    showRigNavigationArrow: true,
    rigNavigationArrowDirection: "right",
    textColor: "white",
    buttonBackgroundColor: "white",
    buttonTextColor: "black",
    overlayColor: "rgba(0, 0, 0, 0.4)",
  },
  {
    id: 2,
    categoryText: "SỰ KIỆN NỔI BẬT",
    mainTitleLine1: "Hội nghị Sơ kết Công tác",
    mainTitleLine2: "Truyền thông và Văn hóa Doanh nghiệp",
    descriptionText: "6 tháng đầu năm 2025",
    buttonText: "Chi tiết",
    buttonLink: "/internal/tintuc",
    backgroundImageSrc: hoiNghiSuKien,
    showRigNavigationArrow: true,
    rigNavigationArrowDirection: "right",
    textColor: "white",
    buttonBackgroundColor: "white",
    buttonTextColor: "black",
    overlayColor: "rgba(0, 0, 0, 0.4)",
  },
  {
    id: 3,
    categoryText: "HOẠT ĐỘNG CỘNG ĐỒNG",
    mainTitleLine1: "Vietsovpetro Chung tay vì",
    mainTitleLine2: "Môi trường Xanh, Sạch, Đẹp",
    descriptionText: "Chiến dịch Mùa hè xanh 2025",
    buttonText: "Chi tiết",
    buttonLink: "/internal/tintuc",
    backgroundImageSrc: hoatDongCongDong,
    showRigNavigationArrow: true,
    rigNavigationArrowDirection: "right",
    textColor: "white",
    buttonBackgroundColor: "white",
    buttonTextColor: "black",
    overlayColor: "rgba(0, 0, 0, 0.4)",
  },
];
