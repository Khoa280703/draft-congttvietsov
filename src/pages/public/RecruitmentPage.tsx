import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import { RecruitmentSection } from "@/components/PublicSystem/RecruitmentPage";
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
      <RecruitmentSection />
    </>
  );
};

export default RecruitmentPage;
