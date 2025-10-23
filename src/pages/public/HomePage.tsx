import {
  GradientImageOverlay,
  SliderHome,
  PartnerSlider,
  VisionMission,
  TypicalProjects,
  PetroNews,
} from "@/components/PublicSystem/HomePage";
import { CapabilitiesSection } from "@/components/PublicSystem/AboutPage";
// import { BreakingNewsSlider } from "@/components/PriviteSystem/HomePage";
import AnimatedSection from "@/components/AnimatedSection";

import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const HomePage: React.FC = () => {
  return (
    <div className="bg-vietsov-background">
      <SliderHome basePath="public" />

      {/* <AnimatedSection animation="fadeIn" delay={100}>
        <BreakingNewsSlider basePath="public" />
      </AnimatedSection> */}

      <AnimatedSection animation="fadeInUp" delay={100}>
        <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Tầm nhìn – Sứ mệnh
            </h2>
            <p className="text-base md:text-base font-normal leading-relaxed max-w-4xl mx-auto">
              Doanh nghiệp dầu khí và năng lượng hàng đầu khu vực, phát triển
              bền vững và tiên phong trong chuyển đổi năng lượng, đồng thời khai
              thác hiệu quả tài nguyên.
            </p>
          </div>
          <div className="flex items-center justify-center min-h-[600px]">
            <VisionMission />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={100}>
        <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Lĩnh Vực Hoạt Động
            </h2>
          </div>
          <CapabilitiesSection />
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={100}>
        <div className="bg-white">
          <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Dự án tiêu biểu
              </h2>
            </div>
            <TypicalProjects />
          </section>
        </div>
      </AnimatedSection>

      {/* Petro News Section */}
      <AnimatedSection animation="fadeInUp" delay={100}>
        <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Tin tức Dầu khí
            </h2>
          </div>
          <PetroNews />
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={100}>
        <GradientImageOverlay imageUrl={bannerDanKhoan}></GradientImageOverlay>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={100}>
        <div className="py-8 md:py-16 container mx-auto px-4 md:px-12">
          <PartnerSlider />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
