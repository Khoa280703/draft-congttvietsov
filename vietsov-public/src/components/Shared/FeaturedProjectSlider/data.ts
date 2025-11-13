import type { FeaturedProjectData } from "@/components/HomePage/TypicalProjectsSection/FeaturedProject";
import dankhoanvietsov from "@/assets/dankhoanvietsov.jpg";
import image1996 from "@/assets/1996.jpg";
import daihoidaibieuivpvn from "@/assets/daihoidaibieuivpvn.jpg";
import hoinghicongtacpvn from "@/assets/hoinghicongtacpvn.jpg";
import hoinghipetrovi from "@/assets/hoinghipetrovi.jpg";

export const defaultFeaturedProjects: FeaturedProjectData[] = [
  {
    id: "1",
    date: "06 Tháng 6, 2025",
    title: "Dự án điều hành khai thác mỏ",
    projectType: "DỰ ÁN KHAI THÁC",
    location: "VŨNG TÀU, VIỆT NAM",
    description:
      "Dự án điều hành khai thác mỏ được Vietsovpetro triển khai từ năm 1995, đánh dấu một bước ngoặt quan trọng trong lịch sử phát triển của công ty. Với quy mô lớn và tầm quan trọng chiến lược, dự án này đã góp phần nâng cao năng lực sản xuất và khai thác dầu khí của Vietsovpetro. Thông qua việc tối ưu hóa quy trình vận hành và ứng dụng công nghệ tiên tiến, dự án đã mang lại hiệu quả kinh tế cao và khẳng định năng lực kỹ thuật, quản lý của Vietsovpetro trong lĩnh vực khai thác dầu khí.",
    image: dankhoanvietsov,
    imageAlt: "Dự án điều hành khai thác mỏ",
    link: "#",
  },
  {
    id: "2",
    date: "06 Tháng 6, 2025",
    title: "Vietsovpetro đã tổ chức thành công chương trình tham quan dành cho các đối tác",
    projectType: "SỰ KIỆN",
    location: "VŨNG TÀU, VIỆT NAM",
    description:
      "Chương trình tham quan được tổ chức nhằm giới thiệu về hoạt động sản xuất và phát triển của công ty. Đây là cơ hội để các đối tác hiểu rõ hơn về quy trình làm việc, công nghệ và năng lực của Vietsovpetro trong lĩnh vực khai thác dầu khí.",
    image: image1996,
    imageAlt: "Vietsovpetro đã tổ chức thành công chương trình tham quan",
    link: "#",
  },
  {
    id: "3",
    date: "06 Tháng 6, 2025",
    title: "Tổng giám đốc Vũ Mai Khanh phát biểu trong sự kiện Lễ mừng công 250 triệu tấn dầu",
    projectType: "SỰ KIỆN",
    location: "VŨNG TÀU, VIỆT NAM",
    description:
      "Sự kiện quan trọng đánh dấu cột mốc 250 triệu tấn dầu được khai thác. Đây là thành tựu lớn của Vietsovpetro, thể hiện năng lực và cam kết của công ty trong việc phát triển ngành dầu khí Việt Nam.",
    image: daihoidaibieuivpvn,
    imageAlt: "Tổng giám đốc Vũ Mai Khanh phát biểu trong sự kiện",
    link: "#",
  },
  {
    id: "4",
    date: "06 Tháng 6, 2025",
    title:
      'Trải qua 95 năm xây dựng và phát triển, ngành Tuyên giáo luôn giữ vai trò "đi trước mở đường, đi cùng phát triển"',
    projectType: "VĂN HÓA DOANH NGHIỆP",
    location: "VIỆT NAM",
    description:
      "Ngành Tuyên giáo đã có những đóng góp quan trọng trong quá trình phát triển của đất nước. Với vai trò đi trước mở đường, ngành đã tạo nền tảng vững chắc cho sự phát triển bền vững của các doanh nghiệp và tổ chức.",
    image: hoinghicongtacpvn,
    imageAlt: "Trải qua 95 năm xây dựng và phát triển",
    link: "#",
  },
  {
    id: "5",
    date: "06 Tháng 6, 2025",
    title: "Chủ tịch nước Lê Đức Anh thăm quan Cảng Vietsovpetro năm 1996",
    projectType: "SỰ KIỆN",
    location: "VŨNG TÀU, VIỆT NAM",
    description:
      "Chuyến thăm quan của Chủ tịch nước đánh dấu tầm quan trọng của ngành dầu khí Việt Nam. Sự kiện này thể hiện sự quan tâm và ủng hộ của lãnh đạo đất nước đối với sự phát triển của Vietsovpetro và ngành dầu khí nói chung.",
    image: hoinghipetrovi,
    imageAlt: "Chủ tịch nước Lê Đức Anh thăm quan Cảng Vietsovpetro năm 1996",
    link: "#",
  },
];

