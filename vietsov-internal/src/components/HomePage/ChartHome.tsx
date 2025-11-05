import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import ChartImage from "@/assets/bieudokhaithac.png";

const ChartHome: React.FC = () => {
  const [activeTab, setActiveTab] = useState("vsp");

  return (
    <div className="bg-white ">
      <div className="flex justify-between items-center pb-3 mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActiveTab("vsp")}
            className={`text-sm font-bold uppercase transition-colors pb-1 ${
              activeTab === "vsp"
                ? "border-b-2 border-green-600"
                : "hover:text-gray-800 text-xs text-gray-500"
            }`}
          >
            Sản lượng dầu khai thác VSP
          </button>
          <button
            onClick={() => setActiveTab("catam")}
            className={`text-sm font-bold uppercase transition-colors pb-1 ${
              activeTab === "catam"
                ? "border-b-2 border-green-600"
                : "hover:text-gray-800 text-xs text-gray-500"
            }`}
          >
            Sản lượng dầu mỏ cá tầm
          </button>
        </div>
        {/* Xem thêm link */}
        <a
          href="#"
          className="flex items-center text-sm text-green-600 hover:text-green-700 font-medium shrink-0"
        >
          Xem thêm <FiChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      {/* Chart Content */}
      <div>
        <h4 className="font-bold text-gray-800 mb-2">
          ĐỘNG THÁI KHAI THÁC LÔ 09-1
        </h4>
        <img
          src={ChartImage}
          alt="Biểu đồ sản lượng năm 2024"
          className="w-full h-auto"
        />
        <p className="text-center text-sm text-gray-500 mt-2">
          Biểu đồ sản lượng năm 2024
        </p>
      </div>
    </div>
  );
};

export default ChartHome;
