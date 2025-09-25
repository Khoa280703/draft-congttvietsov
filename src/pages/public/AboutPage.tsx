import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Giới thiệu"
        backgroundImage="/api/placeholder/1920/400"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Giới thiệu" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Giới thiệu về Vietsovpetro
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Vietsovpetro là liên doanh dầu khí Việt - Nga, được thành lập năm
              1981, là một trong những liên doanh dầu khí thành công nhất tại
              Việt Nam.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Với hơn 40 năm kinh nghiệm trong lĩnh vực thăm dò, khai thác dầu
              khí, Vietsovpetro đã đóng góp đáng kể vào sự phát triển của ngành
              dầu khí Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
