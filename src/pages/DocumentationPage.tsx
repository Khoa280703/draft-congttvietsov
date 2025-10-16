import React, { useEffect, useState } from "react";
import {
  HiX,
  HiCode,
  HiGlobe,
  HiDatabase,
  HiCog,
  HiChevronDown,
  HiChevronRight,
} from "react-icons/hi";
import { MAIN_NAVIGATION_ITEMS, INTERNAL_MENU_ITEMS } from "@/config/menu";

interface DocumentationPageProps {
  onClose: () => void;
}

const DocumentationPage: React.FC<DocumentationPageProps> = ({ onClose }) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    internal: true,
    public: true,
    about: false,
    news: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);
  // Generate route sections from centralized configuration
  const routeSections = {
    internal: {
      title: "Đường dẫn Nội bộ",
      color: "red",
      routes: INTERNAL_MENU_ITEMS.map((item) => ({
        name: item.label,
        path: item.path,
      })),
    },
    public: {
      title: "Đường dẫn Công khai",
      color: "blue",
      routes: MAIN_NAVIGATION_ITEMS.filter(
        (item) => !item.children || item.children.length === 0
      ).map((item) => ({
        name: item.label,
        path: item.path,
      })),
      children: MAIN_NAVIGATION_ITEMS.filter(
        (item) => item.children && item.children.length > 0
      ).reduce(
        (acc, item) => {
          acc[item.id] = {
            title: `Đường dẫn con ${item.label}`,
            parent: { name: item.label, path: item.path },
            routes: item.children!.map((child) => ({
              name: child.title,
              path: child.href,
            })),
          };
          return acc;
        },
        {} as Record<
          string,
          {
            title: string;
            parent: { name: string; path: string };
            routes: Array<{ name: string; path: string }>;
          }
        >
      ),
    },
  };

  const technologies = [
    {
      category: "Framework Frontend",
      items: ["React 18", "TypeScript", "Vite"],
    },
    { category: "Styling", items: ["Tailwind CSS", "React Icons"] },
    { category: "Định tuyến", items: ["React Router v6"] },
    { category: "Công cụ Build", items: ["Vite", "ESLint", "PostCSS"] },
    {
      category: "Phát triển",
      items: ["Hot Module Replacement", "TypeScript Compiler"],
    },
  ];

  const architecture = [
    {
      component: "App.tsx",
      description:
        "Bộ định tuyến ứng dụng chính với chuyển đổi giao diện công khai/nội bộ",
    },
    {
      component: "PublicInterface.tsx",
      description: "Giao diện công khai với điều hướng và định tuyến",
    },
    {
      component: "InternalInterface.tsx",
      description: "Giao diện nội bộ cho nhân viên với nội dung chuyên biệt",
    },
    {
      component: "SidebarNavigation.tsx",
      description:
        "Thành phần điều hướng phổ quát với tìm kiếm và quản lý menu",
    },
    {
      component: "PageWithSidebar.tsx",
      description: "Bao bọc layout cho các trang yêu cầu điều hướng sidebar",
    },
    {
      component: "PageHeader.tsx",
      description:
        "Header trang có thể tái sử dụng với breadcrumbs và hình nền",
    },
  ];

  const features = [
    "Hệ thống Giao diện Kép (Công khai/Nội bộ)",
    "Thiết kế Responsive (Mobile, Tablet, Desktop)",
    "Điều hướng Động với Trạng thái Hoạt động",
    "Điều hướng Breadcrumb",
    "Chức năng Tìm kiếm",
    "Kiến trúc Dựa trên Thành phần",
    "An toàn Kiểu TypeScript",
    "Định tuyến URL Sạch",
    "Cấu trúc Thành phần Mô-đun",
    "Thành phần Layout Có thể Tái sử dụng",
  ];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#098b43] border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <HiCode className="w-6 h-6 mr-2 text-white" />
            Tài liệu Kỹ thuật
          </h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <HiX className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Paths Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <HiGlobe className="w-5 h-5 mr-2 text-green-600" />
              Đường dẫn - Tất cả bao gồm đường dẫn con
            </h2>
            <div className="space-y-6">
              {/* Internal Routes */}
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-3 text-lg">
                  {routeSections.internal.title}
                </h3>
                <div className="space-y-2">
                  {routeSections.internal.routes.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-red-200 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700">
                        {item.name}:
                      </span>
                      <code className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                        {item.path}
                      </code>
                    </div>
                  ))}
                </div>
              </div>

              {/* Public Routes */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3 text-lg">
                  {routeSections.public.title}
                </h3>
                <div className="space-y-2">
                  {routeSections.public.routes.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-blue-200 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700">
                        {item.name}:
                      </span>
                      <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {item.path}
                      </code>
                    </div>
                  ))}
                </div>

                {/* Public Subpaths */}
                {Object.entries(routeSections.public.children).map(
                  ([key, section]) => (
                    <div key={key} className="mt-4">
                      <button
                        onClick={() => toggleSection(key)}
                        className="flex items-center justify-between w-full p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                      >
                        <span className="font-medium text-blue-800">
                          {section.title} ({section.routes.length} routes)
                        </span>
                        {expandedSections[key] ? (
                          <HiChevronDown className="w-5 h-5 text-blue-600" />
                        ) : (
                          <HiChevronRight className="w-5 h-5 text-blue-600" />
                        )}
                      </button>

                      {expandedSections[key] && (
                        <div className="mt-2 ml-4 space-y-1">
                          <div className="flex justify-between items-center py-1 text-sm text-blue-700 bg-blue-50 rounded px-2">
                            <span className="font-medium">
                              {section.parent.name}:
                            </span>
                            <code className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                              {section.parent.path}
                            </code>
                          </div>
                          {section.routes.map(
                            (
                              route: { name: string; path: string },
                              index: number
                            ) => (
                              <div
                                key={index}
                                className="flex justify-between items-center py-1 text-sm border-l-2 border-blue-300 pl-3"
                              >
                                <span className="text-gray-600">
                                  {route.name}:
                                </span>
                                <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                  {route.path}
                                </code>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <HiCog className="w-5 h-5 mr-2 text-purple-600" />
              Công nghệ sử dụng
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    {tech.category}
                  </h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <HiDatabase className="w-5 h-5 mr-2 text-orange-600" />
              Kiến trúc Hệ thống
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-4">
                {architecture.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-800">
                      {item.component}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tính năng chính
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-green-50 rounded-lg p-3"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
            <p>Tài liệu Hệ thống Nội bộ Vietsovpetro</p>
            <p>Được xây dựng với React, TypeScript và Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
