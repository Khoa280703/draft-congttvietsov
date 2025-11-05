import {
  SliderHome,
  PartnerSection,
  VisionMission,
  TypicalProjects,
  PetroNews,
} from "@/components/HomePage";
import { CapabilitiesSection } from "@/components/AboutPage";
import { SectionWithTitle } from "@/components";
// import { BreakingNewsSlider } from "@/components/PriviteSystem/HomePage";
import AnimatedSection from "@/components/AnimatedSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <SliderHome basePath="public" />
      <AnimatedSection
        animation="fadeInUp"
        delay={100}
        className="bg-vietsov-background2"
      >
        <SectionWithTitle
          title="Tầm nhìn – Sứ mệnh"
          description="Doanh nghiệp dầu khí và năng lượng hàng đầu khu vực, phát triển bền vững và tiên phong trong chuyển đổi năng lượng, đồng thời khai thác hiệu quả tài nguyên."
          sectionClassName="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-16 lg:pb-16 inch32:pt-22 inch32:pb-15"
        >
          <VisionMission />
        </SectionWithTitle>
      </AnimatedSection>

      <AnimatedSection
        animation="fadeInUp"
        delay={100}
        className="bg-vietsov-background"
      >
        <SectionWithTitle
          title="Lĩnh Vực Hoạt Động"
          sectionClassName="py-8 md:py-12 lg:py-16 inch32:py-15"
        >
          <CapabilitiesSection />
        </SectionWithTitle>
      </AnimatedSection>

      <AnimatedSection
        animation="fadeInUp"
        delay={100}
        className="bg-vietsov-background2"
      >
        <div className="bg-white">
          <SectionWithTitle
            title="Dự án tiêu biểu"
            sectionClassName="py-8 md:py-12 lg:py-16 inch32:py-15"
          >
            <TypicalProjects />
          </SectionWithTitle>
        </div>
      </AnimatedSection>

      {/* Petro News Section */}
      <AnimatedSection
        animation="fadeInUp"
        delay={100}
        className="bg-vietsov-background"
      >
        <SectionWithTitle
          title="Tin tức Dầu khí"
          sectionClassName="py-8 md:py-12 lg:pt-16 lg:pb-16 inch32:py-15"
        >
          <PetroNews />
        </SectionWithTitle>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={100}>
        <div className="pb-12 md:pb-16 lg:pb-20 inch32:pb-24">
          <PartnerSection />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
