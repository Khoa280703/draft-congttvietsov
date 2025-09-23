import React, { useState } from "react";
// Import các icon cần thiết, ví dụ từ react-icons
import {
  FiGlobe,
  FiServer,
  FiDatabase,
  FiLock,
  FiTrendingUp,
  FiFileText,
  FiLayout,
  FiCalendar,
  FiFilm,
  FiBookOpen,
  FiUsers,
  FiHardDrive,
} from "react-icons/fi";

// Định nghĩa kiểu dữ liệu cho mỗi link
interface LinkItem {
  icon: React.ReactNode;
  text: string;
  href: string;
}

// Dữ liệu cho các link
const appLinks: LinkItem[] = [
  { icon: <FiGlobe />, text: "eOffice", href: "#" },
  { icon: <FiServer />, text: "Svodka", href: "#" },
  { icon: <FiDatabase />, text: "Oracle", href: "#" },
  { icon: <FiLock />, text: "Đổi mật khẩu email", href: "#" },
  { icon: <FiTrendingUp />, text: "Báo cáo khai thác", href: "#" },
  { icon: <FiFileText />, text: "Báo cáo tổng hợp sản xuất", href: "#" },
  { icon: <FiLayout />, text: "Thiết kế lưu đồ", href: "#" },
];

const lookupLinks: LinkItem[] = [
  { icon: <FiCalendar />, text: "Lịch công tác của ban TGĐ", href: "#" },
  { icon: <FiCalendar />, text: "Lịch sự kiện", href: "#" },
  { icon: <FiFilm />, text: "Lịch bay", href: "#" },
  { icon: <FiBookOpen />, text: "Danh bạ VSP", href: "#" },
  { icon: <FiUsers />, text: "Nhansu.vietso.com", href: "#" },
  { icon: <FiHardDrive />, text: "Thiết bị vật tư", href: "#" },
];

const LinkCenterWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState("links"); // 'links' hoặc 'apps'

  return (
    <div className="font-sans">
      {/* Header */}
      <div className="flex justify-between items-center pb-3 mb-4">
        <h3 className="font-bold text-gray-800 uppercase tracking-wide text-base border-b-2 border-green-500 pb-3">
          Trung tâm liên kết
        </h3>
        <a
          href="#"
          className="flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
        >
          Xem thêm
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {/* Cột bên trái: Liên kết / Ứng dụng */}
        <div className="bg-gray-50 rounded-lg p-4">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-4">
            <button
              onClick={() => setActiveTab("links")}
              className={`py-2 px-1 mr-4 text-sm font-semibold transition-colors ${
                activeTab === "links"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              LIÊN KẾT
            </button>
            <button
              onClick={() => setActiveTab("apps")}
              className={`py-2 px-1 text-sm font-semibold transition-colors ${
                activeTab === "apps"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              ỨNG DỤNG
            </button>
          </div>
          {/* Link List */}
          <ul className="space-y-3">
            {appLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className="flex items-center text-gray-700 hover:text-green-600 group"
                >
                  <span className="text-green-600 mr-3 text-lg">
                    {link.icon}
                  </span>
                  <span className="text-sm group-hover:underline">
                    {link.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột bên phải: Tra cứu */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex border-b border-gray-200 mb-4">
            <h4 className="py-2 px-1 text-sm font-semibold text-green-600 border-b-2 border-green-600">
              TRA CỨU
            </h4>
          </div>
          {/* Link List */}
          <ul className="space-y-3">
            {lookupLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className="flex items-center text-gray-700 hover:text-green-600 group"
                >
                  <span className="text-green-600 mr-3 text-lg">
                    {link.icon}
                  </span>
                  <span className="text-sm group-hover:underline">
                    {link.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinkCenterWidget;
