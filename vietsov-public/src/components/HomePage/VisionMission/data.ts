import vietNga from "@/assets/homepage/viet-nga.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

export interface VisionMissionSection {
  title: string;
  description: string[];
  links: {
    text: string;
    url: string;
  }[];
  image?: string;
  imageAlt?: string;
}

export const visionData: VisionMissionSection = {
  title: "Tầm nhìn",
  description: [
    "Doanh nghiệp dầu khí và năng lượng hàng đầu khu vực, phát triển bền vững và tiên phong trong chuyển đổi năng lượng, đồng thời khai thác hiệu quả tài nguyên.",
  ],
  links: [{ text: "Tìm hiểu thêm", url: "/tintuc/chi-tiet" }],
  image: vietNga,
  imageAlt: "Vietsovpetro",
};

export const missionData: VisionMissionSection = {
  title: "Sứ mệnh",
  description: [
    "Sứ mệnh của chúng tôi là phát triển bền vững, đóng góp vào sự phát triển của ngành dầu khí Việt Nam và khu vực.",
  ],
  links: [{ text: "Tìm hiểu thêm", url: "/tintuc/chi-tiet" }],
  image: hoiNghiPetro,
  imageAlt: "Vietsovpetro",
};

// Re-export for backward compatibility
export const vision = visionData;
export const mission = missionData;
