import React from "react";
import { PageWithSidebar } from "@/components";

const productionReportGroups = [
  {
    title: "Báo cáo sản lượng tổng hợp",
    description: "Theo dõi sản lượng dầu, khí đồng khai thác theo thời gian thực.",
    frequency: "Cập nhật 04 lần/ngày",
    owner: "Ban Điều độ sản xuất",
  },
  {
    title: "Báo cáo hiệu suất giàn khoan",
    description: "Đánh giá hệ số sử dụng thiết bị, thời gian bảo dưỡng, downtime.",
    frequency: "Báo cáo tuần",
    owner: "Trung tâm khai thác",
  },
  {
    title: "Báo cáo an toàn - môi trường",
    description: "KPI ATSKMT, sự cố, giải pháp khắc phục và tình trạng thiết bị.",
    frequency: "Báo cáo ngày & tuần",
    owner: "Phòng ATSKMT",
  },
];

const managementReportGroups = [
  {
    title: "Báo cáo quản trị chi phí",
    description: "So sánh kế hoạch vs thực tế, phân tích chênh lệch theo đơn vị.",
    frequency: "Báo cáo tháng",
    owner: "Khối Tài chính - Kế toán",
  },
  {
    title: "Báo cáo dự án chiến lược",
    description: "Tiến độ EPC, human resource loading và nhu cầu ngân sách.",
    frequency: "Báo cáo tuần",
    owner: "Ban Dự án",
  },
  {
    title: "Báo cáo nguồn nhân lực",
    description: "Biến động nhân sự, năng lực, kế hoạch đào tạo và kế thừa.",
    frequency: "Báo cáo quý",
    owner: "Phòng Tổ chức nhân sự",
  },
];

const InternalReportsPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/internal/baocao">
      <div className="space-y-10 md:space-y-12 lg:space-y-14">
        <header className="text-center space-y-4">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-vietsov-green">
            Trung tâm báo cáo nội bộ
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl laptop:text-5xl fhd:text-6xl font-bold text-vietsov-black">
            Báo cáo sản xuất & quản trị
          </h1>
          <p className="text-base md:text-lg text-vietsov-light-gray max-w-4xl mx-auto">
            Dữ liệu hợp nhất từ các ban chức năng, cập nhật realtime qua hệ thống BI.
          </p>
        </header>

        <section className="grid grid-cols-1 laptop:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <div className="bg-vietsov-background rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-100 shadow-sm">
            <div className="mb-6">
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-vietsov-light-gray">
                Báo cáo sản xuất
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mt-3 text-vietsov-black">
                Vận hành & khai thác
              </h2>
            </div>
            <div className="space-y-4">
              {productionReportGroups.map((report) => (
                <article
                  key={report.title}
                  className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-vietsov-black">
                    {report.title}
                  </h3>
                  <p className="text-sm text-vietsov-light-gray mt-2">
                    {report.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-vietsov-light-gray">
                    <span className="px-3 py-1 rounded-full bg-gray-100">
                      {report.frequency}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-vietsov-green/10 text-vietsov-green">
                      {report.owner}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-gray-950 text-white rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800 shadow-inner">
            <div className="mb-6">
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-vietsov-light-gray">
                Báo cáo quản trị
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mt-3">
                Chiến lược & điều hành
              </h2>
            </div>
            <div className="space-y-4">
              {managementReportGroups.map((report) => (
                <article
                  key={report.title}
                  className="p-5 rounded-2xl border border-white/15 bg-white/5"
                >
                  <h3 className="text-lg font-semibold">{report.title}</h3>
                  <p className="text-sm text-vietsov-light-gray mt-2">
                    {report.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-vietsov-light-gray">
                    <span className="px-3 py-1 rounded-full bg-white/10">
                      {report.frequency}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-vietsov-yellow/20 text-vietsov-yellow-200">
                      {report.owner}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-vietsov-light-gray">
                Quy trình
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-vietsov-black">
                Chu trình xuất bản báo cáo
              </h2>
            </div>
            <button className="px-5 py-2 rounded-full bg-vietsov-green text-white text-sm font-medium">
              Xem hướng dẫn
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Thu thập dữ liệu", "Xử lý & chuẩn hóa", "Phê duyệt", "Phát hành"].map(
              (step, index) => (
                <div
                  key={step}
                  className="p-4 rounded-2xl border border-dashed border-gray-200 text-center"
                >
                  <div className="text-2xl font-semibold text-vietsov-green mb-2">
                    0{index + 1}
                  </div>
                  <p className="text-sm font-medium text-vietsov-black">{step}</p>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </PageWithSidebar>
  );
};

export default InternalReportsPage;

