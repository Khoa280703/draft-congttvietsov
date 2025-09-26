import React from "react";
import achievementsGraphic from "@/assets/khaithaccartoon.png";

const achievementsData = [
  {
    value: "650 giếng khoan",
    description:
      "Đã khoan hơn 650 giếng bao gồm hơn 75 giếng khoan tìm kiếm, thăm dò và 327 giếng khoan khai thác.",
  },
  {
    value: "250tr tấn dầu thô",
    description:
      "Đã khai thác được trên 250 triệu tấn dầu thô. (Chiếm gần 60% tổng lượng dầu khai thác của toàn ngành dầu khí VN).",
  },
  {
    value: "70 công trình biển",
    description:
      "Xây dựng trên 70 công trình biển: 14 giàn khoan cố định, 37 giàn đầu giếng, 2 cụm giàn CN trung tâm...",
  },
  {
    value: "39 tỷ mét khối khí",
    description:
      "Đã thu gom và vận chuyển về bờ trên 39 tỷ mét khối khí đồng hành.",
  },
  {
    value: "850km đường ống",
    description:
      "Đã lắp đặt trên 850km đường ống kết nối tất cả các công trình nội mỏ, liên mỏ thành một hệ thống liên hoàn.",
  },
  {
    value: "89 tỷ USD",
    description:
      "Doanh thu bán dầu đạt trên 89 tỷ USD, nộp Ngân sách Nhà nước và lợi nhuận phía Việt Nam trên 57,2 tỷ USD.",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <section
      className="relative font-sans py-16 md:py-24 bg-cover bg-center"
      // style={{ backgroundImage: `url(${achievementsBg})` }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={achievementsGraphic}
              alt="Sơ đồ thành tựu Vietsovpetro"
              className="w-full max-w-md"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {achievementsData.map((item, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-2">{item.value}</h2>
                <p className="text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
