import React from "react";
import { PageWithSidebar } from "@/components";
import { TrainingSection } from "@/components/ResourcesPage";

const TrainingPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/cacnguonchung/dao-tao">
      <TrainingSection />
    </PageWithSidebar>
  );
};

export default TrainingPage;
