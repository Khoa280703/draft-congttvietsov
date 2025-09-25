import React from "react";
import { HiChevronRight, HiHome } from "react-icons/hi";

interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  backgroundImage = "/api/placeholder/1920/400",
  breadcrumbs = [{ label: "Trang chủ", href: "/" }, { label: title }],
}) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="relative h-64 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 text-sm text-white mb-4">
              <HiHome className="w-4 h-4" />
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <HiChevronRight className="w-4 h-4" />}
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="hover:text-green-300 transition-colors"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-green-300 font-medium">
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* Page Title */}
            <h1 className="text-4xl font-bold text-white">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
