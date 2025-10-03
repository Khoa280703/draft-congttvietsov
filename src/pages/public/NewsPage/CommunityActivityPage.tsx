import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import {
  RelevantNews,
  OtherArticles,
  ArticleDetail,
} from "@/components/PublicSystem/NewsPage";

import Keywords from "@/components/Keyword";

const CommunityActivityPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/tintuc/hoat-dong-doan-the">
      <ArticleDetail />
      <Keywords
        tags={["Hoạt động đoàn thể", "Hoạt động đoàn thể"]}
        tagTextColor="green-500"
        tagColor="gray-100"
      />
      <RelevantNews />
      <OtherArticles />
    </PageWithSidebar>
  );
};

export default CommunityActivityPage;
