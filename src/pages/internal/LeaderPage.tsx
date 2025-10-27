import React from "react";
import { PageHeader } from "@/components/PublicSystem";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import { LeadershipSection } from "@/components/PublicSystem/AboutPage";
import AnimatedSection from "@/components/AnimatedSection";

const LeaderPage: React.FC = () => {
  const getBreadcrumbs = () => [
    { label: "Trang chủ", href: "/internal" },
    { label: "Giới thiệu", href: "/internal/gioithieu" },
    { label: "Ban lãnh đạo" },
  ];

  return (
    <>
      <PageHeader
        title="Ban lãnh đạo"
        backgroundImage={danKhoanBackground}
        breadcrumbs={getBreadcrumbs()}
      />

      <div className="bg-vietsov-background">
        <AnimatedSection animation="fadeInUp" delay={100}>
          <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Ban lãnh đạo
              </h2>
            </div>
            <LeadershipSection />
          </section>
        </AnimatedSection>
      </div>
    </>
  );
};

export default LeaderPage;
