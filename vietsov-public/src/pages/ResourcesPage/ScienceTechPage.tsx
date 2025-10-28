import React from "react";
import { PageWithSidebar } from "@/components";
import { ScienceTechSection } from "@/components/ResourcesPage";

const ScienceTechPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/cacnguonchung/khcn">
      <ScienceTechSection />
    </PageWithSidebar>
  );
};

export default ScienceTechPage;
