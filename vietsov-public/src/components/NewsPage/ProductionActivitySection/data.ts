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
  category: string;
  timestamp: string;
  description?: string;
  image: string;
}

export interface ProductionActivitySectionProps {
  className?: string;
}

export const defaultMainArticle: MainArticle = {
  category: "HOẠT ĐỘNG SẢN XUẤT",
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
    title: "Công đoàn XN Cơ điện tổ chức giải bóng chuyền năm 2024",
    category: "HOẠT ĐỘNG ĐOÀN THỂ",
    timestamp: "11:50 03/10/2024",
    description:
      "Giải đấu bóng chuyền năm 2024 đã được tổ chức thành công với sự tham gia của nhiều đội bóng trong công ty, tạo không khí thi đua sôi nổi và tăng cường tình đoàn kết.",
    image: chuyenTham1996,
  },
  {
    id: 2,
    title: "Công đoàn Vietsovpetro khai mạc giải Bóng chuyền năm 2024",
    category: "HOẠT ĐỘNG ĐOÀN THỂ",
    timestamp: "11:50 03/10/2024",
    description:
      "Lễ khai mạc giải Bóng chuyền năm 2024 được tổ chức với sự tham gia đông đảo của các vận động viên và cổ động viên, đánh dấu một mùa giải đầy hứa hẹn.",
    image: daiHoiDaiBieu,
  },
  {
    id: 3,
    title:
      'Đoàn thanh niên và Ban nữ công Trung tâm CNTT&LL tổ chức chương trình an sinh xã hội "Chia sẻ yêu thương – Tiếp bước đến trường"',
    category: "HOẠT ĐỘNG ĐOÀN THỂ",
    timestamp: "11:50 03/10/2024",
    description:
      "Chương trình đã trao tặng học bổng và dụng cụ học tập cho các em học sinh có hoàn cảnh khó khăn, thể hiện tinh thần tương thân tương ái của cán bộ nhân viên.",
    image: hoiNghiSuKien,
  },
  {
    id: 4,
    title:
      "Các sự kiện nổi bật của Petrovietnam trong tuần từ ngày 6/10 đến 13/10/2024",
    category: "TIN DẦU KHÍ",
    timestamp: "11:50 03/10/2024",
    description:
      "Tuần qua có nhiều sự kiện quan trọng diễn ra trong ngành dầu khí, bao gồm các cuộc họp, hội thảo và hoạt động hợp tác quốc tế.",
    image: hoiNghiPetro,
  },
];
