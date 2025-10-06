import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";

const InternalSearchPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/internal/tracuu">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Tra cứu (Nội bộ)
          </h1>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Công cụ tra cứu thông tin nội bộ và tài liệu của Vietsovpetro.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Tra cứu nội bộ
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Tra cứu nhân viên</li>
                <li>• Tra cứu tài liệu</li>
                <li>• Tra cứu quy định</li>
                <li>• Tra cứu thông tin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default InternalSearchPage;

