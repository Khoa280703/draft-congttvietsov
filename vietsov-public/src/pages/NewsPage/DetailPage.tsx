import React from "react";
import { PageWithSidebar } from "@/components";
import {
  RelevantNews,
  OtherArticles,
  ArticleDetail,
  MostView,
} from "@/components/NewsPage";

import Keywords from "@/components/Keyword";

const DetailPage: React.FC = () => {
  return (
    <>
      <PageWithSidebar
        activePath="/tintuc/hoat-dong-doan-the"
        sidebarContent={<MostView />}
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
