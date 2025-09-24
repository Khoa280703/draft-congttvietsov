import React from "react";
import { IoTrendingUpOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

const BreakingNewsTicker: React.FC = () => {
  return (
    <div className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center shrink-0">
            <IoTrendingUpOutline className="w-5 h-5 mr-2" />
            <span className="font-bold uppercase">Tin hot</span>
          </div>

          <div className="flex-grow truncate flex items-center">
            <BsDot className="w-5 h-5 text-white" />
            <a href="#" className="hover:underline">
              Petrovietnam - Góp ý dự án Luật Năng lượng tái tạo, năng lượng mới
            </a>
            <BsDot className="w-5 h-5 text-white" />
            <a href="#" className="hover:underline">
              Đoàn sinh viên Trường Đại học Bách khoa - Đại học Qu...
            </a>
          </div>

          <div className="flex items-center space-x-1 shrink-0">
            <button className="p-1 rounded-full hover:bg-white/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="p-1 rounded-full hover:bg-white/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
