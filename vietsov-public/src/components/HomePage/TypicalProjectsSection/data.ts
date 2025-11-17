import type { FeaturedProjectData } from "./FeaturedProject";
import type { Project } from "./RelatedProjects";
import dankhoanvietsov from "@/assets/dankhoanvietsov.jpg";

export interface CategoryData {
  id: string;
  name: string;
  featuredProject: FeaturedProjectData;
  relatedProjects: Project[];
}

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
  link: "doitac-duan/du-an/chi-tiet",
};

export const defaultRelatedProjects: Project[] = [
  {
    id: "1",
    date: "10 Tháng 2, 2024",
    title:
      "Dự án Phát triển Mỏ Rồng - Giai đoạn 2: Mở rộng công suất khai thác và ứng dụng công nghệ tiên tiến",
    link: "doitac-duan/du-an/chi-tiet",
  },
  {
    id: "2",
    date: "28 Tháng 1, 2024",
    title:
      "Dự án Nâng cấp Hệ thống Xử lý Dầu khí: Tối ưu hóa quy trình và nâng cao hiệu quả sản xuất",
    link: "doitac-duan/du-an/chi-tiet",
  },
  {
    id: "3",
    date: "15 Tháng 12, 2023",
    title:
      "Dự án Thăm dò và Khai thác tại Lô 16-1: Khám phá tiềm năng và phát triển nguồn tài nguyên mới",
    link: "doitac-duan/du-an/chi-tiet",
  },
];

// Categories data
export const categories: CategoryData[] = [
  {
    id: "khai-thac",
    name: "Khai thác",
    featuredProject: defaultFeaturedProject,
    relatedProjects: defaultRelatedProjects,
  },
  {
    id: "tham-do",
    name: "Thăm dò",
    featuredProject: {
      ...defaultFeaturedProject,
      id: "2",
      title: "Dự án Thăm dò Dầu khí tại Lô 16-1",
      projectType: "DỰ ÁN THĂM DÒ",
      description:
        "Dự án thăm dò dầu khí tại Lô 16-1 là một trong những dự án quan trọng của Vietsovpetro trong việc mở rộng nguồn tài nguyên dầu khí. Dự án được thực hiện với các công nghệ thăm dò tiên tiến, đảm bảo độ chính xác cao trong việc đánh giá tiềm năng và trữ lượng dầu khí. Với đội ngũ chuyên gia giàu kinh nghiệm và thiết bị hiện đại, dự án đã đạt được những kết quả tích cực trong việc phát hiện và đánh giá các mỏ dầu khí mới.",
    },
    relatedProjects: [
      {
        id: "4",
        date: "20 Tháng 3, 2024",
        title:
          "Dự án Thăm dò Địa chất tại Lô 16-1: Phân tích và đánh giá tiềm năng",
        link: "doitac-duan/du-an/chi-tiet",
      },
      {
        id: "5",
        date: "12 Tháng 2, 2024",
        title:
          "Dự án Khảo sát Địa chấn: Ứng dụng công nghệ tiên tiến trong thăm dò",
        link: "doitac-duan/du-an/chi-tiet",
      },
      {
        id: "6",
        date: "5 Tháng 1, 2024",
        title:
          "Dự án Đánh giá Trữ lượng: Phân tích và dự báo tiềm năng khai thác",
        link: "doitac-duan/du-an/chi-tiet",
      },
    ],
  },
  {
    id: "van-hanh",
    name: "Vận hành",
    featuredProject: {
      ...defaultFeaturedProject,
      id: "3",
      title: "Dự án Vận hành và Bảo trì Hệ thống Dầu khí",
      projectType: "DỰ ÁN VẬN HÀNH",
      description:
        "Dự án vận hành và bảo trì hệ thống dầu khí là một phần quan trọng trong hoạt động của Vietsovpetro. Dự án đảm bảo hệ thống hoạt động ổn định, an toàn và hiệu quả. Với quy trình bảo trì định kỳ và hệ thống giám sát hiện đại, dự án giúp tối ưu hóa hiệu suất vận hành và kéo dài tuổi thọ của các thiết bị. Đội ngũ kỹ thuật viên chuyên nghiệp luôn sẵn sàng xử lý các sự cố và đảm bảo hoạt động liên tục của hệ thống.",
    },
    relatedProjects: [
      {
        id: "7",
        date: "25 Tháng 3, 2024",
        title:
          "Dự án Bảo trì Định kỳ: Nâng cao hiệu quả vận hành hệ thống",
        link: "doitac-duan/du-an/chi-tiet",
      },
      {
        id: "8",
        date: "18 Tháng 2, 2024",
        title:
          "Dự án Nâng cấp Hệ thống Giám sát: Ứng dụng công nghệ IoT",
        link: "doitac-duan/du-an/chi-tiet",
      },
      {
        id: "9",
        date: "10 Tháng 1, 2024",
        title:
          "Dự án Tối ưu hóa Quy trình: Cải thiện hiệu suất vận hành",
        link: "doitac-duan/du-an/chi-tiet",
      },
    ],
  },
];
