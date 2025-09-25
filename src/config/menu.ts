// Public menu configuration
export const PUBLIC_MENU_ITEMS = [
  { id: "home", label: "TRANG CHỦ", path: "/" },
  { id: "about", label: "GIỚI THIỆU", path: "/gioithieu" },
  { id: "units", label: "ĐƠN VỊ TRỰC THUỘC", path: "/donvi" },
  { id: "products", label: "SẢN PHẨM-DỊCH VỤ", path: "/spvadichvu" },
  { id: "news", label: "TIN TỨC-SỰ KIỆN", path: "/tintuc" },
  { id: "resources", label: "NGUỒN LỰC", path: "/nguonluc" },
  { id: "recruitment", label: "TUYỂN DỤNG", path: "/tuyendung" },
  { id: "admission", label: "TUYỂN SINH", path: "/tuyensinh" },
] as const;

// Internal menu configuration
export const INTERNAL_MENU_ITEMS = [
  { id: "home", label: "TRANG CHỦ", path: "/internal" },
  { id: "about", label: "GIỚI THIỆU CHUNG", path: "/internal/gioithieu" },
  { id: "news", label: "TIN TỨC SỰ KIỆN", path: "/internal/tintuc" },
  {
    id: "development",
    label: "PHÁT TRIỂN BỀN VỮNG",
    path: "/internal/phattrien",
  },
  { id: "reports", label: "BÁO CÁO", path: "/internal/baocao" },
  { id: "applications", label: "ỨNG DỤNG LIÊN KẾT", path: "/internal/ungdung" },
  { id: "search", label: "TRA CỨU", path: "/internal/tracuu" },
] as const;

// Menu types
export type PublicMenuItem = (typeof PUBLIC_MENU_ITEMS)[number];
export type InternalMenuItem = (typeof INTERNAL_MENU_ITEMS)[number];
