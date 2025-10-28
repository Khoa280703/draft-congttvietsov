export interface EmployeeOpinionFormData {
  employeeName: string;
  department: string;
  content: string;
  attachment: File | null;
}

export const initialFormData: EmployeeOpinionFormData = {
  employeeName: "",
  department: "",
  content: "",
  attachment: null,
};

export const departments = [
  "Bộ máy điều hành",
  "Phòng Kỹ thuật",
  "Phòng Kinh doanh",
  "Phòng Nhân sự",
  "Phòng Tài chính",
  "Phòng Marketing",
  "Phòng IT",
  "Phòng Hành chính",
  "Phòng Sản xuất",
  "Phòng Chất lượng",
  "Phòng An toàn",
  "Khác",
];
