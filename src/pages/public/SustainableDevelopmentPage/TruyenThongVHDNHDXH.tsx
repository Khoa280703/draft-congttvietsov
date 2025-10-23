import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import { TruyenThongVHDNHDXHSection } from "@/components/PublicSystem/SustainableDevelopmentPage";

const TruyenThongVHDNHDXH: React.FC = () => {
  return (
    <PageWithSidebar activePath="/phattrien/truyen-thong-vhdn-hdxh">
      <TruyenThongVHDNHDXHSection />
    </PageWithSidebar>
  );
};

export default TruyenThongVHDNHDXH;
