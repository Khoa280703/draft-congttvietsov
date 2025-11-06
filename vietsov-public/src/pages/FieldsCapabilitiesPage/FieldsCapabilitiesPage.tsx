import React from "react";
import PageHeader from "@/components/PageHeader";
import { FieldsCapabilitiesSection } from "@/components/FieldsCapabilitiesPage";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import { Routes, Route, useLocation } from "react-router-dom";
import ThamDo from "./ThamDo";
import TimKiem from "./TimKiem";
import KhaiThac from "./KhaiThac";

const FieldsCapabilitiesPage: React.FC = () => {
  const location = useLocation();
  const getBreadcrumbs = () => {
    switch (location.pathname) {
      case "/linhvuc-nangluc":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Lĩnh Vực & Năng Lực Hoạt Động" },
        ];
      case "/linhvuc-nangluc/tham-do":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Lĩnh Vực & Năng Lực Hoạt Động", href: "/linhvuc-nangluc" },
          { label: "Thăm dò Dầu khí" },
        ];
      case "/linhvuc-nangluc/tim-kiem":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Lĩnh Vực & Năng Lực Hoạt Động", href: "/linhvuc-nangluc" },
          { label: "Tìm kiếm Dầu khí" },
        ];
      case "/linhvuc-nangluc/khai-thac":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Lĩnh Vực & Năng Lực Hoạt Động", href: "/linhvuc-nangluc" },
          { label: "Khai thác Dầu khí" },
        ];
      default:
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Lĩnh Vực & Năng Lực Hoạt Động" },
        ];
    }
  };

  return (
    <>
      <PageHeader
        title="Lĩnh Vực & Năng Lực Hoạt Động"
        backgroundImage={danKhoanBackground}
        breadcrumbs={getBreadcrumbs()}
      />
      <Routes>
        <Route path="/" element={<FieldsCapabilitiesSection />} />
        <Route path="/tham-do" element={<ThamDo />} />
        <Route path="/tim-kiem" element={<TimKiem />} />
        <Route path="/khai-thac" element={<KhaiThac />} />
      </Routes>
    </>
  );
};

export default FieldsCapabilitiesPage;
