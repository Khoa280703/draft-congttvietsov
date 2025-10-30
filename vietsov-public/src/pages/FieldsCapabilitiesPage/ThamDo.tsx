import React from "react";
import PageHeader from "@/components/PageHeader";
import { PageWithSidebar } from "@/components";
import { CardWithPadding } from "@/components/Card";
import { SeeMoreButtonSimple } from "@/components/Button";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const ThamDo: React.FC = () => {
  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Lĩnh Vực & Năng Lực Hoạt Động", href: "/linhvuc-nangluc" },
    { label: "Thăm dò Dầu khí" },
  ];

  const capabilities = [
    {
      title: "Địa chất - Địa vật lý",
      description:
        "Khảo sát địa chấn 2D/3D, phân tích tài liệu địa chất, mô hình hóa cấu trúc và đánh giá tiềm năng chứa dầu khí.",
      image: hoiNghiSuKien,
    },
    {
      title: "Khoan thăm dò",
      description:
        "Thiết kế giếng khoan, khoan xác minh, lấy mẫu và đo kiểm giếng phục vụ đánh giá mỏ ban đầu.",
      image: hoiNghiPetro,
    },
    {
      title: "Đánh giá trữ lượng",
      description:
        "Tổng hợp dữ liệu để ước tính tài nguyên, lập báo cáo đánh giá trữ lượng và đề xuất phương án khai thác.",
      image: hoiNghiSuKien,
    },
  ];

  return (
    <PageWithSidebar activePath="/linhvuc-nangluc">
      <PageHeader title="Thăm dò Dầu khí" backgroundImage={danKhoanBackground} breadcrumbs={breadcrumbs} />

      <section className="bg-white py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <CardWithPadding
                key={idx}
                image={cap.image}
                imageAlt={cap.title}
                title={cap.title}
                description={cap.description}
                className="h-full"
              />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between bg-gray-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Tài liệu & Quy trình</h3>
              <p className="text-gray-600">Tham khảo quy trình, tiêu chuẩn kỹ thuật và hồ sơ năng lực thăm dò.</p>
            </div>
            <SeeMoreButtonSimple text="Xem tài liệu" href="/cacnguonchung/khcn" />
          </div>
        </div>
      </section>
    </PageWithSidebar>
  );
};

export default ThamDo;


