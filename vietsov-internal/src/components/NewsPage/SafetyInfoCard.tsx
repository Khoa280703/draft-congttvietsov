import React from "react";

import { PiShieldBold } from "react-icons/pi";

// Icon mũi tên
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
);

const SafetyInfoCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border-1 border-green-500 p-4 font-sans">
      {/* Title */}
      <div className="flex items-center border-b-1 border-green-500 pb-3 mb-4">
        <PiShieldBold className="text-green-500 w-6 h-6" />
        <h3 className="ml-3 font-bold text-gray-800 uppercase tracking-wide text-base">
          Thông tin an toàn
        </h3>
      </div>

      {/* Content */}
      <div className="space-y-2 text-sm">
        <div className="grid grid-cols-10 items-start gap-2">
          <div className="flex items-center text-red-500 font-medium col-span-7">
            <ArrowIcon />
            <span className="ml-2">Ngày xảy ra tai nạn cuối cùng</span>
          </div>
          <div className="text-left col-span-3 font-light">
            <p>150</p>
            <p>Ngày trước</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Row 2 */}
        <div className="grid grid-cols-10 items-start gap-2 ">
          <div className="flex items-center text-red-500 font-medium col-span-7">
            <ArrowIcon />
            <span className="ml-2">Số vụ tai nạn lao động năm 2025</span>
          </div>
          <div className="text-left col-span-3 font-light">
            <p>xx (vụ)</p>
            <p>Giảm 30%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyInfoCard;
