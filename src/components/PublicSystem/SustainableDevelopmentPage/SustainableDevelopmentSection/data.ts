import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";

export interface SustainableDevelopmentData {
  index: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  path: string;
}

export const sustainableDevelopmentData: SustainableDevelopmentData[] = [
  {
    index: "01",
    title: "An toàn sức khỏe môi trường",
    description:
      "Vietsovpetro cam kết thực hiện các hoạt động bảo vệ môi trường trong tất cả các dự án dầu khí. Chúng tôi áp dụng các công nghệ tiên tiến và quy trình nghiêm ngặt để giảm thiểu tác động môi trường, bảo vệ hệ sinh thái biển và đảm bảo phát triển bền vững.",
    image: danKhoanVietsov,
    imagePosition: "right",
    path: "/phattrien/atskmt",
  },
  {
    index: "02",
    title: "Truyền thông văn hóa doanh nghiệp - hoạt động xã hội",
    description:
      "Vietsovpetro luôn coi trọng trách nhiệm xã hội và đóng góp tích cực vào sự phát triển của cộng đồng. Chúng tôi thực hiện các chương trình hỗ trợ giáo dục, y tế, phát triển cơ sở hạ tầng và tạo việc làm cho người dân địa phương, góp phần nâng cao chất lượng cuộc sống.",
    image: hoiNghiSuKien,
    imagePosition: "left",
    path: "/phattrien/truyen-thong-vhdn-hdxh",
  },
  {
    index: "03",
    title: "Chuyển đổi số",
    description:
      "Vietsovpetro đầu tư mạnh mẽ vào nghiên cứu và phát triển các nguồn năng lượng tái tạo như năng lượng mặt trời, gió và thủy điện. Chúng tôi hướng tới việc giảm phụ thuộc vào nhiên liệu hóa thạch và chuyển đổi sang nền kinh tế xanh, bền vững.",
    image: hoiNghiPetro,
    imagePosition: "right",
    path: "/phattrien/chuyen-doi-so",
  },
  {
    index: "04",
    title: "Ý kiến người lao động",
    description:
      "Vietsovpetro không ngừng đổi mới và ứng dụng các công nghệ tiên tiến để nâng cao hiệu quả sản xuất, giảm thiểu tác động môi trường và đảm bảo an toàn lao động. Chúng tôi hợp tác với các viện nghiên cứu và trường đại học để phát triển các giải pháp công nghệ bền vững.",
    image: daiHoiDaiBieu,
    imagePosition: "left",
    path: "/phattrien/y-kien-nguoi-lao-dong",
  },
];
