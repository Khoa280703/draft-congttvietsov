import {
  FeaturedProjects,
  GradientImageOverlay,
  SliderHome,
} from "@/components/PublicSystem/HomePage";
import {
  CoreValuesSection,
  ActivitySlider,
  SpotlightNews,
  BreakingNewsTicker,
} from "@/components/PriviteSystem/HomePage";

import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const HomePage: React.FC = () => {
  return (
    <div>
      <SliderHome />
      <BreakingNewsTicker />
      <CoreValuesSection />
      <div className="bg-red-50">
        <FeaturedProjects />
      </div>
      <div className="bg-gray-200">
        <ActivitySlider />
      </div>
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-8">
          <SpotlightNews />
        </div>
      </div>
      <GradientImageOverlay imageUrl={bannerDanKhoan} />
    </div>
  );
};

export default HomePage;
