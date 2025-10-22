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
    <div className="py-8 md:py-16 container mx-auto px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-4">{children}</div>
        <div className="lg:col-span-2">
          <SidebarNavigation activePath={activePath} />
          {sidebarContent && <div className="space-y-4">{sidebarContent}</div>}
        </div>
      </div>
    </div>
  );
};

export default PageWithSidebar;
