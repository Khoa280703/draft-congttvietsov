import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";

const AdmissionPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Tuyển sinh"
        backgroundImage="/api/placeholder/1920/400"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tuyển sinh" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Chương trình Tuyển sinh và Đào tạo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Học bổng Vietsovpetro
              </h3>
              <p className="text-gray-600 mb-4">
                Chương trình học bổng dành cho sinh viên ngành Dầu khí, Kỹ thuật
                và Kinh tế tại các trường đại học hàng đầu.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Học bổng toàn phần 4 năm</li>
                <li>Thực tập tại công ty</li>
                <li>Cơ hội việc làm sau tốt nghiệp</li>
                <li>Đào tạo chuyên sâu</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Chương trình Đào tạo
              </h3>
              <p className="text-gray-600 mb-4">
                Các khóa đào tạo chuyên nghiệp về kỹ thuật dầu khí, quản lý dự
                án và phát triển kỹ năng lãnh đạo.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Đào tạo kỹ thuật dầu khí</li>
                <li>Quản lý dự án năng lượng</li>
                <li>An toàn lao động</li>
                <li>Kỹ năng lãnh đạo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionPage;
