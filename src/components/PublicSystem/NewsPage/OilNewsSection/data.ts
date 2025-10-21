import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import chuyenTham1996 from "@/assets/1996.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

export interface MainArticle {
  category: string;
  title: string;
  timestamp: string;
  description: string;
  image: string;
}

export interface SideArticle {
  id: number;
  title: string;
  timestamp: string;
  image: string;
}

export interface OilNewsSectionProps {
  className?: string;
}

export const defaultMainArticle: MainArticle = {
  category: "TIN DẦU KHÍ",
  title:
    "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học và phát triển nguồn nhân lực Dầu khí",
  timestamp: "9/6/2024 9:54:47 AM",
  description:
    "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ học bổng nghiên cứu khoa học của Vietsovpetro và Trường Đại học Dầu khí Việt Nam (PVU).",
  image: danKhoanVietsov,
};

export const defaultSideArticles: SideArticle[] = [
  {
    id: 1,
    title:
      "Xí nghiệp Địa vật lý giếng khoan sẽ chia khó khăn cùng đồng bào chịu ảnh hưởng bão Yagi",
    timestamp: "11:50 03/10/2024",
    image: chuyenTham1996,
  },
  {
    id: 2,
    title: "Công đoàn Vietsovpetro khai mạc giải Bóng chuyền năm 2024",
    timestamp: "11:50 03/10/2024",
    image: daiHoiDaiBieu,
  },
  {
    id: 3,
    title:
      "Đoàn thanh niên và Ban nữ công Trung tâm CNTT&LL tổ chức chương trình an sinh xã hội",
    timestamp: "11:50 03/10/2024",
    image: hoiNghiSuKien,
  },
  {
    id: 4,
    title:
      "Các sự kiện nổi bật của Petrovietnam trong tuần từ ngày 6/10 đến 13/10/2024",
    timestamp: "11:50 03/10/2024",
    image: hoiNghiPetro,
  },
];
