export interface Achievement {
  id: number;
  value: string;
  description: string;
}

export interface AchievementsSectionProps {
  achievements?: Achievement[];
  className?: string;
}

export const defaultAchievements: Achievement[] = [
  {
    id: 1,
    value: "650 giếng khoan",
    description:
      "Đã khoan hơn 650 giếng bao gồm hơn 75 giếng khoan tìm kiếm, thăm dò và 327 giếng khoan khai thác.",
  },
  {
    id: 2,
    value: "250tr tấn dầu thô",
    description:
      "Đã khai thác được trên 250 triệu tấn dầu thô. (Chiếm gần 60% tổng lượng dầu khai thác của toàn ngành dầu khí VN).",
  },
  {
    id: 3,
    value: "70 công trình biển",
    description:
      "Xây dựng trên 70 công trình biển: 14 giàn khoan cố định, 37 giàn đầu giếng, 2 cụm giàn CN trung tâm...",
  },
  {
    id: 4,
    value: "39 tỷ mét khối khí",
    description:
      "Đã thu gom và vận chuyển về bờ trên 39 tỷ mét khối khí đồng hành.",
  },
  {
    id: 5,
    value: "850km đường ống",
    description:
      "Đã lắp đặt trên 850km đường ống kết nối tất cả các công trình nội mỏ, liên mỏ thành một hệ thống liên hoàn.",
  },
  {
    id: 6,
    value: "89 tỷ USD",
    description:
      "Doanh thu bán dầu đạt trên 89 tỷ USD, nộp Ngân sách Nhà nước và lợi nhuận phía Việt Nam trên 57,2 tỷ USD.",
  },
];
