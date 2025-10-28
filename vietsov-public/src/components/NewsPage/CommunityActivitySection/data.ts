import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

export interface CommunityActivityItem {
  id: number;
  category: string;
  title: string;
  timestamp: string;
  description: string;
  image: string;
}

export interface CommunityActivitySectionProps {
  className?: string;
}

export const defaultCommunityActivityData: CommunityActivityItem[] = [
  {
    id: 1,
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title:
      "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học và phát triển nguồn nhân lực Dầu khí",
    timestamp: "9/6/2024 9:54:47 AM",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ nghiên cứu khoa học và phát triển nguồn nhân lực Dầu khí giữa Vietsovpetro và Trường Đại học Dầu khí Việt Nam (PVU).",
    image: daiHoiDaiBieu,
  },
  {
    id: 2,
    category: "HOẠT ĐỘNG ĐOÀN THỂ",
    title:
      "Xí nghiệp Địa vật lý giếng khoan sẽ chia khó khăn cùng đồng bào chịu ảnh hưởng bão Yagi",
    timestamp: "9/23/2024 2:06:33 PM",
    description:
      "Bão Yagi (bão số 3) với sức tàn phá khủng khiếp, cùng với hoàn lưu của bão đã khiến đồng bằng và vùng núi các tỉnh miền Trung chịu thiệt hại nặng nề về người và của.",
    image: hoiNghiSuKien,
  },
  {
    id: 3,
    category: "TIN DẦU KHÍ",
    title:
      "Đoàn cán bộ, chuyên gia Gazprom thăm, tìm hiểu thực tế và trao đổi kinh nghiệm",
    timestamp: "10/2/2024 10:19:04 AM",
    description:
      "Nằm trong chương trình hợp tác thường niên trong lĩnh vực đào tạo của Tập đoàn Dầu khí Việt Nam (Petrovietnam) và Tập đoàn Gazprom (Nga).",
    image: hoiNghiPetro,
  },
];
