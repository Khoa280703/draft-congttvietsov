import React from "react";
import { PageWithSidebar } from "@/components";
import {
  LeadershipPage,
  OrgStructureSection,
} from "@/components/AboutPage";

const LeaderPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/gioithieu/ban-lanh-dao">
      <LeadershipPage className="mb-12" />
      <OrgStructureSection />
    </PageWithSidebar>
  );
};

export default LeaderPage;
