import React from "react";
import { PageWithSidebar } from "@/components";
import { EmployeeOpinionForm } from "@/components/SustainableDevelopmentPage";

const EmployeeOpinion: React.FC = () => {
  return (
    <PageWithSidebar activePath="/phattrien/y-kien-nguoi-lao-dong">
      <EmployeeOpinionForm />
    </PageWithSidebar>
  );
};

export default EmployeeOpinion;
