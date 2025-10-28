import React from "react";
import { PageWithSidebar } from "@/components";
import { ATSKMTSection } from "@/components/SustainableDevelopmentPage";

const ATSKMT: React.FC = () => {
  return (
    <PageWithSidebar activePath="/phattrien/atskmt">
      <ATSKMTSection />
    </PageWithSidebar>
  );
};

export default ATSKMT;
