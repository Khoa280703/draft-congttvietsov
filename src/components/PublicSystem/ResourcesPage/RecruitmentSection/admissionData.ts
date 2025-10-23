import admission from "@/assets/khaithaccartoon.png";

export interface AdmissionProgram {
  id: number;
  title: string;
  description: string;
  features: string[];
  requirements: string[];
  benefits: string[];
  applicationDeadline: string;
  duration: string;
  level: string;
  scholarship: string;
  status: "open" | "closed" | "upcoming";
  image: string;
  category: string;
}

export const admissionPrograms: AdmissionProgram[] = [
  {
    id: 1,
    title: "Học bổng Vietsovpetro - Chương trình Đại học",
    description:
      "Chương trình học bổng toàn phần dành cho sinh viên xuất sắc ngành Dầu khí, Kỹ thuật và Kinh tế tại các trường đại học hàng đầu Việt Nam và quốc tế.",
    features: [
      "Học bổng toàn phần 4 năm",
      "Thực tập tại công ty",
      "Cơ hội việc làm sau tốt nghiệp",
      "Đào tạo chuyên sâu",
      "Hỗ trợ sinh hoạt phí",
      "Mentoring từ chuyên gia",
    ],
    requirements: [
      "Điểm trung bình THPT từ 8.5 trở lên",
      "Điểm IELTS 6.5 hoặc TOEFL 80+",
      "Thư giới thiệu từ giáo viên",
      "Bài luận cá nhân",
      "Phỏng vấn trực tiếp",
    ],
    benefits: [
      "Miễn 100% học phí",
      "Trợ cấp sinh hoạt 5 triệu/tháng",
      "Bảo hiểm y tế cao cấp",
      "Laptop và tài liệu học tập",
      "Tham gia dự án thực tế",
    ],
    applicationDeadline: "15/03/2025",
    duration: "4 năm",
    level: "Đại học",
    scholarship: "Toàn phần",
    status: "open",
    image: admission,
    category: "Học bổng",
  },
  {
    id: 2,
    title: "Chương trình Đào tạo Chuyên sâu Dầu khí",
    description:
      "Khóa đào tạo chuyên nghiệp về kỹ thuật dầu khí, quản lý dự án năng lượng và phát triển kỹ năng lãnh đạo cho các kỹ sư trẻ.",
    features: [
      "Đào tạo kỹ thuật dầu khí",
      "Quản lý dự án năng lượng",
      "An toàn lao động",
      "Kỹ năng lãnh đạo",
      "Công nghệ mới nhất",
      "Thực hành tại giàn khoan",
    ],
    requirements: [
      "Tốt nghiệp đại học ngành liên quan",
      "Kinh nghiệm làm việc 2+ năm",
      "Tiếng Anh giao tiếp tốt",
      "Sức khỏe đạt yêu cầu",
      "Cam kết làm việc 3 năm",
    ],
    benefits: [
      "Lương cạnh tranh",
      "Bảo hiểm toàn diện",
      "Cơ hội thăng tiến",
      "Đào tạo quốc tế",
      "Môi trường chuyên nghiệp",
    ],
    applicationDeadline: "30/04/2025",
    duration: "6 tháng",
    level: "Sau đại học",
    scholarship: "Có lương",
    status: "open",
    image: admission,
    category: "Đào tạo",
  },
  {
    id: 3,
    title: "Chương trình Thực tập Sinh Quốc tế",
    description:
      "Cơ hội thực tập tại các công ty dầu khí hàng đầu thế giới, trải nghiệm môi trường làm việc quốc tế và học hỏi công nghệ tiên tiến.",
    features: [
      "Thực tập tại nước ngoài",
      "Học hỏi công nghệ mới",
      "Mạng lưới quốc tế",
      "Kỹ năng đa văn hóa",
      "Dự án thực tế",
      "Mentoring từ chuyên gia",
    ],
    requirements: [
      "Sinh viên năm 3-4",
      "Điểm GPA từ 3.5/4.0",
      "Tiếng Anh lưu loát",
      "Kỹ năng làm việc nhóm",
      "Tinh thần học hỏi cao",
    ],
    benefits: [
      "Trợ cấp sinh hoạt",
      "Vé máy bay khứ hồi",
      "Chỗ ở miễn phí",
      "Bảo hiểm du lịch",
      "Chứng chỉ quốc tế",
    ],
    applicationDeadline: "20/02/2025",
    duration: "3-6 tháng",
    level: "Sinh viên",
    scholarship: "Hỗ trợ",
    status: "upcoming",
    image: admission,
    category: "Thực tập",
  },
  {
    id: 4,
    title: "Chương trình Nghiên cứu Sinh Tiến sĩ",
    description:
      "Hỗ trợ nghiên cứu sinh tiến sĩ trong các lĩnh vực dầu khí, năng lượng tái tạo và công nghệ xanh với mức hỗ trợ tài chính hấp dẫn.",
    features: [
      "Nghiên cứu chuyên sâu",
      "Hướng dẫn từ GS đầu ngành",
      "Cơ sở vật chất hiện đại",
      "Hợp tác quốc tế",
      "Công bố khoa học",
      "Bằng tiến sĩ danh giá",
    ],
    requirements: [
      "Thạc sĩ ngành liên quan",
      "Điểm GPA từ 3.7/4.0",
      "IELTS 7.0 hoặc TOEFL 100+",
      "Đề tài nghiên cứu rõ ràng",
      "Thư giới thiệu từ GS",
    ],
    benefits: [
      "Học bổng 15 triệu/tháng",
      "Miễn học phí",
      "Hỗ trợ nghiên cứu",
      "Tham gia hội nghị quốc tế",
      "Cơ hội việc làm cao",
    ],
    applicationDeadline: "10/05/2025",
    duration: "3-4 năm",
    level: "Tiến sĩ",
    scholarship: "Toàn phần",
    status: "open",
    image: admission,
    category: "Nghiên cứu",
  },
];
