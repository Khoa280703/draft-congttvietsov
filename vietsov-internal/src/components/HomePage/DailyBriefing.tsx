import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const briefingItems = [
  {
    date: "5/9/2025",
    time: "12:30:47 AM",
    image: daiHoiDaiBieu,
  },
  {
    date: "4/9/2025",
    time: "12:20:47 AM",
    image: hoiNghiSuKien,
  },
  {
    date: "3/9/2025",
    time: "12:00:00 AM",
    image: hoiNghiPetro,
  },
];

const DailyBriefing: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-sm font-sans">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800 uppercase flex items-center text-base">
          <IoNotificationsOutline className="mr-2 text-green-600 h-5 w-5" />
          Điểm báo hàng ngày
        </h3>
        <a
          href="#"
          className="flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
        >
          Xem thêm <FiChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      {/* List */}
      <ul className="space-y-4">
        {briefingItems.map((item, index) => (
          <li key={index}>
            <a href="#" className="flex items-center space-x-4 group">
              {/* Image Thumbnail */}
              <img
                src={item.image}
                alt={`Điểm báo ngày ${item.date}`}
                className="w-16 h-12 object-cover rounded-lg"
              />
              {/* Text Content */}
              <div>
                <p className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors text-sm">
                  Điểm báo ngày {item.date}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.date} {item.time}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyBriefing;
