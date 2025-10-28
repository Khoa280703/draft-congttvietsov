import React from "react";
import { CardFullDetailHori } from "@/components/Card";

// Import your images - replace with actual paths
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const popularArticles = [
  {
    id: 1,
    title:
      "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học và phát triển nguồn nhân lực Dầu khí",
    timestamp: "11:50 03/10/2024",
    image: danKhoanVietsov,
  },
  {
    id: 2,
    title:
      "Công đoàn Xí Nghiệp Dịch vụ cảng và Cung ứng vật tư thiết bị tổ chức Giải bóng đá nam",
    timestamp: "11:50 03/10/2024",
    image: daiHoiDaiBieu,
  },
  {
    id: 3,
    title:
      "Đoàn cán bộ, chuyên gia Gazprom thăm, tìm hiểu thực tế và trao đổi kinh nghiệm",
    timestamp: "11:50 03/10/2024",
    image: hoiNghiSuKien,
  },
  {
    id: 4,
    title:
      "Xí nghiệp Địa vật lý giếng khoan sẽ chia khó khăn cùng đồng bào chịu ảnh hưởng bão Yagi",
    timestamp: "11:50 03/10/2024",
    image: hoiNghiPetro,
  },
  {
    id: 5,
    title:
      "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học",
    timestamp: "11:50 03/10/2024",
    image: danKhoanVietsov,
  },
  {
    id: 6,
    title:
      "Đoàn thanh niên và Ban nữ công Trung tâm CNTT&LL tổ chức chương trình an sinh xã hội",
    timestamp: "11:50 03/10/2024",
    image: daiHoiDaiBieu,
  },
  {
    id: 7,
    title:
      "Xí nghiệp Địa vật lý giếng khoan sẽ chia khó khăn cùng đồng bào chịu ảnh hưởng bão Yagi",
    timestamp: "11:50 03/10/2024",
    image: hoiNghiSuKien,
  },
];

const MostView: React.FC = () => {
  return (
    <div className="bg-white p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-vietsov-green pb-2">
        Xem nhiều
      </h3>
      <div className="space-y-3">
        {popularArticles.map((article) => (
          <CardFullDetailHori
            key={article.id}
            image={article.image}
            imageAlt={article.title}
            title={article.title}
            timestamp={article.timestamp}
            onClick={() => {
              window.location.href = "/tintuc/chi-tiet";
            }}
            className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0"
            maxTitleLines={2}
          />
        ))}
      </div>
    </div>
  );
};

export default MostView;
