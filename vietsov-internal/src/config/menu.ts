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
      {
        title: "Về chúng tôi, lịch sử hình thành",
        href: "/gioithieu#introdution",
      },
      {
        title: "Tầm nhìn sứ mệnh, giá trị cốt lõi",
        href: "/gioithieu#vision-mission",
      },
      {
        title: "Cơ cấu tổ chức, ban tổng giám đốc",
        href: "/gioithieu#organization-structure",
      },
    ],
  },
  {
    id: "news",
    label: "Tin Tức & Sự Kiện",
    path: "/tintuc",
    children: [
      { title: "Hoạt động SX - KD", href: "/tintuc/hoat-dong-sx-kd" },
      { title: "Hoạt động đoàn thể", href: "/tintuc/hoat-dong-doan-the" },
      { title: "Tin dầu khí", href: "/tintuc/tin-dau-khi" },
      { title: "Thông cáo báo chí", href: "/tintuc/thong-cao-bao-chi" },
      {
        title: "Thư viện hình ảnh và video",
        href: "/tintuc/thu-vien-anh-video",
      },
    ],
  },
  {
    id: "development",
    label: "Phát Triển Bền Vững",
    path: "/phattrien",
    children: [
      { title: "An toàn sức khoẻ môi trường", href: "/phattrien/atskmt" },
      {
        title: "Truyền thông VHDN - HĐXH",
        href: "/phattrien/truyen-thong-vhdn-hdxh",
      },
      { title: "Chuyển đổi số", href: "/phattrien/chuyen-doi-so" },
      { title: "ESG", href: "/phattrien/esg" },
      {
        title: "Ý kiến người lao động",
        href: "/phattrien/y-kien-nguoi-lao-dong",
      },
    ],
  },
  {
    id: "field",
    label: "Lĩnh Vực & Năng Lực Hoạt Động",
    path: "/linhvuc-nangluc",
    children: [
      {
        title: "Thăm dò, tìm kiếm và KT dầu khí",
        href: "/linhvuc-nangluc#tham-do-tim-kiem-va-kt-dau-khi",
      },
      { title: "Dịch vụ", href: "/linhvuc-nangluc#dich-vu" },
    ],
  },
  {
    id: "projects",
    label: "Đối Tác & Dự Án",
    path: "/doitac-duan",
    children: [],
  },
  {
    id: "resources",
    label: "Các Nguồn Chung",
    path: "/cacnguonchung",
    children: [
      { title: "Đào tạo", href: "/cacnguonchung/dao-tao" },
      { title: "Khoa học - công nghệ", href: "/cacnguonchung/khcn" },
      {
        title: "Sáng kiến - sáng chế",
        href: "/cacnguonchung/sang-kien-sang-che",
      },
      {
        title: "Tuyển dụng và tuyển sinh",
        href: "/cacnguonchung/tuyen-dung-va-tuyen-sinh",
      },
    ],
  },
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
    label: "Giới thiệu chung",
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
    label: "Tin Tức & Sự Kiện",
    path: "/tintuc",
    children: [
      { title: "Hoạt động SX - KD", href: "/tintuc/hoat-dong-sx-kd" },
      { title: "Hoạt động đoàn thể", href: "/tintuc/hoat-dong-doan-the" },
      { title: "Tin dầu khí", href: "/tintuc/tin-dau-khi" },
      { title: "Thông cáo báo chí", href: "/tintuc/thong-cao-bao-chi" },
      {
        title: "Thư viện hình ảnh và video",
        href: "/tintuc/thu-vien-anh-video",
      },
    ],
  },
  {
    id: "development",
    label: "Phát Triển Bền Vững",
    path: "/phattrien",
    children: [
      { title: "An toàn sức khoẻ môi trường", href: "/phattrien/atskmt" },
      {
        title: "Truyền thông VHDN - HĐXH",
        href: "/phattrien/truyen-thong-vhdn-hdxh",
      },
      { title: "Chuyển đổi số", href: "/phattrien/chuyen-doi-so" },
      { title: "ESG", href: "/phattrien/esg" },
      {
        title: "Ý kiến người lao động",
        href: "/phattrien/y-kien-nguoi-lao-dong",
      },
    ],
  },
  {
    id: "field",
    label: "Lĩnh Vực & Năng Lực Hoạt Động",
    path: "/linhvuc-nangluc",
    children: [
      {
        title: "Thăm dò, tìm kiếm và KT dầu khí",
        href: "/linhvuc-nangluc",
      },
      { title: "Dịch vụ", href: "/linhvuc-nangluc" },
    ],
  },
  {
    id: "projects",
    label: "Đối Tác & Dự Án",
    path: "/doitac-duan",
    children: [],
  },
  {
    id: "resources",
    label: "Các Nguồn Chung",
    path: "/cacnguonchung",
    children: [
      { title: "Đào tạo", href: "/cacnguonchung/dao-tao" },
      { title: "Khoa học - công nghệ", href: "/cacnguonchung/khcn" },
      {
        title: "Sáng kiến - sáng chế",
        href: "/cacnguonchung/sang-kien-sang-che",
      },
      {
        title: "Tuyển dụng và tuyển sinh",
        href: "/cacnguonchung/tuyen-dung-va-tuyen-sinh",
      },
    ],
  },
];

// Internal menu configuration
export const INTERNAL_MENU_ITEMS: MenuItemWithChildren[] = [
  { id: "home", label: "Trang Chủ", path: "/", children: [] },
  {
    id: "about",
    label: "Giới Thiệu Chung",
    path: "/gioithieu",
    children: [
      {
        title: "Về chúng tôi, lịch sử hình thành",
        href: "/gioithieu#introdution",
      },
      {
        title: "Tầm nhìn sứ mệnh, giá trị cốt lõi",
        href: "/gioithieu#vision-mission",
      },
      {
        title: "Cơ cấu tổ chức, ban tổng giám đốc",
        href: "/gioithieu#organization-structure",
      },
    ],
  },
  {
    id: "news",
    label: "Tin Tức Sự Kiện",
    path: "/tintuc",
    children: [
      { title: "Hoạt động SX - KD", href: "/tintuc/hoat-dong-sx-kd" },
      { title: "Hoạt động đoàn thể", href: "/tintuc/hoat-dong-doan-the" },
      { title: "Tin dầu khí", href: "/tintuc/tin-dau-khi" },
      { title: "Thông cáo báo chí", href: "/tintuc/thong-cao-bao-chi" },
      {
        title: "Thư viện hình ảnh và video",
        href: "/tintuc/thu-vien-anh-video",
      },
    ],
  },
  {
    id: "development",
    label: "Phát Triển Bền Vững",
    path: "/phattrien",
    children: [
      { title: "An toàn sức khoẻ môi trường", href: "/phattrien/atskmt" },
      {
        title: "Truyền thông VHDN - HĐXH",
        href: "/phattrien/truyen-thong-vhdn-hdxh",
      },
      { title: "Chuyển đổi số", href: "/phattrien/chuyen-doi-so" },
      {
        title: "Ý kiến người lao động",
        href: "/phattrien/y-kien-nguoi-lao-dong",
      },
    ],
  },
  {
    id: "search",
    label: "Tra Cứu",
    path: "/tracuu",
    children: [
      { title: "Báo Cáo", href: "/baocao" },
      { title: "Ứng Dụng", href: "/ungdung" },
    ],
  },
] as const;

// Menu types
export type MainMenuItem = (typeof MAIN_NAVIGATION_ITEMS)[number];
export type InternalMenuItem = (typeof INTERNAL_MENU_ITEMS)[number];
