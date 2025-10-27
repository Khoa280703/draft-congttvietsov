import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import SustainableDevelopmentSection from "@/components/PublicSystem/SustainableDevelopmentPage/SustainableDevelopmentSection";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import { Routes, Route } from "react-router-dom";
import EmployeeOpinionPage from "./EmployeeOpinion";
import ATSKMTPage from "./ATSKMT";
import TruyenThongVHDNHDXHPage from "./TruyenThongVHDNHDXH";
import ChuyenDoiSoPage from "./ChuyenDoiSo";

const SustainableDevelopmentPage: React.FC = () => {
  const getBreadcrumbs = () => {
    switch (location.pathname) {
      case "/phattrien":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Phát Triển Bền Vững" },
        ];
      case "/phattrien/y-kien-nguoi-lao-dong":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Phát Triển Bền Vững" },
          { label: "Ý kiến người lao động" },
        ];
      case "/phattrien/atskmt":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Phát Triển Bền Vững" },
          { label: "An toàn sức khoẻ môi trường" },
        ];
      case "/phattrien/truyen-thong-vhdn-hdxh":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Phát Triển Bền Vững" },
          { label: "Truyền thông VHDN/HDXH" },
        ];
      case "/phattrien/chuyen-doi-so":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Phát Triển Bền Vững" },
          { label: "Chuyển đổi số" },
        ];
      default:
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Phát Triển Bền Vững" },
        ];
    }
  };

  return (
    <>
      <PageHeader
        title="Phát Triển Bền Vững"
        backgroundImage={danKhoanBackground}
        breadcrumbs={getBreadcrumbs()}
      />
      <Routes>
        <Route path="/" element={<SustainableDevelopmentSection />} />
        <Route
          path="/y-kien-nguoi-lao-dong"
          element={<EmployeeOpinionPage />}
        />
        <Route path="/atskmt" element={<ATSKMTPage />} />
        <Route
          path="/truyen-thong-vhdn-hdxh"
          element={<TruyenThongVHDNHDXHPage />}
        />
        <Route path="/chuyen-doi-so" element={<ChuyenDoiSoPage />} />
      </Routes>
    </>
  );
};

export default SustainableDevelopmentPage;
