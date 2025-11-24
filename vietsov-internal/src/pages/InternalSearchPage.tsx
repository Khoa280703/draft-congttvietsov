import React from "react";
import {
  FeaturedProjectSlider,
  defaultFeaturedProjects,
} from "@/components/Shared";

const InternalSearchPage: React.FC = () => {
  return (
    <div className="mt-8 md:mt-10 lg:mt-12 laptop:mt-16 fhd:mt-20 qhd:mt-24">
      <FeaturedProjectSlider
        projects={defaultFeaturedProjects}
        title="Hình ảnh tư liệu"
        seeMoreLink="/tintuc/thu-vien-anh-video"
        isLightMode={true}
      />
    </div>
  );
};

export default InternalSearchPage;
