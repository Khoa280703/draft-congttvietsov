import React from "react";
import { PageWithSidebar } from "@/components";

const InternalReportsPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/internal/baocao">
      <div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-4xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-6 md:mb-8 lg:mb-6 2xl:mb-8">
            Báo cáo (Nội bộ)
          </h1>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-5 lg:mb-4 2xl:mb-5 lg:text-sm 2xl:text-base">
              Các báo cáo nội bộ về hoạt động, tài chính và kết quả kinh doanh
              của Vietsovpetro.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 lg:p-5 2xl:p-6">
              <h2 className="text-2xl lg:text-xl 2xl:text-2xl font-semibold text-gray-800 mb-4 lg:mb-3 2xl:mb-4">
                Báo cáo nội bộ
              </h2>
              <ul className="space-y-2 lg:space-y-1.5 2xl:space-y-2 text-gray-700 lg:text-sm 2xl:text-base">
                <li>• Báo cáo tài chính</li>
                <li>• Báo cáo hoạt động</li>
                <li>• Báo cáo môi trường</li>
                <li>• Báo cáo an toàn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default InternalReportsPage;

