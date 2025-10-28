import project1 from "@/assets/dankhoanvietsov.jpg";
import project2 from "@/assets/daihoidaibieuivpvn.jpg";
import project3 from "@/assets/hoinghicongtacpvn.jpg";

export interface RelevantProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  status: string;
}

export const relevantProjectsData: RelevantProject[] = [
  {
    id: 1,
    title: "Dự án khai thác dầu khí tại mỏ Rồng",
    description:
      "Dự án khai thác dầu khí quy mô lớn với công nghệ tiên tiến, góp phần đảm bảo an ninh năng lượng quốc gia.",
    image: project1,
    category: "Dự án dầu khí",
    date: "15/03/2024",
    status: "Đang thực hiện",
  },
  {
    id: 2,
    title: "Hệ thống năng lượng tái tạo tại Vietsovpetro",
    description:
      "Triển khai hệ thống năng lượng mặt trời và gió tại các cơ sở sản xuất, góp phần giảm thiểu tác động môi trường.",
    image: project2,
    category: "Dự án năng lượng",
    date: "20/02/2024",
    status: "Hoàn thành",
  },
  {
    id: 3,
    title: "Chương trình bảo vệ môi trường biển",
    description:
      "Dự án nghiên cứu và triển khai các giải pháp bảo vệ môi trường biển, đảm bảo phát triển bền vững.",
    image: project3,
    category: "Dự án môi trường",
    date: "10/03/2024",
    status: "Dự kiến",
  },
];
