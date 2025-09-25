import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";

const RecruitmentPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Tuyển dụng"
        backgroundImage="/api/placeholder/1920/400"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tuyển dụng" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Cơ hội nghề nghiệp tại Vietsovpetro
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Kỹ sư Dầu khí
              </h3>
              <p className="text-gray-600 mb-3">
                Tuyển dụng kỹ sư có kinh nghiệm trong lĩnh vực dầu khí, khai
                thác và xử lý dầu khí.
              </p>
              <div className="text-sm text-gray-500">Hạn nộp: 31/12/2024</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Chuyên viên Tài chính
              </h3>
              <p className="text-gray-600 mb-3">
                Tuyển dụng chuyên viên tài chính có kinh nghiệm trong lĩnh vực
                dầu khí và năng lượng.
              </p>
              <div className="text-sm text-gray-500">Hạn nộp: 25/12/2024</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Kỹ thuật viên
              </h3>
              <p className="text-gray-600 mb-3">
                Tuyển dụng kỹ thuật viên vận hành thiết bị dầu khí, có kinh
                nghiệm làm việc ngoài khơi.
              </p>
              <div className="text-sm text-gray-500">Hạn nộp: 20/12/2024</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Nhân viên Hành chính
              </h3>
              <p className="text-gray-600 mb-3">
                Tuyển dụng nhân viên hành chính, quản lý văn phòng và hỗ trợ các
                hoạt động nội bộ.
              </p>
              <div className="text-sm text-gray-500">Hạn nộp: 15/12/2024</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruitmentPage;
