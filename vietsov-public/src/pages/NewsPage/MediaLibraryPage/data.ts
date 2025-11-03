import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import chuyenTham1996 from "@/assets/1996.jpg";

// --- INTERFACE ---
export interface MediaFolder {
  id: string;
  name: string;
  type: "folder";
  thumbnail?: string;
  date: string;
  children?: MediaItem[];
}

export interface MediaFile {
  id: string;
  name: string;
  type: "image" | "video";
  thumbnail: string;
  date: string;
  size?: string;
}

export type MediaItem = MediaFolder | MediaFile;

// Helper function to get image by index (reusing available images)
const getImage = (index: number) => {
  const images = [hoiNghiPetro, hoiNghiSuKien, daiHoiDaiBieu, chuyenTham1996];
  return images[index % images.length];
};

// --- DỮ LIỆU MẪU PHONG PHÚ ---
export const mediaData: MediaItem[] = [
  {
    id: "folder-1",
    name: "Sự kiện nổi bật",
    type: "folder",
    date: "2024",
    children: [
      {
        id: "folder-1-1",
        name: "Triển lãm và Hội nghị",
        type: "folder",
        date: "2024",
        children: [
          {
            id: "feat-1",
            type: "video" as const,
            name: "Triển lãm Sản phẩm công nghệ chiến lược quốc gia",
            thumbnail: getImage(0),
            date: "13/10/2025",
            size: "125.5 MB",
          },
          {
            id: "item-1",
            type: "image" as const,
            name: "Triển lãm Petrovietnam 2024.jpg",
            thumbnail: getImage(1),
            date: "13/10/2024",
            size: "3.2 MB",
          },
          {
            id: "item-2",
            type: "image" as const,
            name: "Hội nghị công tác Đảng bộ.jpg",
            thumbnail: getImage(2),
            date: "12/10/2024",
            size: "2.8 MB",
          },
          {
            id: "item-3",
            type: "image" as const,
            name: "Hội nghị thường niên 2024.jpg",
            thumbnail: getImage(3),
            date: "11/10/2024",
            size: "4.1 MB",
          },
        ],
      },
      {
        id: "folder-1-2",
        name: "Lễ kỷ niệm",
        type: "folder",
        date: "2024",
        children: [
          {
            id: "item-4",
            type: "image" as const,
            name: "Lễ kỷ niệm 40 năm thành lập.jpg",
            thumbnail: getImage(0),
            date: "15/09/2024",
            size: "5.5 MB",
          },
          {
            id: "item-5",
            type: "image" as const,
            name: "Lễ trao giải thưởng.jpg",
            thumbnail: getImage(1),
            date: "14/09/2024",
            size: "3.8 MB",
          },
          {
            id: "item-6",
            type: "video" as const,
            name: "Video kỷ niệm thành lập.mp4",
            thumbnail: getImage(2),
            date: "13/09/2024",
            size: "98.3 MB",
          },
        ],
      },
      {
        id: "item-7",
        type: "image" as const,
        name: "Tổng hợp sự kiện nổi bật.jpg",
        thumbnail: getImage(3),
        date: "10/10/2024",
        size: "6.2 MB",
      },
    ],
  },
  {
    id: "folder-2",
    name: "Hoạt động sản xuất",
    type: "folder",
    date: "2024",
    children: [
      {
        id: "folder-2-1",
        name: "Khai thác dầu khí",
        type: "folder",
        date: "2024",
        children: [
          {
            id: "item-8",
            type: "image" as const,
            name: "Giàn khoan dầu khí.jpg",
            thumbnail: getImage(0),
            date: "20/09/2024",
            size: "4.5 MB",
          },
          {
            id: "item-9",
            type: "image" as const,
            name: "Hoạt động khai thác trên biển.jpg",
            thumbnail: getImage(1),
            date: "19/09/2024",
            size: "3.9 MB",
          },
          {
            id: "item-10",
            type: "video" as const,
            name: "Video quy trình khai thác.mp4",
            thumbnail: getImage(2),
            date: "18/09/2024",
            size: "156.7 MB",
          },
          {
            id: "item-11",
            type: "image" as const,
            name: "Thiết bị khai thác hiện đại.jpg",
            thumbnail: getImage(3),
            date: "17/09/2024",
            size: "5.1 MB",
          },
        ],
      },
      {
        id: "folder-2-2",
        name: "Vận hành và Bảo trì",
        type: "folder",
        date: "2024",
        children: [
          {
            id: "item-12",
            type: "image" as const,
            name: "Bảo trì hệ thống đường ống.jpg",
            thumbnail: getImage(0),
            date: "16/09/2024",
            size: "3.4 MB",
          },
          {
            id: "item-13",
            type: "image" as const,
            name: "Kiểm tra an toàn thiết bị.jpg",
            thumbnail: getImage(1),
            date: "15/09/2024",
            size: "4.2 MB",
          },
          {
            id: "item-14",
            type: "image" as const,
            name: "Vận hành nhà máy.jpg",
            thumbnail: getImage(2),
            date: "14/09/2024",
            size: "3.7 MB",
          },
        ],
      },
      {
        id: "item-15",
        type: "image" as const,
        name: "Tổng quan hoạt động sản xuất.jpg",
        thumbnail: getImage(3),
        date: "12/09/2024",
        size: "5.8 MB",
      },
    ],
  },
  {
    id: "folder-3",
    name: "Hoạt động văn hóa",
    type: "folder",
    date: "2024",
    children: [
      {
        id: "folder-3-1",
        name: "Văn hóa doanh nghiệp",
        type: "folder",
        date: "2024",
        children: [
          {
            id: "item-16",
            type: "image" as const,
            name: "Hoạt động team building.jpg",
            thumbnail: getImage(0),
            date: "25/08/2024",
            size: "4.3 MB",
          },
          {
            id: "item-17",
            type: "image" as const,
            name: "Lễ trao thưởng nhân viên xuất sắc.jpg",
            thumbnail: getImage(1),
            date: "24/08/2024",
            size: "3.6 MB",
          },
          {
            id: "item-18",
            type: "video" as const,
            name: "Video văn hóa doanh nghiệp.mp4",
            thumbnail: getImage(2),
            date: "23/08/2024",
            size: "112.4 MB",
          },
        ],
      },
      {
        id: "folder-3-2",
        name: "Thiện nguyện xã hội",
        type: "folder",
        date: "2024",
        children: [
          {
            id: "item-19",
            type: "image" as const,
            name: "Chương trình Chia sẻ yêu thương.jpg",
            thumbnail: getImage(3),
            date: "22/08/2024",
            size: "4.9 MB",
          },
          {
            id: "item-20",
            type: "image" as const,
            name: "Hoạt động từ thiện tại địa phương.jpg",
            thumbnail: getImage(0),
            date: "21/08/2024",
            size: "3.5 MB",
          },
          {
            id: "item-21",
            type: "image" as const,
            name: "Trao quà cho trẻ em.jpg",
            thumbnail: getImage(1),
            date: "20/08/2024",
            size: "4.7 MB",
          },
        ],
      },
      {
        id: "item-22",
        type: "image" as const,
        name: "Lễ hội văn hóa công ty.jpg",
        thumbnail: getImage(2),
        date: "18/08/2024",
        size: "5.3 MB",
      },
    ],
  },
  {
    id: "folder-4",
    name: "Năm 2023",
    type: "folder",
    date: "2023",
    children: [
      {
        id: "folder-4-1",
        name: "Quý 4 - 2023",
        type: "folder",
        date: "2023",
        children: [
          {
            id: "item-23",
            type: "image" as const,
            name: "Sự kiện cuối năm 2023.jpg",
            thumbnail: getImage(3),
            date: "20/12/2023",
            size: "4.1 MB",
          },
          {
            id: "item-24",
            type: "image" as const,
            name: "Hội nghị tổng kết năm.jpg",
            thumbnail: getImage(0),
            date: "15/12/2023",
            size: "3.8 MB",
          },
        ],
      },
      {
        id: "folder-4-2",
        name: "Quý 3 - 2023",
        type: "folder",
        date: "2023",
        children: [
          {
            id: "item-25",
            type: "image" as const,
            name: "Hoạt động mùa hè 2023.jpg",
            thumbnail: getImage(1),
            date: "25/09/2023",
            size: "4.6 MB",
          },
        ],
      },
    ],
  },
  {
    id: "folder-5",
    name: "Năm 2022",
    type: "folder",
    date: "2022",
    children: [
      {
        id: "item-26",
        type: "image" as const,
        name: "Lưu trữ năm 2022.jpg",
        thumbnail: getImage(2),
        date: "31/12/2022",
        size: "3.2 MB",
      },
    ],
  },
  {
    id: "folder-6",
    name: "Tài liệu đào tạo",
    type: "folder",
    date: "2024",
    children: [
      {
        id: "item-27",
        type: "image" as const,
        name: "Tài liệu an toàn lao động.jpg",
        thumbnail: getImage(3),
        date: "05/10/2024",
        size: "2.9 MB",
      },
      {
        id: "item-28",
        type: "image" as const,
        name: "Hướng dẫn vận hành thiết bị.jpg",
        thumbnail: getImage(0),
        date: "04/10/2024",
        size: "3.3 MB",
      },
      {
        id: "item-29",
        type: "video" as const,
        name: "Video đào tạo kỹ thuật.mp4",
        thumbnail: getImage(1),
        date: "03/10/2024",
        size: "187.2 MB",
      },
    ],
  },
  {
    id: "file-1",
    type: "image" as const,
    name: "Ảnh lưu trữ tổng hợp 2024.jpg",
    thumbnail: getImage(2),
    date: "10/10/2024",
    size: "2.5 MB",
  },
  {
    id: "file-2",
    type: "video" as const,
    name: "Video giới thiệu công ty.mp4",
    thumbnail: getImage(3),
    date: "09/10/2024",
    size: "15.8 MB",
  },
  {
    id: "file-3",
    type: "image" as const,
    name: "Logo công ty.png",
    thumbnail: getImage(0),
    date: "08/10/2024",
    size: "1.2 MB",
  },
  {
    id: "file-4",
    type: "image" as const,
    name: "Banner sự kiện.jpg",
    thumbnail: getImage(1),
    date: "07/10/2024",
    size: "3.4 MB",
  },
];
