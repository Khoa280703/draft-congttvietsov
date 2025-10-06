import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";

const InternalAboutPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/internal/gioithieu">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Giới thiệu Chung (Nội bộ)
          </h1>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Thông tin nội bộ về tổ chức, cơ cấu và hoạt động của Vietsovpetro
              dành cho nhân viên nội bộ.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Thông tin nội bộ
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Cơ cấu tổ chức nội bộ</li>
                <li>• Quy định và chính sách nội bộ</li>
                <li>• Thông tin liên hệ nội bộ</li>
                <li>• Tài liệu nội bộ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default InternalAboutPage;

