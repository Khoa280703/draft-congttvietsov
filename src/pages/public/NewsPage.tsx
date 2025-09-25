import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";

const NewsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Tin tức - Sự kiện"
        backgroundImage="/api/placeholder/1920/400"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức - Sự kiện" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Tin tức và Sự kiện mới nhất
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Vietsovpetro kỷ niệm 44 năm thành lập
                </h3>
                <p className="text-gray-600 text-sm mb-3">Ngày 19/12/2024</p>
                <p className="text-gray-600">
                  Lễ kỷ niệm 44 năm thành lập liên doanh dầu khí Việt - Nga...
                </p>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Hội nghị tổng kết năm 2024
                </h3>
                <p className="text-gray-600 text-sm mb-3">Ngày 15/12/2024</p>
                <p className="text-gray-600">
                  Hội nghị tổng kết hoạt động sản xuất kinh doanh năm 2024...
                </p>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Đào tạo nâng cao trình độ
                </h3>
                <p className="text-gray-600 text-sm mb-3">Ngày 10/12/2024</p>
                <p className="text-gray-600">
                  Chương trình đào tạo nâng cao trình độ cho cán bộ nhân viên...
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
