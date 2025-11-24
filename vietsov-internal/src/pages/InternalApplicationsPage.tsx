import React from "react";
import { PageWithSidebar } from "@/components";

const applicationCatalog = [
  {
    title: "Điều hành sản xuất",
    description: "Giám sát realtime, lịch bảo dưỡng và phân công nguồn lực.",
    tools: ["Svodka", "OMS Dashboard", "Maintenance Planner", "Inspection 4.0"],
    accent: "bg-vietsov-green/10 text-vietsov-green",
  },
  {
    title: "Quản trị doanh nghiệp",
    description: "Quy trình văn bản, phê duyệt ngân sách và quản lý hợp đồng.",
    tools: ["eOffice", "Oracle ERP", "DocuSign", "Contract Hub"],
    accent: "bg-vietsov-yellow/20 text-vietsov-yellow-800",
  },
  {
    title: "Nhân sự & cộng tác",
    description: "Thông tin nhân sự, đào tạo, lịch công tác và trao đổi nội bộ.",
    tools: ["Nhansu.vietso.com", "LMS", "Meeting Planner", "Wellness App"],
    accent: "bg-blue-100 text-blue-700",
  },
];

const quickLinks = [
  { label: "Trung tâm trợ giúp", detail: "support@vietso.com" },
  { label: "Đăng ký quyền truy cập", detail: "itrequest@vietso.com" },
  { label: "Lịch bảo trì hệ thống", detail: "Thứ 7 hàng tuần · 22:00 - 03:00" },
];

const InternalApplicationsPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/internal/ungdung">
      <div className="space-y-12 md:space-y-14 lg:space-y-16">
        <header className="text-center space-y-4">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-vietsov-green">
            Hệ sinh thái ứng dụng nội bộ
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl laptop:text-5xl fhd:text-6xl font-bold text-vietsov-black">
            Công cụ số hóa vận hành Vietsovpetro
          </h1>
          <p className="text-base md:text-lg text-vietsov-light-gray max-w-4xl mx-auto">
            Truy cập nhanh các ứng dụng cốt lõi cho điều hành sản xuất, quản trị doanh nghiệp và cộng tác nội bộ.
          </p>
        </header>

        <section className="grid grid-cols-1 laptop:grid-cols-3 gap-6 md:gap-8">
          {applicationCatalog.map((app) => (
            <article
              key={app.title}
              className="p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm bg-white flex flex-col gap-4"
            >
              <span className={`px-4 py-1 rounded-full text-xs font-semibold w-fit ${app.accent}`}>
                {app.title}
              </span>
              <p className="text-sm md:text-base text-vietsov-light-gray">{app.description}</p>
              <div className="flex flex-wrap gap-2">
                {app.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs md:text-sm px-3 py-1 rounded-full bg-gray-100 text-vietsov-black/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <button className="mt-auto text-sm font-medium text-vietsov-green">
                Mở không gian làm việc →
              </button>
            </article>
          ))}
        </section>

        <section className="rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm border border-vietsov-green/20 bg-gradient-to-br from-vietsov-green/10 via-white to-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-vietsov-green">
                Trợ giúp & hỗ trợ
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-vietsov-black">
                Trung tâm dịch vụ CNTT
              </h2>
            </div>
            <button className="px-4 py-2 rounded-full bg-vietsov-green text-white text-sm font-medium">
              Tạo yêu cầu mới
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <div
                key={link.label}
                className="p-4 rounded-2xl bg-white border border-vietsov-green/20 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-vietsov-green">
                  {link.label}
                </p>
                <p className="text-sm md:text-base font-medium mt-2 text-vietsov-black">
                  {link.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWithSidebar>
  );
};

export default InternalApplicationsPage;

