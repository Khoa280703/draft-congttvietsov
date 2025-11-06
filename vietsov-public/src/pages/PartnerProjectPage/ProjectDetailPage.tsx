import React from "react";
import ContentDetailPage from "@/components/Shared/ContentDetailPage";
import { RelevantNews, OtherArticles, MostView } from "@/components/NewsPage";
import {
  projectDetailData,
  imageData,
} from "@/components/PartnerProjectPage/ProjectDetail/data";

const ProjectDetailPage: React.FC = () => {
  return (
    <ContentDetailPage
      activePath="/doitac-duan/du-an"
      sidebarContent={<MostView />}
      detailContentData={{
        title: projectDetailData.title,
        category: projectDetailData.category,
        status: projectDetailData.status,
        paragraphs: projectDetailData.paragraphs,
        imageSectionTitle: projectDetailData.imageSectionTitle,
        images: imageData,
      }}
      keywords={["Dự án dầu khí", "Khai thác", "Năng lượng", "Môi trường"]}
      relevantComponent={<RelevantNews />}
      otherComponent={<OtherArticles />}
    />
  );
};

export default ProjectDetailPage;
