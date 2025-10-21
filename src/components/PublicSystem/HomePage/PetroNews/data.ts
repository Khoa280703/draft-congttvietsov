import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoatDongCongDong from "@/assets/hdcongdongvietsov.jpg";

export interface PetroNewsItem {
  id: string | number;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  timestamp: string;
  description: string;
  link: string;
}

export interface PetroNewsProps {
  newsItems?: PetroNewsItem[];
  className?: string;
}

// Default data matching the design
export const defaultPetroNewsData: PetroNewsItem[] = [
  {
    id: 1,
    image: daiHoiDaiBieu,
    imageAlt: "Award ceremony with six people holding certificates",
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title:
      "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học và phát triển nguồn nhân lực Dầu...",
    timestamp: "9/6/2024 9:54:47 AM",
    description:
      "Ngày 13/09/2025 vừa qua tại phường Vũng Tàu, thành phố Hồ Chí Minh đã diễn ra Lễ tổng kết trao giải Hội thi Sáng tạ...",
    link: "/tintuc/chi-tiet",
  },
  {
    id: 2,
    image: hoiNghiSuKien,
    imageAlt:
      "Government Party Committee Congress with hammer and sickle symbol",
    category: "HOẠT ĐỘNG ĐOÀN THỂ",
    title:
      "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học và phát triển nguồn nhân lực Dầu...",
    timestamp: "9/6/2024 9:54:47 AM",
    description:
      "Nhiệt liệt chào mừng Đại hội Đại biểu Đảng bộ Chính phủ lần thứ nhất, nhiệm kỳ 2025 - 2030",
    link: "/tintuc/chi-tiet",
  },
  {
    id: 3,
    image: hoatDongCongDong,
    imageAlt: "Large group of people in conference room holding certificates",
    category: "TIN DẦU KHÍ",
    title:
      "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học và phát triển nguồn nhân lực Dầu...",
    timestamp: "9/6/2024 9:54:47 AM",
    description:
      'Ngày 23-24/9/2025, tại Tòa nhà Ban Điều hành, Vietsovpetro đã tổ chức khóa đào tạo "Kỹ năng xây dựng..."',
    link: "/tintuc/chi-tiet",
  },
];
