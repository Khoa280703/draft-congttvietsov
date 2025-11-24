import React from "react";
import { PageWithSidebar } from "@/components";

const InternalReportsPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/internal/baocao">
      <div>
        <div className="max-w-4xl laptop:max-w-5xl fhd:max-w-6xl qhd:max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-4xl laptop:text-5xl fhd:text-6xl qhd:text-7xl font-bold text-gray-800 mb-6 md:mb-8 lg:mb-10 laptop:mb-12 fhd:mb-14 qhd:mb-16">
            Báo cáo (Nội bộ)
          </h1>
          <div className="prose max-w-none">
            <p className="text-base md:text-base lg:text-lg laptop:text-xl fhd:text-2xl qhd:text-3xl text-gray-700 leading-relaxed mb-4 md:mb-5 lg:mb-6 laptop:mb-8 fhd:mb-10 qhd:mb-12">
              Các báo cáo nội bộ về hoạt động, tài chính và kết quả kinh doanh
              của Vietsovpetro.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 lg:p-8 laptop:p-10 fhd:p-12 qhd:p-14">
              <h2 className="text-2xl md:text-2xl lg:text-3xl laptop:text-4xl fhd:text-5xl qhd:text-6xl font-semibold text-gray-800 mb-4 lg:mb-5 laptop:mb-6 fhd:mb-8 qhd:mb-10">
                Báo cáo nội bộ
              </h2>
              <ul className="space-y-2 lg:space-y-3 laptop:space-y-4 fhd:space-y-5 qhd:space-y-6 text-base md:text-base lg:text-lg laptop:text-xl fhd:text-2xl qhd:text-3xl text-gray-700">
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

