import leader from "@/assets/MrVuMaiKhanh.jpg";

export interface Leader {
  id: number;
  title: string;
  name: string;
  email: string;
  image: string;
  position: string;
  duties: string;
  qualifications: string;
  pastPositions: string[];
}

export interface LeadershipSectionProps {
  leaders?: Leader[];
  className?: string;
}

export const defaultLeaders: Leader[] = [
  {
    id: 1,
    title: "TỔNG GIÁM ĐỐC",
    name: "Ông Vũ Mai Khanh",
    email: "khanhvm.pt@vietsov.com.vn",
    image: leader,
    position: "Tổng giám đốc Liên doanh Việt – Nga Vietsovpetro",
    duties:
      "Trực tiếp lãnh đạo điều hành linh hoạt các hoạt động sản xuất kinh doanh, tài chính của Vietsovpetro và chịu trách nhiệm trước Hội đồng Vietsovpetro về kết quả thực hiện các chỉ tiêu kế hoạch và các chương trình sản xuất, sử dụng hợp lý và hiệu quả phương tiện vật tư, lao động và tiền vốn của Vietsovpetro.",
    qualifications:
      "Kỹ sư Đo lường - Tự động hóa, Thạc sỹ Quản trị kinh doanh EMBA.",
    pastPositions: [
      "Kỹ sư trưởng, Chuyên viên – Xưởng tự động hóa sản xuất, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Chuyên viên chính, Quyền Phó phòng Quản lý chất lượng, Dịch vụ và Dự án Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Quyền Trưởng phòng Tự động hóa sản xuất, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng ban Quản lý các Dự án dịch vụ biển ngoài Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc phụ trách Dịch vụ, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Tiếp thị - Dịch vụ, Bộ máy điều hành Vietsovpetro",
      "Phó Tổng giám đốc Dịch vụ, Liên doanh Việt - Nga Vietsovpetro",
      "Tổng giám đốc, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    id: 2,
    title: "PHÓ TỔNG GIÁM ĐỐC THỨ NHẤT",
    name: "Сараев Олег Петрович",
    email: "saraev@vietsov.com.vn",
    image: leader,
    position: "Phó Tổng giám đốc thứ nhất Liên doanh Việt – Nga Vietsovpetro",
    duties:
      "Tổ chức thực hiện các kế hoạch tìm kiếm thăm dò địa chất, mở rộng vùng hoạt động của Vietsovpetro, nghiên cứu và triển khai các công nghệ mới trong lĩnh vực dầu khí.",
    qualifications:
      "Tiến sĩ Khoa học Địa chất, Chuyên gia cao cấp về thăm dò dầu khí.",
    pastPositions: [
      "Chuyên viên cao cấp, Viện Nghiên cứu Địa chất Dầu khí, Nga",
      "Trưởng phòng Thăm dò, Công ty Dầu khí Quốc gia Nga",
      "Phó Tổng giám đốc Thứ nhất, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    id: 3,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Phạm Xuân Sơn",
    email: "sonpx@vietsov.com.vn",
    image: leader,
    position: "Phó Tổng giám đốc Liên doanh Việt – Nga Vietsovpetro",
    duties:
      "Phụ trách các hoạt động sản xuất, khai thác dầu khí và đảm bảo an toàn lao động tại các mỏ dầu khí của Vietsovpetro.",
    qualifications: "Kỹ sư Khai thác Dầu khí, Thạc sỹ Quản lý Dự án.",
    pastPositions: [
      "Kỹ sư Khai thác, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng ca Khai thác, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Sản xuất, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Tổng giám đốc, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    id: 4,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Yakovenko E.V",
    email: "yakovenko@vietsov.com.vn",
    image: leader,
    position: "Phó Tổng giám đốc Liên doanh Việt – Nga Vietsovpetro",
    duties:
      "Tổ chức thực hiện và thực hiện các kế hoạch, biện pháp tổ chức kỹ thuật về xây dựng cơ bản, khảo sát, sửa chữa và nâng cấp các công trình.",
    qualifications: "Kỹ sư Xây dựng, Tiến sĩ Khoa học Kỹ thuật.",
    pastPositions: [
      "Kỹ sư Xây dựng, Công ty Xây dựng Dầu khí, Nga",
      "Trưởng phòng Kỹ thuật, Công ty Xây dựng Dầu khí, Nga",
      "Phó Tổng giám đốc, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    id: 5,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Mai Đăng Tuấn",
    email: "tuanmd@vietsov.com.vn",
    image: leader,
    position: "Phó Tổng giám đốc Liên doanh Việt – Nga Vietsovpetro",
    duties:
      "Chịu trách nhiệm về các hoạt động tài chính, kế toán và quản lý nguồn nhân lực của Liên doanh.",
    qualifications: "Kế toán viên chuyên nghiệp, Thạc sỹ Quản trị Kinh doanh.",
    pastPositions: [
      "Kế toán viên, Phòng Tài chính, Vietsovpetro",
      "Trưởng phòng Tài chính, Vietsovpetro",
      "Phó Tổng giám đốc, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    id: 6,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Trần Quốc Thắng",
    email: "thangtq@vietsov.com.vn",
    image: leader,
    position: "Phó Tổng giám đốc Liên doanh Việt – Nga Vietsovpetro",
    duties:
      "Tổ chức thực hiện các kế hoạch về tìm kiếm thăm dò địa chất, mở rộng vùng hoạt động của Vietsovpetro.",
    qualifications: "Kỹ sư Địa chất, Tiến sĩ Khoa học Địa chất.",
    pastPositions: [
      "Kỹ sư Địa chất, Viện Nghiên cứu Địa chất, Việt Nam",
      "Trưởng phòng Thăm dò, Vietsovpetro",
      "Phó Tổng giám đốc, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
];
