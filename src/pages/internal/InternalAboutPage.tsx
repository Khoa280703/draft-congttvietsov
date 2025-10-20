import React from "react";
import { IntroductionSection } from "@/components/PublicSystem/AboutPage";
import {
  CoreValuesSection,
  OrgStructureSection,
} from "@/components/PublicSystem/AboutPage";
import { LeadershipSection } from "@/components/PriviteSystem/AboutPage";

const InternalAboutPage: React.FC = () => {
  return (
    <>
      <IntroductionSection />
      <div className="bg-gray-100">
        <CoreValuesSection />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Cơ cấu tổ chức
        </h2>
        <OrgStructureSection />
      </div>
      <div className="bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Ban lãnh đạo
          </h2>
          <LeadershipSection />
        </div>
      </div>
    </>
  );
};

export default InternalAboutPage;
