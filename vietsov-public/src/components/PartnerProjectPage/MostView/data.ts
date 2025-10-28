import project1 from "@/assets/dankhoanvietsov.jpg";
import project2 from "@/assets/daihoidaibieuivpvn.jpg";
import project3 from "@/assets/hoinghicongtacpvn.jpg";
import project4 from "@/assets/hoinghipetrovi.jpg";

export interface MostViewedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  views: number;
}

export const mostViewedProjects: MostViewedProject[] = [
  {
    id: 1,
    title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ",
    description:
      "Dự án khai thác dầu khí quy mô lớn với công nghệ tiên tiến và thân thiện môi trường.",
    image: project1,
    category: "Dự án dầu khí",
    date: "15/03/2024",
    views: 1250,
  },
  {
    id: 2,
    title: "Hệ thống năng lượng tái tạo tại Vietsovpetro",
    description:
      "Triển khai hệ thống năng lượng mặt trời và gió tại các cơ sở sản xuất.",
    image: project2,
    category: "Dự án năng lượng",
    date: "20/02/2024",
    views: 980,
  },
  {
    id: 3,
    title: "Chương trình bảo vệ môi trường biển",
    description:
      "Dự án nghiên cứu và triển khai các giải pháp bảo vệ môi trường biển.",
    image: project3,
    category: "Dự án môi trường",
    date: "10/03/2024",
    views: 756,
  },
  {
    id: 4,
    title: "Dự án nâng cấp giàn khoan tự nâng",
    description:
      "Nâng cấp và hiện đại hóa giàn khoan tự nâng, tăng cường khả năng hoạt động.",
    image: project4,
    category: "Dự án dầu khí",
    date: "01/09/2025",
    views: 642,
  },
  {
    id: 5,
    title: "Nghiên cứu công nghệ pin năng lượng mặt trời",
    description:
      "Đầu tư vào nghiên cứu và phát triển các giải pháp pin năng lượng mặt trời.",
    image: project1,
    category: "Dự án năng lượng",
    date: "25/04/2024",
    views: 534,
  },
];
