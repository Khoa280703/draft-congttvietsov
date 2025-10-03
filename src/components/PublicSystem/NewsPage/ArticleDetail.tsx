import React from "react";

import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import chuyenTham1996 from "@/assets/1996.jpg";
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
    alt: "Helicopter landing on oil rig",
    className: "col-span-1 row-span-2",
  },
  {
    id: 2,
    src: chuyenTham1996,
    alt: "Oil rig structure",
    className: "col-span-1 row-span-2",
  },
  {
    id: 3,
    src: daiHoiDaiBieu,
    alt: "Group photo of workers",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: hoiNghiSuKien,
    alt: "Workers in firefighting gear",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: hoiNghiPetro,
    alt: "Sea rescue training",
    className: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: hoiNghiSuKien,
    alt: "Flare stack burning",
    className: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: hoiNghiPetro,
    alt: "Another group photo of workers",
    className: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: hoiNghiSuKien,
    alt: "Industrial pipes",
    className: "col-span-1 row-span-1",
  },
  {
    id: 9,
    src: hoiNghiPetro,
    alt: "Welder at work",
    className: "col-span-1 row-span-1",
  },
  {
    id: 10,
    src: chuyenTham1996,
    alt: "Drilling machinery on rig",
    className: "col-span-1 row-span-2",
  },
  {
    id: 11,
    src: danKhoanVietsov,
    alt: "Oil rig at sea during sunset",
    className: "col-span-1 row-span-2",
  },
];

const ArticleDetail: React.FC = () => {
  return (
    <div className="min-h-screen sm:p-8">
      <div className="max-w-4xl mx-auto bg-white overflow-hidden">
        <article>
          {/* Article Header */}
          <header>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              {articleData.title}
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              {articleData.timestamp}
            </p>
            <hr className="my-6 border-gray-200" />
          </header>

          {/* Article Body - Rendered from data using .map() */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            {articleData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Image Grid Section */}
          <div className="mt-8">
            <p className="text-gray-700">{articleData.imageSectionTitle}</p>

            {/* Image Grid - Rendered from data using .map() */}
            <div className="mt-4 grid grid-cols-3 auto-rows-fr gap-2 sm:gap-4">
              {imageData.map((image) => (
                <div key={image.id} className={image.className}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
