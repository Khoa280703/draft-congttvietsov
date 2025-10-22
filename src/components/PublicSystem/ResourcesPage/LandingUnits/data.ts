import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";

export interface EnterpriseData {
  index: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

export const enterpriseData: EnterpriseData[] = [
  {
    index: "01",
    title: "Xí nghiệp Khai thác Dầu khí",
    description:
      "Xí nghiệp Khai thác Dầu khí có đầy đủ năng lực về con người, máy móc, nhân lực và trang thiết bị hiện đại...",
    image: danKhoanVietsov,
    imagePosition: "right",
  },
  {
    index: "02",
    title:
      "Xí nghiệp Xây lắp, Khảo sát và Sửa chữa các công trình khai thác dầu khí",
    description:
      "Xí nghiệp Xây lắp, Khảo sát và Sửa chữa các công trình khai thác dầu khí có đầy đủ năng lực về con người...",
    image: hoiNghiSuKien,
    imagePosition: "left",
  },
  {
    index: "03",
    title: "Xí nghiệp Khai thác các công trình khí",
    description:
      "Xí nghiệp Khai thác các công trình khí có đầy đủ năng lực về con người, máy móc, nhân lực...",
    image: hoiNghiPetro,
    imagePosition: "right",
  },
  {
    index: "04",
    title: "Xí nghiệp Khai thác các công trình khí",
    description:
      "Xí nghiệp Khai thác các công trình khí có đầy đủ năng lực về con người, máy móc, nhân lực...",
    image: hoiNghiPetro,
    imagePosition: "left",
  },
];
