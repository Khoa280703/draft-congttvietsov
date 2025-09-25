import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";

const ResourcesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Nguồn lực"
        backgroundImage="/api/placeholder/1920/400"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Nguồn lực" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Nguồn lực của Vietsovpetro
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Nhân lực
              </h3>
              <p className="text-gray-600 mb-4">
                Đội ngũ cán bộ, kỹ sư và công nhân có trình độ chuyên môn cao,
                kinh nghiệm dày dặn trong lĩnh vực dầu khí.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    2,500+
                  </div>
                  <div className="text-sm text-gray-600">Nhân viên</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600">Trình độ ĐH</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Cơ sở vật chất
              </h3>
              <p className="text-gray-600 mb-4">
                Hệ thống cơ sở hạ tầng hiện đại, trang thiết bị tiên tiến phục
                vụ cho hoạt động thăm dò và khai thác dầu khí.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Giàn khoan ngoài khơi</li>
                <li>Hệ thống xử lý dầu khí</li>
                <li>Trung tâm điều hành</li>
                <li>Kho bãi và cảng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
