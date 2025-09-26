import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import { RecruitmentSection } from "@/components/PublicSystem/RecruitmentPage";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

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
      <RecruitmentSection />
    </>
  );
};

export default RecruitmentPage;
