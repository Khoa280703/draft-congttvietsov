import React from "react";
import { PageWithSidebar } from "@/components";
import { ChuyenDoiSoSection } from "@/components/SustainableDevelopmentPage";

const ChuyenDoiSo: React.FC = () => {
  return (
    <PageWithSidebar activePath="/phattrien/chuyen-doi-so">
      <ChuyenDoiSoSection />
    </PageWithSidebar>
  );
};

export default ChuyenDoiSo;
