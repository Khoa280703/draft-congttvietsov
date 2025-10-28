import leaderImage from "@/assets/MrVuMaiKhanh.jpg";

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

export interface LeadershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  leader?: Leader;
}

export const defaultLeader: Leader = {
  id: 1,
  title: "TỔNG GIÁM ĐỐC",
  name: "Ông Vũ Mai Khanh",
  email: "khanhvm.pt@vietsov.com.vn",
  image: leaderImage,
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
};
