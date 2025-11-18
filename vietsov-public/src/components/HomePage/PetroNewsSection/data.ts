import vietNga from "@/assets/homepage/viet-nga.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";

export interface PetroNewsArticle {
  image: string;
  imageAlt: string;
  category?: string;
  title: string;
  timestamp?: string;
  description: string;
  link?: string;
}

export const defaultPetroMainArticle: PetroNewsArticle = {
  image: danKhoanVietsov,
  imageAlt: "Vietsovpetro đạt mốc sản lượng khai thác mới",
  category: "TIN TỨC",
  title: "Vietsovpetro đạt mốc sản lượng khai thác mới",
  timestamp: "20 Tháng 4, 2024",
  description:
    "Thành tựu sản lượng mới của Vietsovpetro là minh chứng cho chiến lược chuyển đổi số và tối ưu vận hành giàn khoan trong năm 2024, góp phần giữ vững vị thế thương hiệu dầu khí quốc gia.",
  link: "/tintuc/chi-tiet",
};

export const defaultPetroSideArticles: PetroNewsArticle[] = [
  {
    image: vietNga,
    imageAlt: "Hội nghị tổng kết hoạt động sản xuất kinh doanh quý I",
    category: "HOẠT ĐỘNG SXKD",
    title: "Hội nghị tổng kết hoạt động sản xuất kinh doanh quý I/2024",
    timestamp: "18 Tháng 4, 2024",
    description:
      "Những định hướng then chốt giúp Vietsovpetro duy trì đà tăng trưởng trong bối cảnh thị trường biến động mạnh.",
    link: "/tintuc/chi-tiet",
  },
  {
    image: hoiNghiSuKien,
    imageAlt: "Ký kết hợp tác chiến lược",
    category: "CHIẾN LƯỢC",
    title: "Ký kết hợp tác chiến lược cùng đối tác quốc tế về công nghệ khoan",
    timestamp: "12 Tháng 4, 2024",
    description:
      "Thỏa thuận chuyển giao công nghệ nâng cao hiệu suất khai thác và giảm phát thải trong các mỏ dầu chủ lực.",
    link: "/tintuc/chi-tiet",
  },
  {
    image: hoiNghiPetro,
    imageAlt: "Đào tạo kỹ sư trẻ",
    category: "NHÂN SỰ",
    title: "Chương trình đào tạo kỹ sư trẻ – Đầu tư dài hạn cho lực lượng kế thừa",
    timestamp: "05 Tháng 4, 2024",
    description:
      "Lộ trình đào tạo mới giúp kỹ sư trẻ nhanh chóng làm chủ dây chuyền sản xuất hiện đại tại các mỏ biển.",
    link: "/tintuc/chi-tiet",
  },
];
