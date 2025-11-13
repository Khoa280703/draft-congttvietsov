import vietNga from "@/assets/homepage/viet-nga.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";

import Frame1 from "@/assets/icon/Frame-1";
import Frame2 from "@/assets/icon/Frame-2";
import Frame3 from "@/assets/icon/Frame-3";
import Frame from "@/assets/icon/Frame";
import React, { type ReactElement } from "react";

export interface CoreValue {
  id: string;
  title: string;
  description?: string;
  image?: string;
  url?: string;
  iconType?: "frame1" | "frame2" | "frame3" | "frame";
}

// Helper function to get icon component
export const getIconComponent = (
  iconType?: "frame1" | "frame2" | "frame3" | "frame"
): ReactElement | null => {
  if (!iconType) return null;

  const iconProps = { size: 40, color: "#ffffff" };

  switch (iconType) {
    case "frame1":
      return React.createElement(Frame1, iconProps);
    case "frame2":
      return React.createElement(Frame2, iconProps);
    case "frame3":
      return React.createElement(Frame3, iconProps);
    case "frame":
      return React.createElement(Frame, iconProps);
    default:
      return null;
  }
};

export const vietsovPetroValues: CoreValue[] = [
  {
    id: "doan-ket-huu-nghi",
    title: "Đoàn kết – Hữu nghị",
    description:
      "Luôn giữ gìn tình đồng đội cao, hỗ trợ lẫn nhau giữa các bộ phận",
    image: vietNga,
    url: "/tintuc/chi-tiet",
    iconType: "frame1",
  },
  {
    id: "khat-vong",
    title: "Khát vọng",
    description: "Luôn hướng tới những mục tiêu cao cả và phát triển bền vững",
    image: hoiNghiPetro,
    url: "/tintuc/chi-tiet",
    iconType: "frame2",
  },
  {
    id: "tin-cay",
    title: "Tin cậy",
    description: "Xây dựng niềm tin thông qua sự minh bạch và cam kết",
    image: hoiNghiSuKien,
    url: "/tintuc/chi-tiet",
    iconType: "frame3",
  },
  {
    id: "ben-vung",
    title: "Bền vững",
    description: "Phát triển bền vững cho tương lai và môi trường",
    image: danKhoanVietsov,
    url: "/tintuc/chi-tiet",
    iconType: "frame",
  },
];

export const humanValues: CoreValue[] = [
  {
    id: "sang-tao",
    title: "Sáng tạo đổi mới",
    description: "Khuyến khích tư duy sáng tạo và đổi mới trong mọi hoạt động",
    image: vietNga,
    url: "/tintuc/chi-tiet",
    iconType: "frame1",
  },
  {
    id: "thich-ung",
    title: "Thích ứng linh hoạt",
    description: "Linh hoạt thích ứng với mọi thay đổi và thách thức",
    image: hoiNghiSuKien,
    url: "/tintuc/chi-tiet",
    iconType: "frame2",
  },
  {
    id: "trach-nhiem",
    title: "Trách nhiệm",
    description: "Thực hiện trách nhiệm với xã hội và cộng đồng",
    image: danKhoanVietsov,
    url: "/tintuc/chi-tiet",
    iconType: "frame3",
  },
  {
    id: "se-chia",
    title: "Sẻ chia",
    description: "Chia sẻ kiến thức, kinh nghiệm và giá trị với nhau",
    image: hoiNghiSuKien,
    url: "/tintuc/chi-tiet",
    iconType: "frame",
  },
];
