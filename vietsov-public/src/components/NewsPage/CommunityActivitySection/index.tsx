import React from "react";
import NewsGridSection from "../NewsGridSection";
import {
  type CommunityActivitySectionProps,
  defaultCommunityActivityData,
} from "./data";

const CommunityActivitySection: React.FC<CommunityActivitySectionProps> = ({
  className = "",
}) => {
  return (
    <NewsGridSection
      title="Hoạt động đoàn thể"
      viewMoreLink="/tintuc/hoat-dong-doan-the"
      articles={defaultCommunityActivityData}
      className={className}
    />
  );
};

export default CommunityActivitySection;
