import type { FeaturedProjectData } from "./FeaturedProject";
import type { Project } from "./RelatedProjects";
import dankhoanvietsov from "@/assets/dankhoanvietsov.jpg";

export const defaultFeaturedProject: FeaturedProjectData = {
  id: "1",
  date: "15 Tháng 3, 2024",
  title: "Dự án Khai thác Dầu khí tại Lô 15-1",
  projectType: "DỰ ÁN KHAI THÁC",
  location: "VŨNG TÀU, VIỆT NAM",
  description:
    "Dự án khai thác dầu khí tại Lô 15-1 là một trong những dự án trọng điểm của Vietsovpetro, đóng góp quan trọng vào sản lượng khai thác dầu khí của Việt Nam. Dự án được triển khai với công nghệ hiện đại, đảm bảo an toàn và hiệu quả cao trong quá trình khai thác. Với việc ứng dụng các giải pháp kỹ thuật tiên tiến và quy trình vận hành chuyên nghiệp, dự án không chỉ đạt được các chỉ tiêu về sản lượng mà còn tuân thủ nghiêm ngặt các tiêu chuẩn về bảo vệ môi trường và an toàn lao động. Đây là minh chứng cho năng lực và kinh nghiệm của Vietsovpetro trong lĩnh vực khai thác dầu khí ngoài khơi.",
  image: dankhoanvietsov,
  imageAlt: "Dự án Khai thác Dầu khí tại Lô 15-1",
  link: "#",
};

export const defaultRelatedProjects: Project[] = [
  {
    id: "1",
    date: "10 Tháng 2, 2024",
    title:
      "Dự án Phát triển Mỏ Rồng - Giai đoạn 2: Mở rộng công suất khai thác và ứng dụng công nghệ tiên tiến",
    link: "#",
  },
  {
    id: "2",
    date: "28 Tháng 1, 2024",
    title:
      "Dự án Nâng cấp Hệ thống Xử lý Dầu khí: Tối ưu hóa quy trình và nâng cao hiệu quả sản xuất",
    link: "#",
  },
  {
    id: "3",
    date: "15 Tháng 12, 2023",
    title:
      "Dự án Thăm dò và Khai thác tại Lô 16-1: Khám phá tiềm năng và phát triển nguồn tài nguyên mới",
    link: "#",
  },
];

