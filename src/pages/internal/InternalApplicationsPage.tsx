import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";

const InternalApplicationsPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/internal/ungdung">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Ứng dụng Liên kết (Nội bộ)
          </h1>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Các ứng dụng và công cụ nội bộ dành cho nhân viên Vietsovpetro.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Ứng dụng nội bộ
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Hệ thống quản lý nội bộ</li>
                <li>• Ứng dụng di động nội bộ</li>
                <li>• Công cụ làm việc</li>
                <li>• Liên kết đối tác</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default InternalApplicationsPage;

