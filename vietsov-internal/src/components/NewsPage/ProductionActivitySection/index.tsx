import React from "react";
import MainNewsSection from "../MainNewsSection";
import {
  type ProductionActivitySectionProps,
  defaultMainArticle,
  defaultSideArticles,
} from "./data";

const ProductionActivitySection: React.FC<ProductionActivitySectionProps> = ({
  className = "",
}) => {
  return (
    <MainNewsSection
      title="Hoạt động sản xuất"
      viewMoreLink="/tintuc/hoat-dong-sx-kd"
      mainArticle={defaultMainArticle}
      sideArticles={defaultSideArticles}
      className={className}
    />
  );
};

export default ProductionActivitySection;

