export interface JobPosting {
  id: number;
  title: string;
  location: string;
  quantity: number;
  level: string;
  salary: string;
  deadline: string;
  status: "open" | "closed";
}

export const jobPostings: JobPosting[] = [
  {
    id: 1,
    title:
      "Thông báo tuyển chọn sinh viên đi đào tạo đại học ở Liên Bang Nga bằng kinh phí của Vietsovpetro năm học 2024-2025",
    location: "Hồ Chí Minh",
    quantity: 2,
    level: "Đại học",
    salary: "7.000.000 - 12.000.000",
    deadline: "12/10/2024",
    status: "open",
  },
  {
    id: 2,
    title:
      "Thông báo tuyển chọn sinh viên đi đào tạo đại học ở Liên Bang Nga bằng kinh phí của Vietsovpetro năm học 2024-2025",
    location: "Hồ Chí Minh",
    quantity: 2,
    level: "Đại học",
    salary: "7.000.000 - 12.000.000",
    deadline: "Hết hạn",
    status: "closed",
  },
  {
    id: 3,
    title:
      "Thông báo tuyển chọn sinh viên đi đào tạo đại học ở Liên Bang Nga bằng kinh phí của Vietsovpetro năm học 2024-2025",
    location: "Hồ Chí Minh",
    quantity: 2,
    level: "Đại học",
    salary: "7.000.000 - 12.000.000",
    deadline: "Hết hạn",
    status: "closed",
  },
  {
    id: 4,
    title:
      "Thông báo tuyển chọn sinh viên đi đào tạo đại học ở Liên Bang Nga bằng kinh phí của Vietsovpetro năm học 2024-2025",
    location: "Hồ Chí Minh",
    quantity: 2,
    level: "Đại học",
    salary: "7.000.000 - 12.000.000",
    deadline: "Hết hạn",
    status: "closed",
  },
  {
    id: 5,
    title:
      "Thông báo tuyển chọn sinh viên đi đào tạo đại học ở Liên Bang Nga bằng kinh phí của Vietsovpetro năm học 2024-2025",
    location: "Hồ Chí Minh",
    quantity: 2,
    level: "Đại học",
    salary: "7.000.000 - 12.000.000",
    deadline: "12/10/2024",
    status: "open",
  },
];
