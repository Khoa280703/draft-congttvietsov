import leader from "@/assets/MrVuMaiKhanh.jpg";

export interface Leader {
  id: number;
  image: string;
  position: string;
  name: string;
  description: string;
}

export interface LeadershipSectionProps {
  leaders?: Leader[];
  className?: string;
}

export const defaultLeaders: Leader[] = [
  {
    id: 1,
    image: leader,
    position: "Tổng Giám Đốc",
    name: "Ông Vũ Mai Khanh",
    description:
      "Ông Vũ Mai Khanh đã có 32 năm làm việc tại Liên doanh Việt - Nga Vietsovpetro kể từ khi chính thức trở thành ngườ...",
  },
  {
    id: 2,
    image: leader,
    position: "Phó Tổng Giám Đốc Thứ Nhất",
    name: "Сараев Олег Петрович",
    description:
      "Tổ chức thực hiện các kế hoạch tìm kiếm thăm dò địa chất, mở rộng vùng hoạt động của Vietsovpetro, nghiên...",
  },
  {
    id: 3,
    image: leader,
    position: "Phó Tổng Giám Đốc",
    name: "Phạm Xuân Sơn",
    description:
      "Tổ chức thực hiện các kế hoạch tìm kiếm thăm dò địa chất, mở rộng vùng hoạt động của Vietsovpetro, nghiên...",
  },
  {
    id: 4,
    image: leader,
    position: "Phó Tổng Giám Đốc",
    name: "Ông Yakovenko E.V",
    description:
      "Tổ chức thực hiện và thực hiện các kế hoạch, biện pháp tổ chức kỹ thuật về xây dựng cơ bản, khảo sát, sửa chữa vàn...",
  },
  {
    id: 5,
    image: leader,
    position: "Phó Tổng Giám Đốc",
    name: "Ông Mai Đăng Tuấn",
    description:
      "Ông Vũ Mai Khanh đã có 32 năm làm việc tại Liên doanh Việt - Nga Vietsovpetro kể từ khi chính thức trở thành ngườ...",
  },
  {
    id: 6,
    image: leader,
    position: "Phó Tổng Giám Đốc",
    name: "Ông Trần Quốc Thắng",
    description:
      "Tổ chức thực hiện các kế hoạch về tìm kiếm thăm dò địa chất, mở rộng vùng hoạt động của Vietsovpetro.",
  },
];
