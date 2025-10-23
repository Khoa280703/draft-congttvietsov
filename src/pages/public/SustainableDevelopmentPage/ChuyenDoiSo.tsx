import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import { ChuyenDoiSoSection } from "@/components/PublicSystem/SustainableDevelopmentPage";

const ChuyenDoiSo: React.FC = () => {
  return (
    <PageWithSidebar activePath="/phattrien/chuyen-doi-so">
      <ChuyenDoiSoSection />
    </PageWithSidebar>
  );
};

export default ChuyenDoiSo;
