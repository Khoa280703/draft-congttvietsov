// Types for API integration
export interface BreakingNewsItem {
  id: string | number;
  title: string;
  link: string;
}

export interface BreakingNewsSliderProps {
  newsItems?: BreakingNewsItem[];
  label?: string;
  labelIcon?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  scrollSpeed?: number; // in seconds for one full cycle
  pauseOnHover?: boolean;
  className?: string;
  basePath?: string; // For different routing (public vs internal)
}

// Default news data for public system
export const defaultPublicNewsItems: BreakingNewsItem[] = [
  {
    id: 1,
    title: "Petrovietnam - Góp ý dự án Luật Năng lượng tái tạo, năng lượng mới",
    link: "/tintuc/petrovietnam-luat-nang-luong-tai-tao",
  },
  {
    id: 2,
    title:
      "Đoàn sinh viên Trường Đại học Bách khoa - Đại học Quốc gia TP.HCM tham quan Vietsovpetro",
    link: "/tintuc/sinh-vien-bach-khoa-tham-quan-vietsovpetro",
  },
  {
    id: 3,
    title: "Vietsovpetro tổ chức Hội nghị tổng kết công tác năm 2024",
    link: "/tintuc/hoi-nghi-tong-ket-2024",
  },
  {
    id: 4,
    title: "Chương trình đào tạo nâng cao năng lực cho cán bộ kỹ thuật",
    link: "/tintuc/dao-tao-nang-cao-nang-luc",
  },
];

// Default news data for internal system
export const defaultInternalNewsItems: BreakingNewsItem[] = [
  {
    id: 1,
    title: "Petrovietnam - Góp ý dự án Luật Năng lượng tái tạo, năng lượng mới",
    link: "/internal/tintuc/petrovietnam-luat-nang-luong-tai-tao",
  },
  {
    id: 2,
    title:
      "Đoàn sinh viên Trường Đại học Bách khoa - Đại học Quốc gia TP.HCM tham quan Vietsovpetro",
    link: "/internal/tintuc/sinh-vien-bach-khoa-tham-quan-vietsovpetro",
  },
  {
    id: 3,
    title: "Vietsovpetro tổ chức Hội nghị tổng kết công tác năm 2024",
    link: "/internal/tintuc/hoi-nghi-tong-ket-2024",
  },
  {
    id: 4,
    title: "Chương trình đào tạo nâng cao năng lực cho cán bộ kỹ thuật",
    link: "/internal/tintuc/dao-tao-nang-cao-nang-luc",
  },
];
