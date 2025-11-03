import React from "react";
import { PageWithSidebar } from "@/components";

const InternalApplicationsPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/internal/ungdung">
      <div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-4xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-6 md:mb-8 lg:mb-6 2xl:mb-8">
            Ứng dụng Liên kết (Nội bộ)
          </h1>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-5 lg:mb-4 2xl:mb-5 lg:text-sm 2xl:text-base">
              Các ứng dụng và công cụ nội bộ dành cho nhân viên Vietsovpetro.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 lg:p-5 2xl:p-6">
              <h2 className="text-2xl lg:text-xl 2xl:text-2xl font-semibold text-gray-800 mb-4 lg:mb-3 2xl:mb-4">
                Ứng dụng nội bộ
              </h2>
              <ul className="space-y-2 lg:space-y-1.5 2xl:space-y-2 text-gray-700 lg:text-sm 2xl:text-base">
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

