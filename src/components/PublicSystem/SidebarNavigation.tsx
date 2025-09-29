import React, { useState } from "react";

interface SidebarNavigationProps {
  activePath?: string;
  defaultExpanded?: string[];
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  activePath,
  defaultExpanded = ["Đơn vị trực thuộc"],
}) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(
    defaultExpanded.reduce((acc, section) => {
      acc[section] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  const menuItems = [
    {
      title: "Giới thiệu",
      children: [],
    },
    {
      title: "Đơn vị trực thuộc",
      children: [
        {
          title: "Xí nghiệp Khai thác Dầu khí",
          href: "/donvi/xinghiep-khai-thac-dau-khi",
        },
        {
          title:
            "Xí nghiệp Xây lắp, Khảo sát và Sửa chữa các công trình khai thác dầu khí",
          href: "/donvi/xinghiep-xay-lap-khao-sat-sua-chua",
        },
        {
          title: "Xí nghiệp Khai thác các công trình khí",
          href: "/donvi/xinghiep-khai-thac-cong-trinh",
        },
        { title: "Xí nghiệp Khoan", href: "/donvi/xinghiep-khoan" },
        {
          title: "Xí nghiệp Vận tải Biển",
          href: "/donvi/xinghiep-van-tai-bien",
        },
        { title: "Xí nghiệp Cảng", href: "/donvi/xinghiep-cang" },
        { title: "Xí nghiệp Điện", href: "/donvi/xinghiep-dien" },
        {
          title: "Xí nghiệp Nghiên cứu Khoa học",
          href: "/donvi/xinghiep-nghien-cuu-khoa-hoc",
        },
        { title: "Xí nghiệp Y tế", href: "/donvi/xinghiep-y-te" },
        {
          title: "Xí nghiệp Công nghệ Thông tin",
          href: "/donvi/xinghiep-cong-nghe-thong-tin",
        },
        { title: "Xí nghiệp Resort", href: "/donvi/xinghiep-resort" },
        { title: "Xí nghiệp Khách sạn", href: "/donvi/xinghiep-khach-san" },
        { title: "Xí nghiệp Bảo vệ", href: "/donvi/xinghiep-bao-ve" },
        { title: "Xí nghiệp Nhà ở", href: "/donvi/xinghiep-nha-o" },
      ],
    },
    {
      title: "Sản phẩm – dịch vụ",
      children: [],
    },
    {
      title: "Tin tức - Sự kiện",
      children: [],
    },
    {
      title: "Dự án – Đối tác",
      children: [],
    },
    {
      title: "Nguồn lực",
      children: [],
    },
    {
      title: "Tuyển dụng",
      children: [],
    },
    {
      title: "Tuyển sinh",
      children: [],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search for..."
            className="flex-1 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white p-4">
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  item.children.length > 0 && toggleSection(item.title)
                }
                className="w-full text-left text-gray-600 hover:text-gray-800 py-1 flex items-center justify-between"
              >
                <span>{item.title}</span>
                {item.children.length > 0 && (
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedSections[item.title] ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
              {expandedSections[item.title] && item.children.length > 0 && (
                <div className="ml-4 mt-2 space-y-1">
                  {item.children.map((child, childIndex) => (
                    <a
                      key={childIndex}
                      href={child.href}
                      className={`block py-1 text-sm ${
                        activePath === child.href
                          ? "text-green-600 font-medium"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {child.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarNavigation;
