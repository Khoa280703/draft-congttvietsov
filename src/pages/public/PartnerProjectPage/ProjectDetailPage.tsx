import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import { ProjectDetail } from "@/components/PublicSystem/PartnerProjectPage";
import { Keyword } from "@/components";
import {
  RelevantProjects,
  OtherProjects,
  MostView,
} from "@/components/PublicSystem/PartnerProjectPage";

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
