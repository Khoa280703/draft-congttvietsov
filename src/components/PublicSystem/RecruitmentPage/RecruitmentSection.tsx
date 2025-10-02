import React from "react";

const jobPostings = [
  {
    id: 1,
    title:
      "Thông báo tuyển chọn sinh viên đi đào tạo đại học ở Liên Bang Nga bằng kinh phí của Vietsovpetro năm học 2024-2025",
    location: "Hồ Chí Minh",
    quantity: 2,
    level: "Đại học",
    salary: "7.000.000 - 12.000.000",
    deadline: "12/10/2024",
    status: "open" as const,
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
    status: "closed" as const,
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
    status: "closed" as const,
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
    status: "closed" as const,
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
    status: "open" as const,
  },
];

const JobCard: React.FC<{ job: (typeof jobPostings)[0]; index: number }> = ({
  job,
  index,
}) => {
  const { title, location, quantity, level, salary, deadline, status } = job;

  return (
    <div className="flex justify-between items-start border-b border-gray-200 p-4 mb-4 bg-white">
      <div className="flex">
        <div className="w-10 h-10 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center font-semibold text-green-600 mr-4">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div>
          <a
            href="#"
            className="font-semibold text-gray-800 hover:text-green-600"
          >
            {title}
          </a>
          <div className="mt-2 space-y-1 text-sm text-gray-500">
            <p>Nơi làm việc: {location}</p>
            <p>Số lượng: {quantity}</p>
            <p>Trình độ: {level}</p>
            <p>Mức lương: {salary}</p>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 ml-6">
        <span
          className={`px-4 py-1.5 rounded-md text-sm font-medium ${
            status === "open"
              ? "bg-gray-100 text-gray-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {deadline}
        </span>
      </div>
    </div>
  );
};

const RecruitmentSection: React.FC = () => {
  return (
    <div className="bg-white font-sans py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Thông tin tuyển dụng
        </h1>
        <div>
          {jobPostings.map((job, i) => (
            <JobCard key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentSection;
