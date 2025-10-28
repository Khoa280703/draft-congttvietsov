import vietNga from "@/assets/homepage/viet-nga.jpg";

// Types for API integration
export interface VisionMissionData {
  id: string | number;
  title: string;
  subtitle: string;
  vision: {
    title: string;
    description: string;
  };
  mission: {
    title: string;
    description: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export interface VisionMissionProps {
  data?: VisionMissionData;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  className?: string;
}

// Default data matching the design
export const defaultVisionMissionData: VisionMissionData = {
  id: 1,
  title: "",
  subtitle: "",
  vision: {
    title: "Tầm nhìn",
    description:
      "Trở thành liên doanh dầu khí hàng đầu khu vực với năng lực cạnh tranh quốc tế, phát triển bền vững và hiệu quả. Hướng tới vị thế tiên phong trong ứng dụng khoa học – công nghệ hiện đại trong ngành dầu khí.",
  },
  mission: {
    title: "Sứ mệnh",
    description:
      "Không ngừng nâng cao năng lực tìm kiếm, thăm dò, khai thác dầu khí gắn với bảo vệ môi trường và an ninh năng lượng quốc gia; góp phần củng cố quan hệ hợp tác Việt – Nga và phát triển kinh tế đất nước.",
  },
  image: {
    src: vietNga,
    alt: "Offshore oil and gas platforms",
  },
};
