// Import actual images when available
import projectImage from "@/assets/Khoan _sua_gieng.png";

export interface ProjectData {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
}

export interface TypicalProjectsProps {
  projects?: ProjectData[];
  viewMoreText?: string;
  viewMoreLink?: string;
  className?: string;
}

// Default project data based on the design image
export const defaultProjects: ProjectData[] = [
  {
    id: "drilling-well-repair",
    image: projectImage || "/api/placeholder/400/300",
    imageAlt:
      "Underwater drilling and well repair operations with diver and equipment",
    title: "Khoan và sửa giếng",
    description:
      "Quản lý và vận hành 5 giàn khoan tự nâng với các thiết bị hiện đại – Tam Đảo 01, Tam Đảo 02, Tam Đảo 03, Cửu Long, Tam Đảo 05; cung cấp dịch vụ khoan thăm dò, khai thác và sửa chữa giếng dầu khí.",
    link: "/projects/drilling-well-repair",
  },
  {
    id: "oil-gas-exploitation",
    image: projectImage || "/api/placeholder/400/300",
    imageAlt: "Large yellow offshore oil and gas platform with multiple decks",
    title: "Khai thác dầu khí",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ học bổng nghiên cứu khoa học giữa Vietsovpetro và Trường...",
    link: "/projects/oil-gas-exploitation",
  },
  {
    id: "marine-transport-services",
    image: projectImage || "/api/placeholder/400/300",
    imageAlt:
      "Aerial view of large crane vessel with extended crane arm on open sea",
    title: "Dịch vụ vận tải biển và công tác I...",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ học bổng nghiên cứu khoa học giữa Vietsovpetro và Trường...",
    link: "/projects/marine-transport-services",
  },
];
