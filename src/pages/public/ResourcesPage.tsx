import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import {
  LandingUnits,
  FacilitiesEquipment,
} from "@/components/PublicSystem/ResourcesPage";
import hoinghicongtacpvn from "@/assets/hoinghicongtacpvn.jpg";

const ResourcesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Nguồn lực"
        backgroundImage={hoinghicongtacpvn}
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
