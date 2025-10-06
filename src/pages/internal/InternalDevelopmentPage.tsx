import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";

const InternalDevelopmentPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/internal/phattrien">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Phát triển Bền vững (Nội bộ)
          </h1>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Thông tin về các dự án phát triển bền vững và hoạt động môi trường
              của Vietsovpetro.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Dự án phát triển
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Dự án môi trường</li>
                <li>• Phát triển bền vững</li>
                <li>• Năng lượng tái tạo</li>
                <li>• Báo cáo phát triển</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default InternalDevelopmentPage;

