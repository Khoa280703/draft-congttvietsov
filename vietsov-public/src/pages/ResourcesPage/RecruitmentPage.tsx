import React from "react";
import { PageWithSidebar } from "@/components";
import { RecruitmentSection } from "@/components/ResourcesPage";

const RecruitmentPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/cacnguonchung/tuyen-dung-va-tuyen-sinh">
      <RecruitmentSection />
    </PageWithSidebar>
  );
};

export default RecruitmentPage;
