import React, { useState } from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { SIDEBAR_NAVIGATION_ITEMS } from "@/config/menu";

interface SidebarNavigationProps {
  activePath?: string;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  activePath,
}) => {
  const menuItems = SIDEBAR_NAVIGATION_ITEMS.map((item) => ({
    title: item.label,
    href: item.path,
    children: item.children || [],
  }));

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
    <div className="space-y-4 lg:space-y-3 2xl:space-y-4">
      <div className="bg-white border-b border-gray-300">
        <div className="flex items-center space-x-2 p-2 lg:p-1.5 2xl:p-2">
          <input
            type="text"
            placeholder="Search for..."
            className="flex-1 py-2 lg:py-1.5 2xl:py-2 text-sm lg:text-xs 2xl:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 lg:p-1.5 2xl:p-2 text-gray-500 hover:text-gray-700">
            <IoIosSearch className="w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white p-4 lg:p-3 2xl:p-4">
        <nav className="space-y-2 lg:space-y-1.5 2xl:space-y-2">
          {menuItems.map((item, index) => {
            const isParentActive =
              item.children.length > 0 &&
              item.children.some((child) => child.href === activePath);
            return (
              <div key={index}>
                {item.children.length > 0 ? (
                  <button
                    onClick={() => toggleSection(item.href)}
                    className={`w-full text-left py-1 lg:py-0.5 2xl:py-1 text-base lg:text-sm 2xl:text-base flex items-center justify-between ${
                      isParentActive
                        ? "text-green-600 font-medium"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <span>{item.title}</span>
                    <IoIosArrowDown
                      className={`w-4 h-4 lg:w-3.5 lg:h-3.5 2xl:w-4 2xl:h-4 transition-transform ${
                        expandedSections[item.href] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={`w-full text-left py-1 lg:py-0.5 2xl:py-1 text-base lg:text-sm 2xl:text-base flex items-center justify-between ${
                      activePath === item.href
                        ? "text-green-600 font-medium"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <span>{item.title}</span>
                  </a>
                )}

                {expandedSections[item.href] && item.children.length > 0 && (
                  <div className="ml-4 lg:ml-3 2xl:ml-4 mt-2 lg:mt-1.5 2xl:mt-2 space-y-1 lg:space-y-0.5 2xl:space-y-1">
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.href || "#"}
                        className={`block py-1 lg:py-0.5 2xl:py-1 text-sm lg:text-xs 2xl:text-sm ${
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
