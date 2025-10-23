import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import { RecruitmentSection } from "@/components/PublicSystem/ResourcesPage";

const RecruitmentPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/cacnguonchung/tuyen-dung-va-tuyen-sinh">
      <RecruitmentSection />
    </PageWithSidebar>
  );
};

export default RecruitmentPage;
