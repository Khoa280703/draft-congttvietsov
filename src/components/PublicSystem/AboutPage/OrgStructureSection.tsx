import React from "react";
// Import icon mũi tên từ react-icons
import { FiArrowRight } from "react-icons/fi";
// Import OrganizationStructure component
import OrganizationStructure from "@/components/PriviteSystem/AboutPage/OrganizationStructure";

const OrgStructureSection: React.FC = () => {
  return (
    <section
      id="org-structure"
      className="bg-[#F0F7F2] font-sans py-12 md:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-4xl font-medium left-1/10 text-gray-800 mb-6 leading-tight">
          Cơ cấu tổ chức
        </h1>{" "}
        <div className="grid grid-cols-1 gap-8 md:gap-16">
          <div className="text-gray-700">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hiện tại,{" "}
                <span className="font-bold text-vietsov-green text-xl">
                  Vietsovpetro
                </span>{" "}
                có cơ cấu tổ chức gồm Bộ máy điều hành với 18 phòng ban và 18
                đơn vị trực thuộc.
              </p>
              <p>
                Đội ngũ cán bộ công nhân viên Vietsovpetro có trình độ chuyên
                môn, tay nghề cao, giàu kinh nghiệm, đủ năng lực đảm đương toàn
                bộ từ khâu tìm kiếm, thăm dò đến khai thác và xuất khẩu dầu thô,
                không chỉ cho riêng Vietsovpetro, mà còn có khả năng cung cấp
                dịch vụ cho các công ty dầu khí khác trong và ngoài nước.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center font-semibold mt-8 hover:text-vietsov-green transition-colors"
            >
              Xem thêm
              <FiArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="w-full">
            <OrganizationStructure />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgStructureSection;
