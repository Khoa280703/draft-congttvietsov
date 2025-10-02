import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import { RecruitmentSection } from "@/components/PublicSystem/RecruitmentPage";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";
import { PageWithSidebar } from "@/components/PublicSystem";

const RecruitmentPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Tuyển dụng"
        backgroundImage={bannerDanKhoan}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tuyển dụng" },
        ]}
      />
      <PageWithSidebar activePath="/tuyendung">
        <RecruitmentSection />
      </PageWithSidebar>
    </>
  );
};

export default RecruitmentPage;
