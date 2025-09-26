import React, { useState } from "react";
// Import icon mũi tên từ react-icons
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
// Import ảnh (hãy thay đổi đường dẫn này)
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";

// --- Dữ liệu giả lập cho các mốc thời gian ---
const timelineData = [
  {
    year: "2005",
    event: "Sự kiện quan trọng năm 2005...",
  },
  {
    year: "2009",
    event:
      "Chủ tịch nước CHXHCN Việt Nam ký quyết định số 449/QĐ-CTN trao tặng Huân chương Hồ Chí Minh cho Vietsovpetro.",
  },
  {
    year: "2010",
    event: "Sự kiện quan trọng năm 2010...",
  },
  {
    year: "2012",
    event: "Sự kiện quan trọng năm 2012...",
  },
  {
    year: "2016",
    event: "Sự kiện quan trọng năm 2016...",
  },
  {
    year: "2019",
    event: "Sự kiện quan trọng năm 2019...",
  },
];

const HistorySection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState("2009");

  // Tìm kiếm sự kiện tương ứng với năm đã chọn
  const selectedEvent = timelineData.find(
    (item) => item.year === selectedYear
  )?.event;

  return (
    <section className="bg-white font-sans py-12 md:py-12">
      <h1 className="text-3xl md:text-4xl font-medium left-1/10 text-gray-800 mb-8 relative">
        Lịch sử hình thành
      </h1>

      <div className="relative bg-gradient-to-r from-green-600 to-teal-500 text-white p-8 md:p-12 overflow-hidden">
        <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
          <img
            src={hoiNghiSuKien}
            alt="Lễ đón nhận huân chương"
            className="w-2/3 h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Nội dung */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Cột timeline + text */}
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <button className="mb-2 text-white/70 hover:text-white">
                <FiChevronUp size={24} />
              </button>
              <div className="relative text-center">
                {timelineData.map((item) => (
                  <div
                    key={item.year}
                    onClick={() => setSelectedYear(item.year)}
                    className={`
                    cursor-pointer my-2 transition-all duration-300
                    ${
                      selectedYear === item.year
                        ? "font-bold text-xl text-white"
                        : "font-medium text-lg text-white/50 hover:text-white/80"
                    }
                `}
                  >
                    {item.year}
                  </div>
                ))}
              </div>
              <button className="mt-2 text-white/70 hover:text-white">
                <FiChevronDown size={24} />
              </button>
            </div>

            <div className="md:ml-12 flex-grow">
              <p className="text-5xl md:text-3xl font-bold mb-4">
                24/03/{selectedYear}
              </p>
              <p className="leading-relaxed">{selectedEvent}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
