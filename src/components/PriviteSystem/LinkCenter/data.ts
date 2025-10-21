import {
  FiGlobe,
  FiServer,
  FiDatabase,
  FiLock,
  FiTrendingUp,
  FiFileText,
  FiLayout,
  FiCalendar,
  FiFilm,
  FiBookOpen,
  FiUsers,
  FiHardDrive,
} from "react-icons/fi";

export interface LinkItem {
  iconName: string;
  text: string;
  href: string;
}

export interface LinkSection {
  title: string;
  items: LinkItem[];
}

// Icon mapping function
export const getIcon = (iconName: string) => {
  const iconMap: {
    [key: string]: React.ComponentType<{ className?: string }>;
  } = {
    FiGlobe,
    FiServer,
    FiDatabase,
    FiLock,
    FiTrendingUp,
    FiFileText,
    FiLayout,
    FiCalendar,
    FiFilm,
    FiBookOpen,
    FiUsers,
    FiHardDrive,
  };

  return iconMap[iconName] || null;
};

export const linkSections: LinkSection[] = [
  {
    title: "LIÊN KẾT",
    items: [
      { iconName: "FiGlobe", text: "eOffice", href: "#" },
      { iconName: "FiServer", text: "Svodka", href: "#" },
      { iconName: "FiDatabase", text: "Oracle", href: "#" },
      { iconName: "FiLock", text: "Đổi mật khẩu email", href: "#" },
      { iconName: "FiTrendingUp", text: "Báo cáo khai thác", href: "#" },
      { iconName: "FiFileText", text: "Báo cáo tổng hợp sản xuất", href: "#" },
      { iconName: "FiLayout", text: "Thiết kế lưu đồ", href: "#" },
    ],
  },
  {
    title: "ỨNG DỤNG",
    items: [
      { iconName: "FiGlobe", text: "eOffice", href: "#" },
      { iconName: "FiServer", text: "Svodka", href: "#" },
      { iconName: "FiDatabase", text: "Oracle", href: "#" },
      { iconName: "FiLock", text: "Đổi mật khẩu email", href: "#" },
      { iconName: "FiTrendingUp", text: "Báo cáo khai thác", href: "#" },
      { iconName: "FiFileText", text: "Báo cáo tổng hợp sản xuất", href: "#" },
      { iconName: "FiLayout", text: "Thiết kế lưu đồ", href: "#" },
    ],
  },
  {
    title: "TRA CỨU",
    items: [
      { iconName: "FiCalendar", text: "Lịch công tác của ban TGĐ", href: "#" },
      { iconName: "FiCalendar", text: "Lịch sự kiện", href: "#" },
      { iconName: "FiFilm", text: "Lịch bay", href: "#" },
      { iconName: "FiBookOpen", text: "Danh bạ VSP", href: "#" },
      { iconName: "FiUsers", text: "Nhansu.vietso.com", href: "#" },
      { iconName: "FiHardDrive", text: "Thiết bị vật tư", href: "#" },
    ],
  },
];
