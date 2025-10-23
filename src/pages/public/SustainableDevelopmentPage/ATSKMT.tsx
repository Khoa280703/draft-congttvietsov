import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import { ATSKMTSection } from "@/components/PublicSystem/SustainableDevelopmentPage";

const ATSKMT: React.FC = () => {
  return (
    <PageWithSidebar activePath="/phattrien/atskmt">
      <ATSKMTSection />
    </PageWithSidebar>
  );
};

export default ATSKMT;
