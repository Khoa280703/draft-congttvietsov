import project1 from "@/assets/dankhoanvietsov.jpg";
import project2 from "@/assets/daihoidaibieuivpvn.jpg";
import project3 from "@/assets/hoinghicongtacpvn.jpg";
import project4 from "@/assets/hoinghipetrovi.jpg";

export interface OtherProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  status: string;
}

export const otherProjectsData: OtherProject[] = [
  {
    id: 1,
    title: "Dự án nâng cấp giàn khoan tự nâng",
    description:
      "Nâng cấp và hiện đại hóa giàn khoan tự nâng, tăng cường khả năng hoạt động và an toàn trong khai thác dầu khí.",
    image: project1,
    category: "Dự án dầu khí",
    date: "01/09/2025",
    status: "Dự kiến",
  },
  {
    id: 2,
    title: "Nghiên cứu và phát triển công nghệ pin năng lượng mặt trời",
    description:
      "Đầu tư vào nghiên cứu và phát triển các giải pháp pin năng lượng mặt trời hiệu suất cao, hướng tới tương lai năng lượng xanh.",
    image: project2,
    category: "Dự án năng lượng",
    date: "25/04/2024",
    status: "Đang thực hiện",
  },
  {
    id: 3,
    title: "Chương trình trồng rừng ngập mặn ven biển",
    description:
      "Tham gia vào các hoạt động bảo vệ môi trường, phục hồi hệ sinh thái rừng ngập mặn, chống biến đổi khí hậu.",
    image: project3,
    category: "Dự án môi trường",
    date: "12/06/2023",
    status: "Hoàn thành",
  },
  {
    id: 4,
    title: "Dự án thăm dò dầu khí Lô 05-1A",
    description:
      "Thực hiện các hoạt động thăm dò địa chất tại Lô 05-1A, đánh giá tiềm năng dầu khí và mở rộng trữ lượng.",
    image: project4,
    category: "Dự án dầu khí",
    date: "05/01/2025",
    status: "Đang thực hiện",
  },
];
