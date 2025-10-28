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

Doanh nghiệp hàng đầu trong lĩnh vực tìm kiếm, thăm dò địa chất và khai thác dầu khí tại Việt Nam; là đối tác tin cậy, giúp đáp ứng nhu cầu gia tăng năng lượng trong sản xuất và tiêu dùng của Việt Nam theo hướng hiệu quả và bền vững.

Lĩnh vực hoạt động chính của Vietsovpetro là nghiên cứu khoa học, khảo sát, khoan thăm dò địa chất, thiết kế phát triển xây dựng mỏ, khai thác dầu và khí, thu gom xử lý dầu, khí và condensate tại Lô 09-1 và các Lô dầu khí khác ở thềm lục địa Việt Nam; cung cấp các dịch vụ dầu khí chất lượng cho các đối tác ở Việt Nam và trong khu vực.`,
  videoId: "pOZZdPBLX3g",
};
