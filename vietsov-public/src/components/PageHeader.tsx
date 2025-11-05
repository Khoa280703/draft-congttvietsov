import React from "react";
import { useLocation } from "react-router-dom";
import { HiChevronRight, HiHome } from "react-icons/hi";

interface ImageModule {
  src: string;
  height?: number;
  width?: number;
  blurDataURL?: string;
}
interface PageHeaderProps {
  title?: string;
  backgroundImage?: ImageModule | string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  backgroundImage,
  breadcrumbs,
}) => {
  const location = useLocation();

  const getPageName = (pathname: string): string => {
    const pathMap: { [key: string]: string } = {
      "/gioithieu/ban-lanh-dao": "Ban lãnh đạo",
      "/tintuc/hoat-dong-sx-kd": "Hoạt động SX - KD",
      "/tintuc/hoat-dong-doan-the": "Hoạt động đoàn thể",
      "/tintuc/tin-dau-khi": "Tin dầu khí",
      "/tintuc/thong-cao-bao-chi": "Thông cáo báo chí",
      "/tintuc/thu-vien-anh-video": "Thư viện ảnh/video",
      "/doitac-duan/du-an": "Dự án",
      "/phattrien/y-kien-nguoi-lao-dong": "Ý kiến người lao động",
      "/phattrien/atskmt": "An toàn sức khoẻ môi trường",
      "/phattrien/truyen-thong-vhdn-hdxh": "Truyền thông VHDN/HDXH",
      "/phattrien/chuyen-doi-so": "Chuyển đổi số",
      "/cacnguonchung/dao-tao": "Đào tạo",
      "/cacnguonchung/khcn": "Khoa học - công nghệ",
      "/cacnguonchung/sang-kien-sang-che": "Sáng kiến - sáng chế",
      "/cacnguonchung/tuyen-dung-va-tuyen-sinh": "Tuyển dụng và tuyển sinh",
    };

    return pathMap[pathname] || title || "";
  };

  const pageName = getPageName(location.pathname);
  const defaultBreadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: pageName },
  ];

  const finalBreadcrumbs = breadcrumbs || defaultBreadcrumbs;
  const bgUrl =
    typeof backgroundImage === "string"
      ? backgroundImage
      : backgroundImage?.src;
  return (
    <div className="relative">
      <div
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a3a6e]/80 to-[#4e9a5a]/80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 text-sm text-white mb-4">
              <HiHome className="w-4 h-4" />
              {finalBreadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <HiChevronRight className="w-4 h-4" />}
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="hover:text-green-300 transition-colors cursor-pointer"
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

            <h1 className="text-4xl font-bold text-white">{pageName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
