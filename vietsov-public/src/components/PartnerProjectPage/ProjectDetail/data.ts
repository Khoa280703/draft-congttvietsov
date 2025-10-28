// Import project images
import project1 from "@/assets/dankhoanvietsov.jpg";
import project2 from "@/assets/hoinghipetrovi.jpg";
import project3 from "@/assets/hoinghicongtacpvn.jpg";
import project4 from "@/assets/daihoidaibieuivpvn.jpg";

export interface ProjectDetailData {
  title: string;
  category: string;
  status: string;
  startDate: string;
  endDate: string;
  budget: string;
  location: string;
  description: string;
  paragraphs: string[];
  imageSectionTitle: string;
}

export interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  className: string;
}

export const projectDetailData: ProjectDetailData = {
  title: "Dự án khai thác dầu khí tại mỏ Bạch Hổ - Giai đoạn 2",
  category: "Dự án dầu khí",
  status: "Đang thực hiện",
  startDate: "01/01/2024",
  endDate: "31/12/2025",
  budget: "500 triệu USD",
  location: "Mỏ Bạch Hổ, Vũng Tàu",
  description:
    "Dự án khai thác dầu khí quy mô lớn tại mỏ Bạch Hổ với công nghệ tiên tiến và thân thiện môi trường. Dự án này đóng góp quan trọng vào việc đảm bảo an ninh năng lượng quốc gia và phát triển bền vững.",
  paragraphs: [
    "Dự án khai thác dầu khí tại mỏ Bạch Hổ - Giai đoạn 2 là một trong những dự án trọng điểm của Vietsovpetro, được triển khai với mục tiêu tăng cường sản lượng khai thác và đảm bảo an ninh năng lượng quốc gia.",
    "Dự án sử dụng công nghệ khai thác tiên tiến nhất hiện nay, bao gồm hệ thống khoan ngang định hướng, công nghệ bơm ép nước và khí, cùng với các giải pháp tự động hóa hiện đại. Điều này giúp tối ưu hóa hiệu quả khai thác và giảm thiểu tác động đến môi trường.",
    "Một trong những điểm nổi bật của dự án là việc áp dụng các giải pháp bảo vệ môi trường tiên tiến. Chúng tôi đã đầu tư vào hệ thống xử lý nước thải công nghiệp, hệ thống giám sát môi trường liên tục, và các biện pháp phòng ngừa rủi ro môi trường.",
    "Dự án cũng tạo ra nhiều cơ hội việc làm cho người dân địa phương, với hơn 500 lao động trực tiếp và hàng nghìn lao động gián tiếp. Chúng tôi cam kết đào tạo và phát triển nguồn nhân lực địa phương, góp phần nâng cao chất lượng cuộc sống của cộng đồng.",
  ],
  imageSectionTitle: "Hình ảnh dự án:",
};

export const imageData: ProjectImage[] = [
  {
    id: 1,
    src: project1,
    alt: "Giàn khoan dầu khí tại mỏ Bạch Hổ",
    className: "col-span-1 row-span-2",
  },
  {
    id: 2,
    src: project2,
    alt: "Hệ thống xử lý dầu khí",
    className: "col-span-1 row-span-2",
  },
  {
    id: 3,
    src: project3,
    alt: "Công nhân đang làm việc trên giàn khoan",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: project4,
    alt: "Hệ thống an toàn và bảo vệ môi trường",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: project1,
    alt: "Công nghệ khoan ngang định hướng",
    className: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: project2,
    alt: "Hệ thống giám sát môi trường",
    className: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: project3,
    alt: "Đào tạo nhân viên địa phương",
    className: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: project4,
    alt: "Hệ thống bơm ép nước và khí",
    className: "col-span-1 row-span-2",
  },
  {
    id: 9,
    src: project1,
    alt: "Tàu hỗ trợ và vận chuyển",
    className: "col-span-1 row-span-2",
  },
  {
    id: 10,
    src: project2,
    alt: "Hệ thống tự động hóa hiện đại",
    className: "col-span-1 row-span-2",
  },
];
