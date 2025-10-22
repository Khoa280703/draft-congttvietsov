import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";

export interface FieldCapabilityData {
  index: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  capabilities: string[];
}

export interface ServiceCardData {
  id: number;
  title: string;
  description: string;
  image: string;
  capabilities: string[];
  icon: string;
}

// Section 1: Thăm dò, tìm kiếm và KT dầu khí (for LandingUnits)
export const explorationData = [
  {
    index: "01",
    title: "Thăm dò, Tìm kiếm và Khai thác Dầu khí",
    description:
      "Vietsovpetro có năng lực toàn diện trong lĩnh vực thăm dò, tìm kiếm và khai thác dầu khí với công nghệ tiên tiến, đội ngũ chuyên gia giàu kinh nghiệm và trang thiết bị hiện đại. Chúng tôi đã thực hiện thành công nhiều dự án khai thác dầu khí quy mô lớn tại Việt Nam.",
    image: danKhoanVietsov,
    imagePosition: "right" as const,
  },
];

// Section 2: Dịch vụ (for Card components)
export const servicesData = [
  {
    id: 1,
    title: "Dịch vụ Kỹ thuật và Công nghệ",
    description:
      "Cung cấp các dịch vụ kỹ thuật chuyên nghiệp và công nghệ tiên tiến cho ngành dầu khí, bao gồm tư vấn kỹ thuật, thiết kế công trình, lắp đặt và bảo trì hệ thống, đảm bảo hiệu quả và an toàn tối đa cho các dự án.",
    image: hoiNghiSuKien,
    readMoreLink: "#",
  },
  {
    id: 2,
    title: "Dịch vụ Hậu cần và Vận tải",
    description:
      "Cung cấp các dịch vụ hậu cần toàn diện và vận tải chuyên nghiệp cho các hoạt động dầu khí ngoài khơi, đảm bảo cung ứng kịp thời và an toàn các nguồn lực cần thiết cho các dự án khai thác.",
    image: hoiNghiPetro,
    readMoreLink: "#",
  },
  {
    id: 3,
    title: "Nghiên cứu và Phát triển Công nghệ",
    description:
      "Đầu tư mạnh mẽ vào nghiên cứu và phát triển các công nghệ mới, đổi mới sáng tạo trong ngành dầu khí, góp phần nâng cao hiệu quả khai thác và bảo vệ môi trường, hướng tới phát triển bền vững.",
    image: daiHoiDaiBieu,
    readMoreLink: "#",
  },
  {
    id: 4,
    title: "Dịch vụ Kỹ thuật và Công nghệ",
    description:
      "Cung cấp các dịch vụ kỹ thuật chuyên nghiệp và công nghệ tiên tiến cho ngành dầu khí, bao gồm tư vấn kỹ thuật, thiết kế công trình, lắp đặt và bảo trì hệ thống, đảm bảo hiệu quả và an toàn tối đa cho các dự án.",
    image: hoiNghiSuKien,
    readMoreLink: "#",
  },
  {
    id: 5,
    title: "Dịch vụ Kỹ thuật và Công nghệ",
    description:
      "Cung cấp các dịch vụ kỹ thuật chuyên nghiệp và công nghệ tiên tiến cho ngành dầu khí, bao gồm tư vấn kỹ thuật, thiết kế công trình, lắp đặt và bảo trì hệ thống, đảm bảo hiệu quả và an toàn tối đa cho các dự án.",
    image: hoiNghiSuKien,
    readMoreLink: "#",
  },
  {
    id: 6,
    title: "Dịch vụ Kỹ thuật và Công nghệ",
    description:
      "Cung cấp các dịch vụ kỹ thuật chuyên nghiệp và công nghệ tiên tiến cho ngành dầu khí, bao gồm tư vấn kỹ thuật, thiết kế công trình, lắp đặt và bảo trì hệ thống, đảm bảo hiệu quả và an toàn tối đa cho các dự án.",
    image: hoiNghiSuKien,
    readMoreLink: "#",
  },
];
