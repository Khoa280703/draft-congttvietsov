import React, { useState } from "react";
import { SidebarNavigation } from "@/components";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { SidebarStateContext } from "./PageWithSidebarContext";

interface PageWithSidebarProps {
  children: React.ReactNode;
  activePath?: string;
  sidebarContent?: React.ReactNode;
}

const PageWithSidebar: React.FC<PageWithSidebarProps> = ({
  children,
  activePath,
  sidebarContent,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarStateContext.Provider value={isSidebarOpen}>
      <div className="py-8 md:py-16 lg:py-12 laptop:py-16 fhd:py-20 qhd:py-24 mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
        <div className="flex justify-end pb-4 lg:pb-6">
          <button
            type="button"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:text-vietsov-green hover:border-vietsov-green transition-colors cursor-pointer"
          >
            {isSidebarOpen ? (
              <>
                Thu gọn danh mục
                <HiChevronDoubleLeft className="h-4 w-4" />
              </>
            ) : (
              <>
                Mở danh mục
                <HiChevronDoubleRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        <div
          className={`grid grid-cols-1 gap-8 lg:gap-8 laptop:gap-12 fhd:gap-16 qhd:gap-32 ${
            isSidebarOpen
              ? "lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)]"
              : "lg:grid-cols-1"
          }`}
        >
          <div>{children}</div>
          {isSidebarOpen && (
            <div>
              <SidebarNavigation activePath={activePath} />
              {sidebarContent && (
                <div className="space-y-4 lg:space-y-3 laptop:space-y-4 fhd:space-y-5 qhd:space-y-6">
                  {sidebarContent}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </SidebarStateContext.Provider>
  );
};

export default PageWithSidebar;
