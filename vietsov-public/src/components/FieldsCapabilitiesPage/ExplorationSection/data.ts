import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

export interface ExplorationData {
  index: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

export const explorationData: ExplorationData[] = [
  {
    index: "01",
    title: "Thăm dò Dầu khí",
    description:
      "Vietsovpetro có năng lực toàn diện trong lĩnh vực thăm dò dầu khí với công nghệ tiên tiến, đội ngũ chuyên gia giàu kinh nghiệm và trang thiết bị hiện đại. Chúng tôi thực hiện các hoạt động thăm dò địa chất, địa vật lý và đánh giá tiềm năng dầu khí tại các khu vực biển sâu.",
    image: danKhoanVietsov,
    imagePosition: "right",
  },
  {
    index: "02",
    title: "Tìm kiếm Dầu khí",
    description:
      "Với kinh nghiệm dày dặn trong ngành dầu khí, Vietsovpetro thực hiện các hoạt động tìm kiếm và phát hiện các mỏ dầu khí mới. Chúng tôi sử dụng các công nghệ tiên tiến như khảo sát địa chấn 3D, phân tích địa hóa và mô hình hóa địa chất để tối ưu hóa hiệu quả tìm kiếm.",
    image: hoiNghiSuKien,
    imagePosition: "left",
  },
  {
    index: "03",
    title: "Khai thác Dầu khí",
    description:
      "Vietsovpetro là đơn vị hàng đầu trong lĩnh vực khai thác dầu khí tại Việt Nam. Chúng tôi vận hành và quản lý các giàn khoan, hệ thống xử lý và vận chuyển dầu khí, đảm bảo an toàn, hiệu quả và tuân thủ các tiêu chuẩn môi trường quốc tế.",
    image: hoiNghiPetro,
    imagePosition: "right",
  },
];
