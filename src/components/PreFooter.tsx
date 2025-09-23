import React from "react";
import VietsopetroLogo from "../assets/vietsovlogogiulua.png";
import { RiArrowDownWideFill } from "react-icons/ri";

const preFooterLinks = [
  {
    title: "Giới thiệu",
    links: [
      "Lịch sử hình thành",
      "Cơ cấu tổ chức",
      "Ban lãnh đạo",
      "Thành tựu nổi bật",
      "Hình ảnh tư liệu",
    ],
  },
  {
    title: "Đơn vị trực thuộc",
    links: [
      "Xí nghiệp khai thác dầu khí",
      "Xí nghiệp vận tải biển",
      "Viện nghiên cứu khoa học",
      "Xí nghiệp cơ điện",
      "Xí nghiệp địa vật lý giếng",
    ],
  },
  {
    title: "Sản phẩm - Dịch vụ",
    links: [
      "Thiết kế các công trình dầu khí",
      "Nghiên cứu thăm dò khai thác",
      "Dịch vụ vận tải biển",
      "Đào tạo nâng bậc thợ",
      "Dịch vụ cung ứng vật tư thiết bị",
    ],
  },
  {
    title: "Dự án - Đối tác",
    links: [
      "Dự án khai thác dầu khí",
      "Phân tích & Thẩm định Mỏ",
      "Thiết kế, mua sắm, xây dựng",
      "Dự án lắp đặt chân đế",
    ],
  },
  {
    title: "Nguồn lực",
    links: ["Nguồn lực nhân sự", "Cơ sở vật chất", "Năng lực tài chính"],
  },
];

const PreFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {preFooterLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-gray-800 mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-green-600 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
