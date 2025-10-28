import React from "react";
import { PageWithSidebar } from "@/components";
import { InnovationSection } from "@/components/ResourcesPage";

const InnovationPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/cacnguonchung/sang-kien-sang-che">
      <InnovationSection />
    </PageWithSidebar>
  );
};

export default InnovationPage;
