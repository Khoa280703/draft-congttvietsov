import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import { TrainingSection } from "@/components/PublicSystem/ResourcesPage";

const TrainingPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/cacnguonchung/dao-tao">
      <TrainingSection />
    </PageWithSidebar>
  );
};

export default TrainingPage;
