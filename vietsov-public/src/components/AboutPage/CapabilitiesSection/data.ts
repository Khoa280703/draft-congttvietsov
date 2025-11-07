import dankhoanvietsov from "@/assets/dankhoanvietsov.jpg";
import bannerDankhoan from "@/assets/banner-dankhoan.jpg";
import gianKhoan from "@/assets/background-slider/gian-khoan.jpg";
import danKhoan from "@/assets/background-slider/dan-khoan.jpg";
import khoanSuaGieng from "@/assets/Khoan _sua_gieng.png";

export interface Capability {
  id: number;
  description: string;
}

export interface CapabilityCategory {
  id: string;
  title: string;
  images: string[];
  capabilities: Capability[];
}

export interface CapabilitiesSectionProps {
  categories?: CapabilityCategory[];
  className?: string;
}

export const defaultCategories: CapabilityCategory[] = [
  {
    id: "tham-do",
    title: "Thăm dò Dầu khí",
    images: [dankhoanvietsov, bannerDankhoan, danKhoan],
    capabilities: [
      {
        id: 1,
        description:
          "Thiết kế – lập dự toán các giếng khoan tìm kiếm, thăm dò cho công ty VRJ, PIDC, cho giàn nhẹ do Petronas quản lý",
      },
      {
        id: 2,
        description: "Thăm dò địa chất và địa vật lý",
      },
      {
        id: 3,
        description: "Khoan thăm dò và khai thác",
      },
      {
        id: 4,
        description: "Xử lý và vận chuyển dầu khí",
      },
      {
        id: 5,
        description: "Quản lý và vận hành giàn khoan",
      },
    ],
  },
  {
    id: "tim-kiem",
    title: "Tìm kiếm Dầu khí",
    images: [bannerDankhoan, gianKhoan, danKhoan],
    capabilities: [
      {
        id: 1,
        description: "Khảo sát địa chấn 3D",
      },
      {
        id: 2,
        description: "Phân tích địa hóa",
      },
      {
        id: 3,
        description: "Mô hình hóa địa chất",
      },
      {
        id: 4,
        description: "Đánh giá tiềm năng dầu khí",
      },
      {
        id: 5,
        description: "Phát hiện và phát triển mỏ mới",
      },
    ],
  },
  {
    id: "khai-thac",
    title: "Khai thác Dầu khí",
    images: [gianKhoan, khoanSuaGieng, dankhoanvietsov],
    capabilities: [
      {
        id: 1,
        description:
          "Lập dự án đầu tư xây dựng công trình cải hoán By - Pass đường ống Rạng Đông – Bạch Hổ.",
      },
      {
        id: 2,
        description: "Sửa chữa và vận hành mỏ.",
      },
      {
        id: 3,
        description:
          "Cung cấp dịch vụ vận hành mỏ cho các Công ty Hoàn Vũ JOC, VRJ, Hoàng Long JOC, Thăng Long JOC, Petronas và công trình thu gom khí của PV Gas.",
      },
      {
        id: 4,
        description: "Xây dựng và lắp đặt các công trình dầu khí biển",
      },
      {
        id: 5,
        description: "Khoan và sửa giếng dầu khí",
      },
    ],
  },
  {
    id: "nghien-cuu",
    title: "Nghiên cứu Khoa học",
    images: [danKhoan, dankhoanvietsov, gianKhoan],
    capabilities: [
      {
        id: 1,
        description:
          "Nghiên cứu và phát triển công nghệ khai thác dầu khí tiên tiến",
      },
      {
        id: 2,
        description: "Ứng dụng công nghệ mới trong thăm dò và khai thác",
      },
      {
        id: 3,
        description:
          "Hợp tác nghiên cứu với các trường đại học và viện nghiên cứu",
      },
      {
        id: 4,
        description: "Phát triển giải pháp bảo vệ môi trường trong khai thác",
      },
    ],
  },
];
