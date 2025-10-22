import project1 from "@/assets/dankhoanvietsov.jpg";
import project2 from "@/assets/hoinghipetrovi.jpg";
import project3 from "@/assets/hoinghicongtacpvn.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  status: string;
  image: string;
}

export const featuredProjectData: Project[] = [
  {
    id: 1,
    title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ",
    description:
      "Dự án khai thác dầu khí quy mô lớn tại mỏ Bạch Hổ với công nghệ tiên tiến và thân thiện môi trường. Dự án này đóng góp quan trọng vào việc đảm bảo an ninh năng lượng quốc gia và phát triển bền vững.",
    category: "Dự án dầu khí",
    date: "2024-01-15",
    status: "Đang thực hiện",
    image: project1,
  },
  {
    id: 2,
    title: "Hệ thống năng lượng tái tạo tại Vietsovpetro",
    description:
      "Triển khai hệ thống năng lượng mặt trời và gió tại các cơ sở sản xuất của Vietsovpetro, góp phần giảm thiểu tác động môi trường và tiết kiệm chi phí năng lượng.",
    category: "Dự án năng lượng",
    date: "2024-02-20",
    status: "Hoàn thành",
    image: project2,
  },
  {
    id: 3,
    title: "Chương trình bảo vệ môi trường biển",
    description:
      "Dự án nghiên cứu và triển khai các giải pháp bảo vệ môi trường biển, đảm bảo phát triển bền vững trong hoạt động khai thác dầu khí ngoài khơi.",
    category: "Dự án môi trường",
    date: "2024-03-10",
    status: "Dự kiến",
    image: project3,
  },
];

export const projectData: Project[] = [
  {
    id: 4,
    title: "Nâng cấp hệ thống xử lý dầu thô",
    description:
      "Cải tiến và nâng cấp hệ thống xử lý dầu thô tại nhà máy lọc dầu Dung Quất với công nghệ hiện đại.",
    category: "Dự án dầu khí",
    date: "2024-01-05",
    status: "Hoàn thành",
    image: project1,
  },
  {
    id: 5,
    title: "Dự án khí hóa lỏng LNG",
    description:
      "Xây dựng và vận hành nhà máy khí hóa lỏng LNG với công suất 6 triệu tấn/năm.",
    category: "Dự án năng lượng",
    date: "2024-02-15",
    status: "Đang thực hiện",
    image: project2,
  },
  {
    id: 6,
    title: "Hệ thống giám sát môi trường tự động",
    description:
      "Triển khai hệ thống giám sát môi trường tự động tại các mỏ dầu khí ngoài khơi.",
    category: "Dự án môi trường",
    date: "2024-03-01",
    status: "Đang thực hiện",
    image: project3,
  },
  {
    id: 7,
    title: "Dự án khai thác khí đá phiến",
    description:
      "Nghiên cứu và triển khai công nghệ khai thác khí đá phiến tại các khu vực tiềm năng.",
    category: "Dự án dầu khí",
    date: "2024-01-20",
    status: "Dự kiến",
    image: project1,
  },
  {
    id: 8,
    title: "Nhà máy điện gió ngoài khơi",
    description:
      "Xây dựng nhà máy điện gió ngoài khơi với công suất 500MW tại vùng biển miền Trung.",
    category: "Dự án năng lượng",
    date: "2024-02-28",
    status: "Dự kiến",
    image: project2,
  },
  {
    id: 9,
    title: "Chương trình tái chế chất thải công nghiệp",
    description:
      "Triển khai chương trình tái chế và xử lý chất thải công nghiệp tại các cơ sở sản xuất.",
    category: "Dự án môi trường",
    date: "2024-03-15",
    status: "Hoàn thành",
    image: project3,
  },
  {
    id: 10,
    title: "Dự án đường ống dẫn khí Bắc-Nam",
    description:
      "Xây dựng đường ống dẫn khí dài 1,200km từ Bắc vào Nam để đảm bảo cung cấp khí đốt.",
    category: "Dự án dầu khí",
    date: "2024-01-10",
    status: "Đang thực hiện",
    image: project1,
  },
  {
    id: 11,
    title: "Hệ thống lưu trữ năng lượng",
    description:
      "Triển khai hệ thống lưu trữ năng lượng bằng pin lithium-ion tại các trạm biến áp.",
    category: "Dự án năng lượng",
    date: "2024-02-25",
    status: "Hoàn thành",
    image: project2,
  },
  {
    id: 12,
    title: "Dự án trồng rừng ngập mặn",
    description:
      "Trồng và bảo vệ rừng ngập mặn tại các khu vực ven biển để bảo vệ môi trường và chống xói mòn.",
    category: "Dự án môi trường",
    date: "2024-03-05",
    status: "Đang thực hiện",
    image: project3,
  },
  {
    id: 13,
    title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ",
    description:
      "Dự án khai thác dầu khí quy mô lớn tại mỏ Bạch Hổ với công nghệ tiên tiến và thân thiện môi trường. Dự án này đóng góp quan trọng vào việc đảm bảo an ninh năng lượng quốc gia và phát triển bền vững.",
    category: "Dự án dầu khí",
    date: "2024-01-15",
    status: "Đang thực hiện",
    image: project1,
  },
  {
    id: 14,
    title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ",
    description:
      "Dự án khai thác dầu khí quy mô lớn tại mỏ Bạch Hổ với công nghệ tiên tiến và thân thiện môi trường. Dự án này đóng góp quan trọng vào việc đảm bảo an ninh năng lượng quốc gia và phát triển bền vững.",
    category: "Dự án dầu khí",
    date: "2024-01-15",
    status: "Đang thực hiện",
    image: project1,
  },
  {
    id: 15,
    title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ",
    description:
      "Dự án khai thác dầu khí quy mô lớn tại mỏ Bạch Hổ với công nghệ tiên tiến và thân thiện môi trường. Dự án này đóng góp quan trọng vào việc đảm bảo an ninh năng lượng quốc gia và phát triển bền vững.",
    category: "Dự án dầu khí",
    date: "2024-01-15",
    status: "Đang thực hiện",
    image: project1,
  },
  {
    id: 16,
    title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ",
    description:
      "Dự án khai thác dầu khí quy mô lớn tại mỏ Bạch Hổ với công nghệ tiên tiến và thân thiện môi trường. Dự án này đóng góp quan trọng vào việc đảm bảo an ninh năng lượng quốc gia và phát triển bền vững.",
    category: "Dự án dầu khí",
    date: "2024-01-15",
    status: "Đang thực hiện",
    image: project1,
  },
  {
    id: 17,
    title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ",
    description:
      "Dự án khai thác dầu khí quy mô lớn tại mỏ Bạch Hổ với công nghệ tiên tiến và thân thiện môi trường. Dự án này đóng góp quan trọng vào việc đảm bảo an ninh năng lượng quốc gia và phát triển bền vững.",
    category: "Dự án dầu khí",
    date: "2024-01-15",
    status: "Đang thực hiện",
    image: project1,
  },
  {
    id: 18,
    title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ",
    description:
      "Dự án khai thác dầu khí quy mô lớn tại mỏ Bạch Hổ với công nghệ tiên tiến và thân thiện môi trường. Dự án này đóng góp quan trọng vào việc đảm bảo an ninh năng lượng quốc gia và phát triển bền vững.",
    category: "Dự án dầu khí",
    date: "2024-01-15",
    status: "Đang thực hiện",
    image: project1,
  },
  {
    id: 19,
    title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ",
    description:
      "Dự án khai thác dầu khí quy mô lớn tại mỏ Bạch Hổ với công nghệ tiên tiến và thân thiện môi trường. Dự án này đóng góp quan trọng vào việc đảm bảo an ninh năng lượng quốc gia và phát triển bền vững.",
    category: "Dự án dầu khí",
    date: "2024-01-15",
    status: "Đang thực hiện",
    image: project1,
  },
];
