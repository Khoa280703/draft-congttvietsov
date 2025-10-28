import React from "react";
import { PageWithSidebar } from "@/components";
import { ProjectDetail } from "@/components/PartnerProjectPage";
import { Keyword } from "@/components";
import {
  RelevantProjects,
  OtherProjects,
  MostView,
} from "@/components/PartnerProjectPage";

const ProjectDetailPage: React.FC = () => {
  return (
    <>
      <PageWithSidebar
        activePath="/doitac-duan/du-an"
        sidebarContent={<MostView />}
      >
        <ProjectDetail />
        <Keyword
          tags={["Dự án dầu khí", "Khai thác", "Năng lượng", "Môi trường"]}
          tagTextColor="green-500"
          tagColor="gray-100"
        />
        <RelevantProjects />
      </PageWithSidebar>
      <OtherProjects />
    </>
  );
};

export default ProjectDetailPage;
