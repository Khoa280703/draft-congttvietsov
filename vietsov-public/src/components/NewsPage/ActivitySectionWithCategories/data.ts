import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

export interface ActivityItem {
  id: number;
  category: string;
  title: string;
  timestamp: string;
  description: string;
  image: string;
}

export interface ActivitySectionWithCategoriesProps {
  title?: string;
  viewMoreLink?: string;
  className?: string;
  activities?: ActivityItem[];
}

export const defaultActivityCategories = [
  "Tất cả",
  "Hoạt động sản xuất",
  "Hoạt động kinh doanh",
  "Hoạt động dầu khí",
  "Hoạt động đoàn thể",
  "Tin dầu khí",
];

export interface CategoryConfig {
  title: string;
  url: string;
}

export const categoryConfigs: Record<string, CategoryConfig> = {
  "Tất cả": {
    title: "Hoạt động",
    url: "/tintuc",
  },
  "Hoạt động sản xuất": {
    title: "Hoạt động sản xuất",
    url: "/tintuc/hoat-dong-sx-kd",
  },
  "Hoạt động kinh doanh": {
    title: "Hoạt động kinh doanh",
    url: "/tintuc/hoat-dong-sx-kd",
  },
  "Hoạt động dầu khí": {
    title: "Hoạt động dầu khí",
    url: "/tintuc/tin-dau-khi",
  },
  "Hoạt động đoàn thể": {
    title: "Hoạt động đoàn thể",
    url: "/tintuc/hoat-dong-doan-the",
  },
  "Tin dầu khí": {
    title: "Tin dầu khí",
    url: "/tintuc/tin-dau-khi",
  },
};

export const defaultActivitiesData: ActivityItem[] = [
  {
    id: 1,
    category: "Hoạt động sản xuất",
    title:
      "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học và phát triển nguồn nhân lực Dầu khí",
    timestamp: "9/6/2024 9:54:47 AM",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ nghiên cứu khoa học và phát triển nguồn nhân lực Dầu khí giữa Vietsovpetro và Trường Đại học Dầu khí Việt Nam (PVU).",
    image: daiHoiDaiBieu,
  },
  {
    id: 2,
    category: "Hoạt động đoàn thể",
    title:
      "Xí nghiệp Địa vật lý giếng khoan sẽ chia khó khăn cùng đồng bào chịu ảnh hưởng bão Yagi",
    timestamp: "9/23/2024 2:06:33 PM",
    description:
      "Bão Yagi (bão số 3) với sức tàn phá khủng khiếp, cùng với hoàn lưu của bão đã khiến đồng bằng và vùng núi các tỉnh miền Trung chịu thiệt hại nặng nề về người và của.",
    image: hoiNghiSuKien,
  },
  {
    id: 3,
    category: "Tin dầu khí",
    title:
      "Đoàn cán bộ, chuyên gia Gazprom thăm, tìm hiểu thực tế và trao đổi kinh nghiệm",
    timestamp: "10/2/2024 10:19:04 AM",
    description:
      "Nằm trong chương trình hợp tác thường niên trong lĩnh vực đào tạo của Tập đoàn Dầu khí Việt Nam (Petrovietnam) và Tập đoàn Gazprom (Nga).",
    image: hoiNghiPetro,
  },
  {
    id: 4,
    category: "Hoạt động kinh doanh",
    title:
      "Vietsovpetro mở rộng hợp tác thương mại với các đối tác quốc tế",
    timestamp: "10/5/2024 11:30:00 AM",
    description:
      "Vietsovpetro đã ký kết các thỏa thuận hợp tác mới với nhiều đối tác quốc tế, mở rộng cơ hội kinh doanh và phát triển thị trường.",
    image: daiHoiDaiBieu,
  },
  {
    id: 5,
    category: "Hoạt động dầu khí",
    title:
      "Dự án khai thác mỏ dầu mới đạt cột mốc quan trọng trong quá trình phát triển",
    timestamp: "10/8/2024 2:15:00 PM",
    description:
      "Dự án khai thác mỏ dầu mới của Vietsovpetro đã đạt được những tiến triển đáng kể, góp phần nâng cao năng lực sản xuất và khai thác.",
    image: hoiNghiPetro,
  },
  {
    id: 6,
    category: "Hoạt động sản xuất",
    title:
      "Nâng cao hiệu quả sản xuất thông qua ứng dụng công nghệ mới",
    timestamp: "10/10/2024 9:00:00 AM",
    description:
      "Vietsovpetro tiếp tục đầu tư vào công nghệ mới để nâng cao hiệu quả sản xuất và đảm bảo chất lượng sản phẩm.",
    image: hoiNghiSuKien,
  },
];

