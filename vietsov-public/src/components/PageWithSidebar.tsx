import React from "react";
import { SidebarNavigation } from "@/components";

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
  return (
    <div className="py-8 md:py-16 lg:py-12 laptop:py-16 fhd:py-20 qhd:py-24 mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-16 laptop:gap-24 fhd:gap-32 qhd:gap-40">
        <div className="lg:col-span-4">{children}</div>
        <div className="lg:col-span-2">
          <SidebarNavigation activePath={activePath} />
          {sidebarContent && (
            <div className="space-y-4 lg:space-y-3 inch32:space-y-4">
              {sidebarContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageWithSidebar;
