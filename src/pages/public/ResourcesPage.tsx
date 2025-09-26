import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import {
  LandingUnits,
  FacilitiesEquipment,
} from "@/components/PublicSystem/ResourcesPage";

const ResourcesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Nguồn lực"
        backgroundImage="/api/placeholder/1920/400"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Nguồn lực" },
        ]}
      />
      <LandingUnits />
      <FacilitiesEquipment />
    </>
  );
};

export default ResourcesPage;
