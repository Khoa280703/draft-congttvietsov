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

export const MAIN_NAVIGATION_ITEMS: MenuItemWithChildren[] = [
  { id: "home", label: "Trang Chủ", path: "/", children: [] },
  {
    id: "about",
    label: "Giới Thiệu Chung",
    path: "/gioithieu",
    children: [
      { title: "Giới thiệu Vietsov", href: "/gioithieu#joint-venture" },
      { title: "Lịch sử hình thành", href: "/gioithieu#history" },
      { title: "Giới thiệu chung", href: "/gioithieu#general-intro" },
      { title: "Cơ cấu tổ chức", href: "/gioithieu#org-structure" },
      { title: "Ban lãnh đạo", href: "/gioithieu#leadership" },
      { title: "Thành tựu nổi bật", href: "/gioithieu#achievements" },
      { title: "Năng lực hoạt động", href: "/gioithieu#capabilities" },
      { title: "Ảnh lưu trữ", href: "/gioithieu#archive-photos" },
    ],
  },
  {
    id: "field",
    label: "Lĩnh Vực & Năng Lực Hoạt Động",
    path: "/linhvuc-nangluc",
    children: [],
  },
  {
    id: "projects",
    label: "Đối Tác & Dự Án",
    path: "/doitac-duan",
    children: [],
  },
  {
    id: "development",
    label: "Phát Triển Bền Vững",
    path: "/phattrien",
    children: [],
  },
  {
    id: "news",
    label: "Tin Tức & Sự Kiện",
    path: "/tintuc",
    children: [
      { title: "Hoạt động đoàn thể", href: "/tintuc/hoat-dong-doan-the" },
      {
        title: "Thư viện hình ảnh và video",
        href: "/tintuc/thu-vien-anh-video",
      },
    ],
  },
  { id: "resources", label: "Các Nguồn Lực", path: "/nguonluc", children: [] },
];

export const SIDEBAR_NAVIGATION_ITEMS: MenuItemWithChildren[] = [
  {
    id: "home",
    label: "Trang chủ",
    path: "/",
    children: [],
  },
  {
    id: "about",
    label: "Giới thiệu",
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
    id: "news",
    label: "Tin tức - Sự kiện",
    path: "/tintuc",
    children: [
      {
        title: "Hoạt động đoàn thể",
        href: "/tintuc/hoat-dong-doan-the",
      },
      {
        title: "Thư viện hình ảnh và video",
        href: "/tintuc/thu-vien-anh-video",
      },
    ],
  },
  {
    id: "projects",
    label: "Dự án – Đối tác",
    path: "/duan-doitac",
    children: [],
  },
  {
    id: "resources",
    label: "Nguồn lực",
    path: "/nguonluc",
    children: [],
  },
];

// Internal menu configuration
export const INTERNAL_MENU_ITEMS: MenuItemWithChildren[] = [
  { id: "home", label: "Trang Chủ", path: "/internal", children: [] },
  {
    id: "about",
    label: "Giới Thiệu Chung",
    path: "/internal/gioithieu",
    children: [],
  },
  {
    id: "news",
    label: "Tin Tức Sự Kiện",
    path: "/internal/tintuc",
    children: [],
  },
  {
    id: "development",
    label: "Phát Triển Bền Vững",
    path: "/internal/phattrien",
    children: [],
  },
  { id: "reports", label: "Báo Cáo", path: "/internal/baocao", children: [] },
] as const;

// Menu types
export type MainMenuItem = (typeof MAIN_NAVIGATION_ITEMS)[number];
export type InternalMenuItem = (typeof INTERNAL_MENU_ITEMS)[number];
