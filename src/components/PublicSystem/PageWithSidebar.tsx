import React from "react";
import { SidebarNavigation } from "@/components/PublicSystem";

interface PageWithSidebarProps {
  children: React.ReactNode;
  activePath?: string;
}

const PageWithSidebar: React.FC<PageWithSidebarProps> = ({
  children,
  activePath,
}) => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">{children}</div>
        <div className="lg:col-span-1">
          <SidebarNavigation activePath={activePath} />
        </div>
      </div>
    </div>
  );
};

export default PageWithSidebar;
