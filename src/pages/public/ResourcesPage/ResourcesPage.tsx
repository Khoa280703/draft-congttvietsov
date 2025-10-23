import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import { LandingUnits } from "@/components/PublicSystem/ResourcesPage";
import hoinghicongtacpvn from "@/assets/hoinghicongtacpvn.jpg";
import { Routes, Route, useLocation } from "react-router-dom";
import RecruitmentPage from "./RecruitmentPage";
import TrainingPage from "./TrainingPage";
import ScienceTechPage from "./ScienceTechPage";
import InnovationPage from "./InnovationPage";

const ResourcesPage: React.FC = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    switch (location.pathname) {
      case "/cacnguonchung":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Các Nguồn Chung" },
        ];
      case "/cacnguonchung/dao-tao":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Các Nguồn Chung", href: "/cacnguonchung" },
          { label: "Đào tạo" },
        ];
      case "/cacnguonchung/khcn":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Các Nguồn Chung", href: "/cacnguonchung" },
          { label: "Khoa học - công nghệ" },
        ];
      case "/cacnguonchung/sang-kien-sang-che":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Các Nguồn Chung", href: "/cacnguonchung" },
          { label: "Sáng kiến - sáng chế" },
        ];
      case "/cacnguonchung/tuyen-dung-va-tuyen-sinh":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Các Nguồn Chung", href: "/cacnguonchung" },
          { label: "Tuyển dụng và tuyển sinh" },
        ];
      default:
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Các Nguồn Chung" },
        ];
    }
  };

  return (
    <>
      <PageHeader
        title="Các Nguồn Chung"
        backgroundImage={hoinghicongtacpvn}
        breadcrumbs={getBreadcrumbs()}
      />
      <Routes>
        <Route path="/" element={<LandingUnits />} />
        <Route path="/dao-tao" element={<TrainingPage />} />
        <Route path="/khcn" element={<ScienceTechPage />} />
        <Route path="/sang-kien-sang-che" element={<InnovationPage />} />
        <Route path="/tuyen-dung-va-tuyen-sinh" element={<RecruitmentPage />} />
      </Routes>
    </>
  );
};

export default ResourcesPage;
