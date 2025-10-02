import React, { useState } from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";

interface SidebarNavigationProps {
  activePath?: string;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  activePath,
}) => {
  const menuItems = [
    {
      title: "Giới thiệu",
      href: "/gioithieu",
      children: [
        {
          title: "Lịch sử hình thành",
          href: "/gioithieu/lich-su-hien-tai",
        },
        {
          title: "Cơ cấu tổ chức",
          href: "/gioithieu/co-cau-to-chuc",
        },
        {
          title: "Ban lãnh đạo",
          href: "/gioithieu/ban-lanh-dao",
        },
        {
          title: "Thành tựu nổi bật",
          href: "/gioithieu/thanh-tuc-noi-bat",
        },
      ],
    },
    {
      title: "Đơn vị trực thuộc",
      href: "/donvi",
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
      href: "/spvadichvu",
      children: [],
    },
    {
      title: "Tin tức - Sự kiện",
      href: "/tintuc",
      children: [
        {
          title: "Hoạt động đoàn thể",
          href: "/tintuc/hoat-dong-doan-the",
        },
      ],
    },
    {
      title: "Dự án – Đối tác",
      href: "/duan-doitac",
      children: [],
    },
    {
      title: "Nguồn lực",
      href: "/nguonluc",
      children: [],
    },
    {
      title: "Tuyển dụng",
      href: "/tuyendung",
      children: [],
    },
    {
      title: "Tuyển sinh",
      href: "/tuyensinh",
      children: [],
    },
  ];

  // LOGIC ĐÃ SỬA: Tính toán trạng thái mở rộng ban đầu dựa trên activePath
  const getInitialExpandedState = () => {
    const initialState: Record<string, boolean> = {};
    if (activePath) {
      const parent = menuItems.find((item) =>
        item.children.some((child) => child.href === activePath)
      );
      if (parent) {
        initialState[parent.href] = true;
      }
    }
    return initialState;
  };

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(getInitialExpandedState());

  const toggleSection = (sectionHref: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionHref]: !prev[sectionHref],
    }));
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border-b border-gray-300">
        <div className="flex items-center space-x-2 p-2">
          <input
            type="text"
            placeholder="Search for..."
            className="flex-1 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <IoIosSearch className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white p-4">
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const isParentActive =
              item.children.length > 0 &&
              item.children.some((child) => child.href === activePath);
            return (
              <div key={index}>
                {item.children.length > 0 ? (
                  <button
                    onClick={() => toggleSection(item.href)}
                    className={`w-full text-left py-1 flex items-center justify-between ${
                      isParentActive
                        ? "text-green-600 font-medium"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <span>{item.title}</span>
                    <IoIosArrowDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections[item.href] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={`w-full text-left py-1 flex items-center justify-between ${
                      activePath === item.href
                        ? "text-green-600 font-medium"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <span>{item.title}</span>
                  </a>
                )}

                {expandedSections[item.href] && item.children.length > 0 && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.href || "#"}
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
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SidebarNavigation;
