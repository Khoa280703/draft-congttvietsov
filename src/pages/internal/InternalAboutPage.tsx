import React from "react";
import { IntroductionSection } from "@/components/PublicSystem/AboutPage";
import { CoreValuesSection } from "@/components/PriviteSystem/HomePage";
import { OrganizationStructure } from "@/components/PriviteSystem/AboutPage";

const InternalAboutPage: React.FC = () => {
  return (
    <>
      <IntroductionSection />
      <CoreValuesSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Cơ cấu tổ chức
        </h2>
        <OrganizationStructure />
      </div>
    </>
  );
};

export default InternalAboutPage;
