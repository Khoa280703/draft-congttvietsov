import React from "react";
import PageHeader from "@/components/PageHeader";
import { PageWithSidebar } from "@/components";
import { CardWithPadding } from "@/components/Card";
import { SeeMoreButtonSimple } from "@/components/Button";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const KhaiThac: React.FC = () => {
  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Lĩnh Vực & Năng Lực Hoạt Động", href: "/linhvuc-nangluc" },
    { label: "Khai thác Dầu khí" },
  ];

  const capabilities = [
    {
      title: "Vận hành giàn khoan",
      description:
        "Quản lý vận hành an toàn - hiệu quả, tối ưu thời gian dừng máy, bảo dưỡng theo tình trạng.",
      image: hoiNghiSuKien,
    },
    {
      title: "Xử lý & vận chuyển",
      description:
        "Thu gom, xử lý, tách dầu - khí - nước; xuất bán và vận chuyển tới điểm tiếp nhận.",
      image: hoiNghiPetro,
    },
    {
      title: "An toàn & môi trường",
      description:
        "Áp dụng tiêu chuẩn ATSKMT, ứng cứu sự cố, quan trắc môi trường liên tục và báo cáo định kỳ.",
      image: hoiNghiSuKien,
    },
  ];

  return (
    <PageWithSidebar activePath="/linhvuc-nangluc">
      <PageHeader
        title="Khai thác Dầu khí"
        backgroundImage={danKhoanBackground}
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-white py-10 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 2xl:pt-22 2xl:pb-15">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5 2xl:gap-6">
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

          <div className="mt-8 lg:mt-7 2xl:mt-8 flex items-center justify-between bg-gray-50 p-6 lg:p-5 2xl:p-6 rounded-xl">
            <div>
              <h3 className="text-xl lg:text-lg 2xl:text-xl font-semibold text-gray-800">
                Chuẩn ATSKMT
              </h3>
              <p className="text-gray-600 lg:text-sm 2xl:text-base">
                Tìm hiểu hệ thống an toàn, sức khỏe, môi trường áp dụng trong
                khai thác.
              </p>
            </div>
            <SeeMoreButtonSimple text="Xem chi tiết" href="/phattrien/atskmt" />
          </div>
        </div>
      </section>
    </PageWithSidebar>
  );
};

export default KhaiThac;
