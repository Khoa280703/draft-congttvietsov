import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";

const ProductsServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Sản phẩm - Dịch vụ"
        backgroundImage="/api/placeholder/1920/400"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm - Dịch vụ" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Sản phẩm và Dịch vụ của Vietsovpetro
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Khai thác Dầu khí
              </h3>
              <p className="text-gray-600 mb-4">
                Vietsovpetro chuyên về thăm dò, khai thác và chế biến dầu khí
                tại các mỏ dầu khí ngoài khơi Việt Nam.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Thăm dò địa chất</li>
                <li>Khai thác dầu thô</li>
                <li>Xử lý khí tự nhiên</li>
                <li>Vận chuyển dầu khí</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Dịch vụ Kỹ thuật
              </h3>
              <p className="text-gray-600 mb-4">
                Cung cấp các dịch vụ kỹ thuật chuyên nghiệp trong lĩnh vực dầu
                khí.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Tư vấn kỹ thuật</li>
                <li>Bảo trì thiết bị</li>
                <li>Đào tạo nhân lực</li>
                <li>Nghiên cứu phát triển</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsServicesPage;
