import React from "react";
import { PageWithSidebar } from "@/components/PublicSystem";
import { EmployeeOpinionForm } from "@/components/PublicSystem/SustainableDevelopmentPage";

const EmployeeOpinion: React.FC = () => {
  return (
    <PageWithSidebar activePath="/phattrien/y-kien-nguoi-lao-dong">
      <EmployeeOpinionForm />
    </PageWithSidebar>
  );
};

export default EmployeeOpinion;
