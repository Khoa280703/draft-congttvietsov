import React from "react";
import { PageHeader } from "@/components/PublicSystem";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";
import {
  JointVentureSection,
  HistorySection,
  GeneralIntro,
  OrgStructureSection,
  LeadershipSection,
  AchievementsSection,
  CapabilitiesSection,
  ArchivePhotos,
} from "@/components/PublicSystem/AboutPage";

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Về chúng tôi"
        backgroundImage={bannerDanKhoan}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Giới thiệu" },
        ]}
      />
      <JointVentureSection />
      <HistorySection />
      <GeneralIntro />
      <OrgStructureSection />
      <LeadershipSection />
      <AchievementsSection />
      <CapabilitiesSection />
      <ArchivePhotos />
    </>
  );
};

export default AboutPage;
