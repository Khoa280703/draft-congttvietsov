export interface EmployeeOpinionFormData {
  employeeName: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  opinionType: string;
  subject: string;
  content: string;
  suggestions: string;
  isAnonymous: boolean;
}

export const initialFormData: EmployeeOpinionFormData = {
  employeeName: "",
  department: "",
  position: "",
  email: "",
  phone: "",
  opinionType: "",
  subject: "",
  content: "",
  suggestions: "",
  isAnonymous: false,
};

export const opinionTypes = [
  { value: "work-environment", label: "Môi trường làm việc" },
  { value: "management", label: "Quản lý và lãnh đạo" },
  { value: "benefits", label: "Phúc lợi và đãi ngộ" },
  { value: "development", label: "Phát triển nghề nghiệp" },
  { value: "communication", label: "Giao tiếp nội bộ" },
  { value: "safety", label: "An toàn lao động" },
  { value: "sustainability", label: "Phát triển bền vững" },
  { value: "other", label: "Khác" },
];

export const departments = [
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
