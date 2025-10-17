import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import VietsopetroLogo from "../assets/vietsovlogogiulua.png";
import { RiArrowDownWideFill } from "react-icons/ri";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

// Public interface menu items
const publicPreFooterLinks = [
  {
    title: "GIỚI THIỆU CHUNG",
    links: [
      "Về chúng tôi, lịch sử hình thành",
      "Tầm nhìn sứ mệnh, giá trị cốt lõi",
      "Cơ cấu tổ chức, ban tổng giám đốc",
    ],
  },
  {
    title: "LĨNH VỰC VÀ NĂNG LỰC HOẠT ĐỘNG",
    links: ["Thăm dò, tìm kiếm và KT dầu khí", "Dịch vụ"],
  },
  {
    title: "ĐỐI TÁC VÀ DỰ ÁN",
    links: [],
  },
  {
    title: "PHÁT TRIỂN BỀN VỮNG",
    links: [
      "ATSKMT",
      "Truyền thông VHDN - DNXH",
      "Chuyển đổi số",
      "ESG",
      "Ý kiến người lao động",
    ],
  },
  {
    title: "TIN TỨC SỰ KIỆN",
    links: [
      "Hoạt động SX - KD",
      "Tin Đảng Đoàn thể",
      "Tin dầu khí",
      "Thông cáo báo chí",
      "Thư viện ảnh/video",
    ],
  },
  {
    title: "CÁC NGUỒN LỰC",
    links: [
      "Đào tạo",
      "KHCN",
      "Sáng kiến – sáng chế",
      "Tuyển dụng và tuyển sinh",
    ],
  },
];

// Internal interface menu items
const internalPreFooterLinks = [
  {
    title: "GIỚI THIỆU CHUNG",
    links: [
      "Về chúng tôi, lịch sử hình thành",
      "Tầm nhìn sứ mệnh, giá trị cốt lõi",
      "Cơ cấu tổ chức, ban tổng giám đốc",
    ],
  },
  {
    title: "TIN TỨC SỰ KIỆN",
    links: [
      "Hoạt động SX - KD",
      "Tin Đảng Đoàn thể",
      "Tin dầu khí",
      "Thông cáo báo chí",
      "Thư viện ảnh/video",
    ],
  },
  {
    title: "PHÁT TRIỂN BỀN VỮNG",
    links: [
      "ATSKMT",
      "Truyền thông VHDN - DNXH",
      "Chuyển đổi số",
      "ESG",
      "Ý kiến người lao động",
    ],
  },
  {
    title: "BÁO CÁO",
    links: [
      "Báo cáo tài chính",
      "Báo cáo thường niên",
      "Báo cáo phát triển bền vững",
      "Báo cáo quản trị",
    ],
  },
  {
    title: "ỨNG DỤNG",
    links: [
      "Hệ thống quản lý nội bộ",
      "Portal nhân viên",
      "Hệ thống đào tạo",
      "Quản lý dự án",
    ],
  },
  {
    title: "TRA CỨU",
    links: [
      "Tra cứu thông tin nhân viên",
      "Tra cứu quy định nội bộ",
      "Tra cứu tài liệu",
      "Tra cứu lịch sử hoạt động",
    ],
  },
];

const PreFooter: React.FC = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  // Determine if we're in internal interface based on the path
  const isInternalInterface = location.pathname.startsWith("/internal");

  // Use appropriate menu based on interface
  const preFooterLinks = isInternalInterface
    ? internalPreFooterLinks
    : publicPreFooterLinks;

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <footer className="bg-gray-100 py-12 px-4 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {preFooterLinks.map((column) => {
            const isExpanded = expandedSections[column.title];
            const hasLinks = column.links.length > 0;

            return (
              <div key={column.title}>
                <button
                  onClick={() => hasLinks && toggleSection(column.title)}
                  className="font-bold text-gray-800 mb-4 text-sm uppercase flex items-center hover:text-vietsov-green transition-colors duration-200"
                  disabled={!hasLinks}
                >
                  {column.title}
                  {hasLinks &&
                    (isExpanded ? (
                      <HiChevronUp className="w-4 h-4 ml-2 text-gray-500" />
                    ) : (
                      <HiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                    ))}
                </button>
                {hasLinks && isExpanded && (
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-vietsov-green hover:underline transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {!hasLinks && (
                  <p className="text-sm text-gray-500 italic">
                    Đang cập nhật...
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="border-t border-gray-300 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-10">
            <img
              src={VietsopetroLogo}
              alt="Vietsovpetro Logo"
              className="h-24 w-auto"
            />
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-medium text-base text-gray-800">
                Liên doanh Vietsovpetro
              </p>
              <p>
                105 Lê Lợi, P. Thắng Nhì, TP. Vũng Tàu, Tỉnh Bà Rịa-Vũng Tàu,
                Việt Nam
              </p>
              <p>Email: vspadmin@vietsov.com.vn</p>
              <p>Điện thoại: +84.254.3839871</p>
              <p>Fax: +84.254.3839657</p>
            </div>
          </div>

          <div>
            <button className="flex items-center text-sm text-gray-700 font-medium px-4 py-2 rounded-md">
              Website đơn vị thành viên
              <RiArrowDownWideFill className="w-5 h-5 ml-2 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PreFooter;
