import React from "react";
import MainNewsSection from "../MainNewsSection";
import {
  type OilNewsSectionProps,
  defaultMainArticle,
  defaultSideArticles,
} from "./data";

const OilNewsSection: React.FC<OilNewsSectionProps> = ({ className = "" }) => {
  return (
    <MainNewsSection
      title="Tin dầu khí"
      viewMoreLink="/tintuc/tin-dau-khi"
      mainArticle={defaultMainArticle}
      sideArticles={defaultSideArticles}
      className={className}
    />
  );
};

export default OilNewsSection;

