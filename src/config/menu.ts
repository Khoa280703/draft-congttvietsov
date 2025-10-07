// Base menu item interface
export interface BaseMenuItem {
  id: string;
  label: string;
  path: string;
}

// Menu item with children interface
export interface MenuItemWithChildren extends BaseMenuItem {
  children?: Array<{
    title: string;
    href: string;
  }>;
}

// Public menu configuration with detailed structure
export const PUBLIC_MENU_ITEMS_DETAILED: MenuItemWithChildren[] = [
  {
    id: "home",
    label: "TRANG CHỦ",
    path: "/",
    children: [],
  },
  {
    id: "about",
    label: "GIỚI THIỆU",
    path: "/gioithieu",
    children: [
      {
        title: "Lịch sử hình thành",
        href: "/gioithieu/lich-su-hien-tai",
      },
      {
        title: "Cơ cấu tổ chức",
        href: "/gioithieu/co-cau-to-chuc",
      },
      {
        title: "Ban lãnh đạo",
        href: "/gioithieu/ban-lanh-dao",
      },
      {
        title: "Thành tựu nổi bật",
        href: "/gioithieu/thanh-tuc-noi-bat",
      },
    ],
  },
  {
    id: "units",
    label: "ĐƠN VỊ TRỰC THUỘC",
    path: "/donvi",
    children: [
      {
        title: "Xí nghiệp Khai thác Dầu khí",
        href: "/donvi/xinghiep-khai-thac-dau-khi",
      },
      {
        title:
          "Xí nghiệp Xây lắp, Khảo sát và Sửa chữa các công trình khai thác dầu khí",
        href: "/donvi/xinghiep-xay-lap-khao-sat-sua-chua",
      },
      {
        title: "Xí nghiệp Khai thác các công trình khí",
        href: "/donvi/xinghiep-khai-thac-cong-trinh",
      },
      { title: "Xí nghiệp Khoan", href: "/donvi/xinghiep-khoan" },
      {
        title: "Xí nghiệp Vận tải Biển",
        href: "/donvi/xinghiep-van-tai-bien",
      },
      { title: "Xí nghiệp Cảng", href: "/donvi/xinghiep-cang" },
      { title: "Xí nghiệp Điện", href: "/donvi/xinghiep-dien" },
      {
        title: "Xí nghiệp Nghiên cứu Khoa học",
        href: "/donvi/xinghiep-nghien-cuu-khoa-hoc",
      },
      { title: "Xí nghiệp Y tế", href: "/donvi/xinghiep-y-te" },
      {
        title: "Xí nghiệp Công nghệ Thông tin",
        href: "/donvi/xinghiep-cong-nghe-thong-tin",
      },
      { title: "Xí nghiệp Resort", href: "/donvi/xinghiep-resort" },
      { title: "Xí nghiệp Khách sạn", href: "/donvi/xinghiep-khach-san" },
      { title: "Xí nghiệp Bảo vệ", href: "/donvi/xinghiep-bao-ve" },
      { title: "Xí nghiệp Nhà ở", href: "/donvi/xinghiep-nha-o" },
    ],
  },
  {
    id: "products",
    label: "SẢN PHẨM-DỊCH VỤ",
    path: "/spvadichvu",
    children: [],
  },
  {
    id: "news",
    label: "TIN TỨC-SỰ KIỆN",
    path: "/tintuc",
    children: [
      {
        title: "Hoạt động đoàn thể",
        href: "/tintuc/hoat-dong-doan-the",
      },
    ],
  },
  {
    id: "projects",
    label: "DỰ ÁN – ĐỐI TÁC",
    path: "/duan-doitac",
    children: [],
  },
  {
    id: "resources",
    label: "NGUỒN LỰC",
    path: "/nguonluc",
    children: [],
  },
  {
    id: "recruitment",
    label: "TUYỂN DỤNG",
    path: "/tuyendung",
    children: [],
  },
  {
    id: "admission",
    label: "TUYỂN SINH",
    path: "/tuyensinh",
    children: [],
  },
];

// Extract basic menu items for navigation
export const PUBLIC_MENU_ITEMS: BaseMenuItem[] = PUBLIC_MENU_ITEMS_DETAILED.map(
  (item) => ({
    id: item.id,
    label: item.label,
    path: item.path,
  })
);

// Internal menu configuration
export const INTERNAL_MENU_ITEMS: BaseMenuItem[] = [
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
