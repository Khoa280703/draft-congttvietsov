import leader from "@/assets/MrVuMaiKhanh.jpg";

export interface Leader {
  id: number;
  image: string;
  title: string;
  name: string;
  email: string;
  position: string;
  duties: string;
  qualifications: string;
  pastPositions: string[];
}

export interface LeadershipPageProps {
  leaders?: Leader[];
  className?: string;
}

export const defaultLeaders: Leader[] = [
  {
    id: 1,
    image: leader,
    title: "TỔNG GIÁM ĐỐC",
    name: "Ông Vũ Mai Khanh",
    email: "khanhvm.ptg@vietsov.com.vn",
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
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC THỨ NHẤT",
    name: "Сараев Олег Петрович",
    email: "saraev@vietsov.com.vn",
    position: "Phó Tổng giám đốc Liên doanh Việt - Nga Vietsovpetro",
    duties:
      "Phụ trách các hoạt động sản xuất, kỹ thuật và phát triển của Liên doanh Việt - Nga Vietsovpetro.",
    qualifications: "Kỹ sư Dầu khí, Tiến sỹ Khoa học Kỹ thuật.",
    pastPositions: [
      "Kỹ sư trưởng, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Kỹ thuật, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Kỹ thuật, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Tổng giám đốc Kỹ thuật, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    id: 3,
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Yakovenko E.V",
    email: "yakovenko@vietsov.com.vn",
    position:
      "Phó Tổng giám đốc Cung ứng vật tư và Vận tải công nghệ Liên doanh Việt - Nga Vietsovpetro",
    duties:
      "Đảm bảo vật tư kỹ thuật cho các hoạt động sản xuất, quản lý chuỗi cung ứng và vận tải công nghệ.",
    qualifications: "Kỹ sư Cơ khí, Thạc sỹ Quản lý Dự án.",
    pastPositions: [
      "Kỹ sư Cơ khí, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Cung ứng, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Cung ứng, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Tổng giám đốc Cung ứng, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    id: 4,
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Mai Đăng Tuấn",
    email: "tuanmd@vietsov.com.vn",
    position: "Phó Tổng giám đốc Liên doanh Việt - Nga Vietsovpetro",
    duties:
      "Phụ trách các hoạt động tài chính, kế toán và quản lý nguồn nhân lực của Liên doanh.",
    qualifications: "Cử nhân Kinh tế, Thạc sỹ Quản trị Kinh doanh.",
    pastPositions: [
      "Kế toán trưởng, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Tài chính, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Tài chính, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Tổng giám đốc Tài chính, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    id: 5,
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Lê Việt Dũng",
    email: "dunglv@vietsov.com.vn",
    position: "Chánh Kỹ sư Liên doanh Việt - Nga Vietsovpetro",
    duties:
      "Triển khai áp dụng các giải pháp công nghệ, kỹ thuật, tổ chức thực hiện kế hoạch nghiên cứu và phát triển.",
    qualifications: "Kỹ sư Địa chất Dầu khí, Tiến sỹ Khoa học Địa chất.",
    pastPositions: [
      "Kỹ sư Địa chất, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Nghiên cứu, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Nghiên cứu, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Chánh Kỹ sư, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    id: 6,
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Phạm Xuân Sơn",
    email: "sonpx@vietsov.com.vn",
    position:
      "Phó Tổng giám đốc Khoan và sửa giếng Liên doanh Việt - Nga Vietsovpetro",
    duties:
      "Quản lý các hoạt động khoan, sửa chữa giếng và bảo trì các công trình khai thác dầu khí.",
    qualifications: "Kỹ sư Khoan Dầu khí, Thạc sỹ Kỹ thuật Dầu khí.",
    pastPositions: [
      "Kỹ sư Khoan, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Khoan, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Khoan, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Tổng giám đốc Khoan, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
];
