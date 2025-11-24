import React from "react";
import {
  FeaturedProjectSlider,
  defaultFeaturedProjects,
} from "@/components/Shared";

const productionReports = [
  {
    title: "Báo cáo khai thác hằng ngày",
    owner: "Ban Sản xuất",
    frequency: "Daily",
  },
  {
    title: "Báo cáo sản lượng tháng",
    owner: "Ban Điều độ",
    frequency: "Monthly",
  },
  { title: "Báo cáo KPI an toàn", owner: "Phòng ATSKMT", frequency: "Weekly" },
];

const managementReports = [
  {
    title: "Báo cáo quản trị chi phí",
    owner: "Khối Tài chính",
    frequency: "Monthly",
  },
  { title: "Báo cáo tiến độ dự án", owner: "Ban Dự án", frequency: "Weekly" },
  {
    title: "Báo cáo nhân sự tổng hợp",
    owner: "Phòng Tổ chức",
    frequency: "Quarterly",
  },
];

const applicationSpaces = [
  {
    title: "Ứng dụng điều hành",
    items: [
      "eOffice - Văn bản điện tử",
      "Portal KPI - Theo dõi chỉ số",
      "Svodka - Chỉ huy khai thác",
    ],
  },
  {
    title: "Ứng dụng tác nghiệp",
    items: [
      "Oracle ERP - Nguồn lực doanh nghiệp",
      "Nhansu.vietso.com - Quản lý nhân sự",
      "Tickets - Hỗ trợ kỹ thuật",
    ],
  },
  {
    title: "Ứng dụng dữ liệu",
    items: [
      "Data Lake - Kho dữ liệu ngành",
      "BI Dashboards - Báo cáo tương tác",
      "Asset 360 - Tài sản thiết bị",
    ],
  },
];

const InternalSearchPage: React.FC = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 py-8 md:py-12 lg:py-14 laptop:py-16 fhd:py-20 qhd:py-24 space-y-12 md:space-y-14 lg:space-y-16 laptop:space-y-20 fhd:space-y-24 qhd:space-y-28 bg-vietsov-background">
      <div className="max-w-screen-xl mx-auto space-y-12 md:space-y-14 lg:space-y-16 laptop:space-y-20 fhd:space-y-24 qhd:space-y-28">
        {/* Báo cáo trung tâm */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 lg:p-10 laptop:p-12 fhd:p-16 qhd:p-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
            <div>
              <p className="text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] text-vietsov-green mb-2">
                Trung tâm báo cáo
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-4xl laptop:text-5xl font-semibold text-vietsov-black">
                Báo cáo sản xuất & quản trị
              </h2>
            </div>
            <div className="text-sm md:text-base text-vietsov-light-gray">
              Tổng hợp realtime từ các ban chức năng · Cập nhật tự động
            </div>
          </div>
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-vietsov-background rounded-2xl p-5 md:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-vietsov-light-gray">
                  Báo cáo sản xuất
                </span>
                <span className="text-xs text-vietsov-green">Realtime</span>
              </div>
              <div className="space-y-4">
                {productionReports.map((report) => (
                  <div
                    key={report.title}
                    className="p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-vietsov-black">
                      {report.title}
                    </h3>
                    <p className="text-xs md:text-sm text-vietsov-light-gray mt-1">
                      {report.owner} · {report.frequency}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-950 text-white rounded-2xl p-5 md:p-6 lg:p-8 border border-gray-800 shadow-inner">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-vietsov-light-gray">
                  Báo cáo quản trị
                </span>
                <span className="text-xs text-vietsov-yellow">Insight</span>
              </div>
              <div className="space-y-4">
                {managementReports.map((report) => (
                  <div
                    key={report.title}
                    className="p-4 rounded-xl border border-white/15 bg-white/5"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {report.title}
                    </h3>
                    <p className="text-xs md:text-sm text-vietsov-light-gray mt-1">
                      {report.owner} · {report.frequency}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hình ảnh tư liệu */}
        <section>
          <FeaturedProjectSlider
            projects={defaultFeaturedProjects}
            title="Hình ảnh tư liệu"
            seeMoreLink="/tintuc/thu-vien-anh-video"
            isLightMode={true}
          />
        </section>

        {/* Ứng dụng */}
        <section className="rounded-3xl shadow-sm border border-vietsov-green/20 bg-gradient-to-br from-vietsov-green/10 via-white to-white p-6 md:p-8 lg:p-10 laptop:p-12 fhd:p-16 qhd:p-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
            <div>
              <p className="text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] text-vietsov-green mb-2">
                Hệ sinh thái ứng dụng
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-4xl laptop:text-5xl font-semibold text-vietsov-black">
                Công cụ nội bộ Vietsovpetro
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-6 md:gap-8">
            {applicationSpaces.map((app) => (
              <div
                key={app.title}
                className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white"
              >
                <h3 className="text-lg md:text-xl font-semibold text-vietsov-black mb-4">
                  {app.title}
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-vietsov-black/80">
                  {app.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-vietsov-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default InternalSearchPage;
