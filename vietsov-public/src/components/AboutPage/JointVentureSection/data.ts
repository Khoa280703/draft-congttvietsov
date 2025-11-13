export interface JointVentureData {
  title: string;
  description: string;
  videoId: string;
}

export interface JointVentureSectionProps {
  data?: JointVentureData;
  className?: string;
}

export const defaultJointVentureData: JointVentureData = {
  title: "Liên doanh Vietsovpetro",
  description: `Liên doanh Vietsovpetro (gọi tắt là Vietsovpetro) là pháp nhân hợp pháp của nước CHXHCN Việt Nam, được thành lập năm 1981, là đơn vị thành viên của Tập đoàn Dầu khí Quốc gia Việt Nam.

Doanh nghiệp hàng đầu trong lĩnh vực tìm kiếm, thăm dò địa chất và khai thác dầu khí tại Việt Nam; là đối tác tin cậy, giúp đáp ứng nhu cầu gia tăng năng lượng trong sản xuất và tiêu dùng của Việt Nam theo hướng hiệu quả và bền vững.`,
  videoId: "pOZZdPBLX3g",
};
