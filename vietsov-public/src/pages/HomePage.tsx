import {
  GradientImageOverlay,
  SliderHome,
  PartnerSlider,
  VisionMission,
  TypicalProjects,
  PetroNews,
} from "@/components/HomePage";
import { CapabilitiesSection } from "@/components/AboutPage";
// import { BreakingNewsSlider } from "@/components/PriviteSystem/HomePage";
import AnimatedSection from "@/components/AnimatedSection";

import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const HomePage: React.FC = () => {
  return (
    <div>
      <SliderHome basePath="public" />
      <AnimatedSection
        animation="fadeInUp"
        delay={100}
        className="bg-vietsov-background2"
      >
        <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 inch32:pt-22 inch32:pb-15 px-4 md:px-12 lg:px-60 inch32:px-80">
          <div className="text-center mb-8 md:mb-12 lg:mb-10 inch32:mb-15">
            <h2 className="text-3xl md:text-4xl lg:text-4xl inch32:text-5xl font-bold mb-4 md:mb-5 lg:mb-4 inch32:mb-6 leading-none tracking-[-0.008em]">
              Tầm nhìn – Sứ mệnh
            </h2>
            <p className="text-base md:text-base lg:text-sm inch32:text-base font-normal leading-relaxed max-w-4xl lg:max-w-3xl inch32:max-w-4xl mx-auto px-4 lg:px-0">
              Doanh nghiệp dầu khí và năng lượng hàng đầu khu vực, phát triển
              bền vững và tiên phong trong chuyển đổi năng lượng, đồng thời khai
              thác hiệu quả tài nguyên.
            </p>
          </div>
          <div className="flex items-center justify-center min-h-[400px] md:min-h-[450px] lg:min-h-[400px] inch32:min-h-[500px]">
            <VisionMission />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection
        animation="fadeInUp"
        delay={100}
        className="bg-vietsov-background"
      >
        <section className="py-8 md:py-12 lg:py-10 inch32:py-15 px-4 md:px-12 lg:px-60 inch32:px-80">
          <div className="text-center mb-8 md:mb-12 lg:mb-10 inch32:mb-15">
            <h2 className="text-3xl md:text-4xl lg:text-4xl inch32:text-5xl font-bold leading-none tracking-[-0.008em]">
              Lĩnh Vực Hoạt Động
            </h2>
          </div>
          <CapabilitiesSection />
        </section>
      </AnimatedSection>

      <AnimatedSection
        animation="fadeInUp"
        delay={100}
        className="bg-vietsov-background2"
      >
        <div className="bg-white">
          <section className="py-8 md:py-12 lg:py-10 inch32:py-15 px-4 md:px-12 lg:px-60 inch32:px-80">
            <div className="text-center mb-8 md:mb-12 lg:mb-10 inch32:mb-15">
              <h2 className="text-3xl md:text-4xl lg:text-4xl inch32:text-5xl font-bold">
                Dự án tiêu biểu
              </h2>
            </div>
            <TypicalProjects />
          </section>
        </div>
      </AnimatedSection>

      {/* Petro News Section */}
      <AnimatedSection
        animation="fadeInUp"
        delay={100}
        className="bg-vietsov-background"
      >
        <section className="py-8 md:py-12 lg:py-10 inch32:py-15 px-4 md:px-12 lg:px-60 inch32:px-80">
          <div className="text-center mb-8 md:mb-12 lg:mb-10 inch32:mb-15">
            <h2 className="text-3xl md:text-4xl lg:text-4xl inch32:text-5xl font-bold">
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
        <div className="py-8 md:py-12 lg:py-10 inch32:py-15 px-4 md:px-12 lg:px-60 inch32:px-80">
          <PartnerSlider />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
