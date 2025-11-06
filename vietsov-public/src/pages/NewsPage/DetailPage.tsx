import React from "react";
import ContentDetailPage from "@/components/Shared/ContentDetailPage";
import { RelevantNews, OtherArticles, MostView } from "@/components/NewsPage";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const articleData = {
  title:
    "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới thúc đẩy nghiên cứu khoa học và phát triển nguồn nhân lực Dầu khí",
  timestamp: "Sáng 03/10/2024",
  paragraphs: [
    "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ học bổng nghiên cứu khoa học giữa Vietsovpetro và Trường Đại học Dầu khí Việt Nam (PVU). Đây là một trong những nội dung liên quan đến thỏa thuận hợp tác giữa Vietsovpetro và PVU đã ký kết vào cuối năm 2023.",
    "Tham gia chương trình về phía Vietsovpetro có Ông Vũ Văn Châu – Phó Phòng Tổ chức nhân sự, Ông Nguyễn Thành Minh – Trưởng phòng Tiếp thị dịch vụ, Bà Nguyễn Thu Thủy – Phó Trưởng Phòng Tiếp thị dịch vụ, cùng các chuyên viên Phòng Kỹ thuật sản xuất và Tổ chức nhân sự. Về phía PVU có TS. Bùi Thanh Định – Trưởng khoa Dầu khí, cùng các trưởng, phó bộ môn và sinh viên PVU.",
    "Tại buổi làm việc, các sinh viên PVU đã thuyết trình về những đề tài nghiên cứu khoa học, công nghệ và giải pháp kỹ thuật mà Vietsovpetro đang quan tâm. Sau khi lắng nghe phần trình bày của các nhóm sinh viên, đại diện Vietsovpetro đánh giá cao sự tâm huyết và nỗ lực của các nhóm sinh viên.",
    "Trong Chương trình các nhóm sinh viên và quý thầy/cô Trường Đại học Dầu khí Việt Nam được mời tham quan Phòng truyền thống Vietsovpetro, để cùng tìm hiểu thêm các thông tin lịch sử xây dựng, phát triển và các hoạt động sản xuất kinh doanh hiện nay của Vietsovpetro. Chương trình tài trợ học bổng nghiên cứu khoa học giữa Vietsovpetro và PVU không chỉ mang lại giá trị thiết thực cho cả hai bên, mà còn mở ra một hướng đi mới đầy triển vọng cho cả hai bên, góp phần vào sự phát triển chung cho Ngành Dầu khí Việt Nam.",
  ],
  imageSectionTitle: "Một số hình ảnh chương trình:",
};

const imageData = [
  {
    id: 1,
    src: danKhoanVietsov,
    alt: "Helicopter on oil rig",
    className: "col-span-1 row-span-2",
  },
  {
    id: 2,
    src: daiHoiDaiBieu,
    alt: "Oil rig reflection in water",
    className: "col-span-1 row-span-2",
  },
  {
    id: 3,
    src: hoiNghiSuKien,
    alt: "Group of workers in uniform",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: hoiNghiPetro,
    alt: "Workers in firefighting gear",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: danKhoanVietsov,
    alt: "Industrial lights on a rig",
    className: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: daiHoiDaiBieu,
    alt: "Flare stack burning at night",
    className: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: hoiNghiSuKien,
    alt: "Workers inspecting equipment",
    className: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: hoiNghiPetro,
    alt: "Welder at work",
    className: "col-span-1 row-span-2",
  },
  {
    id: 9,
    src: danKhoanVietsov,
    alt: "Support vessel ship at sea",
    className: "col-span-1 row-span-2",
  },
  {
    id: 10,
    src: daiHoiDaiBieu,
    alt: "Drilling machinery on rig deck",
    className: "col-span-1 row-span-2",
  },
];

const DetailPage: React.FC = () => {
  return (
    <ContentDetailPage
      activePath="/tintuc/hoat-dong-doan-the"
      sidebarContent={<MostView />}
      detailContentData={{
        title: articleData.title,
        timestamp: articleData.timestamp,
        paragraphs: articleData.paragraphs,
        imageSectionTitle: articleData.imageSectionTitle,
        images: imageData,
      }}
      keywords={["Hoạt động đoàn thể", "Hoạt động đoàn thể"]}
      relevantComponent={<RelevantNews />}
      otherComponent={<OtherArticles />}
    />
  );
};

export default DetailPage;
