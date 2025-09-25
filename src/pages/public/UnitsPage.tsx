import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";

const UnitsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Đơn vị trực thuộc"
        backgroundImage="/api/placeholder/1920/400"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Đơn vị trực thuộc" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Các đơn vị trực thuộc Vietsovpetro
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Ban Tổng Giám đốc
              </h3>
              <p className="text-gray-600">
                Điều hành và quản lý hoạt động của toàn bộ liên doanh.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Phòng Kỹ thuật
              </h3>
              <p className="text-gray-600">
                Chịu trách nhiệm về các vấn đề kỹ thuật và công nghệ.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Phòng Tài chính
              </h3>
              <p className="text-gray-600">
                Quản lý tài chính và kế toán của liên doanh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnitsPage;
