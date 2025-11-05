export interface ArchivePhoto {
  id: number;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  isVideo?: boolean;
  videoDuration?: string;
  likes: number;
  comments: number;
  date: string;
}

export interface ArchivePhotosSectionProps {
  featuredPhoto?: ArchivePhoto;
  photos?: ArchivePhoto[];
  className?: string;
  hideTitle?: boolean;
}

export const defaultFeaturedPhoto: ArchivePhoto = {
  id: 1,
  imageUrl: "/src/assets/dankhoanvietsov.jpg",
  imageAlt: "Dự án điều hành khai thác mỏ",
  title: "Dự án điều hành khai thác mỏ",
  description:
    "Dự án điều hành khai thác mỏ được Vietsovpetro triển khai từ năm 1995, đánh dấu một bước ngoặt quan trọng trong lịch sử phát triển của công ty. Với quy mô lớn và tầm quan trọng chiến lược, dự án này đã góp phần nâng cao năng lực sản xuất và khai thác dầu khí của Vietsovpetro. Thông qua việc tối ưu hóa quy trình vận hành và ứng dụng công nghệ tiên tiến, dự án đã mang lại hiệu quả kinh tế cao và khẳng định năng lực kỹ thuật, quản lý của Vietsovpetro trong lĩnh vực khai thác dầu khí.",
  isVideo: true,
  videoDuration: "02:00",
  likes: 20,
  comments: 16,
  date: "06/06/2025",
};

export const defaultPhotos: ArchivePhoto[] = [
  {
    id: 2,
    imageUrl: "/src/assets/1996.jpg",
    imageAlt: "Vietsovpetro đã tổ chức thành công chương trình tham quan",
    title:
      "Vietsovpetro đã tổ chức thành công chương trình tham quan dành cho các",
    description:
      "Chương trình tham quan được tổ chức nhằm giới thiệu về hoạt động sản xuất và phát triển của công ty.",
    likes: 20,
    comments: 16,
    date: "06/06/2025",
  },
  {
    id: 3,
    imageUrl: "/src/assets/daihoidaibieuivpvn.jpg",
    imageAlt: "Tổng giám đốc Vũ Mai Khanh phát biểu trong sự kiện",
    title:
      "Tổng giám đốc Vũ Mai Khanh phát biểu trong sự kiện Lễ mừng công 250 triệu tấn dầu",
    description:
      "Sự kiện quan trọng đánh dấu cột mốc 250 triệu tấn dầu được khai thác.",
    isVideo: true,
    videoDuration: "01:30",
    likes: 20,
    comments: 16,
    date: "06/06/2025",
  },
  {
    id: 4,
    imageUrl: "/src/assets/hoinghicongtacpvn.jpg",
    imageAlt: "Trải qua 95 năm xây dựng và phát triển",
    title:
      'Trải qua 95 năm xây dựng và phát triển, ngành Tuyên giáo luôn giữ vai trò "đi trước mở đường, đi cùng phát triển"',
    description:
      "Ngành Tuyên giáo đã có những đóng góp quan trọng trong quá trình phát triển của đất nước.",
    likes: 20,
    comments: 16,
    date: "06/06/2025",
  },
  {
    id: 5,
    imageUrl: "/src/assets/hoinghipetrovi.jpg",
    imageAlt: "Chủ tịch nước Lê Đức Anh thăm quan Cảng Vietsovpetro năm 1996",
    title: "Chủ tịch nước Lê Đức Anh thăm quan Cảng Vietsovpetro năm 1996.",
    description:
      "Chuyến thăm quan của Chủ tịch nước đánh dấu tầm quan trọng của ngành dầu khí Việt Nam.",
    isVideo: true,
    videoDuration: "03:15",
    likes: 20,
    comments: 16,
    date: "06/06/2025",
  },
];
