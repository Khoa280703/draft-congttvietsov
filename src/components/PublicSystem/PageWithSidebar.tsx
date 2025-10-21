import React from "react";
import { SidebarNavigation } from "@/components/PublicSystem";

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
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-4">{children}</div>
        <div className="lg:col-span-2">
          {sidebarContent || <SidebarNavigation activePath={activePath} />}
        </div>
      </div>
    </div>
  );
};

export default PageWithSidebar;
