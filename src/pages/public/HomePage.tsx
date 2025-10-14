import {
  FeaturedProjects,
  GradientImageOverlay,
  SliderHome,
  PartnerSlider,
} from "@/components/PublicSystem/HomePage";
import {
  CoreValuesSection,
  ActivitySlider,
  SpotlightNews,
  BreakingNewsTicker,
} from "@/components/PriviteSystem/HomePage";
import AnimatedSection from "@/components/AnimatedSection";

import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section - No animation needed as it's above the fold */}
      <SliderHome />

      {/* Breaking News - Quick fade in */}
      <AnimatedSection animation="fadeIn" delay={200}>
        <BreakingNewsTicker />
      </AnimatedSection>

      {/* Core Values - Slide up from bottom */}
      <AnimatedSection animation="fadeInUp" delay={400}>
        <CoreValuesSection />
      </AnimatedSection>

      {/* Featured Projects - Slide up with slight delay */}
      <AnimatedSection animation="fadeInUp" delay={400}>
        <div className="bg-red-50">
          <FeaturedProjects />
        </div>
      </AnimatedSection>

      {/* Activity Slider - Slide up from bottom */}
      <AnimatedSection animation="fadeInUp" delay={400}>
        <div className="bg-gray-200">
          <ActivitySlider />
        </div>
      </AnimatedSection>

      {/* Spotlight News - Scale in effect */}
      <AnimatedSection animation="scaleIn" delay={400}>
        <div className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-8">
            <SpotlightNews />
          </div>
        </div>
      </AnimatedSection>

      {/* Partner Slider - Slide up from bottom */}
      <AnimatedSection animation="fadeInUp" delay={400}>
        <GradientImageOverlay imageUrl={bannerDanKhoan}>
          <PartnerSlider />
        </GradientImageOverlay>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
