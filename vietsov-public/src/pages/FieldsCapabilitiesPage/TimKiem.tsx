import React from "react";
import PageHeader from "@/components/PageHeader";
import { PageWithSidebar } from "@/components";
import { CardWithPadding } from "@/components/Card";
import { SeeMoreButtonSimple } from "@/components/Button";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const TimKiem: React.FC = () => {
  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Lĩnh Vực & Năng Lực Hoạt Động", href: "/linhvuc-nangluc" },
    { label: "Tìm kiếm Dầu khí" },
  ];

  const capabilities = [
    {
      title: "Khảo sát địa chấn 3D",
      description:
        "Thu thập, xử lý và minh giải dữ liệu địa chấn chất lượng cao phục vụ xác định cấu trúc có tiềm năng.",
      image: hoiNghiSuKien,
    },
    {
      title: "Phân tích địa hóa",
      description:
        "Đánh giá nguồn sinh, đá chứa, bẫy chứa bằng các kỹ thuật phân tích phòng thí nghiệm và mô hình hóa.",
      image: hoiNghiPetro,
    },
    {
      title: "Mô hình hóa địa chất",
      description:
        "Xây dựng mô hình địa chất 3D, mô phỏng dòng chảy và dự báo tiềm năng trước khi quyết định khoan.",
      image: hoiNghiSuKien,
    },
  ];

  return (
    <PageWithSidebar activePath="/linhvuc-nangluc">
      <PageHeader title="Tìm kiếm Dầu khí" backgroundImage={danKhoanBackground} breadcrumbs={breadcrumbs} />

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
              <h3 className="text-xl font-semibold text-gray-800">Hợp tác & Dự án</h3>
              <p className="text-gray-600">Khám phá các dự án hợp tác thăm dò - tìm kiếm đang triển khai.</p>
            </div>
            <SeeMoreButtonSimple text="Xem dự án" href="/doitac-duan" />
          </div>
        </div>
      </section>
    </PageWithSidebar>
  );
};

export default TimKiem;


