import React from "react";
import { PageWithSidebar } from "@/components";
import DetailContent, { type DetailContentProps } from "../DetailContent";
import Keywords from "@/components/Keyword";

export interface ContentDetailPageProps {
  activePath: string;
  sidebarContent: React.ReactNode;
  detailContentData: DetailContentProps;
  keywords: string[];
  relevantComponent: React.ReactNode;
  otherComponent: React.ReactNode;
}

const ContentDetailPage: React.FC<ContentDetailPageProps> = ({
  activePath,
  sidebarContent,
  detailContentData,
  keywords,
  relevantComponent,
  otherComponent,
}) => {
  return (
    <>
      <PageWithSidebar activePath={activePath} sidebarContent={sidebarContent}>
        <DetailContent {...detailContentData} />
        <Keywords tags={keywords} tagTextColor="" tagColor="gray-300" />
        {relevantComponent}
      </PageWithSidebar>
      {otherComponent}
    </>
  );
};

export default ContentDetailPage;
