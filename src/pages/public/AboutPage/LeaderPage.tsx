import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import {
  LeadershipPage,
  OrgStructureSection,
} from "@/components/PublicSystem/AboutPage";

const LeaderPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/gioithieu/ban-lanh-dao">
      <LeadershipPage className="mb-12" />
      <OrgStructureSection />
    </PageWithSidebar>
  );
};

export default LeaderPage;
