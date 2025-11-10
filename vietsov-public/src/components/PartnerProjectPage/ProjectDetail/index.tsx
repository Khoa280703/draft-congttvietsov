import React from "react";
import { DetailContent } from "@/components";
import { projectDetailData, imageData } from "./data";

const ProjectDetail: React.FC = () => {
  return (
    <DetailContent
      title={projectDetailData.title}
      category={projectDetailData.category}
      status={projectDetailData.status}
      paragraphs={projectDetailData.paragraphs}
      imageSectionTitle={projectDetailData.imageSectionTitle}
      images={imageData}
    />
  );
};

export default ProjectDetail;
