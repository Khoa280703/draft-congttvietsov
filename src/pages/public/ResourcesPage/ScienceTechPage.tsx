import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import { ScienceTechSection } from "@/components/PublicSystem/ResourcesPage";

const ScienceTechPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/cacnguonchung/khcn">
      <ScienceTechSection />
    </PageWithSidebar>
  );
};

export default ScienceTechPage;
