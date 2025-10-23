import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import { InnovationSection } from "@/components/PublicSystem/ResourcesPage";

const InnovationPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/cacnguonchung/sang-kien-sang-che">
      <InnovationSection />
    </PageWithSidebar>
  );
};

export default InnovationPage;
