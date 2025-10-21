import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import {
  RelevantNews,
  OtherArticles,
  ArticleDetail,
  NewsSidebar,
} from "@/components/PublicSystem/NewsPage";

import Keywords from "@/components/Keyword";

const DetailPage: React.FC = () => {
  return (
    <>
      <PageWithSidebar
        activePath="/tintuc/hoat-dong-doan-the"
        sidebarContent={<NewsSidebar activePath="/tintuc/hoat-dong-doan-the" />}
      >
        <ArticleDetail />
        <Keywords
          tags={["Hoạt động đoàn thể", "Hoạt động đoàn thể"]}
          tagTextColor="green-500"
          tagColor="gray-100"
        />
        <RelevantNews />
      </PageWithSidebar>
      <OtherArticles />
    </>
  );
};

export default DetailPage;
