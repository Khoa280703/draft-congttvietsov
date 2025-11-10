import vietNga from "@/assets/homepage/viet-nga.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
export interface CoreValue {
  id: string;
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export const vietsovPetroValues: CoreValue[] = [
  {
    id: "doan-ket-huu-nghi",
    title: "Đoàn kết – Hữu nghị",
    description:
      "Luôn giữ gìn tình đồng đội cao, hỗ trợ lẫn nhau giữa các bộ phận, giữ gìn lập trường trong các công trình trong cũng như ngoài khơi. Đoàn kết góp phần tạo nên sức mạnh tập thể, giúp vượt qua những thách thức trong môi trường dầu khí đầy biến động.",
    image: vietNga,
    url: "/gia-tri/doan-ket-huu-nghi",
  },
  {
    id: "khat-vong",
    title: "Khát vọng",
    description: "Luôn hướng tới những mục tiêu cao cả và phát triển bền vững",
    image: hoiNghiPetro,
    url: "/gia-tri/khat-vong",
  },
  {
    id: "tin-cay",
    title: "Tin cậy",
    description: "Xây dựng niềm tin thông qua sự minh bạch và cam kết",
    image: hoiNghiSuKien,
    url: "/gia-tri/tin-cay",
  },
  {
    id: "ben-vung",
    title: "Bền vững",
    description: "Phát triển bền vững cho tương lai và môi trường",
    image: danKhoanVietsov,
    url: "/gia-tri/ben-vung",
  },
];

export const humanValues: CoreValue[] = [
  {
    id: "sang-tao",
    title: "Sáng tạo đổi mới",
    description: "Khuyến khích tư duy sáng tạo và đổi mới trong mọi hoạt động",
    image: vietNga,
    url: "/gia-tri/sang-tao",
  },
  {
    id: "thich-ung",
    title: "Thích ứng linh hoạt",
    description: "Linh hoạt thích ứng với mọi thay đổi và thách thức",
    image: hoiNghiSuKien,
    url: "/gia-tri/thich-ung",
  },
  {
    id: "trach-nhiem",
    title: "Trách nhiệm",
    description: "Thực hiện trách nhiệm với xã hội và cộng đồng",
    image: danKhoanVietsov,
    url: "/gia-tri/trach-nhiem",
  },
  {
    id: "se-chia",
    title: "Sẻ chia",
    description: "Chia sẻ kiến thức, kinh nghiệm và giá trị với nhau",
    image: hoiNghiSuKien,
    url: "/gia-tri/se-chia",
  },
];
