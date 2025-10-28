import React from "react";
import { PageWithSidebar } from "@/components";

const InternalReportsPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/internal/baocao">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Báo cáo (Nội bộ)
          </h1>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Các báo cáo nội bộ về hoạt động, tài chính và kết quả kinh doanh
              của Vietsovpetro.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Báo cáo nội bộ
              </h2>
              <ul className="space-y-2 text-gray-700">
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

