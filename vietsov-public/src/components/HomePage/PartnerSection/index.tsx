import React from "react";
import PartnerMetricsSection from "./PartnerMetricsSection";
import PartnerLogosGrid from "./PartnerLogosGrid";

const PartnerSection: React.FC = () => {
  return (
    <div className="relative">
      <PartnerMetricsSection />
      <PartnerLogosGrid />
    </div>
  );
};

export default PartnerSection;
