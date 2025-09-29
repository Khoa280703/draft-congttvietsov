import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageHeader } from "@/components/PublicSystem";
import {
  EngineeringExploitationEnterprise,
  LandingUnits,
} from "@/components/PublicSystem/UnitsPage";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const UnitsPage: React.FC = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    if (location.pathname === "/donvi") {
      return [
        { label: "Trang chủ", href: "/" },
        { label: "Đơn vị trực thuộc" },
      ];
    } else if (location.pathname === "/donvi/xinghiep-khai-thac-cong-trinh") {
      return [
        { label: "Trang chủ", href: "/" },
        { label: "Đơn vị trực thuộc", href: "/donvi" },
        { label: "Xí nghiệp khai thác công trình" },
      ];
    }
    return [{ label: "Trang chủ", href: "/" }, { label: "Đơn vị trực thuộc" }];
  };

  const getPageTitle = () => {
    if (location.pathname === "/donvi/xinghiep-khai-thac-cong-trinh") {
      return "Xí nghiệp khai thác công trình";
    }
    return "Đơn vị trực thuộc";
  };

  return (
    <>
      <PageHeader
        title={getPageTitle()}
        backgroundImage={bannerDanKhoan}
        breadcrumbs={getBreadcrumbs()}
      />

      <Routes>
        <Route path="/" element={<LandingUnits />} />
        <Route
          path="/xinghiep-khai-thac-cong-trinh"
          element={<EngineeringExploitationEnterprise />}
        />
      </Routes>
    </>
  );
};

export default UnitsPage;
